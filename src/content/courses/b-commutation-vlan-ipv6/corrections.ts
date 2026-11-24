// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "b-commutation-vlan-ipv6",
  questions: {
    "cvi-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "À chaque trame reçue, le commutateur associe l’adresse MAC source au port d’arrivée dans sa table (CAM). Les trames suivantes à destination de cette adresse ne sont plus envoyées que sur ce port.",
      "whyWrong": {
        "d": "Le DNS résout des noms en adresses IP ; il n’intervient pas dans la commutation.",
        "c": "Un commutateur qui diffuserait tout serait un concentrateur (hub)."
      }
    },
    "cvi-q2": {
      "type": "single",
      "correct": "d",
      "explanation": "Une destination inconnue provoque une inondation (flooding) sur tous les ports sauf celui d’arrivée. C’est normal, mais c’est aussi ce qu’un attaquant cherche à provoquer en saturant la table MAC."
    },
    "cvi-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un commutateur sépare les domaines de collision, mais pas les domaines de diffusion : tous les ports forment un seul domaine de diffusion tant qu’on ne configure pas de VLAN. Un routeur, lui, sépare les domaines de diffusion."
    },
    "cvi-q4": {
      "type": "short",
      "accepted": [
        "cam",
        "table cam"
      ],
      "explanation": "La table CAM (Content Addressable Memory) associe adresse MAC et port. Sa taille est limitée, ce qui rend possible l’attaque par saturation."
    },
    "cvi-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "Un trunk transporte plusieurs VLAN sur un même lien : l’étiquette 802.1Q (VID de 12 bits) indique à quel VLAN appartient chaque trame. Seul le VLAN natif circule sans étiquette."
    },
    "cvi-q6": {
      "type": "short",
      "accepted": [
        "12"
      ],
      "explanation": "Le VID occupe 12 bits : 4 096 valeurs, dont 0 et 4095 sont réservées. On dispose donc des VLAN 1 à 4094."
    },
    "cvi-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Deux VLAN sont deux réseaux logiques distincts : ils ne communiquent que par un équipement de couche 3 (routeur, commutateur de niveau 3 ou pare-feu), où l’on applique le filtrage."
    },
    "cvi-q8": {
      "type": "multi",
      "correct": [
        "c",
        "d"
      ],
      "explanation": "Un VLAN natif dédié et inutilisé, avec un marquage explicite de tout le trafic, empêche l’attaque par double marquage. Le laisser en VLAN 1 avec du trafic utilisateur la rend possible.",
      "whyWrong": {
        "b": "Cela expose les postes à l’attaque par double marquage.",
        "a": "Le VLAN 1 par défaut est connu de tous les attaquants."
      }
    },
    "cvi-q9": {
      "type": "open",
      "model": "La table CAM est de taille limitée : en la remplissant de fausses adresses, l’attaquant empêche le commutateur d’apprendre les vraies. Pour les destinations inconnues, le commutateur se met alors à inonder les trames sur tous les ports, comme un concentrateur : l’attaquant peut capturer le trafic des autres. La protection est le port security, qui limite le nombre d’adresses MAC par port (et peut couper le port ou alerter en cas de dépassement).",
      "criteria": [
        "Explique la saturation de la table CAM.",
        "Décrit la conséquence : inondation et capture du trafic.",
        "Nomme le port security comme protection."
      ],
      "explanation": "La saturation de la table MAC transforme le commutateur en concentrateur ; le port security en limite le nombre d’adresses par port."
    },
    "cvi-q10": {
      "type": "single",
      "correct": "c",
      "explanation": "Le port security limite le nombre d’adresses MAC apprises par port, et peut aussi les fixer. Il contre la saturation de la table et les branchements sauvages."
    },
    "cvi-q11": {
      "type": "multi",
      "correct": [
        "b",
        "c"
      ],
      "explanation": "Le DHCP snooping mémorise les couples adresse IP, adresse MAC et port. DAI s’en sert pour rejeter les réponses ARP incohérentes, et IP Source Guard pour filtrer les adresses source falsifiées.",
      "whyWrong": {
        "a": "TLS protège des échanges applicatifs, indépendamment de la table de baux.",
        "d": "WPA3 protège la couche radio et n’utilise pas cette table."
      }
    },
    "cvi-q12": {
      "type": "single",
      "correct": "d",
      "explanation": "Une adresse IPv6 comporte 128 bits, écrits en huit groupes de quatre chiffres hexadécimaux. Une adresse IPv4 n’en compte que 32.",
      "whyWrong": {
        "a": "64 bits correspond souvent à la partie réseau ou à l’identifiant d’interface, pas à l’adresse entière."
      }
    },
    "cvi-q13": {
      "type": "short",
      "accepted": [
        "fe80::/10",
        "fe80::",
        "fe80"
      ],
      "explanation": "Le préfixe fe80::/10 désigne les adresses lien-local, attribuées automatiquement à chaque interface et valables sur le lien uniquement. Les routeurs ne les transmettent pas."
    },
    "cvi-q14": {
      "type": "single",
      "correct": "c",
      "explanation": "Les routeurs annoncent périodiquement le préfixe du réseau par des Router Advertisement (ICMPv6). La machine y associe son propre identifiant d’interface pour former son adresse, sans serveur."
    },
    "cvi-q15": {
      "type": "truefalse",
      "correct": false,
      "explanation": "IPv6 est activé par défaut sur la plupart des systèmes : les postes ont une adresse lien-local et répondent aux annonces de routeur. Un faux routeur IPv6 peut s’imposer, d’où RA Guard, filtrage et surveillance."
    },
    "cvi-q16": {
      "type": "open",
      "model": "IPv6 est actif par défaut sur les postes : un attaquant du réseau peut envoyer de fausses annonces de routeur et se placer comme passerelle IPv6 (interception), ou utiliser des flux IPv6 non filtrés qui échappent au pare-feu et à la supervision, voire des tunnels. Mesures : activer RA Guard et DHCPv6 Guard sur les commutateurs d’accès ; appliquer en IPv6 les mêmes règles de filtrage et de journalisation qu’en IPv4 ; inventorier l’usage réel d’IPv6 et bloquer les mécanismes de transition inutiles (6to4, Teredo) ; ou, à défaut, déployer IPv6 proprement avec un plan d’adressage.",
      "criteria": [
        "Explique que IPv6 est actif par défaut et non surveillé.",
        "Cite le risque de faux routeur ou de contournement du filtrage.",
        "Propose trois mesures concrètes (RA Guard, filtrage, journalisation, transition)."
      ],
      "explanation": "IPv6 doit être traité comme IPv4 : adressé, filtré et surveillé, même quand on ne l’utilise pas officiellement."
    },
    "cvi-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "Un concentrateur répète chaque signal sur tous les ports ; un commutateur utilise sa table d’adresses MAC pour ne transmettre qu’au port concerné, ce qui limite l’écoute et améliore les performances."
    },
    "cvi-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "Les diffusions de couche 2 ne traversent pas un routeur : chaque interface de routeur délimite un domaine de diffusion. Un commutateur sans VLAN transmet les diffusions à tous ses ports."
    },
    "cvi-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Chaque entrée a une durée de vie (de l’ordre de quelques minutes). Une machine déplacée sur un autre port est ainsi redécouverte, et la table ne grossit pas indéfiniment."
    },
    "cvi-q20": {
      "type": "single",
      "correct": "a",
      "explanation": "Sans protection, une boucle de couche 2 fait circuler indéfiniment les diffusions et paralyse le réseau. STP bloque les liens redondants et n’en réactive qu’en cas de panne."
    },
    "cvi-q21": {
      "type": "single",
      "correct": "b",
      "explanation": "BPDU Guard désactive un port d’accès qui reçoit des messages STP, puisqu’aucun commutateur ne devrait y être branché. Root Guard empêche, lui, un lien de provoquer une nouvelle élection de la racine.",
      "whyWrong": {
        "d": "Le DHCP snooping contrôle les réponses DHCP, pas les messages STP.",
        "c": "RA Guard concerne les annonces de routeur IPv6."
      }
    },
    "cvi-q22": {
      "type": "multi",
      "correct": [
        "b",
        "d"
      ],
      "explanation": "Une diffusion et une destination inconnue sont toutes deux inondées. Pour une destination connue, la trame ne sort que par le port associé ; si ce port est celui d’arrivée, elle est ignorée.",
      "whyWrong": {
        "c": "La trame est alors transmise uniquement vers ce port.",
        "a": "La trame est filtrée, car la destination est déjà sur le même segment."
      }
    },
    "cvi-q23": {
      "type": "single",
      "correct": "c",
      "explanation": "Chaque VLAN est un réseau IP distinct : seul un routeur, un commutateur de niveau 3 ou un pare-feu peut les relier. C’est là qu’on applique la politique de filtrage entre zones."
    },
    "cvi-q24": {
      "type": "single",
      "correct": "d",
      "explanation": "Le VID tient sur 12 bits (0 à 4095), mais 0 et 4095 sont réservés : les VLAN utilisables vont de 1 à 4094."
    },
    "cvi-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "Un port d’accès relie un équipement terminal à un seul VLAN : le commutateur ajoute ou retire l’étiquette en interne. Les trames sortent donc sans étiquette vers le poste."
    },
    "cvi-q26": {
      "type": "truefalse",
      "correct": true,
      "explanation": "L’administration donne accès à la configuration des commutateurs et routeurs. L’isoler limite les accès aux seuls postes d’administration et réduit l’impact d’un poste utilisateur compromis."
    },
    "cvi-q27": {
      "type": "single",
      "correct": "b",
      "explanation": "Le commutateur retire la première étiquette (celle du VLAN natif) et transmet la trame avec la seconde, qui l’envoie dans un autre VLAN. Un VLAN natif dédié et inutilisé neutralise l’attaque."
    },
    "cvi-q28": {
      "type": "single",
      "correct": "c",
      "explanation": "Le DHCP snooping distingue ports de confiance (vers le vrai serveur) et ports non fiables (utilisateurs). Les offres venant d’un port non fiable sont rejetées : un serveur DHCP pirate ne peut plus répondre."
    },
    "cvi-q29": {
      "type": "truefalse",
      "correct": false,
      "explanation": "DAI compare les réponses ARP à une référence : la table du DHCP snooping, ou des entrées statiques pour les adresses fixes. Sans référence, elle ne sait pas distinguer une réponse légitime d’une réponse falsifiée."
    },
    "cvi-q30": {
      "type": "single",
      "correct": "a",
      "explanation": "Les ports utilisateurs doivent être configurés explicitement en accès, et la négociation automatique de trunk désactivée : le poste ne peut plus obtenir un lien qui transporte tous les VLAN."
    },
    "cvi-q31": {
      "type": "single",
      "correct": "b",
      "explanation": "802.1X exige qu’un équipement s’authentifie (certificat ou identifiants) avant que le port soit ouvert. Le port security limite complémentairement les adresses MAC, mais n’authentifie pas."
    },
    "cvi-q32": {
      "type": "single",
      "correct": "c",
      "explanation": "On omet les zéros de tête de chaque groupe et on remplace une seule suite de groupes nuls par `::`. Une seconde utilisation de `::` serait ambiguë, et `2001:db8:1::` désigne une autre adresse.",
      "whyWrong": {
        "b": "Le `::` ne peut remplacer qu’une suite de groupes, pas quatre fois deux-points.",
        "d": "Cette forme n’a que quatre groupes, sans `::` : elle est invalide."
      }
    },
    "cvi-q33": {
      "type": "single",
      "correct": "a",
      "explanation": "`::1` est l’équivalent de 127.0.0.1. L’adresse `::` est l’adresse non spécifiée, `fe80::/10` le lien-local et `ff02::1` le groupe multicast « tous les nœuds du lien ».",
      "whyWrong": {
        "b": "`::` est l’adresse non spécifiée utilisée avant d’avoir une adresse."
      }
    },
    "cvi-q34": {
      "type": "single",
      "correct": "d",
      "explanation": "SLAAC construit une adresse de 128 bits avec un préfixe de 64 bits annoncé et un identifiant d’interface de 64 bits : les sous-réseaux sont donc des /64. Un site reçoit en général un /48 ou un /56 à découper en /64.",
      "whyWrong": {
        "a": "Un /48 est typiquement alloué à un site, pas à un sous-réseau."
      }
    },
    "cvi-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "IPv6 n’a plus de diffusion : on s’adresse à des groupes multicast (par exemple `ff02::1` pour tous les nœuds du lien). Cela évite de déranger les machines qui ne sont pas concernées."
    },
    "cvi-q36": {
      "type": "short",
      "accepted": [
        "ndp",
        "nd"
      ],
      "explanation": "NDP (Neighbor Discovery Protocol), fondé sur ICMPv6, résout les adresses du lien, découvre les routeurs et détecte les adresses en double. Il est exposé aux mêmes usurpations que l’ARP."
    },
    "cvi-q37": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Une adresse lien-local n’a de sens que sur le lien où elle est configurée : un routeur ne la transmet jamais. Elle sert au voisinage et à la découverte (NDP, routeur par défaut)."
    },
    "cvi-q38": {
      "type": "single",
      "correct": "b",
      "explanation": "RA Guard rejette les Router Advertisement reçus sur un port d’utilisateur : un poste ne peut plus se faire passer pour le routeur. DHCP snooping et BPDU Guard visent d’autres protocoles."
    },
    "cvi-q39": {
      "type": "single",
      "correct": "a",
      "explanation": "En IPv6, les routeurs ne fragmentent pas : la découverte du MTU repose sur ICMPv6 (Packet Too Big). NDP et SLAAC en dépendent aussi. On filtre donc type par type, plutôt que de tout bloquer."
    },
    "cvi-q40": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "IPv6 doit bénéficier du même niveau de filtrage, de supervision et de protections de couche 2 qu’IPv4. Le désactiver sans analyse peut casser des services ; l’ignorer laisse un angle mort.",
      "whyWrong": {
        "c": "Peut casser des services et n’est pas recommandé par les éditeurs.",
        "e": "Ignorer IPv6 laisse un canal non surveillé."
      }
    }
  },
};
