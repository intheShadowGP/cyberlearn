// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "f-web-defense-avancee",
  questions: {
    "fwa-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "La surface d’attaque regroupe les routes, API, formulaires, fichiers téléversés, scripts tiers, interfaces d’administration, dépendances et intégrations atteignables. La réduire est une première mesure de défense.",
      "whyWrong": {
        "d": "La taille des fichiers n’est pas ce qui définit la surface d’attaque.",
        "a": "Le volume de code n’est pas la surface atteignable.",
        "c": "Les utilisateurs autorisés ne définissent pas ce qu’un attaquant peut atteindre."
      }
    },
    "fwa-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "STRIDE : Spoofing (usurpation), Tampering (altération), Repudiation (déni), Information disclosure (fuite), Denial of service (déni de service), Elevation of privilege (élévation de privilège).",
      "whyWrong": {
        "d": "T désigne l’altération de données.",
        "c": "R désigne le déni d’une action effectuée.",
        "b": "E désigne l’élévation de privilège."
      }
    },
    "fwa-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Corriger une faiblesse de conception coûte peu au stade du schéma et beaucoup une fois l’application en production. La modélisation se met aussi à jour à chaque évolution importante."
    },
    "fwa-q4": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Le diagramme représente acteurs, processus, magasins de données, flux et frontières de confiance : c’est là que l’on applique STRIDE. L’aspect visuel de l’interface n’y figure pas.",
      "whyWrong": {
        "d": "L’apparence de l’interface n’est pas un élément du modèle de menace."
      }
    },
    "fwa-q5": {
      "type": "short",
      "accepted": [
        "STRIDE",
        "stride"
      ],
      "explanation": "STRIDE est une méthode de classification des menaces proposée par Microsoft, utilisée pour examiner chaque flux d’un diagramme de flux de données."
    },
    "fwa-q6": {
      "type": "single",
      "correct": "c",
      "explanation": "L’élévation de privilège consiste à obtenir des droits supérieurs à ceux accordés. Les autres cas relèvent respectivement de l’usurpation (Spoofing), de l’altération (Tampering) et du déni de service.",
      "whyWrong": {
        "d": "C’est de l’usurpation d’identité (Spoofing).",
        "b": "C’est de l’altération (Tampering).",
        "a": "C’est du déni de service (Denial of service)."
      }
    },
    "fwa-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le niveau 1 est le minimum de base, le niveau 2 convient à la plupart des applications qui traitent des données sensibles, et le niveau 3 est réservé aux applications les plus critiques. Le niveau se choisit selon les données et l’exposition."
    },
    "fwa-q8": {
      "type": "single",
      "correct": "d",
      "explanation": "Quand le proxy et le serveur interprètent différemment la longueur d’une requête, une partie des octets est lue comme le début de la requête suivante, qui peut appartenir à un autre utilisateur.",
      "whyWrong": {
        "a": "Le chiffrement TLS n’est pas en cause.",
        "b": "Les feuilles de style n’ont aucun rapport.",
        "c": "Il ne s’agit pas d’un problème d’authentification."
      }
    },
    "fwa-q9": {
      "type": "short",
      "accepted": [
        "Transfer-Encoding",
        "transfer-encoding"
      ],
      "explanation": "Un conflit entre `Content-Length` et `Transfer-Encoding: chunked` (CL.TE ou TE.CL) fait découper différemment la même requête par le proxy et le serveur."
    },
    "fwa-q10": {
      "type": "single",
      "correct": "a",
      "explanation": "Si une entrée hors clé de cache (par exemple `X-Forwarded-Host`) est reflétée dans une réponse mise en cache, cette réponse piégée est servie à tous les visiteurs suivants.",
      "whyWrong": {
        "c": "C’est un déni de service, pas un empoisonnement.",
        "b": "Vider le cache ne déforme pas son contenu.",
        "d": "Le cache ne chiffre pas son contenu avec une clé de l’attaquant."
      }
    },
    "fwa-q11": {
      "type": "truefalse",
      "correct": true,
      "explanation": "L’attaquant envoie une demande de réinitialisation avec un `Host` qu’il contrôle : le lien reçu par la victime pointe vers son domaine et lui livre le jeton. Le nom de domaine doit venir de la configuration."
    },
    "fwa-q12": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "HTTP/2 de bout en bout supprime l’ambiguïté de découpage, le rejet des requêtes ambiguës ferme le cas restant et la mise à jour corrige les analyseurs défaillants. Accepter des requêtes mal formées aggrave le risque.",
      "whyWrong": {
        "b": "Tolérer des requêtes mal formées est précisément ce qui permet la désynchronisation."
      }
    },
    "fwa-q13": {
      "type": "single",
      "correct": "d",
      "explanation": "Avec une URL comme `/compte/profil/x.css`, le cache croit stocker une ressource statique alors qu’il garde la page privée de la victime, ensuite accessible à l’attaquant. Les contenus dynamiques doivent être marqués `private` ou `no-store`.",
      "whyWrong": {
        "c": "C’est de la XSS ou de l’empoisonnement, pas de la tromperie de cache.",
        "b": "Il ne s’agit pas de contournement d’authentification par cookie.",
        "a": "Il ne s’agit pas d’interception de certificat."
      }
    },
    "fwa-q14": {
      "type": "single",
      "correct": "c",
      "explanation": "Le lien commence par le domaine du site de confiance mais mène ailleurs : il sert à l’hameçonnage et à détourner des flux comme OAuth. La parade est une liste d’adresses autorisées.",
      "whyWrong": {
        "a": "Une redirection ne donne pas accès aux cookies.",
        "b": "Elle ne lit pas de fichiers du serveur.",
        "d": "Elle ne modifie pas le chiffrement."
      }
    },
    "fwa-q15": {
      "type": "single",
      "correct": "b",
      "explanation": "Avec `strict-dynamic`, la confiance accordée par le nonce se propage aux scripts que le script approuvé charge ; les listes d’hôtes et `unsafe-inline` sont ignorés. La politique ne dépend plus d’une liste d’hôtes à entretenir.",
      "whyWrong": {
        "d": "Les scripts en ligne restent soumis au nonce.",
        "c": "La CSP reste active.",
        "a": "Aucun chiffrement n’est impliqué."
      }
    },
    "fwa-q16": {
      "type": "single",
      "correct": "a",
      "explanation": "Avec Trusted Types, des puits comme `innerHTML` n’acceptent qu’une valeur produite par une politique de confiance, pas une chaîne brute : une grande part des XSS basées sur le DOM disparaît à la source.",
      "whyWrong": {
        "b": "Les certificats relèvent de TLS, pas de Trusted Types.",
        "c": "Les cookies ne sont pas concernés.",
        "d": "Il ne s’agit pas d’identification d’utilisateurs."
      }
    },
    "fwa-q17": {
      "type": "short",
      "accepted": [
        "Sec-Fetch-Site",
        "sec-fetch-site"
      ],
      "explanation": "`Sec-Fetch-Site` prend les valeurs `cross-site`, `same-site`, `same-origin` ou `none`. Le serveur peut s’en servir pour refuser les requêtes intersites inattendues qui modifient l’état."
    },
    "fwa-q18": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un nonce fixe peut être lu (par exemple via une autre faille) et réutilisé par l’attaquant dans un script injecté. Il doit être aléatoire, imprévisible et nouveau à chaque réponse."
    },
    "fwa-q19": {
      "type": "multi",
      "correct": [
        "b",
        "c"
      ],
      "explanation": "COOP et COEP, combinés, donnent l’isolation inter-origines utile contre les attaques par canaux auxiliaires du processeur. `X-Powered-By` informe sur la technologie, et `no-store` règle la mise en cache.",
      "whyWrong": {
        "d": "`X-Powered-By` ne protège rien et divulgue des informations.",
        "a": "`no-store` règle la mise en cache, pas l’isolation."
      }
    },
    "fwa-q20": {
      "type": "single",
      "correct": "b",
      "explanation": "Le navigateur calcule l’empreinte du fichier chargé et la compare à celle indiquée : un fichier modifié (CDN compromis) est refusé. SRI ne chiffre rien et ne limite pas les utilisateurs.",
      "whyWrong": {
        "d": "Le chiffrement relève de HTTPS.",
        "a": "SRI ne s’intéresse pas à l’identité de l’utilisateur.",
        "c": "SRI ne compresse pas le fichier."
      }
    },
    "fwa-q21": {
      "type": "single",
      "correct": "c",
      "explanation": "Un hôte autorisé (CDN, domaine d’audience) peut servir une ancienne bibliothèque ou un point JSONP qui exécute du script choisi par l’attaquant. Le nonce autorise des scripts précis, quel que soit leur hébergeur.",
      "whyWrong": {
        "b": "La difficulté n’est pas la vitesse mais le contournement.",
        "d": "Les navigateurs gèrent bien les listes d’hôtes.",
        "a": "Une liste d’hôtes peut exiger HTTPS."
      }
    },
    "fwa-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "Des requêtes profondes ou coûteuses saturent le serveur. On plafonne la profondeur et le coût calculé, on utilise des requêtes persistantes et l’on contrôle l’autorisation champ par champ.",
      "whyWrong": {
        "b": "L’absence de limite est la cause du problème.",
        "c": "La validation des types fait partie de la défense.",
        "a": "Publier le schéma n’empêche pas l’abus."
      }
    },
    "fwa-q23": {
      "type": "truefalse",
      "correct": false,
      "explanation": "L’introspection décrit tout le schéma (types, requêtes, champs sensibles) et facilite la découverte de fonctions mal protégées. On la désactive en production, sauf besoin explicite pour une API publique."
    },
    "fwa-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "La poignée de main WebSocket est une requête HTTP qui joint les cookies. Sans vérification de l’en-tête `Origin` ni jeton explicite, une page d’un autre site peut ouvrir la connexion au nom de la victime.",
      "whyWrong": {
        "d": "Le chiffrement du canal n’est pas ce qui est attaqué.",
        "a": "La saturation est un déni de service.",
        "c": "La persistance de la connexion n’est pas un détournement."
      }
    },
    "fwa-q25": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "L’autorisation par objet (BOLA) et par fonction (BFLA), la liste de champs modifiables (contre l’affectation de masse) et la limitation de débit sont des protections de base. Renvoyer tout l’objet expose des données inutiles.",
      "whyWrong": {
        "c": "L’exposition excessive de données est un défaut classique des API."
      }
    },
    "fwa-q26": {
      "type": "short",
      "accepted": [
        "BOLA",
        "bola"
      ],
      "explanation": "BOLA (Broken Object Level Authorization) est l’équivalent API de l’IDOR : l’identifiant fourni par le client est accepté sans vérifier le droit d’accès à l’objet."
    },
    "fwa-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "Une limite par requête HTTP ne voit qu’une opération, alors que la requête en contient des centaines (par exemple des essais de mot de passe). La limite doit porter sur les opérations ou sur le coût.",
      "whyWrong": {
        "b": "Les alias ne chiffrent rien.",
        "d": "Les alias ne changent pas l’adresse IP.",
        "a": "La journalisation reste active."
      }
    },
    "fwa-q28": {
      "type": "single",
      "correct": "d",
      "explanation": "L’usage du jeton exige une preuve de possession d’une clé (certificat mTLS, preuve DPoP signée par requête). Un attaquant qui vole le jeton sans la clé ne peut pas s’en servir.",
      "whyWrong": {
        "b": "Un jeton sans expiration aggrave le risque.",
        "a": "La lisibilité par tous les services est une faiblesse.",
        "c": "Il ne remplace pas l’authentification."
      }
    },
    "fwa-q29": {
      "type": "single",
      "correct": "a",
      "explanation": "L’attaquant publie par exemple `lodahs` à la place de `lodash` en espérant une erreur de frappe : l’installation exécute alors son code. On vérifie le nom, l’éditeur et l’on contrôle les dépendances autorisées.",
      "whyWrong": {
        "d": "C’est l’inverse d’une correction : le piège exploite l’erreur.",
        "b": "Le verrouillage est une défense, pas une attaque.",
        "c": "La signature est une défense, pas une attaque."
      }
    },
    "fwa-q30": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le fichier de verrouillage fixe les versions exactes (et leurs empreintes) : `npm ci` installe toujours les mêmes paquets. Les mises à jour deviennent des décisions relues, pas des surprises."
    },
    "fwa-q31": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Une CSP stricte, SRI et surtout moins de scripts tiers réduisent l’exposition aux scripts de skimming. Autoriser n’importe quelle origine annule ces protections.",
      "whyWrong": {
        "a": "Autoriser toutes les origines supprime la protection de la CSP."
      }
    },
    "fwa-q32": {
      "type": "short",
      "accepted": [
        "Magecart",
        "magecart",
        "skimming",
        "web skimming"
      ],
      "explanation": "Magecart regroupe des groupes qui injectent des scripts de capture (skimming) dans les pages de paiement, directement ou par un fournisseur tiers compromis."
    },
    "fwa-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "Une SBOM (CycloneDX, SPDX) permet, dès l’annonce d’une vulnérabilité dans un composant, de savoir en quelques minutes quelles applications l’embarquent et dans quelles versions.",
      "whyWrong": {
        "d": "Ce n’est pas un contrôle d’accès.",
        "b": "Ce n’est pas un journal d’attaques.",
        "a": "Ce n’est pas une sauvegarde."
      }
    },
    "fwa-q34": {
      "type": "single",
      "correct": "a",
      "explanation": "Tout ce qui est envoyé au navigateur est lisible par le visiteur : une clé secrète placée dans le JavaScript est publique. Les secrets restent côté serveur, dans un coffre.",
      "whyWrong": {
        "b": "Un coffre de secrets est l’emplacement recommandé.",
        "c": "Une variable d’environnement côté serveur est acceptable.",
        "d": "Un gestionnaire de secrets est acceptable."
      }
    },
    "fwa-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "Des champs nommés (qui, quoi, où, résultat, identifiant de corrélation) se recherchent et se croisent automatiquement, ce qui rend la détection fiable. Le format n’a pas pour but de masquer les journaux.",
      "whyWrong": {
        "a": "La structure ne vise pas la compression.",
        "c": "Les administrateurs doivent pouvoir les lire.",
        "d": "Elle ne dispense pas de conserver les journaux."
      }
    },
    "fwa-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "La règle du WAF reconnaît la requête d’exploitation et la bloque, ce qui gagne du temps. La faille reste dans le code : la correction doit suivre.",
      "whyWrong": {
        "b": "Le code n’est pas modifié par la règle.",
        "c": "Un correctif virtuel n’installe aucune mise à jour.",
        "a": "Il ne s’agit pas de chiffrement."
      }
    },
    "fwa-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un WAF se contourne (encodages, variantes) et ne connaît pas la logique métier. Il réduit la fenêtre d’exposition mais ne remplace pas la correction à la source."
    },
    "fwa-q38": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "On contient et on préserve les preuves, on trouve et corrige la faille, on renouvelle les secrets exposés. Se contenter de supprimer le fichier laisse la porte ouverte et d’éventuelles autres portes dérobées.",
      "whyWrong": {
        "c": "Sans enquête, l’attaquant peut revenir par la même faille ou par une autre porte dérobée."
      }
    },
    "fwa-q39": {
      "type": "open",
      "model": "Je commence par modéliser la menace : diagramme de flux avec les frontières de confiance (internet vers le site et l’API, site vers prestataire de paiement, employé vers le back-office), puis STRIDE sur les flux sensibles et des cas d’abus. Je choisis un niveau ASVS (2 en général) et note les risques acceptés avec leur propriétaire. Je durcis ensuite : autorisation par objet et par fonction sur l’API, jetons liés, limitation par opération, CSP stricte avec nonce et Trusted Types, SRI et peu de scripts tiers sur la page de paiement, back-office derrière MFA résistante à l’hameçonnage. Pour l’infrastructure : HTTP/2 de bout en bout, en-tête Host contrôlé, cache configuré sur le contenu dynamique. Enfin, journaux structurés, alertes, correctif virtuel possible, plan de réponse et page de divulgation.",
      "criteria": [
        "La modélisation de la menace est décrite (flux, frontières, STRIDE, niveau d’exigence).",
        "Des mesures concrètes de durcissement couvrent API, navigateur, infrastructure ou back-office.",
        "La détection et la réponse (journaux, alertes, plan) sont mentionnées."
      ],
      "explanation": "La défense avancée enchaîne modéliser, durcir, détecter et répondre : chaque étape alimente la suivante."
    },
    "fwa-q40": {
      "type": "open",
      "model": "Détection : alertes sur les violations de la CSP et sur les empreintes SRI qui ne correspondent plus, surveillance des destinations réseau inhabituelles de la page, signalement du fournisseur ou d’un tiers. Réponse : retirer immédiatement le script de la page de paiement, évaluer la période d’exposition à partir des journaux, identifier les données susceptibles d’avoir été capturées (saisies de carte), prévenir le prestataire de paiement et les autorités concernées, informer les clients touchés. Prévention : ne plus charger de script tiers sur la page de paiement, ou l’isoler dans un cadre ; CSP à nonce qui limite les destinations ; SRI quand c’est possible ; inventaire (SBOM) et revue périodique des fournisseurs ; tests réguliers de la page de paiement.",
      "criteria": [
        "La détection par CSP, SRI ou surveillance réseau est décrite.",
        "La réponse comprend retrait du script, évaluation de l’exposition et notification.",
        "La prévention (moins de scripts tiers, CSP, SRI, inventaire) est proposée."
      ],
      "explanation": "Retirer le script ne suffit pas : il faut mesurer ce qui a pu être capturé et réduire durablement la surface offerte aux tiers."
    }
  },
};
