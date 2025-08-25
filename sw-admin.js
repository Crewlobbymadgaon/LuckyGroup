self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("vc-admin-cache").then((cache) => {
      return cache.addAll([
        "/admin.html",
        "/icon-admin-192.png",
        "/icon-admin-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
