// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "g-vulnerabilites-memoire",
  questions: {
    "mem-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "Les variables locales (non statiques) résident dans le cadre de pile de la fonction, créé à l’appel et détruit au retour. Le tas reçoit les allocations dynamiques.",
      "whyWrong": {
        "b": "Le tas reçoit les allocations dynamiques (malloc).",
        "a": "Le segment de code contient les instructions.",
        "d": "Le registre d’instruction contient l’adresse de l’instruction en cours."
      }
    },
    "mem-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "En C, le tas n’a pas de ramasse-miettes : chaque malloc doit correspondre à exactement un free. Oublier un free crée une fuite ; en faire deux crée un double free ; utiliser après free crée un use-after-free."
    },
    "mem-q3": {
      "type": "short",
      "accepted": [
        "l'adresse de retour",
        "adresse de retour",
        "l’adresse de retour",
        "l adresse de retour",
        "return address"
      ],
      "explanation": "L’adresse de retour, empilée lors de l’appel, détermine où le programme reprend à la fin de la fonction. La contrôler, c’est contrôler le flux d’exécution."
    },
    "mem-q4": {
      "type": "single",
      "correct": "d",
      "explanation": "La saisie est interprétée comme une chaîne de format : `%x` ou `%p` lisent la pile (fuite d’information), `%n` écrit en mémoire. Il faut écrire `printf(\"%s\", buffer_utilisateur)`.",
      "whyWrong": {
        "a": "Aucune libération n’intervient dans cette ligne.",
        "b": "Aucune base de données n’est en jeu.",
        "c": "Aucun calcul de taille n’est ici en cause."
      }
    },
    "mem-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "Si `n * 16` dépasse la capacité du type size_t, le résultat boucle vers une petite valeur : malloc alloue peu, mais la boucle écrit n blocs. Il faut vérifier `n <= SIZE_MAX / 16` ou utiliser calloc(n, 16), qui contrôle le débordement.",
      "whyWrong": {
        "c": "malloc ne sait pas que la taille a débordé.",
        "d": "Il n’y a pas de format dans cet appel.",
        "a": "Aucun fichier n’est ouvert ici."
      }
    },
    "mem-q6": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "`gets` est retirée du standard C11 (aucune limite possible) ; `strcpy` et `sprintf` ne connaissent pas la taille de la destination.",
      "whyWrong": {
        "d": "`snprintf(dst, sizeof dst, …)` borne l’écriture et termine toujours la chaîne : c’est la forme recommandée."
      }
    },
    "mem-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un use-after-free peut ne jamais planter en test et être parfaitement exploitable : la zone libérée est réallouée à des données contrôlées par l’attaquant. L’absence de plantage ne prouve rien ; ASan le détecte systématiquement."
    },
    "mem-q8": {
      "type": "single",
      "correct": "a",
      "explanation": "NX (No eXecute, appelé DEP sous Windows) marque les pages de données comme non exécutables : un code injecté dans la pile ne peut pas être exécuté directement.",
      "whyWrong": {
        "c": "ASLR randomise les adresses mais n’interdit pas l’exécution.",
        "b": "Le canari détecte l’écrasement de la pile.",
        "d": "FORTIFY_SOURCE vérifie des tailles dans la libc."
      }
    },
    "mem-q9": {
      "type": "short",
      "accepted": [
        "aslr",
        "ASLR"
      ],
      "explanation": "ASLR (Address Space Layout Randomization) place pile, tas, bibliothèques et, avec PIE, le programme lui-même à des adresses aléatoires."
    },
    "mem-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les protections compliquent l’exploitation sans la rendre impossible (fuite d’information, ROP, attaques sur le tas, déni de service par plantage). Le défaut doit être corrigé."
    },
    "mem-q11": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Le ROP enchaîne des fragments de code existants (exécutables, donc compatibles avec NX) ; une fuite d’adresse ou un module à adresse fixe neutralise l’ASLR.",
      "whyWrong": {
        "c": "L’ASLR est un réglage du système d’exploitation local, pas désactivable par une requête."
      }
    },
    "mem-q12": {
      "type": "single",
      "correct": "a",
      "explanation": "AddressSanitizer instrumente le programme à la compilation et signale précisément tout accès hors limites ou après libération pendant les tests ou le fuzzing.",
      "whyWrong": {
        "c": "Un pare-feu applicatif filtre des requêtes, il n’instrumente pas le programme.",
        "d": "gzip compresse des fichiers.",
        "b": "Un antivirus ne trouve pas les erreurs mémoire d’un programme."
      }
    },
    "mem-q13": {
      "type": "short",
      "accepted": [
        "-Wformat-security",
        "Wformat-security",
        "-Wformat=2"
      ],
      "explanation": "`-Wformat-security` avertit lorsqu’une fonction de la famille printf reçoit un format non littéral sans argument. `-Wformat=2` active un ensemble plus large de vérifications."
    },
    "mem-q14": {
      "type": "open",
      "model": "strncpy borne la copie, mais si src est plus long que dst, il ne place pas de zéro terminal : dst n’est plus une chaîne valide et la prochaine lecture (strlen, printf %s) déborde. De plus, il remplit de zéros le reste du tampon (coût) et masque la troncature. Meilleure solution : `snprintf(dst, sizeof dst, \"%s\", src)` qui termine toujours la chaîne et renvoie la longueur voulue (permettant de détecter la troncature), ou strlcpy, ou un type chaîne avec longueur explicite. Idéalement, valider la longueur en amont et refuser les entrées trop longues.",
      "criteria": [
        "L’absence possible de zéro terminal est expliquée.",
        "Une alternative qui termine toujours la chaîne est proposée.",
        "La détection ou le refus de la troncature est mentionné."
      ],
      "explanation": "Une « correction » qui déplace le bogue est fréquente en audit : il faut vérifier le comportement exact de chaque fonction de remplacement."
    },
    "mem-q15": {
      "type": "open",
      "model": "1) Compilation durcie systématique (stack protector, FORTIFY_SOURCE=3, PIE, RELRO, CET) et avertissements bloquants. 2) Analyse statique dans l’intégration continue (CodeQL, clang-tidy) avec règles bannissant les fonctions dangereuses. 3) Tests sous ASan et UBSan, et fuzzing continu (libFuzzer, AFL++, OSS-Fuzz) des points d’entrée réseau. 4) Revue de code obligatoire sur les parties qui manipulent des tampons ou des tailles. 5) Feuille de route vers un langage sûr pour la mémoire (Rust) en commençant par les composants les plus exposés (analyseurs de protocoles), plus un processus de gestion des vulnérabilités et de publication des correctifs.",
      "criteria": [
        "Des mesures de compilation et de test (sanitizers, fuzzing) sont présentes.",
        "L’analyse statique ou la revue de code est intégrée au processus.",
        "La migration progressive vers un langage sûr est envisagée.",
        "Les mesures sont priorisées selon l’exposition."
      ],
      "explanation": "Aucune mesure isolée ne suffit ; la combinaison prévention (langage, revue), détection (SAST, fuzzing) et atténuation (durcissement) réduit durablement le risque."
    },
    "mem-q16": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Rust (hors blocs `unsafe`), Go et Java vérifient les limites et gèrent la durée de vie des objets.",
      "whyWrong": {
        "a": "C ne vérifie ni les limites ni la durée de vie des allocations."
      }
    },
    "mem-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "Chaque appel crée un cadre de pile contenant l’adresse de retour, les arguments, les variables locales et des données de gestion. Le cadre disparaît au retour de la fonction.",
      "whyWrong": {
        "b": "Les allocations dynamiques sont sur le tas.",
        "a": "Le code machine est dans le segment de code.",
        "c": "Les variables globales sont dans les segments de données."
      }
    },
    "mem-q18": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Contrairement au tas, la pile n’exige aucun `free` : l’espace des variables locales est restitué à chaque retour. C’est pourquoi retourner l’adresse d’une variable locale est une erreur."
    },
    "mem-q19": {
      "type": "short",
      "accepted": [
        ".bss",
        "bss",
        "BSS"
      ],
      "explanation": "Le segment .bss regroupe les variables globales et statiques non initialisées, mises à zéro au chargement. Les variables initialisées sont dans .data."
    },
    "mem-q20": {
      "type": "single",
      "correct": "b",
      "explanation": "Libérer deux fois un bloc corrompt la liste des blocs libres de l’allocateur : deux allocations suivantes peuvent obtenir la même zone, ce qui ouvre la voie à une écriture contrôlée.",
      "whyWrong": {
        "c": "Ce n’est pas une question de volume alloué.",
        "a": "La copie répétée n’est pas un double free.",
        "d": "Cela décrit un pointeur vers une variable locale détruite."
      }
    },
    "mem-q21": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Une lecture hors limites divulgue des informations (clés, mots de passe, pointeurs) et aide à contourner l’ASLR. Heartbleed (2014) lisait jusqu’à 64 Ko de la mémoire d’un serveur."
    },
    "mem-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "Le serveur répondait à une demande de maintien de connexion en recopiant la longueur annoncée par le client sans vérifier la taille réelle : il renvoyait des données voisines de sa mémoire.",
      "whyWrong": {
        "b": "Il s’agissait d’une lecture, pas d’un écrasement de pile.",
        "a": "Les certificats n’étaient pas concernés.",
        "d": "Aucune chaîne de format n’était en cause."
      }
    },
    "mem-q23": {
      "type": "single",
      "correct": "b",
      "explanation": "Une valeur aléatoire est placée avant l’adresse de retour et vérifiée à la sortie : si un débordement linéaire l’a modifiée, le programme s’arrête au lieu de sauter vers une adresse choisie.",
      "whyWrong": {
        "c": "C’est le rôle de NX.",
        "a": "C’est le rôle de l’ASLR avec PIE.",
        "d": "Le canari ne chiffre rien."
      }
    },
    "mem-q24": {
      "type": "multi",
      "correct": [
        "b",
        "d"
      ],
      "explanation": "Le protecteur de pile ajoute des canaris et PIE permet à l’ASLR de randomiser le programme lui-même. `-fno-stack-protector` supprime la protection et `-O0` seul n’apporte aucun durcissement.",
      "whyWrong": {
        "a": "Cette option désactive les canaris.",
        "c": "`-O0` désactive des optimisations mais n’ajoute aucune protection."
      }
    },
    "mem-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "NX interdit d’exécuter les données ; le ROP réutilise des suites d’instructions déjà présentes (des « gadgets ») en pilotant les adresses de retour. Il ne demande donc aucun code injecté.",
      "whyWrong": {
        "d": "Un attaquant sans privilèges ne peut pas désactiver NX par ce moyen.",
        "b": "Marquer exécutable suppose un contrôle qu’il n’a pas encore.",
        "a": "NX ne reconnaît pas le contenu : il refuse l’exécution des données."
      }
    },
    "mem-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "UBSan instrumente le programme pour signaler les comportements que le standard C laisse indéfinis (dépassement d’entier signé, décalage invalide, déréférencement nul). Il complète ASan, qui cible les erreurs de mémoire.",
      "whyWrong": {
        "a": "UBSan n’observe pas le réseau.",
        "c": "Il n’analyse pas la configuration.",
        "b": "Les dépendances relèvent de l’analyse de composition logicielle."
      }
    },
    "mem-q27": {
      "type": "short",
      "accepted": [
        "fuzzing",
        "fuzz",
        "fuzzer"
      ],
      "explanation": "Le fuzzing (avec libFuzzer, AFL++, OSS-Fuzz) envoie de grandes quantités d’entrées générées ou mutées. Associé à ASan, il révèle débordements et use-after-free sans connaître le code."
    },
    "mem-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "Les blocs du tas sont voisins : écrire au-delà de la fin d’un bloc écrase des données ou des métadonnées d’un autre, par exemple un pointeur de fonction.",
      "whyWrong": {
        "d": "Une allocation qui échoue est une erreur de mémoire insuffisante.",
        "b": "C’est un use-after-free.",
        "c": "C’est un autre type de défaut, lié à la taille de la pile."
      }
    },
    "mem-q29": {
      "type": "single",
      "correct": "d",
      "explanation": "Après `free`, l’allocateur peut redonner la zone à une autre allocation. Le programme qui utilise l’ancien pointeur lit ou écrit alors des données choisies par l’attaquant comme s’il s’agissait de son objet.",
      "whyWrong": {
        "a": "Le système ne modifie pas les droits du programme.",
        "b": "Le pointeur n’est pas modifié.",
        "c": "La mémoire libérée n’est pas chiffrée."
      }
    },
    "mem-q30": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La mise à NULL ne concerne que la variable modifiée. Si le pointeur a été copié ailleurs, ces copies restent pendantes : la règle de propriété (un seul responsable de la libération) est la vraie protection."
    },
    "mem-q31": {
      "type": "single",
      "correct": "b",
      "explanation": "L’attaquant provoque de nombreuses allocations contenant ses données pour qu’un use-after-free ou un débordement atterrisse sur du contenu contrôlé, malgré la randomisation des adresses.",
      "whyWrong": {
        "c": "Ce n’est pas une libération en masse.",
        "a": "Ce n’est pas un équilibrage de charge.",
        "d": "Il ne s’agit pas de chiffrement."
      }
    },
    "mem-q32": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Un propriétaire unique, des pointeurs remis à NULL et un allocateur durci limitent double free et use-after-free. Libérer sans coordination est la cause typique de ces erreurs.",
      "whyWrong": {
        "a": "Des libérations non coordonnées produisent des double free."
      }
    },
    "mem-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "`calloc(n, taille)` refuse la demande si `n * taille` dépasse la capacité du type et initialise la zone à zéro. Les formes avec multiplication explicite ne détectent pas le dépassement.",
      "whyWrong": {
        "b": "La multiplication peut déborder sans être détectée.",
        "a": "Même problème que malloc.",
        "d": "`alloca` alloue sur la pile, sans contrôle de taille."
      }
    },
    "mem-q34": {
      "type": "short",
      "accepted": [
        "confusion de type",
        "type confusion",
        "confusion de types"
      ],
      "explanation": "La confusion de type survient lors d’une conversion invalide ou d’un objet libéré puis réalloué sous un autre type : les champs sont lus ou écrits à de mauvais emplacements."
    },
    "mem-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "Avec le RAII, la ressource est liée à la durée de vie d’un objet et libérée à sa destruction, même en cas d’exception. C++ n’a pas de ramasse-miettes, et `goto` ne libère rien automatiquement.",
      "whyWrong": {
        "b": "C++ n’a pas de ramasse-miettes.",
        "d": "Le système ne libère pas les allocations d’un programme en cours.",
        "c": "`goto` ne libère aucune ressource."
      }
    },
    "mem-q36": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Rust garantit la sécurité mémoire du code sûr, vérifiée à la compilation. Les blocs `unsafe` et les interfaces avec du code C retombent sous la responsabilité du développeur : on les isole et on les audite."
    },
    "mem-q37": {
      "type": "single",
      "correct": "a",
      "explanation": "`at(i)` lève une exception `std::out_of_range` si l’indice est invalide. L’opérateur `[]`, l’arithmétique sur `data()` et `memcpy` ne vérifient rien.",
      "whyWrong": {
        "b": "`[]` ne vérifie pas l’indice.",
        "d": "L’arithmétique de pointeur n’est pas vérifiée.",
        "c": "`memcpy` ne contrôle pas les limites."
      }
    },
    "mem-q38": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Les pointeurs intelligents, les conteneurs standards et l’absence de `new`/`delete` explicites déplacent la gestion de la mémoire vers des types qui la gèrent seuls. `malloc`/`free` ramènent aux erreurs du C.",
      "whyWrong": {
        "b": "`malloc` et `free` rétablissent la gestion manuelle de la mémoire."
      }
    },
    "mem-q39": {
      "type": "single",
      "correct": "b",
      "explanation": "Une réécriture complète est risquée et longue. On commence par le nouveau code et les composants exposés (analyseurs de formats et de protocoles), avec des interfaces étroites, et l’on garde le durcissement sur le C restant.",
      "whyWrong": {
        "c": "Une réécriture totale immobilise le projet et multiplie les risques.",
        "a": "Attendre prolonge l’exposition aux vulnérabilités.",
        "d": "Désactiver les protections aggrave le risque."
      }
    },
    "mem-q40": {
      "type": "open",
      "model": "Court terme : corriger les failles connues, recompiler avec le durcissement (stack protector, FORTIFY_SOURCE, PIE, RELRO), isoler le composant (moindre privilège, bac à sable, conteneur sans droits), ajouter ASan et UBSan en test et lancer un fuzzing continu des analyseurs. Analyse des causes : classer les CVE par catégorie (débordement de tas, use-after-free, entier) et chercher les motifs communs (calculs de taille, propriété des objets, gestion des erreurs). Moyen terme : réécrire les analyseurs les plus exposés dans un langage sûr pour la mémoire (Rust) ou C++ moderne avec des types qui gèrent la mémoire, conserver des interfaces étroites et validées, minimiser et auditer les blocs `unsafe`, et mettre en place un processus de revue et de publication des correctifs.",
      "criteria": [
        "Des mesures immédiates (correction, durcissement, isolation, tests sous sanitizers et fuzzing) sont proposées.",
        "Une analyse des causes par catégories de défauts est décrite.",
        "Une migration progressive vers un langage sûr ou C++ moderne est envisagée."
      ],
      "explanation": "La remédiation efficace combine l’atténuation immédiate et la suppression durable de la classe de défauts."
    }
  },
};
