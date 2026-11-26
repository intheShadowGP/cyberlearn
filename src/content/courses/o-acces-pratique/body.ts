import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'o-acces-pratique',
  lesson: {
    intro:
      'Une identité bien gérée se joue dans les détails du quotidien : un compte créé à l’arrivée, retiré au départ, une MFA déployée sans exception oubliée, des droits donnés par rôle et revus, des journaux lus au bon moment. Ce cours, centré sur la pratique, suit le fil d’une organisation de taille moyenne : de l’annuaire à la réponse à un compte compromis.',
    sections: [
      {
        id: 'annuaire',
        title: 'L’annuaire et le cycle de vie des comptes',
        blocks: [
          { t: 'p', text: 'L’**annuaire** (par exemple Active Directory, Entra ID ou un annuaire LDAP) centralise les comptes, les groupes et leurs attributs. Sa qualité conditionne celle de tous les accès : un annuaire exact est la base d’un contrôle d’accès fiable.' },
          {
            t: 'table',
            head: ['Événement', 'Source de vérité', 'Action sur le compte'],
            rows: [
              ['**Arrivée**', 'Système RH', 'Création, rôle de base, MFA enrôlée avant le premier accès'],
              ['**Mobilité**', 'Système RH et responsable', 'Retrait des anciens droits, ajout des nouveaux'],
              ['**Départ**', 'Système RH', 'Désactivation le jour même, suppression après un délai défini'],
              ['**Absence longue**', 'Responsable', 'Suspension ou réduction temporaire des droits'],
            ],
          },
          { t: 'def', term: 'Cycle de vie des comptes', text: 'Ensemble des étapes de la vie d’un compte : arrivée, mobilité, départ. Il est idéalement piloté par la source de référence (les ressources humaines), pas par des demandes dispersées.' },
          { t: 'def', term: 'Compte dormant', text: 'Compte actif dont plus personne ne se sert. Il offre une entrée discrète à un attaquant : on le repère par la date de dernière connexion et on le désactive.' },
          { t: 'list', items: ['**Désactiver avant de supprimer** : l’accès est coupé, les traces utiles restent disponibles.', '**Rapprocher** régulièrement l’annuaire et la liste du personnel.', '**Attribuer un propriétaire** à chaque compte non nominatif.'] },
          { t: 'callout', kind: 'key', text: 'La mobilité est le point faible : on ajoute les nouveaux droits mais on oublie de retirer les anciens, d’où l’accumulation.' },
        ],
      },
      {
        id: 'authent',
        title: 'Politique d’authentification et déploiement de la MFA',
        blocks: [
          { t: 'p', text: 'Les recommandations actuelles privilégient des règles simples et efficaces plutôt que des contraintes qui poussent à contourner.' },
          {
            t: 'table',
            head: ['Règle', 'Pratique recommandée', 'À éviter'],
            rows: [
              ['**Longueur**', 'Phrase de passe d’au moins quinze caractères', 'Minimum court avec symbole imposé'],
              ['**Contrôle**', 'Refuser les mots de passe connus comme compromis', 'Autoriser les listes publiques de fuites'],
              ['**Renouvellement**', 'Changer en cas de fuite ou de soupçon', 'Expiration forcée tous les mois'],
              ['**Tentatives**', 'Limiter et surveiller les échecs', 'Autoriser un nombre illimité d’essais'],
            ],
          },
          { t: 'def', term: 'Number matching', text: 'Mécanisme où l’utilisateur doit saisir dans son application un nombre affiché à l’écran de connexion. Il empêche d’accepter par réflexe une notification que l’on n’a pas déclenchée.' },
          {
            t: 'example',
            title: 'Un déploiement de MFA par étapes',
            blocks: [
              { t: 'list', ordered: true, items: ['**Étape 1** : administrateurs et messagerie, avec des clés de sécurité.', '**Étape 2** : tous les salariés, avec une application d’authentification ou une passkey.', '**Étape 3** : partenaires et comptes de service interactifs, exceptions documentées.', '**Étape 4** : retrait des méthodes les plus faibles (SMS) là où une alternative existe.'] },
            ],
          },
          { t: 'list', items: ['**Enrôlement protégé** : la première configuration du second facteur ne doit pas être le maillon faible.', '**Récupération encadrée** : vérification d’identité par un canal indépendant, journalisation et notification.', '**Exceptions limitées** et datées, avec un responsable.'] },
          { t: 'callout', kind: 'warn', text: 'Un processus de récupération trop souple annule la MFA : l’attaquant téléphone au support et obtient la réinitialisation.' },
        ],
      },
      {
        id: 'sso',
        title: 'SSO, fédération et provisionnement',
        blocks: [
          { t: 'p', text: 'Dans une **fédération**, le **fournisseur d’identité** authentifie l’utilisateur puis atteste son identité auprès des applications, qui ne voient jamais son mot de passe.' },
          {
            t: 'table',
            head: ['Élément', 'Rôle', 'Remarque'],
            rows: [
              ['**SAML**', 'Assertions XML signées, courant pour les applications d’entreprise', 'Valider signature, émetteur et destinataire'],
              ['**OpenID Connect**', 'Couche d’identité au-dessus d’OAuth 2.0, jetons JSON', 'Courant pour le web et le mobile'],
              ['**SCIM**', 'Provisionnement et déprovisionnement automatiques des comptes', 'Évite les comptes oubliés dans les applications'],
              ['**Attributs (claims)**', 'Informations transmises : courriel, groupes, service', 'Base des autorisations côté application'],
            ],
          },
          { t: 'def', term: 'Fournisseur d’identité', text: 'Service qui authentifie les utilisateurs et délivre des assertions ou des jetons aux applications fédérées. Il concentre la confiance : on le protège en priorité.' },
          { t: 'list', items: ['**Concentrer** les applications derrière le SSO pour appliquer la MFA en un seul endroit.', '**Limiter** la durée des sessions et exiger une nouvelle preuve pour les actions sensibles.', '**Inventorier** les applications hors SSO : elles gardent leurs propres mots de passe.'] },
          { t: 'callout', kind: 'key', text: 'Le SSO réduit la surface (un seul mot de passe, une MFA) mais fait du compte principal une cible de grande valeur : il se protège mieux que les autres.' },
        ],
      },
      {
        id: 'autorisation',
        title: 'Autorisations : rôles, attributs et revues',
        blocks: [
          { t: 'p', text: 'Une fois l’identité établie, les **autorisations** décident de ce que la personne peut faire. On évite d’attribuer des droits un par un : on les organise par rôles et par groupes.' },
          {
            t: 'table',
            head: ['Modèle', 'Principe', 'Usage typique'],
            rows: [
              ['**RBAC**', 'Les droits suivent le rôle ou le groupe', 'Fonctions stables : comptabilité, support'],
              ['**ABAC**', 'Décision selon des attributs : service, lieu, heure, sensibilité', 'Règles fines et contextuelles'],
              ['**Élévation temporaire**', 'Droits étendus pour une durée limitée', 'Interventions ponctuelles, avec approbation'],
            ],
          },
          { t: 'def', term: 'Séparation des tâches', text: 'Principe selon lequel une action critique ne peut pas être menée seule de bout en bout : par exemple, la personne qui demande un paiement n’est pas celle qui l’approuve.' },
          { t: 'list', items: ['**Demande** justifiée et approuvée par le propriétaire de la ressource.', '**Durée ou date de revue** associée à chaque droit étendu.', '**Revue périodique** par les responsables métier, qui retirent ce qui n’est plus justifié.'] },
          { t: 'callout', kind: 'tip', text: 'Une revue des droits n’a de valeur que si les responsables comprennent ce qu’ils valident : présentez des libellés métier, pas des identifiants techniques.' },
        ],
      },
      {
        id: 'sensibles',
        title: 'Comptes à privilèges, de service et de prestataires',
        blocks: [
          { t: 'p', text: 'Certains comptes ont une portée large : leur compromission cause beaucoup plus de dégâts. Ils demandent des règles propres.' },
          {
            t: 'table',
            head: ['Type de compte', 'Règle clé', 'Risque si négligé'],
            rows: [
              ['**Administrateur**', 'Compte distinct du compte quotidien, MFA résistante', 'Un clic de messagerie donne les droits élevés'],
              ['**Service**', 'Propriétaire, droits limités, secret en coffre et renouvelé', 'Mot de passe ancien exploité longtemps'],
              ['**Prestataire**', 'Accès limité dans le temps, supervisé, retiré en fin de mission', 'Accès oublié après la maintenance'],
              ['**Urgence (break-glass)**', 'Quelques comptes, secrets scellés, usage alerté et contrôlé', 'Perte d’accès totale si le SSO tombe'],
            ],
          },
          { t: 'def', term: 'Compte d’urgence', text: 'Compte exclu des dispositifs habituels, conservé pour retrouver l’accès si l’authentification normale est indisponible. Son usage déclenche une alerte et une revue.' },
          { t: 'list', items: ['**Coffre de secrets** pour stocker et renouveler les mots de passe de service.', '**Aucun secret en clair** dans le code, les scripts ou les messageries.', '**Inventaire** des comptes sensibles, mis à jour à chaque changement.'] },
          { t: 'callout', kind: 'warn', text: 'Un droit d’administrateur permanent pour une tâche ponctuelle est une dette : préférez une élévation datée et approuvée.' },
        ],
      },
      {
        id: 'incident',
        title: 'Journaux de connexion et réponse à un compte compromis',
        blocks: [
          { t: 'p', text: 'Les journaux d’authentification racontent ce qui s’est passé. Savoir les lire permet de repérer une compromission tôt et de limiter ses effets.' },
          {
            t: 'table',
            head: ['Signal', 'Interprétation possible', 'Première vérification'],
            rows: [
              ['Connexions réussies depuis deux pays en quelques minutes', 'Déplacement impossible : compte utilisé par un tiers', 'Adresses, appareil, méthode MFA'],
              ['Nombreux échecs sur de nombreux comptes', 'Essais d’un même mot de passe sur plusieurs comptes (password spraying)', 'Source des essais, comptes touchés'],
              ['Nouvelle règle de transfert vers l’extérieur', 'Exfiltration silencieuse de messages', 'Règles de la boîte, date de création'],
              ['Nouvelle méthode MFA ajoutée', 'Persistance de l’attaquant', 'Appareils enregistrés'],
            ],
          },
          { t: 'def', term: 'Password spraying', text: 'Attaque qui teste quelques mots de passe courants sur un grand nombre de comptes pour éviter les verrouillages. Elle se détecte en regardant les échecs par source plutôt que par compte.' },
          { t: 'list', ordered: true, items: ['**Contenir** : révoquer les sessions et les jetons, réinitialiser le mot de passe et les facteurs.', '**Vérifier** : règles de messagerie, applications autorisées, méthodes MFA, activité récente.', '**Enquêter** avec les journaux conservés, pour connaître l’origine et l’étendue.', '**Corriger** la cause (mot de passe réutilisé, hameçonnage, exception de MFA) et informer.'] },
          { t: 'callout', kind: 'key', text: 'Réinitialiser le mot de passe sans révoquer les sessions et les jetons laisse l’accès à l’attaquant.' },
        ],
      },
      {
        id: 'arrivee-mobilite-depart',
        title: "Arrivée, mobilité, départ : gérer le cycle de vie en pratique",
        blocks: [
          { t: 'p', text: "La majorité des droits excessifs ne viennent pas d’une attaque mais d’un **changement de situation oublié**. Trois événements structurent la gestion des identités : l’arrivée, la mobilité et le départ." },
          {
            t: 'table',
            head: ["Événement", "Ce qu’il faut faire", "Dérive fréquente"],
            rows: [
              ["**Arrivée**", "Créer le compte à partir du dossier RH, attribuer le **rôle** du poste (et non une copie des droits d’un collègue), activer la MFA", "Droits copiés d’un collègue, avec tout ce qu’il a accumulé"],
              ["**Mobilité**", "Retirer les droits de l’ancien poste **puis** ajouter ceux du nouveau", "Ajouter sans jamais retirer : les droits s’empilent"],
              ["**Départ**", "Désactiver le compte le jour du départ, révoquer sessions, jetons et clés, récupérer le matériel, réattribuer les ressources dont la personne était propriétaire", "Compte laissé actif « au cas où », accessible depuis l’extérieur"],
            ],
          },
          { t: 'callout', kind: 'key', text: "Le départ est l’événement le plus risqué. Une désactivation **immédiate** puis une suppression différée (après transfert des données utiles) est préférable à une suppression brutale, qui peut détruire des éléments nécessaires." },
          { t: 'p', text: "La source de vérité est le **système de ressources humaines** : c’est lui qui doit déclencher les changements, et non un courriel au support. Plus le processus est automatisé, moins il y a d’oublis." },
        ],
      },
      {
        id: 'lire-connexions',
        title: "Lire les journaux de connexion Windows : événements et types d’ouverture",
        blocks: [
          { t: 'p', text: "Pour enquêter sur un compte, on commence par ses ouvertures de session. Sous Windows, les événements de sécurité les plus utiles sont **4624** (ouverture de session réussie), **4625** (échec) et **4634** ou **4647** (fermeture)." },
          {
            t: 'table',
            caption: "Types d’ouverture de session les plus courants (champ « Type d’ouverture de session » de l’événement 4624)",
            head: ["Type", "Nom", "Exemple"],
            rows: [
              ["2", "Interactive", "Quelqu’un devant le clavier"],
              ["3", "Réseau", "Accès à un partage de fichiers"],
              ["5", "Service", "Démarrage d’un service sous un compte"],
              ["10", "Interactive à distance", "Connexion Bureau à distance (RDP)"],
            ],
          },
          { t: 'code', lang: "powershell", caption: "Chercher les échecs de connexion récents d’un compte", code: "Get-WinEvent -FilterHashtable @{ LogName = 'Security'; Id = 4625; StartTime = (Get-Date).AddHours(-24) } |\n  Select-Object TimeCreated, @{ n = 'Compte'; e = { $_.Properties[5].Value } }, @{ n = 'Source'; e = { $_.Properties[19].Value } } |\n  Sort-Object TimeCreated -Descending | Select-Object -First 20" },
          { t: 'list', items: ["Une série de **4625** sur un compte suivie d’un **4624** de type 3 ou 10 depuis la même adresse évoque une **force brute réussie**.", "Un **4624** de type 10 à 3 heures du matin pour un compte qui ne travaille jamais à distance est atypique.", "Un compte de service avec un **4624** de type 2 (interactif) devrait toujours être examiné : ces comptes ne sont pas censés ouvrir de session à la main."] },
        ],
      },
    ],
    useCases: [
      'Mettre en place la désactivation automatique des comptes au départ à partir du système RH.',
      'Planifier le déploiement de la MFA par étapes avec un processus de récupération sûr.',
      'Organiser une revue trimestrielle des droits avec les responsables métier.',
      'Repérer un compte compromis grâce aux journaux de connexion et réagir dans l’ordre.',
    ],
    commonMistakes: [
      "Créer un nouvel employé en copiant les droits d’un collègue.",
      "Désactiver un compte sans révoquer ses sessions, jetons et clés d’accès déjà émis.",
      'Oublier de retirer les anciens droits lors d’une mobilité.',
      'Exiger un changement mensuel de mot de passe, qui pousse à des mots de passe faibles.',
      'Laisser des exceptions de MFA sans date ni propriétaire.',
      'Réinitialiser un mot de passe sans révoquer les sessions ouvertes.',
      'Conserver des comptes de service sans propriétaire ni renouvellement de secret.',
    ],
    bestPractices: [
      'Piloter le cycle de vie des comptes depuis la source RH.',
      'Mots de passe longs et contrôlés, MFA résistante pour les comptes sensibles.',
      'SSO avec provisionnement automatique et inventaire des applications hors SSO.',
      'Droits par rôles, séparation des tâches, revues périodiques.',
      'Journaux d’authentification conservés et alertes sur les signaux faibles.',
    ],
    keyPoints: [
      "Arrivée par rôle, mobilité avec retrait des anciens droits, départ avec désactivation immédiate.",
      "Événements 4624 et 4625 : lire le type d’ouverture et la source, pas seulement le résultat.",
      'Un annuaire exact et un cycle de vie piloté par les RH sont la base des accès.',
      'La longueur et le contrôle des mots de passe comptent plus que le changement fréquent.',
      'Le SSO centralise la confiance : le fournisseur d’identité se protège en priorité.',
      'Les droits s’organisent par rôles, avec séparation des tâches et revues.',
      'Face à un compte compromis : contenir, vérifier, enquêter, corriger.',
    ],
  },
  practice: [
    {
      id: 'revue-acces',
      kind: 'analysis',
      title: 'Analyse : revue des accès d’un service financier',
      context: [
        {
          t: 'table',
          head: ['Compte', 'Situation'],
          rows: [
            ['l.bernard', 'Passée du support à la comptabilité il y a six mois, garde les droits de support et de comptabilité'],
            ['svc-export', 'Compte de service d’export, mot de passe inchangé depuis quatre ans, sans propriétaire connu'],
            ['t.roux', 'Prestataire de maintenance, accès administrateur permanent, mission terminée il y a trois mois'],
            ['j.morel', 'Dernière connexion il y a quatorze mois, compte toujours actif'],
          ],
        },
      ],
      steps: ['Identifiez le problème de chaque compte.', 'Proposez l’action corrective adaptée et son ordre de priorité.', 'Proposez un contrôle récurrent qui évite que ces situations reviennent.'],
    },
    {
      id: 'deployer-mfa',
      kind: 'guided',
      title: 'Planifier le déploiement de la MFA',
      context: [
        { t: 'p', text: 'Une entreprise de 300 personnes utilise surtout un mot de passe seul. Elle compte 8 administrateurs, 40 personnes en déplacement fréquent, des partenaires externes et quelques comptes de service interactifs. Les utilisateurs craignent un blocage au premier jour.' },
      ],
      steps: ['Découpez le déploiement en étapes et justifiez l’ordre.', 'Choisissez la méthode adaptée à chaque population.', 'Décrivez le processus de récupération et les exceptions tolérées.', 'Indiquez deux indicateurs de suivi.'],
    },
    {
      id: 'compte-compromis',
      kind: 'case',
      title: 'Cas : enquêter sur un compte de messagerie compromis',
      context: [
        { t: 'p', text: 'Le journal de connexion d’une responsable des achats montre une connexion réussie depuis deux pays distants à vingt minutes d’intervalle, suivie de l’ajout d’une nouvelle méthode d’authentification et d’une règle de transfert vers une adresse externe. La responsable n’a rien remarqué.' },
      ],
      steps: ['Expliquez ce que suggèrent ces signaux.', 'Décrivez les actions de confinement dans l’ordre.', 'Listez les vérifications à mener après la réinitialisation.', 'Proposez les mesures qui auraient permis d’éviter ou de détecter plus tôt.'],
    },
  ],
  questions,
  resources: [
    { title: 'Recommandations relatives à l’authentification multifacteur et aux mots de passe', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-relatives-lauthentification-multifacteur-et-aux-mots-de-passe' },
    { title: 'Digital Identity Guidelines : authentification et gestion du cycle de vie (SP 800-63B)', source: 'NIST', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { title: 'Authentication Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html' },
  ],
};
