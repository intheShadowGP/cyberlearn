// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "o-identite-mfa-oauth",
  questions: {
    "id-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "Une clé de sécurité est un objet physique détenu par l’utilisateur : facteur de possession. Le code PIN qui la déverrouille ajoute un facteur de connaissance.",
      "whyWrong": {
        "d": "C’est un mot de passe ou un code.",
        "c": "C’est la biométrie.",
        "b": "Ce n’est pas une catégorie de facteur."
      }
    },
    "id-q2": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Mot de passe, code SMS et code TOTP sont des valeurs que l’utilisateur saisit sur le faux site ; le proxy les rejoue immédiatement sur le vrai site.",
      "whyWrong": {
        "a": "La passkey est liée à l’origine : le navigateur ne la présente pas au faux domaine, et une signature obtenue pour un autre domaine est refusée."
      }
    },
    "id-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le navigateur inclut l’origine dans les données signées et l’identifiant n’est associé qu’au domaine légitime. C’est ce qui rend FIDO2 résistant à l’hameçonnage par construction."
    },
    "id-q4": {
      "type": "short",
      "accepted": [
        "fatigue mfa",
        "mfa fatigue",
        "bombardement mfa",
        "fatigue de la mfa",
        "push bombing"
      ],
      "explanation": "La fatigue MFA (ou bombardement de notifications) exploite la lassitude ou la confusion. Contre-mesures : saisie d’un nombre affiché à l’écran, contexte géographique dans la notification, limitation du nombre de demandes, et surtout FIDO2."
    },
    "id-q15": {
      "type": "open",
      "model": "1) Inventaire des comptes, applications et méthodes MFA actuelles ; activer le SSO pour un maximum d’applications. 2) Priorité aux comptes à privilèges : clés FIDO2 matérielles (deux par administrateur), accès conditionnel les imposant. 3) Pilote de passkeys auprès d’une population volontaire, documentation et support. 4) Généralisation par vagues, désactivation progressive du SMS et des notifications simples, conservation d’un TOTP ou d’une notification avec saisie de nombre en secours temporaire. 5) Récupération de compte : vérification d’identité en personne ou par le manager avec le support, code d’accès temporaire à usage unique (Temporary Access Pass), jamais une simple question secrète ou un appel non vérifié. 6) Mesurer : part des connexions résistantes à l’hameçonnage, puis bloquer les méthodes faibles.",
      "criteria": [
        "Les comptes à privilèges sont traités en premier avec FIDO2.",
        "Le déploiement est progressif avec pilote et accompagnement.",
        "La récupération de compte est sécurisée (vérification d’identité, accès temporaire).",
        "Les méthodes faibles sont progressivement désactivées."
      ],
      "explanation": "Le maillon faible d’une MFA forte est souvent la procédure de réinitialisation : les attaquants appellent le support en se faisant passer pour l’utilisateur."
    },
    "id-q31": {
      "type": "single",
      "correct": "c",
      "explanation": "La biométrie (empreinte, visage) est un facteur d’inhérence : elle dépend de l’utilisateur lui-même. Elle sert souvent à déverrouiller un authentificateur local.",
      "whyWrong": {
        "a": "C’est un mot de passe.",
        "d": "C’est un objet.",
        "b": "Ce n’est pas une catégorie de facteur."
      }
    },
    "id-q32": {
      "type": "single",
      "correct": "d",
      "explanation": "Si le support peut réinitialiser un facteur sur un simple appel, un attaquant s’en sert pour prendre le compte. La procédure doit vérifier l’identité et utiliser un accès temporaire.",
      "whyWrong": {
        "a": "Ce n’est pas le problème.",
        "c": "Ce n’est pas son effet.",
        "b": "Ce n’est pas son effet."
      }
    },
    "id-q33": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Une passkey authentifie l’utilisateur par une paire de clés propre au site : plus de mot de passe à voler, à deviner ou à saisir sur un faux site."
    },
    "id-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "OpenID Connect ajoute l’id_token (JWT signé) et le point de terminaison userinfo à OAuth 2.0 pour authentifier l’utilisateur.",
      "whyWrong": {
        "a": "SAML est un autre protocole de fédération.",
        "d": "Kerberos est un protocole d’authentification interne.",
        "c": "LDAP est un annuaire."
      }
    },
    "id-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le jeton d’accès est destiné à l’API (serveur de ressources) et peut être opaque pour le client. Utiliser un jeton d’accès comme preuve d’identité expose à des attaques de substitution (un jeton obtenu pour une autre application). Le client authentifie l’utilisateur avec l’id_token d’OIDC."
    },
    "id-q7": {
      "type": "single",
      "correct": "b",
      "explanation": "Avec PKCE, l’échange du code exige le code_verifier secret dont seul le client légitime dispose. Un code intercepté devient inutilisable. PKCE est recommandé pour tous les clients, y compris confidentiels.",
      "whyWrong": {
        "d": "CORS gère les accès entre origines.",
        "a": "HSTS impose HTTPS.",
        "c": "SameSite limite les cookies."
      }
    },
    "id-q8": {
      "type": "short",
      "accepted": [
        "state",
        "le state",
        "le parametre state",
        "le paramètre state"
      ],
      "explanation": "Le client génère un state imprévisible lié à la session de l’utilisateur et vérifie qu’il est identique au retour. Sinon, un attaquant peut faire aboutir sa propre autorisation dans la session de la victime."
    },
    "id-q9": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c",
        "d"
      ],
      "explanation": "Signature (avec les clés publiées par l’IdP), émetteur, audience, expiration, et le nonce lorsqu’il a été envoyé : chaque contrôle omis ouvre une possibilité d’usurpation.",
      "whyWrong": {
        "e": "L’apparence de l’interface n’a aucune valeur de sécurité."
      }
    },
    "id-q10": {
      "type": "single",
      "correct": "a",
      "explanation": "L’application détient un jeton de rafraîchissement lié au consentement, indépendant du mot de passe. Il faut révoquer le consentement (supprimer l’application de l’annuaire), invalider ses jetons et restreindre le consentement des utilisateurs.",
      "whyWrong": {
        "d": "Le jeton reste valide.",
        "b": "La MFA n’intervient plus.",
        "c": "Sans rapport."
      }
    },
    "id-q14": {
      "type": "open",
      "model": "Problèmes : 1) flux implicite (`response_type=token`) : jeton exposé dans l’URL, l’historique et les en-têtes Referer, déconseillé par la RFC 9700 ; 2) pas de PKCE ni de state ; 3) scopes excessifs : une application de notes n’a pas besoin de lire et écrire la messagerie ni tous les fichiers ; 4) redirect_uri acceptée par préfixe : `https://notes.exemple.fr.attaquant.example` ou un chemin vulnérable pourrait recevoir le jeton. Correction : `response_type=code` avec `code_challenge` (S256) et `state`, `scope=openid profile Notes.ReadWrite` (ou le scope minimal), échange du code côté client avec le verifier ; côté serveur d’autorisation, liste exacte des redirect_uri enregistrées, PKCE obligatoire, flux implicite désactivé pour ce client, jetons d’accès de courte durée.",
      "criteria": [
        "Le flux implicite est identifié et remplacé par authorization code + PKCE.",
        "L’excès de scopes est relevé et un scope minimal proposé.",
        "La comparaison par préfixe de redirect_uri est identifiée comme dangereuse.",
        "L’ajout de state est proposé."
      ],
      "explanation": "Ces quatre défauts sont parmi les plus fréquents dans les intégrations OAuth relevées en audit."
    },
    "id-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "Le serveur d’autorisation renvoie le code à cette adresse. Elle doit être enregistrée à l’avance et comparée exactement, sinon le code peut être détourné.",
      "whyWrong": {
        "b": "Ce n’est pas son rôle.",
        "a": "Ce n’est pas son rôle.",
        "d": "Ce n’est pas son rôle."
      }
    },
    "id-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "Dans le flux implicite, le jeton d’accès est renvoyé dans le fragment de l’URL : il fuit par l’historique, les journaux et les extensions. L’authorization code avec PKCE le remplace.",
      "whyWrong": {
        "b": "C’est l’inverse.",
        "a": "Il ne l’impose pas.",
        "c": "Sans rapport."
      }
    },
    "id-q36": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Consentement encadré, revue des applications et scopes minimaux réduisent le risque d’une application malveillante autorisée par une victime.",
      "whyWrong": {
        "a": "C’est la porte ouverte à l’abus."
      }
    },
    "id-q11": {
      "type": "single",
      "correct": "c",
      "explanation": "La décision dépend d’attributs du sujet (service), de la ressource (service du patient) et du contexte (poste géré) : c’est de l’ABAC. RBAC seul ne sait pas exprimer la relation patient–service.",
      "whyWrong": {
        "d": "Il ne gère pas le contexte.",
        "b": "Il laisse le propriétaire décider.",
        "a": "C’est un modèle courant."
      }
    },
    "id-q12": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le Zero Trust supprime précisément la confiance accordée à la position réseau. Chaque accès est évalué selon l’identité, l’appareil et le contexte."
    },
    "id-q13": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Risque de la connexion, état de l’appareil (géré, à jour, chiffré) et force de l’authentification sont des signaux clés de l’accès conditionnel.",
      "whyWrong": {
        "c": "Le fond d’écran n’est pas un signal de sécurité."
      }
    },
    "id-q16": {
      "type": "short",
      "accepted": [
        "800-207",
        "sp 800-207",
        "nist sp 800-207",
        "207"
      ],
      "explanation": "Le NIST SP 800-207 (2020) définit les principes et composants d’une architecture Zero Trust : point de décision, point d’application des politiques, sources de signaux."
    },
    "id-q37": {
      "type": "single",
      "correct": "b",
      "explanation": "Le moindre privilège limite le droit au strict nécessaire, en niveau (lecture) comme en périmètre (ce tableau).",
      "whyWrong": {
        "a": "Bien trop large.",
        "c": "Bien trop large.",
        "d": "Bien trop large."
      }
    },
    "id-q38": {
      "type": "single",
      "correct": "a",
      "explanation": "Avec le temps, on crée un rôle par cas particulier. Les rôles deviennent nombreux et se recoupent : l’audit des droits devient difficile.",
      "whyWrong": {
        "d": "Ce n’est pas la limite.",
        "c": "Sans rapport.",
        "b": "Sans rapport."
      }
    },
    "id-q39": {
      "type": "single",
      "correct": "d",
      "explanation": "Le point de décision évalue l’identité, l’appareil et le contexte puis ordonne au point d’application d’autoriser ou de refuser la session.",
      "whyWrong": {
        "b": "Sans rapport.",
        "a": "Sans rapport.",
        "c": "Sans rapport."
      }
    },
    "id-q40": {
      "type": "truefalse",
      "correct": true,
      "explanation": "L’accès conditionnel peut exiger un appareil conforme, bloquer le téléchargement de données ou demander un facteur plus fort selon l’état de l’appareil."
    },
    "id-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "L’arrivée (joiner), la mobilité (mover) et le départ (leaver) déclenchent la création, l’ajustement et le retrait des droits.",
      "whyWrong": {
        "a": "Sans rapport.",
        "d": "Sans rapport.",
        "b": "Ce sont des applications."
      }
    },
    "id-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "SCIM décrit un format et une API pour créer, modifier et supprimer automatiquement des comptes dans les applications à partir de l’annuaire.",
      "whyWrong": {
        "a": "C’est un protocole web.",
        "d": "C’est un protocole de noms.",
        "c": "C’est un protocole de courrier."
      }
    },
    "id-q19": {
      "type": "single",
      "correct": "a",
      "explanation": "Un compte inutilisé n’est surveillé par personne : un attaquant qui le prend n’est pas remarqué. La désactivation automatique après inactivité réduit ce risque.",
      "whyWrong": {
        "b": "Ce n’est pas la raison.",
        "d": "Ce n’est pas la raison.",
        "c": "Ce n’est pas la raison."
      }
    },
    "id-q20": {
      "type": "single",
      "correct": "d",
      "explanation": "Le système RH est la source de vérité sur les arrivées, mobilités et départs. L’automatiser évite les oublis.",
      "whyWrong": {
        "c": "Peu fiable.",
        "b": "Peu fiable.",
        "a": "Peu fiable."
      }
    },
    "id-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Chaque responsable passe en revue les droits de son périmètre et confirme ou retire. Les décisions sont tracées et servent de preuve d’audit."
    },
    "id-q22": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Automatiser les arrivées et départs, et vérifier régulièrement les droits, limite les comptes orphelins et la dérive. Une demande orale ne laisse aucune trace.",
      "whyWrong": {
        "b": "Aucune traçabilité ni validation."
      }
    },
    "id-q23": {
      "type": "short",
      "accepted": [
        "iga",
        "l’iga",
        "l'iga"
      ],
      "explanation": "L’IGA (Identity Governance and Administration) couvre le cycle de vie des identités, le provisionnement, les revues d’accès et la conformité."
    },
    "id-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "Le cookie ou le jeton prouve que l’utilisateur est authentifié. En le volant, l’attaquant agit sans connaître le mot de passe ni subir la MFA.",
      "whyWrong": {
        "d": "Sans intérêt.",
        "a": "Sans intérêt.",
        "c": "Sans intérêt."
      }
    },
    "id-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "Un jeton court expire vite : s’il est volé, la fenêtre d’exploitation est brève. Un jeton de rafraîchissement permet de le renouveler sous contrôle.",
      "whyWrong": {
        "b": "Ce n’est pas le but.",
        "d": "Il ne supprime pas la MFA.",
        "c": "Ce n’est pas le but."
      }
    },
    "id-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "L’accès n’est pas jugé une seule fois à la connexion : un changement de contexte (appareil à risque, compte compromis) peut révoquer la session en cours.",
      "whyWrong": {
        "c": "Ce n’est pas son but.",
        "b": "Ce n’est pas son but.",
        "a": "Ce n’est pas son but."
      }
    },
    "id-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "Un jeton lié à la clé de l’appareil (preuve de possession) est inutilisable ailleurs : le voleur n’a pas la clé. C’est le principe des jetons liés à l’appareil.",
      "whyWrong": {
        "d": "Cela l’exposerait.",
        "b": "Cela l’exposerait.",
        "a": "Cela l’exposerait."
      }
    },
    "id-q28": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les sessions et jetons déjà émis peuvent rester valides. Après un incident, il faut aussi révoquer les sessions, les jetons de rafraîchissement et les consentements."
    },
    "id-q29": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Voyage impossible, nouvelle règle de transfert et changement brutal de contexte sont des signaux classiques. Une connexion habituelle n’en est pas un.",
      "whyWrong": {
        "d": "C’est un usage normal."
      }
    },
    "id-q30": {
      "type": "short",
      "accepted": [
        "révocation",
        "revocation",
        "la révocation"
      ],
      "explanation": "La révocation retire immédiatement la validité d’un jeton, d’une session ou d’un consentement. Elle fait partie de la réponse à un vol de session."
    },
    "id-q41": {
      "type": "single",
      "correct": "b",
      "explanation": "Seule l’empreinte (`code_challenge`) transite dans la demande. Le `code_verifier` n’est présenté qu’à l’échange du code : un code intercepté est donc inutilisable sans lui.",
      "whyWrong": {
        "a": "Le verifier ne doit jamais voyager dans la première requête.",
        "d": "Le mot de passe n’est jamais transmis au client.",
        "c": "Le jeton est émis après l’échange du code, pas avant."
      }
    },
    "id-q42": {
      "type": "single",
      "correct": "d",
      "explanation": "Une comparaison partielle (préfixe, joker) peut laisser passer une adresse contrôlée par un attaquant, qui recevrait alors le code ou le jeton.",
      "whyWrong": {
        "c": "La vitesse n’est pas l’enjeu.",
        "b": "Le navigateur n’impose rien de tel.",
        "a": "La comparaison ne chiffre rien."
      }
    },
    "id-q43": {
      "type": "short",
      "accepted": [
        "state"
      ],
      "explanation": "Le paramètre `state` est généré par le client, renvoyé inchangé par le serveur d’autorisation et vérifié au retour."
    }
  },
};
