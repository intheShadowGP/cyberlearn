// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "gca-q1",
    "prompt": "En quoi consiste l’analyse de flux de données teintées (taint analysis) ?",
    "skills": [
      "g-exp-statique"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Supprimer les variables que le programme n’utilise jamais"
      },
      {
        "id": "b",
        "text": "Compter le nombre de lignes de code par fonction du projet"
      },
      {
        "id": "c",
        "text": "Chiffrer chaque donnée avant son passage dans le programme"
      },
      {
        "id": "d",
        "text": "Suivre une donnée non fiable de sa source à un puits"
      }
    ]
  },
  {
    "id": "gca-q2",
    "prompt": "Qu’est-ce qu’un faux positif en analyse statique ?",
    "skills": [
      "g-exp-statique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une alerte correcte mais sans gravité particulière"
      },
      {
        "id": "b",
        "text": "Un défaut déjà corrigé dans une version précédente"
      },
      {
        "id": "c",
        "text": "Une alerte qui ne correspond à aucun défaut réel"
      },
      {
        "id": "d",
        "text": "Un défaut réel que l’outil n’a pas signalé"
      }
    ]
  },
  {
    "id": "gca-q3",
    "prompt": "Un rapport d’analyse statique sans aucune alerte prouve que le code ne contient pas de vulnérabilité.",
    "skills": [
      "g-exp-statique"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gca-q4",
    "prompt": "Quel format standard d’échange de résultats d’analyse statique est pris en charge par de nombreux outils et plateformes ? (sigle)",
    "skills": [
      "g-exp-statique"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "gca-q5",
    "prompt": "Pourquoi écrire une règle personnalisée pour un outil comme Semgrep ?",
    "skills": [
      "g-exp-statique"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Détecter un motif propre à votre code"
      },
      {
        "id": "b",
        "text": "Remplacer la revue de code par une analyse entièrement automatique"
      },
      {
        "id": "c",
        "text": "Contourner l’obligation de corriger les alertes déjà signalées"
      },
      {
        "id": "d",
        "text": "Rendre l’outil plus rapide en désactivant les autres règles du jeu"
      }
    ]
  },
  {
    "id": "gca-q6",
    "prompt": "Quelles pratiques améliorent l’efficacité de l’analyse statique dans une équipe ?",
    "skills": [
      "g-exp-statique"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Écrire des règles pour les motifs récurrents du projet"
      },
      {
        "id": "b",
        "text": "Désactiver toute règle qui produit une alerte"
      },
      {
        "id": "c",
        "text": "Trier les alertes et documenter les faux positifs"
      },
      {
        "id": "d",
        "text": "Bloquer le pipeline sur les nouvelles alertes graves"
      }
    ]
  },
  {
    "id": "gca-q7",
    "prompt": "Pourquoi l’analyse statique produit-elle des faux négatifs ?",
    "skills": [
      "g-exp-statique"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle ne fonctionne que sur du code déjà corrigé précédemment"
      },
      {
        "id": "b",
        "text": "Elle approxime le programme et peut manquer des chemins"
      },
      {
        "id": "c",
        "text": "Elle s’arrête dès qu’elle rencontre la première erreur du projet"
      },
      {
        "id": "d",
        "text": "Elle ne sait lire que les fichiers de moins de mille lignes"
      }
    ]
  },
  {
    "id": "gca-q8",
    "prompt": "En quoi consiste le fuzzing ?",
    "skills": [
      "g-exp-fuzzing"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Fournir massivement des entrées mutées pour faire échouer"
      },
      {
        "id": "b",
        "text": "Mesurer le temps de réponse d’un programme sous forte charge"
      },
      {
        "id": "c",
        "text": "Chiffrer les entrées d’un programme pour en vérifier la robustesse"
      },
      {
        "id": "d",
        "text": "Relire le code source pour y repérer les erreurs de logique"
      }
    ]
  },
  {
    "id": "gca-q9",
    "prompt": "Que signifie « fuzzing guidé par la couverture » ?",
    "skills": [
      "g-exp-fuzzing"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le fuzzeur s’arrête dès que le premier plantage est trouvé"
      },
      {
        "id": "b",
        "text": "Les entrées qui explorent de nouveaux chemins sont conservées et mutées"
      },
      {
        "id": "c",
        "text": "Le fuzzeur ne teste que les fonctions déjà couvertes par des tests"
      },
      {
        "id": "d",
        "text": "Le fuzzeur choisit uniquement les entrées les plus longues possibles"
      }
    ]
  },
  {
    "id": "gca-q10",
    "prompt": "Quel moteur de fuzzing, intégré à LLVM, exécute une fonction en boucle avec des entrées mutées ? (nom)",
    "skills": [
      "g-exp-fuzzing"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom"
  },
  {
    "id": "gca-q11",
    "prompt": "Exécuter le fuzzing avec les sanitizers (ASan, UBSan) permet de détecter des erreurs mémoire qui ne provoquent pas de plantage visible.",
    "skills": [
      "g-exp-fuzzing"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gca-q12",
    "prompt": "Qu’est-ce qu’un harnais (harness) de fuzzing ?",
    "skills": [
      "g-exp-fuzzing"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un rapport qui liste les plantages trouvés pendant la nuit"
      },
      {
        "id": "b",
        "text": "Un fichier de configuration du compilateur du projet"
      },
      {
        "id": "c",
        "text": "Un équipement matériel qui protège les serveurs de test"
      },
      {
        "id": "d",
        "text": "Une petite fonction qui passe des octets au code testé"
      }
    ]
  },
  {
    "id": "gca-q13",
    "prompt": "Quels éléments un fuzzing efficace d’un analyseur de fichiers demande-t-il ?",
    "skills": [
      "g-exp-fuzzing"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Un corpus initial de fichiers valides"
      },
      {
        "id": "b",
        "text": "Des sanitizers activés à la compilation"
      },
      {
        "id": "c",
        "text": "Un seul fichier valide, jamais modifié, comme unique entrée"
      },
      {
        "id": "d",
        "text": "Une exécution continue avec triage des plantages"
      }
    ]
  },
  {
    "id": "gca-q14",
    "prompt": "Quelle approche génère automatiquement de nombreux cas d’entrée pour vérifier une propriété du code ?",
    "skills": [
      "g-exp-fuzzing"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les tests d’interface sur des maquettes de l’application"
      },
      {
        "id": "b",
        "text": "Les tests de montée en charge sur le serveur de production"
      },
      {
        "id": "c",
        "text": "Les tests fondés sur des propriétés"
      },
      {
        "id": "d",
        "text": "Les tests manuels exécutés par un testeur expérimenté"
      }
    ]
  },
  {
    "id": "gca-q15",
    "prompt": "Quelle démarche rend une revue de code de sécurité plus efficace ?",
    "skills": [
      "g-exp-revue"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Se limiter aux fichiers qui ont déclenché une alerte de l’outil"
      },
      {
        "id": "b",
        "text": "Partir des entrées non fiables et suivre leur chemin"
      },
      {
        "id": "c",
        "text": "Ne relire que le style et la mise en forme du code modifié"
      },
      {
        "id": "d",
        "text": "Relire le fichier de la première à la dernière ligne sans objectif"
      }
    ]
  },
  {
    "id": "gca-q16",
    "prompt": "Les défauts de contrôle d’accès sont difficiles à trouver par outil automatique et se repèrent surtout par revue ou tests ciblés.",
    "skills": [
      "g-exp-revue"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gca-q17",
    "prompt": "Dans `if os.path.exists(p): f = open(p)`, quel défaut une revue doit-elle repérer ?",
    "skills": [
      "g-exp-revue"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une fuite de mémoire due à l’absence de fermeture"
      },
      {
        "id": "b",
        "text": "Une injection SQL dans le nom du fichier concerné"
      },
      {
        "id": "c",
        "text": "Un dépassement d’entier dans le chemin du fichier"
      },
      {
        "id": "d",
        "text": "Une course entre la vérification et l’ouverture"
      }
    ]
  },
  {
    "id": "gca-q18",
    "prompt": "Que vérifie une revue de sécurité sur une nouvelle route d’API ?",
    "skills": [
      "g-exp-revue"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le nombre de commentaires dans le fichier"
      },
      {
        "id": "b",
        "text": "L’authentification et l’autorisation par objet"
      },
      {
        "id": "c",
        "text": "La validation des entrées par schéma"
      },
      {
        "id": "d",
        "text": "La gestion des erreurs et la journalisation"
      }
    ]
  },
  {
    "id": "gca-q19",
    "prompt": "Quel principe exige l’approbation d’une seconde personne avant la fusion d’un code sensible ?",
    "skills": [
      "g-exp-revue"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le principe des quatre yeux"
      },
      {
        "id": "b",
        "text": "La séparation des environnements"
      },
      {
        "id": "c",
        "text": "La défense en profondeur"
      },
      {
        "id": "d",
        "text": "Le moindre privilège"
      }
    ]
  },
  {
    "id": "gca-q20",
    "prompt": "Pourquoi une revue ne doit-elle pas se limiter aux lignes modifiées d’un correctif ?",
    "skills": [
      "g-exp-revue"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le relecteur a toujours besoin de lire l’ensemble du dépôt"
      },
      {
        "id": "b",
        "text": "Les lignes modifiées sont déjà vérifiées par l’analyse statique"
      },
      {
        "id": "c",
        "text": "Une modification peut créer un défaut avec du code inchangé"
      },
      {
        "id": "d",
        "text": "Le code modifié est toujours plus sûr que le code ancien"
      }
    ]
  },
  {
    "id": "gca-q21",
    "prompt": "Vous relisez une fonction Go qui télécharge une URL fournie par l’utilisateur et enregistre le résultat dans un fichier. Quels risques identifiez-vous et que vérifiez-vous ?",
    "skills": [
      "g-exp-revue",
      "g-exp-chaine"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "gca-q22",
    "prompt": "Qu’est-ce qu’un build reproductible ?",
    "skills": [
      "g-exp-chaine"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une compilation qui s’exécute plus vite grâce à un cache partagé"
      },
      {
        "id": "b",
        "text": "Une compilation réalisée sur le poste de chaque développeur"
      },
      {
        "id": "c",
        "text": "Une compilation qui se relance automatiquement en cas d’échec"
      },
      {
        "id": "d",
        "text": "Une compilation aux artefacts identiques à sources identiques"
      }
    ]
  },
  {
    "id": "gca-q23",
    "prompt": "À quoi sert la provenance d’un artefact, par exemple selon SLSA ?",
    "skills": [
      "g-exp-chaine"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Chiffrer l’artefact pour le protéger pendant sa distribution"
      },
      {
        "id": "b",
        "text": "Réduire la taille de l’artefact avant sa publication"
      },
      {
        "id": "c",
        "text": "Prouver comment et où il a été construit"
      },
      {
        "id": "d",
        "text": "Mesurer la couverture des tests appliqués à l’artefact"
      }
    ]
  },
  {
    "id": "gca-q24",
    "prompt": "Quel sigle désigne la nomenclature qui liste les composants et versions d’un logiciel ? (sigle)",
    "skills": [
      "g-exp-chaine"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "gca-q25",
    "prompt": "Référencer une action d’intégration continue par un tag mobile (par exemple `v3`) est aussi sûr que de la référencer par l’empreinte d’un commit précis.",
    "skills": [
      "g-exp-chaine"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gca-q26",
    "prompt": "Quelles mesures durcissent un pipeline d’intégration continue ?",
    "skills": [
      "g-exp-chaine"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Séparer les secrets de production des tâches de test"
      },
      {
        "id": "b",
        "text": "Donner accès aux secrets à toute contribution externe"
      },
      {
        "id": "c",
        "text": "Épingler actions et dépendances par empreinte"
      },
      {
        "id": "d",
        "text": "Réduire les permissions du jeton de chaque tâche"
      }
    ]
  },
  {
    "id": "gca-q27",
    "prompt": "Qu’est-ce que la confusion de dépendances (dependency confusion) ?",
    "skills": [
      "g-exp-chaine"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une dépendance est installée sans que personne ne l’ait demandée"
      },
      {
        "id": "b",
        "text": "Un paquet public du même nom qu’un paquet interne est préféré"
      },
      {
        "id": "c",
        "text": "Un développeur confond deux versions d’une même bibliothèque"
      },
      {
        "id": "d",
        "text": "Deux bibliothèques incompatibles sont installées ensemble"
      }
    ]
  },
  {
    "id": "gca-q28",
    "prompt": "Quel projet permet de signer et de vérifier des artefacts logiciels sans gérer soi-même de clé durable ?",
    "skills": [
      "g-exp-chaine"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Sigstore, avec l’outil cosign"
      },
      {
        "id": "b",
        "text": "Un pare-feu applicatif du réseau"
      },
      {
        "id": "c",
        "text": "Un gestionnaire de mots de passe"
      },
      {
        "id": "d",
        "text": "Un antivirus installé sur le serveur"
      }
    ]
  },
  {
    "id": "gca-q29",
    "prompt": "Qu’est-ce qu’une course aux données (data race) ?",
    "skills": [
      "g-exp-concurrence"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Deux programmes qui lisent le même fichier en lecture seule"
      },
      {
        "id": "b",
        "text": "Une requête réseau qui n’obtient pas de réponse dans le délai prévu"
      },
      {
        "id": "c",
        "text": "Un programme qui s’exécute plus lentement qu’un autre programme"
      },
      {
        "id": "d",
        "text": "Deux fils accèdent à une donnée dont un écrit, sans synchronisation"
      }
    ]
  },
  {
    "id": "gca-q30",
    "prompt": "Quelle commande détecte les courses aux données lors des tests d’un programme Go ?",
    "skills": [
      "g-exp-concurrence"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`go mod tidy -safe`"
      },
      {
        "id": "b",
        "text": "`go build -strip ./...`"
      },
      {
        "id": "c",
        "text": "`go test -race ./...`"
      },
      {
        "id": "d",
        "text": "`go vet -format ./...`"
      }
    ]
  },
  {
    "id": "gca-q31",
    "prompt": "Les langages à mémoire gérée, comme Java ou Go, sont à l’abri des conditions de course.",
    "skills": [
      "g-exp-concurrence"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gca-q32",
    "prompt": "Quel sanitizer de LLVM détecte les courses aux données dans les programmes C et C++ ? (sigle)",
    "skills": [
      "g-exp-concurrence"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "gca-q33",
    "prompt": "Quelles mesures sécurisent une opération de débit de compte contre les requêtes simultanées ?",
    "skills": [
      "g-exp-concurrence"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Une lecture du solde puis un débit dans deux requêtes distinctes"
      },
      {
        "id": "b",
        "text": "Un identifiant de requête qui rend l’opération idempotente"
      },
      {
        "id": "c",
        "text": "Une transaction avec verrou ou une mise à jour conditionnelle"
      },
      {
        "id": "d",
        "text": "Une pause aléatoire entre la vérification et le débit"
      }
    ]
  },
  {
    "id": "gca-q34",
    "prompt": "Pourquoi des verrous pris dans un ordre différent peuvent-ils bloquer un programme ?",
    "skills": [
      "g-exp-concurrence"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le processeur refuse d’exécuter deux verrous à la suite"
      },
      {
        "id": "b",
        "text": "Deux fils peuvent s’attendre mutuellement sans fin"
      },
      {
        "id": "c",
        "text": "Les verrous empêchent la lecture de toutes les données"
      },
      {
        "id": "d",
        "text": "Les verrous consomment toute la mémoire disponible"
      }
    ]
  },
  {
    "id": "gca-q35",
    "prompt": "Qu’est-ce que le cadre NIST SSDF (SP 800-218) ?",
    "skills": [
      "g-exp-programme"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un ensemble de pratiques de développement sécurisé"
      },
      {
        "id": "b",
        "text": "Une norme de chiffrement des fichiers de code source"
      },
      {
        "id": "c",
        "text": "Un outil d’analyse statique développé par le NIST"
      },
      {
        "id": "d",
        "text": "Un format d’échange des résultats de tests de sécurité"
      }
    ]
  },
  {
    "id": "gca-q36",
    "prompt": "Quel indicateur reflète le mieux l’efficacité du traitement des vulnérabilités ?",
    "skills": [
      "g-exp-programme"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le nombre de réunions consacrées à la sécurité"
      },
      {
        "id": "b",
        "text": "Le délai de correction, selon la gravité"
      },
      {
        "id": "c",
        "text": "Le nombre de lignes de code analysées"
      },
      {
        "id": "d",
        "text": "Le nombre d’outils de sécurité déployés"
      }
    ]
  },
  {
    "id": "gca-q37",
    "prompt": "Dans une divulgation coordonnée, l’éditeur dispose d’un délai pour corriger avant la publication des détails de la vulnérabilité.",
    "skills": [
      "g-exp-programme"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gca-q38",
    "prompt": "Quel sigle désigne le document qui précise si une vulnérabilité d’un composant affecte réellement un produit ? (sigle)",
    "skills": [
      "g-exp-programme"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "gca-q39",
    "prompt": "Vous devez mettre en place un programme de sécurité du code pour douze équipes de développement aux pratiques hétérogènes. Quelles mesures proposez-vous à trois mois, à six mois et à un an ?",
    "skills": [
      "g-exp-programme",
      "g-exp-statique"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "gca-q40",
    "prompt": "Une vulnérabilité critique est annoncée dans une bibliothèque embarquée par une centaine de vos applications. Décrivez votre réponse, de l’évaluation à la vérification.",
    "skills": [
      "g-exp-programme",
      "g-exp-chaine"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
