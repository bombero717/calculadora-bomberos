# Estado del proyecto (actualizar al cerrar cada sesión de trabajo)

Última actualización: 2026-11-22.

## Qué hay
- 26 calculadoras y unas 330 fichas de oficio (`jubilacion-*/index.html`) más categorías, hub (`hub-profesiones.js`), chat (`faqs-source.json`, `embeddings-compacto.json`).
- Campaña de corrección de fichas cerrada. Se crean fichas nuevas con archivos del usuario (Google AI Studio + NotebookLM).
- Últimas fichas nuevas (2026-11-22): `jubilacion-funcionarios-registro-civil` (Administración; `nb47_0001–0025`, offset 11089; dos calculadoras, AGE y general), `jubilacion-policia-portuaria` (Seguridad; `nb46_`, offset 11064) y `jubilacion-personal-civil-defensa` (Administración; `nb45_`, offset 11041). Embeddings de las tres pendientes de que el usuario los genere. La siguiente sería `nb48_`.

## Hecho recientemente (no es pendiente)
- **Compatibilidad de Clases Pasivas en el chat (2026-11-22), TERMINADO:** corregidas en `faqs-source.json` y en los dos archivos de embeddings 4 respuestas que decían que la pensión de Clases Pasivas es compatible sin más con trabajar en lo privado (`nb3_0026` AGE, `nb3_0117` jueces, `nb3_0173` militares, `nb3_0191` docentes): por regla general es incompatible si da de alta en la Seguridad Social, salvo la forzosa con un año de demora (art. 33.2 RDL 670/1987, redacción RDL 11/2024). Las páginas ya lo decían bien.
- **Artistas, textos (2026-11-21), TERMINADO.** FAQ, normativa, cómo funciona e index de `/artistas/` corregidos frente a la norma (alta del art. 11.3 con art. 205.3 LGSS en vez de «65 / Ley 26/1985», carrera mixta, 249 ter, 249 quater.4, mili). Cerrado (2026-11-21): si el alta del art. 11.3 tiene que ser como artista no lo aclara ninguna fuente, y la web lo presenta así («consúltalo al INSS»); no es tarea pendiente, solo cambiaría si llega una respuesta escrita del INSS. Fichas de actores, músicos y especialistas de cine igualadas (usuario, 2026-11-21): el retiro a los 60, con el 8 % y también sin recorte (cantantes, bailarines, trapecistas), es jubilación anticipada a efectos del 249 quater.4 (art. 11.1 «anticipadamente»; art. 206 LGSS «jubilación anticipada por razón de la actividad»). Google AI Studio no aportó fuente (su primera respuesta inventó un «criterio 4/2023» y citó mal el 249 quater.4).
- **Calculadora de artistas (2026-11-21), TERMINADO:** tabla por tramos bajo los escenarios (bloque #ageTableCard, script aparte; calculate() sin tocar), aviso «Antes de decidir» (alta, 249 quater.4, flexible) y textos del formulario más claros. Criterio de años completos mantenido (usuario): cada tramo empieza el día siguiente a «edad ordinaria − n años». PDF con las reglas de impresión de bomberos. Después: edad y cotización real bajo cada escenario, como en bomberos; etiquetas de porcentaje iguales que en el resto de calculadoras (el usuario no quiere tocar las demás calculadoras). Idea aparcada: comparar con la anticipada voluntaria general (art. 208).
- **Criterio de gestión INSS 22/2026 (pluriactividad), TERMINADO:** está en `/normativa.html` (jubilación activa, con botón al PDF de `/documentos/`), en las preguntas frecuentes generales y en la banda «Normativa reciente» de la portada (comprobado el 2026-11-21).
- **RDL 34/2026 (ferroviarios), TERMINADO:** hecho el 2026-11-21 (normativa de ferroviarios y banda dicen que alcanza también a las empresas ferroviarias privadas, lectura del preámbulo aprobada por el usuario).

## Negritas en preguntas frecuentes (terminadas el 2026-11-22)
- Subidas las 379 fichas de profesión (3 piloto + 24 unidades + 18 unidades, con retoques tras la lectura de una muestra).
- Regla v2 usada (`/tmp/w/brief-v2.md`, no está en el repo): pendiente de tu OK para entrar en decisiones.md.
- Hecho después (2026-11-22): quitados los ejemplos con cifras de 20 fichas; actores de doblaje pasa de «65» a «edad ordinaria»; añadido el ×1,5 del fijo discontinuo (art. 247.2) en bordadoras, fresadores, soldadores y operadores-cnc.
- Hecho (2026-11-22): erratas en ~70 fichas; correcciones legales verificadas en 26 (base reguladora de oficio, funcionarios locales en RG desde 1993, art. 152, recorte por mes, art. 196.2, IT desde el día siguiente, RD 1559/1986, art. 26.2 Estatuto Marco).
- Hecho (2026-11-22): lagunas en el RETA corregidas en 142 fichas según el art. 322 (solo los seis meses siguientes al fin de la prestación por cese de actividad).
- Sin tocar por no estar verificado: edad de la forzosa del estatutario, flexible del RD 416/2026 en varias fichas, discapacidad 45 % (pilotos de drones), arts. 213.4 y 313, «dos pensiones» en pluriactividad, presunción de origen laboral, coeficiente de TMA.
- Cosas anotadas que NO son negritas (erratas, ejemplos con cifras posiblemente inventados, contradicciones entre fichas, dudas legales): `docs/notas-revision-negritas.md`. Pendiente revisarlas con el usuario.
- Método barato que funcionó: aplicar con script, filtro de riesgo, lector sobre muestra, máximo 3 agentes a la vez.

## Por confirmar (propuestas de Claude pendientes del OK del usuario)
- Añadir a las fichas de gestión procesal, tramitación procesal y auxilio judicial el botón de la calculadora de funcionarios del Estado para quien está en Clases Pasivas (esa calculadora ya los incluye), como en la de Registro Civil. Hoy solo enlazan la general.

## Pendiente
- Requisito de alta en el Régimen del Mar (2026-11-21, con OK del usuario): corregido el apartado erróneo «No se exige estar en alta» en la normativa de marina mercante, pesca, marisqueo y estiba portuaria (Ley 47/2015, art. 30.4; estibadores, art. 3.h; marisqueo y buceo, DA 5.ª y 6.ª, sin excepción al alta). Minería (no es Régimen del Mar): rectificado su apartado y su FAQ 13, que negaban que hubiera jurisprudencia; ahora explican que la norma no pide alta (RD 2366/1984, art. 2.5) pero que la STS de 16-9-2003 negó la rebaja desde la no alta, y aconsejan seguir de alta o asimilado.
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
