// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "g-code-sur-langages",
  questions: {
    "code-q1": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les types TypeScript sont effacés à la compilation : à l’exécution, `req.body` contient ce que le client a envoyé. Seule une validation effective (schéma zod, ajv…) garantit la forme des données."
    },
    "code-q2": {
      "type": "single",
      "correct": "b",
      "explanation": "Une liste d’autorisation décrit le format attendu ; tout le reste est rejeté. Une liste de refus oublie toujours un cas (encodage, variante), et la validation côté client se contourne en envoyant directement la requête.",
      "whyWrong": {
        "c": "Une liste de refus laisse passer les variantes oubliées.",
        "a": "Un framework ne connaît pas les règles de votre application.",
        "d": "La validation côté client se contourne facilement."
      }
    },
    "code-q3": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Requêtes, fichiers et réponses de services tiers proviennent de l’extérieur du code : ils doivent être validés. Une API tierce compromise ou défaillante peut renvoyer des données inattendues.",
      "whyWrong": {
        "a": "Une constante du code est sous le contrôle des développeurs : elle ne franchit pas de frontière de confiance."
      }
    },
    "code-q4": {
      "type": "short",
      "accepted": [
        "pydantic",
        "Pydantic"
      ],
      "explanation": "Pydantic valide et convertit les données selon des modèles typés ; FastAPI l’utilise pour valider automatiquement les requêtes."
    },
    "code-q5": {
      "type": "single",
      "correct": "c",
      "explanation": "Avec une liste d’arguments et sans shell, `hote` est transmis comme un seul argument : les caractères `;`, `|` ou `$( )` n’ont aucun effet spécial. Il reste à valider le format de l’hôte.",
      "whyWrong": {
        "b": "Avec `shell=True`, une valeur comme `exemple.fr; rm -rf ~` exécute une seconde commande.",
        "a": "`os.system` passe la chaîne au shell : même risque.",
        "d": "`eval` exécute la chaîne comme du code Python."
      }
    },
    "code-q6": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "`eval`, `Invoke-Expression` et `exec` exécutent la chaîne comme du code : avec une donnée externe, l’attaquant choisit le code exécuté.",
      "whyWrong": {
        "d": "`JSON.parse` analyse des données selon la grammaire JSON et n’exécute aucun code."
      }
    },
    "code-q7": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Sans guillemets, Bash découpe la valeur selon les espaces et développe les caractères génériques (`*`). Les guillemets conservent la valeur comme un seul argument ; ShellCheck signale les oublis."
    },
    "code-q8": {
      "type": "open",
      "model": "`exec` passe la chaîne à un shell : un domaine comme `exemple.fr; cat /etc/passwd` ou `$(commande)` exécute des commandes arbitraires avec les droits du service. Correction : valider le domaine par une expression stricte de nom d’hôte (lettres, chiffres, tirets, points, longueur limitée) et rejeter le reste ; appeler `execFile('nslookup', ['--', domaine])` (ou `spawn` sans `shell: true`) pour que la valeur soit un seul argument ; mieux encore, utiliser directement le module `dns` de Node.js (`dns.promises.resolve`), ce qui supprime l’appel au programme externe. Ajouter un délai d’expiration et exécuter le service avec un compte sans privilèges.",
      "criteria": [
        "L’injection de commandes via le shell est expliquée.",
        "Une validation du format du domaine est proposée.",
        "Un appel sans shell (execFile, spawn) ou une API native (module dns) est proposé."
      ],
      "explanation": "La meilleure correction supprime souvent l’appel externe : une bibliothèque du langage fait la même chose sans shell."
    },
    "code-q9": {
      "type": "single",
      "correct": "d",
      "explanation": "Un flux pickle décrit comment reconstruire des objets, y compris en appelant des fonctions arbitraires : la documentation de Python avertit de ne jamais désérialiser des données non fiables.",
      "whyWrong": {
        "a": "La lenteur n’est pas le problème.",
        "b": "Pickle gère l’Unicode.",
        "c": "Pickle ne chiffre rien."
      }
    },
    "code-q10": {
      "type": "short",
      "accepted": [
        "yaml.safe_load",
        "safe_load"
      ],
      "explanation": "`yaml.safe_load` ne construit que des types simples (chaînes, nombres, listes, dictionnaires). `yaml.load` avec un chargeur complet peut instancier des objets Python arbitraires."
    },
    "code-q11": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Filtrer les clés spéciales, utiliser des dictionnaires sans prototype et valider par schéma empêchent d’écrire dans `Object.prototype`.",
      "whyWrong": {
        "a": "La minification réduit la taille du code mais ne change pas son comportement."
      }
    },
    "code-q12": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le code malveillant s’exécute pendant la lecture, lorsque les objets du flux sont reconstruits (méthodes appelées à la désérialisation), avant toute vérification du type obtenu. Il faut éviter ce mécanisme ou filtrer les classes autorisées avant la reconstruction (filtres de désérialisation)."
    },
    "code-q13": {
      "type": "single",
      "correct": "a",
      "explanation": "Sur une chaîne comme `aaaa…a!`, le moteur essaie toutes les façons de répartir les « a » entre les deux quantificateurs avant d’échouer : le nombre d’essais croît de façon exponentielle avec la longueur.",
      "whyWrong": {
        "d": "La casse n’est pas en cause.",
        "c": "La brièveté n’est pas le problème.",
        "b": "Le problème existe dans de nombreux moteurs."
      }
    },
    "code-q14": {
      "type": "single",
      "correct": "b",
      "explanation": "Le module `secrets` s’appuie sur la source d’aléa cryptographique du système. `random` est un générateur prévisible, conçu pour la simulation : ses sorties peuvent être devinées.",
      "whyWrong": {
        "c": "`random` est prévisible.",
        "d": "`datetime` fournit des horodatages devinables.",
        "a": "`math` ne génère pas d’aléa."
      }
    },
    "code-q15": {
      "type": "open",
      "model": "Limiter la taille du corps de la requête (par exemple 100 Ko) avant l’analyse, pour ne pas consommer de mémoire inutilement ; limiter la profondeur d’imbrication (par exemple 10 niveaux), car une analyse ou un traitement récursif peut épuiser la pile ; limiter le nombre d’éléments par liste et le nombre de clés par objet, car les traitements sont souvent proportionnels à ce nombre ; limiter la longueur de chaque chaîne, surtout si elle passe ensuite dans une expression régulière ; valider par un schéma strict qui rejette les clés inconnues ; imposer un délai maximal de traitement et une limitation de débit par client.",
      "criteria": [
        "Une limite de taille globale appliquée avant l’analyse est proposée.",
        "Une limite de profondeur ou de nombre d’éléments est proposée.",
        "Chaque limite est justifiée par la ressource qu’elle protège.",
        "Une validation par schéma ou une limite de temps ou de débit est mentionnée."
      ],
      "explanation": "Borner chaque dimension de l’entrée transforme un déni de service potentiel en simple requête rejetée."
    },
    "code-q16": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Une comparaison classique s’arrête au premier caractère différent : le temps de réponse révèle combien de caractères sont corrects. Les fonctions à temps constant (`hmac.compare_digest`, `crypto.timingSafeEqual`) éliminent cette fuite."
    },
    "code-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "Les annotations de type sont des promesses du développeur, souvent effacées à l’exécution. Un schéma (pydantic, zod, ajv) contrôle réellement chaque donnée entrante et rejette ce qui ne correspond pas.",
      "whyWrong": {
        "c": "Une validation ajoute un coût, elle n’accélère rien.",
        "d": "Un schéma ne chiffre rien.",
        "b": "Les tests restent nécessaires."
      }
    },
    "code-q18": {
      "type": "short",
      "accepted": [
        "zod",
        "Zod",
        "ajv",
        "Ajv"
      ],
      "explanation": "zod (et ajv) permettent de décrire un schéma et de rejeter toute donnée qui ne le respecte pas, là où les types TypeScript ne vérifient rien à l’exécution."
    },
    "code-q19": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La validation réduit le risque mais ne remplace pas la séparation structurelle : chaque interpréteur (SQL, shell, HTML) exige ses propres protections (requêtes paramétrées, liste d’arguments, encodage de sortie)."
    },
    "code-q20": {
      "type": "single",
      "correct": "d",
      "explanation": "Une valeur telle que `--output=/etc/passwd` est lue comme une option par le programme. On valide le format de la donnée et on place `--` avant les arguments libres quand le programme le prend en charge.",
      "whyWrong": {
        "c": "Le système ne transforme pas un argument en commande.",
        "b": "Le tiret n’affecte pas la liste d’arguments elle-même.",
        "a": "Le tiret n’est pas supprimé."
      }
    },
    "code-q21": {
      "type": "single",
      "correct": "c",
      "explanation": "`execFile` lance le programme directement avec un tableau d’arguments : la valeur reste un seul argument. `exec` et `spawn` avec `shell: true` passent par un shell, et `eval` exécute du code JavaScript.",
      "whyWrong": {
        "a": "`exec` interprète la chaîne par un shell.",
        "d": "`shell: true` rétablit l’interprétation par un shell.",
        "b": "`eval` exécute la chaîne comme du JavaScript."
      }
    },
    "code-q22": {
      "type": "single",
      "correct": "b",
      "explanation": "`ast.literal_eval` n’accepte que des littéraux Python et refuse tout appel de fonction ou expression. `exec`, `compile` puis exécution et `os.system` exécutent du code arbitraire.",
      "whyWrong": {
        "a": "`exec` exécute la chaîne comme du code.",
        "d": "`pickle.loads` peut exécuter du code arbitraire.",
        "c": "`os.system` lance une commande par le shell."
      }
    },
    "code-q23": {
      "type": "short",
      "accepted": [
        "filtre de désérialisation",
        "filtres de désérialisation",
        "deserialization filter",
        "ObjectInputFilter",
        "filtre de deserialisation"
      ],
      "explanation": "Les filtres de désérialisation (`ObjectInputFilter`) appliquent une liste d’autorisation de classes avant la reconstruction. Ils réduisent le risque, mais éviter la désérialisation native reste préférable."
    },
    "code-q24": {
      "type": "single",
      "correct": "d",
      "explanation": "Un schéma strict n’accepte que les clés prévues : une clé `__proto__` ou `constructor` est rejetée avant d’atteindre la fonction de fusion.",
      "whyWrong": {
        "a": "Un schéma ne modifie pas les prototypes du langage.",
        "c": "Il ne change pas le moteur.",
        "b": "Il ne chiffre rien."
      }
    },
    "code-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "Le temps de calcul d’une expression pathologique croît avec la longueur : borner l’entrée avant l’appel limite le pire cas. On évite aussi les quantificateurs imbriqués et on préfère un moteur à temps linéaire.",
      "whyWrong": {
        "c": "La casse n’intervient pas.",
        "b": "Répéter l’application aggrave le coût.",
        "d": "Plus de groupes imbriqués aggrave le problème."
      }
    },
    "code-q26": {
      "type": "short",
      "accepted": [
        "RE2",
        "re2"
      ],
      "explanation": "RE2 n’utilise pas de retour arrière : le temps est proportionnel à la taille de l’entrée, ce qui supprime les ReDoS. Il existe des liaisons pour plusieurs langages."
    },
    "code-q27": {
      "type": "multi",
      "correct": [
        "a",
        "d"
      ],
      "explanation": "La taille et la profondeur bornent mémoire et pile avant tout traitement. Accepter l’illimité ou valider après coup laisse le serveur exposé.",
      "whyWrong": {
        "b": "Une taille illimitée est précisément le risque.",
        "c": "Valider après le traitement est trop tard."
      }
    },
    "code-q28": {
      "type": "single",
      "correct": "c",
      "explanation": "Échouer fermé : en cas de doute, on refuse. Accorder l’accès à cause d’une panne transforme un incident en faille, et ignorer l’erreur masque le problème.",
      "whyWrong": {
        "d": "Cela revient à échouer ouvert.",
        "a": "Ignorer l’erreur laisse passer des requêtes non vérifiées.",
        "b": "Redémarrer ne règle pas la décision d’accès."
      }
    },
    "code-q29": {
      "type": "single",
      "correct": "d",
      "explanation": "Une trace, une requête SQL ou un chemin donnent des indices à un attaquant. L’utilisateur reçoit un message neutre et un identifiant de corrélation ; l’équipe retrouve le détail dans les journaux.",
      "whyWrong": {
        "a": "Une trace d’appels révèle la structure interne.",
        "c": "La requête SQL aide à préparer une injection.",
        "b": "Un chemin interne est une information utile à l’attaquant."
      }
    },
    "code-q30": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un mot de passe erroné est souvent proche du vrai (faute de frappe) ou celui d’un autre service. Les journaux circulent largement : on n’y écrit jamais de mots de passe, de jetons ni de données sensibles."
    },
    "code-q31": {
      "type": "single",
      "correct": "c",
      "explanation": "Si une donnée non assainie est écrite telle quelle, l’attaquant y glisse un retour à la ligne puis une fausse ligne (« connexion réussie de admin »). On échappe les valeurs ou l’on journalise en format structuré.",
      "whyWrong": {
        "d": "Supprimer des journaux est une autre attaque.",
        "b": "L’attaquant ne chiffre pas les journaux.",
        "a": "La saturation du disque est un déni de service."
      }
    },
    "code-q32": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Un gestionnaire de secrets, une variable injectée au déploiement ou un fichier protégé hors dépôt limitent l’exposition. Un secret versionné reste dans l’historique et est considéré comme compromis.",
      "whyWrong": {
        "b": "Tout ce qui est dans le dépôt est lisible par quiconque y accède, y compris dans l’historique."
      }
    },
    "code-q33": {
      "type": "single",
      "correct": "b",
      "explanation": "Une clé présente dans l’historique doit être considérée comme connue : seule sa révocation et son remplacement règlent le risque. Nettoyer l’historique n’est qu’un complément.",
      "whyWrong": {
        "d": "La clé reste dans l’historique.",
        "a": "Un accès interne n’exclut pas les fuites.",
        "c": "Renommer ne change pas le secret."
      }
    },
    "code-q34": {
      "type": "short",
      "accepted": [
        "analyse de secrets",
        "détection de secrets",
        "secret scanning",
        "scanner de secrets",
        "analyseur de secrets",
        "detection de secrets"
      ],
      "explanation": "Des outils comme gitleaks ou TruffleHog, ou la détection native des plateformes (secret scanning), repèrent clés et mots de passe, en pré-commit et dans le pipeline."
    },
    "code-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "La résolution (`resolve`, `realpath`) supprime `..` et suit les liens symboliques : on compare ensuite le chemin obtenu au répertoire autorisé. Retirer `../` se contourne (`....//`), et interdire `/` ne suffit pas sous Windows.",
      "whyWrong": {
        "c": "Le filtrage de chaînes se contourne.",
        "b": "Il existe d’autres séparateurs et encodages.",
        "d": "La longueur n’empêche pas la traversée."
      }
    },
    "code-q36": {
      "type": "truefalse",
      "correct": true,
      "explanation": "L’attaquant crée à l’avance un lien portant ce nom vers un fichier sensible : le programme écrit alors dans la cible du lien. `mkstemp` ou `NamedTemporaryFile` créent un nom imprévisible et des droits restreints."
    },
    "code-q37": {
      "type": "single",
      "correct": "d",
      "explanation": "Les entrées nommées `../../x` sont écrites hors du dossier prévu par un extracteur qui ne contrôle pas la destination. La bombe de décompression est une autre attaque, par la taille.",
      "whyWrong": {
        "a": "C’est une bombe de décompression.",
        "c": "Le mot de passe de l’archive n’est pas concerné.",
        "b": "Les doublons ne sont pas le problème."
      }
    },
    "code-q38": {
      "type": "single",
      "correct": "c",
      "explanation": "C’est un TOCTOU : l’état vérifié n’est plus l’état utilisé. On ouvre directement, en traitant l’erreur, et l’on travaille sur le descripteur obtenu, avec `O_NOFOLLOW` si besoin.",
      "whyWrong": {
        "d": "Tester l’existence ne modifie pas les droits.",
        "a": "L’ouverture n’échoue pas pour cette raison.",
        "b": "Rien n’interdit ces deux opérations."
      }
    },
    "code-q39": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Les fonctions dédiées créent un nom imprévisible de façon atomique, les droits restreints limitent l’accès et la suppression évite les restes. Un nom fixe dans `/tmp` est prévisible.",
      "whyWrong": {
        "b": "Un nom prévisible facilite les attaques par lien symbolique."
      }
    },
    "code-q40": {
      "type": "open",
      "model": "Les risques sont : l’écriture hors du dossier d’extraction (Zip Slip, par des noms contenant `../` ou des liens symboliques), la bombe de décompression (archive minuscule qui se décompresse en gigaoctets, avec ou sans très grand nombre d’entrées), l’écrasement de fichiers existants et l’exécution de fichiers extraits. Contrôles : vérifier pour chaque entrée que le chemin résolu reste dans le dossier de destination ; refuser les liens symboliques et les noms absolus ; limiter la taille décompressée totale, le nombre d’entrées et la profondeur ; extraire dans un dossier unique, aux droits restreints, hors de la racine web ; faire tourner le service avec un compte sans privilèges, dans un conteneur ou un bac à sable, avec un délai maximal ; tester avec des archives piégées.",
      "criteria": [
        "Zip Slip (écriture hors du dossier) est identifié et sa parade décrite.",
        "La bombe de décompression est identifiée avec des limites de taille ou de nombre d’entrées.",
        "Des mesures d’isolation ou de moindre privilège sont mentionnées."
      ],
      "explanation": "L’extraction d’archives cumule traversée de chemins et épuisement de ressources : on valide chaque entrée et on borne le total."
    }
  },
};
