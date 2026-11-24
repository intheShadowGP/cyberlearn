// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "pvw-q1",
    "prompt": "Qu’apporte un pare-feu « à états » par rapport à un filtrage sans état ?",
    "skills": [
      "b-filtrage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il attribue automatiquement les adresses IP aux machines des zones qu’il sépare"
      },
      {
        "id": "b",
        "text": "Il suit les connexions établies et laisse revenir leurs réponses sans règle entrante"
      },
      {
        "id": "c",
        "text": "Il chiffre tout le trafic qui le traverse, dans les deux sens de circulation, entre les zones"
      },
      {
        "id": "d",
        "text": "Il remplace le serveur DNS en répondant lui-même aux requêtes des clients"
      }
    ]
  },
  {
    "id": "pvw-q2",
    "prompt": "Où place-t-on un reverse proxy ?",
    "skills": [
      "b-filtrage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Au cœur du serveur DNS, pour accélérer la résolution des noms de domaine"
      },
      {
        "id": "b",
        "text": "Entre les clients internes et Internet, pour relayer et filtrer les requêtes sortantes"
      },
      {
        "id": "c",
        "text": "Devant les serveurs publiés, pour recevoir les requêtes entrantes (TLS, WAF)"
      },
      {
        "id": "d",
        "text": "Sur chaque poste utilisateur, pour filtrer les sites visités par la personne"
      }
    ]
  },
  {
    "id": "pvw-q3",
    "prompt": "Un pare-feu applicatif web (WAF) dispense d’écrire du code applicatif sécurisé.",
    "skills": [
      "b-filtrage"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "pvw-q4",
    "prompt": "Quelles pratiques caractérisent un bon filtrage périmétrique ?",
    "skills": [
      "b-filtrage"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Filtrage du trafic sortant, pas seulement entrant"
      },
      {
        "id": "b",
        "text": "Journalisation des règles"
      },
      {
        "id": "c",
        "text": "Politique par défaut de refus"
      },
      {
        "id": "d",
        "text": "Autoriser tout le sortant pour éviter les demandes d’ouverture"
      }
    ]
  },
  {
    "id": "pvw-q5",
    "prompt": "Quelle est la différence principale entre un IDS et un IPS ?",
    "skills": [
      "b-detection-reseau"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’IDS alerte à partir d’une copie du trafic ; l’IPS, en coupure, peut bloquer"
      },
      {
        "id": "b",
        "text": "L’IDS ne fonctionne que sur les réseaux Wi-Fi, l’IPS sur les réseaux filaires"
      },
      {
        "id": "c",
        "text": "Aucune : ce sont deux appellations commerciales du même équipement de réseau"
      },
      {
        "id": "d",
        "text": "L’IDS chiffre les flux surveillés ; l’IPS les déchiffre avant de les analyser en détail"
      }
    ]
  },
  {
    "id": "pvw-q6",
    "prompt": "Un faux positif sur un IPS placé en coupure peut interrompre du trafic légitime.",
    "skills": [
      "b-detection-reseau"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pvw-q7",
    "prompt": "Quel filtre d’affichage Wireshark ne garde que le trafic avec l’adresse IP 203.0.113.7 ?",
    "skills": [
      "b-detection-reseau"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "ip.addr == …"
  },
  {
    "id": "pvw-q8",
    "prompt": "Le trafic suspect que vous voulez analyser est chiffré en TLS. Expliquez ce qu’une capture réseau permet encore d’observer et comment l’exploiter.",
    "skills": [
      "b-detection-reseau",
      "b-filtrage"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "pvw-q9",
    "prompt": "Quelle différence entre un VPN en tunnel complet et en tunnel scindé ?",
    "skills": [
      "b-vpn-wifi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le tunnel complet n’utilise aucun chiffrement alors que le tunnel scindé en utilise un en permanence"
      },
      {
        "id": "b",
        "text": "Il n’y a aucune différence de sécurité entre les deux, seulement de vitesse"
      },
      {
        "id": "c",
        "text": "Le tunnel scindé est chiffré alors que le tunnel complet transporte le trafic en clair sur Internet"
      },
      {
        "id": "d",
        "text": "Complet : tout le trafic du poste passe par le VPN ; scindé : seul le trafic de l’entreprise"
      }
    ]
  },
  {
    "id": "pvw-q10",
    "prompt": "Une passerelle VPN exposée sur Internet doit être tenue à jour en priorité et protégée par une authentification multifacteur.",
    "skills": [
      "b-vpn-wifi"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pvw-q11",
    "prompt": "Qu’apporte WPA3-Personnel par rapport à WPA2-Personnel ?",
    "skills": [
      "b-vpn-wifi",
      "b-wifi-802-1x"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’attribution des adresses IPv6 uniquement, sans aucun autre changement de sécurité"
      },
      {
        "id": "b",
        "text": "La suppression de tout chiffrement pour alléger le travail des bornes d’accès"
      },
      {
        "id": "c",
        "text": "SAE, résistant aux dictionnaires hors ligne, et protection des trames de gestion"
      },
      {
        "id": "d",
        "text": "Un débit près de dix fois supérieur sur les mêmes bornes et les mêmes postes"
      }
    ]
  },
  {
    "id": "pvw-q12",
    "prompt": "Concernant le Wi-Fi d’entreprise, quelles affirmations sont exactes ?",
    "skills": [
      "b-vpn-wifi",
      "b-wifi-802-1x"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le mode entreprise évite le secret partagé unique du mode personnel"
      },
      {
        "id": "b",
        "text": "Un serveur RADIUS vérifie l’identité et peut renvoyer le VLAN à attribuer"
      },
      {
        "id": "c",
        "text": "802.1X authentifie chaque utilisateur avant d’ouvrir le port"
      },
      {
        "id": "d",
        "text": "TACACS+ sert surtout à chiffrer les fichiers des postes"
      }
    ]
  },
  {
    "id": "pvw-q13",
    "prompt": "À quoi sert une DMZ ?",
    "skills": [
      "b-archi-reseau"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À stocker les sauvegardes des serveurs en dehors du site de production"
      },
      {
        "id": "b",
        "text": "À remplacer les pare-feux, devenus inutiles quand les serveurs sont isolés"
      },
      {
        "id": "c",
        "text": "À accélérer le Wi-Fi des salles de réunion en répartissant la charge des bornes"
      },
      {
        "id": "d",
        "text": "À placer les services publiés dans une zone tampon isolée du réseau interne"
      }
    ]
  },
  {
    "id": "pvw-q14",
    "prompt": "Comment appelle-t-on la technologie qui relie plusieurs sites en choisissant dynamiquement le meilleur lien par application, avec chiffrement ? (sigle)",
    "skills": [
      "b-archi-reseau"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "pvw-q15",
    "prompt": "L’approche Zero Trust consiste à faire confiance à toute machine située à l’intérieur du réseau.",
    "skills": [
      "b-archi-reseau"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pvw-q16",
    "prompt": "Un serveur web exposé est placé sur le même réseau que les postes et les serveurs internes. Expliquez le risque et proposez une architecture segmentée adaptée.",
    "skills": [
      "b-archi-reseau",
      "b-filtrage"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "pvw-q17",
    "prompt": "Quelle règle placer en fin de liste d’un pare-feu de périmètre ?",
    "skills": [
      "b-filtrage"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Mettre en attente le trafic inconnu jusqu’à une validation humaine"
      },
      {
        "id": "b",
        "text": "Refuser tout ce qui n’a pas été explicitement autorisé"
      },
      {
        "id": "c",
        "text": "Autoriser tout ce qui n’a pas été explicitement interdit"
      },
      {
        "id": "d",
        "text": "Rediriger le trafic inconnu vers le serveur de messagerie"
      }
    ]
  },
  {
    "id": "pvw-q18",
    "prompt": "Les règles d’un pare-feu sont évaluées dans l’ordre. Que provoque une règle « autoriser tout » placée en tête de liste ?",
    "skills": [
      "b-filtrage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les règles qui la suivent ne sont plus jamais atteintes, donc plus appliquées"
      },
      {
        "id": "b",
        "text": "Le pare-feu refuse de démarrer tant que la liste n’est pas corrigée"
      },
      {
        "id": "c",
        "text": "Les règles suivantes s’appliquent d’abord, puis la règle en tête les complète"
      },
      {
        "id": "d",
        "text": "Seul le trafic sortant est concerné, le trafic entrant restant filtré"
      }
    ]
  },
  {
    "id": "pvw-q19",
    "prompt": "Sans déchiffrement préalable, un pare-feu ne peut pas lire le contenu d’un flux protégé par TLS.",
    "skills": [
      "b-filtrage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pvw-q20",
    "prompt": "Quelles fonctions un reverse proxy peut-il assurer pour des serveurs publiés ?",
    "skills": [
      "b-filtrage"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Filtrer les requêtes malveillantes grâce à un WAF"
      },
      {
        "id": "b",
        "text": "Attribuer des adresses IP aux clients qui se connectent"
      },
      {
        "id": "c",
        "text": "Terminer le TLS à la place des serveurs"
      },
      {
        "id": "d",
        "text": "Répartir la charge entre plusieurs serveurs"
      }
    ]
  },
  {
    "id": "pvw-q21",
    "prompt": "Comment une sonde IDS obtient-elle une copie du trafic à analyser ?",
    "skills": [
      "b-detection-reseau"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "En se plaçant à la place du serveur DNS de l’entreprise"
      },
      {
        "id": "b",
        "text": "Par un port miroir du commutateur ou un TAP réseau"
      },
      {
        "id": "c",
        "text": "En demandant aux postes d’envoyer leurs paquets"
      },
      {
        "id": "d",
        "text": "En lisant les fichiers de configuration du pare-feu"
      }
    ]
  },
  {
    "id": "pvw-q22",
    "prompt": "Comment appelle-t-on une alerte déclenchée par un trafic parfaitement légitime ?",
    "skills": [
      "b-detection-reseau"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un faux positif"
      },
      {
        "id": "b",
        "text": "Un vrai positif"
      },
      {
        "id": "c",
        "text": "Un faux négatif"
      },
      {
        "id": "d",
        "text": "Un rebond"
      }
    ]
  },
  {
    "id": "pvw-q23",
    "prompt": "Une détection fondée uniquement sur des signatures repère aussi les attaques jamais observées auparavant.",
    "skills": [
      "b-detection-reseau"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "pvw-q24",
    "prompt": "Comment s’appelle l’information, visible en clair dans le handshake TLS, qui indique le nom du serveur visé ? (sigle)",
    "skills": [
      "b-detection-reseau"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "pvw-q25",
    "prompt": "Quels indices d’une capture évoquent un balayage de ports ?",
    "skills": [
      "b-detection-reseau"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La plupart des tentatives reçoivent un RST ou aucune réponse"
      },
      {
        "id": "b",
        "text": "Une unique connexion HTTPS dure longtemps vers un serveur connu"
      },
      {
        "id": "c",
        "text": "Chaque port visé n’échange que quelques paquets, sans suite"
      },
      {
        "id": "d",
        "text": "Une même source envoie des SYN vers de très nombreux ports"
      }
    ]
  },
  {
    "id": "pvw-q26",
    "prompt": "À quoi sert un VPN site à site ?",
    "skills": [
      "b-vpn-wifi"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À donner à chaque employé un accès individuel depuis son domicile"
      },
      {
        "id": "b",
        "text": "À accélérer les transferts entre deux serveurs situés dans la même salle"
      },
      {
        "id": "c",
        "text": "À remplacer les pare-feux placés à l’entrée de chacun des deux sites"
      },
      {
        "id": "d",
        "text": "À relier de façon chiffrée deux réseaux d’entreprise à travers Internet"
      }
    ]
  },
  {
    "id": "pvw-q27",
    "prompt": "Pourquoi exige-t-on une authentification multifacteur sur l’accès VPN ?",
    "skills": [
      "b-vpn-wifi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle chiffre le tunnel avec un algorithme plus rapide qu’un mot de passe"
      },
      {
        "id": "b",
        "text": "Elle remplace la journalisation des connexions par une signature électronique"
      },
      {
        "id": "c",
        "text": "Un mot de passe volé ou deviné ne suffit plus à entrer dans le réseau"
      },
      {
        "id": "d",
        "text": "Elle évite d’avoir à mettre à jour la passerelle VPN après une faille"
      }
    ]
  },
  {
    "id": "pvw-q28",
    "prompt": "Un VPN protège le poste de l’utilisateur contre les logiciels malveillants qu’il pourrait déjà héberger.",
    "skills": [
      "b-vpn-wifi"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pvw-q29",
    "prompt": "Quel risque particulier présente un VPN en tunnel scindé ?",
    "skills": [
      "b-vpn-wifi",
      "b-archi-reseau"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La passerelle VPN ne peut plus authentifier les utilisateurs qui se connectent"
      },
      {
        "id": "b",
        "text": "Les mises à jour du système du poste cessent d’être téléchargées"
      },
      {
        "id": "c",
        "text": "Le trafic vers l’entreprise circule en clair sur le réseau de l’utilisateur"
      },
      {
        "id": "d",
        "text": "Un poste compromis, relié à Internet et à l’entreprise, peut servir de pont"
      }
    ]
  },
  {
    "id": "pvw-q30",
    "prompt": "Quel VPN récent, au code réduit et à la cryptographie imposée, s’appuie sur des clés publiques courtes ?",
    "skills": [
      "b-vpn-wifi"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom"
  },
  {
    "id": "pvw-q31",
    "prompt": "Quel avantage a le Wi-Fi d’entreprise en 802.1X sur une phrase secrète partagée par tous ?",
    "skills": [
      "b-wifi-802-1x"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les clés de chiffrement ne sont plus nécessaires pour protéger les trames"
      },
      {
        "id": "b",
        "text": "On retire l’accès d’un salarié qui part sans changer le secret des autres"
      },
      {
        "id": "c",
        "text": "Le signal radio porte plus loin dans les bâtiments de grande taille"
      },
      {
        "id": "d",
        "text": "Les bornes n’ont plus besoin d’être mises à jour par l’administrateur"
      }
    ]
  },
  {
    "id": "pvw-q32",
    "prompt": "Qu’est-ce qu’un point d’accès « evil twin » ?",
    "skills": [
      "b-wifi-802-1x"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un serveur RADIUS de secours qui prend le relais en cas de panne du serveur principal"
      },
      {
        "id": "b",
        "text": "Une borne légitime installée en double pour répartir la charge entre les étages"
      },
      {
        "id": "c",
        "text": "Une borne pirate qui copie le nom d’un réseau légitime pour piéger les clients"
      },
      {
        "id": "d",
        "text": "Un mode de WPA3 qui chiffre deux fois chaque trame échangée avec la borne"
      }
    ]
  },
  {
    "id": "pvw-q33",
    "prompt": "Le Wi-Fi des visiteurs doit être placé dans un réseau isolé du réseau interne, avec un accès à Internet seulement.",
    "skills": [
      "b-wifi-802-1x",
      "b-archi-reseau"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pvw-q34",
    "prompt": "Quelles mesures renforcent un déploiement Wi-Fi d’entreprise ?",
    "skills": [
      "b-wifi-802-1x"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Masquage du nom du réseau comme protection principale"
      },
      {
        "id": "b",
        "text": "Validation du certificat du serveur RADIUS par les clients"
      },
      {
        "id": "c",
        "text": "WPA3-Entreprise (ou WPA2) avec 802.1X"
      },
      {
        "id": "d",
        "text": "Réseau invité isolé par un VLAN dédié"
      }
    ]
  },
  {
    "id": "pvw-q35",
    "prompt": "Quel protocole sert le plus souvent de serveur d’authentification dans un déploiement 802.1X ? (sigle)",
    "skills": [
      "b-wifi-802-1x"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "pvw-q36",
    "prompt": "Quel flux doit être interdit dans une DMZ correctement conçue ?",
    "skills": [
      "b-archi-reseau"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une connexion lancée depuis la DMZ vers n’importe quelle machine interne"
      },
      {
        "id": "b",
        "text": "Une connexion d’un poste interne vers un serveur web de la DMZ publiée"
      },
      {
        "id": "c",
        "text": "La journalisation des flux de la DMZ vers un serveur de journaux interne"
      },
      {
        "id": "d",
        "text": "Une connexion venue d’Internet vers le port 443 du serveur web publié"
      }
    ]
  },
  {
    "id": "pvw-q37",
    "prompt": "Pourquoi isoler la zone d’administration des équipements ?",
    "skills": [
      "b-archi-reseau"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle donne le contrôle de l’infrastructure : un poste ordinaire ne doit pas l’atteindre"
      },
      {
        "id": "b",
        "text": "Elle consomme beaucoup de bande passante et gênerait les postes des utilisateurs du site"
      },
      {
        "id": "c",
        "text": "Elle contient les sauvegardes, qu’il faut chiffrer avant de les copier hors site"
      },
      {
        "id": "d",
        "text": "Elle doit rester joignable depuis Internet pour que l’astreinte intervienne à distance"
      }
    ]
  },
  {
    "id": "pvw-q38",
    "prompt": "La micro-segmentation limite les déplacements latéraux d’un attaquant qui a compromis une machine.",
    "skills": [
      "b-archi-reseau"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pvw-q39",
    "prompt": "Quels principes relèvent d’une approche Zero Trust ?",
    "skills": [
      "b-archi-reseau"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Authentifier et autoriser chaque accès, y compris depuis l’intérieur"
      },
      {
        "id": "b",
        "text": "Accorder le moindre privilège nécessaire à chaque accès"
      },
      {
        "id": "c",
        "text": "Tenir compte de l’état de l’appareil et du contexte de connexion"
      },
      {
        "id": "d",
        "text": "Faire confiance à tout poste branché sur le réseau d’entreprise"
      }
    ]
  },
  {
    "id": "pvw-q40",
    "prompt": "Un poste d’un réseau utilisateurs est compromis et balaye les machines voisines. Expliquez comment une architecture segmentée et la détection réseau limitent l’impact et permettent de le repérer.",
    "skills": [
      "b-archi-reseau",
      "b-detection-reseau"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
