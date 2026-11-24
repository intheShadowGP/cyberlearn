// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "exec-q1",
    "prompt": "Dans quel ordre se déroule la chaîne de compilation classique d’un programme en C ?",
    "skills": [
      "a-comp"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Préprocesseur, compilateur, assembleur, éditeur de liens"
      },
      {
        "id": "b",
        "text": "Compilateur, éditeur de liens, préprocesseur, assembleur"
      },
      {
        "id": "c",
        "text": "Assembleur, préprocesseur, éditeur de liens, compilateur"
      },
      {
        "id": "d",
        "text": "Éditeur de liens, assembleur, compilateur, préprocesseur"
      }
    ]
  },
  {
    "id": "exec-q2",
    "prompt": "Quel est le rôle de l’éditeur de liens ?",
    "skills": [
      "a-comp"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Traduire le code source écrit en langage naturel"
      },
      {
        "id": "b",
        "text": "Surveiller les appels système pendant toute l’exécution du programme"
      },
      {
        "id": "c",
        "text": "Chiffrer le programme avant de le distribuer aux clients"
      },
      {
        "id": "d",
        "text": "Assembler les fichiers objets et les bibliothèques en un exécutable"
      }
    ]
  },
  {
    "id": "exec-q3",
    "prompt": "Qu’est-ce que le langage assembleur ?",
    "skills": [
      "a-comp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un format de compression de fichiers exécutables"
      },
      {
        "id": "b",
        "text": "Un langage de haut niveau indépendant du matériel"
      },
      {
        "id": "c",
        "text": "Une écriture lisible des instructions machine du processeur"
      },
      {
        "id": "d",
        "text": "Un protocole d’échange entre un client et un serveur de fichiers distant"
      }
    ]
  },
  {
    "id": "exec-q4",
    "prompt": "Un exécutable compilé contient toujours le code source original, ce qui permet de le relire à volonté.",
    "skills": [
      "a-comp"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "exec-q5",
    "prompt": "Quelle différence existe-t-il entre l’édition de liens statique et dynamique ?",
    "skills": [
      "a-comp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Statique : l’exécutable est chiffré ; dynamique : l’exécutable est compressé pour le transport"
      },
      {
        "id": "b",
        "text": "Statique : les bibliothèques sont copiées dans l’exécutable ; dynamique : elles sont chargées à l’exécution"
      },
      {
        "id": "c",
        "text": "Statique : les bibliothèques sont chargées à l’exécution ; dynamique : elles sont copiées dans l’exécutable"
      },
      {
        "id": "d",
        "text": "Il n’y a aucune différence, ce sont deux noms pour la même opération"
      }
    ]
  },
  {
    "id": "exec-q6",
    "prompt": "Quelles affirmations sur les bibliothèques dynamiques (.so, .dll) sont exactes ?",
    "skills": [
      "a-comp"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Un programme peut être détourné s’il charge une version non prévue"
      },
      {
        "id": "b",
        "text": "Elles peuvent être corrigées sans recompiler le programme"
      },
      {
        "id": "c",
        "text": "Elles ne sont jamais chargées pendant l’exécution"
      },
      {
        "id": "d",
        "text": "Elles sont toujours intégrées dans le fichier exécutable"
      },
      {
        "id": "e",
        "text": "Elles sont partagées entre plusieurs programmes"
      }
    ]
  },
  {
    "id": "exec-q7",
    "prompt": "Comment appelle-t-on le fichier produit par l’assembleur avant l’édition de liens ? (deux mots)",
    "skills": [
      "a-comp"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "exec-q8",
    "prompt": "Retirer les symboles de débogage d’un exécutable (opération « strip ») rend son analyse plus difficile sans changer son comportement.",
    "skills": [
      "a-comp",
      "a-obs"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "exec-q9",
    "prompt": "Quel format d’exécutable est utilisé par la plupart des systèmes Linux ?",
    "skills": [
      "a-fmt"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "PE"
      },
      {
        "id": "b",
        "text": "APK"
      },
      {
        "id": "c",
        "text": "ELF"
      },
      {
        "id": "d",
        "text": "Mach-O"
      }
    ]
  },
  {
    "id": "exec-q10",
    "prompt": "Un fichier commence par les octets 7F 45 4C 46 (« .ELF »). Quel est son format ?",
    "skills": [
      "a-fmt"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une archive compressée de type ZIP, sans code exécutable"
      },
      {
        "id": "b",
        "text": "Un exécutable ou une bibliothèque au format ELF"
      },
      {
        "id": "c",
        "text": "Une image au format PNG, sans code exécutable"
      },
      {
        "id": "d",
        "text": "Un exécutable Windows au format PE (début « MZ »)"
      }
    ]
  },
  {
    "id": "exec-q11",
    "prompt": "Dans un exécutable, quelle section contient en général le code, c’est-à-dire les instructions ?",
    "skills": [
      "a-fmt"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": ".text"
      },
      {
        "id": "b",
        "text": ".bss"
      },
      {
        "id": "c",
        "text": ".rodata"
      },
      {
        "id": "d",
        "text": ".data"
      }
    ]
  },
  {
    "id": "exec-q12",
    "prompt": "Que contient la table des imports d’un exécutable Windows ?",
    "skills": [
      "a-fmt",
      "a-obs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les adresses IP que le programme contactera plus tard sur le réseau"
      },
      {
        "id": "b",
        "text": "L’historique des versions successives du programme"
      },
      {
        "id": "c",
        "text": "La liste des mots de passe et des clés que le programme connaît"
      },
      {
        "id": "d",
        "text": "La liste des fonctions de bibliothèques que le programme utilise"
      }
    ]
  },
  {
    "id": "exec-q13",
    "prompt": "La lecture de la table des imports peut donner une première idée des capacités d’un programme inconnu.",
    "skills": [
      "a-fmt",
      "a-obs"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "exec-q14",
    "prompt": "Quel composant du système lit l’exécutable, place ses segments en mémoire et charge les bibliothèques nécessaires ?",
    "skills": [
      "a-fmt"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le planificateur de tâches"
      },
      {
        "id": "b",
        "text": "Le pare-feu"
      },
      {
        "id": "c",
        "text": "Le chargeur (loader)"
      },
      {
        "id": "d",
        "text": "Le compilateur"
      }
    ]
  },
  {
    "id": "exec-q15",
    "prompt": "Quels éléments peuvent être détournés pour faire charger du code inattendu par un programme légitime ?",
    "skills": [
      "a-fmt"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La variable LD_PRELOAD sous Linux"
      },
      {
        "id": "b",
        "text": "Le fond d’écran de l’utilisateur"
      },
      {
        "id": "c",
        "text": "La résolution de l’écran de la machine"
      },
      {
        "id": "d",
        "text": "L’ordre de recherche des DLL sous Windows"
      }
    ]
  },
  {
    "id": "exec-q16",
    "prompt": "Un programme Windows légitime charge une DLL en cherchant d’abord dans son propre dossier, avant le dossier système. Expliquez le risque de détournement de DLL et proposez deux mesures.",
    "skills": [
      "a-fmt",
      "a-comp"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "exec-q17",
    "prompt": "Où sont stockées les variables locales d’une fonction et son adresse de retour ?",
    "skills": [
      "a-mem"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Dans le tas (heap)"
      },
      {
        "id": "b",
        "text": "Sur la pile (stack)"
      },
      {
        "id": "c",
        "text": "Dans la section .text"
      },
      {
        "id": "d",
        "text": "Sur le disque de stockage"
      }
    ]
  },
  {
    "id": "exec-q18",
    "prompt": "Qu’est-ce qu’un débordement de tampon ?",
    "skills": [
      "a-mem"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Écrire plus de données que la zone prévue, en écrasant ce qui la suit"
      },
      {
        "id": "b",
        "text": "Remplir le disque jusqu’à la saturation complète de tout son espace libre disponible"
      },
      {
        "id": "c",
        "text": "Envoyer trop de paquets vers un serveur jusqu’à le saturer"
      },
      {
        "id": "d",
        "text": "Ouvrir un nombre excessif de fichiers au même moment"
      }
    ]
  },
  {
    "id": "exec-q19",
    "prompt": "Dans le code fourni avec la question, quel est le risque si la saisie dépasse 15 caractères ?",
    "skills": [
      "a-mem"
    ],
    "difficulty": 2,
    "context": {
      "lang": "c",
      "code": "void saluer(const char *saisie) {\n    char nom[16];\n    strcpy(nom, saisie);   /* copie sans contrôle de taille */\n    printf(\"Bonjour %s\\n\", nom);\n}"
    },
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Aucun risque, strcpy tronque automatiquement la saisie trop longue"
      },
      {
        "id": "b",
        "text": "Un blocage du réseau local de l’entreprise"
      },
      {
        "id": "c",
        "text": "Une erreur de syntaxe détectée par le navigateur"
      },
      {
        "id": "d",
        "text": "Un débordement de tampon qui écrase des données voisines"
      }
    ]
  },
  {
    "id": "exec-q20",
    "prompt": "Écraser l’adresse de retour d’une fonction n’a aucun effet sur le flot d’exécution du programme.",
    "skills": [
      "a-mem"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "exec-q21",
    "prompt": "Qu’est-ce qu’une erreur « use-after-free » ?",
    "skills": [
      "a-mem"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Libérer deux fois le même fichier ouvert"
      },
      {
        "id": "b",
        "text": "Utiliser une bibliothèque sans disposer de sa licence"
      },
      {
        "id": "c",
        "text": "Utiliser une zone du tas après l’avoir libérée"
      },
      {
        "id": "d",
        "text": "Quitter un programme sans enregistrer son travail"
      }
    ]
  },
  {
    "id": "exec-q22",
    "prompt": "Comment appelle-t-on la zone mémoire gérée dynamiquement (malloc, new), par opposition à la pile ? (un mot)",
    "skills": [
      "a-mem"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "exec-q23",
    "prompt": "Quelles situations de code C peuvent provoquer une corruption mémoire ?",
    "skills": [
      "a-mem"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Utiliser un pointeur après avoir libéré la zone"
      },
      {
        "id": "b",
        "text": "Activer l’option de débogage du compilateur"
      },
      {
        "id": "c",
        "text": "Copier une saisie dans un tampon sans vérifier sa taille"
      },
      {
        "id": "d",
        "text": "Utiliser un langage qui vérifie automatiquement les bornes"
      }
    ]
  },
  {
    "id": "exec-q24",
    "prompt": "Pourquoi les erreurs de gestion de la mémoire sont-elles fréquentes dans les programmes en C et C++ ?",
    "skills": [
      "a-mem",
      "a-prot"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le programmeur gère lui-même la mémoire, sans vérification automatique des bornes"
      },
      {
        "id": "b",
        "text": "Ces langages ne fonctionnent qu’avec des processeurs anciens"
      },
      {
        "id": "c",
        "text": "Ces langages interdisent l’usage de la pile et du tas"
      },
      {
        "id": "d",
        "text": "Ces langages sont interprétés, donc moins fiables et plus lents que les autres langages courants"
      }
    ]
  },
  {
    "id": "exec-q25",
    "prompt": "Qu’est-ce qu’un canari de pile (stack canary) ?",
    "skills": [
      "a-prot"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un mot de passe conservé dans un registre du processeur et vérifié au démarrage"
      },
      {
        "id": "b",
        "text": "Un programme qui surveille les connexions réseau sortantes de la machine hôte"
      },
      {
        "id": "c",
        "text": "Un journal qui consigne chaque appel système du processus et l’envoie à l’administrateur"
      },
      {
        "id": "d",
        "text": "Une valeur placée avant l’adresse de retour, vérifiée avant la sortie de la fonction"
      }
    ]
  },
  {
    "id": "exec-q26",
    "prompt": "Contre quel type d’attaque la protection NX (ou DEP) apporte-t-elle une défense ?",
    "skills": [
      "a-prot"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La saturation d’un serveur par des requêtes"
      },
      {
        "id": "b",
        "text": "L’exécution de code injecté dans la pile ou le tas"
      },
      {
        "id": "c",
        "text": "Le vol de mots de passe par un courrier d’hameçonnage"
      },
      {
        "id": "d",
        "text": "L’écoute d’un trafic réseau non chiffré"
      }
    ]
  },
  {
    "id": "exec-q27",
    "prompt": "L’ASLR complique l’exploitation d’une corruption mémoire car les adresses changent à chaque lancement du programme.",
    "skills": [
      "a-prot"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "exec-q28",
    "prompt": "Un attaquant contourne NX en enchaînant des fragments de code déjà présents en mémoire. Comment nomme-t-on cette technique ?",
    "skills": [
      "a-prot"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La programmation orientée retour (ROP)"
      },
      {
        "id": "b",
        "text": "Le hameçonnage ciblé"
      },
      {
        "id": "c",
        "text": "L’injection SQL"
      },
      {
        "id": "d",
        "text": "Le déni de service distribué par des machines infectées"
      }
    ]
  },
  {
    "id": "exec-q29",
    "prompt": "Quelles protections d’exécution réduisent l’exploitation des corruptions mémoire ?",
    "skills": [
      "a-prot"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "NX ou DEP"
      },
      {
        "id": "b",
        "text": "Un filtre antispam du courrier"
      },
      {
        "id": "c",
        "text": "ASLR"
      },
      {
        "id": "d",
        "text": "Un écran de veille verrouillé"
      },
      {
        "id": "e",
        "text": "Le canari de pile"
      }
    ]
  },
  {
    "id": "exec-q30",
    "prompt": "Lequel de ces langages vérifie par conception les accès mémoire (hors code explicitement non sûr) ?",
    "skills": [
      "a-prot"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "C"
      },
      {
        "id": "b",
        "text": "C++"
      },
      {
        "id": "c",
        "text": "Rust"
      },
      {
        "id": "d",
        "text": "Assembleur"
      }
    ]
  },
  {
    "id": "exec-q31",
    "prompt": "Un programme écrit dans un langage à mémoire sûre ne peut plus contenir aucune vulnérabilité.",
    "skills": [
      "a-prot"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "exec-q32",
    "prompt": "Une équipe maintient un service en C exposé sur Internet. Proposez un plan de réduction des risques liés à la mémoire.",
    "skills": [
      "a-prot",
      "a-mem"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "exec-q33",
    "prompt": "Que fait la commande `strings` appliquée à un fichier binaire ?",
    "skills": [
      "a-obs"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle exécute le programme dans un bac à sable isolé et trace ses actions"
      },
      {
        "id": "b",
        "text": "Elle extrait les suites de caractères lisibles qu’il contient"
      },
      {
        "id": "c",
        "text": "Elle supprime les symboles de débogage du fichier"
      },
      {
        "id": "d",
        "text": "Elle recompile le programme avec les mêmes options"
      }
    ]
  },
  {
    "id": "exec-q34",
    "prompt": "Qu’appelle-t-on analyse statique d’un programme ?",
    "skills": [
      "a-obs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’exécuter dans un environnement surveillé"
      },
      {
        "id": "b",
        "text": "Le comparer à sa version précédente"
      },
      {
        "id": "c",
        "text": "Le recompiler avec de nouvelles options"
      },
      {
        "id": "d",
        "text": "L’étudier sans l’exécuter"
      }
    ]
  },
  {
    "id": "exec-q35",
    "prompt": "Qu’appelle-t-on analyse dynamique d’un programme ?",
    "skills": [
      "a-obs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Vérifier uniquement sa signature numérique"
      },
      {
        "id": "b",
        "text": "Comparer son empreinte à une liste de fichiers sains"
      },
      {
        "id": "c",
        "text": "Ne lire que les chaînes de caractères qu’il contient, sans le lancer"
      },
      {
        "id": "d",
        "text": "L’observer pendant son exécution dans un environnement contrôlé"
      }
    ]
  },
  {
    "id": "exec-q36",
    "prompt": "Un programme « packé » (compressé ou chiffré par un packer) présente souvent peu de chaînes lisibles et une entropie élevée.",
    "skills": [
      "a-obs"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "exec-q37",
    "prompt": "Quel outil Linux trace les appels système effectués par un processus ?",
    "skills": [
      "a-obs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "chmod"
      },
      {
        "id": "b",
        "text": "strace"
      },
      {
        "id": "c",
        "text": "tar"
      },
      {
        "id": "d",
        "text": "ping"
      }
    ]
  },
  {
    "id": "exec-q38",
    "prompt": "Comment appelle-t-on les premiers octets qui indiquent le format d’un fichier (par exemple MZ ou 7F ELF) ? (deux mots)",
    "skills": [
      "a-obs",
      "a-fmt"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "exec-q39",
    "prompt": "Quelles précautions s’imposent pour exécuter un programme inconnu à des fins d’analyse ?",
    "skills": [
      "a-obs"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Couper ou contrôler strictement l’accès au réseau"
      },
      {
        "id": "b",
        "text": "L’exécuter sur son poste de travail habituel"
      },
      {
        "id": "c",
        "text": "Prendre un instantané avant l’exécution"
      },
      {
        "id": "d",
        "text": "Utiliser une machine virtuelle jetable"
      },
      {
        "id": "e",
        "text": "L’exécuter avec le compte administrateur du domaine"
      }
    ]
  },
  {
    "id": "exec-q40",
    "prompt": "Vous recevez un exécutable suspect. Décrivez les premières étapes d’une analyse statique puis dynamique, et ce que vous espérez en apprendre.",
    "skills": [
      "a-obs",
      "a-fmt"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
