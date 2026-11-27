// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "q-securite-ia-avancee",
  questions: {
    "qia-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "Un modèle externe est une dépendance comme une autre : son origine et son intégrité se vérifient avant adoption.",
      "whyWrong": {
        "c": "La vitesse n’est pas le sujet : le risque est qu’un modèle soit altéré.",
        "b": "Un modèle n’est pas lié à un seul matériel : la provenance concerne son intégrité.",
        "d": "Le dépôt ne chiffre pas automatiquement les modèles, et le chiffrement ne prouve pas la provenance."
      }
    },
    "qia-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "Un format qui ne contient que des valeurs numériques (safetensors) ne peut pas exécuter d’instructions à l’ouverture, contrairement à pickle.",
      "whyWrong": {
        "b": "Un format exécutant du code au chargement permet à un modèle piégé de s’exécuter.",
        "a": "Un format non documenté empêche de le vérifier : ce n’est pas préférable.",
        "d": "Un format compressé sans vérification ne garantit rien sur son contenu."
      }
    },
    "qia-q3": {
      "type": "single",
      "correct": "d",
      "explanation": "Elle inventorie composants et versions : si un modèle ou une bibliothèque est compromis, on sait quels systèmes sont touchés.",
      "whyWrong": {
        "b": "Une nomenclature inventorie des composants, pas des secrets.",
        "c": "Le budget relève de la gestion de projet, pas de la nomenclature IA.",
        "a": "Les utilisateurs ne sont pas des composants d’IA."
      }
    },
    "qia-q4": {
      "type": "single",
      "correct": "b",
      "explanation": "Sans accès au réseau ni aux secrets, un modèle qui exécuterait du code malveillant n’a rien à voler ni à contacter.",
      "whyWrong": {
        "d": "L’isolation limite les dégâts ; elle ne réduit pas la consommation d’énergie.",
        "a": "L’environnement isolé n’influence pas la précision du modèle.",
        "c": "Isoler le modèle n’a pas pour but de faciliter sa copie."
      }
    },
    "qia-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les données publiques peuvent être manipulées par des tiers : on contrôle la provenance et on échantillonne avant d’entraîner."
    },
    "qia-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La popularité ne prouve ni l’intégrité ni l’innocuité : des usurpations de noms et des modèles piégés existent. On vérifie comme pour toute dépendance."
    },
    "qia-q7": {
      "type": "short",
      "accepted": [
        "pickle"
      ],
      "explanation": "Un fichier pickle peut contenir des instructions exécutées à l’ouverture : on lui préfère un format de poids seul."
    },
    "qia-q8": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Provenance, format et évaluation sur ses cas donnent confiance. Déployer sans contrôle expose la production.",
      "whyWrong": {
        "c": "Déployer directement un modèle externe en production évite toute vérification."
      }
    },
    "qia-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "Si l’agent lit du contenu hostile, accède à des données privées et peut envoyer vers l’extérieur, une instruction cachée suffit à faire sortir des données.",
      "whyWrong": {
        "d": "Un outil en lecture seule sans données n’offre rien à exfiltrer.",
        "b": "Sans contexte ni outil, il n’y a ni donnée à voler ni canal de sortie.",
        "c": "Sans donnée ni outil, l’agent n’a rien à exfiltrer."
      }
    },
    "qia-q10": {
      "type": "single",
      "correct": "d",
      "explanation": "Fermer le canal de sortie, supprimer l’accès aux données privées ou isoler le contenu non fiable interrompt la chaîne d’exfiltration.",
      "whyWrong": {
        "b": "Ne change pas la structure du risque.",
        "a": "Allonger le prompt ne supprime aucun des trois éléments du risque.",
        "c": "La température règle la variabilité des réponses, pas les droits ni les canaux."
      }
    },
    "qia-q11": {
      "type": "single",
      "correct": "b",
      "explanation": "Un compte dédié se trace, se limite et se révoque facilement, sans confondre ses actions avec celles d’un humain.",
      "whyWrong": {
        "c": "Une identité propre sert au contraire à journaliser ses actions.",
        "a": "Agir au nom de tous contredit le principe de droits limités.",
        "d": "Un accès administrateur par défaut est l’opposé des droits limités."
      }
    },
    "qia-q12": {
      "type": "single",
      "correct": "c",
      "explanation": "Le composant d’exécution vérifie chaque action proposée (outil autorisé, destinataire, plafond) avant de l’exécuter.",
      "whyWrong": {
        "a": "La séparation ajoute un contrôle ; elle ne double pas la vitesse.",
        "b": "La séparation s’accompagne de journaux : elle ne les supprime pas.",
        "d": "Le planificateur reste un modèle de langage : la séparation ne l’évite pas."
      }
    },
    "qia-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Elles sont lues par le modèle : une description peut contenir des instructions cachées. On examine aussi les droits demandés."
    },
    "qia-q14": {
      "type": "short",
      "accepted": [
        "sable",
        "bac à sable",
        "sandbox"
      ],
      "explanation": "Le bac à sable (sandbox) exécute le code sans accès aux secrets ni au réseau interne, avec des droits minimaux."
    },
    "qia-q15": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Autorisations fines, plafonds et confirmations bornent ce qu’un agent peut faire. Un accès administrateur par défaut étend les droits.",
      "whyWrong": {
        "b": "Un accès administrateur par défaut supprime les limites que les autres mesures posent."
      }
    },
    "qia-q16": {
      "type": "open",
      "model": "Je repère la combinaison à risque : contenu non fiable (courriels), données privées (CRM), canal de sortie (envoi). Je ferme le canal de sortie : les réponses ne partent qu’à l’expéditeur authentifié du message, tout autre envoi exige une validation humaine affichant destinataire et contenu. Je limite l’accès au CRM au seul dossier du client concerné, imposé par l’outil et non par le prompt. L’agent a une identité propre aux droits minimaux, ses sorties sont traitées comme non fiables et validées, et le code éventuel s’exécute en bac à sable. Je journalise chaque appel d’outil avec le contexte, avec des alertes sur les volumes anormaux, et je teste le dispositif avec des courriels piégés avant la production.",
      "criteria": [
        "La combinaison à risque est identifiée.",
        "Au moins un des trois éléments est retiré ou fermé (canal de sortie, périmètre des données).",
        "Identité propre, confirmation et journalisation sont prévues.",
        "Des tests avec des contenus piégés sont mentionnés."
      ],
      "explanation": "On suppose que le modèle sera trompé et on conçoit pour que cela reste sans gravité."
    },
    "qia-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "Le modèle se comporte normalement jusqu’à ce qu’un déclencheur choisi par l’attaquant produise une réponse précise.",
      "whyWrong": {
        "d": "Une panne matérielle n’est pas un comportement caché du modèle.",
        "c": "Une sauvegarde automatique est une fonction légitime, pas une porte dérobée.",
        "b": "Une interface de configuration est une fonction prévue, pas un comportement caché."
      }
    },
    "qia-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "Le modèle voit pendant l’apprentissage des entrées conçues pour le tromper : il apprend à y résister, sans garantie complète.",
      "whyWrong": {
        "a": "L’entraînement adverse ajoute des exemples modifiés ; il ne retire pas les données d’origine.",
        "c": "Il n’accélère pas l’entraînement : il l’alourdit.",
        "d": "Il ne se limite pas aux données publiques : il concerne la nature des exemples."
      }
    },
    "qia-q19": {
      "type": "single",
      "correct": "c",
      "explanation": "Une défense testée seulement contre des attaques génériques peut tomber face à un adversaire qui l’a étudiée.",
      "whyWrong": {
        "b": "La facilité d’automatisation n’est pas la raison de ce choix.",
        "a": "Le coût n’est pas le critère : c’est le réalisme de la menace.",
        "d": "Elles donnent souvent de moins bons scores : c’est précisément leur intérêt."
      }
    },
    "qia-q20": {
      "type": "single",
      "correct": "d",
      "explanation": "Des détecteurs aux faiblesses différentes obligent l’attaquant à contourner plusieurs défenses à la fois.",
      "whyWrong": {
        "a": "Un détecteur unique, même précis, laisse un point de défaillance unique.",
        "b": "La sécurité par l’obscurité ne suffit pas.",
        "c": "Désactiver la journalisation empêche de repérer les contournements."
      }
    },
    "qia-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La robustesse se démontre pour des attaques précises et se renforce par combinaison de défenses et mise à jour continue."
    },
    "qia-q22": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Une défense non attaquée est seulement non éprouvée : sa robustesse n’est pas établie."
    },
    "qia-q23": {
      "type": "short",
      "accepted": [
        "évasion",
        "evasion",
        "l’évasion"
      ],
      "explanation": "L’évasion vise un modèle déjà entraîné, par opposition à l’empoisonnement qui vise son apprentissage."
    },
    "qia-q24": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Provenance, détection d’aberrations et comparaison de versions limitent l’empoisonnement. Accepter sans contrôle l’ouvre.",
      "whyWrong": {
        "a": "Accepter toutes les contributions sans contrôle facilite l’empoisonnement."
      }
    },
    "qia-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "ATLAS fournit un vocabulaire de tactiques et de techniques pour construire des scénarios de menace réalistes.",
      "whyWrong": {
        "a": "ATLAS ne chiffre pas de prix : il décrit des techniques d’attaque contre l’IA.",
        "d": "ATLAS ne chiffre aucun modèle : c’est une base de connaissances.",
        "b": "ATLAS ne mesure pas la vitesse : il recense tactiques et techniques."
      }
    },
    "qia-q26": {
      "type": "single",
      "correct": "b",
      "explanation": "Ce classement aide à vérifier une architecture et à préparer des tests : injection, fuite d’informations, agents excessifs, etc.",
      "whyWrong": {
        "d": "Une norme de câblage concerne l’infrastructure physique, pas les risques des applications LLM.",
        "c": "Un calendrier de sauvegardes n’est pas un référentiel de risques.",
        "a": "Une grille salariale est sans rapport avec les risques applicatifs."
      }
    },
    "qia-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "On identifie ce qu’il faut protéger et les flux de données avant de décrire les scénarios de menace.",
      "whyWrong": {
        "c": "Les couleurs de l’interface ne sont pas des actifs à protéger.",
        "a": "Les horaires des équipes ne sont pas des actifs à protéger.",
        "b": "Les marques d’ordinateurs ne sont pas les actifs du système d’IA."
      }
    },
    "qia-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "Un même texte piégé est anodin pour un agent sans outil et grave pour un agent qui peut envoyer, supprimer ou payer.",
      "whyWrong": {
        "d": "Les outils ne changent pas la verbosité : ils changent ce que l’agent peut faire.",
        "c": "Au contraire, des outils puissants augmentent la gravité possible.",
        "b": "Les outils influencent fortement le risque : ils définissent les actions possibles."
      }
    },
    "qia-q29": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un changement de modèle, d’outil ou de périmètre de données modifie les menaces et les mesures : l’analyse suit."
    },
    "qia-q30": {
      "type": "short",
      "accepted": [
        "ai rmf",
        "nist ai rmf",
        "ai risk management framework"
      ],
      "explanation": "Le NIST AI RMF structure la gestion des risques : gouverner, cartographier, mesurer, traiter."
    },
    "qia-q31": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Source, actif, technique, impact et mesures décrivent un scénario. Le prix de l’abonnement n’en fait pas partie.",
      "whyWrong": {
        "b": "Ce n’est pas un élément du risque."
      }
    },
    "qia-q32": {
      "type": "open",
      "model": "Je cartographie d’abord les actifs et les flux : documents du partage (dont les plus sensibles), prompts système, modèle et fournisseur, outil de tickets, journaux. Je décris ensuite des scénarios en m’appuyant sur ATLAS et l’OWASP Top 10 for LLM Applications : injection indirecte par un document, fuite de documents non autorisés par la recherche, abus de l’outil de tickets, compromission d’un composant tiers. J’évalue vraisemblance et gravité en tenant compte des outils accessibles, puis je propose des mesures : droits d’accès conservés dans l’index, confirmation des actions, journalisation, provenance des composants. Je consigne le risque résiduel accepté par la direction et je révise l’analyse à chaque changement de modèle, d’outil ou de périmètre.",
      "criteria": [
        "Les actifs et les flux sont cartographiés.",
        "Des scénarios s’appuyant sur des référentiels (ATLAS, OWASP) sont décrits.",
        "Des mesures et un risque résiduel sont indiqués.",
        "La révision de l’analyse est prévue."
      ],
      "explanation": "L’analyse de risque d’un système d’IA suit la démarche classique, avec les actifs et menaces propres à l’IA."
    },
    "qia-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "Un attaquant qui interroge massivement une API peut reconstituer un modèle équivalent et en dérober la valeur.",
      "whyWrong": {
        "a": "Supprimer un modèle est une opération d’administration, pas une extraction.",
        "b": "Compresser un modèle est une optimisation, pas une attaque.",
        "d": "Traduire un modèle dans un autre langage est un portage, pas une extraction."
      }
    },
    "qia-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "Savoir qu’une personne figurait dans les données d’entraînement peut révéler une information sensible (par exemple un dossier médical).",
      "whyWrong": {
        "a": "Reproduire le code du modèle relève de l’extraction, pas de l’inférence d’appartenance.",
        "d": "La vitesse de réponse n’est pas ce que cette attaque mesure.",
        "c": "Classer les utilisateurs par droits relève du contrôle d’accès."
      }
    },
    "qia-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "Un modèle peut retenir des exemples précis (données personnelles, secrets) et les restituer à une requête bien choisie.",
      "whyWrong": {
        "d": "La mémorisation ne ralentit pas les requêtes : elle expose des données.",
        "c": "Un modèle qui mémorise n’en refuse pas pour autant de nouvelles données.",
        "b": "Le modèle ne supprime pas ses poids : il peut les restituer sous forme de données."
      }
    },
    "qia-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "Limiter et surveiller les requêtes, et réduire l’information renvoyée, rend l’extraction plus coûteuse et plus visible.",
      "whyWrong": {
        "b": "Des scores très détaillés aident l’attaquant à reproduire le modèle.",
        "a": "Un accès public sans authentification facilite l’extraction.",
        "c": "Supprimer la journalisation empêche de détecter les extractions."
      }
    },
    "qia-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Des scores précis donnent plus d’information par requête : il faut en limiter le détail et le débit."
    },
    "qia-q38": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Bruit calibré, filtrage et contrôle d’accès limitent les fuites. Publier les données d’entraînement les expose.",
      "whyWrong": {
        "d": "Publier les données d’entraînement détruit la confidentialité qu’on cherche à protéger."
      }
    },
    "qia-q39": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Documents non autorisés, restitution du contexte et divulgation du prompt sont les trois fuites à tester. Publier avant correction expose le système.",
      "whyWrong": {
        "b": "Ce n’est pas un test et cela l’expose."
      }
    },
    "qia-q41": {
      "type": "single",
      "correct": "b",
      "explanation": "Un système d’IA ne répond pas toujours de la même façon à une même entrée. Répéter les essais permet d’estimer la fréquence d’une réussite de l’attaque et de comparer avant et après correction.",
      "whyWrong": {
        "a": "Gonfler le nombre de constats nuirait à la crédibilité du rapport.",
        "d": "Répéter un essai ne rend pas le modèle plus vulnérable.",
        "c": "Le but n’est pas de gêner l’équipe de défense mais de mesurer."
      }
    }
  },
};
