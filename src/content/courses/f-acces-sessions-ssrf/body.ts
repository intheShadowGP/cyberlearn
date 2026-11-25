import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'f-acces-sessions-ssrf',
  lesson: {
    intro:
      'Les injections exploitent une confusion entre données et code. Les failles de ce cours exploitent une autre confusion : entre ce que l’utilisateur **demande** et ce qu’il a le **droit** d’obtenir. Accéder à la facture d’un autre client en changeant un numéro dans l’URL, faire exécuter une action par le navigateur d’une victime, obliger le serveur à interroger une adresse interne : aucune de ces attaques n’exige de code malveillant, seulement une vérification oubliée côté serveur.',
    sections: [
      {
        id: 'acces',
        title: 'Contrôle d’accès : IDOR et élévation verticale',
        blocks: [
          { t: 'p', text: 'Le contrôle d’accès répond à la question « cet utilisateur a-t-il le droit de faire **cette** action sur **cet** objet ? ». Il doit être vérifié **côté serveur, à chaque requête**. Masquer un bouton dans l’interface n’est pas un contrôle d’accès.' },
          {
            t: 'table',
            head: ['Type', 'Exemple', 'Défense'],
            rows: [
              ['**Horizontal** (IDOR)', '`GET /api/factures/1043` renvoie la facture d’un autre client si l’on change l’identifiant', 'Vérifier que l’objet appartient à l’utilisateur authentifié'],
              ['**Vertical**', 'Un utilisateur standard appelle `POST /api/admin/utilisateurs`', 'Vérifier le rôle sur chaque route sensible, refus par défaut'],
              ['**Affectation de masse**', '`PATCH /api/profil` avec `{"role":"admin"}` accepté car l’objet est copié tel quel', 'Liste explicite des champs modifiables'],
            ],
          },
          { t: 'def', term: 'IDOR (référence directe non sécurisée à un objet)', text: 'L’application utilise un identifiant fourni par le client pour accéder à un objet sans vérifier que le client y a droit. Des identifiants aléatoires (UUID) rendent l’énumération plus difficile mais **ne remplacent pas** la vérification.' },
          {
            t: 'example',
            title: 'Vérification placée au bon endroit',
            blocks: [
              { t: 'code', lang: 'typescript', code: '// Vulnérable : l’identifiant vient du client, aucune vérification de propriété\nconst facture = await db.factures.findById(req.params.id);\n\n// Corrigé : la requête est restreinte au propriétaire authentifié\nconst facture = await db.factures.findOne({ id: req.params.id, clientId: req.session.clientId });\nif (!facture) return res.status(404).end(); // 404 : ne pas révéler l’existence' },
            ],
          },
          { t: 'callout', kind: 'key', text: 'Le contrôle d’accès défaillant figure en tête de l’OWASP Top 10 depuis l’édition 2021. Il échappe aux scanners automatiques, qui ne savent pas à qui appartient une facture : il se teste avec au moins deux comptes de même niveau et un compte de niveau inférieur.' },
        ],
      },
      {
        id: 'sessions',
        title: 'Cookies, sessions et authentification',
        blocks: [
          { t: 'p', text: 'Après l’authentification, le serveur reconnaît l’utilisateur grâce à un **identifiant de session** transporté par un cookie. Voler ou imposer cet identifiant revient à voler la session.' },
          { t: 'code', lang: 'http', caption: 'Cookie de session bien configuré', code: 'Set-Cookie: __Host-session=Yt9k…Qz; Path=/; Secure; HttpOnly; SameSite=Lax' },
          {
            t: 'table',
            head: ['Attribut', 'Effet'],
            rows: [
              ['`Secure`', 'Envoyé uniquement en HTTPS'],
              ['`HttpOnly`', 'Inaccessible au JavaScript : limite le vol de session par XSS'],
              ['`SameSite=Lax` ou `Strict`', 'Non envoyé sur les requêtes intersites de type POST (Lax) ou sur aucune requête intersite (Strict)'],
              ['Préfixe `__Host-`', 'Impose `Secure`, `Path=/` et l’absence d’attribut `Domain` : un sous-domaine ne peut pas l’écraser'],
            ],
          },
          { t: 'def', term: 'Fixation de session', text: 'L’attaquant obtient un identifiant de session valide, le fait adopter par la victime (lien, cookie imposé depuis un sous-domaine), attend qu’elle s’authentifie, puis réutilise le même identifiant. Défense : **générer un nouvel identifiant à chaque authentification** et à chaque changement de privilèges.' },
          { t: 'list', items: ['Messages d’erreur identiques pour « compte inconnu » et « mot de passe incorrect » (pas d’énumération).', 'Limitation des tentatives et MFA ; réinitialisation de mot de passe par jeton aléatoire à usage unique et à courte durée de vie.', 'Expiration de session après inactivité, invalidation côté serveur à la déconnexion.'] },
        ],
      },
      {
        id: 'csrf',
        title: 'CSRF, SameSite et CORS',
        blocks: [
          { t: 'p', text: 'Le navigateur joint automatiquement les cookies d’un site à toute requête vers ce site, même si elle est déclenchée par une **autre** page. Le **CSRF** (falsification de requête intersite) exploite ce comportement : une page malveillante fait envoyer par le navigateur de la victime une requête qui modifie son compte.' },
          { t: 'code', lang: 'html', caption: 'Page malveillante (en laboratoire)', code: '<form action="https://banque.exemple/virement" method="POST" id="f">\n  <input name="iban" value="FR76…ATTAQUANT"><input name="montant" value="500">\n</form>\n<script>document.getElementById(\'f\').submit()</script>' },
          { t: 'list', items: ['**SameSite=Lax** empêche l’envoi du cookie sur ce POST intersite : c’est la première barrière. Chrome et Edge appliquent Lax si l’attribut est absent, mais pas tous les navigateurs : il faut le définir explicitement.', '**Jeton anti-CSRF** lié à la session, exigé sur chaque requête qui modifie l’état.', 'Vérification de l’en-tête `Origin` sur les requêtes sensibles.', 'Ne jamais modifier l’état sur une requête `GET`.'] },
          { t: 'def', term: 'CORS (partage de ressources entre origines)', text: 'Mécanisme par lequel un serveur **assouplit** la politique de même origine pour autoriser une autre origine à **lire** ses réponses. CORS n’est pas une protection contre le CSRF : la requête part et s’exécute même si la réponse n’est pas lisible.' },
          { t: 'callout', kind: 'warn', text: 'Configuration dangereuse : renvoyer dans `Access-Control-Allow-Origin` l’origine reçue, quelle qu’elle soit, avec `Access-Control-Allow-Credentials: true`. N’importe quel site peut alors lire les données de l’utilisateur connecté. Les origines autorisées doivent figurer dans une liste fixe.' },
        ],
      },
      {
        id: 'ssrf',
        title: 'SSRF et traversée de répertoires',
        blocks: [
          { t: 'p', text: 'Certaines fonctionnalités font **agir le serveur** à partir d’une donnée fournie par l’utilisateur : télécharger une image depuis une URL, générer un aperçu de lien, lire un fichier de modèle. Si cette donnée n’est pas contrainte, l’attaquant choisit la cible.' },
          { t: 'def', term: 'SSRF (falsification de requête côté serveur)', text: 'L’attaquant fait émettre par le serveur des requêtes vers des destinations qu’il ne peut pas atteindre lui-même : services internes, interfaces d’administration, ou service de métadonnées du cloud (`169.254.169.254`) qui délivre des identifiants temporaires.' },
          { t: 'diagram', id: 'ssrf-flow', caption: 'SSRF : l’attaquant détourne une fonction du serveur pour atteindre une cible interne qu’il ne peut joindre lui-même.', alt: 'Flux en quatre étapes : l’attaquant envoie au serveur une URL interne (1), le serveur émet la requête SSRF vers le service de métadonnées 169.254.169.254 (2), celui-ci renvoie des identifiants temporaires (3) que le serveur retourne à l’attaquant (4) ; l’attaquant ne peut pas joindre cette adresse directement.' },
          {
            t: 'table',
            head: ['Défense contre la SSRF', 'Pourquoi'],
            rows: [
              ['Liste d’autorisation des domaines et des schémas (`https` uniquement)', 'Une liste de refus se contourne (encodages, redirections, IPv6, DNS)'],
              ['Résoudre le nom, vérifier l’adresse obtenue, puis se connecter à **cette** adresse', 'Empêche le « DNS rebinding » entre vérification et connexion'],
              ['Refuser les redirections ou revérifier chaque saut', 'Une URL externe autorisée peut rediriger vers une adresse interne'],
              ['Filtrage réseau en sortie du serveur ; IMDSv2 sur AWS', 'Défense en profondeur : même contournée, la requête n’atteint pas la cible'],
            ],
          },
          { t: 'code', lang: 'text', caption: 'Traversée de répertoires', code: 'GET /telecharger?fichier=../../../../etc/passwd\n\nCorrection : ne pas utiliser de chemin fourni par l’utilisateur ; à défaut,\nnormaliser le chemin (realpath) puis vérifier qu’il commence par le répertoire autorisé,\nou associer un identifiant à une liste de fichiers connus.' },
        ],
      },
      {
        id: 'api',
        title: 'Sécuriser une API et exprimer les exigences (ASVS)',
        blocks: [
          { t: 'p', text: 'Les API exposent directement les objets et les actions, sans l’interface qui masquait parfois les défauts. Le Top 10 de l’OWASP consacré aux API place le défaut d’autorisation au niveau de l’objet (BOLA, équivalent de l’IDOR) en première position.' },
          { t: 'list', items: ['Authentification sur chaque point d’entrée ; jetons à durée de vie courte, signature vérifiée avec un algorithme fixé côté serveur (jamais celui indiqué par le jeton).', 'Autorisation au niveau de l’objet **et** de la fonction ; refus par défaut.', 'Validation stricte des entrées par schéma ; réponses limitées aux champs nécessaires.', 'Limitation de débit et de taille ; journalisation des refus d’accès.'] },
          { t: 'def', term: 'OWASP ASVS', text: 'Application Security Verification Standard : catalogue d’exigences de sécurité vérifiables, organisé par thème (authentification, sessions, contrôle d’accès…) et par niveau (1 : minimum pour toute application ; 2 : la plupart des applications ; 3 : applications critiques). Il sert à rédiger un cahier des charges et à structurer un audit.' },
          { t: 'callout', kind: 'tip', text: 'Transformer chaque défaut trouvé en test automatisé (par exemple : « l’utilisateur A reçoit 404 sur la facture de B ») empêche sa réapparition lors d’une évolution du code.' },
        ],
      },
      {
        id: 'authentification',
        title: 'Authentification moderne : MFA, OAuth 2.0 et OpenID Connect',
        blocks: [
          { t: 'p', text: 'Un mot de passe seul ne suffit plus : hameçonnage, bourrage d’identifiants et fuites le rendent insuffisant. L’authentification multifacteur (MFA) ajoute un second élément, mais tous les facteurs ne se valent pas face à un attaquant qui interpose un faux site.' },
          {
            t: 'table',
            head: ['Facteur', 'Résistance à l’hameçonnage', 'Remarque'],
            rows: [
              ['Code par SMS ou courriel', 'Faible', 'Saisi sur un faux site, il est rejoué aussitôt ; échange de carte SIM'],
              ['Code temporel (TOTP)', 'Moyenne', 'Rejouable en temps réel par un site relais'],
              ['Notification à valider', 'Moyenne', 'Exposée à la **fatigue MFA** : l’utilisateur finit par accepter'],
              ['Clé FIDO2 / WebAuthn (passkey)', 'Forte', 'La signature est **liée au nom de domaine** : un faux site ne reçoit rien d’exploitable'],
            ],
          },
          { t: 'def', term: 'OAuth 2.0 et OpenID Connect', text: '**OAuth 2.0** permet à une application d’obtenir un accès délégué (un jeton d’accès) aux ressources d’un utilisateur sans connaître son mot de passe. **OpenID Connect** s’ajoute pour **authentifier** l’utilisateur : il fournit un jeton d’identité signé (JWT) décrivant qui s’est connecté.' },
          { t: 'list', items: ['**Flux par code d’autorisation avec PKCE** : le code renvoyé ne sert qu’à celui qui détient le secret généré au départ ; le flux implicite (jeton dans l’URL) est abandonné.', '**`redirect_uri` comparée exactement** à une liste enregistrée : toute correspondance partielle permet de détourner le code vers l’attaquant.', '**`state`** lié à la session du navigateur pour empêcher un CSRF sur le flux ; **`nonce`** pour lier le jeton d’identité à la requête.', '**Jeton d’identité** : vérifier la signature, l’émetteur (`iss`), le destinataire (`aud`), l’expiration (`exp`) et le `nonce` avant de s’en servir.', '**Scopes minimaux** et jetons d’accès à durée de vie courte.'] },
          {
            t: 'example',
            title: 'Une redirect_uri trop permissive',
            blocks: [
              { t: 'code', lang: 'text', code: 'Enregistrée  : https://app.exemple/*\nAttaque      : …/authorize?redirect_uri=https://app.exemple/../../attaquant.example/collecte\n\nEnregistrée  : préfixe « https://app.exemple »\nAttaque      : redirect_uri=https://app.exemple.attaquant.example/callback' },
              { t: 'p', text: 'Un joker ou une comparaison de préfixe laisse l’attaquant recevoir le code d’autorisation, puis le jeton. La comparaison doit être **exacte**, caractère pour caractère.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: 'Se connecter avec le jeton d’identité sans vérifier sa signature, son audience ou son expiration revient à croire n’importe quel jeton fabriqué par un attaquant.' },
        ],
      },
      {
        id: 'detection',
        title: 'Détecter et limiter les abus',
        blocks: [
          { t: 'p', text: 'Les failles de contrôle d’accès et d’authentification laissent des traces dans les journaux, à condition d’avoir décidé **quoi enregistrer** et **quoi surveiller**. Détecter tôt une énumération réduit fortement l’impact d’une IDOR.' },
          { t: 'def', term: 'Limitation de débit', text: 'Plafonnement du nombre de requêtes acceptées par compte, par adresse ou par jeton sur une période. Elle freine l’énumération d’identifiants, la force brute et le bourrage d’identifiants ; elle s’accompagne de réponses uniformes pour ne pas révéler d’information.' },
          {
            t: 'table',
            head: ['Signal dans les journaux', 'Interprétation probable', 'Réponse'],
            rows: [
              ['Une adresse ou un compte parcourt des identifiants **séquentiels** avec de nombreux 403 ou 404', 'Énumération (IDOR)', 'Alerte, blocage temporaire, revue de la route'],
              ['Un compte standard appelle des routes d’administration', 'Tentative d’élévation verticale', 'Alerte, vérification des droits de la route'],
              ['Nombreux échecs de connexion sur des comptes différents depuis une même adresse', 'Pulvérisation de mots de passe', 'Limitation de débit, MFA, blocage'],
              ['Connexion réussie depuis un pays ou un appareil inhabituel juste après des échecs', 'Compte compromis', 'Réauthentification, révocation des sessions'],
              ['Requêtes du serveur vers des adresses internes ou `169.254.169.254`', 'SSRF', 'Filtrage en sortie, alerte immédiate'],
            ],
          },
          {
            t: 'example',
            title: 'Reconnaître une énumération',
            blocks: [
              { t: 'code', lang: 'text', code: '198.51.100.7  client=17  GET /api/clients/18/factures  403\n198.51.100.7  client=17  GET /api/clients/19/factures  403\n198.51.100.7  client=17  GET /api/clients/20/factures  200   ← route non protégée\n198.51.100.7  client=17  GET /api/clients/21/factures  200' },
              { t: 'p', text: 'Un même client enchaîne des identifiants qui se suivent : après deux refus, deux réponses 200 indiquent qu’une route est mal protégée. La réponse consiste à corriger la route, vérifier tout ce qui a été lu par ce compte et prévenir les personnes concernées si des données personnelles ont été exposées.' },
            ],
          },
          { t: 'list', items: ['**Journaliser** : qui (compte), quoi (objet, action), quand, depuis où, et le résultat, y compris les refus.', '**Ne jamais journaliser** de mots de passe, de jetons de session ni de données sensibles en clair.', '**Alerter** sur les motifs ci-dessus et conserver les journaux de façon centralisée, à l’abri de la modification.', '**Tester** : un test automatisé par faille corrigée, rejoué à chaque évolution.'] },
          { t: 'callout', kind: 'tip', text: 'La journalisation des refus d’accès est souvent absente alors qu’elle est la meilleure source de détection des attaques sur le contrôle d’accès.' },
        ],
      },
    ],
    useCases: [
      'Audit d’une API de facturation : tester chaque route avec plusieurs comptes pour détecter IDOR et élévation verticale.',
      'Revue de configuration : cookies de session, SameSite, CORS et en-têtes d’une application avant mise en production.',
      'Conception d’une fonctionnalité d’import par URL : liste d’autorisation, filtrage réseau en sortie, IMDSv2.',
    ],
    commonMistakes: [
      'Masquer un bouton côté client et croire que l’action est protégée.',
      'Compter sur des identifiants difficiles à deviner au lieu de vérifier la propriété de l’objet.',
      'Conserver le même identifiant de session avant et après l’authentification.',
      'Croire que CORS protège contre le CSRF, ou refléter n’importe quelle origine avec les identifiants.',
      'Filtrer la SSRF par une liste de refus d’adresses (127.0.0.1, localhost) facile à contourner.',
    ],
    bestPractices: [
      'Contrôle d’accès centralisé côté serveur, refus par défaut, vérification de propriété dans la requête de données.',
      'Cookies de session `Secure`, `HttpOnly`, `SameSite`, préfixe `__Host-` ; nouvel identifiant à l’authentification.',
      'Jeton anti-CSRF et vérification de l’origine sur les requêtes qui modifient l’état.',
      'Liste d’autorisation pour toute URL ou chemin fourni par l’utilisateur ; filtrage réseau en sortie.',
      'Exigences ASVS dans le cahier des charges et tests automatisés de non-régression des autorisations.',
    ],
    keyPoints: [
      'Le contrôle d’accès se vérifie côté serveur, à chaque requête, sur chaque objet.',
      'Un nouvel identifiant de session à chaque authentification empêche la fixation.',
      'SameSite et jetons protègent du CSRF ; CORS ne fait qu’autoriser la lecture des réponses.',
      'SSRF : liste d’autorisation, vérification de l’adresse résolue, filtrage en sortie, IMDSv2.',
      'L’ASVS transforme la sécurité en exigences vérifiables par niveau.',
    ],
  },
  practice: [
    {
      id: 'audit-api',
      kind: 'analysis',
      title: 'Analyse de requêtes d’une API',
      context: [
        { t: 'p', text: 'Requêtes observées lors d’un audit autorisé, avec le compte de test « client A » (identifiant client 17) :' },
        { t: 'code', lang: 'text', code: '1. GET  /api/clients/17/factures           → 200 (factures de A)\n2. GET  /api/clients/18/factures           → 200 (factures d’un autre client)\n3. PATCH /api/profil  {"email":"a@test","role":"admin"}  → 200, rôle devenu admin\n4. POST /api/apercu   {"url":"http://169.254.169.254/latest/meta-data/"}  → 200, contenu renvoyé\n5. Réponse : Access-Control-Allow-Origin: https://site-quelconque.example\n             Access-Control-Allow-Credentials: true   (origine reflétée)' },
      ],
      steps: ['Nommer la vulnérabilité de chaque ligne et sa gravité.', 'Proposer la correction de chacune.', 'Proposer un test automatisé pour deux d’entre elles.'],
    },
    {
      id: 'exigences-asvs',
      kind: 'case',
      title: 'Cas pratique : exigences de sécurité pour un espace client',
      context: [{ t: 'p', text: 'Une mutuelle fait développer un espace client (consultation des remboursements, modification du RIB, messagerie avec un conseiller). Vous rédigez la partie sécurité du cahier des charges.' }],
      steps: ['Choisir le niveau ASVS visé et le justifier.', 'Rédiger six exigences testables couvrant sessions, contrôle d’accès et CSRF.', 'Indiquer comment chaque exigence sera vérifiée.'],
    },
    {
      id: 'revue-oauth',
      kind: 'analysis',
      title: 'Revue d’une intégration de connexion OAuth / OpenID Connect',
      context: [
        { t: 'p', text: 'Une application web permet la connexion avec un fournisseur d’identité. Éléments relevés lors d’une revue de code :' },
        { t: 'code', lang: 'text', code: '1. redirect_uri enregistrée chez le fournisseur : https://app.exemple/*\n2. Requête d’autorisation : response_type=token (jeton dans le fragment de l’URL)\n3. Aucun paramètre state, aucun PKCE\n4. Callback : id = decoder(id_token); compte = trouver(id.email); ouvrir_session(compte)\n   (la signature, iss, aud et exp du jeton ne sont pas vérifiés)\n5. La session est ouverte avec l’identifiant de session déjà présent dans le navigateur' },
      ],
      steps: ['Nommer la faiblesse de chaque point et l’attaque qu’elle permet.', 'Décrire la configuration correcte du flux (type de flux, redirect_uri, state, PKCE, validation du jeton).', 'Proposer deux tests automatisés et une surveillance dans les journaux.'],
    },
  ],
  questions,
  resources: [
    { title: 'OWASP Top 10', source: 'OWASP', url: 'https://owasp.org/www-project-top-ten/' },
    { title: 'OWASP API Security Top 10', source: 'OWASP', url: 'https://owasp.org/www-project-api-security/' },
    { title: 'Application Security Verification Standard', source: 'OWASP', url: 'https://owasp.org/www-project-application-security-verification-standard/' },
    { title: 'Server-Side Request Forgery Prevention Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html' },
    { title: 'Cross-Site Request Forgery Prevention Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html' },
    { title: 'Set-Cookie', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/fr/docs/Web/HTTP/Headers/Set-Cookie' },
  ],
};
