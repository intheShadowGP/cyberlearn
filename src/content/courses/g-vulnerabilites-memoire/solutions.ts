import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'g-vulnerabilites-memoire',
  practice: {
    'labo-revue': {
      blocks: [
        { t: 'p', text: 'Le débriefing du laboratoire « Revue de code C » liste chaque ligne vulnérable, sa classe et sa correction.' },
        { t: 'p', text: 'Méthode : suivre chaque donnée provenant du réseau jusqu’à son utilisation, et vérifier chaque calcul de taille et chaque copie.' },
      ],
    },
    'protections-cve': {
      blocks: [
        { t: 'list', items: ['**Canari** : bloque l’écrasement linéaire de l’adresse de retour, sauf fuite du canari.', '**NX** : empêche l’exécution d’un code injecté sur la pile ; l’attaquant doit recourir au ROP.', '**Sans PIE**, le code du programme est à une adresse fixe : il fournit des fragments ROP à adresse connue, ce qui neutralise en grande partie l’ASLR des bibliothèques.'] },
        { t: 'p', text: 'Conclusion : exploitation plus difficile mais plausible. Correction prioritaire, et recompilation avec PIE en mesure immédiate.' },
      ],
    },
  },
};
