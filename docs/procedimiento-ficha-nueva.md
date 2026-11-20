# Procedimiento para una ficha nueva (o reescrita)

Antes de nada: leer `CLAUDE.md` y `docs/decisiones.md`; `git config core.hooksPath .githooks`.

## 1. Preparar
1. Leer el archivo del usuario entero, línea a línea. Anotar las líneas `[SIN FUENTE]`, `[PRÁCTICA]` y las contradicciones.
2. Decidir el oficio de referencia: abrir la ficha hermana más parecida y la de su categoría (`categoria-*.html`) para estructura, colores y destino de la calculadora.
3. Comprobar en BOE/Seguridad Social cada dato legal que no esté en su archivo (con su artículo). Lo que no se pueda comprobar, no se pone.

## 2. Escribir
- Desde sus preguntas y su orden, con redacción propia. Primera sección = un párrafo + un recuadro; después, la calculadora; botón «Ir a la calculadora» (o «…de artistas» si cotiza en artistas).
- Subtítulo ≤ 2 líneas en móvil; H1 y miga de pan con el nombre popular; colores de su categoría; SVG de un solo color si el original lo es.
- Font Awesome y bloque de comentarios Waline: copiar de una ficha actual (no una antigua).
- Cada párrafo, con origen (pregunta del archivo o artículo) y que enseñe algo propio del oficio.

## 3. Registrar
Tarjeta en su `categoria-*.html` y contador de categoría y de la home; entrada en `hub-profesiones.js` (alias, también de 2 letras: la búsqueda ya los admite); `sitemap.xml` a mano; enlaces de entrada desde 2-4 fichas hermanas; `?v=` del hub (lo actualiza `build-css.yml` al subir; comprobar que cambia, hash con `sha256sum hub-profesiones.js | cut -c1-8`); `faqs-source.json` (ids `nbNN_xxxx`, siguiente `nb43_`).

## 4. Verificar
```
python3 verificar-ficha.py <carpeta> --palabras "nombre popular,…" --fuente <archivo.md> --navegador [--mostradas "cifra1;cifra2"]
```
0 errores. `--mostradas` solo con cifras comprobadas en BOE (separadas por `;` si llevan coma). Mirar los avisos. Después, un agente aparte que no haya visto cómo se escribió la lee como trabajador del oficio y marca lo incoherente o vacío; se corrige.

## 5. Entregar
1. `git fetch && git status`; commit (el hook corre solo); push (si lo rechaza el commit automático de caché, `git pull --rebase` y repetir). Abrir la URL real tras el despliegue.
2. **Embeddings (siempre, al entregar):** dar al usuario el enlace entero con el hueco para la clave:
   `https://asistente.calculatujubilacion.es/admin/build-embeddings?secret=CLAVE&offset=N&limit=M`
   (N = posición de la primera pregunta nueva en `faqs-source.json`; M = nº de preguntas). Él lo genera y adjunta `embeddings-N.json`; se mete en `embeddings-compacto.json` en un commit aparte (entradas con `id/pregunta/respuesta/url/calculadora/calculadora_url/q`; `json.dumps(..., ensure_ascii=False)`, sin salto de línea final).
3. Mensaje final corto: enlace, una línea con cualquier dato añadido que no estuviera en su archivo (y su fuente), y lo que él deba hacer o decidir. Sin informes ni tablas.

## Si cambia una URL
Decirle la redirección 301 que debe crear en Cloudflare.
