// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "f-injections-xss",
  questions: {
    "web-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "Qu’il s’agisse de SQL, de HTML, de commandes shell ou de requêtes NoSQL, l’injection survient quand une donnée change la structure d’une instruction interprétée. La correction consiste à séparer structurellement code et données.",
      "whyWrong": {
        "d": "Le chiffrement n’intervient pas dans le mécanisme d’une injection.",
        "b": "Un mot de passe court est un autre problème, sans lien avec l’interprétation de données.",
        "c": "Un serveur à jour peut être vulnérable si le code concatène des saisies."
      }
    },
    "web-q2": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La validation côté client améliore l’ergonomie mais se contourne trivialement : l’attaquant envoie sa requête directement (curl, proxy). Toute validation de sécurité doit être faite côté serveur."
    },
    "web-q3": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Tout ce qui provient de l’extérieur du code serveur est contrôlable par un attaquant, directement (en-têtes, cookies) ou indirectement (API tierce compromise).",
      "whyWrong": {
        "c": "Une constante du code source est maîtrisée par les développeurs ; elle n’est pas une entrée externe."
      }
    },
    "web-q4": {
      "type": "single",
      "correct": "c",
      "explanation": "L’apostrophe ferme la chaîne du login et `-- ` met le reste de la requête en commentaire, supprimant la condition sur le mot de passe.",
      "whyWrong": {
        "b": "Un identifiant ordinaire est traité comme une simple valeur.",
        "d": "Une balise script vise une XSS, pas une injection SQL ; ici elle serait traitée comme un identifiant inexistant.",
        "a": "Un octet nul n’a pas d’effet de commentaire en SQL standard."
      }
    },
    "web-q5": {
      "type": "short",
      "accepted": [
        "requêtes paramétrées",
        "requetes parametrees",
        "requêtes préparées",
        "requetes preparees",
        "requête paramétrée",
        "requete parametree",
        "requête préparée",
        "prepared statements"
      ],
      "explanation": "Avec une requête paramétrée (ou préparée), le texte SQL et les valeurs sont transmis séparément au moteur : une valeur ne peut jamais modifier la structure de la requête."
    },
    "web-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les paramètres liés ne peuvent représenter que des valeurs, pas des identifiants (tables, colonnes) ni des mots-clés (ASC/DESC). Il faut alors comparer l’entrée à une liste blanche de colonnes autorisées."
    },
    "web-q7": {
      "type": "single",
      "correct": "d",
      "explanation": "La page ne renvoie pas le résultat de la requête, mais son temps de réponse dépend d’une condition injectée : c’est une injection aveugle temporelle. Elle permet d’extraire des données bit par bit.",
      "whyWrong": {
        "b": "Une XSS s’exécute dans le navigateur, sans lien avec un délai côté serveur.",
        "c": "Un déni de service ne dépend pas d’une condition précise dans un paramètre.",
        "a": "Un cache accélère les réponses, il ne les ralentit pas à la demande."
      }
    },
    "web-q8": {
      "type": "single",
      "correct": "b",
      "explanation": "La charge provient du fragment d’URL (après #), qui n’est même pas envoyé au serveur ; elle est insérée par le JavaScript de la page dans un puits dangereux (innerHTML). C’est une XSS DOM.",
      "whyWrong": {
        "c": "Le serveur ne voit jamais le fragment : il ne peut pas le refléter.",
        "a": "Rien n’est enregistré côté serveur.",
        "d": "Le fait qu’il ne soit pas envoyé au serveur n’empêche pas son exécution dans le navigateur."
      }
    },
    "web-q9": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Le script s’exécute avec l’origine du site : il lit le DOM, émet des requêtes authentifiées (les cookies sont joints automatiquement) et peut modifier l’affichage pour piéger l’utilisateur.",
      "whyWrong": {
        "a": "L’attribut HttpOnly rend le cookie inaccessible à JavaScript. Le script peut néanmoins agir au nom de l’utilisateur : HttpOnly limite l’impact sans le supprimer."
      }
    },
    "web-q10": {
      "type": "short",
      "accepted": [
        "textContent",
        ".textContent",
        "innerText"
      ],
      "explanation": "`textContent` insère la valeur comme texte : les balises sont affichées telles quelles et jamais interprétées. `innerText` a le même effet de sécurité."
    },
    "web-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Une URL `javascript:alert(1)` ne contient aucun caractère HTML spécial : l’encodage HTML la laisse passer. Il faut valider le schéma (http/https uniquement) en plus de l’encodage d’attribut."
    },
    "web-q12": {
      "type": "single",
      "correct": "c",
      "explanation": "`'unsafe-inline'` autorise tout script inline, y compris celui injecté par l’attaquant. On le remplace par des nonces ou des empreintes pour les scripts inline légitimes.",
      "whyWrong": {
        "d": "`'self'` n’autorise que les scripts servis par le site lui-même.",
        "a": "`'none'` n’autorise aucun script.",
        "b": "Une source limitée à un domaine précis reste restrictive."
      }
    },
    "web-q13": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Une CSP stricte bloque l’exécution des scripts injectés, HttpOnly empêche le vol direct des cookies de session, et les nonces permettent d’éviter unsafe-inline.",
      "whyWrong": {
        "c": "Base64 est un encodage de transport, sans aucun effet sur l’exécution de scripts dans la page."
      }
    },
    "web-q14": {
      "type": "open",
      "model": "Doubler les apostrophes est un échappement manuel, dépendant du SGBD et du contexte : il ne protège pas un paramètre numérique non entouré de guillemets (`WHERE id = 1 OR 1=1`), peut être contourné selon les encodages et jeux de caractères, et doit être pensé à chaque endroit, donc sera oublié quelque part. Recommandation : requêtes paramétrées partout (y compris via l’ORM), liste blanche pour les identifiants dynamiques, compte de base aux droits minimaux, et tests automatisés (SAST) détectant toute concaténation dans une requête.",
      "criteria": [
        "Au moins une limite de l’échappement manuel est expliquée (contexte numérique, encodage, oubli).",
        "Les requêtes paramétrées sont recommandées comme correction structurelle.",
        "Une mesure complémentaire (moindre privilège en base, SAST, liste blanche) est proposée."
      ],
      "explanation": "L’échappement manuel traite le symptôme ; la requête paramétrée supprime la cause."
    },
    "web-q15": {
      "type": "open",
      "model": "1) Déployer d’abord la politique en `Content-Security-Policy-Report-Only` avec un point de collecte des rapports, pour mesurer sans bloquer. 2) Inventorier les scripts inline et les déplacer dans des fichiers externes ; pour ceux qui doivent rester inline, utiliser un nonce généré à chaque réponse. 3) Remplacer les gestionnaires `onclick=` par `addEventListener`. 4) Lister les domaines tiers réellement nécessaires. 5) Itérer jusqu’à n’avoir plus de violations légitimes, puis basculer en mode bloquant, en gardant les rapports actifs pour détecter les régressions et les tentatives d’attaque.",
      "criteria": [
        "Le mode Report-Only est utilisé avant l’application.",
        "Les scripts inline sont externalisés ou protégés par nonce ou empreinte.",
        "Le passage en mode bloquant est progressif et surveillé."
      ],
      "explanation": "Une CSP appliquée brutalement casse souvent l’application et finit désactivée. Le mode Report-Only permet un déploiement sans risque."
    },
    "web-q16": {
      "type": "single",
      "correct": "b",
      "explanation": "`frame-ancestors` indique quels sites peuvent intégrer la page dans un cadre (iframe). `frame-ancestors 'none'` empêche toute intégration, et donc le détournement de clic. Il remplace l’ancien en-tête X-Frame-Options.",
      "whyWrong": {
        "d": "`script-src` contrôle les sources de scripts, pas l’intégration dans un cadre.",
        "c": "`img-src` contrôle les sources d’images.",
        "a": "`connect-src` contrôle les destinations des requêtes du script."
      }
    },
    "web-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "La correction durable consiste à ne jamais construire du code à partir de données : requêtes paramétrées, encodage de sortie, appels sans shell. Filtrer des caractères ou limiter les tailles réduit au mieux la surface, sans supprimer la cause.",
      "whyWrong": {
        "d": "Les listes de caractères interdits laissent toujours un encodage ou un contexte oublié.",
        "c": "Le chiffrement ne change pas la manière dont la donnée est interprétée.",
        "b": "Une limite de longueur ne rend pas une charge courte inoffensive."
      }
    },
    "web-q18": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Une liste noire est contournée par les variantes de casse, d’encodage, de commentaires ou de syntaxe. Elle n’agit pas sur la cause : la donnée reste mélangée au code. Seule une séparation structurelle protège durablement."
    },
    "web-q19": {
      "type": "short",
      "accepted": [
        "frontière de confiance",
        "frontiere de confiance",
        "limite de confiance",
        "trust boundary"
      ],
      "explanation": "La frontière de confiance sépare ce que l’application contrôle de ce qui lui vient de l’extérieur. Toute donnée qui la franchit doit être validée et traitée comme hostile."
    },
    "web-q20": {
      "type": "single",
      "correct": "d",
      "explanation": "UNION SELECT concatène au résultat légitime celui d’une requête choisie par l’attaquant : lecture d’autres tables ou de la version du moteur, à condition d’aligner le nombre et le type des colonnes.",
      "whyWrong": {
        "b": "Le but est de lire des données, pas d’arrêter le serveur.",
        "a": "L’attaquant ne cherche pas à dupliquer, mais à ajouter des données différentes.",
        "c": "UNION ne déchiffre rien : il lit ce que le compte applicatif peut lire."
      }
    },
    "web-q21": {
      "type": "single",
      "correct": "c",
      "explanation": "L’attaquant déduit la valeur d’une donnée en posant des questions vrai/faux dont la réponse change l’affichage. Chaque réponse révèle un bit ; l’opération est automatisable mais lente.",
      "whyWrong": {
        "b": "UNION suppose que des données injectées apparaissent dans la page.",
        "d": "Une XSS s’exécute dans le navigateur de la victime.",
        "a": "Il n’y a ici aucun message d’erreur exploité."
      }
    },
    "web-q22": {
      "type": "multi",
      "correct": [
        "b",
        "d"
      ],
      "explanation": "Les requêtes paramétrées et la liste blanche séparent les données de la structure. Masquer les erreurs réduit l’information donnée à l’attaquant, sans supprimer la faille, et l’échappement manuel reste fragile.",
      "whyWrong": {
        "a": "L’échappement manuel dépend du contexte et de l’encodage, et finit par être oublié.",
        "c": "Cacher les erreurs ne corrige pas la vulnérabilité (injection aveugle)."
      }
    },
    "web-q23": {
      "type": "single",
      "correct": "d",
      "explanation": "Un ORM paramètre les requêtes qu’il construit lui-même. Les fonctions de requête brute (`raw`, `execute`, `$where`) acceptent du texte : y concaténer une saisie recrée l’injection.",
      "whyWrong": {
        "a": "Les requêtes générées par l’ORM sont paramétrées.",
        "c": "Le chiffrement de la connexion est indépendant de l’ORM.",
        "b": "Les ORM courants ciblent surtout des bases relationnelles."
      }
    },
    "web-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "La charge est enregistrée (commentaire, profil, message) puis renvoyée à tous les visiteurs de la page : c’est ce qui rend la XSS stockée plus dangereuse qu’une XSS réfléchie, qui exige que la victime ouvre un lien piégé.",
      "whyWrong": {
        "a": "Une charge uniquement dans l’URL décrit une XSS réfléchie ou DOM.",
        "d": "Le certificat n’intervient pas dans le contenu de la page.",
        "c": "Le pare-feu ne stocke pas de contenu de pages."
      }
    },
    "web-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "React encode le texte inséré dans le JSX. En revanche, `dangerouslySetInnerHTML` insère du HTML brut, et un `href` peut recevoir une URL `javascript:` : il faut assainir le HTML et valider les schémas.",
      "whyWrong": {
        "c": "C’est l’inverse : le texte est encodé.",
        "b": "React ne protège pas contre les usages dangereux explicites.",
        "d": "Un href peut contenir une URL javascript: si elle n’est pas validée."
      }
    },
    "web-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "HttpOnly empêche la lecture du cookie par JavaScript, mais le navigateur continue de l’envoyer avec chaque requête vers le site : le script injecté peut donc agir au nom de l’utilisateur sans connaître le cookie."
    },
    "web-q27": {
      "type": "short",
      "accepted": [
        "DOMPurify",
        "dompurify"
      ],
      "explanation": "DOMPurify supprime les éléments et attributs dangereux d’un fragment HTML. On l’emploie quand le HTML riche (éditeur de texte, import) doit être affiché tel quel."
    },
    "web-q28": {
      "type": "single",
      "correct": "d",
      "explanation": "Le mode Report-Only applique la politique « à blanc » : le navigateur signale ce qui serait bloqué sans casser la page. On corrige les violations légitimes, puis on bascule en mode bloquant.",
      "whyWrong": {
        "a": "Report-Only ne bloque rien.",
        "b": "Il n’a aucune fonction de chiffrement.",
        "c": "Il ne distingue pas les comptes."
      }
    },
    "web-q29": {
      "type": "single",
      "correct": "c",
      "explanation": "Un nonce imprévisible (nouveau à chaque réponse) ou une empreinte désigne précisément le script autorisé. Un nonce fixe peut être copié par l’attaquant et `*` autorise n’importe quelle origine.",
      "whyWrong": {
        "b": "Un nonce fixe est devinable ou réutilisable par un attaquant.",
        "a": "Le joker annule la protection.",
        "d": "Une balise meta ne déclare pas de script autorisé de cette façon."
      }
    },
    "web-q30": {
      "type": "single",
      "correct": "a",
      "explanation": "Sans shell, la saisie reste un argument et ne peut pas introduire d’autres commandes avec `;`, `|` ou `&&`. On ajoute une validation stricte de la valeur (liste blanche, format attendu).",
      "whyWrong": {
        "c": "D’autres séparateurs existent (|, &&, retour à la ligne, substitution).",
        "d": "Des droits plus élevés aggravent l’impact.",
        "b": "La casse n’a pas d’effet sur l’interprétation du shell."
      }
    },
    "web-q31": {
      "type": "truefalse",
      "correct": true,
      "explanation": "L’opérateur `$ne` (différent de) transforme la condition en « mot de passe différent de null », vraie pour tout compte. La parade est de vérifier que les champs sont bien des chaînes avant la requête."
    },
    "web-q32": {
      "type": "single",
      "correct": "b",
      "explanation": "Le moteur de gabarits a évalué l’expression : la saisie a été insérée dans le texte du gabarit (SSTI). L’étape suivante d’un attaquant est souvent l’exécution de code sur le serveur.",
      "whyWrong": {
        "d": "Rien n’est stocké ici : l’expression est évaluée au rendu.",
        "c": "Un cache ne calcule pas d’expressions.",
        "a": "Il s’agit d’un calcul côté serveur, pas d’un dépassement mémoire."
      }
    },
    "web-q33": {
      "type": "multi",
      "correct": [
        "b",
        "d"
      ],
      "explanation": "Le gabarit doit être un texte fixe, les données lui étant passées comme variables. Entourer de guillemets ou cacher le moteur ne change pas le fait que la saisie est évaluée.",
      "whyWrong": {
        "c": "Les guillemets se ferment avec une charge adaptée.",
        "a": "Cacher le moteur ralentit à peine l’attaquant sans corriger la faille."
      }
    },
    "web-q34": {
      "type": "short",
      "accepted": [
        "subprocess",
        "subprocess.run",
        "subprocess.Popen",
        "subprocess.call"
      ],
      "explanation": "`subprocess.run([\"ping\", \"-c\", \"1\", adresse])` transmet les arguments directement au programme, sans interprétation par un shell, ce qui empêche l’injection de commandes supplémentaires."
    },
    "web-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "Si la valeur contient CR et LF, l’attaquant termine l’en-tête et en ajoute d’autres (cookie, redirection) ou fractionne la réponse. On refuse ces caractères et on utilise l’API du framework.",
      "whyWrong": {
        "a": "La redirection fonctionne ; c’est son contenu qui est détourné.",
        "c": "La session n’est pas affectée par cet effet.",
        "d": "Le serveur ne refuse pas : il suit les en-têtes injectés."
      }
    },
    "web-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "Un WAF détecte des motifs connus et peut bloquer des attaques le temps de corriger, mais il se contourne (encodages, variantes). La cause doit être corrigée dans le code.",
      "whyWrong": {
        "b": "Le WAF ne corrige pas la vulnérabilité sous-jacente.",
        "d": "Les requêtes paramétrées restent la correction de référence.",
        "a": "Un WAF ne chiffre pas les échanges avec la base."
      }
    },
    "web-q37": {
      "type": "single",
      "correct": "d",
      "explanation": "Avec des droits minimaux (pas d’écriture inutile, pas d’accès aux fichiers ni à l’administration), une injection réussie lit ou modifie moins de choses. C’est de la défense en profondeur.",
      "whyWrong": {
        "a": "Les droits n’influent pas sensiblement sur la vitesse.",
        "b": "Les requêtes paramétrées restent nécessaires.",
        "c": "La taille des sauvegardes ne dépend pas des droits du compte."
      }
    },
    "web-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un message d’erreur détaillé révèle la structure de la requête, le moteur et parfois les noms de tables, ce qui guide l’injection. On affiche une erreur générique et l’on conserve le détail dans les journaux."
    },
    "web-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Les motifs UNION SELECT et SLEEP, ainsi que des erreurs répétées après des apostrophes, signalent des essais d’injection. Une requête ordinaire vers la page d’accueil est normale.",
      "whyWrong": {
        "c": "Une requête normale vers la page d’accueil n’a rien de suspect en soi."
      }
    },
    "web-q40": {
      "type": "open",
      "model": "Je corrige d’abord le code : le nom de colonne est comparé à une liste blanche de colonnes autorisées, les valeurs passent en requêtes paramétrées. Je déploie en urgence, avec une règle de pare-feu applicatif en attendant si nécessaire. Je cherche dans les journaux d’accès et de la base des traces d’exploitation (UNION, SLEEP, erreurs répétées, volumes de données anormaux) sur la période d’exposition, et je prépare une notification si des données personnelles sont concernées. En prévention : compte de base aux droits minimaux, analyse statique qui détecte la concaténation, test de non-régression qui rejoue la charge, revue des autres endroits où des identifiants dynamiques sont utilisés.",
      "criteria": [
        "La correction par liste blanche et paramétrage est décrite.",
        "La recherche d’une exploitation passée dans les journaux est prévue.",
        "Des mesures de prévention (moindre privilège, SAST, test de non-régression) sont proposées."
      ],
      "explanation": "Corriger ne suffit pas : il faut savoir si la faille a été exploitée et éviter qu’elle ne revienne ailleurs."
    },
    "web-q41": {
      "type": "single",
      "correct": "a",
      "explanation": "Un paramètre transporte une valeur ; un nom de colonne ou de table est un identifiant et ne se paramètre pas. Il faut comparer l’entrée à une liste blanche de colonnes et du sens de tri.",
      "whyWrong": {
        "c": "Les paramètres s’appliquent aussi aux lectures, c’est même leur usage principal.",
        "b": "Le tri est exécuté par le moteur de base de données, pas par le navigateur.",
        "d": "Une clause de tri construite par concaténation peut être détournée."
      }
    },
    "web-q42": {
      "type": "single",
      "correct": "b",
      "explanation": "`textContent` insère du texte brut : un `<img onerror=...>` saisi reste une suite de caractères. `innerHTML` interprète le contenu comme du HTML, ce qui permet l’exécution de scripts.",
      "whyWrong": {
        "a": "Retirer des espaces ne change pas l’interprétation des balises.",
        "d": "La casse d’une balise ou d’un attribut ne l’empêche pas de fonctionner.",
        "c": "Masquer un élément n’empêche pas l’exécution de son contenu."
      }
    },
    "web-q43": {
      "type": "single",
      "correct": "d",
      "explanation": "Dans une adresse, le danger vient des schémas comme `javascript:`, qui exécutent du code au clic. On valide donc le schéma par liste blanche, en plus de l’encodage adapté.",
      "whyWrong": {
        "c": "Les chevrons ne sont pas le problème d’un attribut `href` : un schéma dangereux n’en contient pas.",
        "b": "Doubler les apostrophes relève de la syntaxe SQL, pas de celle d’une adresse.",
        "a": "La casse ne neutralise pas un schéma comme `javascript:`."
      }
    },
    "web-q44": {
      "type": "short",
      "accepted": [
        "requête paramétrée",
        "requêtes paramétrées",
        "requête préparée",
        "requêtes préparées"
      ],
      "explanation": "Une requête paramétrée (ou préparée) sépare la structure de la requête des valeurs : la saisie reste une donnée et ne peut plus modifier la logique de la requête."
    }
  },
};
