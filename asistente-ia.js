// ============================================================
// asistente-ia.js — icono + panel de chat + conexión real al Worker
// calculatujubilacion.es
// ============================================================
// Se carga con <script src="/asistente-ia.js?v=1"></script> en las páginas
// que quieras que tengan el asistente. No depende de hub-profesiones.js.

(function () {
    // Cambia esto si alguna vez mueves el Worker a otra URL.
    const WORKER_URL = 'https://calculatujubilacion-asistente.bombero717.workers.dev/';

    // --- HTML del icono + panel, inyectado dentro del <header> ---
    // Guarda de seguridad: si este script se cargara más de una vez en la
    // misma página (puede pasar en páginas con más de un <script> de
    // hub-profesiones.js), no duplicamos el icono ni el panel.
    if (document.getElementById('chatBtn')) return;

    const header = document.querySelector('header');
    if (!header) return; // si la página no tiene <header>, no hacemos nada

    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
        <button id="chatBtn" aria-label="Abrir asistente" aria-expanded="false" aria-controls="chatPanel"
            class="absolute top-[48px] right-2 z-30 w-11 h-11 flex items-center justify-center rounded-lg hover:bg-slate-800 transition-colors">
            <svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8-1.17 0-2.29-.196-3.32-.554L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        </button>

        <div id="chatPanel" class="hidden fixed top-0 right-0 w-full sm:w-96 bg-white text-slate-800 shadow-2xl z-50 flex flex-col transition-transform translate-x-full" style="height: 100vh; height: 100dvh;">
            <div class="bg-slate-900 text-white px-4 py-3 flex items-center justify-between flex-shrink-0">
                <div class="flex items-center gap-2">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8-1.17 0-2.29-.196-3.32-.554L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span class="font-bold text-sm">Asistente de jubilación</span>
                </div>
                <button id="chatCloseBtn" aria-label="Cerrar asistente" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-800 transition-colors">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div id="chatMessages" class="flex-1 overflow-y-auto px-4 py-4 space-y-3 text-base">
                <div class="bg-slate-100 rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                    Hola. Pregúntame sobre tu jubilación y te responderé con lo
                    que ya tenemos verificado en la web.
                </div>
            </div>

            <form id="chatForm" class="border-t border-slate-200 p-3 flex gap-2 flex-shrink-0">
                <input id="chatInput" type="text" placeholder="Escribe tu pregunta…"
                    class="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-slate-900"
                    autocomplete="off">
                <button type="submit" aria-label="Enviar"
                    class="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-colors flex-shrink-0">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19V5m0 0l-7 7m7-7l7 7" />
                    </svg>
                </button>
            </form>
        </div>
    `;
    // Insertamos los hijos del wrapper directamente en el header
    // (no el propio wrapper, para no añadir un <div> extra al layout).
    while (wrapper.firstChild) {
        header.appendChild(wrapper.firstChild);
    }

    const btn = document.getElementById('chatBtn');
    const panel = document.getElementById('chatPanel');
    const closeBtn = document.getElementById('chatCloseBtn');
    const messages = document.getElementById('chatMessages');
    const form = document.getElementById('chatForm');
    const input = document.getElementById('chatInput');

    function openPanel() {
        panel.classList.remove('hidden');
        requestAnimationFrame(() => panel.classList.remove('translate-x-full'));
        btn.setAttribute('aria-expanded', 'true');
        input.focus();
    }
    function closePanel() {
        panel.classList.add('translate-x-full');
        btn.setAttribute('aria-expanded', 'false');
        setTimeout(() => panel.classList.add('hidden'), 300);
    }
    btn.addEventListener('click', () => {
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        isOpen ? closePanel() : openPanel();
    });
    closeBtn.addEventListener('click', closePanel);

    function anadirMensaje(texto, esUsuario, url) {
        const div = document.createElement('div');
        div.className = esUsuario
            ? 'bg-slate-900 text-white rounded-xl rounded-tr-sm px-3 py-2 max-w-[85%] ml-auto'
            : 'bg-slate-100 rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%]';
        div.textContent = texto;
        if (url) {
            const link = document.createElement('a');
            link.href = url;
            link.textContent = 'Ver la ficha completa →';
            link.className = 'block mt-2 text-blue-700 font-semibold underline underline-offset-2 text-base';
            div.appendChild(link);
        }
        if (!esUsuario) {
            const aviso = document.createElement('div');
            aviso.textContent = 'Soy un asistente de IA que busca en las respuestas ya verificadas de esta web, sin inventar datos — pero no sustituye a la calculadora o información faq y normativa específica de tu profesión, consulta directamente para evitar errores.';
            aviso.className = 'block mt-2 pt-2 border-t border-slate-200 text-sm text-slate-400';
            div.appendChild(aviso);
        }
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
        return div;
    }

    // Si la última respuesta pidió la profesión, la siguiente pregunta del
    // usuario se combina con la original en vez de tratarse como nueva.
    let esperandoProfesion = false;
    let preguntaPendiente = '';

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const escrito = input.value.trim();
        if (!escrito) return;

        anadirMensaje(escrito, true);
        input.value = '';
        input.disabled = true;

        // Si tocaba aclarar profesión, enviamos la pregunta original junto
        // con la profesión como dato aparte — el Worker filtra por esa
        // profesión antes de buscar, en vez de depender de que el texto
        // combinado se parezca por casualidad a la redacción de la FAQ.
        const preguntaAEnviar = esperandoProfesion ? preguntaPendiente : escrito;
        const profesionAEnviar = esperandoProfesion ? escrito : '';
        esperandoProfesion = false;

        const cargando = anadirMensaje('Pensando…', false);

        try {
            const resp = await fetch(WORKER_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: preguntaAEnviar, profesion: profesionAEnviar }),
            });
            const data = await resp.json();
            cargando.remove();

            if (data.error) {
                anadirMensaje('Ha habido un problema técnico. Prueba de nuevo en un momento.', false);
            } else {
                anadirMensaje(data.respuesta, false, data.url);
                if (data.tipo === 'pedir_profesion') {
                    esperandoProfesion = true;
                    preguntaPendiente = escrito;
                }
            }
        } catch (err) {
            cargando.remove();
            anadirMensaje('No he podido conectar. Comprueba tu conexión e inténtalo de nuevo.', false);
        } finally {
            input.disabled = false;
            input.focus();
        }
    });
})();
