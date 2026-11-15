import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'm-gouvernance-operationnelle',
  practice: {
    'priorisation-vulns': {
      blocks: [
        {
          t: 'table',
          head: ['Rang', 'Élément', 'Justification', 'Délai cible'],
          rows: [
            ['1', '#1 Passerelle VPN', 'Exploitée activement, exposée sur Internet, point d’entrée du réseau', '48 h ou atténuation immédiate'],
            ['2', '#5 Serveur de test oublié', 'Exposé sur Internet, élevée ; probablement ni surveillé ni maintenu', '7 jours (ou arrêt immédiat s’il est inutile)'],
            ['3', '#4 Poste de la comptabilité', 'Exploitée activement, interne mais très ciblé (hameçonnage)', 'Rapidement, au plus 7 jours vu l’exploitation'],
            ['4', '#2 Serveur de fichiers', 'Critique mais interne et sans exploitation connue', '30 jours'],
            ['5', '#3 Site vitrine', 'Moyenne, sans exploitation connue', 'Cycle mensuel'],
          ],
        },
        { t: 'p', text: 'La ligne 5 révèle un défaut d’inventaire : un serveur exposé sur Internet que personne ne connaissait. Il faut l’ajouter à l’inventaire avec un propriétaire, ou l’arrêter, et rechercher d’autres actifs non déclarés (découverte réseau, console cloud).' },
      ],
    },
    'fournisseur-infogerance': {
      blocks: [
        { t: 'list', items: ['Évaluation : certifications et périmètre (ISO 27001), rapports d’audit, gestion des comptes de ses administrateurs, MFA, poste d’administration dédié, localisation des équipes et des données, sous-traitants, historique d’incidents.'] },
        { t: 'list', ordered: true, items: ['Notification de tout incident de sécurité sous 24 heures.', 'Comptes nominatifs pour chaque intervenant, MFA obligatoire, accès via un bastion journalisé fourni par le client.', 'Droit d’audit, y compris par un tiers mandaté.', 'Sous-traitance soumise à accord préalable et aux mêmes exigences.', 'Réversibilité, restitution des données et retrait des accès en fin de contrat.'] },
        { t: 'p', text: 'Pendant le contrat : revue trimestrielle des comptes de l’infogérant, analyse des journaux du bastion, revue annuelle de sécurité, suivi des engagements de correction, exercice commun de gestion d’incident.' },
      ],
    },
  },
};
