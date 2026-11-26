// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "pam-q1",
    "prompt": "Lesquels de ces éléments sont des comptes ou identités à privilèges à inventorier ?",
    "skills": [
      "o-priv-inventaire"
    ],
    "difficulty": 1,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le compte invité désactivé d’une imprimante, sans droit"
      },
      {
        "id": "b",
        "text": "Les clés d’API et jetons d’intégration continue"
      },
      {
        "id": "c",
        "text": "Les comptes de service des applications"
      },
      {
        "id": "d",
        "text": "Les comptes intégrés comme `root` ou l’administrateur local"
      }
    ]
  },
  {
    "id": "pam-q2",
    "prompt": "Pourquoi un administrateur doit-il disposer d’un compte distinct pour l’administration ?",
    "skills": [
      "o-priv-inventaire"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Isoler messagerie et navigation des droits d’administration"
      },
      {
        "id": "b",
        "text": "Pour disposer de deux boîtes aux lettres distinctes"
      },
      {
        "id": "c",
        "text": "Parce que l’annuaire limite le nombre de groupes par compte"
      },
      {
        "id": "d",
        "text": "Pour contourner l’authentification multifacteur du poste"
      }
    ]
  },
  {
    "id": "pam-q3",
    "prompt": "Un compte du niveau d’administration le plus élevé peut ouvrir une session sur un poste bureautique sans risque particulier, s’il utilise la MFA.",
    "skills": [
      "o-priv-inventaire"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pam-q4",
    "prompt": "Comment appelle-t-on l’attribution de droits d’administration à la demande, pour une durée limitée ? (expression en français)",
    "skills": [
      "o-priv-inventaire"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "accès …"
  },
  {
    "id": "pam-q15",
    "prompt": "Expliquez à une direction pourquoi réduire le nombre d’administrateurs du domaine est prioritaire, et proposez un indicateur de suivi.",
    "skills": [
      "o-priv-gouvernance",
      "o-priv-inventaire"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "pam-q31",
    "prompt": "Pourquoi le compte administrateur local par défaut d’un poste est-il à surveiller ?",
    "skills": [
      "o-priv-inventaire"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il ralentit le réseau de l’entreprise"
      },
      {
        "id": "b",
        "text": "Il dispose de tous les droits locaux"
      },
      {
        "id": "c",
        "text": "Il est visible sur l’écran de connexion"
      },
      {
        "id": "d",
        "text": "Il consomme des licences logicielles"
      }
    ]
  },
  {
    "id": "pam-q32",
    "prompt": "Quelle source est la plus fiable pour inventorier les comptes privilégiés ?",
    "skills": [
      "o-priv-inventaire"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les déclarations orales des équipes"
      },
      {
        "id": "b",
        "text": "Les plaquettes commerciales des fournisseurs"
      },
      {
        "id": "c",
        "text": "Les annonces de recrutement"
      },
      {
        "id": "d",
        "text": "Les groupes et rôles réels des systèmes"
      }
    ]
  },
  {
    "id": "pam-q5",
    "prompt": "Quel est le rôle principal d’un bastion d’administration ?",
    "skills": [
      "o-pam-outils"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Remplacer l’antivirus des serveurs du site"
      },
      {
        "id": "b",
        "text": "Stocker les sauvegardes des serveurs"
      },
      {
        "id": "c",
        "text": "Un point de passage unique et journalisé"
      },
      {
        "id": "d",
        "text": "Héberger le site web public de l’entreprise"
      }
    ]
  },
  {
    "id": "pam-q6",
    "prompt": "Quelles fonctions fournit typiquement une solution PAM ?",
    "skills": [
      "o-pam-outils"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Enregistrement des sessions d’administration"
      },
      {
        "id": "b",
        "text": "Coffre des mots de passe privilégiés"
      },
      {
        "id": "c",
        "text": "Rotation automatique des mots de passe"
      },
      {
        "id": "d",
        "text": "Compilation du code des applications"
      }
    ]
  },
  {
    "id": "pam-q7",
    "prompt": "Un poste d’administration dédié ne doit pas servir à lire ses courriels ni à naviguer sur Internet.",
    "skills": [
      "o-pam-outils"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pam-q8",
    "prompt": "Un infogérant demande un accès à distance permanent avec un compte administrateur partagé par son équipe. Proposez une organisation qui réponde à son besoin tout en limitant le risque.",
    "skills": [
      "o-pam-outils",
      "o-priv-gouvernance"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "pam-q33",
    "prompt": "Que fait le coffre d’une solution PAM ?",
    "skills": [
      "o-pam-outils"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Stocker les secrets sans les révéler"
      },
      {
        "id": "b",
        "text": "Envoyer les secrets par courriel"
      },
      {
        "id": "c",
        "text": "Publier les mots de passe en interne"
      },
      {
        "id": "d",
        "text": "Supprimer les comptes inutilisés"
      }
    ]
  },
  {
    "id": "pam-q34",
    "prompt": "Pourquoi un bastion doit-il lui-même être protégé au niveau le plus élevé ?",
    "skills": [
      "o-pam-outils"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il consomme beaucoup d’énergie électrique"
      },
      {
        "id": "b",
        "text": "Il ne produit aucune journalisation"
      },
      {
        "id": "c",
        "text": "Sa compromission donnerait accès à tout"
      },
      {
        "id": "d",
        "text": "Il est accessible au grand public"
      }
    ]
  },
  {
    "id": "pam-q9",
    "prompt": "Quelle solution évite de gérer manuellement le mot de passe d’un compte de service Windows ?",
    "skills": [
      "o-secrets"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un mot de passe court facile à retenir"
      },
      {
        "id": "b",
        "text": "Un compte de service géré de groupe (gMSA)"
      },
      {
        "id": "c",
        "text": "Désactiver l’expiration et noter le mot de passe"
      },
      {
        "id": "d",
        "text": "Le même mot de passe sur tous les serveurs"
      }
    ]
  },
  {
    "id": "pam-q10",
    "prompt": "Un mot de passe de base de données a été commité dans un dépôt Git, puis le commit a été supprimé. Que faut-il faire ?",
    "skills": [
      "o-secrets"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Mettre en place une détection automatique des secrets dans les dépôts"
      },
      {
        "id": "b",
        "text": "Rien, puisque le commit a été supprimé"
      },
      {
        "id": "c",
        "text": "Vérifier les journaux de la base pour détecter un usage suspect"
      },
      {
        "id": "d",
        "text": "Considérer le secret comme compromis et le remplacer"
      }
    ]
  },
  {
    "id": "pam-q11",
    "prompt": "Comment appelle-t-on un identifiant créé à la demande par un coffre pour un usage précis, puis révoqué après une courte durée ? (deux mots)",
    "skills": [
      "o-secrets"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "secret …"
  },
  {
    "id": "pam-q12",
    "prompt": "Utiliser le même compte de service et le même mot de passe en recette et en production est acceptable si le mot de passe est long.",
    "skills": [
      "o-secrets"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pam-q35",
    "prompt": "Quelle durée de vie est préférable pour un jeton d’accès d’un pipeline de déploiement ?",
    "skills": [
      "o-secrets"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Jusqu’à révocation manuelle seulement"
      },
      {
        "id": "b",
        "text": "Dix ans"
      },
      {
        "id": "c",
        "text": "Illimitée"
      },
      {
        "id": "d",
        "text": "Courte, limitée à l’exécution"
      }
    ]
  },
  {
    "id": "pam-q36",
    "prompt": "Où ne faut-il surtout pas conserver un secret applicatif ?",
    "skills": [
      "o-secrets"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Dans un gestionnaire de secrets dédié"
      },
      {
        "id": "b",
        "text": "Dans un service de secrets du cloud"
      },
      {
        "id": "c",
        "text": "Dans le code source versionné"
      },
      {
        "id": "d",
        "text": "Dans un coffre de secrets"
      }
    ]
  },
  {
    "id": "pam-q13",
    "prompt": "Qui doit confirmer ou retirer les droits lors d’une revue des accès privilégiés ?",
    "skills": [
      "o-priv-gouvernance"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Personne : les droits n’expirent pas"
      },
      {
        "id": "b",
        "text": "Le fournisseur du logiciel"
      },
      {
        "id": "c",
        "text": "Chaque utilisateur pour ses propres droits, sans contrôle"
      },
      {
        "id": "d",
        "text": "Le responsable de chaque périmètre"
      }
    ]
  },
  {
    "id": "pam-q14",
    "prompt": "Quelles règles s’appliquent à un compte d’urgence (« bris de glace ») ?",
    "skills": [
      "o-priv-gouvernance"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Utilisation quotidienne pour vérifier qu’il marche"
      },
      {
        "id": "b",
        "text": "Tests réguliers de bon fonctionnement"
      },
      {
        "id": "c",
        "text": "Alerte immédiate à chaque utilisation"
      },
      {
        "id": "d",
        "text": "Identifiants conservés hors ligne, sous double contrôle"
      }
    ]
  },
  {
    "id": "pam-q16",
    "prompt": "Le compte d’un administrateur qui a quitté l’entreprise doit être désactivé dès son départ.",
    "skills": [
      "o-priv-gouvernance"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "pam-q37",
    "prompt": "À quelle fréquence minimale faut-il revoir les droits privilégiés ?",
    "skills": [
      "o-priv-gouvernance"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Au moins chaque trimestre"
      },
      {
        "id": "b",
        "text": "Seulement après un incident"
      },
      {
        "id": "c",
        "text": "Jamais, ils sont stables"
      },
      {
        "id": "d",
        "text": "Tous les dix ans"
      }
    ]
  },
  {
    "id": "pam-q38",
    "prompt": "Que conserve-t-on comme preuve d’une revue des accès ?",
    "skills": [
      "o-priv-gouvernance"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Aucune trace"
      },
      {
        "id": "b",
        "text": "Les décisions datées et validées"
      },
      {
        "id": "c",
        "text": "Une capture prise la veille de l’audit"
      },
      {
        "id": "d",
        "text": "Une déclaration orale du responsable"
      }
    ]
  },
  {
    "id": "pam-q39",
    "prompt": "Un compte d’administration doit être nominatif pour attribuer chaque action à une personne.",
    "skills": [
      "o-priv-gouvernance"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pam-q40",
    "prompt": "Quel mot désigne le remplacement régulier d’un secret par une nouvelle valeur ? (un mot)",
    "skills": [
      "o-secrets"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "pam-q17",
    "prompt": "Quel événement doit déclencher une alerte immédiate sur un annuaire ?",
    "skills": [
      "o-priv-detection"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le changement d’un fond d’écran"
      },
      {
        "id": "b",
        "text": "L’impression d’un document"
      },
      {
        "id": "c",
        "text": "Une connexion d’utilisateur à 9 heures"
      },
      {
        "id": "d",
        "text": "Un ajout à un groupe d’administration"
      }
    ]
  },
  {
    "id": "pam-q18",
    "prompt": "Quelle connexion d’un compte d’administration est suspecte ?",
    "skills": [
      "o-priv-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pendant une intervention planifiée"
      },
      {
        "id": "b",
        "text": "Depuis un poste bureautique ordinaire"
      },
      {
        "id": "c",
        "text": "Via le bastion avec MFA"
      },
      {
        "id": "d",
        "text": "Depuis le poste d’administration dédié"
      }
    ]
  },
  {
    "id": "pam-q19",
    "prompt": "Pourquoi centraliser les journaux d’authentification des contrôleurs de domaine ?",
    "skills": [
      "o-priv-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Accélérer l’annuaire du domaine"
      },
      {
        "id": "b",
        "text": "Réduire le nombre d’utilisateurs du domaine"
      },
      {
        "id": "c",
        "text": "Les mettre hors de portée d’un attaquant"
      },
      {
        "id": "d",
        "text": "Supprimer les mots de passe des comptes"
      }
    ]
  },
  {
    "id": "pam-q20",
    "prompt": "Que faire en priorité après la compromission d’un compte d’administration ?",
    "skills": [
      "o-priv-detection"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Désactiver le compte et révoquer les sessions"
      },
      {
        "id": "b",
        "text": "Supprimer les journaux de connexion"
      },
      {
        "id": "c",
        "text": "Changer seulement le nom du compte"
      },
      {
        "id": "d",
        "text": "Attendre la fin de l’enquête avant d’agir"
      }
    ]
  },
  {
    "id": "pam-q21",
    "prompt": "L’utilisation d’un compte d’urgence doit déclencher une alerte immédiate.",
    "skills": [
      "o-priv-detection"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pam-q22",
    "prompt": "Quels signaux révèlent un abus de compte privilégié ?",
    "skills": [
      "o-priv-detection"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Connexion depuis le poste d’administration dédié"
      },
      {
        "id": "b",
        "text": "Connexion depuis une adresse inconnue hors des horaires habituels"
      },
      {
        "id": "c",
        "text": "Désactivation d’outils de journalisation"
      },
      {
        "id": "d",
        "text": "Création de nouveaux comptes d’administration"
      }
    ]
  },
  {
    "id": "pam-q23",
    "prompt": "Quel sigle désigne la plateforme de collecte et de corrélation des journaux de sécurité ? (sigle)",
    "skills": [
      "o-priv-detection"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "pam-q24",
    "prompt": "Qu’est-ce que le modèle d’administration en niveaux (tiering) ?",
    "skills": [
      "o-priv-chemins"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Trier les mots de passe par longueur"
      },
      {
        "id": "b",
        "text": "Séparer les comptes selon leur contrôle"
      },
      {
        "id": "c",
        "text": "Répartir le budget par service"
      },
      {
        "id": "d",
        "text": "Classer les employés par ancienneté"
      }
    ]
  },
  {
    "id": "pam-q25",
    "prompt": "À quoi sert une solution de gestion du mot de passe de l’administrateur local (type LAPS) ?",
    "skills": [
      "o-priv-chemins"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un mot de passe unique et renouvelé par poste"
      },
      {
        "id": "b",
        "text": "Supprimer l’annuaire de l’entreprise"
      },
      {
        "id": "c",
        "text": "Un mot de passe identique sur tous les postes"
      },
      {
        "id": "d",
        "text": "Désactiver tout compte local"
      }
    ]
  },
  {
    "id": "pam-q26",
    "prompt": "Quel risque présente un compte de service au mot de passe faible associé à un nom de principal de service ?",
    "skills": [
      "o-priv-chemins"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il chiffre les disques du serveur concerné"
      },
      {
        "id": "b",
        "text": "Il modifie l’horloge de tout le réseau"
      },
      {
        "id": "c",
        "text": "Son mot de passe peut être cassé hors ligne"
      },
      {
        "id": "d",
        "text": "Il éteint le contrôleur de domaine"
      }
    ]
  },
  {
    "id": "pam-q27",
    "prompt": "Comment réduire ce risque pour les comptes de service ?",
    "skills": [
      "o-priv-chemins"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Aucune expiration ni surveillance"
      },
      {
        "id": "b",
        "text": "Droits d’administration du domaine"
      },
      {
        "id": "c",
        "text": "Mots de passe courts et mémorisables"
      },
      {
        "id": "d",
        "text": "Mots de passe très longs ou gMSA"
      }
    ]
  },
  {
    "id": "pam-q28",
    "prompt": "Un utilisateur membre d’un groupe imbriqué dans un groupe d’administration n’a pas de privilèges d’administration.",
    "skills": [
      "o-priv-chemins"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pam-q29",
    "prompt": "Quelles mesures durcissent la gestion des privilèges d’un annuaire ?",
    "skills": [
      "o-priv-chemins"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Une revue des groupes imbriqués"
      },
      {
        "id": "b",
        "text": "Un modèle d’administration en niveaux"
      },
      {
        "id": "c",
        "text": "Un mot de passe local unique par poste"
      },
      {
        "id": "d",
        "text": "Des comptes d’administration utilisés pour la messagerie"
      }
    ]
  },
  {
    "id": "pam-q30",
    "prompt": "Quel sigle désigne le mécanisme Windows qui attribue un mot de passe local unique à chaque poste ? (sigle)",
    "skills": [
      "o-priv-chemins"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  }
];
