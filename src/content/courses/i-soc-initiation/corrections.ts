// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "i-soc-initiation",
  questions: {
    "isi-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "Le SOC (Security Operations Center) surveille le système d’information, détecte les comportements anormaux, qualifie les alertes et coordonne la réponse aux incidents.",
      "whyWrong": {
        "a": "Le développement applicatif relève d’autres équipes.",
        "c": "Les achats ne font pas partie des missions d’un SOC.",
        "d": "La formation bureautique n’est pas une mission de détection."
      }
    },
    "isi-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Le N1 lit les alertes, les qualifie, les clôt avec justification ou les escalade au niveau supérieur pour une investigation plus poussée.",
      "whyWrong": {
        "d": "L’architecture du réseau relève d’autres métiers.",
        "b": "Négocier avec les éditeurs n’est pas le rôle d’un analyste de niveau 1.",
        "c": "Le niveau 3 apporte une expertise que le N1 n’a pas à remplacer."
      }
    },
    "isi-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La blue team défend (surveillance, détection, réponse), alors que la red team joue l’attaquant pendant un exercice. Quand elles collaborent, on parle de purple team."
    },
    "isi-q4": {
      "type": "short",
      "accepted": [
        "rouge",
        "rouge",
        "équipe rouge",
        "equipe rouge",
        "red",
        "red team",
        "l’équipe rouge"
      ],
      "explanation": "La red team simule un attaquant pour tester les défenses, avec autorisation. La blue team défend ; la purple team rassemble les deux pour améliorer la détection."
    },
    "isi-q5": {
      "type": "single",
      "correct": "c",
      "explanation": "Plus l’intrusion est détectée tôt, moins l’attaquant a le temps d’étendre son accès et de nuire. Le SOC existe pour réduire ce délai.",
      "whyWrong": {
        "d": "La fréquence des sauvegardes compte pour la reprise, pas pour la détection.",
        "a": "Le délai entre deux mises à jour du logo n’influence pas les dégâts d’une intrusion.",
        "b": "Les réunions ne mesurent pas la détection."
      }
    },
    "isi-q6": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Un SOC surveille, détecte, répond puis améliore ses détections. Le choix d’une interface graphique n’en fait pas partie.",
      "whyWrong": {
        "c": "Le design des applications n’est pas une mission de sécurité."
      }
    },
    "isi-q7": {
      "type": "single",
      "correct": "d",
      "explanation": "Le N2 reprend les alertes escaladées et mène une investigation plus complète : périmètre touché, chronologie, comptes et machines concernés.",
      "whyWrong": {
        "b": "On ne clôt pas une alerte sans l’avoir examinée.",
        "c": "L’installation de postes relève du support.",
        "a": "La charte est rédigée par d’autres fonctions."
      }
    },
    "isi-q8": {
      "type": "single",
      "correct": "d",
      "explanation": "Un journal enregistre des événements : connexion, échec d’authentification, fichier créé. Il sert à détecter et à comprendre ce qui s’est passé.",
      "whyWrong": {
        "a": "Un journal ne contient pas de mot de passe généré.",
        "b": "Un journal n’est pas un logiciel malveillant.",
        "c": "Une copie de disque est une image, pas un journal."
      }
    },
    "isi-q9": {
      "type": "single",
      "correct": "b",
      "explanation": "L’adresse après « from » est la source de la tentative ; « admin » est le compte visé. Le serveur est l’hôte qui a enregistré la ligne.",
      "whyWrong": {
        "c": "Le compte admin est la cible, pas la source.",
        "d": "Le serveur est l’endroit où la tentative arrive.",
        "a": "Le journal ne dit pas que le mot de passe était oublié."
      }
    },
    "isi-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Sans heure fiable, on ne peut pas ordonner les événements ni les croiser entre plusieurs systèmes. Les horloges doivent être synchronisées."
    },
    "isi-q11": {
      "type": "single",
      "correct": "c",
      "explanation": "Un attaquant qui prend la main sur une machine peut effacer ses journaux. Une copie envoyée ailleurs reste intacte et sert à l’enquête.",
      "whyWrong": {
        "b": "L’envoi n’accélère pas la machine.",
        "a": "Cela ne change pas le nombre de comptes.",
        "d": "L’envoi sert au contraire à les analyser."
      }
    },
    "isi-q12": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Pare-feu, annuaire, serveurs, applications, messagerie et postes produisent des journaux. Un papier peint n’en produit pas.",
      "whyWrong": {
        "a": "Un papier peint n’enregistre aucun événement."
      }
    },
    "isi-q13": {
      "type": "short",
      "accepted": [
        "ntp",
        "le ntp",
        "network time protocol"
      ],
      "explanation": "NTP (Network Time Protocol) synchronise les horloges. Des horodatages cohérents sont indispensables pour croiser les journaux et reconstituer une chronologie."
    },
    "isi-q14": {
      "type": "single",
      "correct": "a",
      "explanation": "Cette séquence peut indiquer des essais de mots de passe qui ont réussi. Seule, elle ne prouve rien, mais elle justifie de regarder le contexte et ce qui s’est passé après.",
      "whyWrong": {
        "d": "Un humain distrait ne produit pas une telle séquence rapide depuis l’extérieur.",
        "c": "Rien n’indique un problème d’horloge.",
        "b": "L’absence de suppression n’exclut pas l’intrusion."
      }
    },
    "isi-q15": {
      "type": "single",
      "correct": "c",
      "explanation": "Le SIEM centralise, normalise, conserve et corrèle les journaux, puis produit des alertes selon des règles.",
      "whyWrong": {
        "b": "Un routeur transmet du trafic ; il ne corrèle pas des journaux.",
        "a": "Un traitement de texte ne collecte pas de journaux.",
        "d": "Un lecteur de courrier ne produit pas d’alertes de sécurité."
      }
    },
    "isi-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "Un EDR est un agent installé sur les postes et serveurs : il observe finement l’activité et permet d’agir à distance, par exemple pour isoler une machine.",
      "whyWrong": {
        "c": "Le pare-feu observe le réseau, pas le poste.",
        "a": "La messagerie n’héberge pas d’EDR.",
        "b": "Ce n’est pas un terminal à protéger par un EDR."
      }
    },
    "isi-q17": {
      "type": "truefalse",
      "correct": true,
      "explanation": "L’isolement à distance est une capacité classique d’un EDR : il coupe les communications du poste tout en gardant le lien avec la console, ce qui préserve les preuves."
    },
    "isi-q18": {
      "type": "short",
      "accepted": [
        "siem",
        "le siem"
      ],
      "explanation": "SIEM : Security Information and Event Management. Il collecte, normalise, conserve et corrèle les journaux, puis génère des alertes."
    },
    "isi-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "Une règle décrit à l’avance ce qui mérite une alerte, par exemple plusieurs échecs de connexion en peu de temps. Elle équilibre alertes inutiles et attaques manquées.",
      "whyWrong": {
        "a": "Une règle technique ne s’impose pas aux attaquants.",
        "d": "Un mot de passe n’est pas une règle.",
        "c": "Une sauvegarde n’émet pas d’alerte."
      }
    },
    "isi-q20": {
      "type": "single",
      "correct": "a",
      "explanation": "Le SOAR enchaîne des actions sur d’autres outils : enrichir une alerte, ouvrir un ticket, bloquer une adresse. Il libère du temps d’analyse sans remplacer les analystes.",
      "whyWrong": {
        "c": "Ce n’est pas un coffre-fort de mots de passe.",
        "d": "Les décisions à fort impact restent humaines.",
        "b": "Ce n’est pas un outil de chiffrement."
      }
    },
    "isi-q21": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un outil ne détecte que ce qu’il reçoit et ce que ses règles savent reconnaître. L’absence d’alerte peut venir d’une source non collectée ou d’une règle manquante."
    },
    "isi-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "Une alerte est un signal à qualifier. Une fois qualifiée comme réelle et nécessitant une réponse, elle devient un incident.",
      "whyWrong": {
        "a": "Les deux termes désignent des étapes différentes.",
        "b": "La gravité dépend du cas, pas du terme.",
        "c": "Un incident correspond à une alerte confirmée."
      }
    },
    "isi-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "Un faux négatif est une activité malveillante non détectée : c’est le cas le plus dangereux, car on ne sait pas qu’il existe.",
      "whyWrong": {
        "c": "Un faux positif est une alerte sur une activité légitime.",
        "b": "Un vrai négatif est une activité légitime sans alerte.",
        "d": "Un vrai positif est une attaque détectée."
      }
    },
    "isi-q24": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Une décision documentée peut être relue par un collègue, sert à régler les règles et permet de reprendre le dossier si l’alerte se révèle liée à un incident."
    },
    "isi-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "Le déplacement est impossible dans ce délai : les identifiants ont peut-être été volés. On escalade, on contacte la personne par un autre moyen et on ferme les sessions.",
      "whyWrong": {
        "b": "Rien ne permet de conclure à un faux positif certain.",
        "d": "Un écran en panne n’explique pas une connexion lointaine.",
        "a": "Un fuseau horaire ne déplace pas physiquement la connexion."
      }
    },
    "isi-q26": {
      "type": "single",
      "correct": "b",
      "explanation": "On commence par comprendre ce que dit l’alerte, puis on enrichit et on regarde autour avant de conclure. Clore ou isoler sans comprendre est risqué.",
      "whyWrong": {
        "c": "On ne clôt pas sans examen.",
        "d": "Une mesure aussi lourde se décide après analyse.",
        "a": "La communication externe n’est pas une étape de qualification."
      }
    },
    "isi-q27": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Savoir qui, sur quelle machine et d’où vient l’activité aide à décider. Un fond d’écran ne dit rien de la sécurité.",
      "whyWrong": {
        "d": "Cette information n’a aucun lien avec l’alerte."
      }
    },
    "isi-q28": {
      "type": "single",
      "correct": "d",
      "explanation": "Une règle bruyante fatigue les analystes, mais elle peut protéger contre de vraies menaces. On ajuste le seuil ou on ajoute une exclusion justifiée et datée.",
      "whyWrong": {
        "b": "Supprimer crée un angle mort.",
        "a": "Ignorer les alertes fait manquer les vraies.",
        "c": "Désactiver le SIEM supprime toute visibilité."
      }
    },
    "isi-q29": {
      "type": "single",
      "correct": "a",
      "explanation": "Le confinement arrête la propagation : isolement réseau, désactivation de comptes, blocage de flux.",
      "whyWrong": {
        "b": "La préparation a lieu avant l’incident.",
        "d": "Le retour d’expérience arrive à la fin.",
        "c": "Le rétablissement remet en service après le confinement et l’éradication."
      }
    },
    "isi-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "L’isolement stoppe la propagation tout en gardant les traces en mémoire. Éteindre ou rallumer peut les effacer ; payer n’est jamais une première réaction.",
      "whyWrong": {
        "b": "Éteindre puis rallumer peut effacer des preuves.",
        "d": "Brancher un périphérique peut aggraver la situation.",
        "a": "Payer ne garantit rien et ne se décide pas à chaud."
      }
    },
    "isi-q31": {
      "type": "truefalse",
      "correct": false,
      "explanation": "On l’isole du réseau pour préserver la mémoire, qui contient des traces précieuses. L’extinction immédiate les efface."
    },
    "isi-q32": {
      "type": "short",
      "accepted": [
        "retour d’expérience",
        "retour d’experience",
        "retour d'expérience",
        "retex",
        "rex",
        "le retour d’expérience"
      ],
      "explanation": "Le retour d’expérience identifie les causes, crée de nouvelles détections et met à jour les procédures : il transforme un incident en amélioration durable."
    },
    "isi-q33": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Consigner, prévenir et isoler préservent les preuves et lancent la réponse. Payer immédiatement n’est ni un réflexe de sécurité ni une garantie.",
      "whyWrong": {
        "c": "Le paiement ne se décide pas à chaud et ne garantit pas la récupération."
      }
    },
    "isi-q34": {
      "type": "open",
      "model": "Je lui demande de ne plus utiliser l’ordinateur, de le débrancher du réseau (câble, Wi-Fi) sans l’éteindre, de ne rien payer et de noter l’heure et le message affiché (idéalement une photo de l’écran). Je prévois de prévenir le responsable de la sécurité ou le SOC sans attendre, par téléphone si la messagerie peut être touchée. Ensuite, je consigne les faits et les heures, je vérifie si d’autres postes ou partages sont concernés, je protège les sauvegardes hors ligne et je suis la procédure de réponse à incident.",
      "criteria": [
        "L’isolement du poste sans extinction est indiqué.",
        "Prévenir la sécurité ou le SOC est mentionné.",
        "La prise de notes ou de preuves est prévue."
      ],
      "explanation": "Les premiers réflexes comptent : isoler, ne rien payer, noter, prévenir, puis suivre la procédure."
    },
    "isi-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "Les journaux et les postes contiennent des informations sensibles sur des personnes et l’entreprise. Elles ne sont partagées que dans le cadre de l’enquête.",
      "whyWrong": {
        "d": "La publication des journaux exposerait des informations sensibles.",
        "c": "On ne conserve pas les mots de passe croisés.",
        "a": "Envoyer à des tiers rompt la confidentialité."
      }
    },
    "isi-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "L’analyste limite l’accès et la consultation à ce que justifie la mission. Il respecte ainsi la vie privée des personnes.",
      "whyWrong": {
        "b": "Cela serait disproportionné.",
        "a": "La durée dépend de l’enquête, pas d’une règle fixe.",
        "c": "Le choix des journaux suit la mission."
      }
    },
    "isi-q37": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Signaler, tracer et rester honnête font partie de la déontologie. Riposter contre un tiers est illégal et sort du cadre d’une mission de défense.",
      "whyWrong": {
        "d": "La riposte est interdite : on défend, on ne se fait pas justice."
      }
    },
    "isi-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "L’article 33 du RGPD impose la notification à l’autorité de contrôle dans les 72 heures après la prise de connaissance, sauf si la violation est peu susceptible d’engendrer un risque pour les personnes."
    },
    "isi-q39": {
      "type": "short",
      "accepted": [
        "rgpd",
        "le rgpd",
        "gdpr",
        "règlement général sur la protection des données"
      ],
      "explanation": "Le RGPD (règlement général sur la protection des données) impose cette notification à l’autorité de contrôle ; en France, il s’agit de la CNIL."
    },
    "isi-q40": {
      "type": "open",
      "model": "Une alerte est un signal : une règle a jugé qu’un événement ou un ensemble d’événements méritait l’attention, mais cela peut être un faux positif. Un incident est une alerte qualifiée comme réelle, qui nécessite une réponse (confinement, investigation). Une compromission confirmée est un incident pour lequel on a la preuve qu’un attaquant a réussi à accéder à un système ou à des données. Une alerte n’est donc pas toujours un incident, et un incident n’est pas toujours une compromission.",
      "criteria": [
        "L’alerte est définie comme un signal à qualifier.",
        "L’incident est une alerte qualifiée nécessitant une réponse.",
        "La compromission confirmée suppose une preuve de réussite de l’attaquant."
      ],
      "explanation": "Ces trois niveaux ne se confondent pas : l’alerte se qualifie, l’incident se traite, la compromission se prouve."
    },
    "isi-q41": {
      "type": "single",
      "correct": "b",
      "explanation": "L’événement 4624 enregistre une ouverture de session réussie. Le 4625 correspond à un échec, le 4634 à une fermeture de session.",
      "whyWrong": {
        "a": "4625 est l’événement d’échec d’ouverture de session.",
        "c": "4634 enregistre la fermeture d’une session.",
        "d": "4672 signale l’attribution de privilèges spéciaux à une session."
      }
    },
    "isi-q42": {
      "type": "single",
      "correct": "a",
      "explanation": "La cadence, les comptes inexistants et la réussite finale depuis la même adresse décrivent une attaque automatisée dont une tentative a abouti : compromission possible, à traiter en priorité.",
      "whyWrong": {
        "c": "Un oubli ne produit pas des dizaines d’essais en secondes sur des comptes qui n’existent pas.",
        "b": "Une mise à jour n’engendre pas d’échecs d’authentification répétés.",
        "d": "Clôturer sans vérifier ignorerait un indice sérieux de compromission."
      }
    },
    "isi-q43": {
      "type": "single",
      "correct": "c",
      "explanation": "Quand le doute persiste et que l’impact est possible, on passe la main avec le contexte, les sources consultées et les raisons du doute, plutôt que de décider seul.",
      "whyWrong": {
        "b": "Clôturer un doute sérieux revient à parier que l’attaque n’existe pas.",
        "a": "Attendre laisse à un attaquant éventuel le temps d’agir.",
        "d": "Retirer une alerte supprime la trace et empêche tout suivi."
      }
    },
    "isi-q44": {
      "type": "short",
      "accepted": [
        "faux positif",
        "faux positifs"
      ],
      "explanation": "Un faux positif est une alerte sans menace réelle. On le clôture en consignant la raison, ce qui aide à améliorer les règles de détection."
    }
  },
};
