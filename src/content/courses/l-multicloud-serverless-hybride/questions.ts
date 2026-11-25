// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "mch-q1",
    "prompt": "Que recouvre le modèle de responsabilité partagée, commun aux fournisseurs cloud ?",
    "skills": [
      "l-multicloud"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La responsabilité change chaque mois selon l’usage"
      },
      {
        "id": "b",
        "text": "Le fournisseur est responsable de tout, sans exception"
      },
      {
        "id": "c",
        "text": "Le fournisseur sécurise le socle, le client le reste"
      },
      {
        "id": "d",
        "text": "Le client n’a aucune responsabilité de sécurité"
      }
    ]
  },
  {
    "id": "mch-q2",
    "prompt": "Quelle est la cause la plus fréquente des incidents de sécurité cloud ?",
    "skills": [
      "l-multicloud"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une erreur de configuration du client"
      },
      {
        "id": "b",
        "text": "La mise à jour automatique du système d’exploitation"
      },
      {
        "id": "c",
        "text": "La panne d’un câble sous-marin transatlantique"
      },
      {
        "id": "d",
        "text": "Une faille du socle matériel du fournisseur lui-même"
      }
    ]
  },
  {
    "id": "mch-q3",
    "prompt": "Quel type d’outil évalue en continu la configuration d’un cloud par rapport aux bonnes pratiques et signale les écarts ? (sigle)",
    "skills": [
      "l-multicloud"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "mch-q8",
    "prompt": "Expliquez pourquoi accorder un droit « trop haut dans la hiérarchie » est une erreur majeure sur Azure comme sur Google Cloud, et comment l’éviter.",
    "skills": [
      "l-azure-gcp",
      "l-multicloud"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "mch-q31",
    "prompt": "Un développeur n’a besoin que de lire un seul compartiment de stockage. Quelle attribution respecte le moindre privilège ?",
    "skills": [
      "l-multicloud"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un rôle de lecture sur toute l’organisation"
      },
      {
        "id": "b",
        "text": "Le rôle de propriétaire de tout le compte"
      },
      {
        "id": "c",
        "text": "Un rôle d’administrateur de tout le projet"
      },
      {
        "id": "d",
        "text": "Un rôle de lecture limité à ce compartiment"
      }
    ]
  },
  {
    "id": "mch-q32",
    "prompt": "Choisir un fournisseur certifié dispense le client de surveiller sa propre configuration.",
    "skills": [
      "l-multicloud"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mch-q4",
    "prompt": "Comment s’appelle l’annuaire d’identités d’Azure ?",
    "skills": [
      "l-azure-gcp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "AWS IAM"
      },
      {
        "id": "b",
        "text": "Microsoft Entra ID"
      },
      {
        "id": "c",
        "text": "Active Directory Federation Services"
      },
      {
        "id": "d",
        "text": "Cloud Identity"
      }
    ]
  },
  {
    "id": "mch-q5",
    "prompt": "Sur Google Cloud, un rôle accordé au niveau de l’organisation s’hérite sur tous les dossiers et projets en dessous.",
    "skills": [
      "l-azure-gcp"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "mch-q6",
    "prompt": "Quelles pratiques réduisent le risque lié aux identités non humaines dans le cloud ?",
    "skills": [
      "l-azure-gcp"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Un minimum de droits par identité managée ou compte de service"
      },
      {
        "id": "b",
        "text": "Le compte de service par défaut sur-privilégié partout"
      },
      {
        "id": "c",
        "text": "Une fédération plutôt que des clés exportées"
      },
      {
        "id": "d",
        "text": "Une attribution au niveau le plus bas suffisant"
      }
    ]
  },
  {
    "id": "mch-q7",
    "prompt": "Pourquoi limiter le nombre de titulaires du rôle « administrateur général » d’Entra ID ?",
    "skills": [
      "l-azure-gcp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour accélérer les connexions des utilisateurs"
      },
      {
        "id": "b",
        "text": "Pour réduire la facture mensuelle"
      },
      {
        "id": "c",
        "text": "Parce qu’Azure limite à deux administrateurs"
      },
      {
        "id": "d",
        "text": "Il contrôle tout le locataire"
      }
    ]
  },
  {
    "id": "mch-q33",
    "prompt": "Que permet l’accès conditionnel dans Azure ?",
    "skills": [
      "l-azure-gcp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Exiger MFA selon le contexte de connexion"
      },
      {
        "id": "b",
        "text": "Chiffrer les disques des machines virtuelles"
      },
      {
        "id": "c",
        "text": "Facturer les ressources selon leur usage réel"
      },
      {
        "id": "d",
        "text": "Créer des sous-réseaux isolés par projet"
      }
    ]
  },
  {
    "id": "mch-q34",
    "prompt": "Sur Azure, pourquoi attribuer un rôle à la portée d’un groupe de ressources plutôt que de l’abonnement ?",
    "skills": [
      "l-azure-gcp"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le rôle s’exécute plus rapidement qu’à l’abonnement"
      },
      {
        "id": "b",
        "text": "Les droits ne couvrent que le groupe"
      },
      {
        "id": "c",
        "text": "Le rôle n’expire jamais une fois attribué"
      },
      {
        "id": "d",
        "text": "Cela supprime le besoin de MFA pour les administrateurs"
      }
    ]
  },
  {
    "id": "mch-q35",
    "prompt": "La fédération d’identité de charge de travail permet à une application externe d’accéder à Google Cloud sans clé de compte de service exportée.",
    "skills": [
      "l-azure-gcp"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "mch-q9",
    "prompt": "À quoi sert un groupe de sécurité dans un réseau cloud ?",
    "skills": [
      "l-reseau-cloud"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il chiffre les disques des machines"
      },
      {
        "id": "b",
        "text": "Il remplace le compte de service"
      },
      {
        "id": "c",
        "text": "Un pare-feu attaché à une ressource"
      },
      {
        "id": "d",
        "text": "Il attribue les rôles IAM aux utilisateurs"
      }
    ]
  },
  {
    "id": "mch-q10",
    "prompt": "Ouvrir un port d’administration (SSH, RDP) à 0.0.0.0/0 dans le cloud est une pratique acceptable si le mot de passe est fort.",
    "skills": [
      "l-reseau-cloud"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mch-q11",
    "prompt": "Quelles mesures sécurisent un réseau cloud ?",
    "skills": [
      "l-reseau-cloud"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Journalisation des flux réseau"
      },
      {
        "id": "b",
        "text": "Sous-réseaux privés pour les ressources sans adresse publique"
      },
      {
        "id": "c",
        "text": "Groupes de sécurité en refus par défaut"
      },
      {
        "id": "d",
        "text": "Points d’accès privés vers les services du cloud"
      },
      {
        "id": "e",
        "text": "Ouvrir tous les ports en entrée pour faciliter les tests"
      }
    ]
  },
  {
    "id": "mch-q36",
    "prompt": "Quels éléments signalent une exposition publique involontaire ?",
    "skills": [
      "l-reseau-cloud"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Base de données dotée d’une adresse publique"
      },
      {
        "id": "b",
        "text": "Stockage dont l’accès anonyme est autorisé"
      },
      {
        "id": "c",
        "text": "Sous-réseau privé sans adresse publique"
      },
      {
        "id": "d",
        "text": "Règle autorisant 0.0.0.0/0 sur un port d’administration"
      }
    ]
  },
  {
    "id": "mch-q37",
    "prompt": "Comment administrer à distance une machine d’un sous-réseau privé sans l’exposer à Internet ?",
    "skills": [
      "l-reseau-cloud"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "En désactivant les groupes de sécurité"
      },
      {
        "id": "b",
        "text": "En lui attribuant une adresse publique"
      },
      {
        "id": "c",
        "text": "Par un bastion ou un point d’accès privé"
      },
      {
        "id": "d",
        "text": "En ouvrant SSH à 0.0.0.0/0"
      }
    ]
  },
  {
    "id": "mch-q12",
    "prompt": "Où se déplace la surface de sécurité avec le serverless ?",
    "skills": [
      "l-serverless-hybride"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle disparaît complètement avec le serverless"
      },
      {
        "id": "b",
        "text": "Vers le code, les permissions et les déclencheurs"
      },
      {
        "id": "c",
        "text": "Vers le câblage réseau physique du centre de données"
      },
      {
        "id": "d",
        "text": "Vers le refroidissement des serveurs du fournisseur"
      }
    ]
  },
  {
    "id": "mch-q13",
    "prompt": "Stocker les secrets d’une fonction serverless en clair dans ses variables d’environnement est à éviter au profit d’un coffre de secrets.",
    "skills": [
      "l-serverless-hybride"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mch-q14",
    "prompt": "Dans un environnement hybride ou multi-cloud, quel principe vise à n’avoir qu’un annuaire d’identités de référence ? (deux mots)",
    "skills": [
      "l-serverless-hybride"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "identité …"
  },
  {
    "id": "mch-q15",
    "prompt": "Une entreprise exploite à la fois des serveurs internes et deux fournisseurs cloud, chacun avec sa console. Quels problèmes cela pose-t-il et que recommandez-vous ?",
    "skills": [
      "l-serverless-hybride",
      "l-reseau-cloud"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "mch-q16",
    "prompt": "Pourquoi analyser les dépendances embarquées dans une fonction serverless ?",
    "skills": [
      "l-serverless-hybride"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elles peuvent contenir des failles connues"
      },
      {
        "id": "b",
        "text": "Cela n’a aucun intérêt en serverless"
      },
      {
        "id": "c",
        "text": "Pour réduire le seul temps de démarrage"
      },
      {
        "id": "d",
        "text": "Parce que le fournisseur l’interdit formellement"
      }
    ]
  },
  {
    "id": "mch-q38",
    "prompt": "Une fonction serverless est déclenchée par des fichiers déposés par des tiers. Quelle précaution est essentielle ?",
    "skills": [
      "l-serverless-hybride"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Désactiver la journalisation de la fonction"
      },
      {
        "id": "b",
        "text": "Accorder à la fonction un rôle d’administrateur"
      },
      {
        "id": "c",
        "text": "Stocker les fichiers reçus sans aucun contrôle"
      },
      {
        "id": "d",
        "text": "Valider le type et la taille des entrées"
      }
    ]
  },
  {
    "id": "mch-q39",
    "prompt": "Quelles pratiques sécurisent un environnement hybride ?",
    "skills": [
      "l-serverless-hybride"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Une collecte centralisée des journaux"
      },
      {
        "id": "b",
        "text": "Une identité fédérée unique"
      },
      {
        "id": "c",
        "text": "Des politiques équivalentes sur site et dans le cloud"
      },
      {
        "id": "d",
        "text": "Des comptes locaux distincts dans chaque environnement"
      }
    ]
  },
  {
    "id": "mch-q40",
    "prompt": "Quel sigle désigne la plateforme qui centralise et corrèle les journaux de sécurité de tous les environnements ?",
    "skills": [
      "l-serverless-hybride",
      "l-mc-detection"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "mch-q17",
    "prompt": "Quel journal Azure consigne les opérations de gestion effectuées sur les ressources d’un abonnement ?",
    "skills": [
      "l-mc-detection"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le journal d’activité"
      },
      {
        "id": "b",
        "text": "Les métriques de performance"
      },
      {
        "id": "c",
        "text": "Le tableau de facturation"
      },
      {
        "id": "d",
        "text": "Les journaux d’un poste d’administration"
      }
    ]
  },
  {
    "id": "mch-q18",
    "prompt": "Sur Google Cloud, quels journaux consignent les appels d’administration faits sur les ressources ?",
    "skills": [
      "l-mc-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les journaux de démarrage des machines"
      },
      {
        "id": "b",
        "text": "Les journaux d’audit Cloud"
      },
      {
        "id": "c",
        "text": "Les métriques de latence du service"
      },
      {
        "id": "d",
        "text": "Les rapports de facturation mensuels"
      }
    ]
  },
  {
    "id": "mch-q19",
    "prompt": "Une alerte signale la création d’une clé de compte de service depuis une adresse inhabituelle. Quelle est la première action ?",
    "skills": [
      "l-mc-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ajouter des droits au compte pour tester"
      },
      {
        "id": "b",
        "text": "Attendre la prochaine revue trimestrielle"
      },
      {
        "id": "c",
        "text": "Supprimer le journal de l’événement"
      },
      {
        "id": "d",
        "text": "Désactiver la clé et examiner son usage"
      }
    ]
  },
  {
    "id": "mch-q20",
    "prompt": "Pourquoi centraliser les journaux de plusieurs comptes dans un espace dédié et protégé ?",
    "skills": [
      "l-mc-detection"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Cela réduit la facture de stockage mensuelle"
      },
      {
        "id": "b",
        "text": "Cela supprime tout besoin d’alertes"
      },
      {
        "id": "c",
        "text": "L’attaquant ne peut pas les effacer"
      },
      {
        "id": "d",
        "text": "Cela remplace le contrôle d’accès"
      }
    ]
  },
  {
    "id": "mch-q21",
    "prompt": "La journalisation des opérations d’administration doit être activée avant l’incident : elle ne remonte pas dans le passé.",
    "skills": [
      "l-mc-detection"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mch-q22",
    "prompt": "Quels événements méritent une alerte prioritaire dans un cloud ?",
    "skills": [
      "l-mc-detection"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La création d’une clé d’accès pour une identité de service"
      },
      {
        "id": "b",
        "text": "La désactivation de la journalisation"
      },
      {
        "id": "c",
        "text": "La lecture d’un fichier par son propriétaire habituel"
      },
      {
        "id": "d",
        "text": "L’attribution d’un rôle d’administrateur à un nouveau compte"
      }
    ]
  },
  {
    "id": "mch-q23",
    "prompt": "Comment appelle-t-on le remplacement d’un secret ou d’une clé exposés par une nouvelle valeur ? (un mot)",
    "skills": [
      "l-mc-detection"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "mch-q24",
    "prompt": "Quel service permet de créer, stocker et contrôler l’usage des clés de chiffrement dans le cloud ?",
    "skills": [
      "l-mc-donnees"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un service de gestion de clés (KMS)"
      },
      {
        "id": "b",
        "text": "Un service de messagerie"
      },
      {
        "id": "c",
        "text": "Un répartiteur de charge"
      },
      {
        "id": "d",
        "text": "Un service d’impression"
      }
    ]
  },
  {
    "id": "mch-q25",
    "prompt": "Qu’apporte une clé gérée par le client par rapport à une clé gérée par le fournisseur ?",
    "skills": [
      "l-mc-donnees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le chiffrement devient inutile pour les données"
      },
      {
        "id": "b",
        "text": "Les données ne sont plus sauvegardées nulle part"
      },
      {
        "id": "c",
        "text": "Le fournisseur n’est plus responsable du socle"
      },
      {
        "id": "d",
        "text": "Le contrôle de son usage et de sa révocation"
      }
    ]
  },
  {
    "id": "mch-q26",
    "prompt": "Que se passe-t-il si une clé de chiffrement gérée par le client est détruite sans copie ?",
    "skills": [
      "l-mc-donnees"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Seules les sauvegardes sont touchées"
      },
      {
        "id": "b",
        "text": "Le fournisseur recrée la même clé"
      },
      {
        "id": "c",
        "text": "Les données chiffrées sont irrécupérables"
      },
      {
        "id": "d",
        "text": "Les données restent lisibles en clair"
      }
    ]
  },
  {
    "id": "mch-q27",
    "prompt": "Le chiffrement au repos suffit à protéger les données si un compte disposant des droits de lecture est compromis.",
    "skills": [
      "l-mc-donnees"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mch-q28",
    "prompt": "Quelles mesures protègent les clés de chiffrement dans le cloud ?",
    "skills": [
      "l-mc-donnees"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Journaliser chaque usage de la clé"
      },
      {
        "id": "b",
        "text": "Séparer l’administration de la clé de son usage"
      },
      {
        "id": "c",
        "text": "Une rotation régulière"
      },
      {
        "id": "d",
        "text": "Stocker la clé à côté des données chiffrées"
      }
    ]
  },
  {
    "id": "mch-q29",
    "prompt": "Que désigne la résidence des données ?",
    "skills": [
      "l-mc-donnees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le format des fichiers utilisés"
      },
      {
        "id": "b",
        "text": "Le lieu où elles sont stockées et traitées"
      },
      {
        "id": "c",
        "text": "La durée de conservation des sauvegardes"
      },
      {
        "id": "d",
        "text": "Le niveau de chiffrement des disques"
      }
    ]
  },
  {
    "id": "mch-q30",
    "prompt": "Quel référentiel de l’ANSSI qualifie les fournisseurs de services cloud de confiance ?",
    "skills": [
      "l-mc-donnees"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "nom du référentiel"
  }
];
