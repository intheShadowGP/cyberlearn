import type { CourseBody } from '../../types';

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
  ],
  questions: [
    { id: 'mch-q1', type: 'single', difficulty: 1, skills: ['l-multicloud'], prompt: 'Que recouvre le modèle de responsabilité partagée, commun aux fournisseurs cloud ?', options: [{ id: 'a', text: 'Le fournisseur sécurise le socle, le client sécurise sa configuration, ses identités et ses données' }, { id: 'b', text: 'Le fournisseur est responsable de tout' }, { id: 'c', text: 'Le client n’a aucune responsabilité de sécurité' }, { id: 'd', text: 'La responsabilité change chaque mois' }] },
    { id: 'mch-q2', type: 'single', difficulty: 2, skills: ['l-multicloud'], prompt: 'Quelle est la cause la plus fréquente des incidents de sécurité cloud ?', options: [{ id: 'a', text: 'Une erreur de configuration du client (exposition, droits excessifs, secret exposé)' }, { id: 'b', text: 'Une faille du socle matériel du fournisseur' }, { id: 'c', text: 'La panne d’un câble sous-marin' }, { id: 'd', text: 'La mise à jour automatique du système d’exploitation' }] },
    { id: 'mch-q3', type: 'short', difficulty: 2, skills: ['l-multicloud'], prompt: 'Quel type d’outil évalue en continu la configuration d’un cloud par rapport aux bonnes pratiques et signale les écarts ? (sigle)', placeholder: 'sigle' },
    { id: 'mch-q4', type: 'single', difficulty: 2, skills: ['l-azure-gcp'], prompt: 'Comment s’appelle l’annuaire d’identités d’Azure ?', options: [{ id: 'a', text: 'Microsoft Entra ID (anciennement Azure AD)' }, { id: 'b', text: 'Cloud Identity' }, { id: 'c', text: 'AWS IAM' }, { id: 'd', text: 'Active Directory Federation Services' }] },
    { id: 'mch-q5', type: 'truefalse', difficulty: 3, skills: ['l-azure-gcp'], prompt: 'Sur Google Cloud, un rôle accordé au niveau de l’organisation s’hérite sur tous les dossiers et projets en dessous.' },
    { id: 'mch-q6', type: 'multi', difficulty: 3, skills: ['l-azure-gcp'], prompt: 'Quelles pratiques réduisent le risque lié aux identités non humaines dans le cloud ?', options: [{ id: 'a', text: 'Donner à chaque identité managée (Azure) ou compte de service (GCP) le minimum de droits' }, { id: 'b', text: 'Éviter les clés de compte de service exportées au profit d’une fédération' }, { id: 'c', text: 'Utiliser le compte de service par défaut sur-privilégié partout' }, { id: 'd', text: 'Attribuer les droits au niveau le plus bas suffisant' }] },
    { id: 'mch-q7', type: 'single', difficulty: 2, skills: ['l-azure-gcp'], prompt: 'Pourquoi limiter le nombre de titulaires du rôle « administrateur général » d’Entra ID ?', options: [{ id: 'a', text: 'Ce rôle contrôle tout le locataire : chaque titulaire est une cible à très fort impact' }, { id: 'b', text: 'Pour réduire la facture' }, { id: 'c', text: 'Parce qu’Azure limite à deux administrateurs' }, { id: 'd', text: 'Pour accélérer les connexions' }] },
    { id: 'mch-q8', type: 'open', difficulty: 3, skills: ['l-azure-gcp', 'l-multicloud'], prompt: 'Expliquez pourquoi accorder un droit « trop haut dans la hiérarchie » est une erreur majeure sur Azure comme sur Google Cloud, et comment l’éviter.' },
    { id: 'mch-q9', type: 'single', difficulty: 2, skills: ['l-reseau-cloud'], prompt: 'À quoi sert un groupe de sécurité dans un réseau cloud ?', options: [{ id: 'a', text: 'C’est un pare-feu attaché à une ressource, qui n’autorise que les flux voulus' }, { id: 'b', text: 'Il attribue les rôles IAM' }, { id: 'c', text: 'Il chiffre les disques' }, { id: 'd', text: 'Il remplace le compte de service' }] },
    { id: 'mch-q10', type: 'truefalse', difficulty: 2, skills: ['l-reseau-cloud'], prompt: 'Ouvrir un port d’administration (SSH, RDP) à 0.0.0.0/0 dans le cloud est une pratique acceptable si le mot de passe est fort.' },
    { id: 'mch-q11', type: 'multi', difficulty: 3, skills: ['l-reseau-cloud'], prompt: 'Quelles mesures sécurisent un réseau cloud ?', options: [{ id: 'a', text: 'Groupes de sécurité en refus par défaut' }, { id: 'b', text: 'Sous-réseaux privés pour les ressources sans besoin d’adresse publique' }, { id: 'c', text: 'Points d’accès privés vers les services du cloud' }, { id: 'd', text: 'Journalisation des flux réseau' }] },
    { id: 'mch-q12', type: 'single', difficulty: 2, skills: ['l-serverless-hybride'], prompt: 'Où se déplace la surface de sécurité avec le serverless ?', options: [{ id: 'a', text: 'Vers le code, les permissions de la fonction et ses déclencheurs (il n’y a plus de serveur à corriger)' }, { id: 'b', text: 'Vers le refroidissement des serveurs' }, { id: 'c', text: 'Elle disparaît complètement' }, { id: 'd', text: 'Vers le câblage réseau physique' }] },
    { id: 'mch-q13', type: 'truefalse', difficulty: 2, skills: ['l-serverless-hybride'], prompt: 'Stocker les secrets d’une fonction serverless en clair dans ses variables d’environnement est à éviter au profit d’un coffre de secrets.' },
    { id: 'mch-q14', type: 'short', difficulty: 2, skills: ['l-serverless-hybride'], prompt: 'Dans un environnement hybride ou multi-cloud, quel principe vise à n’avoir qu’un annuaire d’identités de référence ? (deux mots)', placeholder: 'identité …' },
    { id: 'mch-q15', type: 'open', difficulty: 3, skills: ['l-serverless-hybride', 'l-reseau-cloud'], prompt: 'Une entreprise exploite à la fois des serveurs internes et deux fournisseurs cloud, chacun avec sa console. Quels problèmes cela pose-t-il et que recommandez-vous ?' },
    { id: 'mch-q16', type: 'single', difficulty: 2, skills: ['l-serverless-hybride'], prompt: 'Pourquoi analyser les dépendances embarquées dans une fonction serverless ?', options: [{ id: 'a', text: 'Elles peuvent contenir des vulnérabilités connues, exploitables même sans serveur à administrer' }, { id: 'b', text: 'Pour réduire le temps de démarrage uniquement' }, { id: 'c', text: 'Parce que le fournisseur l’interdit' }, { id: 'd', text: 'Cela n’a aucun intérêt en serverless' }] },
  ],
  resources: [
    { title: 'Microsoft Cloud Security Benchmark', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/security/benchmark/azure/' },
    { title: 'Google Cloud Security Best Practices Center', source: 'Google Cloud', url: 'https://cloud.google.com/security/best-practices' },
    { title: 'CIS Benchmarks (AWS, Azure, GCP)', source: 'Center for Internet Security', url: 'https://www.cisecurity.org/cis-benchmarks' },
    { title: 'Serverless Top 10 / Cloud-Native Security', source: 'OWASP', url: 'https://owasp.org/www-project-serverless-top-10/' },
    { title: 'SecNumCloud', source: 'ANSSI', url: 'https://cyber.gouv.fr/secnumcloud-pour-les-fournisseurs-de-services-cloud' },
  ],
};
