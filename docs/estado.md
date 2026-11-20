# Estado del proyecto (actualizar al cerrar cada sesión de trabajo)

Última actualización: 2026-11-20.

## Qué hay
- 26 calculadoras y unas 330 fichas de oficio (`jubilacion-*/index.html`) más categorías, hub (`hub-profesiones.js`), chat (`faqs-source.json`, `embeddings-compacto.json`).
- Campaña de corrección de fichas cerrada. Se crean fichas nuevas con archivos del usuario (Google AI Studio + NotebookLM).
- Última ficha nueva: `jubilacion-dj-pinchadiscos` (embeddings `nb42_0001–0034`; la siguiente sería `nb43_`).

## Pendiente
- **Certificado de GitHub Pages**: la web funciona con Cloudflare en SSL «Completo»; GitHub no deja marcar «Enforce HTTPS» (se queda en «1 de 3, Certificate Request Error»). El usuario consulta además a Gemini Deep Research. Plan: esperar; quitar y volver a poner el dominio una vez manteniendo la nube naranja; ticket a Soporte; la nube gris solo como último recurso (riesgo por HSTS).
- **Search Console**: 132 URLs «rastreadas, sin indexar» (97 pendientes, 35 con error) sin motivo visible. Volver a exportar en 3-4 semanas (hacia mediados de diciembre) y comparar.
- **Enero 2027**: tareas programadas (IP «67 años» / «66 años y 10 meses»); AdSense, nueva solicitud.
- Ideas aparcadas por el usuario: ver `decisiones.md` (descartado) y la memoria.
- Ideas vivas: estudio de profesiones con trámites para reducir la edad de jubilación; «Análisis de mejora» por profesión (empezó en bomberos); Deportista Profesional; aclarar la portada de Marina Mercante.

## Cómo está montado el control
- `verificar-ficha.py` (ver `procedimiento-ficha-nueva.md`), hook `.githooks/pre-commit` (activar en cada clon), `auditar-sitio.py` (auditoría semanal de solo lectura, martes 9:07).
- Workflows: `build-css.yml` (actualiza los `?v=` de los assets), `indexnow.yml`.
