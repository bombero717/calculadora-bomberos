# Estado del proyecto (actualizar al cerrar cada sesión de trabajo)

Última actualización: 2026-11-20.

## Qué hay
- 26 calculadoras y unas 330 fichas de oficio (`jubilacion-*/index.html`) más categorías, hub (`hub-profesiones.js`), chat (`faqs-source.json`, `embeddings-compacto.json`).
- Campaña de corrección de fichas cerrada. Se crean fichas nuevas con archivos del usuario (Google AI Studio + NotebookLM).
- Última ficha nueva: `jubilacion-dj-pinchadiscos` (embeddings `nb42_0001–0034`; la siguiente sería `nb43_`).

## Por confirmar (propuestas de Claude pendientes del OK del usuario)
- (2026-11-20) Bloques «No lo confundas»: revisados uno a uno con su criterio (se quedan si aportan a la pensión). Propuesto quitar en afiladores, fresadores, matriceros, mecánicos, químicos, joyeros, reposteros, pintores de coches, conserjes de hotel, jefes de sala de juegos, funerarios, caldereros y operadores CNC (solo la frase), eólico (frase GWO), técnicos electrónicos (apartado) y bordadoras (párrafo y título).
- (2026-11-20) Preguntas con «camarero/a», «soldador/a»… en 23 fichas: propuesto pasarlas a masculino natural.
- (2026-11-20) 21 fichas sin «Contacto» en menú y pie (educadores ya corregida): propuesto añadirlo.

## Pendiente
- **Certificado de GitHub Pages: se deja así de momento (2026-11-20).** Cloudflare en SSL «Completo» (no estricto) con Bot Fight Mode encendido; GitHub sigue en «1 de 3» sin dejar marcar «Enforce HTTPS», y no importa: los visitantes navegan cifrados. Si algún día se quiere «Completo (estricto)»: apagar Bot Fight Mode para siempre (si no, cada renovación se atasca), cambiar «Always Use HTTPS» por una Redirect Rule que excluya `/.well-known/`, revisar el WAF y quitar/poner el dominio en GitHub una sola vez. Nunca nube gris (HSTS).
- **Search Console**: 132 URLs «rastreadas, sin indexar» (97 pendientes, 35 con error) sin motivo visible. Volver a exportar en 3-4 semanas (hacia mediados de diciembre) y comparar.
- **Enero 2027**: tareas programadas (IP «67 años» / «66 años y 10 meses»); AdSense, nueva solicitud.
- Ideas aparcadas por el usuario: ver `decisiones.md` (descartado) y la memoria.
- Ideas vivas: estudio de profesiones con trámites para reducir la edad de jubilación; «Análisis de mejora» por profesión (empezó en bomberos); Deportista Profesional; aclarar la portada de Marina Mercante.

## Cómo está montado el control
- `verificar-ficha.py` (ver `procedimiento-ficha-nueva.md`), hook `.githooks/pre-commit` (activar en cada clon), `auditar-sitio.py` (auditoría semanal de solo lectura, martes 9:07).
- Workflows: `build-css.yml` (actualiza los `?v=` de los assets), `indexnow.yml`.

## Cómo se trabaja
- Conversaciones cortas (una por bloque de trabajo o por jornada); empezar con la skill `/web` o con la frase de arranque de `CLAUDE.md`. Reglas de guardado en `que-se-guarda.md`.
