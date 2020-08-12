﻿//ホーム画面にアイコンを表示

self.addEventListener('fetch', function(event) {
	console.log(event.request.url);
});

// service-worker.js
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});

// 現状では、この処理を書かないとService Workerが有効と判定されないようです
//self.addEventListener('fetch', function(event) {});

