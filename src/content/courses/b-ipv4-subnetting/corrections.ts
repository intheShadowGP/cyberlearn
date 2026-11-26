// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "b-ipv4-subnetting",
  questions: {
    "ipv4-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "Une adresse IPv4 fait 32 bits, écrits en quatre octets en notation décimale pointée. Une adresse IPv6 fait 128 bits.",
      "whyWrong": {
        "a": "128 bits est la taille d’une adresse IPv6."
      }
    },
    "ipv4-q2": {
      "type": "single",
      "correct": "b",
      "explanation": "/20 = 8 + 8 + 4 bits à 1 : les deux premiers octets valent 255 et le troisième 1111 0000 en binaire, soit 240.",
      "whyWrong": {
        "a": "`255.255.224.0` correspond à /19 (3 bits dans le troisième octet).",
        "d": "`255.255.255.240` correspond à /28."
      }
    },
    "ipv4-q3": {
      "type": "short",
      "accepted": [
        "30"
      ],
      "explanation": "Un /27 laisse 5 bits pour les hôtes : 2⁵ = 32 adresses, moins l’adresse réseau et la diffusion, soit 30 hôtes utilisables."
    },
    "ipv4-q4": {
      "type": "short",
      "accepted": [
        "172.16.40.0"
      ],
      "explanation": "Le masque /21 est 255.255.248.0 : la taille de bloc du troisième octet est 8. 45 est compris entre 40 et 47, donc le réseau est 172.16.40.0 (diffusion 172.16.47.255)."
    },
    "ipv4-q5": {
      "type": "short",
      "accepted": [
        "192.168.10.127"
      ],
      "explanation": "Le /26 a une taille de bloc de 64 : 77 est entre 64 et 127. Le réseau est 192.168.10.64 et la diffusion 192.168.10.127 (le réseau suivant, .128, moins 1)."
    },
    "ipv4-q6": {
      "type": "multi",
      "correct": [
        "d",
        "e",
        "f"
      ],
      "explanation": "10.0.0.0/8, 172.16.0.0/12 (de 172.16.0.0 à 172.31.255.255) et 192.168.0.0/16 sont privées. 172.32.0.1 est publique, 100.64.0.1 appartient à la plage CGNAT (RFC 6598) et 169.254.x.x est une adresse de lien local.",
      "whyWrong": {
        "b": "172.16.0.0/12 s’arrête à 172.31.255.255.",
        "a": "100.64.0.0/10 est réservée au CGNAT des opérateurs, pas à la RFC 1918.",
        "c": "169.254.0.0/16 est une plage de lien local (APIPA)."
      }
    },
    "ipv4-q7": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Sans réponse DHCP, le poste se configure automatiquement en lien local (APIPA, RFC 3927). Cette adresse n’est pas routable : le poste ne joint que son réseau local."
    },
    "ipv4-q8": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La RFC 3021 autorise le /31 sur les liaisons point à point : les deux adresses sont utilisables, sans adresse réseau ni diffusion. Seul le /32 désigne une adresse unique."
    },
    "ipv4-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "Un /23 laisse 9 bits d’hôtes : 2⁹ − 2 = 510 hôtes utilisables. Un /24 n’offre que 254 hôtes ; un /22 en offrirait 1022, ce qui est plus grand que nécessaire.",
      "whyWrong": {
        "d": "Un /24 ne contient que 254 hôtes utilisables."
      }
    },
    "ipv4-q10": {
      "type": "single",
      "correct": "c",
      "explanation": "Un /25 coupe le dernier octet en deux : .0 à .127 et .128 à .255. L’hôte .100 est dans le premier, l’hôte .130 dans le second : il faut un routeur entre eux.",
      "whyWrong": {
        "a": "Le /24 n’est pas le masque utilisé ici.",
        "d": "Un masque identique ne suffit pas : les adresses réseau doivent être égales.",
        "b": "L’adresse de diffusion du second réseau est .255."
      }
    },
    "ipv4-q11": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Les sous-réseaux créent des frontières, que le pare-feu ou les ACL font respecter. Un réseau plat agrandit au contraire le domaine de diffusion et facilite le mouvement latéral.",
      "whyWrong": {
        "a": "Un /16 contient plus de 65 000 adresses dans un même domaine de diffusion : il l’agrandit."
      }
    },
    "ipv4-q12": {
      "type": "open",
      "model": "On trie du plus grand au plus petit besoin : 60 postes → /26 (62 hôtes) : 192.168.100.0/26 ; 28 serveurs → /27 (30 hôtes) : 192.168.100.64/27 ; 12 caméras → /28 (14 hôtes) : 192.168.100.96/28 ; liaison WAN → /30 : 192.168.100.112/30. Chaque bloc commence sur un multiple de sa taille et rien ne se chevauche ; le reste (à partir de .116) est réservé à la croissance. Filtrage : les caméras ne doivent joindre que leur serveur d’enregistrement et ne pas être joignables depuis les postes en dehors d’un besoin précis ; les postes accèdent aux serveurs uniquement sur les ports nécessaires ; la liaison WAN ne porte que le routage.",
      "criteria": [
        "Choisit /26, /27, /28 et /30 pour les quatre besoins.",
        "Allouer sans chevauchement avec des blocs alignés.",
        "Indique au moins un filtrage entre zones (caméras, serveurs, postes)."
      ],
      "explanation": "Un plan VLSM se construit du plus grand besoin au plus petit, sur des frontières alignées, et se complète par une politique de filtrage entre zones."
    },
    "ipv4-q13": {
      "type": "single",
      "correct": "b",
      "explanation": "Le masque /22 est 255.255.252.0 ; son inverse (255.255.255.255 − masque) est 0.0.3.255. Un wildcard à 0 impose la correspondance de ce bit, à 1 il l’ignore.",
      "whyWrong": {
        "c": "C’est le masque de sous-réseau, non son inverse."
      }
    },
    "ipv4-q14": {
      "type": "short",
      "accepted": [
        "4"
      ],
      "explanation": "Passer de /24 à /26 ajoute 2 bits de réseau : 2² = 4 sous-réseaux de 64 adresses (.0, .64, .128, .192)."
    },
    "ipv4-q15": {
      "type": "single",
      "correct": "d",
      "explanation": "Un /22 couvre 4 valeurs du troisième octet : de 10.10.0.0 à 10.10.3.255. Seule 10.10.3.200 s’y trouve ; 10.10.4.1 est dans le /22 suivant.",
      "whyWrong": {
        "b": "10.10.4.1 appartient au réseau 10.10.4.0/22, juste au-dessus du bloc autorisé."
      }
    },
    "ipv4-q16": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un préfixe /0 ne fixe aucun bit : il correspond à toutes les adresses. C’est la route par défaut dans une table de routage, et « any » dans une règle de filtrage, à manier avec prudence."
    },
    "ipv4-q17": {
      "type": "open",
      "model": "Le préfixe 10.0.0.0/8 couvre plus de 16 millions d’adresses privées : tous les postes, serveurs, caméras et invités du réseau peuvent atteindre la console, alors que seuls quelques administrateurs en ont besoin. Un poste compromis n’importe où peut tenter de s’y connecter et rebondir. Correction : n’autoriser que le sous-réseau d’administration (par exemple 10.20.0.0/27) ou, mieux, les adresses des bastions (/32), vers 10.30.5.10 sur TCP/443, avec authentification forte et journalisation ; supprimer l’ancienne règle large.",
      "criteria": [
        "Identifie que /8 est beaucoup trop large pour ce besoin.",
        "Propose un préfixe restreint (sous-réseau d’administration ou /32).",
        "Ajoute une mesure complémentaire (authentification, journalisation)."
      ],
      "explanation": "Le préfixe d’une règle de filtrage est une décision de sécurité : le plus étroit qui répond au besoin."
    },
    "ipv4-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "/24 correspond à 24 bits à 1, soit trois octets complets : 255.255.255.0. C’est le masque de réseau local le plus courant."
    },
    "ipv4-q19": {
      "type": "single",
      "correct": "c",
      "explanation": "Un /28 laisse 4 bits d’hôtes : 2⁴ = 16 adresses, moins le réseau et la diffusion, soit 14 hôtes utilisables.",
      "whyWrong": {
        "a": "16 est le nombre total d’adresses ; il faut retirer l’adresse réseau et la diffusion.",
        "d": "30 hôtes correspondent à un /27."
      }
    },
    "ipv4-q20": {
      "type": "short",
      "accepted": [
        "/29",
        "29"
      ],
      "explanation": "248 = 1111 1000 : 5 bits à 1 dans le dernier octet. Avec les 24 bits précédents, cela fait 29 bits, donc /29 (6 hôtes utilisables)."
    },
    "ipv4-q21": {
      "type": "single",
      "correct": "c",
      "explanation": "Un /28 n’offre que 14 hôtes, ce qui est insuffisant. Un /27 en offre 30 : c’est le plus petit sous-réseau convenable. Un /26 (62 hôtes) gaspille de l’espace.",
      "whyWrong": {
        "a": "Un /28 ne contient que 14 hôtes utilisables.",
        "b": "Un /26 convient mais n’est pas le plus petit possible."
      }
    },
    "ipv4-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "/18 = 255.255.192.0 : la coupure est dans le troisième octet, avec une taille de bloc de 64 (0, 64, 128, 192). 77 est entre 64 et 127 : le réseau est 10.1.64.0.",
      "whyWrong": {
        "c": "Ce serait un /25 ; ici le quatrième octet appartient entièrement à la partie hôte."
      }
    },
    "ipv4-q23": {
      "type": "short",
      "accepted": [
        "192.168.5.207"
      ],
      "explanation": "Taille de bloc d’un /28 : 16 (…, 192, 208). 200 est entre 192 et 207 : le réseau est 192.168.5.192 et la diffusion 192.168.5.207."
    },
    "ipv4-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "Un /20 a une taille de bloc de 16 dans le troisième octet : le réseau couvre de 172.20.16.0 à 172.20.31.255. La diffusion est .31.255 et la dernière adresse utilisable .31.254.",
      "whyWrong": {
        "c": "172.20.31.255 est l’adresse de diffusion.",
        "d": "172.20.32.0 appartient au réseau suivant."
      }
    },
    "ipv4-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "La taille de bloc d’un /26 est 64 : .192 à .255. Les hôtes .200 et .230 sont tous deux dans 10.0.0.192/26 et communiquent directement."
    },
    "ipv4-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": ".255 est l’adresse de diffusion du /24 : elle s’adresse à tous les hôtes du sous-réseau et ne peut pas être attribuée à une machine."
    },
    "ipv4-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "De /24 à /27, on ajoute 3 bits de réseau : 2³ = 8 sous-réseaux de 32 adresses (.0, .32, .64, .96, .128, .160, .192, .224)."
    },
    "ipv4-q28": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Le /27 couvre .64 à .95. Les hôtes utilisables vont de .65 à .94 : .64 est le réseau, .95 la diffusion et .96 appartient au réseau suivant.",
      "whyWrong": {
        "e": ".95 est l’adresse de diffusion de ce sous-réseau.",
        "c": ".96 est l’adresse réseau du sous-réseau suivant."
      }
    },
    "ipv4-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "Tout le bloc 127.0.0.0/8 est réservé à la boucle locale : le trafic n’est jamais envoyé sur le réseau. Les services écoutant uniquement sur 127.0.0.1 ne sont pas joignables de l’extérieur."
    },
    "ipv4-q30": {
      "type": "single",
      "correct": "a",
      "explanation": "192.0.2.0/24, 198.51.100.0/24 et 203.0.113.0/24 sont réservées à la documentation : on les utilise dans les exemples pour ne jamais citer d’adresses réelles.",
      "whyWrong": {
        "b": "10.0.0.0/8 est une plage privée (RFC 1918), utilisable sur les réseaux réels."
      }
    },
    "ipv4-q31": {
      "type": "single",
      "correct": "d",
      "explanation": "La RFC 6598 réserve 100.64.0.0/10 aux opérateurs qui partagent des adresses publiques entre clients (CGNAT). Cette plage n’est ni privée au sens de la RFC 1918, ni publique."
    },
    "ipv4-q32": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le bloc 224.0.0.0/4 est celui de la multidiffusion : une même émission est reçue par plusieurs abonnés. On ne l’attribue pas à un hôte unique."
    },
    "ipv4-q33": {
      "type": "single",
      "correct": "a",
      "explanation": "Dans un réseau plat, tous les postes et serveurs se voient et partagent le même domaine de diffusion (ARP, découverte). Un poste compromis peut atteindre directement les autres, sans point de filtrage."
    },
    "ipv4-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "Un /16 couvre 65 536 adresses, contre 256 pour un /24. Une erreur de préfixe élargit considérablement le périmètre autorisé : chaque préfixe d’une règle doit être relu ou vérifié par un outil."
    },
    "ipv4-q35": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un plan d’adressage documenté permet de détecter immédiatement une adresse qui n’appartient à aucun sous-réseau attendu. C’est un indice à investiguer, pas une preuve d’attaque."
    },
    "ipv4-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "Aligner sous-réseau, VLAN et zone de sécurité rend la politique lisible : les flux entre zones passent par un point de filtrage et chaque règle porte sur un sous-réseau."
    },
    "ipv4-q37": {
      "type": "multi",
      "correct": [
        "a",
        "d"
      ],
      "explanation": "On alloue d’abord les grands blocs, puis les petits, en commençant chaque sous-réseau sur un multiple de sa taille : cela évite les chevauchements et les trous inutilisables.",
      "whyWrong": {
        "c": "Une allocation au hasard crée des trous et des chevauchements.",
        "b": "Utiliser un même préfixe pour tous est le principe du découpage à taille fixe, pas du VLSM."
      }
    },
    "ipv4-q38": {
      "type": "single",
      "correct": "c",
      "explanation": "Un /25 offre 126 hôtes utilisables, suffisant pour 117. Un /26 n’en offre que 62. Un /24 fonctionnerait mais gaspillerait la moitié de l’espace.",
      "whyWrong": {
        "d": "Un /26 ne contient que 62 hôtes.",
        "a": "Un /24 convient mais n’est pas le plus petit possible."
      }
    },
    "ipv4-q39": {
      "type": "single",
      "correct": "a",
      "explanation": "Le /26 occupe .0 à .63. Le /27 suivant doit commencer sur un multiple de 32 : .64 est le premier possible. Commencer en .63, .65 ou .100 serait mal aligné ou chevaucherait des blocs.",
      "whyWrong": {
        "c": ".63 est l’adresse de diffusion du /26 précédent."
      }
    },
    "ipv4-q40": {
      "type": "open",
      "model": "Les quatre /24 couvrent les valeurs 4 à 7 du troisième octet, soit un bloc de 4 aligné sur un multiple de 4 : l’agrégat est 192.168.4.0/22 (masque 255.255.252.0). Une seule route remplace quatre, ce qui allège les tables de routage et les règles de filtrage. Si les réseaux n’étaient pas alignés ou contigus, l’agrégat engloberait des adresses qui ne nous appartiennent pas (les quatre réseaux 192.168.5.0 à 192.168.8.0, par exemple, ne s’agrègent pas en un seul /22) : on pourrait autoriser ou annoncer à tort des réseaux tiers, voire détourner leur trafic.",
      "criteria": [
        "Donne 192.168.4.0/22 pour les quatre réseaux.",
        "Justifie par l’alignement (valeurs 4 à 7).",
        "Mentionne le risque d’un agrégat trop large (annonce ou règle incorrecte)."
      ],
      "explanation": "L’agrégation n’est possible que pour des blocs contigus et alignés ; un agrégat trop large est une erreur de sécurité autant que de routage."
    },
    "ipv4-q41": {
      "type": "single",
      "correct": "c",
      "explanation": "Un /20 coupe dans le troisième octet avec des blocs de 16 : 37 est dans le bloc 32 à 47. La diffusion est la dernière adresse du bloc, 10.20.47.255.",
      "whyWrong": {
        "b": "Ce serait la diffusion d’un /24, pas d’un /20.",
        "d": "32 est le début du bloc : 10.20.32.255 ne ferme pas le bloc de 16.",
        "a": "Ce serait la fin d’un bloc de 32 (32 à 63), qui n’est pas celui d’un /20."
      }
    },
    "ipv4-q42": {
      "type": "short",
      "accepted": [
        "62"
      ],
      "explanation": "Un /26 laisse 6 bits d’hôtes : 2⁶ = 64 adresses, moins l’adresse réseau et l’adresse de diffusion, soit 62 hôtes utilisables."
    },
    "ipv4-q43": {
      "type": "single",
      "correct": "d",
      "explanation": "Placer les blocs du plus grand au plus petit les garde alignés sur leur taille et évite de gaspiller ou de chevaucher des adresses.",
      "whyWrong": {
        "b": "Placer un petit bloc d’abord désaligne les blocs suivants.",
        "a": "L’ordre alphabétique n’a aucun lien avec l’alignement.",
        "c": "Chaque bloc doit commencer à un multiple de sa taille."
      }
    },
    "ipv4-q44": {
      "type": "single",
      "correct": "b",
      "explanation": "Un /27 offre 32 adresses, soit 30 hôtes utilisables : c’est le plus petit bloc qui accueille 20 hôtes. Un /28 n’en offre que 14.",
      "whyWrong": {
        "d": "Seulement 14 hôtes utilisables : insuffisant.",
        "c": "Suffisant mais trop grand : il gaspille des adresses.",
        "a": "Seulement 2 hôtes : insuffisant."
      }
    }
  },
};
