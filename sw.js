self.addEventListener('fetch', function(e){
})

console.log('Hello from sw.js');

// �t�@�C�u�����̃C���|�[�g
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js')

// Service Worker �C���X�g�[�����Ɏ��s�����
self.addEventListener('install', (event) => {
    console.log('service worker install ...');
});

// Service Worker �A�N�e�B�x�[�g���Ɏ��s�����
self.addEventListener('activate', (event) => {
  console.info('activate', event);
});
