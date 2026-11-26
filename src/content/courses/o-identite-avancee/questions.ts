// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "oia-q1",
    "prompt": "Quel composant d’une architecture d’identité évalue une demande d’accès selon des politiques ?",
    "skills": [
      "o-adv-archi"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le poste de travail de l’utilisateur"
      },
      {
        "id": "b",
        "text": "Le serveur d’impression central"
      },
      {
        "id": "c",
        "text": "Le routeur d’accès à Internet"
      },
      {
        "id": "d",
        "text": "Le point de décision de politique"
      }
    ]
  },
  {
    "id": "oia-q2",
    "prompt": "Pourquoi séparer le fournisseur d’identité des applications qui s’y fédèrent ?",
    "skills": [
      "o-adv-archi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Centraliser l’authentification et sa protection"
      },
      {
        "id": "b",
        "text": "Supprimer le besoin de journaliser les connexions"
      },
      {
        "id": "c",
        "text": "Empêcher toute fédération avec des partenaires"
      },
      {
        "id": "d",
        "text": "Obliger chaque application à gérer ses mots de passe"
      }
    ]
  },
  {
    "id": "oia-q3",
    "prompt": "Quelle est la différence essentielle entre OpenID Connect et OAuth 2.0 ?",
    "skills": [
      "o-adv-archi"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "OAuth 2.0 prouve l’identité, OpenID Connect délègue l’accès"
      },
      {
        "id": "b",
        "text": "OpenID Connect ajoute l’identité, OAuth 2.0 délègue l’accès"
      },
      {
        "id": "c",
        "text": "Les deux servent uniquement à chiffrer les disques"
      },
      {
        "id": "d",
        "text": "Les deux sont réservés aux réseaux sans Internet"
      }
    ]
  },
  {
    "id": "oia-q4",
    "prompt": "Quel est l’intérêt d’un jeton d’accès de courte durée associé à un jeton de rafraîchissement protégé ?",
    "skills": [
      "o-adv-archi"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Éviter de journaliser les accès"
      },
      {
        "id": "b",
        "text": "Rendre un jeton valable indéfiniment"
      },
      {
        "id": "c",
        "text": "Réduire la fenêtre d’abus d’un jeton volé"
      },
      {
        "id": "d",
        "text": "Supprimer toute authentification de l’utilisateur"
      }
    ]
  },
  {
    "id": "oia-q5",
    "prompt": "Un attribut reçu d’un fournisseur d’identité externe doit être validé avant d’entrer dans une décision d’autorisation.",
    "skills": [
      "o-adv-archi"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "oia-q6",
    "prompt": "Quelle extension d’OAuth 2.0 protège le code d’autorisation d’un client public contre l’interception ? (un sigle)",
    "skills": [
      "o-adv-archi"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un sigle"
  },
  {
    "id": "oia-q7",
    "prompt": "Quelles vérifications un service doit-il effectuer sur un jeton d’accès reçu ?",
    "skills": [
      "o-adv-archi"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La date d’expiration"
      },
      {
        "id": "b",
        "text": "La signature du jeton"
      },
      {
        "id": "c",
        "text": "La longueur du jeton en caractères"
      },
      {
        "id": "d",
        "text": "L’émetteur et le public visé"
      }
    ]
  },
  {
    "id": "oia-q8",
    "prompt": "Quelle idée résume le mieux le Zero Trust ?",
    "skills": [
      "o-adv-zt"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Faire confiance au réseau interne par défaut"
      },
      {
        "id": "b",
        "text": "Ne jamais accorder de confiance implicite"
      },
      {
        "id": "c",
        "text": "Autoriser tout appareil de l’entreprise sans contrôle"
      },
      {
        "id": "d",
        "text": "Supprimer l’authentification des utilisateurs"
      }
    ]
  },
  {
    "id": "oia-q9",
    "prompt": "Quels signaux un accès Zero Trust évalue-t-il en plus de l’identité ?",
    "skills": [
      "o-adv-zt"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le nombre de fichiers du dossier personnel"
      },
      {
        "id": "b",
        "text": "La couleur du fond d’écran du poste"
      },
      {
        "id": "c",
        "text": "L’état de l’appareil et le contexte"
      },
      {
        "id": "d",
        "text": "La marque du clavier de l’utilisateur"
      }
    ]
  },
  {
    "id": "oia-q10",
    "prompt": "Qu’apporte l’accès conditionnel par rapport à une règle d’accès statique ?",
    "skills": [
      "o-adv-zt"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un droit permanent après la première connexion"
      },
      {
        "id": "b",
        "text": "Un accès identique pour tous, à toute heure"
      },
      {
        "id": "c",
        "text": "La suppression des facteurs d’authentification"
      },
      {
        "id": "d",
        "text": "Une décision selon le risque et le contexte"
      }
    ]
  },
  {
    "id": "oia-q11",
    "prompt": "Pourquoi la segmentation reste-t-elle utile dans un modèle Zero Trust ?",
    "skills": [
      "o-adv-zt"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle limite le déplacement d’un attaquant"
      },
      {
        "id": "b",
        "text": "Elle remplace la vérification de l’identité"
      },
      {
        "id": "c",
        "text": "Elle autorise un accès libre à l’intérieur"
      },
      {
        "id": "d",
        "text": "Elle rend toute surveillance inutile"
      }
    ]
  },
  {
    "id": "oia-q12",
    "prompt": "Dans un modèle Zero Trust, un appareil branché au réseau interne est de confiance par défaut.",
    "skills": [
      "o-adv-zt"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "oia-q13",
    "prompt": "Quel sigle désigne le point qui fait appliquer la décision d’accès devant la ressource ? (trois lettres)",
    "skills": [
      "o-adv-zt"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "trois lettres"
  },
  {
    "id": "oia-q14",
    "prompt": "Quelles pratiques relèvent d’une démarche Zero Trust pour l’accès des collaborateurs ?",
    "skills": [
      "o-adv-zt"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Vérifier l’identité et l’appareil à chaque accès sensible"
      },
      {
        "id": "b",
        "text": "Faire confiance à tout poste connecté au réseau interne"
      },
      {
        "id": "c",
        "text": "Journaliser et évaluer les accès en continu"
      },
      {
        "id": "d",
        "text": "Accorder des droits au plus juste"
      }
    ]
  },
  {
    "id": "oia-q15",
    "prompt": "Quel modèle décide selon la sensibilité de la ressource et le contexte de la demande ?",
    "skills": [
      "o-adv-authz"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un accès ouvert à tous les salariés"
      },
      {
        "id": "b",
        "text": "Le contrôle d’accès par attributs"
      },
      {
        "id": "c",
        "text": "Une liste fixe sans attribut"
      },
      {
        "id": "d",
        "text": "Le partage d’un compte commun"
      }
    ]
  },
  {
    "id": "oia-q16",
    "prompt": "Quel danger représente l’explosion du nombre de rôles dans un modèle RBAC ?",
    "skills": [
      "o-adv-authz"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Des rôles ingérables qui se chevauchent"
      },
      {
        "id": "b",
        "text": "Une baisse de la bande passante du réseau"
      },
      {
        "id": "c",
        "text": "Un chiffrement trop fort des données"
      },
      {
        "id": "d",
        "text": "La suppression automatique des comptes"
      }
    ]
  },
  {
    "id": "oia-q17",
    "prompt": "Quelle mesure traite l’accumulation de droits au fil des mobilités ?",
    "skills": [
      "o-adv-authz"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le partage de comptes entre plusieurs équipes"
      },
      {
        "id": "b",
        "text": "L’ajout de droits à chaque nouvelle demande"
      },
      {
        "id": "c",
        "text": "Une recertification périodique des accès"
      },
      {
        "id": "d",
        "text": "La suppression des journaux d’audit"
      }
    ]
  },
  {
    "id": "oia-q18",
    "prompt": "Externaliser les politiques d’autorisation du code applicatif facilite leur audit et leur mise à jour.",
    "skills": [
      "o-adv-authz"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "oia-q19",
    "prompt": "La séparation des tâches s’obtient en donnant à chacun des droits en lecture seule uniquement.",
    "skills": [
      "o-adv-authz"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "oia-q20",
    "prompt": "Quel terme désigne la revue périodique où les responsables confirment ou retirent les droits de leurs équipes ? (un mot)",
    "skills": [
      "o-adv-authz"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "oia-q21",
    "prompt": "Quels éléments tracer pour auditer une décision d’autorisation ?",
    "skills": [
      "o-adv-authz"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "L’identité du demandeur"
      },
      {
        "id": "b",
        "text": "La ressource et l’action demandées"
      },
      {
        "id": "c",
        "text": "La politique appliquée et le résultat"
      },
      {
        "id": "d",
        "text": "La couleur du thème de l’application"
      }
    ]
  },
  {
    "id": "oia-q22",
    "prompt": "Quel problème pose un secret statique partagé entre deux services ?",
    "skills": [
      "o-adv-machines"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il supprime le besoin de journalisation"
      },
      {
        "id": "b",
        "text": "Il rend toute attaque impossible"
      },
      {
        "id": "c",
        "text": "Il accélère toujours les échanges"
      },
      {
        "id": "d",
        "text": "Il peut être volé et réutilisé sans limite"
      }
    ]
  },
  {
    "id": "oia-q23",
    "prompt": "Quel est l’objectif de l’identité de charge de travail de type SPIFFE ?",
    "skills": [
      "o-adv-machines"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Donner à chaque charge une identité vérifiable"
      },
      {
        "id": "b",
        "text": "Authentifier uniquement par adresse IP"
      },
      {
        "id": "c",
        "text": "Partager un même mot de passe entre tous les services"
      },
      {
        "id": "d",
        "text": "Désactiver la rotation des certificats"
      }
    ]
  },
  {
    "id": "oia-q24",
    "prompt": "Qu’apporte le TLS mutuel entre deux services ?",
    "skills": [
      "o-adv-machines"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Aucun chiffrement des échanges entre les services"
      },
      {
        "id": "b",
        "text": "Chaque partie authentifie l’autre par certificat"
      },
      {
        "id": "c",
        "text": "Un mot de passe commun aux deux services concernés"
      },
      {
        "id": "d",
        "text": "Seul le client est authentifié auprès du serveur"
      }
    ]
  },
  {
    "id": "oia-q25",
    "prompt": "Des identifiants de courte durée délivrés à la demande réduisent l’intérêt du vol d’un secret.",
    "skills": [
      "o-adv-machines"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "oia-q26",
    "prompt": "Comment appelle-t-on le remplacement régulier d’un secret ou d’un certificat par un nouveau ? (un mot)",
    "skills": [
      "o-adv-machines"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "oia-q27",
    "prompt": "Quelles pratiques protègent les identités de machines ?",
    "skills": [
      "o-adv-machines"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Intégrer la clé dans une image publique"
      },
      {
        "id": "b",
        "text": "Renouveler automatiquement les certificats"
      },
      {
        "id": "c",
        "text": "Limiter la portée de chaque identité"
      },
      {
        "id": "d",
        "text": "Éviter les secrets statiques durables"
      }
    ]
  },
  {
    "id": "oia-q28",
    "prompt": "Une application stocke une clé d’API durable dans son dépôt de code. Comment corrigez-vous et comment évitez-vous que cela se reproduise ?",
    "skills": [
      "o-adv-machines"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "oia-q29",
    "prompt": "Pourquoi le fournisseur d’identité est-il une cible prioritaire ?",
    "skills": [
      "o-adv-idp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il ne stocke que des images publiques de l’entreprise"
      },
      {
        "id": "b",
        "text": "Il ne journalise aucune activité de connexion"
      },
      {
        "id": "c",
        "text": "Sa compromission ouvre l’accès aux applications"
      },
      {
        "id": "d",
        "text": "Il n’est relié à aucune application fédérée"
      }
    ]
  },
  {
    "id": "oia-q30",
    "prompt": "Quelle mesure durcit les comptes d’administration du fournisseur d’identité ?",
    "skills": [
      "o-adv-idp"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Des droits permanents pour tous les techniciens"
      },
      {
        "id": "b",
        "text": "Un accès depuis tout appareil personnel"
      },
      {
        "id": "c",
        "text": "Un mot de passe partagé dans l’équipe"
      },
      {
        "id": "d",
        "text": "Une MFA résistante et peu de comptes"
      }
    ]
  },
  {
    "id": "oia-q31",
    "prompt": "Quel événement du fournisseur d’identité mérite une alerte prioritaire ?",
    "skills": [
      "o-adv-idp"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’ajout d’un certificat de signature"
      },
      {
        "id": "b",
        "text": "Une connexion normale d’un utilisateur"
      },
      {
        "id": "c",
        "text": "La lecture d’un tableau de bord par un administrateur"
      },
      {
        "id": "d",
        "text": "Le changement d’avatar d’un profil"
      }
    ]
  },
  {
    "id": "oia-q32",
    "prompt": "Une confiance fédérée ajoutée sans contrôle peut permettre de se faire passer pour n’importe quel utilisateur.",
    "skills": [
      "o-adv-idp"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "oia-q33",
    "prompt": "Quels signaux de détection concernent le fournisseur d’identité ?",
    "skills": [
      "o-adv-idp"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Modification de la configuration de la fédération"
      },
      {
        "id": "b",
        "text": "Échecs d’authentification en rafale par source"
      },
      {
        "id": "c",
        "text": "Création d’identifiants applicatifs à forts droits"
      },
      {
        "id": "d",
        "text": "Mise à jour de l’avatar d’un utilisateur"
      }
    ]
  },
  {
    "id": "oia-q34",
    "prompt": "Vous soupçonnez la compromission d’un compte administrateur de votre fournisseur d’identité. Quelle est votre réponse ?",
    "skills": [
      "o-adv-idp",
      "o-adv-resilience"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "oia-q35",
    "prompt": "Pourquoi prévoir des comptes d’urgence hors du fournisseur d’identité principal ?",
    "skills": [
      "o-adv-resilience"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Donner un accès permanent à chaque salarié"
      },
      {
        "id": "b",
        "text": "Garder l’accès si ce fournisseur est indisponible"
      },
      {
        "id": "c",
        "text": "Éviter toute MFA pour les administrateurs système"
      },
      {
        "id": "d",
        "text": "Remplacer définitivement les comptes nominatifs"
      }
    ]
  },
  {
    "id": "oia-q36",
    "prompt": "Quelle action est prioritaire si les clés de signature d’un fournisseur d’identité sont compromises ?",
    "skills": [
      "o-adv-resilience"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Désactiver toute la journalisation"
      },
      {
        "id": "b",
        "text": "Informer uniquement les utilisateurs finaux"
      },
      {
        "id": "c",
        "text": "Les remplacer et invalider les jetons déjà émis"
      },
      {
        "id": "d",
        "text": "Attendre la prochaine mise à jour du produit concerné"
      }
    ]
  },
  {
    "id": "oia-q37",
    "prompt": "Que doit vérifier un exercice de résilience d’identité ?",
    "skills": [
      "o-adv-resilience"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La vitesse de frappe des utilisateurs"
      },
      {
        "id": "b",
        "text": "Le nombre de comptes invités inactifs seulement dans l’annuaire"
      },
      {
        "id": "c",
        "text": "La couleur de l’interface de connexion"
      },
      {
        "id": "d",
        "text": "La reprise de l’accès sans le fournisseur principal"
      }
    ]
  },
  {
    "id": "oia-q38",
    "prompt": "Les comptes d’urgence peuvent servir au quotidien sans alerte pour gagner du temps.",
    "skills": [
      "o-adv-resilience"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "oia-q39",
    "prompt": "Quels éléments un plan de reprise d’identité comprend-il ?",
    "skills": [
      "o-adv-resilience"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Une procédure d’accès d’urgence testée"
      },
      {
        "id": "b",
        "text": "La sauvegarde de la configuration de fédération"
      },
      {
        "id": "c",
        "text": "La liste des contacts d’astreinte et de décision"
      },
      {
        "id": "d",
        "text": "La suppression des journaux d’audit"
      }
    ]
  },
  {
    "id": "oia-q40",
    "prompt": "Quel sigle désigne la durée maximale d’indisponibilité acceptable avant la reprise d’un service ? (trois lettres)",
    "skills": [
      "o-adv-resilience"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "trois lettres"
  }
];
