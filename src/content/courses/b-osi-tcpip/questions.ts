// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "osi-q1",
    "prompt": "Combien de couches compte le modèle OSI ?",
    "skills": [
      "b-osi-layers"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "4"
      },
      {
        "id": "b",
        "text": "7"
      },
      {
        "id": "c",
        "text": "5"
      },
      {
        "id": "d",
        "text": "9"
      }
    ]
  },
  {
    "id": "osi-q2",
    "prompt": "À quelle couche OSI un commutateur (switch) classique prend-il ses décisions d’acheminement ?",
    "skills": [
      "b-osi-encap",
      "b-osi-layers"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Couche 2 — Liaison"
      },
      {
        "id": "b",
        "text": "Couche 1 — Physique"
      },
      {
        "id": "c",
        "text": "Couche 3 — Réseau"
      },
      {
        "id": "d",
        "text": "Couche 7 — Application"
      }
    ]
  },
  {
    "id": "osi-q3",
    "prompt": "Comment appelle-t-on l’unité de données de la couche 3 (réseau) ?",
    "skills": [
      "b-osi-encap"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "osi-q4",
    "prompt": "UDP établit une connexion avant d’envoyer des données.",
    "skills": [
      "b-osi-transport"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "osi-q5",
    "prompt": "Quels services utilisent habituellement UDP ?",
    "skills": [
      "b-osi-transport"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "DHCP"
      },
      {
        "id": "b",
        "text": "SSH"
      },
      {
        "id": "c",
        "text": "NTP"
      },
      {
        "id": "d",
        "text": "DNS (requêtes courantes)"
      },
      {
        "id": "e",
        "text": "HTTPS sur TCP/443"
      }
    ]
  },
  {
    "id": "osi-q6",
    "prompt": "Quelle est la séquence de la poignée de main TCP ?",
    "skills": [
      "b-osi-transport"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "ACK, SYN, RST, FIN"
      },
      {
        "id": "b",
        "text": "SYN, ACK, FIN"
      },
      {
        "id": "c",
        "text": "SYN, SYN-ACK, ACK"
      },
      {
        "id": "d",
        "text": "HELLO, ACK, DATA"
      }
    ]
  },
  {
    "id": "osi-q7",
    "prompt": "Quel port TCP utilise par défaut le protocole SSH ? (nombre)",
    "skills": [
      "b-osi-transport"
    ],
    "difficulty": 1,
    "type": "short"
  },
  {
    "id": "osi-q8",
    "prompt": "L’« ARP spoofing » (empoisonnement ARP) est une attaque de quelle couche ?",
    "skills": [
      "b-osi-secu",
      "b-osi-encap"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Couche 4 — Transport"
      },
      {
        "id": "b",
        "text": "Couche 1 — Physique"
      },
      {
        "id": "c",
        "text": "Couche 7 — Application"
      },
      {
        "id": "d",
        "text": "Couche 2 — Liaison"
      }
    ]
  },
  {
    "id": "osi-q9",
    "prompt": "Un pare-feu qui filtre uniquement par adresses IP et ports peut bloquer une injection SQL envoyée sur un port HTTPS autorisé.",
    "skills": [
      "b-osi-secu"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "osi-q10",
    "prompt": "Associez correctement : quelles paires « protection → couche » sont exactes ?",
    "skills": [
      "b-osi-secu",
      "b-osi-layers"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Inspection ARP dynamique → couche 2"
      },
      {
        "id": "b",
        "text": "802.1X (contrôle d’accès au port) → couche 2"
      },
      {
        "id": "c",
        "text": "SYN cookies → couche 4"
      },
      {
        "id": "d",
        "text": "WAF → couche 3"
      }
    ]
  },
  {
    "id": "osi-q11",
    "prompt": "Lors de l’encapsulation, dans quel ordre les en-têtes sont-ils ajoutés à une requête HTTP ?",
    "skills": [
      "b-osi-encap"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "TCP, puis Ethernet, puis IP"
      },
      {
        "id": "b",
        "text": "TCP, puis IP, puis Ethernet"
      },
      {
        "id": "c",
        "text": "IP, puis TCP, puis Ethernet"
      },
      {
        "id": "d",
        "text": "Ethernet, puis IP, puis TCP"
      }
    ]
  },
  {
    "id": "osi-q12",
    "prompt": "Dans l’extrait de capture fourni avec la question (SYN, SYN-ACK, RST sur plusieurs ports), expliquez ce que fait la source et ce que vous recommandez à l’équipe SOC.",
    "skills": [
      "b-osi-secu",
      "b-osi-transport",
      "b-osi-diag"
    ],
    "difficulty": 3,
    "context": {
      "lang": "text",
      "code": "10.0.5.23 -> 10.0.1.10:22 [SYN]   / réponse [SYN, ACK] / puis [RST]\n10.0.5.23 -> 10.0.1.10:23 [SYN]   / réponse [RST, ACK]\n10.0.5.23 -> 10.0.1.10:80 [SYN]   / réponse [SYN, ACK] / puis [RST]"
    },
    "type": "open"
  },
  {
    "id": "osi-q13",
    "prompt": "Le modèle TCP/IP regroupe les couches session, présentation et application du modèle OSI en une seule couche application.",
    "skills": [
      "b-osi-layers"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "osi-q14",
    "prompt": "Quel protocole permet à un hôte de découvrir l’adresse MAC correspondant à une adresse IPv4 de son réseau local ? (sigle)",
    "skills": [
      "b-osi-encap",
      "b-osi-secu"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "osi-q15",
    "prompt": "Expliquez avec vos mots pourquoi la défense en profondeur exige des protections à plusieurs couches. Donnez deux exemples concrets.",
    "skills": [
      "b-osi-layers",
      "b-osi-secu"
    ],
    "difficulty": 2,
    "type": "open"
  },
  {
    "id": "osi-q16",
    "prompt": "Un routeur décide où envoyer un paquet en s’appuyant principalement sur :",
    "skills": [
      "b-osi-layers",
      "b-osi-encap"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le nom de domaine demandé"
      },
      {
        "id": "b",
        "text": "Le numéro de port de destination"
      },
      {
        "id": "c",
        "text": "L’adresse IP de destination"
      },
      {
        "id": "d",
        "text": "L’adresse MAC de destination"
      }
    ]
  },
  {
    "id": "osi-q17",
    "prompt": "Quelle couche OSI s’occupe de la représentation des données (format, encodage, chiffrement) ?",
    "skills": [
      "b-osi-layers"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La couche 2 — Liaison"
      },
      {
        "id": "b",
        "text": "La couche 5 — Session (dialogues)"
      },
      {
        "id": "c",
        "text": "La couche 4 — Transport"
      },
      {
        "id": "d",
        "text": "La couche 6 — Présentation"
      }
    ]
  },
  {
    "id": "osi-q18",
    "prompt": "À quelle couche du modèle TCP/IP correspond la couche réseau d’OSI ?",
    "skills": [
      "b-osi-layers"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La couche Internet"
      },
      {
        "id": "b",
        "text": "La couche Application"
      },
      {
        "id": "c",
        "text": "La couche Transport"
      },
      {
        "id": "d",
        "text": "La couche Accès réseau"
      }
    ]
  },
  {
    "id": "osi-q19",
    "prompt": "À quelle couche un pare-feu applicatif web (WAF) agit-il ?",
    "skills": [
      "b-osi-layers",
      "b-osi-secu"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La couche 3 — Réseau"
      },
      {
        "id": "b",
        "text": "La couche 7 — Application"
      },
      {
        "id": "c",
        "text": "La couche 4 — Transport (ports)"
      },
      {
        "id": "d",
        "text": "La couche 2 — Liaison"
      }
    ]
  },
  {
    "id": "osi-q20",
    "prompt": "Le modèle OSI décrit exactement la pile de protocoles utilisée sur Internet.",
    "skills": [
      "b-osi-layers"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "osi-q21",
    "prompt": "Quelle couche OSI gère l’ouverture, le maintien et la fermeture des dialogues entre applications ?",
    "skills": [
      "b-osi-layers"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La couche 3 — Réseau"
      },
      {
        "id": "b",
        "text": "La couche 1 — Physique"
      },
      {
        "id": "c",
        "text": "La couche 5 — Session"
      },
      {
        "id": "d",
        "text": "La couche 6 — Présentation"
      }
    ]
  },
  {
    "id": "osi-q22",
    "prompt": "Quelle est l’unité de données de la couche 2 (liaison) ?",
    "skills": [
      "b-osi-encap"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le segment"
      },
      {
        "id": "b",
        "text": "Le paquet"
      },
      {
        "id": "c",
        "text": "Le message applicatif"
      },
      {
        "id": "d",
        "text": "La trame"
      }
    ]
  },
  {
    "id": "osi-q23",
    "prompt": "Quel sigle de trois lettres désigne l’adresse de 48 bits utilisée en couche 2 ?",
    "skills": [
      "b-osi-encap"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "osi-q24",
    "prompt": "À quoi sert la passerelle par défaut d’un hôte ?",
    "skills": [
      "b-osi-encap"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À recevoir les paquets destinés à un autre réseau pour les acheminer"
      },
      {
        "id": "b",
        "text": "À attribuer automatiquement les adresses IP aux machines du réseau local"
      },
      {
        "id": "c",
        "text": "À traduire les noms de domaine en adresses IP pour les applications"
      },
      {
        "id": "d",
        "text": "À chiffrer le trafic sortant du réseau local vers Internet"
      }
    ]
  },
  {
    "id": "osi-q25",
    "prompt": "Comment l’adresse MAC de destination évolue-t-elle quand un paquet traverse un routeur ?",
    "skills": [
      "b-osi-encap"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle est remplacée par le numéro de port du service visé"
      },
      {
        "id": "b",
        "text": "Elle est réécrite à chaque saut, l’IP restant la même"
      },
      {
        "id": "c",
        "text": "Elle reste identique de la source à la destination finale"
      },
      {
        "id": "d",
        "text": "Elle est chiffrée avec la clé du routeur qui la transmet"
      }
    ]
  },
  {
    "id": "osi-q26",
    "prompt": "Quelles informations figurent dans l’en-tête IP d’un paquet ?",
    "skills": [
      "b-osi-encap"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le numéro de port source"
      },
      {
        "id": "b",
        "text": "La durée de vie (TTL)"
      },
      {
        "id": "c",
        "text": "L’adresse IP source"
      },
      {
        "id": "d",
        "text": "L’adresse MAC de destination"
      },
      {
        "id": "e",
        "text": "L’adresse IP de destination"
      }
    ]
  },
  {
    "id": "osi-q27",
    "prompt": "À quoi sert le champ TTL d’un paquet IP ?",
    "skills": [
      "b-osi-encap",
      "b-osi-diag"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À limiter le nombre de routeurs traversés et éviter les boucles"
      },
      {
        "id": "b",
        "text": "À identifier l’application qui a émis le paquet sur la machine"
      },
      {
        "id": "c",
        "text": "À chiffrer l’en-tête du paquet pendant la traversée du réseau"
      },
      {
        "id": "d",
        "text": "À indiquer le débit maximal autorisé pour la communication en cours"
      }
    ]
  },
  {
    "id": "osi-q28",
    "prompt": "Un hôte n’utilise ARP que pour résoudre des adresses de son propre réseau local, y compris celle de sa passerelle.",
    "skills": [
      "b-osi-encap"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "osi-q29",
    "prompt": "Pourquoi UDP convient-il aux requêtes DNS courantes ?",
    "skills": [
      "b-osi-transport"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "UDP chiffre automatiquement les requêtes pour protéger la vie privée"
      },
      {
        "id": "b",
        "text": "UDP impose l’authentification du serveur interrogé par le client"
      },
      {
        "id": "c",
        "text": "UDP garantit l’ordre et la livraison de chaque réponse reçue"
      },
      {
        "id": "d",
        "text": "Une question et une réponse tiennent en un datagramme"
      }
    ]
  },
  {
    "id": "osi-q30",
    "prompt": "Quel drapeau TCP de trois lettres rompt brutalement une connexion ?",
    "skills": [
      "b-osi-transport"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "osi-q31",
    "prompt": "Quelle réponse reçoit typiquement un scanner SYN qui sonde un port TCP fermé ?",
    "skills": [
      "b-osi-transport",
      "b-osi-secu"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un SYN supplémentaire"
      },
      {
        "id": "b",
        "text": "Un SYN-ACK"
      },
      {
        "id": "c",
        "text": "Un RST (avec ACK)"
      },
      {
        "id": "d",
        "text": "Un FIN-ACK"
      }
    ]
  },
  {
    "id": "osi-q32",
    "prompt": "Quelles associations « port → service » sont exactes ?",
    "skills": [
      "b-osi-transport"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "3389/TCP → RDP"
      },
      {
        "id": "b",
        "text": "443/TCP → HTTPS"
      },
      {
        "id": "c",
        "text": "22/TCP → SSH"
      },
      {
        "id": "d",
        "text": "53/TCP → SSH"
      },
      {
        "id": "e",
        "text": "25/TCP → HTTP"
      }
    ]
  },
  {
    "id": "osi-q33",
    "prompt": "TCP chiffre par défaut les données qu’il transporte.",
    "skills": [
      "b-osi-transport"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "osi-q34",
    "prompt": "Quelle attaque consiste à envoyer des SYN en masse sans terminer la poignée de main pour saturer la table de connexions d’un serveur ?",
    "skills": [
      "b-osi-secu"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un ARP spoofing"
      },
      {
        "id": "b",
        "text": "Un SYN flood"
      },
      {
        "id": "c",
        "text": "Un saut de VLAN"
      },
      {
        "id": "d",
        "text": "Une injection SQL"
      }
    ]
  },
  {
    "id": "osi-q35",
    "prompt": "Quelle protection est la plus adaptée contre l’ARP spoofing sur un réseau d’accès ?",
    "skills": [
      "b-osi-secu"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le blocage de tous les messages ICMP"
      },
      {
        "id": "b",
        "text": "Un WAF devant l’application web"
      },
      {
        "id": "c",
        "text": "Les SYN cookies sur les serveurs"
      },
      {
        "id": "d",
        "text": "L’inspection ARP dynamique"
      }
    ]
  },
  {
    "id": "osi-q36",
    "prompt": "Les attaques par amplification sont faciles en UDP car l’adresse source d’un datagramme peut être falsifiée sans poignée de main.",
    "skills": [
      "b-osi-secu",
      "b-osi-transport"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "osi-q37",
    "prompt": "Un site est injoignable depuis un poste. Quelle méthode de dépannage est la plus rigoureuse ?",
    "skills": [
      "b-osi-diag"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Réinstaller d’abord le navigateur du poste concerné par la panne"
      },
      {
        "id": "b",
        "text": "Redémarrer le serveur DNS de toute l’entreprise"
      },
      {
        "id": "c",
        "text": "Vérifier le lien, puis remonter les couches une à une"
      },
      {
        "id": "d",
        "text": "Modifier les règles du pare-feu pour tout autoriser"
      }
    ]
  },
  {
    "id": "osi-q38",
    "prompt": "Quelle commande teste l’accessibilité d’un hôte par des messages ICMP echo ?",
    "skills": [
      "b-osi-diag"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "ping"
      },
      {
        "id": "b",
        "text": "arp"
      },
      {
        "id": "c",
        "text": "nslookup"
      },
      {
        "id": "d",
        "text": "ssh"
      }
    ]
  },
  {
    "id": "osi-q39",
    "prompt": "Quel outil affiche le chemin suivi par les paquets en envoyant des messages au TTL croissant ?",
    "skills": [
      "b-osi-diag"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "ping (messages ICMP echo)"
      },
      {
        "id": "b",
        "text": "netstat (connexions locales)"
      },
      {
        "id": "c",
        "text": "traceroute (tracert)"
      },
      {
        "id": "d",
        "text": "nslookup (requêtes DNS)"
      }
    ]
  },
  {
    "id": "osi-q40",
    "prompt": "Un poste joint les serveurs par leur adresse IP mais pas par leur nom. Quels éléments faut-il vérifier en priorité ?",
    "skills": [
      "b-osi-diag"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "L’adresse MAC de la passerelle"
      },
      {
        "id": "b",
        "text": "La résolution DNS"
      },
      {
        "id": "c",
        "text": "Le câble réseau du poste"
      },
      {
        "id": "d",
        "text": "Le serveur DNS configuré sur le poste"
      }
    ]
  }
];
