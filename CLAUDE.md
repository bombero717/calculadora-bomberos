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

## 3. Estado de la campaña (2026-10-12)
- **No se crean fichas nuevas hasta nuevo aviso.** El trabajo es corregir las existentes: primero las 22 creadas desde el 7 de octubre, luego las 212 de los días 24 y 28 de agosto y el resto (331 en total).
- Regla de datos legales: BOE/Seguridad Social; sin "en trámite" sin fuente; cifras estándar 2026 en la memoria del usuario (`/areas/checklist-fichas.md`).

## 4. Otras reglas de proceso
- No editar `jubilacion-enfermeros/index.html`.
- Sitemap a mano (no ejecutar `generar-sitemap.py`).
- Commit/push directo, con `git fetch && git status` para confirmar; si el push es rechazado por el commit automático del hash de caché, `git pull --rebase` y repetir.
- Responder en español; lo que no se pueda hacer desde aquí se dice en el momento.
