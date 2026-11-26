// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "cl-q1",
    "prompt": "En SaaS, qui est responsable de la gestion des comptes utilisateurs et de leurs droits ?",
    "skills": [
      "l-shared"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Personne"
      },
      {
        "id": "b",
        "text": "Le client"
      },
      {
        "id": "c",
        "text": "Le fournisseur d’accès à Internet"
      },
      {
        "id": "d",
        "text": "Le fournisseur SaaS uniquement"
      }
    ]
  },
  {
    "id": "cl-q2",
    "prompt": "En IaaS, l’application des correctifs du système d’exploitation des machines virtuelles relève du client.",
    "skills": [
      "l-shared"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cl-q3",
    "prompt": "Quelle qualification de l’ANSSI s’applique aux offres cloud de confiance ?",
    "skills": [
      "l-shared"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom de la qualification"
  },
  {
    "id": "cl-q15",
    "prompt": "Un prestataire doit récupérer chaque nuit les sauvegardes d’un compartiment. Proposez une solution sans rendre le compartiment public.",
    "skills": [
      "l-storage",
      "l-shared"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "cl-q31",
    "prompt": "En PaaS, que reste-t-il sous la responsabilité du client ?",
    "skills": [
      "l-shared"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’hyperviseur"
      },
      {
        "id": "b",
        "text": "Le câblage du réseau du fournisseur"
      },
      {
        "id": "c",
        "text": "Le matériel du centre de données"
      },
      {
        "id": "d",
        "text": "Les données et la configuration"
      }
    ]
  },
  {
    "id": "cl-q32",
    "prompt": "En SaaS, le fournisseur gère aussi les droits des utilisateurs du client à sa place.",
    "skills": [
      "l-shared"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cl-q4",
    "prompt": "Une politique contient un Allow sur `s3:*` et un Deny sur `s3:DeleteObject` pour la même ressource. La suppression est :",
    "skills": [
      "l-iam"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Refusée, le refus explicite l’emporte"
      },
      {
        "id": "b",
        "text": "Autorisée une fois sur deux"
      },
      {
        "id": "c",
        "text": "Soumise à validation manuelle"
      },
      {
        "id": "d",
        "text": "Autorisée, car Allow s3:* couvre tout"
      }
    ]
  },
  {
    "id": "cl-q5",
    "prompt": "En l’absence de toute déclaration correspondante, une action IAM est refusée par défaut.",
    "skills": [
      "l-iam"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cl-q6",
    "prompt": "Quelles permissions permettent souvent une élévation de privilèges dans un compte cloud ?",
    "skills": [
      "l-iam"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`s3:GetObject` sur un compartiment de journaux"
      },
      {
        "id": "b",
        "text": "`iam:AttachUserPolicy`"
      },
      {
        "id": "c",
        "text": "`iam:CreateAccessKey` sur d’autres utilisateurs"
      },
      {
        "id": "d",
        "text": "`iam:PassRole` combinée à la création de ressources de calcul"
      }
    ]
  },
  {
    "id": "cl-q7",
    "prompt": "Quel effet IAM a toujours priorité lorsqu’il correspond à une requête ? (en anglais)",
    "skills": [
      "l-iam"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "cl-q14",
    "prompt": "Un développeur demande `AdministratorAccess` pour déployer une fonction serverless. Proposez une alternative respectant le moindre privilège et expliquez votre démarche.",
    "skills": [
      "l-iam",
      "l-posture"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "cl-q33",
    "prompt": "Quel exemple illustre le moindre privilège dans une politique IAM ?",
    "skills": [
      "l-iam"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Partager un utilisateur entre plusieurs développeurs"
      },
      {
        "id": "b",
        "text": "Autoriser `*` sur `*` pour simplifier"
      },
      {
        "id": "c",
        "text": "Limiter les actions et les ressources visées"
      },
      {
        "id": "d",
        "text": "Désactiver la journalisation"
      }
    ]
  },
  {
    "id": "cl-q34",
    "prompt": "À quoi sert une condition `aws:MultiFactorAuthPresent` dans une politique ?",
    "skills": [
      "l-iam"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À accélérer les requêtes"
      },
      {
        "id": "b",
        "text": "À chiffrer les objets"
      },
      {
        "id": "c",
        "text": "À supprimer les journaux"
      },
      {
        "id": "d",
        "text": "À exiger la MFA"
      }
    ]
  },
  {
    "id": "cl-q35",
    "prompt": "Pourquoi éviter les clés d’accès de longue durée ?",
    "skills": [
      "l-iam",
      "l-storage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elles fuient et restent valides"
      },
      {
        "id": "b",
        "text": "Elles sont trop rapides"
      },
      {
        "id": "c",
        "text": "Elles ne peuvent pas être auditées"
      },
      {
        "id": "d",
        "text": "Elles sont toujours chiffrées"
      }
    ]
  },
  {
    "id": "cl-q8",
    "prompt": "Que signifie `\"Principal\": \"*\"` dans la politique d’un compartiment de stockage ?",
    "skills": [
      "l-storage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le compte racine"
      },
      {
        "id": "b",
        "text": "N’importe qui sur Internet"
      },
      {
        "id": "c",
        "text": "Aucun principal"
      },
      {
        "id": "d",
        "text": "Tous les administrateurs du compte"
      }
    ]
  },
  {
    "id": "cl-q9",
    "prompt": "Quelles pratiques améliorent la gestion des secrets dans le cloud ?",
    "skills": [
      "l-storage"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Rôles attachés aux instances plutôt que des clés statiques"
      },
      {
        "id": "b",
        "text": "Fédération OIDC entre la CI et le cloud"
      },
      {
        "id": "c",
        "text": "Clés d’accès dans un fichier .env versionné"
      },
      {
        "id": "d",
        "text": "Coffre-fort de secrets avec rotation"
      }
    ]
  },
  {
    "id": "cl-q10",
    "prompt": "Le chiffrement au repos d’un compartiment empêche sa lecture par un internaute si le compartiment est public.",
    "skills": [
      "l-storage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cl-q36",
    "prompt": "À quoi sert la gestion des versions d’un compartiment ?",
    "skills": [
      "l-storage"
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
        "text": "À rendre le compartiment public"
      },
      {
        "id": "c",
        "text": "À récupérer un objet effacé"
      },
      {
        "id": "d",
        "text": "À accélérer les téléchargements"
      }
    ]
  },
  {
    "id": "cl-q37",
    "prompt": "Pourquoi choisir une clé de chiffrement gérée par le client (KMS) ?",
    "skills": [
      "l-storage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour supprimer le chiffrement"
      },
      {
        "id": "b",
        "text": "Pour éviter toute politique d’accès"
      },
      {
        "id": "c",
        "text": "Pour contrôler et auditer son usage"
      },
      {
        "id": "d",
        "text": "Pour rendre les données publiques"
      }
    ]
  },
  {
    "id": "cl-q38",
    "prompt": "Le blocage de l’accès public au niveau du compte protège aussi contre une politique de compartiment trop ouverte.",
    "skills": [
      "l-storage",
      "l-posture"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cl-q11",
    "prompt": "Que fait un outil CSPM ?",
    "skills": [
      "l-posture"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il chiffre les données"
      },
      {
        "id": "b",
        "text": "Il remplace le pare-feu"
      },
      {
        "id": "c",
        "text": "Il gère la facturation"
      },
      {
        "id": "d",
        "text": "Il évalue les configurations"
      }
    ]
  },
  {
    "id": "cl-q12",
    "prompt": "Lesquelles de ces configurations sont des écarts à corriger ?",
    "skills": [
      "l-posture"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Rôle applicatif limité à GetObject sur un préfixe précis"
      },
      {
        "id": "b",
        "text": "Journalisation des API désactivée dans une région"
      },
      {
        "id": "c",
        "text": "Compte racine sans MFA"
      },
      {
        "id": "d",
        "text": "Groupe de sécurité ouvrant le port 22 à 0.0.0.0/0"
      }
    ]
  },
  {
    "id": "cl-q13",
    "prompt": "Quel service AWS journalise les appels d’API d’un compte ?",
    "skills": [
      "l-posture"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom du service"
  },
  {
    "id": "cl-q16",
    "prompt": "Comment détecter une mauvaise configuration de stockage avant même son déploiement ?",
    "skills": [
      "l-posture",
      "l-storage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "En analysant le code Terraform dans la CI"
      },
      {
        "id": "b",
        "text": "En désactivant les journaux"
      },
      {
        "id": "c",
        "text": "En attendant le rapport mensuel de facturation"
      },
      {
        "id": "d",
        "text": "C’est impossible"
      }
    ]
  },
  {
    "id": "cl-q39",
    "prompt": "Pourquoi un CSPM s’appuie-t-il sur des référentiels comme les CIS Benchmarks ?",
    "skills": [
      "l-posture"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour supprimer des comptes"
      },
      {
        "id": "b",
        "text": "Pour comparer aux bonnes pratiques"
      },
      {
        "id": "c",
        "text": "Pour chiffrer les journaux"
      },
      {
        "id": "d",
        "text": "Pour choisir un fournisseur"
      }
    ]
  },
  {
    "id": "cl-q40",
    "prompt": "Quelles pratiques réduisent la dérive de configuration d’un environnement cloud ?",
    "skills": [
      "l-posture"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Décrire l’infrastructure en code versionné"
      },
      {
        "id": "b",
        "text": "Évaluer la posture en continu"
      },
      {
        "id": "c",
        "text": "Modifier les ressources à la main en production"
      },
      {
        "id": "d",
        "text": "Revoir les changements avant déploiement"
      }
    ]
  },
  {
    "id": "cl-q17",
    "prompt": "Que permet le SSO (authentification unique) ?",
    "skills": [
      "l-federation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "De supprimer la MFA"
      },
      {
        "id": "b",
        "text": "Une authentification centralisée"
      },
      {
        "id": "c",
        "text": "De partager un mot de passe commun"
      },
      {
        "id": "d",
        "text": "De rendre un service public"
      }
    ]
  },
  {
    "id": "cl-q18",
    "prompt": "Pourquoi préférer un rôle assumé à une clé d’accès statique ?",
    "skills": [
      "l-federation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un rôle supprime les journaux"
      },
      {
        "id": "b",
        "text": "Un rôle rend l’accès public"
      },
      {
        "id": "c",
        "text": "Un rôle ne peut jamais être mal configuré"
      },
      {
        "id": "d",
        "text": "Les identifiants sont temporaires"
      }
    ]
  },
  {
    "id": "cl-q19",
    "prompt": "Un rôle assumé délivre des identifiants temporaires.",
    "skills": [
      "l-federation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cl-q20",
    "prompt": "Quels mécanismes servent à fédérer des identités avec le cloud ?",
    "skills": [
      "l-federation"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "OIDC pour la CI ou les applications"
      },
      {
        "id": "b",
        "text": "Rôles assumés avec jetons temporaires"
      },
      {
        "id": "c",
        "text": "SAML pour les utilisateurs"
      },
      {
        "id": "d",
        "text": "Un mot de passe partagé entre tous les développeurs"
      }
    ]
  },
  {
    "id": "cl-q21",
    "prompt": "Quel sigle désigne la fédération d’identités, fondée sur OAuth 2, qu’une CI peut utiliser pour obtenir des jetons cloud sans clé statique ?",
    "skills": [
      "l-federation"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "cl-q22",
    "prompt": "Que fait une politique de contrôle de service (SCP) ou une limite de permissions ?",
    "skills": [
      "l-federation",
      "l-iam"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle remplace l’authentification"
      },
      {
        "id": "b",
        "text": "Elle chiffre les identités"
      },
      {
        "id": "c",
        "text": "Elle fixe un plafond de permissions"
      },
      {
        "id": "d",
        "text": "Elle donne tous les droits"
      }
    ]
  },
  {
    "id": "cl-q23",
    "prompt": "Qu’est-ce qu’un compte d’accès d’urgence (« break-glass ») ?",
    "skills": [
      "l-federation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un accès protégé et surveillé"
      },
      {
        "id": "b",
        "text": "Un compte jamais testé"
      },
      {
        "id": "c",
        "text": "Un compte qui contourne la journalisation"
      },
      {
        "id": "d",
        "text": "Un compte partagé sans surveillance"
      }
    ]
  },
  {
    "id": "cl-q24",
    "prompt": "Pourquoi envoyer les journaux d’API vers un compte séparé et protégé ?",
    "skills": [
      "l-reponse"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour désactiver les alertes"
      },
      {
        "id": "b",
        "text": "Pour éviter leur effacement"
      },
      {
        "id": "c",
        "text": "Pour rendre les journaux publics"
      },
      {
        "id": "d",
        "text": "Pour réduire la taille des journaux"
      }
    ]
  },
  {
    "id": "cl-q25",
    "prompt": "Quel événement justifie une alerte immédiate dans un compte cloud ?",
    "skills": [
      "l-reponse"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une lecture de documentation"
      },
      {
        "id": "b",
        "text": "Une consultation du tableau de bord de facturation"
      },
      {
        "id": "c",
        "text": "Une connexion avec le compte racine"
      },
      {
        "id": "d",
        "text": "Une connexion SSO ordinaire"
      }
    ]
  },
  {
    "id": "cl-q26",
    "prompt": "Désactiver la journalisation des API est sans conséquence pour l’investigation.",
    "skills": [
      "l-reponse"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cl-q27",
    "prompt": "Une clé d’accès a fuité dans un dépôt public. Quelles actions s’imposent ?",
    "skills": [
      "l-reponse"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Supprimer les journaux pour effacer la fuite"
      },
      {
        "id": "b",
        "text": "Désactiver ou révoquer la clé"
      },
      {
        "id": "c",
        "text": "Examiner son activité dans les journaux d’API"
      },
      {
        "id": "d",
        "text": "Faire pivoter les secrets auxquels elle donnait accès"
      }
    ]
  },
  {
    "id": "cl-q28",
    "prompt": "Un compte cloud semble compromis. Quel est le bon premier geste ?",
    "skills": [
      "l-reponse"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Révoquer les sessions"
      },
      {
        "id": "b",
        "text": "Ne rien changer"
      },
      {
        "id": "c",
        "text": "Supprimer toutes les ressources"
      },
      {
        "id": "d",
        "text": "Supprimer le compte"
      }
    ]
  },
  {
    "id": "cl-q29",
    "prompt": "Quel service journalise les appels d’API sur Google Cloud ?",
    "skills": [
      "l-reponse"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "nom du service"
  },
  {
    "id": "cl-q30",
    "prompt": "Un compartiment public a exposé des données personnelles. Quelle obligation est à évaluer ?",
    "skills": [
      "l-reponse",
      "l-shared"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Aucune, car c’est le fournisseur le responsable"
      },
      {
        "id": "b",
        "text": "Une notification seulement au bout d’un an"
      },
      {
        "id": "c",
        "text": "La suppression du compte du fournisseur"
      },
      {
        "id": "d",
        "text": "La notification à la CNIL sous 72 h"
      }
    ]
  },
  {
    "id": "cl-q41",
    "prompt": "Une politique d’accès contient `\"Action\": \"*\"` et `\"Resource\": \"*\"` pour une application. Quel est le problème ?",
    "skills": [
      "l-iam"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’application ne peut plus rien faire"
      },
      {
        "id": "b",
        "text": "Seules les lectures sont autorisées"
      },
      {
        "id": "c",
        "text": "La politique est refusée par le fournisseur"
      },
      {
        "id": "d",
        "text": "L’application reçoit tous les droits sur tout le compte"
      }
    ]
  },
  {
    "id": "cl-q42",
    "prompt": "Une politique contient à la fois un `Allow` et un `Deny` explicite sur la même action. Quel est l’effet ?",
    "skills": [
      "l-iam"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le fournisseur choisit au hasard"
      },
      {
        "id": "b",
        "text": "L’action est refusée"
      },
      {
        "id": "c",
        "text": "L’action est autorisée seulement avec MFA"
      },
      {
        "id": "d",
        "text": "L’action est autorisée"
      }
    ]
  },
  {
    "id": "cl-q43",
    "prompt": "Quel constat lors d’une revue d’accès doit être traité en priorité ?",
    "skills": [
      "l-posture"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le compte actif d’un ancien prestataire"
      },
      {
        "id": "b",
        "text": "Un utilisateur avec MFA activée"
      },
      {
        "id": "c",
        "text": "Une clé d’accès renouvelée la semaine dernière"
      },
      {
        "id": "d",
        "text": "Un compte jamais connecté depuis la création"
      }
    ]
  },
  {
    "id": "cl-q44",
    "prompt": "Quel nom général porte le principe d’accorder seulement les droits nécessaires ? (trois mots)",
    "skills": [
      "l-iam"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "trois mots"
  }
];
