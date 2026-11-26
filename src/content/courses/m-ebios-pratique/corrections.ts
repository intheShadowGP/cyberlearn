// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "m-ebios-pratique",
  questions: {
    "ebp-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "Une valeur métier est ce qui compte pour l’organisation : un processus (facturation), une information (dossiers clients), un savoir-faire. Les équipements ne sont que des biens supports.",
      "whyWrong": {
        "d": "Un prix n’est pas une valeur métier.",
        "b": "Un serveur est un bien support.",
        "a": "C’est une mesure de sécurité."
      }
    },
    "ebp-q2": {
      "type": "single",
      "correct": "d",
      "explanation": "Un événement redouté décrit l’atteinte d’une valeur métier (confidentialité, intégrité, disponibilité) et ses conséquences. Sa gravité est évaluée indépendamment de la façon dont il se produirait.",
      "whyWrong": {
        "c": "C’est une faiblesse, pas un événement.",
        "a": "C’est une source de risque.",
        "b": "C’est une mesure."
      }
    },
    "ebp-q3": {
      "type": "single",
      "correct": "a",
      "explanation": "Un bien support est un élément du système sur lequel repose une valeur métier : serveur, application, réseau, local, personnel.",
      "whyWrong": {
        "b": "Ce n’est pas une règle.",
        "d": "Ce n’est pas un attaquant.",
        "c": "Ce n’est pas une sauvegarde."
      }
    },
    "ebp-q4": {
      "type": "single",
      "correct": "b",
      "explanation": "La gravité mesure les conséquences pour l’organisation, quelle que soit la méthode d’attaque. On la fixe d’abord, avec les métiers, avant de s’intéresser aux scénarios.",
      "whyWrong": {
        "c": "On parle ensuite des menaces.",
        "a": "Ils sont étudiés à l’atelier 2.",
        "d": "Ce n’est pas le but."
      }
    },
    "ebp-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le socle recense les règles applicables (politiques, normes, réglementations) et leurs écarts. Il distingue ce qui relève de la conformité de ce qui exige une analyse de scénarios."
    },
    "ebp-q6": {
      "type": "short",
      "accepted": [
        "gravité",
        "gravite",
        "la gravité"
      ],
      "explanation": "La gravité s’évalue sur une échelle à quatre niveaux (mineure, significative, grave, critique), définie avec les métiers avant l’analyse."
    },
    "ebp-q7": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "L’atelier 1 cadre le périmètre, identifie les valeurs métier, les événements redoutés et le socle de sécurité. Le choix d’outils intervient bien plus tard.",
      "whyWrong": {
        "c": "Il relève du traitement du risque."
      }
    },
    "ebp-q8": {
      "type": "single",
      "correct": "b",
      "explanation": "Une source de risque est une personne ou un groupe susceptible de porter atteinte à l’organisation : groupe cybercriminel, acteur étatique, concurrent, initié.",
      "whyWrong": {
        "c": "C’est une vulnérabilité.",
        "d": "Ce n’est pas un acteur.",
        "a": "Ce n’est pas un acteur."
      }
    },
    "ebp-q9": {
      "type": "single",
      "correct": "d",
      "explanation": "L’objectif visé est ce que cherche la source de risque : extorsion, espionnage, sabotage, vol de données, atteinte à l’image.",
      "whyWrong": {
        "c": "C’est une mesure.",
        "a": "Sans rapport.",
        "b": "Sans rapport."
      }
    },
    "ebp-q10": {
      "type": "single",
      "correct": "a",
      "explanation": "On retient les couples les plus pertinents au regard de la motivation de la source, de ses ressources et de son activité, pour concentrer l’effort sur les scénarios plausibles.",
      "whyWrong": {
        "c": "Aucun rapport.",
        "d": "Insuffisant.",
        "b": "Aucun rapport."
      }
    },
    "ebp-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "On évalue la pertinence de chaque couple et on retient les plus plausibles pour la suite. Retenir tout rendrait l’analyse ingérable."
    },
    "ebp-q12": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Cybercriminels, acteurs étatiques et initiés sont des sources de risque classiques. Un équipement n’est pas un acteur.",
      "whyWrong": {
        "d": "Un matériel n’est pas un acteur."
      }
    },
    "ebp-q13": {
      "type": "short",
      "accepted": [
        "cybercriminel",
        "cybercriminels",
        "cybercriminalité",
        "le cybercriminel"
      ],
      "explanation": "Les cybercriminels agissent surtout pour un gain financier : extorsion par rançongiciel, fraude, revente de données."
    },
    "ebp-q14": {
      "type": "open",
      "model": "1) Groupe cybercriminel, objectif extorsion : motivation forte, ressources importantes, activité très présente contre les établissements de santé, valeur de l’indisponibilité du système d’information. 2) Groupe cybercriminel ou revendeur, objectif vol de données de santé pour la revente ou le chantage : données très sensibles et valorisées. 3) Initié (salarié ou prestataire) négligent ou malveillant, objectif consultation indue de dossiers : motivation variable, ressources faibles mais accès légitimes déjà en place. On peut aussi justifier d’écarter un couple moins pertinent (par exemple un acteur étatique visant l’espionnage industriel, peu motivé par une clinique) pour concentrer l’analyse. Chaque choix est relié à une valeur métier et à un événement redouté (prise en charge des patients, confidentialité des dossiers).",
      "criteria": [
        "Trois couples distincts sont proposés.",
        "Chaque couple est justifié par motivation, ressources ou activité.",
        "Les couples sont reliés aux valeurs métier et événements redoutés.",
        "Un couple peut être écarté avec justification."
      ],
      "explanation": "Un bon choix concentre l’analyse sur les scénarios plausibles pour le contexte, et n’oublie pas les initiés."
    },
    "ebp-q15": {
      "type": "single",
      "correct": "c",
      "explanation": "Les parties prenantes sont les clients, fournisseurs, prestataires, filiales ou partenaires en relation avec l’organisation. Elles peuvent constituer des chemins d’attaque.",
      "whyWrong": {
        "d": "Ce n’est pas un attaquant.",
        "b": "Ce n’est pas un équipement.",
        "a": "Ce n’est pas un indicateur."
      }
    },
    "ebp-q16": {
      "type": "single",
      "correct": "a",
      "explanation": "Plus l’organisation dépend d’une partie prenante et plus celle-ci pénètre ses systèmes, plus la menace est élevée. Une bonne maturité cyber et une confiance justifiée la réduisent.",
      "whyWrong": {
        "d": "Une maturité élevée réduit la menace.",
        "c": "Une confiance justifiée la réduit.",
        "b": "Ce n’est pas un critère."
      }
    },
    "ebp-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "Un chemin d’attaque stratégique décrit comment une source de risque atteint la valeur métier en passant par une ou plusieurs parties prenantes, par exemple un prestataire ayant un accès permanent.",
      "whyWrong": {
        "a": "C’est un parcours au niveau opérationnel.",
        "d": "Sans rapport.",
        "c": "C’est une mesure technique."
      }
    },
    "ebp-q18": {
      "type": "single",
      "correct": "d",
      "explanation": "L’atelier 3 définit des mesures qui réduisent la menace venant des tiers : exigences contractuelles, limitation et surveillance des accès, audits, redondance.",
      "whyWrong": {
        "a": "Trop étroit.",
        "c": "Sans rapport.",
        "b": "Trop étroit."
      }
    },
    "ebp-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La pénétration dans les systèmes et la dépendance augmentent le niveau de menace. Un accès d’administration permanent les maximise."
    },
    "ebp-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Contrat, accès limités et surveillés, audit : ces mesures réduisent la pénétration et augmentent la confiance justifiée. Un accès permanent non contrôlé fait l’inverse.",
      "whyWrong": {
        "c": "Il maximise la pénétration."
      }
    },
    "ebp-q21": {
      "type": "short",
      "accepted": [
        "écosystème",
        "ecosysteme",
        "l’écosystème",
        "l'écosystème"
      ],
      "explanation": "L’écosystème regroupe les parties prenantes de l’organisation. Sa cartographie de menace permet de repérer les chemins d’attaque les plus plausibles."
    },
    "ebp-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "Un scénario opérationnel détaille, étape par étape, comment un chemin d’attaque stratégique peut être réalisé techniquement, et en estime la vraisemblance.",
      "whyWrong": {
        "b": "Sans rapport.",
        "a": "Sans rapport.",
        "d": "Sans rapport."
      }
    },
    "ebp-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "La séquence décrit la reconnaissance (connaître), l’intrusion (rentrer), la découverte des cibles (trouver) puis l’action sur l’objectif (exploiter).",
      "whyWrong": {
        "b": "Ce sont des étapes d’achat.",
        "c": "C’est le cycle PDCA.",
        "d": "C’est un cycle de réponse à incident."
      }
    },
    "ebp-q24": {
      "type": "single",
      "correct": "c",
      "explanation": "La vraisemblance exprime la probabilité que le scénario aboutisse, au vu des ressources de la source de risque, des vulnérabilités et des mesures existantes.",
      "whyWrong": {
        "b": "C’est la gravité qui mesure l’impact.",
        "a": "Ce n’est pas son objet.",
        "d": "Ce n’est pas son objet."
      }
    },
    "ebp-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "MITRE ATT&CK recense les tactiques et techniques observées. Elle aide à décrire des modes opératoires réalistes et à vérifier la couverture des détections.",
      "whyWrong": {
        "b": "Sans rapport.",
        "a": "Sans rapport.",
        "c": "Sans rapport."
      }
    },
    "ebp-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les scénarios stratégiques (atelier 3) précèdent les scénarios opérationnels (atelier 4), qui détaillent techniquement les chemins retenus."
    },
    "ebp-q27": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Failles exploitables, ressources de l’attaquant et mesures en place déterminent la facilité d’aboutir. Le slogan n’a aucun lien.",
      "whyWrong": {
        "c": "Sans lien avec la sécurité."
      }
    },
    "ebp-q28": {
      "type": "short",
      "accepted": [
        "capec",
        "le capec"
      ],
      "explanation": "CAPEC (Common Attack Pattern Enumeration and Classification) décrit des modèles d’attaque. Il complète ATT&CK pour formaliser les modes opératoires."
    },
    "ebp-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "L’atelier 5 synthétise les scénarios de risque, choisit la stratégie de traitement, établit le plan de mesures, évalue les risques résiduels et définit le cadre de suivi.",
      "whyWrong": {
        "a": "Sans rapport.",
        "d": "C’est l’objet de l’atelier 1.",
        "c": "Ce n’est pas son objet."
      }
    },
    "ebp-q30": {
      "type": "single",
      "correct": "a",
      "explanation": "Le risque résiduel est évalué après mesures. Il est présenté à l’autorité de décision pour acceptation formelle.",
      "whyWrong": {
        "c": "C’est celui d’avant traitement.",
        "d": "C’est celui d’avant traitement.",
        "b": "C’est une option de traitement."
      }
    },
    "ebp-q31": {
      "type": "truefalse",
      "correct": true,
      "explanation": "L’acceptation formelle par la direction ou son représentant fait partie de l’atelier 5 : elle porte la responsabilité du risque assumé."
    },
    "ebp-q32": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le contexte, les menaces et le système évoluent. Le cadre de suivi prévoit des revues planifiées et des événements déclencheurs de révision."
    },
    "ebp-q33": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Indicateurs, revues et événements déclencheurs gardent l’analyse vivante. Supprimer l’analyse initiale ferait perdre la traçabilité des décisions.",
      "whyWrong": {
        "b": "On conserve l’analyse pour garder la traçabilité."
      }
    },
    "ebp-q34": {
      "type": "open",
      "model": "Stratégie : réduire le risque en agissant sur le chemin d’attaque (le prestataire) et sur l’impact. Mesures : 1) encadrer l’accès du prestataire (comptes nominatifs, authentification multifacteur, accès par un bastion journalisé, accès limité dans le temps) et l’exiger par contrat avec notification d’incident ; 2) segmenter le réseau pour limiter la propagation d’un rançongiciel entre les environnements d’administration et de production ; 3) sauvegardes immuables ou hors ligne, testées, pour rendre possible la reprise. On peut ajouter la détection et le contrôle du prestataire par audit. Le risque résiduel s’évalue en réévaluant la vraisemblance (les mesures rendent le chemin d’attaque plus difficile, le prestataire moins pénétrant) et la gravité (l’impact est réduit par la reprise) : on obtient un niveau résiduel présenté à la direction pour acceptation, avec les mesures de suivi.",
      "criteria": [
        "Une stratégie de réduction ciblant le chemin d’attaque est proposée.",
        "Trois mesures concrètes sont citées.",
        "La réévaluation de la vraisemblance et de la gravité est expliquée.",
        "L’acceptation par la direction et le suivi sont mentionnés."
      ],
      "explanation": "Un bon plan traite à la fois la porte d’entrée (le tiers), la propagation et la capacité de reprise."
    },
    "ebp-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "L’analyse croise les points de vue : les métiers connaissent les valeurs et les impacts, la sécurité et l’informatique les systèmes et les mesures.",
      "whyWrong": {
        "d": "Les métiers sont indispensables.",
        "a": "L’organisation doit s’impliquer.",
        "b": "Trop étroit."
      }
    },
    "ebp-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "Une analyse figée devient obsolète : nouveaux services, nouvelles menaces, nouveaux tiers. Elle est revue périodiquement et à chaque changement majeur.",
      "whyWrong": {
        "d": "Ce n’est pas la raison.",
        "a": "Ce n’est pas la raison.",
        "c": "Ce n’est pas la raison."
      }
    },
    "ebp-q37": {
      "type": "single",
      "correct": "d",
      "explanation": "L’analyse EBIOS RM peut servir de démarche d’appréciation des risques d’un SMSI : elle fournit scénarios, cotations et plan de traitement attendus par la norme.",
      "whyWrong": {
        "b": "Elle ne la remplace pas.",
        "c": "Elle ne la rend pas inutile.",
        "a": "Les audits demeurent."
      }
    },
    "ebp-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les hypothèses (périmètre, menace, vulnérabilités, échelles) expliquent les cotations et permettent de les revoir. Sans elles, l’analyse n’est pas défendable."
    },
    "ebp-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Un périmètre trop large, des scénarios génériques et des cotations injustifiées affaiblissent l’analyse. La validation par la direction est au contraire attendue.",
      "whyWrong": {
        "c": "Elle est requise pour accepter les risques résiduels."
      }
    },
    "ebp-q40": {
      "type": "short",
      "accepted": [
        "anssi",
        "l’anssi",
        "l'anssi"
      ],
      "explanation": "EBIOS Risk Manager est publiée par l’ANSSI, avec le soutien du Club EBIOS."
    },
    "ebp-q41": {
      "type": "single",
      "correct": "c",
      "explanation": "L’atelier 1 cadre l’étude : valeurs métier, biens supports, événements redoutés avec leur gravité, et écarts par rapport au socle de sécurité.",
      "whyWrong": {
        "d": "Les mesures sont définies à l’atelier 5.",
        "b": "La réponse à incident n’est pas l’objet de l’atelier 1.",
        "a": "Les vulnérabilités techniques relèvent plutôt de l’atelier 4."
      }
    },
    "ebp-q42": {
      "type": "single",
      "correct": "d",
      "explanation": "Les chemins d’attaque passent souvent par un prestataire ou un partenaire. On évalue le niveau de menace de chaque partie prenante pour bâtir des scénarios stratégiques réalistes.",
      "whyWrong": {
        "a": "La responsabilité juridique n’est pas le critère.",
        "b": "Elle complète les sources de risque, elle ne les remplace pas.",
        "c": "L’écosystème fait partie de la méthode."
      }
    },
    "ebp-q43": {
      "type": "single",
      "correct": "b",
      "explanation": "Aucune mesure n’annule le risque : ce qui reste doit être décrit, suivi, puis accepté par la direction avec un responsable et une date de revue.",
      "whyWrong": {
        "c": "Un risque n’est généralement pas supprimé à 100 %.",
        "a": "Ce n’est pas une notion de coût.",
        "d": "Il n’est pas lié à la connectivité."
      }
    }
  },
};
