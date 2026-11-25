// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "cav-q1",
    "prompt": "Pourquoi séparer production, développement et journalisation dans des comptes cloud distincts ?",
    "skills": [
      "l-adv-landing"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Empêcher toute supervision centralisée"
      },
      {
        "id": "b",
        "text": "Multiplier le nombre de factures à payer"
      },
      {
        "id": "c",
        "text": "Réduire le nombre d’identités à gérer"
      },
      {
        "id": "d",
        "text": "Limiter l’impact d’une compromission"
      }
    ]
  },
  {
    "id": "cav-q2",
    "prompt": "Qu’est-ce qu’un garde-fou préventif posé au niveau de l’organisation cloud ?",
    "skills": [
      "l-adv-landing"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une sauvegarde nocturne de la configuration"
      },
      {
        "id": "b",
        "text": "Un rapport de conformité produit chaque mois"
      },
      {
        "id": "c",
        "text": "Une règle qui bloque avant l’exécution"
      },
      {
        "id": "d",
        "text": "Une alerte envoyée après que l’action a eu lieu"
      }
    ]
  },
  {
    "id": "cav-q3",
    "prompt": "Quel est l’intérêt d’une règle d’organisation interdisant de désactiver la journalisation ?",
    "skills": [
      "l-adv-landing"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le compte compromis ne coupe pas les traces"
      },
      {
        "id": "b",
        "text": "Elle accélère les déploiements de ressources"
      },
      {
        "id": "c",
        "text": "Elle réduit fortement le coût de stockage des journaux"
      },
      {
        "id": "d",
        "text": "Elle remplace toute la supervision de sécurité"
      }
    ]
  },
  {
    "id": "cav-q4",
    "prompt": "Un garde-fou posé au niveau de l’organisation s’applique même aux administrateurs des comptes membres.",
    "skills": [
      "l-adv-landing"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cav-q5",
    "prompt": "Quels éléments appartiennent à une zone d’atterrissage (landing zone) ?",
    "skills": [
      "l-adv-landing"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Des garde-fous appliqués à l’organisation"
      },
      {
        "id": "b",
        "text": "Un compte unique partagé par tous les projets"
      },
      {
        "id": "c",
        "text": "Une journalisation centralisée dans un compte dédié"
      },
      {
        "id": "d",
        "text": "Une structure de comptes séparés par rôle"
      }
    ]
  },
  {
    "id": "cav-q6",
    "prompt": "Comment appelle-t-on l’étendue maximale des dommages possibles lors d’une compromission ? (deux mots)",
    "skills": [
      "l-adv-landing"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "cav-q7",
    "prompt": "Concevez la structure de comptes et les garde-fous d’une organisation cloud de quarante équipes. Justifiez vos choix.",
    "skills": [
      "l-adv-landing",
      "l-adv-policy"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "cav-q8",
    "prompt": "Que signifie « politique en code » (policy as code) ?",
    "skills": [
      "l-adv-policy"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une approbation orale lors de chaque changement"
      },
      {
        "id": "b",
        "text": "Des règles de conformité versionnées et testées"
      },
      {
        "id": "c",
        "text": "Des règles consignées dans un tableur partagé"
      },
      {
        "id": "d",
        "text": "Une politique de sécurité imprimée et signée"
      }
    ]
  },
  {
    "id": "cav-q9",
    "prompt": "À quel moment une politique en code empêche-t-elle le mieux un défaut d’atteindre l’environnement ?",
    "skills": [
      "l-adv-policy"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Uniquement lors de l’audit annuel"
      },
      {
        "id": "b",
        "text": "Seulement après un incident de sécurité"
      },
      {
        "id": "c",
        "text": "Avant le déploiement, dans la CI"
      },
      {
        "id": "d",
        "text": "Un an après la mise en production"
      }
    ]
  },
  {
    "id": "cav-q10",
    "prompt": "Qu’appelle-t-on la dérive de configuration ?",
    "skills": [
      "l-adv-policy"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La perte de performance d’un serveur"
      },
      {
        "id": "b",
        "text": "Un changement de fournisseur cloud"
      },
      {
        "id": "c",
        "text": "Une panne d’alimentation d’un centre de données"
      },
      {
        "id": "d",
        "text": "L’écart entre l’infrastructure et son code"
      }
    ]
  },
  {
    "id": "cav-q11",
    "prompt": "Un contrôle uniquement détectif suffit à empêcher la création d’un stockage public.",
    "skills": [
      "l-adv-policy"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cav-q12",
    "prompt": "Pourquoi une exception à une politique doit-elle avoir une date d’expiration ?",
    "skills": [
      "l-adv-policy"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Réduire la taille des fichiers de règles"
      },
      {
        "id": "b",
        "text": "Éviter qu’elle devienne permanente"
      },
      {
        "id": "c",
        "text": "Accélérer l’analyse de toutes les règles"
      },
      {
        "id": "d",
        "text": "Supprimer le besoin de toute revue ultérieure"
      }
    ]
  },
  {
    "id": "cav-q13",
    "prompt": "Quelles pratiques fiabilisent des politiques en code ?",
    "skills": [
      "l-adv-policy"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les tester sur des cas conformes et non conformes"
      },
      {
        "id": "b",
        "text": "Les versionner et les relire"
      },
      {
        "id": "c",
        "text": "Les appliquer en production sans aucun test"
      },
      {
        "id": "d",
        "text": "Mesurer leurs faux positifs"
      }
    ]
  },
  {
    "id": "cav-q14",
    "prompt": "Quel langage déclaratif Open Policy Agent utilise-t-il pour écrire des règles ? (un mot)",
    "skills": [
      "l-adv-policy"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "cav-q15",
    "prompt": "Pourquoi le droit de passer un rôle à un service est-il sensible ?",
    "skills": [
      "l-adv-identite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il permet d’agir avec les droits du rôle"
      },
      {
        "id": "b",
        "text": "Il chiffre toutes les données du compte"
      },
      {
        "id": "c",
        "text": "Il crée un réseau privé virtuel isolé"
      },
      {
        "id": "d",
        "text": "Il supprime les journaux du compte concerné"
      }
    ]
  },
  {
    "id": "cav-q16",
    "prompt": "Un compte peut créer de nouvelles versions de politiques IAM. Quel risque cela représente-t-il ?",
    "skills": [
      "l-adv-identite"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il peut seulement créer des sauvegardes de données"
      },
      {
        "id": "b",
        "text": "Il ne peut rien modifier dans le compte"
      },
      {
        "id": "c",
        "text": "Il peut s’accorder des droits d’administration"
      },
      {
        "id": "d",
        "text": "Il peut seulement consulter les journaux du compte"
      }
    ]
  },
  {
    "id": "cav-q17",
    "prompt": "Qu’est-ce qu’une limite de permissions (permission boundary) ?",
    "skills": [
      "l-adv-identite"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un chiffrement des politiques IAM du compte"
      },
      {
        "id": "b",
        "text": "Une règle qui accorde tous les droits au compte"
      },
      {
        "id": "c",
        "text": "Un journal des connexions interactives"
      },
      {
        "id": "d",
        "text": "Un plafond de droits d’une identité"
      }
    ]
  },
  {
    "id": "cav-q18",
    "prompt": "Des identifiants temporaires obtenus par fédération réduisent l’impact d’un vol par rapport à une clé statique.",
    "skills": [
      "l-adv-identite"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cav-q19",
    "prompt": "Quel risque de « député confus » (confused deputy) existe pour un service tiers autorisé à assumer un rôle dans votre compte ?",
    "skills": [
      "l-adv-identite"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le rôle expire chaque minute sans prévenir"
      },
      {
        "id": "b",
        "text": "Un autre client du tiers peut le détourner"
      },
      {
        "id": "c",
        "text": "Le tiers perd l’accès à son propre compte"
      },
      {
        "id": "d",
        "text": "Le rôle devient illisible pour tous"
      }
    ]
  },
  {
    "id": "cav-q20",
    "prompt": "Quelles analyses révèlent un chemin d’escalade de privilèges ?",
    "skills": [
      "l-adv-identite"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Qui peut modifier une politique de confiance"
      },
      {
        "id": "b",
        "text": "Qui peut lire le journal d’audit en lecture seule"
      },
      {
        "id": "c",
        "text": "Qui peut créer des clés d’accès pour d’autres identités"
      },
      {
        "id": "d",
        "text": "Qui peut associer un rôle d’administration à un service"
      }
    ]
  },
  {
    "id": "cav-q21",
    "prompt": "Qu’est-ce que le chiffrement en enveloppe ?",
    "skills": [
      "l-adv-donnees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une clé de données sous clé maîtresse"
      },
      {
        "id": "b",
        "text": "Un chiffrement répété avec le même mot de passe"
      },
      {
        "id": "c",
        "text": "Un envoi des données par courrier"
      },
      {
        "id": "d",
        "text": "Une compression des données avant leur envoi"
      }
    ]
  },
  {
    "id": "cav-q22",
    "prompt": "Quel avantage le chiffrement en enveloppe apporte-t-il lors d’une rotation de la clé maîtresse ?",
    "skills": [
      "l-adv-donnees"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La rotation de la clé devient impossible"
      },
      {
        "id": "b",
        "text": "On rechiffre les clés de données seulement"
      },
      {
        "id": "c",
        "text": "On doit rechiffrer chaque donnée à la main"
      },
      {
        "id": "d",
        "text": "Les données deviennent publiques pendant l’opération"
      }
    ]
  },
  {
    "id": "cav-q23",
    "prompt": "À quoi sert la séparation entre administrateurs de clés et utilisateurs de clés ?",
    "skills": [
      "l-adv-donnees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Supprimer toute rotation des clés de données"
      },
      {
        "id": "b",
        "text": "Réduire le nombre de régions utilisées"
      },
      {
        "id": "c",
        "text": "Accélérer les opérations de chiffrement"
      },
      {
        "id": "d",
        "text": "Éviter le contrôle d’une seule personne"
      }
    ]
  },
  {
    "id": "cav-q24",
    "prompt": "Des identifiants de base de données générés à la demande et de courte durée réduisent l’impact d’une fuite par rapport à un mot de passe fixe.",
    "skills": [
      "l-adv-donnees"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cav-q25",
    "prompt": "Une clé gérée par le fournisseur empêche, dans tous les cas, ce dernier d’accéder aux données en clair.",
    "skills": [
      "l-adv-donnees"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "cav-q26",
    "prompt": "Quelles mesures renforcent la protection des secrets applicatifs ?",
    "skills": [
      "l-adv-donnees"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Un secret partagé dans une configuration commune"
      },
      {
        "id": "b",
        "text": "Un accès limité à l’identité de l’application"
      },
      {
        "id": "c",
        "text": "Une rotation automatique des secrets"
      },
      {
        "id": "d",
        "text": "Des identifiants à courte durée de vie"
      }
    ]
  },
  {
    "id": "cav-q27",
    "prompt": "Quel type de module matériel certifié protège les clés de chiffrement ? (sigle)",
    "skills": [
      "l-adv-donnees"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "cav-q28",
    "prompt": "À quoi sert la matrice MITRE ATT&CK pour le cloud ?",
    "skills": [
      "l-adv-detection"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Cartographier les techniques d’attaque"
      },
      {
        "id": "b",
        "text": "Chiffrer les journaux d’audit du compte"
      },
      {
        "id": "c",
        "text": "Facturer les ressources utilisées par équipe"
      },
      {
        "id": "d",
        "text": "Configurer les sous-réseaux de l’organisation"
      }
    ]
  },
  {
    "id": "cav-q29",
    "prompt": "Quel signal est typique de l’usage frauduleux d’une clé d’accès volée ?",
    "skills": [
      "l-adv-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une consultation de la documentation"
      },
      {
        "id": "b",
        "text": "Une connexion à l’heure habituelle depuis le bureau"
      },
      {
        "id": "c",
        "text": "Des appels d’API depuis une adresse inhabituelle"
      },
      {
        "id": "d",
        "text": "Une rotation planifiée de la clé"
      }
    ]
  },
  {
    "id": "cav-q30",
    "prompt": "Pourquoi tester ses détections dans un environnement dédié et autorisé ?",
    "skills": [
      "l-adv-detection"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Contourner les contrôles de l’organisation"
      },
      {
        "id": "b",
        "text": "Éviter de documenter les résultats obtenus"
      },
      {
        "id": "c",
        "text": "Vérifier leur déclenchement sans risque"
      },
      {
        "id": "d",
        "text": "Casser volontairement la production"
      }
    ]
  },
  {
    "id": "cav-q31",
    "prompt": "Plus une règle de détection génère d’alertes, meilleure est sa qualité.",
    "skills": [
      "l-adv-detection"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cav-q32",
    "prompt": "Quelles sources de journaux sont utiles pour détecter un abus de compte cloud ?",
    "skills": [
      "l-adv-detection"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les journaux de résolution DNS"
      },
      {
        "id": "b",
        "text": "Les journaux de gestion des API"
      },
      {
        "id": "c",
        "text": "Les fonds d’écran des postes de travail"
      },
      {
        "id": "d",
        "text": "Les journaux de flux réseau"
      }
    ]
  },
  {
    "id": "cav-q33",
    "prompt": "Comment appelle-t-on un faux identifiant déposé pour déclencher une alerte dès qu’il est utilisé ? (un terme)",
    "skills": [
      "l-adv-detection"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "un terme"
  },
  {
    "id": "cav-q34",
    "prompt": "Concevez trois détections pour un compte cloud en précisant, pour chacune, la source de journaux, le critère de déclenchement et la réponse.",
    "skills": [
      "l-adv-detection",
      "l-adv-resilience"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "cav-q35",
    "prompt": "Pourquoi stocker une sauvegarde immuable dans un compte distinct ?",
    "skills": [
      "l-adv-resilience"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un attaquant du compte ne peut pas la supprimer"
      },
      {
        "id": "b",
        "text": "Elle remplace la journalisation du compte"
      },
      {
        "id": "c",
        "text": "Elle se restaure beaucoup plus vite"
      },
      {
        "id": "d",
        "text": "Elle ne demande aucun test de restauration"
      }
    ]
  },
  {
    "id": "cav-q36",
    "prompt": "Comment isoler rapidement un compte cloud compromis sans le détruire ?",
    "skills": [
      "l-adv-resilience"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Redémarrer toutes les machines du compte"
      },
      {
        "id": "b",
        "text": "Poser une règle d’organisation de refus"
      },
      {
        "id": "c",
        "text": "Changer seulement le nom du compte"
      },
      {
        "id": "d",
        "text": "Supprimer immédiatement tout le compte"
      }
    ]
  },
  {
    "id": "cav-q37",
    "prompt": "Des machines très coûteuses apparaissent dans plusieurs régions d’un compte. Quelle hypothèse faut-il envisager ?",
    "skills": [
      "l-adv-resilience"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un simple changement de fuseau horaire"
      },
      {
        "id": "b",
        "text": "Une mise à jour du navigateur web"
      },
      {
        "id": "c",
        "text": "Une baisse de tarif décidée par le fournisseur"
      },
      {
        "id": "d",
        "text": "Un usage frauduleux, comme du minage"
      }
    ]
  },
  {
    "id": "cav-q38",
    "prompt": "Une alerte de budget peut aider à repérer la compromission d’un compte cloud.",
    "skills": [
      "l-adv-resilience"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cav-q39",
    "prompt": "Quelles actions suivent la confirmation de la compromission d’un compte ?",
    "skills": [
      "l-adv-resilience"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Rechercher les ressources créées par l’attaquant"
      },
      {
        "id": "b",
        "text": "Révoquer les sessions et les clés"
      },
      {
        "id": "c",
        "text": "Supprimer tous les journaux pour repartir de zéro"
      },
      {
        "id": "d",
        "text": "Préserver journaux et instantanés"
      }
    ]
  },
  {
    "id": "cav-q40",
    "prompt": "Quel indicateur mesure le temps écoulé entre le début d’une attaque et sa détection ? (sigle)",
    "skills": [
      "l-adv-resilience"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "sigle"
  }
];
