import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'f-web-defense-avancee',
  lesson: {
    intro:
      'Les vulnérabilités classiques (injections, XSS, contrôle d’accès) sont bien connues. Un adversaire expérimenté vise ce qui se trouve **entre** les composants et **autour** de l’application : le désaccord entre un proxy et un serveur, le cache, les scripts tiers, les API modernes, la chaîne de dépendances. Ce cours adopte le point de vue de l’architecte et de l’auditeur : modéliser la menace, durcir le navigateur et le protocole, maîtriser les API et la chaîne logicielle, puis détecter et répondre.',
    sections: [
      {
        id: 'modelisation',
        title: 'Modéliser la menace d’une application web',
        blocks: [
          { t: 'p', text: 'La sécurité commence par une question : **qu’est-ce qui peut mal tourner, et contre qui ?** Une modélisation de la menace se fait **dès la conception**, quand corriger coûte peu, et se met à jour à chaque évolution importante.' },
          { t: 'def', term: 'Surface d’attaque', text: 'Ensemble des points d’entrée et des composants qu’un attaquant peut atteindre : routes, API, formulaires, fichiers téléversés, scripts tiers, interfaces d’administration, dépendances, intégrations. La réduire est la première mesure de défense.' },
          { t: 'def', term: 'Diagramme de flux de données', text: 'Schéma des acteurs, des processus, des **magasins de données** et des flux qui les relient, avec les **frontières de confiance** (internet → serveur web, serveur → base, application → paiement tiers). Chaque flux qui franchit une frontière est une cible.' },
          {
            t: 'table',
            head: ['STRIDE', 'Menace', 'Exemple web', 'Réponse typique'],
            rows: [
              ['**S**poofing', 'Usurpation d’identité', 'Jeton volé, session fixée', 'MFA, jetons liés, cookies protégés'],
              ['**T**ampering', 'Altération', 'Prix modifié dans la requête', 'Validation et recalcul côté serveur, signatures'],
              ['**R**epudiation', 'Déni d’une action', 'Un utilisateur nie avoir validé un virement', 'Journaux fiables, horodatés et protégés'],
              ['**I**nformation disclosure', 'Fuite d’information', 'Trace d’erreur, IDOR', 'Autorisation par objet, erreurs génériques'],
              ['**D**enial of service', 'Indisponibilité', 'Requête GraphQL très profonde', 'Limites de débit, de taille et de coût'],
              ['**E**levation of privilege', 'Élévation de privilège', 'Utilisateur qui appelle une route d’administration', 'Autorisation par fonction, moindre privilège'],
            ],
          },
          {
            t: 'example',
            title: 'Un flux, une frontière, trois menaces',
            blocks: [
              { t: 'p', text: 'Le flux « navigateur → API de paiement » franchit la frontière internet/serveur. **Spoofing** : l’appelant est-il bien le propriétaire du compte ? **Tampering** : le montant peut-il être modifié en route ? **Elevation** : un client peut-il appeler la route de remboursement réservée au support ? Chaque question appelle un contrôle précis et un **test** associé.' },
            ],
          },
          { t: 'list', items: ['**Cas d’abus** : pour chaque fonction, écrire « que peut faire un utilisateur malveillant ? » et en tirer des tests.', '**Niveau d’exigence** : choisir le niveau ASVS (1, 2 ou 3) selon la sensibilité des données et l’exposition ; le niveau 3 est réservé aux applications critiques.', '**Hypothèses et risques acceptés** : les consigner, avec leur propriétaire et une date de revue.'] },
          { t: 'callout', kind: 'key', text: 'Un modèle de menace n’est pas un document figé : il se met à jour quand une fonction, un fournisseur ou une dépendance importante change.' },
        ],
      },
      {
        id: 'protocole',
        title: 'Attaques au niveau du protocole HTTP et du cache',
        blocks: [
          { t: 'p', text: 'Entre le navigateur et l’application se trouvent des intermédiaires (répartiteurs de charge, proxys inverses, CDN, caches). Quand deux composants **interprètent différemment** une même requête, un attaquant peut s’engouffrer dans l’écart.' },
          { t: 'def', term: 'Désynchronisation HTTP (request smuggling)', text: 'Le proxy et le serveur d’application ne s’accordent pas sur **où finit une requête** (conflit entre `Content-Length` et `Transfer-Encoding`, ou entre versions HTTP/1 et HTTP/2). Le surplus est lu comme le **début de la requête suivante**, qui peut appartenir à un autre utilisateur.' },
          { t: 'code', lang: 'http', caption: 'Requête ambiguë (laboratoire) : le proxy et le serveur la découpent différemment', code: 'POST /recherche HTTP/1.1\nHost: boutique.exemple\nContent-Length: 13\nTransfer-Encoding: chunked\n\n0\n\nGET /admin HTTP/1.1\nX: x' },
          {
            t: 'table',
            head: ['Attaque', 'Principe', 'Parade'],
            rows: [
              ['**Désynchronisation HTTP**', 'Désaccord sur la fin d’une requête entre proxy et serveur', 'HTTP/2 de bout en bout, rejet des requêtes ambiguës, composants à jour, réutilisation de connexions limitée'],
              ['**Empoisonnement de cache**', 'Une entrée **hors clé de cache** (`X-Forwarded-Host`) est reflétée dans une réponse mise en cache et servie à tous', 'Inclure ou ignorer ces en-têtes de façon cohérente, ne pas refléter d’entrée non fiable'],
              ['**Tromperie de cache (cache deception)**', 'Une URL comme `/compte/profil/x.css` fait stocker en cache une page privée', 'Routage strict, `Cache-Control: private` ou `no-store` sur le contenu dynamique'],
              ['**Injection de l’en-tête Host**', 'Le lien de réinitialisation est construit avec l’en-tête `Host` fourni par l’attaquant', 'Liste d’hôtes autorisés, configuration fixe du nom de domaine'],
              ['**Redirection ouverte**', 'Paramètre de redirection non contrôlé', 'Liste d’adresses autorisées ou chemins relatifs'],
            ],
          },
          { t: 'callout', kind: 'warn', text: 'Une redirection ouverte semble anodine, mais elle donne à un lien d’apparence légitime une destination choisie par l’attaquant, et alimente d’autres attaques (hameçonnage, vol de jeton OAuth).' },
        ],
      },
      {
        id: 'navigateur',
        title: 'Défenses avancées du navigateur',
        blocks: [
          { t: 'p', text: 'Le navigateur est le dernier rempart contre une XSS ou un détournement. Des en-têtes récents lui donnent des consignes précises ; bien employés, ils rendent l’exploitation nettement plus difficile.' },
          { t: 'code', lang: 'text', caption: 'CSP stricte fondée sur un nonce', code: "Content-Security-Policy:\n  script-src 'nonce-R4nd0m' 'strict-dynamic'; object-src 'none';\n  base-uri 'none'; frame-ancestors 'none';\n  require-trusted-types-for 'script'" },
          { t: 'def', term: 'strict-dynamic', text: 'Avec un `nonce`, les scripts approuvés par le nonce peuvent charger d’autres scripts ; les listes d’hôtes et `unsafe-inline` sont **ignorés**. La politique ne dépend plus d’une liste d’hôtes, que l’on contourne souvent par des points d’entrée hébergés (JSONP, anciennes bibliothèques). Le nonce doit être **aléatoire et nouveau à chaque réponse**.' },
          { t: 'def', term: 'Trusted Types', text: 'Mécanisme qui interdit d’insérer une chaîne brute dans un puits dangereux du DOM (`innerHTML`, `eval`…) : seule une valeur produite par une **politique** de confiance est acceptée. Il supprime à la source une grande part des XSS basées sur le DOM.' },
          {
            t: 'table',
            head: ['Mécanisme', 'Rôle', 'Exemple'],
            rows: [
              ['**Fetch Metadata**', 'Le serveur sait d’où vient la requête', '`Sec-Fetch-Site: cross-site` : refuser les requêtes intersites non attendues'],
              ['**COOP**', 'Isole la fenêtre des autres origines', '`Cross-Origin-Opener-Policy: same-origin`'],
              ['**COEP / CORP**', 'Contrôlent le chargement de ressources entre origines', '`Cross-Origin-Embedder-Policy: require-corp`'],
              ['**SRI**', 'Vérifie l’empreinte d’un fichier tiers', '`<script src="…" integrity="sha384-…">`'],
              ['**SameSite**', 'Limite l’envoi des cookies entre sites', '`SameSite=Lax`'],
            ],
          },
          { t: 'list', items: ['Déployer d’abord en **Report-Only**, collecter les rapports, corriger, puis passer en mode bloquant.', 'Utiliser **Fetch Metadata** comme politique d’isolation : par défaut, refuser une requête qui modifie l’état si elle est intersite.', 'Combiner COOP et COEP donne l’**isolation inter-origines**, utile contre les attaques par canaux auxiliaires du processeur.'] },
        ],
      },
      {
        id: 'api',
        title: 'Sécurité des API modernes : GraphQL, WebSocket, jetons liés',
        blocks: [
          { t: 'p', text: 'Les API modernes regroupent beaucoup de fonctions dans peu de points d’entrée : un seul point GraphQL, une connexion WebSocket persistante. Les mécanismes classiques (limitation de débit par route, autorisation par page) ne suffisent plus.' },
          {
            t: 'table',
            head: ['Technologie', 'Risque', 'Défense'],
            rows: [
              ['**GraphQL**', 'Requêtes très profondes, **alias** ou lots qui contournent la limitation de débit, introspection révélant tout le schéma', 'Limite de profondeur et de **coût**, requêtes persistantes, autorisation **par champ**, introspection désactivée en production'],
              ['**WebSocket**', 'Détournement intersite (**CSWSH**) : un site tiers ouvre la connexion avec les cookies de la victime', 'Vérifier l’en-tête `Origin` au moment de la poignée de main, jeton explicite, autorisation à chaque message'],
              ['**REST**', 'BOLA, BFLA (fonction), affectation de masse, exposition excessive de données', 'Autorisation par objet et par fonction, liste de champs, réponses limitées au nécessaire'],
              ['**Jetons**', 'Un jeton volé est rejoué par l’attaquant', 'Jetons **liés à l’expéditeur** (mTLS, DPoP), durée courte, rotation'],
            ],
          },
          { t: 'def', term: 'Jeton lié à l’expéditeur', text: 'Jeton d’accès **associé à une clé** détenue par le client : l’usage exige une preuve de possession (certificat mTLS, preuve DPoP signée pour chaque requête). Un jeton volé devient **inutilisable** sans la clé.' },
          {
            t: 'example',
            title: 'Une limite de débit contournée par alias',
            blocks: [
              { t: 'code', lang: 'text', code: 'query {\n  a1: connexion(login: "alice", mdp: "essai1") { jeton }\n  a2: connexion(login: "alice", mdp: "essai2") { jeton }\n  … a100: connexion(login: "alice", mdp: "essai100") { jeton }\n}' },
              { t: 'p', text: 'Une seule requête HTTP contient cent tentatives de connexion : une limitation par requête n’y voit qu’**une** opération. La limite doit porter sur les **opérations**, ou le coût, et non sur le nombre de requêtes HTTP.' },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Rendre les opérations sensibles idempotentes (identifiant de requête) et limiter la pagination évite à la fois les rejeux et l’extraction massive de données.' },
        ],
      },
      {
        id: 'chaine',
        title: 'Chaîne logicielle et scripts tiers',
        blocks: [
          { t: 'p', text: 'Une application web moderne embarque **des centaines de dépendances** (paquets npm, scripts d’audience, widgets de paiement). Chacune est un accès potentiel : la compromission d’un fournisseur devient celle de tous ses clients.' },
          {
            t: 'table',
            head: ['Attaque', 'Principe', 'Mesure'],
            rows: [
              ['**Typosquatting**', 'Un paquet au nom proche d’un paquet populaire', 'Vérifier le nom et l’éditeur, liste de paquets autorisés'],
              ['**Confusion de dépendance**', 'Un paquet public du même nom qu’un paquet interne est préféré', 'Portées de noms, registre configuré explicitement'],
              ['**Compromission d’un mainteneur**', 'Une version malveillante d’un paquet légitime', 'Verrouillage des versions, relecture des mises à jour, provenance signée'],
              ['**Scripts de skimming (Magecart)**', 'Un script tiers sur la page de paiement envoie les données de carte à l’attaquant', 'Réduire les scripts tiers, CSP, SRI, isolation dans un cadre'],
              ['**Secrets exposés**', 'Clé d’API dans le JavaScript envoyé au navigateur ou dans le dépôt', 'Aucun secret côté client ; secrets en coffre, analyse du dépôt'],
            ],
          },
          { t: 'list', items: ['**Verrouiller** les versions (fichier de verrouillage, `npm ci`) pour des installations reproductibles.', '**Inventorier** : une nomenclature logicielle (**SBOM**, formats CycloneDX ou SPDX) liste composants et versions, pour savoir en quelques minutes si l’on est exposé à une vulnérabilité annoncée.', '**Intégrité** des scripts tiers (SRI) et CSP qui limite leurs destinations ; exécuter les scripts risqués dans un cadre isolé.', '**Pipeline** : analyse de composition logicielle, droits minimaux des jetons de construction, scripts d’installation désactivés quand c’est possible.'] },
          { t: 'callout', kind: 'warn', text: 'Une clé d’API placée dans le JavaScript d’une page est une clé publique : n’importe quel visiteur la lit. Les secrets restent côté serveur.' },
        ],
      },
      {
        id: 'detection',
        title: 'Détection, correctif virtuel et réponse à incident',
        blocks: [
          { t: 'p', text: 'Aucune défense n’est parfaite : l’objectif est de **détecter vite** et de **répondre bien**. Cela suppose des journaux exploitables, des règles de blocage temporaires et un processus de réponse préparé.' },
          { t: 'def', term: 'Correctif virtuel (virtual patching)', text: 'Règle d’un pare-feu applicatif (WAF) qui **bloque une exploitation connue** en attendant la correction du code. C’est une mesure temporaire : elle gagne du temps, elle ne corrige pas la faille.' },
          {
            t: 'table',
            head: ['Capacité', 'Pratique'],
            rows: [
              ['**Journalisation structurée**', 'Événements en JSON (qui, quoi, où, résultat, identifiant de corrélation) : recherche, corrélation et alertes automatiques'],
              ['**Détection**', 'Alertes sur énumérations, erreurs répétées, volumes anormaux, usages d’API inhabituels'],
              ['**Blocage temporaire**', 'Règles WAF ciblées (correctif virtuel), limitation de débit par client'],
              ['**Divulgation**', 'Page de signalement (`security.txt`), politique de divulgation, éventuellement un programme de primes'],
              ['**Tests continus**', 'Analyse statique, analyse dynamique en intégration continue, tests d’intrusion périodiques'],
            ],
          },
          {
            t: 'example',
            title: 'Découverte d’un webshell',
            blocks: [
              { t: 'list', items: ['**Contenir** : isoler le serveur du réseau sans l’éteindre, conserver les preuves (disque, mémoire, journaux).', '**Comprendre** : retrouver la faille d’entrée (téléversement, injection, dépendance vulnérable) et la date de première compromission.', '**Éradiquer** : corriger la faille, reconstruire le serveur depuis une source saine, **changer tous les secrets** accessibles depuis la machine.', '**Surveiller et notifier** : chercher des mouvements latéraux, informer les parties concernées si des données personnelles ont été touchées.', '**Apprendre** : retour d’expérience et amélioration des défenses.'] },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Mesurez : délai de détection, délai de correction, part des constats corrigés dans les délais. Ces chiffres montrent si la défense progresse.' },
        ],
      },
    ],
    useCases: [
      'Cadrage d’un projet : diagramme de flux, STRIDE et choix du niveau ASVS avant le développement.',
      'Audit d’une architecture avec proxy inverse et CDN : désynchronisation, cache et en-tête Host.',
      'Déploiement d’une CSP stricte avec nonce, Trusted Types et Fetch Metadata sur une application existante.',
      'Revue d’une API GraphQL ouverte au public : profondeur, coût, alias, autorisation par champ.',
      'Évaluation de la chaîne logicielle front-end d’une page de paiement : scripts tiers, SRI, SBOM.',
    ],
    commonMistakes: [
      'Modéliser la menace une fois l’application terminée, ou ne jamais la mettre à jour.',
      'Faire confiance à l’en-tête `Host` ou à `X-Forwarded-*` pour construire des liens.',
      'Mettre en cache du contenu dynamique privé sans `Cache-Control` adapté.',
      'Compter sur une liste d’hôtes dans la CSP plutôt que sur un nonce.',
      'Limiter le débit par requête HTTP sur une API qui accepte des lots d’opérations.',
      'Charger des scripts tiers sans intégrité ni CSP sur une page de paiement.',
      'Placer un secret dans le JavaScript du navigateur.',
      'Considérer le WAF comme un correctif définitif.',
    ],
    bestPractices: [
      'Modèle de menace dès la conception, cas d’abus transformés en tests.',
      'HTTP/2 de bout en bout, composants d’infrastructure à jour, hôtes autorisés explicitement.',
      'CSP à nonce avec `strict-dynamic`, Trusted Types, Fetch Metadata, isolation inter-origines.',
      'Autorisation par objet, par fonction et par champ ; limites par opération ; jetons liés.',
      'Versions verrouillées, SBOM à jour, SRI et CSP sur les scripts tiers, secrets côté serveur.',
      'Journaux structurés, alertes, correctif virtuel temporaire, plan de réponse et divulgation organisée.',
    ],
    keyPoints: [
      'Modéliser : surface, flux, frontières de confiance, STRIDE, cas d’abus.',
      'Les écarts d’interprétation entre composants (proxy, cache, serveur) sont exploitables.',
      'CSP à nonce, Trusted Types et Fetch Metadata durcissent le navigateur de façon structurelle.',
      'GraphQL, WebSocket et jetons demandent des défenses propres à leur modèle.',
      'La chaîne logicielle est une surface d’attaque : inventaire, verrouillage, intégrité.',
      'Détecter, corriger, répondre : le WAF ne remplace pas la correction.',
    ],
  },
  practice: [
    {
      id: 'modele-menace',
      kind: 'case',
      title: 'Cas pratique : modéliser une boutique en ligne',
      context: [{ t: 'p', text: 'Une boutique en ligne comprend : un site public et une API (catalogue, panier, compte), un paiement délégué à un prestataire tiers (page hébergée), un back-office réservé aux employés et un script d’audience tiers. Les données sont des profils clients et des historiques de commandes, sans numéro de carte stocké.' }],
      steps: ['Dessiner le diagramme de flux de données et repérer les frontières de confiance.', 'Appliquer STRIDE à trois flux de votre choix et en tirer un contrôle et un test pour chacun.', 'Choisir le niveau ASVS visé et justifier ; lister deux risques acceptés avec leur propriétaire.'],
    },
    {
      id: 'revue-proxy-cache',
      kind: 'analysis',
      title: 'Revue : proxy inverse, cache et lien de réinitialisation',
      context: [
        { t: 'code', lang: 'text', code: '1. Le CDN met en cache toute réponse dont l’URL se termine par .css, .js ou .png, même sous /compte/\n2. Le proxy utilise Content-Length ; le serveur d’application accepte aussi Transfer-Encoding\n3. Le lien de réinitialisation est construit avec : "https://" + request.headers["Host"] + "/reset?t=" + jeton\n4. Le paramètre /sortie?url=… renvoie une redirection vers l’adresse indiquée\n5. L’en-tête X-Forwarded-Host est reflété dans une balise <base> de la page d’accueil, qui est mise en cache' },
      ],
      steps: ['Nommer l’attaque rendue possible par chaque point.', 'Proposer la correction de chacun.', 'Proposer un test ou une détection pour deux d’entre eux.'],
    },
    {
      id: 'durcir-csp',
      kind: 'case',
      title: 'Cas pratique : durcir la politique d’une page de paiement',
      context: [
        { t: 'p', text: 'Politique actuelle et contexte :' },
        { t: 'code', lang: 'text', code: "Content-Security-Policy: script-src 'self' 'unsafe-inline' https://cdn.exemple https://*.analytics.exemple; img-src *\n\nLa page charge : un script maison, deux bibliothèques depuis cdn.exemple, un script d’audience tiers\net contient 3 gestionnaires onclick en ligne. Aucun en-tête de type Fetch Metadata. Cookies : session=…; Path=/" },
      ],
      steps: ['Identifier les faiblesses de la politique.', 'Proposer une politique cible (nonce, strict-dynamic, Trusted Types, SRI) et les modifications du code nécessaires.', 'Décrire le plan de déploiement progressif et la surveillance.'],
    },
  ],
  questions,
  resources: [
    { title: 'Content Security Policy (CSP)', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/fr/docs/Web/HTTP/CSP' },
    { title: 'HTTP request smuggling', source: 'PortSwigger Web Security Academy', url: 'https://portswigger.net/web-security/request-smuggling' },
    { title: 'OWASP API Security Project', source: 'OWASP', url: 'https://owasp.org/www-project-api-security/' },
    { title: 'GraphQL Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/GraphQL_Cheat_Sheet.html' },
    { title: 'OAuth 2.0 Demonstrating Proof of Possession (DPoP) — RFC 9449', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc9449' },
    { title: 'Trusted Types', source: 'web.dev', url: 'https://web.dev/articles/trusted-types' },
    { title: 'CycloneDX — Software Bill of Materials', source: 'OWASP CycloneDX', url: 'https://cyclonedx.org/' },
  ],
};
