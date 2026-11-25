// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "for-q1",
    "prompt": "Selon l’ordre de volatilité, que faut-il collecter en premier ?",
    "skills": [
      "j-principes"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les sauvegardes sur bande"
      },
      {
        "id": "b",
        "text": "La mémoire vive"
      },
      {
        "id": "c",
        "text": "Le disque dur"
      },
      {
        "id": "d",
        "text": "Les journaux archivés"
      }
    ]
  },
  {
    "id": "for-q2",
    "prompt": "L’analyse doit être réalisée sur une copie de la preuve, l’original étant conservé sous scellé.",
    "skills": [
      "j-principes"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "for-q3",
    "prompt": "Quelle RFC décrit les lignes directrices de collecte et l’ordre de volatilité ? (numéro)",
    "skills": [
      "j-principes"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "numéro"
  },
  {
    "id": "for-q13",
    "prompt": "Décrivez, dans l’ordre, la collecte sur un portable allumé dont le disque est chiffré par BitLocker, en justifiant chaque étape.",
    "skills": [
      "j-principes",
      "j-preuve"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "for-q32",
    "prompt": "Que dit le principe d’échange de Locard transposé au numérique ?",
    "skills": [
      "j-principes"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Toute action laisse des traces, aussi la sienne"
      },
      {
        "id": "b",
        "text": "Les traces disparaissent toujours à l’extinction"
      },
      {
        "id": "c",
        "text": "Les preuves numériques ne laissent jamais de traces"
      },
      {
        "id": "d",
        "text": "Seul l’attaquant laisse des traces"
      }
    ]
  },
  {
    "id": "for-q40",
    "prompt": "Un poste allumé a le disque chiffré et la clé est en mémoire. Que faire avant de l’éteindre ?",
    "skills": [
      "j-principes",
      "j-memoire"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le redémarrer pour vérifier l’état du chiffrement"
      },
      {
        "id": "b",
        "text": "Lancer un antivirus pour le nettoyer"
      },
      {
        "id": "c",
        "text": "L’éteindre aussitôt pour préserver le disque"
      },
      {
        "id": "d",
        "text": "Acquérir la mémoire et récupérer la clé"
      }
    ]
  },
  {
    "id": "for-q4",
    "prompt": "Comment démontrer qu’une image disque n’a pas été modifiée depuis son acquisition ?",
    "skills": [
      "j-preuve"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "En la compressant à nouveau"
      },
      {
        "id": "b",
        "text": "En vérifiant seulement sa taille"
      },
      {
        "id": "c",
        "text": "En comparant son empreinte SHA-256"
      },
      {
        "id": "d",
        "text": "En l’ouvrant avec l’explorateur de fichiers"
      }
    ]
  },
  {
    "id": "for-q5",
    "prompt": "Quelles informations doivent figurer dans la chaîne de conservation ?",
    "skills": [
      "j-preuve"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Qui a collecté la preuve, quand et comment"
      },
      {
        "id": "b",
        "text": "Chaque transfert de garde avec date et motif"
      },
      {
        "id": "c",
        "text": "L’empreinte de l’image"
      },
      {
        "id": "d",
        "text": "L’avis personnel de l’enquêteur sur la culpabilité"
      }
    ]
  },
  {
    "id": "for-q6",
    "prompt": "Brancher un disque saisi sur un poste Windows sans bloqueur d’écriture peut modifier des métadonnées de la preuve.",
    "skills": [
      "j-preuve"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "for-q16",
    "prompt": "Quelles pratiques renforcent la valeur probante d’une investigation ?",
    "skills": [
      "j-preuve",
      "j-principes"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Croiser plusieurs sources indépendantes"
      },
      {
        "id": "b",
        "text": "Documenter chaque action horodatée, y compris les siennes"
      },
      {
        "id": "c",
        "text": "Utiliser des outils et méthodes reproductibles"
      },
      {
        "id": "d",
        "text": "Supprimer les fichiers non pertinents de l’image pour gagner de la place"
      }
    ]
  },
  {
    "id": "for-q33",
    "prompt": "Pourquoi travaille-t-on sur une copie plutôt que sur l’original ?",
    "skills": [
      "j-preuve"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour que l’analyse soit plus rapide"
      },
      {
        "id": "b",
        "text": "Pour supprimer les fichiers inutiles"
      },
      {
        "id": "c",
        "text": "Pour éviter de calculer une empreinte"
      },
      {
        "id": "d",
        "text": "Pour préserver l’original"
      }
    ]
  },
  {
    "id": "for-q34",
    "prompt": "Il suffit de calculer l’empreinte d’une image une seule fois, à la fin de l’enquête.",
    "skills": [
      "j-preuve"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "for-q7",
    "prompt": "Quel artefact Windows prouve qu’un programme a été exécuté, avec ses dernières dates d’exécution ?",
    "skills": [
      "j-artefacts"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le fond d’écran"
      },
      {
        "id": "b",
        "text": "Le Prefetch"
      },
      {
        "id": "c",
        "text": "La corbeille"
      },
      {
        "id": "d",
        "text": "Le fichier hosts"
      }
    ]
  },
  {
    "id": "for-q8",
    "prompt": "Quel outil libre est la référence pour analyser une image de mémoire vive ?",
    "skills": [
      "j-artefacts"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom de l’outil"
  },
  {
    "id": "for-q9",
    "prompt": "Quels artefacts peuvent révéler un mécanisme de persistance sous Windows ?",
    "skills": [
      "j-artefacts"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La résolution de l’écran"
      },
      {
        "id": "b",
        "text": "Les tâches planifiées"
      },
      {
        "id": "c",
        "text": "Les clés de registre Run"
      },
      {
        "id": "d",
        "text": "L’événement 7045 (installation d’un service)"
      }
    ]
  },
  {
    "id": "for-q10",
    "prompt": "Un exécutable a une date de création $STANDARD_INFORMATION en 2023, mais une date de création $FILE_NAME de la semaine dernière. Que suspectez-vous ?",
    "skills": [
      "j-artefacts",
      "j-timeline"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un fichier compressé par l’utilisateur"
      },
      {
        "id": "b",
        "text": "Une mise à jour automatique de Windows"
      },
      {
        "id": "c",
        "text": "Un antidatage (timestomping)"
      },
      {
        "id": "d",
        "text": "Une erreur de lecture du disque dur"
      }
    ]
  },
  {
    "id": "for-q35",
    "prompt": "Quel artefact Windows conserve la trace et l’empreinte SHA-1 d’exécutables présents sur le système ?",
    "skills": [
      "j-artefacts"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’Amcache"
      },
      {
        "id": "b",
        "text": "Le journal d’impression"
      },
      {
        "id": "c",
        "text": "Le fichier d’échange"
      },
      {
        "id": "d",
        "text": "Le presse-papiers"
      }
    ]
  },
  {
    "id": "for-q36",
    "prompt": "Quels artefacts Linux aident à reconstituer l’activité d’un compte ?",
    "skills": [
      "j-artefacts"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les tâches `crontab`"
      },
      {
        "id": "b",
        "text": "`/var/log/auth.log`"
      },
      {
        "id": "c",
        "text": "`~/.bash_history`"
      },
      {
        "id": "d",
        "text": "Le thème graphique du bureau"
      }
    ]
  },
  {
    "id": "for-q11",
    "prompt": "Un journal en heure de Paris (hiver) indiquant 10:00 et un journal en UTC indiquant 09:00 décrivent le même instant.",
    "skills": [
      "j-timeline"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "for-q12",
    "prompt": "Dans quel référentiel horaire faut-il normaliser tous les horodatages d’une chronologie ? (sigle)",
    "skills": [
      "j-timeline"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "for-q14",
    "prompt": "Que représente l’horodatage Unix `0` ?",
    "skills": [
      "j-timeline"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le 1er janvier 1900 à minuit, heure locale"
      },
      {
        "id": "b",
        "text": "Le 1er janvier 1970 à 00:00:00 UTC"
      },
      {
        "id": "c",
        "text": "La date d’installation du système"
      },
      {
        "id": "d",
        "text": "Le 1er janvier 1601 UTC"
      }
    ]
  },
  {
    "id": "for-q15",
    "prompt": "Votre chronologie présente un trou de trois heures dans les journaux de sécurité d’un serveur, pendant la période suspecte. Quelles hypothèses formulez-vous et comment les vérifiez-vous ?",
    "skills": [
      "j-timeline",
      "j-artefacts"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "for-q31",
    "prompt": "Comment s’appelle le format d’horodatage de Windows, exprimé en intervalles de 100 ns depuis le 1er janvier 1601 ?",
    "skills": [
      "j-timeline"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "nom du format"
  },
  {
    "id": "for-q37",
    "prompt": "Un journal de pare-feu en heure de Paris, en été, indique 11:30. Quelle heure UTC cela représente-t-il ?",
    "skills": [
      "j-timeline"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "10:30"
      },
      {
        "id": "b",
        "text": "13:30"
      },
      {
        "id": "c",
        "text": "09:30"
      },
      {
        "id": "d",
        "text": "12:30"
      }
    ]
  },
  {
    "id": "for-q38",
    "prompt": "Un serveur a une horloge en retard de quatre minutes. Que faire de ses journaux dans la chronologie ?",
    "skills": [
      "j-timeline"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Noter la dérive et corriger"
      },
      {
        "id": "b",
        "text": "Les ignorer comme non fiables"
      },
      {
        "id": "c",
        "text": "Les laisser tels quels sans mention"
      },
      {
        "id": "d",
        "text": "Les supprimer de la chronologie"
      }
    ]
  },
  {
    "id": "for-q39",
    "prompt": "Un trou dans les journaux d’un serveur est lui-même un fait à documenter et à expliquer.",
    "skills": [
      "j-timeline",
      "j-artefacts"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "for-q17",
    "prompt": "Pourquoi acquiert-on la mémoire vive d’une machine suspecte ?",
    "skills": [
      "j-memoire"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle remplace l’image du disque"
      },
      {
        "id": "b",
        "text": "Elle se conserve indéfiniment à l’extinction"
      },
      {
        "id": "c",
        "text": "Elle conserve tous les fichiers du disque"
      },
      {
        "id": "d",
        "text": "Elle contient l’état qui disparaît"
      }
    ]
  },
  {
    "id": "for-q18",
    "prompt": "Un processus apparaît dans l’analyse de balayage de la mémoire mais pas dans la liste active des processus. Que cela peut-il indiquer ?",
    "skills": [
      "j-memoire"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un processus système normal"
      },
      {
        "id": "b",
        "text": "Un défaut du clavier"
      },
      {
        "id": "c",
        "text": "Un processus caché ou terminé"
      },
      {
        "id": "d",
        "text": "Une erreur sans importance"
      }
    ]
  },
  {
    "id": "for-q19",
    "prompt": "Dans l’arbre des processus d’une image mémoire, `winword.exe` est le parent de `powershell.exe`. Que faut-il en penser ?",
    "skills": [
      "j-memoire",
      "j-artefacts"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Suspect : un document ne lance pas d’interpréteur"
      },
      {
        "id": "b",
        "text": "Sans intérêt : le parent n’a pas d’importance"
      },
      {
        "id": "c",
        "text": "Normal : Word lance toujours PowerShell"
      },
      {
        "id": "d",
        "text": "Impossible : Word n’a pas de processus enfant"
      }
    ]
  },
  {
    "id": "for-q20",
    "prompt": "Un outil d’acquisition de la mémoire n’a aucun impact sur le système examiné.",
    "skills": [
      "j-memoire"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "for-q21",
    "prompt": "Que peut-on extraire d’une image de mémoire vive ?",
    "skills": [
      "j-memoire"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le contenu intégral de tous les disques de la machine"
      },
      {
        "id": "b",
        "text": "Les processus et leurs lignes de commande"
      },
      {
        "id": "c",
        "text": "Les connexions réseau ouvertes"
      },
      {
        "id": "d",
        "text": "Les modules chargés et du code injecté"
      }
    ]
  },
  {
    "id": "for-q22",
    "prompt": "Où écrire le fichier d’image mémoire lors de l’acquisition ?",
    "skills": [
      "j-memoire",
      "j-preuve"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Sur le bureau de l’utilisateur"
      },
      {
        "id": "b",
        "text": "Dans le dossier temporaire du système"
      },
      {
        "id": "c",
        "text": "Sur le disque examiné, par commodité"
      },
      {
        "id": "d",
        "text": "Sur un support externe propre"
      }
    ]
  },
  {
    "id": "for-q23",
    "prompt": "Quel outil libre est couramment utilisé pour acquérir la mémoire d’une machine Linux ?",
    "skills": [
      "j-memoire"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom de l’outil"
  },
  {
    "id": "for-q24",
    "prompt": "Que doit distinguer un rapport d’investigation ?",
    "skills": [
      "j-rapport"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les heures de travail des jours fériés"
      },
      {
        "id": "b",
        "text": "Les faits constatés de leur interprétation"
      },
      {
        "id": "c",
        "text": "Les outils gratuits des outils payants"
      },
      {
        "id": "d",
        "text": "Les couleurs des captures d’écran"
      }
    ]
  },
  {
    "id": "for-q25",
    "prompt": "Pourquoi exprimer un niveau de confiance dans un rapport ?",
    "skills": [
      "j-rapport"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour impressionner le lecteur"
      },
      {
        "id": "b",
        "text": "Pour cacher les limites de l’analyse"
      },
      {
        "id": "c",
        "text": "Pour indiquer le degré de certitude"
      },
      {
        "id": "d",
        "text": "Pour éviter de conclure"
      }
    ]
  },
  {
    "id": "for-q26",
    "prompt": "Un rapport forensique doit désigner un coupable.",
    "skills": [
      "j-rapport"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "for-q27",
    "prompt": "Que signifie qu’une analyse est reproductible ?",
    "skills": [
      "j-rapport",
      "j-preuve"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle ne peut être faite qu’une seule fois"
      },
      {
        "id": "b",
        "text": "Elle utilise toujours le même enquêteur"
      },
      {
        "id": "c",
        "text": "Elle ne dépend d’aucune preuve"
      },
      {
        "id": "d",
        "text": "Un tiers retrouve les mêmes résultats"
      }
    ]
  },
  {
    "id": "for-q28",
    "prompt": "Quels éléments figurent dans un rapport d’investigation numérique ?",
    "skills": [
      "j-rapport"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Des commentaires sur la vie privée de personnes sans lien avec l’affaire"
      },
      {
        "id": "b",
        "text": "Les constats étayés par des preuves référencées"
      },
      {
        "id": "c",
        "text": "Le périmètre et la mission confiée"
      },
      {
        "id": "d",
        "text": "La méthode, les outils et leurs versions"
      }
    ]
  },
  {
    "id": "for-q29",
    "prompt": "Dans une enquête interne, que prévoir avant d’examiner la messagerie d’un salarié ?",
    "skills": [
      "j-rapport"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un accord oral entre collègues"
      },
      {
        "id": "b",
        "text": "Une base légale et la proportionnalité"
      },
      {
        "id": "c",
        "text": "Rien, l’employeur peut tout lire"
      },
      {
        "id": "d",
        "text": "Une copie envoyée aux autres salariés"
      }
    ]
  },
  {
    "id": "for-q30",
    "prompt": "Après la clôture de l’affaire, que devient la copie de travail des données ?",
    "skills": [
      "j-rapport",
      "j-preuve"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle est conservée ou détruite selon la loi"
      },
      {
        "id": "b",
        "text": "Elle est conservée indéfiniment sans règle"
      },
      {
        "id": "c",
        "text": "Elle est publiée pour transparence"
      },
      {
        "id": "d",
        "text": "Elle est transmise à n’importe quel collègue"
      }
    ]
  }
];
