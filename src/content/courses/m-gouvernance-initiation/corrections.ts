// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "m-gouvernance-initiation",
  questions: {
    "mgi-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "La gouvernance consiste à décider, de façon argumentée, où investir et quelles règles appliquer, puis à vérifier dans la durée que les décisions sont appliquées.",
      "whyWrong": {
        "a": "Les outils ne suffisent pas sans décisions.",
        "d": "Elle concerne toute l’organisation.",
        "c": "Interdire Internet n’est pas gouverner : c’est une restriction sans pilotage."
      }
    },
    "mgi-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "La confidentialité réserve l’information aux personnes autorisées, l’intégrité garantit qu’elle n’est pas altérée, la disponibilité qu’elle est accessible quand il le faut.",
      "whyWrong": {
        "d": "Ce ne sont pas des objectifs de sécurité.",
        "b": "Ce sont des outils, pas des objectifs.",
        "c": "Ce ne sont pas les trois objectifs."
      }
    },
    "mgi-q3": {
      "type": "single",
      "correct": "c",
      "explanation": "Un service que l’on ne peut plus utiliser met en cause la disponibilité, même si les données restent intactes et secrètes.",
      "whyWrong": {
        "b": "La confidentialité concerne l’accès non autorisé, pas l’indisponibilité.",
        "a": "L’intégrité concerne l’exactitude des données, pas leur accessibilité.",
        "d": "La traçabilité concerne la conservation des preuves, pas la disponibilité."
      }
    },
    "mgi-q4": {
      "type": "single",
      "correct": "d",
      "explanation": "L’intégrité garantit qu’une information n’a pas été modifiée de façon non autorisée. Une facture falsifiée en est un exemple.",
      "whyWrong": {
        "b": "Le document reste accessible.",
        "c": "Rien n’a été divulgué.",
        "a": "Ce n’est pas un objectif de sécurité."
      }
    },
    "mgi-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "L’information existe sous toutes ses formes : fichier, papier, parole. Un dossier oublié dans un train ou une conversation entendue dans un café sont aussi des risques."
    },
    "mgi-q6": {
      "type": "short",
      "accepted": [
        "confidentialité",
        "confidentialite",
        "la confidentialité"
      ],
      "explanation": "La confidentialité est l’un des trois objectifs de la sécurité de l’information, avec l’intégrité et la disponibilité."
    },
    "mgi-q7": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Protéger les dossiers, contrôler l’accès aux locaux et sauvegarder participent à la sécurité de l’information. La couleur d’un site n’en relève pas.",
      "whyWrong": {
        "c": "Ce choix esthétique n’affecte pas la sécurité."
      }
    },
    "mgi-q8": {
      "type": "single",
      "correct": "b",
      "explanation": "Un risque est la possibilité qu’un événement survienne et cause un dommage. Il se décrit par sa vraisemblance et sa gravité.",
      "whyWrong": {
        "a": "Un virus installé est un incident, pas la définition d’un risque.",
        "d": "Un mot de passe oublié est un événement, pas la notion de risque.",
        "c": "Un coût d’achat n’est pas un risque de sécurité."
      }
    },
    "mgi-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "Une vulnérabilité est une faiblesse (logiciel non corrigé, mot de passe faible, procédure absente) qu’une menace peut exploiter.",
      "whyWrong": {
        "b": "C’est une menace.",
        "d": "C’est une mesure de protection.",
        "a": "C’est une mesure de protection."
      }
    },
    "mgi-q10": {
      "type": "single",
      "correct": "d",
      "explanation": "La vraisemblance indique à quel point le scénario est probable, la gravité l’ampleur de ses conséquences. Leur combinaison donne la priorité.",
      "whyWrong": {
        "b": "Ce ne sont pas des critères de risque.",
        "a": "Ce ne sont pas des critères de risque.",
        "c": "Ce ne sont pas des critères de risque."
      }
    },
    "mgi-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le risque zéro n’existe pas. On réduit les risques à un niveau acceptable, et la direction accepte formellement ce qui reste."
    },
    "mgi-q12": {
      "type": "short",
      "accepted": [
        "réduire",
        "reduire",
        "réduction"
      ],
      "explanation": "Réduire est le traitement le plus courant : mises à jour, authentification renforcée, sauvegardes. Les autres options sont transférer, éviter et accepter."
    },
    "mgi-q13": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Réduire, transférer et éviter sont des décisions assumées, tout comme accepter formellement. Ignorer un risque n’est pas une décision.",
      "whyWrong": {
        "a": "Ignorer sans décision revient à subir le risque."
      }
    },
    "mgi-q14": {
      "type": "open",
      "model": "La gravité dépend de ce que contient l’ordinateur (nombre de clients, sensibilité des données, obligation de notification) et de sa protection : un disque chiffré et un mot de passe robuste rendent la lecture quasi impossible et la gravité faible ; un disque non chiffré avec des fichiers clients en clair la rend élevée. La vraisemblance dépend des déplacements et des habitudes. Mesures : chiffrer systématiquement les disques, limiter les données stockées localement au profit d’un espace sécurisé, activer l’effacement à distance, imposer une authentification forte, et prévoir une procédure de signalement immédiat de la perte pour prévenir le responsable sécurité et évaluer la notification à la CNIL.",
      "criteria": [
        "La gravité est reliée à la nature des données et à leur protection.",
        "Le chiffrement du disque est cité.",
        "Au moins trois mesures concrètes sont proposées.",
        "Le signalement immédiat de la perte est mentionné."
      ],
      "explanation": "Un même incident est très grave ou presque anodin selon que les données étaient chiffrées ou non."
    },
    "mgi-q15": {
      "type": "single",
      "correct": "a",
      "explanation": "La charte informe chacun de ce qui est permis, interdit et attendu : usage des moyens, mots de passe, signalement des incidents.",
      "whyWrong": {
        "c": "Elle ne remplace aucun outil.",
        "d": "Le calcul des salaires est sans rapport avec la charte.",
        "b": "Elle ne chiffre rien."
      }
    },
    "mgi-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "La direction fixe le cadre, l’équipe sécurité le pilote, mais chaque personne contribue : mots de passe, signalement, respect des règles.",
      "whyWrong": {
        "a": "Elle ne peut pas tout faire seule.",
        "b": "La direction ne peut pas tout porter seule.",
        "c": "Des rôles sont définis."
      }
    },
    "mgi-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "Une règle trop compliquée ou irréaliste est contournée. Elle doit être claire, justifiée et réalisable dans le travail quotidien.",
      "whyWrong": {
        "d": "Une règle de sécurité n’a pas pour but d’occuper les équipes.",
        "b": "Réduire les effectifs n’est pas la finalité d’une règle de sécurité.",
        "a": "Une règle ne vise pas à éviter les vérifications : elle les facilite."
      }
    },
    "mgi-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "Elle définit et fait appliquer la politique, suit les risques et rend compte à la direction. Elle s’appuie sur les équipes techniques sans les remplacer.",
      "whyWrong": {
        "a": "Réparer les imprimantes relève du support, pas de la sécurité de l’information.",
        "d": "Le recrutement relève des ressources humaines.",
        "c": "La paie ne relève pas de la sécurité de l’information."
      }
    },
    "mgi-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Si la direction s’en dispense, les équipes la jugent facultative. L’exemple donné par les responsables est déterminant."
    },
    "mgi-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Mot de passe personnel, signalement et verrouillage du poste sont des règles de base. Prêter un badge supprime la traçabilité des accès.",
      "whyWrong": {
        "c": "Un badge est personnel : le prêter fausse la traçabilité."
      }
    },
    "mgi-q21": {
      "type": "short",
      "accepted": [
        "rssi",
        "le rssi"
      ],
      "explanation": "Le RSSI pilote la sécurité de l’information, conseille la direction et suit les risques et les incidents."
    },
    "mgi-q22": {
      "type": "single",
      "correct": "a",
      "explanation": "Toutes les données n’ont pas la même valeur ni les mêmes risques. La classification relie chaque niveau à des règles : accès, stockage, chiffrement, destruction.",
      "whyWrong": {
        "b": "Le tri alphabétique ne protège pas les données.",
        "d": "Classer les données n’a pas pour but de les supprimer.",
        "c": "Classer ne revient pas à tout rendre public."
      }
    },
    "mgi-q23": {
      "type": "single",
      "correct": "c",
      "explanation": "Une donnée personnelle permet d’identifier une personne, directement ou indirectement : nom, adresse, numéro de téléphone, identifiant en ligne.",
      "whyWrong": {
        "a": "Elle ne concerne pas une personne.",
        "b": "Elle ne concerne pas une personne.",
        "d": "Elle ne concerne pas une personne."
      }
    },
    "mgi-q24": {
      "type": "single",
      "correct": "d",
      "explanation": "Le règlement général sur la protection des données encadre la collecte et l’usage des données personnelles et impose des mesures de sécurité adaptées au risque.",
      "whyWrong": {
        "a": "Le RGPD ne protège pas que les secrets industriels.",
        "c": "Il couvre toutes les données personnelles.",
        "b": "Il ne protège pas les logiciels contre la copie."
      }
    },
    "mgi-q25": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le RGPD prévoit une notification dans les meilleurs délais et, si possible, 72 heures au plus tard, sauf si la violation ne présente pas de risque pour les personnes."
    },
    "mgi-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un document laissé à la vue de tous peut être lu ou copié. On récupère ses impressions immédiatement, ou on utilise une impression sécurisée par badge."
    },
    "mgi-q27": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Le chiffrement, la limitation des accès et la sauvegarde protègent la confidentialité, l’intégrité et la disponibilité. Une messagerie personnelle échappe à tout contrôle.",
      "whyWrong": {
        "c": "Elle échappe au contrôle de l’organisation."
      }
    },
    "mgi-q28": {
      "type": "short",
      "accepted": [
        "cnil",
        "la cnil"
      ],
      "explanation": "La CNIL (Commission nationale de l’informatique et des libertés) reçoit les notifications de violations et contrôle l’application du RGPD."
    },
    "mgi-q29": {
      "type": "single",
      "correct": "a",
      "explanation": "L’hameçonnage exploite la confiance et l’urgence pour pousser à cliquer, ouvrir un fichier ou donner un mot de passe. Les personnes sont la cible, d’où l’importance de la sensibilisation.",
      "whyWrong": {
        "b": "Un câble sectionné est une panne, pas un point d’entrée d’attaque.",
        "c": "Une panne de courant est un incident de disponibilité.",
        "d": "Un écran mal réglé n’est pas un point d’entrée."
      }
    },
    "mgi-q30": {
      "type": "single",
      "correct": "b",
      "explanation": "L’urgence est un signal d’alerte. On vérifie la demande par un autre canal connu (appel au numéro habituel), jamais par les coordonnées du message.",
      "whyWrong": {
        "d": "C’est le piège de la fraude.",
        "a": "Cela donnerait l’accès à l’attaquant.",
        "c": "On propagerait le piège."
      }
    },
    "mgi-q31": {
      "type": "single",
      "correct": "a",
      "explanation": "Les méthodes des attaquants changent et les bons réflexes s’oublient. Des formats courts et réguliers maintiennent la vigilance.",
      "whyWrong": {
        "c": "La sensibilisation ne sert pas à remplir des agendas.",
        "d": "Aucune loi n’interdit « d’oublier » : l’enjeu est l’évolution des menaces.",
        "b": "Elle ne remplace pas les outils de sécurité : elle les complète."
      }
    },
    "mgi-q32": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La sanction pousse à cacher les erreurs et retarde la réaction. Une culture du signalement sans sanction permet de contenir l’incident plus tôt."
    },
    "mgi-q33": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "L’urgence, un expéditeur inhabituel et une demande sensible sont des signaux classiques. Un logo se copie facilement : il ne prouve pas l’origine.",
      "whyWrong": {
        "c": "Un logo est facile à copier : ce n’est pas une preuve d’authenticité."
      }
    },
    "mgi-q34": {
      "type": "open",
      "model": "Le collègue doit prévenir immédiatement l’équipe sécurité ou le support, sans honte ni attente, et changer son mot de passe depuis un poste sûr ; il peut aussi couper la connexion du poste si on le lui demande. L’organisation doit réagir vite : désactiver ou réinitialiser le compte, révoquer les sessions, vérifier l’activité récente (connexions inhabituelles, règles de transfert de courriels), rechercher d’autres personnes ayant reçu le message, bloquer l’adresse ou le site, et conserver les traces. Elle doit éviter de sanctionner la personne qui signale, pour encourager les signalements, et tirer un enseignement : sensibilisation, authentification multifacteur, filtrage.",
      "criteria": [
        "Le signalement immédiat par le collègue est demandé.",
        "La réinitialisation du mot de passe et des sessions est citée.",
        "La vérification de l’activité et la recherche d’autres victimes sont mentionnées.",
        "L’absence de sanction et un enseignement sont évoqués."
      ],
      "explanation": "La rapidité du signalement et la réponse de l’organisation déterminent l’ampleur des dégâts."
    },
    "mgi-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "Un signalement rapide permet de contenir l’attaque. On évite d’effacer des éléments, qui servent de preuves.",
      "whyWrong": {
        "c": "Les alarmes servent à détecter.",
        "a": "Cela détruirait des preuves.",
        "b": "L’attente aggrave l’impact."
      }
    },
    "mgi-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "Une copie déconnectée ne peut pas être chiffrée ou supprimée par un rançongiciel qui a atteint le réseau : elle permet de reprendre sans payer.",
      "whyWrong": {
        "d": "Une sauvegarde n’accélère pas la connexion Internet.",
        "c": "Elle ne remplace pas les mots de passe.",
        "a": "Elle ne chiffre pas le courrier."
      }
    },
    "mgi-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "Journaux, messages et copies permettent d’identifier la cause, l’étendue et les données touchées, et d’en tirer des enseignements.",
      "whyWrong": {
        "a": "Remplir l’espace disque n’est pas un objectif.",
        "b": "Les traces ne servent pas à punir mais à comprendre.",
        "d": "Conserver des traces ne retarde pas la reprise : il l’éclaire."
      }
    },
    "mgi-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un exercice sur table révèle les contacts manquants, les décisions floues et les délais irréalistes sans aucun risque pour l’activité."
    },
    "mgi-q39": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "On traite la cause, on informe qui doit l’être et on améliore les pratiques. Oublier l’incident garantit qu’il se reproduira.",
      "whyWrong": {
        "b": "Sans enseignement, l’incident se reproduira."
      }
    },
    "mgi-q40": {
      "type": "short",
      "accepted": [
        "pca",
        "le pca"
      ],
      "explanation": "Le plan de continuité d’activité décrit comment maintenir les activités essentielles pendant un incident, souvent en mode dégradé."
    },
    "mgi-q41": {
      "type": "single",
      "correct": "c",
      "explanation": "Le niveau est le produit des deux notes : 3 × 4 = 12. Il sert à classer les risques et à décider de la réponse (réduire, éviter, transférer, accepter).",
      "whyWrong": {
        "d": "7 est la somme des deux notes, pas leur produit.",
        "a": "16 serait le maximum, avec 4 × 4.",
        "b": "Le niveau n’est pas 1 : les deux notes sont bien plus élevées."
      }
    },
    "mgi-q42": {
      "type": "single",
      "correct": "b",
      "explanation": "Le RGPD prévoit une notification dans les 72 heures après la prise de connaissance de la violation, lorsque celle-ci présente un risque pour les personnes.",
      "whyWrong": {
        "a": "Le délai est de 72 heures, et court à partir de la connaissance de la violation.",
        "d": "Attendre la clôture de l’incident dépasse largement le délai.",
        "c": "Un délai précis est bien prévu par le règlement."
      }
    },
    "mgi-q43": {
      "type": "short",
      "accepted": [
        "transférer",
        "transferer"
      ],
      "explanation": "Transférer un risque, c’est en déplacer tout ou partie des conséquences vers un tiers (assurance, prestataire) ; la responsabilité d’ensemble reste à l’organisation."
    }
  },
};
