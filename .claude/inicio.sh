#!/bin/sh
# Se ejecuta al empezar cada sesión de Claude Code en este repositorio.
cd "$(git rev-parse --show-toplevel 2>/dev/null || echo .)" || exit 0
git config core.hooksPath .githooks 2>/dev/null
git fetch -q 2>/dev/null
echo "== INICIO DE SESIÓN: hook de pre-commit activado. Estado respecto a origin:"
git status -sb 2>/dev/null | head -3
echo
echo "== LEE ENTERO Y APLICA: CLAUDE.md (lista corta), docs/decisiones.md y docs/estado.md. Resumen del estado:"
[ -f docs/estado.md ] && sed -n '1,60p' docs/estado.md
echo
echo "== Decisiones cerradas (no se replantean):"
[ -f docs/decisiones.md ] && sed -n '1,80p' docs/decisiones.md
exit 0
