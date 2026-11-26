// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "qip-q1",
    "prompt": "Quels éléments structurent une bonne demande à un assistant ?",
    "skills": [
      "q-pra-prompts"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le contexte, la tâche, le format et les contraintes"
      },
      {
        "id": "b",
        "text": "Uniquement les mots de passe nécessaires à la tâche"
      },
      {
        "id": "c",
        "text": "Uniquement le nom de l’utilisateur qui la rédige"
      },
      {
        "id": "d",
        "text": "Uniquement un mot unique sans aucun détail"
      }
    ]
  },
  {
    "id": "qip-q2",
    "prompt": "Pourquoi séparer clairement les consignes des données à traiter dans une demande ?",
    "skills": [
      "q-pra-prompts"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Rendre la demande plus longue à lire pour tous"
      },
      {
        "id": "b",
        "text": "Chiffrer automatiquement le texte envoyé"
      },
      {
        "id": "c",
        "text": "Réduire le risque de confusion avec une consigne"
      },
      {
        "id": "d",
        "text": "Empêcher l’assistant de produire la moindre réponse"
      }
    ]
  },
  {
    "id": "qip-q3",
    "prompt": "Que faire des identifiants d’accès et des clés lors de la rédaction d’une demande ?",
    "skills": [
      "q-pra-prompts"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les placer au début pour donner du contexte"
      },
      {
        "id": "b",
        "text": "Ne jamais les inclure"
      },
      {
        "id": "c",
        "text": "Les masquer à moitié seulement"
      },
      {
        "id": "d",
        "text": "Les envoyer par un second message"
      }
    ]
  },
  {
    "id": "qip-q4",
    "prompt": "Pourquoi demander à l’assistant d’indiquer ses sources ou ses hypothèses ?",
    "skills": [
      "q-pra-prompts"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour supprimer le besoin de relecture"
      },
      {
        "id": "b",
        "text": "Pour obtenir une réponse toujours exacte"
      },
      {
        "id": "c",
        "text": "Pour rendre la réponse impossible à contester"
      },
      {
        "id": "d",
        "text": "Pour faciliter la vérification de la réponse"
      }
    ]
  },
  {
    "id": "qip-q5",
    "prompt": "Reformuler et préciser une demande améliore souvent la réponse obtenue.",
    "skills": [
      "q-pra-prompts"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "qip-q6",
    "prompt": "Une demande longue et détaillée garantit une réponse sans erreur.",
    "skills": [
      "q-pra-prompts"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "qip-q7",
    "prompt": "Comment appelle-t-on les consignes du développeur placées avant la conversation pour fixer le rôle d’un assistant ? (deux mots)",
    "skills": [
      "q-pra-prompts"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "qip-q8",
    "prompt": "Quelles bonnes pratiques s’appliquent à la rédaction d’une demande ?",
    "skills": [
      "q-pra-prompts"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Ajouter des secrets pour donner du contexte"
      },
      {
        "id": "b",
        "text": "Préciser le format de sortie attendu"
      },
      {
        "id": "c",
        "text": "Retirer les informations sensibles inutiles"
      },
      {
        "id": "d",
        "text": "Délimiter les données fournies"
      }
    ]
  },
  {
    "id": "qip-q9",
    "prompt": "Quel usage d’un assistant est raisonnable pour un analyste de sécurité ?",
    "skills": [
      "q-pra-assistants"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Effacer les journaux après chaque usage"
      },
      {
        "id": "b",
        "text": "Désactiver les alertes qui l’ennuient"
      },
      {
        "id": "c",
        "text": "Rédiger un projet de résumé d’incident"
      },
      {
        "id": "d",
        "text": "Choisir seul de licencier un collègue"
      }
    ]
  },
  {
    "id": "qip-q10",
    "prompt": "Que faire d’une requête de recherche proposée par un assistant ?",
    "skills": [
      "q-pra-assistants"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La relire et la tester sur un petit périmètre"
      },
      {
        "id": "b",
        "text": "L’exécuter directement sur tous les systèmes"
      },
      {
        "id": "c",
        "text": "La publier telle quelle comme règle de détection"
      },
      {
        "id": "d",
        "text": "L’ignorer parce qu’elle vient d’une machine"
      }
    ]
  },
  {
    "id": "qip-q11",
    "prompt": "Quel avantage l’enrichissement d’une alerte par un assistant apporte-t-il ?",
    "skills": [
      "q-pra-assistants"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Transformer l’alerte en incident majeur"
      },
      {
        "id": "b",
        "text": "Rassembler rapidement le contexte utile"
      },
      {
        "id": "c",
        "text": "Supprimer la nécessité d’une enquête"
      },
      {
        "id": "d",
        "text": "Rendre l’alerte confidentielle pour tous"
      }
    ]
  },
  {
    "id": "qip-q12",
    "prompt": "Pourquoi ne pas déléguer à l’assistant la qualification finale d’un incident majeur ?",
    "skills": [
      "q-pra-assistants"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les analystes n’ont plus besoin d’être formés"
      },
      {
        "id": "b",
        "text": "L’assistant refuse toujours de répondre"
      },
      {
        "id": "c",
        "text": "Les incidents majeurs n’ont pas de journaux"
      },
      {
        "id": "d",
        "text": "La responsabilité reste humaine"
      }
    ]
  },
  {
    "id": "qip-q13",
    "prompt": "L’assistant peut proposer une requête, mais c’est l’analyste qui en répond.",
    "skills": [
      "q-pra-assistants"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "qip-q14",
    "prompt": "Quel mot désigne le regroupement des alertes qui concernent le même hôte, le même compte ou la même campagne ? (un mot)",
    "skills": [
      "q-pra-assistants"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "qip-q15",
    "prompt": "Quelles tâches un assistant peut-il aider à accomplir dans un SOC ?",
    "skills": [
      "q-pra-assistants"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Résumer une chronologie d’événements"
      },
      {
        "id": "b",
        "text": "Expliquer un message d’erreur"
      },
      {
        "id": "c",
        "text": "Proposer une requête de recherche"
      },
      {
        "id": "d",
        "text": "Décider seul de clore un incident majeur"
      }
    ]
  },
  {
    "id": "qip-q16",
    "prompt": "Un assistant propose une requête qui supprime des enregistrements pour « nettoyer » les alertes. Que faites-vous ?",
    "skills": [
      "q-pra-assistants"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "qip-q17",
    "prompt": "À quoi sert un jeu de tests pour un assistant ?",
    "skills": [
      "q-pra-evaluation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À augmenter sa vitesse de réponse"
      },
      {
        "id": "b",
        "text": "À supprimer toutes les erreurs du modèle"
      },
      {
        "id": "c",
        "text": "À chiffrer toutes ses réponses futures"
      },
      {
        "id": "d",
        "text": "À mesurer sa qualité sur des cas connus"
      }
    ]
  },
  {
    "id": "qip-q18",
    "prompt": "Que mesure le taux d’hallucination d’un assistant ?",
    "skills": [
      "q-pra-evaluation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La part des réponses envoyées en dehors des heures"
      },
      {
        "id": "b",
        "text": "La part des réponses contenant des faits inventés"
      },
      {
        "id": "c",
        "text": "La part des réponses écrites trop lentement"
      },
      {
        "id": "d",
        "text": "La part des utilisateurs qui lisent les réponses"
      }
    ]
  },
  {
    "id": "qip-q19",
    "prompt": "Pourquoi inclure des cas d’injection dans le jeu de tests ?",
    "skills": [
      "q-pra-evaluation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Vérifier sa résistance aux détournements"
      },
      {
        "id": "b",
        "text": "Rendre les tests plus faciles à réussir"
      },
      {
        "id": "c",
        "text": "Réduire le nombre de tests à jouer"
      },
      {
        "id": "d",
        "text": "Remplacer la relecture humaine des réponses"
      }
    ]
  },
  {
    "id": "qip-q20",
    "prompt": "Pourquoi rejouer les tests après un changement de modèle ou de consigne ?",
    "skills": [
      "q-pra-evaluation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les analystes oublient les anciens résultats"
      },
      {
        "id": "b",
        "text": "Le fournisseur l’exige par contrat"
      },
      {
        "id": "c",
        "text": "Le comportement peut changer sans prévenir"
      },
      {
        "id": "d",
        "text": "Les tests s’effacent d’eux-mêmes chaque mois"
      }
    ]
  },
  {
    "id": "qip-q21",
    "prompt": "Un échantillon de réponses relu par des personnes complète les mesures automatiques.",
    "skills": [
      "q-pra-evaluation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "qip-q22",
    "prompt": "Une bonne note sur un jeu de tests garantit la qualité de l’assistant pour tous les usages futurs.",
    "skills": [
      "q-pra-evaluation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "qip-q23",
    "prompt": "Comment appelle-t-on, en anglais, les tests menés par un adversaire simulé pour trouver les faiblesses d’un système d’IA ? (deux mots)",
    "skills": [
      "q-pra-evaluation"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "qip-q24",
    "prompt": "Quels éléments comporte un bon jeu de tests ?",
    "skills": [
      "q-pra-evaluation"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Des cas limites et ambigus"
      },
      {
        "id": "b",
        "text": "Des cas d’injection et de fuite de données"
      },
      {
        "id": "c",
        "text": "Uniquement des cas très faciles à réussir"
      },
      {
        "id": "d",
        "text": "Des cas représentatifs des usages réels"
      }
    ]
  },
  {
    "id": "qip-q25",
    "prompt": "Quelle précaution limite la portée des droits d’un assistant connecté à des outils ?",
    "skills": [
      "q-pra-controles"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Lui donner un accès sans journalisation"
      },
      {
        "id": "b",
        "text": "Lui donner tous les outils disponibles"
      },
      {
        "id": "c",
        "text": "Ne lui donner que les outils utiles"
      },
      {
        "id": "d",
        "text": "Lui donner un compte administrateur"
      }
    ]
  },
  {
    "id": "qip-q26",
    "prompt": "Quelle action doit passer par une confirmation humaine ?",
    "skills": [
      "q-pra-controles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le calcul d’une somme simple à partir de données publiques"
      },
      {
        "id": "b",
        "text": "L’envoi d’un message externe ou un paiement"
      },
      {
        "id": "c",
        "text": "La mise en forme d’un tableau de chiffres"
      },
      {
        "id": "d",
        "text": "La lecture d’un texte public disponible en ligne"
      }
    ]
  },
  {
    "id": "qip-q27",
    "prompt": "Pourquoi séparer l’environnement de test de la production pour un assistant ?",
    "skills": [
      "q-pra-controles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Accélérer toutes les requêtes du modèle"
      },
      {
        "id": "b",
        "text": "Réduire le coût de la licence du modèle utilisé"
      },
      {
        "id": "c",
        "text": "Empêcher les analystes de s’exercer"
      },
      {
        "id": "d",
        "text": "Éviter qu’un test touche les systèmes réels"
      }
    ]
  },
  {
    "id": "qip-q28",
    "prompt": "Comment traiter la sortie d’un assistant avant de l’exécuter ou de l’afficher comme code ?",
    "skills": [
      "q-pra-controles"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La considérer comme non fiable et la valider"
      },
      {
        "id": "b",
        "text": "La croire sans contrôle parce qu’elle est fluide"
      },
      {
        "id": "c",
        "text": "La transmettre telle quelle à la production"
      },
      {
        "id": "d",
        "text": "La chiffrer avant de la lire"
      }
    ]
  },
  {
    "id": "qip-q29",
    "prompt": "Journaliser les appels d’outils d’un assistant permet d’enquêter après un incident.",
    "skills": [
      "q-pra-controles"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "qip-q30",
    "prompt": "Quel principe donne à un compte ou à un assistant les seuls droits nécessaires à sa tâche ? (deux mots)",
    "skills": [
      "q-pra-controles"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "qip-q31",
    "prompt": "Quelles mesures encadrent un assistant qui peut agir sur des outils ?",
    "skills": [
      "q-pra-controles"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Une confirmation pour les actions sensibles"
      },
      {
        "id": "b",
        "text": "Des outils limités à la tâche"
      },
      {
        "id": "c",
        "text": "La journalisation des appels d’outils"
      },
      {
        "id": "d",
        "text": "Des droits d’administrateur par défaut"
      }
    ]
  },
  {
    "id": "qip-q32",
    "prompt": "Vous devez autoriser un assistant à créer des tickets et à envoyer des courriels. Quels contrôles mettez-vous en place ?",
    "skills": [
      "q-pra-controles"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "qip-q33",
    "prompt": "Que précise une politique d’usage de l’IA dans une organisation ?",
    "skills": [
      "q-pra-politique"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les outils autorisés et les données permises"
      },
      {
        "id": "b",
        "text": "La couleur des interfaces utilisées"
      },
      {
        "id": "c",
        "text": "La liste des mots de passe de chaque équipe"
      },
      {
        "id": "d",
        "text": "Le nombre de salariés du service informatique"
      }
    ]
  },
  {
    "id": "qip-q34",
    "prompt": "Quel texte européen encadre les systèmes d’IA selon leur niveau de risque ?",
    "skills": [
      "q-pra-politique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le code de la route européen"
      },
      {
        "id": "b",
        "text": "Le règlement sur les taxis"
      },
      {
        "id": "c",
        "text": "La directive sur les emballages"
      },
      {
        "id": "d",
        "text": "Le règlement européen sur l’IA"
      }
    ]
  },
  {
    "id": "qip-q35",
    "prompt": "Que faire si un employé a saisi des données sensibles dans un outil non validé ?",
    "skills": [
      "q-pra-politique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Recommencer pour vérifier le résultat"
      },
      {
        "id": "b",
        "text": "Le cacher pour éviter les reproches"
      },
      {
        "id": "c",
        "text": "Le signaler vite pour évaluer l’impact"
      },
      {
        "id": "d",
        "text": "Attendre qu’un incident se produise vraiment"
      }
    ]
  },
  {
    "id": "qip-q36",
    "prompt": "Pourquoi classer les données avant de choisir un outil d’IA ?",
    "skills": [
      "q-pra-politique"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Réduire le nombre de comptes utilisateurs"
      },
      {
        "id": "b",
        "text": "Savoir quelles données peuvent y aller"
      },
      {
        "id": "c",
        "text": "Supprimer les données les plus anciennes"
      },
      {
        "id": "d",
        "text": "Choisir la couleur de l’interface"
      }
    ]
  },
  {
    "id": "qip-q37",
    "prompt": "Interdire tout outil d’IA suffit à supprimer le risque lié aux usages non déclarés.",
    "skills": [
      "q-pra-politique"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "qip-q38",
    "prompt": "Quels éléments un registre des usages d’IA contient-il ?",
    "skills": [
      "q-pra-politique"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les données traitées"
      },
      {
        "id": "b",
        "text": "Le responsable de l’usage"
      },
      {
        "id": "c",
        "text": "Les mots de passe des utilisateurs"
      },
      {
        "id": "d",
        "text": "Les outils utilisés"
      }
    ]
  },
  {
    "id": "qip-q39",
    "prompt": "Quelles actions complètent une politique d’usage de l’IA ?",
    "skills": [
      "q-pra-politique"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Former les utilisateurs"
      },
      {
        "id": "b",
        "text": "Proposer des outils validés"
      },
      {
        "id": "c",
        "text": "Ignorer les usages non déclarés"
      },
      {
        "id": "d",
        "text": "Prévoir une procédure d’incident"
      }
    ]
  },
  {
    "id": "qip-q40",
    "prompt": "Quel sigle désigne le règlement européen sur la protection des données personnelles ? (quatre lettres)",
    "skills": [
      "q-pra-politique"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "quatre lettres"
  }
];
