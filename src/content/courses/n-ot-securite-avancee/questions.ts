// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "noa-q1",
    "prompt": "Quels rôles la série IEC 62443 distingue-t-elle ?",
    "skills": [
      "n-adv-62443"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Seulement l’exploitant du site industriel"
      },
      {
        "id": "b",
        "text": "Exploitant, intégrateur, fabricant"
      },
      {
        "id": "c",
        "text": "Les utilisateurs de la messagerie"
      },
      {
        "id": "d",
        "text": "Seulement le fabricant du produit"
      }
    ]
  },
  {
    "id": "noa-q2",
    "prompt": "Que représente un niveau de sécurité cible (SL-T) ?",
    "skills": [
      "n-adv-62443"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le nombre d’opérateurs du site"
      },
      {
        "id": "b",
        "text": "La date de mise en service"
      },
      {
        "id": "c",
        "text": "Le niveau visé pour une zone"
      },
      {
        "id": "d",
        "text": "Le prix d’un équipement industriel"
      }
    ]
  },
  {
    "id": "noa-q3",
    "prompt": "Quelle différence existe entre SL-T, SL-A et SL-C ?",
    "skills": [
      "n-adv-62443"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Niveau visé, atteint, capacité"
      },
      {
        "id": "b",
        "text": "Trois protocoles industriels distincts"
      },
      {
        "id": "c",
        "text": "Trois fabricants d’automates"
      },
      {
        "id": "d",
        "text": "Trois noms du même niveau"
      }
    ]
  },
  {
    "id": "noa-q4",
    "prompt": "L’IEC 62443-4-1 porte sur le cycle de développement sécurisé des produits.",
    "skills": [
      "n-adv-62443"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "noa-q5",
    "prompt": "Quelles parties de la série IEC 62443 existent ?",
    "skills": [
      "n-adv-62443"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les exigences applicables au système"
      },
      {
        "id": "b",
        "text": "Les règles de couleur des armoires électriques"
      },
      {
        "id": "c",
        "text": "Les exigences applicables aux composants"
      },
      {
        "id": "d",
        "text": "Le programme de sécurité de l’exploitant"
      }
    ]
  },
  {
    "id": "noa-q6",
    "prompt": "Quel sigle de deux lettres désigne un niveau de sécurité dans l’IEC 62443 ? (deux lettres)",
    "skills": [
      "n-adv-62443"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux lettres"
  },
  {
    "id": "noa-q7",
    "prompt": "Décrivez, selon l’IEC 62443, la démarche de sécurisation d’un site de production de 300 personnes : zones, niveaux cibles et responsabilités.",
    "skills": [
      "n-adv-62443",
      "n-adv-risque"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "noa-q8",
    "prompt": "Qu’est-ce qu’une diode de données (passerelle unidirectionnelle) ?",
    "skills": [
      "n-adv-archi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un pare-feu classique à double sens"
      },
      {
        "id": "b",
        "text": "Un routeur sans fil industriel"
      },
      {
        "id": "c",
        "text": "Une sauvegarde chiffrée hors ligne"
      },
      {
        "id": "d",
        "text": "Un dispositif à flux unidirectionnel"
      }
    ]
  },
  {
    "id": "noa-q9",
    "prompt": "Quel est l’intérêt d’une passerelle unidirectionnelle entre l’OT et l’IT ?",
    "skills": [
      "n-adv-archi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Chiffrer tous les capteurs"
      },
      {
        "id": "b",
        "text": "Supprimer la zone intermédiaire"
      },
      {
        "id": "c",
        "text": "Remonter des données seulement"
      },
      {
        "id": "d",
        "text": "Accélérer l’envoi des commandes"
      }
    ]
  },
  {
    "id": "noa-q10",
    "prompt": "Pourquoi placer un serveur de rebond dans la DMZ pour l’administration à distance ?",
    "skills": [
      "n-adv-archi"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Contrôler et enregistrer les accès"
      },
      {
        "id": "b",
        "text": "Augmenter la bande passante du site"
      },
      {
        "id": "c",
        "text": "Remplacer les automates anciens"
      },
      {
        "id": "d",
        "text": "Exposer l’OT sur Internet librement"
      }
    ]
  },
  {
    "id": "noa-q11",
    "prompt": "Que signifie la micro-segmentation ?",
    "skills": [
      "n-adv-archi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Supprimer tous les pare-feu du site"
      },
      {
        "id": "b",
        "text": "Isoler finement des équipements"
      },
      {
        "id": "c",
        "text": "Fusionner tous les réseaux en un seul"
      },
      {
        "id": "d",
        "text": "Réduire la taille des paquets"
      }
    ]
  },
  {
    "id": "noa-q12",
    "prompt": "Une architecture de Purdue stricte interdit toute communication entre le niveau 3 (opérations) et le niveau 4 (entreprise).",
    "skills": [
      "n-adv-archi"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "noa-q13",
    "prompt": "Quels éléments appartiennent à une architecture OT défendable ?",
    "skills": [
      "n-adv-archi"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Une DMZ industrielle"
      },
      {
        "id": "b",
        "text": "Un accès distant par bastion"
      },
      {
        "id": "c",
        "text": "Un réseau unique à plat"
      },
      {
        "id": "d",
        "text": "Des zones et conduits définis"
      }
    ]
  },
  {
    "id": "noa-q14",
    "prompt": "Quel mot désigne un point d’accès unique et surveillé pour l’administration à distance ? (un mot)",
    "skills": [
      "n-adv-archi"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "noa-q15",
    "prompt": "Quelle spécificité présente l’analyse de risques en OT ?",
    "skills": [
      "n-adv-risque"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle ignore totalement la disponibilité"
      },
      {
        "id": "b",
        "text": "Elle est réservée aux pare-feu seuls"
      },
      {
        "id": "c",
        "text": "Elle ne concerne que les données"
      },
      {
        "id": "d",
        "text": "Elle intègre les effets physiques"
      }
    ]
  },
  {
    "id": "noa-q16",
    "prompt": "Quelle démarche de sûreté peut compléter l’analyse de risques cyber d’un procédé industriel ?",
    "skills": [
      "n-adv-risque"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une migration de messagerie"
      },
      {
        "id": "b",
        "text": "Un référencement de site web"
      },
      {
        "id": "c",
        "text": "Une étude de dangers (HAZOP)"
      },
      {
        "id": "d",
        "text": "Un inventaire de licences"
      }
    ]
  },
  {
    "id": "noa-q17",
    "prompt": "Quelle base de connaissances décrit les techniques d’attaque visant les systèmes de contrôle industriels ?",
    "skills": [
      "n-adv-risque"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un manuel de comptabilité"
      },
      {
        "id": "b",
        "text": "Un catalogue de mobilier"
      },
      {
        "id": "c",
        "text": "Un annuaire d’entreprise"
      },
      {
        "id": "d",
        "text": "MITRE ATT&CK pour les ICS"
      }
    ]
  },
  {
    "id": "noa-q18",
    "prompt": "Pourquoi la conséquence maximale crédible guide-t-elle la priorisation en OT ?",
    "skills": [
      "n-adv-risque"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle mesure l’impact sur la sûreté"
      },
      {
        "id": "b",
        "text": "Elle mesure le débit du réseau"
      },
      {
        "id": "c",
        "text": "Elle remplace la vraisemblance"
      },
      {
        "id": "d",
        "text": "Elle dépend du fournisseur de licences"
      }
    ]
  },
  {
    "id": "noa-q19",
    "prompt": "Un scénario cyber peut conduire à un accident industriel.",
    "skills": [
      "n-adv-risque"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "noa-q20",
    "prompt": "Que doit contenir une analyse de risques OT ?",
    "skills": [
      "n-adv-risque"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les scénarios et leurs conséquences sur le procédé"
      },
      {
        "id": "b",
        "text": "La couleur des voyants de l’armoire"
      },
      {
        "id": "c",
        "text": "Les chemins d’attaque depuis l’IT et les accès distants"
      },
      {
        "id": "d",
        "text": "Les mesures et le risque résiduel"
      }
    ]
  },
  {
    "id": "noa-q21",
    "prompt": "Qu’est-ce qu’une ligne de base du trafic OT ?",
    "skills": [
      "n-adv-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le calendrier des maintenances"
      },
      {
        "id": "b",
        "text": "Le profil normal des échanges"
      },
      {
        "id": "c",
        "text": "Le plan des locaux de l’usine"
      },
      {
        "id": "d",
        "text": "La liste des mots de passe du site"
      }
    ]
  },
  {
    "id": "noa-q22",
    "prompt": "Pourquoi la détection en OT s’appuie-t-elle sur une ligne de base ?",
    "skills": [
      "n-adv-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La détection est interdite en OT"
      },
      {
        "id": "b",
        "text": "Le trafic industriel est aléatoire"
      },
      {
        "id": "c",
        "text": "Elle remplace les pare-feu"
      },
      {
        "id": "d",
        "text": "Le trafic est très régulier"
      }
    ]
  },
  {
    "id": "noa-q23",
    "prompt": "Quel avantage présente un centre de détection capable de corréler IT et OT ?",
    "skills": [
      "n-adv-detection"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Supprimer toutes les alertes reçues"
      },
      {
        "id": "b",
        "text": "Fusionner les deux réseaux entre eux"
      },
      {
        "id": "c",
        "text": "Suivre une attaque de l’IT vers l’OT"
      },
      {
        "id": "d",
        "text": "Désactiver la supervision du site"
      }
    ]
  },
  {
    "id": "noa-q24",
    "prompt": "Une alerte OT doit être qualifiée avec l’équipe d’exploitation avant une action de confinement.",
    "skills": [
      "n-adv-detection"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "noa-q25",
    "prompt": "Une sonde passive détecte une écriture Modbus mais ne peut pas en indiquer la source.",
    "skills": [
      "n-adv-detection"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "noa-q26",
    "prompt": "Quels éléments révèlent un comportement anormal en OT ?",
    "skills": [
      "n-adv-detection"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Une écriture depuis une source inhabituelle"
      },
      {
        "id": "b",
        "text": "Une lecture périodique habituelle de la supervision"
      },
      {
        "id": "c",
        "text": "Un nouvel équipement sur le réseau"
      },
      {
        "id": "d",
        "text": "Un téléchargement de programme hors maintenance"
      }
    ]
  },
  {
    "id": "noa-q27",
    "prompt": "Comment appelle-t-on la détection fondée sur l’écart avec le comportement habituel ? (deux mots)",
    "skills": [
      "n-adv-detection"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "noa-q28",
    "prompt": "Pourquoi exiger des fournisseurs un cycle de développement sécurisé (IEC 62443-4-1) ?",
    "skills": [
      "n-adv-supply"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Réduire le prix d’achat des produits"
      },
      {
        "id": "b",
        "text": "Réduire les failles livrées"
      },
      {
        "id": "c",
        "text": "Supprimer toute mise à jour"
      },
      {
        "id": "d",
        "text": "Éviter tous les audits de sécurité"
      }
    ]
  },
  {
    "id": "noa-q29",
    "prompt": "Qu’est-ce qu’un correctif virtuel ?",
    "skills": [
      "n-adv-supply"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une règle réseau anti-exploitation"
      },
      {
        "id": "b",
        "text": "Un correctif logiciel appliqué hors ligne"
      },
      {
        "id": "c",
        "text": "Une sauvegarde de configuration"
      },
      {
        "id": "d",
        "text": "Un patch distribué sans signature"
      }
    ]
  },
  {
    "id": "noa-q30",
    "prompt": "Quelle caractéristique doit avoir la maintenance à distance d’un intégrateur ?",
    "skills": [
      "n-adv-supply"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un mot de passe identique pour tous"
      },
      {
        "id": "b",
        "text": "Un compte partagé et permanent"
      },
      {
        "id": "c",
        "text": "Aucun contrôle de l’exploitant"
      },
      {
        "id": "d",
        "text": "Un accès nominatif et enregistré"
      }
    ]
  },
  {
    "id": "noa-q31",
    "prompt": "Un équipement livré durci d’usine n’a pas besoin d’être reconfiguré à la réception.",
    "skills": [
      "n-adv-supply"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "noa-q32",
    "prompt": "Quelles exigences contractuelles sont utiles pour un fournisseur OT ?",
    "skills": [
      "n-adv-supply"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La notification des incidents"
      },
      {
        "id": "b",
        "text": "L’interdiction d’auditer les produits"
      },
      {
        "id": "c",
        "text": "La fourniture d’une nomenclature logicielle (SBOM)"
      },
      {
        "id": "d",
        "text": "Un délai de correction des vulnérabilités"
      }
    ]
  },
  {
    "id": "noa-q33",
    "prompt": "Quel sigle désigne l’inventaire des composants logiciels d’un produit ? (sigle)",
    "skills": [
      "n-adv-supply"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "noa-q34",
    "prompt": "Rédigez les exigences de sécurité à imposer à l’intégrateur qui installera un nouveau système de supervision dans une station d’épuration.",
    "skills": [
      "n-adv-supply",
      "n-adv-62443"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "noa-q35",
    "prompt": "Pourquoi tester la restauration d’un automate à partir d’une sauvegarde ?",
    "skills": [
      "n-adv-resilience"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Vérifier que la restauration marche"
      },
      {
        "id": "b",
        "text": "Supprimer la supervision du site"
      },
      {
        "id": "c",
        "text": "Accélérer le réseau local du site"
      },
      {
        "id": "d",
        "text": "Réduire la consommation électrique"
      }
    ]
  },
  {
    "id": "noa-q36",
    "prompt": "Qu’est-ce qu’une procédure de fonctionnement manuel ?",
    "skills": [
      "n-adv-resilience"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’arrêt complet de toute la production"
      },
      {
        "id": "b",
        "text": "Une panne provoquée volontairement"
      },
      {
        "id": "c",
        "text": "Un mode de pilotage sans supervision"
      },
      {
        "id": "d",
        "text": "Un test de pénétration autorisé"
      }
    ]
  },
  {
    "id": "noa-q37",
    "prompt": "Quelle est la finalité d’un exercice de crise OT ?",
    "skills": [
      "n-adv-resilience"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Choisir un nouveau fournisseur d’automates"
      },
      {
        "id": "b",
        "text": "Tester la coordination des équipes"
      },
      {
        "id": "c",
        "text": "Évaluer la qualité des câbles réseau"
      },
      {
        "id": "d",
        "text": "Mesurer la consommation électrique"
      }
    ]
  },
  {
    "id": "noa-q38",
    "prompt": "Les sauvegardes de programmes d’automates doivent être conservées hors du réseau de production.",
    "skills": [
      "n-adv-resilience"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "noa-q39",
    "prompt": "Quels éléments permettent une reprise rapide après un incident OT ?",
    "skills": [
      "n-adv-resilience"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Du matériel de rechange et des contacts fournisseurs"
      },
      {
        "id": "b",
        "text": "Des procédures manuelles de secours"
      },
      {
        "id": "c",
        "text": "Des programmes et configurations sauvegardés"
      },
      {
        "id": "d",
        "text": "Une documentation jamais mise à jour"
      }
    ]
  },
  {
    "id": "noa-q40",
    "prompt": "Quel sigle désigne un système instrumenté de sécurité qui ramène le procédé à un état sûr ? (sigle)",
    "skills": [
      "n-adv-resilience"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "sigle"
  }
];
