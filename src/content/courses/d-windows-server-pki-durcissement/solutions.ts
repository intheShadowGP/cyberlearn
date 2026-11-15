import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'd-windows-server-pki-durcissement',
  practice: {
    'audit-pki': {
      blocks: [
        {
          t: 'table',
          head: ['Modèle', 'Verdict', 'Correction'],
          rows: [
            ['WebServeurInterne', 'Sain : usage serveur, inscription restreinte, sujet non choisi par le demandeur', '—'],
            ['AuthUtilisateur', '**À risque** : authentification client + sujet fourni par le demandeur + ouvert à tout le domaine', 'Interdire que le demandeur fournisse le sujet (le tirer de l’objet) ; restreindre l’inscription ; approbation si usage sensible'],
            ['SignatureCode', '**À risque** : signature de code ouverte à tout le domaine', 'Restreindre l’inscription à un groupe précis et exiger une approbation'],
          ],
        },
        { t: 'p', text: 'Côté autorité émettrice : surveiller les émissions (volume, modèles sensibles, demandeurs inhabituels), vérifier périodiquement les droits d’inscription des modèles, et s’assurer que la révocation (CRL/OCSP) est publiée et joignable.' },
      ],
    },
    'durcir-dc': {
      blocks: [
        { t: 'list', items: ['Durcissement : Server Core, rôles limités au contrôleur de domaine et au DNS, référence CIS/Microsoft par GPO, pare-feu actif, administration via un poste et un réseau dédiés, comptes du niveau le plus élevé non partagés, LAPS pour l’administrateur local, correctifs rapides.', 'DNS : zone intégrée à AD, mises à jour dynamiques sécurisées uniquement, transferts de zone restreints aux serveurs DNS légitimes, journalisation et surveillance des modifications.'] },
        { t: 'list', ordered: true, items: ['Sauvegarder l’état système du contrôleur (permettant une restauration faisant autorité).', 'Conserver des copies isolées : hors ligne ou stockage immuable, avec des accès distincts de ceux de l’administration courante.', 'Tester régulièrement une restauration complète dans un environnement isolé.'] },
        { t: 'callout', kind: 'warn', text: 'Ne jamais laisser les sauvegardes du contrôleur accessibles avec les mêmes identifiants que l’administration quotidienne : un attaquant qui obtient ces droits viserait aussi les sauvegardes.' },
      ],
    },
  },
};
