// sw.js
// Sube CACHE_VERSION en cada despliegue que toque el motor de cálculo (cualquier
// <script> de las 6 páginas) o los assets estáticos listados abajo. Es lo que
// fuerza la purga de la caché anterior.
const CACHE_VERSION = 'v1';
const CACHE_NAME = `calc-bomberos-${CACHE_VERSION}`;

// Rutas relativas al scope del SW — compatibles con GitHub Pages en raíz o subpath.
const STATIC_ASSETS = [
    'manifest.json',
    'favicon.ico',
    'favicon-jubilacion-bomberos-256.webp',
    'apple-touch-icon.png',
    'icon-192.png',
    'icon-512.png',
    'bombero-escalera.webp'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
    );
    // Sin self.skipWaiting() a propósito: evita cambiar el motor de cálculo
    // debajo de una pestaña ya abierta a mitad de una simulación.
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            )
        )
    );
    self.clients.claim();
});

function isHtmlRequest(request) {
    return request.mode === 'navigate' ||
        (request.method === 'GET' && (request.headers.get('accept') || '').includes('text/html'));
}

self.addEventListener('fetch', (event) => {
    const { request } = event;
    if (request.method !== 'GET') return;

    if (isHtmlRequest(request)) {
        // NETWORK-FIRST: nunca servir un motor de cálculo desactualizado si hay
        // red disponible. Cae a caché SOLO si falla la petición de red.
        event.respondWith(
            fetch(request)
                .then((response) => {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
                    return response;
                })
                .catch(() => caches.match(request))
        );
        return;
    }

    // CACHE-FIRST: solo para assets estáticos que casi nunca cambian.
    event.respondWith(
        caches.match(request).then((cached) => {
            if (cached) return cached;
            return fetch(request).then((response) => {
                const copy = response.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
                return response;
            });
        })
    );
});
