import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'g-code-sur-langages',
  lesson: {
    intro:
      'Les langages à gestion automatique de la mémoire (Python, JavaScript, Java) éliminent les débordements de tampon, mais pas les failles de sécurité. Chacun a ses fonctions dangereuses et ses comportements surprenants : désérialiser un objet peut exécuter du code, fusionner deux objets peut modifier tous les objets du programme, une expression régulière peut bloquer un serveur. Ce cours passe en revue ces pièges, langage par langage, avec la correction idiomatique à chaque fois.',
    sections: [
      {
        id: 'entrees',
        title: 'Valider aux frontières : schémas et types',
        blocks: [
          { t: 'p', text: 'Toute donnée qui franchit une **frontière de confiance** (requête HTTP, fichier téléversé, message d’une file, variable d’environnement, réponse d’une API tierce) doit être validée avant usage : type, format, longueur, valeurs autorisées. On valide par **liste d’autorisation** (ce qui est accepté), pas par liste de refus.' },
          { t: 'code', lang: 'typescript', caption: 'TypeScript : le typage ne vérifie rien à l’exécution, un schéma si', code: 'import { z } from \'zod\';\n\nconst Virement = z.object({\n  iban: z.string().regex(/^FR\\d{12}[A-Z0-9]{11}\\d{2}$/),\n  montant: z.number().positive().max(10_000),\n  motif: z.string().max(140),\n});\n\n// req.body est « any » : le type déclaré ne le protège pas\nconst v = Virement.parse(req.body); // lève une erreur si invalide' },
          { t: 'def', term: 'Frontière de confiance', text: 'Point où des données passent d’une zone moins fiable à une zone plus fiable. Le type déclaré en TypeScript ou en Python (annotations) est une promesse du développeur, effacée à l’exécution : seule une validation effective protège la frontière.' },
          { t: 'callout', kind: 'tip', text: 'Chaque écosystème a ses bibliothèques de validation par schéma : zod ou ajv en JavaScript et TypeScript, pydantic en Python, Bean Validation (Jakarta) en Java. Valider une seule fois, à l’entrée, puis manipuler des objets typés.' },
        ],
      },
      {
        id: 'commandes',
        title: 'Exécution de commandes et évaluation dynamique',
        blocks: [
          { t: 'p', text: 'Passer une chaîne à un **shell** revient à laisser l’utilisateur écrire une partie du script : `;`, `|`, `$( )` ou les guillemets changent le sens de la commande. La correction est la même dans tous les langages : appeler directement le programme avec une **liste d’arguments**, sans shell.' },
          {
            t: 'table',
            head: ['Langage', 'Dangereux', 'Sûr'],
            rows: [
              ['Python', '`subprocess.run(f"convert {nom} out.png", shell=True)`, `os.system()`', '`subprocess.run(["convert", nom, "out.png"])`'],
              ['Node.js', '`child_process.exec(\\`ping ${hote}\\`)`', '`execFile("ping", ["-c", "1", hote])`'],
              ['Java', '`Runtime.exec("sh -c ping " + hote)`', '`new ProcessBuilder("ping", "-c", "1", hote)`'],
              ['Bash', '`eval "$commande"`, variables non entre guillemets', '`"$var"` toujours entre guillemets, `--` avant les arguments'],
              ['PowerShell', '`Invoke-Expression $entree`', 'Appel direct de la commande avec des paramètres nommés'],
            ],
          },
          { t: 'def', term: 'Évaluation dynamique', text: 'Exécution d’une chaîne comme du code : `eval` et `exec` en Python, `eval` et `new Function` en JavaScript, `Invoke-Expression` en PowerShell. Avec une donnée externe, c’est une exécution de code arbitraire. Il existe presque toujours une alternative : un dictionnaire de fonctions autorisées, un analyseur dédié (`json.loads`, `ast.literal_eval`).' },
          { t: 'callout', kind: 'warn', text: 'Même sans shell, un argument qui commence par `-` peut être interprété comme une option par le programme appelé. Valider le format (par exemple un nom d’hôte) et insérer `--` avant les arguments libres quand le programme le prend en charge.' },
        ],
      },
      {
        id: 'serialisation',
        title: 'Désérialisation et pollution de prototype',
        blocks: [
          { t: 'p', text: 'Certains formats de sérialisation ne transportent pas seulement des données, mais aussi des **types d’objets** à reconstruire. Désérialiser une donnée externe dans ces formats peut instancier des objets choisis par l’attaquant et déclencher leur code.' },
          {
            t: 'table',
            head: ['Langage', 'À ne jamais appliquer à des données externes', 'Alternative'],
            rows: [
              ['Python', '`pickle.loads`, `yaml.load` sans chargeur sûr', '`json`, `yaml.safe_load`'],
              ['Java', '`ObjectInputStream.readObject` sur un flux reçu', 'JSON avec liaison vers des classes explicites ; à défaut, filtre de désérialisation (JEP 290) en liste d’autorisation'],
              ['PHP', '`unserialize` sur une entrée utilisateur', '`json_decode`'],
            ],
          },
          { t: 'def', term: 'Pollution de prototype', text: 'En JavaScript, les objets héritent de `Object.prototype`. Une fonction de fusion récursive qui copie aveuglément les clés d’un JSON reçu peut écrire dans `__proto__` et ajouter une propriété à **tous** les objets du programme, par exemple `isAdmin: true`.' },
          {
            t: 'example',
            title: 'Une fusion vulnérable et sa correction',
            blocks: [
              { t: 'code', lang: 'javascript', code: '// Vulnérable : copie toute clé, y compris "__proto__"\nfunction fusionner(cible, source) {\n  for (const cle in source) {\n    if (typeof source[cle] === \'object\') fusionner(cible[cle] ??= {}, source[cle]);\n    else cible[cle] = source[cle];\n  }\n}\nfusionner({}, JSON.parse(\'{"__proto__": {"isAdmin": true}}\'));\n({}).isAdmin; // true : tous les objets sont touchés\n\n// Corrections : ignorer __proto__, constructor et prototype ;\n// utiliser Object.create(null) ou Map pour les dictionnaires ;\n// valider le JSON par un schéma qui n’accepte que les clés prévues.' },
            ],
          },
        ],
      },
      {
        id: 'robustesse',
        title: 'Structures de données et expressions régulières face aux entrées hostiles',
        blocks: [
          { t: 'p', text: 'Un algorithme rapide en moyenne peut devenir très lent dans le **pire cas**, et l’attaquant choisit justement le pire cas. Quelques octets bien construits suffisent alors à occuper un processeur pendant des secondes : c’est un déni de service applicatif.' },
          { t: 'def', term: 'ReDoS', text: 'Déni de service par expression régulière : certaines expressions à quantificateurs imbriqués, comme `^(a+)+$`, provoquent un retour arrière exponentiel sur une chaîne presque valide (`aaaa…aaa!`). Le moteur peut alors bloquer le fil d’exécution, ce qui est critique en Node.js où un seul fil traite toutes les requêtes.' },
          { t: 'list', items: ['Éviter les quantificateurs imbriqués et les alternatives qui se chevauchent ; limiter la longueur de l’entrée **avant** d’appliquer l’expression.', 'Préférer un moteur à temps linéaire quand il est disponible (RE2 et ses liaisons), ou des délais d’exécution.', 'Limiter la taille et la profondeur des documents JSON ou XML acceptés, ainsi que le nombre d’éléments d’une liste.', 'Les tables de hachage des langages modernes utilisent une fonction de hachage aléatoire par processus pour empêcher les collisions provoquées : ne pas la remplacer par une fonction maison prévisible pour des clés externes.'] },
          { t: 'callout', kind: 'info', text: 'Le principe général : borner tout ce qui dépend de l’entrée (taille, profondeur, nombre d’éléments, temps de traitement), car un attaquant fournira toujours l’entrée la plus coûteuse.' },
        ],
      },
      {
        id: 'secrets-outils',
        title: 'Secrets, aléa et outillage',
        blocks: [
          {
            t: 'table',
            head: ['Besoin', 'À éviter', 'À utiliser'],
            rows: [
              ['Jeton aléatoire', '`random` (Python), `Math.random()` (JS), `java.util.Random`', '`secrets` (Python), `crypto.randomBytes` / `crypto.randomUUID` (Node.js), `SecureRandom` (Java)'],
              ['Comparer un secret', '`==` (temps variable selon la position de la première différence)', '`hmac.compare_digest`, `crypto.timingSafeEqual`, `MessageDigest.isEqual`'],
              ['Requête SQL', 'Concaténation de chaînes', 'Requêtes paramétrées dans tous les langages'],
            ],
          },
          { t: 'def', term: 'Analyse statique (SAST)', text: 'Analyse du code source sans l’exécuter pour repérer des motifs dangereux : appel à `pickle.loads`, `shell=True`, `eval`, concaténation SQL. Exemples d’outils : Semgrep (multilangage), Bandit (Python), CodeQL, ESLint avec des règles de sécurité, ShellCheck (Bash), PSScriptAnalyzer (PowerShell).' },
          { t: 'list', items: ['Activer les modes stricts : `strict` en TypeScript, `set -euo pipefail` en Bash, `Set-StrictMode` en PowerShell.', 'Analyser les dépendances (SCA) et verrouiller leurs versions ; les vulnérabilités viennent aussi des bibliothèques.', 'Intégrer ces analyses à la revue de code et au pipeline, avec un seuil qui bloque les nouveaux problèmes graves.'] },
          { t: 'callout', kind: 'key', text: 'Les outils repèrent les motifs connus ; la revue humaine repère les erreurs de logique (contrôle d’accès, règles métier). Les deux sont nécessaires.' },
        ],
      },
    ],
    useCases: [
      'Revue de code d’un microservice Python qui convertit des fichiers téléversés en appelant un outil externe.',
      'Audit d’une API Node.js qui fusionne des préférences utilisateur envoyées en JSON.',
      'Mise en place de Semgrep, Bandit et ShellCheck dans le pipeline d’intégration continue d’une équipe.',
    ],
    commonMistakes: [
      'Croire que les annotations de type (TypeScript, Python) valident les données à l’exécution.',
      'Utiliser `shell=True`, `exec` ou `Invoke-Expression` avec une donnée externe.',
      'Désérialiser des données reçues avec `pickle` ou la sérialisation native de Java.',
      'Générer des jetons de session ou de réinitialisation avec un générateur non cryptographique.',
      'Appliquer une expression régulière complexe à une entrée de longueur illimitée.',
    ],
    bestPractices: [
      'Valider chaque entrée par schéma, en liste d’autorisation, à la frontière de confiance.',
      'Appeler les programmes externes avec une liste d’arguments, sans shell.',
      'Échanger les données en JSON avec des types explicites ; jamais de désérialisation native de données externes.',
      'Borner taille, profondeur, nombre d’éléments et temps de traitement des entrées.',
      'Générateurs aléatoires cryptographiques et comparaisons à temps constant pour les secrets.',
      'SAST, analyse des dépendances et modes stricts dans le pipeline.',
    ],
    keyPoints: [
      'Le type déclaré ne protège pas : une validation par schéma, si.',
      'Shell et évaluation dynamique avec des données externes = exécution de code.',
      'Désérialisation native et fusion récursive naïve sont des portes d’entrée.',
      'Le pire cas d’un algorithme ou d’une regex est celui que l’attaquant choisira.',
      '`secrets`, `crypto.randomBytes`, `SecureRandom` ; comparaisons à temps constant.',
    ],
  },
  practice: [
    {
      id: 'revue-python',
      kind: 'analysis',
      title: 'Revue d’un service de conversion en Python',
      context: [
        { t: 'p', text: 'Extrait d’un service interne de conversion d’images :' },
        { t: 'code', lang: 'python', code: 'import os, pickle, random, subprocess\nfrom flask import request\n\n@app.post("/convertir")\ndef convertir():\n    options = pickle.loads(request.files["options"].read())\n    nom = request.form["nom"]\n    subprocess.run(f"convert /data/{nom} -resize {options[\'taille\']} /out/{nom}.png", shell=True)\n    jeton = str(random.randint(0, 10**6))\n    return {"telechargement": f"/out/{nom}.png?jeton={jeton}"}' },
      ],
      steps: ['Lister chaque faiblesse et sa conséquence.', 'Réécrire la fonction de manière sûre (pseudo-code ou Python).', 'Proposer les outils qui auraient détecté ces problèmes automatiquement.'],
    },
    {
      id: 'politique-equipe',
      kind: 'case',
      title: 'Cas pratique : règles de code sûr pour une équipe polyglotte',
      context: [{ t: 'p', text: 'Une équipe maintient une API en TypeScript, des traitements en Python, un service historique en Java et des scripts d’exploitation en Bash et PowerShell. Elle vous demande une liste courte de règles et l’outillage pour les faire respecter.' }],
      steps: ['Rédiger huit règles communes, avec leur déclinaison par langage si nécessaire.', 'Associer à chaque règle un outil ou un contrôle automatique.', 'Proposer une stratégie pour le code existant (dette) sans bloquer l’équipe.'],
    },
  ],
  questions: [
    { id: 'code-q1', type: 'truefalse', difficulty: 2, skills: ['g-entrees'], prompt: 'En TypeScript, déclarer `req.body` avec une interface suffit à garantir que les données reçues respectent ce type à l’exécution.' },
    { id: 'code-q2', type: 'single', difficulty: 1, skills: ['g-entrees'], prompt: 'Quelle approche de validation des entrées est recommandée ?', options: [{ id: 'a', text: 'Une liste d’autorisation : décrire précisément ce qui est accepté et rejeter le reste' }, { id: 'b', text: 'Une liste de refus des caractères dangereux' }, { id: 'c', text: 'Aucune validation, le framework s’en charge toujours' }, { id: 'd', text: 'Valider uniquement côté client' }] },
    { id: 'code-q3', type: 'multi', difficulty: 2, skills: ['g-entrees'], prompt: 'Quelles sources de données franchissent une frontière de confiance et doivent être validées ?', options: [{ id: 'a', text: 'Le corps d’une requête HTTP' }, { id: 'b', text: 'Un fichier téléversé par un utilisateur' }, { id: 'c', text: 'La réponse d’une API tierce' }, { id: 'd', text: 'Une constante définie dans le code source' }] },
    { id: 'code-q4', type: 'short', difficulty: 2, skills: ['g-entrees'], prompt: 'Quelle bibliothèque Python, courante avec FastAPI, valide des données par modèles typés ?' },
    { id: 'code-q5', type: 'single', difficulty: 2, skills: ['g-commandes'], prompt: 'Quelle forme d’appel Python évite l’injection de commandes ?', options: [{ id: 'a', text: '`subprocess.run(["ping", "-c", "1", hote])`' }, { id: 'b', text: '`subprocess.run(f"ping -c 1 {hote}", shell=True)`' }, { id: 'c', text: '`os.system("ping -c 1 " + hote)`' }, { id: 'd', text: '`eval("ping " + hote)`' }] },
    { id: 'code-q6', type: 'multi', difficulty: 2, skills: ['g-commandes'], prompt: 'Lesquelles de ces fonctions exécutent du code à partir d’une chaîne et sont dangereuses avec une donnée externe ?', options: [{ id: 'a', text: '`eval` en JavaScript' }, { id: 'b', text: '`Invoke-Expression` en PowerShell' }, { id: 'c', text: '`exec` en Python' }, { id: 'd', text: '`JSON.parse` en JavaScript' }] },
    { id: 'code-q7', type: 'truefalse', difficulty: 2, skills: ['g-commandes'], prompt: 'En Bash, mettre les variables entre guillemets (`"$fichier"`) évite qu’un nom contenant des espaces ou des caractères spéciaux soit découpé en plusieurs arguments.' },
    { id: 'code-q8', type: 'open', difficulty: 3, skills: ['g-commandes', 'g-entrees'], prompt: 'Une fonction Node.js appelle `exec(`nslookup ${domaine}`)` avec un domaine saisi par l’utilisateur. Expliquez le risque et proposez une correction complète.' },
    { id: 'code-q9', type: 'single', difficulty: 2, skills: ['g-serialisation'], prompt: 'Pourquoi ne faut-il jamais appliquer `pickle.loads` à des données reçues d’un utilisateur ?', options: [{ id: 'a', text: 'Le format pickle peut demander la construction d’objets arbitraires, ce qui permet d’exécuter du code' }, { id: 'b', text: 'Parce que pickle est trop lent' }, { id: 'c', text: 'Parce que pickle ne gère pas l’Unicode' }, { id: 'd', text: 'Parce que pickle chiffre les données' }] },
    { id: 'code-q10', type: 'short', difficulty: 2, skills: ['g-serialisation'], prompt: 'Quelle fonction de PyYAML faut-il utiliser pour charger un document YAML non fiable ?', placeholder: 'yaml.…' },
    { id: 'code-q11', type: 'multi', difficulty: 3, skills: ['g-serialisation'], prompt: 'Quelles mesures empêchent la pollution de prototype en JavaScript ?', options: [{ id: 'a', text: 'Ignorer les clés `__proto__`, `constructor` et `prototype` lors des fusions' }, { id: 'b', text: 'Utiliser `Map` ou `Object.create(null)` pour les dictionnaires de clés externes' }, { id: 'c', text: 'Valider le JSON reçu par un schéma n’acceptant que les clés prévues' }, { id: 'd', text: 'Minifier le code JavaScript' }] },
    { id: 'code-q12', type: 'truefalse', difficulty: 2, skills: ['g-serialisation'], prompt: 'En Java, désérialiser avec `ObjectInputStream` un flux reçu du réseau est sûr tant que la classe attendue est vérifiée après lecture.' },
    { id: 'code-q13', type: 'single', difficulty: 2, skills: ['g-robustesse'], prompt: 'Pourquoi l’expression régulière `^(a+)+$` est-elle dangereuse ?', options: [{ id: 'a', text: 'Ses quantificateurs imbriqués provoquent un retour arrière exponentiel sur certaines chaînes presque valides' }, { id: 'b', text: 'Elle accepte les lettres majuscules' }, { id: 'c', text: 'Elle est trop courte' }, { id: 'd', text: 'Elle ne fonctionne qu’en Python' }] },
    { id: 'code-q14', type: 'single', difficulty: 1, skills: ['g-robustesse'], prompt: 'Quel module Python faut-il utiliser pour générer un jeton de réinitialisation de mot de passe ?', options: [{ id: 'a', text: '`secrets`' }, { id: 'b', text: '`random`' }, { id: 'c', text: '`time`' }, { id: 'd', text: '`math`' }] },
    { id: 'code-q15', type: 'open', difficulty: 3, skills: ['g-robustesse', 'g-entrees'], prompt: 'Une API accepte des documents JSON de configuration. Quelles limites imposer pour qu’un document hostile ne puisse pas épuiser les ressources du serveur ? Justifiez chacune.' },
    { id: 'code-q16', type: 'truefalse', difficulty: 2, skills: ['g-robustesse'], prompt: 'Comparer un jeton secret avec l’opérateur `==` peut divulguer de l’information par le temps de réponse.' },
  ],
  resources: [
    { title: 'OWASP Cheat Sheet Series (Input Validation, Deserialization, OS Command Injection)', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/' },
    { title: 'Module pickle — avertissement de sécurité', source: 'Documentation Python', url: 'https://docs.python.org/fr/3/library/pickle.html' },
    { title: 'Prototype pollution', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/Prototype_pollution' },
    { title: 'Regular expression Denial of Service (ReDoS)', source: 'OWASP', url: 'https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS' },
    { title: 'Semgrep', source: 'Semgrep', url: 'https://semgrep.dev/docs/' },
  ],
};
