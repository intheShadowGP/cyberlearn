// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "pra-q1",
    "prompt": "Dans quelle classe de défauts range-t-on une écriture au-delà de la fin d’un tableau ?",
    "skills": [
      "p-pra-classes"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les erreurs de saisie du mot de passe par l’utilisateur"
      },
      {
        "id": "b",
        "text": "Les erreurs de gestion de la mémoire"
      },
      {
        "id": "c",
        "text": "Les erreurs de mise en forme du texte affiché"
      },
      {
        "id": "d",
        "text": "Les erreurs de traduction des messages du programme"
      }
    ]
  },
  {
    "id": "pra-q2",
    "prompt": "Comment appelle-t-on le défaut qui survient quand on utilise de la mémoire après l’avoir libérée ?",
    "skills": [
      "p-pra-classes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une utilisation après libération"
      },
      {
        "id": "b",
        "text": "Une fuite de mémoire sans libération"
      },
      {
        "id": "c",
        "text": "Un débordement de la pile d’appels"
      },
      {
        "id": "d",
        "text": "Une collision entre noms de variables"
      }
    ]
  },
  {
    "id": "pra-q3",
    "prompt": "Quelle famille de défauts naît d’une donnée externe insérée sans contrôle dans une requête interprétée ?",
    "skills": [
      "p-pra-classes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les débordements de pile classiques"
      },
      {
        "id": "b",
        "text": "Les pannes matérielles imprévues"
      },
      {
        "id": "c",
        "text": "Les injections"
      },
      {
        "id": "d",
        "text": "Les fuites de mémoire lentes"
      }
    ]
  },
  {
    "id": "pra-q4",
    "prompt": "Pourquoi un calcul de taille mal protégé peut-il conduire à un débordement de tampon ?",
    "skills": [
      "p-pra-classes"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les entiers sont toujours stockés en clair"
      },
      {
        "id": "b",
        "text": "Le processeur chauffe et corrompt la mémoire"
      },
      {
        "id": "c",
        "text": "Le compilateur supprime la zone mémoire"
      },
      {
        "id": "d",
        "text": "La zone allouée devient trop petite"
      }
    ]
  },
  {
    "id": "pra-q5",
    "prompt": "Une entrée non validée est à l’origine d’un grand nombre de vulnérabilités.",
    "skills": [
      "p-pra-classes"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pra-q6",
    "prompt": "Une condition de concurrence ne peut jamais avoir d’impact sur la sécurité.",
    "skills": [
      "p-pra-classes"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pra-q7",
    "prompt": "Quel sigle de trois lettres désigne la liste publique des types de faiblesses logicielles (Common Weakness Enumeration) ?",
    "skills": [
      "p-pra-classes"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "trois lettres"
  },
  {
    "id": "pra-q8",
    "prompt": "Quelles données ne doivent jamais être crues sans contrôle ?",
    "skills": [
      "p-pra-classes"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les paramètres d’une requête réseau"
      },
      {
        "id": "b",
        "text": "Une constante définie dans le code du projet"
      },
      {
        "id": "c",
        "text": "Les champs d’un fichier reçu"
      },
      {
        "id": "d",
        "text": "La taille annoncée dans un en-tête"
      }
    ]
  },
  {
    "id": "pra-q9",
    "prompt": "À quoi sert un débogueur ?",
    "skills": [
      "p-pra-outils"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À suivre l’exécution d’un programme pas à pas"
      },
      {
        "id": "b",
        "text": "À accélérer la connexion à un serveur distant"
      },
      {
        "id": "c",
        "text": "À chiffrer les fichiers de configuration"
      },
      {
        "id": "d",
        "text": "À sauvegarder le code source sur un disque"
      }
    ]
  },
  {
    "id": "pra-q10",
    "prompt": "Que fait un sanitizer compilé dans un programme ?",
    "skills": [
      "p-pra-outils"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il supprime automatiquement les défauts du code"
      },
      {
        "id": "b",
        "text": "Il signale les erreurs dès qu’elles se produisent"
      },
      {
        "id": "c",
        "text": "Il chiffre les données manipulées par le programme"
      },
      {
        "id": "d",
        "text": "Il accélère nettement l’exécution du programme"
      }
    ]
  },
  {
    "id": "pra-q11",
    "prompt": "Pourquoi reproduire un plantage avant de chercher à le corriger ?",
    "skills": [
      "p-pra-outils"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour éviter de lire le code concerné"
      },
      {
        "id": "b",
        "text": "Pour remplacer la correction par un test"
      },
      {
        "id": "c",
        "text": "Pour le confirmer et en isoler la cause"
      },
      {
        "id": "d",
        "text": "Pour augmenter le nombre de plantages notés"
      }
    ]
  },
  {
    "id": "pra-q12",
    "prompt": "Quel avantage offre l’analyse statique du code ?",
    "skills": [
      "p-pra-outils"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle mesure la vitesse réelle de chaque requête"
      },
      {
        "id": "b",
        "text": "Elle ne trouve que des défauts liés au réseau"
      },
      {
        "id": "c",
        "text": "Elle remplace entièrement la revue humaine du code"
      },
      {
        "id": "d",
        "text": "Elle repère des motifs risqués sans exécution"
      }
    ]
  },
  {
    "id": "pra-q13",
    "prompt": "Un plantage reproductible est plus facile à corriger qu’un plantage sporadique.",
    "skills": [
      "p-pra-outils"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pra-q14",
    "prompt": "Quel sigle désigne le sanitizer qui détecte les comportements indéfinis du langage C ? (cinq lettres)",
    "skills": [
      "p-pra-outils"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "cinq lettres"
  },
  {
    "id": "pra-q15",
    "prompt": "Quelles informations aident à comprendre un plantage ?",
    "skills": [
      "p-pra-outils"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le fond d’écran du poste du testeur"
      },
      {
        "id": "b",
        "text": "L’entrée qui reproduit le plantage"
      },
      {
        "id": "c",
        "text": "La pile d’appels au moment de l’erreur"
      },
      {
        "id": "d",
        "text": "La version exacte du programme"
      }
    ]
  },
  {
    "id": "pra-q16",
    "prompt": "Un programme plante de temps en temps chez un client. Décrivez votre démarche pour trouver la cause.",
    "skills": [
      "p-pra-outils"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "pra-q17",
    "prompt": "Que doit faire un harnais de fuzzing ?",
    "skills": [
      "p-pra-fuzz"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Écrire chaque entrée dans un fichier du disque"
      },
      {
        "id": "b",
        "text": "Choisir le meilleur compilateur du projet"
      },
      {
        "id": "c",
        "text": "Appeler la fonction testée avec les octets"
      },
      {
        "id": "d",
        "text": "Envoyer chaque entrée à un serveur distant"
      }
    ]
  },
  {
    "id": "pra-q18",
    "prompt": "Pourquoi minimiser une entrée qui provoque un plantage ?",
    "skills": [
      "p-pra-fuzz"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour isoler la cause avec peu d’octets"
      },
      {
        "id": "b",
        "text": "Pour la rendre plus difficile à rejouer"
      },
      {
        "id": "c",
        "text": "Pour supprimer le plantage observé"
      },
      {
        "id": "d",
        "text": "Pour chiffrer l’entrée avant de la partager"
      }
    ]
  },
  {
    "id": "pra-q19",
    "prompt": "Quel est l’intérêt d’un dictionnaire de mots-clés dans une campagne de fuzzing ?",
    "skills": [
      "p-pra-fuzz"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Compresser les résultats de la campagne"
      },
      {
        "id": "b",
        "text": "Aider à produire les éléments du format"
      },
      {
        "id": "c",
        "text": "Retirer les entrées qui plantent du corpus"
      },
      {
        "id": "d",
        "text": "Traduire automatiquement les messages d’erreur"
      }
    ]
  },
  {
    "id": "pra-q20",
    "prompt": "Pourquoi mesurer la couverture pendant une campagne ?",
    "skills": [
      "p-pra-fuzz"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Compter le nombre de développeurs du projet"
      },
      {
        "id": "b",
        "text": "Vérifier que le disque dur n’est pas plein"
      },
      {
        "id": "c",
        "text": "Connaître la vitesse de l’ordinateur utilisé"
      },
      {
        "id": "d",
        "text": "Savoir quelles parties restent inexplorées"
      }
    ]
  },
  {
    "id": "pra-q21",
    "prompt": "Un corpus de départ varié améliore l’exploration du programme par le fuzzer.",
    "skills": [
      "p-pra-fuzz"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pra-q22",
    "prompt": "Un fuzzing sans sanitizer détecte aussi bien les corruptions mémoire silencieuses qu’un fuzzing avec sanitizer.",
    "skills": [
      "p-pra-fuzz"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "pra-q23",
    "prompt": "Quel moteur de fuzzing, intégré à Clang, s’exécute dans le même processus que le code testé ? (un mot)",
    "skills": [
      "p-pra-fuzz"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "pra-q24",
    "prompt": "Quelles bonnes pratiques s’appliquent à l’écriture d’un harnais simple ?",
    "skills": [
      "p-pra-fuzz"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Libérer les ressources allouées à chaque exécution"
      },
      {
        "id": "b",
        "text": "Conserver des variables globales modifiées d’une exécution à l’autre"
      },
      {
        "id": "c",
        "text": "Appeler directement la fonction qui lit les octets"
      },
      {
        "id": "d",
        "text": "Éviter tout accès au réseau et au disque"
      }
    ]
  },
  {
    "id": "pra-q25",
    "prompt": "Pourquoi un protocole doit-il valider chaque message reçu ?",
    "skills": [
      "p-pra-protocoles"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La validation accélère toujours le réseau"
      },
      {
        "id": "b",
        "text": "Un message peut être malformé ou malveillant"
      },
      {
        "id": "c",
        "text": "Tous les messages sont forcément corrects"
      },
      {
        "id": "d",
        "text": "La validation remplace le chiffrement des échanges"
      }
    ]
  },
  {
    "id": "pra-q26",
    "prompt": "Que protège la signature d’une mise à jour de micrologiciel ?",
    "skills": [
      "p-pra-protocoles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Sa vitesse de téléchargement"
      },
      {
        "id": "b",
        "text": "Son nom de fichier affiché"
      },
      {
        "id": "c",
        "text": "Son origine et son intégrité"
      },
      {
        "id": "d",
        "text": "Sa taille sur le disque"
      }
    ]
  },
  {
    "id": "pra-q27",
    "prompt": "En quoi consiste le rejeu d’un message dans un protocole ?",
    "skills": [
      "p-pra-protocoles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Supprimer un message avant sa réception"
      },
      {
        "id": "b",
        "text": "Chiffrer un message avec une clé neuve"
      },
      {
        "id": "c",
        "text": "Rédiger un message entièrement nouveau"
      },
      {
        "id": "d",
        "text": "Renvoyer un message légitime déjà capté"
      }
    ]
  },
  {
    "id": "pra-q28",
    "prompt": "Quelle mesure courante protège un protocole contre le rejeu ?",
    "skills": [
      "p-pra-protocoles"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un nombre à usage unique ou un compteur"
      },
      {
        "id": "b",
        "text": "Un message envoyé deux fois de suite"
      },
      {
        "id": "c",
        "text": "Un délai de réponse plus long"
      },
      {
        "id": "d",
        "text": "Une couleur différente pour chaque message"
      }
    ]
  },
  {
    "id": "pra-q29",
    "prompt": "Un micrologiciel non signé peut être remplacé par un code altéré sans que l’appareil s’en aperçoive.",
    "skills": [
      "p-pra-protocoles"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pra-q30",
    "prompt": "Comment appelle-t-on le nombre à usage unique inclus dans un message pour empêcher son rejeu ? (un mot)",
    "skills": [
      "p-pra-protocoles"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "pra-q31",
    "prompt": "Quelles vérifications renforcent la sécurité d’un protocole applicatif ?",
    "skills": [
      "p-pra-protocoles"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Rejeter les messages hors séquence"
      },
      {
        "id": "b",
        "text": "Authentifier l’émetteur des messages"
      },
      {
        "id": "c",
        "text": "Accepter tout champ inconnu sans contrôle"
      },
      {
        "id": "d",
        "text": "Contrôler les longueurs annoncées"
      }
    ]
  },
  {
    "id": "pra-q32",
    "prompt": "Un dispositif connecté accepte des mises à jour de micrologiciel par le réseau. Quelles protections prévoyez-vous ?",
    "skills": [
      "p-pra-protocoles"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "pra-q33",
    "prompt": "Que doit contenir un rapport de vulnérabilité adressé à un éditeur ?",
    "skills": [
      "p-pra-correction"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Toutes les données personnelles trouvées sur le site"
      },
      {
        "id": "b",
        "text": "Un code d’attaque complet prêt à être diffusé"
      },
      {
        "id": "c",
        "text": "Produit, version, manipulation minimale, impact"
      },
      {
        "id": "d",
        "text": "Une demande de paiement avant tout échange avec lui"
      }
    ]
  },
  {
    "id": "pra-q34",
    "prompt": "À quoi sert un test de non-régression écrit après un correctif ?",
    "skills": [
      "p-pra-correction"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À remplacer la revue du correctif"
      },
      {
        "id": "b",
        "text": "À vérifier que le défaut ne revient pas"
      },
      {
        "id": "c",
        "text": "À supprimer l’ancien code du projet entier"
      },
      {
        "id": "d",
        "text": "À mesurer la vitesse du compilateur"
      }
    ]
  },
  {
    "id": "pra-q35",
    "prompt": "Comment corriger un débordement causé par une taille annoncée non vérifiée ?",
    "skills": [
      "p-pra-correction"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ignorer l’erreur lorsque le programme continue"
      },
      {
        "id": "b",
        "text": "Désactiver le sanitizer qui signale l’erreur"
      },
      {
        "id": "c",
        "text": "Agrandir le tampon de quelques octets au hasard"
      },
      {
        "id": "d",
        "text": "Vérifier la taille avant la copie"
      }
    ]
  },
  {
    "id": "pra-q36",
    "prompt": "Pourquoi le score CVSS ne suffit-il pas à lui seul à prioriser un correctif ?",
    "skills": [
      "p-pra-correction"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il ignore l’exposition et le contexte"
      },
      {
        "id": "b",
        "text": "Il change à chaque lecture du rapport"
      },
      {
        "id": "c",
        "text": "Il est toujours égal à zéro"
      },
      {
        "id": "d",
        "text": "Il n’existe que pour les logiciels libres"
      }
    ]
  },
  {
    "id": "pra-q37",
    "prompt": "Un correctif qui supprime seulement le symptôme sans traiter la cause est suffisant.",
    "skills": [
      "p-pra-correction"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pra-q38",
    "prompt": "Quels éléments accompagnent un bon correctif ?",
    "skills": [
      "p-pra-correction"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La suppression du rapport d’origine"
      },
      {
        "id": "b",
        "text": "Une revue par un second développeur"
      },
      {
        "id": "c",
        "text": "Une description de la cause racine"
      },
      {
        "id": "d",
        "text": "Un test qui reproduit le défaut"
      }
    ]
  },
  {
    "id": "pra-q39",
    "prompt": "Quelles informations influencent la gravité réelle d’une vulnérabilité ?",
    "skills": [
      "p-pra-correction"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La couleur du logo du produit"
      },
      {
        "id": "b",
        "text": "L’exposition du produit à Internet"
      },
      {
        "id": "c",
        "text": "Les droits obtenus en cas d’exploitation"
      },
      {
        "id": "d",
        "text": "La sensibilité des données concernées"
      }
    ]
  },
  {
    "id": "pra-q40",
    "prompt": "Quel sigle de quatre lettres désigne le système commun de notation de la gravité des vulnérabilités ?",
    "skills": [
      "p-pra-correction"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "quatre lettres"
  }
];
