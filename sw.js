self.addEventListener('fetch', function(e){
})

// �t�@�C�u�����̃C���|�[�g
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

// �t�@�C���̃L���b�V��
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
�@url: '/app.js',
    revision: '12345'
  },
])
