import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'o-comptes-privileges-pam',
  lesson: {
    intro:
      'Les comptes à privilèges sont les clés du système d’information : administrateurs de domaine, comptes root, administrateurs cloud, comptes de service des applications. Leur compromission transforme un incident limité en crise générale. Ce cours montre comment les recenser, en réduire le nombre et la durée de vie, encadrer leur usage par des outils dédiés et gérer les secrets techniques qui leur ressemblent.',
    sections: [
      {
        id: 'inventaire',
        title: 'Recenser et classer les comptes à privilèges',
        blocks: [
          { t: 'p', text: 'Un compte est **privilégié** dès qu’il peut modifier la configuration de sécurité, accéder à toutes les données d’un système ou agir sur d’autres comptes. Beaucoup d’organisations en sous-estiment le nombre, car une partie n’est pas nominative.' },
          {
            t: 'table',
            head: ['Catégorie', 'Exemples'],
            rows: [
              ['Comptes d’administration humains', 'Administrateurs du domaine, root, administrateurs des consoles cloud et SaaS'],
              ['Comptes intégrés', 'Administrateur local, `root`, comptes par défaut des équipements réseau'],
              ['Comptes de service', 'Compte qui exécute une application, une sauvegarde, un outil de supervision'],
              ['Identités techniques', 'Clés d’API, jetons d’intégration continue, principaux de service cloud'],
              ['Comptes d’urgence', 'Accès de secours utilisé si les mécanismes habituels sont indisponibles'],
            ],
          },
          { t: 'def', term: 'Niveaux d’administration', text: 'Classement des comptes selon ce qu’ils contrôlent : le niveau le plus élevé regroupe ce qui contrôle l’identité de tout le système (annuaire, fédération, PKI), puis les serveurs et applications, puis les postes de travail. Un compte d’un niveau ne doit jamais s’authentifier sur une machine d’un niveau inférieur.' },
          { t: 'callout', kind: 'tip', text: 'L’inventaire se construit à partir de sources techniques (membres des groupes privilégiés de l’annuaire, rôles des consoles cloud, comptes locaux, comptes de service), pas seulement à partir des déclarations des équipes.' },
        ],
      },
      {
        id: 'reduire',
        title: 'Réduire : moindre privilège et accès juste-à-temps',
        blocks: [
          { t: 'p', text: 'Le meilleur compte à privilèges est celui qui n’existe pas, ou qui n’a ses droits que le temps nécessaire.' },
          { t: 'list', items: ['**Séparation des comptes** : chaque administrateur dispose d’un compte standard pour la messagerie et la navigation, et d’un compte d’administration distinct, jamais utilisé pour lire ses courriels.', '**Moindre privilège** : des rôles délégués limités (gestion des mots de passe d’un service, administration d’un groupe de serveurs) plutôt que des droits globaux.', '**Accès juste-à-temps** : les droits sont accordés à la demande, pour une durée limitée, après validation, puis retirés automatiquement.', '**Suppression** des comptes inutilisés et des droits hérités d’anciens projets.'] },
          { t: 'def', term: 'Privilège permanent', text: 'Droit d’administration attribué en continu, qu’il soit utilisé ou non. Chaque privilège permanent est une cible disponible à tout moment pour un attaquant qui vole le compte.' },
          {
            t: 'example',
            title: 'Avant et après',
            blocks: [
              { t: 'table', head: ['', 'Avant', 'Après'], rows: [['Administrateurs du domaine', '14 comptes, dont 3 comptes de service', '2 comptes nominatifs, utilisés uniquement depuis des postes dédiés'], ['Droits sur les serveurs', 'Groupe global « Admins serveurs »', 'Rôles par périmètre, activés à la demande pour 4 heures'], ['Contrôle', 'Aucun', 'Revue trimestrielle et alerte sur tout ajout au groupe']] },
            ],
          },
        ],
      },
      {
        id: 'pam',
        title: 'Outils PAM : coffre, bastion et sessions',
        blocks: [
          { t: 'p', text: 'Une solution de **gestion des accès à privilèges** (PAM) regroupe plusieurs fonctions qui encadrent l’usage des comptes sensibles.' },
          {
            t: 'table',
            head: ['Fonction', 'Rôle'],
            rows: [
              ['**Coffre**', 'Stocke les mots de passe des comptes privilégiés ; l’administrateur ne les connaît pas'],
              ['**Rotation**', 'Change automatiquement les mots de passe après usage ou selon une période'],
              ['**Bastion**', 'Point de passage unique et authentifié (avec MFA) vers les systèmes à administrer'],
              ['**Enregistrement des sessions**', 'Trace les commandes et l’écran, pour l’audit et l’investigation'],
              ['**Workflow d’approbation**', 'Demande, validation et durée limitée pour les accès sensibles'],
            ],
          },
          { t: 'def', term: 'Poste d’administration dédié', text: 'Poste réservé aux tâches d’administration, sans messagerie ni navigation sur Internet, durci et maîtrisé. Il évite qu’un poste bureautique compromis serve à voler les identifiants d’administration. L’ANSSI en fait une recommandation centrale pour l’administration sécurisée.' },
          { t: 'diagram', id: 'pam-flow', caption: 'Accès à privilèges via bastion et coffre : l’administrateur n’obtient jamais le mot de passe de la cible, et la session est enregistrée.', alt: 'L’administrateur s’authentifie (MFA) auprès du bastion ; le bastion récupère un secret éphémère dans le coffre puis ouvre une session enregistrée vers la cible.' },
          { t: 'callout', kind: 'warn', text: 'Un bastion mal protégé devient la cible la plus rentable du réseau : il doit lui-même être administré depuis le niveau le plus élevé, avec MFA, journalisation centralisée et surveillance.' },
        ],
      },
      {
        id: 'secrets',
        title: 'Comptes de service et secrets techniques',
        blocks: [
          { t: 'p', text: 'Les applications ont aussi besoin de privilèges : se connecter à une base, appeler une API, déposer des sauvegardes. Leurs identifiants sont souvent les plus mal gérés : mots de passe qui n’expirent jamais, partagés entre environnements, écrits dans des fichiers de configuration.' },
          { t: 'list', items: ['Un compte de service **par application et par environnement**, avec les seuls droits nécessaires et une interdiction de connexion interactive.', 'Sous Windows, les **comptes de service gérés de groupe** (gMSA) : mot de passe long, changé automatiquement par l’annuaire.', 'Dans le cloud, des **identités de charge de travail** (rôles attachés aux machines ou aux conteneurs, fédération pour les pipelines) plutôt que des clés statiques.', 'Les secrets restants dans un **coffre de secrets**, récupérés au démarrage, avec rotation et journalisation.'] },
          { t: 'def', term: 'Secret dynamique', text: 'Identifiant créé à la demande par le coffre pour un usage précis (par exemple un compte de base de données valable une heure), puis révoqué. Un secret qui fuit n’est utilisable que peu de temps.' },
          { t: 'callout', kind: 'key', text: 'Les secrets ne doivent jamais apparaître dans le code source ni dans l’historique Git. Une analyse automatique des dépôts et du pipeline détecte les fuites ; tout secret exposé est considéré comme compromis et remplacé, même après suppression du commit.' },
        ],
      },
      {
        id: 'gouvernance',
        title: 'Revue des accès et accès d’urgence',
        blocks: [
          { t: 'p', text: 'Les droits dérivent avec le temps : changements de poste, projets terminés, prestataires partis. La **revue des accès** remet périodiquement chaque droit privilégié en question.' },
          { t: 'list', ordered: true, items: ['Extraire la liste des comptes et rôles privilégiés depuis les sources techniques.', 'La soumettre au responsable de chaque périmètre, qui confirme ou retire chaque droit.', 'Appliquer les retraits et tracer les décisions (preuve d’audit).', 'Alerter en continu sur tout ajout à un groupe privilégié en dehors du processus.'] },
          { t: 'def', term: 'Compte d’urgence (« bris de glace »)', text: 'Compte de secours à très hauts privilèges, utilisé uniquement si les mécanismes habituels (fédération, MFA, PAM) sont indisponibles. Ses identifiants sont conservés hors ligne, en plusieurs parties ou sous double contrôle, et toute utilisation déclenche une alerte immédiate.' },
          { t: 'callout', kind: 'tip', text: 'Testez le compte d’urgence régulièrement : un accès de secours qui ne fonctionne pas le jour de la panne est pire qu’inutile, car il donne une fausse assurance.' },
        ],
      },
    ],
    useCases: [
      'Projet de réduction des privilèges dans Active Directory : inventaire des groupes, comptes d’administration séparés, postes dédiés.',
      'Déploiement d’un bastion pour les prestataires d’infogérance, avec enregistrement des sessions.',
      'Migration des clés d’accès cloud statiques d’un pipeline vers une fédération d’identité.',
    ],
    commonMistakes: [
      'Utiliser le même compte pour la messagerie et l’administration.',
      'Laisser des comptes de service membres des groupes d’administration du domaine.',
      'Partager un mot de passe d’administration entre plusieurs personnes.',
      'Stocker des secrets dans le code ou dans des variables d’environnement visibles dans les journaux.',
      'Créer un compte d’urgence sans jamais le tester ni surveiller son usage.',
    ],
    bestPractices: [
      'Inventaire technique des comptes à privilèges, classé par niveau d’administration.',
      'Comptes d’administration séparés, nominatifs, avec MFA résistante à l’hameçonnage.',
      'Accès juste-à-temps et suppression des privilèges permanents non justifiés.',
      'Bastion, coffre, rotation et enregistrement des sessions pour les accès sensibles.',
      'Comptes de service à droits minimaux, gMSA ou identités de charge de travail, secrets dans un coffre.',
      'Revue trimestrielle des accès privilégiés et compte d’urgence testé et surveillé.',
    ],
    keyPoints: [
      'Comptes privilégiés : humains, intégrés, de service, techniques et d’urgence.',
      'Moins de comptes, moins de droits, moins longtemps : séparation, moindre privilège, juste-à-temps.',
      'PAM : coffre, rotation, bastion, enregistrement, approbation.',
      'Les secrets applicatifs se gèrent comme des comptes à privilèges.',
      'La revue des accès et l’alerte sur les ajouts empêchent la dérive des droits.',
    ],
  },
  practice: [
    {
      id: 'audit-groupes',
      kind: 'analysis',
      title: 'Analyse des membres d’un groupe d’administration',
      context: [
        { t: 'p', text: 'Membres du groupe « Admins du domaine » relevés lors d’un audit :' },
        { t: 'code', lang: 'text', code: 'Administrateur        (compte intégré, dernière connexion : il y a 3 jours)\nj.martin              (compte quotidien de l’administrateur, utilisé pour la messagerie)\nadm-jmartin           (compte d’administration nominatif)\nsvc-sauvegarde        (compte de service, mot de passe inchangé depuis 2019)\nsvc-supervision       (compte de service)\np.durand              (a quitté l’entreprise il y a 8 mois)\nprestataire-infog     (compte partagé par l’équipe de l’infogérant)' },
      ],
      steps: ['Indiquer pour chaque compte s’il a sa place dans ce groupe.', 'Proposer l’action correspondante.', 'Proposer deux mesures pour éviter que la situation se reproduise.'],
    },
    {
      id: 'secrets-pipeline',
      kind: 'case',
      title: 'Cas pratique : supprimer les secrets d’une application',
      context: [{ t: 'p', text: 'Une application web lit le mot de passe de sa base de données dans un fichier `config.yml` versionné, et son pipeline de déploiement utilise une clé d’accès cloud permanente stockée dans les variables du projet. Le même mot de passe de base est utilisé en recette et en production.' }],
      steps: ['Lister les risques.', 'Proposer l’architecture cible pour la base et pour le pipeline.', 'Décrire la séquence de migration sans interruption de service.'],
    },
  ],
  questions: [
    { id: 'pam-q1', type: 'multi', difficulty: 1, skills: ['o-priv-inventaire'], prompt: 'Lesquels de ces éléments sont des comptes ou identités à privilèges à inventorier ?', options: [{ id: 'a', text: 'Les comptes de service des applications' }, { id: 'b', text: 'Les clés d’API et jetons d’intégration continue' }, { id: 'c', text: 'Les comptes intégrés comme `root` ou l’administrateur local' }, { id: 'd', text: 'Le compte invité désactivé d’une imprimante sans droit' }] },
    { id: 'pam-q2', type: 'single', difficulty: 2, skills: ['o-priv-inventaire'], prompt: 'Pourquoi un administrateur doit-il disposer d’un compte distinct pour l’administration ?', options: [{ id: 'a', text: 'Pour que la messagerie et la navigation, exposées à l’hameçonnage, ne se fassent jamais avec des droits d’administration' }, { id: 'b', text: 'Pour avoir deux boîtes aux lettres' }, { id: 'c', text: 'Pour contourner l’authentification multifacteur' }, { id: 'd', text: 'Parce que l’annuaire limite le nombre de groupes par compte' }] },
    { id: 'pam-q3', type: 'truefalse', difficulty: 2, skills: ['o-priv-inventaire'], prompt: 'Un compte du niveau d’administration le plus élevé peut ouvrir une session sur un poste bureautique sans risque particulier, s’il utilise la MFA.' },
    { id: 'pam-q4', type: 'short', difficulty: 2, skills: ['o-priv-inventaire'], prompt: 'Comment appelle-t-on l’attribution de droits d’administration à la demande, pour une durée limitée ? (expression en français)', placeholder: 'accès …' },
    { id: 'pam-q5', type: 'single', difficulty: 2, skills: ['o-pam-outils'], prompt: 'Quel est le rôle principal d’un bastion d’administration ?', options: [{ id: 'a', text: 'Être le point de passage unique, authentifié et journalisé vers les systèmes à administrer' }, { id: 'b', text: 'Remplacer l’antivirus des serveurs' }, { id: 'c', text: 'Héberger le site web public' }, { id: 'd', text: 'Stocker les sauvegardes' }] },
    { id: 'pam-q6', type: 'multi', difficulty: 2, skills: ['o-pam-outils'], prompt: 'Quelles fonctions fournit typiquement une solution PAM ?', options: [{ id: 'a', text: 'Coffre des mots de passe privilégiés' }, { id: 'b', text: 'Rotation automatique des mots de passe' }, { id: 'c', text: 'Enregistrement des sessions d’administration' }, { id: 'd', text: 'Compilation du code des applications' }] },
    { id: 'pam-q7', type: 'truefalse', difficulty: 2, skills: ['o-pam-outils'], prompt: 'Un poste d’administration dédié ne doit pas servir à lire ses courriels ni à naviguer sur Internet.' },
    { id: 'pam-q8', type: 'open', difficulty: 3, skills: ['o-pam-outils', 'o-priv-gouvernance'], prompt: 'Un infogérant demande un accès à distance permanent avec un compte administrateur partagé par son équipe. Proposez une organisation qui réponde à son besoin tout en limitant le risque.' },
    { id: 'pam-q9', type: 'single', difficulty: 2, skills: ['o-secrets'], prompt: 'Quelle solution évite de gérer manuellement le mot de passe d’un compte de service Windows ?', options: [{ id: 'a', text: 'Un compte de service géré de groupe (gMSA)' }, { id: 'b', text: 'Un mot de passe court facile à retenir' }, { id: 'c', text: 'Le même mot de passe sur tous les serveurs' }, { id: 'd', text: 'Désactiver l’expiration et noter le mot de passe dans un fichier' }] },
    { id: 'pam-q10', type: 'multi', difficulty: 3, skills: ['o-secrets'], prompt: 'Un mot de passe de base de données a été commité dans un dépôt Git, puis le commit a été supprimé. Que faut-il faire ?', options: [{ id: 'a', text: 'Considérer le secret comme compromis et le remplacer' }, { id: 'b', text: 'Vérifier les journaux de la base pour détecter un usage suspect' }, { id: 'c', text: 'Mettre en place une détection automatique des secrets dans les dépôts' }, { id: 'd', text: 'Rien, puisque le commit a été supprimé' }] },
    { id: 'pam-q11', type: 'short', difficulty: 2, skills: ['o-secrets'], prompt: 'Comment appelle-t-on un identifiant créé à la demande par un coffre pour un usage précis, puis révoqué après une courte durée ? (deux mots)', placeholder: 'secret …' },
    { id: 'pam-q12', type: 'truefalse', difficulty: 2, skills: ['o-secrets'], prompt: 'Utiliser le même compte de service et le même mot de passe en recette et en production est acceptable si le mot de passe est long.' },
    { id: 'pam-q13', type: 'single', difficulty: 2, skills: ['o-priv-gouvernance'], prompt: 'Qui doit confirmer ou retirer les droits lors d’une revue des accès privilégiés ?', options: [{ id: 'a', text: 'Le responsable de chaque périmètre, sur la base d’une liste extraite des sources techniques' }, { id: 'b', text: 'Chaque utilisateur pour ses propres droits, sans contrôle' }, { id: 'c', text: 'Personne : les droits n’expirent pas' }, { id: 'd', text: 'Le fournisseur du logiciel' }] },
    { id: 'pam-q14', type: 'multi', difficulty: 2, skills: ['o-priv-gouvernance'], prompt: 'Quelles règles s’appliquent à un compte d’urgence (« bris de glace ») ?', options: [{ id: 'a', text: 'Identifiants conservés hors ligne, sous double contrôle ou en plusieurs parties' }, { id: 'b', text: 'Alerte immédiate à chaque utilisation' }, { id: 'c', text: 'Tests réguliers de bon fonctionnement' }, { id: 'd', text: 'Utilisation quotidienne pour vérifier qu’il marche' }] },
    { id: 'pam-q15', type: 'open', difficulty: 3, skills: ['o-priv-gouvernance', 'o-priv-inventaire'], prompt: 'Expliquez à une direction pourquoi réduire le nombre d’administrateurs du domaine est prioritaire, et proposez un indicateur de suivi.' },
    { id: 'pam-q16', type: 'truefalse', difficulty: 1, skills: ['o-priv-gouvernance'], prompt: 'Le compte d’un administrateur qui a quitté l’entreprise doit être désactivé dès son départ.' },
  ],
  resources: [
    { title: 'Recommandations relatives à l’administration sécurisée des SI', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si' },
    { title: 'Securing privileged access', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/security/privileged-access-workstations/overview' },
    { title: 'Group Managed Service Accounts overview', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows-server/security/group-managed-service-accounts/group-managed-service-accounts-overview' },
    { title: 'Secrets Management Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html' },
  ],
};
