# Qué se guarda en docs/ y qué no

**Regla del usuario (2026-11-20): nada entra en `decisiones.md` sin su OK.** Cuando Claude crea que algo merece guardarse, al terminar la tarea le pone un bloque corto: cada punto en una línea, con la redacción exacta que quedaría. El usuario contesta «OK», lo corrige o lo tacha. Hasta entonces se anota en `estado.md`, apartado «Por confirmar» (recordatorio, no regla). Lo que sea solo estado (qué está subido, qué queda) se actualiza sin consultar.

## Va a `decisiones.md` (permanente, con OK)
- Lo que el usuario ha decidido o dicho expresamente y no quiere que se le vuelva a preguntar.
- Un error repetido que le ha molestado, con la regla que lo evita.
- Lo que ha descartado y por qué.

## Va a `estado.md` (cambia a menudo, sin consultar)
- Qué está subido y qué queda pendiente; fechas de seguimiento.
- Dudas abiertas, bajo «Por confirmar».

## No se guarda
- Ideas o conclusiones de Claude que el usuario no ha aprobado.
- Un texto que aún se está debatiendo (se guarda cuando lo apruebe).
- Datos que caducan solos: ramas, puertos, hashes de caché, cifras en euros.
- Un comentario suelto de una sola vez, sin repetirse ni darse como regla.
- Datos legales sin fuente (van a la ficha, con su artículo).

## Cuándo se guarda
En puntos de control, no «al cerrar» (una conversación puede durar días y Claude no sabe cuándo se cierra): tras cada tarea terminada, tras cada decisión aprobada, y siempre que el usuario diga «guarda» o «cierro».
