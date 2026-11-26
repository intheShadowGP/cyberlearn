import type { CourseBody } from '../../types';
import { questions } from './questions';

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
      {
        id: 'autres',
        title: 'Autres injections : commande, NoSQL, gabarits, en-têtes',
        blocks: [
          { t: 'p', text: 'Le principe est identique pour tous les interpréteurs : dès qu’une valeur de l’utilisateur est **concaténée** dans un texte qui sera interprété, elle peut en modifier la structure. Seule la syntaxe change.' },
          {
            t: 'table',
            head: ['Injection', 'Exemple de charge', 'Correction'],
            rows: [
              ['**Commande système**', '`8.8.8.8; cat /etc/passwd` dans un paramètre passé à `ping`', 'Appel sans shell avec liste d’arguments, liste blanche de valeurs'],
              ['**NoSQL**', '`{"login": "admin", "password": {"$ne": null}}` : l’opérateur remplace la valeur attendue', 'Forcer le type chaîne, refuser les objets et opérateurs venant du client'],
              ['**Gabarit côté serveur (SSTI)**', '`{{7*7}}` renvoie `49` : l’entrée est interprétée par le moteur de gabarits', 'Passer les données comme **variables** du gabarit, jamais dans son texte'],
              ['**LDAP / XPath**', '`*)(uid=*))(|(uid=*` dans un filtre de recherche', 'Échappement spécifique à l’interpréteur ou requêtes paramétrées'],
              ['**En-tête HTTP (CRLF)**', 'Retour à la ligne dans une valeur recopiée dans un en-tête', 'Refuser les caractères CR et LF ; API du framework pour les redirections'],
            ],
          },
          {
            t: 'example',
            title: 'Injection de commande et correction',
            blocks: [
              { t: 'code', lang: 'python', caption: 'Vulnérable : le shell interprète la saisie', code: 'import os\n\ndef ping(hote):\n    os.system("ping -c 1 " + hote)   # hote = "8.8.8.8; id" exécute aussi « id »' },
              { t: 'code', lang: 'python', caption: 'Corrigé : pas de shell, arguments séparés, valeur contrôlée', code: 'import ipaddress, subprocess\n\ndef ping(hote):\n    adresse = ipaddress.ip_address(hote)          # lève une exception si ce n’est pas une IP\n    subprocess.run(["ping", "-c", "1", str(adresse)], check=True, timeout=5)' },
            ],
          },
          { t: 'def', term: 'Injection de gabarit (SSTI)', text: 'Vulnérabilité où l’entrée de l’utilisateur est insérée dans le **texte même** du gabarit avant son rendu. Le moteur l’évalue comme une expression, ce qui peut aller jusqu’à l’exécution de code sur le serveur.' },
          { t: 'callout', kind: 'warn', text: 'Un ORM ne protège que tant qu’on utilise ses fonctions paramétrées : les requêtes brutes (`raw`, `execute`, `$where`) restent injectables si on y concatène une valeur.' },
        ],
      },
      {
        id: 'defense',
        title: 'Détecter, tester et défendre en profondeur',
        blocks: [
          { t: 'def', term: 'Défense en profondeur', text: 'Superposition de mesures indépendantes pour que l’échec de l’une ne suffise pas à compromettre le système. Elle **complète** la correction du code, elle ne la remplace pas.' },
          {
            t: 'table',
            head: ['Couche', 'Mesure', 'Ce qu’elle limite'],
            rows: [
              ['Code', 'Requêtes paramétrées, encodage contextuel, validation côté serveur', 'La cause de l’injection'],
              ['Revue et tests', 'Revue de code, analyse statique (SAST), tests dynamiques (DAST), tests d’intrusion autorisés', 'Les failles qui passent entre les mailles du développement'],
              ['Base de données', 'Compte applicatif aux droits minimaux, pas de droit d’administration, pas d’accès aux fichiers', 'L’impact d’une injection SQL réussie'],
              ['Navigateur', 'CSP stricte, cookies `HttpOnly`, `Secure`, `SameSite`', 'L’impact d’une XSS'],
              ['Réseau', 'Pare-feu applicatif (WAF) réglé et surveillé', 'Les attaques connues, le temps de corriger : **pas** une correction'],
              ['Exploitation', 'Journaux, alertes sur erreurs SQL répétées, motifs `UNION`, `SLEEP`, `<script>`', 'Le temps de détection'],
            ],
          },
          {
            t: 'example',
            title: 'Lire une ligne de journal suspecte',
            blocks: [
              { t: 'code', lang: 'text', code: '203.0.113.9 "GET /produits?id=1%20UNION%20SELECT%20null,version()--" 200 4821\n203.0.113.9 "GET /produits?id=1%20AND%20SLEEP(5)--" 200 912 (durée 5,1 s)' },
              { t: 'p', text: 'Le décodage de l’URL révèle `UNION SELECT` puis `SLEEP(5)` : un attaquant teste une injection par UNION puis une injection temporelle. Réponses 200 de taille inhabituelle et durée de 5 secondes : la requête a bien été interprétée. Il faut corriger le paramètre, vérifier ce qui a été lu et regarder les autres requêtes de la même adresse.' },
            ],
          },
          { t: 'list', items: ['**Messages d’erreur génériques** pour l’utilisateur, détails seulement dans les journaux : une erreur SQL affichée aide l’attaquant.', '**Tests de non-régression** : ajouter un test qui rejoue la charge d’attaque après chaque correction.', '**Dépendances à jour** : une bibliothèque vulnérable (analyse de composition logicielle) réintroduit une injection.', '**Mode Report-Only** de la CSP pour mesurer avant de bloquer.'] },
          { t: 'callout', kind: 'tip', text: 'Un WAF peut gagner quelques jours le temps de corriger, mais il se contourne (encodages, variantes). Corrigez toujours la cause dans le code.' },
        ],
      },
      {
        id: 'sql-avant-apres',
        title: "Corriger une injection SQL : le code avant et après",
        blocks: [
          { t: 'p', text: "La correction fiable d’une injection SQL n’est pas de « nettoyer » la saisie, mais de **séparer** la requête de ses données grâce aux requêtes paramétrées." },
          { t: 'code', lang: "python", caption: "Même requête, deux écritures (module sqlite3 de Python)", code: "# Vulnérable : la saisie est concaténée dans la requête\ncur.execute(\"SELECT id FROM users WHERE name = '\" + name + \"' AND pwd_hash = '\" + h + \"'\")\n\n# Corrigé : requête paramétrée, la base reçoit les valeurs séparément\ncur.execute(\"SELECT id FROM users WHERE name = ? AND pwd_hash = ?\", (name, h))" },
          { t: 'p', text: "Avec la version vulnérable, une saisie `' OR '1'='1' --` dans le champ du nom transforme la condition en une expression toujours vraie, et le commentaire `--` neutralise la suite. Avec la version paramétrée, la même chaîne est cherchée **littéralement** comme nom d’utilisateur : elle ne trouve personne." },
          {
            t: 'table',
            caption: "Ce que les requêtes paramétrées couvrent… et ne couvrent pas",
            head: ["Situation", "Paramétrage suffisant ?", "Défense à ajouter"],
            rows: [
              ["Valeur dans une clause `WHERE`", "Oui", "Droits minimaux du compte de base de données"],
              ["Nom de table ou de colonne dynamique", "Non : un identifiant ne se paramètre pas", "Liste blanche des valeurs autorisées"],
              ["Tri dynamique (`ORDER BY`)", "Non", "Liste blanche de colonnes et du sens (`ASC` ou `DESC`)"],
              ["Requête brute dans un ORM", "Seulement si les paramètres sont utilisés", "Éviter de concaténer, même « juste pour ce cas »"],
            ],
          },
        ],
      },
      {
        id: 'xss-contexte',
        title: "XSS : encoder selon l’endroit où la donnée est insérée",
        blocks: [
          { t: 'p', text: "Une même donnée ne s’échappe pas de la même façon selon qu’elle est placée dans le texte d’une page, dans un attribut ou dans un script. La défense est donc un **encodage adapté au contexte de sortie**, appliqué au moment d’afficher." },
          {
            t: 'table',
            head: ["Contexte de sortie", "Exemple", "Défense"],
            rows: [
              ["Texte HTML", "`<p>` + donnée + `</p>`", "Encoder `&`, `<`, `>`, `\"`, `'` en entités HTML"],
              ["Valeur d’attribut", "`<input value=\"` + donnée + `\">`", "Encoder les guillemets ; toujours entourer la valeur de guillemets"],
              ["Adresse (URL)", "`<a href=\"` + donnée + `\">`", "Accepter seulement les schémas `https:` et `http:` ; refuser `javascript:`"],
              ["Script JavaScript", "`<script>var x = ` + donnée", "Éviter l’insertion directe ; passer par des données sérialisées en JSON"],
            ],
          },
          { t: 'code', lang: "javascript", caption: "Écrire du texte sans qu’il soit interprété comme du HTML", code: "el.innerHTML = saisie;    // dangereux : un <img onerror=...> s’exécute\nel.textContent = saisie;  // sûr : la saisie reste du texte" },
          { t: 'callout', kind: 'tip', text: "Les bibliothèques d’interface modernes (comme React) encodent par défaut. Le danger revient dès qu’on contourne cette protection, par exemple avec `dangerouslySetInnerHTML` : toute donnée passant par là doit d’abord être assainie par une bibliothèque dédiée." },
        ],
      },
    ],
    useCases: [
      'Revue de code : repérer toute requête SQL construite par concaténation et tout usage d’innerHTML avec des données.',
      'Test d’intrusion web autorisé : vérifier chaque paramètre avec une apostrophe et des charges XSS inoffensives.',
      'Durcissement : déployer une CSP en mode `Report-Only`, analyser les rapports, puis l’appliquer.',
    ],
    commonMistakes: [
      "Tenter de bloquer les apostrophes ou le mot « SELECT » au lieu de paramétrer la requête.",
      "Encoder une fois pour toutes à l’entrée, alors que l’encodage correct dépend du contexte de sortie.",
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
      "SQL : paramétrer ; identifiants dynamiques : liste blanche. XSS : encoder selon le contexte de sortie.",
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
    {
      id: 'revue-injections',
      kind: 'analysis',
      title: 'Revue de code : quatre autres injections',
      context: [
        { t: 'code', lang: 'python', code: '# 1 : exécution d’un diagnostic réseau\nos.system("traceroute " + request.args["hote"])\n\n# 2 : API de connexion (MongoDB)\nuser = db.users.find_one({"login": req.json["login"], "mdp": req.json["mdp"]})\n\n# 3 : page d’accueil personnalisée (Flask)\nreturn render_template_string("<h1>Bonjour " + nom + "</h1>")\n\n# 4 : tri choisi par l’utilisateur\ncur.execute("SELECT * FROM produits ORDER BY " + request.args["tri"])' },
      ],
      steps: ['Nommer l’injection de chaque extrait et décrire une charge d’attaque.', 'Écrire la correction de chaque extrait.', 'Proposer une mesure de détection ou de limitation d’impact pour l’ensemble.'],
    },
  ],
  questions,
  resources: [
    { title: 'OWASP Top 10', source: 'OWASP', url: 'https://owasp.org/www-project-top-ten/' },
    { title: 'SQL Injection Prevention Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html' },
    { title: 'Cross Site Scripting Prevention Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html' },
    { title: 'Content Security Policy', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/fr/docs/Web/HTTP/CSP' },
  ],
};
