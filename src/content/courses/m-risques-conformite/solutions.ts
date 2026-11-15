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
  },
};
