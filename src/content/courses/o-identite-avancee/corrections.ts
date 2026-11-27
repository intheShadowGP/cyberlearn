// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "o-identite-avancee",
  questions: {
    "oia-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "Le point de décision (PDP) évalue la demande à l’aide des politiques ; le point d’application (PEP) exécute ensuite la décision devant la ressource.",
      "whyWrong": {
        "b": "Un serveur d’impression n’évalue aucune politique d’accès.",
        "c": "Un routeur d’accès à Internet n’évalue pas des politiques d’accès aux applications.",
        "a": "Il n’est pas fiable pour décider."
      }
    },
    "oia-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Un fournisseur central permet d’appliquer la MFA, la détection et les politiques en un seul endroit, et de retirer un accès partout en une opération.",
      "whyWrong": {
        "d": "C’est l’inverse de l’objectif.",
        "c": "La fédération facilite les partenaires.",
        "b": "La journalisation reste nécessaire."
      }
    },
    "oia-q3": {
      "type": "single",
      "correct": "b",
      "explanation": "OAuth 2.0 est un cadre de délégation d’accès à des ressources. OpenID Connect s’y ajoute pour fournir l’identité authentifiée de l’utilisateur.",
      "whyWrong": {
        "a": "Les rôles sont inversés.",
        "c": "OpenID Connect et OAuth 2.0 ne chiffrent pas de disques.",
        "d": "Ils fonctionnent sur Internet."
      }
    },
    "oia-q4": {
      "type": "single",
      "correct": "c",
      "explanation": "Un jeton court expire vite : s’il est volé, il sert peu de temps. Le jeton de rafraîchissement, mieux protégé, permet d’en obtenir un nouveau sans nouvelle saisie.",
      "whyWrong": {
        "d": "L’authentification reste nécessaire.",
        "b": "C’est l’inverse.",
        "a": "La journalisation reste nécessaire."
      }
    },
    "oia-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un attribut mal contrôlé (groupe, rôle) peut accorder des droits indus. On vérifie sa source, sa signature et son périmètre avant de s’y fier."
    },
    "oia-q6": {
      "type": "short",
      "accepted": [
        "pkce",
        "pkce (proof key for code exchange)"
      ],
      "explanation": "PKCE lie le code d’autorisation au client qui l’a demandé : un code intercepté ne peut plus être échangé par un tiers."
    },
    "oia-q7": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Signature, émetteur, public visé et expiration garantissent que le jeton est authentique, destiné à ce service et encore valable. Sa longueur ne prouve rien.",
      "whyWrong": {
        "c": "Ce n’est pas un critère de validité."
      }
    },
    "oia-q8": {
      "type": "single",
      "correct": "b",
      "explanation": "Le Zero Trust évalue chaque demande selon l’identité, l’appareil et le contexte, sans accorder de confiance du seul fait de l’emplacement dans le réseau.",
      "whyWrong": {
        "a": "C’est le modèle périmétrique.",
        "d": "C’est l’inverse.",
        "c": "C’est l’inverse."
      }
    },
    "oia-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "L’appareil (géré, chiffré, à jour), la localisation, le risque et la sensibilité de l’action entrent dans la décision, en plus de l’identité.",
      "whyWrong": {
        "b": "Le fond d’écran n’est pas un signal de risque.",
        "a": "Le nombre de fichiers n’est pas un signal d’accès.",
        "d": "La marque du clavier n’est pas un signal de risque."
      }
    },
    "oia-q10": {
      "type": "single",
      "correct": "d",
      "explanation": "L’accès conditionnel adapte l’exigence au contexte : MFA résistante hors du réseau de confiance, refus d’un appareil non conforme, limitation selon la sensibilité.",
      "whyWrong": {
        "b": "C’est le contraire d’une règle conditionnelle.",
        "c": "Les facteurs restent nécessaires.",
        "a": "C’est le contraire de l’objectif."
      }
    },
    "oia-q11": {
      "type": "single",
      "correct": "a",
      "explanation": "Le Zero Trust suppose la compromission : segmenter limite ce que peut atteindre une session ou un appareil compromis.",
      "whyWrong": {
        "b": "Elle la complète, ne la remplace pas.",
        "d": "La surveillance reste nécessaire.",
        "c": "C’est l’inverse."
      }
    },
    "oia-q12": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le Zero Trust n’accorde aucune confiance du seul fait de l’emplacement : l’appareil est évalué comme n’importe quel autre à chaque demande."
    },
    "oia-q13": {
      "type": "short",
      "accepted": [
        "pep",
        "policy enforcement point",
        "point d’application"
      ],
      "explanation": "Le PEP exécute la décision du point de décision : il autorise ou bloque la demande juste devant la ressource."
    },
    "oia-q14": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Vérification explicite, moindre privilège et évaluation continue forment le cœur du Zero Trust. La confiance liée au réseau interne en est l’opposé.",
      "whyWrong": {
        "b": "C’est le modèle périmétrique."
      }
    },
    "oia-q15": {
      "type": "single",
      "correct": "b",
      "explanation": "L’ABAC évalue les attributs de l’utilisateur, de la ressource et du contexte (lieu, heure, sensibilité), ce que ne fait pas un rôle statique.",
      "whyWrong": {
        "d": "Cela supprime toute décision.",
        "c": "Une liste fixe ne tient pas compte du contexte.",
        "a": "Un accès ouvert à tous les salariés ignore la sensibilité de la ressource."
      }
    },
    "oia-q16": {
      "type": "single",
      "correct": "a",
      "explanation": "Trop de rôles rend le modèle illisible : on ne sait plus qui a quoi, et on accorde des rôles trop larges. On combine rôles et attributs pour garder un modèle lisible.",
      "whyWrong": {
        "b": "Le nombre de rôles n’influence pas la bande passante.",
        "d": "Il ne supprime pas les comptes.",
        "c": "Il ne renforce pas le chiffrement."
      }
    },
    "oia-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "La recertification fait confirmer ou retirer les droits par les responsables. Elle détecte les droits devenus inutiles, qui s’accumulent sinon.",
      "whyWrong": {
        "b": "Cela aggrave l’accumulation.",
        "a": "Cela supprime la traçabilité.",
        "d": "Cela supprime la traçabilité."
      }
    },
    "oia-q18": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Des politiques versionnées et testées hors du code se relisent et se modifient sans redéployer l’application ; elles se tracent aussi plus facilement."
    },
    "oia-q19": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La séparation des tâches répartit les étapes d’une action critique entre plusieurs personnes (demande, approbation, exécution). Les droits en lecture seule n’y suffisent pas."
    },
    "oia-q20": {
      "type": "short",
      "accepted": [
        "recertification",
        "la recertification",
        "recertification des accès",
        "revue des droits"
      ],
      "explanation": "La recertification des accès confirme que chaque droit est toujours justifié ; elle est plus efficace avec une présentation des écarts."
    },
    "oia-q21": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Demandeur, ressource, action, politique et résultat permettent de rejouer et d’expliquer la décision. Le thème de l’interface n’a aucun intérêt.",
      "whyWrong": {
        "d": "La couleur du thème n’a aucun intérêt pour auditer une décision."
      }
    },
    "oia-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "Un secret durable copié dans un dépôt ou une image reste utile à qui l’obtient. Des identités de courte durée réduisent cet intérêt.",
      "whyWrong": {
        "c": "Un secret statique n’accélère pas les échanges.",
        "a": "Il ne supprime pas le besoin de journalisation.",
        "b": "Il n’empêche pas les attaques : il les facilite."
      }
    },
    "oia-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "Chaque charge de travail reçoit une identité attestée et de courte durée, utilisable pour le mTLS, ce qui remplace les secrets partagés durables.",
      "whyWrong": {
        "c": "C’est ce qu’on cherche à éviter.",
        "b": "L’adresse IP ne prouve rien.",
        "d": "Elle est au contraire automatisée."
      }
    },
    "oia-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "Avec le mTLS, le client et le serveur présentent chacun un certificat : l’échange est chiffré et les deux identités sont vérifiées.",
      "whyWrong": {
        "d": "C’est le TLS classique.",
        "a": "Les échanges sont chiffrés.",
        "c": "Il n’utilise pas de mot de passe."
      }
    },
    "oia-q25": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un identifiant qui expire en quelques minutes ou quelques heures limite la fenêtre d’utilisation d’un vol, contrairement à une clé valable des années."
    },
    "oia-q26": {
      "type": "short",
      "accepted": [
        "rotation",
        "la rotation",
        "renouvellement"
      ],
      "explanation": "La rotation, idéalement automatique, réduit la durée pendant laquelle un secret volé reste utilisable."
    },
    "oia-q27": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Pas de secret durable, portée limitée et renouvellement automatique réduisent l’exposition. Une clé dans une image publique est accessible à tous.",
      "whyWrong": {
        "a": "Elle serait accessible à tous."
      }
    },
    "oia-q28": {
      "type": "open",
      "model": "Je considère la clé comme compromise : je la révoque et la remplace tout de suite, puis je vérifie ses usages récents dans les journaux. Je retire la clé du dépôt et de son historique, et je stocke le nouveau secret dans un coffre. Pour le fond, je remplace la clé durable par une identité de courte durée délivrée à la demande, avec des droits limités à l’usage réel. Pour éviter la récidive, j’active une analyse automatique des dépôts pour détecter les secrets avant la fusion, je tiens un inventaire des identités non humaines avec un propriétaire, et je prévois une rotation automatique.",
      "criteria": [
        "La clé est considérée comme compromise, révoquée et remplacée immédiatement.",
        "Les usages récents sont vérifiés dans les journaux.",
        "La clé durable est remplacée par une identité de courte durée ou un coffre.",
        "Une prévention (analyse des dépôts, inventaire, rotation) est proposée."
      ],
      "explanation": "Un secret dans un dépôt est compromis dès qu’il est copié : on le remplace, on enquête, puis on supprime le besoin de secret durable."
    },
    "oia-q29": {
      "type": "single",
      "correct": "c",
      "explanation": "Toutes les applications fédérées lui font confiance : un attaquant qui le contrôle peut se faire passer pour n’importe quel utilisateur.",
      "whyWrong": {
        "a": "Le fournisseur d’identité stocke des identités, pas des images publiques.",
        "d": "Il est relié à de nombreuses applications fédérées.",
        "b": "Il journalise les connexions : c’est justement ce qui rend son suivi utile."
      }
    },
    "oia-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "Peu de comptes, nominatifs, protégés par une MFA résistante et utilisés depuis des postes dédiés, avec des droits juste-à-temps.",
      "whyWrong": {
        "c": "Cela supprime la traçabilité.",
        "b": "Les appareils doivent être maîtrisés.",
        "a": "Cela viole le moindre privilège."
      }
    },
    "oia-q31": {
      "type": "single",
      "correct": "a",
      "explanation": "Un nouveau certificat de signature ou une nouvelle confiance fédérée permettent de falsifier des identités : toute modification doit être alertée et approuvée.",
      "whyWrong": {
        "b": "Événement courant.",
        "c": "Événement courant.",
        "d": "Sans impact sur la sécurité."
      }
    },
    "oia-q32": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les applications acceptent les assertions du fournisseur de confiance : s’il est contrôlé par un attaquant, celui-ci fabrique des identités sans connaître aucun mot de passe."
    },
    "oia-q33": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Les changements de fédération, les identifiants à forts droits et les rafales d’échecs signalent des abus. Un avatar mis à jour est un événement banal.",
      "whyWrong": {
        "d": "Événement banal."
      }
    },
    "oia-q34": {
      "type": "open",
      "model": "Je désactive le compte et révoque ses sessions et jetons, j’active les comptes d’urgence et je prévins l’équipe de réponse et la direction. J’examine les modifications récentes de la fédération : certificats de signature, confiances, droits, applications autorisées, et je supprime ou isole ce qui est suspect. Si les clés de signature sont en cause, je les remplace et j’invalide les jetons déjà émis. J’utilise les journaux exportés hors du fournisseur pour mesurer l’étendue. Je restaure ensuite une configuration saine, je rétablis l’authentification progressivement en commençant par les comptes sensibles, puis je renforce l’administration et les alertes.",
      "criteria": [
        "Le compte est désactivé et ses sessions révoquées, les comptes d’urgence activés.",
        "La configuration de fédération est auditée et les éléments suspects supprimés.",
        "Les clés de signature sont remplacées et les jetons invalidés si nécessaire.",
        "Les journaux exportés sont exploités et une restauration progressive est prévue."
      ],
      "explanation": "Une compromission du fournisseur est un incident majeur : on contient, on assainit la confiance, puis on rétablit progressivement."
    },
    "oia-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "Si le fournisseur principal tombe, ces comptes permettent de restaurer l’accès. Ils sont rares, scellés et leur usage déclenche une alerte.",
      "whyWrong": {
        "c": "Ils ne dispensent pas de protection.",
        "d": "Les comptes d’urgence ne remplacent pas définitivement les comptes nominatifs.",
        "a": "Ils ne donnent pas d’accès permanent à chaque administrateur."
      }
    },
    "oia-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "Avec les clés de signature, un attaquant fabrique des jetons valides. Il faut les remplacer et rendre invalides les jetons émis avec les anciennes clés.",
      "whyWrong": {
        "d": "L’attente laisse l’attaquant agir.",
        "b": "Informer seulement les utilisateurs ne règle pas la compromission des clés.",
        "a": "On perdrait les preuves."
      }
    },
    "oia-q37": {
      "type": "single",
      "correct": "d",
      "explanation": "L’exercice valide que les comptes d’urgence, les sauvegardes et la procédure de restauration fonctionnent réellement et révèle les dépendances oubliées.",
      "whyWrong": {
        "a": "La vitesse de frappe n’a aucun lien avec la résilience.",
        "b": "Trop partiel.",
        "c": "La couleur de l’interface n’a aucun lien avec la résilience."
      }
    },
    "oia-q38": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un compte d’urgence est exclu des protections habituelles : son usage doit être exceptionnel, alerté et revu. Un usage quotidien en fait une cible."
    },
    "oia-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Accès d’urgence testé, configuration sauvegardée et contacts à jour permettent de reprendre vite. Supprimer les journaux empêcherait toute enquête.",
      "whyWrong": {
        "d": "Cela empêche l’enquête."
      }
    },
    "oia-q40": {
      "type": "short",
      "accepted": [
        "rto",
        "recovery time objective"
      ],
      "explanation": "Le RTO fixe l’objectif de reprise : il dimensionne les sauvegardes, la redondance et les procédures d’urgence."
    },
    "oia-q41": {
      "type": "single",
      "correct": "a",
      "explanation": "L’accès conditionnel évalue le contexte (appareil, lieu, risque de la session, sensibilité de la ressource) et adapte l’exigence : autoriser, renforcer le facteur ou refuser.",
      "whyWrong": {
        "d": "La longueur d’un nom de compte n’est pas un signal de risque.",
        "c": "Le thème n’a aucun rapport avec le risque.",
        "b": "La force du mot de passe ne décrit pas le contexte de la connexion."
      }
    },
    "oia-q42": {
      "type": "single",
      "correct": "b",
      "explanation": "Un jeton émis dynamiquement et de courte durée expire vite ; un secret statique reste valable jusqu’à rotation et fuit facilement via le dépôt de code.",
      "whyWrong": {
        "c": "Les droits restent à contrôler au moindre privilège.",
        "a": "La lisibilité n’est pas la raison.",
        "d": "Partager un compte est une mauvaise pratique."
      }
    },
    "oia-q43": {
      "type": "single",
      "correct": "d",
      "explanation": "Le compte d’urgence doit rester utilisable si le fournisseur d’identité ou la MFA tombe, mais sa moindre utilisation doit alerter et être revue.",
      "whyWrong": {
        "c": "Un usage quotidien l’expose et brouille la détection.",
        "b": "Un secret partagé empêche toute imputabilité.",
        "a": "Sa surveillance est au contraire indispensable."
      }
    }
  },
};
