// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "g-code-securise-bases",
  questions: {
    "cbs-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "Un bogue fait agir le programme autrement que prévu. Une vulnérabilité est un défaut qu’un attaquant peut exploiter pour obtenir ce qui lui est interdit ; elle peut passer inaperçue dans l’usage normal.",
      "whyWrong": {
        "d": "La gravité ne dépend pas de l’étiquette : une vulnérabilité peut être critique.",
        "c": "Tous les langages peuvent avoir des vulnérabilités.",
        "a": "Les deux notions sont distinctes."
      }
    },
    "cbs-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "Une erreur repérée à la conception ou à l’écriture se corrige en quelques minutes. En production, il faut corriger, tester, déployer et parfois informer des utilisateurs dont les données ont été exposées.",
      "whyWrong": {
        "a": "Le coût ne tient pas à la gratuité d’outils.",
        "d": "Une faille ne disparaît pas d’elle-même.",
        "b": "L’acceptation des utilisateurs n’est pas la raison du moindre coût d’une correction précoce."
      }
    },
    "cbs-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les décisions de conception (données manipulées, droits, séparation des composants) sont difficiles à changer plus tard. Penser à la sécurité dès le départ évite des corrections coûteuses."
    },
    "cbs-q4": {
      "type": "short",
      "accepted": [
        "shift left",
        "shift-left",
        "décaler à gauche",
        "decaler a gauche"
      ],
      "explanation": "Le « shift left » consiste à contrôler la sécurité plus tôt (conception, écriture, tests) plutôt qu’en fin de projet, quand les corrections coûtent le plus cher."
    },
    "cbs-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "Avec le moindre privilège, une compromission du programme donne peu à l’attaquant : un service qui n’a besoin que de lire un dossier n’a pas à pouvoir écrire ou administrer.",
      "whyWrong": {
        "c": "La sécurité par l’obscurité repose sur le secret d’un fonctionnement.",
        "b": "Le chiffrement protège des données, pas des droits d’un programme.",
        "d": "Les journaux servent à détecter, pas à limiter les droits."
      }
    },
    "cbs-q6": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "La sécurité se traite à chaque étape : questions de conception, validation des entrées pendant l’écriture, tests d’entrées hostiles, puis surveillance en production.",
      "whyWrong": {
        "a": "Limiter la sécurité à l’exploitation arrive trop tard."
      }
    },
    "cbs-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les tests habituels vérifient l’usage normal. Une vulnérabilité se manifeste face à une entrée hostile que personne n’a essayée : un programme peut fonctionner parfaitement et rester vulnérable."
    },
    "cbs-q8": {
      "type": "single",
      "correct": "d",
      "explanation": "Valider consiste à contrôler qu’une donnée correspond à ce qui est attendu (type, format, longueur, valeurs autorisées) avant de s’en servir, et à la rejeter sinon.",
      "whyWrong": {
        "a": "Journaliser n’est pas valider.",
        "c": "La casse ne dit rien de la validité.",
        "b": "Le chiffrement protège le transport, pas la forme de la donnée."
      }
    },
    "cbs-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "Une liste d’autorisation décrit précisément ce qui est accepté et rejette le reste. Une liste de refus oublie toujours une variante.",
      "whyWrong": {
        "c": "Une liste de refus laisse passer les variantes oubliées.",
        "b": "Un formulaire peut être contourné en envoyant directement la requête.",
        "d": "Chaque entrée doit être vérifiée à chaque fois."
      }
    },
    "cbs-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La validation dans le navigateur améliore le confort, mais un attaquant envoie directement sa requête au serveur sans passer par le formulaire. La vérification qui compte est celle du serveur."
    },
    "cbs-q11": {
      "type": "single",
      "correct": "d",
      "explanation": "Avec une requête paramétrée (`cur.execute(\"… WHERE nom = ?\", (nom,))`), la valeur est transmise séparément du texte SQL : elle ne peut pas en modifier la structure.",
      "whyWrong": {
        "b": "Supprimer des caractères est fragile et contournable.",
        "a": "Une f-string colle la saisie dans la requête : c’est le problème.",
        "c": "La casse n’empêche rien."
      }
    },
    "cbs-q12": {
      "type": "short",
      "accepted": [
        "int",
        "int()"
      ],
      "explanation": "`int(\"abc\")` lève une `ValueError` : c’est la première étape de la validation d’une saisie numérique, à compléter par un contrôle de plage."
    },
    "cbs-q13": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Type, plage et présence sont les contrôles de base d’une saisie numérique. Un caractère spécial n’a aucune raison d’y figurer.",
      "whyWrong": {
        "b": "Exiger un caractère spécial rendrait la saisie invalide."
      }
    },
    "cbs-q14": {
      "type": "single",
      "correct": "c",
      "explanation": "L’encodage de sortie transforme `<` en `&lt;` : le navigateur affiche le texte au lieu de l’interpréter comme du code (XSS). Les moteurs de gabarits le font par défaut.",
      "whyWrong": {
        "b": "Le copier ne le rend pas sûr à l’affichage.",
        "a": "Un texte n’a pas à être converti en nombre.",
        "d": "Sans transformation, du script injecté s’exécute."
      }
    },
    "cbs-q15": {
      "type": "single",
      "correct": "b",
      "explanation": "Un secret écrit dans le code est lu par quiconque accède au dépôt, historique compris. On le place dans l’environnement, un gestionnaire de secrets ou un fichier local non versionné.",
      "whyWrong": {
        "d": "C’est une bonne pratique.",
        "c": "C’est une bonne pratique.",
        "a": "C’est acceptable pour un secret local."
      }
    },
    "cbs-q16": {
      "type": "truefalse",
      "correct": false,
      "explanation": "L’historique de Git conserve les versions précédentes : le mot de passe reste lisible. Il faut le considérer comme compromis, le révoquer et le remplacer."
    },
    "cbs-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "Le secret est injecté au déploiement, hors du code. Un commentaire dans le code, un argument de ligne de commande (visible dans la liste des processus) ou un courriel l’exposent.",
      "whyWrong": {
        "c": "Un commentaire dans le code est versionné.",
        "a": "Les arguments sont visibles par les autres utilisateurs de la machine.",
        "b": "Un courriel est lu et conservé par beaucoup de monde."
      }
    },
    "cbs-q18": {
      "type": "short",
      "accepted": [
        ".gitignore",
        "gitignore"
      ],
      "explanation": "Le fichier `.gitignore` empêche de versionner par erreur un fichier comme `.env`. Il ne protège pas un secret déjà commité."
    },
    "cbs-q19": {
      "type": "single",
      "correct": "a",
      "explanation": "Un message détaillé révèle la structure interne et aide l’attaquant. L’utilisateur reçoit un message neutre ; l’équipe retrouve le détail dans les journaux.",
      "whyWrong": {
        "d": "Une trace d’appels révèle la structure du programme.",
        "c": "La requête SQL aide à préparer une injection.",
        "b": "Un secret n’est jamais affiché."
      }
    },
    "cbs-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Les journaux circulent largement : on y met l’événement, l’heure et l’identifiant, jamais de données qui donnent un accès ou de données sensibles.",
      "whyWrong": {
        "c": "L’horodatage est une donnée utile et sans risque."
      }
    },
    "cbs-q21": {
      "type": "single",
      "correct": "c",
      "explanation": "On stocke l’empreinte du mot de passe, calculée avec une fonction lente et salée : une fuite de la base ne donne pas les mots de passe. On ne renvoie jamais un mot de passe : on le réinitialise.",
      "whyWrong": {
        "d": "Un mot de passe en clair est exposé en cas de fuite.",
        "b": "Base64 est un encodage réversible, sans protection.",
        "a": "Une clé placée à côté des données ne protège rien."
      }
    },
    "cbs-q22": {
      "type": "single",
      "correct": "b",
      "explanation": "Une dépendance est un composant écrit par d’autres (installé avec `pip` ou `npm`) que votre programme utilise. Ses failles deviennent celles de votre application.",
      "whyWrong": {
        "a": "Cela décrit un besoin de réseau, pas une dépendance.",
        "d": "Un fichier de configuration est autre chose.",
        "c": "Ce sens n’est pas celui du développement logiciel."
      }
    },
    "cbs-q23": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le code d’une bibliothèque s’exécute dans votre programme avec ses droits : une faille dans cette bibliothèque est une faille de votre application, d’où l’importance des mises à jour."
    },
    "cbs-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "Quand une faille est publiée, un attaquant peut l’exploiter sur toutes les versions non corrigées. La mise à jour applique le correctif.",
      "whyWrong": {
        "a": "La vitesse n’est pas l’objectif.",
        "d": "La taille n’est pas l’objectif.",
        "c": "Les tests restent nécessaires."
      }
    },
    "cbs-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "Le fichier de verrouillage enregistre les versions précises : chacun installe les mêmes paquets, et les mises à jour deviennent des décisions relues. Il n’interdit pas de mettre à jour.",
      "whyWrong": {
        "a": "Il ne chiffre rien.",
        "b": "On peut toujours mettre à jour, en connaissance de cause.",
        "d": "Il ne supprime rien."
      }
    },
    "cbs-q26": {
      "type": "short",
      "accepted": [
        "SCA",
        "sca"
      ],
      "explanation": "L’analyse de composition logicielle (SCA) compare les dépendances et leurs versions à des bases de vulnérabilités connues, par exemple avec `pip-audit` ou `npm audit`."
    },
    "cbs-q27": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "L’éditeur, l’entretien et l’orthographe exacte du nom permettent d’écarter les paquets abandonnés ou piégés. La popularité seule ne garantit pas la sécurité.",
      "whyWrong": {
        "c": "Un paquet populaire peut être compromis ou usurpé par un nom voisin."
      }
    },
    "cbs-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "Un attaquant publie un paquet au nom voisin d’un paquet connu en espérant une faute de frappe : l’installation exécute alors son code. On vérifie le nom exact et l’éditeur.",
      "whyWrong": {
        "b": "Une faute de frappe dans le nom ne donne pas une version plus récente de la bibliothèque.",
        "c": "Les autres bibliothèques ne sont pas supprimées.",
        "d": "Python ne corrige pas les noms de paquets."
      }
    },
    "cbs-q29": {
      "type": "single",
      "correct": "d",
      "explanation": "Un regard neuf trouve ce que l’auteur ne voit plus : erreur de logique, entrée non vérifiée, secret oublié. Elle complète les tests et les outils.",
      "whyWrong": {
        "c": "Ce n’est pas un outil de mesure de productivité.",
        "a": "Une revue n’effectue pas de suppression automatique.",
        "b": "Elle ne traduit pas le code."
      }
    },
    "cbs-q30": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les entrées invalides ou hostiles sont celles qui révèlent les failles. Un bon test vérifie que le code les refuse proprement (`pytest.raises`) et non qu’il se contente de l’usage normal."
    },
    "cbs-q31": {
      "type": "single",
      "correct": "c",
      "explanation": "L’analyse statique (SAST) lit le code et repère des motifs connus comme `eval`, un mot de passe en dur ou une requête par concaténation. Elle ne remplace pas la relecture humaine.",
      "whyWrong": {
        "a": "Cela décrit un test de charge.",
        "d": "Un outil d’analyse signale, il ne corrige pas seul.",
        "b": "La surveillance réseau est une autre fonction."
      }
    },
    "cbs-q32": {
      "type": "short",
      "accepted": [
        "Bandit",
        "bandit"
      ],
      "explanation": "Bandit repère des motifs comme `pickle.loads`, `eval`, `shell=True` ou des mots de passe écrits dans le code. Semgrep est une alternative multilangage."
    },
    "cbs-q33": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Tests, analyse statique et relecture attrapent des erreurs différentes. Les lancer à chaque modification (intégration continue) empêche que les problèmes s’accumulent.",
      "whyWrong": {
        "b": "Publier sans contrôle laisse passer toutes les erreurs."
      }
    },
    "cbs-q34": {
      "type": "single",
      "correct": "a",
      "explanation": "L’historique permet de comprendre qui a changé quoi, de relire une modification avant fusion et de revenir à une version saine. Git ne rend rien illisible et ne remplace pas les tests.",
      "whyWrong": {
        "c": "Le dépôt n’est pas chiffré par défaut.",
        "d": "Git n’agit pas sur l’exécution.",
        "b": "Il ne remplace pas les tests."
      }
    },
    "cbs-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "Un algorithme maison n’a pas été examiné et se casse presque toujours. On utilise des bibliothèques reconnues (AES, ChaCha20, bibliothèques standards).",
      "whyWrong": {
        "a": "Les algorithmes personnels ne sont pas interdits par la loi : ils sont simplement peu sûrs.",
        "c": "La vitesse n’est pas la raison principale.",
        "d": "Les langages n’empêchent rien de tel."
      }
    },
    "cbs-q36": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Moins de cas particuliers et de chemins d’exécution laissent moins de place aux erreurs et rendent la revue plus efficace. La simplicité est une qualité de sécurité."
    },
    "cbs-q37": {
      "type": "single",
      "correct": "d",
      "explanation": "L’OWASP et l’ANSSI publient des guides gratuits qui décrivent les erreurs fréquentes et leurs corrections. Le Top 10 sert de point de départ.",
      "whyWrong": {
        "b": "Les commentaires d’un projet ne couvrent pas les erreurs courantes.",
        "a": "Les journaux décrivent ce qui s’est passé, pas les bonnes pratiques.",
        "c": "Les messages de commit documentent des changements précis."
      }
    },
    "cbs-q38": {
      "type": "multi",
      "correct": [
        "a",
        "d"
      ],
      "explanation": "On s’entraîne sur des cibles autorisées et l’on signale les failles découvertes. Tester sans autorisation est illégal, et copier sans comprendre peut introduire des failles.",
      "whyWrong": {
        "b": "Un accès sans autorisation est une infraction.",
        "c": "Du code non compris peut contenir des failles."
      }
    },
    "cbs-q39": {
      "type": "open",
      "model": "Je valide la saisie (type, longueur, caractères autorisés) et je rejette le reste, car l’entrée peut être hostile. J’utilise une requête paramétrée au lieu de concaténer le nom dans le texte SQL, pour éviter une injection. Je garde le mot de passe de la base hors du code (variable d’environnement) et je ne l’écris pas dans les journaux. En cas d’erreur, je journalise le détail et je n’affiche qu’un message général. J’exécute le script avec un compte qui n’a que les droits nécessaires sur la base (moindre privilège). Enfin, je teste avec des entrées invalides et j’analyse le code avec un outil comme Bandit.",
      "criteria": [
        "La validation de la saisie est mentionnée.",
        "La requête paramétrée est choisie pour éviter l’injection SQL.",
        "La gestion des secrets et des erreurs est mentionnée.",
        "Une pratique complémentaire (moindre privilège, tests ou analyse) est ajoutée."
      ],
      "explanation": "Chaque pratique répond à un risque précis : entrée hostile, injection, fuite de secret, fuite d’information, droits trop larges."
    },
    "cbs-q40": {
      "type": "open",
      "model": "Un extrait trouvé en ligne a pu être écrit pour un autre contexte : il peut contenir une faille (une commande construite par concaténation, un mot de passe en dur), reposer sur une bibliothèque obsolète ou piégée, ou même être malveillant. Si je ne comprends pas ce que fait chaque ligne et d’où viennent ses données, je ne peux pas savoir s’il est sûr. Pour procéder en sécurité : lire le code ligne par ligne, chercher la documentation des fonctions utilisées, vérifier d’où viennent les entrées, tester dans un environnement isolé avec des entrées invalides, vérifier les bibliothèques ajoutées (nom, éditeur, mises à jour), puis faire relire le code par une autre personne ou par un outil d’analyse.",
      "criteria": [
        "Les risques d’un code non compris sont cités (faille, dépendance douteuse, code malveillant).",
        "Une démarche de vérification concrète est décrite (lecture, tests, entrées invalides).",
        "Les dépendances ou la relecture par un tiers sont mentionnées."
      ],
      "explanation": "Comprendre le code que l’on exécute est le premier réflexe de sécurité : on ne peut pas protéger ce qu’on ne comprend pas."
    },
    "cbs-q41": {
      "type": "single",
      "correct": "d",
      "explanation": "Une liste d’arguments transmise directement au programme ne passe pas par un interpréteur : la saisie ne peut plus ajouter de commande. On valide aussi le type attendu (adresse IP, nombre).",
      "whyWrong": {
        "b": "Interdire quelques caractères laisse d’autres séparateurs possibles.",
        "a": "La casse ne change pas l’interprétation des séparateurs.",
        "c": "Des guillemets se contournent par des guillemets dans la saisie."
      }
    },
    "cbs-q42": {
      "type": "single",
      "correct": "b",
      "explanation": "Le secret doit être considéré comme connu : on le révoque d’abord, puis on vérifie son utilisation dans les journaux. Le supprimer du dépôt ne l’efface pas de l’historique ni des copies.",
      "whyWrong": {
        "c": "L’historique et les clones conservent la valeur.",
        "a": "Attendre laisse un secret valide aux mains de tiers.",
        "d": "Renommer ne retire pas la valeur de l’historique."
      }
    },
    "cbs-q43": {
      "type": "short",
      "accepted": [
        "is_relative_to",
        "is_relative_to()"
      ],
      "explanation": "Après avoir résolu le chemin avec `resolve()`, `is_relative_to(base)` confirme qu’il reste dans le dossier autorisé et bloque `../`."
    }
  },
};
