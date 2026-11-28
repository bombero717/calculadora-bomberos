# Decisiones cerradas (no se vuelven a plantear al usuario)

Cada línea es algo que el usuario (Salvador Martín) ya decidió o dijo. Si una conversación quiere cambiar una, primero se lee aquí y se le pregunta solo si hay un hecho nuevo. Fecha entre paréntesis.

## Reglas de fondo
- **Nada inventado** (2026-11-03). En una ficha solo entra: lo que dice el archivo del usuario, lo que dice la ley comprobada en BOE/Seguridad Social con su artículo, y plazos y porcentajes legales estables. Nunca ejemplos con cifras, casos de un trabajador ficticio ni relleno.
- **Nunca inventar normas por mucha lógica que parezcan** (2026-11-17): ir a la literalidad de la ley. Pero un BOE desfasado no manda sobre la edad ordinaria vigente: hay que saber si otra norma lo ha sustituido.
- **Sin cifras que caducan** (pensión máxima, base máxima, MEI, importes anuales): se explica el mecanismo y se enlaza a `/normativa.html`. Un importe verificado puede ir con «a fecha de …» y su norma. Excepción autorizada: 150.000 € en `jubilacion-directivos-ceos`.
- **Las secciones «Ejemplos y situaciones prácticas» de las páginas de preguntas frecuentes se dejan** (2026-11-13). No se cuestionan ni se le recuerdan.
- **No copiar texto ni colores de otra ficha** (2026-10-12). De otra ficha solo la estructura HTML.
- **Mensajes finales cortos** (2026-11-04): sin informes, tablas ni resúmenes. Enlace, una línea si se añadió un dato que no estaba en su archivo (qué dato y fuente), y lo que él deba hacer o decidir.
- **Aprobación = subir** (push directo). No retener cambios ya aprobados.
- **Sitemap a mano.** No ejecutar `generar-sitemap.py`.
- **Nunca `--no-verify`.**
- **No tocar las calculadoras ni sus casillas**: solo textos explicativos.
- **Letra grande** (presbicia): recuadros con la letra del texto; el botón «Aa» está descartado (2026-11-17).
- **Nunca dos recuadros resaltados seguidos.**
- **Decisiones importantes, en MAYÚSCULAS** (2026-11-21): cuando el usuario tenga que decidir algo delicado (tocar varias calculadoras, cambios masivos, algo difícil de deshacer), la pregunta va en mayúsculas, aparte y con el riesgo dicho claramente, para que no la conteste con un «sí» despistado.
- **Nunca proponer cambios que toquen varias calculadoras a la vez como una opción más** (2026-11-21). Lo uniforme es adaptar la que se cambia a las demás, no al revés. Si alguna vez hiciera falta tocar más de una, se avisa del riesgo (en mayúsculas) y se recomienda no hacerlo.
- **Logos SVG** (2026-11-21): si el SVG trae fondo blanco, se quita siempre; los demás colores y trazos, tal cual.
- **Logos sobre la cabecera oscura** (2026-11-24): antes de subir, mirar en la captura cómo se ve el logo sobre el fondo oscuro de la cabecera. Si alguna parte importante se pierde, avisarle y proponerle cómo arreglarla. No hay norma de cambiar el negro: dentro del dibujo puede quedar bien. Caso de origen: PAS universitario (el negro se pasó a índigo claro con su OK).
- **Botón de la calculadora del Régimen del Mar en fichas de otras categorías** (2026-11-21): con el azul de marina mercante (`bg-marina-600 hover:bg-marina-700`), no con el color de la categoría.

## Decisiones de contenido
- **Artistas, 8 % por año (2026-11-17 / 2026-11-20):** se escribe «por cada año que falte para la edad ordinaria», **nunca «65 años»**; solo cuentan años completos. El BOE dice 65 por ser texto de una ley anterior. El verificador da ERROR si ve «65 años» junto al 8 %.
- **Incapacidad permanente que pasa a jubilación:** el «67 años» y el «66 años y 10 meses (en 2026, DT 7.ª)» los corrigen las tareas programadas de enero de 2027 (4 de enero). No tocarlos ni recordarlo antes. Los cambios van a una rama aparte y él los aprueba.
- **Banda «Normativa reciente» (2026-11-21):** cada entrada lleva al apartado concreto (ancla) donde se explica esa norma en la normativa de esa profesión, no a la página en general ni al buscador `normativa-por-profesion.html`. En la revisión semanal del BOE, antes de proponer una entrada, mirar si la web ya la tiene.
- **Banda «Normativa reciente»: solo los últimos 12 meses (2026-11-28).** Al añadir entradas nuevas se retiran las de hace más de un año, para que la vuelta completa no pase de un minuto y poco. Al tocarla, la última línea oculta debe copiar la primera entrada y la animación debe tener un paso por entrada (ver `estado.md`).
- **Calculadora de destino:** si el oficio cotiza en la relación laboral especial de artistas (RD 2621/1986) va a `/artistas/` («Ir a la calculadora de artistas»); si cotiza como autónomo, a la general («Ir a la calculadora»). Si el archivo dice las dos cosas (DJs), la ficha lleva dos calculadoras con el mismo peso. `arreglistas` y `operadores-camara` van a la general y es correcto.
- **Una profesión con el mismo coeficiente que una ficha o calculadora existente va como alias, no como ficha nueva** (2026-10-31). Marina Mercante: capitanes, oficiales, marineros, etc. son alias (2026-11-13), pendiente aclarar cómo reforzar su portada.
- **Las calculadoras son las generales** (ordinaria, común a todas): no sugerir un simulador por ficha. En fichas deportivas, enlazar a otros deportes sin dar a entender que hay otra calculadora.
- **«Unas 3 semanas» de tramitación del INSS** es cifra decidida por él, sin fuente oficial: se mantiene (trámites, FAQ 56).
- **Trámites:** no hay página de trámite por profesión; va como sección dentro de `/como-tramitar-tu-jubilacion.html` (2026-11-18).
- **Descartado:** páginas por tema generales (anticipada, parcial, demorada, lagunas, glosario): «no queremos competir en esos términos» (2026-11-17); tabla «a qué edad me jubilo según tu año de nacimiento» (2026-11-17).
- **Demorada:** su calculadora va dentro de las preguntas frecuentes, al principio de `#demorada-activa`.
- **Bomberos forestales:** amarillo fuerte como color de profesión.
- **Comentarios (Waline):** él aprueba cada mensaje; sin avatar, sin imágenes, sin GIF; nombre sin enlace.
- **Embeddings:** una ficha, una descarga (2026-11-01).
- **AdSense:** rechazado el 2026-11-12 por «contenido de poco valor»; se vuelve a pedir en un par de meses (hacia mediados de enero). No poner código de anuncios hasta que aprueben.

## Antes de afirmar o decidir un dato legal o un destino
1. Citar la línea exacta del archivo del usuario en que me apoyo. Si no puedo citarla, no lo afirmo.
2. Mirar si el archivo se contradice o marca algo `[SIN FUENTE]` / `[PRÁCTICA]`: no escojo una opción; la ficha se diseña para que valga con la duda.
3. Abrir la ficha hermana más parecida y ver cómo resolvió lo mismo.
4. Si el usuario pregunta «¿no era X?», releer la fuente (y esta página) antes de contestar; ni darle la razón ni llevarle la contraria de memoria.
5. Si una ley parece decir algo, preguntarse si otra posterior la ha sustituido (caso de origen: el 65 de artistas).

## Aprobadas el 2026-11-22
- **Negritas en las respuestas de preguntas frecuentes:** se siguen las reglas de `docs/negritas-regla-v2.md`. Son la prueba de la diagonal, qué se marca según el tipo de pregunta y las formas fijas. Se aplicaron así en las 379 fichas.
- **Tareas grandes con agentes:** lo mecánico se hace con scripts. El lector independiente revisa una muestra aleatoria y los casos de riesgo, no todo. Como máximo 3 agentes a la vez. Un lote cortado no se relanza sin mirar antes lo que dejó guardado.
- **Subtítulos de cabecera de las calculadoras específicas:** se dejan cortos, sin «y el porcentaje de pensión (estimado)», para que no choquen el logo y el chatbot.
