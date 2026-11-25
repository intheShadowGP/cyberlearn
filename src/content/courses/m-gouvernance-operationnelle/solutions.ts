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
    'revue-comptes': {
      blocks: [
        {
          t: 'table',
          head: ['Rang', 'Compte', 'Risque', 'Action'],
          rows: [
            ['1', 'a.martin', 'Compte d’une personne partie utilisé hier depuis l’extérieur : compromission probable', 'Désactiver immédiatement, examiner l’activité récente, traiter comme un incident, faire pivoter les secrets accessibles'],
            ['2', 'admin-partage', 'Compte d’administration partagé : aucune traçabilité', 'Remplacer par des comptes nominatifs, changer le mot de passe, activer l’authentification renforcée'],
            ['3', 'svc-sauvegarde', 'Droits d’administration sans propriétaire', 'Désigner un propriétaire, réduire les droits au nécessaire, tracer son usage'],
            ['4', 'j.leroy', 'Accumulation de droits depuis la mutation', 'Retirer les droits de la comptabilité, valider le profil logistique avec le responsable'],
            ['5', 'p.durand', 'Compte de stagiaire non désactivé, inactif', 'Désactiver puis supprimer après le délai de conservation'],
          ],
        },
        { t: 'list', items: ['**Départs** : liste de contrôle signée, désactivation automatique à la date de fin de contrat ou de stage depuis l’annuaire RH.', '**Mutations** : revue des droits à la date de mutation, retrait des anciens avant ajout des nouveaux.', '**Comptes de service** : propriétaire obligatoire, revue annuelle.', '**Revue trimestrielle** des comptes à privilèges, validée par les responsables, avec compte rendu daté.'] },
        { t: 'p', text: 'Le cas de a.martin impose de traiter l’événement comme un incident : l’usage d’un compte d’une personne partie suggère un vol d’identifiants ou un accès conservé indûment.' },
      ],
    },
  },
};
