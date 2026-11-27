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
        "d": "La série ne se limite pas au fabricant : elle distingue aussi l’exploitant et l’intégrateur.",
        "a": "L’exploitant n’est qu’un des trois rôles : il manque l’intégrateur et le fabricant.",
        "c": "La messagerie ne relève pas des systèmes d’automatisation visés par la série."
      }
    },
    "noa-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "Le SL-T est le niveau de protection que l’on veut atteindre pour une zone, déterminé par l’analyse de risques. On le compare ensuite au niveau atteint et aux capacités des composants.",
      "whyWrong": {
        "d": "Le SL-T est un niveau de protection visé, pas un prix.",
        "a": "Le nombre d’opérateurs n’intervient pas dans le niveau de sécurité cible.",
        "b": "La date de mise en service n’a aucun lien avec le niveau de sécurité visé."
      }
    },
    "noa-q3": {
      "type": "single",
      "correct": "a",
      "explanation": "SL-T est la cible, SL-A le niveau effectivement atteint, SL-C la capacité des composants. L’écart entre SL-T et SL-A guide les mesures complémentaires.",
      "whyWrong": {
        "d": "Les trois sigles désignent trois notions distinctes : cible, atteint et capacité.",
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
        "b": "La série traite de sécurité, pas d’aménagement ni de couleur des armoires électriques."
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
        "a": "Un pare-feu classique laisse passer les flux dans les deux sens, contrairement à une diode.",
        "b": "Un routeur sans fil relie des réseaux ; il ne garantit pas un flux à sens unique.",
        "c": "Une sauvegarde hors ligne protège des données, elle ne contrôle pas un flux réseau."
      }
    },
    "noa-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "Les données de production remontent vers l’IT (historique, indicateurs) sans qu’un attaquant du réseau de gestion puisse envoyer quoi que ce soit vers l’OT.",
      "whyWrong": {
        "d": "La passerelle unidirectionnelle ne transmet aucune commande vers l’OT.",
        "b": "La zone intermédiaire reste utile : la passerelle s’y ajoute, elle ne la supprime pas.",
        "a": "Elle ne chiffre pas les capteurs : elle impose un sens unique de circulation."
      }
    },
    "noa-q10": {
      "type": "single",
      "correct": "a",
      "explanation": "Le serveur de rebond impose un point de passage unique : authentification forte, autorisation à la demande et enregistrement de session avant tout accès à l’OT.",
      "whyWrong": {
        "b": "La bande passante n’est pas l’objectif d’un serveur de rebond.",
        "c": "Le serveur de rebond ne remplace pas les automates, il contrôle les accès.",
        "d": "C’est l’inverse : il évite d’exposer directement l’OT."
      }
    },
    "noa-q11": {
      "type": "single",
      "correct": "b",
      "explanation": "La micro-segmentation découpe le réseau en petites zones (par ligne de production, par équipement) pour limiter encore plus la propagation d’un incident.",
      "whyWrong": {
        "d": "La micro-segmentation découpe le réseau en zones ; elle ne modifie pas la taille des paquets.",
        "c": "Fusionner les réseaux est le contraire de la segmentation.",
        "a": "Elle s’appuie sur des filtrages entre zones : on ne supprime pas les pare-feu."
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
        "c": "Un réseau à plat laisse une compromission se propager : il n’est pas défendable."
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
        "a": "En OT, la disponibilité est au contraire centrale pour la production.",
        "c": "Le risque OT ne se limite pas aux données : il inclut les effets physiques.",
        "b": "L’analyse de risques ne se limite pas aux pare-feu : elle couvre tout le système."
      }
    },
    "noa-q16": {
      "type": "single",
      "correct": "c",
      "explanation": "L’étude de dangers identifie les scénarios d’accident. En la croisant avec les scénarios cyber, on repère les manipulations qui pourraient provoquer un accident.",
      "whyWrong": {
        "b": "Le référencement d’un site web est sans rapport avec la sûreté d’un procédé.",
        "a": "Une migration de messagerie ne traite pas les scénarios d’accident industriel.",
        "d": "Un inventaire de licences relève de la gestion, pas de la sûreté du procédé."
      }
    },
    "noa-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "ATT&CK pour les ICS recense les tactiques et techniques observées contre les systèmes industriels. Elle aide à construire des scénarios et à évaluer la couverture de détection.",
      "whyWrong": {
        "c": "Un annuaire d’entreprise gère des identités, pas des techniques d’attaque.",
        "a": "Un manuel de comptabilité ne décrit aucune technique d’attaque.",
        "b": "Un catalogue de mobilier n’a aucun rapport avec les techniques d’attaque."
      }
    },
    "noa-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "Une conséquence pouvant causer des blessures ou un accident majeur justifie un niveau de protection élevé même si le scénario est peu probable.",
      "whyWrong": {
        "c": "La conséquence ne remplace pas la vraisemblance : elle s’y ajoute pour prioriser.",
        "b": "La conséquence se mesure en effets sur la sûreté, pas en débit réseau.",
        "d": "La conséquence dépend du procédé, pas des licences du fournisseur."
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
        "b": "La couleur des voyants n’apporte rien à l’analyse des scénarios et des conséquences."
      }
    },
    "noa-q21": {
      "type": "single",
      "correct": "b",
      "explanation": "Le trafic industriel est très régulier : mêmes équipements, mêmes cycles, mêmes commandes. Le profil de référence permet de repérer un écart.",
      "whyWrong": {
        "d": "Une liste de mots de passe n’est pas un profil de trafic et ne doit pas être conservée ainsi.",
        "c": "Le plan des locaux ne décrit pas les échanges réseau.",
        "a": "Un calendrier de maintenance ne décrit pas le trafic habituel."
      }
    },
    "noa-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "La régularité du trafic OT rend les écarts (nouvel équipement, écriture inhabituelle) plus faciles à détecter que sur un réseau de bureau très variable.",
      "whyWrong": {
        "b": "C’est l’inverse : le trafic industriel est très régulier.",
        "a": "La détection n’est pas interdite en OT ; la sonde passive est recommandée.",
        "c": "La détection complète les pare-feu, elle ne les remplace pas."
      }
    },
    "noa-q23": {
      "type": "single",
      "correct": "c",
      "explanation": "La plupart des attaques contre l’OT commencent par l’IT. Corréler les événements des deux mondes permet de suivre la progression de l’attaquant.",
      "whyWrong": {
        "a": "Corréler ne supprime pas les alertes : cela les relie entre elles.",
        "d": "Le but n’est pas de désactiver la supervision mais de l’enrichir.",
        "b": "Corréler les événements ne fusionne pas les réseaux : ils restent séparés."
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
        "b": "Une lecture périodique habituelle fait partie du profil normal, pas d’une anomalie."
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
        "a": "Le cycle sécurisé vise moins de failles, pas un prix d’achat plus bas.",
        "c": "Les mises à jour restent nécessaires : un cycle sécurisé aide à les produire et à les livrer.",
        "d": "Il facilite les audits, il ne les évite pas."
      }
    },
    "noa-q29": {
      "type": "single",
      "correct": "a",
      "explanation": "Quand le correctif n’est pas applicable, un filtrage (pare-feu industriel, système de prévention) bloque la tentative d’exploitation de la faille : c’est une mesure compensatoire.",
      "whyWrong": {
        "b": "Un correctif hors ligne reste un vrai correctif ; le correctif virtuel agit sur le réseau.",
        "d": "Un patch non signé serait un risque, pas un correctif virtuel.",
        "c": "Une sauvegarde de configuration ne bloque aucune exploitation."
      }
    },
    "noa-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "Chaque intervention doit être autorisée, limitée dans le temps, rattachée à une personne et enregistrée.",
      "whyWrong": {
        "b": "Un compte partagé et permanent empêche d’identifier l’intervenant.",
        "a": "Un mot de passe commun supprime toute imputabilité.",
        "c": "L’exploitant doit au contraire garder le contrôle des accès."
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
        "b": "Interdire l’audit prive l’exploitant de toute vérification."
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
        "c": "Tester une restauration n’a aucun effet sur le réseau local.",
        "b": "Cela ne supprime pas la supervision : cela vérifie la sauvegarde.",
        "d": "La consommation électrique n’est pas l’objet d’un test de restauration."
      }
    },
    "noa-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "Si la supervision est indisponible, les opérateurs doivent pouvoir piloter le procédé de façon sûre avec des moyens locaux. La procédure est écrite et exercée.",
      "whyWrong": {
        "b": "Une panne provoquée n’est pas une procédure de fonctionnement.",
        "a": "Le mode manuel maintient le procédé ; il ne l’arrête pas.",
        "d": "Un test d’intrusion est une évaluation de sécurité, pas un mode de pilotage."
      }
    },
    "noa-q37": {
      "type": "single",
      "correct": "b",
      "explanation": "L’exercice révèle les contacts manquants, les décisions floues et les dépendances oubliées, sans risque pour la production.",
      "whyWrong": {
        "c": "Un exercice de crise teste des équipes, pas des câbles.",
        "d": "La consommation électrique n’est pas l’objet d’un exercice de crise.",
        "a": "Le choix d’un fournisseur relève des achats, pas d’un exercice."
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
        "d": "Une documentation obsolète ralentit la reprise au lieu de l’accélérer."
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
