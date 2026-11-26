// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "ics-q1",
    "prompt": "Quel équipement lit des capteurs et commande des actionneurs en temps réel ?",
    "skills": [
      "n-ics-arch"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un automate (PLC)"
      },
      {
        "id": "b",
        "text": "Un proxy web"
      },
      {
        "id": "c",
        "text": "Un serveur de messagerie"
      },
      {
        "id": "d",
        "text": "Un contrôleur de domaine"
      }
    ]
  },
  {
    "id": "ics-q2",
    "prompt": "Dans un système industriel, la sûreté des personnes et la disponibilité sont généralement prioritaires sur la confidentialité.",
    "skills": [
      "n-ics-arch"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "ics-q3",
    "prompt": "Quelles contraintes sont typiques de l’OT ?",
    "skills": [
      "n-ics-arch"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Équipements en service pendant 15 à 30 ans"
      },
      {
        "id": "b",
        "text": "Sensibilité de certains équipements aux scans réseau"
      },
      {
        "id": "c",
        "text": "Remplacement des automates tous les ans"
      },
      {
        "id": "d",
        "text": "Correctifs difficiles à appliquer sans arrêt de production"
      }
    ]
  },
  {
    "id": "ics-q14",
    "prompt": "Quelle attaque de 2017 a visé des systèmes instrumentés de sécurité (SIS) d’un site pétrochimique ?",
    "skills": [
      "n-ics-arch"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Heartbleed"
      },
      {
        "id": "b",
        "text": "WannaCry"
      },
      {
        "id": "c",
        "text": "Log4Shell"
      },
      {
        "id": "d",
        "text": "Triton (Trisis)"
      }
    ]
  },
  {
    "id": "ics-q31",
    "prompt": "Que désigne l’acronyme OT ?",
    "skills": [
      "n-ics-arch"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les outils de télétravail"
      },
      {
        "id": "b",
        "text": "L’optimisation des transferts de fichiers"
      },
      {
        "id": "c",
        "text": "L’informatique industrielle"
      },
      {
        "id": "d",
        "text": "Les opérations tarifaires"
      }
    ]
  },
  {
    "id": "ics-q32",
    "prompt": "Pourquoi un redémarrage est-il parfois impossible en OT ?",
    "skills": [
      "n-ics-arch"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il efface systématiquement le programme"
      },
      {
        "id": "b",
        "text": "Il peut interrompre un procédé continu"
      },
      {
        "id": "c",
        "text": "Les automates n’ont pas d’alimentation propre"
      },
      {
        "id": "d",
        "text": "Les redémarrages sont interdits par le système"
      }
    ]
  },
  {
    "id": "ics-q33",
    "prompt": "Dans le modèle de Purdue, quel niveau regroupe les automates de contrôle de base ?",
    "skills": [
      "n-ics-arch"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le niveau 1"
      },
      {
        "id": "b",
        "text": "Le niveau 5, celui de l’entreprise"
      },
      {
        "id": "c",
        "text": "Le niveau 4, celui de la gestion"
      },
      {
        "id": "d",
        "text": "Le niveau 3,5, celui de la DMZ"
      }
    ]
  },
  {
    "id": "ics-q34",
    "prompt": "Les systèmes instrumentés de sécurité sont conçus pour mettre le procédé en sécurité en cas d’anomalie.",
    "skills": [
      "n-ics-arch"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ics-q4",
    "prompt": "Sur quel port TCP écoute Modbus TCP par défaut ? (nombre)",
    "skills": [
      "n-modbus"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "nombre"
  },
  {
    "id": "ics-q5",
    "prompt": "Quel code fonction Modbus correspond à l’écriture d’un registre unique ?",
    "skills": [
      "n-modbus"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "0x03"
      },
      {
        "id": "b",
        "text": "0x01"
      },
      {
        "id": "c",
        "text": "0x06"
      },
      {
        "id": "d",
        "text": "0x04"
      }
    ]
  },
  {
    "id": "ics-q6",
    "prompt": "Modbus TCP intègre nativement l’authentification de l’émetteur des commandes.",
    "skills": [
      "n-modbus"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "ics-q7",
    "prompt": "Que fait la trame `00 07 00 00 00 06 02 05 00 03 FF 00` ?",
    "skills": [
      "n-modbus"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle redémarre l’automate de l’unité 2"
      },
      {
        "id": "b",
        "text": "Elle active la bobine 3 de l’unité 2"
      },
      {
        "id": "c",
        "text": "Elle écrit la valeur 3 dans le registre 255"
      },
      {
        "id": "d",
        "text": "Elle lit trois registres de l’unité 2"
      }
    ]
  },
  {
    "id": "ics-q8",
    "prompt": "Quels protocoles ou versions intègrent des mécanismes de sécurité (authentification, chiffrement) ?",
    "skills": [
      "n-modbus"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Modbus RTU sur liaison série"
      },
      {
        "id": "b",
        "text": "DNP3 Secure Authentication"
      },
      {
        "id": "c",
        "text": "Modbus/TCP Security (sur TLS)"
      },
      {
        "id": "d",
        "text": "OPC UA"
      }
    ]
  },
  {
    "id": "ics-q16",
    "prompt": "Comment appelle-t-on une supervision de sécurité qui écoute le trafic sur un port miroir sans émettre de paquets ? (un adjectif)",
    "skills": [
      "n-modbus",
      "n-segment"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un adjectif"
  },
  {
    "id": "ics-q35",
    "prompt": "À quoi sert l’identifiant d’unité dans une trame Modbus TCP ?",
    "skills": [
      "n-modbus"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Chiffrer la trame envoyée"
      },
      {
        "id": "b",
        "text": "Indiquer la date de l’émission"
      },
      {
        "id": "c",
        "text": "Fournir le mot de passe"
      },
      {
        "id": "d",
        "text": "Désigner l’équipement destinataire"
      }
    ]
  },
  {
    "id": "ics-q36",
    "prompt": "Que signifie la valeur 0x0000 dans une écriture de bobine (code 0x05) ?",
    "skills": [
      "n-modbus"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La trame est rejetée"
      },
      {
        "id": "b",
        "text": "La bobine est mise à ON"
      },
      {
        "id": "c",
        "text": "La bobine est mise à OFF"
      },
      {
        "id": "d",
        "text": "L’automate est redémarré"
      }
    ]
  },
  {
    "id": "ics-q37",
    "prompt": "Que peut filtrer un pare-feu industriel sur Modbus TCP ?",
    "skills": [
      "n-modbus"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La couleur des paquets"
      },
      {
        "id": "b",
        "text": "Le code fonction demandé"
      },
      {
        "id": "c",
        "text": "La plage d’adresses de registres visée"
      },
      {
        "id": "d",
        "text": "L’adresse source de la requête"
      }
    ]
  },
  {
    "id": "ics-q9",
    "prompt": "Quelle série de normes internationales définit les zones, les conduits et les niveaux de sécurité pour les systèmes industriels ? (ex. ISO 12345)",
    "skills": [
      "n-segment"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "ex. ISO 12345"
  },
  {
    "id": "ics-q10",
    "prompt": "Où placer le serveur historique répliqué consulté par les équipes de gestion ?",
    "skills": [
      "n-segment"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Directement exposé sur Internet"
      },
      {
        "id": "b",
        "text": "Dans une DMZ industrielle"
      },
      {
        "id": "c",
        "text": "Sur le poste de supervision de l’opérateur"
      },
      {
        "id": "d",
        "text": "Dans le réseau même des automates"
      }
    ]
  },
  {
    "id": "ics-q11",
    "prompt": "Un scan Nmap complet du réseau d’automates en production est la méthode recommandée pour réaliser l’inventaire OT.",
    "skills": [
      "n-segment",
      "n-ics-arch"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ics-q12",
    "prompt": "Quelles mesures sécurisent la maintenance à distance par un fournisseur ?",
    "skills": [
      "n-segment"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Ouverture de l’accès à la demande, pour une durée limitée"
      },
      {
        "id": "b",
        "text": "Logiciel de prise en main installé en permanence sur l’IHM"
      },
      {
        "id": "c",
        "text": "Bastion dédié avec MFA et enregistrement des sessions"
      },
      {
        "id": "d",
        "text": "Accès limité aux seuls équipements du fournisseur"
      }
    ]
  },
  {
    "id": "ics-q13",
    "prompt": "Votre sonde passive signale une écriture Modbus (code 0x10) vers un automate de dosage chimique, depuis un poste de la bureautique. Décrivez votre réaction, en tenant compte des contraintes OT.",
    "skills": [
      "n-segment",
      "n-modbus"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "ics-q15",
    "prompt": "Expliquez à un DSI habitué à l’IT pourquoi on ne peut pas appliquer les correctifs Windows des IHM industrielles chaque mois comme sur les postes bureautiques, et quelles mesures compensatoires vous proposez.",
    "skills": [
      "n-segment",
      "n-ics-arch"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "ics-q38",
    "prompt": "Que faut-il éviter entre le réseau bureautique et les automates ?",
    "skills": [
      "n-segment"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Tout flux direct sans DMZ"
      },
      {
        "id": "b",
        "text": "Tout inventaire des équipements"
      },
      {
        "id": "c",
        "text": "Toute sauvegarde des programmes"
      },
      {
        "id": "d",
        "text": "Toute journalisation des flux"
      }
    ]
  },
  {
    "id": "ics-q39",
    "prompt": "Quel type de niveau cible l’IEC 62443 attribue-t-elle à une zone ?",
    "skills": [
      "n-segment"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un niveau de A à Z"
      },
      {
        "id": "b",
        "text": "Un niveau de 1 à 100"
      },
      {
        "id": "c",
        "text": "Aucun niveau, la norme n’en définit pas"
      },
      {
        "id": "d",
        "text": "Un niveau de sécurité SL de 1 à 4"
      }
    ]
  },
  {
    "id": "ics-q40",
    "prompt": "Un accès distant permanent pour le fournisseur est acceptable s’il est protégé par un mot de passe.",
    "skills": [
      "n-segment"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "ics-q17",
    "prompt": "Quel protocole industriel moderne intègre authentification, signature et chiffrement ?",
    "skills": [
      "n-proto"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Modbus TCP"
      },
      {
        "id": "b",
        "text": "Telnet"
      },
      {
        "id": "c",
        "text": "Modbus RTU"
      },
      {
        "id": "d",
        "text": "OPC UA"
      }
    ]
  },
  {
    "id": "ics-q18",
    "prompt": "Quel protocole est très répandu dans l’énergie et l’eau, notamment en Amérique du Nord ?",
    "skills": [
      "n-proto"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "DNP3"
      },
      {
        "id": "b",
        "text": "IMAP"
      },
      {
        "id": "c",
        "text": "HTTP"
      },
      {
        "id": "d",
        "text": "SMTP"
      }
    ]
  },
  {
    "id": "ics-q19",
    "prompt": "Pourquoi filtrer les codes fonction autorisés sur un pare-feu industriel ?",
    "skills": [
      "n-proto"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Supprimer toute authentification"
      },
      {
        "id": "b",
        "text": "Bloquer les écritures non légitimes"
      },
      {
        "id": "c",
        "text": "Chiffrer l’ensemble du protocole"
      },
      {
        "id": "d",
        "text": "Accélérer l’exécution des automates"
      }
    ]
  },
  {
    "id": "ics-q20",
    "prompt": "Que ne peut pas faire à lui seul un filtrage par code fonction ?",
    "skills": [
      "n-proto"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Bloquer les écritures non autorisées"
      },
      {
        "id": "b",
        "text": "Autoriser les lectures légitimes"
      },
      {
        "id": "c",
        "text": "Juger la valeur écrite"
      },
      {
        "id": "d",
        "text": "Journaliser les trames reçues"
      }
    ]
  },
  {
    "id": "ics-q21",
    "prompt": "Une liaison série Modbus RTU isolée de tout réseau n’est pas exposée à l’accès distant comme un Modbus TCP routé.",
    "skills": [
      "n-proto"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ics-q22",
    "prompt": "Quels protocoles sont couramment rencontrés en environnement industriel ?",
    "skills": [
      "n-proto"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Profinet"
      },
      {
        "id": "b",
        "text": "Modbus"
      },
      {
        "id": "c",
        "text": "DNP3"
      },
      {
        "id": "d",
        "text": "SMTP"
      }
    ]
  },
  {
    "id": "ics-q23",
    "prompt": "Comment appelle-t-on l’inspection du contenu d’un protocole (codes fonction, valeurs) par un pare-feu ? (deux mots)",
    "skills": [
      "n-proto"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "ics-q24",
    "prompt": "Que faire avant d’isoler un équipement industriel à la suite d’une alerte ?",
    "skills": [
      "n-detection"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Redémarrer l’automate concerné"
      },
      {
        "id": "b",
        "text": "Consulter l’équipe d’exploitation"
      },
      {
        "id": "c",
        "text": "Couper tout le réseau de supervision"
      },
      {
        "id": "d",
        "text": "Effacer les journaux"
      }
    ]
  },
  {
    "id": "ics-q25",
    "prompt": "Pourquoi une sonde passive convient-elle à l’OT ?",
    "skills": [
      "n-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle redémarre les équipements fautifs"
      },
      {
        "id": "b",
        "text": "Elle remplace les automates anciens"
      },
      {
        "id": "c",
        "text": "Elle écoute sans émettre de paquets"
      },
      {
        "id": "d",
        "text": "Elle bloque seule toutes les attaques"
      }
    ]
  },
  {
    "id": "ics-q26",
    "prompt": "Quel événement constitue un signal fort sur un réseau OT ?",
    "skills": [
      "n-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une lecture périodique par la supervision"
      },
      {
        "id": "b",
        "text": "Un échange régulier avec l’IHM locale"
      },
      {
        "id": "c",
        "text": "Une synchronisation d’horloge habituelle"
      },
      {
        "id": "d",
        "text": "Un téléchargement de programme inhabituel"
      }
    ]
  },
  {
    "id": "ics-q27",
    "prompt": "Quel est le risque d’une réponse brutale consistant à couper tout le réseau de supervision ?",
    "skills": [
      "n-detection"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Perdre la visibilité et créer un danger"
      },
      {
        "id": "b",
        "text": "Aucun risque, la coupure est toujours sûre"
      },
      {
        "id": "c",
        "text": "Chiffrer les données de production"
      },
      {
        "id": "d",
        "text": "Accélérer automatiquement le procédé"
      }
    ]
  },
  {
    "id": "ics-q28",
    "prompt": "Une sauvegarde à jour des programmes d’automates facilite la reprise après un incident.",
    "skills": [
      "n-detection"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ics-q29",
    "prompt": "Quelles informations une alerte OT doit-elle permettre d’établir ?",
    "skills": [
      "n-detection"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le code fonction et la valeur écrite"
      },
      {
        "id": "b",
        "text": "La source et la destination du flux"
      },
      {
        "id": "c",
        "text": "La couleur de l’équipement"
      },
      {
        "id": "d",
        "text": "L’équipement et le procédé concernés"
      }
    ]
  },
  {
    "id": "ics-q30",
    "prompt": "Comment appelle-t-on le fonctionnement volontairement réduit d’un procédé, maintenu pendant un incident ? (deux mots)",
    "skills": [
      "n-detection"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  }
];
