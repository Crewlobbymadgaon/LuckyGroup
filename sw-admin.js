self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("vc-admin-v1").then(cache => {
      return cache.addAll([
        "/admin.html",
        "/manifest-admin.json",
        "/icon-admin-192.png",
        "/icon-admin-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
