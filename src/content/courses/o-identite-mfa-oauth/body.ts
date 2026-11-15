import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'o-identite-mfa-oauth',
  lesson: {
    intro:
      "Les identifiants volés sont la première porte d'entrée des attaquants. Les applications étant désormais réparties entre le cloud, le SaaS et le système d'information interne, l'identité est devenue le véritable périmètre de sécurité. Ce cours couvre la manière de prouver qui l'on est (authentification), de déléguer cette preuve (fédération) et de décider ce qu'on a le droit de faire (autorisation).",
    sections: [
      {
        id: 'mfa',
        title: 'Facteurs d’authentification',
        blocks: [
          { t: 'p', text: "Les facteurs relèvent de trois catégories : ce que je **sais** (mot de passe), ce que je **possède** (téléphone, clé de sécurité), ce que je **suis** (biométrie). La MFA combine au moins deux catégories différentes." },
          {
            t: 'table',
            head: ['Méthode', 'Résiste à l’hameçonnage ?', 'Faiblesses connues'],
            rows: [
              ['Mot de passe seul', 'Non', 'Réutilisation, fuites, pulvérisation'],
              ['Code par SMS', 'Non', 'Échange de carte SIM, interception, relais en temps réel'],
              ['Code TOTP (application)', 'Non', 'Relais en temps réel par un proxy d’hameçonnage'],
              ['Notification « push »', 'Non (partiellement avec saisie de nombre)', 'Fatigue MFA : notifications répétées jusqu’à acceptation'],
              ['**FIDO2 / passkeys**', '**Oui**', 'Récupération de compte à sécuriser'],
              ['Carte à puce / certificat', 'Oui', 'Déploiement plus lourd'],
            ],
          },
          { t: 'def', term: 'FIDO2 / WebAuthn', text: "Standard d'authentification par clé publique : l'authentificateur génère une paire de clés **par site**. Il signe un défi du serveur, et la signature est **liée à l'origine** (le domaine) : sur un faux site, la clé n'existe pas ou la signature est refusée. Aucun secret partagé n'est stocké côté serveur." },
          { t: 'def', term: 'Passkey', text: "Identifiant FIDO2 synchronisé entre les appareils d'un utilisateur (par son gestionnaire de mots de passe ou son système) ou lié à un appareil. Il remplace le mot de passe, et pas seulement le second facteur." },
          { t: 'callout', kind: 'key', text: "Un proxy d'hameçonnage (type « adversary in the middle ») relaie mot de passe **et** code TOTP en temps réel, puis vole le cookie de session. Seuls les facteurs liés à l'origine (FIDO2, certificats) bloquent cette attaque." },
        ],
      },
      {
        id: 'federation',
        title: 'Fédération : SSO, SAML et OpenID Connect',
        blocks: [
          { t: 'def', term: 'SSO (authentification unique)', text: "L'utilisateur s'authentifie une fois auprès d'un **fournisseur d'identité** (IdP), qui atteste son identité auprès des applications (fournisseurs de service). Les politiques (MFA, accès conditionnel) sont centralisées." },
          {
            t: 'table',
            head: ['', 'SAML 2.0', 'OpenID Connect'],
            rows: [['Format', 'Assertions XML signées', 'Jeton d’identité JWT signé'], ['Usage typique', 'Applications web d’entreprise', 'Web, mobile, API modernes'], ['Base', 'Autonome', 'Couche d’identité au-dessus d’OAuth 2.0']],
          },
          { t: 'callout', kind: 'warn', title: 'Attention', text: "**OAuth 2.0 est un protocole d'autorisation déléguée, pas d'authentification.** Un jeton d'accès dit « ce client peut appeler cette API », pas « cet utilisateur est Alice ». Pour authentifier, on utilise **OpenID Connect** et son jeton d'identité (`id_token`), dont on vérifie la signature, l'émetteur (`iss`), l'audience (`aud`) et l'expiration (`exp`)." },
        ],
      },
      {
        id: 'oauth',
        title: 'Le flux « authorization code » avec PKCE',
        blocks: [
          { t: 'diagram', id: 'oauth-code-flow', caption: 'Flux authorization code avec PKCE', alt: 'Le navigateur est redirigé vers le serveur d’autorisation, reçoit un code, l’application échange ce code et le code_verifier contre un jeton d’accès, puis appelle l’API.' },
          { t: 'list', ordered: true, items: ['L’application génère un `code_verifier` aléatoire et son empreinte `code_challenge`, ainsi qu’un `state` aléatoire.', 'Elle redirige l’utilisateur vers le serveur d’autorisation avec `client_id`, `redirect_uri`, `scope`, `state` et `code_challenge`.', 'L’utilisateur s’authentifie et consent ; il est redirigé vers `redirect_uri` avec un **code** à usage unique et le `state`.', 'L’application vérifie le `state`, puis échange le code et le `code_verifier` contre les jetons.', 'Elle appelle l’API avec le **jeton d’accès**.'] },
          {
            t: 'table',
            head: ['Contrôle', 'Attaque évitée'],
            rows: [
              ['**PKCE** (`code_verifier`)', 'Interception du code (application mobile, redirection détournée) : sans le verifier, le code est inutilisable'],
              ['**state** vérifié', 'CSRF sur la connexion (lier la session de la victime au compte de l’attaquant)'],
              ['**redirect_uri** comparée exactement', 'Redirection du code vers un domaine de l’attaquant'],
              ['Pas de flux implicite', 'Jetons exposés dans l’URL et l’historique'],
              ['Scopes minimaux, jetons de courte durée', 'Impact limité d’un jeton volé'],
            ],
          },
          {
            t: 'example',
            title: 'Le consentement abusif (illicit consent grant)',
            blocks: [{ t: 'p', text: "Un attaquant enregistre une application nommée « Lecteur PDF » qui demande `Mail.Read` et `offline_access`. La victime clique sur un lien et accepte : l'attaquant lit sa messagerie **sans jamais connaître son mot de passe**, et la MFA ne change rien. Contre-mesure : restreindre le consentement des utilisateurs aux applications validées par l'administrateur." }],
          },
        ],
      },
      {
        id: 'autorisation',
        title: 'Autorisation et Zero Trust',
        blocks: [
          { t: 'def', term: 'RBAC', text: "Role-Based Access Control : les droits sont attribués à des **rôles** (comptable, administrateur réseau), et les utilisateurs reçoivent des rôles. Simple à auditer, il peut dériver vers une multiplication des rôles." },
          { t: 'def', term: 'ABAC', text: "Attribute-Based Access Control : la décision dépend d'**attributs** du sujet, de la ressource et du contexte (« un médecin peut lire les dossiers des patients de son service, depuis un poste géré, en heures ouvrées »)." },
          { t: 'def', term: 'Zero Trust', text: "Approche (NIST SP 800-207) qui supprime la confiance implicite accordée au réseau interne : **chaque accès** est authentifié, autorisé et chiffré, selon l'identité, l'état de l'appareil et le contexte, avec le moindre privilège et une vérification continue." },
          { t: 'list', items: ['« Ne jamais faire confiance, toujours vérifier » : être dans le réseau de l’entreprise ne donne aucun droit.', 'Supposer la compromission : segmenter, limiter le rayon d’impact, journaliser.', 'Accès conditionnel : MFA résistante, appareil conforme, localisation, niveau de risque de la session.'] },
          { t: 'callout', kind: 'tip', text: "Zero Trust n'est pas un produit, mais une trajectoire : commencer par l'inventaire des identités et des appareils, la MFA résistante pour les comptes à privilèges, puis l'accès conditionnel application par application." },
        ],
      },
    ],
    useCases: [
      'Déployer des clés FIDO2 pour tous les administrateurs et des passkeys pour les utilisateurs.',
      'Intégrer une application web au SSO de l’entreprise via OpenID Connect avec PKCE.',
      'Investiguer une compromission de messagerie sans mot de passe volé (consentement OAuth abusif).',
      'Remplacer l’accès VPN global par un accès applicatif conditionnel (Zero Trust Network Access).',
    ],
    commonMistakes: [
      'Utiliser un jeton d’accès OAuth comme preuve d’identité de l’utilisateur.',
      'Accepter une redirect_uri par préfixe ou par expression régulière permissive.',
      'Omettre la vérification du paramètre state.',
      'Croire que la MFA par SMS ou TOTP protège contre l’hameçonnage en temps réel.',
      'Laisser les utilisateurs consentir librement aux applications tierces.',
    ],
    bestPractices: [
      'FIDO2 ou passkeys, a minima pour les comptes à privilèges.',
      'Authorization code + PKCE, state vérifié, redirect_uri exacte, scopes minimaux.',
      'Validation complète des id_token (signature, iss, aud, exp, nonce).',
      'Consentement aux applications réservé aux administrateurs, revue régulière des applications autorisées.',
      'Accès conditionnel fondé sur l’identité, l’appareil et le risque.',
    ],
    keyPoints: [
      'Seuls les facteurs liés à l’origine (FIDO2, certificats) résistent à l’hameçonnage en temps réel.',
      'OAuth 2.0 autorise ; OpenID Connect authentifie.',
      'PKCE, state et redirect_uri exacte sont indispensables.',
      'Zero Trust : aucune confiance implicite, vérification de chaque accès.',
    ],
  },
  practice: [
    {
      id: 'choix-mfa',
      kind: 'case',
      title: 'Cas pratique : choisir les facteurs d’authentification',
      context: [{ t: 'p', text: 'Un cabinet d’expertise comptable de 60 personnes utilise Microsoft 365 avec MFA par SMS. Deux comptes ont été compromis le mois dernier via un faux portail de connexion.' }],
      steps: ['Expliquer pourquoi la MFA par SMS n’a pas suffi.', 'Proposer une cible par population (administrateurs, collaborateurs, nomades).', 'Prévoir la récupération de compte en cas de perte de l’authentificateur.'],
    },
    {
      id: 'revue-oauth',
      kind: 'analysis',
      title: 'Revue d’une intégration OAuth',
      context: [
        { t: 'p', text: 'Requête d’autorisation produite par une application monopage :' },
        { t: 'code', lang: 'text', code: 'GET https://idp.exemple.fr/authorize?response_type=token\n  &client_id=app-notes\n  &redirect_uri=https://notes.exemple.fr\n  &scope=openid profile Mail.ReadWrite Files.ReadWrite.All' },
        { t: 'p', text: 'Le serveur d’autorisation accepte toute redirect_uri commençant par https://notes.exemple.fr.' },
      ],
      steps: ['Relever les problèmes.', 'Proposer la requête corrigée.', 'Proposer la configuration corrigée côté serveur d’autorisation.'],
    },
  ],
  questions: [
    { id: 'id-q1', type: 'single', difficulty: 1, skills: ['o-mfa'], prompt: 'Une clé de sécurité physique appartient à quelle catégorie de facteur ?', options: [{ id: 'a', text: 'Ce que je sais' }, { id: 'b', text: 'Ce que je possède' }, { id: 'c', text: 'Ce que je suis' }, { id: 'd', text: 'Où je suis' }] },
    { id: 'id-q2', type: 'multi', difficulty: 2, skills: ['o-mfa'], prompt: 'Quelles méthodes peuvent être contournées par un proxy d’hameçonnage qui relaie la connexion en temps réel ?', options: [{ id: 'a', text: 'Code par SMS' }, { id: 'b', text: 'Code TOTP d’une application' }, { id: 'c', text: 'Passkey FIDO2' }, { id: 'd', text: 'Mot de passe seul' }] },
    { id: 'id-q3', type: 'truefalse', difficulty: 2, skills: ['o-mfa'], prompt: 'Avec FIDO2, la signature produite par l’authentificateur est liée au domaine du site, ce qui la rend inutilisable sur un faux site.' },
    { id: 'id-q4', type: 'short', difficulty: 2, skills: ['o-mfa'], prompt: 'Comment appelle-t-on l’attaque consistant à envoyer des notifications MFA répétées jusqu’à ce que la victime en accepte une ? (deux mots)' },
    { id: 'id-q5', type: 'single', difficulty: 2, skills: ['o-oauth'], prompt: 'Quel protocole ajoute une couche d’authentification (id_token) au-dessus d’OAuth 2.0 ?', options: [{ id: 'a', text: 'SAML' }, { id: 'b', text: 'OpenID Connect' }, { id: 'c', text: 'Kerberos' }, { id: 'd', text: 'LDAP' }] },
    { id: 'id-q6', type: 'truefalse', difficulty: 2, skills: ['o-oauth'], prompt: 'Un jeton d’accès OAuth 2.0 valide prouve à l’application cliente l’identité de l’utilisateur.' },
    { id: 'id-q7', type: 'single', difficulty: 3, skills: ['o-oauth'], prompt: 'Quelle extension empêche un attaquant ayant intercepté le code d’autorisation de l’échanger contre un jeton ?', options: [{ id: 'a', text: 'PKCE' }, { id: 'b', text: 'CORS' }, { id: 'c', text: 'HSTS' }, { id: 'd', text: 'SameSite' }] },
    { id: 'id-q8', type: 'short', difficulty: 2, skills: ['o-oauth'], prompt: 'Quel paramètre OAuth, aléatoire et vérifié au retour, protège contre le CSRF sur le flux de connexion ?' },
    { id: 'id-q9', type: 'multi', difficulty: 3, skills: ['o-oauth'], prompt: 'Quels contrôles doivent être vérifiés sur un id_token ?', options: [{ id: 'a', text: 'La signature' }, { id: 'b', text: 'L’émetteur (iss)' }, { id: 'c', text: 'L’audience (aud) égale à son propre client_id' }, { id: 'd', text: 'La couleur du logo de l’IdP' }, { id: 'e', text: 'L’expiration (exp)' }] },
    { id: 'id-q10', type: 'single', difficulty: 3, skills: ['o-oauth'], prompt: 'Une victime a accepté qu’une application « Lecteur PDF » lise sa messagerie. Le mot de passe est changé, la MFA est active. L’attaquant a-t-il toujours accès ?', options: [{ id: 'a', text: 'Non, le changement de mot de passe suffit' }, { id: 'b', text: 'Oui, tant que le consentement et les jetons (de rafraîchissement) de l’application ne sont pas révoqués' }, { id: 'c', text: 'Non, la MFA bloque tout' }, { id: 'd', text: 'Seulement le week-end' }] },
    { id: 'id-q11', type: 'single', difficulty: 2, skills: ['o-authz'], prompt: '« Un médecin peut lire un dossier si le patient est dans son service et s’il se connecte depuis un poste géré. » De quel modèle s’agit-il ?', options: [{ id: 'a', text: 'RBAC pur' }, { id: 'b', text: 'ABAC' }, { id: 'c', text: 'DAC' }, { id: 'd', text: 'Aucun' }] },
    { id: 'id-q12', type: 'truefalse', difficulty: 1, skills: ['o-authz'], prompt: 'Dans une approche Zero Trust, un appareil connecté au réseau interne de l’entreprise bénéficie automatiquement d’un accès de confiance.' },
    { id: 'id-q13', type: 'multi', difficulty: 2, skills: ['o-authz'], prompt: 'Quels signaux un accès conditionnel peut-il prendre en compte ?', options: [{ id: 'a', text: 'Le niveau de risque de la session' }, { id: 'b', text: 'La conformité de l’appareil' }, { id: 'c', text: 'La méthode d’authentification utilisée' }, { id: 'd', text: 'Le fond d’écran de l’utilisateur' }] },
    { id: 'id-q14', type: 'open', difficulty: 3, skills: ['o-oauth', 'o-authz'], prompt: 'Relevez les problèmes de la requête `response_type=token` avec les scopes `Mail.ReadWrite Files.ReadWrite.All` pour une application de prise de notes, et proposez la configuration corrigée.' },
    { id: 'id-q15', type: 'open', difficulty: 3, skills: ['o-mfa', 'o-authz'], prompt: 'Proposez un plan en étapes pour déployer une authentification résistante à l’hameçonnage dans une entreprise de 1 000 personnes, en traitant la récupération de compte.' },
    { id: 'id-q16', type: 'short', difficulty: 2, skills: ['o-authz', 'o-mfa'], prompt: 'Quelle publication du NIST définit l’architecture Zero Trust ? (SP 800-…)' },
  ],
  resources: [
    { title: 'NIST SP 800-207 — Zero Trust Architecture', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/207/final' },
    { title: 'RFC 9700 — OAuth 2.0 Security Best Current Practice', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc9700' },
    { title: 'Recommandations relatives à l’authentification multifacteur et aux mots de passe', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-relatives-lauthentification-multifacteur-et-aux-mots-de-passe' },
    { title: 'FIDO Alliance — Passkeys', source: 'FIDO Alliance', url: 'https://fidoalliance.org/passkeys/' },
  ],
};
