const CACHE_NAME = 'sudoku-site-cache-v1';

const URLS = [
  './',
  './index.html',
  './src/styles/index.scss',
  './vite.svg',
  './notes-button.svg',
  './help-button.svg',
  './clear-button.svg',
  './back-move-button.svg',
  './fullscreen.svg',
];

this.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(URLS);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      })
  );
});

this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache.match(event.request).then((response) => {
        if (event.request.method === 'POST') {
          return fetch(event.request);
        }
        const fetchPromise = fetch(event.request).then((
          networkResponse
        ) => {
          if (event.request.method === 'GET') {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        });
        return response || fetchPromise;
      })
    )
  );
});

this.addEventListener('activate', (event) => {
  console.log('activate');
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => caches.delete(cacheName))
        )
      )
  );
});
