// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "apf-q1",
    "prompt": "Sur quoi repose principalement la sécurité d’un réseau Profinet ?",
    "skills": [
      "n-profinet"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La segmentation et la surveillance passive"
      },
      {
        "id": "b",
        "text": "Le chiffrement de bout en bout imposé par le protocole"
      },
      {
        "id": "c",
        "text": "Un mot de passe unique sur chaque capteur"
      },
      {
        "id": "d",
        "text": "L’absence totale de réseau"
      }
    ]
  },
  {
    "id": "apf-q2",
    "prompt": "Comme Modbus, Profinet a été conçu d’abord pour fonctionner sur un réseau de confiance, pas pour résister à un participant hostile.",
    "skills": [
      "n-profinet"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "apf-q3",
    "prompt": "Pourquoi ne peut-on pas ajouter n’importe quel contrôle de sécurité lourd sur un bus industriel temps réel ?",
    "skills": [
      "n-profinet"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La loi l’interdit absolument"
      },
      {
        "id": "b",
        "text": "Le temps réel n’a aucune incidence"
      },
      {
        "id": "c",
        "text": "Le temps réel impose un délai borné"
      },
      {
        "id": "d",
        "text": "Les automates refusent tout chiffrement"
      }
    ]
  },
  {
    "id": "apf-q31",
    "prompt": "Que signifie le caractère « temps réel » d’un protocole industriel ?",
    "skills": [
      "n-profinet"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un protocole fonctionnant sans câble"
      },
      {
        "id": "b",
        "text": "Une transmission toujours chiffrée"
      },
      {
        "id": "c",
        "text": "Un usage réservé à Internet"
      },
      {
        "id": "d",
        "text": "Un délai borné et prévisible"
      }
    ]
  },
  {
    "id": "apf-q32",
    "prompt": "Quel moyen permet de surveiller un réseau Profinet sans le perturber ?",
    "skills": [
      "n-profinet"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un clavier supplémentaire sur le poste"
      },
      {
        "id": "b",
        "text": "Une sonde sur un port miroir"
      },
      {
        "id": "c",
        "text": "Un pare-feu qui redémarre les automates"
      },
      {
        "id": "d",
        "text": "Un scanner actif lancé en production"
      }
    ]
  },
  {
    "id": "apf-q33",
    "prompt": "Quel risque présente un équipement non autorisé branché sur le segment Profinet ?",
    "skills": [
      "n-profinet"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il peut perturber le procédé"
      },
      {
        "id": "b",
        "text": "Il réduit la consommation électrique"
      },
      {
        "id": "c",
        "text": "Il chiffre les échanges de l’atelier"
      },
      {
        "id": "d",
        "text": "Il améliore la précision des mesures"
      }
    ]
  },
  {
    "id": "apf-q34",
    "prompt": "Quelles mesures protègent un réseau Profinet ?",
    "skills": [
      "n-profinet"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le contrôle des équipements raccordés"
      },
      {
        "id": "b",
        "text": "La surveillance passive du trafic"
      },
      {
        "id": "c",
        "text": "Une connexion directe à Internet"
      },
      {
        "id": "d",
        "text": "La segmentation en zones"
      }
    ]
  },
  {
    "id": "apf-q4",
    "prompt": "Qu’est-ce que le bus CAN d’un véhicule, du point de vue de la sécurité ?",
    "skills": [
      "n-auto-archi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un pare-feu embarqué dans la passerelle"
      },
      {
        "id": "b",
        "text": "Une connexion Internet du véhicule"
      },
      {
        "id": "c",
        "text": "Le système d’infodivertissement de bord"
      },
      {
        "id": "d",
        "text": "Un bus fiable non authentifié"
      }
    ]
  },
  {
    "id": "apf-q5",
    "prompt": "Quels éléments font partie de la surface d’attaque d’un véhicule connecté ?",
    "skills": [
      "n-auto-archi"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La prise de diagnostic"
      },
      {
        "id": "b",
        "text": "Le système d’infodivertissement et les ports USB"
      },
      {
        "id": "c",
        "text": "La couleur de la carrosserie"
      },
      {
        "id": "d",
        "text": "Les interfaces sans fil (Bluetooth, Wi-Fi, cellulaire)"
      }
    ]
  },
  {
    "id": "apf-q6",
    "prompt": "Le risque majeur est qu’un point d’entrée peu critique (infodivertissement) puisse communiquer trop librement avec les fonctions critiques (freinage, direction).",
    "skills": [
      "n-auto-archi"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "apf-q35",
    "prompt": "Qu’est-ce qu’un calculateur (ECU) dans un véhicule ?",
    "skills": [
      "n-auto-archi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un type de carburant alternatif"
      },
      {
        "id": "b",
        "text": "Un pneu doté de capteurs de pression"
      },
      {
        "id": "c",
        "text": "Un ordinateur embarqué dédié"
      },
      {
        "id": "d",
        "text": "Un panneau de commande du coffre"
      }
    ]
  },
  {
    "id": "apf-q36",
    "prompt": "Une passerelle sépare les domaines d’un véhicule et filtre les messages qui passent de l’un à l’autre.",
    "skills": [
      "n-auto-archi"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "apf-q7",
    "prompt": "Quelle mesure protège le mieux les fonctions critiques d’un véhicule des points d’entrée exposés ?",
    "skills": [
      "n-auto-defense"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Débrancher la batterie la nuit"
      },
      {
        "id": "b",
        "text": "Un cloisonnement par domaines"
      },
      {
        "id": "c",
        "text": "Un autocollant d’avertissement"
      },
      {
        "id": "d",
        "text": "Agrandir l’écran d’infodivertissement"
      }
    ]
  },
  {
    "id": "apf-q8",
    "prompt": "Pourquoi, en automobile, sécurité (security) et sûreté de fonctionnement (safety) sont-elles liées ?",
    "skills": [
      "n-auto-defense"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elles n’ont aucun lien entre elles"
      },
      {
        "id": "b",
        "text": "La sûreté remplace la sécurité"
      },
      {
        "id": "c",
        "text": "Ce sont deux mots pour la même chose"
      },
      {
        "id": "d",
        "text": "Une faille peut devenir dangereuse"
      }
    ]
  },
  {
    "id": "apf-q9",
    "prompt": "Quelles mesures de défense embarquée sont pertinentes pour un véhicule ?",
    "skills": [
      "n-auto-defense"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Détection d’intrusion sur le trafic des bus"
      },
      {
        "id": "b",
        "text": "Suppression de tous les freins électroniques"
      },
      {
        "id": "c",
        "text": "Segmentation interne par domaines et passerelle sécurisée"
      },
      {
        "id": "d",
        "text": "Démarrage et firmware signés sur les calculateurs"
      }
    ]
  },
  {
    "id": "apf-q10",
    "prompt": "Expliquez pourquoi les mises à jour à distance (OTA) sont à la fois une mesure de sécurité et une surface à protéger, et comment les sécuriser.",
    "skills": [
      "n-auto-defense",
      "n-auto-archi"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "apf-q37",
    "prompt": "Pourquoi l’authentification des messages sur un bus critique est-elle limitée par le temps réel ?",
    "skills": [
      "n-auto-defense"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle est interdite par la réglementation"
      },
      {
        "id": "b",
        "text": "Elle consomme trop de carburant"
      },
      {
        "id": "c",
        "text": "Le calcul ajoute un délai et de la charge"
      },
      {
        "id": "d",
        "text": "Le bus refuse toute donnée supplémentaire"
      }
    ]
  },
  {
    "id": "apf-q38",
    "prompt": "Que doit permettre une détection d’intrusion embarquée ?",
    "skills": [
      "n-auto-defense"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Alerter le constructeur ou un calculateur de sécurité"
      },
      {
        "id": "b",
        "text": "Désactiver les freins en cas d’alerte"
      },
      {
        "id": "c",
        "text": "Repérer les messages anormaux sur les bus"
      },
      {
        "id": "d",
        "text": "Journaliser les événements pour analyse"
      }
    ]
  },
  {
    "id": "apf-q11",
    "prompt": "Quelle norme définit l’ingénierie de cybersécurité sur tout le cycle de vie d’un véhicule ? (référence sous la forme ISO/SAE …)",
    "skills": [
      "n-auto-normes"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "ISO/SAE …"
  },
  {
    "id": "apf-q12",
    "prompt": "Quelle méthode d’analyse des menaces et d’évaluation des risques est propre à l’automobile ? (sigle)",
    "skills": [
      "n-auto-normes"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "apf-q13",
    "prompt": "Quelle est la différence entre UNECE R155 et R156 ?",
    "skills": [
      "n-auto-normes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "R155 concerne les pneus, R156 les freins"
      },
      {
        "id": "b",
        "text": "R155 cybersécurité, R156 mises à jour"
      },
      {
        "id": "c",
        "text": "R156 remplace la norme ISO/SAE 21434"
      },
      {
        "id": "d",
        "text": "Ce sont deux noms du même règlement"
      }
    ]
  },
  {
    "id": "apf-q14",
    "prompt": "Les règlements UNECE R155 et R156 sont orientés objectifs : ils fixent ce qu’il faut démontrer sans imposer une solution technique unique.",
    "skills": [
      "n-auto-normes"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "apf-q15",
    "prompt": "Un constructeur veut homologuer un véhicule connecté recevant des mises à jour à distance. Expliquez le rôle respectif d’ISO/SAE 21434, du CSMS (R155) et du SUMS (R156).",
    "skills": [
      "n-auto-normes"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "apf-q16",
    "prompt": "ISO/SAE 21434 fournit une liste figée de mesures techniques à cocher, sans démarche de processus.",
    "skills": [
      "n-auto-normes"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "apf-q39",
    "prompt": "Quel forum des Nations unies élabore les règlements UNECE sur les véhicules ?",
    "skills": [
      "n-auto-normes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le forum WP.29"
      },
      {
        "id": "b",
        "text": "Le Fonds monétaire (FMI)"
      },
      {
        "id": "c",
        "text": "L’alliance de l’OTAN"
      },
      {
        "id": "d",
        "text": "Le sommet du G20"
      }
    ]
  },
  {
    "id": "apf-q40",
    "prompt": "Quel sigle désigne le système de management des mises à jour logicielles exigé par R156 ? (sigle)",
    "skills": [
      "n-auto-normes"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "apf-q17",
    "prompt": "Quelle prise du véhicule donne accès au bus de diagnostic ?",
    "skills": [
      "n-auto-comm"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La prise de remorquage"
      },
      {
        "id": "b",
        "text": "La prise de diagnostic"
      },
      {
        "id": "c",
        "text": "Le port de recharge du téléphone"
      },
      {
        "id": "d",
        "text": "La prise allume-cigare"
      }
    ]
  },
  {
    "id": "apf-q18",
    "prompt": "En quoi consiste une attaque par relais contre une clé sans contact ?",
    "skills": [
      "n-auto-comm"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Prolonger le signal de la clé"
      },
      {
        "id": "b",
        "text": "Changer les pneus du véhicule"
      },
      {
        "id": "c",
        "text": "Débrancher la batterie du véhicule"
      },
      {
        "id": "d",
        "text": "Copier le logo de la marque"
      }
    ]
  },
  {
    "id": "apf-q19",
    "prompt": "Que désigne le V2X ?",
    "skills": [
      "n-auto-comm"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un format de carte routière"
      },
      {
        "id": "b",
        "text": "Un modèle de pneu hiver"
      },
      {
        "id": "c",
        "text": "Un type de moteur hybride"
      },
      {
        "id": "d",
        "text": "Les communications du véhicule"
      }
    ]
  },
  {
    "id": "apf-q20",
    "prompt": "Pourquoi un outil de diagnostic branché au véhicule doit-il être maîtrisé ?",
    "skills": [
      "n-auto-comm"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il consomme du carburant"
      },
      {
        "id": "b",
        "text": "Il bloque définitivement les mises à jour"
      },
      {
        "id": "c",
        "text": "Il peut envoyer des commandes sur les bus"
      },
      {
        "id": "d",
        "text": "Il change la couleur du tableau de bord"
      }
    ]
  },
  {
    "id": "apf-q21",
    "prompt": "La télématique cellulaire d’un véhicule n’a aucun lien avec sa cybersécurité.",
    "skills": [
      "n-auto-comm"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "apf-q22",
    "prompt": "Quelles mesures protègent l’accès de diagnostic ?",
    "skills": [
      "n-auto-comm"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La journalisation des sessions de diagnostic"
      },
      {
        "id": "b",
        "text": "Un accès libre sans authentification"
      },
      {
        "id": "c",
        "text": "Le filtrage par la passerelle"
      },
      {
        "id": "d",
        "text": "L’authentification de l’outil de diagnostic"
      }
    ]
  },
  {
    "id": "apf-q23",
    "prompt": "Quel sigle désigne l’interface standard de diagnostic embarqué des véhicules légers ? (OBD…)",
    "skills": [
      "n-auto-comm"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "OBD…"
  },
  {
    "id": "apf-q24",
    "prompt": "Que doit faire un constructeur qui apprend une vulnérabilité touchant un modèle en circulation ?",
    "skills": [
      "n-auto-cycle"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’analyser et préparer un correctif"
      },
      {
        "id": "b",
        "text": "Retirer tous les véhicules sans analyse"
      },
      {
        "id": "c",
        "text": "L’ignorer jusqu’au prochain modèle"
      },
      {
        "id": "d",
        "text": "La cacher à ses clients"
      }
    ]
  },
  {
    "id": "apf-q25",
    "prompt": "Qu’est-ce qu’un centre de supervision de la sécurité d’un parc de véhicules ?",
    "skills": [
      "n-auto-cycle"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un banc d’essai de moteurs"
      },
      {
        "id": "b",
        "text": "Un atelier de peinture automobile"
      },
      {
        "id": "c",
        "text": "Un site de recyclage de batteries"
      },
      {
        "id": "d",
        "text": "Une équipe de supervision sécurité"
      }
    ]
  },
  {
    "id": "apf-q26",
    "prompt": "Pourquoi surveiller les vulnérabilités pendant toute la vie du véhicule ?",
    "skills": [
      "n-auto-cycle"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Parce que les pneus s’usent"
      },
      {
        "id": "b",
        "text": "Les menaces apparaissent après la vente"
      },
      {
        "id": "c",
        "text": "Pour changer la forme de la carrosserie"
      },
      {
        "id": "d",
        "text": "Pour supprimer la garantie constructeur"
      }
    ]
  },
  {
    "id": "apf-q27",
    "prompt": "Que faut-il prévoir pour les données personnelles collectées par un véhicule connecté ?",
    "skills": [
      "n-auto-cycle"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Aucune règle particulière à respecter"
      },
      {
        "id": "b",
        "text": "Un partage gratuit avec toute entreprise"
      },
      {
        "id": "c",
        "text": "Une base légale et une conservation limitée"
      },
      {
        "id": "d",
        "text": "Leur publication ouverte sur Internet"
      }
    ]
  },
  {
    "id": "apf-q28",
    "prompt": "Après la vente, la cybersécurité d’un véhicule n’est plus de la responsabilité du constructeur.",
    "skills": [
      "n-auto-cycle"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "apf-q29",
    "prompt": "Quelles activités relèvent de la gestion continue demandée par ISO/SAE 21434 ?",
    "skills": [
      "n-auto-cycle"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "L’arrêt de toute surveillance après la production"
      },
      {
        "id": "b",
        "text": "La veille sur les vulnérabilités"
      },
      {
        "id": "c",
        "text": "La réponse aux incidents"
      },
      {
        "id": "d",
        "text": "Les mises à jour de sécurité"
      }
    ]
  },
  {
    "id": "apf-q30",
    "prompt": "Quel sigle désigne le centre de supervision de la sécurité d’une flotte de véhicules ? (sigle en cinq lettres)",
    "skills": [
      "n-auto-cycle"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "sigle"
  }
];
