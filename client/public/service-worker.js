// Academic Ledger – NO CACHE service worker (safe for updates)

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.map(key => caches.delete(key)));
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
