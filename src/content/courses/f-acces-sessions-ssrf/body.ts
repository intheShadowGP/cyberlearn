import type { CourseBody } from '../../types';

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
  ],
  questions: [
    { id: 'acc-q1', type: 'single', difficulty: 1, skills: ['f-access'], prompt: 'Un client accède à la facture d’un autre en remplaçant `1043` par `1044` dans l’URL. De quelle vulnérabilité s’agit-il ?', options: [{ id: 'a', text: 'Une IDOR (contrôle d’accès horizontal défaillant)' }, { id: 'b', text: 'Une injection SQL' }, { id: 'c', text: 'Un XSS réfléchi' }, { id: 'd', text: 'Une SSRF' }] },
    { id: 'acc-q2', type: 'truefalse', difficulty: 2, skills: ['f-access'], prompt: 'Remplacer les identifiants numériques par des UUID aléatoires suffit à corriger une IDOR.' },
    { id: 'acc-q3', type: 'multi', difficulty: 2, skills: ['f-access'], prompt: 'Quelles mesures corrigent ou préviennent les défauts de contrôle d’accès ?', options: [{ id: 'a', text: 'Vérifier côté serveur, à chaque requête, que l’objet appartient à l’utilisateur' }, { id: 'b', text: 'Refuser par défaut toute route sans règle d’autorisation explicite' }, { id: 'c', text: 'Masquer les boutons d’administration pour les utilisateurs standard' }, { id: 'd', text: 'Limiter les champs modifiables à une liste explicite' }] },
    { id: 'acc-q4', type: 'open', difficulty: 3, skills: ['f-access', 'f-csrf-cors'], prompt: 'Décrivez comment vous testeriez le contrôle d’accès d’une application de gestion de dossiers comportant des rôles « agent » et « superviseur ».' },
    { id: 'acc-q5', type: 'single', difficulty: 2, skills: ['f-session'], prompt: 'Quel attribut empêche le JavaScript de la page de lire un cookie de session ?', options: [{ id: 'a', text: '`HttpOnly`' }, { id: 'b', text: '`Secure`' }, { id: 'c', text: '`Path=/`' }, { id: 'd', text: '`Max-Age`' }] },
    { id: 'acc-q6', type: 'short', difficulty: 2, skills: ['f-session'], prompt: 'Quel préfixe de nom de cookie impose `Secure`, `Path=/` et l’absence d’attribut `Domain` ?', placeholder: '__…-' },
    { id: 'acc-q7', type: 'truefalse', difficulty: 2, skills: ['f-session'], prompt: 'Pour prévenir la fixation de session, il faut générer un nouvel identifiant de session au moment de l’authentification.' },
    { id: 'acc-q8', type: 'multi', difficulty: 2, skills: ['f-session'], prompt: 'Quelles pratiques renforcent l’authentification d’une application web ?', options: [{ id: 'a', text: 'Même message d’erreur pour un compte inconnu et un mot de passe incorrect' }, { id: 'b', text: 'Limitation des tentatives et authentification multifacteur' }, { id: 'c', text: 'Jeton de réinitialisation de mot de passe aléatoire, à usage unique et de courte durée' }, { id: 'd', text: 'Envoi du mot de passe en clair par courriel après inscription' }] },
    { id: 'acc-q9', type: 'single', difficulty: 2, skills: ['f-csrf-cors'], prompt: 'Pourquoi une attaque CSRF fonctionne-t-elle sans que l’attaquant connaisse le cookie de la victime ?', options: [{ id: 'a', text: 'Le navigateur joint automatiquement les cookies du site cible à la requête, même déclenchée depuis une autre page' }, { id: 'b', text: 'L’attaquant devine le cookie par force brute' }, { id: 'c', text: 'Le serveur envoie le cookie à tous les sites' }, { id: 'd', text: 'CORS transmet le cookie à l’attaquant' }] },
    { id: 'acc-q10', type: 'truefalse', difficulty: 3, skills: ['f-csrf-cors'], prompt: 'Une politique CORS restrictive suffit à protéger une application contre le CSRF.' },
    { id: 'acc-q11', type: 'multi', difficulty: 3, skills: ['f-csrf-cors'], prompt: 'Quelles configurations CORS sont dangereuses pour une API qui utilise des cookies de session ?', options: [{ id: 'a', text: 'Refléter l’en-tête `Origin` reçu avec `Access-Control-Allow-Credentials: true`' }, { id: 'b', text: 'Accepter toute origine qui contient le nom du domaine (`exemple.fr.attaquant.example` passe)' }, { id: 'c', text: 'Autoriser l’origine `null` avec les identifiants' }, { id: 'd', text: 'Une liste fixe contenant uniquement l’origine du front-end officiel' }] },
    { id: 'acc-q12', type: 'short', difficulty: 2, skills: ['f-csrf-cors'], prompt: 'Quelle valeur de l’attribut SameSite empêche l’envoi du cookie sur toute requête intersite, y compris la navigation par lien ?' },
    { id: 'acc-q13', type: 'single', difficulty: 2, skills: ['f-ssrf'], prompt: 'Une fonction « aperçu de lien » renvoie le contenu de `http://169.254.169.254/latest/meta-data/`. Quel est le risque principal ?', options: [{ id: 'a', text: 'Le vol d’identifiants temporaires du cloud via le service de métadonnées de l’instance' }, { id: 'b', text: 'Un ralentissement du site' }, { id: 'c', text: 'Une erreur d’affichage CSS' }, { id: 'd', text: 'Aucun : cette adresse n’est pas routable' }] },
    { id: 'acc-q14', type: 'multi', difficulty: 3, skills: ['f-ssrf'], prompt: 'Quelles défenses sont efficaces contre la SSRF ?', options: [{ id: 'a', text: 'Liste d’autorisation des domaines et du schéma `https`' }, { id: 'b', text: 'Vérifier l’adresse IP résolue, puis se connecter à cette même adresse' }, { id: 'c', text: 'Filtrage réseau en sortie du serveur' }, { id: 'd', text: 'Refuser uniquement la chaîne « 127.0.0.1 » dans l’URL' }] },
    { id: 'acc-q15', type: 'open', difficulty: 3, skills: ['f-ssrf', 'f-access'], prompt: 'Une route `GET /telecharger?fichier=rapport.pdf` lit le fichier dans `/srv/rapports/`. Expliquez la vulnérabilité possible et proposez deux corrections, de la plus sûre à la moins sûre.' },
    { id: 'acc-q16', type: 'single', difficulty: 2, skills: ['f-ssrf', 'f-session'], prompt: 'À quoi sert principalement l’OWASP ASVS ?', options: [{ id: 'a', text: 'À définir des exigences de sécurité vérifiables par niveau, pour la conception et l’audit' }, { id: 'b', text: 'À scanner automatiquement les vulnérabilités d’un site' }, { id: 'c', text: 'À chiffrer les cookies' }, { id: 'd', text: 'À remplacer un pare-feu applicatif' }] },
  ],
  resources: [
    { title: 'OWASP Top 10', source: 'OWASP', url: 'https://owasp.org/www-project-top-ten/' },
    { title: 'OWASP API Security Top 10', source: 'OWASP', url: 'https://owasp.org/www-project-api-security/' },
    { title: 'Application Security Verification Standard', source: 'OWASP', url: 'https://owasp.org/www-project-application-security-verification-standard/' },
    { title: 'Server-Side Request Forgery Prevention Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html' },
    { title: 'Cross-Site Request Forgery Prevention Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html' },
    { title: 'Set-Cookie', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/fr/docs/Web/HTTP/Headers/Set-Cookie' },
  ],
};
