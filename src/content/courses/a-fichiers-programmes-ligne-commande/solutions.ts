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
    'lire-commande': {
      blocks: [
        { t: 'list', items: ['`cat` lit le fichier du journal d’authentification et envoie son contenu sur sa sortie.', '`grep "Failed password"` ne garde que les lignes qui contiennent cette expression, c’est-à-dire les échecs de connexion.', '`wc -l` compte les lignes reçues. Les deux tubes `|` relient la sortie de chaque commande à l’entrée de la suivante.'] },
        { t: 'p', text: 'Le résultat est un nombre : le total d’échecs de connexion consignés dans le fichier. Un total anormalement élevé peut révéler une attaque par force brute, à confirmer en regardant les adresses sources et les horaires.' },
        { t: 'callout', kind: 'tip', text: 'Sous Windows, l’idée est la même avec PowerShell : par exemple `Get-Content journal.log | Select-String "Failed" | Measure-Object`, ou l’interrogation du journal de sécurité des événements.' },
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
