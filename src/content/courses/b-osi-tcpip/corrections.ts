// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "b-osi-tcpip",
  questions: {
    "osi-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "Le modèle OSI de référence compte sept couches, de la couche physique (1) à la couche application (7). Le modèle TCP/IP, plus pratique, en compte quatre.",
      "whyWrong": {
        "a": "Quatre est le nombre de couches du modèle TCP/IP.",
        "c": "Le modèle TCP/IP est parfois présenté en cinq couches, mais OSI en compte sept.",
        "d": "Le modèle OSI compte sept couches, pas neuf."
      }
    },
    "osi-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Un commutateur lit l’adresse MAC de destination de la trame et la compare à sa table : c’est la couche liaison. Un routeur, lui, décide à partir de l’adresse IP (couche 3).",
      "whyWrong": {
        "b": "Un répéteur ou un hub travaillent en couche 1, sans lire les adresses.",
        "c": "C’est le niveau d’un routeur, pas d’un commutateur classique.",
        "d": "La couche 7 est celle des applications ; un commutateur classique n’y décide pas."
      }
    },
    "osi-q3": {
      "type": "short",
      "accepted": [
        "paquet",
        "paquets"
      ],
      "explanation": "L’unité de données de la couche réseau est le paquet ; celle de la couche transport est le segment (TCP) ou le datagramme (UDP), celle de la liaison est la trame."
    },
    "osi-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "UDP est sans connexion : il envoie des datagrammes sans poignée de main ni accusé de réception. C’est TCP qui établit une connexion (SYN, SYN-ACK, ACK)."
    },
    "osi-q5": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "DNS, NTP et DHCP échangent de petits messages où le coût d’une connexion est inutile. SSH et HTTPS ont besoin d’un flux fiable et ordonné, donc de TCP (HTTP/3 utilise toutefois QUIC, au-dessus d’UDP).",
      "whyWrong": {
        "b": "SSH s’appuie sur TCP, qui garantit l’ordre et la fiabilité.",
        "e": "HTTPS sur le port 443 en TCP : la variante HTTP/3 est une exception qui n’utilise pas ce port TCP."
      }
    },
    "osi-q6": {
      "type": "single",
      "correct": "c",
      "explanation": "Le client envoie SYN, le serveur répond SYN-ACK, le client confirme par ACK : la connexion est établie des deux côtés avec des numéros de séquence synchronisés.",
      "whyWrong": {
        "b": "FIN sert à fermer la connexion, pas à l’ouvrir.",
        "d": "HELLO et DATA ne font pas partie de la poignée de main TCP.",
        "a": "RST et FIN ne servent pas à établir une connexion."
      }
    },
    "osi-q7": {
      "type": "short",
      "accepted": [
        "22"
      ],
      "explanation": "SSH utilise le port 22/TCP. Parmi les autres ports à connaître : 80 (HTTP), 443 (HTTPS), 25 (SMTP), 53 (DNS), 445 (SMB), 3389 (RDP)."
    },
    "osi-q8": {
      "type": "single",
      "correct": "d",
      "explanation": "ARP associe une adresse IP à une adresse MAC sur le réseau local. Falsifier ces associations est une attaque de couche 2, qui permet par exemple de se placer entre un poste et sa passerelle.",
      "whyWrong": {
        "a": "ARP n’est pas un protocole de transport.",
        "c": "Les attaques de couche 7 visent les applications, pas ARP.",
        "b": "La couche 1 est physique : ARP n’en relève pas."
      }
    },
    "osi-q9": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le pare-feu voit une connexion autorisée vers le port 443 ; le contenu de la requête (et l’injection) est au niveau applicatif. Il faut un WAF et un développement sécurisé : la défense doit exister à plusieurs couches."
    },
    "osi-q10": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Les SYN cookies protègent la poignée de main TCP (couche 4) ; l’inspection ARP dynamique et le 802.1X agissent sur le réseau local (couche 2). Un WAF filtre le contenu HTTP : couche 7, pas 3.",
      "whyWrong": {
        "d": "Un WAF lit les requêtes applicatives : c’est la couche 7."
      }
    },
    "osi-q11": {
      "type": "single",
      "correct": "b",
      "explanation": "En descendant la pile, chaque couche ajoute son en-tête : d’abord TCP (couche 4), puis IP (couche 3), enfin Ethernet (couche 2). Le récepteur les retire dans l’ordre inverse.",
      "whyWrong": {
        "c": "TCP est ajouté avant IP, qui l’enveloppe ensuite.",
        "d": "Ethernet est ajouté en dernier, et non en premier.",
        "a": "IP enveloppe le segment TCP avant la trame Ethernet."
      }
    },
    "osi-q12": {
      "type": "open",
      "model": "La source teste plusieurs ports de la même cible avec des SYN et rompt chaque connexion par un RST : c’est un scan de ports SYN (semi-ouvert). Les ports 22 et 80 répondent SYN-ACK (ouverts), le port 23 répond RST-ACK (fermé). Recommandation : vérifier s’il s’agit d’un scanner de vulnérabilités autorisé ; sinon isoler 10.0.5.23, ouvrir une investigation sur ce poste et durcir les services exposés (22, 80). Une règle IDS peut déclencher sur « N ports distincts contactés par la même source en T secondes ».",
      "criteria": [
        "Identifie un scan de ports SYN.",
        "Distingue ports ouverts (SYN-ACK) et fermé (RST).",
        "Propose une réaction proportionnée (vérification, isolement, investigation)."
      ],
      "explanation": "Un SYN suivi d’un RST sans échange de données est la signature d’un scan : l’attaquant cartographie les services exposés."
    },
    "osi-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le modèle TCP/IP à quatre couches (accès réseau, Internet, transport, application) fusionne les trois couches hautes d’OSI : les applications gèrent elles-mêmes sessions et formats."
    },
    "osi-q14": {
      "type": "short",
      "accepted": [
        "arp"
      ],
      "explanation": "ARP (Address Resolution Protocol) diffuse la question « Qui a cette adresse IP ? » et reçoit la réponse du propriétaire, qui donne son adresse MAC. IPv6 utilise NDP à la place."
    },
    "osi-q15": {
      "type": "open",
      "model": "Chaque couche a ses propres attaques : une protection placée à un seul niveau laisse les autres ouvertes. Un pare-feu à états (couches 3–4) ne voit pas une injection SQL envoyée sur un port 443 autorisé ; il faut un WAF et du code sécurisé (couche 7). À l’inverse, un WAF ne protège pas contre un ARP spoofing sur le réseau local, qui se traite par l’inspection ARP dynamique et le 802.1X (couche 2). En empilant les protections, la défaillance d’une couche ne donne pas accès à tout.",
      "criteria": [
        "Explique que les attaques diffèrent selon la couche.",
        "Donne un premier exemple cohérent (pare-feu et injection SQL, ou autre).",
        "Donne un second exemple à une autre couche."
      ],
      "explanation": "La sécurité se construit à toutes les couches : aucune protection unique ne couvre l’ensemble."
    },
    "osi-q16": {
      "type": "single",
      "correct": "c",
      "explanation": "Le routeur compare l’adresse IP de destination à sa table de routage. Il ne lit ni les ports (rôle d’un pare-feu) ni les noms de domaine (résolus par le DNS avant l’envoi).",
      "whyWrong": {
        "d": "L’adresse MAC ne sert qu’à l’intérieur d’un lien local.",
        "b": "Les ports sont lus par les pare-feu et les hôtes, pas par un routeur.",
        "a": "Les noms de domaine sont résolus par le DNS avant l’envoi."
      }
    },
    "osi-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "La couche présentation traduit les données entre le format de l’application et celui du réseau (encodage, compression, chiffrement). Dans la pratique, TLS et les formats sont gérés par les applications.",
      "whyWrong": {
        "b": "La couche session gère les dialogues, pas le format des données.",
        "c": "La couche transport s’occupe de la fiabilité et des ports.",
        "a": "La couche liaison s’occupe des trames sur un lien local."
      }
    },
    "osi-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "La couche Internet de TCP/IP correspond à la couche réseau d’OSI : c’est celle d’IP, qui adresse et achemine les paquets de réseau en réseau.",
      "whyWrong": {
        "d": "L’accès réseau correspond aux couches 1 et 2 d’OSI.",
        "c": "La couche Transport correspond à la couche 4 d’OSI.",
        "b": "La couche Application regroupe les couches 5 à 7 d’OSI."
      }
    },
    "osi-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "Un WAF lit et analyse les requêtes HTTP (URL, paramètres, en-têtes, corps). Il agit donc au niveau de l’application, là où se situent les injections et le XSS.",
      "whyWrong": {
        "c": "La couche 4 filtre selon les ports, ce que fait un pare-feu classique.",
        "a": "La couche 3 filtre selon les adresses IP.",
        "d": "La couche 2 concerne les adresses MAC et les trames."
      }
    },
    "osi-q20": {
      "type": "truefalse",
      "correct": false,
      "explanation": "OSI est un modèle de référence qui sert de vocabulaire. La pile réellement utilisée sur Internet suit le modèle TCP/IP, plus simple, qui ne reprend pas les couches session et présentation."
    },
    "osi-q21": {
      "type": "single",
      "correct": "c",
      "explanation": "La couche session coordonne les dialogues (ouverture, reprise après coupure, fermeture). Dans TCP/IP, ce rôle est assuré par les applications elles-mêmes.",
      "whyWrong": {
        "d": "La couche présentation gère le format, pas les dialogues.",
        "a": "La couche réseau s’occupe de l’adressage et du routage.",
        "b": "La couche physique transporte les bits."
      }
    },
    "osi-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "La couche liaison transmet des trames, qui encapsulent un paquet IP avec les adresses MAC source et destination et une somme de contrôle.",
      "whyWrong": {
        "b": "Le paquet est l’unité de la couche 3.",
        "a": "Le segment est l’unité de la couche 4 pour TCP.",
        "c": "Le message applicatif est l’unité de la couche 7."
      }
    },
    "osi-q23": {
      "type": "short",
      "accepted": [
        "mac"
      ],
      "explanation": "L’adresse MAC identifie une interface réseau sur le réseau local. Elle est réécrite à chaque saut, alors que l’adresse IP reste la même de bout en bout."
    },
    "osi-q24": {
      "type": "single",
      "correct": "a",
      "explanation": "Quand la destination est hors du réseau local, l’hôte envoie la trame à la passerelle par défaut (un routeur), dont il connaît l’adresse MAC grâce à ARP. Le routeur transmet ensuite le paquet.",
      "whyWrong": {
        "b": "L’attribution des adresses relève du serveur DHCP.",
        "c": "La traduction des noms relève du DNS.",
        "d": "La passerelle ne chiffre pas le trafic."
      }
    },
    "osi-q25": {
      "type": "single",
      "correct": "b",
      "explanation": "L’adresse MAC n’a de sens que sur un lien. À chaque routeur, la trame est reconstruite avec de nouvelles adresses MAC (celles du saut suivant), tandis que les adresses IP source et destination restent inchangées.",
      "whyWrong": {
        "c": "L’adresse MAC change à chaque saut ; elle ne reste pas identique.",
        "a": "Un numéro de port est un champ distinct, qui ne remplace pas l’adresse MAC.",
        "d": "L’adresse MAC n’est pas chiffrée par le routeur."
      }
    },
    "osi-q26": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "e"
      ],
      "explanation": "L’en-tête IP contient les adresses IP, le TTL et le protocole transporté. Les ports sont dans l’en-tête de transport (TCP ou UDP) et les adresses MAC dans l’en-tête Ethernet.",
      "whyWrong": {
        "a": "Les ports se trouvent dans l’en-tête TCP ou UDP, un niveau plus haut.",
        "d": "L’adresse MAC est dans l’en-tête Ethernet (couche 2)."
      }
    },
    "osi-q27": {
      "type": "single",
      "correct": "a",
      "explanation": "Chaque routeur décrémente le TTL ; à zéro, le paquet est détruit et un message ICMP « TTL expiré » est renvoyé. `traceroute` exploite ce mécanisme pour découvrir chaque routeur du chemin.",
      "whyWrong": {
        "d": "Le TTL ne fixe pas un débit.",
        "b": "Le TTL n’identifie pas une application.",
        "c": "Le TTL ne chiffre rien."
      }
    },
    "osi-q28": {
      "type": "truefalse",
      "correct": true,
      "explanation": "ARP ne traverse pas les routeurs. Pour joindre une machine distante, l’hôte résout par ARP l’adresse MAC de sa passerelle, qui prend le relais."
    },
    "osi-q29": {
      "type": "single",
      "correct": "d",
      "explanation": "Une requête DNS et sa réponse tiennent dans un datagramme : la poignée de main TCP serait un surcoût. TCP/53 est utilisé quand la réponse est volumineuse ou pour les transferts de zone.",
      "whyWrong": {
        "c": "UDP ne garantit ni l’ordre ni la livraison.",
        "a": "UDP ne chiffre pas les requêtes.",
        "b": "UDP n’authentifie pas le serveur."
      }
    },
    "osi-q30": {
      "type": "short",
      "accepted": [
        "rst",
        "reset"
      ],
      "explanation": "RST interrompt immédiatement la connexion, sans la fermeture ordonnée de FIN. Un port fermé répond RST à un SYN, et un scanner l’utilise pour fermer ses essais."
    },
    "osi-q31": {
      "type": "single",
      "correct": "c",
      "explanation": "Un port ouvert répond SYN-ACK ; un port fermé répond RST. Un port filtré par un pare-feu ne répond souvent pas du tout, ce qui permet de distinguer les trois états.",
      "whyWrong": {
        "b": "SYN-ACK est la réponse d’un port ouvert.",
        "d": "FIN-ACK ne répond pas à un SYN sur un port fermé.",
        "a": "Un port fermé ne renvoie pas de SYN."
      }
    },
    "osi-q32": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "HTTPS utilise 443, SSH 22 et le bureau à distance de Windows (RDP) 3389. Le port 25 est celui de SMTP et le port 53 celui de DNS.",
      "whyWrong": {
        "e": "Le port 25 est utilisé par SMTP ; HTTP utilise le port 80.",
        "d": "Le port 53 est utilisé par DNS ; SSH utilise le port 22."
      }
    },
    "osi-q33": {
      "type": "truefalse",
      "correct": false,
      "explanation": "TCP assure la fiabilité et l’ordre, pas la confidentialité. Le chiffrement est ajouté par une couche supérieure comme TLS (HTTPS, SMTPS) ou par SSH."
    },
    "osi-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "Le SYN flood remplit la file des connexions « à moitié ouvertes » : le serveur n’accepte plus de nouveaux clients légitimes. Les SYN cookies et la limitation de débit en réduisent l’effet.",
      "whyWrong": {
        "a": "L’ARP spoofing falsifie des associations IP-MAC sur le réseau local.",
        "c": "Le saut de VLAN contourne la segmentation.",
        "d": "L’injection SQL vise une base de données."
      }
    },
    "osi-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "L’inspection ARP dynamique (DAI) vérifie que les réponses ARP correspondent aux associations légitimes (souvent apprises par DHCP snooping) et rejette les autres. Elle agit à la couche 2, là où a lieu l’attaque.",
      "whyWrong": {
        "c": "Les SYN cookies protègent contre le SYN flood.",
        "b": "Un WAF protège une application web, pas la résolution ARP.",
        "a": "Bloquer ICMP n’empêche pas l’empoisonnement ARP."
      }
    },
    "osi-q36": {
      "type": "truefalse",
      "correct": true,
      "explanation": "En UDP, rien ne vérifie que la source existe : l’attaquant envoie une petite requête avec l’adresse de la victime, et un serveur répond par un message bien plus gros vers elle. Le filtrage anti-usurpation (BCP 38) limite le phénomène."
    },
    "osi-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "On part du bas : lien physique, adressage et ARP, route, port, puis application. Cette méthode localise la couche en cause sans modifier au hasard ce qui fonctionne.",
      "whyWrong": {
        "a": "Réinstaller le navigateur sans diagnostic fait perdre du temps.",
        "b": "Redémarrer le DNS de l’entreprise perturbe tout le monde sans preuve de cause.",
        "d": "Tout autoriser sur le pare-feu fragilise la sécurité sans identifier la panne."
      }
    },
    "osi-q38": {
      "type": "single",
      "correct": "a",
      "explanation": "`ping` envoie des requêtes ICMP echo et mesure les réponses. Un échec ne prouve pas la panne : un pare-feu peut bloquer ICMP, d’où l’intérêt de combiner plusieurs tests.",
      "whyWrong": {
        "b": "`arp` affiche la table des voisins locaux.",
        "d": "`ssh` ouvre une session distante.",
        "c": "`nslookup` interroge le DNS."
      }
    },
    "osi-q39": {
      "type": "single",
      "correct": "c",
      "explanation": "traceroute envoie des paquets avec un TTL de 1, 2, 3… Chaque routeur qui détruit un paquet répond par un message ICMP « TTL expiré », ce qui révèle les sauts successifs.",
      "whyWrong": {
        "a": "`ping` teste l’accessibilité, mais n’affiche pas les sauts.",
        "d": "`nslookup` interroge le DNS.",
        "b": "`netstat` liste les connexions locales."
      }
    },
    "osi-q40": {
      "type": "multi",
      "correct": [
        "b",
        "d"
      ],
      "explanation": "Si les adresses IP répondent, les couches 1 à 4 fonctionnent. Il reste la résolution de noms (couche 7) : serveur DNS configuré, joignable et répondant correctement.",
      "whyWrong": {
        "c": "Un câble défectueux empêcherait aussi l’accès par adresse IP.",
        "a": "La passerelle fonctionne puisque les adresses IP sont atteintes."
      }
    },
    "osi-q41": {
      "type": "single",
      "correct": "a",
      "explanation": "Le ping vers la passerelle réussit : la machine a une adresse, le câble fonctionne et la passerelle répond. L’échec porte sur la résolution d’un nom, donc sur le DNS, couche application. On remonte les couches une à une.",
      "whyWrong": {
        "c": "Si le câble était en cause, le ping vers la passerelle échouerait aussi.",
        "d": "La passerelle vient de répondre au ping.",
        "b": "Sans adresse valide, le ping n’aurait pas abouti."
      }
    },
    "osi-q42": {
      "type": "single",
      "correct": "d",
      "explanation": "Un SYN suivi d’un RST indique un refus : aucun service n’écoute sur ce port, ou la connexion est rejetée. Un port ouvert répondrait `[S.]`, et un port filtré ne répondrait généralement rien.",
      "whyWrong": {
        "b": "Un port ouvert répond par un SYN-ACK (`[S.]`), pas par un RST.",
        "c": "Un filtrage silencieux ne produit aucune réponse ; ici une réponse RST est reçue.",
        "a": "Une fin normale passe par des paquets FIN, pas par un RST en réponse à un SYN."
      }
    },
    "osi-q43": {
      "type": "single",
      "correct": "b",
      "explanation": "Beaucoup de demandes d’ouverture vers de nombreux ports, sans suite d’échange, correspondent à une recherche de services ouverts. Un transfert légitime utilise une connexion établie sur un port.",
      "whyWrong": {
        "c": "Un transfert utilise une connexion établie, avec des paquets de données.",
        "d": "Le DNS utilise surtout UDP sur le port 53, avec des requêtes de noms.",
        "a": "Une renégociation se déroule à l’intérieur d’une connexion déjà établie."
      }
    },
    "osi-q44": {
      "type": "short",
      "accepted": [
        "ss",
        "ss -tn",
        "ss -tln",
        "ss -tlnp"
      ],
      "explanation": "`ss` remplace progressivement `netstat` : `ss -tln` liste les ports TCP en écoute, `ss -tn` les connexions établies, et `-p` ajoute le processus associé."
    }
  },
};
