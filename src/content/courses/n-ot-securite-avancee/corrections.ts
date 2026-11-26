// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "n-ot-securite-avancee",
  questions: {
    "noa-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "La série s’adresse à trois rôles : le propriétaire de l’actif (exploitant), l’intégrateur qui installe le système et le fabricant des composants. Chacun a des exigences propres.",
      "whyWrong": {
        "d": "Trois rôles sont distingués.",
        "a": "Trois rôles sont distingués.",
        "c": "Sans rapport."
      }
    },
    "noa-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "Le SL-T est le niveau de protection que l’on veut atteindre pour une zone, déterminé par l’analyse de risques. On le compare ensuite au niveau atteint et aux capacités des composants.",
      "whyWrong": {
        "d": "Ce n’est pas un prix.",
        "a": "Sans rapport.",
        "b": "Sans rapport."
      }
    },
    "noa-q3": {
      "type": "single",
      "correct": "a",
      "explanation": "SL-T est la cible, SL-A le niveau effectivement atteint, SL-C la capacité des composants. L’écart entre SL-T et SL-A guide les mesures complémentaires.",
      "whyWrong": {
        "d": "Ce sont trois notions distinctes.",
        "b": "Ce ne sont pas des protocoles.",
        "c": "Ce ne sont pas des fabricants."
      }
    },
    "noa-q4": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La partie 4-1 décrit les exigences que doit remplir le fabricant pour développer des produits de manière sécurisée : conception, tests, gestion des vulnérabilités et mises à jour."
    },
    "noa-q5": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "La série couvre le programme de sécurité (partie 2), le système (partie 3) et les composants (partie 4). Elle ne traite pas d’esthétique.",
      "whyWrong": {
        "b": "Sans rapport avec la cybersécurité."
      }
    },
    "noa-q6": {
      "type": "short",
      "accepted": [
        "sl",
        "le sl"
      ],
      "explanation": "Le niveau de sécurité (Security Level, SL) va de 1 à 4 selon la capacité de résistance exigée face à des attaquants de plus en plus capables."
    },
    "noa-q7": {
      "type": "open",
      "model": "Démarche : 1) Inventorier les actifs et cartographier les flux. 2) Définir les zones (bureautique, DMZ, supervision, contrôle, systèmes de sûreté, maintenance) et les conduits entre elles. 3) Conduire une analyse de risques par zone, en intégrant les conséquences physiques, pour fixer un niveau de sécurité cible (SL-T) : plus élevé pour les systèmes de sûreté et le contrôle critique. 4) Comparer aux niveaux atteints (SL-A) et aux capacités des composants (SL-C), puis définir les mesures pour combler les écarts (segmentation, accès distants contrôlés, durcissement, supervision). 5) Répartir les responsabilités : l’exploitant (propriétaire de l’actif) porte le programme de sécurité et le risque, l’intégrateur installe et configure conformément aux exigences, les fabricants fournissent des composants conformes à 62443-4-1/4-2. 6) Mettre en place la gestion continue : surveillance, correctifs, revue.",
      "criteria": [
        "Des zones et conduits sont définis.",
        "Des niveaux cibles sont fixés à partir d’une analyse de risques.",
        "Les écarts entre niveau cible et atteint sont traités.",
        "Les rôles exploitant, intégrateur et fabricant sont distingués."
      ],
      "explanation": "La norme structure la démarche : zones, risques, niveaux, mesures, responsabilités, puis gestion continue."
    },
    "noa-q8": {
      "type": "single",
      "correct": "d",
      "explanation": "La diode est une barrière physique ou logique qui ne laisse passer l’information que dans un sens, par exemple de l’OT vers l’IT : aucune commande ne peut revenir.",
      "whyWrong": {
        "a": "C’est l’inverse.",
        "b": "Ce n’est pas un routeur.",
        "c": "Ce n’est pas une sauvegarde."
      }
    },
    "noa-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "Les données de production remontent vers l’IT (historique, indicateurs) sans qu’un attaquant du réseau de gestion puisse envoyer quoi que ce soit vers l’OT.",
      "whyWrong": {
        "d": "Elle bloque les commandes.",
        "b": "Elle ne la supprime pas.",
        "a": "Elle ne chiffre pas."
      }
    },
    "noa-q10": {
      "type": "single",
      "correct": "a",
      "explanation": "Le serveur de rebond impose un point de passage unique : authentification forte, autorisation à la demande et enregistrement de session avant tout accès à l’OT.",
      "whyWrong": {
        "b": "Ce n’est pas le but.",
        "c": "Il ne remplace rien.",
        "d": "Au contraire, il protège."
      }
    },
    "noa-q11": {
      "type": "single",
      "correct": "b",
      "explanation": "La micro-segmentation découpe le réseau en petites zones (par ligne de production, par équipement) pour limiter encore plus la propagation d’un incident.",
      "whyWrong": {
        "d": "Ce n’est pas la définition.",
        "c": "C’est l’inverse.",
        "a": "C’est l’inverse."
      }
    },
    "noa-q12": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les échanges existent, mais ils passent par une zone intermédiaire contrôlée (DMZ industrielle) avec des conduits filtrés et des flux précisément définis."
    },
    "noa-q13": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Zones, DMZ et accès distant contrôlé forment la base. Un réseau à plat permet à une compromission de se propager librement.",
      "whyWrong": {
        "c": "Il facilite la propagation."
      }
    },
    "noa-q14": {
      "type": "short",
      "accepted": [
        "bastion",
        "un bastion",
        "le bastion"
      ],
      "explanation": "Le bastion centralise les accès d’administration : authentification forte, autorisations limitées dans le temps, enregistrement des sessions."
    },
    "noa-q15": {
      "type": "single",
      "correct": "d",
      "explanation": "En OT, le risque inclut les atteintes aux personnes, à l’environnement et aux équipements, pas seulement les données. La sûreté oriente la priorisation.",
      "whyWrong": {
        "a": "La disponibilité est essentielle.",
        "c": "Elle concerne aussi les procédés.",
        "b": "Elle concerne tout le système."
      }
    },
    "noa-q16": {
      "type": "single",
      "correct": "c",
      "explanation": "L’étude de dangers identifie les scénarios d’accident. En la croisant avec les scénarios cyber, on repère les manipulations qui pourraient provoquer un accident.",
      "whyWrong": {
        "b": "Sans rapport.",
        "a": "Sans rapport.",
        "d": "Sans rapport."
      }
    },
    "noa-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "ATT&CK pour les ICS recense les tactiques et techniques observées contre les systèmes industriels. Elle aide à construire des scénarios et à évaluer la couverture de détection.",
      "whyWrong": {
        "c": "Sans rapport.",
        "a": "Sans rapport.",
        "b": "Sans rapport."
      }
    },
    "noa-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "Une conséquence pouvant causer des blessures ou un accident majeur justifie un niveau de protection élevé même si le scénario est peu probable.",
      "whyWrong": {
        "c": "Elle la complète.",
        "b": "Sans rapport.",
        "d": "Sans rapport."
      }
    },
    "noa-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La manipulation de consignes ou la neutralisation d’un système de sûreté peut provoquer un accident. C’est pourquoi l’analyse cyber et l’analyse de sûreté se croisent."
    },
    "noa-q20": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Scénarios, chemins d’attaque, mesures et risque résiduel forment l’analyse. La couleur des voyants n’y a pas sa place.",
      "whyWrong": {
        "b": "Sans rapport avec le risque."
      }
    },
    "noa-q21": {
      "type": "single",
      "correct": "b",
      "explanation": "Le trafic industriel est très régulier : mêmes équipements, mêmes cycles, mêmes commandes. Le profil de référence permet de repérer un écart.",
      "whyWrong": {
        "d": "Ce n’est pas la définition.",
        "c": "Ce n’est pas la définition.",
        "a": "Ce n’est pas la définition."
      }
    },
    "noa-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "La régularité du trafic OT rend les écarts (nouvel équipement, écriture inhabituelle) plus faciles à détecter que sur un réseau de bureau très variable.",
      "whyWrong": {
        "b": "Il est au contraire régulier.",
        "a": "Elle est recommandée.",
        "c": "Elle les complète."
      }
    },
    "noa-q23": {
      "type": "single",
      "correct": "c",
      "explanation": "La plupart des attaques contre l’OT commencent par l’IT. Corréler les événements des deux mondes permet de suivre la progression de l’attaquant.",
      "whyWrong": {
        "a": "Ce n’est pas l’objet.",
        "d": "Ce n’est pas l’objet.",
        "b": "Ce serait un risque."
      }
    },
    "noa-q24": {
      "type": "truefalse",
      "correct": true,
      "explanation": "L’exploitation connaît l’état du procédé et les conséquences d’un arrêt. La qualification conjointe évite qu’une réponse de sécurité provoque un incident."
    },
    "noa-q25": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La sonde voit les adresses source et destination, le code fonction et la valeur. Elle indique donc qui a écrit, quoi et où, sans émettre de trafic."
    },
    "noa-q26": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Nouvel équipement, écriture inhabituelle et téléchargement hors maintenance sont des signaux forts. Une lecture périodique est un comportement normal.",
      "whyWrong": {
        "b": "C’est un fonctionnement normal."
      }
    },
    "noa-q27": {
      "type": "short",
      "accepted": [
        "détection d’anomalies",
        "detection d’anomalies",
        "détection d'anomalies",
        "detection d anomalies",
        "détection d’anomalie"
      ],
      "explanation": "La détection d’anomalies compare l’activité au profil normal. Elle repère des attaques inconnues, mais demande un réglage pour limiter les fausses alertes."
    },
    "noa-q28": {
      "type": "single",
      "correct": "b",
      "explanation": "Un fabricant qui conçoit, teste et corrige de manière maîtrisée livre moins de failles et gère mieux celles qui apparaissent.",
      "whyWrong": {
        "a": "Ce n’est pas le but.",
        "c": "Les mises à jour restent nécessaires.",
        "d": "Il ne les supprime pas."
      }
    },
    "noa-q29": {
      "type": "single",
      "correct": "a",
      "explanation": "Quand le correctif n’est pas applicable, un filtrage (pare-feu industriel, système de prévention) bloque la tentative d’exploitation de la faille : c’est une mesure compensatoire.",
      "whyWrong": {
        "b": "Ce n’est pas la définition.",
        "d": "Ce n’est pas la définition.",
        "c": "Ce n’est pas la définition."
      }
    },
    "noa-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "Chaque intervention doit être autorisée, limitée dans le temps, rattachée à une personne et enregistrée.",
      "whyWrong": {
        "b": "Aucune traçabilité.",
        "a": "Aucune traçabilité.",
        "c": "Risque majeur."
      }
    },
    "noa-q31": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les réglages d’usine (comptes, services, ports) doivent être vérifiés et adaptés : mots de passe, services inutiles, journalisation. La recette de sécurité fait partie de la livraison."
    },
    "noa-q32": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Délai de correction, notification et nomenclature logicielle donnent à l’exploitant de la visibilité. Interdire l’audit supprime tout contrôle.",
      "whyWrong": {
        "b": "L’exploitant doit pouvoir contrôler."
      }
    },
    "noa-q33": {
      "type": "short",
      "accepted": [
        "sbom",
        "le sbom"
      ],
      "explanation": "Le SBOM (Software Bill of Materials) liste les composants d’un produit. Il permet d’identifier rapidement les équipements concernés quand une vulnérabilité est publiée."
    },
    "noa-q34": {
      "type": "open",
      "model": "Exigences : conformité aux exigences de l’IEC 62443 pour l’intégration (zones et conduits conformes à l’architecture de l’exploitant) ; livraison d’un système durci (comptes nominatifs, mots de passe changés, services et ports inutiles désactivés, journalisation activée) et d’une documentation complète (architecture, flux, inventaire, sauvegardes des configurations) ; interdiction des accès distants permanents, accès uniquement par le bastion de l’exploitant avec authentification forte et enregistrement ; fourniture d’une nomenclature logicielle et d’un délai de correction des vulnérabilités critiques ; engagement de notifier les incidents sous un délai fixé ; recette de sécurité avant mise en service (tests, revue de configuration, absence de comptes par défaut) ; droit d’audit ; formation des opérateurs ; clause de réversibilité et restitution des sauvegardes et des mots de passe d’administration ; sous-traitance soumise à accord.",
      "criteria": [
        "L’exigence d’un système livré durci et documenté est présente.",
        "Les accès distants sont encadrés (bastion, authentification, enregistrement).",
        "Des exigences de vulnérabilités (SBOM, délais) et de notification d’incident sont citées.",
        "Une recette de sécurité et un droit d’audit sont prévus."
      ],
      "explanation": "Les exigences contractuelles font de la sécurité un livrable vérifiable de l’intégrateur plutôt qu’une option."
    },
    "noa-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "Une sauvegarde jamais restaurée n’offre aucune assurance : version incompatible, fichier incomplet, procédure inconnue. Le test valide le temps et la méthode.",
      "whyWrong": {
        "c": "Sans rapport.",
        "b": "Sans rapport.",
        "d": "Sans rapport."
      }
    },
    "noa-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "Si la supervision est indisponible, les opérateurs doivent pouvoir piloter le procédé de façon sûre avec des moyens locaux. La procédure est écrite et exercée.",
      "whyWrong": {
        "b": "Ce n’est pas une panne.",
        "a": "Ce n’est pas un arrêt.",
        "d": "Ce n’est pas un test."
      }
    },
    "noa-q37": {
      "type": "single",
      "correct": "b",
      "explanation": "L’exercice révèle les contacts manquants, les décisions floues et les dépendances oubliées, sans risque pour la production.",
      "whyWrong": {
        "c": "Ce n’est pas l’objet.",
        "d": "Ce n’est pas l’objet.",
        "a": "Ce n’est pas l’objet."
      }
    },
    "noa-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Une sauvegarde accessible depuis le réseau de production peut être altérée ou supprimée par un attaquant. Une copie hors ligne permet de restaurer en sécurité."
    },
    "noa-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Sauvegardes, procédures manuelles et pièces de rechange permettent de reprendre. Une documentation obsolète fait perdre un temps précieux.",
      "whyWrong": {
        "d": "Elle ralentit la reprise."
      }
    },
    "noa-q40": {
      "type": "short",
      "accepted": [
        "sis",
        "le sis"
      ],
      "explanation": "Un SIS (Safety Instrumented System) surveille des paramètres critiques et déclenche un arrêt ou une mise en sécurité. Il est protégé en priorité, car il est la dernière barrière."
    }
  },
};
