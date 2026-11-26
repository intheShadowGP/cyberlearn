import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'f-web-fondamentaux',
  lesson: {
    intro:
      'Presque toutes les applications que nous utilisons passent par le Web : banque, messagerie, administration, commerce. Leur sécurité repose sur quelques idées simples, mais capitales : comprendre ce que le navigateur et le serveur s’échangent, ne jamais faire confiance à ce qui vient de l’extérieur, vérifier qui est l’utilisateur et ce qu’il a le droit de faire. Ce cours pose ces bases, sans prérequis, pour que les cours suivants (injections, accès, sessions) aient un sens.',
    sections: [
      {
        id: 'http',
        title: 'Comment fonctionne le Web : URL, requêtes et réponses',
        blocks: [
          { t: 'p', text: 'Quand vous ouvrez une page, votre navigateur (le **client**) envoie une **requête** à un **serveur**, qui renvoie une **réponse**. Le langage de cet échange est **HTTP**. Chaque requête est indépendante : HTTP est un protocole **sans état**, il ne se souvient pas, de lui-même, de vous.' },
          { t: 'code', lang: 'text', caption: 'Anatomie d’une URL', code: 'https://boutique.exemple:443/produits/liste?categorie=livres&page=2#avis\n└─┬─┘   └───────┬───────┘└┬─┘└──────┬──────┘└────────────┬────────┘└─┬─┘\nschéma        hôte      port    chemin          paramètres (requête)  fragment' },
          {
            t: 'table',
            head: ['Élément', 'Rôle', 'Remarque de sécurité'],
            rows: [
              ['**Schéma** (`https`)', 'Protocole utilisé', '`https` chiffre l’échange'],
              ['**Hôte** et **port**', 'Serveur visé', 'Le nom de domaine identifie le site'],
              ['**Chemin**', 'Ressource demandée', 'Peut être modifié par l’utilisateur'],
              ['**Paramètres** (`?a=1&b=2`)', 'Données envoyées au serveur', 'Contrôlés par l’utilisateur : à ne jamais croire'],
              ['**Fragment** (`#avis`)', 'Position dans la page', 'Reste dans le navigateur, n’est pas envoyé au serveur'],
            ],
          },
          { t: 'code', lang: 'http', caption: 'Une requête et sa réponse', code: 'GET /produits/liste?categorie=livres HTTP/1.1\nHost: boutique.exemple\nUser-Agent: Mozilla/5.0\nCookie: session=Yt9k…Qz\n\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\nSet-Cookie: panier=3; Secure; HttpOnly\n\n<html>…</html>' },
          {
            t: 'table',
            head: ['Méthode', 'Usage habituel'],
            rows: [
              ['`GET`', 'Consulter une ressource, sans la modifier'],
              ['`POST`', 'Envoyer des données (formulaire de connexion, création)'],
              ['`PUT` / `PATCH`', 'Remplacer ou modifier une ressource'],
              ['`DELETE`', 'Supprimer une ressource'],
            ],
          },
          { t: 'list', items: ['**2xx** : succès (`200 OK`).', '**3xx** : redirection (`301`, `302`).', '**4xx** : erreur du client (`401` authentification requise, `403` accès refusé, `404` introuvable).', '**5xx** : erreur du serveur (`500`).'] },
          { t: 'callout', kind: 'key', text: 'Tout ce que le navigateur envoie (URL, paramètres, en-têtes, cookies) peut être modifié par l’utilisateur avec les outils de développement ou un simple `curl`. Le serveur ne peut jamais supposer que la requête vient « d’un vrai formulaire ».' },
        ],
      },
      {
        id: 'navigateur',
        title: 'Le navigateur, l’origine, les cookies et HTTPS',
        blocks: [
          { t: 'def', term: 'Origine', text: 'Combinaison du **protocole**, du **nom d’hôte** et du **port** d’une page. `https://exemple.fr` et `https://exemple.fr:8443` n’ont pas la même origine, pas plus que `http://exemple.fr` et `https://exemple.fr`.' },
          { t: 'def', term: 'Politique de même origine', text: 'Règle du navigateur : un script d’une page ne peut pas lire librement les données d’une page d’une **autre origine**. Elle empêche, par exemple, qu’un site malveillant ouvert dans un autre onglet lise votre messagerie.' },
          { t: 'p', text: 'Comme HTTP n’a pas de mémoire, le site vous reconnaît grâce à un **cookie** : un petit fragment de données que le serveur demande au navigateur de conserver, puis que le navigateur renvoie à chaque requête vers ce site. Après la connexion, le cookie contient en général un **identifiant de session**, associé côté serveur à votre compte.' },
          {
            t: 'table',
            head: ['Attribut de cookie', 'Effet'],
            rows: [
              ['`Secure`', 'Envoyé seulement en HTTPS'],
              ['`HttpOnly`', 'Inaccessible au JavaScript de la page'],
              ['`SameSite`', 'Limite l’envoi du cookie depuis un autre site'],
              ['`Max-Age` / `Expires`', 'Durée de vie du cookie'],
            ],
          },
          { t: 'def', term: 'HTTPS', text: 'HTTP protégé par **TLS** : la connexion est chiffrée, et le navigateur vérifie par un certificat qu’il parle bien au nom de domaine affiché. Il protège contre l’écoute et la modification des échanges en transit.' },
          { t: 'callout', kind: 'warn', text: 'Le cadenas dit que la connexion est chiffrée vers le nom de domaine affiché. Il ne dit pas que le site est honnête : un site d’hameçonnage peut en avoir un.' },
          { t: 'callout', kind: 'tip', text: 'Voler un cookie de session revient à voler la session : on se connecte « à votre place » sans mot de passe. D’où l’intérêt de `Secure`, `HttpOnly` et d’une durée de vie limitée.' },
        ],
      },
      {
        id: 'entrees',
        title: 'Ne jamais faire confiance aux données reçues',
        blocks: [
          { t: 'p', text: 'La règle d’or de la sécurité web : **toute donnée qui vient de l’extérieur est potentiellement hostile**. Elle peut être modifiée par l’utilisateur ou forgée par un attaquant. Les **injections** surviennent quand une telle donnée est **interprétée comme du code** par un autre composant.' },
          { t: 'def', term: 'Injection SQL', text: 'Une donnée saisie change la **structure** de la requête SQL envoyée à la base de données, au lieu d’être traitée comme une simple valeur. L’attaquant peut contourner une connexion, lire ou modifier la base.' },
          {
            t: 'example',
            title: 'Une connexion contournée',
            blocks: [
              { t: 'code', lang: 'sql', code: "-- Requête construite en collant la saisie dans le texte :\nSELECT * FROM utilisateurs WHERE login = 'admin' -- ' AND mot_de_passe = '…'" },
              { t: 'p', text: 'Avec la saisie `admin\' -- `, l’apostrophe ferme la chaîne et `--` met le reste en commentaire : la vérification du mot de passe a disparu.' },
            ],
          },
          { t: 'def', term: 'XSS (Cross-Site Scripting)', text: 'Du JavaScript fourni par un attaquant est inséré dans une page du site. Il s’exécute dans le navigateur de la victime **avec les droits du site** : lire la page, agir en son nom, afficher un faux formulaire.' },
          {
            t: 'table',
            head: ['Risque', 'Cause', 'Correction de base'],
            rows: [
              ['Injection SQL', 'Concaténation de la saisie dans une requête', '**Requêtes paramétrées**'],
              ['XSS', 'Affichage d’une saisie comme du HTML', '**Encoder la sortie**, afficher comme du texte'],
              ['Validation seulement côté navigateur', 'Contrôle contournable avec `curl`', 'Valider aussi **côté serveur**'],
            ],
          },
          { t: 'callout', kind: 'key', text: 'Un contrôle fait seulement dans la page (JavaScript) améliore le confort de l’utilisateur, pas la sécurité : l’attaquant envoie sa requête directement. La vérification qui compte est celle du **serveur**.' },
        ],
      },
      {
        id: 'authentification',
        title: 'Identifier et autoriser : authentification et contrôle d’accès',
        blocks: [
          { t: 'p', text: 'Deux questions différentes se posent à chaque requête : **qui êtes-vous ?** (authentification) et **qu’avez-vous le droit de faire ?** (autorisation). Réussir la première ne dispense jamais de la seconde.' },
          {
            t: 'table',
            head: ['Notion', 'Question', 'Exemples'],
            rows: [
              ['**Authentification**', 'Qui est l’utilisateur ?', 'Mot de passe, code à usage unique, clé de sécurité (MFA)'],
              ['**Autorisation**', 'Peut-il faire **cette** action sur **cet** objet ?', 'Rôle administrateur, propriété d’une facture'],
            ],
          },
          { t: 'list', items: ['**Mots de passe** : jamais stockés en clair, mais sous forme d’**empreintes** calculées avec une fonction lente et salée (Argon2, bcrypt).', '**Messages d’erreur identiques** pour « compte inconnu » et « mot de passe incorrect », pour ne pas révéler quels comptes existent.', '**Limitation des tentatives** et **authentification multifacteur** (MFA).', '**Principe du moindre privilège** : donner seulement les droits nécessaires.'] },
          { t: 'def', term: 'IDOR (référence directe à un objet)', text: 'L’application utilise un identifiant fourni par l’utilisateur (`/factures/1043`) sans vérifier qu’il a le droit d’accéder à cet objet. En changeant le numéro, on lit la facture d’un autre.' },
          { t: 'callout', kind: 'warn', text: 'Masquer un bouton ou un menu n’est pas un contrôle d’accès : la route reste appelable directement. Le droit d’accès se vérifie **côté serveur, à chaque requête**.' },
        ],
      },
      {
        id: 'owasp',
        title: 'Les grands risques : le Top 10 de l’OWASP',
        blocks: [
          { t: 'p', text: 'L’**OWASP** est une fondation qui publie des ressources libres sur la sécurité des applications. Son **Top 10** classe les dix catégories de risques les plus critiques, révisées de temps à autre. C’est un **point de départ** de sensibilisation, pas une liste exhaustive de toutes les failles.' },
          {
            t: 'table',
            head: ['Famille', 'En termes simples', 'Mesure de base'],
            rows: [
              ['**Contrôle d’accès défaillant**', 'Accéder à ce qu’on n’a pas le droit de voir ou faire', 'Vérifier les droits côté serveur'],
              ['**Défaillances cryptographiques**', 'Données sensibles mal protégées', 'HTTPS, chiffrement, mots de passe hachés'],
              ['**Injection**', 'Une donnée interprétée comme du code', 'Requêtes paramétrées, encodage'],
              ['**Conception non sécurisée**', 'Risques non pensés dès le départ', 'Modélisation des menaces, cas d’abus'],
              ['**Mauvaise configuration**', 'Comptes par défaut, erreurs trop bavardes', 'Durcissement, revue de configuration'],
              ['**Composants vulnérables**', 'Bibliothèques obsolètes', 'Inventaire et mises à jour'],
              ['**Authentification défaillante**', 'Mots de passe faibles, sessions mal gérées', 'MFA, sessions robustes'],
              ['**Journalisation insuffisante**', 'Attaques non détectées', 'Journaux et alertes'],
            ],
          },
          { t: 'def', term: 'En-têtes de sécurité', text: 'Instructions envoyées par le serveur pour que le navigateur renforce la protection : `Strict-Transport-Security` (HTTPS obligatoire), `Content-Security-Policy` (sources de scripts autorisées), `X-Content-Type-Options: nosniff`.' },
          { t: 'list', items: ['**Mettre à jour** le système, le framework et les bibliothèques.', '**Ne pas afficher** de trace d’erreur détaillée aux visiteurs : elle aide l’attaquant.', '**Journaliser** les connexions, les refus d’accès, les erreurs, et surveiller ces journaux.'] },
        ],
      },
      {
        id: 'pratiques',
        title: 'Apprendre et signaler de façon responsable',
        blocks: [
          { t: 'p', text: 'Comprendre les attaques aide à défendre, mais tester un site que l’on ne possède pas, sans autorisation, est **illégal**, même sans intention de nuire. Il existe de nombreux moyens légaux de s’entraîner.' },
          { t: 'list', items: ['**Applications volontairement vulnérables** installées chez soi (OWASP Juice Shop, DVWA) : on les attaque sans risque.', '**Laboratoires en ligne** conçus pour l’apprentissage (par exemple la Web Security Academy de PortSwigger).', '**Les outils de développement** du navigateur : onglet Réseau pour lire les requêtes, onglet Application pour voir les cookies.', '**Programmes de divulgation** et de bug bounty, dans le périmètre et les règles qu’ils définissent.'] },
          {
            t: 'example',
            title: 'Signaler une faille découverte par hasard',
            blocks: [
              { t: 'p', text: 'Vous remarquez qu’en changeant un numéro dans l’URL d’un site, vous voyez les données d’une autre personne. Vous **cessez** de naviguer au-delà, vous **ne copiez ni ne partagez** ces données, et vous prévenez le responsable (adresse de sécurité du site, page de signalement, CERT national) avec une description claire et les étapes pour reproduire, sans exiger de contrepartie.' },
            ],
          },
          { t: 'callout', kind: 'legal', text: 'Le droit pénal sanctionne l’accès frauduleux à un système d’information, même sans intention de nuire. Ne testez que ce que vous êtes autorisé à tester, par écrit lorsque c’est une organisation.' },
          { t: 'list', items: ['**Liste de vérifications d’un développeur** : validation côté serveur, requêtes paramétrées, encodage des sorties, HTTPS partout, cookies `Secure` `HttpOnly` `SameSite`, droits vérifiés côté serveur, mots de passe hachés, dépendances à jour, erreurs génériques, journaux.'] },
        ],
      },
    ],
    useCases: [
      'Lire les requêtes d’un site avec les outils de développement pour comprendre ce qui est envoyé au serveur.',
      'Relire un formulaire de connexion d’un projet personnel avec la liste de vérifications d’un développeur.',
      'Expliquer à des collègues pourquoi un cadenas ne suffit pas à juger un site.',
      'S’entraîner sur Juice Shop pour reconnaître une injection, une XSS et un contrôle d’accès défaillant.',
    ],
    commonMistakes: [
      'Croire qu’un cadenas garantit l’honnêteté du site.',
      'Valider les données seulement dans le navigateur.',
      'Masquer un bouton au lieu de vérifier le droit côté serveur.',
      'Stocker ou envoyer des mots de passe en clair, ou les mettre dans l’URL.',
      'Afficher des messages d’erreur détaillés aux visiteurs.',
      'Tester un site sans autorisation « pour voir ».',
    ],
    bestPractices: [
      'Considérer toute donnée reçue comme non fiable et la valider côté serveur.',
      'Requêtes paramétrées et encodage des sorties.',
      'HTTPS partout, cookies de session `Secure`, `HttpOnly` et `SameSite`.',
      'Droits vérifiés côté serveur à chaque requête, moindre privilège, MFA.',
      'Mises à jour régulières, erreurs génériques, journaux surveillés.',
      'S’entraîner sur des cibles prévues pour cela et signaler les failles de façon responsable.',
    ],
    keyPoints: [
      'Le navigateur envoie des requêtes, le serveur répond : tout ce qui est envoyé peut être modifié.',
      'Origine, cookies et HTTPS : le cadenas protège le transport, pas la réputation du site.',
      'Toute donnée reçue est non fiable : requêtes paramétrées et encodage de sortie.',
      'Authentification (qui ?) et autorisation (quoi ?) sont deux contrôles distincts.',
      'Le Top 10 de l’OWASP sert de carte des grands risques.',
      'On s’entraîne sur des cibles autorisées, on signale les failles sans en abuser.',
    ],
  },
  practice: [
    {
      id: 'lire-requete',
      kind: 'analysis',
      labId: 'http-headers-lab',
      title: 'Lire une requête et une réponse HTTP',
      context: [
        { t: 'code', lang: 'http', code: 'POST /connexion HTTP/1.1\nHost: monespace.exemple\nCookie: pref=sombre\nContent-Type: application/x-www-form-urlencoded\n\nlogin=alice&mdp=Printemps2026\n\nHTTP/1.1 302 Found\nLocation: /accueil\nSet-Cookie: session=7f3a9c1e; Path=/' },
      ],
      steps: ['Identifier la méthode, le chemin, les données envoyées et le code de statut de la réponse.', 'Repérer ce que fait le serveur à la fin de la réponse (cookie, redirection).', 'Relever deux faiblesses de sécurité visibles et proposer une correction pour chacune.'],
    },
    {
      id: 'reperer-risques',
      kind: 'case',
      title: 'Cas pratique : quatre situations, quatre risques',
      context: [{ t: 'p', text: 'Un petit site de réservation présente quatre comportements : (a) la page `/reservation?id=57` affiche la réservation d’un autre client si l’on remplace 57 par 58 ; (b) un commentaire contenant une balise de script s’exécute pour tous les visiteurs ; (c) la page de connexion répond « mot de passe incorrect pour ce compte » ou « compte inconnu » selon le cas ; (d) une page d’erreur affiche la trace complète du programme et la version de la base de données.' }],
      steps: ['Nommer le risque de chaque situation (famille du Top 10 ou type de faille).', 'Proposer la correction de base de chacune.', 'Classer les situations de la plus grave à la moins grave et justifier.'],
    },
    {
      id: 'revue-formulaire',
      kind: 'analysis',
      title: 'Revue d’un formulaire de connexion',
      context: [
        { t: 'code', lang: 'text', code: '1. Adresse du formulaire : http://monsite.exemple/connexion (sans HTTPS)\n2. Envoi par la méthode GET : /connexion?login=alice&mdp=Printemps2026\n3. Le mot de passe est enregistré en clair dans la base de données\n4. Aucune limite sur le nombre de tentatives de connexion\n5. La requête SQL est construite par concaténation de login et mdp\n6. Le cookie de session est envoyé sans les attributs Secure ni HttpOnly' },
      ],
      steps: ['Pour chaque point, expliquer le risque.', 'Proposer la correction correspondante.', 'Ordonner les corrections par priorité.'],
    },
  ],
  questions,
  resources: [
    { title: 'HTTP — Guides et références', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/fr/docs/Web/HTTP' },
    { title: 'OWASP Top 10', source: 'OWASP', url: 'https://owasp.org/www-project-top-ten/' },
    { title: 'Web Security Academy', source: 'PortSwigger', url: 'https://portswigger.net/web-security' },
    { title: 'OWASP Juice Shop', source: 'OWASP', url: 'https://owasp.org/www-project-juice-shop/' },
    { title: 'Recommandations pour la sécurisation des sites web', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-pour-la-securisation-des-sites-web' },
  ],
};
