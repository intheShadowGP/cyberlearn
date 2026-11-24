// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "b-routage-dns-dhcp-nat",
  questions: {
    "rdn-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "La règle de correspondance au préfixe le plus long retient la route la plus spécifique. /8 est plus long que /0, donc le routeur suit 10.0.0.0/8. La route par défaut ne sert que si aucune autre ne correspond.",
      "whyWrong": {
        "c": "La route par défaut est la moins spécifique : elle n’est utilisée qu’en dernier recours."
      }
    },
    "rdn-q2": {
      "type": "short",
      "accepted": [
        "0.0.0.0/0",
        "0.0.0.0 /0"
      ],
      "explanation": "La route par défaut 0.0.0.0/0 couvre toutes les destinations ; étant la moins spécifique, elle n’est choisie qu’en dernier recours."
    },
    "rdn-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Pour un réseau directement connecté, le routeur atteint les machines par l’interface sans intermédiaire : la passerelle est « elle-même » (souvent notée 0.0.0.0 dans la table)."
    },
    "rdn-q4": {
      "type": "single",
      "correct": "a",
      "explanation": "OSPF est un protocole intérieur (IGP) : il distribue les routes au sein d’une organisation. BGP est le protocole extérieur qui échange l’accessibilité entre systèmes autonomes et forme la table de routage d’Internet.",
      "whyWrong": {
        "c": "Aucun des deux ne chiffre le trafic : ce sont des protocoles de routage.",
        "d": "L’attribution d’adresses relève du DHCP, la traduction des noms du DNS."
      }
    },
    "rdn-q5": {
      "type": "short",
      "accepted": [
        "RPKI",
        "rpki"
      ],
      "explanation": "La RPKI (Resource Public Key Infrastructure) associe cryptographiquement un préfixe au système autonome autorisé à l’annoncer ; la validation d’origine des routes (ROV) rejette les annonces invalides, limitant les détournements."
    },
    "rdn-q6": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Authentifier OSPF, le limiter aux interfaces utiles et filtrer ou valider les annonces BGP empêchent l’injection de fausses routes.",
      "whyWrong": {
        "b": "Accepter n’importe quelle annonce est précisément la faiblesse historique qui rend possibles les détournements."
      }
    },
    "rdn-q7": {
      "type": "single",
      "correct": "d",
      "explanation": "La résolution descend la hiérarchie : serveurs racine (qui gère .fr ?), serveurs de .fr (qui gère exemple.fr ?), puis serveurs faisant autorité pour exemple.fr (adresse de www).",
      "whyWrong": {
        "b": "Le DHCP attribue des adresses ; le pare-feu ne fait pas de résolution de noms.",
        "c": "L’ordre est inversé : on part de la racine, jamais du domaine final."
      }
    },
    "rdn-q8": {
      "type": "truefalse",
      "correct": false,
      "explanation": "DNSSEC signe les enregistrements : il garantit authenticité et intégrité, mais les requêtes et réponses restent en clair. La confidentialité relève de DNS over HTTPS (DoH) ou DNS over TLS (DoT)."
    },
    "rdn-q9": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Empoisonnement de cache, usurpation locale et exfiltration par requêtes sont des menaces réelles sur le DNS.",
      "whyWrong": {
        "a": "Un débordement de tampon vise un logiciel, pas un câble : cette proposition n’a pas de sens."
      }
    },
    "rdn-q10": {
      "type": "short",
      "accepted": [
        "TTL",
        "ttl"
      ],
      "explanation": "Le TTL (Time To Live) de chaque enregistrement fixe la durée de conservation en cache. Un TTL court facilite les changements mais augmente la charge ; il influe aussi sur la persistance d’un empoisonnement."
    },
    "rdn-q11": {
      "type": "single",
      "correct": "c",
      "explanation": "L’échange DHCP suit DORA : Discover (le client cherche), Offer (un serveur propose), Request (le client demande l’offre choisie), Acknowledge (le serveur confirme et fixe le bail).",
      "whyWrong": {
        "d": "Syn, Syn-Ack, Ack et Fin sont des étapes de TCP, sans rapport avec DHCP."
      }
    },
    "rdn-q12": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le client retient la première offre reçue. Un serveur pirate plus rapide que le serveur légitime peut donc imposer sa passerelle ou son DNS : d’où l’intérêt du DHCP snooping."
    },
    "rdn-q13": {
      "type": "single",
      "correct": "d",
      "explanation": "Le PAT (translation de ports, ou surcharge) partage une seule adresse publique entre plusieurs machines internes en les distinguant par le port source réécrit. C’est la forme de NAT la plus courante chez les particuliers et en entreprise.",
      "whyWrong": {
        "b": "Le NAT ne chiffre rien : il réécrit seulement des adresses et des ports.",
        "c": "Le PAT est surtout employé en IPv4, précisément pour économiser les adresses."
      }
    },
    "rdn-q14": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le NAT masque les adresses internes et bloque les connexions entrantes non sollicitées, ce qui est un effet de bord utile, mais il ne filtre pas le contenu ni les connexions sortantes : ce n’est pas un pare-feu et il ne le remplace pas."
    },
    "rdn-q15": {
      "type": "open",
      "model": "Le NAT apporte surtout le partage d’adresses (plusieurs machines derrière une adresse publique) ; par effet de bord, il masque les adresses internes et empêche l’ouverture spontanée de connexions entrantes, ce qui réduit l’exposition. Mais il ne filtre pas le contenu, laisse passer tout ce que les machines initient vers l’extérieur (y compris un logiciel malveillant qui rappelle son serveur) et ne protège pas entre machines internes : ce n’est pas un pare-feu. En IPv6, chaque poste a une adresse globale et il n’y a plus de NAT pour masquer quoi que ce soit : la protection repose entièrement sur un pare-feu explicitement configuré (bloquer les connexions entrantes non sollicitées, filtrer selon le besoin). Il faut donc transférer en IPv6 la politique de filtrage que l’on croyait, à tort, assurée par le NAT.",
      "criteria": [
        "Le rôle réel du NAT (partage d’adresses, masquage par effet de bord) est expliqué.",
        "Il est dit clairement que le NAT n’est pas un pare-feu.",
        "Le changement en IPv6 (adresses globales, pas de NAT) est décrit.",
        "La nécessité d’un pare-feu explicite en IPv6 est affirmée."
      ],
      "explanation": "Beaucoup d’incidents viennent de cette confusion : exposer en IPv6 des services qu’on croyait « cachés » par le NAT en IPv4."
    },
    "rdn-q16": {
      "type": "open",
      "model": "Voie 1 — serveur DHCP pirate : l’attaquant répond aux demandes DHCP pour imposer son adresse comme serveur DNS (ou comme passerelle), puis renvoie de fausses résolutions dirigeant les utilisateurs vers ses propres serveurs. Protection : DHCP snooping (n’accepter les réponses DHCP que du port du vrai serveur). Voie 2 — usurpation ou empoisonnement de la résolution de noms : répondre à la place du résolveur sur le réseau local, ou empoisonner son cache, pour associer un nom à une adresse contrôlée. Protections : résolveur de confiance imposé, DNS chiffré (DoH/DoT) vers ce résolveur, DNSSEC côté validation, inspection ARP pour empêcher l’interception préalable. Dans les deux cas, le certificat TLS invalide des sites bancaires est un signal : un site légitime présente un certificat valide, et l’avertissement du navigateur ne doit pas être ignoré.",
      "criteria": [
        "Deux voies distinctes sont décrites (par exemple DHCP pirate et usurpation DNS).",
        "Une protection pertinente est associée à chacune.",
        "Le rôle de TLS ou de l’avertissement de certificat comme garde-fou est mentionné."
      ],
      "explanation": "Détourner la résolution de noms est une étape classique d’une attaque de l’intercepteur ; TLS reste la dernière ligne de défense visible par l’utilisateur."
    },
    "rdn-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "Quand la destination n’est pas dans son réseau local, le poste remet le paquet à sa passerelle par défaut, un routeur, qui se charge de le faire suivre vers le bon réseau.",
      "whyWrong": {
        "d": "La traduction des noms est assurée par le DNS, pas par la passerelle.",
        "c": "L’attribution des adresses relève du DHCP."
      }
    },
    "rdn-q18": {
      "type": "single",
      "correct": "c",
      "explanation": "À préfixe égal, le routeur départage les sources de routes par leur distance administrative : plus elle est faible, plus la source est jugée fiable. La route statique l’emporte donc ici ; la métrique ne sert qu’entre routes de même source.",
      "whyWrong": {
        "a": "Une route dynamique n’est pas prioritaire par nature : tout dépend de la distance administrative.",
        "d": "Un routeur accepte plusieurs sources pour un même préfixe et n’en installe qu’une."
      }
    },
    "rdn-q19": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un routeur conserve les adresses IP source et destination : il décrémente seulement le TTL. Ce sont les adresses MAC de la trame qui sont réécrites à chaque saut, puisque chaque lien a sa propre trame."
    },
    "rdn-q20": {
      "type": "short",
      "accepted": [
        "prochain saut",
        "next hop",
        "prochain routeur"
      ],
      "explanation": "Le prochain saut (next hop) est l’adresse du routeur voisin vers lequel le paquet est envoyé. Pour un réseau directement connecté, il n’y en a pas : la destination est joignable par l’interface."
    },
    "rdn-q21": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Une entrée de table de routage indique le préfixe, le prochain saut, l’interface de sortie et une métrique ou distance qui départage les routes concurrentes. Elle ne contient ni le contenu des paquets ni les comptes du routeur.",
      "whyWrong": {
        "a": "Un routeur ne conserve pas le contenu des paquets : il les fait suivre.",
        "e": "Les comptes d’administration se trouvent dans la configuration, pas dans la table de routage."
      }
    },
    "rdn-q22": {
      "type": "single",
      "correct": "b",
      "explanation": "Avec un protocole à états de liens, chaque routeur reçoit la description de tous les liens de sa zone, reconstruit la carte complète et calcule les plus courts chemins. Cela accélère la convergence quand la topologie change.",
      "whyWrong": {
        "d": "C’est le principe des protocoles à vecteur de distance, pas d’OSPF."
      }
    },
    "rdn-q23": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les attributs BGP (préférence locale, longueur du chemin d’AS, accords commerciaux entre opérateurs) permettent d’appliquer des politiques. Le plus court chemin n’est qu’un critère parmi d’autres, ce qui rend le routage mondial dépendant de la confiance entre opérateurs."
    },
    "rdn-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "La correspondance au préfixe le plus long s’applique aussi sur Internet : tout routeur qui reçoit le /24 le préfère au /23 légitime. C’est pourquoi un détournement par un préfixe plus spécifique est redoutable, et pourquoi on filtre les annonces et on valide leur origine (RPKI).",
      "whyWrong": {
        "d": "BGP ne départage pas selon l’ancienneté de l’annonce.",
        "a": "Rien n’est chiffré dans une annonce de route."
      }
    },
    "rdn-q25": {
      "type": "short",
      "accepted": [
        "système autonome",
        "systeme autonome",
        "autonomous system"
      ],
      "explanation": "Un système autonome (AS) regroupe les réseaux d’un opérateur ou d’une grande organisation sous une politique de routage commune. BGP échange les routes entre systèmes autonomes, repérés par leur numéro."
    },
    "rdn-q26": {
      "type": "multi",
      "correct": [
        "a",
        "d"
      ],
      "explanation": "MPLS fait choisir le chemin à l’entrée du réseau de l’opérateur ; les routeurs suivants ne lisent que l’étiquette. Cela permet l’ingénierie de trafic et des VPN isolés, mais n’apporte aucun chiffrement.",
      "whyWrong": {
        "b": "MPLS isole les flux logiquement, sans les chiffrer : ajouter IPsec reste nécessaire pour la confidentialité.",
        "c": "Les adresses IP des postes ne sont pas modifiées ; l’étiquette est ajoutée devant le paquet."
      }
    },
    "rdn-q27": {
      "type": "single",
      "correct": "a",
      "explanation": "L’enregistrement A associe un nom à une adresse IPv4 ; AAAA fait de même pour IPv6, MX désigne les serveurs de messagerie et PTR permet la résolution inverse, de l’adresse vers le nom.",
      "whyWrong": {
        "c": "AAAA associe un nom à une adresse IPv6, pas IPv4.",
        "d": "MX indique où livrer le courrier du domaine.",
        "b": "PTR fait l’inverse : de l’adresse vers le nom."
      }
    },
    "rdn-q28": {
      "type": "single",
      "correct": "c",
      "explanation": "Le résolveur récursif (celui du fournisseur, de l’entreprise ou public) interroge la hiérarchie pour le compte du client et met les réponses en cache. Le serveur faisant autorité détient les enregistrements officiels d’une zone et répond sans interroger d’autres serveurs.",
      "whyWrong": {
        "b": "Les rôles sont inversés dans cette proposition.",
        "d": "Les deux utilisent UDP et TCP selon la taille et le type d’échange."
      }
    },
    "rdn-q29": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le résolveur conserve la réponse tant que son TTL n’est pas échu : un enregistrement falsifié reste donc servi jusqu’à l’expiration, sauf purge manuelle du cache. D’où l’intérêt de DNSSEC, qui permet de rejeter la réponse à l’arrivée."
    },
    "rdn-q30": {
      "type": "multi",
      "correct": [
        "b",
        "d"
      ],
      "explanation": "Une exfiltration encode les données dans les noms interrogés : sous-domaines longs ou aléatoires vers un même domaine peu connu, volume de requêtes inhabituel, enregistrements TXT. Les requêtes courantes vers le DNS interne et les réponses en cache sont normales.",
      "whyWrong": {
        "c": "Interroger le DNS interne est le comportement normal de tous les postes.",
        "a": "Une réponse en cache est le fonctionnement habituel d’un résolveur."
      }
    },
    "rdn-q31": {
      "type": "single",
      "correct": "d",
      "explanation": "Les diffusions DHCP ne franchissent pas les routeurs. Le relais les convertit en messages dirigés vers le serveur, qui peut ainsi servir plusieurs réseaux sans qu’on installe un serveur dans chacun.",
      "whyWrong": {
        "b": "Le relais ne chiffre rien : il transmet les messages au serveur.",
        "c": "La traduction d’adresses est le rôle du NAT."
      }
    },
    "rdn-q32": {
      "type": "single",
      "correct": "b",
      "explanation": "L’attaquant envoie de nombreuses requêtes avec de fausses adresses MAC pour épuiser les adresses disponibles. Les clients légitimes n’obtiennent plus de bail, et un serveur pirate peut alors prendre le relais. Le port security et la limitation du débit DHCP par port la contrent.",
      "whyWrong": {
        "c": "Un serveur DHCP ne stocke pas de mots de passe : cette attaque vise sa disponibilité.",
        "a": "La table de routage n’est pas concernée par des requêtes DHCP."
      }
    },
    "rdn-q33": {
      "type": "single",
      "correct": "a",
      "explanation": "La redirection de port (DNAT) fait suivre les connexions entrantes reçues sur l’adresse publique et un port donné vers un service interne. Elle expose ce service à Internet : il faut donc la filtrer et la limiter au strict nécessaire.",
      "whyWrong": {
        "b": "C’est la translation de ports des connexions sortantes (PAT), pas la redirection entrante."
      }
    },
    "rdn-q34": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Vu d’Internet, toutes les connexions portent l’adresse publique du routeur. Pour retrouver le poste d’origine, il faut le journal de translation du routeur (adresse et port source, horodatage), à conserver pour l’investigation."
    },
    "rdn-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "Si la connectivité par adresse fonctionne, la couche réseau et la passerelle sont bonnes : seul le passage du nom à l’adresse échoue. On vérifie le serveur DNS configuré, sa joignabilité et sa réponse (nslookup ou dig).",
      "whyWrong": {
        "b": "Sans route par défaut, 8.8.8.8 ne répondrait pas non plus.",
        "d": "Un câble défectueux couperait toute communication, y compris vers 8.8.8.8."
      }
    },
    "rdn-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "La plage 169.254.0.0/16 est la plage lien-local d’IPv4 : le poste s’y attribue une adresse quand aucun serveur DHCP ne répond. On vérifie alors le lien, le VLAN, la joignabilité du serveur ou du relais DHCP.",
      "whyWrong": {
        "c": "Cette plage n’est pas routable sur Internet.",
        "b": "Une adresse statique ne serait pas choisie dans cette plage réservée."
      }
    },
    "rdn-q37": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "traceroute situe la coupure sur le chemin, dig ou nslookup contrôle la résolution, ip route ou route print montre la route retenue. sha256sum et ssh-keygen servent à d’autres usages.",
      "whyWrong": {
        "b": "sha256sum calcule une empreinte de fichier ; il ne dit rien du réseau.",
        "e": "ssh-keygen sert à créer des clés d’authentification, pas à diagnostiquer un chemin."
      }
    },
    "rdn-q38": {
      "type": "short",
      "accepted": [
        "traceroute",
        "tracert",
        "tracepath"
      ],
      "explanation": "traceroute (Linux, macOS) ou tracert (Windows) envoie des paquets dont le TTL augmente pas à pas ; chaque routeur qui rejette un paquet expiré révèle son adresse, ce qui dessine le chemin."
    },
    "rdn-q39": {
      "type": "single",
      "correct": "b",
      "explanation": "Un poste qui joint son réseau local mais rien d’autre, même par adresse, n’atteint pas son routeur : passerelle absente, mauvaise ou injoignable. On la lit dans la configuration puis on la teste avec ping.",
      "whyWrong": {
        "d": "Le DNS n’intervient pas quand on joint une destination par son adresse.",
        "c": "Le poste possède déjà une adresse : le pool n’est pas en cause."
      }
    },
    "rdn-q40": {
      "type": "open",
      "model": "On procède du plus proche au plus lointain. 1) Poste : vérifier l’adresse IP, le masque, la passerelle et le serveur DNS obtenus (un bail DHCP incorrect ou une configuration statique obsolète est fréquent). 2) Connectivité : ping de la passerelle, puis du serveur par son adresse ; en cas d’échec, traceroute pour situer la coupure. 3) Résolution : interroger le nom avec dig ou nslookup contre le DNS du poste puis contre un autre résolveur ; comparer avec le poste d’un collègue. 4) Cache et fichier hosts : vider le cache DNS local et vérifier qu’aucune entrée locale ne détourne le nom. 5) Serveur : tester le port du service. La comparaison avec un poste qui fonctionne isole rapidement la différence ; une résolution vers une adresse inattendue doit faire envisager un détournement.",
      "criteria": [
        "La démarche est ordonnée, du poste vers le serveur.",
        "Elle distingue la connectivité (adresse) de la résolution de noms.",
        "Elle cite au moins deux outils ou vérifications concrets (ping, traceroute, dig, cache, fichier hosts).",
        "Elle compare avec un poste qui fonctionne ou envisage un détournement."
      ],
      "explanation": "Séparer connectivité et résolution de noms, puis comparer avec un poste sain, est la méthode la plus rapide pour localiser une panne réseau."
    }
  },
};
