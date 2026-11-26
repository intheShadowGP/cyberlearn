// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "b-perimetre-vpn-wifi",
  questions: {
    "pvw-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "Le pare-feu à états tient une table des connexions : une règle autorisant une connexion sortante laisse automatiquement revenir ses réponses, sans ouvrir de règle entrante. Sans état, il faudrait autoriser explicitement le trafic de retour, bien plus risqué.",
      "whyWrong": {
        "c": "Un pare-feu filtre ; le chiffrement relève d’un VPN ou de TLS.",
        "a": "L’attribution d’adresses est le rôle du DHCP.",
        "d": "Le pare-feu à états ne remplace pas le serveur DNS."
      }
    },
    "pvw-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "Le reverse proxy se place devant les serveurs publiés : il reçoit les requêtes entrantes, termine le TLS, répartit la charge et héberge souvent un WAF. Le proxy direct, lui, filtre le trafic sortant des clients internes.",
      "whyWrong": {
        "b": "C’est le rôle du proxy direct, pas du reverse proxy.",
        "d": "Filtrer les sites visités par un poste relève d’un agent local ou d’un proxy sortant.",
        "a": "Un reverse proxy ne se place pas dans le serveur DNS et n’accélère pas la résolution."
      }
    },
    "pvw-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le WAF bloque des attaques connues et apporte une défense en profondeur, mais il se contourne et ne corrige pas la cause. Le code doit rester sécurisé : validation des entrées, contrôle d’accès, requêtes paramétrées."
    },
    "pvw-q4": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Refus par défaut, filtrage du sortant et journalisation forment la base d’un filtrage sérieux.",
      "whyWrong": {
        "d": "Autoriser tout le sortant ouvre la voie à l’exfiltration et au rappel vers un serveur de commande."
      }
    },
    "pvw-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "L’IDS observe une copie du trafic et alerte, sans pouvoir l’arrêter ; l’IPS est sur le chemin et peut bloquer, au prix d’un risque de faux positif qui coupe du trafic légitime.",
      "whyWrong": {
        "d": "Ni l’un ni l’autre ne chiffre le trafic : ils l’analysent.",
        "b": "L’IDS et l’IPS ne dépendent pas du type de réseau, Wi-Fi ou filaire.",
        "c": "Les deux équipements diffèrent : l’un détecte, l’autre peut bloquer."
      }
    },
    "pvw-q6": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Étant en coupure, l’IPS applique ses décisions au trafic réel : une signature trop large peut bloquer une application légitime. D’où la mise au point progressive et le suivi des faux positifs."
    },
    "pvw-q7": {
      "type": "short",
      "accepted": [
        "ip.addr == 203.0.113.7",
        "ip.addr==203.0.113.7",
        "ip.addr eq 203.0.113.7"
      ],
      "explanation": "ip.addr == 203.0.113.7 conserve les paquets dont l’adresse source ou destination est cette adresse. Pour une direction précise, on utilise ip.src ou ip.dst."
    },
    "pvw-q8": {
      "type": "open",
      "model": "Le contenu est chiffré, mais la capture révèle les métadonnées : adresses et ports source et destination, volume et horodatage de chaque échange, durée et régularité des connexions, nom de serveur annoncé dans le handshake TLS (SNI), certificat présenté et empreinte de la négociation (JA3/JA4). On exploite ces éléments en cherchant la régularité (balise), les destinations récentes ou peu réputées, les volumes anormaux pour l’hôte, et en recoupant avec les journaux DNS et proxy. On peut aussi, dans un cadre maîtrisé et déclaré, déchiffrer le trafic via un proxy d’inspection TLS d’entreprise pour voir le contenu.",
      "criteria": [
        "Les métadonnées observables malgré le chiffrement sont citées (adresses, volumes, régularité, SNI/certificat).",
        "Une méthode d’exploitation est donnée (régularité, réputation, recoupement avec d’autres journaux).",
        "Au moins une limite ou une alternative (inspection TLS maîtrisée) est mentionnée."
      ],
      "explanation": "Le chiffrement protège le contenu, pas le comportement : la forme des flux suffit souvent à détecter une activité malveillante."
    },
    "pvw-q9": {
      "type": "single",
      "correct": "d",
      "explanation": "En tunnel complet, tout le trafic du poste traverse le VPN (l’entreprise filtre tout) ; en tunnel scindé, seul le trafic vers l’entreprise l’emprunte, le reste sort directement, ce qui expose davantage le poste.",
      "whyWrong": {
        "c": "Les deux modes chiffrent ce qui passe dans le tunnel.",
        "a": "Le tunnel complet est chiffré, comme le tunnel scindé.",
        "b": "Le choix a des conséquences de sécurité : visibilité et filtrage du trafic du poste."
      }
    },
    "pvw-q10": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les passerelles VPN sont des cibles de choix : plusieurs intrusions majeures ont exploité une faille non corrigée sur ce type d’équipement. Mises à jour prioritaires, MFA et surveillance des accès sont indispensables."
    },
    "pvw-q11": {
      "type": "single",
      "correct": "c",
      "explanation": "WPA3-Personnel remplace l’échange de WPA2 par SAE, qui empêche les attaques par dictionnaire menées hors ligne à partir d’une capture, et impose la protection des trames de gestion.",
      "whyWrong": {
        "d": "WPA3 ne vise pas le débit mais la sécurité de l’authentification.",
        "b": "Au contraire : WPA3 renforce le chiffrement.",
        "a": "WPA3 ne se limite pas à l’adressage IPv6 : il change l’authentification et la protection."
      }
    },
    "pvw-q12": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "802.1X authentifie chaque utilisateur avant d’ouvrir le port, RADIUS vérifie l’identité et peut renvoyer le VLAN, et le mode entreprise supprime le secret partagé unique.",
      "whyWrong": {
        "d": "TACACS+ sert à l’authentification, l’autorisation et la traçabilité (souvent pour l’administration des équipements), pas à chiffrer des fichiers."
      }
    },
    "pvw-q13": {
      "type": "single",
      "correct": "d",
      "explanation": "La DMZ héberge les services accessibles depuis Internet dans une zone tampon isolée : un serveur public compromis n’atteint pas librement le cœur du réseau.",
      "whyWrong": {
        "c": "Une DMZ isole des services publiés ; elle n’améliore pas le Wi-Fi.",
        "a": "Les sauvegardes hors site ne relèvent pas de la DMZ.",
        "b": "Une DMZ se construit avec des pare-feux ; elle ne les remplace pas."
      }
    },
    "pvw-q14": {
      "type": "short",
      "accepted": [
        "SD-WAN",
        "sd-wan",
        "SDWAN"
      ],
      "explanation": "Le SD-WAN (réseau étendu piloté par logiciel) relie des sites via plusieurs liens, choisit le chemin par application et chiffre les liaisons ; son plan de pilotage doit lui-même être sécurisé."
    },
    "pvw-q15": {
      "type": "truefalse",
      "correct": false,
      "explanation": "C’est l’inverse : Zero Trust ne fait pas confiance par défaut, même à l’intérieur. Chaque accès est authentifié et autorisé, et la micro-segmentation limite les déplacements latéraux."
    },
    "pvw-q16": {
      "type": "open",
      "model": "Risque : le serveur web étant exposé à Internet, sa compromission (faille applicative, service vulnérable) donne un pied dans le même réseau que les postes et les serveurs internes, donc un accès direct pour se déplacer latéralement et atteindre des données sensibles. Architecture : placer le serveur web dans une DMZ, séparée d’Internet et du réseau interne par un pare-feu ; n’autoriser depuis Internet que les ports du service (443) vers la DMZ ; n’autoriser de la DMZ vers l’interne que les flux strictement nécessaires (par exemple vers une base précise, sur un port précis), et rien d’autre ; interdire tout accès direct Internet → interne. Compléter par un reverse proxy avec WAF devant le serveur, la journalisation des flux inter-zones, et une logique de micro-segmentation côté interne.",
      "criteria": [
        "Le risque de déplacement latéral depuis le serveur exposé est expliqué.",
        "Une DMZ isolée par pare-feu est proposée.",
        "Les flux autorisés sont restreints au strict nécessaire entre les zones.",
        "Une mesure complémentaire (WAF, journalisation, micro-segmentation) est ajoutée."
      ],
      "explanation": "La segmentation ne supprime pas la vulnérabilité du serveur, mais elle contient l’impact d’une compromission : c’est l’objectif d’une architecture en zones."
    },
    "pvw-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "Une politique de refus par défaut ne laisse passer que ce qui a été justifié et ouvert. À l’inverse, tout autoriser sauf une liste d’interdits oblige à prévoir toutes les attaques.",
      "whyWrong": {
        "c": "C’est la logique inverse, qui laisse passer toute attaque non prévue.",
        "a": "Un pare-feu applique une règle finale, il ne met pas en attente le trafic inconnu.",
        "d": "Un pare-feu ne redirige pas le trafic inconnu vers un serveur de messagerie."
      }
    },
    "pvw-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "Le pare-feu s’arrête à la première règle qui correspond. Une règle générale placée trop haut masque les règles précises qui suivent : l’ordre des règles fait partie de la politique.",
      "whyWrong": {
        "c": "Le pare-feu ne combine pas les règles : il applique la première qui correspond.",
        "b": "Le pare-feu démarre : il applique la règle placée en tête.",
        "d": "Une règle « autoriser tout » concerne tous les sens de circulation."
      }
    },
    "pvw-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "TLS chiffre le contenu : le pare-feu voit les adresses, les ports et quelques métadonnées (SNI, certificat), pas les requêtes. Pour lire le contenu, il faut un proxy d’inspection TLS déclaré, avec ses contraintes de vie privée et de sécurité."
    },
    "pvw-q20": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Le reverse proxy termine le TLS, répartit la charge et peut héberger un WAF. L’attribution d’adresses relève du DHCP.",
      "whyWrong": {
        "b": "Un reverse proxy ne gère pas l’adressage : c’est le rôle du DHCP."
      }
    },
    "pvw-q21": {
      "type": "single",
      "correct": "b",
      "explanation": "Un port miroir (SPAN) recopie le trafic d’un ou plusieurs ports vers la sonde ; un TAP, dispositif passif sur le lien, fait de même sans charger le commutateur. L’IDS n’est ainsi pas sur le chemin du trafic.",
      "whyWrong": {
        "a": "Le DNS ne transporte pas le trafic à analyser.",
        "c": "Une sonde ne dépend pas des postes pour obtenir le trafic : elle copie les flux passifs.",
        "d": "La configuration d’un pare-feu ne contient pas les paquets."
      }
    },
    "pvw-q22": {
      "type": "single",
      "correct": "a",
      "explanation": "Un faux positif est une alerte sans attaque réelle. Un faux négatif est une attaque non détectée, un vrai positif une attaque correctement signalée. Réduire les faux positifs rend les alertes exploitables.",
      "whyWrong": {
        "c": "Un faux négatif est l’inverse : une attaque qui passe sans alerte.",
        "b": "Un vrai positif correspond à une attaque réellement détectée.",
        "d": "Un rebond n’est pas un terme de détection d’alertes."
      }
    },
    "pvw-q23": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Une signature décrit une attaque connue. Une attaque nouvelle ou modifiée peut lui échapper : c’est pourquoi on complète la détection par signatures par une analyse d’anomalies et par les journaux des hôtes."
    },
    "pvw-q24": {
      "type": "short",
      "accepted": [
        "SNI",
        "sni"
      ],
      "explanation": "Le SNI (Server Name Indication) annonce le nom du site demandé avant le chiffrement. Il permet de repérer une destination suspecte même quand le contenu est chiffré, même si certains déploiements récents tendent à le chiffrer."
    },
    "pvw-q25": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Un balayage se reconnaît à une source unique qui teste de nombreux ports, avec des échanges très courts : SYN suivis d’un RST ou d’un silence. Une longue connexion HTTPS vers un serveur connu est un comportement normal.",
      "whyWrong": {
        "b": "Une connexion longue et unique n’a rien d’un balayage, qui multiplie les tentatives."
      }
    },
    "pvw-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "Un VPN site à site relie en permanence deux réseaux, par exemple un siège et une agence, à travers Internet. L’accès individuel d’un télétravailleur relève plutôt d’un VPN d’accès distant.",
      "whyWrong": {
        "a": "C’est l’accès distant, qui connecte un utilisateur et non deux réseaux.",
        "c": "Un VPN site à site ne remplace pas les pare-feux : les sites gardent leur filtrage.",
        "b": "Deux serveurs dans la même salle n’ont pas besoin de VPN."
      }
    },
    "pvw-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "Le VPN ouvre l’accès au réseau interne : un identifiant dérobé par hameçonnage ne doit pas suffire. Le second facteur bloque l’essentiel des intrusions par mot de passe, sans dispenser de mettre à jour la passerelle.",
      "whyWrong": {
        "a": "L’authentification multifacteur n’accélère pas le chiffrement du tunnel.",
        "d": "Le MFA ne corrige pas une faille du logiciel de la passerelle : les mises à jour restent nécessaires.",
        "b": "Elle ne remplace pas la journalisation des connexions."
      }
    },
    "pvw-q28": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un VPN chiffre le transport entre le poste et la passerelle. Il ne nettoie pas le poste : un poste infecté qui se connecte au VPN peut même propager la menace dans le réseau de l’entreprise."
    },
    "pvw-q29": {
      "type": "single",
      "correct": "d",
      "explanation": "En tunnel scindé, le poste parle en même temps à Internet, sans contrôle de l’entreprise, et au réseau interne par le tunnel. S’il est compromis, un attaquant peut passer par lui pour atteindre l’intérieur.",
      "whyWrong": {
        "c": "Le trafic vers l’entreprise reste chiffré dans le tunnel.",
        "a": "L’authentification n’est pas affectée par le choix du mode de tunnel.",
        "b": "Le tunnel scindé n’interrompt pas les mises à jour du poste."
      }
    },
    "pvw-q30": {
      "type": "short",
      "accepted": [
        "WireGuard",
        "wireguard"
      ],
      "explanation": "WireGuard repose sur un code très court, facile à auditer, et impose une cryptographie moderne sans négociation d’algorithmes. Il est performant et intégré à plusieurs systèmes."
    },
    "pvw-q31": {
      "type": "single",
      "correct": "b",
      "explanation": "Chaque utilisateur a son propre compte : on le désactive sans toucher aux autres, et les journaux montrent qui s’est connecté. Avec un secret partagé, un départ oblige à le changer sur tous les appareils.",
      "whyWrong": {
        "c": "La portée dépend de la radio, pas du mode d’authentification.",
        "a": "Le chiffrement reste nécessaire : 802.1X ajoute l’authentification.",
        "d": "Le 802.1X ne dispense pas de mettre à jour les bornes."
      }
    },
    "pvw-q32": {
      "type": "single",
      "correct": "c",
      "explanation": "L’attaquant diffuse le même nom de réseau avec un signal plus fort : les appareils s’y connectent et le trafic passe par lui. En 802.1X, la parade est de faire vérifier par les clients le certificat du serveur d’authentification.",
      "whyWrong": {
        "b": "Une borne de répartition légitime n’est pas une attaque.",
        "d": "Un evil twin n’est pas un mode de WPA3.",
        "a": "Un serveur RADIUS de secours est une mesure de disponibilité, sans rapport avec cette attaque."
      }
    },
    "pvw-q33": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un réseau invité héberge des appareils non maîtrisés. Le placer dans un VLAN dédié, sans route vers l’interne, empêche un appareil infecté de rebondir vers les postes et les serveurs."
    },
    "pvw-q34": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "L’authentification individuelle, la validation du certificat du serveur (contre l’evil twin) et l’isolement des invités sont des mesures solides. Masquer le nom du réseau n’arrête personne : il reste visible dans les trames.",
      "whyWrong": {
        "a": "Un nom masqué se découvre en observant les trames radio : ce n’est pas une protection."
      }
    },
    "pvw-q35": {
      "type": "short",
      "accepted": [
        "RADIUS",
        "radius"
      ],
      "explanation": "RADIUS reçoit la demande relayée par la borne ou le commutateur, vérifie l’identité auprès de l’annuaire et renvoie l’autorisation, avec éventuellement le VLAN à attribuer."
    },
    "pvw-q36": {
      "type": "single",
      "correct": "a",
      "explanation": "Un serveur exposé est le plus susceptible d’être compromis : on interdit qu’il initie des connexions vers l’interne, hors flux précis et justifiés. Les accès entrants vers le service publié et ceux des postes vers la DMZ sont normaux.",
      "whyWrong": {
        "d": "C’est le flux prévu : le service publié doit être joignable.",
        "b": "Un poste interne doit pouvoir consulter un service publié en DMZ.",
        "c": "La journalisation est une bonne pratique à conserver."
      }
    },
    "pvw-q37": {
      "type": "single",
      "correct": "a",
      "explanation": "Qui accède aux interfaces d’administration peut modifier les règles et les routes. On les réserve à des postes d’administration dédiés, souvent via un rebond, hors de portée des postes ordinaires et d’Internet.",
      "whyWrong": {
        "b": "La zone d’administration n’est pas isolée pour sa bande passante.",
        "d": "L’exposition à Internet est l’inverse de ce qu’on cherche pour l’administration.",
        "c": "Les sauvegardes ne sont pas la raison d’isoler la zone d’administration."
      }
    },
    "pvw-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "En découpant le réseau en zones très fines et en filtrant les flux entre elles, on empêche une machine compromise de joindre librement ses voisines : l’attaquant doit franchir de nouveaux contrôles à chaque étape."
    },
    "pvw-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Zero Trust supprime la confiance implicite liée à l’emplacement : authentification et autorisation à chaque accès, moindre privilège, évaluation de l’appareil et du contexte. Faire confiance à tout poste interne est la logique du périmètre classique.",
      "whyWrong": {
        "d": "C’est précisément l’hypothèse que Zero Trust abandonne."
      }
    },
    "pvw-q40": {
      "type": "open",
      "model": "La segmentation limite la portée : le poste n’atteint, à travers les pare-feux, que les services strictement autorisés ; un balayage vers les serveurs ou les autres zones est bloqué et journalisé. Dans le même VLAN, la micro-segmentation ou l’isolation des clients empêche aussi les échanges entre postes. La détection repère le comportement : une sonde IDS ou les journaux de pare-feu voient une source unique qui tente de nombreux ports ou machines, avec beaucoup de refus ou de RST ; une alerte permet d’isoler le poste (coupure du port, quarantaine par l’EDR), d’analyser la cause et de vérifier ce qui a pu être atteint. Les deux se complètent : la segmentation réduit les dégâts, la détection raccourcit le délai de réaction.",
      "criteria": [
        "Le rôle de la segmentation (flux limités, blocage et journalisation) est expliqué.",
        "Le comportement d’un balayage vu par l’IDS ou les journaux est décrit.",
        "Une réaction (isolation du poste, analyse) est proposée.",
        "La complémentarité segmentation et détection est affirmée."
      ],
      "explanation": "On suppose qu’un poste sera compromis un jour : la segmentation en réduit l’impact, la détection en réduit la durée."
    }
  },
};
