import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'f-injections-xss',
  lesson: {
    intro:
      "Les injections figurent depuis vingt ans dans le classement OWASP Top 10. Elles ont toutes la même cause : une donnée fournie par l'utilisateur finit par être **interprétée comme du code** par un autre composant, que ce soit une base de données, un navigateur ou un shell. Une fois cette idée comprise, la correction devient systématique : ne jamais construire du code par concaténation de données.",
    sections: [
      {
        id: 'cause',
        title: 'La cause commune : mélanger données et code',
        blocks: [
          { t: 'def', term: 'Injection', text: "Vulnérabilité dans laquelle une donnée non fiable est insérée dans une commande ou une requête **interprétée**, et modifie la structure de celle-ci au lieu d'être traitée comme une simple valeur." },
          { t: 'def', term: 'Frontière de confiance', text: "Point où une donnée passe d'une zone non maîtrisée (navigateur, API externe, fichier importé) à une zone qui l'utilise. Toute donnée qui franchit cette frontière est considérée comme hostile." },
          {
            t: 'table',
            head: ['Interpréteur', 'Injection', 'Correction structurelle'],
            rows: [
              ['Moteur SQL', 'Injection SQL', 'Requêtes paramétrées'],
              ['Navigateur (HTML/JS)', 'XSS', 'Encodage de sortie contextuel, API DOM sûres, CSP'],
              ['Shell système', 'Injection de commande', 'API sans shell (`execFile`, liste d’arguments)'],
              ['Moteur NoSQL', 'Injection NoSQL (`{"$ne": null}`)', 'Validation de type stricte'],
              ['Analyseur XML', 'XXE', 'Désactiver les entités externes'],
            ],
          },
          { t: 'callout', kind: 'key', text: "Le filtrage des « caractères dangereux » (liste noire) est une défense fragile : il y a toujours un encodage, un contexte ou une syntaxe oubliés. La bonne correction sépare **structurellement** le code et les données." },
        ],
      },
      {
        id: 'sqli',
        title: 'Injection SQL',
        blocks: [
          { t: 'code', lang: 'javascript', caption: 'Code vulnérable (Node.js)', code: "app.post('/login', async (req, res) => {\n  const sql = \"SELECT id FROM users WHERE login = '\" + req.body.login +\n              \"' AND password_hash = '\" + hash(req.body.password) + \"'\";\n  const rows = await db.query(sql);\n  if (rows.length) return startSession(res, rows[0].id);\n  res.status(401).send('Échec');\n});" },
          {
            t: 'example',
            title: 'Contournement d’authentification',
            blocks: [
              { t: 'p', text: "Avec l'identifiant `admin' -- `, la requête devient :" },
              { t: 'code', lang: 'sql', code: "SELECT id FROM users WHERE login = 'admin' -- ' AND password_hash = '…'" },
              { t: 'p', text: "L'apostrophe ferme la chaîne, `--` transforme le reste en commentaire : la vérification du mot de passe a disparu. La donnée a modifié la **structure** de la requête." },
            ],
          },
          { t: 'diagram', id: 'sql-injection', caption: 'La concaténation mêle la saisie à la requête : elle peut être interprétée comme du code. La requête paramétrée envoie la saisie séparément : elle reste une donnée.', alt: 'Schéma comparant une requête SQL construite par concaténation, où la saisie admin apostrophe tiret-tiret est interprétée comme du code et contourne la vérification, et une requête paramétrée où la même saisie est traitée comme une simple donnée.' },
          { t: 'list', items: ['**Injection par UNION** : ajouter `UNION SELECT` pour extraire d’autres tables.', '**Injection aveugle booléenne** : la page change selon qu’une condition est vraie ou fausse.', '**Injection aveugle temporelle** : `SLEEP(5)` révèle la vérité par le temps de réponse.', '**Impact** : lecture de toute la base, modification, parfois exécution de commandes sur le serveur.'] },
          { t: 'code', lang: 'javascript', caption: 'Correction : requête paramétrée', code: "const rows = await db.query(\n  'SELECT id, password_hash FROM users WHERE login = $1',\n  [req.body.login],               // envoyé séparément : jamais interprété comme du SQL\n);\nif (rows.length && await argon2.verify(rows[0].password_hash, req.body.password)) { … }" },
          { t: 'callout', kind: 'warn', text: "Les noms de tables ou de colonnes ne peuvent pas être paramétrés. S'ils dépendent d'une entrée (tri par colonne), utiliser une **liste blanche** de valeurs autorisées." },
        ],
      },
      {
        id: 'xss',
        title: 'Cross-Site Scripting (XSS)',
        blocks: [
          { t: 'def', term: 'XSS', text: "Injection de code JavaScript dans une page servie par le site vulnérable. Le script s'exécute dans le navigateur de la victime **avec l'origine du site** : il peut lire la page, agir au nom de l'utilisateur, voler des jetons non protégés." },
          {
            t: 'table',
            head: ['Type', 'Où est la charge ?', 'Exemple'],
            rows: [
              ['Réfléchie', 'Dans la requête, renvoyée immédiatement', '`/recherche?q=<script>…</script>` affiché tel quel'],
              ['Stockée', 'Enregistrée en base, servie à tous', 'Commentaire de blog contenant un script'],
              ['DOM', 'Traitée uniquement côté client', "`el.innerHTML = location.hash.slice(1)`"],
            ],
          },
          { t: 'code', lang: 'javascript', caption: 'Puits dangereux et alternatives sûres', code: "// Dangereux : interprète du HTML\nel.innerHTML = commentaire;\ndocument.write(param);\n\n// Sûr : traite la valeur comme du texte\nel.textContent = commentaire;\n// Dans React : {commentaire} est encodé automatiquement ;\n// dangerouslySetInnerHTML est à proscrire sans assainissement (DOMPurify)." },
          { t: 'p', text: "L'encodage doit correspondre au **contexte** de sortie : contenu HTML (`&lt;`), attribut entre guillemets, URL (`encodeURIComponent`, et refus du schéma `javascript:`), JavaScript. Les moteurs de gabarits modernes encodent par défaut le contenu HTML." },
        ],
      },
      {
        id: 'csp',
        title: 'CSP et en-têtes de sécurité',
        blocks: [
          { t: 'def', term: 'Content Security Policy (CSP)', text: "En-tête HTTP qui indique au navigateur quelles sources de scripts, styles, images ou connexions sont autorisées. Une CSP stricte empêche l'exécution de scripts injectés même si une XSS existe." },
          { t: 'code', lang: 'text', caption: 'Exemple de CSP stricte', code: "Content-Security-Policy: default-src 'self'; script-src 'self'; object-src 'none';\n  base-uri 'self'; frame-ancestors 'none'; form-action 'self'" },
          { t: 'list', items: ["Éviter `'unsafe-inline'` et `'unsafe-eval'` dans `script-src` : ils annulent l'essentiel de la protection.", 'Pour autoriser un script inline précis : `nonce` aléatoire par réponse ou empreinte `sha256-…`.', '`frame-ancestors` protège contre le détournement de clic (clickjacking) ; il ne fonctionne qu’en en-tête HTTP, pas en balise meta.', 'Compléments : `X-Content-Type-Options: nosniff`, `Referrer-Policy`, cookies `HttpOnly; Secure; SameSite`.'] },
          { t: 'callout', kind: 'info', title: 'Cette plateforme', text: "CyberAcadémie applique elle-même une CSP `script-src 'self'` sans script inline, et n'interprète jamais de HTML brut dans ses contenus." },
          { t: 'callout', kind: 'legal', text: 'Tester ces injections sur un site sans autorisation écrite est une infraction. Pratiquez sur le laboratoire simulé de la plateforme ou sur des applications volontairement vulnérables installées chez vous (OWASP Juice Shop, DVWA).' },
        ],
      },
    ],
    useCases: [
      'Revue de code : repérer toute requête SQL construite par concaténation et tout usage d’innerHTML avec des données.',
      'Test d’intrusion web autorisé : vérifier chaque paramètre avec une apostrophe et des charges XSS inoffensives.',
      'Durcissement : déployer une CSP en mode `Report-Only`, analyser les rapports, puis l’appliquer.',
    ],
    commonMistakes: [
      'Échapper « à la main » les apostrophes au lieu d’utiliser des requêtes paramétrées.',
      'Valider uniquement côté client (JavaScript) : l’attaquant envoie directement sa requête.',
      'Croire qu’un ORM protège toujours : ses fonctions de requête brute restent injectables.',
      'Encoder pour le HTML une valeur insérée dans un attribut `href` (le schéma `javascript:` passe).',
      "Ajouter `'unsafe-inline'` à la CSP « pour que ça marche ».",
    ],
    bestPractices: [
      'Requêtes paramétrées partout, liste blanche pour les identifiants dynamiques.',
      'Encodage de sortie contextuel par le moteur de gabarits, API DOM `textContent`.',
      'Assainir le HTML riche avec une bibliothèque éprouvée (DOMPurify).',
      'CSP stricte sans unsafe-inline, cookies HttpOnly, Secure et SameSite.',
      'Compte de base de données aux droits minimaux pour l’application.',
    ],
    keyPoints: [
      'Injection = donnée interprétée comme du code par un autre composant.',
      'SQL : requêtes paramétrées, jamais de concaténation.',
      'XSS : réfléchie, stockée, DOM ; correction par encodage contextuel.',
      'La CSP limite l’impact d’une XSS mais ne remplace pas la correction.',
    ],
  },
  practice: [
    {
      id: 'labo-sqli',
      kind: 'simulation',
      title: 'Laboratoire : application de connexion vulnérable (simulée)',
      context: [{ t: 'p', text: 'Une application fictive affiche la requête SQL qu’elle construit à partir de vos saisies. Aucune base réelle n’est interrogée : un analyseur simulé reproduit le comportement.' }],
      steps: ['Observer la requête produite avec un identifiant normal.', 'Contourner l’authentification en mode vulnérable.', 'Basculer en mode corrigé et constater l’échec de la même charge.'],
      labId: 'sqli-lab',
    },
    {
      id: 'revue-xss',
      kind: 'analysis',
      title: 'Revue de code : trouver les XSS',
      context: [
        { t: 'code', lang: 'javascript', code: "// 1\ndocument.getElementById('bienvenue').innerHTML = 'Bonjour ' + new URLSearchParams(location.search).get('nom');\n// 2\nlien.href = profil.siteWeb;\n// 3\nliste.textContent = commentaire.texte;\n// 4 (React)\n<div dangerouslySetInnerHTML={{ __html: article.corps }} />\n// 5 (React)\n<p>{commentaire.texte}</p>" },
      ],
      steps: ['Pour chaque ligne, dire si elle est vulnérable et à quel type de XSS.', 'Proposer une correction pour chaque ligne vulnérable.'],
    },
  ],
  questions: [
    { id: 'web-q1', type: 'single', difficulty: 1, skills: ['f-inj-cause'], prompt: 'Quelle est la cause commune à toutes les injections ?', options: [{ id: 'a', text: 'Un chiffrement trop faible' }, { id: 'b', text: 'Une donnée non fiable interprétée comme du code par un autre composant' }, { id: 'c', text: 'Un mot de passe trop court' }, { id: 'd', text: 'Un serveur non mis à jour' }] },
    { id: 'web-q2', type: 'truefalse', difficulty: 1, skills: ['f-inj-cause'], prompt: 'Valider les saisies en JavaScript dans le navigateur suffit à se protéger des injections.' },
    { id: 'web-q3', type: 'multi', difficulty: 2, skills: ['f-inj-cause'], prompt: 'Quelles sources de données doivent être considérées comme non fiables ?', options: [{ id: 'a', text: 'Les en-têtes HTTP envoyés par le client (User-Agent, Referer)' }, { id: 'b', text: 'Les cookies' }, { id: 'c', text: 'Les réponses d’une API tierce' }, { id: 'd', text: 'Une constante définie dans le code source de l’application' }] },
    { id: 'web-q4', type: 'single', difficulty: 2, skills: ['f-sqli'], prompt: 'Dans une requête `… WHERE login = \'` + saisie + `\' AND …`, quel identifiant contourne la vérification du mot de passe ?', options: [{ id: 'a', text: '`admin`' }, { id: 'b', text: "`admin' -- `" }, { id: 'c', text: '`<script>admin</script>`' }, { id: 'd', text: '`admin%00`' }] },
    { id: 'web-q5', type: 'short', difficulty: 1, skills: ['f-sqli'], prompt: 'Comment appelle-t-on les requêtes SQL dont les valeurs sont transmises séparément du texte de la requête ? (deux mots)' },
    { id: 'web-q6', type: 'truefalse', difficulty: 2, skills: ['f-sqli'], prompt: 'Un nom de colonne utilisé dans un ORDER BY peut être transmis comme paramètre lié d’une requête préparée.' },
    { id: 'web-q7', type: 'single', difficulty: 3, skills: ['f-sqli'], prompt: 'La page met systématiquement 5 secondes de plus à répondre quand on ajoute `\' AND SLEEP(5) -- ` au paramètre. De quoi s’agit-il ?', options: [{ id: 'a', text: 'D’une injection SQL aveugle temporelle' }, { id: 'b', text: 'D’une XSS stockée' }, { id: 'c', text: 'D’une attaque par déni de service réseau' }, { id: 'd', text: 'D’un comportement normal de cache' }] },
    { id: 'web-q8', type: 'single', difficulty: 2, skills: ['f-xss'], prompt: '`el.innerHTML = location.hash.slice(1)` est vulnérable à quel type de XSS ?', options: [{ id: 'a', text: 'Réfléchie côté serveur' }, { id: 'b', text: 'Stockée' }, { id: 'c', text: 'Basée sur le DOM' }, { id: 'd', text: 'Aucune' }] },
    { id: 'web-q9', type: 'multi', difficulty: 2, skills: ['f-xss'], prompt: 'Que peut faire un script injecté par XSS dans la page de la victime ?', options: [{ id: 'a', text: 'Lire le contenu de la page et les données affichées' }, { id: 'b', text: 'Envoyer des requêtes au site au nom de la victime' }, { id: 'c', text: 'Lire un cookie marqué HttpOnly via document.cookie' }, { id: 'd', text: 'Afficher un faux formulaire de connexion sur le vrai domaine' }] },
    { id: 'web-q10', type: 'short', difficulty: 1, skills: ['f-xss'], prompt: 'Quelle propriété DOM faut-il utiliser à la place d’innerHTML pour insérer du texte sans l’interpréter ?' },
    { id: 'web-q11', type: 'truefalse', difficulty: 2, skills: ['f-xss', 'f-inj-cause'], prompt: 'Encoder les caractères HTML (`<`, `>`, `&`) suffit à sécuriser une valeur insérée dans l’attribut `href` d’un lien.' },
    { id: 'web-q12', type: 'single', difficulty: 2, skills: ['f-csp'], prompt: 'Quelle directive CSP annule l’essentiel de la protection contre les XSS si elle figure dans script-src ?', options: [{ id: 'a', text: "`'self'`" }, { id: 'b', text: "`'unsafe-inline'`" }, { id: 'c', text: "`'none'`" }, { id: 'd', text: '`https:` limité à un domaine précis' }] },
    { id: 'web-q13', type: 'multi', difficulty: 2, skills: ['f-csp'], prompt: 'Quelles mesures réduisent l’impact d’une XSS ?', options: [{ id: 'a', text: "Une CSP sans 'unsafe-inline'" }, { id: 'b', text: 'Des cookies de session HttpOnly' }, { id: 'c', text: 'L’encodage Base64 des réponses' }, { id: 'd', text: 'L’utilisation de nonces pour les rares scripts inline nécessaires' }] },
    { id: 'web-q14', type: 'open', difficulty: 3, skills: ['f-sqli', 'f-inj-cause'], prompt: 'Un développeur propose de corriger une injection SQL en remplaçant chaque apostrophe par deux apostrophes. Expliquez pourquoi ce n’est pas satisfaisant et ce que vous recommandez.' },
    { id: 'web-q15', type: 'open', difficulty: 3, skills: ['f-csp', 'f-xss'], prompt: 'Vous devez déployer une CSP stricte sur une application existante qui contient de nombreux scripts inline. Décrivez votre démarche pour ne pas casser la production.' },
    { id: 'web-q16', type: 'single', difficulty: 2, skills: ['f-csp', 'f-xss'], prompt: 'Quelle directive CSP protège contre le détournement de clic (clickjacking) ?', options: [{ id: 'a', text: '`script-src`' }, { id: 'b', text: '`frame-ancestors`' }, { id: 'c', text: '`img-src`' }, { id: 'd', text: '`connect-src`' }] },
  ],
  resources: [
    { title: 'OWASP Top 10', source: 'OWASP', url: 'https://owasp.org/www-project-top-ten/' },
    { title: 'SQL Injection Prevention Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html' },
    { title: 'Cross Site Scripting Prevention Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html' },
    { title: 'Content Security Policy', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/fr/docs/Web/HTTP/CSP' },
  ],
};
