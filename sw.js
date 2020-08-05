self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('cache-v1')
      .then(function(cache) {
        return cache.addAll([
          '/',
          '/styles.css',
          'app.js',
          '/image/default.png'
        ]);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // �L���b�V�����������̂Ń��X�|���X��Ԃ�
        if (response) {
          return response;
        }
        // �L���b�V�����Ȃ������̂Œʏ�� fetch ���s��
        // �d�v�F���N�G�X�g�̓X�g���[���ł���A1�x�����ǂݎ��Ȃ����ߕ������܂��B
        // �u���E�U�[�̃t�F�b�`�ɉ����A�L���b�V���Ŏg�p���邽��2�K�v�ɂȂ�܂��B
        var fetchRequest = event.request.clone();
        return fetch(fetchRequest)
          .then(
            function(response) {
              // �L���ȉ�������M�������ǂ������m�F���܂�
              if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
              // �L���ȉ�������M�����悤�Ȃ̂ŁA�L���b�V���ɒǉ����Ă����܂��B
              // �d�v�F���N�G�X�g�Ɠ��l�̗��R�ɂ��A���X�|���X���������܂��B
              var responseToCache = response.clone();
              caches.open('cache-v1')
                .then(function(cache) {
                  cache.put(event.request, responseToCache);
                });
                return response;
            }
          );
        }
      )
  );
});

self.addEventListener('activate', function(event) {
  var cacheKeeplist = ['cache-v2'];
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheKeeplist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});