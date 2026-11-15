/* Service worker CyberAcadémie — généré au build à partir de ce modèle.
 * Stratégie :
 *  - installation : mise en cache de TOUS les fichiers du build (cours, corrections,
 *    laboratoires inclus) pour un fonctionnement hors ligne complet ;
 *  - activation : suppression des anciens caches ;
 *  - requêtes : cache d'abord pour les ressources de la même origine, réseau sinon ;
 *    les requêtes cross-origin ne sont jamais interceptées ni mises en cache.
 * Aucune donnée utilisateur ne transite par le service worker.
 */
const VERSION = __VERSION__;
const PRECACHE = __PRECACHE__;
const CACHE = 'cyberacademie-' + VERSION;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      cache.addAll(PRECACHE.map((p) => new Request(new URL(p, self.registration.scope), { cache: 'reload' }))),
    ),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('cyberacademie-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (!url.href.startsWith(self.registration.scope)) return;

  if (req.mode === 'navigate') {
    // Application monopage avec HashRouter : toute navigation sert index.html.
    event.respondWith(
      caches.match(new URL('./', self.registration.scope).href, { ignoreSearch: true }).then(
        (cached) => cached || fetch(req),
      ),
    );
    return;
  }

  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (res.ok && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      });
    }),
  );
});
