import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'm-gouvernance-initiation',
  practice: {
    'classer-incidents': {
      blocks: [
        {
          t: 'table',
          head: ['#', 'Objectif atteint', 'Mesure simple'],
          rows: [
            ['1', 'Confidentialité', 'Contrôler les partages avant publication, accès limité par défaut'],
            ['2', 'Intégrité', 'Antivirus à jour, sauvegardes pour comparer, contrôle des montants importants'],
            ['3', 'Disponibilité', 'Sauvegardes, serveur de secours, plan de reprise testé'],
            ['4', 'Confidentialité (mot de passe exposé)', 'Gestionnaire de mots de passe, authentification multifacteur'],
          ],
        },
        { t: 'p', text: 'La situation 4 relève d’abord de la **sensibilisation** : c’est un comportement. Les mesures techniques (second facteur) réduisent l’impact, mais ne remplacent pas le réflexe.' },
      ],
    },
    'evaluer-risque': {
      blocks: [
        {
          t: 'table',
          head: ['Risque', 'Vraisemblance', 'Gravité', 'Décision et mesure'],
          rows: [
            ['R1 Liste d’adhérents accessible par lien', 'Moyenne', 'Élevée (données personnelles)', 'Réduire : partage nominatif, accès limité, durée de validité'],
            ['R2 Sauvegarde sur disque toujours branché', 'Moyenne', 'Élevée (perte totale possible)', 'Réduire : copie hors ligne alternée, test de restauration'],
            ['R3 Téléphones personnels des bénévoles', 'Élevée', 'Moyenne', 'Réduire : code de verrouillage, authentification renforcée ; ou accepter formellement avec règles d’usage'],
          ],
        },
        { t: 'p', text: 'Les cotations sont des exemples justifiables. L’important est d’argumenter et de décider explicitement.' },
      ],
    },
    'courriel-urgent': {
      blocks: [
        { t: 'list', items: ['**Urgence** et **confidentialité** imposées (« ne le dites à personne »).', '**Changement de coordonnées bancaires** dans un message.', 'Le « directeur » est injoignable, ce qui empêche la vérification.', 'Demande inhabituelle de paiement.'] },
        { t: 'list', ordered: true, items: ['Ne pas effectuer le paiement.', 'Vérifier par un autre canal : appeler le directeur à son numéro habituel, ou sa secrétaire.', 'Signaler le message à l’équipe sécurité.', 'Ne pas répondre à l’adresse du message.'] },
        { t: 'p', text: 'Règle protectrice : toute demande de paiement inhabituelle ou de changement de coordonnées bancaires exige une **double validation** par un second responsable et un rappel au numéro connu.' },
      ],
    },
  },
};
