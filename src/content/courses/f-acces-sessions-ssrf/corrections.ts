// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "f-acces-sessions-ssrf",
  questions: {
    "acc-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "L’application accepte un identifiant fourni par le client sans vérifier que l’objet lui appartient : c’est une référence directe non sécurisée (IDOR), forme horizontale du contrôle d’accès défaillant.",
      "whyWrong": {
        "c": "Aucune requête SQL n’est détournée ici : c’est l’autorisation qui manque.",
        "b": "Aucun script n’est injecté dans la page.",
        "a": "Le serveur n’est pas amené à émettre une requête vers un service interne."
      }
    },
    "acc-q2": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un UUID réduit l’énumération mais finit souvent par fuiter (journaux, liens partagés, réponses d’autres API). Seule la vérification côté serveur de la propriété de l’objet corrige la faille."
    },
    "acc-q3": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Vérification de propriété côté serveur, refus par défaut et liste explicite des champs modifiables (contre l’affectation de masse) corrigent la cause.",
      "whyWrong": {
        "a": "Masquer un bouton améliore l’interface, mais la route reste appelable directement : ce n’est pas un contrôle d’accès."
      }
    },
    "acc-q4": {
      "type": "open",
      "model": "Préparer au moins deux comptes agents (A et B) avec des dossiers distincts, et un compte superviseur. Cartographier toutes les routes et requêtes (proxy d’interception) avec le compte superviseur. Rejouer chaque requête : avec l’agent B sur les dossiers de A (contrôle horizontal : attendre 403 ou 404), avec un agent sur les fonctions de superviseur (contrôle vertical), sans authentification, et avec des champs supplémentaires (rôle, propriétaire) dans les requêtes de modification. Tester aussi les méthodes alternatives (PUT, DELETE) et les exports. Consigner chaque écart avec la requête, la réponse et le compte utilisé, puis proposer des tests automatisés de non-régression.",
      "criteria": [
        "Plusieurs comptes de même niveau et de niveau différent sont utilisés.",
        "Les contrôles horizontal et vertical sont tous deux testés.",
        "Les requêtes sont rejouées directement, pas seulement via l’interface.",
        "La traçabilité ou l’automatisation des tests est mentionnée."
      ],
      "explanation": "Les scanners automatiques ne connaissent pas les règles métier : le test du contrôle d’accès reste une démarche méthodique et manuelle, outillée par un proxy."
    },
    "acc-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "`HttpOnly` retire le cookie de `document.cookie` : un script injecté par XSS ne peut pas le lire directement (il peut néanmoins agir dans la page, d’où la nécessité de corriger le XSS lui-même).",
      "whyWrong": {
        "b": "`SameSite` limite l’envoi intersite du cookie, sans empêcher sa lecture par le JavaScript.",
        "d": "`Path` délimite les chemins qui reçoivent le cookie.",
        "c": "`Max-Age` fixe la durée de vie du cookie."
      }
    },
    "acc-q6": {
      "type": "short",
      "accepted": [
        "__Host-",
        "__host-",
        "__Host"
      ],
      "explanation": "Un cookie préfixé `__Host-` n’est accepté par le navigateur que s’il est `Secure`, avec `Path=/` et sans `Domain` : il est lié à l’hôte exact et ne peut pas être imposé depuis un sous-domaine."
    },
    "acc-q7": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Si l’identifiant change à l’authentification, celui que l’attaquant a imposé avant devient inutile. On le régénère aussi lors de tout changement de privilèges."
    },
    "acc-q8": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Messages identiques (pas d’énumération des comptes), limitation et MFA (contre la force brute et la réutilisation de mots de passe), jetons de réinitialisation robustes.",
      "whyWrong": {
        "b": "Un mot de passe envoyé en clair suppose qu’il est connu ou stocké de manière réversible, et il traîne ensuite dans les boîtes de messagerie."
      }
    },
    "acc-q9": {
      "type": "single",
      "correct": "b",
      "explanation": "Le CSRF ne vole pas le cookie : il exploite le fait que le navigateur l’ajoute lui-même. Le serveur voit une requête authentifiée, sans pouvoir la distinguer d’une action volontaire, sauf jeton ou vérification d’origine.",
      "whyWrong": {
        "a": "Aucune force brute n’intervient : l’attaquant n’a pas besoin du cookie.",
        "d": "Le serveur n’envoie pas le cookie à d’autres sites.",
        "c": "CORS ne transmet aucun cookie à l’attaquant."
      }
    },
    "acc-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "CORS contrôle la **lecture** des réponses par une autre origine. Un formulaire HTML intersite est envoyé et exécuté par le serveur sans passer par CORS. La protection repose sur SameSite, les jetons anti-CSRF et la vérification de l’origine."
    },
    "acc-q11": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Refléter l’origine, la valider par simple inclusion de chaîne ou accepter `null` (origine des documents en bac à sable) permet à un site tiers de lire les réponses authentifiées.",
      "whyWrong": {
        "c": "Une liste fixe et exacte des origines autorisées est la configuration correcte."
      }
    },
    "acc-q12": {
      "type": "short",
      "accepted": [
        "Strict",
        "SameSite=Strict"
      ],
      "explanation": "`Strict` n’envoie jamais le cookie sur une requête intersite, même en suivant un lien : plus sûr, mais l’utilisateur arrivant depuis un lien externe apparaît déconnecté. `Lax` l’envoie sur la navigation de premier niveau en GET."
    },
    "acc-q13": {
      "type": "single",
      "correct": "c",
      "explanation": "169.254.169.254 est l’adresse du service de métadonnées des grands fournisseurs cloud ; elle est joignable depuis l’instance. Elle peut délivrer les identifiants temporaires du rôle de l’instance, d’où des compromissions de comptes cloud entiers.",
      "whyWrong": {
        "b": "Le ralentissement est un effet mineur, sans rapport avec le danger.",
        "d": "Il ne s’agit pas d’un problème d’affichage.",
        "a": "Elle n’est pas routable sur Internet, mais elle l’est depuis le serveur, ce qui est précisément le problème."
      }
    },
    "acc-q14": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Liste d’autorisation, vérification de l’adresse réellement utilisée (contre le DNS rebinding) et filtrage réseau en sortie forment une défense en profondeur.",
      "whyWrong": {
        "d": "Une liste de refus se contourne par d’autres écritures (`127.1`, `0x7f000001`, `[::1]`, un nom DNS pointant vers 127.0.0.1, une redirection)."
      }
    },
    "acc-q15": {
      "type": "open",
      "model": "Si le paramètre est concaténé au répertoire, `fichier=../../../etc/passwd` sort de `/srv/rapports/` : c’est une traversée de répertoires, qui peut exposer des fichiers de configuration, des clés ou du code. Correction la plus sûre : ne plus accepter de chemin, mais un identifiant associé côté serveur à une liste de fichiers autorisés (par exemple en base, avec vérification que l’utilisateur a droit à ce rapport). Correction de second rang : normaliser le chemin (`realpath`) après concaténation, vérifier qu’il commence par `/srv/rapports/`, refuser les octets nuls et les liens symboliques sortants ; à compléter par un compte de service qui n’a accès qu’à ce répertoire.",
      "criteria": [
        "La traversée de répertoires et son impact sont expliqués.",
        "Une solution par identifiant ou liste d’autorisation est proposée en premier.",
        "Une solution par normalisation du chemin et vérification du préfixe est proposée.",
        "Le contrôle d’accès au rapport ou le moindre privilège du compte est mentionné."
      ],
      "explanation": "Les filtres qui retirent « ../ » se contournent souvent (encodage, `....//`) : on raisonne sur le chemin final normalisé, jamais sur la chaîne reçue."
    },
    "acc-q16": {
      "type": "single",
      "correct": "c",
      "explanation": "L’ASVS liste des exigences précises et testables, regroupées par thème et par niveau. Il sert de base à un cahier des charges, à une revue de code ou à un audit, mais ce n’est pas un outil.",
      "whyWrong": {
        "b": "L’ASVS est un référentiel d’exigences, pas un scanner.",
        "a": "Il ne chiffre rien.",
        "d": "Il ne remplace aucun équipement ou logiciel de protection."
      }
    },
    "acc-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "L’élévation verticale consiste à accéder à une fonction réservée à un rôle supérieur. La route doit vérifier le rôle de l’appelant et refuser par défaut tout ce qui n’est pas explicitement autorisé.",
      "whyWrong": {
        "b": "Rien n’indique ici une requête SQL détournée.",
        "a": "La fixation de session concerne l’identifiant de session, pas les droits.",
        "c": "CORS limite la lecture inter-origines, pas l’autorisation des appels."
      }
    },
    "acc-q18": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un 403 confirme à l’attaquant que l’objet existe ; un 404 uniforme réduit l’information fournie par l’énumération. La décision doit toutefois toujours être prise côté serveur, avant de renvoyer des données."
    },
    "acc-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "Si une API copie le corps de la requête dans l’objet, un client peut y ajouter des champs sensibles (`role`, `proprietaire`). On définit une liste explicite des champs modifiables.",
      "whyWrong": {
        "d": "Ce n’est pas un envoi multiple, mais un défaut de filtrage des champs.",
        "a": "Le nombre d’objets chargés n’est pas en cause.",
        "c": "Le problème n’est pas l’attribution d’un rôle commun mais la copie des champs reçus."
      }
    },
    "acc-q20": {
      "type": "single",
      "correct": "a",
      "explanation": "Chrome et Edge traitent un cookie sans attribut SameSite comme `Lax`. Ce n’est pas le cas de tous les navigateurs : on définit l’attribut explicitement plutôt que de compter sur le défaut.",
      "whyWrong": {
        "b": "`Strict` doit être demandé explicitement.",
        "d": "`None` exige `Secure` et doit être déclaré.",
        "c": "Le défaut `Lax` restreint déjà l’envoi sur certaines requêtes intersites."
      }
    },
    "acc-q21": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un identifiant de session volé ou copié reste valide tant que le serveur ne l’a pas invalidé. La déconnexion doit détruire la session côté serveur, et l’expiration par inactivité doit être appliquée par le serveur."
    },
    "acc-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "Un GET peut être provoqué par une balise image, un lien ou une redirection : si une action y est liée, elle devient exploitable en CSRF sans même un formulaire. Les actions qui modifient l’état utilisent POST, PUT ou DELETE, avec jeton.",
      "whyWrong": {
        "b": "Il n’existe pas de limite de ce type dans le protocole.",
        "a": "GET fonctionne en HTTPS.",
        "d": "Un GET transporte les cookies comme les autres méthodes."
      }
    },
    "acc-q23": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "SameSite, le jeton et la vérification d’origine se complètent. CORS ne protège pas : le formulaire intersite est envoyé et exécuté même si la réponse n’est pas lisible.",
      "whyWrong": {
        "d": "CORS contrôle la lecture des réponses, pas l’envoi de la requête."
      }
    },
    "acc-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "Une même adresse s’écrit de multiples façons (décimal, hexadécimal, IPv6, nom DNS, redirection). Seule une liste d’autorisation, complétée par la vérification de l’adresse résolue, est fiable.",
      "whyWrong": {
        "d": "Le défaut n’est pas de bloquer trop, mais de laisser passer des variantes.",
        "a": "Une liste de refus peut aussi contenir des adresses internes.",
        "c": "La norme HTTP n’interdit pas de telles listes."
      }
    },
    "acc-q25": {
      "type": "short",
      "accepted": [
        "DNS rebinding",
        "dns rebinding",
        "rebinding DNS",
        "rebinding"
      ],
      "explanation": "Dans le DNS rebinding, la réponse DNS change entre la vérification et l’usage. La parade consiste à résoudre le nom une seule fois, vérifier l’adresse obtenue, puis se connecter à cette même adresse."
    },
    "acc-q26": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le serveur suit la redirection et se connecte à la cible interne alors que l’URL initiale était autorisée. On refuse les redirections ou on revérifie chaque saut."
    },
    "acc-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "BOLA est l’équivalent API de l’IDOR : un identifiant d’objet fourni par le client est accepté sans vérifier le droit d’accès. C’est la faille la plus fréquente et la plus exploitée des API.",
      "whyWrong": {
        "b": "L’injection reste importante, mais n’est pas en tête du classement des API.",
        "a": "L’absence de limitation de débit est une faiblesse distincte.",
        "c": "La version logicielle est une information, pas la principale faille."
      }
    },
    "acc-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "L’en-tête est fourni par l’attaquant. Imposer l’algorithme côté serveur évite l’acceptation de « none » et la confusion entre algorithmes symétrique et asymétrique.",
      "whyWrong": {
        "b": "C’est précisément la faiblesse à éviter.",
        "c": "Essayer plusieurs algorithmes ouvre à la confusion.",
        "d": "Un test avec « none » finit par arriver en production."
      }
    },
    "acc-q29": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "L’autorisation par objet et par fonction, la validation par schéma et la limitation de débit réduisent les abus. Masquer côté client des champs déjà envoyés ne protège rien : le contenu est dans la réponse.",
      "whyWrong": {
        "d": "Les champs sensibles envoyés au client sont lisibles par n’importe qui qui observe la réponse."
      }
    },
    "acc-q30": {
      "type": "short",
      "accepted": [
        "3",
        "niveau 3",
        "L3",
        "level 3"
      ],
      "explanation": "Le niveau 1 est le minimum pour toute application, le niveau 2 convient à la plupart des applications qui traitent des données sensibles, et le niveau 3 est réservé aux applications critiques."
    },
    "acc-q31": {
      "type": "single",
      "correct": "c",
      "explanation": "WebAuthn signe un défi en l’associant au nom de domaine : sur un faux site, le navigateur ne fournit rien d’exploitable. Les codes saisis (SMS, courriel) peuvent être relayés en temps réel par un faux site.",
      "whyWrong": {
        "d": "Un code SMS saisi sur un faux site est aussitôt rejoué.",
        "b": "Une question secrète est un facteur de connaissance, souvent devinable.",
        "a": "Un code par courriel se relaie comme un code par SMS."
      }
    },
    "acc-q32": {
      "type": "single",
      "correct": "b",
      "explanation": "Le client génère une valeur aléatoire liée à la session, l’envoie et vérifie qu’elle revient inchangée. Sans elle, un attaquant peut faire terminer à la victime un flux avec un code qu’il a obtenu pour son propre compte.",
      "whyWrong": {
        "c": "`state` ne chiffre rien.",
        "d": "La durée de vie est fixée par le serveur d’autorisation.",
        "a": "Les droits demandés sont décrits par le paramètre `scope`."
      }
    },
    "acc-q33": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Une comparaison par préfixe ou avec joker permet de rediriger le code d’autorisation vers un chemin ou un domaine contrôlé par l’attaquant. La comparaison exacte, caractère pour caractère, est la règle."
    },
    "acc-q34": {
      "type": "short",
      "accepted": [
        "PKCE",
        "pkce"
      ],
      "explanation": "PKCE (Proof Key for Code Exchange) lie le code à un secret généré par le client au départ : sans ce secret, un code intercepté ne peut pas être échangé contre un jeton."
    },
    "acc-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "Un lien de réinitialisation donne le contrôle du compte. À usage unique et valable peu de temps, il est inutilisable après la réinitialisation ou si le courriel est lu plus tard.",
      "whyWrong": {
        "a": "Les jetons doivent être aléatoires, pas mémorisables.",
        "b": "Le jeton est généralement envoyé par courriel ou SMS.",
        "c": "Un jeton valable pour plusieurs comptes serait une faille grave."
      }
    },
    "acc-q36": {
      "type": "multi",
      "correct": [
        "a",
        "b"
      ],
      "explanation": "Une `redirect_uri` mal validée livre le code à l’attaquant ; un `state` ignoré permet de forcer la victime dans un flux préparé. PKCE et la vérification de signature sont des protections, pas des erreurs.",
      "whyWrong": {
        "d": "PKCE renforce le flux.",
        "c": "Vérifier la signature est obligatoire."
      }
    },
    "acc-q37": {
      "type": "single",
      "correct": "a",
      "explanation": "L’énumération se reconnaît à des identifiants qui se suivent, avec un mélange de refus et de réponses 200 : l’attaquant cherche les objets accessibles. La corrélation par compte rend le motif visible.",
      "whyWrong": {
        "c": "Un accès isolé à la page d’accueil est normal.",
        "d": "Des connexions espacées n’ont rien de suspect en soi.",
        "b": "Un pic horaire prévisible est un trafic légitime."
      }
    },
    "acc-q38": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un scanner ne sait pas qui a le droit de voir quelle facture : il ne peut pas juger qu’une réponse 200 est une faille. Ces défauts se trouvent par des tests à plusieurs comptes et par la surveillance des journaux."
    },
    "acc-q39": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Refus d’accès, changements de privilèges et échecs d’authentification alimentent la détection. Les mots de passe ne doivent jamais figurer dans les journaux : ils exposeraient les comptes en cas de fuite.",
      "whyWrong": {
        "b": "Journaliser un mot de passe, même erroné, crée une fuite potentielle (fautes de frappe proches du vrai mot de passe)."
      }
    },
    "acc-q40": {
      "type": "open",
      "model": "Je cherche dans les journaux d’accès, sur toute la période d’exposition, les comptes qui ont lu des objets qui ne leur appartiennent pas : identifiants consécutifs, rapport inhabituel entre refus et succès, volumes anormaux sur la route. Je liste les objets réellement lus et, si des données personnelles ont été exposées, je prépare la notification adaptée. Pour éviter le retour : un test automatisé à deux comptes qui exige 403 ou 404 sur l’objet d’un autre, une revue des autres routes du même type, une vérification centralisée de la propriété dans la couche de données, une limitation de débit et des alertes sur les motifs d’énumération.",
      "criteria": [
        "La recherche d’une exploitation passée dans les journaux est décrite avec des critères précis.",
        "Les données exposées sont évaluées et leur notification envisagée.",
        "Un test automatisé de non-régression et une mesure de détection sont proposés."
      ],
      "explanation": "Corriger la route ne dit pas si elle a été exploitée : la rétro-analyse des journaux et le test de non-régression complètent la correction."
    }
  },
};
