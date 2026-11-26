import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'p-recherche-initiation',
  practice: {
    'classer-notions': {
      blocks: [
        {
          t: 'table',
          head: ['Situation', 'Notion', 'Ce qui change'],
          rows: [
            ['(a) Calcul de taille faux', '**Défaut**', 'Erreur de code, pas encore démontrée dangereuse'],
            ['(b) Fichier précis qui écrit hors du tampon', '**Vulnérabilité**', 'Le défaut est utilisable contre la sécurité'],
            ['(c) Fichier piégé publié', '**Exploit**', 'Un moyen concret d’attaque circule'],
          ],
        },
        { t: 'p', text: 'Après (b), le développeur prépare un correctif, le teste, prévient l’éditeur ou l’équipe responsable par le canal sécurité et évite de publier le fichier avant la sortie du correctif.' },
      ],
    },
    'lire-fiche': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Fiche A** : serveur public, gravité élevée, exploitation connue : priorité 1, correction immédiate.', '**Fiche C** : gravité élevée mais nécessite un fichier piégé et aucune exploitation connue : priorité 2, correction rapide et sensibilisation à l’ouverture de fichiers.', '**Fiche B** : imprimante isolée, gravité moyenne : priorité 3, correction planifiée.'] },
        { t: 'p', text: 'Contournement possible : restreindre l’accès réseau au service concerné, désactiver la fonction vulnérable ou filtrer les fichiers entrants en attendant le correctif.' },
        { t: 'p', text: 'Le score ne dit rien du contexte : exposition réelle du produit, importance des données, mesures déjà en place, exploitation observée.' },
      ],
    },
    'signalement': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Arrêter** de consulter les factures d’autres clients : aller plus loin serait un accès non autorisé.', '**Signaler** par le canal officiel du fournisseur (page de sécurité, security.txt, contact) avec l’adresse concernée et la manipulation minimale décrite.', '**Ne pas conserver** de données de tiers et ne pas partager l’adresse publiquement.'] },
        { t: 'list', items: ['Ne pas menacer, ni exiger une récompense en échange du silence.', 'Ne pas publier la faille avant la correction.', 'Ne pas tester d’autres comptes ni automatiser la récupération.'] },
      ],
    },
  },
};
