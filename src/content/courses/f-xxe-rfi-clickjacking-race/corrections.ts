// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "f-xxe-rfi-clickjacking-race",
  questions: {
    "xrc-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "La XXE vient d’un analyseur XML qui résout les entités externes sur un document fourni par l’utilisateur : l’attaquant définit une entité pointant vers un fichier ou une URL que l’analyseur va charger.",
      "whyWrong": {
        "b": "La longueur d’un mot de passe n’intervient pas dans l’analyse du XML.",
        "a": "Le HTTPS protège le transport, pas l’interprétation du document.",
        "d": "Le cookie n’a aucun lien avec la résolution des entités."
      }
    },
    "xrc-q2": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Selon la configuration, une XXE permet de lire des fichiers, d’atteindre des services internes (comme une SSRF) ou de provoquer un déni de service par expansion d’entités.",
      "whyWrong": {
        "a": "Une attaque ne « rend pas le serveur plus rapide » : c’est un distracteur."
      }
    },
    "xrc-q3": {
      "type": "single",
      "correct": "b",
      "explanation": "La correction de référence est de désactiver la résolution des entités externes et le traitement des DTD dans l’analyseur. Le reste (mots de passe, port, HTTP) n’a aucun effet sur XXE.",
      "whyWrong": {
        "a": "Les mots de passe ne changent rien à l’analyse du XML.",
        "c": "Changer de port ne modifie pas le comportement de l’analyseur.",
        "d": "Passer en HTTP dégrade la sécurité sans effet sur la XXE."
      }
    },
    "xrc-q4": {
      "type": "single",
      "correct": "d",
      "explanation": "La LFI inclut un fichier présent sur le serveur (lecture de fichiers sensibles, parfois exécution) ; la RFI inclut un fichier depuis une URL externe, donc du code fourni par l’attaquant, ce qui est très grave.",
      "whyWrong": {
        "c": "Le protocole IP n’a aucun rapport avec ces inclusions.",
        "b": "Aucune des deux ne chiffre ou ne signe quoi que ce soit.",
        "a": "La source du fichier inclus distingue les deux."
      }
    },
    "xrc-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Dès que le chemin inclut une valeur de l’utilisateur sans contrôle, celui-ci peut la détourner (`../`, URL) pour faire inclure un autre fichier : c’est la cause des inclusions LFI/RFI."
    },
    "xrc-q6": {
      "type": "short",
      "accepted": [
        "table de correspondance",
        "correspondance",
        "table de correspondances",
        "liste d'autorisation",
        "liste d’autorisation",
        "allowlist"
      ],
      "explanation": "Associer chaque valeur attendue (par exemple `sujet=installation`) à un fichier connu via une table de correspondance supprime tout chemin piloté par l’utilisateur : la valeur ne sert que de clé."
    },
    "xrc-q7": {
      "type": "single",
      "correct": "a",
      "explanation": "Le clickjacking superpose l’application réelle, dans un cadre invisible, à une page leurre : la victime croit cliquer sur le leurre mais agit sur l’application où elle est authentifiée.",
      "whyWrong": {
        "d": "C’est la force brute, une attaque différente.",
        "c": "C’est une injection SQL.",
        "b": "C’est un rançongiciel."
      }
    },
    "xrc-q8": {
      "type": "short",
      "accepted": [
        "frame-ancestors",
        "frame ancestors"
      ],
      "explanation": "`frame-ancestors` (directive CSP) indique quels sites peuvent encadrer la page. `'none'` interdit tout encadrement ; elle remplace l’ancien `X-Frame-Options`."
    },
    "xrc-q9": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "`frame-ancestors`, `X-Frame-Options` (pour les vieux navigateurs) et la confirmation explicite des actions sensibles protègent du détournement de clic.",
      "whyWrong": {
        "b": "Désactiver HTTPS n’a aucun rapport et dégrade la sécurité."
      }
    },
    "xrc-q10": {
      "type": "open",
      "model": "TOCTOU (Time-Of-Check to Time-Of-Use) désigne une condition de course où la vérification d’un état et l’action qui en dépend ne sont pas atomiques : entre les deux, une requête concurrente modifie l’état, si bien que la vérification ne correspond plus à la réalité au moment de l’action. Exemple : un code de réduction « à usage unique ». L’application vérifie qu’il n’a pas servi, puis l’applique. En envoyant plusieurs requêtes exactement en même temps, plusieurs passent la vérification avant que la première n’ait marqué le code comme utilisé, et la réduction est appliquée plusieurs fois. Autres exemples : retirer plus que son solde, dépasser un quota, utiliser un jeton à usage unique deux fois.",
      "criteria": [
        "TOCTOU est défini comme un écart non atomique entre vérification et action.",
        "Le rôle des requêtes concurrentes est expliqué.",
        "Un exemple concret de contournement de limite est donné."
      ],
      "explanation": "La correction consiste toujours à rendre l’ensemble vérification + action atomique (contrainte d’unicité, mise à jour conditionnelle, verrou, idempotence)."
    },
    "xrc-q11": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Si la vérification et l’action ne sont pas atomiques, plusieurs requêtes envoyées exactement en même temps peuvent toutes passer la vérification avant que la première n’ait mis l’état à jour."
    },
    "xrc-q12": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Contrainte d’unicité, mise à jour conditionnelle atomique et verrou/transaction garantissent qu’une seule requête réussit, quelles que soient les concurrentes.",
      "whyWrong": {
        "b": "Un message à l’utilisateur ne change rien au comportement du serveur face à des requêtes simultanées."
      }
    },
    "xrc-q13": {
      "type": "single",
      "correct": "d",
      "explanation": "Le WSTG décrit une démarche de test structurée par catégories, à mener sur une cible autorisée. Ce n’est ni un outil de chiffrement ni un pare-feu.",
      "whyWrong": {
        "c": "Il ne chiffre aucun cookie.",
        "b": "Un guide de test ne protège pas le site.",
        "a": "Il ne génère pas de mots de passe."
      }
    },
    "xrc-q14": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Tester une application sans autorisation est illégal, indépendamment de l’intention. Un test se fait dans un périmètre autorisé par écrit ou sur un environnement d’entraînement prévu pour cela."
    },
    "xrc-q15": {
      "type": "single",
      "correct": "a",
      "explanation": "L’ASVS définit les exigences de sécurité (le « quoi »), le WSTG explique comment les tester (le « comment »). Les deux se complètent.",
      "whyWrong": {
        "b": "Ce sont deux référentiels documentaires, pas des logiciels.",
        "d": "Ils ont des rôles différents et complémentaires.",
        "c": "L’ASVS porte sur les applications, pas sur les équipements du réseau."
      }
    },
    "xrc-q16": {
      "type": "open",
      "model": "Cadre d’abord : obtenir une autorisation écrite précisant le périmètre (l’application de recette et ses composants, pas la production), la fenêtre de test, les comptes fournis, les données autorisées (jeux de test, pas de données réelles sensibles) et les personnes à prévenir. Démarche : cartographier l’application (pages, points d’entrée, rôles, technologies) ; dérouler les catégories du WSTG (authentification, sessions, contrôle d’accès, validation des entrées dont XXE et inclusion, configuration, logique métier dont conditions de course) en consignant chaque test et son résultat ; reproduire les constats de façon fiable et évaluer leur impact ; rédiger un rapport (description, preuve, impact, correction) ; vérifier les correctifs après remédiation. Veiller à ne pas dégrader l’environnement de recette (données de test, pas d’action destructrice non prévue).",
      "criteria": [
        "Les précautions de cadre (autorisation écrite, périmètre, données de test) sont explicites.",
        "Une démarche structurée inspirée du WSTG est décrite.",
        "La documentation et la vérification des correctifs sont mentionnées."
      ],
      "explanation": "Le cadre légal et la méthode comptent autant que la technique : un test non autorisé ou non documenté n’a pas de valeur et expose juridiquement."
    },
    "xrc-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "Un DOCX est une archive de fichiers XML et un SVG est du XML : si le serveur les analyse (aperçu, conversion, extraction de texte) avec un analyseur permissif, une entité externe peut être résolue.",
      "whyWrong": {
        "d": "Le navigateur ne chiffre pas ces fichiers.",
        "a": "Ce sont des formats de données, pas du code machine.",
        "b": "L’exposition vient de l’analyse côté serveur, pas d’un service interne unique."
      }
    },
    "xrc-q18": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les séquences `../` permettent encore de sortir du répertoire visé, et d’autres astuces (octet nul sur d’anciennes versions, fichiers de même extension) contournent cette limite. La correction est la table de correspondance ou la normalisation avec vérification du préfixe."
    },
    "xrc-q19": {
      "type": "short",
      "accepted": [
        "X-Frame-Options",
        "x-frame-options"
      ],
      "explanation": "`X-Frame-Options` (valeurs `DENY` ou `SAMEORIGIN`) est l’ancien mécanisme. `frame-ancestors` est plus précis (liste d’origines) et fait partie de la CSP ; on conserve parfois les deux pour les vieux navigateurs."
    },
    "xrc-q20": {
      "type": "single",
      "correct": "b",
      "explanation": "Un script de la page peut être neutralisé par la page qui l’encadre (sandbox, désactivation de JavaScript). La protection doit venir d’un en-tête de réponse, appliqué par le navigateur avant l’affichage.",
      "whyWrong": {
        "d": "Le problème n’est pas la lenteur mais le contournement.",
        "a": "Ce n’est pas une question de type de navigateur.",
        "c": "Le script ne bloque pas le site légitime, il se laisse neutraliser."
      }
    },
    "xrc-q21": {
      "type": "truefalse",
      "correct": false,
      "explanation": "`frame-ancestors` n’est pas prise en charge dans une balise meta : elle doit être envoyée comme en-tête HTTP `Content-Security-Policy`. Une protection placée dans le corps de la page reste sans effet."
    },
    "xrc-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "La condition `AND utilise = 0` est évaluée dans la même instruction que la modification : une seule requête modifie une ligne, les autres n’en modifient aucune et sont refusées.",
      "whyWrong": {
        "b": "Deux requêtes séparées laissent une fenêtre entre la lecture et l’écriture.",
        "d": "Le test dans le code applicatif reste non atomique.",
        "a": "Lire et informer ne consomme pas le code."
      }
    },
    "xrc-q23": {
      "type": "short",
      "accepted": [
        "TOCTOU",
        "toctou"
      ],
      "explanation": "TOCTOU (Time-Of-Check to Time-Of-Use) : entre la vérification et l’utilisation, l’état a pu changer. C’est le mécanisme de la plupart des conditions de course applicatives."
    },
    "xrc-q24": {
      "type": "multi",
      "correct": [
        "a",
        "d"
      ],
      "explanation": "Les opérations qui vérifient puis modifient un état partagé (solde, compteur, code) sont exposées. La lecture d’une ressource statique ne modifie aucun état.",
      "whyWrong": {
        "b": "Une page statique ne modifie aucun état.",
        "c": "Une lecture seule n’a pas d’état à corrompre."
      }
    },
    "xrc-q25": {
      "type": "single",
      "correct": "b",
      "explanation": "Sans autorisation écrite et périmètre précis, un test n’est ni légal ni exploitable. Le cadrage précède la cartographie, les tests, puis le rapport.",
      "whyWrong": {
        "d": "Un scan de la production sans cadre expose à des conséquences légales et techniques.",
        "a": "Collecter des identifiants réels est hors cadre.",
        "c": "Le rapport vient à la fin, pas au début."
      }
    },
    "xrc-q26": {
      "type": "single",
      "correct": "a",
      "explanation": "Un constat non reproductible peut être un faux positif ou dépendre d’un état particulier. La reproduction fournit une preuve fiable et permet de mesurer l’impact réel.",
      "whyWrong": {
        "c": "Ce n’est pas une formalité contractuelle mais une exigence de qualité.",
        "d": "Le nombre de constats n’est pas un objectif.",
        "b": "Rien n’impose de deux exemplaires."
      }
    },
    "xrc-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "L’extension et le type MIME sont fournis par le client : ils se falsifient. Il faut contrôler le contenu réel, renommer, stocker hors de la racine web et limiter la taille.",
      "whyWrong": {
        "b": "Le renommage aléatoire est une bonne mesure.",
        "c": "Le stockage hors racine web en est une autre.",
        "a": "Limiter la taille réduit l’abus de ressources."
      }
    },
    "xrc-q28": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Stockage hors racine web, nom choisi par le serveur et limites de taille réduisent les risques d’exécution, de traversée et d’épuisement de ressources.",
      "whyWrong": {
        "c": "Le nom envoyé par le client peut contenir `../` ou une extension exécutable."
      }
    },
    "xrc-q29": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le type MIME est un en-tête que le client choisit : un script peut être envoyé avec `Content-Type: image/jpeg`. Seule l’analyse du contenu réel (signature, relecture de l’image) donne une indication fiable."
    },
    "xrc-q30": {
      "type": "single",
      "correct": "a",
      "explanation": "Certains formats de sérialisation (`pickle`, `ObjectInputStream`, `unserialize`) peuvent instancier des classes arbitraires. Une charge fabriquée exécute du code pendant la reconstruction, avant toute vérification.",
      "whyWrong": {
        "d": "La compression n’est pas concernée.",
        "c": "Le chiffrement n’est pas concerné.",
        "b": "La réplication de données n’est pas concernée."
      }
    },
    "xrc-q31": {
      "type": "short",
      "accepted": [
        "pickle",
        "le module pickle"
      ],
      "explanation": "`pickle.loads` peut exécuter du code arbitraire inclus dans les données. Pour des données reçues, on utilise JSON avec validation par schéma."
    },
    "xrc-q32": {
      "type": "single",
      "correct": "b",
      "explanation": "JSON ne peut représenter que des données simples : c’est l’application, et non le format, qui construit ses objets après validation. Un objet natif dans un cookie non signé, ou chiffré avec une clé fournie au client, reste forgeable.",
      "whyWrong": {
        "d": "Sans validation, un format binaire propriétaire ne protège pas.",
        "a": "Un cookie non signé peut être modifié par l’utilisateur.",
        "c": "Une clé placée dans la page est connue de l’attaquant."
      }
    },
    "xrc-q33": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le code malveillant s’exécute pendant la reconstruction de l’objet (constructeurs, méthodes de rappel). Valider l’objet après coup ne suffit donc pas : il faut éviter de désérialiser des données non fiables."
    },
    "xrc-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "L’application fonctionne comme programmée, mais les règles de gestion (ordre des étapes, calcul d’un prix, droits selon l’état) permettent un avantage non prévu. Les scanners ne les voient pas.",
      "whyWrong": {
        "b": "Une erreur de syntaxe empêche le fonctionnement, ce n’est pas une faille de logique.",
        "d": "Il s’agit de configuration, pas de règles métier.",
        "a": "C’est un autre type de faiblesse."
      }
    },
    "xrc-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "Tout ce qui vient du navigateur peut être modifié : le prix, les remises et les totaux doivent être recalculés côté serveur à partir du catalogue.",
      "whyWrong": {
        "a": "Le chiffrement du formulaire ne protège pas contre la modification par son propriétaire.",
        "c": "HttpOnly concerne le vol de cookie par un script.",
        "b": "La journalisation aide à détecter, elle ne corrige pas."
      }
    },
    "xrc-q36": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Une machine à états côté serveur, le recalcul des valeurs sensibles et des tests de cas d’abus ferment les enchaînements imprévus. Masquer un champ côté client n’empêche pas d’envoyer une valeur choisie.",
      "whyWrong": {
        "b": "Un champ masqué reste modifiable par l’utilisateur."
      }
    },
    "xrc-q37": {
      "type": "short",
      "accepted": [
        "CVSS",
        "cvss"
      ],
      "explanation": "CVSS (Common Vulnerability Scoring System) calcule une note à partir de critères techniques. Il est complété par le contexte métier (exposition, valeur des données) pour prioriser les corrections."
    },
    "xrc-q38": {
      "type": "single",
      "correct": "b",
      "explanation": "Une fiche exploitable permet de comprendre, reproduire, prioriser et corriger. Les secrets réels n’ont pas à figurer en clair dans un rapport diffusé.",
      "whyWrong": {
        "d": "Le nom de l’outil ne suffit pas à reproduire ni à corriger.",
        "c": "Un rapport ne doit pas contenir de mots de passe réels en clair.",
        "a": "Sans détail reproductible, le constat est inexploitable."
      }
    },
    "xrc-q39": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un rapport circule : y inscrire des secrets réels crée une nouvelle fuite. On prouve l’exploitation par des captures masquées, des empreintes ou des extraits tronqués, et l’on recommande de changer les secrets concernés."
    },
    "xrc-q40": {
      "type": "open",
      "model": "Cas d’abus : 1) modifier le prix ou la remise envoyé par le navigateur ; 2) saisir une quantité négative ou nulle ; 3) sauter l’étape de paiement en appelant directement la route de confirmation ; 4) appliquer plusieurs fois un code promo à usage unique par requêtes simultanées ; 5) demander plusieurs remboursements pour la même commande. Pour chaque constat, je note la requête rejouée, la réponse, la preuve, l’impact et une gravité (CVSS adapté au contexte), puis je propose la correction côté serveur (recalcul, machine à états, opération atomique). Le rapport est diffusé à un cercle restreint, sans données réelles inutiles, et je contre-vérifie après correction.",
      "criteria": [
        "Au moins quatre cas d’abus pertinents sont donnés.",
        "La restitution comporte description, preuve, impact, gravité et correction.",
        "La confidentialité du rapport et la contre-vérification sont mentionnées."
      ],
      "explanation": "Les failles de logique se découvrent en pensant comme un utilisateur malveillant : chaque cas d’abus devient ensuite un test automatisé de non-régression."
    }
  },
};
