/* Selector de fecha (día / mes / año) para los <input type="date">.
   Motivo: en algunos móviles Android (p. ej. Realme/ColorOS) el calendario nativo
   no permite elegir el año ni escribir la fecha, y habría que retroceder mes a mes.
   El <input type="date"> original se conserva (oculto) con el mismo valor ISO y se
   le lanzan los eventos input/change, así que los cálculos de cada página no cambian. */
(function () {
    'use strict';
    var MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    function dias(y, m) { return new Date(y, m, 0).getDate(); }
    function pad(n) { return (n < 10 ? '0' : '') + n; }

    function opcion(v, t) {
        var o = document.createElement('option');
        o.value = v; o.textContent = t;
        return o;
    }

    function crearSelect(inp, etiqueta, texto) {
        var s = document.createElement('select');
        s.className = inp.className;
        s.style.width = '100%';
        s.style.minWidth = '0';
        s.setAttribute('aria-label', etiqueta + ' (' + (inp.getAttribute('aria-label') || 'fecha') + ')');
        s.appendChild(opcion('', texto));
        return s;
    }

    function mejorar(inp) {
        if (inp.dataset.selectorFecha) return;
        inp.dataset.selectorFecha = '1';

        var hoy = new Date(), cy = hoy.getFullYear();
        var esNac = /birth|nac/i.test(inp.id);
        var anioMax = inp.max ? parseInt(inp.max.slice(0, 4), 10) : (esNac ? cy : cy + 10);
        var anioMin = inp.min ? parseInt(inp.min.slice(0, 4), 10) : (esNac ? cy - 100 : cy - 70);

        var wrap = document.createElement('div');
        wrap.className = 'selector-fecha';
        wrap.style.cssText = 'display:grid;grid-template-columns:1fr 1.5fr 1.2fr;gap:8px;';

        var sd = crearSelect(inp, 'Día', 'Día');
        var sm = crearSelect(inp, 'Mes', 'Mes');
        var sa = crearSelect(inp, 'Año', 'Año');
        for (var m = 1; m <= 12; m++) sm.appendChild(opcion(String(m), MESES[m - 1]));
        for (var y = anioMax; y >= anioMin; y--) sa.appendChild(opcion(String(y), String(y)));

        function rellenarDias() {
            var y = parseInt(sa.value, 10) || 2000, m = parseInt(sm.value, 10) || 1;
            var n = dias(y, m), actual = sd.value;
            while (sd.options.length > 1) sd.remove(1);
            for (var d = 1; d <= n; d++) sd.appendChild(opcion(String(d), String(d)));
            sd.value = (actual && parseInt(actual, 10) <= n) ? actual : '';
        }

        function emitir() {
            var iso = (sd.value && sm.value && sa.value)
                ? sa.value + '-' + pad(parseInt(sm.value, 10)) + '-' + pad(parseInt(sd.value, 10)) : '';
            if (inp.value === iso) return;
            interno = true; inp.value = iso; interno = false;
            inp.dispatchEvent(new Event('input', { bubbles: true }));
            inp.dispatchEvent(new Event('change', { bubbles: true }));
        }

        function cargar() {
            var p = /^(\d{4})-(\d{2})-(\d{2})$/.exec(inp.value || '');
            if (!p) { sa.value = ''; sm.value = ''; rellenarDias(); sd.value = ''; return; }
            sa.value = String(parseInt(p[1], 10));
            sm.value = String(parseInt(p[2], 10));
            rellenarDias();
            sd.value = String(parseInt(p[3], 10));
        }

        var interno = false;
        // Si la página asigna inp.value por código (p. ej. al restaurar una fecha guardada), se refleja en los selectores.
        var desc = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
        if (desc && desc.configurable !== false) {
            try {
                Object.defineProperty(inp, 'value', {
                    configurable: true,
                    get: function () { return desc.get.call(inp); },
                    set: function (v) { desc.set.call(inp, v); if (!interno) cargar(); }
                });
            } catch (e) { /* sin sincronización por código */ }
        }
        rellenarDias();
        sm.addEventListener('change', function () { rellenarDias(); emitir(); });
        sa.addEventListener('change', function () { rellenarDias(); emitir(); });
        sd.addEventListener('change', emitir);

        wrap.appendChild(sd); wrap.appendChild(sm); wrap.appendChild(sa);
        inp.parentNode.insertBefore(wrap, inp);
        inp.style.display = 'none';
        inp.setAttribute('tabindex', '-1');
        cargar();
    }

    function iniciar() {
        var l = document.querySelectorAll('input[type="date"]');
        for (var i = 0; i < l.length; i++) mejorar(l[i]);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
    else iniciar();
})();
