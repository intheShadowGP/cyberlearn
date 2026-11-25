// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "l-cloud-initiation",
  questions: {
    "cin-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "Le cloud (informatique en nuage) consiste à utiliser, via Internet, des ressources — calcul, stockage, logiciels — hébergées par un fournisseur et facturées selon l’usage.",
      "whyWrong": {
        "d": "Ce serait une installation locale.",
        "a": "Ce n’est pas un câble.",
        "c": "Une clé USB est un support local."
      }
    },
    "cin-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "L’élasticité permet d’augmenter ou de réduire les ressources (puissance, stockage) en quelques minutes, et de ne payer que ce qui est utilisé.",
      "whyWrong": {
        "d": "Ce n’est pas de la compression.",
        "b": "Le chiffrement se configure.",
        "a": "Sans rapport avec l’élasticité."
      }
    },
    "cin-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le cloud public est mutualisé : le fournisseur isole les clients par des mécanismes logiques. C’est ce qui permet des coûts réduits, mais impose de bien configurer ses propres accès."
    },
    "cin-q4": {
      "type": "single",
      "correct": "d",
      "explanation": "Un cloud public partage l’infrastructure entre de nombreux clients ; un cloud privé est réservé à une seule organisation. Le niveau de sécurité dépend surtout de la configuration, pas du nom.",
      "whyWrong": {
        "b": "Ce n’est pas systématique.",
        "a": "Il faut un compte dans les deux cas.",
        "c": "Un cloud privé utilise un réseau."
      }
    },
    "cin-q5": {
      "type": "short",
      "accepted": [
        "région",
        "region",
        "une région"
      ],
      "explanation": "Un fournisseur répartit ses centres de données en régions (par exemple « Paris » ou « Francfort »). Le choix de la région influence la latence, la continuité et le lieu de stockage des données."
    },
    "cin-q6": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Rapidité, facturation à l’usage et accessibilité sont des avantages réels du cloud. En revanche, le client garde des responsabilités de sécurité.",
      "whyWrong": {
        "c": "Le client reste responsable de ses accès, de sa configuration et de ses données."
      }
    },
    "cin-q7": {
      "type": "single",
      "correct": "a",
      "explanation": "Plusieurs régions permettent de placer les services près des utilisateurs, de respecter des contraintes légales de localisation et de continuer à fonctionner si une région est indisponible.",
      "whyWrong": {
        "b": "Ce n’est pas le but.",
        "c": "Les sauvegardes restent possibles.",
        "d": "Ce n’est pas un critère."
      }
    },
    "cin-q8": {
      "type": "single",
      "correct": "a",
      "explanation": "En IaaS (infrastructure en tant que service), le fournisseur loue des machines virtuelles ; le client choisit, installe, met à jour et sécurise le système et les applications.",
      "whyWrong": {
        "c": "En SaaS, le client utilise simplement un logiciel.",
        "b": "En PaaS, le fournisseur gère le système.",
        "d": "C’est un exemple de SaaS."
      }
    },
    "cin-q9": {
      "type": "single",
      "correct": "b",
      "explanation": "Le SaaS (logiciel en tant que service) fournit une application prête à l’emploi. Le client gère surtout ses comptes, ses droits et ses données.",
      "whyWrong": {
        "d": "L’IaaS fournit des machines à administrer.",
        "c": "Le PaaS fournit une plateforme pour des développeurs.",
        "a": "C’est un mode de déploiement, pas un modèle de service."
      }
    },
    "cin-q10": {
      "type": "single",
      "correct": "d",
      "explanation": "Même en SaaS, le client décide qui accède à ses données : comptes, droits, partages, authentification. Le fournisseur sécurise le socle technique.",
      "whyWrong": {
        "a": "Il ne peut pas décider à la place du client.",
        "b": "Le navigateur n’a pas ce rôle.",
        "c": "Rien n’est automatique."
      }
    },
    "cin-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le client reste responsable de ses comptes, de l’authentification, des droits de partage et de ses données. Seuls l’application et l’infrastructure sont gérées par le fournisseur."
    },
    "cin-q12": {
      "type": "short",
      "accepted": [
        "responsabilité partagée",
        "responsabilite partagee",
        "modèle de responsabilité partagée",
        "la responsabilité partagée"
      ],
      "explanation": "Le modèle de responsabilité partagée précise ce que sécurise le fournisseur (le socle) et ce que sécurise le client (configuration, identités, données). La frontière varie selon IaaS, PaaS ou SaaS."
    },
    "cin-q13": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "En IaaS, système, pare-feu, comptes et données sont à la charge du client. La sécurité physique du centre de données reste celle du fournisseur.",
      "whyWrong": {
        "a": "Elle relève du fournisseur."
      }
    },
    "cin-q14": {
      "type": "open",
      "model": "Le fournisseur protège l’infrastructure : bâtiments, serveurs, réseau de base, isolation entre clients. Mais la sécurité de nos données dépend aussi de ce que nous configurons : qui a un compte, avec quels droits, si l’authentification renforcée est activée, si un stockage est public, si des clés ou mots de passe sont exposés. La plupart des fuites de données dans le cloud viennent d’une mauvaise configuration du client, pas d’une faille du fournisseur. Il faut donc gérer les accès, activer la MFA, limiter les partages, chiffrer et sauvegarder, et surveiller les journaux.",
      "criteria": [
        "Le rôle du fournisseur (le socle) est reconnu.",
        "La responsabilité du client sur les accès et la configuration est expliquée.",
        "Un exemple de mauvaise configuration est cité.",
        "Au moins deux mesures concrètes sont proposées."
      ],
      "explanation": "Le cloud ne supprime pas la responsabilité : il la répartit autrement."
    },
    "cin-q15": {
      "type": "single",
      "correct": "c",
      "explanation": "Le compte racine (ou propriétaire) peut tout faire, y compris supprimer le compte entier. On le protège par une authentification forte et on ne l’utilise pas au quotidien.",
      "whyWrong": {
        "b": "Il n’a pas de droits à protéger.",
        "a": "Ses droits sont limités.",
        "d": "Ce n’est pas le compte principal."
      }
    },
    "cin-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "Un second facteur (code, application, clé de sécurité) empêche un attaquant qui connaît le mot de passe de se connecter. C’est l’une des mesures les plus efficaces contre le vol de compte.",
      "whyWrong": {
        "b": "Elle ajoute une étape.",
        "a": "L’identifiant reste nécessaire.",
        "c": "Ce n’est pas son rôle."
      }
    },
    "cin-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "Le compte racine n’a aucune limite : une erreur de manipulation ou un vol de ses identifiants affecte tout le compte. On crée des comptes aux droits limités pour le travail courant.",
      "whyWrong": {
        "d": "Ce n’est pas une question de vitesse.",
        "b": "Il peut tout créer.",
        "a": "La connexion ne se facture pas."
      }
    },
    "cin-q18": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Plus les droits d’un compte sont limités, moins un vol ou une erreur ont de conséquences. C’est le principe de base de la gestion des accès."
    },
    "cin-q19": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Authentification renforcée, mot de passe unique et comptes nominatifs limitent le vol et permettent de savoir qui a fait quoi. Partager un compte administrateur supprime toute traçabilité.",
      "whyWrong": {
        "a": "Un compte partagé et envoyé par courriel est exposé et non traçable."
      }
    },
    "cin-q20": {
      "type": "short",
      "accepted": [
        "sso",
        "le sso"
      ],
      "explanation": "Le SSO (Single Sign-On) centralise l’authentification : l’utilisateur s’identifie une fois, et l’organisation applique au même endroit les règles de mot de passe et de second facteur."
    },
    "cin-q21": {
      "type": "single",
      "correct": "b",
      "explanation": "Une clé publiée doit être considérée comme compromise : des robots surveillent les dépôts publics en continu. On la désactive, on la remplace, puis on vérifie son usage dans les journaux.",
      "whyWrong": {
        "a": "La clé reste utilisable après la suppression du dépôt.",
        "c": "Attendre laisse la clé exploitable.",
        "d": "Cela ne l’invalide pas."
      }
    },
    "cin-q22": {
      "type": "single",
      "correct": "a",
      "explanation": "Un bucket est un espace de stockage d’objets (fichiers) identifié par un nom. Ses droits d’accès sont à régler avec soin, car une erreur peut l’exposer publiquement.",
      "whyWrong": {
        "c": "Ce n’est pas une machine.",
        "d": "Ce n’est pas un secret.",
        "b": "Sans rapport avec le réseau."
      }
    },
    "cin-q23": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un réglage modifié, un partage ou une règle trop large peuvent rendre un stockage public. Les réglages d’accès doivent être vérifiés régulièrement, idéalement par un outil automatique."
    },
    "cin-q24": {
      "type": "single",
      "correct": "d",
      "explanation": "Un lien public n’exige aucune identification : il peut être transmis, indexé ou deviné. On préfère un partage nominatif avec une durée limitée.",
      "whyWrong": {
        "a": "Ce n’est pas automatique.",
        "b": "Le fichier reste lisible.",
        "c": "Il n’est pas supprimé."
      }
    },
    "cin-q25": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le service déchiffre de façon transparente pour une identité autorisée. Si un compte qui peut lire est piraté, l’attaquant lit les données en clair. Le chiffrement ne remplace pas la gestion des accès."
    },
    "cin-q26": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Chiffrement, sauvegardes testées et droits limités protègent la confidentialité, la disponibilité et l’intégrité. Un accès public par défaut est une erreur de configuration classique.",
      "whyWrong": {
        "c": "Un accès public expose les données à tout Internet."
      }
    },
    "cin-q27": {
      "type": "short",
      "accepted": [
        "sauvegarde",
        "la sauvegarde",
        "backup"
      ],
      "explanation": "Une sauvegarde permet de restaurer des données supprimées, corrompues ou chiffrées par un rançongiciel. Elle n’a de valeur que si la restauration est testée régulièrement."
    },
    "cin-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "Si le compte est compromis, l’attaquant peut supprimer les données et leurs sauvegardes. Une copie dans un compte séparé ou une sauvegarde immuable résiste à ce scénario.",
      "whyWrong": {
        "d": "Elle est lisible.",
        "c": "Le contenu est le même que les données.",
        "b": "Elle n’affecte pas les accès."
      }
    },
    "cin-q29": {
      "type": "single",
      "correct": "c",
      "explanation": "Stockage public, droits trop larges, clés publiées : ces erreurs de configuration du client sont la première cause de fuites. Elles sont évitables avec des contrôles réguliers.",
      "whyWrong": {
        "d": "Une panne n’expose pas de données.",
        "a": "Une coupure n’expose pas de données.",
        "b": "Une mise à jour corrige des failles."
      }
    },
    "cin-q30": {
      "type": "single",
      "correct": "b",
      "explanation": "Un accès d’administration (SSH, bureau à distance) ouvert à tout Internet est scanné en continu par des robots. On l’ouvre seulement depuis des adresses connues ou via un accès sécurisé.",
      "whyWrong": {
        "c": "C’est une bonne pratique.",
        "a": "C’est une bonne pratique.",
        "d": "C’est une bonne pratique."
      }
    },
    "cin-q31": {
      "type": "single",
      "correct": "c",
      "explanation": "Un dépôt de code est copié, partagé et conservé avec tout son historique. Les secrets se rangent dans un coffre ou un gestionnaire dédié, avec un accès contrôlé.",
      "whyWrong": {
        "b": "C’est l’endroit prévu.",
        "d": "C’est un usage correct.",
        "a": "C’est un usage correct."
      }
    },
    "cin-q32": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Sans journaux, on ne sait plus qui a fait quoi et on ne peut ni détecter ni comprendre un incident. Il faut les activer, les conserver et les surveiller."
    },
    "cin-q33": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Un stockage public, un administrateur sans second facteur et des ressources oubliées (non mises à jour, facturées) sont des défauts à corriger. Un accès limité est la bonne pratique.",
      "whyWrong": {
        "c": "C’est au contraire le moindre privilège."
      }
    },
    "cin-q34": {
      "type": "open",
      "model": "D’abord prévenir sans attendre le responsable de la sécurité ou l’équipe informatique, car l’incident peut concerner des données personnelles. Ensuite retirer l’accès public, sans supprimer les fichiers ni les journaux. Conserver les journaux d’accès pour savoir si des personnes extérieures ont téléchargé des fichiers, et pendant combien de temps l’exposition a duré. Évaluer la nature des données concernées. Si des données personnelles sont touchées, informer le délégué à la protection des données : une notification à l’autorité (CNIL) peut être obligatoire dans les 72 heures. Corriger la cause (réglage, droits), activer des alertes sur les stockages publics et prévoir une revue régulière.",
      "criteria": [
        "Le responsable de la sécurité est prévenu rapidement.",
        "L’accès public est retiré sans détruire les preuves.",
        "La conservation et l’analyse des journaux d’accès sont mentionnées.",
        "La dimension données personnelles est prise en compte."
      ],
      "explanation": "On corrige l’exposition sans détruire les traces, puis on évalue l’impact et on informe les bonnes personnes."
    },
    "cin-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "Un fournisseur ne demande jamais votre mot de passe par courriel. Le message est signalé à l’équipe de sécurité, sans clic ni réponse.",
      "whyWrong": {
        "c": "Cela donnerait l’accès à l’attaquant.",
        "d": "On propagerait le piège.",
        "a": "La pièce jointe peut être piégée."
      }
    },
    "cin-q36": {
      "type": "single",
      "correct": "a",
      "explanation": "Le shadow IT désigne les outils et services utilisés sans validation (stockage personnel, messageries). Les données de l’organisation y échappent à tout contrôle.",
      "whyWrong": {
        "d": "Ce n’est pas une sauvegarde.",
        "c": "Ce n’est pas du chiffrement.",
        "b": "Ce n’est pas un outil de sécurité."
      }
    },
    "cin-q37": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un signalement rapide permet de limiter les dégâts : désactiver une clé, retirer un partage. Cacher une erreur laisse l’exposition ouverte et aggrave les conséquences."
    },
    "cin-q38": {
      "type": "single",
      "correct": "d",
      "explanation": "On coupe l’accès immédiatement, puis on prévient le responsable pour évaluer ce qui a pu être consulté. Le signalement rapide est toujours préférable.",
      "whyWrong": {
        "a": "Le dossier reste accessible.",
        "b": "Le partage reste actif.",
        "c": "L’exposition demeure."
      }
    },
    "cin-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Un service non validé peut ne pas respecter les exigences de l’organisation. On vérifie l’autorisation et la protection, et on réserve les données sensibles aux services validés.",
      "whyWrong": {
        "d": "Un mot de passe réutilisé expose tous les comptes en cas de fuite."
      }
    },
    "cin-q40": {
      "type": "short",
      "accepted": [
        "anssi",
        "l’anssi",
        "l'anssi"
      ],
      "explanation": "L’ANSSI (Agence nationale de la sécurité des systèmes d’information) publie des guides accessibles à tous et le référentiel SecNumCloud qualifiant les fournisseurs cloud de confiance."
    }
  },
};
