// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "aiml-q1",
    "prompt": "Quel type d’apprentissage utilise des exemples étiquetés « malveillant » ou « légitime » ?",
    "skills": [
      "q-ml-bases"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le chiffrement symétrique des exemples"
      },
      {
        "id": "b",
        "text": "L’apprentissage supervisé"
      },
      {
        "id": "c",
        "text": "L’apprentissage non supervisé sans étiquettes"
      },
      {
        "id": "d",
        "text": "La compression des données d’entraînement"
      }
    ]
  },
  {
    "id": "aiml-q2",
    "prompt": "Un modèle peut apprendre une caractéristique sans rapport avec la malveillance si elle distingue par hasard les exemples d’entraînement.",
    "skills": [
      "q-ml-bases"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "aiml-q3",
    "prompt": "Comment appelle-t-on, en anglais, les grandeurs mesurées sur chaque exemple et fournies au modèle ?",
    "skills": [
      "q-ml-bases"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "terme anglais"
  },
  {
    "id": "aiml-q4",
    "prompt": "Quels usages relèvent typiquement de l’apprentissage non supervisé en sécurité ?",
    "skills": [
      "q-ml-bases",
      "q-ml-soc"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Vérifier la validité d’une signature numérique"
      },
      {
        "id": "b",
        "text": "Détecter un volume de transfert anormal pour un hôte"
      },
      {
        "id": "c",
        "text": "Regrouper des alertes similaires sans étiquettes"
      },
      {
        "id": "d",
        "text": "Repérer une connexion qui s’écarte de l’habitude"
      }
    ]
  },
  {
    "id": "aiml-q5",
    "prompt": "Que mesure la précision d’un détecteur ?",
    "skills": [
      "q-ml-eval"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La part des alertes réellement malveillantes"
      },
      {
        "id": "b",
        "text": "La vitesse d’exécution du modèle sur un flux"
      },
      {
        "id": "c",
        "text": "La part des attaques réelles qui ont été détectées"
      },
      {
        "id": "d",
        "text": "Le nombre de paramètres appris par le modèle"
      }
    ]
  },
  {
    "id": "aiml-q6",
    "prompt": "Sur un flux où les attaques sont très rares, une exactitude de 99,9 % garantit un bon détecteur.",
    "skills": [
      "q-ml-eval"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "aiml-q7",
    "prompt": "Comment appelle-t-on l’évolution des données réelles par rapport aux données d’entraînement ? (mot anglais)",
    "skills": [
      "q-ml-eval"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "mot anglais"
  },
  {
    "id": "aiml-q8",
    "prompt": "Un détecteur a un rappel de 95 % et un taux de faux positifs de 0,5 %. Votre SIEM reçoit 2 millions d’événements par jour, dont environ 20 malveillants. Calculez l’ordre de grandeur des alertes par jour et commentez.",
    "skills": [
      "q-ml-eval"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "aiml-q9",
    "prompt": "Quelle utilisation de l’IA dans un SOC respecte le principe de l’humain dans la boucle ?",
    "skills": [
      "q-ml-soc"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’IA ferme seule les incidents sans laisser de trace"
      },
      {
        "id": "b",
        "text": "L’IA modifie les règles du pare-feu de production sans validation"
      },
      {
        "id": "c",
        "text": "L’IA supprime automatiquement les comptes qu’elle juge suspects"
      },
      {
        "id": "d",
        "text": "L’IA propose avec justifications, un analyste valide"
      }
    ]
  },
  {
    "id": "aiml-q10",
    "prompt": "Sur quelles tâches l’IA apporte-t-elle le plus de valeur à un SOC ?",
    "skills": [
      "q-ml-soc"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Proposer une requête de recherche à partir d’une question"
      },
      {
        "id": "b",
        "text": "Décider seule des sanctions contre un salarié"
      },
      {
        "id": "c",
        "text": "Enrichir et résumer un incident"
      },
      {
        "id": "d",
        "text": "Regrouper des alertes liées"
      }
    ]
  },
  {
    "id": "aiml-q11",
    "prompt": "Une suggestion d’un outil d’IA doit être accompagnée des éléments qui permettent à l’analyste de la vérifier.",
    "skills": [
      "q-ml-soc"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "aiml-q12",
    "prompt": "Comment appelle-t-on l’attaque qui consiste à introduire des exemples piégés dans les données d’entraînement ?",
    "skills": [
      "q-ml-robustesse"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’inférence d’appartenance à l’entraînement"
      },
      {
        "id": "b",
        "text": "L’évasion appliquée au modèle"
      },
      {
        "id": "c",
        "text": "L’empoisonnement"
      },
      {
        "id": "d",
        "text": "Le hameçonnage par courriel"
      }
    ]
  },
  {
    "id": "aiml-q13",
    "prompt": "Quelles mesures limitent les risques d’inversion de modèle et d’inférence d’appartenance ?",
    "skills": [
      "q-ml-robustesse"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Ne renvoyer que la décision, sans scores détaillés"
      },
      {
        "id": "b",
        "text": "Entraîner avec la confidentialité différentielle"
      },
      {
        "id": "c",
        "text": "Publier les données d’entraînement pour plus de transparence"
      },
      {
        "id": "d",
        "text": "Limiter le nombre de requêtes par client"
      }
    ]
  },
  {
    "id": "aiml-q14",
    "prompt": "Charger un fichier de modèle au format pickle provenant d’une source inconnue peut exécuter du code sur la machine.",
    "skills": [
      "q-ml-robustesse"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "aiml-q15",
    "prompt": "Un détecteur de logiciels malveillants fondé sur l’apprentissage automatique est contourné par des fichiers légèrement modifiés. Expliquez de quel type d’attaque il s’agit et proposez trois mesures.",
    "skills": [
      "q-ml-robustesse",
      "q-ml-eval"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "aiml-q16",
    "prompt": "Quel référentiel de MITRE recense les techniques d’attaque contre les systèmes d’IA, sur le modèle d’ATT&CK ?",
    "skills": [
      "q-ml-robustesse"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom du référentiel"
  },
  {
    "id": "aiml-q17",
    "prompt": "Pourquoi la qualité des données d’entraînement est-elle essentielle pour un détecteur ?",
    "skills": [
      "q-ml-donnees"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le modèle n’utilise jamais les données récentes"
      },
      {
        "id": "b",
        "text": "Le modèle ignore toujours les données erronées"
      },
      {
        "id": "c",
        "text": "Le modèle apprend aussi leurs défauts"
      },
      {
        "id": "d",
        "text": "Le modèle corrige seul les étiquettes fausses"
      }
    ]
  },
  {
    "id": "aiml-q18",
    "prompt": "Qu’est-ce qu’un biais de représentation dans un jeu de données de sécurité ?",
    "skills": [
      "q-ml-donnees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une erreur de syntaxe dans le code du modèle"
      },
      {
        "id": "b",
        "text": "Une représentation déséquilibrée"
      },
      {
        "id": "c",
        "text": "Une panne du matériel pendant l’entraînement"
      },
      {
        "id": "d",
        "text": "Un chiffrement trop faible des données stockées"
      }
    ]
  },
  {
    "id": "aiml-q19",
    "prompt": "Pourquoi découper les données d’entraînement et de test selon la date ?",
    "skills": [
      "q-ml-donnees"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour supprimer les doublons du jeu de données"
      },
      {
        "id": "b",
        "text": "Pour augmenter le nombre d’exemples disponibles"
      },
      {
        "id": "c",
        "text": "Pour accélérer l’entraînement du modèle"
      },
      {
        "id": "d",
        "text": "Pour mimer l’usage en production"
      }
    ]
  },
  {
    "id": "aiml-q20",
    "prompt": "À quoi sert l’explicabilité d’une alerte produite par un modèle ?",
    "skills": [
      "q-ml-donnees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À permettre à l’analyste de vérifier la décision"
      },
      {
        "id": "b",
        "text": "À chiffrer les données avant leur envoi"
      },
      {
        "id": "c",
        "text": "À augmenter automatiquement le score de l’alerte"
      },
      {
        "id": "d",
        "text": "À supprimer le besoin d’un analyste humain"
      }
    ]
  },
  {
    "id": "aiml-q21",
    "prompt": "Un modèle bien noté en laboratoire garde forcément ses performances en production.",
    "skills": [
      "q-ml-donnees"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "aiml-q22",
    "prompt": "Quelles pratiques améliorent la fiabilité d’un jeu d’entraînement ?",
    "skills": [
      "q-ml-donnees"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Mélanger toutes les sources sans garder d’historique"
      },
      {
        "id": "b",
        "text": "Retirer les doublons entre entraînement et test"
      },
      {
        "id": "c",
        "text": "Documenter les critères d’étiquetage"
      },
      {
        "id": "d",
        "text": "Tracer la provenance des données"
      }
    ]
  },
  {
    "id": "aiml-q23",
    "prompt": "Comment appelle-t-on, en anglais, le choix et la construction des grandeurs fournies au modèle ? (deux mots)",
    "skills": [
      "q-ml-donnees"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "aiml-q24",
    "prompt": "Quelle conséquence a une fuite de données entre entraînement et test ?",
    "skills": [
      "q-ml-donnees"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un modèle plus rapide à exécuter"
      },
      {
        "id": "b",
        "text": "Des mesures trop optimistes"
      },
      {
        "id": "c",
        "text": "Un chiffrement plus fort du modèle"
      },
      {
        "id": "d",
        "text": "Un jeu de données plus petit"
      }
    ]
  },
  {
    "id": "aiml-q25",
    "prompt": "Que surveille-t-on en production pour un modèle de détection ?",
    "skills": [
      "q-ml-exploitation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Précision, rappel et dérive"
      },
      {
        "id": "b",
        "text": "La température de la salle des serveurs"
      },
      {
        "id": "c",
        "text": "Le nombre de lignes du code du modèle"
      },
      {
        "id": "d",
        "text": "La couleur de l’interface des analystes"
      }
    ]
  },
  {
    "id": "aiml-q26",
    "prompt": "Que faire quand la dérive dégrade les performances d’un modèle ?",
    "skills": [
      "q-ml-exploitation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Désactiver la supervision humaine des alertes"
      },
      {
        "id": "b",
        "text": "Supprimer toutes les journalisations du modèle"
      },
      {
        "id": "c",
        "text": "Analyser puis réentraîner ou ajuster le modèle"
      },
      {
        "id": "d",
        "text": "Ignorer la baisse tant qu’aucun incident n’éclate"
      }
    ]
  },
  {
    "id": "aiml-q27",
    "prompt": "Pourquoi prévoir un retour à la version précédente d’un modèle ?",
    "skills": [
      "q-ml-exploitation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour économiser de l’espace de stockage"
      },
      {
        "id": "b",
        "text": "Pour supprimer l’historique des versions"
      },
      {
        "id": "c",
        "text": "Pour éviter tout réentraînement futur"
      },
      {
        "id": "d",
        "text": "Pour réagir vite à une régression"
      }
    ]
  },
  {
    "id": "aiml-q28",
    "prompt": "Quel contrôle protège l’API d’un modèle contre l’extraction par requêtes massives ?",
    "skills": [
      "q-ml-exploitation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’ouverture à tous sans authentification"
      },
      {
        "id": "b",
        "text": "La suppression de toute limite de requêtes"
      },
      {
        "id": "c",
        "text": "L’affichage de scores très détaillés"
      },
      {
        "id": "d",
        "text": "Limitation de débit et journalisation"
      }
    ]
  },
  {
    "id": "aiml-q29",
    "prompt": "Quel est l’intérêt de signer un fichier de modèle avant son déploiement ?",
    "skills": [
      "q-ml-exploitation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Réduire sa taille sur le disque"
      },
      {
        "id": "b",
        "text": "Vérifier son intégrité"
      },
      {
        "id": "c",
        "text": "Cacher son existence aux utilisateurs"
      },
      {
        "id": "d",
        "text": "Augmenter sa vitesse de calcul"
      }
    ]
  },
  {
    "id": "aiml-q30",
    "prompt": "Un format de modèle qui ne contient que des poids est plus sûr qu’un format pouvant exécuter du code au chargement.",
    "skills": [
      "q-ml-exploitation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "aiml-q31",
    "prompt": "Quels éléments un plan de réponse à un incident de modèle comprend-il ?",
    "skills": [
      "q-ml-exploitation"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "L’analyse des données récentes pour repérer un empoisonnement"
      },
      {
        "id": "b",
        "text": "La désactivation de la journalisation pour aller plus vite"
      },
      {
        "id": "c",
        "text": "La détection d’une baisse brutale de performance"
      },
      {
        "id": "d",
        "text": "Le retour à la version précédente validée"
      }
    ]
  },
  {
    "id": "aiml-q32",
    "prompt": "Comment appelle-t-on le document qui décrit l’usage prévu, les données et les limites d’un modèle ? (deux mots)",
    "skills": [
      "q-ml-exploitation"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "aiml-q33",
    "prompt": "Quel type d’apprentissage regroupe des éléments sans disposer d’étiquettes ?",
    "skills": [
      "q-ml-bases"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’apprentissage supervisé classique"
      },
      {
        "id": "b",
        "text": "Le chiffrement asymétrique"
      },
      {
        "id": "c",
        "text": "L’apprentissage non supervisé"
      },
      {
        "id": "d",
        "text": "La sauvegarde incrémentale"
      }
    ]
  },
  {
    "id": "aiml-q34",
    "prompt": "Que mesure le rappel d’un détecteur ?",
    "skills": [
      "q-ml-eval"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La part des attaques détectées"
      },
      {
        "id": "b",
        "text": "La rapidité de traitement des alertes"
      },
      {
        "id": "c",
        "text": "La part des alertes qui sont justifiées"
      },
      {
        "id": "d",
        "text": "Le nombre d’analystes mobilisés"
      }
    ]
  },
  {
    "id": "aiml-q35",
    "prompt": "Quand les attaques sont très rares, qu’est-ce qui explique le plus le flot de fausses alertes ?",
    "skills": [
      "q-ml-eval"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La couleur du tableau de bord du SOC"
      },
      {
        "id": "b",
        "text": "Le nombre d’analystes de garde"
      },
      {
        "id": "c",
        "text": "Le taux de faux positifs sur un gros volume"
      },
      {
        "id": "d",
        "text": "Le choix d’un matériel de calcul plus rapide"
      }
    ]
  },
  {
    "id": "aiml-q36",
    "prompt": "Que doit accompagner une alerte produite par un modèle à destination de l’analyste ?",
    "skills": [
      "q-ml-soc"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les éléments qui la justifient"
      },
      {
        "id": "b",
        "text": "Le code source complet du modèle"
      },
      {
        "id": "c",
        "text": "Une consigne de la clore sans examen"
      },
      {
        "id": "d",
        "text": "La liste des mots de passe de l’équipe"
      }
    ]
  },
  {
    "id": "aiml-q37",
    "prompt": "Quelle attaque cherche à faire mal classer une entrée sans changer son effet réel ?",
    "skills": [
      "q-ml-robustesse"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’inversion de modèle"
      },
      {
        "id": "b",
        "text": "L’évasion"
      },
      {
        "id": "c",
        "text": "L’empoisonnement des données"
      },
      {
        "id": "d",
        "text": "Le déni de service distribué"
      }
    ]
  },
  {
    "id": "aiml-q38",
    "prompt": "Une IA peut décider seule d’isoler un serveur de production sans validation ni trace.",
    "skills": [
      "q-ml-soc"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "aiml-q39",
    "prompt": "Quelle technique ajoute un bruit calibré pour limiter les fuites sur les individus ?",
    "skills": [
      "q-ml-robustesse"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La redirection de port"
      },
      {
        "id": "b",
        "text": "La mise en cache des requêtes"
      },
      {
        "id": "c",
        "text": "La compression sans perte"
      },
      {
        "id": "d",
        "text": "La confidentialité différentielle appliquée"
      }
    ]
  },
  {
    "id": "aiml-q40",
    "prompt": "Quelles défenses réduisent l’efficacité de l’évasion ?",
    "skills": [
      "q-ml-robustesse"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Utiliser des caractéristiques difficiles à manipuler"
      },
      {
        "id": "b",
        "text": "Combiner plusieurs détecteurs indépendants"
      },
      {
        "id": "c",
        "text": "Réentraîner avec les variantes modifiées découvertes"
      },
      {
        "id": "d",
        "text": "Renvoyer des scores détaillés à tout demandeur"
      }
    ]
  }
];
