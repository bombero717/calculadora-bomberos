#!/usr/bin/env python3
"""
Verificador de fichas para calculatujubilacion.es
==================================================

Automatiza los puntos MECÁNICOS del checklist de verificación de fichas
(los números entre corchetes, [15], [16]…, son los del checklist numerado
del 1 al 61). Lo que no se puede automatizar (verdad legal, lectura
completa, comparar el diseño a ojo, enseñarle la ficha al usuario) se
imprime al final como "A MANO".

USO (desde la raíz del sitio, junto a index.html):

    python3 verificar-ficha.py jubilacion-lavacoches \
        --palabras "lavacoches,limpiador de vehículos" \
        --fuente faqs_limpiadores_vehiculos_lavacoches.md \
        --navegador

    python3 verificar-ficha.py --contadores     # audita TODOS los contadores
    python3 verificar-ficha.py --git            # archivos tocados sin commitear

OPCIONES
  --palabras   nombres populares de la profesión (separados por comas) que
               deben salir en title, description, H1, miga y 1.er párrafo.
  --fuente     archivo .md del usuario: se compara pregunta a pregunta y se
               buscan las cifras de la ficha en él (trazabilidad).
  --navegador  capturas de página entera a 390/768/1280 px (necesita
               playwright; se guardan en /tmp/verificar-ficha/).
  --contadores audita los contadores de TODAS las categorías y de la home.

Código de salida: 1 si hay algún ✘ (error); los ⚠ son avisos a revisar.
Solo usa la librería estándar (playwright es opcional).
"""
import argparse, difflib, functools, glob, html, http.server, json, os, re, subprocess, sys, threading

ROOT = os.path.dirname(os.path.abspath(__file__))
SITE = 'https://calculatujubilacion.es'
ERR = 0
WARN = 0

# Cifras y normas "estándar del sitio" (checklist punto 8): no hace falta
# que estén en el archivo del usuario para considerarlas trazadas.
ESTANDAR = {
    '5.101,20', '3.359,60', '47.034,40', '0,90%', '0,75', '0,15', '17.094', '36,90',
    '45%', '55%', '65%', '80%', '100%', '33%', '15%', '25%', '4%', '30%', '50%',
    'RD416/2026', 'RDL11/2024', 'RDL2/2023', 'RDL13/2022', 'RD402/2025', 'RD241/2026',
    'OrdenPJC/1146/2025', 'RD1299/2006', 'RD487/1997', 'RD2177/2004',
    '1,15%', '1,25%', '1,46%', '9.442', '11.013', '54%', 'OrdenISM/386/2024', 'DA52ª',
}
NEUTROS = {'slate', 'gray', 'zinc', 'neutral', 'stone'}
FAMILIAS = 'red|rose|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink'


def ok(m, n=''):
    print(f'  ✔ {m}' + (f'  [{n}]' if n else ''))


def err(m, n=''):
    global ERR
    ERR += 1
    print(f'  ✘ {m}' + (f'  [{n}]' if n else ''))


def warn(m, n=''):
    global WARN
    WARN += 1
    print(f'  ⚠ {m}' + (f'  [{n}]' if n else ''))


def leer(p):
    with open(os.path.join(ROOT, p), encoding='utf-8') as f:
        return f.read()


def texto(h):
    h = re.sub(r'<script.*?</script>|<style.*?</style>', ' ', h, flags=re.S)
    h = re.sub(r'<[^>]+>', ' ', h)
    return re.sub(r'\s+', ' ', html.unescape(h)).strip()


def norm(s):
    return re.sub(r'[^a-z0-9áéíóúñü%,./]+', '', s.lower())


def categoria_de(slug):
    for c in sorted(glob.glob(os.path.join(ROOT, 'categoria-*.html'))):
        if f'href="/{slug}/"' in open(c, encoding='utf-8').read():
            return os.path.basename(c)
    return None


def color_categoria(catfile, slug):
    h = leer(catfile)
    i = h.find(f'href="/{slug}/"')
    m = re.search(r'border-(\w+)-600', h[i:i + 400])
    return m.group(1) if m else None


# ------------------------------------------------------------------ fichas
def preguntas_fuente(path):
    qs = []
    for l in open(path, encoding='utf-8'):
        m = re.match(r'^#{2,4}\s*\d+\.\s*(¿.*\?)\s*$', l.strip())
        if m:
            qs.append(m.group(1))
    return qs


def verificar_ficha(slug, palabras, fuente, navegador):
    carpeta = slug.strip('/')
    p = f'{carpeta}/index.html'
    if not os.path.exists(os.path.join(ROOT, p)):
        err(f'No existe {p}')
        return
    h = leer(p)
    t = texto(h)
    nombre_corto = carpeta.replace('jubilacion-', '')
    print(f'\n=== {carpeta} ===')

    # ---- Comparación / diseño
    print('\n[Diseño y formato]')
    # La calculadora es el mayor valor de la página: no puede quedar enterrada
    mm = h.find('<main')
    cc = h.find('Calcula tu jubilación', mm) if mm >= 0 else -1
    if cc < 0:
        err('No se encuentra el bloque de la calculadora ("Calcula tu jubilación")', 62)
    else:
        n_antes = len(re.findall(r'<p[ >]|<li[ >]', h[mm:cc]))
        if n_antes > 2:
            err(f'La calculadora queda tras {n_antes} párrafos/viñetas: debe ir tras el 1.º o 2.º como máximo', 62)
        else:
            ok(f'Calculadora visible: tras {n_antes} párrafo(s)', 62)
        if n_antes <= 2:
            if 'border-l-4' in h[mm:cc]:
                ok('Primera sección: párrafo + recuadro resaltado antes de la calculadora', 63)
            else:
                warn('Falta el recuadro resaltado entre el primer párrafo y la calculadora (formato bordadoras/sastres)', 63)
    cat = categoria_de(carpeta)
    if not cat:
        err('La ficha no aparece en ninguna página de categoría', 26)
        cat_color = None
    else:
        cat_color = color_categoria(cat, carpeta)
        ok(f'Categoría: {cat} · color de sus tarjetas: {cat_color}', 26)
    m = re.search(r'<header[^>]*border-b-4 border-(\w+)-600', h)
    banda = m.group(1) if m else None
    if banda is None:
        err('No se encuentra la banda inferior de la cabecera', 16)
    elif cat_color and banda != cat_color:
        err(f'Banda de la cabecera "{banda}" ≠ color de la categoría "{cat_color}"', 16)
    else:
        ok(f'Banda de la cabecera: {banda}', 16)

    region = h[h.find('<header'):h.find('<footer')] if '<footer' in h else h
    usados = {}
    for fam in re.findall(r'(?:bg|text|border|ring|fill|stroke|from|to|via|divide)-(' + FAMILIAS + r')-\d{2,3}', region):
        usados[fam] = usados.get(fam, 0) + 1
    permitidos = NEUTROS | {'blue', cat_color or banda or ''}
    raros = {f: n for f, n in usados.items() if f not in permitidos}
    if raros:
        err('Colores ajenos a la categoría en cabecera/contenido: ' + ', '.join(f'{f} ×{n}' for f, n in raros.items()), 17)
    else:
        ok('Sin colores ajenos a la categoría', 17)

    mi = re.search(r'<h1[^>]*>(.*?)</h1>\s*<div[^>]*>(.*?)</div>\s*</div>\s*<p class="mt-3[^>]*>(.*?)</p>', h, re.S)
    sub = None
    ms = re.search(r'<p class="mt-3 text-slate-300[^>]*>(.*?)</p>', h, re.S)
    if ms:
        sub = texto(ms.group(1))
        if len(sub) > 140:
            err(f'Subtítulo de {len(sub)} caracteres (máx. 140)', 19)
        else:
            ok(f'Subtítulo de {len(sub)} caracteres', 19)
    else:
        warn('No se localiza el subtítulo de la cabecera', 19)

    icono = re.search(r'text-9xl[^>]*>(.*?)</div>', h, re.S)
    if icono:
        if '<svg' in icono.group(1):
            fills = set(re.findall(r'fill="(#[0-9a-fA-F]{3,6})"', icono.group(1)))
            ok('Icono: SVG propio' + (f' (colores fijos: {sorted(fills)})' if fills else ' (hereda el color de la ficha)'), 18)
        else:
            warn('Icono de Font Awesome (provisional): comprobar con el usuario y en el sitio real', 18)

    # recuadros seguidos (se cuenta el cierre real de cada <div>, con anidados)
    def cierre(txt, ini):
        prof = 0
        for mm in re.finditer(r'<div\b|</div>', txt[ini:]):
            prof += 1 if mm.group(0).startswith('<div') else -1
            if prof == 0: return ini + mm.end()
        return len(txt)
    seguidos = 0
    for mm in re.finditer(r'<div class="[^"]*border-l-4[^"]*"', h):
        fin = cierre(h, mm.start())
        if re.match(r'\s*<div class="[^"]*border-l-4', h[fin:]): seguidos += 1
    if seguidos: err(f'{seguidos} par(es) de recuadros resaltados seguidos', 20)
    else: ok('Ningún recuadro resaltado pegado a otro', 20)

    # ---- SEO / metadatos
    print('\n[Metadatos y SEO]')
    title = re.search(r'<title>(.*?)</title>', h, re.S)
    title = html.unescape(title.group(1).strip()) if title else ''
    desc = re.search(r'<meta name="description" content="([^"]*)"', h)
    desc = html.unescape(desc.group(1)) if desc else ''
    h1s = re.findall(r'<h1[^>]*>(.*?)</h1>', h, re.S)
    if len(h1s) != 1:
        err(f'Hay {len(h1s)} H1 (debe haber 1)', 50)
    else:
        ok('Un único H1: ' + texto(h1s[0]), 50)
    url = f'{SITE}/{carpeta}/'
    for et, pat in (('canonical', r'<link rel="canonical" href="([^"]*)"'), ('og:url', r'og:url" content="([^"]*)"')):
        mm = re.search(pat, h)
        if not mm or mm.group(1) != url:
            err(f'{et} incorrecto: {mm.group(1) if mm else "falta"}', 50)
    for et, pat in (('og:title', r'og:title" content="([^"]*)"'), ('twitter:title', r'twitter:title" content="([^"]*)"')):
        mm = re.search(pat, h)
        if not mm or html.unescape(mm.group(1)) != title:
            warn(f'{et} distinto del <title>', 50)
    for et, pat in (('og:description', r'og:description" content="([^"]*)"'), ('twitter:description', r'twitter:description" content="([^"]*)"')):
        mm = re.search(pat, h)
        if not mm or html.unescape(mm.group(1)) != desc:
            warn(f'{et} distinto de la description', 50)
    ok(f'title ({len(title)} car.) y description ({len(desc)} car.) revisados', 50)

    miga = re.search(r'aria-label="Miga de pan".*?</nav>', h, re.S)
    miga_t = texto(miga.group(0)) if miga else ''
    primer_p = ''
    mp = re.search(r'<main.*?<p[^>]*>(.*?)</p>', h, re.S)
    if mp:
        primer_p = texto(mp.group(1))
    h1_t = texto(h1s[0]) if h1s else ''
    for w in palabras:
        wl = w.lower()
        falta = [n for n, s in (('title', title), ('description', desc), ('H1', h1_t), ('miga de pan', miga_t), ('1.er párrafo', primer_p)) if wl not in s.lower()]
        if falta:
            err(f'"{w}" no aparece en: {", ".join(falta)}', 21 if ('H1' in falta or 'miga de pan' in falta) else 51)
        else:
            ok(f'"{w}" aparece en title, description, H1, miga y 1.er párrafo', 51)

    # ---- JSON-LD
    print('\n[JSON-LD y estructura]')
    bloques = re.findall(r'<script type="application/ld\+json">(.*?)</script>', h, re.S)
    faq_ld = []
    for b in bloques:
        try:
            d = json.loads(b)
            if d.get('@type') == 'FAQPage':
                faq_ld = [q['name'] for q in d['mainEntity']]
        except Exception as e:
            err(f'JSON-LD inválido: {e}', 33)
    ok(f'{len(bloques)} bloques JSON-LD válidos', 33)
    visibles = [texto(s) for s in re.findall(r'<summary[^>]*>(.*?)</summary>', h, re.S)]
    if not faq_ld and visibles:
        warn(f'La ficha tiene {len(visibles)} preguntas visibles pero NO tiene FAQPage en JSON-LD (las fichas nuevas deben llevarlo)', 52)
    elif faq_ld != visibles:
        err(f'Preguntas del JSON-LD ({len(faq_ld)}) ≠ preguntas visibles ({len(visibles)})', 52)
    else:
        ok(f'{len(visibles)} preguntas: JSON-LD y página coinciden', 52)
    ids = re.findall(r'\bid="([^"]+)"', h)
    dup = {i for i in ids if ids.count(i) > 1}
    if dup:
        warn(f'IDs repetidos: {sorted(dup)}', 34)
    # etiquetas
    VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}
    from html.parser import HTMLParser

    class C(HTMLParser):
        def __init__(s):
            super().__init__(); s.st = []; s.e = []

        def handle_starttag(s, tag, a):
            if tag not in VOID: s.st.append(tag)

        def handle_endtag(s, tag):
            if tag in VOID: return
            if s.st and s.st[-1] == tag: s.st.pop()
            elif tag in s.st:
                while s.st and s.st[-1] != tag: s.e.append(f'sin cerrar <{s.st.pop()}>')
                s.st.pop()
            else: s.e.append(f'</{tag}> de más')
    c = C(); c.feed(h)
    if c.e or c.st: err(f'Etiquetas HTML: {c.e[:3]} {c.st[:3]}', 34)
    else: ok('Etiquetas HTML equilibradas', 34)
    if 'waline' not in h.lower(): warn('No se ve el bloque de comentarios (Waline)', 24)
    if not re.search(r'revisi[oó]n|actualizaci[oó]n', t, re.I): warn('No se ve fecha de revisión/actualización', 24)

    # ---- Enlaces
    print('\n[Enlaces]')
    malos = []
    for href in sorted(set(re.findall(r'href="(/[^"]*)"', h))):
        if '${' in href: continue
        ruta, _, ancla = href.partition('#')
        ruta = ruta.split('?')[0]
        f = ruta.lstrip('/')
        if f == '' or f.endswith('/'): f = os.path.join(f, 'index.html') if f else 'index.html'
        if not os.path.exists(os.path.join(ROOT, f)):
            malos.append(href); continue
        if ancla and f.endswith('.html') and f'id="{ancla}"' not in leer(f):
            malos.append(href)
    if malos: err(f'Enlaces o anclas rotos: {malos}', 35)
    else: ok('Enlaces internos y anclas existen', 35)
    sal = [x for x in set(re.findall(r'href="/(jubilacion-[a-z0-9-]+)/"', h)) if x != carpeta]
    ent = [os.path.dirname(x) for x in glob.glob(os.path.join(ROOT, 'jubilacion-*/index.html'))
           if os.path.basename(os.path.dirname(x)) != carpeta and f'href="/{carpeta}/"' in open(x, encoding='utf-8').read()]
    (ok if sal else warn)(f'Enlaza a {len(sal)} fichas relacionadas', 30)
    (ok if ent else warn)(f'Recibe enlaces desde {len(ent)} fichas', 30)

    # ---- Restos de otras fichas
    print('\n[Restos de otras fichas]')
    nombres = {}
    for x in glob.glob(os.path.join(ROOT, 'jubilacion-*/index.html')):
        d = os.path.basename(os.path.dirname(x))
        if d == carpeta: continue
        mt = re.search(r'<h1[^>]*>\s*Jubilaci[oó]n de (.*?)\s*</h1>', open(x, encoding='utf-8').read(), re.S)
        if mt and len(mt.group(1)) > 9: nombres[d] = texto(mt.group(1))
    cuerpo = re.sub(r'<a [^>]*>.*?</a>', ' ', h[h.find('<main'):h.find('</main>')], flags=re.S)
    cuerpo_t = texto(cuerpo).lower()
    restos = sorted({n for n in nombres.values() if n.lower() in cuerpo_t})
    if restos: warn(f'El texto menciona nombres de otras fichas (¿restos de plantilla?): {restos[:6]}', 37)
    else: ok('Ningún nombre de otra ficha en el texto', 37)

    # ---- Prueba de copia
    frases = [f.strip() for f in re.split(r'(?<=[.!?])\s+', texto(h[h.find('<main'):h.find('</main>')])) if len(f.strip()) > 70]
    indice = {}
    for x in glob.glob(os.path.join(ROOT, 'jubilacion-*/index.html')):
        d = os.path.basename(os.path.dirname(x))
        if d == carpeta: continue
        for f in re.split(r'(?<=[.!?])\s+', texto(open(x, encoding='utf-8').read())):
            if len(f.strip()) > 70: indice.setdefault(norm(f), set()).add(d)
    repes = [(f, indice[norm(f)]) for f in frases if norm(f) in indice and len(indice[norm(f)]) < 15]
    pct = 100 * len(repes) / max(1, len(frases))
    print('\n[Prueba de copia]')
    (warn if pct > 25 else ok)(f'{len(repes)} de {len(frases)} frases largas ({pct:.0f}%) aparecen idénticas en otras fichas', 44)
    for f, ds in repes[:8]:
        print(f'      · «{f[:110]}…» → {len(ds)} fichas')
    if len(repes) > 8: print(f'      · … y {len(repes) - 8} más')

    # ---- Trazabilidad con la fuente
    if fuente:
        print('\n[Trazabilidad con el archivo del usuario]')
        fuente_t = open(fuente, encoding='utf-8').read()
        fn = norm(fuente_t)
        qs_f = preguntas_fuente(fuente)
        print(f'  Preguntas en tu archivo: {len(qs_f)} · en la ficha: {len(visibles)}')
        usadas = set()
        sin_origen = []
        for q in visibles:
            mejor = max(qs_f, key=lambda s: difflib.SequenceMatcher(None, norm(s), norm(q)).ratio(), default=None)
            r = difflib.SequenceMatcher(None, norm(mejor), norm(q)).ratio() if mejor else 0
            if r >= 0.6: usadas.add(mejor)
            else: sin_origen.append(q)
        if sin_origen:
            warn(f'{len(sin_origen)} preguntas de la ficha SIN equivalente en tu archivo (justificar o quitar):', 42)
            for q in sin_origen: print(f'      · {q}')
        else:
            ok('Todas las preguntas de la ficha tienen origen en tu archivo', 42)
        omitidas = [q for q in qs_f if q not in usadas]
        if omitidas:
            warn(f'{len(omitidas)} preguntas de tu archivo NO están en la ficha (decirlo al usuario):', 5)
            for q in omitidas: print(f'      · {q}')
        # cifras
        pats = [r'\d[\d.]*,\d+\s?%?', r'\d+(?:,\d+)?\s?%', r'\b\d{1,3}(?:\.\d{3})+\b',
                r'\b(?:RDL?|Real Decreto(?:-ley)?)\s?\d+/\d{4}', r'Orden [A-Z]+/\d+/\d{4}',
                r'\b(?:art\.|artículo)\s?\d+(?:\.\d+)?(?:\.[a-z])?', r'\b(?:DA|DT) \d+ª', r'\b\d+ años?', r'\b\d+ meses']
        cuerpo_main = texto(h[h.find('<main'):h.find('</main>')])
        toks = set()
        for pt in pats:
            for mm in re.finditer(pt, cuerpo_main): toks.add(re.sub(r'\s+', '', mm.group(0).replace('Real Decreto-ley', 'RDL').replace('Real Decreto', 'RD').replace('RD-ley', 'RDL')))
        sin = sorted(tk for tk in toks if tk not in ESTANDAR and norm(tk) not in fn
                     and norm(re.sub(r'^(art\.|artículo)', '', tk)) not in fn)
        if sin: warn(f'{len(sin)} cifras/normas de la ficha que NO están en tu archivo ni en el estándar del sitio (verificar o quitar): ' + ', '.join(sin[:40]), 43)
        else: ok('Todas las cifras y normas están en tu archivo o en el estándar del sitio', 43)

    # ---- Registro
    print('\n[Registro en el sitio]')
    if cat:
        ch = leer(cat)
        n_cards = len(re.findall(r'<a href="/jubilacion-[^"]+" class="profession-card', ch))
        mc = re.search(r'esta categoría \((\d+)\)', ch)
        if mc and int(mc.group(1)) != n_cards: err(f'{cat}: contador ({mc.group(1)}) ≠ tarjetas ({n_cards})', 26)
        else: ok(f'{cat}: contador y tarjetas = {n_cards}', 26)
    hub = leer('hub-profesiones.js')
    mh = re.search(r'\{[^{}]*"slug":\s*"' + re.escape(nombre_corto) + r'"[^{}]*\}', hub)
    if not mh: err(f'Falta la entrada "{nombre_corto}" en hub-profesiones.js', 28)
    else:
        al = re.search(r'"alias":\s*"([^"]*)"', mh.group(0))
        n_al = len(al.group(1).split(',')) if al else 0
        (ok if n_al >= 4 else warn)(f'hub-profesiones.js: entrada encontrada con {n_al} alias', 28)
        for w in palabras:
            if w.lower() not in mh.group(0).lower(): warn(f'"{w}" no está en el nombre/alias del hub', 28)
    sm = leer('sitemap.xml')
    (ok if f'<loc>{url}</loc>' in sm else err)('sitemap.xml ' + ('contiene la ficha' if f'<loc>{url}</loc>' in sm else 'NO contiene la ficha: añádela a mano (generar-sitemap.py está desfasado y NO se debe ejecutar sin revisarlo)'), 29)
    if carpeta == 'jubilacion-enfermeros': warn('No se debe tocar jubilacion-enfermeros', 25)

    # ---- Navegador
    if navegador: capturas(carpeta, cat_color)

    # ---- A mano
    print('\n[A MANO — esto no lo puede comprobar el script]')
    for n, tx in ((1, 'leer el archivo entero línea a línea'), (4, 'nada inventado (cifras, sentencias, empresas, códigos)'),
                  (7, 'cada norma citada contrastada en BOE / Seguridad Social'), (10, 'coeficientes reductores sin afirmar nada sin fuente'),
                  (13, 'sin "fraude / robo / ilegal" como hechos'), (15, 'comparar a ojo con 2-3 fichas hermanas'),
                  (23, 'nada dirigido al usuario dentro de la página'), (45, 'la ficha no se contradice'),
                  (46, 'cifras idénticas al resto del sitio'), (49, 'ortografía y tildes'),
                  (59, 'leerla entera como un trabajador de la profesión'), (60, 'icono bien cargado en el sitio real'),
                  (39, 'enseñársela al usuario ANTES de subirla'), (55, 'abrir la URL real tras el despliegue')):
        print(f'  ☐ [{n}] {tx}')


def capturas(carpeta, cat_color):
    print('\n[Navegador]')
    try:
        from playwright.sync_api import sync_playwright
    except Exception:
        warn('playwright no está instalado: capturas omitidas', 36); return
    os.makedirs('/tmp/verificar-ficha', exist_ok=True)
    class Silencioso(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a, **k): pass
    handler = functools.partial(Silencioso, directory=ROOT)
    srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), handler)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    port = srv.server_address[1]
    with sync_playwright() as p:
        b = p.chromium.launch()
        for w in (390, 768, 1280):
            pg = b.new_page(viewport={'width': w, 'height': 800})
            errores = []
            pg.on('pageerror', lambda e: errores.append(str(e)))
            pg.goto(f'http://127.0.0.1:{port}/{carpeta}/', wait_until='load', timeout=20000)
            pg.wait_for_timeout(700)
            ruta = f'/tmp/verificar-ficha/{carpeta}-{w}.png'
            pg.screenshot(path=ruta, full_page=True)
            r = pg.evaluate('''()=>{const d=document.documentElement;const p=document.querySelector('header p.mt-3');
              let l=null;if(p){const lh=parseFloat(getComputedStyle(p).lineHeight);l=Math.round(p.getBoundingClientRect().height/lh)}
              const h1=document.querySelector('h1').getBoundingClientRect();
              return {over:d.scrollWidth>innerWidth,subLines:l,altura:d.scrollHeight}}''')
            msg = f'{w}px: página entera guardada en {ruta} · subtítulo {r["subLines"]} líneas'
            (err if r['over'] else ok)(f'{w}px: ' + ('DESBORDE HORIZONTAL' if r['over'] else 'sin desborde') + f' · subtítulo {r["subLines"]} líneas · captura {ruta}', 36)
            if errores: warn(f'Errores JS en {w}px: {errores[:2]}', 36)
            pg.close()
        b.close()
    srv.shutdown()
    print('  → Abre las capturas y míralas: el script no ve el diseño, solo mide.')


# ------------------------------------------------------------- contadores
def auditar_contadores():
    print('\n=== Auditoría de contadores (categorías y home) ===')
    home = leer('index.html')
    mal = 0
    for c in sorted(glob.glob(os.path.join(ROOT, 'categoria-*.html'))):
        n = os.path.basename(c)
        ch = open(c, encoding='utf-8').read()
        cards = len(re.findall(r'<a href="/jubilacion-[^"]+" class="profession-card', ch))
        mc = re.search(r'esta categoría \((\d+)\)', ch)
        i = home.find(f'href="/{n}"')
        mh = re.search(r'(\d+) profesiones', home[i:i + 2500]) if i >= 0 else None
        estado = []
        if mc and int(mc.group(1)) != cards: estado.append(f'página dice {mc.group(1)}, tiene {cards} tarjetas')
        if mh is None: estado.append('sin tarjeta en la home')
        elif int(mh.group(1)) != cards: estado.append(f'home dice {mh.group(1)}')
        if estado: mal += 1; err(f'{n}: ' + '; '.join(estado), 27)
        else: ok(f'{n}: {cards}', 27)
    # fichas sin tarjeta en ninguna categoría
    todas = set()
    for c in glob.glob(os.path.join(ROOT, 'categoria-*.html')):
        todas |= set(re.findall(r'<a href="/(jubilacion-[^"/]+)/"', open(c, encoding='utf-8').read()))
    huerfanas = sorted(os.path.basename(os.path.dirname(x)) for x in glob.glob(os.path.join(ROOT, 'jubilacion-*/index.html'))
                       if os.path.basename(os.path.dirname(x)) not in todas)
    if huerfanas: warn(f'Fichas sin tarjeta en ninguna categoría ({len(huerfanas)}): {huerfanas[:12]}', 26)


def auditar_git():
    print('\n=== Archivos tocados sin commitear ===')
    r = subprocess.run(['git', 'status', '--short'], cwd=ROOT, capture_output=True, text=True).stdout.strip().split('\n')
    for l in r:
        if l.strip(): print('  ' + l)
        if 'jubilacion-enfermeros' in l: err('Se ha tocado jubilacion-enfermeros', 25)


if __name__ == '__main__':
    ap = argparse.ArgumentParser(description='Verificador de fichas de calculatujubilacion.es')
    ap.add_argument('ficha', nargs='?')
    ap.add_argument('--palabras', default='')
    ap.add_argument('--fuente')
    ap.add_argument('--navegador', action='store_true')
    ap.add_argument('--contadores', action='store_true')
    ap.add_argument('--git', action='store_true')
    a = ap.parse_args()
    if a.ficha:
        verificar_ficha(a.ficha, [w.strip() for w in a.palabras.split(',') if w.strip()], a.fuente, a.navegador)
    if a.contadores: auditar_contadores()
    if a.git: auditar_git()
    if not (a.ficha or a.contadores or a.git): ap.print_help(); sys.exit(0)
    print(f'\nResultado: {ERR} errores ✘ · {WARN} avisos ⚠')
    sys.exit(1 if ERR else 0)
