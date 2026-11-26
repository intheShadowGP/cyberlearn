import type { CourseBody } from '../../types';
import { questions } from './questions';

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
      {
        id: 'cycle-vie',
        title: 'Cycle de vie des identités et gouvernance',
        blocks: [
          { t: 'p', text: 'Une authentification forte ne sert à rien si des comptes inutiles restent actifs ou si les droits s’accumulent. La **gouvernance des identités** gère chaque identité depuis son arrivée jusqu’à son départ.' },
          {
            t: 'table',
            head: ['Événement', 'Action', 'Source de vérité'],
            rows: [
              ['**Arrivée** (joiner)', 'Création du compte, droits du profil, MFA enrôlée', 'Système RH'],
              ['**Mobilité** (mover)', 'Ajout des nouveaux droits et retrait des anciens', 'Système RH, responsable'],
              ['**Départ** (leaver)', 'Désactivation immédiate, révocation des sessions et consentements', 'Système RH'],
              ['**Inactivité**', 'Désactivation automatique des comptes dormants', 'Journaux d’authentification'],
              ['**Revue**', 'Certification périodique des droits par les responsables', 'Annuaire, applications'],
            ],
          },
          { t: 'def', term: 'SCIM', text: 'Standard de provisionnement automatique : l’annuaire ou le fournisseur d’identité crée, modifie et supprime les comptes dans les applications, pour que les droits restent cohérents sans intervention manuelle.' },
          { t: 'def', term: 'IGA', text: 'Gouvernance et administration des identités : processus et outils qui gèrent le cycle de vie, le provisionnement, les revues d’accès et la conformité.' },
          { t: 'list', items: ['**Automatiser** à partir du système RH, source de vérité.', '**Certifier** régulièrement les droits, notamment privilégiés.', '**Supprimer** les comptes orphelins et dormants.', '**Tracer** chaque décision comme preuve d’audit.'] },
          { t: 'callout', kind: 'warn', text: 'Un compte de départ non désactivé est l’une des portes d’entrée les plus fréquentes : le provisionnement automatique la ferme.' },
        ],
      },
      {
        id: 'sessions',
        title: 'Sessions, jetons et détection du détournement',
        blocks: [
          { t: 'p', text: 'Après l’authentification, c’est un **jeton ou un cookie de session** qui prouve l’identité. Le voler suffit à agir sans mot de passe ni MFA. La protection des sessions est donc aussi importante que celle de la connexion.' },
          {
            t: 'table',
            head: ['Mesure', 'Effet'],
            rows: [
              ['**Jetons d’accès courts**', 'Limitent la fenêtre d’exploitation d’un vol'],
              ['**Jetons liés à l’appareil**', 'Le jeton volé est inutilisable sur une autre machine'],
              ['**Évaluation continue**', 'Révocation de la session si le risque augmente'],
              ['**Révocation**', 'Invalidation immédiate de sessions, jetons de rafraîchissement et consentements'],
              ['**Détection**', 'Voyage impossible, nouvel appareil, règle de transfert de courriels, changement d’agent utilisateur'],
            ],
          },
          { t: 'def', term: 'Vol de session', text: 'Détournement d’un cookie ou d’un jeton déjà authentifié, par exemple via un proxy d’hameçonnage ou un logiciel malveillant. L’attaquant se connecte sans connaître le mot de passe et sans être arrêté par la MFA.' },
          { t: 'list', ordered: true, items: ['**Détecter** : signaux de contexte inhabituel et nouvelles règles de messagerie.', '**Révoquer** les sessions, jetons de rafraîchissement et consentements.', '**Réinitialiser** les facteurs et les mots de passe.', '**Rechercher** les actions faites (messages envoyés, droits ajoutés, applications autorisées).', '**Corriger** : facteurs résistants à l’hameçonnage, jetons liés, durée plus courte.'] },
          { t: 'callout', kind: 'key', text: 'Changer le mot de passe ne suffit pas : les sessions déjà ouvertes et les jetons de rafraîchissement restent valides tant qu’ils ne sont pas révoqués.' },
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
    {
      id: 'vol-session',
      kind: 'analysis',
      title: 'Analyse : un détournement de session dans une messagerie',
      context: [
        { t: 'code', lang: 'text', code: 'Heure   Compte           Événement\n08:55   m.leroy          connexion depuis Lyon (appareil géré, passkey)\n09:40   m.leroy          connexion depuis une adresse d’hébergeur à l’étranger, MFA par code, nouvel appareil\n09:44   m.leroy          création d’une règle de messagerie : transférer les messages contenant « facture » vers une adresse externe\n09:50   m.leroy          autorisation de l’application « Lecteur PDF » (Mail.Read, offline_access)\n10:05   m.leroy          envoi d’un courriel demandant un changement de coordonnées bancaires à la comptabilité' },
      ],
      steps: ['Décrire l’enchaînement et ce qu’il révèle.', 'Indiquer, dans l’ordre, la réponse à conduire.', 'Proposer les mesures de prévention et de détection à ajouter.'],
    },
  ],
  questions,
  resources: [
    { title: 'NIST SP 800-207 — Zero Trust Architecture', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/207/final' },
    { title: 'RFC 9700 — OAuth 2.0 Security Best Current Practice', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc9700' },
    { title: 'Recommandations relatives à l’authentification multifacteur et aux mots de passe', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-relatives-lauthentification-multifacteur-et-aux-mots-de-passe' },
    { title: 'FIDO Alliance — Passkeys', source: 'FIDO Alliance', url: 'https://fidoalliance.org/passkeys/' },
  ],
};
