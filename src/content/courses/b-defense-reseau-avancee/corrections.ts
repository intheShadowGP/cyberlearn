// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "b-defense-reseau-avancee",
  questions: {
    "bdef-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "Un déni de service vise la disponibilité : bande passante, table de connexions, calcul ou base de données sont saturés jusqu’à ce que les utilisateurs légitimes ne soient plus servis. Il ne cherche ni à lire ni à modifier les données.",
      "whyWrong": {
        "d": "Voler des identifiants vise la confidentialité, pas la disponibilité.",
        "c": "Altérer des données vise l’intégrité."
      }
    },
    "bdef-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "La requête est petite et porte l’adresse de la victime comme source : le serveur ouvert répond, par un message souvent des dizaines de fois plus gros, à la victime. L’attaquant dépense peu de bande passante et masque son origine.",
      "whyWrong": {
        "d": "Les serveurs journalisent l’adresse usurpée : le but est de diriger les réponses, pas de les cacher.",
        "a": "L’attaquant ne reçoit pas le trafic : c’est la victime qui le reçoit."
      }
    },
    "bdef-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un résolveur ouvert répond à n’importe quelle adresse source, y compris usurpée, par une réponse plus volumineuse que la question. Restreindre les résolveurs à leurs clients légitimes est la parade de base."
    },
    "bdef-q4": {
      "type": "short",
      "accepted": [
        "SYN cookies",
        "SYN cookie",
        "syn cookies",
        "syn cookie"
      ],
      "explanation": "Avec les SYN cookies, le serveur encode les informations de la connexion dans le numéro de séquence de sa réponse et n’alloue de mémoire que si le client renvoie correctement le troisième message. Les faux clients ne consomment rien."
    },
    "bdef-q5": {
      "type": "single",
      "correct": "d",
      "explanation": "Le filtrage d’entrée n’accepte que des adresses source attendues sur l’interface. Sans paquets usurpés, les attaques par réflexion ne peuvent plus viser une victime. Il protège les autres autant que celui qui l’applique, d’où la difficulté à le généraliser.",
      "whyWrong": {
        "c": "Il filtre selon l’adresse source ; il ne chiffre rien.",
        "b": "La limitation de débit est une autre mesure, sans lien avec l’usurpation."
      }
    },
    "bdef-q6": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Une saturation de lien se traite en amont : nettoyage, absorption par un réseau distribué, filtrage chez l’opérateur. Agrandir la table d’états d’un pare-feu interne n’y change rien, car le trafic a déjà rempli le tuyau avant de l’atteindre.",
      "whyWrong": {
        "a": "La table d’états concerne l’épuisement de mémoire, pas la saturation de bande passante."
      }
    },
    "bdef-q7": {
      "type": "open",
      "model": "Le trafic est une réflexion DNS : des serveurs ouverts répondent, vers l’adresse du site, à des requêtes usurpées. La saturation survient sur le lien d’accès, en amont du pare-feu : celui-ci reçoit un flux qui a déjà rempli le tuyau et ne peut rien libérer. Il faut agir en amont : demander à l’opérateur ou au prestataire de protection de dériver le trafic vers un centre de nettoyage, de filtrer les réponses DNS non sollicitées (source port 53 vers des adresses qui n’ont pas émis de requête), et, en dernier recours, de recourir à un blackholing de l’adresse la plus visée en sachant qu’elle devient inaccessible. Durablement : contrat anti-DDoS testé, CDN ou anycast, résolveurs fermés côté interne, supervision avec seuils d’alerte et procédure de bascule écrite.",
      "criteria": [
        "Identifie une attaque volumétrique par réflexion et la ressource saturée (bande passante).",
        "Explique pourquoi le pare-feu local est placé trop tard.",
        "Propose des mesures en amont (opérateur, nettoyage, filtrage).",
        "Ajoute des mesures durables (contrat, CDN, procédure testée)."
      ],
      "explanation": "Face à une saturation de lien, on agit en amont de la ressource attaquée ; ce qui se prépare avant l’attaque est plus efficace que ce qu’on improvise pendant."
    },
    "bdef-q8": {
      "type": "single",
      "correct": "a",
      "explanation": "Le plan de contrôle apprend les routes. Le plan de données fait suivre les paquets selon la table construite, et le plan de gestion sert à administrer l’équipement. Il n’existe pas de plan de sauvegarde.",
      "whyWrong": {
        "c": "Le plan de données transmet les paquets ; il ne construit pas la table.",
        "d": "Le plan de gestion concerne l’administration (SSH, SNMP)."
      }
    },
    "bdef-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "Le CoPP protège le processeur : il plafonne le débit du trafic qui lui est destiné (routage, gestion, ICMP). Une inondation dirigée vers le routeur lui-même ne l’empêche plus de maintenir ses sessions de routage.",
      "whyWrong": {
        "c": "Le chiffrement ou l’authentification des sessions relève d’autres mécanismes.",
        "d": "La répartition de charge est une fonction de routage, pas de protection du plan de contrôle."
      }
    },
    "bdef-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le secret par défaut est connu de tous et SNMP v2c ne protège ni l’authentification ni la confidentialité. Un poste compromis peut lire la configuration et la topologie. On utilise SNMPv3 avec authentification et chiffrement, et on limite les sources autorisées."
    },
    "bdef-q11": {
      "type": "short",
      "accepted": [
        "SSH",
        "ssh"
      ],
      "explanation": "SSH chiffre la session et authentifie l’équipement et l’administrateur, alors que Telnet transmet identifiants et commandes en clair. Telnet doit être désactivé sur les équipements."
    },
    "bdef-q12": {
      "type": "single",
      "correct": "b",
      "explanation": "Les voisins directs émettent avec un TTL de 255 et rejettent les paquets dont le TTL est inférieur : un paquet venu de plus loin a forcément traversé un routeur et son TTL a diminué. Cela bloque les tentatives d’injection à distance contre BGP.",
      "whyWrong": {
        "a": "C’est le rôle de l’authentification des sessions, pas du GTSM.",
        "c": "La vérification de l’origine relève de la RPKI et des filtres de préfixes."
      }
    },
    "bdef-q13": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Le filtrage des préfixes, la limite par voisin et la validation d’origine empêchent qu’une erreur ou une attaque chez un voisin ne détourne ou n’inonde la table de routage. Accepter une route par défaut de chacun des voisins ouvre précisément cette voie.",
      "whyWrong": {
        "a": "Une route par défaut non maîtrisée peut attirer tout le trafic vers un voisin défaillant ou malveillant."
      }
    },
    "bdef-q14": {
      "type": "open",
      "model": "Les risques les plus urgents sont ceux qui donnent le contrôle de l’équipement ou la lecture de ses secrets depuis l’intérieur : Telnet expose les identifiants en clair et SNMP « public » livre la configuration et la topologie ; on limite l’administration à un bastion par ACL, on passe à SSH et à SNMPv3, on place l’administration sur un réseau dédié. Vient ensuite l’intégrité du routage : OSPF sans authentification sur toutes les interfaces permet à un poste ou à un appareil pirate d’injecter de fausses routes ; on authentifie les voisins et on rend les interfaces vers les utilisateurs passives. Enfin, l’annonce BGP sans filtre permet de détourner ou de saturer la table ; on filtre les préfixes, on limite leur nombre par voisin, on active la RPKI et, pour un voisin direct, GTSM. On complète par CoPP, journalisation centralisée et sauvegarde comparée de la configuration.",
      "criteria": [
        "Classe les risques par priorité en justifiant (contrôle de l’équipement d’abord).",
        "Propose SSH, SNMPv3 et une administration restreinte.",
        "Propose l’authentification d’OSPF et les interfaces passives.",
        "Propose le filtrage BGP, la limite de préfixes et la RPKI."
      ],
      "explanation": "Un équipement de bordure concentre les risques de contrôle et de routage : on protège d’abord ce qui donne la main sur lui, puis l’intégrité des routes."
    },
    "bdef-q15": {
      "type": "single",
      "correct": "d",
      "explanation": "Un enregistrement de flux résume un échange : adresses et ports source et destination, protocole, octets, paquets, horodatage et durée. Il ne contient pas le contenu, ce qui le rend léger et conservable longtemps.",
      "whyWrong": {
        "b": "Le contenu intégral relève de la capture complète, pas des flux.",
        "a": "Les flux ignorent les identifiants et le contenu applicatif."
      }
    },
    "bdef-q16": {
      "type": "single",
      "correct": "c",
      "explanation": "Les flux sont des résumés : ils occupent bien moins d’espace que les paquets, donc on les garde longtemps. Cela permet de remonter dans le passé pour retrouver une balise ou un mouvement latéral, sans lire le contenu.",
      "whyWrong": {
        "b": "Les flux ne contiennent jamais le contenu.",
        "a": "Le processus à l’origine s’obtient par les journaux du poste (EDR)."
      }
    },
    "bdef-q17": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Dans TLS 1.3, le certificat est transmis après le chiffrement de la négociation : une sonde ne le voit plus en clair. Elle conserve les adresses, les volumes, la régularité et, selon les cas, le SNI : on compense par d’autres sources de télémétrie."
    },
    "bdef-q18": {
      "type": "short",
      "accepted": [
        "JA3",
        "ja3",
        "JA4",
        "ja4"
      ],
      "explanation": "JA3 (et son successeur JA4) résume les versions, les suites de chiffrement et les extensions proposées par le client. Elle identifie un logiciel même quand le contenu est chiffré : un outil malveillant a souvent une empreinte rare dans l’entreprise."
    },
    "bdef-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "ECH chiffre le ClientHello, donc le SNI : une sonde ne voit plus le nom du site, seulement l’adresse. La supervision s’appuie davantage sur les adresses, les flux, le DNS imposé de l’entreprise et la télémétrie des postes.",
      "whyWrong": {
        "d": "ECH ne rend rien lisible : il masque davantage de métadonnées.",
        "c": "Les adresses IP restent visibles, elles sont nécessaires au routage."
      }
    },
    "bdef-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "L’exfiltration par DNS se voit dans les noms demandés et dans leur volume : journaux du résolveur, statistiques par poste et par domaine, journaux de sonde. Les journaux d’impression n’ont aucun lien avec ces requêtes.",
      "whyWrong": {
        "d": "Les journaux d’impression ne contiennent aucune information sur le DNS."
      }
    },
    "bdef-q21": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le proxy déchiffre des données sensibles et sa clé d’autorité devient une cible : si elle est volée, un attaquant peut se faire passer pour n’importe quel site auprès des postes. On l’emploie avec des exclusions, une protection renforcée et une journalisation de ses accès."
    },
    "bdef-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "Sans description du comportement habituel, on ne distingue ni l’anormal ni le simplement rare. La ligne de base permet de régler les seuils : trop bas, ils produisent des faux positifs ; trop hauts, ils laissent passer une activité lente.",
      "whyWrong": {
        "a": "La liste de signatures relève de la détection par signatures.",
        "c": "La ligne de base ne déchiffre rien : elle décrit l’habituel."
      }
    },
    "bdef-q23": {
      "type": "single",
      "correct": "c",
      "explanation": "Une balise interroge régulièrement son serveur, avec un rythme et un volume très stables : un humain ou une application ordinaire ne produit pas ce motif. Le chiffrement ne le masque pas, car il repose sur la forme du trafic.",
      "whyWrong": {
        "a": "C’est plutôt le profil d’une exfiltration ponctuelle.",
        "b": "Beaucoup de ports différents évoquent un balayage."
      }
    },
    "bdef-q24": {
      "type": "single",
      "correct": "a",
      "explanation": "Un poste ordinaire parle à quelques serveurs de fichiers. Contacter 200 machines sur SMB avec des échanges minuscules est le motif d’un balayage ou d’une propagation. On isole le poste et on vérifie les machines qui ont répondu.",
      "whyWrong": {
        "b": "Une sauvegarde vise un serveur, avec de gros volumes.",
        "c": "Une mise à jour part d’un serveur vers les postes, pas l’inverse."
      }
    },
    "bdef-q25": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un faux serveur, un partage ou un compte factice n’a aucune raison d’être contacté par un utilisateur normal : toute interaction est suspecte. Les leurres placés dans le réseau interne révèlent les balayages et les déplacements latéraux."
    },
    "bdef-q26": {
      "type": "short",
      "accepted": [
        "threat hunting",
        "chasse aux menaces",
        "chasse"
      ],
      "explanation": "La chasse aux menaces (threat hunting) formule une hypothèse, par exemple une exfiltration par DNS, puis la teste dans les journaux et les flux. Elle débouche sur un incident, sur une détection durable ou sur la conclusion que l’hypothèse est écartée."
    },
    "bdef-q27": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Un tunnel DNS encode des données dans les noms interrogés : sous-domaines longs ou aléatoires, noms tous différents sous un domaine peu connu, enregistrements TXT. Des requêtes courtes vers un domaine très populaire sont banales.",
      "whyWrong": {
        "c": "Un domaine très populaire est consulté par tous : cela n’a rien d’inhabituel."
      }
    },
    "bdef-q28": {
      "type": "open",
      "model": "Hypothèse : un poste compromis envoie de gros volumes vers un service de stockage en ligne non autorisé, souvent hors horaires. Données : flux et journaux du proxy ou du pare-feu (volumes sortants par poste et par destination), journaux DNS (noms de services de stockage), éventuellement l’EDR (processus à l’origine). Étapes : définir la ligne de base du volume sortant par poste et par jour ; lister les destinations de type stockage consultées ; repérer les postes dont le volume sortant dépasse nettement l’habituel ou dont l’activité tombe hors horaires ; examiner le processus à l’origine et l’utilisateur concerné ; trier les usages légitimes (outil approuvé) des autres. Résultat attendu : soit un incident à traiter, soit une règle durable (alerte sur volume sortant vers une destination hors liste autorisée), soit une hypothèse écartée et documentée.",
      "criteria": [
        "L’hypothèse est précise et testable.",
        "Les sources de données utiles sont citées (flux, proxy, DNS, EDR).",
        "La ligne de base et le tri des usages légitimes sont mentionnés.",
        "Les trois issues possibles (incident, détection durable, hypothèse écartée) sont évoquées."
      ],
      "explanation": "Une chasse bien menée laisse toujours quelque chose : un incident découvert, une détection durable ou un constat documenté."
    },
    "bdef-q29": {
      "type": "single",
      "correct": "a",
      "explanation": "Un VPN classique place le poste sur le réseau et donne un accès large. Le ZTNA n’ouvre que l’application demandée, après vérification de l’identité, de l’état de l’appareil et du contexte, et peut couper la session si l’un d’eux change.",
      "whyWrong": {
        "d": "Les deux chiffrent les échanges ; la différence porte sur l’étendue de l’accès.",
        "c": "Le ZTNA renforce la vérification d’identité au lieu de la supprimer."
      }
    },
    "bdef-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "Le NAC vérifie l’authentification et la posture de l’appareil. S’il n’est pas conforme, il l’isole dans un VLAN de quarantaine où il ne peut joindre que les ressources de mise à jour, jusqu’à ce qu’il soit corrigé.",
      "whyWrong": {
        "b": "Autoriser un appareil non conforme sur tout le réseau annule l’intérêt du contrôle.",
        "a": "Le NAC contrôle l’accès ; il ne réinstalle pas les systèmes."
      }
    },
    "bdef-q31": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les pare-feux de périmètre voient le trafic nord-sud ; les flux internes circulent souvent librement. Un attaquant qui a pris pied se déplace précisément par ces flux : filtrer et journaliser l’est-ouest réduit sa marge de manœuvre."
    },
    "bdef-q32": {
      "type": "single",
      "correct": "b",
      "explanation": "Le bastion concentre l’authentification multifacteur, l’autorisation et l’enregistrement des sessions d’administration. Les équipements n’acceptent que lui : un poste ordinaire compromis ne peut pas atteindre leurs interfaces.",
      "whyWrong": {
        "a": "Un équipement non joignable reste vulnérable : les mises à jour restent nécessaires.",
        "c": "Le bastion ne filtre pas le trafic entre zones : il sécurise l’administration."
      }
    },
    "bdef-q33": {
      "type": "short",
      "accepted": [
        "micro-segmentation",
        "microsegmentation",
        "micro segmentation"
      ],
      "explanation": "La micro-segmentation applique des règles de filtrage entre des zones très fines, parfois entre chaque machine. Un attaquant qui compromet une machine doit franchir un nouveau contrôle à chaque pas, et ses tentatives laissent des traces."
    },
    "bdef-q34": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Isolation des clients, restriction des protocoles d’administration et bastion rendent chaque pas de l’attaquant plus coûteux et visible. Tout regrouper dans un VLAN unique supprime au contraire les cloisons qui freinent la propagation.",
      "whyWrong": {
        "d": "Un VLAN unique laisse tous les serveurs se joindre librement : c’est le contraire de la segmentation."
      }
    },
    "bdef-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "Reconstituer une attaque suppose de remettre dans l’ordre des événements issus de pare-feux, serveurs et postes. Si leurs horloges diffèrent, la chronologie est faussée. Une heure cohérente conditionne la corrélation.",
      "whyWrong": {
        "b": "NTP ne modifie pas le débit des échanges.",
        "a": "La synchronisation de l’heure ne chiffre pas les journaux."
      }
    },
    "bdef-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "En faisant résoudre un domaine de commande vers une adresse du défenseur, on neutralise l’attaquant et on repère les postes infectés qui tentent de le joindre : ils apparaissent dans les journaux du sinkhole.",
      "whyWrong": {
        "d": "Un résolveur de secours relève de la disponibilité, pas du sinkhole.",
        "b": "Le sinkhole ne supprime pas d’enregistrements : il redirige un nom précis."
      }
    },
    "bdef-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le calcul d’une empreinte ne modifie pas le fichier : il permet au contraire de démontrer plus tard qu’il est resté identique. L’empreinte, notée dans la chaîne de conservation avec l’auteur et l’heure de collecte, protège la valeur de la preuve."
    },
    "bdef-q38": {
      "type": "single",
      "correct": "a",
      "explanation": "Le blackholing demande aux routeurs de jeter tout le trafic vers l’adresse attaquée : les autres services sont protégés, mais l’adresse visée est coupée, ce qui revient à donner satisfaction à l’attaquant pour elle. On préfère le nettoyage quand il est disponible.",
      "whyWrong": {
        "c": "Au contraire, le blackholing jette aussi le trafic légitime vers cette adresse.",
        "b": "C’est le profil d’un centre de nettoyage, pas du blackholing."
      }
    },
    "bdef-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Redondance, sauvegardes testées et journalisation centralisée permettent de continuer à fonctionner, de restaurer vite et de comprendre l’incident. Un équipement unique, même puissant, reste un point de défaillance.",
      "whyWrong": {
        "d": "Un équipement unique est un point de défaillance unique : c’est l’inverse de la résilience."
      }
    },
    "bdef-q40": {
      "type": "open",
      "model": "Le confinement vise à couper la communication et la propagation sans détruire d’éléments : on isole le poste par la coupure de son port ou un VLAN de quarantaine, on bloque la destination du serveur de commande au pare-feu et au proxy, et on met en place un sinkhole DNS sur le domaine pour repérer d’autres postes infectés. On évite d’éteindre ou de réinstaller le poste avant la collecte : on conserve l’image de sa mémoire et de son disque, on extrait les journaux utiles (pare-feu, DNS, flux, EDR) et on capture le trafic si possible, avec calcul d’une empreinte (SHA-256) et mention dans la chaîne de conservation (qui, quand, avec quoi). Les deux se décident ensemble car une action de confinement trop brutale (extinction, réinstallation) détruit les traces nécessaires à comprendre l’étendue de la compromission, tandis qu’une collecte trop longue laisse l’attaque se poursuivre. Un plan écrit à l’avance fixe l’ordre.",
      "criteria": [
        "Décrit un confinement réseau sans extinction (isolement, blocage, sinkhole).",
        "Décrit la collecte des preuves (mémoire, journaux, capture) avec empreinte et chaîne de conservation.",
        "Explique le conflit entre confiner vite et préserver.",
        "Mentionne un plan préparé à l’avance."
      ],
      "explanation": "Confiner et préserver sont deux exigences liées : le plan de réponse écrit à l’avance arbitre entre vitesse d’action et qualité de la preuve."
    }
  },
};
