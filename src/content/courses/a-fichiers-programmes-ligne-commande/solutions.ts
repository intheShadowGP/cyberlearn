import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'a-fichiers-programmes-ligne-commande',
  practice: {
    'lire-pseudocode': {
      blocks: [
        { t: 'p', text: 'Non-adhérent, prix 80 : `prix > 100` est faux (r reste 0) ; non adhérent (pas de +5). Remise de 0 %, résultat = **80**.' },
        { t: 'p', text: 'Adhérent, prix 200 : `prix > 100` est vrai (r = 10), adhérent (r = 15). Remise de 15 %, résultat = 200 − 30 = **170**.' },
        { t: 'p', text: 'La fonction calcule un prix après remise : 10 % au-dessus de 100, plus 5 % pour un adhérent.' },
        { t: 'callout', kind: 'tip', text: 'Si `prix` venait d’une saisie utilisateur, il faudrait le valider côté serveur : vérifier que c’est bien un nombre, positif, dans une plage raisonnable, avant tout calcul — sinon une valeur forgée (négative, énorme, non numérique) pourrait fausser le résultat.' },
      ],
    },
    'classer-notions': {
      blocks: [
        { t: 'list', items: ['Type réel d’un fichier : un fichier nommé `facture.pdf.exe` est en réalité un exécutable ; se fier au nom conduit à l’ouvrir en croyant lire un document.', 'Dépendance : une bibliothèque réutilisée par l’application comporte une vulnérabilité connue ; l’application en hérite tant qu’on ne l’a pas mise à jour.', 'Ne pas faire confiance au client : une vérification faite seulement dans le navigateur (par exemple « montant positif ») se contourne en envoyant directement la requête ; le serveur doit revérifier.'] },
        { t: 'p', text: 'Ces trois exemples montrent que des notions de base — fichier, dépendance, frontière de confiance — sont déjà des leviers de sécurité, bien avant les techniques avancées.' },
      ],
    },
  },
};
