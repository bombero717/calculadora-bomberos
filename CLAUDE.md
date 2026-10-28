# calculatujubilacion.es — reglas obligatorias para Claude

Lee esto entero antes de tocar una ficha (`jubilacion-*/index.html`). El usuario lo ha pedido con mucho énfasis.

## 1. NUNCA copiar texto ni colores de otra ficha
- Una ficha nueva o reescrita se escribe **desde el archivo que pasa el usuario** (sus preguntas, su orden), con redacción propia y aplicada al oficio.
- Del esqueleto de otra ficha se reutiliza **solo la estructura HTML** (cabecera, secciones, estilos). Nunca sus párrafos, sus FAQ ni sus listas.
- Los bloques legales comunes (pensión máxima, MEI, base reguladora, lagunas, anticipadas, parcial, activa, flexible, brecha, servicio militar, prácticas) **no se repiten enteros**: se dan las cifras en frases cortas propias del oficio y se enlaza a `/normativa.html` (anclas: `#...` existentes) para la explicación general.
- Colores: banda de cabecera, etiquetas, recuadros e icono llevan el color de **su** categoría (ver `categoria-*.html`), sin restos del esqueleto. Logo SVG de un solo color si el original lo es.
- Subtítulo corto (≤2 líneas en móvil), nunca dos recuadros resaltados seguidos, calculadora tras el primer párrafo + un recuadro, botón "Ir a la calculadora".

## 2. Puerta de calidad (automática)
- `python3 verificar-ficha.py <carpeta> --navegador` debe dar **0 errores**. El control de duplicado da ERROR si la ficha comparte más del **30 %** de sus frases con otra o tiene menos del **55 %** de texto propio.
- Hay un hook de pre-commit en `.githooks/pre-commit` que bloquea el commit de cualquier ficha con error. Actívalo al empezar la sesión: `git config core.hooksPath .githooks`. No lo saltes con `--no-verify`.

## 3. Estado de la campaña (2026-10-28)
- La campaña de corrección de las 331 fichas está cerrada. Ya se pueden crear fichas nuevas: el usuario trae los archivos de FAQs/investigación (Google AI Studio + NotebookLM) de las profesiones que se propongan.
- Regla de datos legales: BOE/Seguridad Social; sin "en trámite" sin fuente; cifras estándar 2026 en la memoria del usuario (`/areas/checklist-fichas.md`).

## 4. Otras reglas de proceso
- Sin cifras económicas que caducan en las fichas (pensión máxima, base máxima, complemento de brecha, MEI, importes anuales): se explica el mecanismo y se enlaza a `/normativa.html`. Dentro de la ficha solo cálculos de ejemplo con números redondos del oficio y plazos/porcentajes legales estables.
- No editar `jubilacion-enfermeros/index.html`, salvo la mejora autorizada por el usuario el 2026-10-13 (conservadora: título, H1, meta, URL, secciones que posicionan y las 28 preguntas originales se mantienen; hecha en el commit de esa fecha). Para cualquier otro cambio, preguntar antes.
- Sitemap a mano (no ejecutar `generar-sitemap.py`).
- Commit/push directo, con `git fetch && git status` para confirmar; si el push es rechazado por el commit automático del hash de caché, `git pull --rebase` y repetir.
- Responder en español; lo que no se pueda hacer desde aquí se dice en el momento.
