/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
const dataLovers = 'data-lovers-site-v1';
const assets = [
  '/',
  'index.html',
  'main.js',
  'data.js',
  'style.css',
  'img/favicon.ico'
]
// eslint-disable-next-line arrow-parens
self.addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open(dataLovers).then(cache => {
      cache.addAll(assets);
    })
  );
});
self.addEventListener('fetch', fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    }),
  );
});
