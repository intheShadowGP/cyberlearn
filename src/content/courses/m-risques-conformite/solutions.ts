import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'm-risques-conformite',
  practice: {
    matrice: {
      blocks: [
        { t: 'table', head: ['Scénario', 'V', 'G', 'Priorité', 'Traitement et mesure principale'], rows: [['R1 Rançongiciel via VPN', '4', '4', '1', 'Réduire : correctifs du VPN, MFA, sauvegardes hors ligne testées'], ['R2 Faux virement', '3', '3', '2', 'Réduire : double validation et rappel au numéro connu ; transférer en partie (assurance)'], ['R3 Incendie salle serveur', '1', '4', '3', 'Réduire / transférer : détection incendie, sauvegardes externalisées, PRA ; assurance'], ['R4 Fuite par un partant', '2', '3', '3', 'Réduire : revue des droits, procédure de départ, DLP sur les exports']] },
        { t: 'p', text: 'Les cotations sont des exemples justifiables : l’important est l’argumentation et la cohérence entre scénarios.' },
      ],
    },
    'nis2-ecart': {
      blocks: [
        { t: 'list', items: ['**Applicabilité** : vérifier le secteur (fabrication de dispositifs médicaux), la taille (400 salariés : entité moyenne ou grande) et les critères de la loi nationale de transposition ; consulter les outils de l’ANSSI.', '**Chantiers** : gouvernance et rôles ; analyse de risques ; procédure de détection et de notification des incidents ; inventaire et sécurité des fournisseurs critiques ; mesures techniques de base (MFA, sauvegardes, correctifs, journalisation) ; continuité.', '**Direction** : approuver les mesures, superviser leur mise en œuvre, suivre une formation ; elle peut être tenue responsable des manquements.'] },
      ],
    },
    'bia-reprise': {
      blocks: [
        {
          t: 'table',
          head: ['Processus', 'Écart', 'Mesure'],
          rows: [
            ['Prise de commandes', 'Sauvegarde quotidienne alors que 15 minutes de perte seulement sont admissibles ; disque branché en permanence', 'Réplication continue ou sauvegardes très fréquentes, copie hors ligne ou immuable, bascule documentée en moins de 4 h'],
            ['Facturation', 'Une sauvegarde par jour pour 4 h de perte admissible', 'Sauvegarde toutes les 4 h au plus, restauration testée en moins de 24 h'],
            ['Paie', 'Hebdomadaire pour 1 jour de perte admissible', 'Sauvegarde quotidienne, procédure de reprise manuelle possible'],
          ],
        },
        { t: 'p', text: 'Le point commun le plus grave : un **disque branché en permanence** est accessible aux machines et peut être chiffré ou supprimé par un rançongiciel. Les sauvegardes doivent être hors ligne ou immuables.' },
        { t: 'list', ordered: true, items: ['**Ordre de redémarrage** : 1) prise de commandes (RTO 4 h), 2) facturation (24 h), 3) paie (5 jours).', '**Sauvegardes** : fréquence alignée sur le RPO, copie hors ligne, chiffrement, surveillance des échecs.', '**Dépendances** : identités, réseau et messagerie à restaurer avant les applications.'] },
        { t: 'p', text: 'Exercice : un test de restauration chronométré de la facturation sur un environnement séparé, suivi d’un exercice sur table simulant un rançongiciel (cellule de crise, communication aux clients, décision de notification à la CNIL). Les écarts constatés alimentent la mise à jour du plan.' },
      ],
    },
  },
};
