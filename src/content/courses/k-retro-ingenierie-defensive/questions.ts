// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "rid-q1",
    "prompt": "Quels formats de binaires exécutables correspondent respectivement à Windows et à Linux ?",
    "skills": [
      "k-binaires"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "ZIP (Windows) et TAR (Linux)"
      },
      {
        "id": "b",
        "text": "PDF (Windows) et DOC (Linux)"
      },
      {
        "id": "c",
        "text": "ELF (Windows) et PE (Linux)"
      },
      {
        "id": "d",
        "text": "PE (Windows) et ELF (Linux)"
      }
    ]
  },
  {
    "id": "rid-q2",
    "prompt": "Qu’indique la table des imports d’un binaire ?",
    "skills": [
      "k-binaires"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La liste des utilisateurs du système"
      },
      {
        "id": "b",
        "text": "Le mot de passe protégeant le fichier"
      },
      {
        "id": "c",
        "text": "Les fonctions externes qu’il appelle"
      },
      {
        "id": "d",
        "text": "La vitesse du processeur de l’analyste"
      }
    ]
  },
  {
    "id": "rid-q3",
    "prompt": "Lire la structure d’un binaire (sections, imports) fait partie de l’analyse statique et ne nécessite pas de l’exécuter.",
    "skills": [
      "k-binaires"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rid-q4",
    "prompt": "Quels éléments de structure d’un binaire sont des signaux à examiner ?",
    "skills": [
      "k-binaires"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La présence d’un en-tête standard conforme au format"
      },
      {
        "id": "b",
        "text": "Un point d’entrée dans une section inhabituelle"
      },
      {
        "id": "c",
        "text": "Une section à la fois inscriptible et exécutable"
      },
      {
        "id": "d",
        "text": "Un contenu à très forte entropie (apparence aléatoire)"
      }
    ]
  },
  {
    "id": "rid-q31",
    "prompt": "Qu’évoque une section de binaire à la fois inscriptible et exécutable ?",
    "skills": [
      "k-binaires"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un fichier de configuration"
      },
      {
        "id": "b",
        "text": "Un code modifié à l’exécution"
      },
      {
        "id": "c",
        "text": "Une image intégrée"
      },
      {
        "id": "d",
        "text": "Un simple commentaire"
      }
    ]
  },
  {
    "id": "rid-q32",
    "prompt": "Quelle chaîne ASCII suit l’octet 0x7F au début d’un fichier ELF ?",
    "skills": [
      "k-binaires"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "trois lettres"
  },
  {
    "id": "rid-q5",
    "prompt": "Que produit le désassemblage ?",
    "skills": [
      "k-desassemblage-debogage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une représentation en assembleur"
      },
      {
        "id": "b",
        "text": "Un fichier chiffré du programme"
      },
      {
        "id": "c",
        "text": "Le code source d’origine exact"
      },
      {
        "id": "d",
        "text": "Une image du programme"
      }
    ]
  },
  {
    "id": "rid-q6",
    "prompt": "Le désassemblage permet de retrouver exactement le code source d’origine du programme.",
    "skills": [
      "k-desassemblage-debogage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rid-q7",
    "prompt": "Pourquoi le débogage complète-t-il souvent le désassemblage pour un maliciel empaqueté ?",
    "skills": [
      "k-desassemblage-debogage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le vrai code se révèle à l’exécution"
      },
      {
        "id": "b",
        "text": "Le débogage supprime le maliciel"
      },
      {
        "id": "c",
        "text": "Le désassemblage est interdit"
      },
      {
        "id": "d",
        "text": "Le débogage accélère le maliciel"
      }
    ]
  },
  {
    "id": "rid-q8",
    "prompt": "Déboguer un maliciel revient à l’exécuter : cela ne se fait que dans un environnement isolé, jamais sur un poste de travail.",
    "skills": [
      "k-desassemblage-debogage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rid-q33",
    "prompt": "À quoi sert un point d’arrêt ?",
    "skills": [
      "k-desassemblage-debogage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À chiffrer la mémoire"
      },
      {
        "id": "b",
        "text": "À supprimer une instruction"
      },
      {
        "id": "c",
        "text": "À interrompre pour examiner"
      },
      {
        "id": "d",
        "text": "À accélérer le programme"
      }
    ]
  },
  {
    "id": "rid-q34",
    "prompt": "Le pseudo-code produit par une décompilation est une approximation, non le code source d’origine.",
    "skills": [
      "k-desassemblage-debogage",
      "k-outils-re"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rid-q35",
    "prompt": "Pourquoi alterner analyse statique et dynamique en rétro-ingénierie ?",
    "skills": [
      "k-desassemblage-debogage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour éviter l’isolement"
      },
      {
        "id": "b",
        "text": "Parce que l’une est inutile"
      },
      {
        "id": "c",
        "text": "Pour retarder l’analyse"
      },
      {
        "id": "d",
        "text": "Elles se complètent"
      }
    ]
  },
  {
    "id": "rid-q9",
    "prompt": "Citez un débogueur libre couramment utilisé pour l’analyse dynamique de binaires Windows.",
    "skills": [
      "k-outils-re"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom de l’outil"
  },
  {
    "id": "rid-q10",
    "prompt": "Quelles affirmations sur les outils de rétro-ingénierie sont exactes ?",
    "skills": [
      "k-outils-re"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Ghidra est un désassembleur/décompilateur libre"
      },
      {
        "id": "b",
        "text": "x64dbg sert à l’analyse dynamique pas à pas"
      },
      {
        "id": "c",
        "text": "Ces outils sont par nature malveillants et interdits"
      },
      {
        "id": "d",
        "text": "IDA est une référence (commerciale) de l’analyse statique"
      }
    ]
  },
  {
    "id": "rid-q11",
    "prompt": "Comment appelle-t-on l’étape, au-dessus du désassemblage, qui reconstruit une approximation en pseudo-code de haut niveau ?",
    "skills": [
      "k-outils-re"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "déc…"
  },
  {
    "id": "rid-q36",
    "prompt": "Quel outil de rétro-ingénierie est libre et publié par la NSA ?",
    "skills": [
      "k-outils-re"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Wireshark"
      },
      {
        "id": "b",
        "text": "Ghidra"
      },
      {
        "id": "c",
        "text": "IDA"
      },
      {
        "id": "d",
        "text": "x64dbg"
      }
    ]
  },
  {
    "id": "rid-q37",
    "prompt": "Quelles fonctions d’un débogueur servent à observer un binaire empaqueté ?",
    "skills": [
      "k-outils-re",
      "k-desassemblage-debogage"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "L’exécution pas à pas"
      },
      {
        "id": "b",
        "text": "La réécriture du code source d’origine"
      },
      {
        "id": "c",
        "text": "Les points d’arrêt"
      },
      {
        "id": "d",
        "text": "La lecture de la mémoire et des registres"
      }
    ]
  },
  {
    "id": "rid-q12",
    "prompt": "Pourquoi un bootkit est-il difficile à détecter par les outils classiques ?",
    "skills": [
      "k-familles"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il s’exécute avant le système"
      },
      {
        "id": "b",
        "text": "Il ne s’exécute jamais"
      },
      {
        "id": "c",
        "text": "Il est trop volumineux"
      },
      {
        "id": "d",
        "text": "Il est écrit dans un langage secret"
      }
    ]
  },
  {
    "id": "rid-q13",
    "prompt": "Quelle mesure matérielle aide le plus à contrer un bootkit ?",
    "skills": [
      "k-familles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un écran plus grand"
      },
      {
        "id": "b",
        "text": "Secure Boot et TPM"
      },
      {
        "id": "c",
        "text": "La désactivation du pare-feu"
      },
      {
        "id": "d",
        "text": "Un mot de passe de session plus long"
      }
    ]
  },
  {
    "id": "rid-q14",
    "prompt": "Quelles mesures réduisent le risque lié aux keyloggers ?",
    "skills": [
      "k-familles"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La surveillance des processus"
      },
      {
        "id": "b",
        "text": "Un EDR qui détecte l’accès au clavier et la persistance"
      },
      {
        "id": "c",
        "text": "La MFA, qui limite la valeur d’un mot de passe volé"
      },
      {
        "id": "d",
        "text": "Partager son mot de passe avec un collègue"
      }
    ]
  },
  {
    "id": "rid-q15",
    "prompt": "Expliquez pourquoi, pour se défendre d’un bootkit ou d’un keylogger, on étudie leur fonctionnement et on analyse les échantillons capturés, plutôt que de chercher à les reproduire.",
    "skills": [
      "k-familles",
      "k-binaires"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "rid-q16",
    "prompt": "Décrivez une démarche d’analyse d’un échantillon empaqueté combinant analyse statique et dynamique, en précisant les outils et les précautions.",
    "skills": [
      "k-desassemblage-debogage",
      "k-outils-re"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "rid-q38",
    "prompt": "Un keylogger se détecte uniquement grâce à la signature d’un antivirus.",
    "skills": [
      "k-familles"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rid-q39",
    "prompt": "Que vérifie Secure Boot au démarrage ?",
    "skills": [
      "k-familles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le nombre de fichiers utilisateur"
      },
      {
        "id": "b",
        "text": "La durée de la batterie"
      },
      {
        "id": "c",
        "text": "La vitesse du disque"
      },
      {
        "id": "d",
        "text": "La signature du démarrage"
      }
    ]
  },
  {
    "id": "rid-q40",
    "prompt": "Quelle mesure réduit le plus la valeur d’un mot de passe capturé par un keylogger ?",
    "skills": [
      "k-familles"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un écran de veille plus court"
      },
      {
        "id": "b",
        "text": "Un fond d’écran sécurisé"
      },
      {
        "id": "c",
        "text": "L’authentification multifacteur"
      },
      {
        "id": "d",
        "text": "Un clavier plus ergonomique"
      }
    ]
  },
  {
    "id": "rid-q17",
    "prompt": "Qu’est-ce que l’obfuscation d’un programme ?",
    "skills": [
      "k-obfuscation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le sauvegarder"
      },
      {
        "id": "b",
        "text": "Le rendre plus rapide"
      },
      {
        "id": "c",
        "text": "Le signer"
      },
      {
        "id": "d",
        "text": "Brouiller son code"
      }
    ]
  },
  {
    "id": "rid-q18",
    "prompt": "Un binaire ne contient presque aucune chaîne lisible. Que peut-on suspecter ?",
    "skills": [
      "k-obfuscation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un chiffrement des chaînes"
      },
      {
        "id": "b",
        "text": "Un document bureautique"
      },
      {
        "id": "c",
        "text": "Une erreur de lecture"
      },
      {
        "id": "d",
        "text": "Un fichier vide"
      }
    ]
  },
  {
    "id": "rid-q19",
    "prompt": "La résolution dynamique des fonctions à l’exécution peut expliquer une table d’imports très pauvre.",
    "skills": [
      "k-obfuscation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rid-q20",
    "prompt": "Quelles techniques d’obfuscation gênent l’analyse statique ?",
    "skills": [
      "k-obfuscation"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La résolution dynamique des fonctions"
      },
      {
        "id": "b",
        "text": "Le flot de contrôle volontairement compliqué"
      },
      {
        "id": "c",
        "text": "Une signature numérique valide d’un éditeur reconnu"
      },
      {
        "id": "d",
        "text": "Le chiffrement des chaînes"
      }
    ]
  },
  {
    "id": "rid-q21",
    "prompt": "Comment appelle-t-on la technique par laquelle un maliciel détecte la présence d’un débogueur ?",
    "skills": [
      "k-obfuscation"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un terme"
  },
  {
    "id": "rid-q22",
    "prompt": "Un échantillon s’arrête dès qu’il détecte un débogueur. Quelle approche défensive est raisonnable ?",
    "skills": [
      "k-obfuscation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’exécuter sur un poste de production"
      },
      {
        "id": "b",
        "text": "Abandonner toute analyse"
      },
      {
        "id": "c",
        "text": "Étudier le test ou observer autrement"
      },
      {
        "id": "d",
        "text": "Désactiver l’isolement"
      }
    ]
  },
  {
    "id": "rid-q23",
    "prompt": "Pourquoi réalise-t-on un instantané de la mémoire après le dépaquetage ?",
    "skills": [
      "k-obfuscation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour effacer la mémoire"
      },
      {
        "id": "b",
        "text": "Pour obtenir le code déchiffré"
      },
      {
        "id": "c",
        "text": "Pour signer le code"
      },
      {
        "id": "d",
        "text": "Pour accélérer le maliciel"
      }
    ]
  },
  {
    "id": "rid-q24",
    "prompt": "Que contient typiquement la configuration d’un malware ?",
    "skills": [
      "k-re-detection"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Domaines, clés, identifiants"
      },
      {
        "id": "b",
        "text": "La liste des sauvegardes"
      },
      {
        "id": "c",
        "text": "Le prix du logiciel"
      },
      {
        "id": "d",
        "text": "La couleur de l’interface"
      }
    ]
  },
  {
    "id": "rid-q25",
    "prompt": "À quoi sert le rattachement des capacités observées à MITRE ATT&CK ?",
    "skills": [
      "k-re-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À supprimer les journaux"
      },
      {
        "id": "b",
        "text": "À le déployer plus vite"
      },
      {
        "id": "c",
        "text": "À rendre l’échantillon plus discret"
      },
      {
        "id": "d",
        "text": "À repérer les détections manquantes"
      }
    ]
  },
  {
    "id": "rid-q26",
    "prompt": "Une règle YARA fondée sur le code empaqueté détecte aussi toujours la version dépaquetée.",
    "skills": [
      "k-re-detection"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rid-q27",
    "prompt": "Que contient un rapport de rétro-ingénierie défensif ?",
    "skills": [
      "k-re-detection"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le code armé complet en clair"
      },
      {
        "id": "b",
        "text": "Les indicateurs datés et les règles de détection"
      },
      {
        "id": "c",
        "text": "Les limites et les hypothèses"
      },
      {
        "id": "d",
        "text": "Les capacités et la configuration extraite"
      }
    ]
  },
  {
    "id": "rid-q28",
    "prompt": "Dans quel cadre l’analyse d’un échantillon est-elle légitime ?",
    "skills": [
      "k-re-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une revente d’échantillons"
      },
      {
        "id": "b",
        "text": "Une simple curiosité"
      },
      {
        "id": "c",
        "text": "Une mission défensive documentée"
      },
      {
        "id": "d",
        "text": "Un test sur le réseau d’un tiers"
      }
    ]
  },
  {
    "id": "rid-q29",
    "prompt": "Quel langage de règles décrit une famille de fichiers à partir de chaînes, d’octets et de conditions ?",
    "skills": [
      "k-re-detection"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "nom du langage"
  },
  {
    "id": "rid-q30",
    "prompt": "Pourquoi cibler une routine de déchiffrement plutôt qu’une chaîne claire pour une règle de détection ?",
    "skills": [
      "k-re-detection"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle est plus courte"
      },
      {
        "id": "b",
        "text": "Elle est plus stable"
      },
      {
        "id": "c",
        "text": "Elle est toujours lisible"
      },
      {
        "id": "d",
        "text": "Elle évite de tester la règle"
      }
    ]
  }
];
