# Estado del proyecto (actualizar al cerrar cada sesión de trabajo)

Última actualización: 2026-11-20.

## Qué hay
- 26 calculadoras y unas 330 fichas de oficio (`jubilacion-*/index.html`) más categorías, hub (`hub-profesiones.js`), chat (`faqs-source.json`, `embeddings-compacto.json`).
- Campaña de corrección de fichas cerrada. Se crean fichas nuevas con archivos del usuario (Google AI Studio + NotebookLM).
- Última ficha nueva: `jubilacion-armadores` (embeddings `nb43_0001–0026`; la siguiente sería `nb44_`). 23 preguntas de su archivo no entraron (lo dejado fuera por [SIN FUENTE]: detalles de rol/libreta, desguace como anticipada automática).

## Por confirmar (propuestas de Claude pendientes del OK del usuario)

## Pendiente
- **Criterio de gestión INSS 22/2026 (19-10-2026, jubilación activa en pluriactividad).** El PDF original (lo pasó el usuario el 2026-11-21, con propiedades puestas: título, asunto = la web y palabras clave) ya está en `documentos/criterio-gestion-inss-22-2026.pdf`, subido pero sin enlazar desde ninguna página. Los criterios del INSS no se publican en el BOE ni hay repositorio oficial único, así que no hace falta buscar copia en seg-social.es. Resumen: con requisitos en ambos regímenes caben dos pensiones activas, cada una con su porcentaje (art. 214.3); si solo se jubila en uno y el otro cotiza por todas las contingencias, la pensión se suspende entera. Sin fecha de efectos. Falta: entrada en `/normativa.html` (jubilación activa) y en la banda; enseñarle el texto al usuario antes de subir.
- **Artistas con carrera mixta (2026-11-21).** Aparcado hasta que el usuario lo investigue en NotebookLM. Comprobado: la calculadora suma toda la cotización y el 8 % no exige mínimo de años como artista; el art. 11.3 RD 2621/1986 exige alta o situación asimilada en el hecho causante. Sin confirmar: si el alta tiene que ser como artista y qué pasa con los años de autónomo (cómputo recíproco). Cuando llegue la respuesta: reescribir la FAQ 11 de `artistas/preguntas-frecuentes.html` (es texto genérico que habla de un «coeficiente reductor» que en artistas no existe) y añadir bajo «Cotización real total» «Incluye también lo cotizado en otros trabajos». Solo textos, sin tocar la calculadora.
- RDL 34/2026 (ferroviarios): hecho el 2026-11-21 (normativa de ferroviarios y banda dicen que alcanza también a las empresas ferroviarias privadas, lectura del preámbulo aprobada por el usuario).
- **Certificado de GitHub Pages: se deja así de momento (2026-11-20).** Cloudflare en SSL «Completo» (no estricto) con Bot Fight Mode encendido; GitHub sigue en «1 de 3» sin dejar marcar «Enforce HTTPS», y no importa: los visitantes navegan cifrados. Si algún día se quiere «Completo (estricto)»: apagar Bot Fight Mode para siempre (si no, cada renovación se atasca), cambiar «Always Use HTTPS» por una Redirect Rule que excluya `/.well-known/`, revisar el WAF y quitar/poner el dominio en GitHub una sola vez. Nunca nube gris (HSTS).
- **Search Console**: 132 URLs «rastreadas, sin indexar» (97 pendientes, 35 con error) sin motivo visible. Volver a exportar en 3-4 semanas (hacia mediados de diciembre) y comparar.
- **Enero 2027**: tareas programadas (IP «67 años» / «66 años y 10 meses»); AdSense, nueva solicitud.
- Ideas aparcadas por el usuario: ver `decisiones.md` (descartado) y la memoria.
- Ideas vivas: estudio de profesiones con trámites para reducir la edad de jubilación; «Análisis de mejora» por profesión (empezó en bomberos); Deportista Profesional; aclarar la portada de Marina Mercante.

## Cómo está montado el control
- `verificar-ficha.py` (ver `procedimiento-ficha-nueva.md`), hook `.githooks/pre-commit` (activar en cada clon), `auditar-sitio.py` (auditoría semanal de solo lectura, martes 9:07).
- Workflows: `build-css.yml` (actualiza los `?v=` de los assets), `indexnow.yml`.

## Cómo se trabaja
- **Dónde buscar criterios de gestión del INSS** (no se publican en el BOE ni hay repositorio oficial único; el usuario pasó estos enlaces el 2026-11-21): `https://www.laboral-social.com/criterio-gestion-INSS-22-2026-jubilacion-activa-situacion-pluriactividad` (laboral-social.com publica cada criterio nuevo con su PDF; el más útil para los de 2026), `https://graduadosociales.es/criterios-inss/` (listado, pero solo hasta 2024) y `https://www.icaoviedo.es/Colegiados/Criterios-de-Gestion-INSS/` (listado del Colegio de Abogados de Oviedo, público, con botón «Descargar» por criterio; la herramienta de lectura no puede abrirlo (error de robots.txt, es de la web), pero la búsqueda web limitada a `icaoviedo.es` sí devuelve su contenido; en la prueba del 2026-11-21 salían criterios de 2025, sin confirmar si llega a 2026. Cerrado, no hay que volver a probar). Para citar un criterio en la web se baja el PDF original y va a `/documentos/` como el 20/2026.
- Conversaciones cortas (una por bloque de trabajo o por jornada); empezar con la skill `/web` o con la frase de arranque de `CLAUDE.md`. Reglas de guardado en `que-se-guarda.md`.
