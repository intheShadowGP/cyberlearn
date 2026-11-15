/** Mise à jour disponible : un nouveau service worker attend son activation. */
type UpdateListener = (apply: () => void) => void;
const updateListeners = new Set<UpdateListener>();
let pendingApply: (() => void) | null = null;

export function onUpdateAvailable(l: UpdateListener): () => void {
  updateListeners.add(l);
  if (pendingApply) l(pendingApply);
  return () => updateListeners.delete(l);
}

export function registerServiceWorker(): void {
  if (!('serviceWorker' in navigator)) return;
  window.addEventListener('load', () => {
    // URL relative : fonctionne à la racine comme sous /<depot>/.
    navigator.serviceWorker
      .register('./sw.js', { scope: './' })
      .then((reg) => {
        const announce = (worker: ServiceWorker) => {
          pendingApply = () => {
            worker.postMessage('SKIP_WAITING');
          };
          for (const l of updateListeners) l(pendingApply);
        };
        if (reg.waiting && navigator.serviceWorker.controller) announce(reg.waiting);
        reg.addEventListener('updatefound', () => {
          const w = reg.installing;
          if (!w) return;
          w.addEventListener('statechange', () => {
            if (w.state === 'installed' && navigator.serviceWorker.controller) announce(w);
          });
        });
      })
      .catch(() => {
        /* hors ligne indisponible : l'application fonctionne normalement en ligne */
      });
    // Recharge uniquement lors d'une mise à jour (pas lors de la toute première installation).
    const hadController = !!navigator.serviceWorker.controller;
    let reloading = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (reloading || !hadController) return;
      reloading = true;
      window.location.reload();
    });
  });
}
