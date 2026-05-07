const CACHE_NAME = 'cyber-daoist-cache-v2';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    './assets/icon-192.png',
    './assets/icon-512.png',
    './assets/amulet/tobywang.webp',
    './assets/amulet/homl.webp',
    './assets/amulet/lulurun.webp',
    './assets/amulet/winddragon.webp',
    './assets/amulet/financial.webp',
    './assets/markdown/financial.md',
    './assets/audio/golden-light.mp3',
    './assets/audio/La_Ley_de_Shilin.mp3'
];

// Install Event - Pre-cache core files and media assets
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Initiating system pre-cache loop');
            return cache.addAll(ASSETS);
        }).then(() => self.skipWaiting())
    );
});

// Activate Event - Purge stale cache resources
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log('[Service Worker] Purging stale spiritual registry:', key);
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch Event - Cache-First interceptor for offline resilience
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(e.request);
        })
    );
});
