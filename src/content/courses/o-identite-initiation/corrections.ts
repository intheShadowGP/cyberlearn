// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "o-identite-initiation",
  questions: {
    "oii-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "L’authentification vérifie qu’une personne est bien celle qu’elle prétend être, par exemple avec un mot de passe, un code ou une clé de sécurité.",
      "whyWrong": {
        "a": "Le fond d’écran n’a aucun lien avec la vérification d’une identité.",
        "c": "Installer un logiciel n’authentifie personne.",
        "b": "Éteindre l’ordinateur n’est pas une authentification."
      }
    },
    "oii-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Une fois la personne identifiée, l’autorisation décide à quoi elle a accès et ce qu’elle peut faire (lire, modifier, supprimer).",
      "whyWrong": {
        "b": "C’est l’authentification.",
        "d": "Sauvegarder des fichiers relève de la continuité, pas des droits d’accès.",
        "c": "Chiffrer le disque protège des données, il ne définit pas ce qu’une personne peut faire."
      }
    },
    "oii-q3": {
      "type": "single",
      "correct": "c",
      "explanation": "L’identifiant (nom d’utilisateur, adresse de messagerie) désigne le compte. Il n’est pas secret : le secret est le mot de passe ou le facteur.",
      "whyWrong": {
        "d": "Un fond d’écran ne désigne pas un compte de façon unique.",
        "a": "Une adresse postale de service est commune à plusieurs personnes.",
        "b": "Un logo d’entreprise est le même pour tous les comptes."
      }
    },
    "oii-q4": {
      "type": "single",
      "correct": "b",
      "explanation": "Un compte nominatif permet de tracer les actions, de retirer l’accès d’une seule personne et d’ajuster ses droits.",
      "whyWrong": {
        "c": "Le but n’est pas d’acheter des licences, mais de pouvoir tracer les actions.",
        "a": "Un compte nominatif ne ralentit pas les connexions.",
        "d": "La fréquence de changement des mots de passe n’est pas la raison du compte individuel."
      }
    },
    "oii-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Elle regroupe l’identifiant, les facteurs d’authentification, les attributs (service, fonction) et les droits associés au compte."
    },
    "oii-q6": {
      "type": "short",
      "accepted": [
        "mot de passe",
        "un mot de passe",
        "le mot de passe"
      ],
      "explanation": "Le mot de passe est un facteur de connaissance. Seul, il est vulnérable au vol et à la réutilisation : on le complète par un second facteur."
    },
    "oii-q7": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Identifiant, droits et historique de connexions caractérisent le compte. La couleur préférée n’a aucun rôle.",
      "whyWrong": {
        "d": "Sans lien avec l’accès."
      }
    },
    "oii-q8": {
      "type": "single",
      "correct": "a",
      "explanation": "La longueur compte plus que la complexité apparente. Une phrase de plusieurs mots, propre à chaque service, est difficile à deviner et facile à retenir.",
      "whyWrong": {
        "c": "Facile à deviner.",
        "d": "Le premier essai d’un attaquant.",
        "b": "Facile à trouver."
      }
    },
    "oii-q9": {
      "type": "single",
      "correct": "d",
      "explanation": "Quand un service est piraté, les attaquants essaient les mêmes identifiants ailleurs. Un mot de passe unique par service limite les dégâts.",
      "whyWrong": {
        "b": "La mémoire du poste n’est pas concernée.",
        "c": "Réutiliser un mot de passe ne ralentit pas Internet.",
        "a": "Tous les services ne l’interdisent pas : c’est une règle de bonne pratique."
      }
    },
    "oii-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "Il génère des mots de passe longs et différents pour chaque service et les remplit à votre place. Vous ne retenez qu’un seul mot de passe principal.",
      "whyWrong": {
        "d": "Un gestionnaire de mots de passe n’accélère pas la connexion Internet.",
        "a": "Il ne désinstalle aucun logiciel.",
        "c": "Il ne sauvegarde pas de photos : il stocke des secrets."
      }
    },
    "oii-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Des changements trop fréquents poussent à choisir des mots de passe faibles. On privilégie un mot de passe long et unique, changé en cas de fuite ou de soupçon."
    },
    "oii-q12": {
      "type": "short",
      "accepted": [
        "phrase de passe",
        "une phrase de passe",
        "passphrase"
      ],
      "explanation": "Une phrase de passe est longue, donc difficile à deviner, tout en restant mémorisable."
    },
    "oii-q13": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Longueur, unicité, gestionnaire et confidentialité protègent le mot de passe. Un papier collé à l’écran le rend visible de tous.",
      "whyWrong": {
        "c": "N’importe qui peut le lire."
      }
    },
    "oii-q14": {
      "type": "open",
      "model": "Je lui conseille de changer immédiatement le mot de passe de sa messagerie professionnelle, puis celui de tous les comptes où il a utilisé le même, avec un mot de passe long et différent pour chacun. Je l’invite à utiliser un gestionnaire de mots de passe pour les créer et les retenir, et à activer l’authentification à plusieurs facteurs, au moins sur la messagerie. Il doit vérifier l’activité récente du compte (connexions inhabituelles, règles de transfert) et prévenir l’équipe sécurité, car les attaquants essaient en priorité les identifiants volés sur d’autres services. Enfin, il ne doit plus jamais réutiliser un mot de passe professionnel dans un usage personnel.",
      "criteria": [
        "Le changement immédiat du mot de passe professionnel est conseillé.",
        "La réutilisation est identifiée comme la cause du risque.",
        "Un gestionnaire de mots de passe et la MFA sont proposés.",
        "Le signalement ou la vérification de l’activité du compte est mentionné."
      ],
      "explanation": "La réutilisation transforme la fuite d’un site sans importance en compromission d’un compte professionnel."
    },
    "oii-q15": {
      "type": "single",
      "correct": "c",
      "explanation": "La MFA combine au moins deux preuves de catégories différentes (ce que l’on sait, possède, est) : un mot de passe volé ne suffit plus.",
      "whyWrong": {
        "b": "MFA ne désigne pas un mot de passe fort : c’est l’usage de plusieurs facteurs.",
        "a": "MFA n’est pas une messagerie.",
        "d": "MFA ne désigne pas une mise à jour forcée."
      }
    },
    "oii-q16": {
      "type": "single",
      "correct": "b",
      "explanation": "Le téléphone et la clé de sécurité sont des objets détenus par la personne : facteurs de possession.",
      "whyWrong": {
        "c": "C’est un facteur de connaissance.",
        "a": "C’est un facteur biométrique.",
        "d": "C’est un facteur de connaissance."
      }
    },
    "oii-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "Sans le second facteur (téléphone, clé), le mot de passe seul ne permet pas de se connecter.",
      "whyWrong": {
        "d": "Ce n’est pas ce qui se passe.",
        "a": "Ce n’est pas ce qui se passe.",
        "b": "Ce n’est pas ce qui se passe."
      }
    },
    "oii-q18": {
      "type": "single",
      "correct": "d",
      "explanation": "Une clé de sécurité ou une passkey est liée au site légitime : elle ne fonctionne pas sur un faux site. Les codes saisis peuvent être relayés.",
      "whyWrong": {
        "a": "Le code peut être relayé.",
        "c": "Elle se devine ou se trouve.",
        "b": "Il peut être volé."
      }
    },
    "oii-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Si vous n’êtes pas à l’origine de la demande, quelqu’un connaît probablement votre mot de passe. Il faut refuser et signaler."
    },
    "oii-q20": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Refuser, signaler et vérifier le contexte limitent les attaques par fatigue de la MFA. Accepter pour être tranquille donne l’accès à l’attaquant.",
      "whyWrong": {
        "b": "Cela donne l’accès à l’attaquant."
      }
    },
    "oii-q21": {
      "type": "short",
      "accepted": [
        "clé de sécurité",
        "cle de securite",
        "une clé de sécurité",
        "clé fido2"
      ],
      "explanation": "La clé de sécurité (FIDO2) signe un défi lié au site : c’est le facteur le plus résistant à l’hameçonnage."
    },
    "oii-q22": {
      "type": "single",
      "correct": "a",
      "explanation": "Plus les droits sont limités, moins une erreur ou une compromission ont de conséquences.",
      "whyWrong": {
        "d": "Ce n’est pas un principe de sécurité.",
        "c": "Ce n’est pas un principe de sécurité.",
        "b": "Ce n’est pas un principe de sécurité."
      }
    },
    "oii-q23": {
      "type": "single",
      "correct": "d",
      "explanation": "Sans retrait, les droits s’accumulent au fil des postes : la personne finit par accéder à des données qui n’ont plus de rapport avec son travail.",
      "whyWrong": {
        "a": "Retirer des droits n’est pas une sanction : c’est une mesure de moindre privilège.",
        "b": "La mémoire du serveur n’est pas concernée par la gestion des droits.",
        "c": "Le retrait des droits ne change pas l’identifiant de connexion."
      }
    },
    "oii-q24": {
      "type": "single",
      "correct": "a",
      "explanation": "Un compte partagé empêche d’attribuer une action à une personne et survit au départ des utilisateurs : on évite cette pratique.",
      "whyWrong": {
        "c": "Un compte partagé n’accélère pas la connexion.",
        "d": "Un compte partagé est moins sûr, pas plus sûr.",
        "b": "Le risque est réel : on ne peut plus attribuer les actions."
      }
    },
    "oii-q25": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un compte actif d’une personne partie est une porte d’entrée : il peut être utilisé par elle ou par un attaquant sans que personne ne s’en aperçoive."
    },
    "oii-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La messagerie est un vecteur d’attaque : un seul clic malveillant donnerait les droits d’administration. On utilise un compte ordinaire pour la messagerie."
    },
    "oii-q27": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Administrateurs, comptes de service et accès de prestataires peuvent agir largement : ils sont inventoriés et surveillés. Un compte désactivé sans droit ne présente pas de risque.",
      "whyWrong": {
        "d": "Il n’a aucun droit."
      }
    },
    "oii-q28": {
      "type": "short",
      "accepted": [
        "compte de service",
        "un compte de service"
      ],
      "explanation": "Un compte de service exécute une application, une sauvegarde ou un outil. Il a des droits limités, un propriétaire et ne se connecte pas comme une personne."
    },
    "oii-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "On s’authentifie une fois auprès d’un fournisseur d’identité, qui atteste l’identité auprès des applications. La MFA se règle au même endroit.",
      "whyWrong": {
        "c": "Le SSO ne limite pas l’usage à un seul ordinateur.",
        "a": "Il ne couvre pas tout Internet : seulement les applications rattachées.",
        "d": "Il ne supprime pas les comptes : il simplifie la connexion."
      }
    },
    "oii-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "Le site délègue l’authentification à un fournisseur (messagerie, réseau social, annuaire d’entreprise). Il ne reçoit pas votre mot de passe.",
      "whyWrong": {
        "a": "Il ne le reçoit pas.",
        "b": "Ce n’est pas ce qui se passe.",
        "d": "Ce n’est pas ce qui se passe."
      }
    },
    "oii-q31": {
      "type": "single",
      "correct": "c",
      "explanation": "Une application malveillante peut demander la lecture de votre messagerie. Les droits demandés doivent correspondre à son usage réel.",
      "whyWrong": {
        "b": "La couleur dominante n’indique rien sur les droits demandés.",
        "d": "Le prix affiché ne dit rien des accès demandés.",
        "a": "La date de création seule ne permet pas de juger les droits demandés."
      }
    },
    "oii-q32": {
      "type": "truefalse",
      "correct": false,
      "explanation": "L’application obtient un accès propre, indépendant de votre mot de passe. Une application malveillante peut lire vos messages même avec un mot de passe très fort."
    },
    "oii-q33": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Refuser l’excès, révoquer ce qui ne sert plus et lire les demandes limitent les abus. Tout accepter donne un accès durable à n’importe quelle application.",
      "whyWrong": {
        "d": "Cela expose vos données."
      }
    },
    "oii-q34": {
      "type": "open",
      "model": "Je n’autorise pas. Je regarde d’abord les droits demandés : une application qui lit des documents n’a pas besoin de lire toute ma messagerie ni de conserver un accès permanent. Je vérifie l’expéditeur et le lien, qui peuvent être une tentative d’hameçonnage, et je ne clique pas depuis le message. Si le besoin est réel, je passe par le catalogue des applications validées par l’organisation. Je signale le message à l’équipe sécurité. Si j’ai déjà accepté, je révoque l’application dans les paramètres de mon compte et je préviens l’équipe sécurité pour vérifier l’activité du compte.",
      "criteria": [
        "L’autorisation est refusée ou l’application vérifiée avant acceptation.",
        "Les droits demandés sont jugés au regard du besoin.",
        "Le signalement à l’équipe sécurité est mentionné.",
        "La révocation en cas d’acceptation est prévue."
      ],
      "explanation": "Un consentement abusif donne un accès durable sans connaître le mot de passe : la prudence se joue au moment du clic."
    },
    "oii-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "On coupe l’accès (mot de passe, sessions) et on prévient pour que l’équipe vérifie ce qui a été fait avec le compte.",
      "whyWrong": {
        "a": "L’attente aggrave les dégâts.",
        "b": "On détruit des preuves.",
        "c": "Il ne faut jamais communiquer son mot de passe."
      }
    },
    "oii-q36": {
      "type": "single",
      "correct": "a",
      "explanation": "C’est un hameçonnage classique. On ne saisit rien, on n’ouvre pas les liens et on signale le message à l’équipe sécurité.",
      "whyWrong": {
        "b": "Cela donnerait le compte.",
        "d": "On propagerait le piège.",
        "c": "Cela donnerait le compte."
      }
    },
    "oii-q37": {
      "type": "single",
      "correct": "b",
      "explanation": "L’alerte vous prévient quand une connexion vient d’un lieu ou d’un appareil inhabituel, ce qui permet de réagir vite.",
      "whyWrong": {
        "c": "Une alerte n’accélère pas les connexions.",
        "d": "Elle ne supprime pas le mot de passe.",
        "a": "Elle ne change pas l’identifiant : elle signale un usage inhabituel."
      }
    },
    "oii-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Plus l’alerte est rapide, plus l’accès est coupé tôt et moins l’attaquant a le temps d’agir : lire des messages, créer des règles, envoyer des fraudes."
    },
    "oii-q39": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Mot de passe, sessions et signalement coupent l’accès et permettent de vérifier les dégâts. Se taire laisse l’attaquant agir.",
      "whyWrong": {
        "a": "Cela laisse l’attaquant agir."
      }
    },
    "oii-q40": {
      "type": "short",
      "accepted": [
        "hameçonnage",
        "hameconnage",
        "phishing",
        "l’hameçonnage"
      ],
      "explanation": "Le hameçonnage (phishing) pousse la victime à saisir ses identifiants sur un faux site. Les facteurs liés au site légitime (passkeys) le déjouent."
    },
    "oii-q41": {
      "type": "single",
      "correct": "a",
      "explanation": "Une clé de sécurité ou passkey lie la preuve au site légitime : un faux site ne peut pas la relayer. Les codes saisis ou les notifications peuvent être obtenus par ruse.",
      "whyWrong": {
        "b": "Un code SMS peut être relayé ou intercepté (détournement de carte SIM).",
        "c": "Un code saisi sur un faux site peut être relayé en temps réel.",
        "d": "Les notifications sont exposées à la fatigue : l’utilisateur finit par accepter."
      }
    },
    "oii-q42": {
      "type": "single",
      "correct": "c",
      "explanation": "Une demande non déclenchée signale que quelqu’un connaît votre mot de passe. On refuse, on change le mot de passe depuis un appareil sain et on signale l’événement.",
      "whyWrong": {
        "b": "Accepter donne l’accès à l’attaquant.",
        "d": "Ignorer laisse le mot de passe compromis.",
        "a": "Accepter donne l’accès immédiatement ; le changement tardif ne l’annule pas."
      }
    },
    "oii-q43": {
      "type": "single",
      "correct": "b",
      "explanation": "Ajouter des droits sans jamais en retirer fait croître les accès bien au-delà du besoin. Un compte compromis donne alors plus de pouvoir à l’attaquant.",
      "whyWrong": {
        "a": "Ce n’est pas une sanction, c’est l’application du moindre privilège.",
        "d": "Les droits n’expirent pas seuls sans règle explicite.",
        "c": "Le nombre de mots de passe n’a pas de rapport."
      }
    },
    "oii-q44": {
      "type": "short",
      "accepted": [
        "gestionnaire de mots de passe",
        "gestionnaire de mot de passe"
      ],
      "explanation": "Un gestionnaire de mots de passe permet d’avoir un mot de passe long et unique pour chaque compte sans avoir à tous les retenir."
    }
  },
};
