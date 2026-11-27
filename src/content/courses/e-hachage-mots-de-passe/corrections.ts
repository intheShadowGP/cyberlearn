// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "e-hachage-mots-de-passe",
  questions: {
    "hash-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "SHA-256 produit toujours une empreinte de 256 bits (32 octets, 64 caractères hexadécimaux), quelle que soit la taille de l’entrée. C’est la définition d’une fonction de hachage : sortie de taille fixe.",
      "whyWrong": {
        "d": "SHA-256 produit 256 bits ; 128 bits correspond à MD5.",
        "a": "La taille de sortie est fixe par construction ; seule l’entrée est de taille quelconque.",
        "b": "SHA-512 produit 512 bits ; SHA-256 en produit 256."
      }
    },
    "hash-q2": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La résistance à la préimage rend impossible en pratique le calcul inverse. On ne peut que tester des candidats : c’est ce que font les attaques par dictionnaire, d’où l’importance d’une fonction lente pour les mots de passe."
    },
    "hash-q3": {
      "type": "multi",
      "correct": [
        "b",
        "c"
      ],
      "explanation": "Des collisions MD5 se calculent en secondes et une collision SHA-1 a été publiée en 2017 (SHAttered). SHA-256 et SHA3-256 restent sûrs.",
      "whyWrong": {
        "d": "SHA-256 (famille SHA-2) est sûr et recommandé.",
        "a": "SHA3-256 est sûr ; il repose sur une construction différente (éponge Keccak)."
      }
    },
    "hash-q4": {
      "type": "short",
      "accepted": [
        "effet avalanche",
        "avalanche",
        "l’effet avalanche",
        "l'effet avalanche"
      ],
      "explanation": "L’effet avalanche garantit que deux entrées très proches donnent des empreintes sans rapport apparent, ce qui empêche de déduire quoi que ce soit de la proximité des empreintes."
    },
    "hash-q5": {
      "type": "single",
      "correct": "d",
      "explanation": "`YWRtaW4xMjM=` se décode en Base64 en `admin123`. Le signe `=` final (remplissage) et le jeu de caractères sont typiques de Base64. C’est un mot de passe en clair à signaler et à changer.",
      "whyWrong": {
        "b": "Un chiffrement AES ne produirait pas un texte qui se décode directement.",
        "c": "Une empreinte SHA-256 fait 64 caractères hexadécimaux.",
        "a": "Un HMAC-SHA-256 est aussi bien plus long."
      }
    },
    "hash-q6": {
      "type": "single",
      "correct": "b",
      "explanation": "HMAC combine une clé secrète et une fonction de hachage : un attaquant sans la clé ne peut pas produire un code valide. Un simple SHA-256 garantit l’intégrité seulement si l’empreinte elle-même est transmise par un canal de confiance.",
      "whyWrong": {
        "d": "N’importe qui peut recalculer un SHA-256 d’un message modifié : pas d’authenticité.",
        "a": "Base64 est un encodage sans aucune sécurité.",
        "c": "MD5 sans clé ne prouve pas l’origine et est cassé pour l’intégrité."
      }
    },
    "hash-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Avec SHA-256 (construction Merkle-Damgård), `SHA-256(clé || message)` est vulnérable à l’extension de longueur : l’attaquant peut ajouter des données et calculer une empreinte valide sans la clé. HMAC est conçu pour éviter ce problème."
    },
    "hash-q8": {
      "type": "single",
      "correct": "a",
      "explanation": "Avec un sel unique par utilisateur, deux mots de passe identiques ont des empreintes différentes et les tables précalculées deviennent inutiles : l’attaquant doit attaquer chaque compte séparément.",
      "whyWrong": {
        "c": "Le sel ne rend rien réversible.",
        "d": "Le sel s’ajoute à la fonction de hachage, il ne la remplace pas.",
        "b": "Le sel ne chiffre rien."
      }
    },
    "hash-q9": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le sel n’est pas un secret : il est stocké avec l’empreinte (Argon2 l’inclut dans la chaîne). Sa valeur tient à son unicité et à son caractère aléatoire. Un secret supplémentaire stocké ailleurs s’appelle un « poivre » (pepper) ; c’est une mesure optionnelle."
    },
    "hash-q10": {
      "type": "multi",
      "correct": [
        "a",
        "d",
        "e"
      ],
      "explanation": "Argon2id, bcrypt et PBKDF2 (avec suffisamment d’itérations) sont des fonctions lentes et salées conçues pour cet usage. Argon2id est le premier choix actuel.",
      "whyWrong": {
        "b": "SHA-512 est trop rapide et, sans sel, vulnérable aux tables précalculées.",
        "c": "Le chiffrement est réversible : si la clé fuit (et elle est dans le code), tous les mots de passe sont lisibles."
      }
    },
    "hash-q11": {
      "type": "short",
      "accepted": [
        "argon2id",
        "id"
      ],
      "explanation": "Argon2id combine la résistance aux attaques par canaux auxiliaires d’Argon2i et la résistance aux attaques GPU d’Argon2d. C’est la variante recommandée par la RFC 9106 et l’OWASP."
    },
    "hash-q12": {
      "type": "single",
      "correct": "b",
      "explanation": "Une comparaison classique s’arrête au premier octet différent. En mesurant finement les temps de réponse, un attaquant peut deviner un jeton octet par octet. Les fonctions à temps constant comparent toujours tous les octets.",
      "whyWrong": {
        "c": "Le danger ne vient pas de la lenteur mais de la durée variable.",
        "a": "`==` ne modifie pas les valeurs comparées.",
        "d": "La comparaison non constante est un vrai risque."
      }
    },
    "hash-q13": {
      "type": "short",
      "accepted": [
        "getrandomvalues",
        "crypto.getrandomvalues",
        "crypto.getrandomvalues()",
        "getrandomvalues()"
      ],
      "explanation": "`crypto.getRandomValues()` remplit un tableau typé avec des octets issus d’un générateur cryptographique. `Math.random()` n’est pas conçu pour la sécurité et peut être prédit."
    },
    "hash-q14": {
      "type": "open",
      "model": "Gravité élevée : MD5 est extrêmement rapide (des dizaines de milliards de calculs par seconde sur GPU) et le sel global, une fois connu (il est dans le code), n’empêche que les tables génériques. La majorité des mots de passe courants seront retrouvés en quelques heures. Plan : 1) notifier (CNIL sous 72 h, utilisateurs) ; 2) invalider les sessions et forcer la réinitialisation, en priorité pour les comptes sensibles ; 3) migrer immédiatement vers Argon2id : envelopper les anciennes empreintes (`argon2id(md5(...))`) pour protéger tout de suite la base, puis re-hacher proprement à la connexion suivante ; 4) proposer ou imposer la MFA ; 5) surveiller les tentatives de bourrage d’identifiants (credential stuffing) liées à la réutilisation des mots de passe ailleurs.",
      "criteria": [
        "La rapidité de MD5 et l’inefficacité d’un sel global sont expliquées.",
        "La réinitialisation et l’information des personnes concernées sont prévues.",
        "Une migration vers Argon2id (ou équivalent) est décrite, idéalement avec enveloppement.",
        "Le risque de réutilisation des mots de passe sur d’autres services est mentionné."
      ],
      "explanation": "L’enveloppement des anciennes empreintes protège immédiatement toute la base sans attendre que chaque utilisateur se reconnecte."
    },
    "hash-q15": {
      "type": "open",
      "model": "Vérifier un fichier téléchargé : l’éditeur publie l’empreinte SHA-256 sur son site HTTPS ; je recalcule l’empreinte du fichier reçu et je la compare. Cela détecte une corruption ou une substitution, à condition que l’empreinte provienne d’une source de confiance distincte du fichier. Webhook : un service me notifie en envoyant un message et `HMAC-SHA-256(clé_partagée, message)`. Je recalcule le HMAC avec ma copie de la clé : seul le détenteur de la clé a pu produire ce code, ce qui prouve l’origine (authenticité) en plus de l’intégrité. Un attaquant peut recalculer un SHA-256, pas un HMAC.",
      "criteria": [
        "Le cas du SHA-256 mentionne la nécessité d’une source de confiance pour l’empreinte.",
        "Le cas du HMAC fait intervenir une clé secrète partagée.",
        "La différence intégrité seule / intégrité + authenticité est formulée."
      ],
      "explanation": "Pour les fichiers, les signatures numériques (clé privée de l’éditeur) vont plus loin : elles prouvent l’origine sans secret partagé."
    },
    "hash-q16": {
      "type": "multi",
      "correct": [
        "b",
        "c"
      ],
      "explanation": "Math.random() est prévisible ; inventer sa propre construction cryptographique est une erreur classique.",
      "whyWrong": {
        "d": "C’est précisément la bonne pratique.",
        "a": "C’est la bonne pratique : ne pas réimplémenter la cryptographie."
      }
    },
    "hash-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "Les entrées sont infiniment nombreuses et les empreintes en nombre fini : des collisions existent forcément. La résistance aux collisions garantit qu’on ne peut pas en trouver en pratique. Si c’est possible (MD5, SHA-1), on peut fabriquer deux documents d’empreinte identique.",
      "whyWrong": {
        "a": "Une fonction de hachage est déterministe : même entrée, même empreinte.",
        "c": "Une entrée de n’importe quelle taille peut être hachée.",
        "b": "Une collision ne concerne pas un caractère interdit : elle concerne deux entrées de même empreinte."
      }
    },
    "hash-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "Une empreinte prouve que le contenu correspond à une valeur, pas d’où vient cette valeur. Si l’attaquant contrôle le serveur, il change le fichier et l’empreinte. Il faut une source distincte et fiable (autre canal), ou mieux une signature numérique.",
      "whyWrong": {
        "b": "SHA-256 est déterministe.",
        "d": "Une empreinte détecte bien une corruption.",
        "c": "Une empreinte ne révèle pas le contenu."
      }
    },
    "hash-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La sortie de SHA-256 est toujours de 256 bits, que l’on hache un mot ou un disque entier. C’est ce qui rend les empreintes faciles à comparer et à publier."
    },
    "hash-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "La signature se produit avec la clé privée et se vérifie avec la clé publique : n’importe qui peut vérifier, seul l’auteur peut signer. Le HMAC exige un secret partagé, donc ne prouve l’origine qu’entre les deux détenteurs de la clé.",
      "whyWrong": {
        "b": "Le HMAC suppose un secret partagé.",
        "a": "Une empreinte seule ne prouve pas l’origine.",
        "d": "Base64 n’apporte aucune sécurité."
      }
    },
    "hash-q21": {
      "type": "short",
      "accepted": [
        "Base64",
        "base64"
      ],
      "explanation": "Base64 est un encodage : il représente des octets en caractères imprimables (pièces jointes, jetons). Il se décode instantanément, sans clé : il ne protège rien."
    },
    "hash-q22": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La vérification d’un HMAC consiste à le recalculer avec la même clé : sans clé, on ne peut ni en fabriquer un valide ni en vérifier un. C’est la différence avec la signature numérique, que tout le monde peut vérifier avec la clé publique."
    },
    "hash-q23": {
      "type": "single",
      "correct": "c",
      "explanation": "Le poivre est un secret supplémentaire, conservé ailleurs que dans la base (variable d’environnement protégée, module matériel). Si la base seule fuit, l’attaquant ne peut pas tester de candidats sans lui. Il complète le sel, qui, lui, n’est pas secret.",
      "whyWrong": {
        "d": "C’est la définition du sel.",
        "b": "C’est le coût de la fonction (itérations).",
        "a": "Il ne concerne pas l’utilisateur."
      }
    },
    "hash-q24": {
      "type": "single",
      "correct": "a",
      "explanation": "Un GPU calcule des milliers d’empreintes en parallèle, mais chacune doit alors disposer de sa propre mémoire. En exigeant des dizaines de Mio par calcul, Argon2 réduit fortement l’avantage du matériel spécialisé de l’attaquant.",
      "whyWrong": {
        "c": "Le coût mémoire ne sert pas à stocker plus d’empreintes.",
        "d": "Il ralentit volontairement chaque calcul.",
        "b": "Argon2 reste irréversible."
      }
    },
    "hash-q25": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "L’enveloppement protège toute la base immédiatement ; le re-hachage à la connexion supprime progressivement la couche d’origine ; le marquage de l’algorithme permet de savoir comment vérifier. Laisser MD5 sur les comptes inactifs laisse les plus faibles empreintes exposées.",
      "whyWrong": {
        "a": "Les comptes inactifs sont précisément ceux dont les mots de passe resteraient exposés."
      }
    },
    "hash-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "Les journaux sont lus par beaucoup de monde, copiés vers des outils tiers et conservés longtemps. Y écrire un mot de passe, même en cas d’erreur, annule les efforts de hachage. On masque ou on n’enregistre jamais les champs sensibles.",
      "whyWrong": {
        "a": "Le danger n’est pas la taille.",
        "c": "Rien n’est chiffré automatiquement.",
        "b": "Cela n’empêche pas de changer le mot de passe."
      }
    },
    "hash-q27": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Chaque tour reste extrêmement rapide : un GPU en calcule des milliards par seconde. Le coût ne croît que de manière négligeable. Seules les fonctions conçues pour être lentes et coûteuses en mémoire, avec sel, répondent au besoin."
    },
    "hash-q28": {
      "type": "single",
      "correct": "b",
      "explanation": "Au-delà de 72 octets, tout est ignoré : deux phrases de passe qui ne diffèrent qu’après cette limite sont équivalentes. On limite la longueur acceptée ou on pré-hache le mot de passe (en le codant pour éviter les octets nuls) selon les recommandations de la bibliothèque.",
      "whyWrong": {
        "a": "Ce n’est pas un rejet des mots de passe courts.",
        "d": "Rien n’est chiffré en plus.",
        "c": "La taille de l’empreinte est fixe."
      }
    },
    "hash-q29": {
      "type": "single",
      "correct": "a",
      "explanation": "Les études montrent que les règles de composition et les changements imposés poussent à des mots de passe prévisibles. On recommande des phrases longues, la vérification contre des listes de mots de passe compromis, l’autorisation du collage (gestionnaires) et le changement seulement en cas de compromission.",
      "whyWrong": {
        "c": "Ces règles produisent des mots de passe prévisibles.",
        "b": "Courts et changés souvent restent faibles.",
        "d": "Interdire le collage gêne les gestionnaires de mots de passe."
      }
    },
    "hash-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "Des millions d’identifiants issus d’anciennes fuites sont testés sur d’autres services : la réutilisation des mots de passe suffit à compromettre des comptes. Parades : mots de passe uniques, MFA, limitation de débit, détection et vérification contre les mots de passe compromis.",
      "whyWrong": {
        "d": "C’est la pulvérisation de mots de passe (password spraying).",
        "a": "Créer des comptes factices pour saturer un site est un autre abus, pas le bourrage d’identifiants.",
        "b": "C’est le cassage hors ligne d’une base volée."
      }
    },
    "hash-q31": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le gestionnaire génère et retient des mots de passe aléatoires, un par service, ce qui supprime la réutilisation à l’origine du bourrage d’identifiants. Il se protège par un mot de passe maître robuste et, idéalement, un second facteur."
    },
    "hash-q32": {
      "type": "short",
      "accepted": [
        "password spraying",
        "pulvérisation de mots de passe",
        "pulverisation de mots de passe",
        "pulvérisation"
      ],
      "explanation": "En pulvérisant un seul mot de passe (ou quelques-uns) sur beaucoup de comptes, l’attaquant reste sous le seuil de verrouillage de chacun. Une détection fondée sur la source et sur le nombre de comptes distincts, et le MFA, la contrent."
    },
    "hash-q33": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Le MFA rend le mot de passe volé insuffisant, la limitation et la détection freinent les essais massifs, et le refus des mots de passe compromis évite de réutiliser des valeurs déjà exposées. Un changement périodique seul ne règle pas la réutilisation.",
      "whyWrong": {
        "b": "Un changement fréquent n’empêche pas la réutilisation d’un mot de passe déjà exposé ailleurs."
      }
    },
    "hash-q34": {
      "type": "single",
      "correct": "d",
      "explanation": "Une clé d’accès repose sur une paire de clés : le service ne stocke que la clé publique, et l’appareil signe un défi lié au domaine du site. Sur un faux site, le domaine diffère et la signature n’est pas produite ; l’utilisateur n’a aucun secret à saisir ou à divulguer.",
      "whyWrong": {
        "b": "La résistance ne tient pas à la longueur.",
        "a": "Le serveur ne stocke que la clé publique.",
        "c": "Aucun secret n’est envoyé par courriel."
      }
    },
    "hash-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "Une KDF transforme un mot de passe (en le rendant coûteux à tester) ou un secret de grande entropie (HKDF) en clés de la longueur voulue, et peut en dériver plusieurs, indépendantes, à usages distincts (chiffrement, authentification).",
      "whyWrong": {
        "a": "La KDF ne chiffre pas les messages elle-même.",
        "c": "Elle ne signe pas.",
        "d": "Elle ne compresse pas."
      }
    },
    "hash-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "Un CSPRNG est alimenté par l’entropie du système (événements matériels) et construit pour que l’observation de sorties n’aide pas à prédire les suivantes. Un générateur simple, même uniforme (Math.random), peut être prédit après quelques sorties.",
      "whyWrong": {
        "a": "Dépendre de l’heure rend la sortie prévisible.",
        "b": "L’uniformité ne suffit pas à rendre imprévisible.",
        "c": "Une graine fixe rend la sortie reproductible."
      }
    },
    "hash-q37": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Ces générateurs sont rapides et conçus pour la simulation : leur état interne peut se reconstituer à partir de quelques sorties. Pour des clés, des sels et des jetons, on emploie la source du système (Web Crypto, `secrets`, `/dev/urandom`, `SecureRandom`)."
    },
    "hash-q38": {
      "type": "short",
      "accepted": [
        "/dev/urandom",
        "urandom",
        "/dev/random",
        "random"
      ],
      "explanation": "`/dev/urandom` (et `getrandom()`) fournit des octets issus du générateur cryptographique du noyau, alimenté par l’entropie du système. Les bibliothèques de langages s’appuient sur lui : on n’écrit pas son propre générateur."
    },
    "hash-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Un jeton imprévisible, assez long pour résister à l’énumération, valable une fois et brièvement, limite fortement les abus. Le dériver de valeurs connues (identifiant, heure) permet de le deviner.",
      "whyWrong": {
        "c": "Un jeton dérivé d’éléments connus est prévisible."
      }
    },
    "hash-q40": {
      "type": "open",
      "model": "Stockage : Argon2id avec sel aléatoire unique et paramètres stockés dans l’empreinte (au moins 19 Mio, 2 itérations selon l’OWASP), éventuellement un poivre conservé hors de la base, re-hachage à la connexion quand les paramètres évoluent, bibliothèque reconnue et comparaison à temps constant. Politique : longueur minimale élevée (phrases), vérification contre des listes de mots de passe compromis, collage autorisé (gestionnaires), pas de changement périodique imposé sans compromission, MFA proposé ou imposé, clés d’accès (passkeys) quand c’est possible. Attaques en ligne : limitation de débit par compte et par source, détection du bourrage d’identifiants et de la pulvérisation, messages d’erreur qui ne révèlent pas l’existence du compte, notification des connexions inhabituelles. Jetons : générés par un CSPRNG (au moins 128 bits), à usage unique, de durée courte, stockés sous forme hachée côté serveur. Journalisation sans mots de passe ni jetons, et plan de migration si un algorithme doit être remplacé.",
      "criteria": [
        "Un stockage par fonction lente et salée (Argon2id) avec paramètres modernes est décrit.",
        "Une politique cohérente est proposée (longueur, mots de passe compromis, MFA, pas de changement périodique forcé).",
        "Des protections contre les attaques en ligne sont proposées (limitation, détection, messages neutres).",
        "Les jetons sont générés par un CSPRNG, longs, à usage unique et de durée courte."
      ],
      "explanation": "La sécurité de l’authentification résulte de plusieurs couches : le stockage limite les dégâts d’une fuite, la politique et le MFA limitent la compromission, la détection freine les essais massifs."
    }
  },
};
