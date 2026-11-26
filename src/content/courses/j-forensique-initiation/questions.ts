// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "jfi-q1",
    "prompt": "Que cherche à établir une investigation numérique ?",
    "skills": [
      "j-ini-role"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La couleur des câbles du réseau de bureau"
      },
      {
        "id": "b",
        "text": "Le nombre de salariés présents dans le service"
      },
      {
        "id": "c",
        "text": "Ce qui s’est passé, quand et comment"
      },
      {
        "id": "d",
        "text": "Le prix de revente du matériel informatique"
      }
    ]
  },
  {
    "id": "jfi-q2",
    "prompt": "Dans quelle situation fait-on appel à la forensique ?",
    "skills": [
      "j-ini-role"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour acheter un nouvel ordinateur"
      },
      {
        "id": "b",
        "text": "Après une intrusion ou une fraude"
      },
      {
        "id": "c",
        "text": "Pour organiser une réunion"
      },
      {
        "id": "d",
        "text": "Pour choisir un fond d’écran"
      }
    ]
  },
  {
    "id": "jfi-q3",
    "prompt": "Les conclusions d’une investigation numérique peuvent être produites devant un tribunal.",
    "skills": [
      "j-ini-role"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "jfi-q4",
    "prompt": "Quel mot (en anglais) désigne couramment l’investigation numérique ?",
    "skills": [
      "j-ini-role"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "jfi-q5",
    "prompt": "Pourquoi la rigueur de la méthode compte-t-elle autant que la technique ?",
    "skills": [
      "j-ini-role"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Parce que la technique est inutile"
      },
      {
        "id": "b",
        "text": "Parce que les outils sont tous identiques"
      },
      {
        "id": "c",
        "text": "Parce que la méthode remplace les preuves"
      },
      {
        "id": "d",
        "text": "Une conclusion doit pouvoir être défendue"
      }
    ]
  },
  {
    "id": "jfi-q6",
    "prompt": "À quelles questions une investigation numérique aide-t-elle à répondre ?",
    "skills": [
      "j-ini-role"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Comment l’incident est-il arrivé ?"
      },
      {
        "id": "b",
        "text": "Quand cela s’est-il produit ?"
      },
      {
        "id": "c",
        "text": "Quel sera le cours de la bourse demain ?"
      },
      {
        "id": "d",
        "text": "Que s’est-il passé ?"
      }
    ]
  },
  {
    "id": "jfi-q7",
    "prompt": "Quelle est la différence entre la réponse à incident et la forensique ?",
    "skills": [
      "j-ini-role"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Contenir d’un côté, prouver de l’autre"
      },
      {
        "id": "b",
        "text": "La forensique n’est jamais utile en incident"
      },
      {
        "id": "c",
        "text": "La réponse à incident ignore les preuves"
      },
      {
        "id": "d",
        "text": "Il n’y en a aucune"
      }
    ]
  },
  {
    "id": "jfi-q8",
    "prompt": "Qu’est-ce qu’une preuve numérique ?",
    "skills": [
      "j-ini-preuve"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un document imprimé uniquement sur papier"
      },
      {
        "id": "b",
        "text": "Un logiciel de bureautique installé sur le poste"
      },
      {
        "id": "c",
        "text": "Un mot de passe oublié par un utilisateur"
      },
      {
        "id": "d",
        "text": "Une donnée qui permet d’établir un fait"
      }
    ]
  },
  {
    "id": "jfi-q9",
    "prompt": "Quelle donnée disparaît à l’extinction d’un ordinateur ?",
    "skills": [
      "j-ini-preuve"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le contenu de la mémoire vive"
      },
      {
        "id": "b",
        "text": "Les fichiers enregistrés du disque"
      },
      {
        "id": "c",
        "text": "Les sauvegardes conservées ailleurs"
      },
      {
        "id": "d",
        "text": "Les photos enregistrées sur le disque"
      }
    ]
  },
  {
    "id": "jfi-q10",
    "prompt": "On peut travailler directement sur le disque original sans risque pour la preuve.",
    "skills": [
      "j-ini-preuve"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "jfi-q11",
    "prompt": "Selon l’ordre de volatilité, que collecte-t-on en premier ?",
    "skills": [
      "j-ini-preuve"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les archives"
      },
      {
        "id": "b",
        "text": "Les documents imprimés"
      },
      {
        "id": "c",
        "text": "La mémoire vive"
      },
      {
        "id": "d",
        "text": "Les sauvegardes"
      }
    ]
  },
  {
    "id": "jfi-q12",
    "prompt": "Lesquels sont des exemples de preuves numériques ?",
    "skills": [
      "j-ini-preuve"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "L’avis d’un voisin sans lien avec les faits"
      },
      {
        "id": "b",
        "text": "Un fichier supprimé récupérable"
      },
      {
        "id": "c",
        "text": "Une image de la mémoire vive"
      },
      {
        "id": "d",
        "text": "Un journal de connexions"
      }
    ]
  },
  {
    "id": "jfi-q13",
    "prompt": "Comment appelle-t-on une copie exacte, bit à bit, d’un support de stockage ?",
    "skills": [
      "j-ini-preuve"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "jfi-q14",
    "prompt": "Que perd-on si l’on éteint un ordinateur sans réfléchir ?",
    "skills": [
      "j-ini-preuve"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les fichiers enregistrés sur le disque"
      },
      {
        "id": "b",
        "text": "Le contenu de la mémoire vive"
      },
      {
        "id": "c",
        "text": "Les connexions réseau ouvertes"
      },
      {
        "id": "d",
        "text": "Les processus en cours"
      }
    ]
  },
  {
    "id": "jfi-q15",
    "prompt": "À quoi sert l’empreinte (hash) d’une image ?",
    "skills": [
      "j-ini-integrite"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À la rendre plus rapide à copier"
      },
      {
        "id": "b",
        "text": "À vérifier qu’elle n’a pas changé"
      },
      {
        "id": "c",
        "text": "À la compresser pour gagner de la place"
      },
      {
        "id": "d",
        "text": "À la chiffrer pour la protéger"
      }
    ]
  },
  {
    "id": "jfi-q16",
    "prompt": "Si un seul bit d’une image change, son empreinte change aussi.",
    "skills": [
      "j-ini-integrite"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "jfi-q17",
    "prompt": "Quel algorithme de hachage est couramment utilisé aujourd’hui pour l’empreinte des images ?",
    "skills": [
      "j-ini-integrite"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom de l’algorithme"
  },
  {
    "id": "jfi-q18",
    "prompt": "Que consigne la chaîne de conservation ?",
    "skills": [
      "j-ini-integrite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le prix de l’outil utilisé"
      },
      {
        "id": "b",
        "text": "Qui a eu la preuve, quand et pourquoi"
      },
      {
        "id": "c",
        "text": "L’avis du public"
      },
      {
        "id": "d",
        "text": "Les mots de passe des enquêteurs"
      }
    ]
  },
  {
    "id": "jfi-q19",
    "prompt": "À quoi sert un bloqueur d’écriture ?",
    "skills": [
      "j-ini-integrite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À lire un support sans pouvoir y écrire"
      },
      {
        "id": "b",
        "text": "À supprimer des fichiers"
      },
      {
        "id": "c",
        "text": "À écrire plus vite sur le support"
      },
      {
        "id": "d",
        "text": "À chiffrer le support"
      }
    ]
  },
  {
    "id": "jfi-q20",
    "prompt": "Quelles informations figurent sur une fiche de scellé ?",
    "skills": [
      "j-ini-integrite"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "L’identifiant et la description du support"
      },
      {
        "id": "b",
        "text": "L’avis personnel sur la culpabilité d’un salarié"
      },
      {
        "id": "c",
        "text": "La date, le lieu et la personne qui a collecté"
      },
      {
        "id": "d",
        "text": "L’empreinte calculée"
      }
    ]
  },
  {
    "id": "jfi-q21",
    "prompt": "Que permet une rupture dans la chaîne de conservation ?",
    "skills": [
      "j-ini-integrite"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "De la compresser"
      },
      {
        "id": "b",
        "text": "De la rendre plus solide"
      },
      {
        "id": "c",
        "text": "De contester la preuve"
      },
      {
        "id": "d",
        "text": "De la rendre invisible"
      }
    ]
  },
  {
    "id": "jfi-q22",
    "prompt": "Où trouve-t-on les connexions réussies et échouées à un système ?",
    "skills": [
      "j-ini-traces"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Dans le fond d’écran du bureau"
      },
      {
        "id": "b",
        "text": "Dans la corbeille uniquement, seule"
      },
      {
        "id": "c",
        "text": "Dans la liste des polices installées"
      },
      {
        "id": "d",
        "text": "Dans les journaux d’authentification"
      }
    ]
  },
  {
    "id": "jfi-q23",
    "prompt": "Que révèle l’historique d’un navigateur ?",
    "skills": [
      "j-ini-traces"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pages visitées et téléchargements"
      },
      {
        "id": "b",
        "text": "Le contenu de la mémoire vive"
      },
      {
        "id": "c",
        "text": "La liste des mots de passe du système"
      },
      {
        "id": "d",
        "text": "Les journaux du pare-feu"
      }
    ]
  },
  {
    "id": "jfi-q24",
    "prompt": "Un fichier supprimé peut parfois être récupéré.",
    "skills": [
      "j-ini-traces"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "jfi-q25",
    "prompt": "Que sont les métadonnées d’un fichier ?",
    "skills": [
      "j-ini-traces"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le contenu entier et complet du fichier"
      },
      {
        "id": "b",
        "text": "Des informations sur le fichier (dates, auteur)"
      },
      {
        "id": "c",
        "text": "Une sauvegarde de sécurité du fichier"
      },
      {
        "id": "d",
        "text": "Un virus caché dans le fichier"
      }
    ]
  },
  {
    "id": "jfi-q26",
    "prompt": "Quel artefact Windows indique qu’un programme a été exécuté ?",
    "skills": [
      "j-ini-traces"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La corbeille vide"
      },
      {
        "id": "b",
        "text": "L’écran de veille"
      },
      {
        "id": "c",
        "text": "Le papier peint"
      },
      {
        "id": "d",
        "text": "Le Prefetch"
      }
    ]
  },
  {
    "id": "jfi-q27",
    "prompt": "Quel fichier d’un compte Linux conserve l’historique des commandes saisies ?",
    "skills": [
      "j-ini-traces"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom du fichier"
  },
  {
    "id": "jfi-q28",
    "prompt": "Qu’est-ce qui permet de dater un événement de façon plus fiable ?",
    "skills": [
      "j-ini-traces",
      "j-ini-chrono"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La seule date d’accès d’un fichier"
      },
      {
        "id": "b",
        "text": "Des journaux protégés contre l’effacement"
      },
      {
        "id": "c",
        "text": "Plusieurs sources indépendantes concordantes"
      },
      {
        "id": "d",
        "text": "Des horloges synchronisées"
      }
    ]
  },
  {
    "id": "jfi-q29",
    "prompt": "À quoi sert une chronologie ?",
    "skills": [
      "j-ini-chrono"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À choisir un antivirus pour l’entreprise"
      },
      {
        "id": "b",
        "text": "À supprimer les journaux anciens du système"
      },
      {
        "id": "c",
        "text": "À ordonner les événements pour comprendre"
      },
      {
        "id": "d",
        "text": "À accélérer le démarrage de l’ordinateur"
      }
    ]
  },
  {
    "id": "jfi-q30",
    "prompt": "Pourquoi convertit-on les horodatages en UTC ?",
    "skills": [
      "j-ini-chrono"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour les comparer sans ambiguïté de fuseau"
      },
      {
        "id": "b",
        "text": "Pour les chiffrer avant de les stocker"
      },
      {
        "id": "c",
        "text": "Pour réduire leur taille de stockage"
      },
      {
        "id": "d",
        "text": "Pour les supprimer des journaux d’origine"
      }
    ]
  },
  {
    "id": "jfi-q31",
    "prompt": "Un journal en heure de Paris (hiver) indique 14:00. Quelle heure UTC cela représente-t-il ?",
    "skills": [
      "j-ini-chrono"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "15:00"
      },
      {
        "id": "b",
        "text": "13:00"
      },
      {
        "id": "c",
        "text": "14:00"
      },
      {
        "id": "d",
        "text": "12:00"
      }
    ]
  },
  {
    "id": "jfi-q32",
    "prompt": "Un seul journal suffit à établir une chronologie fiable.",
    "skills": [
      "j-ini-chrono"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "jfi-q33",
    "prompt": "Un serveur a une horloge en retard de cinq minutes. Que faire dans la chronologie ?",
    "skills": [
      "j-ini-chrono"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Supprimer tous ses journaux d’événements"
      },
      {
        "id": "b",
        "text": "Ne rien changer dans la chronologie"
      },
      {
        "id": "c",
        "text": "Noter la dérive et corriger les heures"
      },
      {
        "id": "d",
        "text": "Ignorer ce serveur dans l’enquête"
      }
    ]
  },
  {
    "id": "jfi-q34",
    "prompt": "Comment appelle-t-on le nombre de secondes écoulées depuis le 1er janvier 1970 à 00:00:00 UTC ?",
    "skills": [
      "j-ini-chrono"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un terme"
  },
  {
    "id": "jfi-q35",
    "prompt": "Que vérifier avant d’examiner l’ordinateur d’un salarié ?",
    "skills": [
      "j-ini-cadre"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Qu’il est de bonne humeur ce jour-là"
      },
      {
        "id": "b",
        "text": "Qu’aucun collègue n’est présent dans le bureau"
      },
      {
        "id": "c",
        "text": "Que le disque dur est un modèle récent"
      },
      {
        "id": "d",
        "text": "Que l’on y est autorisé dans un cadre légal"
      }
    ]
  },
  {
    "id": "jfi-q36",
    "prompt": "Un enquêteur peut lire tous les messages privés d’un salarié sans aucune limite.",
    "skills": [
      "j-ini-cadre"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "jfi-q37",
    "prompt": "Face à un poste suspect allumé, quel est le bon premier réflexe ?",
    "skills": [
      "j-ini-cadre"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ne pas y toucher, l’isoler et prévenir"
      },
      {
        "id": "b",
        "text": "Lancer un nettoyage"
      },
      {
        "id": "c",
        "text": "Supprimer les fichiers étranges"
      },
      {
        "id": "d",
        "text": "Le redémarrer pour voir"
      }
    ]
  },
  {
    "id": "jfi-q38",
    "prompt": "Documenter ses propres actions sur le système fait partie de la méthode.",
    "skills": [
      "j-ini-cadre",
      "j-ini-integrite"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "jfi-q39",
    "prompt": "Un collègue soupçonne une fuite de données depuis un ordinateur. Que lui dites-vous de faire et de ne pas faire en attendant l’équipe de sécurité ?",
    "skills": [
      "j-ini-cadre",
      "j-ini-preuve"
    ],
    "difficulty": 2,
    "type": "open"
  },
  {
    "id": "jfi-q40",
    "prompt": "Expliquez pourquoi on calcule une empreinte avant et après avoir copié un disque.",
    "skills": [
      "j-ini-integrite",
      "j-ini-preuve"
    ],
    "difficulty": 2,
    "type": "open"
  },
  {
    "id": "jfi-q41",
    "prompt": "Un poste suspect est allumé. Quel est le premier geste le plus approprié avant toute collecte ?",
    "skills": [
      "j-ini-preuve"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Redémarrer le poste pour retrouver un état stable"
      },
      {
        "id": "b",
        "text": "Le déconnecter du réseau en le laissant sous tension"
      },
      {
        "id": "c",
        "text": "L’éteindre immédiatement pour figer son état"
      },
      {
        "id": "d",
        "text": "Lancer un antivirus pour le nettoyer"
      }
    ]
  },
  {
    "id": "jfi-q42",
    "prompt": "Dans quel ordre collecte-t-on les données d’un poste, d’après l’ordre de volatilité ?",
    "skills": [
      "j-ini-preuve"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Sauvegardes, disque, état du réseau, mémoire vive"
      },
      {
        "id": "b",
        "text": "Peu importe, tout se conserve de la même façon"
      },
      {
        "id": "c",
        "text": "Disque, mémoire vive, état du réseau, sauvegardes"
      },
      {
        "id": "d",
        "text": "Mémoire vive, état du réseau, disque, sauvegardes"
      }
    ]
  },
  {
    "id": "jfi-q43",
    "prompt": "Que démontre la même empreinte SHA-256 calculée sur l’original puis sur une copie ?",
    "skills": [
      "j-ini-integrite"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Que la copie a été réalisée par une personne habilitée"
      },
      {
        "id": "b",
        "text": "Que l’original n’a jamais été modifié avant la collecte"
      },
      {
        "id": "c",
        "text": "Que la copie est identique à l’original, bit à bit"
      },
      {
        "id": "d",
        "text": "Que le fichier ne contient aucun logiciel malveillant"
      }
    ]
  },
  {
    "id": "jfi-q44",
    "prompt": "Quelle commande Linux vérifie un fichier de sommes de contrôle SHA-256 (nom de la commande seul) ?",
    "skills": [
      "j-ini-integrite"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "commande"
  }
];
