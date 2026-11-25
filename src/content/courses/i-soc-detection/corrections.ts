// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "i-soc-detection",
  questions: {
    "soc-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "Le SIEM (Security Information and Event Management) centralise, normalise et corrèle les journaux de sources multiples, et produit des alertes selon des règles. Le pare-feu est une source de journaux parmi d’autres.",
      "whyWrong": {
        "a": "Le pare-feu est une source de journaux, il ne corrèle pas celles des autres équipements.",
        "d": "Un gestionnaire de mots de passe ne produit pas d’alertes de sécurité corrélées.",
        "c": "Le serveur DNS fournit des requêtes à analyser, mais ne les corrèle pas."
      }
    },
    "soc-q2": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Un EDR collecte une télémétrie fine (processus, fichiers, registre, réseau), détecte des comportements suspects et permet d’agir à distance (isolement, arrêt de processus).",
      "whyWrong": {
        "c": "Le routage BGP relève des équipements réseau, pas d’un agent de sécurité sur poste."
      }
    },
    "soc-q3": {
      "type": "short",
      "accepted": [
        "soar",
        "le soar"
      ],
      "explanation": "SOAR : Security Orchestration, Automation and Response. Il automatise les tâches répétitives (enrichissement, ouverture de tickets, blocage) selon des playbooks, libérant du temps d’analyse."
    },
    "soc-q4": {
      "type": "single",
      "correct": "a",
      "explanation": "Un faux négatif est une activité malveillante non détectée. C’est le cas le plus dangereux, car invisible : on le réduit en améliorant la couverture des journaux et des règles, et par la chasse aux menaces.",
      "whyWrong": {
        "d": "Un faux positif est une alerte sur une activité légitime.",
        "c": "Un vrai négatif est une activité légitime qui ne déclenche rien.",
        "b": "Un vrai positif est une attaque réelle qui déclenche une alerte."
      }
    },
    "soc-q5": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les attaques par fatigue MFA (notifications répétées jusqu’à acceptation), le vol de jetons de session et les proxys d’hameçonnage contournent la MFA classique. Le contexte (lieu, heure, appareil) reste à analyser."
    },
    "soc-q6": {
      "type": "single",
      "correct": "c",
      "explanation": "Aucun déplacement physique ne permet de passer de Lyon à Singapour en 40 minutes. Il faut toutefois vérifier les explications légitimes (VPN d’entreprise sortant à l’étranger, relais cloud) avant de conclure.",
      "whyWrong": {
        "a": "La pulvérisation consiste à tester un mot de passe courant sur de nombreux comptes.",
        "b": "Un déni de service vise la disponibilité, pas l’authentification d’un compte.",
        "d": "Le mouvement latéral décrit le déplacement d’un attaquant d’une machine à l’autre."
      }
    },
    "soc-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "Une clôture documentée permet la revue par un pair, l’amélioration des règles (réduction du bruit) et la reprise rapide si l’alerte se révèle plus tard liée à un incident.",
      "whyWrong": {
        "b": "Sans trace, l’analyse ne peut être ni relue ni réutilisée.",
        "a": "On règle la règle (exclusion documentée) ; on ne la supprime pas sur une seule alerte.",
        "c": "Le message à l’utilisateur ne remplace pas la documentation de la décision."
      }
    },
    "soc-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "Repérer presque toutes les attaques = peu de faux négatifs = rappel élevé. Beaucoup d’alertes injustifiées = beaucoup de faux positifs = précision basse. Précision et rappel évoluent souvent à l’inverse : régler une règle, c’est choisir ce compromis.",
      "whyWrong": {
        "b": "Ce serait une règle très spécifique qui manque des attaques, l’inverse de l’énoncé.",
        "a": "Des faux positifs nombreux excluent une précision élevée.",
        "d": "Les alertes injustifiées sont justement des faux positifs."
      }
    },
    "soc-q7": {
      "type": "single",
      "correct": "b",
      "explanation": "Une empreinte change en recompilant, une IP ou un domaine en quelques minutes. Changer ses techniques oblige l’attaquant à réapprendre et réoutiller : c’est le sommet de la pyramide de la douleur.",
      "whyWrong": {
        "c": "Une empreinte change dès qu’on recompile le fichier.",
        "d": "Une adresse IP se remplace en quelques minutes.",
        "a": "Un domaine se remplace aisément et à faible coût."
      }
    },
    "soc-q8": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les tactiques ATT&CK (accès initial, exécution, persistance, élévation de privilèges, contournement des défenses, accès aux identifiants, découverte, mouvement latéral, collecte, commande et contrôle, exfiltration, impact…) représentent les objectifs ; chaque technique y est rattachée."
    },
    "soc-q9": {
      "type": "short",
      "accepted": [
        "sigma",
        "règles sigma",
        "le format sigma"
      ],
      "explanation": "Sigma décrit une règle (source de journaux, sélection, condition) en YAML. Des convertisseurs la traduisent vers les langages de requête des SIEM (Splunk SPL, KQL, Elastic, etc.)."
    },
    "soc-q10": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Empreintes, domaines et clés de registre précises sont des artefacts observables : des IOC.",
      "whyWrong": {
        "a": "Une technique décrit un comportement : c’est une TTP, pas un IOC."
      }
    },
    "soc-q15": {
      "type": "open",
      "model": "Le pare-feu ne voit que des flux réseau à son passage : resteront invisibles l’hameçonnage et l’exécution de code sur les postes, l’élévation de privilèges locale, le vol d’identifiants, le mouvement latéral entre machines d’un même segment, l’abus de comptes légitimes et les attaques sur des services cloud ou SaaS. Priorités : 1) journaux Active Directory (authentifications, modifications de groupes) ; 2) télémétrie EDR ou Sysmon des postes et serveurs ; 3) journaux d’identité cloud (Entra ID, Google) et de messagerie ; 4) proxy web et DNS ; 5) VPN et accès distants.",
      "criteria": [
        "Au moins trois catégories d’attaques invisibles sont citées.",
        "Les journaux d’authentification (AD ou cloud) figurent parmi les priorités.",
        "La télémétrie des postes (EDR, Sysmon) est proposée."
      ],
      "explanation": "La couverture de détection se pense à partir des techniques à détecter, puis des sources qui les rendent visibles."
    },
    "soc-q11": {
      "type": "single",
      "correct": "a",
      "explanation": "Le confinement vise à stopper la propagation : isolement réseau, désactivation de comptes, blocage de flux. L’éradication (retrait de la menace) vient ensuite.",
      "whyWrong": {
        "d": "La préparation se déroule avant l’incident.",
        "b": "Le retour d’expérience vient après le rétablissement.",
        "c": "Le rétablissement remet en service, après le confinement et l’éradication."
      }
    },
    "soc-q12": {
      "type": "truefalse",
      "correct": true,
      "explanation": "L’article 33 du RGPD impose la notification à l’autorité de contrôle (la CNIL en France) dans les 72 heures, sauf si la violation est peu susceptible d’engendrer un risque pour les droits et libertés des personnes. La documentation interne de la violation est obligatoire dans tous les cas."
    },
    "soc-q13": {
      "type": "open",
      "model": "1) Isoler immédiatement le serveur via l’EDR (le chiffrement en cours justifie l’urgence), sans l’éteindre, pour préserver la mémoire. 2) Identifier le compte et le processus à l’origine du chiffrement ; désactiver ce compte. 3) Vérifier si d’autres hôtes présentent la même activité (requête EDR/SIEM) et les isoler. 4) Protéger les sauvegardes : vérifier qu’elles sont hors ligne ou immuables, couper les accès de l’attaquant aux serveurs de sauvegarde. 5) Déclencher la cellule de crise selon le playbook (direction, juridique, communication) via un canal hors bande. 6) Commencer la chronologie et la collecte de preuves.",
      "criteria": [
        "L’isolement du serveur est la première action, sans extinction.",
        "Le compte ou le processus responsable est identifié et neutralisé.",
        "La recherche d’autres hôtes touchés est prévue.",
        "La protection des sauvegardes est mentionnée.",
        "L’escalade vers la gestion de crise est prévue."
      ],
      "explanation": "Face à un chiffrement en cours, le confinement prime : chaque minute compte. La préservation des sauvegardes est souvent ce qui décide de la reprise."
    },
    "soc-q14": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "La préparation regroupe tout ce qui doit exister avant l’incident : playbooks testés, sauvegardes, journaux, contacts et moyens de communication de crise.",
      "whyWrong": {
        "c": "Supprimer la persistance relève de l’éradication, pendant l’incident."
      }
    },
    "soc-q18": {
      "type": "single",
      "correct": "d",
      "explanation": "L’événement 4720 est généré à la création d’un compte utilisateur. Le 4624 signale une ouverture de session réussie, le 4625 un échec et le 4688 la création d’un processus.",
      "whyWrong": {
        "a": "4625 signale un échec d’ouverture de session.",
        "c": "4688 signale la création d’un processus.",
        "b": "4624 signale une ouverture de session réussie."
      }
    },
    "soc-q19": {
      "type": "single",
      "correct": "d",
      "explanation": "Corréler des événements de plusieurs sources suppose des horodatages cohérents (NTP, de préférence en UTC). Sans cela, l’ordre des événements est faux et l’analyse peut conclure à tort.",
      "whyWrong": {
        "b": "La synchronisation n’a pas d’effet sur le volume des journaux.",
        "c": "Elle ne remplace ni la protection ni le chiffrement des journaux.",
        "a": "Le dédoublonnage relève de la corrélation, pas de l’horloge."
      }
    },
    "soc-q20": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le silence d’une source est un signal : le collecteur est tombé, une règle ne peut plus se déclencher, ou l’attaquant a désactivé la journalisation. On surveille la santé de la collecte."
    },
    "soc-q21": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Des journaux utiles sont horodatés correctement, complets et protégés (envoi hors de la machine, droits restreints). Tout collecter sans choix fait exploser les coûts et noie les signaux utiles.",
      "whyWrong": {
        "b": "Collecter sans discernement coûte cher et dilue les signaux ; on choisit les sources selon les techniques à couvrir."
      }
    },
    "soc-q22": {
      "type": "short",
      "accepted": [
        "normalisation",
        "la normalisation",
        "normaliser"
      ],
      "explanation": "La normalisation met des formats différents (pare-feu, Windows, cloud) sous un schéma commun, ce qui permet d’écrire des règles indépendantes de la source et de corréler plus facilement."
    },
    "soc-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "Une règle ne sert à rien sans donnée : sans journal Sécurité (ou télémétrie EDR) des postes, la technique n’est pas couverte. On cartographie technique, source de journaux et règle pour repérer les lacunes.",
      "whyWrong": {
        "c": "Une règle sans source de données ne se déclenche jamais.",
        "d": "Le pare-feu ne voit pas les actions locales sur un poste.",
        "b": "La création de comptes locaux est une technique de persistance connue (ATT&CK)."
      }
    },
    "soc-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "Une bonne règle part d’une hypothèse précise (quelle technique, quelle trace dans quelle source). On vérifie ensuite que la donnée existe, puis on écrit, teste, règle et déploie.",
      "whyWrong": {
        "a": "La gravité se décide une fois la règle comprise et testée.",
        "d": "Déployer sans test produit du bruit ou des angles morts.",
        "c": "Les règles voisines peuvent être complémentaires : on ne les désactive pas par principe."
      }
    },
    "soc-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "On rejoue l’activité visée pour vérifier que la règle se déclenche, puis on l’applique à des données historiques pour estimer les faux positifs. Cela évite les alertes inutiles et les angles morts.",
      "whyWrong": {
        "d": "Le test ne touche pas aux journaux conservés.",
        "b": "La documentation reste nécessaire pour la revue et le réglage.",
        "a": "Une règle aide les analystes, elle ne les remplace pas."
      }
    },
    "soc-q26": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le mode observation (alerte non notifiée) produit des statistiques sur les déclenchements réels : on règle les seuils et les exclusions avant de solliciter les analystes."
    },
    "soc-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "Le MTTD mesure la capacité à voir une attaque rapidement. Le MTTR mesure le délai de réponse ou de résolution ; le volume d’alertes et les coûts sont d’autres indicateurs.",
      "whyWrong": {
        "b": "Ce nombre mesure la charge, pas le délai de détection.",
        "a": "C’est la durée de rétablissement, relevant du MTTR.",
        "d": "Le coût n’est pas un indicateur de détection."
      }
    },
    "soc-q28": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "On réduit le bruit en réglant les règles (exclusions documentées et datées), en regroupant les alertes liées et en mesurant la précision. Désactiver sans analyse peut créer des angles morts.",
      "whyWrong": {
        "d": "Une règle bruyante peut protéger contre une vraie menace : on la règle, on ne la supprime pas sans étude."
      }
    },
    "soc-q29": {
      "type": "short",
      "accepted": [
        "liste d’exclusion",
        "liste d’exclusions",
        "liste blanche",
        "allowlist",
        "whitelist",
        "exclusion",
        "exclusions",
        "liste d’autorisation",
        "liste d’exceptions"
      ],
      "explanation": "Une liste d’exclusions (ou liste d’autorisation) retire du bruit une activité légitime connue. Elle doit être documentée, datée et réexaminée : une exclusion trop large crée un angle mort."
    },
    "soc-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "Si l’exclusion couvre plus que l’activité légitime visée (par exemple tout un répertoire ou tout un compte), un attaquant peut s’y glisser sans déclencher d’alerte. On documente, on date et on réexamine.",
      "whyWrong": {
        "a": "C’est l’inverse : moins d’alertes, donc plus de risque de faux négatifs.",
        "b": "Le SIEM applique l’exclusion sans difficulté ; le risque est fonctionnel.",
        "c": "Les journaux restent collectés, mais l’alerte n’est plus déclenchée."
      }
    },
    "soc-q31": {
      "type": "single",
      "correct": "a",
      "explanation": "Le N1 traite le flux d’alertes : enrichissement, qualification, clôture documentée ou escalade vers le N2 pour une investigation plus poussée.",
      "whyWrong": {
        "d": "L’architecture réseau relève d’autres équipes.",
        "c": "Les contrats ne font pas partie du triage.",
        "b": "Le développement applicatif n’est pas un rôle du SOC."
      }
    },
    "soc-q32": {
      "type": "single",
      "correct": "b",
      "explanation": "L’EDR est un agent sur le poste ou le serveur (processus, fichiers, registre) ; l’IDS ou NDR analyse le trafic réseau. Les deux sont complémentaires.",
      "whyWrong": {
        "d": "C’est l’inverse.",
        "c": "Un EDR n’est pas un outil de sauvegarde.",
        "a": "L’IDS ne remplace pas les journaux d’authentification."
      }
    },
    "soc-q33": {
      "type": "single",
      "correct": "b",
      "explanation": "Le contexte (processus parent, compte, actions juste avant et après) permet de distinguer un script d’administration d’une exécution malveillante. On n’éteint pas la machine ni ne clôt sans vérifier.",
      "whyWrong": {
        "c": "PowerShell est légitime, mais aussi très utilisé par les attaquants : on vérifie.",
        "a": "Un redémarrage détruit la mémoire et des preuves.",
        "d": "Attendre laisse l’éventuelle attaque progresser."
      }
    },
    "soc-q34": {
      "type": "single",
      "correct": "a",
      "explanation": "La gravité combine impact et probabilité. Un contrôleur de domaine détient l’annuaire : l’impact est bien plus élevé. À probabilité égale, on commence par lui.",
      "whyWrong": {
        "b": "L’impact d’un poste de test est faible.",
        "d": "L’ordre d’arrivée ne reflète pas le risque.",
        "c": "Deux alertes identiques n’ont pas le même impact selon l’actif concerné."
      }
    },
    "soc-q35": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Une alerte est un signal à qualifier : elle peut être un faux positif. Un incident est une alerte qualifiée nécessitant une réponse ; une compromission confirmée suppose la preuve que l’attaquant a réussi."
    },
    "soc-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "Une tactique répond à « pourquoi » (accès initial, persistance, mouvement latéral…). Une technique décrit « comment » l’objectif est atteint, avec des variantes appelées sous-techniques.",
      "whyWrong": {
        "b": "Un logiciel malveillant est un outil, pas une tactique.",
        "d": "Une adresse IP est un IOC.",
        "a": "ATT&CK décrit les comportements, pas les correctifs."
      }
    },
    "soc-q37": {
      "type": "short",
      "accepted": [
        "éradication",
        "eradication",
        "l’éradication",
        "l’eradication"
      ],
      "explanation": "L’éradication supprime ce que l’attaquant a laissé (comptes, tâches planifiées, logiciels) et corrige la faille exploitée. Elle suit le confinement et précède le rétablissement."
    },
    "soc-q38": {
      "type": "single",
      "correct": "d",
      "explanation": "PowerShell est un outil d’administration très utilisé : sans contexte (processus parent, arguments, utilisateur), la règle déclenche sans cesse. On affine la sélection, comme pour PowerShell lancé par Office.",
      "whyWrong": {
        "c": "Sigma se convertit sans difficulté pour une règle simple.",
        "a": "La règle ne distingue pas le bien du mal, elle ne dépend pas d’une liste de menaces.",
        "b": "Elle se déclenchera très souvent, au contraire."
      }
    },
    "soc-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Le retour d’expérience tire les leçons : causes racines, nouvelles détections, playbooks mis à jour. L’isolement des machines relève du confinement, pendant l’incident.",
      "whyWrong": {
        "d": "L’isolement appartient à la phase de confinement."
      }
    },
    "soc-q40": {
      "type": "single",
      "correct": "a",
      "explanation": "Un canal hors bande (téléphones, messagerie indépendante) protège les échanges de crise d’un attaquant qui lirait les courriels. Il se prépare et se teste avant l’incident.",
      "whyWrong": {
        "b": "La messagerie compromise peut être lue par l’attaquant.",
        "d": "Une communication publique n’est pas un canal de crise interne.",
        "c": "Sans coordination, la réponse est inefficace."
      }
    }
  },
};
