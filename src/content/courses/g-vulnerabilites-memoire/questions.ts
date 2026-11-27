// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "mem-q41",
    "prompt": "Pourquoi un débordement de tampon sur la pile peut-il aller au-delà d’un simple plantage ?",
    "skills": [
      "g-mem-layout"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il efface automatiquement tous les fichiers du disque dur de la machine"
      },
      {
        "id": "b",
        "text": "Il augmente seulement la consommation de mémoire du programme concerné"
      },
      {
        "id": "c",
        "text": "Il peut écraser l’adresse de retour et détourner l’exécution du programme"
      },
      {
        "id": "d",
        "text": "Il désactive le système d’exploitation de la machine pendant une heure"
      }
    ]
  },
  {
    "id": "mem-q2",
    "prompt": "La mémoire allouée par malloc doit être libérée explicitement par le programmeur.",
    "skills": [
      "g-mem-layout"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "mem-q3",
    "prompt": "Quelle donnée de la pile un débordement de tampon cherche-t-il typiquement à écraser pour détourner l’exécution ? (trois mots)",
    "skills": [
      "g-mem-layout",
      "g-mem-vulns"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "trois mots"
  },
  {
    "id": "mem-q4",
    "prompt": "Quelle vulnérabilité contient `printf(buffer_utilisateur);` ?",
    "skills": [
      "g-mem-vulns"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un use-after-free sur le tampon de saisie"
      },
      {
        "id": "b",
        "text": "Une injection SQL dans la chaîne affichée"
      },
      {
        "id": "c",
        "text": "Un dépassement d’entier dans la longueur"
      },
      {
        "id": "d",
        "text": "Une chaîne de format non maîtrisée"
      }
    ]
  },
  {
    "id": "mem-q5",
    "prompt": "`char *p = malloc(n * 16);` avec `n` fourni par l’utilisateur, suivi d’une boucle écrivant `n` blocs de 16 octets. Quel est le risque principal ?",
    "skills": [
      "g-mem-vulns"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une fuite de descripteur de fichier dans la boucle"
      },
      {
        "id": "b",
        "text": "Un dépassement d’entier, puis un débordement de tas"
      },
      {
        "id": "c",
        "text": "Aucun, car malloc vérifie lui-même la taille demandée"
      },
      {
        "id": "d",
        "text": "Une chaîne de format dans l’appel à malloc"
      }
    ]
  },
  {
    "id": "mem-q6",
    "prompt": "Lesquelles de ces fonctions C sont à proscrire ou à surveiller particulièrement en revue de code ?",
    "skills": [
      "g-mem-vulns"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`gets`"
      },
      {
        "id": "b",
        "text": "`strcpy`"
      },
      {
        "id": "c",
        "text": "`sprintf`"
      },
      {
        "id": "d",
        "text": "`snprintf` avec `sizeof` de la destination"
      }
    ]
  },
  {
    "id": "mem-q7",
    "prompt": "Utiliser un pointeur après l’avoir passé à free est sans danger tant que le programme ne plante pas.",
    "skills": [
      "g-mem-vulns"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mem-q8",
    "prompt": "Quelle protection rend la pile et le tas non exécutables ?",
    "skills": [
      "g-mem-protect"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "NX / DEP"
      },
      {
        "id": "b",
        "text": "Le canari de pile"
      },
      {
        "id": "c",
        "text": "ASLR"
      },
      {
        "id": "d",
        "text": "FORTIFY_SOURCE"
      }
    ]
  },
  {
    "id": "mem-q9",
    "prompt": "Quel sigle désigne la randomisation des adresses mémoire à chaque exécution ?",
    "skills": [
      "g-mem-protect"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "mem-q10",
    "prompt": "Un binaire protégé par canari, NX et ASLR n’a plus besoin d’être corrigé en cas de débordement de pile.",
    "skills": [
      "g-mem-protect"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "mem-q11",
    "prompt": "Comment un attaquant tente-t-il généralement de contourner NX et ASLR ?",
    "skills": [
      "g-mem-protect"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "En exploitant une fuite d’information révélant des adresses"
      },
      {
        "id": "b",
        "text": "En ciblant un module chargé à adresse fixe (sans PIE)"
      },
      {
        "id": "c",
        "text": "En désactivant l’ASLR à distance par une requête HTTP"
      },
      {
        "id": "d",
        "text": "En réutilisant du code existant (ROP)"
      }
    ]
  },
  {
    "id": "mem-q12",
    "prompt": "Quel outil détecte, pendant l’exécution des tests, les débordements et use-after-free ?",
    "skills": [
      "g-secure-code"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "AddressSanitizer (ASan)"
      },
      {
        "id": "b",
        "text": "Un antivirus sur le poste"
      },
      {
        "id": "c",
        "text": "Un pare-feu applicatif"
      },
      {
        "id": "d",
        "text": "L’utilitaire de compression gzip"
      }
    ]
  },
  {
    "id": "mem-q13",
    "prompt": "Quelle option de GCC active l’avertissement sur les appels printf dont le format n’est pas littéral ? (option -W…)",
    "skills": [
      "g-secure-code"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "-W…"
  },
  {
    "id": "mem-q14",
    "prompt": "Expliquez à un développeur pourquoi remplacer `strcpy(dst, src)` par `strncpy(dst, src, sizeof dst)` n’est pas une correction complète et proposez une meilleure solution.",
    "skills": [
      "g-mem-vulns",
      "g-secure-code"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "mem-q15",
    "prompt": "Vous êtes responsable sécurité d’un projet C de 200 000 lignes exposé au réseau. Proposez un plan en cinq mesures pour réduire durablement le risque de vulnérabilités mémoire.",
    "skills": [
      "g-secure-code",
      "g-mem-protect"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "mem-q16",
    "prompt": "Quels langages offrent la sécurité mémoire par défaut (hors blocs explicitement non sûrs) ?",
    "skills": [
      "g-secure-code",
      "g-mem-layout"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "C"
      },
      {
        "id": "b",
        "text": "Java"
      },
      {
        "id": "c",
        "text": "Go"
      },
      {
        "id": "d",
        "text": "Rust"
      }
    ]
  },
  {
    "id": "mem-q17",
    "prompt": "Qu’est-ce qui est empilé sur la pile à chaque appel de fonction ?",
    "skills": [
      "g-mem-layout"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le code machine de la fonction qui vient d’être appelée"
      },
      {
        "id": "b",
        "text": "Toutes les allocations dynamiques faites par le programme"
      },
      {
        "id": "c",
        "text": "Les variables globales déclarées dans les autres fichiers"
      },
      {
        "id": "d",
        "text": "L’adresse de retour, des arguments et des variables"
      }
    ]
  },
  {
    "id": "mem-q18",
    "prompt": "La pile est gérée automatiquement : l’espace d’un cadre est libéré au retour de la fonction.",
    "skills": [
      "g-mem-layout"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "mem-q19",
    "prompt": "Quel segment d’un programme contient les variables globales non initialisées ? (sigle)",
    "skills": [
      "g-mem-layout"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "mem-q20",
    "prompt": "Qu’est-ce qu’un double free ?",
    "skills": [
      "g-mem-vulns"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Copier un tampon deux fois dans la même zone mémoire"
      },
      {
        "id": "b",
        "text": "Libérer deux fois la même zone"
      },
      {
        "id": "c",
        "text": "Allouer deux fois plus de mémoire que ce qui est demandé"
      },
      {
        "id": "d",
        "text": "Utiliser un pointeur après la fin de la fonction appelante"
      }
    ]
  },
  {
    "id": "mem-q21",
    "prompt": "Une lecture hors limites est sans danger, puisqu’elle ne modifie rien en mémoire.",
    "skills": [
      "g-mem-vulns"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mem-q22",
    "prompt": "Quel défaut est à l’origine de la fuite de mémoire de Heartbleed ?",
    "skills": [
      "g-mem-vulns"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un use-after-free dans la gestion des certificats du serveur"
      },
      {
        "id": "b",
        "text": "Un débordement de pile écrasant l’adresse de retour du serveur"
      },
      {
        "id": "c",
        "text": "Une lecture hors limites sur un message de maintien"
      },
      {
        "id": "d",
        "text": "Une chaîne de format dans le journal d’accès du serveur"
      }
    ]
  },
  {
    "id": "mem-q23",
    "prompt": "À quoi sert le canari de pile ?",
    "skills": [
      "g-mem-protect"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À randomiser l’adresse de base du programme à chaque exécution"
      },
      {
        "id": "b",
        "text": "À détecter l’écrasement de la pile avant le retour de la fonction"
      },
      {
        "id": "c",
        "text": "À rendre la pile non exécutable pour tous les processus"
      },
      {
        "id": "d",
        "text": "À chiffrer les variables locales avant leur stockage sur la pile"
      }
    ]
  },
  {
    "id": "mem-q24",
    "prompt": "Quelles options de compilation et d’édition de liens durcissent un binaire ?",
    "skills": [
      "g-mem-protect"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`-fno-stack-protector`"
      },
      {
        "id": "b",
        "text": "`-fPIE -pie`"
      },
      {
        "id": "c",
        "text": "`-O0` sans aucune autre option"
      },
      {
        "id": "d",
        "text": "`-fstack-protector-strong`"
      }
    ]
  },
  {
    "id": "mem-q25",
    "prompt": "Pourquoi le ROP permet-il de contourner NX ?",
    "skills": [
      "g-mem-protect"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il chiffre le code injecté pour que NX ne le reconnaisse pas"
      },
      {
        "id": "b",
        "text": "Il injecte du code dans la pile puis le marque exécutable"
      },
      {
        "id": "c",
        "text": "Il enchaîne des fragments de code existants, déjà exécutables"
      },
      {
        "id": "d",
        "text": "Il désactive la protection NX par un appel système privilégié"
      }
    ]
  },
  {
    "id": "mem-q26",
    "prompt": "Que détecte UBSan (UndefinedBehaviorSanitizer) ?",
    "skills": [
      "g-secure-code"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les accès réseau non autorisés par le pare-feu du serveur"
      },
      {
        "id": "b",
        "text": "Les dépendances logicielles dont une version est obsolète"
      },
      {
        "id": "c",
        "text": "Les mots de passe faibles stockés dans la configuration"
      },
      {
        "id": "d",
        "text": "Les comportements indéfinis, comme un dépassement signé"
      }
    ]
  },
  {
    "id": "mem-q27",
    "prompt": "Quelle technique génère massivement des entrées pour révéler des plantages d’un programme ? (un mot)",
    "skills": [
      "g-secure-code"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "mem-q28",
    "prompt": "Qu’est-ce qu’un débordement de tas ?",
    "skills": [
      "g-mem-tas"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une écriture au-delà d’un bloc alloué qui atteint ses voisins"
      },
      {
        "id": "b",
        "text": "Un bloc libéré dont le pointeur est ensuite conservé"
      },
      {
        "id": "c",
        "text": "Une pile qui grandit jusqu’à toucher la zone du tas"
      },
      {
        "id": "d",
        "text": "Une allocation qui échoue parce que la mémoire est épuisée"
      }
    ]
  },
  {
    "id": "mem-q29",
    "prompt": "Pourquoi un use-after-free peut-il devenir exploitable ?",
    "skills": [
      "g-mem-tas"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le système d’exploitation redémarre le programme avec des droits élevés"
      },
      {
        "id": "b",
        "text": "Le pointeur libéré est automatiquement remplacé par le noyau"
      },
      {
        "id": "c",
        "text": "La mémoire libérée est chiffrée avec une clé que l’attaquant choisit"
      },
      {
        "id": "d",
        "text": "La zone libérée peut être réallouée à un objet contrôlé par l’attaquant"
      }
    ]
  },
  {
    "id": "mem-q30",
    "prompt": "Mettre un pointeur à NULL après `free` ne protège pas contre les autres copies de ce pointeur restées valides ailleurs.",
    "skills": [
      "g-mem-tas"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mem-q31",
    "prompt": "En quoi consiste la pulvérisation du tas (heap spraying) ?",
    "skills": [
      "g-mem-tas"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Répartir les allocations sur plusieurs tas pour mieux équilibrer la charge"
      },
      {
        "id": "b",
        "text": "Remplir le tas d’objets pour placer des données contrôlées"
      },
      {
        "id": "c",
        "text": "Supprimer en une fois tous les blocs alloués pour libérer la mémoire"
      },
      {
        "id": "d",
        "text": "Chiffrer les blocs du tas avec une clé différente pour chacun"
      }
    ]
  },
  {
    "id": "mem-q32",
    "prompt": "Quelles pratiques réduisent les erreurs de gestion du tas ?",
    "skills": [
      "g-mem-tas"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Libérer une même zone depuis plusieurs fonctions sans coordination"
      },
      {
        "id": "b",
        "text": "Utiliser un allocateur durci quand c’est possible"
      },
      {
        "id": "c",
        "text": "Mettre le pointeur à NULL après sa libération"
      },
      {
        "id": "d",
        "text": "Une règle claire de propriété pour chaque allocation"
      }
    ]
  },
  {
    "id": "mem-q33",
    "prompt": "Quelle fonction alloue un tableau de `n` éléments en contrôlant le dépassement de la multiplication ?",
    "skills": [
      "g-mem-tas"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`realloc(NULL, n * taille)`"
      },
      {
        "id": "b",
        "text": "`malloc(n * taille)`"
      },
      {
        "id": "c",
        "text": "`calloc(n, taille)`"
      },
      {
        "id": "d",
        "text": "`alloca(n * taille)`"
      }
    ]
  },
  {
    "id": "mem-q34",
    "prompt": "Comment appelle-t-on l’interprétation d’une zone mémoire comme un type qu’elle n’est pas ? (deux mots)",
    "skills": [
      "g-mem-tas"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "mem-q35",
    "prompt": "Quel idiome de C++ libère automatiquement une ressource à la sortie de sa portée ?",
    "skills": [
      "g-mem-langages"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le RAII, par exemple avec `std::unique_ptr`"
      },
      {
        "id": "b",
        "text": "Le ramasse-miettes intégré au compilateur C++"
      },
      {
        "id": "c",
        "text": "L’opérateur `goto` placé en fin de fonction"
      },
      {
        "id": "d",
        "text": "La fonction `free` appelée par le système"
      }
    ]
  },
  {
    "id": "mem-q36",
    "prompt": "Rust garantit l’absence de toute vulnérabilité mémoire, y compris dans les blocs `unsafe`.",
    "skills": [
      "g-mem-langages"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mem-q37",
    "prompt": "En C++, quelle forme vérifie les limites de l’accès à un élément d’un `std::vector` ?",
    "skills": [
      "g-mem-langages"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`v.at(i)`"
      },
      {
        "id": "b",
        "text": "`v[i]`"
      },
      {
        "id": "c",
        "text": "`memcpy(&x, &v[i], 4)`"
      },
      {
        "id": "d",
        "text": "`*(v.data() + i)`"
      }
    ]
  },
  {
    "id": "mem-q38",
    "prompt": "Quelles pratiques de C++ moderne réduisent les erreurs mémoire ?",
    "skills": [
      "g-mem-langages"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Éviter les `new` et `delete` explicites"
      },
      {
        "id": "b",
        "text": "Utiliser `malloc` et `free` dans le nouveau code C++"
      },
      {
        "id": "c",
        "text": "Préférer `std::string` et `std::vector` aux tableaux bruts"
      },
      {
        "id": "d",
        "text": "Utiliser `std::unique_ptr` et `std::shared_ptr`"
      }
    ]
  },
  {
    "id": "mem-q39",
    "prompt": "Comment aborder la migration d’un grand projet C vers un langage sûr pour la mémoire ?",
    "skills": [
      "g-mem-langages"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "En attendant que le projet soit stable pour ne rien changer"
      },
      {
        "id": "b",
        "text": "Progressivement, par les composants les plus exposés"
      },
      {
        "id": "c",
        "text": "En réécrivant tout d’un seul coup avant toute nouvelle livraison"
      },
      {
        "id": "d",
        "text": "En désactivant les protections du compilateur pour gagner du temps"
      }
    ]
  },
  {
    "id": "mem-q40",
    "prompt": "Un composant C d’analyse de fichiers, exposé au réseau, a déjà produit plusieurs CVE de type débordement et use-after-free. Décrivez votre plan d’analyse des causes et de remédiation à court et à moyen terme.",
    "skills": [
      "g-mem-langages",
      "g-mem-tas"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
