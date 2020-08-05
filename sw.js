self.addEventListener('fetch', function(e){
})

console.log('Hello from sw.js');

// ファイブラリのインポート
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js')

// Service Worker インストール時に実行される
self.addEventListener('install', (event) => {
    console.log('service worker install ...');
});

// Service Worker アクティベート時に実行される
self.addEventListener('activate', (event) => {
  console.info('activate', event);
});
