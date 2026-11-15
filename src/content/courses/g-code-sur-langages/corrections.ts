import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'g-code-sur-langages',
  questions: {
    'code-q1': { type: 'truefalse', correct: false, explanation: 'Les types TypeScript sont effacés à la compilation : à l’exécution, `req.body` contient ce que le client a envoyé. Seule une validation effective (schéma zod, ajv…) garantit la forme des données.' },
    'code-q2': { type: 'single', correct: 'a', explanation: 'Une liste d’autorisation décrit le format attendu ; tout le reste est rejeté. Une liste de refus oublie toujours un cas (encodage, variante), et la validation côté client se contourne en envoyant directement la requête.' },
    'code-q3': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Requêtes, fichiers et réponses de services tiers proviennent de l’extérieur du code : ils doivent être validés. Une API tierce compromise ou défaillante peut renvoyer des données inattendues.', whyWrong: { d: 'Une constante du code est sous le contrôle des développeurs : elle ne franchit pas de frontière de confiance.' } },
    'code-q4': { type: 'short', accepted: ['pydantic', 'Pydantic'], explanation: 'Pydantic valide et convertit les données selon des modèles typés ; FastAPI l’utilise pour valider automatiquement les requêtes.' },
    'code-q5': { type: 'single', correct: 'a', explanation: 'Avec une liste d’arguments et sans shell, `hote` est transmis comme un seul argument : les caractères `;`, `|` ou `$( )` n’ont aucun effet spécial. Il reste à valider le format de l’hôte.', whyWrong: { b: 'Avec `shell=True`, une valeur comme `exemple.fr; rm -rf ~` exécute une seconde commande.' } },
    'code-q6': { type: 'multi', correct: ['a', 'b', 'c'], explanation: '`eval`, `Invoke-Expression` et `exec` exécutent la chaîne comme du code : avec une donnée externe, l’attaquant choisit le code exécuté.', whyWrong: { d: '`JSON.parse` analyse des données selon la grammaire JSON et n’exécute aucun code.' } },
    'code-q7': { type: 'truefalse', correct: true, explanation: 'Sans guillemets, Bash découpe la valeur selon les espaces et développe les caractères génériques (`*`). Les guillemets conservent la valeur comme un seul argument ; ShellCheck signale les oublis.' },
    'code-q8': {
      type: 'open',
      model: '`exec` passe la chaîne à un shell : un domaine comme `exemple.fr; cat /etc/passwd` ou `$(commande)` exécute des commandes arbitraires avec les droits du service. Correction : valider le domaine par une expression stricte de nom d’hôte (lettres, chiffres, tirets, points, longueur limitée) et rejeter le reste ; appeler `execFile(\'nslookup\', [\'--\', domaine])` (ou `spawn` sans `shell: true`) pour que la valeur soit un seul argument ; mieux encore, utiliser directement le module `dns` de Node.js (`dns.promises.resolve`), ce qui supprime l’appel au programme externe. Ajouter un délai d’expiration et exécuter le service avec un compte sans privilèges.',
      criteria: ['L’injection de commandes via le shell est expliquée.', 'Une validation du format du domaine est proposée.', 'Un appel sans shell (execFile, spawn) ou une API native (module dns) est proposé.'],
      explanation: 'La meilleure correction supprime souvent l’appel externe : une bibliothèque du langage fait la même chose sans shell.',
    },
    'code-q9': { type: 'single', correct: 'a', explanation: 'Un flux pickle décrit comment reconstruire des objets, y compris en appelant des fonctions arbitraires : la documentation de Python avertit de ne jamais désérialiser des données non fiables.' },
    'code-q10': { type: 'short', accepted: ['yaml.safe_load', 'safe_load'], explanation: '`yaml.safe_load` ne construit que des types simples (chaînes, nombres, listes, dictionnaires). `yaml.load` avec un chargeur complet peut instancier des objets Python arbitraires.' },
    'code-q11': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Filtrer les clés spéciales, utiliser des dictionnaires sans prototype et valider par schéma empêchent d’écrire dans `Object.prototype`.', whyWrong: { d: 'La minification réduit la taille du code mais ne change pas son comportement.' } },
    'code-q12': { type: 'truefalse', correct: false, explanation: 'Le code malveillant s’exécute **pendant** la lecture, lorsque les objets du flux sont reconstruits (méthodes appelées à la désérialisation), avant toute vérification du type obtenu. Il faut éviter ce mécanisme ou filtrer les classes autorisées avant la reconstruction (filtres de désérialisation).' },
    'code-q13': { type: 'single', correct: 'a', explanation: 'Sur une chaîne comme `aaaa…a!`, le moteur essaie toutes les façons de répartir les « a » entre les deux quantificateurs avant d’échouer : le nombre d’essais croît de façon exponentielle avec la longueur.' },
    'code-q14': { type: 'single', correct: 'a', explanation: 'Le module `secrets` s’appuie sur la source d’aléa cryptographique du système. `random` est un générateur prévisible, conçu pour la simulation : ses sorties peuvent être devinées.' },
    'code-q15': {
      type: 'open',
      model: 'Limiter la taille du corps de la requête (par exemple 100 Ko) avant l’analyse, pour ne pas consommer de mémoire inutilement ; limiter la profondeur d’imbrication (par exemple 10 niveaux), car une analyse ou un traitement récursif peut épuiser la pile ; limiter le nombre d’éléments par liste et le nombre de clés par objet, car les traitements sont souvent proportionnels à ce nombre ; limiter la longueur de chaque chaîne, surtout si elle passe ensuite dans une expression régulière ; valider par un schéma strict qui rejette les clés inconnues ; imposer un délai maximal de traitement et une limitation de débit par client.',
      criteria: ['Une limite de taille globale appliquée avant l’analyse est proposée.', 'Une limite de profondeur ou de nombre d’éléments est proposée.', 'Chaque limite est justifiée par la ressource qu’elle protège.', 'Une validation par schéma ou une limite de temps ou de débit est mentionnée.'],
      explanation: 'Borner chaque dimension de l’entrée transforme un déni de service potentiel en simple requête rejetée.',
    },
    'code-q16': { type: 'truefalse', correct: true, explanation: 'Une comparaison classique s’arrête au premier caractère différent : le temps de réponse révèle combien de caractères sont corrects. Les fonctions à temps constant (`hmac.compare_digest`, `crypto.timingSafeEqual`) éliminent cette fuite.' },
  },
};
