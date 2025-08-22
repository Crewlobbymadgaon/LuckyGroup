self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("vc-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/admin.html",
        "/favicon.png",
        "/icon-192.png",
        "/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
