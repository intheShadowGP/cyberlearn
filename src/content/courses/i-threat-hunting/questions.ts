// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "hunt-q1",
    "prompt": "Quel niveau de renseignement correspond à une liste d’adresses IP et d’empreintes de fichiers destinée aux outils de détection ?",
    "skills": [
      "i-hunt-cti"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Juridique (pour les contrats)"
      },
      {
        "id": "b",
        "text": "Stratégique (pour la direction)"
      },
      {
        "id": "c",
        "text": "Tactique (technique)"
      },
      {
        "id": "d",
        "text": "Financier (pour le budget)"
      }
    ]
  },
  {
    "id": "hunt-q2",
    "prompt": "Un rapport porte la mention TLP:AMBER+STRICT. Avec qui pouvez-vous le partager ?",
    "skills": [
      "i-hunt-cti"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Publiquement sur un blog"
      },
      {
        "id": "b",
        "text": "Avec vos clients et partenaires"
      },
      {
        "id": "c",
        "text": "Avec toute la communauté de votre secteur"
      },
      {
        "id": "d",
        "text": "Uniquement au sein de votre organisation"
      }
    ]
  },
  {
    "id": "hunt-q3",
    "prompt": "Importer tous les flux d’indicateurs gratuits disponibles améliore automatiquement la détection.",
    "skills": [
      "i-hunt-cti"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "hunt-q4",
    "prompt": "Quel format structuré, échangé via le protocole TAXII, sert à décrire indicateurs, acteurs et campagnes ?",
    "skills": [
      "i-hunt-cti"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "hunt-q41",
    "prompt": "Pourquoi une empreinte de fichier est-elle un indicateur fragile pour la chasse ?",
    "skills": [
      "i-hunt-method"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il suffit à l’attaquant de modifier le fichier pour changer son empreinte"
      },
      {
        "id": "b",
        "text": "Elle ne peut jamais être comparée à une base de renseignement sur les menaces"
      },
      {
        "id": "c",
        "text": "Elle est modifiée automatiquement par l’antivirus de chaque poste du parc"
      },
      {
        "id": "d",
        "text": "Elle ne s’applique qu’aux fichiers de plus d’un gigaoctet de taille"
      }
    ]
  },
  {
    "id": "hunt-q6",
    "prompt": "Quels éléments caractérisent une bonne hypothèse de chasse ?",
    "skills": [
      "i-hunt-method"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Elle est assez vague pour couvrir toutes les attaques"
      },
      {
        "id": "b",
        "text": "Elle produit un résultat documenté même si rien n’est trouvé"
      },
      {
        "id": "c",
        "text": "Elle est vérifiable avec des données disponibles"
      },
      {
        "id": "d",
        "text": "Elle s’appuie sur une technique ou un renseignement précis"
      }
    ]
  },
  {
    "id": "hunt-q7",
    "prompt": "Une chasse qui ne trouve aucune compromission est inutile.",
    "skills": [
      "i-hunt-method"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "hunt-q8",
    "prompt": "À partir de la technique « création d’un compte local pour la persistance » (T1136.001), formulez une hypothèse de chasse, les données nécessaires et la méthode d’analyse.",
    "skills": [
      "i-hunt-method",
      "i-hunt-cti"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "hunt-q9",
    "prompt": "Quelle différence entre Zeek et Suricata ?",
    "skills": [
      "i-hunt-network"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ce sont deux noms du même logiciel de capture"
      },
      {
        "id": "b",
        "text": "Zeek journalise le trafic ; Suricata alerte sur signatures"
      },
      {
        "id": "c",
        "text": "Zeek ne fonctionne qu’en IPv6, alors que Suricata gère l’IPv4"
      },
      {
        "id": "d",
        "text": "Suricata ne lit que les journaux d’événements Windows"
      }
    ]
  },
  {
    "id": "hunt-q10",
    "prompt": "Quels signes évoquent un tunnel DNS ?",
    "skills": [
      "i-hunt-network"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Une requête vers le résolveur interne au démarrage du poste"
      },
      {
        "id": "b",
        "text": "Des enregistrements TXT inhabituels en grand nombre"
      },
      {
        "id": "c",
        "text": "Des sous-domaines très longs et d’apparence aléatoire"
      },
      {
        "id": "d",
        "text": "De nombreuses requêtes vers un même domaine peu connu"
      }
    ]
  },
  {
    "id": "hunt-q11",
    "prompt": "Le chiffrement TLS empêche toute détection d’une balise de commande et contrôle sur le réseau.",
    "skills": [
      "i-hunt-network"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "hunt-q12",
    "prompt": "Quel journal Zeek recense toutes les connexions (adresses, ports, durée, volumes) ?",
    "skills": [
      "i-hunt-network"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom.log"
  },
  {
    "id": "hunt-q13",
    "prompt": "Lors d’un empilement des processus parents de `powershell.exe`, quelle valeur examiner en priorité ?",
    "skills": [
      "i-hunt-anomalies"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`w3wp.exe` (serveur web IIS), une seule occurrence"
      },
      {
        "id": "b",
        "text": "`svchost.exe` sur tous les postes"
      },
      {
        "id": "c",
        "text": "`explorer.exe`, 18 000 occurrences sur 600 postes"
      },
      {
        "id": "d",
        "text": "L’agent de déploiement présent sur tous les postes"
      }
    ]
  },
  {
    "id": "hunt-q14",
    "prompt": "Une chasse a mis au jour une technique non détectée. Quelles étapes permettent de l’industrialiser ?",
    "skills": [
      "i-hunt-anomalies"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Isoler automatiquement tout poste correspondant, sans validation"
      },
      {
        "id": "b",
        "text": "La tester sur l’historique pour mesurer les faux positifs"
      },
      {
        "id": "c",
        "text": "Écrire une règle (Sigma ou requête du SIEM) avec ses exclusions documentées"
      },
      {
        "id": "d",
        "text": "Rédiger un playbook et automatiser l’enrichissement dans le SOAR"
      }
    ]
  },
  {
    "id": "hunt-q15",
    "prompt": "Un directeur vous demande pourquoi financer une activité de chasse alors que le SOC dispose déjà d’un SIEM et d’un EDR qui génèrent des alertes. Que répondez-vous ?",
    "skills": [
      "i-hunt-anomalies",
      "i-hunt-network"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "hunt-q16",
    "prompt": "Quel outil exécute des playbooks qui enchaînent des actions sur le SIEM, l’EDR et la gestion des tickets ?",
    "skills": [
      "i-hunt-anomalies"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un IDS"
      },
      {
        "id": "b",
        "text": "Un SOAR"
      },
      {
        "id": "c",
        "text": "Un proxy inverse"
      },
      {
        "id": "d",
        "text": "Un pare-feu applicatif"
      }
    ]
  },
  {
    "id": "hunt-q17",
    "prompt": "Un rapport décrit comment un groupe obtient son accès initial par des VPN non corrigés, puis utilise des outils d’accès à distance légitimes. À quel niveau de renseignement correspond-il ?",
    "skills": [
      "i-hunt-cti"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Stratégique"
      },
      {
        "id": "b",
        "text": "Réglementaire"
      },
      {
        "id": "c",
        "text": "Opérationnel"
      },
      {
        "id": "d",
        "text": "Tactique (indicateurs)"
      }
    ]
  },
  {
    "id": "hunt-q18",
    "prompt": "Une information marquée TLP:CLEAR peut être diffusée librement.",
    "skills": [
      "i-hunt-cti"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "hunt-q19",
    "prompt": "Quel protocole sert à échanger des objets STIX entre plateformes de renseignement ?",
    "skills": [
      "i-hunt-cti"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom du protocole"
  },
  {
    "id": "hunt-q20",
    "prompt": "Une fois l’hypothèse formulée, quelle est l’étape suivante d’une chasse ?",
    "skills": [
      "i-hunt-method"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Rédiger directement le rapport final"
      },
      {
        "id": "b",
        "text": "Isoler les machines les plus exposées"
      },
      {
        "id": "c",
        "text": "Exécuter la requête la plus large possible"
      },
      {
        "id": "d",
        "text": "Vérifier que les données nécessaires existent"
      }
    ]
  },
  {
    "id": "hunt-q21",
    "prompt": "Une chasse ne peut pas conclure : la source nécessaire n’a que sept jours d’historique. Que faut-il retenir ?",
    "skills": [
      "i-hunt-method"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Qu’aucune compromission n’a eu lieu"
      },
      {
        "id": "b",
        "text": "Que la technique n’est pas utilisée par les attaquants"
      },
      {
        "id": "c",
        "text": "Une lacune de journalisation à documenter et à combler"
      },
      {
        "id": "d",
        "text": "Que la chasse doit être abandonnée définitivement"
      }
    ]
  },
  {
    "id": "hunt-q22",
    "prompt": "Que contient la fiche d’une chasse ?",
    "skills": [
      "i-hunt-method",
      "i-hunt-programme"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le résultat et les suites données"
      },
      {
        "id": "b",
        "text": "Les mots de passe des comptes examinés"
      },
      {
        "id": "c",
        "text": "Les données et les requêtes utilisées"
      },
      {
        "id": "d",
        "text": "L’hypothèse et la technique ATT&CK visée"
      }
    ]
  },
  {
    "id": "hunt-q23",
    "prompt": "Quelle caractéristique évoque le plus une balise de commande et contrôle ?",
    "skills": [
      "i-hunt-network"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une résolution DNS au démarrage du poste"
      },
      {
        "id": "b",
        "text": "Un gros transfert unique le vendredi soir"
      },
      {
        "id": "c",
        "text": "Des connexions variées vers de nombreux services connus"
      },
      {
        "id": "d",
        "text": "Des connexions très régulières vers une destination"
      }
    ]
  },
  {
    "id": "hunt-q24",
    "prompt": "Même sur une connexion chiffrée, la durée, les volumes et la destination restent observables.",
    "skills": [
      "i-hunt-network"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "hunt-q25",
    "prompt": "Un poste contacte toutes les 60 secondes un domaine enregistré hier, avec environ 400 octets par connexion. Quelle vérification apporte le plus ?",
    "skills": [
      "i-hunt-network",
      "i-hunt-anomalies"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Identifier le processus à l’origine du flux"
      },
      {
        "id": "b",
        "text": "Redémarrer le poste"
      },
      {
        "id": "c",
        "text": "Changer le mot de passe de l’utilisateur"
      },
      {
        "id": "d",
        "text": "Bloquer toute la plage d’adresses du fournisseur"
      }
    ]
  },
  {
    "id": "hunt-q26",
    "prompt": "Qu’est-ce qu’une ligne de base ?",
    "skills": [
      "i-hunt-anomalies"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La liste des vulnérabilités connues d’un hôte"
      },
      {
        "id": "b",
        "text": "Le comportement normal d’un hôte ou d’un compte"
      },
      {
        "id": "c",
        "text": "Le journal de toutes les alertes fermées"
      },
      {
        "id": "d",
        "text": "Le plan de sauvegarde d’un serveur"
      }
    ]
  },
  {
    "id": "hunt-q27",
    "prompt": "Une valeur rare lors d’un empilement est forcément malveillante.",
    "skills": [
      "i-hunt-anomalies"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "hunt-q28",
    "prompt": "Quel événement du journal Sécurité Windows signale la création d’une tâche planifiée ?",
    "skills": [
      "i-hunt-hotes"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "4732"
      },
      {
        "id": "b",
        "text": "4698"
      },
      {
        "id": "c",
        "text": "4624"
      },
      {
        "id": "d",
        "text": "4720"
      }
    ]
  },
  {
    "id": "hunt-q29",
    "prompt": "Que signifie un type de session 10 dans l’événement 4624 ?",
    "skills": [
      "i-hunt-hotes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une connexion locale au clavier"
      },
      {
        "id": "b",
        "text": "Une connexion réseau à un partage"
      },
      {
        "id": "c",
        "text": "Le lancement d’un service"
      },
      {
        "id": "d",
        "text": "Une connexion distante interactive (RDP)"
      }
    ]
  },
  {
    "id": "hunt-q30",
    "prompt": "Quels signes évoquent un mouvement latéral à partir d’un compte ?",
    "skills": [
      "i-hunt-hotes"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Un compte authentifié sur de nombreux hôtes en peu de temps"
      },
      {
        "id": "b",
        "text": "Une ouverture de session locale le matin à l’arrivée"
      },
      {
        "id": "c",
        "text": "Des connexions hors des heures habituelles du compte"
      },
      {
        "id": "d",
        "text": "Une source qui est un poste ordinaire pour un compte privilégié"
      }
    ]
  },
  {
    "id": "hunt-q31",
    "prompt": "Un compte de service ouvre une session de bureau à distance. Pourquoi est-ce suspect ?",
    "skills": [
      "i-hunt-hotes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le bureau à distance est interdit pour tous les comptes"
      },
      {
        "id": "b",
        "text": "Les comptes de service n’ont jamais de mot de passe"
      },
      {
        "id": "c",
        "text": "Un compte de service n’ouvre pas de session interactive"
      },
      {
        "id": "d",
        "text": "Seuls les comptes de service peuvent se connecter ainsi"
      }
    ]
  },
  {
    "id": "hunt-q32",
    "prompt": "Comment appelle-t-on l’usage par un attaquant d’outils légitimes déjà présents sur le système (PowerShell, WMI, certutil) ?",
    "skills": [
      "i-hunt-hotes"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "expression"
  },
  {
    "id": "hunt-q33",
    "prompt": "Un processus non système ouvre le processus LSASS avec des droits de lecture de la mémoire. Quelle hypothèse formuler ?",
    "skills": [
      "i-hunt-hotes"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une tentative de vol d’identifiants en mémoire"
      },
      {
        "id": "b",
        "text": "Une sauvegarde planifiée des fichiers"
      },
      {
        "id": "c",
        "text": "Une mise à jour normale de Windows"
      },
      {
        "id": "d",
        "text": "Un contrôle d’intégrité du pare-feu"
      }
    ]
  },
  {
    "id": "hunt-q34",
    "prompt": "Sans ligne de commande dans les journaux de création de processus, de nombreuses chasses comportementales deviennent impossibles.",
    "skills": [
      "i-hunt-hotes",
      "i-hunt-anomalies"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "hunt-q35",
    "prompt": "Comment choisir la prochaine chasse d’un programme ?",
    "skills": [
      "i-hunt-programme"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Selon la technique la plus médiatisée du moment"
      },
      {
        "id": "b",
        "text": "Selon les lacunes de couverture ATT&CK"
      },
      {
        "id": "c",
        "text": "Au hasard, pour éviter les biais"
      },
      {
        "id": "d",
        "text": "Selon l’outil que l’analyste préfère"
      }
    ]
  },
  {
    "id": "hunt-q36",
    "prompt": "Que désigne le « dwell time » (temps de présence) ?",
    "skills": [
      "i-hunt-programme"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La durée d’une session utilisateur"
      },
      {
        "id": "b",
        "text": "Le délai de traitement d’un ticket"
      },
      {
        "id": "c",
        "text": "La présence de l’attaquant avant détection"
      },
      {
        "id": "d",
        "text": "La durée de rétention des journaux"
      }
    ]
  },
  {
    "id": "hunt-q37",
    "prompt": "Quel outil gratuit de MITRE permet de visualiser la couverture ATT&CK de ses détections ?",
    "skills": [
      "i-hunt-programme"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom de l’outil"
  },
  {
    "id": "hunt-q38",
    "prompt": "Quels indicateurs mesurent la valeur d’un programme de chasse ?",
    "skills": [
      "i-hunt-programme"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le nombre de détections créées à l’issue des chasses"
      },
      {
        "id": "b",
        "text": "Les lacunes de journalisation comblées"
      },
      {
        "id": "c",
        "text": "Les incidents découverts et le temps de présence réduit"
      },
      {
        "id": "d",
        "text": "Le nombre d’alertes fermées par heure par analyste"
      }
    ]
  },
  {
    "id": "hunt-q39",
    "prompt": "Une chasse n’a trouvé aucune compromission mais a produit une nouvelle règle testée. Quel bilan en tirer ?",
    "skills": [
      "i-hunt-programme",
      "i-hunt-method"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un succès seulement si un incident est ouvert"
      },
      {
        "id": "b",
        "text": "Un échec, faute d’incident découvert"
      },
      {
        "id": "c",
        "text": "Un résultat sans valeur à ne pas archiver"
      },
      {
        "id": "d",
        "text": "Un succès : détection durable et conclusion documentée"
      }
    ]
  },
  {
    "id": "hunt-q40",
    "prompt": "Avant d’automatiser l’isolement d’un poste à partir d’une nouvelle règle, que faut-il prévoir ?",
    "skills": [
      "i-hunt-programme",
      "i-hunt-anomalies"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un test sur l’historique et une validation humaine"
      },
      {
        "id": "b",
        "text": "Aucun contrôle, pour gagner en rapidité"
      },
      {
        "id": "c",
        "text": "Une exclusion totale des serveurs"
      },
      {
        "id": "d",
        "text": "Une désactivation du SIEM le temps du test"
      }
    ]
  }
];
