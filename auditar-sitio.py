#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Auditoría de estructura y datos de calculatujubilacion.es (solo lectura).

Uso:  python3 auditar-sitio.py [--max N] [--salida auditorias/AAAA-MM-DD.md]

No modifica nada del sitio. Cada hallazgo lleva su evidencia (archivo / dato).
Solo mira cosas objetivas (duplicados, campos vacíos, enlaces rotos, huérfanas,
sitemap, FAQ/embeddings). NO opina sobre contenido legal.
"""
import json, re, sys, os, glob, collections, html
from urllib.parse import urlparse, unquote

RAIZ = os.path.dirname(os.path.abspath(__file__))
os.chdir(RAIZ)
MAX = 12
SALIDA = None
a = sys.argv[1:]
if '--max' in a: MAX = int(a[a.index('--max') + 1])
if '--salida' in a: SALIDA = a[a.index('--salida') + 1]
DOM = 'https://calculatujubilacion.es'
# Redirecciones 301 hechas en Cloudflare (no están en el repo): origen -> destino
REDIRECCIONES = {'/jubilacion-conductores/': '/jubilacion-transportistas/'}
# Calculadoras genéricas que no van en el hub a propósito
SIN_HUB_OK = {'jubilacion-ordinaria', 'jubilacion-discapacidad', 'jubilacion-autonomos'}

hallazgos = []  # (gravedad, titulo, [lineas])
def hall(grav, titulo, lineas):
    if lineas:
        hallazgos.append((grav, titulo, list(lineas)))

def leer(p):
    with open(p, encoding='utf-8', errors='replace') as f:
        return f.read()

# ---------- carga ----------
t = leer('hub-profesiones.js')
hub = json.loads(t[t.index('['):t.rindex(']') + 1])
paginas = sorted(glob.glob('*.html') + glob.glob('*/index.html') + glob.glob('*/*.html'))
paginas = [p for p in paginas if not p.startswith(('documentos/', 'node_modules/'))]
txt = {p: leer(p) for p in paginas}

def ruta_a_archivo(ruta):
    """Ruta interna ('/x/', '/x.html', '/x') -> archivo existente o None."""
    ruta = unquote(ruta.split('#')[0].split('?')[0])
    if ruta in ('', '/'): return 'index.html'
    r = ruta.lstrip('/')
    for c in (r, r + '.html', r.rstrip('/') + '/index.html', os.path.join(r, 'index.html')):
        if os.path.isfile(c): return c
    return None

# ---------- 1. HUB ----------
c = collections.Counter(e['slug'] for e in hub)
hall('ERROR', 'Hub: slug repetido', [f'{s} ×{n}' for s, n in c.items() if n > 1])
c = collections.Counter(e['nombre'].strip().lower() for e in hub)
hall('AVISO', 'Hub: nombre repetido', [f'{n} ×{k}' for n, k in c.items() if k > 1])
falt = []
for e in hub:
    if e.get('propia'): continue
    for k in ('categoria', 'color', 'cotizacion', 'alias'):
        if not e.get(k): falt.append(f"{e['slug']}: falta «{k}»")
    if e.get('cotizacion') and e['cotizacion'] not in ('Empleado', 'Autónomo', 'Mixto'):
        falt.append(f"{e['slug']}: cotizacion rara «{e['cotizacion']}»")
hall('ERROR', 'Hub: fichas genéricas con campos vacíos', falt)

sin_dir = []
for e in hub:
    s = e['slug']
    if not (os.path.isfile(f'jubilacion-{s}/index.html') or os.path.isfile(f'{s}/index.html')):
        sin_dir.append(f"{s} ({e['nombre']}): no existe /{s}/ ni /jubilacion-{s}/")
hall('ERROR', 'Hub: entradas sin página', sin_dir)

slugs_hub = {e['slug'] for e in hub}
fichas = [d.rstrip('/') for d in glob.glob('jubilacion-*/')]
fuera = [d for d in fichas if d[len('jubilacion-'):] not in slugs_hub and d not in SIN_HUB_OK]
hall('AVISO', 'Fichas jubilacion-* sin entrada en el hub (no salen en el buscador)', fuera)

# alias que están en dos fichas distintas (confunde el buscador)
al = collections.defaultdict(set)
for e in hub:
    for x in re.split(r',\s*', e.get('alias') or ''):
        x = x.strip().lower()
        if len(x) > 2: al[x].add(e['slug'])
hall('INFO', 'Alias repetidos en varias profesiones (revisar solo si el alias debería ir a una)',
     sorted(f"«{k}» → {', '.join(sorted(v))}" for k, v in al.items() if len(v) > 1))

# ---------- 2. SITEMAP ----------
sm = leer('sitemap.xml')
locs = re.findall(r'<loc>([^<]+)</loc>', sm)
cl = collections.Counter(locs)
hall('ERROR', 'Sitemap: URL repetida', [f'{u} ×{n}' for u, n in cl.items() if n > 1])
rotas = []
for u in locs:
    if not u.startswith(DOM): rotas.append(f'{u}: dominio distinto'); continue
    if not ruta_a_archivo(urlparse(u).path) and urlparse(u).path not in REDIRECCIONES: rotas.append(f'{u}: no existe')
hall('ERROR', 'Sitemap: URLs que no existen', rotas)
en_sm = {urlparse(u).path.rstrip('/') for u in locs}
no_sm = [d for d in fichas if f'/{d}' not in en_sm]
hall('ERROR', 'Fichas jubilacion-* que faltan en el sitemap', no_sm)
cats = [p for p in glob.glob('categoria-*.html') if '/' + p not in en_sm]
hall('AVISO', 'Categorías que faltan en el sitemap', cats)

# ---------- 3. SEO por página ----------
def og(h, pat):
    m = re.search(pat, h, re.S | re.I)
    return html.unescape(m.group(1)).strip() if m else None
titulos = collections.defaultdict(list); metas = collections.defaultdict(list)
sin_title, sin_meta, h1_mal, canon_mal, largos = [], [], [], [], []
for p, h in txt.items():
    if p in ('404.html',) or p.startswith('documentos'): continue
    ti = og(h, r'<title>(.*?)</title>'); me = og(h, r'<meta\s+name="description"\s+content="([^"]*)"')
    cn = og(h, r'<link\s+rel="canonical"\s+href="([^"]*)"')
    n1 = len(re.findall(r'<h1[\s>]', h))
    if not ti: sin_title.append(p)
    else:
        titulos[ti].append(p)
        if len(ti) > 70: largos.append(f'{p}: title {len(ti)} car.')
    if not me: sin_meta.append(p)
    else:
        metas[me].append(p)
        if len(me) > 175: largos.append(f'{p}: meta {len(me)} car.')
    if n1 != 1: h1_mal.append(f'{p}: {n1} H1')
    if cn:
        esp = DOM + '/' + (p[:-len('index.html')] if p.endswith('/index.html') else p)
        esp = esp.replace(DOM + '//', DOM + '/')
        if p == 'index.html': esp = DOM + '/'
        if cn != esp and cn.rstrip('/') != esp.rstrip('/'): canon_mal.append(f'{p}: canonical {cn}')
    else: canon_mal.append(f'{p}: sin canonical')
hall('ERROR', 'Páginas sin <title>', sin_title)
hall('AVISO', 'Páginas sin meta description', sin_meta)
hall('AVISO', '<title> idéntico en varias páginas', [f'«{k[:70]}» → {", ".join(v[:4])}' for k, v in titulos.items() if len(v) > 1])
hall('AVISO', 'meta description idéntica en varias páginas', [f'«{k[:60]}…» → {", ".join(v[:4])}' for k, v in metas.items() if len(v) > 1])
hall('AVISO', 'Páginas con 0 o varios H1', h1_mal)
hall('AVISO', 'Canonical ausente o que no coincide con la URL', canon_mal)
hall('INFO', 'Títulos >70 o descripciones >175 caracteres (se cortan en Google)', largos)

# ---------- 4. ENLACES INTERNOS ----------
rot_link, rot_anc = [], []
entrantes = collections.Counter()
ids_cache = {}
def ids_de(arch):
    if arch not in ids_cache:
        ids_cache[arch] = set(re.findall(r'\bid="([^"]+)"', txt.get(arch) or leer(arch)))
    return ids_cache[arch]
for p, h in txt.items():
    cuerpo = re.sub(r'<script.*?</script>', '', h, flags=re.S)
    for m in re.finditer(r'<a\s[^>]*?href="([^"]+)"', cuerpo):
        href = html.unescape(m.group(1)).strip()
        if href.startswith(('mailto:', 'tel:', 'javascript:', 'data:', 'sms:')): continue
        if href.startswith('#'):
            if href[1:] and href[1:] not in ids_de(p): rot_anc.append(f'{p}: {href}')
            continue
        if href.startswith('http'):
            if not href.startswith(DOM): continue
            href = urlparse(href).path + ('#' + urlparse(href).fragment if urlparse(href).fragment else '')
        if not href.startswith('/'):
            base = os.path.dirname(p)
            href = '/' + os.path.normpath(os.path.join(base, href)).replace('\\', '/')
        dest = ruta_a_archivo(href)
        if not dest and href.split('#')[0] in REDIRECCIONES: continue
        if not dest: rot_link.append(f'{p}: {href}'); continue
        if dest != p: entrantes[(dest, p)] += 1
        if '#' in href:
            fr = href.split('#', 1)[1]
            if fr and fr not in ids_de(dest): rot_anc.append(f'{p}: {href}')
hall('ERROR', 'Enlaces internos rotos (la página no existe)', sorted(set(rot_link)))
hall('AVISO', 'Enlaces a un ancla (#...) que no existe en la página destino', sorted(set(rot_anc)))

# huérfanas: ficha sin ningún enlace desde otra ficha de profesión
rec = collections.defaultdict(set)
for (dest, orig), n in entrantes.items(): rec[dest].add(orig)
huerf, poco = [], []
for d in fichas:
    arch = d + '/index.html'
    desde = {o for o in rec.get(arch, ()) if o.startswith('jubilacion-')}
    if not desde: huerf.append(d)
    elif len(desde) == 1: poco.append(f'{d} ← {next(iter(desde))}')
hall('AVISO', 'Fichas que ninguna otra ficha enlaza (solo las ve quien llega por categoría o buscador)', huerf)
hall('INFO', 'Fichas enlazadas desde una sola ficha hermana', poco)

# ---------- 5. IMÁGENES ----------
sin_img = []
for p, h in txt.items():
    for m in re.finditer(r'<img\s[^>]*?src="([^"]+)"', h):
        s = html.unescape(m.group(1))
        if s.startswith(('http', 'data:')): continue
        if not ruta_a_archivo(s) and not os.path.isfile(s.lstrip('/')):
            sin_img.append(f'{p}: {s}')
hall('ERROR', 'Imágenes que no existen', sorted(set(sin_img)))

# ---------- 6. FAQ y embeddings ----------
fs = json.load(open('faqs-source.json', encoding='utf-8'))
ids = [e['id'] for e in fs]
ci = collections.Counter(ids)
hall('ERROR', 'faqs-source: ids repetidos', [f'{i} ×{n}' for i, n in ci.items() if n > 1])
mal_url = sorted({f"{e['id']}: {e['url']}" for e in fs if e.get('url') and not ruta_a_archivo(e['url']) and e['url'] not in REDIRECCIONES})
hall('ERROR', 'faqs-source: url de FAQ que no existe', mal_url)
redir = collections.Counter(e['url'] for e in fs if e.get('url') in REDIRECCIONES)
hall('INFO', 'FAQ que apuntan a una URL con redirección 301 (mejor apuntar al destino)', [f'{u} → {REDIRECCIONES[u]}: {n} FAQ' for u, n in redir.items()])
mal_cal = sorted({e['calculadora_url'] for e in fs if e.get('calculadora_url') and not ruta_a_archivo(e['calculadora_url'])})
hall('ERROR', 'faqs-source: calculadora_url que no existe', mal_cal)
emb = json.load(open('embeddings-compacto.json', encoding='utf-8'))
ie = {e['id'] for e in emb}; isf = set(ids)
hall('ERROR', 'FAQ sin embedding (el asistente no las encuentra)', sorted(isf - ie))
hall('AVISO', 'Embeddings de FAQ que ya no existen en faqs-source', sorted(ie - isf))
cam = [f"{e['id']}" for e in emb if e['id'] in isf and e['pregunta'] != next((f['pregunta'] for f in fs if f['id'] == e['id']), None)]
hall('AVISO', 'Embedding con pregunta distinta a la de faqs-source (hay que regenerarlo)', cam)
# fichas sin ninguna FAQ en faqs-source
con_faq = {urlparse(e['url']).path.strip('/') for e in fs if e.get('url')}
hall('INFO', 'Fichas jubilacion-* sin FAQ en faqs-source', [d for d in fichas if d not in con_faq])

# ---------- salida ----------
orden = {'ERROR': 0, 'AVISO': 1, 'INFO': 2}
hallazgos.sort(key=lambda x: orden[x[0]])
out = []
n_err = sum(1 for g, *_ in hallazgos if g == 'ERROR')
out.append(f'# Auditoría del sitio ({len(paginas)} páginas, {len(hub)} entradas en el hub, {len(fichas)} fichas)')
out.append('')
out.append(f'{n_err} apartados con errores · {sum(1 for g,*_ in hallazgos if g=="AVISO")} con avisos · '
           f'{sum(1 for g,*_ in hallazgos if g=="INFO")} informativos')
out.append('')
if not hallazgos: out.append('Sin hallazgos.')
for g, ti, ls in hallazgos:
    out.append(f'## [{g}] {ti} — {len(ls)}')
    for l in ls[:MAX]: out.append(f'- {l}')
    if len(ls) > MAX: out.append(f'- … y {len(ls) - MAX} más (usa --max)')
    out.append('')
res = '\n'.join(out)
print(res)
if SALIDA:
    os.makedirs(os.path.dirname(SALIDA) or '.', exist_ok=True)
    open(SALIDA, 'w', encoding='utf-8').write(res)
sys.exit(1 if n_err else 0)
