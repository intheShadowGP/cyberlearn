// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "m-gouvernance-avancee",
  questions: {
    "mga-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "Un risque exprimé en euros se compare à d’autres risques et au coût des mesures, ce qui permet d’arbitrer un budget. Il reste une estimation, avec ses hypothèses.",
      "whyWrong": {
        "c": "L’incertitude subsiste.",
        "d": "Les experts fournissent les estimations.",
        "a": "Les hypothèses doivent être documentées."
      }
    },
    "mga-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "L’espérance de perte annuelle multiplie la fréquence attendue d’un événement par la perte moyenne qu’il cause. Elle sert à comparer des scénarios et à évaluer l’intérêt d’une mesure.",
      "whyWrong": {
        "c": "C’est un budget, pas une perte.",
        "b": "C’est la perte maximale, non espérée.",
        "d": "Sans rapport."
      }
    },
    "mga-q3": {
      "type": "single",
      "correct": "d",
      "explanation": "Les fréquences et les pertes sont incertaines. Une fourchette (minimum, plus probable, maximum) rend cette incertitude visible et évite une fausse précision.",
      "whyWrong": {
        "c": "Elle complique plutôt les calculs.",
        "a": "Elle éclaire la décision.",
        "b": "La norme ne l’exige pas."
      }
    },
    "mga-q4": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le gain attendu (perte espérée avant moins perte espérée après) est comparé au coût de la mesure. D’autres critères, comme la conformité, peuvent aussi justifier une mesure."
    },
    "mga-q5": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Historique, rapports sectoriels et avis d’experts calibrés se recoupent. Une intuition isolée et non argumentée n’est pas une base défendable.",
      "whyWrong": {
        "b": "Une estimation doit être argumentée et recoupée."
      }
    },
    "mga-q6": {
      "type": "short",
      "accepted": [
        "appétit pour le risque",
        "appétence pour le risque",
        "appétence au risque",
        "appétit du risque",
        "risk appetite",
        "l’appétit pour le risque"
      ],
      "explanation": "L’appétit pour le risque fixe, par la direction, le niveau de risque tolérable. Il sert de référence pour décider si un risque est accepté ou doit être traité."
    },
    "mga-q7": {
      "type": "open",
      "model": "Définir le scénario (rançongiciel chiffrant la production, avec vol de données) et ses composantes de perte : arrêt d’activité (chiffre d’affaires perdu par jour × durée), coûts de reprise et d’expertise, notification et sanctions éventuelles, atteinte à la réputation, rançon éventuelle. Estimer la fréquence à partir de l’historique, des rapports sectoriels et d’avis d’experts, et exprimer fréquence et pertes en fourchettes. Calculer la perte espérée annuelle avant mesures, puis après mesures (sauvegardes immuables, authentification multifacteur, segmentation, détection) en estimant la réduction de fréquence et d’impact. Comparer le gain attendu au coût annualisé des 300 k€ et présenter l’incertitude, les hypothèses et des variantes. Relier le tout à l’appétit pour le risque de la direction et proposer des indicateurs de suivi.",
      "criteria": [
        "Les composantes de perte du scénario sont identifiées.",
        "La fréquence et les pertes sont estimées avec leurs sources et en fourchettes.",
        "Le gain attendu est comparé au coût des mesures.",
        "L’appétit pour le risque et des indicateurs de suivi sont mentionnés."
      ],
      "explanation": "Un argumentaire convaincant explicite ses hypothèses, montre l’incertitude et relie la décision à l’appétit pour le risque."
    },
    "mga-q8": {
      "type": "single",
      "correct": "c",
      "explanation": "Un même contrôle (revue des accès, sauvegarde testée) répond à plusieurs exigences. On le conçoit une fois, on le prouve une fois et on le rattache à chaque texte.",
      "whyWrong": {
        "d": "L’obligation demeure.",
        "b": "Le périmètre ne disparaît pas.",
        "a": "Les autorités restent compétentes."
      }
    },
    "mga-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "La cartographie montre les recouvrements, mais NIS2 ajoute des exigences propres (notification, direction, chaîne d’approvisionnement) et un périmètre distinct du certificat.",
      "whyWrong": {
        "d": "Elle n’est pas interdite.",
        "b": "Elle est légale.",
        "a": "Elle en contient."
      }
    },
    "mga-q10": {
      "type": "single",
      "correct": "d",
      "explanation": "La proportionnalité adapte la profondeur des mesures à la taille de l’entité, à son exposition et à l’impact de ses activités, sans dispenser des exigences de base.",
      "whyWrong": {
        "a": "Le coût n’est pas le critère.",
        "b": "Ce serait ignorer la proportion.",
        "c": "Les petites entités restent concernées."
      }
    },
    "mga-q11": {
      "type": "single",
      "correct": "b",
      "explanation": "Le cadre en six fonctions (gouverner, identifier, protéger, détecter, répondre, rétablir) donne un vocabulaire partagé et des niveaux de maturité compréhensibles par des non-spécialistes.",
      "whyWrong": {
        "a": "Il n’est pas certifiable.",
        "c": "Ce n’est pas son format.",
        "d": "Ce n’est pas son objet."
      }
    },
    "mga-q12": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Chaque texte a son périmètre, ses exigences et ses autorités. Un audit peut mutualiser des preuves, mais chaque exigence doit être rapprochée et vérifiée."
    },
    "mga-q13": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Exigence, contrôle, propriétaire et preuve forment la chaîne de traçabilité. Le nombre de pages n’apporte rien.",
      "whyWrong": {
        "d": "Il n’aide pas à démontrer la conformité."
      }
    },
    "mga-q14": {
      "type": "short",
      "accepted": [
        "dora",
        "le dora"
      ],
      "explanation": "DORA (Digital Operational Resilience Act) impose au secteur financier la gestion du risque TIC, des tests de résilience, la maîtrise des prestataires et la notification des incidents."
    },
    "mga-q15": {
      "type": "single",
      "correct": "a",
      "explanation": "Si un seul prestataire porte plusieurs services critiques, sa défaillance paralyse l’organisation. On identifie ces dépendances et on prévoit des alternatives.",
      "whyWrong": {
        "b": "Ce n’est pas la définition.",
        "c": "Ce n’est pas la définition.",
        "d": "Ce n’est pas la définition."
      }
    },
    "mga-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "Les incidents se propagent par la chaîne : un sous-traitant du fournisseur peut détenir des données ou des accès. Le contrat doit encadrer la sous-traitance et la notification.",
      "whyWrong": {
        "c": "Ce n’est pas leur rôle.",
        "a": "Ils ne remplacent aucun audit.",
        "b": "Ils peuvent y avoir accès."
      }
    },
    "mga-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "La stratégie de sortie décrit comment poursuivre l’activité si le prestataire défaille ou si l’on rompt le contrat : réversibilité, données, transition, délais.",
      "whyWrong": {
        "c": "Ce n’est pas un plan.",
        "d": "Ce n’est pas son objet.",
        "a": "Sans rapport."
      }
    },
    "mga-q18": {
      "type": "single",
      "correct": "c",
      "explanation": "DORA impose de tenir un registre d’informations sur les accords contractuels avec les prestataires TIC, pour permettre à l’entité et aux autorités de suivre les dépendances.",
      "whyWrong": {
        "d": "Sans rapport.",
        "a": "Sans rapport.",
        "b": "Sans rapport."
      }
    },
    "mga-q19": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Une certification est un élément d’évaluation sur un périmètre donné. L’organisation reste responsable : elle suit les risques, les accès, les incidents et la dépendance."
    },
    "mga-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Incident, changement de contrôle ou de chaîne, extension d’accès modifient le risque. Un changement purement visuel n’en modifie pas le niveau.",
      "whyWrong": {
        "c": "Il n’affecte pas le risque."
      }
    },
    "mga-q21": {
      "type": "single",
      "correct": "a",
      "explanation": "Des mesures automatiques (taux de postes corrigés, comptes sans second facteur) alimentent des tableaux de bord et fournissent des preuves régulières, plutôt qu’un contrôle ponctuel.",
      "whyWrong": {
        "b": "C’est un contrôle ponctuel.",
        "d": "Ce n’est pas son objet.",
        "c": "Ce n’est pas son objet."
      }
    },
    "mga-q22": {
      "type": "single",
      "correct": "a",
      "explanation": "L’échantillon est choisi par l’auditeur selon une méthode (aléatoire, par risque) pour refléter la population. Un échantillon désigné par l’audité ou trop petit peut masquer des écarts.",
      "whyWrong": {
        "d": "Ce choix est arbitraire.",
        "b": "Le choix biaiserait l’audit.",
        "c": "Un seul cas ne représente pas la population."
      }
    },
    "mga-q23": {
      "type": "single",
      "correct": "c",
      "explanation": "Un écart majeur indique que le système ne répond pas à une exigence, ou qu’un contrôle clé ne fonctionne pas. Il appelle une action corrective rapide et peut bloquer une certification.",
      "whyWrong": {
        "d": "C’est une remarque mineure.",
        "b": "C’est une observation.",
        "a": "Ce n’est pas un écart d’audit."
      }
    },
    "mga-q24": {
      "type": "truefalse",
      "correct": true,
      "explanation": "L’indépendance garantit l’objectivité des constats. Un auditeur ne peut pas juger sa propre activité sans conflit d’intérêts."
    },
    "mga-q25": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Une capture ponctuelle montre un état, pas un fonctionnement dans la durée. Des preuves datées, issues du système source et produites régulièrement sont bien plus convaincantes."
    },
    "mga-q26": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Une preuve datée, issue du système source et traçable peut être revérifiée. Une déclaration orale ne laisse aucune trace.",
      "whyWrong": {
        "b": "Elle n’est pas vérifiable."
      }
    },
    "mga-q27": {
      "type": "short",
      "accepted": [
        "écart",
        "ecart",
        "non-conformité",
        "non conformité",
        "nonconformité"
      ],
      "explanation": "Un écart (ou non-conformité) est un manquement constaté par rapport à une exigence. Il est classé (mineur, majeur) et suivi jusqu’à sa correction."
    },
    "mga-q28": {
      "type": "single",
      "correct": "b",
      "explanation": "Un conseil a besoin de peu d’indicateurs, reliés aux risques majeurs et aux décisions à prendre : exposition, tendance, écarts à l’appétit pour le risque.",
      "whyWrong": {
        "d": "Trop détaillé.",
        "a": "Peu informatif.",
        "c": "Illisible pour un conseil."
      }
    },
    "mga-q29": {
      "type": "single",
      "correct": "d",
      "explanation": "Un seuil lié à l’appétit pour le risque transforme une mesure en signal : au-delà, la direction doit décider (accepter, traiter, arbitrer).",
      "whyWrong": {
        "b": "Ce n’est pas son objet.",
        "a": "Il suppose de mesurer.",
        "c": "Il ne les remplace pas."
      }
    },
    "mga-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "NIS2 renforce la responsabilité des organes de direction : approbation des mesures, supervision, formation, et sanctions possibles selon les transpositions nationales.",
      "whyWrong": {
        "a": "Elle engage la direction.",
        "c": "Ce n’est pas une conséquence prévue.",
        "b": "Insuffisant."
      }
    },
    "mga-q31": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Des chiffres sans lecture sont mal interprétés. Le tableau de bord s’accompagne d’une analyse, des écarts à l’appétit pour le risque et des décisions attendues."
    },
    "mga-q32": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "La direction décide à partir de l’impact métier, des options et d’une recommandation. Le détail technique reste en annexe.",
      "whyWrong": {
        "b": "Il noie la décision dans le détail."
      }
    },
    "mga-q33": {
      "type": "short",
      "accepted": [
        "kri",
        "key risk indicator",
        "un kri"
      ],
      "explanation": "Un KRI (Key Risk Indicator) signale l’évolution d’un risque et déclenche une décision quand un seuil est franchi, par exemple le délai moyen de correction des vulnérabilités critiques."
    },
    "mga-q34": {
      "type": "open",
      "model": "Contenu : un message d’ouverture (niveau de risque global par rapport à l’appétit défini), les risques majeurs et leur évolution, les incidents significatifs et les leçons, l’état de la conformité (NIS2, RGPD, secteur) avec les écarts majeurs, la situation des tiers critiques, les résultats des tests et exercices. Indicateurs : cinq à huit indicateurs clés de risque avec cibles et tendance (délai de correction des vulnérabilités critiques, couverture de l’authentification multifacteur, taux de restauration réussie, écarts d’audit ouverts, exercice de crise), accompagnés d’une lecture. Décisions attendues : budget des chantiers prioritaires, acceptation formelle des risques résiduels majeurs, validation de la stratégie et des échéances, désignation des responsables. Rester bref, relier chaque point à un impact métier et ne pas noyer le conseil sous le détail technique.",
      "criteria": [
        "Les risques majeurs et leur évolution par rapport à l’appétit sont présentés.",
        "Un petit nombre d’indicateurs avec cibles et lecture est proposé.",
        "La conformité et les tiers critiques sont abordés.",
        "Les décisions attendues du conseil sont explicitées."
      ],
      "explanation": "Un conseil ne cherche pas des détails techniques : il décide à partir de risques, d’écarts et d’options claires."
    },
    "mga-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "Le scénario sévère mais plausible (cyberattaque majeure, perte d’un prestataire) pousse l’organisation au-delà de ses incidents courants, sans être irréaliste.",
      "whyWrong": {
        "a": "Il doit rester crédible.",
        "b": "Il doit être exigeant.",
        "d": "Un objectif est nécessaire."
      }
    },
    "mga-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "Un plan de reprise qui dépend d’éléments situés sur le site sinistré (annuaire, documentation, accès) échoue le jour J. Le test révèle ces dépendances cachées.",
      "whyWrong": {
        "c": "Ce n’est pas le but.",
        "d": "Les sauvegardes restent nécessaires.",
        "a": "Il le valide."
      }
    },
    "mga-q37": {
      "type": "single",
      "correct": "a",
      "explanation": "La tolérance à l’impact fixe jusqu’où une activité critique peut être perturbée avant un préjudice inacceptable pour l’organisation ou ses clients. Elle guide les plans et les tests.",
      "whyWrong": {
        "d": "C’est un autre sujet.",
        "b": "Ce n’est pas la définition.",
        "c": "Ce n’est pas la définition."
      }
    },
    "mga-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Sans plan d’action suivi, les constats se répètent d’un exercice à l’autre. Chaque écart reçoit un responsable, une échéance et une vérification."
    },
    "mga-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Identités, réseau et accès des opérateurs conditionnent la reprise : sans eux, les applications restaurées restent inutilisables.",
      "whyWrong": {
        "d": "Sans incidence sur la reprise."
      }
    },
    "mga-q40": {
      "type": "short",
      "accepted": [
        "red team",
        "red teaming",
        "équipe rouge",
        "une red team"
      ],
      "explanation": "Une red team mène, dans un cadre autorisé et convenu, un scénario d’attaque réaliste afin de tester la détection et la réponse de l’organisation. DORA prévoit des tests fondés sur la menace pour certaines entités."
    }
  },
};
