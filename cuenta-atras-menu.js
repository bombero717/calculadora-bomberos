(function () {
  var KEY = 'cj_fecha_jubilacion', KEYO = 'cj_origen_jubilacion';
  var f, o;
  try { f = localStorage.getItem(KEY); o = localStorage.getItem(KEYO); } catch (e) { return; }
  var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(f || '');
  if (!m) return;
  var y = +m[1], mo = +m[2], d = +m[3];
  var objetivo = new Date(y, mo - 1, d);
  if (isNaN(objetivo) || objetivo.getMonth() !== mo - 1 || objetivo.getDate() !== d) return;

  // Entrada del menú: "Faltan N días"
  var info = document.getElementById('menuCuentaAtrasInfo');
  if (info) {
    var h = new Date(); h = new Date(h.getFullYear(), h.getMonth(), h.getDate());
    var n = Math.round((objetivo - h) / 86400000);
    info.textContent = n > 0 ? 'Faltan ' + n.toLocaleString('es-ES') + (n === 1 ? ' día' : ' días') : '¡Ya has llegado!';
  }

  // Banda con reloj: solo en la calculadora donde se guardó la fecha
  if (!o || !/^\/[a-z0-9\-\/]*$/.test(o)) return;
  var p = location.pathname.replace(/index\.html$/, '');
  if (p.charAt(p.length - 1) !== '/') p += '/';
  if (o.charAt(o.length - 1) !== '/') o += '/';
  if (p !== o) return;
  var header = document.querySelector('header');
  if (!header) return;

  var banda = document.createElement('div');
  banda.className = 'no-print';
  banda.style.cssText = 'background:#1e293b;color:#fff;border-bottom:1px solid #334155';
  banda.innerHTML =
    '<a href="/mi-cuenta-atras/" class="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 " aria-label="Mi cuenta atrás hasta la jubilación. Ir a Mi cuenta atrás">' +
    '<span class="text-sm font-semibold uppercase tracking-wider" style="color:#cbd5e1">Mi cuenta atrás</span>' +
    '<span id="cjReloj" class="flex items-end gap-2 sm:gap-3 font-mono tabular-nums" aria-hidden="true"></span>' +
    '<span class="text-sm underline underline-offset-2" style="color:#cbd5e1">Ver y gestionar →</span></a>';
  header.parentNode.insertBefore(banda, header.nextSibling);
  var reloj = banda.querySelector('#cjReloj');

  function caja(v, et) {
    return '<span class="flex flex-col items-center"><span style="background:#0f172a" class="rounded-md px-2 py-1 text-xl sm:text-2xl font-bold leading-none min-w-[2.2rem] text-center">' +
      (et === 'años' || et === 'meses' || et === 'días' ? v : ('0' + v).slice(-2)) +
      '</span><span class="text-[11px] mt-1" style="color:#94a3b8">' + et + '</span></span>';
  }
  function suma(base, a, me) {
    var r = new Date(base.getTime()), dia = r.getDate();
    r.setDate(1); r.setFullYear(r.getFullYear() + a); r.setMonth(r.getMonth() + me);
    var max = new Date(r.getFullYear(), r.getMonth() + 1, 0).getDate();
    r.setDate(Math.min(dia, max));
    return r;
  }
  function pinta() {
    var ahora = new Date();
    if (ahora >= objetivo) { reloj.innerHTML = '<span class="text-lg font-bold">¡Ya has llegado!</span>'; return; }
    var a = objetivo.getFullYear() - ahora.getFullYear();
    if (suma(ahora, a, 0) > objetivo) a--;
    var me = 0;
    while (me < 11 && suma(ahora, a, me + 1) <= objetivo) me++;
    var base = suma(ahora, a, me);
    var resto = objetivo - base;
    var dd = Math.floor(resto / 86400000); resto -= dd * 86400000;
    var hh = Math.floor(resto / 3600000); resto -= hh * 3600000;
    var mm = Math.floor(resto / 60000); resto -= mm * 60000;
    var ss = Math.floor(resto / 1000);
    reloj.innerHTML = caja(a, 'años') + caja(me, 'meses') + caja(dd, 'días') + caja(hh, 'h') + caja(mm, 'min') + caja(ss, 's');
  }
  pinta();
  setInterval(pinta, 1000);
})();
