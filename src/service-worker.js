const CACHE_NAME = "qr-code-generator-pwa-v1";
const urlsToCache = [
  "./",
  "./app.js",
  "./index.html",
  "./manifest.json",
  "./qrcode.js",
  "./styles.css",
  "./favicon-32x32.png",
];

// Install the service worker and cache files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)),
  );
});

// Intercept fetch requests and serve cached files
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request)),
  );
});

// Update the service worker and remove old caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        }),
      ),
    ),
  );
});
