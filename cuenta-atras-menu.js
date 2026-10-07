(function () {
  var KEY = 'cj_fecha_jubilacion', KEYO = 'cj_origen_jubilacion';
  var banda = null, timer = null, objetivo = null;

  function leer(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function esc(v) { try { v ? localStorage.setItem(KEY, v.f) : localStorage.removeItem(KEY); if (v) localStorage.setItem(KEYO, v.o); else localStorage.removeItem(KEYO); } catch (e) {} }
  function fechaValida(f) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(f || '');
    if (!m) return null;
    var d = new Date(+m[1], +m[2] - 1, +m[3]);
    return (!isNaN(d) && d.getMonth() === +m[2] - 1 && d.getDate() === +m[3]) ? d : null;
  }
  function rutaActual() {
    var p = location.pathname.replace(/index\.html$/, '');
    return p.charAt(p.length - 1) === '/' ? p : p + '/';
  }
  function norm(o) { return o && /^\/[a-z0-9\-\/]*$/.test(o) ? (o.charAt(o.length - 1) === '/' ? o : o + '/') : null; }

  function menu() {
    var info = document.getElementById('menuCuentaAtrasInfo');
    if (!info) return;
    var d = fechaValida(leer(KEY));
    if (!d) { info.textContent = ''; return; }
    var h = new Date(); h = new Date(h.getFullYear(), h.getMonth(), h.getDate());
    var n = Math.round((d - h) / 86400000);
    info.textContent = n > 0 ? 'Faltan ' + n.toLocaleString('es-ES') + (n === 1 ? ' día' : ' días') : '¡Ya has llegado!';
  }

  function caja(v, et) {
    var t = (et === 'años' || et === 'meses' || et === 'días') ? v : ('0' + v).slice(-2);
    return '<span class="flex flex-col items-center"><span style="background:#0f172a" class="rounded-md px-2 py-1 text-xl sm:text-2xl font-bold leading-none min-w-[2.2rem] text-center">' + t +
      '</span><span class="text-[11px] mt-1" style="color:#94a3b8">' + et + '</span></span>';
  }
  function suma(base, a, me) {
    var r = new Date(base.getTime()), dia = r.getDate();
    r.setDate(1); r.setFullYear(r.getFullYear() + a); r.setMonth(r.getMonth() + me);
    r.setDate(Math.min(dia, new Date(r.getFullYear(), r.getMonth() + 1, 0).getDate()));
    return r;
  }
  function pinta() {
    var reloj = banda && banda.querySelector('#cjReloj');
    if (!reloj) return;
    var ahora = new Date();
    if (ahora >= objetivo) { reloj.innerHTML = '<span class="text-lg font-bold">¡Ya has llegado!</span>'; return; }
    var a = objetivo.getFullYear() - ahora.getFullYear();
    if (suma(ahora, a, 0) > objetivo) a--;
    var me = 0;
    while (me < 11 && suma(ahora, a, me + 1) <= objetivo) me++;
    var resto = objetivo - suma(ahora, a, me);
    var dd = Math.floor(resto / 86400000); resto -= dd * 86400000;
    var hh = Math.floor(resto / 3600000); resto -= hh * 3600000;
    var mm = Math.floor(resto / 60000); resto -= mm * 60000;
    reloj.innerHTML = caja(a, 'años') + caja(me, 'meses') + caja(dd, 'días') + caja(hh, 'h') + caja(mm, 'min') + caja(Math.floor(resto / 1000), 's');
  }
  function quitarBanda() {
    if (timer) { clearInterval(timer); timer = null; }
    if (banda && banda.parentNode) banda.parentNode.removeChild(banda);
    banda = null;
  }
  function montarBanda() {
    quitarBanda();
    var d = fechaValida(leer(KEY)), o = norm(leer(KEYO));
    if (!d || !o || o !== rutaActual()) return;
    var header = document.querySelector('header');
    if (!header) return;
    objetivo = d;
    banda = document.createElement('div');
    banda.className = 'no-print';
    banda.style.cssText = 'background:#1e293b;color:#fff;border-bottom:1px solid #334155;position:relative';
    banda.innerHTML =
      '<a href="/mi-cuenta-atras/" class="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6" aria-label="Mi cuenta atrás hasta la jubilación. Ver y gestionar">' +
      '<span class="text-sm font-semibold uppercase tracking-wider" style="color:#cbd5e1">Mi cuenta atrás</span>' +
      '<span id="cjReloj" class="flex items-end gap-2 sm:gap-3 font-mono tabular-nums" aria-hidden="true"></span>' +
      '<span class="text-sm underline underline-offset-2" style="color:#cbd5e1">Ver y gestionar →</span></a>' +
      '<button type="button" id="cjQuitar" title="Quitar mi cuenta atrás de esta calculadora" aria-label="Quitar mi cuenta atrás de esta calculadora" style="position:absolute;top:6px;right:10px;color:#cbd5e1;font-size:22px;line-height:1;padding:4px 8px;cursor:pointer;background:none;border:0">×</button>';
    header.parentNode.insertBefore(banda, header.nextSibling);
    banda.querySelector('#cjQuitar').addEventListener('click', function () { esc(null); refrescar(); });
    pinta();
    timer = setInterval(pinta, 1000);
  }

  // Botones "Guardar esta fecha" (enlaces /mi-cuenta-atras/?f=...&o=...)
  function botones() { return document.querySelectorAll('a[href^="/mi-cuenta-atras/?f="]'); }
  function datosBoton(a) {
    var q = new URLSearchParams((a.getAttribute('href').split('?')[1]) || '');
    return { f: q.get('f'), o: norm(q.get('o')) };
  }
  function etiquetas() {
    var f = leer(KEY), o = norm(leer(KEYO));
    Array.prototype.forEach.call(botones(), function (a) {
      if (!a.dataset.cjOrig) a.dataset.cjOrig = a.innerHTML;
      var dt = datosBoton(a);
      var activo = f && dt.f === f && dt.o && dt.o === o;
      var nuevo = activo ? '<i class="fa-solid fa-check"></i> Fecha guardada en tu cuenta atrás' : a.dataset.cjOrig;
      if (a.innerHTML !== nuevo) a.innerHTML = nuevo;
    });
  }
  function refrescar() { montarBanda(); menu(); etiquetas(); }

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="/mi-cuenta-atras/?f="]');
    if (!a || e.defaultPrevented || e.ctrlKey || e.metaKey || e.shiftKey) return;
    var dt = datosBoton(a);
    if (!fechaValida(dt.f) || !dt.o) return;
    e.preventDefault();
    esc({ f: dt.f, o: dt.o });
    refrescar();
    // Sube al inicio para que se vea la banda recién añadida (sobre todo en móvil)
    var reducido = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reducido ? 'auto' : 'smooth' });
  });

  function iniciar() {
    refrescar();
    // la calculadora cambia el href de los botones al recalcular
    if (window.MutationObserver) {
      var mo = new MutationObserver(function () { etiquetas(); });
      Array.prototype.forEach.call(botones(), function (a) { mo.observe(a, { attributes: true, attributeFilter: ['href'] }); });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar); else iniciar();
})();
