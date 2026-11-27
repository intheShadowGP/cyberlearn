// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "f-web-fondamentaux",
  questions: {
    "fwf-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "Après le `?` viennent les paramètres de la requête, transmis au serveur sous la forme `nom=valeur`. Ils sont contrôlés par l’utilisateur et ne doivent jamais être crus sur parole.",
      "whyWrong": {
        "d": "Le nom de domaine est `boutique.exemple`.",
        "c": "Le protocole est `https`.",
        "a": "Le fragment commence par `#` et reste dans le navigateur."
      }
    },
    "fwf-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "`GET` demande une ressource sans la modifier. `POST` envoie des données (formulaire), `PUT` remplace une ressource et `DELETE` la supprime.",
      "whyWrong": {
        "a": "`POST` sert à envoyer des données au serveur.",
        "b": "`DELETE` supprime une ressource.",
        "d": "`PUT` remplace ou crée une ressource."
      }
    },
    "fwf-q3": {
      "type": "short",
      "accepted": [
        "404"
      ],
      "explanation": "Le code `404` (Not Found) indique que la ressource n’existe pas, ou que le serveur choisit de ne pas révéler son existence. Les codes 4xx signalent une erreur côté client."
    },
    "fwf-q4": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Avec les outils de développement, un proxy ou `curl`, tout ce qui est envoyé (URL, paramètres, en-têtes, cookies) peut être modifié. Le serveur ne peut donc rien supposer de ce qui lui parvient."
    },
    "fwf-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "`403 Forbidden` signifie que le serveur refuse l’accès à la ressource : l’utilisateur est identifié (ou non) mais n’a pas le droit. `401` signale qu’une authentification est requise.",
      "whyWrong": {
        "d": "Une redirection est un code 3xx (`301`, `302`).",
        "b": "Une erreur interne est un code 5xx, par exemple `500`.",
        "c": "Un délai dépassé correspond à un code `408` ou `504`."
      }
    },
    "fwf-q6": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "L’onglet Réseau, `curl -v` et un proxy d’interception montrent le détail des requêtes et des réponses. Le correcteur orthographique ne concerne pas le trafic réseau.",
      "whyWrong": {
        "b": "Le correcteur orthographique ne regarde pas les échanges HTTP."
      }
    },
    "fwf-q7": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Chaque requête est indépendante. Pour reconnaître un utilisateur, le site utilise un mécanisme supplémentaire, le plus souvent un cookie contenant un identifiant de session."
    },
    "fwf-q8": {
      "type": "single",
      "correct": "d",
      "explanation": "L’origine est définie par le triplet protocole, hôte et port : `http://exemple.fr` et `https://exemple.fr` sont deux origines différentes. C’est la base de la politique de même origine.",
      "whyWrong": {
        "a": "La localisation du serveur n’intervient pas.",
        "b": "La page précédente est l’en-tête Referer, autre notion.",
        "c": "L’éditeur du site n’a aucun rapport avec l’origine."
      }
    },
    "fwf-q9": {
      "type": "single",
      "correct": "d",
      "explanation": "Un script ne peut pas lire les réponses ni le contenu d’une page d’une autre origine : un site malveillant ouvert dans un autre onglet ne peut pas lire votre messagerie.",
      "whyWrong": {
        "c": "Le chiffrement est assuré par HTTPS, pas par cette politique.",
        "a": "On peut visiter plusieurs sites en parallèle.",
        "b": "Le nombre de cookies n’est pas son objet."
      }
    },
    "fwf-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "Le cadenas indique une connexion HTTPS avec un certificat valide pour le nom affiché. Il protège les échanges en transit, mais ne dit rien de l’honnêteté du site ni de la façon dont il conserve les données.",
      "whyWrong": {
        "c": "Un site d’hameçonnage peut avoir un cadenas.",
        "a": "Le cadenas ne garantit pas l’absence de logiciel malveillant.",
        "d": "Le chiffrement au repos est une autre protection."
      }
    },
    "fwf-q11": {
      "type": "short",
      "accepted": [
        "HTTPS",
        "https"
      ],
      "explanation": "HTTPS est HTTP au-dessus de TLS : les échanges sont chiffrés et le serveur est authentifié par un certificat."
    },
    "fwf-q12": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un cookie est un petit fragment de données (texte) que le navigateur conserve et renvoie au site. Il ne s’exécute pas, mais il peut contenir un identifiant de session dont le vol équivaut à celui de la session."
    },
    "fwf-q13": {
      "type": "multi",
      "correct": [
        "c",
        "d"
      ],
      "explanation": "`HttpOnly` limite le vol par un script injecté et `Secure` évite l’envoi en clair. Un domaine large augmente l’exposition, et une durée de vie très longue prolonge la validité d’une session volée.",
      "whyWrong": {
        "a": "Un cookie accessible à tous les sous-domaines augmente la surface d’attaque.",
        "b": "Une session de dix ans reste exploitable très longtemps après un vol."
      }
    },
    "fwf-q14": {
      "type": "single",
      "correct": "a",
      "explanation": "Comme HTTP n’a pas de mémoire, le serveur associe un identifiant (envoyé dans un cookie) à l’état de l’utilisateur : compte connecté, panier. Voler l’identifiant revient à voler la session.",
      "whyWrong": {
        "b": "HTTP fonctionne par requêtes distinctes, sans connexion permanente.",
        "d": "Une session n’est pas un fichier de configuration.",
        "c": "Le cache du navigateur est une autre notion."
      }
    },
    "fwf-q15": {
      "type": "single",
      "correct": "c",
      "explanation": "Tout ce que le client envoie est sous son contrôle : un attaquant peut envoyer des valeurs inattendues, directement et sans passer par le formulaire. Le serveur doit tout valider.",
      "whyWrong": {
        "b": "Le contenu d’un formulaire est lisible par le serveur.",
        "d": "Un formulaire peut très bien transporter des nombres.",
        "a": "Le navigateur ne supprime rien : le serveur reçoit les données."
      }
    },
    "fwf-q16": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le contrôle côté navigateur améliore le confort de l’utilisateur mais se contourne trivialement avec un outil comme `curl`. La validation de sécurité doit être faite côté serveur."
    },
    "fwf-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "L’application colle la saisie dans le texte de la requête : l’attaquant y glisse du SQL qui change la structure de la requête (contourner une connexion, lire d’autres tables).",
      "whyWrong": {
        "b": "Ce n’est pas une réplication de données.",
        "d": "Une injection SQL ne chiffre pas les données : elle altère la requête.",
        "c": "Une sauvegarde automatique n’est pas une injection SQL."
      }
    },
    "fwf-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "Avec une requête paramétrée, le texte SQL et les valeurs sont envoyés séparément : une valeur ne peut jamais modifier la structure de la requête. Les filtres de caractères se contournent.",
      "whyWrong": {
        "a": "Interdire l’apostrophe est contournable et gêne des noms légitimes.",
        "c": "Une injection tient en peu de caractères.",
        "d": "Masquer l’erreur ne corrige pas la faille."
      }
    },
    "fwf-q19": {
      "type": "short",
      "accepted": [
        "XSS",
        "xss",
        "cross-site scripting"
      ],
      "explanation": "La XSS (Cross-Site Scripting) insère du script dans une page du site vulnérable. Il s’exécute dans le navigateur de la victime avec les droits du site."
    },
    "fwf-q20": {
      "type": "single",
      "correct": "d",
      "explanation": "L’encodage de sortie transforme `<` en `&lt;` et empêche le navigateur d’interpréter le contenu comme du code. Les moteurs de gabarits modernes le font par défaut ; il faut éviter d’insérer du HTML brut.",
      "whyWrong": {
        "c": "Du HTML brut laisse passer les balises de script.",
        "a": "La casse ne change pas l’interprétation.",
        "b": "Chiffrer le commentaire ne le rend pas lisible pour le navigateur."
      }
    },
    "fwf-q21": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Paramètres, champs de formulaire, en-têtes et cookies viennent du client et peuvent être modifiés. Le code source du serveur n’est pas dans la requête.",
      "whyWrong": {
        "b": "Le code du serveur n’est pas envoyé avec la requête."
      }
    },
    "fwf-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "L’authentification établit l’identité (mot de passe, MFA). L’autorisation décide, pour chaque action, si cette identité a le droit de l’effectuer. Réussir la première ne dispense jamais de la seconde.",
      "whyWrong": {
        "a": "Chiffrer et sauvegarder sont d’autres fonctions.",
        "b": "Ce sont deux contrôles distincts.",
        "d": "Les deux sont vérifiés côté serveur."
      }
    },
    "fwf-q23": {
      "type": "single",
      "correct": "c",
      "explanation": "On stocke l’empreinte d’un mot de passe calculée avec Argon2 ou bcrypt (lente et salée), de sorte qu’une fuite de la base ne donne pas les mots de passe. On ne renvoie jamais un mot de passe : on le réinitialise.",
      "whyWrong": {
        "d": "Un mot de passe en clair est exposé en cas de fuite.",
        "a": "Une clé placée à côté des données ne protège rien.",
        "b": "Base64 est un encodage réversible, pas une protection."
      }
    },
    "fwf-q24": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un bouton masqué n’empêche pas d’appeler directement l’adresse de la page. Le droit d’accès doit être vérifié par le serveur à chaque requête."
    },
    "fwf-q25": {
      "type": "single",
      "correct": "b",
      "explanation": "IDOR (référence directe non sécurisée à un objet) : l’application utilise l’identifiant fourni sans vérifier que l’utilisateur y a droit. Changer 1043 en 1044 dans l’URL suffit à lire la facture d’un autre.",
      "whyWrong": {
        "c": "C’est de la force brute.",
        "d": "C’est une XSS stockée.",
        "a": "C’est de l’écoute réseau."
      }
    },
    "fwf-q26": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "MFA, limitation des tentatives et messages identiques rendent la force brute et l’énumération de comptes plus difficiles. Préciser si un compte existe aide l’attaquant à cibler.",
      "whyWrong": {
        "a": "Révéler l’existence d’un compte facilite l’énumération."
      }
    },
    "fwf-q27": {
      "type": "short",
      "accepted": [
        "moindre privilège",
        "principe du moindre privilège",
        "least privilege",
        "le moindre privilège"
      ],
      "explanation": "Le moindre privilège limite l’impact d’une erreur ou d’une compromission : un compte qui ne peut presque rien faire est peu utile à un attaquant."
    },
    "fwf-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "Le navigateur est sous le contrôle de l’utilisateur. Seul le serveur peut faire respecter les droits, sur chaque requête et pour chaque objet.",
      "whyWrong": {
        "c": "Le contrôle dans le navigateur se contourne.",
        "b": "Les droits peuvent varier d’une requête à l’autre.",
        "d": "Un menu masqué n’empêche pas l’accès direct."
      }
    },
    "fwf-q29": {
      "type": "single",
      "correct": "d",
      "explanation": "L’OWASP est une fondation qui publie des ressources libres. Son Top 10 est un document de sensibilisation : il classe les grandes familles de risques, sans prétendre être exhaustif.",
      "whyWrong": {
        "c": "Le Top 10 n’est pas un logiciel : c’est une liste de catégories de risques.",
        "a": "Il ne classe pas des sites.",
        "b": "Le Top 10 n’est pas une norme imposant dix mesures."
      }
    },
    "fwf-q30": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Il synthétise les risques les plus fréquents ou les plus graves. Une application peut être vulnérable à autre chose : il se complète par des exigences (ASVS) et des méthodes de test (WSTG)."
    },
    "fwf-q31": {
      "type": "single",
      "correct": "a",
      "explanation": "`Strict-Transport-Security` (HSTS) indique au navigateur de n’accéder au site qu’en HTTPS pendant la durée indiquée, ce qui évite les retours vers HTTP.",
      "whyWrong": {
        "c": "`X-Content-Type-Options` empêche le navigateur de deviner le type d’un contenu.",
        "b": "`Access-Control-Allow-Origin` autorise d’autres origines à lire les réponses (CORS).",
        "d": "`Referrer-Policy` règle les informations d’origine transmises dans l’en-tête Referer."
      }
    },
    "fwf-q32": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Savoir ce que l’on utilise, appliquer les correctifs et suivre les alertes réduisent l’exposition. Ne jamais mettre à jour laisse des failles connues ouvertes.",
      "whyWrong": {
        "d": "Les failles connues restent exploitables sur une version obsolète."
      }
    },
    "fwf-q33": {
      "type": "single",
      "correct": "b",
      "explanation": "Une trace montre des chemins, des versions, des requêtes SQL : autant d’indices pour préparer une attaque. On affiche un message générique et l’on garde le détail dans les journaux.",
      "whyWrong": {
        "d": "Le ralentissement n’est pas le problème.",
        "c": "HTTP n’interdit rien de tel.",
        "a": "La trace n’a pas d’effet sur les cookies."
      }
    },
    "fwf-q34": {
      "type": "short",
      "accepted": [
        "CSP",
        "csp",
        "Content-Security-Policy"
      ],
      "explanation": "La Content Security Policy (CSP) liste les origines autorisées pour les scripts, styles, images et connexions. Elle limite l’impact d’une XSS."
    },
    "fwf-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "Les applications comme Juice Shop ou DVWA sont faites pour être attaquées. Tester un système dont on n’est pas autorisé est illégal, même sans intention de nuire.",
      "whyWrong": {
        "b": "Un site réel n’est pas une cible d’entraînement.",
        "c": "Sans autorisation, l’accès est illégal.",
        "a": "Ne pas copier de données n’annule pas l’infraction."
      }
    },
    "fwf-q36": {
      "type": "truefalse",
      "correct": false,
      "explanation": "L’accès à un système sans autorisation est une infraction, quel que soit l’objectif. L’autorisation doit être préalable et, pour une organisation, écrite."
    },
    "fwf-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "Il faut limiter l’accès au strict nécessaire, ne rien copier ni partager et signaler la faille au responsable (adresse de sécurité, page de signalement, CERT). La divulgation publique immédiate expose les utilisateurs.",
      "whyWrong": {
        "b": "Copier les données aggrave l’infraction et la fuite.",
        "a": "La publication immédiate expose les données avant correction.",
        "d": "Continuer à explorer dépasse ce qui est justifiable."
      }
    },
    "fwf-q38": {
      "type": "multi",
      "correct": [
        "a",
        "c"
      ],
      "explanation": "Un bon signalement permet de comprendre, reproduire et corriger. Joindre des données personnelles est inutile et dangereux, et exiger une contrepartie transforme le signalement en chantage.",
      "whyWrong": {
        "d": "Des captures masquées suffisent : conserver des données personnelles est inutile et risqué.",
        "b": "Exiger un paiement avant d’expliquer s’apparente à du chantage."
      }
    },
    "fwf-q39": {
      "type": "open",
      "model": "Je lui recommande cinq vérifications. 1) Valider les données côté serveur, car le contrôle dans le navigateur se contourne. 2) Utiliser des requêtes paramétrées pour éviter l’injection SQL. 3) Encoder les commentaires à l’affichage pour éviter la XSS. 4) Stocker les mots de passe sous forme d’empreintes lentes et salées, et activer HTTPS avec des cookies de session Secure et HttpOnly. 5) Vérifier côté serveur le droit d’accès à chaque ressource, afficher des erreurs génériques et garder un journal. Je lui conseille enfin de tester son site en local ou sur une copie qui lui appartient.",
      "criteria": [
        "Au moins quatre vérifications pertinentes sont citées.",
        "Les mesures sont reliées au risque qu’elles évitent.",
        "Le test sur un site que l’on possède est recommandé."
      ],
      "explanation": "Les vérifications de base couvrent la validation, les injections, l’affichage, l’authentification, le transport et les droits : ce sont les erreurs les plus fréquentes."
    },
    "fwf-q40": {
      "type": "open",
      "model": "Le cadenas indique que la connexion entre mon navigateur et le site est chiffrée, et que le certificat correspond au nom de domaine affiché. Cela me protège contre l’écoute et la modification en chemin. Mais n’importe qui peut obtenir un certificat pour son propre nom de domaine, y compris un faux site qui imite une banque. Le cadenas ne dit rien sur l’honnêteté du site, sur le fait qu’il protège bien mes données une fois reçues, ni sur l’absence de vulnérabilité. Il faut donc aussi vérifier l’adresse exacte, ne pas cliquer sur des liens douteux et utiliser un gestionnaire de mots de passe qui ne remplit que le vrai site.",
      "criteria": [
        "Ce que garantit le cadenas (chiffrement vers le nom affiché) est correctement décrit.",
        "La limite est expliquée : un site malveillant peut aussi avoir un certificat.",
        "Un réflexe de vigilance (vérifier l’adresse, éviter les liens douteux) est donné."
      ],
      "explanation": "Le cadenas protège le transport et l’identité du nom de domaine ; la confiance dans le site, elle, relève d’autres vérifications."
    }
  },
};
