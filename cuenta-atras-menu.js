(function () {
  try {
    var el = document.getElementById('menuCuentaAtrasInfo');
    if (!el) return;
    var f = localStorage.getItem('cj_fecha_jubilacion');
    if (!f || !/^\d{4}-\d{2}-\d{2}$/.test(f)) return;
    var p = f.split('-').map(Number);
    var d = new Date(p[0], p[1] - 1, p[2]);
    if (isNaN(d) || d.getMonth() !== p[1] - 1) return;
    var h = new Date(); h = new Date(h.getFullYear(), h.getMonth(), h.getDate());
    var n = Math.round((d - h) / 86400000);
    el.textContent = n > 0 ? 'Faltan ' + n.toLocaleString('es-ES') + (n === 1 ? ' día' : ' días') : '¡Ya has llegado!';
  } catch (e) {}
})();
