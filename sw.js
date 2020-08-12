//ホーム画面にアイコンを表示

self.addEventListener('fetch', function(event) {
});

// service-worker.js
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});

// 現状では、この処理を書かないとService Workerが有効と判定されないようです
self.addEventListener('fetch', function(event) {
	console.log(event.request.url);
});


// Service Workerが有効なブラウザである場合のみ実行
if ("serviceWorker" in navigator) {
  // Service Workerの登録
  // register()の引数にはService Workerの処理が書かれたファイルのpathを指定
  navigator.serviceWorker
    .register("sw.js")
    .then(function (registration) {
      console.log("Success ! Scope: ", registration.scope);
    })
    .catch(function (err) {
      console.log("Failed ! Error: ", err);
    });
}

