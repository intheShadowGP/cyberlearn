// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "n-ics-modbus",
  questions: {
    "ics-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "L’automate programmable exécute en boucle son programme : lecture des entrées (capteurs), calcul, écriture des sorties (actionneurs).",
      "whyWrong": {
        "c": "Il ne pilote aucun capteur.",
        "b": "Il ne pilote aucun capteur.",
        "d": "Il gère des comptes, pas un procédé."
      }
    },
    "ics-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un arrêt intempestif ou une commande erronée peut provoquer un accident ou une pollution. La sûreté des personnes et la continuité du procédé dominent les arbitrages OT."
    },
    "ics-q3": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Longévité, difficulté de mise à jour et fragilité de certaines piles réseau anciennes sont des caractéristiques majeures de l’OT.",
      "whyWrong": {
        "c": "C’est l’inverse : les automates restent souvent en service plusieurs décennies."
      }
    },
    "ics-q14": {
      "type": "single",
      "correct": "d",
      "explanation": "Triton (ou Trisis) visait des contrôleurs de sûreté Schneider Electric Triconex, conçus pour mettre le procédé en sécurité en cas d’anomalie. Son but probable était de neutraliser cette protection.",
      "whyWrong": {
        "b": "Rançongiciel ciblant des postes Windows.",
        "a": "Faille d’une bibliothèque de chiffrement.",
        "c": "Faille d’une bibliothèque de journalisation."
      }
    },
    "ics-q31": {
      "type": "single",
      "correct": "c",
      "explanation": "Les technologies opérationnelles (OT) regroupent les systèmes qui pilotent des procédés physiques : automates, supervision, capteurs, actionneurs.",
      "whyWrong": {
        "a": "OT ne désigne pas les outils de télétravail.",
        "d": "OT ne désigne pas des opérations tarifaires.",
        "b": "OT ne désigne pas l’optimisation de transferts de fichiers."
      }
    },
    "ics-q32": {
      "type": "single",
      "correct": "b",
      "explanation": "Un procédé continu (four, réseau d’eau, chimie) ne s’arrête pas sans conséquence. Les redémarrages et correctifs se planifient lors des arrêts techniques.",
      "whyWrong": {
        "c": "Les automates ont leur propre alimentation : ce n’est pas la raison.",
        "d": "Un redémarrage n’est pas interdit par le système : il peut interrompre un procédé.",
        "a": "Un redémarrage n’efface pas systématiquement le programme."
      }
    },
    "ics-q33": {
      "type": "single",
      "correct": "a",
      "explanation": "Le niveau 0 est le procédé physique, le niveau 1 le contrôle de base (automates), le niveau 2 la supervision, le niveau 3 les opérations, la DMZ industrielle sépare l’OT de l’IT.",
      "whyWrong": {
        "b": "Il relève de l’IT.",
        "c": "Il relève de l’IT.",
        "d": "C’est la zone intermédiaire."
      }
    },
    "ics-q34": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Ces systèmes surveillent des paramètres critiques et ramènent le procédé en état sûr. Les attaquer vise à neutraliser la dernière barrière de protection."
    },
    "ics-q4": {
      "type": "short",
      "accepted": [
        "502",
        "tcp/502",
        "502/tcp"
      ],
      "explanation": "Modbus TCP utilise le port 502. La version sécurisée sur TLS utilise le port 802."
    },
    "ics-q5": {
      "type": "single",
      "correct": "c",
      "explanation": "0x06 (Write Single Register) écrit un registre de maintien. 0x03 lit des registres, 0x01 lit des bobines, 0x04 lit des registres d’entrée.",
      "whyWrong": {
        "a": "C’est une lecture.",
        "b": "C’est une lecture.",
        "d": "C’est une lecture."
      }
    },
    "ics-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Modbus TCP ne comporte aucune authentification : tout équipement capable d’atteindre le port 502 peut envoyer des commandes. La protection repose sur la segmentation et le filtrage."
    },
    "ics-q7": {
      "type": "single",
      "correct": "b",
      "explanation": "Unité 02, fonction 05 (écrire une bobine), adresse 0x0003, valeur 0xFF00 qui signifie ON (0x0000 signifie OFF). Une telle commande peut démarrer une pompe ou ouvrir une vanne.",
      "whyWrong": {
        "d": "La fonction 05 écrit, elle ne lit pas.",
        "a": "Aucun redémarrage n’est demandé.",
        "c": "L’adresse et la valeur ne sont pas celles-là."
      }
    },
    "ics-q8": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "OPC UA intègre l’authentification et le chiffrement ; Modbus/TCP Security encapsule Modbus dans TLS avec certificats ; DNP3-SA authentifie les commandes critiques.",
      "whyWrong": {
        "a": "Modbus RTU sur liaison série n’a pas davantage de sécurité que Modbus TCP."
      }
    },
    "ics-q16": {
      "type": "short",
      "accepted": [
        "passive",
        "passif"
      ],
      "explanation": "La supervision passive analyse une copie du trafic (port miroir ou TAP) sans jamais émettre : elle n’a aucun impact sur le procédé."
    },
    "ics-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "L’identifiant d’unité désigne l’esclave visé, notamment derrière une passerelle. Il n’authentifie rien : n’importe qui peut le renseigner.",
      "whyWrong": {
        "a": "Modbus TCP ne chiffre pas.",
        "b": "La trame ne contient pas de date.",
        "c": "Il n’existe pas de mot de passe."
      }
    },
    "ics-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "Pour la fonction 05, 0xFF00 signifie ON et 0x0000 signifie OFF. Toute autre valeur est invalide.",
      "whyWrong": {
        "b": "ON correspond à 0xFF00.",
        "a": "La trame est valide.",
        "d": "Aucun redémarrage."
      }
    },
    "ics-q37": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Adresse source, code fonction et plage d’adresses permettent de n’autoriser que les lectures, ou les écritures depuis la seule station SCADA.",
      "whyWrong": {
        "a": "Cette notion n’existe pas."
      }
    },
    "ics-q9": {
      "type": "short",
      "accepted": [
        "iec 62443",
        "cei 62443",
        "62443",
        "isa/iec 62443",
        "isa 62443"
      ],
      "explanation": "La série ISA/IEC 62443 couvre les exigences pour les exploitants, les intégrateurs et les fabricants, avec les notions de zones, conduits et niveaux de sécurité (SL)."
    },
    "ics-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "La DMZ industrielle sert d’intermédiaire : l’historique est répliqué depuis l’OT vers la DMZ, où l’IT le consulte, sans flux direct entre IT et automates.",
      "whyWrong": {
        "d": "L’IT y accéderait directement.",
        "a": "Exposition inacceptable.",
        "c": "Ce poste n’est pas accessible à l’IT."
      }
    },
    "ics-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Certains automates anciens plantent sous l’effet de paquets inattendus. L’inventaire se fait de préférence par écoute passive, documentation et relevés sur site ; les requêtes actives sont limitées, ciblées et planifiées."
    },
    "ics-q12": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Bastion avec MFA et enregistrement, accès à la demande et périmètre restreint permettent de contrôler et tracer chaque intervention.",
      "whyWrong": {
        "b": "Un logiciel de prise en main permanent est une porte d’entrée majeure ; c’est un vecteur fréquent d’incidents industriels."
      }
    },
    "ics-q13": {
      "type": "open",
      "model": "1) Alerter immédiatement les responsables d’exploitation et de sûreté du procédé, qui vérifient l’état physique (concentrations, consignes) et peuvent basculer en mode manuel ou sûr. 2) Identifier la valeur écrite et le registre concerné, comparer aux consignes attendues. 3) Bloquer le flux entre le poste bureautique et le réseau OT au pare-feu (le flux ne devrait de toute façon pas exister), sans couper la supervision légitime. 4) Isoler le poste source et ouvrir une investigation (compromission ? usage d’un outil par un technicien ?). 5) Vérifier l’intégrité du programme de l’automate et rechercher d’autres écritures. 6) Corriger la segmentation qui a permis ce flux.",
      "criteria": [
        "La sûreté du procédé est traitée en premier avec les équipes d’exploitation.",
        "La commande écrite est analysée (registre, valeur).",
        "Le flux est bloqué et la source isolée.",
        "Le défaut de segmentation est identifié comme cause à corriger."
      ],
      "explanation": "En OT, la réponse à incident se coordonne avec l’exploitation : une action de sécurité brutale (couper le réseau de supervision) peut elle-même créer un danger."
    },
    "ics-q15": {
      "type": "open",
      "model": "Les IHM et serveurs SCADA sont souvent certifiés par l’éditeur avec une version précise du système : un correctif non validé peut casser le logiciel de supervision ; leur redémarrage peut nécessiter un arrêt du procédé, planifié lors des arrêts techniques ; certaines versions ne sont plus supportées. Mesures compensatoires : segmentation stricte et absence d’accès Internet, liste blanche d’applications, désactivation des ports USB et services inutiles, comptes nominatifs sans droits d’administration, supervision passive, application des correctifs validés par l’éditeur lors des arrêts programmés, sauvegardes et procédure de restauration testées.",
      "criteria": [
        "La validation par l’éditeur et le risque de dysfonctionnement sont expliqués.",
        "La contrainte d’arrêt de production est mentionnée.",
        "Au moins trois mesures compensatoires pertinentes sont proposées."
      ],
      "explanation": "Quand le correctif ne peut pas être appliqué vite, on réduit l’exposition et on améliore la détection : c’est la logique des mesures compensatoires."
    },
    "ics-q38": {
      "type": "single",
      "correct": "a",
      "explanation": "Aucun flux direct ne doit relier l’IT et les automates : les échanges passent par une DMZ industrielle, avec des conduits filtrés.",
      "whyWrong": {
        "d": "La journalisation est nécessaire.",
        "b": "L’inventaire est nécessaire.",
        "c": "Les sauvegardes sont nécessaires."
      }
    },
    "ics-q39": {
      "type": "single",
      "correct": "d",
      "explanation": "La norme définit des niveaux de sécurité SL 1 à 4, selon la capacité de résistance attendue face à des attaquants de plus en plus capables.",
      "whyWrong": {
        "a": "Les niveaux de sécurité ne vont pas de A à Z.",
        "b": "Les niveaux de sécurité ne vont pas de 1 à 100.",
        "c": "Elle en définit."
      }
    },
    "ics-q40": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un accès permanent expose le site en continu et repose sur un seul facteur. On préfère un accès à la demande, via bastion, avec MFA et enregistrement."
    },
    "ics-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "OPC UA prévoit authentification, signature et chiffrement des échanges. Son adoption progresse avec le renouvellement des équipements.",
      "whyWrong": {
        "c": "Aucune sécurité.",
        "a": "Aucune sécurité.",
        "b": "Aucune sécurité."
      }
    },
    "ics-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "DNP3 est largement utilisé pour la supervision de postes électriques et de réseaux d’eau. Sa version à authentification sécurisée (SA) protège les commandes critiques.",
      "whyWrong": {
        "d": "C’est un protocole de messagerie.",
        "b": "C’est un protocole de messagerie.",
        "c": "C’est un protocole web."
      }
    },
    "ics-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "N’autoriser que la lecture, et l’écriture depuis la seule station de supervision, limite ce qu’une machine compromise peut commander.",
      "whyWrong": {
        "c": "Le pare-feu ne chiffre pas.",
        "d": "Sans effet sur les automates.",
        "a": "Filtrer les codes fonction ne supprime pas l’authentification."
      }
    },
    "ics-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "Le filtrage vérifie le type d’opération et la source, pas la cohérence métier de la valeur. Une écriture autorisée depuis le SCADA peut rester dangereuse : la supervision doit la contrôler.",
      "whyWrong": {
        "a": "Il peut le faire.",
        "b": "Il peut le faire.",
        "d": "Il peut le faire."
      }
    },
    "ics-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "L’isolement physique réduit l’exposition réseau, mais n’apporte aucune authentification : un accès local au bus suffit pour envoyer des commandes."
    },
    "ics-q22": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Modbus, DNP3 et Profinet sont des protocoles industriels. SMTP est un protocole de messagerie.",
      "whyWrong": {
        "d": "SMTP sert à transporter du courrier électronique."
      }
    },
    "ics-q23": {
      "type": "short",
      "accepted": [
        "inspection approfondie",
        "inspection profonde",
        "deep packet inspection",
        "dpi"
      ],
      "explanation": "L’inspection approfondie (DPI) analyse le contenu applicatif des trames. Les pare-feu industriels l’utilisent pour filtrer les opérations d’écriture."
    },
    "ics-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "En OT, une action brutale peut créer un danger. Les équipes d’exploitation évaluent l’état du procédé et valident la réponse.",
      "whyWrong": {
        "c": "Cela peut créer un danger.",
        "a": "Cela peut perturber le procédé.",
        "d": "Cela détruit des preuves."
      }
    },
    "ics-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "Elle analyse une copie du trafic sans perturber les équipements fragiles. Elle détecte les nouvelles machines, les écritures inattendues et les changements de programme.",
      "whyWrong": {
        "d": "Elle détecte, elle ne bloque pas.",
        "b": "Elle ne remplace rien.",
        "a": "Elle n’agit pas sur les équipements."
      }
    },
    "ics-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "Modifier le programme d’un automate depuis un poste inhabituel peut signaler une compromission ou une manipulation du procédé.",
      "whyWrong": {
        "a": "C’est un fonctionnement normal.",
        "b": "C’est un fonctionnement normal.",
        "c": "C’est un fonctionnement normal."
      }
    },
    "ics-q27": {
      "type": "single",
      "correct": "a",
      "explanation": "Sans supervision, les opérateurs ne voient plus le procédé : la coupure peut elle-même provoquer un incident. La réponse se coordonne avec l’exploitation.",
      "whyWrong": {
        "b": "Elle peut au contraire créer un danger.",
        "d": "Couper la supervision n’accélère pas le procédé.",
        "c": "Couper le réseau ne chiffre aucune donnée."
      }
    },
    "ics-q28": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Restaurer un programme sain permet de rétablir le procédé rapidement et de comparer avec une version altérée. La sauvegarde est testée et stockée hors du réseau de production."
    },
    "ics-q29": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Source, destination, opération et équipement permettent de qualifier l’alerte et d’évaluer l’impact sur le procédé.",
      "whyWrong": {
        "c": "Cette information n’aide pas à qualifier une alerte."
      }
    },
    "ics-q30": {
      "type": "short",
      "accepted": [
        "mode dégradé",
        "mode degrade",
        "un mode dégradé",
        "fonctionnement dégradé"
      ],
      "explanation": "Le mode dégradé maintient l’essentiel de la production avec des moyens réduits (pilotage manuel, supervision locale) pendant que l’on traite l’incident."
    },
    "ics-q41": {
      "type": "single",
      "correct": "c",
      "explanation": "Le code fonction 0x83 est 0x03 (lecture de registres de maintien) avec le bit de poids fort à 1 : c’est une réponse d’erreur. Le code d’exception 02 signifie « adresse de donnée illégale » : l’automate ne possède pas l’adresse demandée.",
      "whyWrong": {
        "b": "Une réponse de succès reprend le code fonction tel quel (0x03), sans le bit d’erreur.",
        "d": "La fonction concernée est 0x03, une lecture ; et l’exception 02 désigne une adresse, pas une fonction.",
        "a": "Une confirmation d’écriture reprend le code 0x06 ou 0x10, sans le bit d’erreur."
      }
    },
    "ics-q42": {
      "type": "single",
      "correct": "d",
      "explanation": "Avec cette convention, 40001 correspond à l’adresse 0 : 40017 correspond donc à l’adresse 16. Un décalage de un entre la documentation et la capture est une erreur classique.",
      "whyWrong": {
        "a": "Ce serait l’adresse si la numérotation commençait à 0 pour le registre 40000, ce qui n’est pas la convention indiquée.",
        "c": "La trame ne transporte pas le préfixe 4xxxx de la numérotation historique.",
        "b": "Ce serait l’adresse du registre 40016 dans la documentation, soit un décalage de un en trop."
      }
    },
    "ics-q43": {
      "type": "single",
      "correct": "b",
      "explanation": "Le filtrage juge la source, le code fonction et la plage, pas la cohérence de la valeur. Une commande dangereuse émise par la supervision elle-même, source autorisée, passe : d’où le besoin de contrôler la cohérence des valeurs et de prévoir des sécurités indépendantes.",
      "whyWrong": {
        "c": "La source n’est pas la supervision : la liste blanche la refuse.",
        "d": "Hôte inconnu et bobine non autorisée : refusé par la liste.",
        "a": "Ce flux n’est pas autorisé par la liste : il est refusé."
      }
    },
    "ics-q44": {
      "type": "short",
      "accepted": [
        "02",
        "2",
        "0x02"
      ],
      "explanation": "Les trois codes d’exception de base sont 01 (fonction illégale), 02 (adresse de donnée illégale) et 03 (valeur de donnée illégale)."
    }
  },
};
