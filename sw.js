//ホーム画面にアイコンを表示

//self.addEventListener('fetch', function(event) {});

// service-worker.js
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);

