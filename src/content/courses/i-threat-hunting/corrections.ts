// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "i-threat-hunting",
  questions: {
    "hunt-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "Le renseignement tactique (ou technique) fournit des éléments directement exploitables par les outils : indicateurs, signatures, règles. Il a une durée de vie courte.",
      "whyWrong": {
        "b": "Le renseignement stratégique s’adresse à la direction : tendances, motivations, risques sectoriels.",
        "a": "Ce n’est pas un niveau de renseignement sur la menace.",
        "d": "Ce n’est pas un niveau de renseignement sur la menace."
      }
    },
    "hunt-q2": {
      "type": "single",
      "correct": "d",
      "explanation": "Dans TLP 2.0, AMBER+STRICT limite la diffusion à l’organisation du destinataire, selon le besoin d’en connaître. AMBER simple autorise aussi ses clients.",
      "whyWrong": {
        "b": "C’est ce que permet TLP:AMBER, pas AMBER+STRICT.",
        "a": "Une publication publique relève de TLP:CLEAR.",
        "c": "C’est le périmètre de TLP:GREEN."
      }
    },
    "hunt-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Des indicateurs non pertinents ou périmés (adresses IP partagées, domaines réattribués) génèrent des faux positifs qui épuisent les analystes. La qualité et la pertinence comptent plus que le volume."
    },
    "hunt-q4": {
      "type": "short",
      "accepted": [
        "stix",
        "stix 2",
        "stix 2.1",
        "stix2"
      ],
      "explanation": "STIX (Structured Threat Information Expression) décrit les objets de renseignement ; TAXII (Trusted Automated Exchange of Intelligence Information) les transporte entre plateformes."
    },
    "hunt-q41": {
      "type": "single",
      "correct": "a",
      "explanation": "Changer un seul octet change l’empreinte : l’attaquant la renouvelle sans effort. Les comportements et les techniques sont plus coûteux à modifier, donc plus durables pour la détection.",
      "whyWrong": {
        "b": "Une empreinte se compare facilement à une base de renseignement ; sa fragilité vient d’ailleurs.",
        "d": "La taille du fichier n’a aucun rapport avec la fragilité de l’indicateur.",
        "c": "L’antivirus ne modifie pas les empreintes : il les utilise."
      }
    },
    "hunt-q6": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Une bonne hypothèse est précise, rattachée à une technique ou un renseignement, vérifiable avec les données disponibles, et sa vérification est documentée quel que soit le résultat.",
      "whyWrong": {
        "a": "Une hypothèse vague ne peut être ni confirmée ni infirmée : on ne sait pas ce qui a été vérifié."
      }
    },
    "hunt-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Une chasse négative documente ce qui a été vérifié, révèle souvent des lacunes de journalisation, et doit produire une détection automatisée pour la technique étudiée. Ce sont des gains durables."
    },
    "hunt-q8": {
      "type": "open",
      "model": "Hypothèse : « Si un attaquant a établi une persistance par compte local, des comptes locaux ont été créés sur des postes ou serveurs en dehors du processus d’administration habituel, puis ajoutés au groupe Administrateurs. » Données : événements de sécurité 4720 (création de compte) et 4732 (ajout à un groupe local), Sysmon 1 pour `net.exe user /add`, inventaire des comptes locaux via l’EDR, historique de 90 jours. Méthode : lister toutes les créations, exclure celles faites par les comptes et outils de déploiement connus, empiler les noms de comptes et les postes, examiner les valeurs rares et les créations hors heures ouvrées ; corréler avec les connexions qui utilisent ces comptes (4624). Résultat : incident ou absence documentée, plus une règle de détection sur 4720 hors comptes d’administration autorisés.",
      "criteria": [
        "L’hypothèse est formulée de façon vérifiable.",
        "Des sources de données précises sont citées (événements 4720, 4732 ou équivalents).",
        "La méthode d’analyse (exclusions, empilement, corrélation) est décrite.",
        "Le produit attendu (détection ou incident) est mentionné."
      ],
      "explanation": "Ce schéma (déclencheur, hypothèse, données, analyse, résultat) s’applique à n’importe quelle technique ATT&CK."
    },
    "hunt-q9": {
      "type": "single",
      "correct": "b",
      "explanation": "Zeek décrit le trafic (connexions, requêtes DNS, sessions HTTP et TLS) sans porter de jugement ; Suricata applique des signatures et alerte, voire bloque en mode IPS. Les deux se complètent souvent sur le même capteur.",
      "whyWrong": {
        "c": "Zeek analyse l’IPv4 comme l’IPv6.",
        "d": "Suricata analyse le trafic réseau, pas les journaux Windows.",
        "a": "Ce sont deux projets distincts."
      }
    },
    "hunt-q10": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Un tunnel DNS encode les données dans les noms demandés et les réponses : longueur et entropie élevées, volume concentré sur un domaine, recours aux enregistrements TXT.",
      "whyWrong": {
        "a": "Interroger le résolveur interne est le fonctionnement normal de tout poste."
      }
    },
    "hunt-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le contenu est chiffré, mais la régularité des connexions, les volumes, la destination, le SNI, le certificat et l’empreinte de négociation TLS (JA3 ou JA4) restent observables et suffisent souvent."
    },
    "hunt-q12": {
      "type": "short",
      "accepted": [
        "conn.log",
        "conn"
      ],
      "explanation": "`conn.log` contient une ligne par connexion : adresses, ports, protocole, durée, octets échangés, état. C’est la base de l’analyse de balises et d’exfiltration."
    },
    "hunt-q13": {
      "type": "single",
      "correct": "a",
      "explanation": "Un processus de serveur web (IIS) qui lance PowerShell est rare et correspond typiquement à l’exécution de commandes via un webshell. Les valeurs fréquentes sur tout le parc correspondent à l’usage normal.",
      "whyWrong": {
        "c": "Valeur très fréquente : usage normal.",
        "d": "Présent partout : comportement habituel.",
        "b": "Présent partout : comportement habituel."
      }
    },
    "hunt-q14": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Règle documentée, test sur l’historique, playbook et automatisation de l’enrichissement : la chasse devient une détection durable et une réponse plus rapide.",
      "whyWrong": {
        "a": "Une action destructrice automatique sur une règle non testée risque d’isoler des machines saines ; l’isolement se décide après validation, au moins tant que la règle n’a pas fait ses preuves."
      }
    },
    "hunt-q15": {
      "type": "open",
      "model": "Les alertes du SIEM et de l’EDR ne reconnaissent que ce qui a déjà été décrit par des règles ou des signatures ; un attaquant qui utilise des outils légitimes, des comptes valides et une infrastructure nouvelle peut rester sous ces seuils pendant des mois. La chasse cherche activement ces comportements à partir du renseignement sur les groupes qui ciblent l’entreprise, réduit le temps de présence de l’attaquant (et donc l’impact), et chaque chasse produit de nouvelles détections : elle améliore le retour sur investissement du SIEM et de l’EDR existants. Elle révèle aussi les lacunes de journalisation. Le financement peut être mesuré : nombre de détections créées, couverture ATT&CK, incidents découverts.",
      "criteria": [
        "La limite des détections fondées sur des règles connues est expliquée.",
        "La réduction du temps de présence de l’attaquant ou de l’impact est mentionnée.",
        "L’amélioration continue des détections existantes est citée.",
        "Au moins un indicateur de résultat mesurable est proposé."
      ],
      "explanation": "Face à une direction, l’argument porte sur le risque et le rendement des outils déjà achetés, pas sur la technique."
    },
    "hunt-q16": {
      "type": "single",
      "correct": "b",
      "explanation": "Le SOAR orchestre et automatise : il reçoit une alerte, enrichit, crée le ticket, et déclenche des actions sur d’autres outils selon un playbook.",
      "whyWrong": {
        "a": "Un IDS détecte dans le trafic, il n’orchestre pas d’actions.",
        "d": "Un pare-feu applicatif filtre le trafic web.",
        "c": "Un proxy inverse relaie les requêtes vers des serveurs."
      }
    },
    "hunt-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "Le renseignement opérationnel décrit les méthodes et campagnes d’un groupe : il guide les équipes de réponse et de chasse pour choisir quoi chercher. Il reste valable des semaines ou des mois.",
      "whyWrong": {
        "a": "Le stratégique traite tendances, motivations et risques pour la direction.",
        "d": "Le tactique fournit des indicateurs (adresses, empreintes), pas des méthodes.",
        "b": "Ce n’est pas un niveau de renseignement sur la menace."
      }
    },
    "hunt-q18": {
      "type": "truefalse",
      "correct": true,
      "explanation": "TLP:CLEAR correspond à une diffusion sans restriction, dans le respect des règles de droit d’auteur. À l’autre extrémité, TLP:RED limite la diffusion aux seuls destinataires nommés."
    },
    "hunt-q19": {
      "type": "short",
      "accepted": [
        "taxii",
        "taxii 2",
        "taxii 2.1"
      ],
      "explanation": "TAXII est le protocole de transport qui accompagne STIX : il permet à des plateformes comme MISP ou OpenCTI de publier et de collecter des objets de renseignement."
    },
    "hunt-q20": {
      "type": "single",
      "correct": "d",
      "explanation": "Sans données disponibles et exploitables, l’hypothèse ne peut pas être testée. On vérifie les sources, la période conservée et les champs avant de concevoir la requête.",
      "whyWrong": {
        "c": "Une requête trop large noie le signal et ne teste rien de précis.",
        "a": "Le rapport vient après l’analyse.",
        "b": "L’isolement relève de la réponse, pas de la chasse."
      }
    },
    "hunt-q21": {
      "type": "single",
      "correct": "c",
      "explanation": "L’absence de résultat sur une période trop courte ne prouve rien. La lacune (rétention, source manquante) est un résultat utile : on la documente et on la comble pour pouvoir chasser à nouveau.",
      "whyWrong": {
        "a": "On ne peut pas conclure sur ce qu’on ne peut pas voir.",
        "b": "Rien n’autorise cette conclusion.",
        "d": "On corrige la lacune puis on recommence."
      }
    },
    "hunt-q22": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "La fiche permet de reproduire, de relire et de réutiliser la chasse : hypothèse, données, requêtes, résultat, détections créées. Aucun secret n’a sa place dans une fiche.",
      "whyWrong": {
        "b": "Les secrets ne sont jamais conservés dans une fiche de chasse."
      }
    },
    "hunt-q23": {
      "type": "single",
      "correct": "d",
      "explanation": "Un logiciel malveillant interroge périodiquement son serveur : régularité de l’intervalle, volumes faibles et constants, durée de plusieurs heures ou jours.",
      "whyWrong": {
        "b": "Un transfert unique évoque plutôt une copie ou une exfiltration.",
        "a": "C’est un comportement normal.",
        "c": "Un usage varié est typique d’un poste ordinaire."
      }
    },
    "hunt-q24": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le chiffrement protège le contenu, pas les métadonnées. Elles suffisent souvent pour repérer une balise, une exfiltration ou un service inhabituel."
    },
    "hunt-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "Relier le flux au processus (EDR), à son emplacement, sa signature et son parent permet de qualifier la balise. Les mesures de blocage ou de redémarrage viennent ensuite, sans détruire les preuves.",
      "whyWrong": {
        "d": "Cela bloquerait des services légitimes sans qualifier le comportement.",
        "c": "Sans lien avec le processus identifié, cela ne qualifie rien.",
        "b": "Un redémarrage détruit la mémoire et des preuves."
      }
    },
    "hunt-q26": {
      "type": "single",
      "correct": "b",
      "explanation": "Une anomalie n’a de sens que par rapport à ce qui est normal : heures de connexion, volumes, processus habituels. La ligne de base sert de référence à l’analyse comportementale.",
      "whyWrong": {
        "a": "C’est le rôle d’un inventaire ou d’un scanner de vulnérabilités.",
        "c": "Cela décrit un historique d’alertes, pas un comportement normal.",
        "d": "Cela relève de la continuité d’activité."
      }
    },
    "hunt-q27": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un outil d’administration utilisé une fois par an ressort aussi. L’empilement désigne où regarder ; c’est l’investigation qui conclut."
    },
    "hunt-q28": {
      "type": "single",
      "correct": "b",
      "explanation": "L’événement 4698 signale la création d’une tâche planifiée, mécanisme de persistance fréquent. Le 4624 est une ouverture de session, le 4720 la création d’un compte et le 4732 un ajout à un groupe local.",
      "whyWrong": {
        "c": "4624 signale une ouverture de session réussie.",
        "d": "4720 signale la création d’un compte.",
        "a": "4732 signale l’ajout à un groupe local."
      }
    },
    "hunt-q29": {
      "type": "single",
      "correct": "d",
      "explanation": "Le type 10 correspond à une session interactive à distance (bureau à distance). Le type 2 est une connexion locale, le type 3 une connexion réseau.",
      "whyWrong": {
        "a": "C’est le type 2.",
        "b": "C’est le type 3.",
        "c": "C’est le type 5."
      }
    },
    "hunt-q30": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Un compte qui touche beaucoup d’hôtes en peu de temps, depuis une source inhabituelle et hors des heures normales, s’écarte de sa ligne de base. Une ouverture locale le matin est normale.",
      "whyWrong": {
        "b": "C’est le comportement habituel d’un utilisateur."
      }
    },
    "hunt-q31": {
      "type": "single",
      "correct": "c",
      "explanation": "Les comptes de service s’exécutent en arrière-plan ; une session interactive signale une utilisation par une personne, éventuellement avec des identifiants volés. On compare à la ligne de base du compte.",
      "whyWrong": {
        "a": "Le bureau à distance est légitime pour de nombreux usages d’administration.",
        "b": "Les comptes de service ont un mot de passe (ou un secret géré).",
        "d": "C’est faux : ce n’est pas leur usage normal."
      }
    },
    "hunt-q32": {
      "type": "short",
      "accepted": [
        "living off the land",
        "lotl",
        "lolbin",
        "lolbins",
        "lolbas",
        "outils légitimes",
        "vivre de la terre"
      ],
      "explanation": "Le « living off the land » (LOLBins) évite d’introduire des outils nouveaux, donc des empreintes détectables. On le chasse par le comportement : processus parent, arguments, fréquence."
    },
    "hunt-q33": {
      "type": "single",
      "correct": "a",
      "explanation": "LSASS contient des secrets d’authentification. L’accès à sa mémoire par un processus inattendu est un indicateur classique de vol d’identifiants, visible par Sysmon (accès à un processus) ou l’EDR.",
      "whyWrong": {
        "c": "Une mise à jour ne lit pas la mémoire de LSASS.",
        "b": "Une sauvegarde de fichiers n’a pas besoin de LSASS.",
        "d": "Un pare-feu n’ouvre pas LSASS."
      }
    },
    "hunt-q34": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les arguments distinguent un usage légitime d’un usage malveillant du même programme (par exemple PowerShell encodé). Activer l’audit de la ligne de commande est une priorité de journalisation."
    },
    "hunt-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "On chasse là où la détection est la plus faible et où le renseignement indique une menace crédible. Une carte de couverture (ATT&CK Navigator) aide à repérer ces lacunes.",
      "whyWrong": {
        "a": "La médiatisation ne mesure pas la menace réelle.",
        "d": "Le choix suit le risque, pas la préférence d’un outil.",
        "c": "Le hasard ne cible pas les lacunes."
      }
    },
    "hunt-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "Le temps de présence mesure combien de temps un attaquant reste dans le système avant d’être détecté. La chasse et l’amélioration de la détection visent à le réduire, donc à limiter l’impact.",
      "whyWrong": {
        "d": "C’est un paramètre de journalisation.",
        "b": "C’est un indicateur de gestion de tickets.",
        "a": "Ce n’est pas un indicateur de sécurité."
      }
    },
    "hunt-q37": {
      "type": "short",
      "accepted": [
        "attack navigator",
        "att&ck navigator",
        "navigator",
        "mitre attack navigator",
        "mitre att&ck navigator"
      ],
      "explanation": "ATT&CK Navigator colore les techniques selon la couverture de détection : on repère les zones faibles pour choisir la prochaine chasse ou la prochaine règle."
    },
    "hunt-q38": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "La chasse produit des détections, comble des lacunes de journalisation, découvre des incidents et réduit le temps de présence. Le rythme de fermeture des alertes mesure le triage, pas la chasse.",
      "whyWrong": {
        "d": "C’est un indicateur de triage."
      }
    },
    "hunt-q39": {
      "type": "single",
      "correct": "d",
      "explanation": "Une chasse a deux produits : un incident ou une absence documentée, et une détection durable. Une règle testée, qui détectera la technique la prochaine fois, est un gain réel.",
      "whyWrong": {
        "b": "L’absence d’incident n’est pas un échec.",
        "a": "La valeur ne dépend pas de l’ouverture d’un incident.",
        "c": "L’archivage permet de ne pas refaire la même chasse."
      }
    },
    "hunt-q40": {
      "type": "single",
      "correct": "a",
      "explanation": "Une règle récente peut produire des faux positifs : isoler automatiquement des machines saines coûte cher. On teste sur l’historique, on mesure le bruit et on garde une validation humaine tant que la règle n’a pas fait ses preuves.",
      "whyWrong": {
        "c": "Exclure les serveurs crée un angle mort.",
        "d": "Désactiver le SIEM supprime la visibilité.",
        "b": "Sans contrôle, une erreur isole des machines saines."
      }
    }
  },
};
