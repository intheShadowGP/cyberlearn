// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "d-windows-defense-avancee",
  questions: {
    "dwd-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "On part du principe qu’un poste, un compte ou un prestataire sera compromis un jour. Les défenses (cloisonnement, droits limités), les détections et les plans de reprise sont alors conçus pour limiter ce que l’attaquant peut faire ensuite, et non pour miser uniquement sur la frontière.",
      "whyWrong": {
        "b": "C’est précisément l’hypothèse inverse, que cette approche abandonne.",
        "c": "Il ne s’agit pas de couper les connexions externes.",
        "a": "L’hypothèse de compromission concerne la conception des défenses, pas un budget de remplacement."
      }
    },
    "dwd-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "ATT&CK recense les tactiques et techniques observées chez les adversaires. Il sert de langage commun pour décrire une attaque, cartographier ses règles de détection, repérer les techniques non couvertes et planifier des exercices. Il ne dit pas quelles techniques sont les plus probables chez soi.",
      "whyWrong": {
        "b": "Ce n’est pas un outil de protection.",
        "d": "Il ne définit pas de calendrier de correctifs.",
        "c": "Il ne délivre pas de note de conformité."
      }
    },
    "dwd-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "En associant chaque règle aux techniques qu’elle détecte, on obtient une vue des zones sans détection. Il faut ensuite hiérarchiser selon la menace réelle de l’organisation, car une couverture « complète » n’est ni réaliste ni forcément utile."
    },
    "dwd-q4": {
      "type": "short",
      "accepted": [
        "credential access",
        "accès aux identifiants",
        "acces aux identifiants"
      ],
      "explanation": "La tactique « Credential Access » (accès aux identifiants) regroupe les techniques de vol de mots de passe, d’empreintes, de tickets et de clés. Le vidage de LSASS en fait partie ; on le détecte par Sysmon 10 et on le complique par la protection LSA et Credential Guard."
    },
    "dwd-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "Un compte de service a souvent des droits étendus et un mot de passe ancien ; un compte d’administration ouvre l’accès à tout un niveau. Les compromettre donne un accès large avec peu d’effort : ils guident la priorisation des mesures.",
      "whyWrong": {
        "c": "Ils sont au contraire peu nombreux.",
        "a": "Leurs actions sont journalisées comme les autres.",
        "d": "Tous les comptes peuvent, selon les droits, se connecter à distance."
      }
    },
    "dwd-q6": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Comptes privilégiés et sessions, chemins d’attaque et surfaces exposées donnent une vue réaliste de ce que peut atteindre un adversaire. Le nombre de fonds d’écran n’apporte rien à l’analyse du risque.",
      "whyWrong": {
        "c": "Un fond d’écran n’a aucun effet sur les chemins d’attaque."
      }
    },
    "dwd-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le domaine, les prestataires, les applications et les techniques d’attaque évoluent. Le modèle se met à jour après chaque changement important et chaque incident, sinon il décrit un environnement qui n’existe plus."
    },
    "dwd-q8": {
      "type": "single",
      "correct": "c",
      "explanation": "Un administrateur qui travaille depuis un poste ordinaire expose ses secrets aux courriels piégés et aux sites malveillants. Sur une PAW, aucun usage à risque n’existe : un compte privilégié ne s’authentifie que depuis un poste durci et filtré.",
      "whyWrong": {
        "b": "La puissance n’est pas l’objectif : c’est l’isolement.",
        "d": "Des sessions laissées ouvertes sur un poste partagé affaibliraient l’isolement.",
        "a": "Une PAW est un poste d’administration, pas un serveur de sauvegarde."
      }
    },
    "dwd-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "Avec les droits à la demande, un compte n’est privilégié que le temps d’une tâche approuvée : un attaquant qui le compromet entre-temps n’a plus de droit à exploiter. Le processus ajoute justification, approbation et traçabilité.",
      "whyWrong": {
        "d": "Un droit permanent reste disponible en permanence pour un attaquant.",
        "c": "Un calendrier fixe n’a aucun rapport avec le besoin réel.",
        "b": "Le Just-In-Time ne dépend pas du créateur de la ressource : il accorde un droit à la demande."
      }
    },
    "dwd-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "Avec la liaison de canal, une authentification interceptée ne peut pas être rejouée sur un autre canal : le relais vers l’annuaire échoue. Il faut recenser les clients anciens avant de l’imposer.",
      "whyWrong": {
        "a": "Elle ne chiffre pas le stockage des objets.",
        "c": "Elle n’a aucun effet sur la vitesse.",
        "d": "Elle ne contrôle pas les droits de lecture."
      }
    },
    "dwd-q11": {
      "type": "short",
      "accepted": [
        "JEA",
        "jea"
      ],
      "explanation": "JEA (Just Enough Administration) définit un point de connexion PowerShell restreint : un opérateur délégué n’a accès qu’à des commandes précises, sous un compte virtuel, avec journalisation. Il évite de donner des droits d’administration complets pour une tâche limitée."
    },
    "dwd-q12": {
      "type": "truefalse",
      "correct": true,
      "explanation": "L’audit liste les clients et serveurs qui utilisent encore NTLM. On peut ensuite corriger ou remplacer ces dépendances, puis restreindre par étapes. Un blocage direct provoque des pannes que l’on annule, et la mesure est abandonnée."
    },
    "dwd-q13": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Les signatures et la liaison de canal empêchent de réutiliser une authentification interceptée ; la protection étendue protège les services web. NTLMv1 est cassable et aggrave le risque : il doit être interdit.",
      "whyWrong": {
        "a": "NTLMv1 est cassable : l’autoriser affaiblit la protection."
      }
    },
    "dwd-q14": {
      "type": "open",
      "model": "Le multifacteur protège l’authentification : il ne protège pas le poste. Si le poste habituel de l’administrateur est compromis (programme malveillant, vol de jeton de session ou de ticket), l’attaquant agit avec la session déjà authentifiée ou avec des secrets en mémoire, sans repasser par le second facteur. Une PAW réduit l’exposition : le compte privilégié ne s’authentifie que depuis un poste dédié, sans messagerie ni navigation, donc plus difficile à compromettre. Une politique d’authentification restreint les machines depuis lesquelles le compte peut obtenir un ticket et limite la durée des tickets, ce qui coupe la réutilisation depuis un poste ordinaire. Les droits à la demande (JIT) limitent la fenêtre : le compte n’est privilégié que pendant la tâche approuvée, donc un vol hors de cette fenêtre ne donne rien. Ces mesures se complètent par des détections (ouvertures de session tier 0 hors PAW).",
      "criteria": [
        "Explique que le multifacteur protège la connexion mais pas le poste ni la session déjà authentifiée.",
        "Décrit l’effet d’une PAW sur l’exposition des secrets.",
        "Décrit l’effet des politiques d’authentification et des durées de vie de ticket.",
        "Décrit l’effet des droits à la demande sur la fenêtre d’exploitation."
      ],
      "explanation": "Plusieurs barrières indépendantes valent mieux qu’une barrière unique : chacune compense l’échec possible des autres."
    },
    "dwd-q15": {
      "type": "single",
      "correct": "d",
      "explanation": "Un compte leurre, un SPN factice ou un fichier appât n’a aucune raison d’être utilisé par un salarié : toute tentative d’authentification ou d’accès est suspecte. Les leurres donnent très peu de faux positifs s’ils sont crédibles et ne servent à rien d’autre.",
      "whyWrong": {
        "b": "Un jeton de longue durée augmenterait les risques.",
        "a": "Un coffre-fort protège des secrets : ce n’est pas un leurre.",
        "c": "Les certificats de poste servent à l’authentification, pas à piéger."
      }
    },
    "dwd-q16": {
      "type": "single",
      "correct": "c",
      "explanation": "Les contrôleurs échangent en continu des données de réplication avec les mêmes droits. Sans exclusion de leurs comptes de machines, la règle déclencherait sans cesse. On exclut ces comptes, et on surveille séparément toute modification de la liste des contrôleurs.",
      "whyWrong": {
        "a": "Un contrôleur peut être compromis ; l’exclusion ne signifie pas confiance.",
        "b": "C’est précisément ainsi qu’ils se répliquent.",
        "d": "Leurs événements sont collectés comme les autres."
      }
    },
    "dwd-q17": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Elle peut n’avoir jamais été testée, reposer sur un événement qui n’est pas journalisé, ou avoir des exclusions trop larges. Une règle se valide en la déclenchant volontairement lors d’une attaque simulée, puis en mesurant ses faux positifs."
    },
    "dwd-q18": {
      "type": "short",
      "accepted": [
        "Sigma",
        "sigma"
      ],
      "explanation": "Sigma décrit une règle de détection de façon neutre ; des convertisseurs la traduisent vers les requêtes de différents outils de supervision. On peut ainsi partager, versionner et relire les règles comme du code."
    },
    "dwd-q19": {
      "type": "single",
      "correct": "c",
      "explanation": "L’événement 5136 consigne la modification d’un attribut : nouvelle appartenance, droits modifiés, clé d’authentification ajoutée, stratégie changée. C’est la source de nombreuses détections de persistance et d’élévation, à condition d’activer l’audit correspondant.",
      "whyWrong": {
        "b": "La journalisation n’accélère rien.",
        "d": "Elle augmente le volume de journaux, pas la réduction de la base.",
        "a": "Elle ne chiffre rien."
      }
    },
    "dwd-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Test sur attaque simulée, mesure des faux positifs et réponse documentée font d’une règle un contrôle exploitable. La désactiver dès la première alerte supprime la détection au moment où elle sert.",
      "whyWrong": {
        "d": "Désactiver une règle qui alerte revient à ne plus rien détecter."
      }
    },
    "dwd-q21": {
      "type": "single",
      "correct": "a",
      "explanation": "Ce type de service s’installe sur les contrôleurs, lit leurs événements et leur trafic, et détecte des comportements connus (reconnaissance, mouvement latéral, extraction de secrets). Il complète, sans les remplacer, les règles propres à l’organisation.",
      "whyWrong": {
        "b": "Il ne remplace pas les contrôleurs.",
        "d": "Le stockage des mots de passe n’est pas son rôle.",
        "c": "Il ne fait pas de sauvegarde."
      }
    },
    "dwd-q22": {
      "type": "single",
      "correct": "b",
      "explanation": "L’attaquant enregistre brièvement une machine comme contrôleur et injecte des modifications dans l’annuaire par le canal de réplication : les changements sont acceptés sans passer par les journaux habituels. On surveille la création et la suppression d’objets de serveur dans la partition de configuration.",
      "whyWrong": {
        "d": "Il ne s’agit pas d’une copie de la base.",
        "c": "Il ne s’agit pas d’un service de duplication des journaux.",
        "a": "Il ne s’agit pas d’une sauvegarde."
      }
    },
    "dwd-q23": {
      "type": "single",
      "correct": "d",
      "explanation": "Un processus périodique recopie l’ACL d’AdminSDHolder sur les comptes et groupes privilégiés protégés. Un droit ajouté à ce conteneur revient donc à chaque cycle, même si on le retire d’un compte. Il faut l’auditer et alerter sur toute modification.",
      "whyWrong": {
        "c": "Elle ne touche pas à la journalisation.",
        "b": "Elle ne supprime aucun compte.",
        "a": "La modification est visible dans les droits du conteneur."
      }
    },
    "dwd-q24": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Si l’inscription web accepte NTLM sans protection étendue, une authentification relayée suffit à demander un certificat d’authentification au nom de la victime, parfois d’un contrôleur. On désactive NTLM sur ce service, on impose la protection étendue et le HTTPS, et on surveille les émissions."
    },
    "dwd-q25": {
      "type": "short",
      "accepted": [
        "relais NTLM",
        "relais ntlm",
        "NTLM relay",
        "ntlm relay"
      ],
      "explanation": "Dans un relais NTLM, l’attaquant joue l’intermédiaire entre un client et un serveur et transmet l’authentification pour agir au nom du client. Les signatures, la liaison de canal, la protection étendue et la réduction de NTLM le préviennent."
    },
    "dwd-q26": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "ACL détournée, historique de SID et certificat inattendu sont des mécanismes de retour discrets. Un redémarrage planifié est une opération d’exploitation courante.",
      "whyWrong": {
        "c": "Un redémarrage planifié est normal et sans lien avec l’annuaire."
      }
    },
    "dwd-q27": {
      "type": "single",
      "correct": "b",
      "explanation": "En écrivant une clé dans cet attribut, un attaquant qui a le droit d’écriture sur le compte peut ensuite s’authentifier comme lui par certificat, sans connaître son mot de passe. On restreint l’écriture et on surveille l’attribut (événement 5136).",
      "whyWrong": {
        "c": "Il ne s’agit pas d’un mot de passe stocké dans le registre.",
        "d": "La rotation automatique est une bonne pratique, pas une attaque.",
        "a": "Ce n’est pas un certificat racine."
      }
    },
    "dwd-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "Par défaut, chaque utilisateur peut joindre dix machines au domaine, donc créer des comptes machines. Mettre le quota à zéro retire cette possibilité à un compte ordinaire ; la jonction passe alors par un compte dédié. Plusieurs attaques (délégation, relais) en dépendent.",
      "whyWrong": {
        "b": "Désactiver la journalisation empêcherait de détecter, pas d’attaquer.",
        "c": "Ce serait donner plus de droits, pas moins.",
        "d": "Ce réglage est utile mais sans lien avec la création de comptes machines."
      }
    },
    "dwd-q29": {
      "type": "single",
      "correct": "c",
      "explanation": "L’accès conditionnel applique des politiques selon le contexte : multifacteur exigé hors du réseau de confiance, appareil conforme obligatoire, accès bloqué en cas de risque élevé. Il remplace la confiance accordée au réseau interne par une évaluation à chaque accès.",
      "whyWrong": {
        "d": "Il ne remplace pas l’authentification, il la complète.",
        "a": "Il n’impose pas un modèle d’appareil unique.",
        "b": "Les rôles privilégiés restent à contrôler."
      }
    },
    "dwd-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "Un attaquant qui prend le contrôle d’un compte local synchronisé hérite de ses droits dans le cloud. On crée des comptes d’administration cloud dédiés, non synchronisés, protégés par multifacteur et accessibles par élévation temporaire.",
      "whyWrong": {
        "c": "Les comptes synchronisés peuvent utiliser le multifacteur.",
        "b": "Le cloud accepte les comptes synchronisés.",
        "a": "Ils peuvent se connecter depuis l’extérieur selon les politiques."
      }
    },
    "dwd-q31": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le jeton prouve que l’authentification a déjà eu lieu : le réutiliser contourne le second facteur. Durées courtes, liaison du jeton à l’appareil, accès conditionnel et évaluation continue des risques réduisent l’efficacité de cette technique."
    },
    "dwd-q32": {
      "type": "short",
      "accepted": [
        "PIM",
        "pim"
      ],
      "explanation": "PIM (Privileged Identity Management) rend les rôles éligibles plutôt que permanents : l’administrateur les active pour une durée limitée, avec justification, approbation éventuelle et journalisation. Il réduit la fenêtre d’exploitation d’un compte compromis."
    },
    "dwd-q33": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Le serveur de synchronisation peut écrire des identités des deux côtés : il se protège comme un contrôleur de domaine, avec un compte limité et une configuration surveillée. L’exposer à Internet en ferait une cible directe.",
      "whyWrong": {
        "d": "L’exposition à Internet multiplie les chemins d’attaque vers un actif de niveau 0."
      }
    },
    "dwd-q34": {
      "type": "open",
      "model": "Le serveur de synchronisation et son compte ont le pouvoir de lire et d’écrire des identités des deux côtés : l’attaquant peut obtenir des secrets ou des jetons, créer ou modifier des comptes, ajouter des appartenances privilégiées dans le cloud, ou forger des accès qui contournent l’authentification locale. Réaction : isoler le serveur sans l’éteindre et collecter sa mémoire et ses journaux ; désactiver ou réinitialiser le compte de synchronisation et ses secrets ; auditer les créations et modifications de comptes, de rôles et d’applications dans le cloud et dans l’annuaire depuis la date probable de compromission ; révoquer les sessions et jetons des comptes touchés ; vérifier les rôles privilégiés et les politiques d’accès conditionnel ; reconstruire le serveur à partir d’un support sain ; revoir la protection (niveau 0, accès restreint, surveillance de la configuration).",
      "criteria": [
        "Explique le pouvoir d’écriture du serveur de synchronisation sur les deux annuaires.",
        "Propose le confinement (isolement, rotation du compte et des secrets) avec collecte préalable.",
        "Propose l’audit des créations et modifications dans le cloud et l’annuaire local.",
        "Propose la révocation des jetons et la reconstruction du serveur."
      ],
      "explanation": "En hybride, un seul maillon compromis peut ouvrir les deux mondes : la réponse se mène sur l’ensemble de la chaîne d’identité."
    },
    "dwd-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "On qualifie d’abord, on arrête la progression, on préserve les preuves, on retire toute présence, on rebâtit ce qui est douteux, puis on tire les leçons. Reconstruire ou éradiquer sans avoir collecté détruit des éléments qui expliquent l’étendue de la compromission.",
      "whyWrong": {
        "b": "On ne reconstruit pas avant d’avoir qualifié et contenu.",
        "d": "On ne retire rien sans avoir qualifié et préservé les preuves.",
        "a": "Le retour d’expérience vient après l’action."
      }
    },
    "dwd-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "Un logiciel malveillant peut s’exécuter uniquement en mémoire ; clés de chiffrement, connexions réseau et processus y sont visibles. À l’extinction, ces éléments disparaissent. On capture donc la mémoire d’abord, puis on collecte le disque.",
      "whyWrong": {
        "a": "L’extinction ne détruit pas les fichiers du disque.",
        "d": "Les journaux sont sur le disque ; la mémoire contient l’état d’exécution.",
        "c": "Le système ne l’exige pas."
      }
    },
    "dwd-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "On isole en coupant le réseau (port, VLAN, règle du pare-feu ou de l’EDR) pour garder la machine allumée et conserver son état, notamment la mémoire. L’extinction n’est décidée qu’après la collecte."
    },
    "dwd-q38": {
      "type": "short",
      "accepted": [
        "purple team",
        "purple teaming",
        "équipe violette"
      ],
      "explanation": "En purple team, l’attaquant rejoue une technique et le défenseur vérifie si elle est détectée ; si ce n’est pas le cas, on écrit ou corrige la règle, puis on rejoue. C’est la méthode la plus directe pour mesurer et améliorer la couverture."
    },
    "dwd-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Il faut rendre inutilisables les secrets copiés, retirer tout mécanisme de retour et reconstruire ce qui ne peut plus être cru. Supprimer les journaux détruit les preuves et empêche de comprendre l’incident.",
      "whyWrong": {
        "d": "Les journaux servent à comprendre et à prouver : on les conserve."
      }
    },
    "dwd-q40": {
      "type": "open",
      "model": "Triage : confirmer l’événement (compte, source, droits), vérifier que ces droits n’ont jamais été accordés légitimement, rechercher les autres actions du compte (connexions, modifications de groupes, de GPO), identifier machines et comptes concernés. Confinement : isoler le poste source sans l’éteindre, désactiver le compte, purger sessions et tickets, retirer ou rétablir la GPO modifiée, isoler les serveurs touchés. Collecte : capturer la mémoire du poste et des serveurs concernés, conserver journaux, copies de la GPO et des tâches, empreintes, chaîne de conservation. Étendue : considérer comme exposés les secrets de l’annuaire (comptes privilégiés et de service, secret de signature des tickets), rechercher les persistances (ACL, AdminSDHolder, certificats, clés d’authentification, historique de SID). Éradication et reconstruction : réinitialiser les secrets exposés (double réinitialisation pour le secret de signature des tickets), retirer les persistances, reconstruire les serveurs douteux, restaurer l’annuaire depuis une sauvegarde saine si l’intégrité est incertaine, revérifier la PKI. Retour d’expérience : chronologie, cause d’entrée, restriction des droits de réplication, règle de détection améliorée, exercice purple team.",
      "criteria": [
        "Qualifie l’événement comme un signe d’extraction des secrets de l’annuaire et vérifie la légitimité des droits.",
        "Propose un confinement sans extinction, avec collecte préalable (mémoire, journaux).",
        "Considère les secrets de l’annuaire comme exposés et cherche les persistances.",
        "Propose l’éradication, la reconstruction et un retour d’expérience qui améliore la détection."
      ],
      "explanation": "La qualité de la réponse tient à l’ordre : qualifier, confiner, collecter, évaluer l’étendue, puis seulement éradiquer et reconstruire."
    }
  },
};
