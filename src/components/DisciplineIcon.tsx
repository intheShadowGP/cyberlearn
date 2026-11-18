import type { ReactElement } from 'react';
import type { ModuleId } from '../content/types';

/**
 * Icône de discipline : SVG en ligne, style trait, aux dimensions homogènes.
 * Décorative (aria-hidden) : elle complète le nom de la discipline, ne le remplace pas.
 * Aucune dépendance ajoutée — cohérent avec les SVG déjà présents dans le projet.
 */
const PATHS: Record<ModuleId, ReactElement> = {
  // A — Fondamentaux : bouclier
  A: <path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z" />,
  // B — Réseaux : nœuds reliés
  B: <g><circle cx="6" cy="7" r="2" /><circle cx="18" cy="7" r="2" /><circle cx="12" cy="18" r="2" /><path d="M7.6 8.4 11 16M16.4 8.4 13 16M8 7h8" /></g>,
  // C — Linux : terminal
  C: <g><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M7 10l3 2-3 2M13 14h4" /></g>,
  // D — Windows : fenêtre
  D: <g><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 4v5" /></g>,
  // E — Cryptographie : cadenas
  E: <g><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></g>,
  // F — Web : globe
  F: <g><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></g>,
  // G — Code sécurisé : chevrons de code
  G: <path d="M8 6l-5 6 5 6M16 6l5 6-5 6" />,
  // H — Pentest : cible
  H: <g><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" /></g>,
  // I — SOC : écran de supervision
  I: <g><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4M7 11l2-2 2 2 3-4" /></g>,
  // J — Forensique : loupe
  J: <g><circle cx="10" cy="10" r="6" /><path d="M14.5 14.5 20 20" /></g>,
  // K — Malware : bestiole / virus
  K: <g><rect x="8" y="8" width="8" height="10" rx="4" /><path d="M12 8V5M8 11H4M16 11h4M8 15H4M16 15h4M9 6 7 4M15 6l2-2" /></g>,
  // L — Cloud
  L: <path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.5A3.5 3.5 0 0 1 18 18z" />,
  // M — Gouvernance : document
  M: <g><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4M9 12h6M9 16h6" /></g>,
  // N — OT / IoT : usine
  N: <path d="M3 21V10l6 4V10l6 4V7l6-3v17z" />,
  // O — Identité : utilisateur
  O: <g><circle cx="12" cy="8" r="4" /><path d="M5 20a7 7 0 0 1 14 0" /></g>,
  // P — Recherche avancée : fiole
  P: <g><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" /><path d="M8 15h8" /></g>,
  // Q — IA : réseau de neurones
  Q: <g><circle cx="5" cy="7" r="1.6" /><circle cx="5" cy="17" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="7" r="1.6" /><circle cx="19" cy="17" r="1.6" /><path d="M6.5 7.5 10.5 11M6.5 16.5 10.5 13M13.5 11 17.5 7.5M13.5 13 17.5 16.5" /></g>,
  // R — Certifications : médaille
  R: <g><circle cx="12" cy="9" r="6" /><path d="M9 14l-2 7 5-3 5 3-2-7" /></g>,
};

export function DisciplineIcon({ module, className }: { module: ModuleId; className?: string }) {
  return (
    <svg
      className={className ?? 'disc-icon'}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[module]}
    </svg>
  );
}
