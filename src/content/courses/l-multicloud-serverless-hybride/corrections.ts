// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "l-multicloud-serverless-hybride",
  questions: {
    "mch-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "Le fournisseur sécurise l’infrastructure sous-jacente ; le client reste responsable de sa configuration, de ses identités et de ses données. La frontière exacte dépend du service (IaaS, PaaS, SaaS), mais le principe est commun aux fournisseurs.",
      "whyWrong": {
        "b": "Le client garde la configuration, les identités et les données.",
        "d": "Le client reste responsable de ce qu’il configure.",
        "a": "Le modèle ne varie pas ainsi."
      }
    },
    "mch-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Les incidents cloud proviennent très majoritairement d’erreurs de configuration côté client : stockage public, droits excessifs, secrets exposés. C’est pourquoi la configuration et l’IAM sont au cœur de la sécurité cloud.",
      "whyWrong": {
        "d": "Ces failles existent mais sont rares.",
        "c": "Une panne n’est pas un incident de sécurité.",
        "b": "Les mises à jour corrigent des failles, elles n’en causent pas."
      }
    },
    "mch-q3": {
      "type": "short",
      "accepted": [
        "cspm",
        "CSPM"
      ],
      "explanation": "Le CSPM (Cloud Security Posture Management) évalue en continu la configuration par rapport aux bonnes pratiques et aux référentiels, et signale les écarts (exposition, droits, journalisation)."
    },
    "mch-q8": {
      "type": "open",
      "model": "Sur Azure comme sur Google Cloud, les droits s’appliquent à une portée (ou s’héritent dans la hiérarchie) : un rôle accordé à un groupe de gestion ou à une organisation se propage à tous les abonnements, dossiers et projets en dessous. Un droit « trop haut » donne donc, souvent sans qu’on s’en rende compte, des permissions sur bien plus de ressources que nécessaire ; la compromission d’un seul compte concerné expose alors tout le périmètre hérité. Pour l’éviter : attribuer au niveau le plus bas suffisant (le projet ou la ressource concernés), préférer des rôles ciblés aux rôles très larges (Propriétaire/Owner, Contributeur/Editor), revoir régulièrement les attributions héritées, et utiliser un outil de posture pour repérer les droits excessifs.",
      "criteria": [
        "L’héritage ou la portée élevée est expliqué comme propageant le droit vers le bas.",
        "Le risque (permissions disproportionnées, impact d’une compromission) est décrit.",
        "La règle d’attribution au niveau le plus bas suffisant est donnée.",
        "Une mesure de contrôle (rôles ciblés, revue, posture) est proposée."
      ],
      "explanation": "La hiérarchie des ressources est un outil de cloisonnement : mal utilisée, elle devient un amplificateur de privilèges."
    },
    "mch-q31": {
      "type": "single",
      "correct": "d",
      "explanation": "Le moindre privilège réduit à la fois le niveau de droit (lecture) et la portée (un seul compartiment). Chaque dimension plus large augmente l’impact d’une compromission du compte.",
      "whyWrong": {
        "b": "Bien trop large pour un besoin de lecture.",
        "c": "Le niveau de droit est excessif.",
        "a": "La portée est excessive : tous les compartiments."
      }
    },
    "mch-q32": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les certifications portent sur le socle du fournisseur. La configuration, les identités et les données restent sous la responsabilité du client, qui doit les surveiller."
    },
    "mch-q4": {
      "type": "single",
      "correct": "b",
      "explanation": "L’annuaire d’identités d’Azure est Microsoft Entra ID (anciennement Azure AD). Cloud Identity est celui de Google, IAM celui d’AWS.",
      "whyWrong": {
        "d": "C’est l’annuaire de Google.",
        "a": "C’est le service d’identités d’AWS.",
        "c": "C’est un service de fédération, pas l’annuaire d’Azure."
      }
    },
    "mch-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les droits IAM de Google Cloud s’héritent du haut vers le bas de la hiérarchie : un rôle accordé à l’organisation s’applique à tous les dossiers et projets. D’où l’importance d’attribuer au niveau le plus bas suffisant."
    },
    "mch-q6": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Droits minimaux par identité non humaine, fédération au lieu de clés exportées et attribution au niveau le plus bas limitent l’impact d’une compromission.",
      "whyWrong": {
        "b": "Le compte de service par défaut est justement souvent trop permissif : on lui préfère des comptes dédiés."
      }
    },
    "mch-q7": {
      "type": "single",
      "correct": "d",
      "explanation": "L’administrateur général contrôle tout le locataire Entra ID : chaque titulaire est une cible à très fort impact. On en limite le nombre, avec MFA résistante et accès juste-à-temps.",
      "whyWrong": {
        "b": "Ce n’est pas une question de coût.",
        "c": "Cette limite n’existe pas.",
        "a": "Limiter les administrateurs généraux n’accélère pas les connexions."
      }
    },
    "mch-q33": {
      "type": "single",
      "correct": "a",
      "explanation": "Les politiques d’accès conditionnel évaluent le contexte de connexion (utilisateur, lieu, appareil, risque) et exigent MFA, un appareil conforme ou bloquent l’accès.",
      "whyWrong": {
        "b": "Le chiffrement des disques est une autre fonction.",
        "c": "Ce n’est pas du ressort de l’accès conditionnel.",
        "d": "Le réseau relève d’autres services."
      }
    },
    "mch-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "Les droits RBAC s’héritent vers le bas : une portée plus fine limite ce qu’un compte compromis peut atteindre.",
      "whyWrong": {
        "a": "La portée n’a pas d’effet sur la vitesse.",
        "c": "Cela n’a pas de rapport avec l’expiration.",
        "d": "La MFA reste nécessaire."
      }
    },
    "mch-q35": {
      "type": "truefalse",
      "correct": true,
      "explanation": "L’application s’authentifie auprès de son propre fournisseur d’identité et échange un jeton court contre un accès : aucun secret durable n’est stocké ni susceptible de fuiter."
    },
    "mch-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "Un groupe de sécurité est un pare-feu attaché à une ressource (ou à un sous-réseau) qui n’autorise que les flux voulus, par port et par source. En refus par défaut, il réduit fortement l’exposition.",
      "whyWrong": {
        "d": "L’IAM est un autre mécanisme.",
        "a": "Le chiffrement est une autre fonction.",
        "b": "Il n’a aucun rapport avec les comptes de service."
      }
    },
    "mch-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Ouvrir SSH/RDP au monde entier expose la ressource à un balayage et à des tentatives permanentes, quelle que soit la force du mot de passe. L’accès d’administration passe par un bastion, un point d’accès privé ou un VPN."
    },
    "mch-q11": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c",
        "d"
      ],
      "explanation": "Refus par défaut, sous-réseaux privés, points d’accès privés et journalisation des flux sont des mesures de sécurisation du réseau cloud.",
      "whyWrong": {
        "e": "Ouvrir tous les ports expose chaque ressource à Internet : c’est l’inverse du refus par défaut."
      }
    },
    "mch-q36": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Une règle ouverte au monde, une adresse publique inutile et un accès anonyme sont des expositions fréquentes, repérables par un outil de posture.",
      "whyWrong": {
        "c": "Un sous-réseau privé sans adresse publique est au contraire une bonne pratique."
      }
    },
    "mch-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "Un point d’entrée unique, authentifié et journalisé (bastion, accès privé du fournisseur, VPN) évite d’exposer chaque machine.",
      "whyWrong": {
        "d": "Cela expose la machine au monde entier.",
        "b": "Elle deviendrait joignable depuis Internet.",
        "a": "On supprimerait toute protection réseau."
      }
    },
    "mch-q12": {
      "type": "single",
      "correct": "b",
      "explanation": "Le serverless supprime le serveur à administrer, mais la surface se déplace vers le code de la fonction, ses permissions et ses déclencheurs, qui deviennent les points à sécuriser.",
      "whyWrong": {
        "d": "Cela relève du fournisseur.",
        "a": "Elle se déplace, elle ne disparaît pas.",
        "c": "Cela relève du fournisseur."
      }
    },
    "mch-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les variables d’environnement sont souvent visibles dans la configuration et les journaux. Les secrets d’une fonction se conservent dans un coffre de secrets, récupérés à l’exécution."
    },
    "mch-q14": {
      "type": "short",
      "accepted": [
        "identité fédérée",
        "identite federee",
        "fédération",
        "federation",
        "identité unifiée",
        "identite unifiee"
      ],
      "explanation": "L’identité fédérée (un annuaire de référence) évite de dupliquer les comptes et les politiques sur chaque environnement, source d’incohérences et d’angles morts."
    },
    "mch-q15": {
      "type": "open",
      "model": "Problèmes : chaque environnement (interne, cloud A, cloud B) a ses propres identités, ses propres politiques et sa propre console, ce qui crée des incohérences (droits et contrôles différents), des angles morts (pas de vue d’ensemble), une charge d’administration élevée et des comptes orphelins. Recommandations : fédérer l’identité sur un annuaire de référence pour que les mêmes personnes et les mêmes règles d’authentification (MFA, accès conditionnel) s’appliquent partout ; définir des politiques de sécurité équivalentes d’un environnement à l’autre ; mettre en place une surveillance de posture unifiée (CSPM multi-cloud) et une collecte de journaux centralisée pour avoir une vue unique ; harmoniser la gestion des secrets. L’objectif est la cohérence et la visibilité, pas l’uniformité technique des fournisseurs.",
      "criteria": [
        "Les problèmes d’incohérence et d’angles morts du multi-environnement sont identifiés.",
        "L’identité fédérée est recommandée.",
        "Une visibilité ou posture unifiée (CSPM, journaux centralisés) est proposée."
      ],
      "explanation": "Le multi-cloud n’est sûr que si l’on retrouve partout les mêmes identités, les mêmes politiques et une vue d’ensemble."
    },
    "mch-q16": {
      "type": "single",
      "correct": "a",
      "explanation": "Une fonction serverless embarque ses dépendances : une bibliothèque vulnérable y reste exploitable, même sans serveur à administrer. On analyse et met à jour ces dépendances comme pour toute application.",
      "whyWrong": {
        "c": "Ce n’est pas le but de l’analyse.",
        "d": "Le fournisseur ne l’interdit pas.",
        "b": "Elles restent exploitables en serverless."
      }
    },
    "mch-q38": {
      "type": "single",
      "correct": "d",
      "explanation": "Une fonction peut être déclenchée par des données externes : on valide ce qu’elle reçoit avant traitement, et on limite ses permissions.",
      "whyWrong": {
        "b": "Cela aggraverait l’impact d’une compromission.",
        "a": "La journalisation est nécessaire à la détection.",
        "c": "Ce serait ignorer le risque."
      }
    },
    "mch-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Identité unique, politiques cohérentes et visibilité centralisée évitent les angles morts. Des comptes distincts par environnement multiplient les droits oubliés.",
      "whyWrong": {
        "d": "Des comptes distincts créent des comptes orphelins et des incohérences."
      }
    },
    "mch-q40": {
      "type": "short",
      "accepted": [
        "siem",
        "un siem",
        "le siem"
      ],
      "explanation": "Un SIEM (Security Information and Event Management) collecte les journaux de l’ensemble des environnements, les corrèle et génère des alertes : c’est la vue unique dont un environnement hybride a besoin."
    },
    "mch-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "Le journal d’activité Azure enregistre les opérations du plan de gestion (création, modification, suppression de ressources) : il répond à « qui a fait quoi, quand ».",
      "whyWrong": {
        "b": "Les métriques mesurent la charge, pas les actions.",
        "d": "Ce poste ne voit pas les opérations du cloud.",
        "c": "La facturation ne trace pas les actions."
      }
    },
    "mch-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "Les journaux d’audit Cloud (activité d’administration, accès aux données) consignent qui a appelé quelle API. L’activité d’administration est activée par défaut ; l’accès aux données doit être activé.",
      "whyWrong": {
        "c": "Ils mesurent la performance.",
        "d": "Ils portent sur les coûts.",
        "a": "Ils ne tracent pas les appels d’API."
      }
    },
    "mch-q19": {
      "type": "single",
      "correct": "d",
      "explanation": "On coupe d’abord l’accès (désactivation, puis suppression après analyse), puis on examine ce qui a été fait avec la clé, en conservant les journaux.",
      "whyWrong": {
        "b": "Le délai laisse l’attaquant agir.",
        "c": "Cela détruirait des preuves.",
        "a": "Cela aggraverait l’exposition."
      }
    },
    "mch-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "Un attaquant qui obtient des droits élevés cherche à effacer ses traces. Des journaux écrits dans un compte séparé, en écriture seule, restent exploitables.",
      "whyWrong": {
        "a": "Centraliser les journaux n’a pas pour but de réduire la facture de stockage.",
        "b": "Les alertes restent nécessaires.",
        "d": "Le contrôle d’accès reste nécessaire."
      }
    },
    "mch-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un journal non activé n’enregistre rien. Après un incident, il est trop tard : on active la journalisation, on la centralise et on fixe une durée de conservation avant d’en avoir besoin."
    },
    "mch-q22": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Désactiver les journaux, créer des identifiants durables et élever des droits sont des gestes typiques d’un attaquant. Un accès habituel n’est pas un signal.",
      "whyWrong": {
        "c": "Un accès habituel est normal."
      }
    },
    "mch-q23": {
      "type": "short",
      "accepted": [
        "rotation",
        "la rotation",
        "rotation des clés",
        "rotation des secrets",
        "rotation de clé"
      ],
      "explanation": "La rotation remplace la valeur compromise par une nouvelle, puis révoque l’ancienne. Après une exposition, on la fait pivoter sans attendre."
    },
    "mch-q24": {
      "type": "single",
      "correct": "a",
      "explanation": "Les services de gestion de clés (KMS, Key Vault, Cloud KMS) créent et conservent les clés, contrôlent qui peut les utiliser et journalisent chaque usage.",
      "whyWrong": {
        "b": "Un service de messagerie ne gère pas les clés de chiffrement.",
        "c": "Il répartit le trafic.",
        "d": "Un service d’impression ne gère pas les clés de chiffrement."
      }
    },
    "mch-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "Avec une clé gérée par le client, il décide qui l’utilise, quand elle pivote et peut la révoquer, ce qui rend les données illisibles. Cela ne change pas la responsabilité du fournisseur sur le socle.",
      "whyWrong": {
        "a": "Le chiffrement reste nécessaire.",
        "c": "La responsabilité sur le socle ne change pas.",
        "b": "Les sauvegardes restent possibles."
      }
    },
    "mch-q26": {
      "type": "single",
      "correct": "c",
      "explanation": "Sans la clé, le chiffrement ne peut plus être défait. La destruction d’une clé est donc protégée (délai de suppression, droits séparés) et sa sauvegarde planifiée.",
      "whyWrong": {
        "d": "Elles ne sont pas stockées en clair.",
        "b": "Il ne détient pas votre clé.",
        "a": "Les sauvegardes chiffrées avec cette clé sont aussi concernées."
      }
    },
    "mch-q27": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le service déchiffre de façon transparente pour une identité autorisée : l’attaquant qui en prend le contrôle lit les données en clair. Le chiffrement protège contre le vol de support, pas contre l’abus de droits."
    },
    "mch-q28": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Séparer les rôles, faire pivoter et tracer l’usage limitent les abus. Une clé conservée à côté des données qu’elle protège ne protège rien.",
      "whyWrong": {
        "d": "La clé doit rester séparée des données."
      }
    },
    "mch-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "La résidence des données est l’emplacement géographique (région, pays) où elles sont stockées et traitées. Elle conditionne la juridiction applicable.",
      "whyWrong": {
        "c": "C’est la rétention.",
        "a": "Cela n’a pas de rapport.",
        "d": "C’est le chiffrement."
      }
    },
    "mch-q30": {
      "type": "short",
      "accepted": [
        "secnumcloud",
        "sec num cloud",
        "le secnumcloud"
      ],
      "explanation": "SecNumCloud est le référentiel de qualification de l’ANSSI pour les fournisseurs cloud. Il couvre notamment la protection contre les lois extraterritoriales."
    }
  },
};
