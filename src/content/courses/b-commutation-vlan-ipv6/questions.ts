// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "cvi-q1",
    "prompt": "Comment un commutateur apprend-il sur quel port se trouve une adresse MAC ?",
    "skills": [
      "b-l2-commutation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "En lisant l’adresse MAC source des trames reçues sur chaque port"
      },
      {
        "id": "b",
        "text": "En lisant l’adresse IP de destination de chaque paquet"
      },
      {
        "id": "c",
        "text": "Il ne l’apprend pas : il diffuse toujours tout sur tous les ports"
      },
      {
        "id": "d",
        "text": "En interrogeant le serveur DNS du réseau local"
      }
    ]
  },
  {
    "id": "cvi-q2",
    "prompt": "Que fait un commutateur d’une trame dont l’adresse MAC de destination est absente de sa table ?",
    "skills": [
      "b-l2-commutation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il la stocke jusqu’à ce qu’il connaisse la destination"
      },
      {
        "id": "b",
        "text": "Il la détruit sans prévenir l’expéditeur"
      },
      {
        "id": "c",
        "text": "Il la renvoie à l’expéditeur avec un message d’erreur"
      },
      {
        "id": "d",
        "text": "Il la diffuse sur tous les ports sauf celui d’arrivée"
      }
    ]
  },
  {
    "id": "cvi-q3",
    "prompt": "Par défaut, un commutateur seul sépare un réseau en plusieurs domaines de diffusion.",
    "skills": [
      "b-l2-commutation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cvi-q4",
    "prompt": "Comment appelle-t-on la table d’un commutateur qui associe les adresses MAC aux ports ? (sigle de trois lettres)",
    "skills": [
      "b-l2-commutation"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "cvi-q5",
    "prompt": "Que transporte un lien d’agrégation (trunk) entre deux commutateurs ?",
    "skills": [
      "b-vlan"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le trafic d’un seul VLAN, sans aucune étiquette sur les trames"
      },
      {
        "id": "b",
        "text": "Plusieurs VLAN, chaque trame portant une étiquette 802.1Q"
      },
      {
        "id": "c",
        "text": "Uniquement des paquets IPv6 de gestion des équipements"
      },
      {
        "id": "d",
        "text": "Uniquement du trafic de diffusion entre les deux commutateurs"
      }
    ]
  },
  {
    "id": "cvi-q6",
    "prompt": "Combien de bits le champ identifiant de VLAN (VID) de l’étiquette 802.1Q comporte-t-il ?",
    "skills": [
      "b-vlan"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nombre"
  },
  {
    "id": "cvi-q7",
    "prompt": "Deux machines placées sur des VLAN différents communiquent directement, sans passer par un routeur.",
    "skills": [
      "b-vlan"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cvi-q8",
    "prompt": "Quelles pratiques concernent correctement le VLAN natif d’un lien d’agrégation ?",
    "skills": [
      "b-vlan",
      "b-l2-securite"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le laisser par défaut sur le VLAN 1"
      },
      {
        "id": "b",
        "text": "Y placer les postes utilisateurs pour simplifier"
      },
      {
        "id": "c",
        "text": "Marquer explicitement le trafic du trunk"
      },
      {
        "id": "d",
        "text": "Lui attribuer un VLAN dédié et inutilisé"
      }
    ]
  },
  {
    "id": "cvi-q9",
    "prompt": "Un attaquant inonde un commutateur de milliers de fausses adresses MAC sources. Expliquez l’effet recherché sur le commutateur et la protection standard qui l’empêche.",
    "skills": [
      "b-l2-securite"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "cvi-q10",
    "prompt": "Quelle protection limite le nombre d’adresses MAC autorisées sur un port d’accès ?",
    "skills": [
      "b-l2-securite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le reverse proxy"
      },
      {
        "id": "b",
        "text": "Le NAT sur le routeur"
      },
      {
        "id": "c",
        "text": "Le port security"
      },
      {
        "id": "d",
        "text": "Le routage dynamique OSPF"
      }
    ]
  },
  {
    "id": "cvi-q11",
    "prompt": "Quelles protections s’appuient sur la table des baux construite par le DHCP snooping ?",
    "skills": [
      "b-l2-securite"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le chiffrement TLS des pages web"
      },
      {
        "id": "b",
        "text": "L’inspection dynamique des requêtes ARP (DAI)"
      },
      {
        "id": "c",
        "text": "Le contrôle des adresses IP source (IP Source Guard)"
      },
      {
        "id": "d",
        "text": "Le chiffrement WPA3 du réseau Wi-Fi"
      }
    ]
  },
  {
    "id": "cvi-q12",
    "prompt": "Sur combien de bits porte une adresse IPv6 ?",
    "skills": [
      "b-ipv6"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "64"
      },
      {
        "id": "b",
        "text": "256"
      },
      {
        "id": "c",
        "text": "32"
      },
      {
        "id": "d",
        "text": "128"
      }
    ]
  },
  {
    "id": "cvi-q13",
    "prompt": "Quel préfixe identifie les adresses IPv6 lien-local ?",
    "skills": [
      "b-ipv6"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "fe80::/…"
  },
  {
    "id": "cvi-q14",
    "prompt": "Grâce à quel message une machine construit-elle son adresse IPv6 par SLAAC ?",
    "skills": [
      "b-ipv6"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une requête DNS inverse envoyée au résolveur"
      },
      {
        "id": "b",
        "text": "Un bail DHCPv4 attribué par le serveur"
      },
      {
        "id": "c",
        "text": "Le Router Advertisement en ICMPv6"
      },
      {
        "id": "d",
        "text": "Une requête ARP diffusée sur le réseau local"
      }
    ]
  },
  {
    "id": "cvi-q15",
    "prompt": "Sur un réseau utilisé « en IPv4 seulement », IPv6 est généralement inactif et ne présente donc aucun risque.",
    "skills": [
      "b-ipv6-secu",
      "b-l2-securite"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cvi-q16",
    "prompt": "Un réseau d’entreprise filtre et surveille IPv4 mais n’a jamais configuré IPv6. Expliquez le risque et proposez trois mesures concrètes.",
    "skills": [
      "b-ipv6-secu",
      "b-l2-securite"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "cvi-q17",
    "prompt": "Quelle est la principale différence entre un concentrateur (hub) et un commutateur ?",
    "skills": [
      "b-l2-commutation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le commutateur filtre les paquets selon les ports TCP"
      },
      {
        "id": "b",
        "text": "Le commutateur n’envoie la trame qu’au port du destinataire"
      },
      {
        "id": "c",
        "text": "Le concentrateur chiffre toutes les trames qu’il transmet"
      },
      {
        "id": "d",
        "text": "Le concentrateur route les paquets entre plusieurs réseaux IP"
      }
    ]
  },
  {
    "id": "cvi-q18",
    "prompt": "Quel équipement sépare les domaines de diffusion lorsqu’aucun VLAN n’est configuré ?",
    "skills": [
      "b-l2-commutation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un routeur"
      },
      {
        "id": "b",
        "text": "Un répéteur"
      },
      {
        "id": "c",
        "text": "Un commutateur"
      },
      {
        "id": "d",
        "text": "Un concentrateur"
      }
    ]
  },
  {
    "id": "cvi-q19",
    "prompt": "Une entrée de la table MAC d’un commutateur est effacée lorsque l’adresse concernée n’émet plus de trame pendant un certain temps.",
    "skills": [
      "b-l2-commutation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cvi-q20",
    "prompt": "Quel protocole évite les boucles dans un réseau commuté qui comporte des liens redondants ?",
    "skills": [
      "b-l2-securite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Spanning Tree (STP)"
      },
      {
        "id": "b",
        "text": "Le protocole DHCP (attribution d’adresses)"
      },
      {
        "id": "c",
        "text": "Le protocole ARP (résolution d’adresses)"
      },
      {
        "id": "d",
        "text": "Le protocole NTP (synchronisation horaire)"
      }
    ]
  },
  {
    "id": "cvi-q21",
    "prompt": "Un commutateur pirate branché sur un port d’accès tente de devenir la racine du Spanning Tree. Quelle fonction coupe ce port dès qu’il reçoit des BPDU ?",
    "skills": [
      "b-l2-securite"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Port security"
      },
      {
        "id": "b",
        "text": "BPDU Guard"
      },
      {
        "id": "c",
        "text": "RA Guard"
      },
      {
        "id": "d",
        "text": "DHCP snooping"
      }
    ]
  },
  {
    "id": "cvi-q22",
    "prompt": "Dans quels cas un commutateur inonde-t-il une trame sur tous les ports sauf celui d’arrivée ?",
    "skills": [
      "b-l2-commutation"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Quand la destination est connue sur le port d’arrivée"
      },
      {
        "id": "b",
        "text": "Quand la destination est l’adresse de diffusion ff:ff:ff:ff:ff:ff"
      },
      {
        "id": "c",
        "text": "Quand la destination est connue sur un autre port"
      },
      {
        "id": "d",
        "text": "Quand la destination est absente de la table MAC"
      }
    ]
  },
  {
    "id": "cvi-q23",
    "prompt": "À quoi sert le routage inter-VLAN ?",
    "skills": [
      "b-vlan"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À agrandir la table d’adresses MAC du commutateur"
      },
      {
        "id": "b",
        "text": "À chiffrer les trames qui circulent sur les liens d’agrégation"
      },
      {
        "id": "c",
        "text": "À relier des VLAN distincts par un équipement de couche 3"
      },
      {
        "id": "d",
        "text": "À fusionner plusieurs VLAN en un seul domaine de diffusion"
      }
    ]
  },
  {
    "id": "cvi-q24",
    "prompt": "Quelle plage d’identifiants de VLAN peut-on utiliser avec 802.1Q ?",
    "skills": [
      "b-vlan"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "De 1 à 65535"
      },
      {
        "id": "b",
        "text": "De 0 à 4095"
      },
      {
        "id": "c",
        "text": "De 1 à 1024"
      },
      {
        "id": "d",
        "text": "De 1 à 4094"
      }
    ]
  },
  {
    "id": "cvi-q25",
    "prompt": "Comment circulent les trames sur un port d’accès ?",
    "skills": [
      "b-vlan"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Uniquement sous forme de trames de diffusion"
      },
      {
        "id": "b",
        "text": "Chiffrées par 802.1X pour tous les équipements"
      },
      {
        "id": "c",
        "text": "Avec une étiquette 802.1Q portant tous les VLAN du commutateur"
      },
      {
        "id": "d",
        "text": "Sans étiquette 802.1Q, dans le VLAN affecté au port"
      }
    ]
  },
  {
    "id": "cvi-q26",
    "prompt": "Le VLAN d’administration des équipements réseau doit être isolé des VLAN des postes utilisateurs.",
    "skills": [
      "b-vlan"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cvi-q27",
    "prompt": "Quelle attaque exploite le VLAN natif en insérant deux étiquettes 802.1Q dans une trame ?",
    "skills": [
      "b-l2-securite",
      "b-vlan"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La saturation de la table MAC"
      },
      {
        "id": "b",
        "text": "Le saut de VLAN par double marquage"
      },
      {
        "id": "c",
        "text": "L’usurpation ARP"
      },
      {
        "id": "d",
        "text": "L’épuisement du pool d’adresses DHCP du réseau"
      }
    ]
  },
  {
    "id": "cvi-q28",
    "prompt": "Quelle fonction n’autorise les réponses DHCP que sur des ports « de confiance » ?",
    "skills": [
      "b-l2-securite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le Spanning Tree"
      },
      {
        "id": "b",
        "text": "DNSSEC"
      },
      {
        "id": "c",
        "text": "Le DHCP snooping"
      },
      {
        "id": "d",
        "text": "Le port security"
      }
    ]
  },
  {
    "id": "cvi-q29",
    "prompt": "L’inspection ARP dynamique (DAI) peut fonctionner sans aucune source d’information sur les associations IP/MAC légitimes.",
    "skills": [
      "b-l2-securite"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cvi-q30",
    "prompt": "Comment empêcher un poste de se faire passer pour un commutateur et d’obtenir un lien d’agrégation (DTP) ?",
    "skills": [
      "b-l2-securite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Forcer les ports utilisateurs en mode accès"
      },
      {
        "id": "b",
        "text": "Renommer le VLAN par défaut en un nom moins visible"
      },
      {
        "id": "c",
        "text": "Doubler les câbles pour augmenter la capacité du port"
      },
      {
        "id": "d",
        "text": "Activer le NAT sur tous les ports utilisateurs du commutateur"
      }
    ]
  },
  {
    "id": "cvi-q31",
    "prompt": "Quelle mesure empêche un appareil non autorisé, branché sur une prise murale, d’accéder au réseau ?",
    "skills": [
      "b-l2-securite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le protocole NDP sur le réseau local"
      },
      {
        "id": "b",
        "text": "L’authentification de port 802.1X"
      },
      {
        "id": "c",
        "text": "Un masque de sous-réseau en /30"
      },
      {
        "id": "d",
        "text": "Le choix d’un VLAN natif différent de 1"
      }
    ]
  },
  {
    "id": "cvi-q32",
    "prompt": "Quelle forme abrégée correcte correspond à `2001:0db8:0000:0000:0000:0000:0000:0001` ?",
    "skills": [
      "b-ipv6"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`2001:db8:1::`"
      },
      {
        "id": "b",
        "text": "`2001:db8::::1`"
      },
      {
        "id": "c",
        "text": "`2001:db8::1`"
      },
      {
        "id": "d",
        "text": "`2001:db8:0:1`"
      }
    ]
  },
  {
    "id": "cvi-q33",
    "prompt": "Quelle est l’adresse de bouclage (loopback) IPv6 ?",
    "skills": [
      "b-ipv6"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`::1`"
      },
      {
        "id": "b",
        "text": "`::`"
      },
      {
        "id": "c",
        "text": "`fe80::1`"
      },
      {
        "id": "d",
        "text": "`ff02::1`"
      }
    ]
  },
  {
    "id": "cvi-q34",
    "prompt": "Quelle longueur de préfixe est utilisée pour un sous-réseau où fonctionne SLAAC ?",
    "skills": [
      "b-ipv6"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`/48`"
      },
      {
        "id": "b",
        "text": "`/32`"
      },
      {
        "id": "c",
        "text": "`/128`"
      },
      {
        "id": "d",
        "text": "`/64`"
      }
    ]
  },
  {
    "id": "cvi-q35",
    "prompt": "Par quoi la diffusion (broadcast) d’IPv4 est-elle remplacée en IPv6 ?",
    "skills": [
      "b-ipv6"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Rien : le broadcast existe toujours en IPv6"
      },
      {
        "id": "b",
        "text": "Le NAT"
      },
      {
        "id": "c",
        "text": "La multidiffusion (multicast)"
      },
      {
        "id": "d",
        "text": "Le protocole DHCP"
      }
    ]
  },
  {
    "id": "cvi-q36",
    "prompt": "Quel protocole remplace ARP en IPv6 ? (sigle de trois lettres)",
    "skills": [
      "b-ipv6"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "cvi-q37",
    "prompt": "Une adresse IPv6 lien-local (`fe80::/10`) n’est pas transmise par les routeurs hors du lien.",
    "skills": [
      "b-ipv6"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cvi-q38",
    "prompt": "Quelle fonction des commutateurs n’accepte les annonces de routeur IPv6 que des ports légitimes ?",
    "skills": [
      "b-ipv6-secu"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "BPDU Guard"
      },
      {
        "id": "b",
        "text": "RA Guard"
      },
      {
        "id": "c",
        "text": "Port security"
      },
      {
        "id": "d",
        "text": "DHCP snooping"
      }
    ]
  },
  {
    "id": "cvi-q39",
    "prompt": "Pourquoi ne faut-il pas bloquer tout le trafic ICMPv6 ?",
    "skills": [
      "b-ipv6-secu"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "NDP et la découverte du MTU en dépendent"
      },
      {
        "id": "b",
        "text": "ICMPv6 remplace TCP pour les connexions longues"
      },
      {
        "id": "c",
        "text": "ICMPv6 assure le chiffrement des échanges IPv6"
      },
      {
        "id": "d",
        "text": "Le blocage n’empêcherait que la commande ping"
      }
    ]
  },
  {
    "id": "cvi-q40",
    "prompt": "Quelles mesures prennent correctement IPv6 en compte dans la sécurité d’un réseau ?",
    "skills": [
      "b-ipv6-secu"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Activer RA Guard sur les commutateurs d’accès"
      },
      {
        "id": "b",
        "text": "Journaliser et surveiller les flux IPv6"
      },
      {
        "id": "c",
        "text": "Désactiver IPv6 partout sans analyse préalable"
      },
      {
        "id": "d",
        "text": "Appliquer en IPv6 les mêmes règles de filtrage qu’en IPv4"
      },
      {
        "id": "e",
        "text": "Ne surveiller que le trafic IPv4 du réseau"
      }
    ]
  }
];
