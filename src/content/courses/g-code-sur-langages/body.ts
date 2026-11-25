import type { CourseBody } from '../../types';
import { questions } from './questions';

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
      {
        id: 'erreurs-logs',
        title: 'Erreurs, journalisation et secrets dans le code',
        blocks: [
          { t: 'p', text: 'La façon dont un programme **échoue**, ce qu’il **écrit** dans ses journaux et où il **range** ses secrets décident souvent de la gravité d’un incident. Ces trois points se règlent dans le code, langage par langage.' },
          {
            t: 'table',
            head: ['Sujet', 'À éviter', 'À faire'],
            rows: [
              ['**Erreurs**', '`except: pass`, `catch (e) {}` : l’échec est avalé et le contrôle de sécurité est ignoré', '**Échouer fermé** : en cas de doute, refuser ; journaliser l’erreur'],
              ['**Messages**', 'Renvoyer la trace d’appels ou le message de la base à l’utilisateur', 'Message générique avec un **identifiant de corrélation** ; détail dans les journaux'],
              ['**Journaux**', '`log.info("connexion " + login)` avec un login contenant un retour à la ligne', 'Journalisation structurée (JSON), valeurs échappées, jamais de mots de passe ni de jetons'],
              ['**Secrets**', 'Clé d’API ou mot de passe écrit dans le code ou le dépôt', 'Gestionnaire de secrets, variable d’environnement injectée au déploiement, rotation'],
            ],
          },
          {
            t: 'example',
            title: 'Échouer ouvert ou échouer fermé',
            blocks: [
              { t: 'code', lang: 'python', caption: 'Dangereux : une panne du service d’autorisation accorde l’accès', code: 'def peut_lire(utilisateur, document):\n    try:\n        return service_droits.verifier(utilisateur, document)\n    except Exception:\n        return True      # « pour ne pas bloquer les utilisateurs »' },
              { t: 'code', lang: 'python', caption: 'Corrigé : refus par défaut, erreur journalisée', code: 'def peut_lire(utilisateur, document):\n    try:\n        return service_droits.verifier(utilisateur, document)\n    except Exception:\n        journal.error("verification des droits impossible", exc_info=True)\n        return False     # échouer fermé' },
            ],
          },
          { t: 'def', term: 'Injection dans les journaux (log forging)', text: 'Une donnée non assainie contenant des retours à la ligne permet d’écrire de **fausses entrées** dans un journal (« connexion réussie de admin »), de brouiller une enquête ou d’attaquer l’outil qui lit les journaux. On échappe les valeurs ou l’on utilise un format structuré.' },
          { t: 'list', items: ['**Jamais de secret dans le dépôt** : même supprimé du dernier commit, il reste dans l’historique. Un secret publié est un secret **compromis** : on le révoque et on le remplace.', '**Détecter** : outils d’analyse de secrets (gitleaks, TruffleHog, détection native des plateformes) en pré-commit et dans le pipeline.', '**Séparer** les secrets par environnement et leur donner les droits minimaux ; les faire tourner régulièrement.', '**Masquer** jetons et mots de passe dans les journaux et dans les messages d’erreur.'] },
          { t: 'callout', kind: 'warn', text: 'Un message d’erreur trop bavard (requête SQL, chemin de fichier, version) aide l’attaquant à préparer l’étape suivante : le détail va dans les journaux, pas à l’écran.' },
        ],
      },
      {
        id: 'fichiers',
        title: 'Fichiers, chemins, archives et concurrence',
        blocks: [
          { t: 'p', text: 'Lire ou écrire un fichier à partir d’un nom fourni par l’utilisateur, extraire une archive, créer un fichier temporaire : chacune de ces opérations banales ouvre une porte si elle n’est pas encadrée.' },
          {
            t: 'table',
            head: ['Risque', 'Mécanisme', 'Parade'],
            rows: [
              ['**Traversée de répertoires**', '`../../etc/passwd` dans un nom de fichier', 'Résoudre le chemin réel et vérifier qu’il reste dans le répertoire autorisé'],
              ['**Lien symbolique**', 'Un lien placé par l’attaquant redirige l’écriture vers un fichier sensible', 'Ne pas suivre les liens (`O_NOFOLLOW`), répertoires non modifiables par d’autres'],
              ['**Zip Slip**', 'Une archive contient des entrées nommées `../../x` qui s’écrivent hors du dossier d’extraction', 'Vérifier la destination de chaque entrée avant d’écrire'],
              ['**Bombe de décompression**', 'Archive de quelques ko qui se décompresse en gigaoctets', 'Limites de taille décompressée, de nombre d’entrées et de profondeur'],
              ['**Fichier temporaire prévisible**', 'Nom devinable dans `/tmp` : l’attaquant le crée d’abord (lien symbolique)', '`mkstemp`, `NamedTemporaryFile`, droits `0600`'],
              ['**TOCTOU sur fichier**', 'Entre la vérification (`exists`) et l’ouverture, le fichier est remplacé', 'Ouvrir directement et gérer l’erreur, travailler sur le descripteur obtenu'],
            ],
          },
          { t: 'code', lang: 'python', caption: 'Ouvrir un fichier sans sortir du répertoire autorisé', code: 'from pathlib import Path\n\nBASE = Path("/srv/documents").resolve()\n\ndef ouvrir(nom):\n    chemin = (BASE / nom).resolve()          # résout « .. » et les liens symboliques\n    if not chemin.is_relative_to(BASE):\n        raise PermissionError("chemin hors du répertoire autorisé")\n    return chemin.open("rb")' },
          { t: 'def', term: 'Zip Slip', text: 'Faille d’extraction d’archives : le nom d’une entrée contient des séquences `../` et l’extracteur écrit hors du dossier prévu, pouvant écraser un fichier de configuration ou un script. Elle touche de nombreuses bibliothèques d’extraction.' },
          { t: 'list', items: ['**Ignorer le nom de fichier envoyé par le client** : générer son propre nom, conserver l’original comme simple métadonnée.', '**Moindre privilège** : le compte du service n’a accès qu’aux répertoires dont il a besoin, en lecture seule si possible.', '**Concurrence** : protéger les écritures partagées par un verrou ou une transaction, et préférer les opérations atomiques (écrire un fichier temporaire puis le renommer).'] },
          { t: 'callout', kind: 'tip', text: 'Les failles de fichiers sont presque toujours des erreurs de confiance dans un nom : traitez tout nom, chemin ou entrée d’archive venant de l’extérieur comme hostile.' },
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
    {
      id: 'revue-fichiers',
      kind: 'analysis',
      title: 'Revue d’un service de dépôt de documents',
      context: [
        { t: 'code', lang: 'python', code: 'API_KEY = "sk_live_8f3a…"          # dans le dépôt\n\n@app.post("/depot")\ndef depot():\n    nom = request.form["nom"]\n    archive = zipfile.ZipFile(request.files["archive"])\n    archive.extractall("/srv/documents/" + nom)\n    tmp = "/tmp/rapport.txt"\n    open(tmp, "w").write(request.form["commentaire"])\n    try:\n        indexer(tmp)\n    except Exception:\n        pass\n    log.info("depot de " + request.form["utilisateur"])\n    return "ok"' },
      ],
      steps: ['Relever chaque faiblesse et la conséquence possible.', 'Réécrire les passages dangereux de façon sûre.', 'Proposer les contrôles automatiques (outils, tests) qui les auraient détectées.'],
    },
  ],
  questions,
  resources: [
    { title: 'OWASP Cheat Sheet Series (Input Validation, Deserialization, OS Command Injection)', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/' },
    { title: 'Module pickle — avertissement de sécurité', source: 'Documentation Python', url: 'https://docs.python.org/fr/3/library/pickle.html' },
    { title: 'Prototype pollution', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/Prototype_pollution' },
    { title: 'Regular expression Denial of Service (ReDoS)', source: 'OWASP', url: 'https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS' },
    { title: 'Semgrep', source: 'Semgrep', url: 'https://semgrep.dev/docs/' },
  ],
};
