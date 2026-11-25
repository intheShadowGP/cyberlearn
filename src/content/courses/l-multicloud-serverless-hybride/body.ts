import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'l-multicloud-serverless-hybride',
  lesson: {
    intro:
      'Le premier cours cloud a posé le modèle de responsabilité partagée et l’IAM sur l’exemple d’AWS. Les principes se transposent, mais chaque fournisseur a son vocabulaire, sa hiérarchie de ressources et ses pièges. Beaucoup d’organisations utilisent en plus plusieurs clouds à la fois, ou un mélange de cloud et de serveurs internes. Ce cours étend la sécurité cloud à Azure et Google Cloud, au réseau cloud, au serverless et aux environnements hybrides.',
    sections: [
      {
        id: 'commun',
        title: 'Un socle commun, plusieurs fournisseurs',
        blocks: [
          { t: 'p', text: 'Les grands fournisseurs partagent les mêmes fondations : **responsabilité partagée** (le fournisseur sécurise le socle, le client sécurise sa configuration, ses identités et ses données), **IAM** (identités, rôles, permissions) et **moindre privilège**. Ce qui change, ce sont les noms et l’organisation des ressources.' },
          {
            t: 'table',
            head: ['Notion', 'AWS', 'Azure', 'Google Cloud'],
            rows: [
              ['Regroupement de ressources', 'Compte / Organizations', 'Abonnement / Groupe de gestion', 'Projet / Dossier / Organisation'],
              ['Annuaire d’identités', 'IAM', 'Microsoft Entra ID', 'Cloud Identity + IAM'],
              ['Attribution de droits', 'Politiques et rôles IAM', 'Rôles RBAC', 'Rôles IAM'],
              ['Identité non humaine', 'Rôle IAM', 'Identité managée', 'Compte de service'],
            ],
          },
          { t: 'def', term: 'Gestion de la posture (CSPM)', text: 'Outils qui évaluent en continu la configuration d’un ou plusieurs clouds par rapport à des bonnes pratiques et à des référentiels (CIS), et signalent les écarts : stockage exposé, droits trop larges, absence de journalisation. Indispensable dès qu’on gère plusieurs comptes ou plusieurs fournisseurs.' },
          { t: 'callout', kind: 'key', text: 'La plupart des incidents cloud viennent d’une erreur de configuration du client, pas d’une faille du fournisseur : stockage rendu public, droits excessifs, secret exposé. La sécurité cloud est d’abord une discipline de configuration et d’identité.' },
        ],
      },
      {
        id: 'azure',
        title: 'Azure : identités et rôles',
        blocks: [
          { t: 'p', text: 'Sur Azure, l’annuaire d’identités est **Microsoft Entra ID** (anciennement Azure AD). Les droits sur les ressources sont attribués par le **contrôle d’accès basé sur les rôles (RBAC)**, à une **portée** donnée (groupe de gestion, abonnement, groupe de ressources, ressource).' },
          {
            t: 'table',
            head: ['Point de vigilance', 'Risque', 'Mesure'],
            rows: [
              ['Rôles très larges (Propriétaire, Contributeur) à une portée élevée', 'Droits disproportionnés sur de nombreuses ressources', 'Rôles au plus près du besoin, à la portée la plus fine'],
              ['Rôles d’administration d’Entra ID (administrateur général)', 'Contrôle de tout le locataire', 'Peu de titulaires, MFA résistante, accès juste-à-temps'],
              ['Identités managées trop permissives', 'Une ressource compromise agit largement', 'Permissions minimales par identité managée'],
              ['Accès conditionnel absent', 'Connexions depuis n’importe où sans contrôle', 'Politiques d’accès conditionnel (MFA, conformité de l’appareil)'],
            ],
          },
          { t: 'def', term: 'Identité managée', text: 'Identité attribuée à une ressource Azure (machine, fonction) pour accéder à d’autres services sans secret stocké. Elle évite les clés en dur, mais doit recevoir le minimum de droits, sinon la compromission de la ressource donne ces droits.' },
          { t: 'callout', kind: 'tip', text: 'Les rôles d’administration d’Entra ID et les rôles sur les ressources sont deux plans distincts : un contrôle régulier des deux évite les cumuls de privilèges hérités de projets passés.' },
        ],
      },
      {
        id: 'gcp',
        title: 'Google Cloud : hiérarchie et comptes de service',
        blocks: [
          { t: 'p', text: 'Google Cloud organise les ressources en **hiérarchie** : organisation, dossiers, projets, ressources. Les droits IAM s’attribuent à un niveau et **s’héritent** vers le bas, ce qui rend le niveau d’attribution décisif.' },
          {
            t: 'table',
            head: ['Point de vigilance', 'Risque', 'Mesure'],
            rows: [
              ['Rôle accordé au niveau de l’organisation', 'Héritage sur tous les projets', 'Accorder au projet concerné, pas plus haut'],
              ['Rôles primitifs (Owner, Editor)', 'Droits très larges', 'Rôles prédéfinis ciblés, voire rôles personnalisés'],
              ['Compte de service par défaut sur-privilégié', 'Une machine compromise agit largement', 'Comptes de service dédiés, droits minimaux ; éviter les clés exportées'],
              ['Clés de compte de service exportées', 'Secret durable qui fuit', 'Fédération d’identité de charge de travail au lieu de clés statiques'],
            ],
          },
          { t: 'def', term: 'Compte de service', text: 'Identité non humaine de Google Cloud utilisée par les applications et les machines. Le compte de service par défaut d’un projet est souvent trop permissif : on lui préfère des comptes dédiés aux droits minimaux, et une fédération plutôt que des clés exportées (qui, une fois volées, restent valables).' },
          {
            t: 'example',
            title: 'Le même droit, deux niveaux d’attribution',
            blocks: [
              { t: 'p', text: 'Accorder le rôle « lecteur d’un bucket » **au projet « paie »** donne la lecture des buckets de ce seul projet. Accorder ce même rôle **à l’organisation** le donne sur tous les buckets de tous les projets, présents et futurs : le compte concerné peut alors lire des données sans aucun rapport avec son besoin.' },
              { t: 'p', text: 'La correction n’est pas de changer le rôle, mais son **niveau** : l’attribuer au projet, voire à la ressource, et non à l’organisation.' },
            ],
          },
          { t: 'callout', kind: 'key', text: 'Sur Google Cloud comme sur Azure, l’erreur la plus coûteuse est d’accorder un droit **trop haut dans la hiérarchie** : il se propage à tout ce qui est en dessous. On attribue toujours au niveau le plus bas suffisant.' },
        ],
      },
      {
        id: 'reseau',
        title: 'Sécurité réseau cloud',
        blocks: [
          { t: 'p', text: 'Chaque fournisseur propose un réseau privé virtuel (VPC chez AWS et Google, VNet chez Azure) où l’on place ses ressources, avec des **groupes de sécurité** (pare-feu attachés aux ressources) et des règles de routage.' },
          {
            t: 'table',
            head: ['Mesure', 'Rôle'],
            rows: [
              ['Groupes de sécurité en refus par défaut', 'N’ouvrir que les ports nécessaires, par source précise'],
              ['Sous-réseaux privés', 'Ressources sans adresse publique, non joignables depuis Internet'],
              ['Points d’accès privés aux services', 'Atteindre le stockage ou les API du cloud sans passer par Internet'],
              ['Journalisation des flux (flow logs)', 'Tracer et analyser le trafic réseau'],
            ],
          },
          { t: 'def', term: 'Exposition publique involontaire', text: 'Ressource (machine, base, stockage) rendue accessible depuis Internet par une règle trop large (`0.0.0.0/0`) ou une adresse publique non nécessaire. C’est l’une des causes les plus fréquentes de compromission cloud, repérable par un outil de posture.' },
          { t: 'callout', kind: 'warn', text: 'Ouvrir un port d’administration (SSH, RDP, base de données) à `0.0.0.0/0` expose la ressource à un balayage permanent d’Internet. L’accès d’administration passe par un bastion, un point d’accès privé ou un VPN, jamais par une ouverture mondiale.' },
        ],
      },
      {
        id: 'serverless-hybride',
        title: 'Serverless et environnements hybrides',
        blocks: [
          { t: 'p', text: 'Le **serverless** (fonctions à la demande, par exemple Lambda, Azure Functions, Cloud Functions) supprime la gestion du serveur : plus de système d’exploitation à corriger. Mais la surface de sécurité se déplace vers le code, les permissions de la fonction et ses déclencheurs.' },
          {
            t: 'table',
            head: ['Aspect serverless', 'Point de vigilance'],
            rows: [
              ['Permissions de la fonction', 'Rôle au minimum nécessaire : une fonction compromise n’agit que dans ce périmètre'],
              ['Déclencheurs et entrées', 'Valider les événements entrants (une fonction peut être déclenchée par des données externes)'],
              ['Dépendances', 'Les bibliothèques embarquées peuvent être vulnérables : les analyser et les mettre à jour'],
              ['Secrets', 'Dans un coffre, pas dans les variables d’environnement de la fonction en clair'],
            ],
          },
          { t: 'def', term: 'Environnement hybride', text: 'Combinaison de ressources sur site et dans le cloud (ou sur plusieurs clouds). La difficulté est la cohérence : une identité unifiée, des politiques équivalentes partout, une visibilité unique, sinon chaque environnement a ses propres trous.' },
          { t: 'callout', kind: 'key', text: 'En hybride et multi-cloud, on vise une **identité fédérée** (un seul annuaire de référence), des **politiques cohérentes** d’un environnement à l’autre et une **posture surveillée de façon unifiée** (CSPM multi-cloud). Multiplier les consoles sans vue d’ensemble multiplie les angles morts.' },
        ],
      },
      {
        id: 'detection',
        title: 'Journalisation, détection et réponse dans plusieurs clouds',
        blocks: [
          { t: 'p', text: 'Sans journaux, un incident cloud ne peut ni être détecté ni être reconstitué. Chaque fournisseur propose ses journaux d’**opérations de gestion** (qui a créé, modifié, supprimé quoi), ses journaux d’**accès aux données** et ses journaux de **flux réseau**. Il faut les **activer avant** l’incident, les **centraliser** et les **surveiller**.' },
          {
            t: 'table',
            head: ['Besoin', 'AWS', 'Azure', 'Google Cloud'],
            rows: [
              ['Opérations de gestion', 'CloudTrail', 'Journal d’activité', 'Journaux d’audit Cloud (activité d’administration)'],
              ['Accès aux données', 'Événements de données CloudTrail, journaux d’accès au stockage', 'Journaux de ressources (diagnostics)', 'Journaux d’audit Cloud (accès aux données, à activer)'],
              ['Flux réseau', 'VPC Flow Logs', 'Journaux de flux des groupes de sécurité', 'Journaux de flux VPC'],
              ['Alertes et posture', 'GuardDuty, Security Hub', 'Microsoft Defender for Cloud', 'Security Command Center'],
            ],
          },
          { t: 'def', term: 'Centralisation des journaux', text: 'Envoi des journaux de tous les comptes, abonnements et projets vers un espace **séparé et protégé** (en écriture seule). Un attaquant qui prend le contrôle d’un compte ne peut ainsi pas effacer ses traces, et les analystes disposent d’une vue unique, par exemple dans un SIEM.' },
          {
            t: 'table',
            head: ['Événement à surveiller', 'Pourquoi c’est suspect'],
            rows: [
              ['Désactivation ou suppression de la journalisation', 'Effacement de traces'],
              ['Création d’une clé d’accès ou de compte de service', 'Identifiant durable pour persister'],
              ['Attribution d’un rôle d’administrateur à un nouveau compte', 'Élévation de privilèges ou persistance'],
              ['Connexion depuis un pays ou une adresse inhabituels', 'Identifiant volé'],
              ['Ouverture d’un port d’administration au monde entier', 'Préparation d’un accès ou erreur dangereuse'],
            ],
          },
          { t: 'list', ordered: true, items: ['**Contenir** : désactiver les clés et sessions de l’identité compromise, retirer ses droits, isoler la ressource par un groupe de sécurité restrictif (sans la supprimer).', '**Préserver** : exporter les journaux de gestion et de flux, réaliser un instantané des disques, noter les empreintes.', '**Investiguer** : actions réalisées par l’identité, ressources créées, données lues, autres comptes touchés.', '**Éradiquer et rétablir** : supprimer les ressources et identifiants créés par l’attaquant, **faire pivoter** les secrets exposés, corriger la cause.'] },
          { t: 'callout', kind: 'warn', text: 'La journalisation n’est pas rétroactive : un journal non activé n’a rien enregistré. Activez-la, centralisez-la et fixez la durée de conservation avant d’en avoir besoin.' },
        ],
      },
      {
        id: 'donnees',
        title: 'Données, clés de chiffrement et souveraineté',
        blocks: [
          { t: 'p', text: 'Les fournisseurs chiffrent les données au repos et en transit, mais la question décisive est : **qui contrôle les clés** ? Le chiffrement protège contre le vol d’un support, pas contre l’abus d’un compte qui a le droit de lire : le service déchiffre de façon transparente pour une identité autorisée.' },
          {
            t: 'table',
            head: ['Modèle de clé', 'Qui contrôle', 'Usage typique'],
            rows: [
              ['Clé gérée par le fournisseur', 'Le fournisseur, de façon transparente', 'Protection de base, sans effort'],
              ['Clé gérée par le client (CMK) dans un service de clés', 'Le client : droits, rotation, révocation', 'Données sensibles et exigences de conformité'],
              ['Clé apportée par le client (BYOK)', 'Le client génère, le fournisseur utilise', 'Maîtrise de l’origine de la clé'],
              ['Clé conservée hors du cloud (HYOK)', 'Le client, hors de l’infrastructure du fournisseur', 'Données très sensibles, souveraineté'],
            ],
          },
          { t: 'def', term: 'Résidence et souveraineté des données', text: 'La **résidence** est le lieu (région, pays) où les données sont stockées et traitées. La **souveraineté** ajoute la question du droit applicable : un fournisseur soumis à une loi extraterritoriale peut être contraint de livrer des données, même hébergées en Europe. Le référentiel **SecNumCloud** de l’ANSSI qualifie des fournisseurs protégés de ces lois.' },
          { t: 'list', items: ['**Séparer** l’administration de la clé (qui la gère) de son usage (qui chiffre et déchiffre).', '**Faire pivoter** régulièrement les clés et **journaliser** chaque usage.', '**Protéger la destruction** d’une clé (délai de suppression, droits séparés) : sans clé, les données sont irrécupérables.', '**Classer** les données pour réserver les clés du client et la résidence stricte à celles qui l’exigent.'] },
          { t: 'callout', kind: 'tip', text: 'Une clé de chiffrement stockée à côté des données qu’elle protège ne protège rien. La clé reste dans un service dédié, avec des droits distincts de ceux du stockage.' },
        ],
      },
    ],
    useCases: [
      'Revue de sécurité d’un abonnement Azure : rôles RBAC, administrateurs Entra ID, accès conditionnel, identités managées.',
      'Audit d’un projet Google Cloud : niveau d’attribution des rôles, comptes de service par défaut, clés exportées.',
      'Durcissement réseau : groupes de sécurité en refus par défaut, suppression des expositions publiques, points d’accès privés.',
    ],
    commonMistakes: [
      'Accorder un rôle trop haut dans la hiérarchie (organisation Azure/GCP) et le laisser s’hériter partout.',
      'Laisser le compte de service par défaut sur-privilégié, ou exporter des clés statiques.',
      'Ouvrir un port d’administration à `0.0.0.0/0`.',
      'Mettre des secrets en clair dans les variables d’environnement d’une fonction serverless.',
      'Gérer plusieurs clouds sans identité fédérée ni vue de posture unifiée.',
    ],
    bestPractices: [
      'Mêmes principes partout : responsabilité partagée, IAM, moindre privilège ; attribution au niveau le plus bas suffisant.',
      'Azure : rôles RBAC ciblés, peu d’administrateurs Entra ID avec MFA, accès conditionnel, identités managées minimales.',
      'Google Cloud : rôles prédéfinis ciblés, comptes de service dédiés, fédération plutôt que clés exportées.',
      'Réseau : refus par défaut, sous-réseaux privés, points d’accès privés, journalisation des flux, aucune exposition publique inutile.',
      'Serverless : permissions minimales, validation des déclencheurs, secrets en coffre ; hybride : identité fédérée et posture unifiée (CSPM).',
    ],
    keyPoints: [
      'Les principes (responsabilité partagée, IAM, moindre privilège) se transposent ; seuls les noms changent.',
      'Azure : Entra ID + RBAC à la bonne portée ; peu d’administrateurs généraux, identités managées minimales.',
      'Google Cloud : droits hérités dans la hiérarchie, à accorder au niveau le plus bas ; comptes de service dédiés.',
      'Réseau cloud : refus par défaut, sous-réseaux privés, pas d’exposition publique involontaire.',
      'Serverless : la surface se déplace vers le code et les permissions ; hybride : identité fédérée et posture unifiée.',
    ],
  },
  practice: [
    {
      id: 'audit-roles-cloud',
      kind: 'analysis',
      title: 'Repérer des attributions de droits dangereuses',
      context: [
        { t: 'p', text: 'Extrait d’un audit multi-cloud :' },
        {
          t: 'table',
          head: ['#', 'Fournisseur', 'Attribution'],
          rows: [
            ['1', 'Azure', 'Rôle « Propriétaire » accordé à un groupe de 30 développeurs au niveau de l’abonnement'],
            ['2', 'Google Cloud', 'Rôle « Editor » accordé au niveau de l’organisation à un compte de service d’intégration continue'],
            ['3', 'Google Cloud', 'Clé de compte de service exportée, stockée dans les variables du pipeline'],
            ['4', 'Azure', 'Base de données avec adresse publique et pare-feu autorisant 0.0.0.0/0'],
          ],
        },
      ],
      steps: ['Expliquer le risque de chaque ligne.', 'Proposer la correction de chacune.', 'Indiquer quel type d’outil aurait détecté ces écarts automatiquement.'],
    },
    {
      id: 'securiser-fonction',
      kind: 'case',
      title: 'Cas pratique : sécuriser une fonction serverless',
      context: [{ t: 'p', text: 'Une fonction serverless est déclenchée par le dépôt d’un fichier dans un stockage, le transforme et écrit le résultat dans une base. Elle utilise aujourd’hui un rôle d’administration du projet, lit ses secrets dans ses variables d’environnement et embarque plusieurs bibliothèques jamais mises à jour.' }],
      steps: ['Lister les problèmes de sécurité.', 'Proposer la configuration cible (permissions, secrets, dépendances, déclencheur).', 'Indiquer ce qu’il reste à surveiller.'],
    },
    {
      id: 'incident-multicloud',
      kind: 'analysis',
      title: 'Analyse : un extrait de journal d’audit cloud',
      context: [
        { t: 'code', lang: 'text', code: 'Heure (UTC)  Identité                         Action                                               Détail\n02:10        svc-ci (compte de service)        CreateServiceAccountKey                              pour svc-ci, depuis 198.51.100.23\n02:14        svc-ci                            SetIamPolicy (projet « paie »)                       rôle Owner accordé à external-user@exemple.net\n02:16        svc-ci                            UpdateSink (journalisation)                          destination de l’export des journaux supprimée\n02:19        external-user@exemple.net         storage.objects.list / get                           bucket « paie-archives » (4 800 objets)\n02:41        external-user@exemple.net         compute.firewalls.insert                             tcp:22 depuis 0.0.0.0/0 sur le réseau « prod »\n\nLe compte svc-ci n’est utilisé en temps normal que depuis le réseau du pipeline.' },
      ],
      steps: ['Reconstituer l’enchaînement et les erreurs de configuration qui l’ont permis.', 'Indiquer les actions de confinement et de préservation, dans l’ordre.', 'Proposer les mesures de prévention et de détection pour éviter la répétition.'],
    },
  ],
  questions,
  resources: [
    { title: 'Microsoft Cloud Security Benchmark', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/security/benchmark/azure/' },
    { title: 'Google Cloud Security Best Practices Center', source: 'Google Cloud', url: 'https://cloud.google.com/security/best-practices' },
    { title: 'CIS Benchmarks (AWS, Azure, GCP)', source: 'Center for Internet Security', url: 'https://www.cisecurity.org/cis-benchmarks' },
    { title: 'Serverless Top 10 / Cloud-Native Security', source: 'OWASP', url: 'https://owasp.org/www-project-serverless-top-10/' },
    { title: 'SecNumCloud', source: 'ANSSI', url: 'https://cyber.gouv.fr/secnumcloud-pour-les-fournisseurs-de-services-cloud' },
  ],
};
