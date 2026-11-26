// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "a-compilation-memoire-execution",
  questions: {
    "exec-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "Le préprocesseur traite les directives, le compilateur produit de l’assembleur, l’assembleur produit un fichier objet, puis l’éditeur de liens assemble les fichiers objets et les bibliothèques en un exécutable.",
      "whyWrong": {
        "d": "Le préprocesseur agit en premier, pas en dernier.",
        "c": "L’assembleur vient après le compilateur, pas avant le préprocesseur.",
        "b": "L’éditeur de liens clôt la chaîne : il a besoin des fichiers objets déjà produits."
      }
    },
    "exec-q2": {
      "type": "single",
      "correct": "d",
      "explanation": "L’éditeur de liens résout les références entre fichiers objets et bibliothèques, puis produit le fichier exécutable final.",
      "whyWrong": {
        "a": "Le code source n’est pas écrit en langage naturel ; l’éditeur de liens travaille sur du code déjà compilé.",
        "c": "Chiffrer un programme n’est pas son rôle.",
        "b": "Surveiller les appels système relève d’un outil de trace, pas de l’éditeur de liens."
      }
    },
    "exec-q3": {
      "type": "single",
      "correct": "c",
      "explanation": "L’assembleur écrit chaque instruction machine sous forme de mnémonique (`mov`, `add`, `call`…). Il dépend de l’architecture du processeur, d’où ses variantes (x86-64, ARM).",
      "whyWrong": {
        "b": "L’assembleur est de bas niveau et dépend du processeur.",
        "a": "Ce n’est pas un format de compression.",
        "d": "Ce n’est pas un protocole réseau."
      }
    },
    "exec-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La compilation produit des instructions machine ; le code source n’y figure pas. On peut seulement le reconstituer approximativement par désassemblage ou décompilation, en perdant noms et commentaires."
    },
    "exec-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "Le lien statique produit un exécutable autonome mais plus gros, qu’il faut recompiler pour corriger une bibliothèque. Le lien dynamique partage les bibliothèques (.so, .dll) et permet de les corriger sans recompiler.",
      "whyWrong": {
        "c": "C’est l’inverse des deux définitions.",
        "a": "Le chiffrement et la compression ne définissent pas l’édition de liens.",
        "d": "La différence est réelle : taille de l’exécutable, mises à jour des bibliothèques, dépendances."
      }
    },
    "exec-q6": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "e"
      ],
      "explanation": "Une bibliothèque dynamique est un fichier séparé, chargé à l’exécution : on la corrige sans recompiler, mais il faut maîtriser l’endroit d’où elle est chargée, sous peine de détournement.",
      "whyWrong": {
        "d": "C’est le cas du lien statique, pas du lien dynamique.",
        "c": "Elles sont précisément chargées pendant l’exécution."
      }
    },
    "exec-q7": {
      "type": "short",
      "accepted": [
        "fichier objet",
        "fichiers objets",
        "objet"
      ],
      "explanation": "Le fichier objet contient du code machine incomplet : les références vers d’autres fichiers ou bibliothèques ne sont résolues que par l’éditeur de liens."
    },
    "exec-q8": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les symboles donnent les noms des fonctions et variables. Sans eux, un analyste lit des adresses anonymes. Le comportement reste identique, mais l’opacité n’est jamais une protection suffisante."
    },
    "exec-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "ELF (Executable and Linkable Format) est le format des exécutables et bibliothèques Linux. PE est celui de Windows, Mach-O celui de macOS, APK celui des applications Android.",
      "whyWrong": {
        "a": "PE est le format des exécutables Windows.",
        "d": "Mach-O est le format de macOS.",
        "b": "APK est le format des applications Android, pas l’exécutable de la plupart des systèmes Linux."
      }
    },
    "exec-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "Les quatre premiers octets sont la signature d’ELF : 7F suivi des codes ASCII de E, L, F. Windows (PE) commence par « MZ » (4D 5A).",
      "whyWrong": {
        "d": "Le format PE de Windows commence par « MZ », pas par 7F 45 4C 46.",
        "a": "Une archive ZIP commence par « PK ».",
        "c": "Un PNG commence par 89 50 4E 47."
      }
    },
    "exec-q11": {
      "type": "single",
      "correct": "a",
      "explanation": "La section .text contient le code (lecture et exécution). .data contient les variables initialisées, .bss les variables non initialisées et .rodata les constantes en lecture seule.",
      "whyWrong": {
        "b": ".bss contient des variables non initialisées, pas du code.",
        "c": ".rodata contient des constantes en lecture seule.",
        "d": ".data contient des variables initialisées."
      }
    },
    "exec-q12": {
      "type": "single",
      "correct": "d",
      "explanation": "La table des imports indique, par bibliothèque, les fonctions appelées (fichiers, réseau, chiffrement…). C’est un indice précieux sur les capacités d’un programme inconnu.",
      "whyWrong": {
        "c": "La table des imports ne contient pas de secrets.",
        "a": "Elle ne liste pas les adresses réseau contactées.",
        "b": "Elle ne conserve pas l’historique des versions."
      }
    },
    "exec-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un programme qui importe des fonctions réseau, de chiffrement et d’écriture de fichiers n’est pas anodin. Ce n’est qu’un indice, car un programme peut aussi résoudre ses fonctions à l’exécution."
    },
    "exec-q14": {
      "type": "single",
      "correct": "c",
      "explanation": "Le noyau et le chargeur dynamique préparent le processus : mappage des segments, chargement des bibliothèques, résolution des symboles, puis saut au point d’entrée du programme.",
      "whyWrong": {
        "d": "Le compilateur agit avant l’exécution, lors de la construction du programme.",
        "b": "Le pare-feu filtre le réseau, il ne charge pas les programmes.",
        "a": "Le planificateur choisit quand un processus s’exécute, pas comment il est chargé."
      }
    },
    "exec-q15": {
      "type": "multi",
      "correct": [
        "a",
        "d"
      ],
      "explanation": "LD_PRELOAD force le chargement d’une bibliothèque avant les autres ; l’ordre de recherche des DLL permet d’imposer une DLL placée dans le dossier du programme. Ces mécanismes sont utilisés par des malwares et surveillés par les EDR.",
      "whyWrong": {
        "b": "Un fond d’écran n’intervient pas dans le chargement des bibliothèques.",
        "c": "La résolution d’écran n’a aucun rapport avec le chargeur."
      }
    },
    "exec-q16": {
      "type": "open",
      "model": "Si un attaquant peut écrire dans le dossier du programme, il y dépose une DLL portant le nom de celle attendue : le programme la charge à la place de la vraie et exécute le code de l’attaquant avec ses droits. Mesures : installer les programmes dans des dossiers non inscriptibles par les utilisateurs, charger les DLL par chemin complet ou restreindre l’ordre de recherche, signer et vérifier les bibliothèques, et surveiller les chargements inhabituels de DLL (EDR, Sysmon).",
      "criteria": [
        "Explique le chargement d’une DLL contrôlée par l’attaquant.",
        "Mentionne une mesure de prévention (droits, chemin complet, signature).",
        "Mentionne une mesure de détection ou de surveillance."
      ],
      "explanation": "Le lieu et l’ordre de chargement des bibliothèques font partie de la surface d’attaque d’un programme."
    },
    "exec-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "À chaque appel de fonction, un cadre est empilé : variables locales, paramètres, adresse de retour. Il disparaît quand la fonction se termine.",
      "whyWrong": {
        "a": "Le tas sert aux allocations dynamiques, pas aux cadres d’appel.",
        "c": "La section .text contient le code, pas les variables locales.",
        "d": "Le disque est un stockage permanent, sans lien avec les cadres de pile."
      }
    },
    "exec-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "En C, rien n’empêche d’écrire au-delà d’un tableau. Les données voisines (variables, adresse de retour) sont alors écrasées, ce qui peut changer le comportement du programme.",
      "whyWrong": {
        "b": "Saturer le disque est une autre situation, sans écrasement de données voisines.",
        "c": "Envoyer trop de paquets décrit un déni de service réseau.",
        "d": "Ouvrir trop de fichiers épuise des ressources, sans débordement de mémoire."
      }
    },
    "exec-q19": {
      "type": "single",
      "correct": "d",
      "explanation": "`strcpy` copie jusqu’au caractère nul sans connaître la taille de la destination. Au-delà de 15 caractères plus le terminateur, elle écrase la pile. On utilise des fonctions bornées (`snprintf`, `strlcpy`) et on vérifie les tailles.",
      "whyWrong": {
        "c": "Le débordement se produit à l’exécution, côté programme, pas dans le navigateur.",
        "a": "strcpy ne tronque rien : c’est justement le danger.",
        "b": "Le débordement de tampon n’a pas d’effet direct sur le réseau local."
      }
    },
    "exec-q20": {
      "type": "truefalse",
      "correct": false,
      "explanation": "À la fin de la fonction, le processeur saute à l’adresse de retour stockée sur la pile. Si elle est écrasée, le saut mène ailleurs : c’est le mécanisme classique de détournement du flot d’exécution."
    },
    "exec-q21": {
      "type": "single",
      "correct": "c",
      "explanation": "Après libération, la zone peut être réattribuée à autre chose. Un pointeur resté valide dans le programme lit ou écrit alors des données qui ne lui appartiennent plus, ce qui est exploitable.",
      "whyWrong": {
        "a": "Libérer deux fois la même zone est un autre défaut, la double libération.",
        "b": "Cette erreur ne concerne pas les licences.",
        "d": "Il s’agit de mémoire, pas de sauvegarde de travail."
      }
    },
    "exec-q22": {
      "type": "short",
      "accepted": [
        "tas",
        "heap"
      ],
      "explanation": "Le tas (heap) contient les données dont la durée de vie ou la taille ne sont connues qu’à l’exécution. Le programmeur (ou le ramasse-miettes) doit les libérer."
    },
    "exec-q23": {
      "type": "multi",
      "correct": [
        "a",
        "c"
      ],
      "explanation": "Les dépassements de tampon et l’utilisation après libération sont les deux grandes familles d’erreurs mémoire. Un langage qui vérifie les bornes ou une option de débogage ne les provoque pas.",
      "whyWrong": {
        "d": "La vérification automatique des bornes empêche ce type d’erreur.",
        "b": "L’option de débogage n’altère pas la gestion mémoire du programme."
      }
    },
    "exec-q24": {
      "type": "single",
      "correct": "a",
      "explanation": "C et C++ donnent un contrôle complet de la mémoire, au prix de l’absence de garde-fous. Les langages à mémoire sûre (Rust, Go, Java, C#) vérifient les accès ou imposent des règles d’usage.",
      "whyWrong": {
        "d": "C et C++ sont compilés, pas interprétés ; la cause est l’absence de vérification des bornes.",
        "c": "Ces langages utilisent à la fois la pile et le tas.",
        "b": "Ils fonctionnent sur des processeurs récents comme anciens."
      }
    },
    "exec-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "Le compilateur insère une valeur secrète avant l’adresse de retour. Un débordement la modifie ; la vérification échoue à la sortie de la fonction et le programme s’arrête avant le détournement.",
      "whyWrong": {
        "a": "Le canari n’est pas un mot de passe et n’est pas vérifié au démarrage.",
        "b": "Il ne surveille pas le réseau.",
        "c": "Il ne journalise pas les appels système."
      }
    },
    "exec-q26": {
      "type": "single",
      "correct": "b",
      "explanation": "NX interdit d’exécuter des instructions situées dans des pages de données. Un code injecté dans la pile ou le tas ne peut plus s’exécuter directement.",
      "whyWrong": {
        "c": "Le hameçonnage se traite par la sensibilisation et le filtrage, pas par NX.",
        "d": "L’écoute du trafic se traite par le chiffrement.",
        "a": "La saturation de serveur se traite par la limitation de débit, pas par NX."
      }
    },
    "exec-q27": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un attaquant ne peut plus coder en dur l’adresse d’une fonction ou d’une zone. L’ASLR n’est pas absolue (fuites d’adresses, forces brutes), d’où l’association avec d’autres protections."
    },
    "exec-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "En ROP (return-oriented programming), l’attaquant chaîne de petits morceaux de code légitime qui se terminent par un retour. Aucun code nouveau n’est injecté, donc NX ne l’arrête pas : d’où l’intérêt de l’ASLR et des protections du flot de contrôle.",
      "whyWrong": {
        "c": "L’injection SQL vise une base de données.",
        "b": "Le hameçonnage est une attaque par tromperie, sans lien avec la mémoire.",
        "d": "Le déni de service distribué vise la disponibilité."
      }
    },
    "exec-q29": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "e"
      ],
      "explanation": "ASLR, NX et le canari de pile compliquent chacun une étape de l’exploitation. Un filtre antispam ou un écran verrouillé n’agissent pas sur la mémoire des processus.",
      "whyWrong": {
        "b": "Il traite le courrier, pas la mémoire des programmes.",
        "d": "Il protège l’accès physique à la session, pas la mémoire des processus."
      }
    },
    "exec-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "Rust garantit la sûreté mémoire par son système de propriété et d’emprunt, hors blocs `unsafe`. Go, Java et C# l’obtiennent par vérification à l’exécution. C, C++ et l’assembleur laissent cette tâche au programmeur.",
      "whyWrong": {
        "a": "C n’impose aucune vérification des bornes.",
        "b": "C++ hérite des risques mémoire de C.",
        "d": "L’assembleur laisse tout au programmeur."
      }
    },
    "exec-q31": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La sûreté mémoire supprime une famille de failles, mais pas les erreurs de logique, d’authentification, les injections ou les dépendances vulnérables."
    },
    "exec-q32": {
      "type": "open",
      "model": "Compilation : activer les protections (canari de pile, PIE pour l’ASLR, NX, avertissements stricts) et les assainisseurs (AddressSanitizer) en test. Développement : remplacer les fonctions non bornées par des fonctions bornées, revue de code et analyse statique ciblées sur les copies et les libérations, tests de fuzzing sur les entrées. Exécution : service sous un utilisateur non privilégié, isolation (conteneur durci, seccomp, bac à sable), surveillance des plantages. Long terme : réécrire les composants les plus exposés dans un langage à mémoire sûre.",
      "criteria": [
        "Évoque les protections activées à la compilation.",
        "Évoque des pratiques de développement ou de test (revue, fuzzing, assainisseurs).",
        "Évoque l’isolation à l’exécution ou le changement de langage."
      ],
      "explanation": "Aucune mesure ne suffit seule : on combine prévention, détection et limitation de l’impact."
    },
    "exec-q33": {
      "type": "single",
      "correct": "b",
      "explanation": "`strings` affiche les textes présents dans un binaire (messages, adresses, noms de fichiers, URL). C’est souvent la première étape d’une analyse statique, sans exécuter le programme.",
      "whyWrong": {
        "a": "Exécuter dans un bac à sable relève de l’analyse dynamique.",
        "c": "`strings` ne supprime aucun symbole.",
        "d": "`strings` ne recompile rien."
      }
    },
    "exec-q34": {
      "type": "single",
      "correct": "d",
      "explanation": "L’analyse statique examine le fichier : signature, chaînes, imports, sections, désassemblage. Elle est sûre car le code ne s’exécute pas, mais elle se heurte aux binaires protégés ou compressés.",
      "whyWrong": {
        "a": "Exécuter dans un environnement surveillé, c’est l’analyse dynamique.",
        "c": "Recompiler ne constitue pas une analyse.",
        "b": "Comparer deux versions est une analyse différentielle."
      }
    },
    "exec-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "L’analyse dynamique lance le programme dans un environnement isolé et observe ses actions : fichiers, registre, réseau, processus créés. Elle révèle ce que fait réellement le code, au risque de son exécution.",
      "whyWrong": {
        "c": "Lire les chaînes sans lancer le programme est de l’analyse statique.",
        "a": "Vérifier une signature ne suffit pas à observer un comportement.",
        "b": "Comparer une empreinte à une liste vérifie l’identité du fichier, pas son comportement."
      }
    },
    "exec-q36": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les données compressées ou chiffrées ressemblent à du hasard : entropie proche du maximum, très peu de texte lisible. C’est un indice classique de binaire empaqueté, à confirmer."
    },
    "exec-q37": {
      "type": "single",
      "correct": "b",
      "explanation": "`strace` affiche chaque appel système avec ses arguments et son résultat : fichiers ouverts, connexions réseau, processus lancés. C’est l’équivalent d’un « film » des interactions du programme avec le noyau.",
      "whyWrong": {
        "d": "`ping` teste la joignabilité réseau.",
        "c": "`tar` archive des fichiers.",
        "a": "`chmod` modifie des permissions."
      }
    },
    "exec-q38": {
      "type": "short",
      "accepted": [
        "nombre magique",
        "nombres magiques",
        "magic number",
        "signature de fichier"
      ],
      "explanation": "Ce « nombre magique » (ou signature) permet d’identifier le vrai type d’un fichier, indépendamment de son nom, avec des outils comme `file`."
    },
    "exec-q39": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "L’environnement doit être jetable, isolé et restaurable. Exécuter un code inconnu sur son poste ou avec des droits élevés expose la production.",
      "whyWrong": {
        "b": "Un code malveillant s’exécuterait sur la machine de travail.",
        "e": "Des droits élevés aggravent l’impact d’une exécution malveillante."
      }
    },
    "exec-q40": {
      "type": "open",
      "model": "Statique, sans exécuter : identifier le vrai type par la signature, calculer l’empreinte (SHA-256) et la rechercher dans des bases de réputation, extraire les chaînes lisibles (URL, chemins, messages), lire les en-têtes, les sections, les imports et mesurer l’entropie pour repérer un packer. Dynamique, dans une VM jetable sans accès à la production : prendre un instantané, lancer le programme avec des outils de suivi (processus, fichiers, registre, réseau, appels système), puis restaurer l’état. On cherche à établir ses capacités, sa persistance, ses communications et des indicateurs de compromission à partager.",
      "criteria": [
        "Commence par des vérifications sans exécution (type, empreinte, chaînes).",
        "Place l’exécution dans un environnement isolé et restaurable.",
        "Cite ce que l’on cherche : capacités, persistance, communications, indicateurs."
      ],
      "explanation": "L’analyse progresse du plus sûr (sans exécuter) au plus informatif (exécution contrôlée)."
    }
  },
};
