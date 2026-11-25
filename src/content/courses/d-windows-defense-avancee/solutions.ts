import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'd-windows-defense-avancee',
  practice: {
    'regle-detection': {
      blocks: [
        { t: 'p', text: 'La règle cible l’événement **4624** (ouverture de session réseau) sur des comptes dont le nom contient « admin » : elle ne regarde **pas la réplication**. Elle se déclencherait à chaque connexion réseau d’un compte d’administration légitime (partages, supervision, scripts) : beaucoup de faux positifs, et elle **manquerait** l’extraction par réplication, qui n’ouvre pas de session de ce type chez un compte « admin ».' },
        { t: 'code', lang: 'text', caption: 'Règle corrigée', code: 'title: Réplication d’annuaire par un compte non contrôleur\nlogsource: { product: windows, service: security }\ndetection:\n  selection:\n    EventID: 4662\n    Properties|contains:\n      - \'1131f6aa-9c07-11d1-f79f-00c04fc2dcd2\'\n      - \'1131f6ad-9c07-11d1-f79f-00c04fc2dcd2\'\n  filter_dc:\n    SubjectUserName|endswith: \'$\'\n  condition: selection and not filter_dc\nlevel: high' },
        { t: 'list', items: ['Prérequis : activer l’audit « accès au service d’annuaire » (réussites) sur les contrôleurs de domaine et collecter les événements 4662 vers le SIEM ; maintenir la liste des comptes de contrôleurs légitimes (ou le motif de leur nom) et des comptes de synchronisation autorisés.', 'Tests : rejouer une extraction par réplication dans un laboratoire (équipe offensive, outil de simulation) et vérifier l’alerte ; observer plusieurs jours de fonctionnement normal pour mesurer les faux positifs (sauvegarde, synchronisation, supervision).'] },
        { t: 'list', items: ['Qualité : taux de faux positifs, délai de détection, couverture de la technique dans la cartographie ATT&CK, revue des exclusions à date fixe.', 'Réponse associée : une alerte de niveau élevé déclenche l’isolement du compte et de la machine source, et la vérification des droits de réplication accordés.'] },
      ],
    },
    'plan-identite': {
      blocks: [
        {
          t: 'table',
          head: ['Priorité', 'Mesure', 'Déploiement', 'Indicateur'],
          rows: [
            ['1', 'Comptes cloud privilégiés dédiés, non synchronisés ; accès conditionnel et élévation temporaire (PIM)', 'Créer les comptes, migrer les rôles, retirer les rôles des comptes synchronisés', '% de rôles privilégiés portés par des comptes cloud dédiés'],
            ['2', 'Stations d’administration pour les comptes tier 0, politiques d’authentification en pilote', 'Comptes pilotes, compte de secours, puis généralisation', 'Nombre d’ouvertures de session tier 0 hors PAW'],
            ['3', 'Audit de NTLM, puis restriction par étapes ; signature LDAP et SMB', 'Audit 30 jours, liste des dépendances, restriction par serveur', 'Volume de NTLM, nombre de clients sans signature'],
            ['4', 'Quota de comptes machines à zéro ; revue des ACL sensibles et d’AdminSDHolder', 'Processus de jonction par un compte dédié', 'Comptes machines créés par des utilisateurs ordinaires'],
            ['5', 'Règles de détection de l’annuaire (4662, 5136, 4887), leurres, tests', 'Audit DS Access, règles Sigma testées, un exercice purple team', 'Techniques couvertes, faux positifs par semaine'],
          ],
        },
        { t: 'p', text: 'L’ordre suit le rapport risque/effort : les rôles cloud privilégiés sur des comptes synchronisés exposent le cloud à une compromission locale ; l’exposition des comptes tier 0 est le chemin de compromission le plus fréquent ; NTLM et les signatures se traitent par audit puis par étapes pour éviter les pannes ; la détection permet ensuite de mesurer l’effet des autres mesures.' },
        { t: 'callout', kind: 'warn', text: 'Ne jamais imposer une restriction sans audit préalable ni compte de secours : un verrouillage trop brutal des comptes d’administration ou de NTLM peut empêcher d’administrer le domaine au moment où l’on en a besoin.' },
      ],
    },
    'reponse-annuaire': {
      blocks: [
        { t: 'p', text: 'L’usage des droits de réplication par un compte ordinaire depuis un poste de travail est un **signe fort d’extraction des secrets de l’annuaire** ; la modification de la GPO et les tâches planifiées inconnues indiquent une **prise de contrôle déjà avancée** (déploiement de code sur les serveurs). Il faut traiter l’incident comme une compromission de l’annuaire.' },
        { t: 'list', ordered: true, items: ['**Qualifier** : confirmer le 4662 (compte, source, droits), vérifier que le compte n’a jamais eu ces droits légitimement, rechercher d’autres actions du compte (4624, 5136, 4728), lister les serveurs touchés par la tâche.', '**Confiner** : isoler le poste source sans l’éteindre, désactiver le compte, purger les sessions et tickets, retirer la GPO modifiée de la liaison, isoler les trois serveurs, bloquer les communications sortantes inhabituelles.', '**Collecter** : capturer la mémoire du poste et des serveurs, conserver journaux, copies de la tâche et de la GPO, calculer les empreintes, tenir la chaîne de conservation.', '**Évaluer l’étendue** : l’attaquant a pu copier tous les secrets du domaine ; considérer comme exposés les comptes privilégiés, de service et le secret de signature des tickets du domaine ; chercher les persistances (ACL, AdminSDHolder, certificats, clés, historique de SID).'] },
        { t: 'list', items: ['Éradication et reconstruction : réinitialiser les secrets exposés (mots de passe privilégiés et de service, double réinitialisation du compte de signature des tickets), retirer toutes les persistances trouvées, reconstruire les serveurs douteux, restaurer l’annuaire depuis une sauvegarde saine si l’intégrité est incertaine, revérifier la PKI.', 'Retour d’expérience : chronologie, cause d’entrée, droits de réplication à restreindre, règle de détection améliorée, exercice purple team sur ce scénario, mise à jour du modèle de menace.'] },
        { t: 'callout', kind: 'tip', text: 'L’ordre compte : collecter avant de reconstruire, désactiver la persistance avant de supprimer ses fichiers, réinitialiser les secrets une fois le contrôle repris, sinon l’attaquant réutilise ceux qu’il a copiés.' },
      ],
    },
  },
};
