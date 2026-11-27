// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "o-acces-pratique",
  questions: {
    "opr-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "L’annuaire (Active Directory, Entra ID, LDAP) regroupe les comptes, les groupes et leurs attributs : il sert de base à tous les contrôles d’accès.",
      "whyWrong": {
        "b": "Un annuaire ne stocke pas les sauvegardes des postes.",
        "d": "Filtrer le courrier est le rôle d’une passerelle de messagerie.",
        "a": "Superviser la température relève de l’exploitation des salles serveurs."
      }
    },
    "opr-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Arrivée, mobilité et départ sont les trois moments où les droits doivent être créés, ajustés puis retirés.",
      "whyWrong": {
        "d": "Ce n’est pas le cycle d’un compte.",
        "b": "Cela concerne les logiciels.",
        "c": "Cela concerne le matériel."
      }
    },
    "opr-q3": {
      "type": "single",
      "correct": "d",
      "explanation": "Le système RH connaît les arrivées et les départs. L’utiliser comme source de vérité évite les comptes oubliés et les délais.",
      "whyWrong": {
        "a": "Peu fiable et non tracé.",
        "b": "Source dispersée.",
        "c": "Fragile et vite obsolète."
      }
    },
    "opr-q4": {
      "type": "single",
      "correct": "b",
      "explanation": "La désactivation coupe l’accès tout de suite. La suppression est différée pour conserver les journaux et permettre une éventuelle enquête ou récupération de données.",
      "whyWrong": {
        "d": "Libérer les licences n’est pas la raison de désactiver d’abord.",
        "c": "C’est l’inverse de l’objectif.",
        "a": "Le responsable doit être informé."
      }
    },
    "opr-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un compte dormant est une entrée discrète pour un attaquant : personne ne remarque une connexion inhabituelle. On le détecte à la date de dernière connexion."
    },
    "opr-q6": {
      "type": "short",
      "accepted": [
        "dormant",
        "compte dormant",
        "un compte dormant",
        "inactif"
      ],
      "explanation": "Un compte dormant reste actif sans usage. Il est détecté par un rapport de dernière connexion et désactivé après vérification avec les responsables."
    },
    "opr-q7": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Groupes, attributs de service et état du compte alimentent les règles d’accès. La marque de l’ordinateur personnel n’a pas de rôle.",
      "whyWrong": {
        "b": "Sans lien avec les droits."
      }
    },
    "opr-q8": {
      "type": "single",
      "correct": "d",
      "explanation": "Les recommandations (ANSSI, NIST) privilégient la longueur et le contrôle contre les listes de mots de passe compromis, plutôt que l’expiration forcée qui pousse à des choix faibles.",
      "whyWrong": {
        "a": "L’expiration forcée affaiblit les choix.",
        "c": "Trop court et trop prévisible.",
        "b": "Les gestionnaires sont recommandés."
      }
    },
    "opr-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "La messagerie sert à réinitialiser d’autres comptes et les comptes d’administration ont de larges droits : les protéger en premier réduit le plus le risque.",
      "whyWrong": {
        "b": "Ces comptes sont au contraire très utilisés.",
        "d": "Ils sont au contraire très visés.",
        "c": "Tout compte a un identifiant."
      }
    },
    "opr-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "Saisir le nombre affiché à l’écran de connexion oblige à regarder la demande : on ne peut plus accepter au hasard une notification déclenchée par un attaquant.",
      "whyWrong": {
        "c": "Le number matching ne protège pas du vol physique du téléphone.",
        "d": "Il ne traite pas les coupures du réseau mobile.",
        "a": "Il ne traite pas l’oubli du mot de passe."
      }
    },
    "opr-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un code saisi peut être relayé par un faux site ou intercepté. La clé de sécurité est liée au site légitime et ne fonctionne pas sur un faux site."
    },
    "opr-q12": {
      "type": "short",
      "accepted": [
        "fido2",
        "webauthn",
        "fido",
        "fido2/webauthn"
      ],
      "explanation": "FIDO2 (avec WebAuthn) définit des identifiants à clé publique liés au site : c’est la base des passkeys et des clés de sécurité résistantes à l’hameçonnage."
    },
    "opr-q13": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Un canal indépendant, la journalisation et un processus encadré empêchent l’attaquant de contourner la MFA par le support. Une réinitialisation sans contrôle annule la protection.",
      "whyWrong": {
        "d": "Cela contourne la MFA."
      }
    },
    "opr-q14": {
      "type": "open",
      "model": "Je déploie par étapes. Je commence par les administrateurs et la messagerie avec des clés de sécurité, puis j’étends à tous les salariés avec une application d’authentification ou une passkey. J’explique les raisons aux équipes, je propose une assistance pendant les premières semaines et une méthode de secours. J’encadre la récupération d’un second facteur perdu par une vérification d’identité indépendante, avec journalisation. Je documente et date les exceptions, je retire ensuite les méthodes les plus faibles comme le SMS quand c’est possible, et je suis des indicateurs : part des comptes protégés et nombre d’exceptions ouvertes.",
      "criteria": [
        "Un déploiement par étapes commençant par les comptes les plus exposés est décrit.",
        "L’accompagnement des utilisateurs (information, assistance) est prévu.",
        "Un processus de récupération sûr est défini.",
        "Les exceptions sont limitées et le suivi par indicateurs est mentionné."
      ],
      "explanation": "Un déploiement progressif et accompagné réduit les blocages ; la récupération et les exceptions sont les points faibles à encadrer."
    },
    "opr-q15": {
      "type": "single",
      "correct": "c",
      "explanation": "Le fournisseur d’identité authentifie l’utilisateur puis délivre une assertion ou un jeton aux applications fédérées.",
      "whyWrong": {
        "a": "Il ne gère pas les identités.",
        "d": "Un serveur d’impression n’atteste aucune identité.",
        "b": "Un gestionnaire de sauvegardes n’atteste aucune identité."
      }
    },
    "opr-q16": {
      "type": "single",
      "correct": "b",
      "explanation": "SAML transmet des assertions XML signées par le fournisseur d’identité. OpenID Connect fait le même travail avec des jetons JSON.",
      "whyWrong": {
        "d": "Protocole de messagerie.",
        "a": "Protocole de synchronisation horaire.",
        "c": "Protocole d’adressage réseau."
      }
    },
    "opr-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "SCIM propage la création, la modification et la suppression des comptes de l’annuaire vers les applications : plus de comptes oubliés après un départ.",
      "whyWrong": {
        "a": "SCIM ne chiffre pas les échanges des navigateurs.",
        "b": "Il ne mesure pas la bande passante.",
        "d": "Il ne génère pas de mots de passe aléatoires."
      }
    },
    "opr-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "Un seul compte ouvre de nombreuses applications : il faut le protéger davantage (MFA résistante, surveillance) que les autres.",
      "whyWrong": {
        "c": "C’est l’inverse avec la fédération.",
        "b": "Les sessions peuvent expirer.",
        "d": "La MFA se règle au même endroit."
      }
    },
    "opr-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "L’utilisateur saisit son mot de passe uniquement auprès du fournisseur d’identité. L’application reçoit seulement une assertion ou un jeton signé."
    },
    "opr-q20": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Signature, émetteur, destinataire et durée limitée empêchent d’utiliser une assertion falsifiée ou rejouée. Accepter tout fournisseur d’identité annule la confiance.",
      "whyWrong": {
        "b": "Cela annule la confiance."
      }
    },
    "opr-q21": {
      "type": "short",
      "accepted": [
        "attributs",
        "attribut",
        "claims",
        "claim",
        "revendications"
      ],
      "explanation": "Les attributs (claims) sont les informations transmises avec l’assertion ou le jeton ; les applications les utilisent pour décider des accès."
    },
    "opr-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "Avec le RBAC, les droits sont rattachés à des rôles ou groupes, puis les personnes reçoivent les rôles correspondant à leur fonction.",
      "whyWrong": {
        "c": "RBAC n’est pas un chiffrement de sauvegardes.",
        "b": "RBAC n’est pas un réseau local.",
        "a": "RBAC n’est pas une redirection de courriels."
      }
    },
    "opr-q23": {
      "type": "single",
      "correct": "b",
      "explanation": "Les rôles simplifient les arrivées, les mobilités et les revues : on modifie le rôle plutôt que des centaines de droits individuels.",
      "whyWrong": {
        "c": "C’est l’inverse de l’intérêt.",
        "a": "Les revues restent nécessaires.",
        "d": "Il faut toujours des administrateurs."
      }
    },
    "opr-q24": {
      "type": "single",
      "correct": "a",
      "explanation": "La personne qui demande une action sensible (un paiement, un droit étendu) n’est pas celle qui l’approuve, ce qui limite la fraude et les erreurs.",
      "whyWrong": {
        "d": "Chaque personne ne doit pas tout administrer : c’est l’inverse de la séparation.",
        "c": "La répartition ne se fait pas au hasard, mais selon des règles.",
        "b": "C’est l’inverse."
      }
    },
    "opr-q25": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les droits dérivent avec le temps. Les responsables connaissent les besoins réels et peuvent confirmer ou retirer ce qui n’est plus justifié."
    },
    "opr-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Une élévation doit être approuvée, limitée dans le temps et journalisée. Un droit laissé sans date de fin devient une dette et une cible."
    },
    "opr-q27": {
      "type": "short",
      "accepted": [
        "abac",
        "abac (attribute-based access control)"
      ],
      "explanation": "L’ABAC évalue des attributs de l’utilisateur, de la ressource et du contexte pour décider ; il complète le RBAC pour les règles fines."
    },
    "opr-q28": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Justification, approbation et échéance rendent l’accès tracé et limité. Accorder l’accès avant validation contourne le contrôle.",
      "whyWrong": {
        "a": "Cela contourne le contrôle."
      }
    },
    "opr-q29": {
      "type": "single",
      "correct": "c",
      "explanation": "Le compte quotidien lit les courriels et navigue : il est exposé. Séparer l’administration évite qu’un clic malveillant donne des droits élevés.",
      "whyWrong": {
        "a": "Séparer les comptes fait perdre un peu de temps, mais protège les droits élevés.",
        "d": "Il faut des mots de passe distincts.",
        "b": "La MFA reste exigée."
      }
    },
    "opr-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "Un compte de service a un propriétaire, des droits limités à sa fonction, un secret en coffre renouvelé, et n’est pas utilisé comme un compte de personne.",
      "whyWrong": {
        "c": "Le secret doit être renouvelé.",
        "b": "Il ne se connecte pas comme une personne.",
        "a": "Cela viole le moindre privilège."
      }
    },
    "opr-q31": {
      "type": "single",
      "correct": "a",
      "explanation": "Le compte d’urgence est exclu des dispositifs habituels pour retrouver l’accès si le SSO ou la MFA est indisponible. Son usage déclenche une alerte et une revue.",
      "whyWrong": {
        "b": "Il est réservé aux urgences.",
        "c": "Un compte d’urgence n’est pas un accès permanent pour des prestataires.",
        "d": "Il ne remplace pas la MFA ailleurs."
      }
    },
    "opr-q32": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un accès de prestataire doit être limité dans le temps et retiré à la fin de la mission : un accès oublié est une porte d’entrée pour un attaquant."
    },
    "opr-q33": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Coffre, renouvellement et portée limitée réduisent l’exposition. Un secret en clair dans le code se retrouve dans les dépôts et les sauvegardes.",
      "whyWrong": {
        "a": "Il serait lisible par tous."
      }
    },
    "opr-q34": {
      "type": "open",
      "model": "Je refuse l’accès permanent et propose un accès limité dans le temps, strictement adapté à la tâche, avec un compte nominatif et la MFA. L’accès est approuvé par le propriétaire du système, ouvert pour la durée de l’intervention puis retiré automatiquement. L’intervention passe par un poste ou un rebond contrôlé et ses actions sont journalisées, voire supervisées. À la fin de la mission, je vérifie que le compte est désactivé et je consigne l’opération dans le registre des accès de prestataires.",
      "criteria": [
        "L’accès permanent est refusé au profit d’un accès limité dans le temps.",
        "Le périmètre est adapté à la tâche (moindre privilège) avec compte nominatif et MFA.",
        "La traçabilité ou la supervision de l’intervention est prévue.",
        "Le retrait de l’accès en fin de mission est vérifié."
      ],
      "explanation": "L’accès de prestataire est une des portes d’entrée les plus courantes : durée, périmètre, nominatif et traçabilité en limitent le risque."
    },
    "opr-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "Deux pays à quelques minutes d’intervalle sont un déplacement impossible : le compte est probablement utilisé par un tiers.",
      "whyWrong": {
        "a": "Comportement normal.",
        "c": "Comportement normal.",
        "d": "Comportement normal."
      }
    },
    "opr-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "Un transfert automatique vers l’extérieur permet à l’attaquant de lire les messages en silence, même après un changement de mot de passe.",
      "whyWrong": {
        "a": "Usage normal.",
        "b": "Usage normal.",
        "c": "Usage normal."
      }
    },
    "opr-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "On coupe l’accès en révoquant sessions et jetons et en réinitialisant mot de passe et facteurs ; les journaux sont conservés pour enquêter.",
      "whyWrong": {
        "b": "On détruirait les preuves.",
        "d": "L’attente aggrave les dégâts.",
        "a": "Cela n’a aucun sens."
      }
    },
    "opr-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Sans journaux, on ne peut pas savoir depuis quand le compte était utilisé ni ce qui a été consulté. Leur durée de conservation doit couvrir le délai de détection."
    },
    "opr-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "L’attaquant installe souvent des moyens de persistance : règles, applications autorisées, méthodes MFA. Le thème de l’interface n’a aucun rapport.",
      "whyWrong": {
        "c": "La couleur du thème n’a aucun intérêt dans cette vérification."
      }
    },
    "opr-q40": {
      "type": "short",
      "accepted": [
        "password spraying",
        "spraying",
        "pulvérisation de mots de passe",
        "pulverisation de mots de passe"
      ],
      "explanation": "Le password spraying répartit les essais sur de nombreux comptes. On le détecte en regardant les échecs par source plutôt que par compte."
    },
    "opr-q41": {
      "type": "single",
      "correct": "a",
      "explanation": "On désactive tout de suite pour couper l’accès, et on supprime plus tard après avoir transféré les données utiles. Une suppression brutale peut détruire des éléments nécessaires.",
      "whyWrong": {
        "b": "Une suppression immédiate peut détruire des données dont l’entreprise a besoin.",
        "c": "Un compte actif laisse un accès exploitable pendant un mois.",
        "d": "Renommer n’empêche pas de se connecter."
      }
    },
    "opr-q42": {
      "type": "single",
      "correct": "c",
      "explanation": "Le type 10 correspond à une session interactive à distance (RDP). Une ouverture à une heure et pour un compte inhabituels est un signal à qualifier, par exemple avec la source et les échecs précédents.",
      "whyWrong": {
        "a": "Une ouverture locale correspond au type 2.",
        "d": "Un service correspond au type 5.",
        "b": "Un accès à un partage correspond au type 3."
      }
    },
    "opr-q43": {
      "type": "short",
      "accepted": [
        "4625"
      ],
      "explanation": "L’événement 4625 enregistre un échec d’ouverture de session ; une série de 4625 suivie d’un 4624 évoque une force brute réussie."
    }
  },
};
