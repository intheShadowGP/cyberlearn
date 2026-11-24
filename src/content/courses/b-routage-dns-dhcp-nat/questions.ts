// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "rdn-q1",
    "prompt": "Un paquet vers 10.1.2.5 correspond aux routes 10.0.0.0/8 et 0.0.0.0/0. Laquelle le routeur choisit-il ?",
    "skills": [
      "b-routage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les deux à la fois, en répartissant le trafic au hasard"
      },
      {
        "id": "b",
        "text": "10.0.0.0/8, car son préfixe est le plus long (le plus précis)"
      },
      {
        "id": "c",
        "text": "0.0.0.0/0, car une route par défaut est toujours prioritaire sur les autres"
      },
      {
        "id": "d",
        "text": "Celle dont la métrique est la plus grande, quel que soit le préfixe"
      }
    ]
  },
  {
    "id": "rdn-q2",
    "prompt": "Quel préfixe, en notation CIDR, désigne la route par défaut en IPv4 ?",
    "skills": [
      "b-routage"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "…/0"
  },
  {
    "id": "rdn-q3",
    "prompt": "Une route directement connectée ne nécessite pas de passerelle (prochain saut) : le réseau est accessible via l’interface elle-même.",
    "skills": [
      "b-routage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rdn-q4",
    "prompt": "Quelle différence entre OSPF et BGP ?",
    "skills": [
      "b-routage-protocoles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "OSPF route à l’intérieur d’une organisation ; BGP entre systèmes autonomes"
      },
      {
        "id": "b",
        "text": "BGP ne fonctionne qu’en IPv6, alors qu’OSPF ne fonctionne qu’en IPv4"
      },
      {
        "id": "c",
        "text": "OSPF chiffre le trafic de bout en bout ; BGP transporte le trafic en clair"
      },
      {
        "id": "d",
        "text": "OSPF sert à attribuer les adresses IP ; BGP à traduire les noms en adresses"
      }
    ]
  },
  {
    "id": "rdn-q5",
    "prompt": "Quel mécanisme valide qu’un préfixe est annoncé par le système autonome autorisé, pour contrer les détournements BGP ? (sigle)",
    "skills": [
      "b-routage-protocoles"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "rdn-q6",
    "prompt": "Quelles mesures protègent le routage ?",
    "skills": [
      "b-routage-protocoles"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Authentifier les échanges OSPF entre routeurs"
      },
      {
        "id": "b",
        "text": "Laisser chaque routeur accepter toute annonce, par souci de résilience"
      },
      {
        "id": "c",
        "text": "Filtrer les annonces BGP et valider leur origine (RPKI)"
      },
      {
        "id": "d",
        "text": "N’activer OSPF que sur les interfaces concernées"
      }
    ]
  },
  {
    "id": "rdn-q7",
    "prompt": "Dans quel ordre un résolveur interroge-t-il les serveurs pour résoudre www.exemple.fr ?",
    "skills": [
      "b-dns"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Directement le serveur web de exemple.fr, puis la racine"
      },
      {
        "id": "b",
        "text": "Le serveur DHCP du réseau, puis le pare-feu de l’entreprise"
      },
      {
        "id": "c",
        "text": "Les serveurs de exemple.fr, puis ceux de .fr, puis les serveurs racine"
      },
      {
        "id": "d",
        "text": "Serveurs racine, puis serveurs de .fr, puis serveurs de exemple.fr"
      }
    ]
  },
  {
    "id": "rdn-q8",
    "prompt": "DNSSEC chiffre les requêtes DNS pour en garantir la confidentialité.",
    "skills": [
      "b-dns"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rdn-q9",
    "prompt": "Quelles menaces visent le DNS ?",
    "skills": [
      "b-dns"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le débordement de tampon d’un câble réseau"
      },
      {
        "id": "b",
        "text": "L’usurpation d’un résolveur sur le réseau local"
      },
      {
        "id": "c",
        "text": "L’empoisonnement du cache d’un résolveur"
      },
      {
        "id": "d",
        "text": "L’exfiltration de données encodées dans des requêtes"
      }
    ]
  },
  {
    "id": "rdn-q10",
    "prompt": "Quelle valeur, associée à chaque enregistrement DNS, fixe la durée pendant laquelle un résolveur conserve la réponse en cache ? (sigle)",
    "skills": [
      "b-dns"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "rdn-q11",
    "prompt": "Quel est l’ordre des quatre messages de l’attribution DHCP ?",
    "skills": [
      "b-dhcp-nat"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Request, Offer, Discover, Acknowledge"
      },
      {
        "id": "b",
        "text": "Offer, Discover, Acknowledge, Request"
      },
      {
        "id": "c",
        "text": "Discover, Offer, Request, Acknowledge"
      },
      {
        "id": "d",
        "text": "Syn, Syn-Ack, Ack, Fin"
      }
    ]
  },
  {
    "id": "rdn-q12",
    "prompt": "Un client DHCP accepte la première offre reçue, ce qui rend possible l’attaque par serveur DHCP pirate.",
    "skills": [
      "b-dhcp-nat"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rdn-q13",
    "prompt": "Qu’est-ce qui distingue le PAT du NAT simple ?",
    "skills": [
      "b-dhcp-nat"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le PAT attribue des noms de domaine, alors que le NAT simple attribue des adresses"
      },
      {
        "id": "b",
        "text": "Le PAT chiffre les paquets sortants, alors que le NAT simple les laisse passer en clair"
      },
      {
        "id": "c",
        "text": "Le PAT ne fonctionne qu’en IPv6, alors que le NAT simple fonctionne en IPv4"
      },
      {
        "id": "d",
        "text": "Le PAT partage une adresse publique entre plusieurs machines grâce au port source"
      }
    ]
  },
  {
    "id": "rdn-q14",
    "prompt": "Le NAT est équivalent à un pare-feu et protège les machines internes contre les attaques.",
    "skills": [
      "b-dhcp-nat"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rdn-q15",
    "prompt": "Une équipe pense que son réseau IPv4 est protégé « parce qu’il y a du NAT ». En IPv6, chaque poste a une adresse globale. Expliquez ce que le NAT apporte réellement et ce qui change en IPv6 pour la sécurité.",
    "skills": [
      "b-dhcp-nat",
      "b-routage"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "rdn-q16",
    "prompt": "Sur un réseau local, un attaquant veut intercepter le trafic web des utilisateurs en détournant la résolution de noms. Décrivez deux voies possibles et les protections correspondantes.",
    "skills": [
      "b-dns",
      "b-dhcp-nat"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "rdn-q17",
    "prompt": "Quel est le rôle de la passerelle par défaut configurée sur un poste ?",
    "skills": [
      "b-routage"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Recevoir les paquets destinés à un réseau autre que le réseau local"
      },
      {
        "id": "b",
        "text": "Chiffrer tout le trafic que le poste envoie vers les sites Internet"
      },
      {
        "id": "c",
        "text": "Attribuer une adresse IP au poste lorsqu’il se connecte au réseau"
      },
      {
        "id": "d",
        "text": "Traduire les noms de domaine demandés par le poste en adresses IP"
      }
    ]
  },
  {
    "id": "rdn-q18",
    "prompt": "Deux routes mènent au même préfixe : une route statique (distance administrative 1) et une route apprise par OSPF (distance 110). Laquelle est installée dans la table ?",
    "skills": [
      "b-routage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La route OSPF, car une route apprise dynamiquement est toujours préférée"
      },
      {
        "id": "b",
        "text": "Les deux, avec un équilibrage de charge entre elles"
      },
      {
        "id": "c",
        "text": "La route statique, car sa distance administrative est la plus faible"
      },
      {
        "id": "d",
        "text": "Aucune : le routeur refuse deux routes vers un même préfixe"
      }
    ]
  },
  {
    "id": "rdn-q19",
    "prompt": "À chaque saut, un routeur réécrit les adresses IP source et destination du paquet (hors translation d’adresses).",
    "skills": [
      "b-routage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rdn-q20",
    "prompt": "Comment appelle-t-on, dans une table de routage, le routeur voisin auquel on transmet le paquet pour qu’il poursuive son chemin ? (deux mots)",
    "skills": [
      "b-routage"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "rdn-q21",
    "prompt": "Quelles informations une entrée de table de routage associe-t-elle à un préfixe de destination ?",
    "skills": [
      "b-routage"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le contenu applicatif des paquets déjà transmis"
      },
      {
        "id": "b",
        "text": "L’interface de sortie à utiliser"
      },
      {
        "id": "c",
        "text": "Le prochain saut (passerelle) à joindre"
      },
      {
        "id": "d",
        "text": "La métrique ou la distance de la route"
      },
      {
        "id": "e",
        "text": "La liste des comptes autorisés sur le routeur"
      }
    ]
  },
  {
    "id": "rdn-q22",
    "prompt": "Que signifie qu’OSPF est un protocole « à états de liens » ?",
    "skills": [
      "b-routage-protocoles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Chaque routeur vérifie que le lien physique est chiffré avant de l’utiliser"
      },
      {
        "id": "b",
        "text": "Chaque routeur connaît la carte du réseau et calcule les plus courts chemins"
      },
      {
        "id": "c",
        "text": "Chaque routeur choisit sa route selon la charge des serveurs finaux"
      },
      {
        "id": "d",
        "text": "Chaque routeur ne retient que les routes que lui annoncent ses voisins directs"
      }
    ]
  },
  {
    "id": "rdn-q23",
    "prompt": "BGP choisit ses routes selon des politiques définies par les opérateurs, et pas seulement selon le chemin le plus court.",
    "skills": [
      "b-routage-protocoles"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rdn-q24",
    "prompt": "Un opérateur annonce par erreur un préfixe /24 appartenant à une autre organisation, qui l’annonce elle-même en /23. Pourquoi une partie du trafic est-elle détournée ?",
    "skills": [
      "b-routage-protocoles",
      "b-routage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le /24 est signé numériquement, ce qui oblige les routeurs à le choisir"
      },
      {
        "id": "b",
        "text": "Le préfixe plus long, plus spécifique, est préféré par les routeurs"
      },
      {
        "id": "c",
        "text": "Les routeurs préfèrent l’annonce venant du plus petit système autonome"
      },
      {
        "id": "d",
        "text": "BGP donne toujours la priorité à l’annonce la plus récente reçue par le routeur"
      }
    ]
  },
  {
    "id": "rdn-q25",
    "prompt": "Comment nomme-t-on un ensemble de réseaux sous une même autorité de routage, identifié par un numéro et échangé par BGP ? (deux mots)",
    "skills": [
      "b-routage-protocoles"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "rdn-q26",
    "prompt": "Quelles affirmations sur MPLS sont exactes ?",
    "skills": [
      "b-routage-protocoles"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Il permet à un opérateur de bâtir des VPN isolés pour ses clients"
      },
      {
        "id": "b",
        "text": "Il chiffre le trafic de bout en bout entre les deux sites"
      },
      {
        "id": "c",
        "text": "Il remplace l’adresse IP des postes par une étiquette"
      },
      {
        "id": "d",
        "text": "Les routeurs intermédiaires commutent selon une étiquette"
      }
    ]
  },
  {
    "id": "rdn-q27",
    "prompt": "Quel type d’enregistrement DNS associe un nom de domaine à une adresse IPv4 ?",
    "skills": [
      "b-dns"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A (adresse IPv4)"
      },
      {
        "id": "b",
        "text": "PTR (résolution inverse)"
      },
      {
        "id": "c",
        "text": "AAAA (adresse IPv6)"
      },
      {
        "id": "d",
        "text": "MX (serveur de messagerie)"
      }
    ]
  },
  {
    "id": "rdn-q28",
    "prompt": "Quelle différence entre un résolveur récursif et un serveur DNS faisant autorité ?",
    "skills": [
      "b-dns"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le résolveur est installé sur les routeurs ; le serveur faisant autorité, sur les postes"
      },
      {
        "id": "b",
        "text": "Le résolveur détient les enregistrements d’une zone ; le serveur faisant autorité mène la résolution pour le client"
      },
      {
        "id": "c",
        "text": "Le résolveur mène la résolution pour le client ; le serveur faisant autorité détient les enregistrements d’une zone"
      },
      {
        "id": "d",
        "text": "Le résolveur ne parle qu’en UDP ; le serveur faisant autorité ne parle qu’en TCP"
      }
    ]
  },
  {
    "id": "rdn-q29",
    "prompt": "Une réponse DNS empoisonnée peut continuer à être servie aux clients jusqu’à l’expiration de son TTL dans le cache du résolveur.",
    "skills": [
      "b-dns"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rdn-q30",
    "prompt": "Quels indices peuvent révéler une exfiltration de données par DNS ?",
    "skills": [
      "b-dns"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Des réponses servies rapidement depuis le cache du résolveur"
      },
      {
        "id": "b",
        "text": "Un volume anormal de requêtes de type TXT émises par un seul poste"
      },
      {
        "id": "c",
        "text": "Des requêtes régulières des postes vers le serveur DNS interne"
      },
      {
        "id": "d",
        "text": "De très nombreuses requêtes vers un domaine rare, avec des sous-domaines longs et aléatoires"
      }
    ]
  },
  {
    "id": "rdn-q31",
    "prompt": "Pourquoi configure-t-on un relais DHCP (relay) sur un routeur ?",
    "skills": [
      "b-dhcp-nat"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour remplacer le serveur DHCP principal lorsqu’il tombe en panne"
      },
      {
        "id": "b",
        "text": "Pour chiffrer les échanges entre les clients et le serveur DHCP du réseau"
      },
      {
        "id": "c",
        "text": "Pour traduire les adresses privées des clients en adresse publique"
      },
      {
        "id": "d",
        "text": "Pour que les clients d’autres réseaux joignent un serveur DHCP central"
      }
    ]
  },
  {
    "id": "rdn-q32",
    "prompt": "Quel est l’objectif d’une attaque par épuisement du pool DHCP (DHCP starvation) ?",
    "skills": [
      "b-dhcp-nat"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Saturer la table de routage des routeurs voisins du réseau local"
      },
      {
        "id": "b",
        "text": "Empêcher les clients légitimes d’obtenir une adresse, souvent avant un faux serveur"
      },
      {
        "id": "c",
        "text": "Récupérer les mots de passe d’administration stockés sur le serveur DHCP"
      },
      {
        "id": "d",
        "text": "Faire expirer les baux des clients pour les contraindre à saisir une adresse statique"
      }
    ]
  },
  {
    "id": "rdn-q33",
    "prompt": "Qu’est-ce qu’une redirection de port (DNAT) ?",
    "skills": [
      "b-dhcp-nat"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une règle envoyant les connexions d’un port public vers une machine interne"
      },
      {
        "id": "b",
        "text": "Une règle qui remplace le port source des connexions sortantes par un port plus élevé"
      },
      {
        "id": "c",
        "text": "Une règle qui bloque les ports inutilisés sur la passerelle de sortie"
      },
      {
        "id": "d",
        "text": "Un mécanisme qui change le port d’un service dès qu’il est attaqué"
      }
    ]
  },
  {
    "id": "rdn-q34",
    "prompt": "Quand plusieurs postes partagent une adresse publique par PAT, les journaux d’un serveur distant les montrent tous avec cette même adresse.",
    "skills": [
      "b-dhcp-nat",
      "b-reseau-diag"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rdn-q35",
    "prompt": "Depuis un poste, « ping 8.8.8.8 » répond mais « ping www.exemple.fr » échoue. Quelle piste est la plus probable ?",
    "skills": [
      "b-reseau-diag",
      "b-dns"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un pare-feu qui bloque tout le trafic IP sortant de ce poste de travail"
      },
      {
        "id": "b",
        "text": "Une route par défaut absente de la table de routage du poste"
      },
      {
        "id": "c",
        "text": "Un problème de résolution DNS, par exemple un serveur DNS injoignable"
      },
      {
        "id": "d",
        "text": "Un câble réseau défectueux entre le poste et le commutateur de l’étage"
      }
    ]
  },
  {
    "id": "rdn-q36",
    "prompt": "Un poste affiche l’adresse 169.254.12.7 alors qu’il devrait recevoir une adresse du réseau. Que révèle cette adresse ?",
    "skills": [
      "b-reseau-diag",
      "b-dhcp-nat"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le poste utilise un tunnel VPN actif vers le siège de l’entreprise"
      },
      {
        "id": "b",
        "text": "Le poste est configuré avec une adresse statique valide sur le réseau de l’entreprise"
      },
      {
        "id": "c",
        "text": "Le poste a reçu une adresse publique directement de son fournisseur d’accès"
      },
      {
        "id": "d",
        "text": "Aucun bail DHCP obtenu : le poste s’est attribué une adresse lien-local"
      }
    ]
  },
  {
    "id": "rdn-q37",
    "prompt": "Quels outils aident à diagnostiquer un problème d’accès réseau ?",
    "skills": [
      "b-reseau-diag"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "ip route ou route print, pour lire la table de routage"
      },
      {
        "id": "b",
        "text": "sha256sum, pour vérifier l’intégrité d’un fichier"
      },
      {
        "id": "c",
        "text": "dig ou nslookup, pour vérifier la résolution des noms"
      },
      {
        "id": "d",
        "text": "traceroute, pour repérer où s’arrête le chemin"
      },
      {
        "id": "e",
        "text": "ssh-keygen, pour générer une paire de clés"
      }
    ]
  },
  {
    "id": "rdn-q38",
    "prompt": "Quelle commande affiche la liste des routeurs traversés pour atteindre une destination ? (nom de la commande, sous Linux ou Windows)",
    "skills": [
      "b-reseau-diag",
      "b-routage"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "commande"
  },
  {
    "id": "rdn-q39",
    "prompt": "Un poste joint les machines de son réseau mais aucun site Internet, même par adresse IP. Quelle vérification faire en premier ?",
    "skills": [
      "b-reseau-diag",
      "b-routage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le certificat TLS utilisé par le navigateur du poste"
      },
      {
        "id": "b",
        "text": "La présence et la joignabilité de la passerelle par défaut"
      },
      {
        "id": "c",
        "text": "Le nombre de baux restants dans le pool du serveur DHCP"
      },
      {
        "id": "d",
        "text": "La durée de vie (TTL) des enregistrements du résolveur DNS"
      }
    ]
  },
  {
    "id": "rdn-q40",
    "prompt": "Un utilisateur n’arrive plus à ouvrir l’intranet par son nom, alors que ses collègues y parviennent. Décrivez une démarche de diagnostic ordonnée, du poste jusqu’au serveur.",
    "skills": [
      "b-reseau-diag",
      "b-dns"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
