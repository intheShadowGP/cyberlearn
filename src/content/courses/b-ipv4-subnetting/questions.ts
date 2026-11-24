// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "ipv4-q1",
    "prompt": "Combien de bits composent une adresse IPv4 ?",
    "skills": [
      "b-ipv4-struct"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "128"
      },
      {
        "id": "b",
        "text": "16"
      },
      {
        "id": "c",
        "text": "64"
      },
      {
        "id": "d",
        "text": "32"
      }
    ]
  },
  {
    "id": "ipv4-q2",
    "prompt": "Quel masque décimal correspond au préfixe `/20` ?",
    "skills": [
      "b-ipv4-cidr"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`255.255.224.0`"
      },
      {
        "id": "b",
        "text": "`255.255.240.0`"
      },
      {
        "id": "c",
        "text": "`255.255.0.0`"
      },
      {
        "id": "d",
        "text": "`255.255.255.240`"
      }
    ]
  },
  {
    "id": "ipv4-q3",
    "prompt": "Combien d’hôtes utilisables contient un sous-réseau `/27` ? (nombre)",
    "skills": [
      "b-ipv4-cidr"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "ex. 14"
  },
  {
    "id": "ipv4-q4",
    "prompt": "Quelle est l’adresse réseau de l’hôte `172.16.45.200/21` ?",
    "skills": [
      "b-ipv4-calc"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "a.b.c.d"
  },
  {
    "id": "ipv4-q5",
    "prompt": "Quelle est l’adresse de diffusion du sous-réseau contenant `192.168.10.77/26` ?",
    "skills": [
      "b-ipv4-calc"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "a.b.c.d"
  },
  {
    "id": "ipv4-q6",
    "prompt": "Parmi ces adresses, lesquelles appartiennent aux plages privées définies par la RFC 1918 ?",
    "skills": [
      "b-ipv4-struct"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`100.64.0.1`"
      },
      {
        "id": "b",
        "text": "`172.32.0.1`"
      },
      {
        "id": "c",
        "text": "`169.254.10.10`"
      },
      {
        "id": "d",
        "text": "`172.20.1.1`"
      },
      {
        "id": "e",
        "text": "`10.4.5.6`"
      },
      {
        "id": "f",
        "text": "`192.168.0.1`"
      }
    ]
  },
  {
    "id": "ipv4-q7",
    "prompt": "Un poste Windows qui s’attribue une adresse `169.254.x.x` n’a généralement obtenu aucun bail DHCP.",
    "skills": [
      "b-ipv4-struct"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "ipv4-q8",
    "prompt": "Un préfixe `/31` est inutilisable car il ne laisse aucune adresse d’hôte.",
    "skills": [
      "b-ipv4-struct"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ipv4-q9",
    "prompt": "Quel est le plus petit sous-réseau (le préfixe le plus long) capable d’accueillir 500 hôtes ?",
    "skills": [
      "b-ipv4-cidr"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`/23`"
      },
      {
        "id": "b",
        "text": "`/25`"
      },
      {
        "id": "c",
        "text": "`/22`"
      },
      {
        "id": "d",
        "text": "`/24`"
      }
    ]
  },
  {
    "id": "ipv4-q10",
    "prompt": "Les hôtes `192.168.1.100/25` et `192.168.1.130/25` peuvent-ils communiquer directement sans routeur ?",
    "skills": [
      "b-ipv4-calc"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Oui, ils sont dans le même /24"
      },
      {
        "id": "b",
        "text": "Non, car 192.168.1.130 est une adresse de diffusion"
      },
      {
        "id": "c",
        "text": "Non, ils sont dans deux sous-réseaux /25 différents"
      },
      {
        "id": "d",
        "text": "Oui, car le masque est identique"
      }
    ]
  },
  {
    "id": "ipv4-q11",
    "prompt": "Quelles affirmations sur le découpage en sous-réseaux et la sécurité sont exactes ?",
    "skills": [
      "b-ipv4-secu"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Un réseau plat en /16 réduit le domaine de diffusion."
      },
      {
        "id": "b",
        "text": "Séparer les zones en sous-réseaux permet d’appliquer des règles de filtrage entre elles."
      },
      {
        "id": "c",
        "text": "Un plan d’adressage documenté aide à repérer des équipements non inventoriés."
      },
      {
        "id": "d",
        "text": "Le découpage en sous-réseaux, à lui seul, ne filtre aucun trafic."
      }
    ]
  },
  {
    "id": "ipv4-q12",
    "prompt": "À partir du bloc `192.168.100.0/24`, proposez un plan pour : 60 postes, 28 serveurs, 12 caméras IP, 1 liaison WAN. Justifiez les préfixes et indiquez quelles zones doivent être filtrées entre elles.",
    "skills": [
      "b-ipv4-calc",
      "b-ipv4-secu",
      "b-ipv4-vlsm"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "ipv4-q13",
    "prompt": "Quel masque générique (wildcard) utiliser dans une ACL pour désigner un réseau `/22` ?",
    "skills": [
      "b-ipv4-cidr"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`0.0.1.255`"
      },
      {
        "id": "b",
        "text": "`0.0.3.255`"
      },
      {
        "id": "c",
        "text": "`255.255.252.0`"
      },
      {
        "id": "d",
        "text": "`0.0.7.255`"
      }
    ]
  },
  {
    "id": "ipv4-q14",
    "prompt": "Combien de sous-réseaux `/26` peut-on créer dans un `/24` ? (nombre)",
    "skills": [
      "b-ipv4-cidr"
    ],
    "difficulty": 1,
    "type": "short"
  },
  {
    "id": "ipv4-q15",
    "prompt": "Une règle de pare-feu autorise la source `10.10.0.0/22` vers le serveur de paie. Laquelle de ces adresses est autorisée ?",
    "skills": [
      "b-ipv4-calc",
      "b-ipv4-secu"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`10.10.8.10`"
      },
      {
        "id": "b",
        "text": "`10.10.4.1`"
      },
      {
        "id": "c",
        "text": "`10.11.0.1`"
      },
      {
        "id": "d",
        "text": "`10.10.3.200`"
      }
    ]
  },
  {
    "id": "ipv4-q16",
    "prompt": "Dans une règle de pare-feu, la destination `0.0.0.0/0` désigne n’importe quelle adresse IPv4.",
    "skills": [
      "b-ipv4-secu",
      "b-ipv4-struct"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "ipv4-q17",
    "prompt": "Lors d’un audit, vous trouvez la règle « autoriser `10.0.0.0/8` vers `10.30.5.10` (console d’administration des sauvegardes) sur TCP/443 ». Expliquez le risque en termes d’adressage et proposez une règle corrigée.",
    "skills": [
      "b-ipv4-secu",
      "b-ipv4-cidr"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "ipv4-q18",
    "prompt": "Quel masque décimal correspond au préfixe `/24` ?",
    "skills": [
      "b-ipv4-cidr"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`255.255.255.0`"
      },
      {
        "id": "b",
        "text": "`255.0.0.0`"
      },
      {
        "id": "c",
        "text": "`255.255.255.128`"
      },
      {
        "id": "d",
        "text": "`255.255.0.0`"
      }
    ]
  },
  {
    "id": "ipv4-q19",
    "prompt": "Combien d’hôtes utilisables contient un sous-réseau `/28` ?",
    "skills": [
      "b-ipv4-cidr"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "16"
      },
      {
        "id": "b",
        "text": "30"
      },
      {
        "id": "c",
        "text": "14"
      },
      {
        "id": "d",
        "text": "6"
      }
    ]
  },
  {
    "id": "ipv4-q20",
    "prompt": "Quel préfixe CIDR correspond au masque `255.255.255.248` ? (forme /nn)",
    "skills": [
      "b-ipv4-cidr"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "/nn"
  },
  {
    "id": "ipv4-q21",
    "prompt": "Quel est le préfixe le plus long (le plus petit sous-réseau) qui accueille au moins 25 hôtes ?",
    "skills": [
      "b-ipv4-cidr"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`/28`"
      },
      {
        "id": "b",
        "text": "`/26`"
      },
      {
        "id": "c",
        "text": "`/27`"
      },
      {
        "id": "d",
        "text": "`/29`"
      }
    ]
  },
  {
    "id": "ipv4-q22",
    "prompt": "Quelle est l’adresse réseau de l’hôte `10.1.77.130/18` ?",
    "skills": [
      "b-ipv4-calc"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`10.1.128.0`"
      },
      {
        "id": "b",
        "text": "`10.1.0.0`"
      },
      {
        "id": "c",
        "text": "`10.1.77.128`"
      },
      {
        "id": "d",
        "text": "`10.1.64.0`"
      }
    ]
  },
  {
    "id": "ipv4-q23",
    "prompt": "Quelle est l’adresse de diffusion du réseau contenant `192.168.5.200/28` ?",
    "skills": [
      "b-ipv4-calc"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "a.b.c.d"
  },
  {
    "id": "ipv4-q24",
    "prompt": "Quelle est la dernière adresse utilisable du réseau `172.20.16.0/20` ?",
    "skills": [
      "b-ipv4-calc"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`172.20.16.254`"
      },
      {
        "id": "b",
        "text": "`172.20.31.254`"
      },
      {
        "id": "c",
        "text": "`172.20.31.255`"
      },
      {
        "id": "d",
        "text": "`172.20.32.0`"
      }
    ]
  },
  {
    "id": "ipv4-q25",
    "prompt": "Les hôtes `10.0.0.200/26` et `10.0.0.230/26` sont-ils dans le même sous-réseau ?",
    "skills": [
      "b-ipv4-calc"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Oui, tous deux dans `10.0.0.192/26`"
      },
      {
        "id": "b",
        "text": "Non, car .230 est une adresse de diffusion"
      },
      {
        "id": "c",
        "text": "Non, ils sont dans deux /26 différents"
      },
      {
        "id": "d",
        "text": "Oui, mais seulement s’ils ont la même passerelle"
      }
    ]
  },
  {
    "id": "ipv4-q26",
    "prompt": "Dans le sous-réseau `192.168.1.0/24`, l’adresse `192.168.1.255` peut être attribuée à un hôte.",
    "skills": [
      "b-ipv4-calc"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ipv4-q27",
    "prompt": "Combien de sous-réseaux `/27` contient un `/24` ?",
    "skills": [
      "b-ipv4-cidr"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "16"
      },
      {
        "id": "b",
        "text": "4"
      },
      {
        "id": "c",
        "text": "8"
      },
      {
        "id": "d",
        "text": "32"
      }
    ]
  },
  {
    "id": "ipv4-q28",
    "prompt": "Quelles adresses sont des adresses d’hôte utilisables du sous-réseau `192.168.20.64/27` ?",
    "skills": [
      "b-ipv4-calc"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`192.168.20.65`"
      },
      {
        "id": "b",
        "text": "`192.168.20.94`"
      },
      {
        "id": "c",
        "text": "`192.168.20.96`"
      },
      {
        "id": "d",
        "text": "`192.168.20.80`"
      },
      {
        "id": "e",
        "text": "`192.168.20.95`"
      }
    ]
  },
  {
    "id": "ipv4-q29",
    "prompt": "Que désigne l’adresse `127.0.0.1` ?",
    "skills": [
      "b-ipv4-struct"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une adresse publique attribuée par le fournisseur d’accès"
      },
      {
        "id": "b",
        "text": "La boucle locale (la machine elle-même)"
      },
      {
        "id": "c",
        "text": "La passerelle par défaut du réseau"
      },
      {
        "id": "d",
        "text": "L’adresse de diffusion du sous-réseau"
      }
    ]
  },
  {
    "id": "ipv4-q30",
    "prompt": "Quelle plage est réservée aux exemples et à la documentation (RFC 5737) ?",
    "skills": [
      "b-ipv4-struct"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`203.0.113.0/24`"
      },
      {
        "id": "b",
        "text": "`10.0.0.0/8`"
      },
      {
        "id": "c",
        "text": "`192.168.0.0/16`"
      },
      {
        "id": "d",
        "text": "`169.254.0.0/16`"
      }
    ]
  },
  {
    "id": "ipv4-q31",
    "prompt": "À quoi sert la plage `100.64.0.0/10` ?",
    "skills": [
      "b-ipv4-struct"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À la boucle locale"
      },
      {
        "id": "b",
        "text": "À la multidiffusion"
      },
      {
        "id": "c",
        "text": "Au lien local sans DHCP"
      },
      {
        "id": "d",
        "text": "Au NAT des opérateurs (CGNAT)"
      }
    ]
  },
  {
    "id": "ipv4-q32",
    "prompt": "Les adresses de `224.0.0.0` à `239.255.255.255` sont réservées à la multidiffusion.",
    "skills": [
      "b-ipv4-struct"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "ipv4-q33",
    "prompt": "Pourquoi un réseau plat unique en `/16` est-il un risque de sécurité ?",
    "skills": [
      "b-ipv4-secu"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le domaine de diffusion est vaste et le mouvement latéral est facilité"
      },
      {
        "id": "b",
        "text": "Il oblige à chiffrer chaque trame échangée sur le réseau"
      },
      {
        "id": "c",
        "text": "Il interdit tout routage entre le réseau et l’extérieur"
      },
      {
        "id": "d",
        "text": "Il empêche les postes d’obtenir une adresse par DHCP"
      }
    ]
  },
  {
    "id": "ipv4-q34",
    "prompt": "Par erreur, une règle autorise `192.168.0.0/16` alors que seul `192.168.10.0/24` devait l’être. Quel est l’effet ?",
    "skills": [
      "b-ipv4-secu",
      "b-ipv4-cidr"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle ne change rien, car le /24 reste prioritaire"
      },
      {
        "id": "b",
        "text": "Elle ouvre l’accès à plus de 65 000 adresses au lieu de 254"
      },
      {
        "id": "c",
        "text": "Elle chiffre le trafic qui correspond à la règle"
      },
      {
        "id": "d",
        "text": "Elle bloque tout le trafic provenant du réseau"
      }
    ]
  },
  {
    "id": "ipv4-q35",
    "prompt": "Une adresse source « hors plan » dans les journaux peut révéler un équipement non inventorié ou une usurpation.",
    "skills": [
      "b-ipv4-secu"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ipv4-q36",
    "prompt": "Quel principe d’organisation relie sous-réseau, VLAN et sécurité ?",
    "skills": [
      "b-ipv4-secu"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un seul sous-réseau pour toute l’entreprise"
      },
      {
        "id": "b",
        "text": "Un VLAN par poste de travail"
      },
      {
        "id": "c",
        "text": "Un sous-réseau par protocole utilisé"
      },
      {
        "id": "d",
        "text": "Un sous-réseau, une zone, une politique"
      }
    ]
  },
  {
    "id": "ipv4-q37",
    "prompt": "Quelles étapes font partie de la méthode VLSM ?",
    "skills": [
      "b-ipv4-vlsm"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Aligner chaque sous-réseau sur un multiple de sa taille"
      },
      {
        "id": "b",
        "text": "Utiliser le même préfixe pour tous les sous-réseaux"
      },
      {
        "id": "c",
        "text": "Attribuer les plus petits sous-réseaux au hasard"
      },
      {
        "id": "d",
        "text": "Trier les besoins du plus grand au plus petit"
      }
    ]
  },
  {
    "id": "ipv4-q38",
    "prompt": "Un site compte 90 postes et prévoit 30 % de croissance (soit environ 117 adresses). Quel préfixe minimal faut-il ?",
    "skills": [
      "b-ipv4-vlsm",
      "b-ipv4-cidr"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`/24`"
      },
      {
        "id": "b",
        "text": "`/27`"
      },
      {
        "id": "c",
        "text": "`/25`"
      },
      {
        "id": "d",
        "text": "`/26`"
      }
    ]
  },
  {
    "id": "ipv4-q39",
    "prompt": "Dans le bloc `10.0.0.0/24`, un `/26` a été alloué en `10.0.0.0/26`. Où commence correctement le `/27` suivant ?",
    "skills": [
      "b-ipv4-vlsm"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`10.0.0.64/27`"
      },
      {
        "id": "b",
        "text": "`10.0.0.100/27`"
      },
      {
        "id": "c",
        "text": "`10.0.0.63/27`"
      },
      {
        "id": "d",
        "text": "`10.0.0.65/27`"
      }
    ]
  },
  {
    "id": "ipv4-q40",
    "prompt": "Les réseaux `192.168.4.0/24` à `192.168.7.0/24` sont contigus. Proposez une route agrégée, justifiez-la et indiquez le risque si les réseaux n’étaient pas alignés.",
    "skills": [
      "b-ipv4-vlsm",
      "b-ipv4-secu"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
