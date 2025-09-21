

<!-- sw.js (plaats apart als sw.js in de root van je repo) -->
const CACHE_NAME = 'tomatenapp-v1';
const ASSETS = [
'./',
'./index.html',
'./manifest.json',
'./icon-192.png',
'./icon-512.png',
'https://cdn.tailwindcss.com'
];


self.addEventListener('install', (event) => {
event.waitUntil(
caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
);
});


self.addEventListener('activate', (event) => {
event.waitUntil(self.clients.claim());
});


self.addEventListener('fetch', (event) => {
event.respondWith(
caches.match(event.request).then((response) => response || fetch(event.request))
);
});