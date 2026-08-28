#!/usr/bin/env python3
"""
Generador de sitemap.xml para calculatujubilacion.es
======================================================

USO: coloca este archivo en la raíz del sitio (junto a index.html) y
ejecútalo cada vez que añadas, quites o muevas alguna página:

    python3 generar-sitemap.py

No necesita ninguna librería aparte de las que ya trae Python (no hace
falta "pip install" nada). Sobrescribe sitemap.xml con el resultado y
te dice cuántas URLs ha escrito, para que puedas comprobar de un
vistazo que el número tiene sentido.

CÓMO DECIDE QUÉ INCLUIR
-----------------------
1. Las páginas fijas del sitio (home, privacidad, sobre el proyecto).
2. Las calculadoras "grandes" listadas abajo en CALCULATORS_CON_MOTOR_PROPIO
   — cada una aporta su index.html más como-funciona.html, normativa.html
   y preguntas-frecuentes.html, SOLO si esos archivos existen de verdad
   en disco (si algún día una calculadora deja de tener alguna de esas
   páginas, o gana una nueva, el script se adapta solo).
3. Los dos casos especiales (autónomos, agentes forestales): landing
   propia pero sin motor de cálculo propio.
4. TODO EL RESTO de carpetas que empiecen por "jubilacion-" se tratan
   automáticamente como landings de profesión con jubilación ordinaria
   — no hace falta tocar este script cuando añadas una más, esa parte
   ya es automática de verdad.

Si divides o renombras alguna calculadora grande (como hicimos con
Policía Nacional / Guardia Civil), actualiza la lista
CALCULATORS_CON_MOTOR_PROPIO más abajo — es la única parte que de verdad
requiere una edición manual cuando cambia la estructura del sitio.
"""

import os
import datetime

DOMAIN = "https://calculatujubilacion.es"

# Calculadoras con motor de cálculo propio (una carpeta = un simulador).
# Actualiza esta lista si separas, fusionas o renombras alguna.
CALCULATORS_CON_MOTOR_PROPIO = [
    "bomberos",
    "bomberos-forestales",
    "policia-local",
    "policia-nacional",
    "guardia-civil",
    "ertzaintza",
    "mossos-desquadra",
    "policia-foral-navarra",
    "jubilacion-ordinaria",
    "funcionarios-docentes",
    "fuerzas-armadas",
    "mineria",
    "ferroviarios",
    "artistas",
    "toreros",
    "marina-mercante",
    "pesca",
    "estiba-portuaria",
    "marisqueo",
    "administracion-general-estado",
    "carrera-judicial-fiscal",
    "jubilacion-discapacidad",
    "personal-de-vuelo",
]

# Landings con contenido propio pero SIN motor de cálculo propio
# (apuntan a la calculadora de jubilación ordinaria).
LANDINGS_ESPECIALES = [
    "jubilacion-autonomos",
    "jubilacion-agentes-forestales",
]

# Carpetas que nunca deben aparecer en el sitemap aunque existan en disco.
EXCLUIR_SIEMPRE = {
    "jubilacion-generator",       # herramientas internas de generación, no es contenido público
    "policia-nacional-guardia-civil",  # carpeta antigua, sustituida por policia-nacional + guardia-civil
    "ertzaintza-mossos-policia-foral",  # carpeta antigua, sustituida por ertzaintza + mossos-desquadra + policia-foral-navarra
    "trabajadores-del-mar",  # carpeta antigua, sustituida por marina-mercante + pesca + estiba-portuaria + marisqueo
}


def existe(path):
    return os.path.isfile(path)


def fecha_modificacion(archivo_local):
    """Fecha real de última modificación del archivo en disco (ISO), o la
    fecha de hoy como último recurso si el archivo no existe por algún motivo."""
    try:
        ts = os.path.getmtime(archivo_local)
        return datetime.date.fromtimestamp(ts).isoformat()
    except OSError:
        return datetime.date.today().isoformat()


def generar():
    urls = []  # lista de (path, priority, changefreq, archivo_local)

    # 1. Páginas fijas
    urls.append(("/", "1.0", "weekly", "index.html"))
    if existe("privacidad.html"):
        urls.append(("/privacidad.html", "0.3", "yearly", "privacidad.html"))
    if existe("sobre-el-proyecto.html"):
        urls.append(("/sobre-el-proyecto.html", "0.3", "monthly", "sobre-el-proyecto.html"))

    # 2. Calculadoras con motor propio
    for slug in CALCULATORS_CON_MOTOR_PROPIO:
        if not os.path.isdir(slug):
            print(f"  aviso: '{slug}' está en la lista pero no existe como carpeta — se omite")
            continue
        urls.append((f"/{slug}/", "0.9", "monthly", f"{slug}/index.html"))
        for sub in ["como-funciona.html", "normativa.html", "preguntas-frecuentes.html"]:
            if existe(f"{slug}/{sub}"):
                urls.append((f"/{slug}/{sub}", "0.6", "monthly", f"{slug}/{sub}"))

    # 3. Landings especiales (autónomos, agentes forestales...)
    for slug in LANDINGS_ESPECIALES:
        if not os.path.isdir(slug):
            print(f"  aviso: '{slug}' está en la lista pero no existe como carpeta — se omite")
            continue
        urls.append((f"/{slug}/", "0.8", "monthly", f"{slug}/index.html"))
        if existe(f"{slug}/normativa.html"):
            urls.append((f"/{slug}/normativa.html", "0.6", "monthly", f"{slug}/normativa.html"))

    # 4. Resto de landings de profesión — detección automática
    ya_incluidas = set(CALCULATORS_CON_MOTOR_PROPIO) | set(LANDINGS_ESPECIALES) | EXCLUIR_SIEMPRE
    landings_detectadas = sorted(
        d for d in os.listdir(".")
        if d.startswith("jubilacion-")
        and os.path.isdir(d)
        and d not in ya_incluidas
    )
    for slug in landings_detectadas:
        urls.append((f"/{slug}/", "0.7", "monthly", f"{slug}/index.html"))

    # 5. Escribir el XML
    lineas = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ]
    for path, priority, changefreq, archivo_local in urls:
        lineas.append("  <url>")
        lineas.append(f"    <loc>{DOMAIN}{path}</loc>")
        lineas.append(f"    <lastmod>{fecha_modificacion(archivo_local)}</lastmod>")
        lineas.append(f"    <changefreq>{changefreq}</changefreq>")
        lineas.append(f"    <priority>{priority}</priority>")
        lineas.append("  </url>")
    lineas.append("</urlset>")

    with open("sitemap.xml", "w", encoding="utf-8") as f:
        f.write("\n".join(lineas) + "\n")

    print(f"sitemap.xml escrito con {len(urls)} URLs.")
    print(f"  - {len(CALCULATORS_CON_MOTOR_PROPIO)} calculadoras con motor propio")
    print(f"  - {len(LANDINGS_ESPECIALES)} landings especiales")
    print(f"  - {len(landings_detectadas)} landings de profesión detectadas automáticamente")


if __name__ == "__main__":
    if not existe("index.html"):
        print("AVISO: no encuentro index.html en esta carpeta.")
        print("Ejecuta este script desde la raíz del sitio (donde está index.html),")
        print("no desde una subcarpeta.")
    else:
        generar()
