self.addEventListener('fetch', function(e){
})

// ファイブラリのインポート
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

// ファイルのキャッシュ
workbox.precaching.precacheAndRoute([
  {
    url: '/index.html',
    revision: '12345'
  },
  {
    url: '/app.css',
    revision: '12345'
  },
  { 
　url: '/app.js',
    revision: '12345'
  },
])
