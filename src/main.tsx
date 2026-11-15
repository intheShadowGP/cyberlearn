import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { applyPrefs, getPrefs } from './lib/prefs';
import { registerServiceWorker } from './sw/register';
import { compactActivity } from './lib/progress';
import './styles/global.css';

applyPrefs(getPrefs());

const root = document.getElementById('root');
if (!root) throw new Error('Élément #root introuvable');
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

if (import.meta.env.PROD) registerServiceWorker();
// Borne la taille du journal d'activité (exports toujours sous le plafond d'import).
void compactActivity().catch(() => undefined);
