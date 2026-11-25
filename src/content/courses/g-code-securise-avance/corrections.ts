// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "g-code-securise-avance",
  questions: {
    "gca-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "L’analyse suit les données depuis les sources non fiables (requête, fichier) jusqu’aux puits sensibles (commande, SQL), en tenant compte des assainisseurs rencontrés en chemin. Elle réduit les alertes aux flux réellement atteignables.",
      "whyWrong": {
        "c": "L’analyse ne chiffre rien.",
        "b": "Compter des lignes est une métrique, pas une analyse de flux.",
        "a": "Supprimer du code mort est une autre tâche."
      }
    },
    "gca-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "Un faux positif est une alerte sans défaut réel. Trop fréquents, ils usent l’attention et font ignorer l’outil. À l’inverse, un faux négatif est un défaut réel non signalé.",
      "whyWrong": {
        "d": "C’est un faux négatif.",
        "a": "Une alerte correcte de faible gravité reste un vrai positif.",
        "b": "Un défaut corrigé n’est plus signalé."
      }
    },
    "gca-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "L’analyse approxime le comportement du programme et peut manquer des chemins dynamiques, de la réflexion ou des erreurs de logique. L’absence d’alerte n’est pas une preuve : c’est un faux négatif possible."
    },
    "gca-q4": {
      "type": "short",
      "accepted": [
        "SARIF",
        "sarif"
      ],
      "explanation": "SARIF (Static Analysis Results Interchange Format) permet de rassembler les résultats de plusieurs outils dans une même plateforme et de les afficher dans les revues de code."
    },
    "gca-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "Les règles génériques ignorent vos fonctions internes (accès aux fichiers, appels de service). Une règle sur mesure détecte les usages dangereux propres à votre base de code et empêche leur retour.",
      "whyWrong": {
        "d": "La vitesse n’est pas l’objectif.",
        "c": "Écrire une règle ne dispense pas de corriger.",
        "b": "L’analyse ne remplace pas la revue."
      }
    },
    "gca-q6": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Trier, bloquer sur le nouveau et écrire des règles ciblées gardent l’outil crédible. Désactiver chaque règle qui gêne supprime la détection.",
      "whyWrong": {
        "b": "Désactiver une règle entière à cause de quelques faux positifs supprime aussi les vrais positifs."
      }
    },
    "gca-q7": {
      "type": "single",
      "correct": "b",
      "explanation": "Réflexion, chargement dynamique, configuration et chemins d’exécution conditionnels échappent souvent à l’analyse. D’où l’intérêt de la combiner avec le fuzzing, les tests et la revue.",
      "whyWrong": {
        "d": "Aucune limite de ce type n’existe en général.",
        "a": "L’analyse s’applique au code à contrôler.",
        "c": "Elle poursuit l’analyse du projet."
      }
    },
    "gca-q8": {
      "type": "single",
      "correct": "a",
      "explanation": "Le fuzzing envoie des quantités d’entrées inattendues pour faire planter ou dérailler le programme. Il révèle des cas limites que personne n’a imaginés.",
      "whyWrong": {
        "d": "C’est de la revue de code.",
        "b": "C’est un test de charge.",
        "c": "Le fuzzing ne chiffre rien."
      }
    },
    "gca-q9": {
      "type": "single",
      "correct": "b",
      "explanation": "Le programme est instrumenté : le fuzzeur voit quels chemins chaque entrée parcourt, garde celles qui en ouvrent de nouveaux et les mute pour aller plus loin.",
      "whyWrong": {
        "d": "La longueur n’est pas le critère.",
        "c": "Le but est de découvrir de nouveaux chemins.",
        "a": "Le fuzzing se poursuit après un plantage."
      }
    },
    "gca-q10": {
      "type": "short",
      "accepted": [
        "libFuzzer",
        "libfuzzer"
      ],
      "explanation": "libFuzzer appelle en boucle `LLVMFuzzerTestOneInput` avec des entrées mutées, guidées par la couverture. AFL++ est un autre outil de référence."
    },
    "gca-q11": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un débordement ou un use-after-free peut ne pas planter immédiatement. ASan et UBSan transforment ces erreurs silencieuses en arrêt explicite, ce qui multiplie les défauts trouvés."
    },
    "gca-q12": {
      "type": "single",
      "correct": "d",
      "explanation": "Le harnais fait le lien entre le fuzzeur et l’API visée : il reçoit un tableau d’octets et appelle la fonction d’analyse, sans état partagé entre les appels.",
      "whyWrong": {
        "c": "Ce n’est pas du matériel.",
        "a": "Le rapport est le résultat, pas le harnais.",
        "b": "Ce n’est pas une option de compilation."
      }
    },
    "gca-q13": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Le corpus aide à atteindre des états profonds, les sanitizers révèlent les erreurs silencieuses et l’exécution continue avec triage transforme les plantages en corrections. Un seul fichier fixe n’explore presque rien.",
      "whyWrong": {
        "c": "Sans mutation, un seul fichier ne teste qu’un seul chemin."
      }
    },
    "gca-q14": {
      "type": "single",
      "correct": "c",
      "explanation": "Un outil comme Hypothesis génère de nombreuses entrées respectant une description et vérifie qu’une propriété (par exemple « l’analyseur ne plante jamais ») reste vraie, puis réduit les contre-exemples.",
      "whyWrong": {
        "d": "Un testeur manuel ne génère pas des milliers de cas.",
        "b": "Un test de charge mesure la performance.",
        "a": "Les tests d’interface visent l’affichage."
      }
    },
    "gca-q15": {
      "type": "single",
      "correct": "b",
      "explanation": "Suivre les données de leur source jusqu’aux puits (fichier, commande, base, réseau) oriente la relecture sur ce qui compte et vérifie à chaque étape ce qui protège.",
      "whyWrong": {
        "d": "Une lecture sans objectif laisse passer l’essentiel.",
        "c": "Le style n’est pas la sécurité.",
        "a": "Les outils manquent des erreurs de logique."
      }
    },
    "gca-q16": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un outil ne sait pas qui a le droit de voir quel objet. Ces défauts relèvent de la logique métier : on les trouve en relisant les contrôles et en testant avec plusieurs comptes."
    },
    "gca-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "Entre `exists` et `open`, le fichier peut être remplacé (par exemple par un lien symbolique). On ouvre directement et l’on traite l’erreur, plutôt que de vérifier d’abord.",
      "whyWrong": {
        "b": "Aucune base de données n’intervient.",
        "a": "Le défaut est un TOCTOU, pas une fuite.",
        "c": "Aucun calcul de taille n’est en jeu."
      }
    },
    "gca-q18": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Authentification, autorisation, validation, erreurs et journaux couvrent les défauts les plus fréquents d’une route. Le nombre de commentaires n’a aucun rapport avec la sécurité.",
      "whyWrong": {
        "a": "Les commentaires ne protègent pas la route."
      }
    },
    "gca-q19": {
      "type": "single",
      "correct": "a",
      "explanation": "Le principe des quatre yeux impose qu’une seconde personne relise et approuve un changement sensible, ce qui réduit les erreurs et les abus par une personne seule.",
      "whyWrong": {
        "d": "Le moindre privilège limite les droits.",
        "c": "La défense en profondeur empile des protections.",
        "b": "La séparation des environnements isole production et test."
      }
    },
    "gca-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "Un contrôle supprimé, un appel déplacé ou une hypothèse changée peuvent rendre vulnérable du code qui n’a pas bougé. Le relecteur doit comprendre le contexte autour de la modification.",
      "whyWrong": {
        "d": "Le code récent n’est pas automatiquement plus sûr.",
        "b": "L’analyse statique ne couvre pas tout.",
        "a": "Il suffit de lire le contexte utile, pas tout le dépôt."
      }
    },
    "gca-q21": {
      "type": "open",
      "model": "La fonction mêle plusieurs risques. SSRF : l’URL peut viser des services internes ou le service de métadonnées du cloud ; je vérifie une liste d’autorisation de domaines et de schémas, la résolution et la vérification de l’adresse avant connexion, et le traitement des redirections. Traversée de chemin : le nom du fichier enregistré ne doit pas venir de l’utilisateur ni contenir `../` ; je génère un nom et je vérifie le répertoire de destination. Ressources : taille maximale de la réponse, délai d’expiration, nombre de redirections. Contenu : ne pas exécuter ni interpréter le fichier téléchargé, vérifier son type réel. Enfin : compte du service à droits minimaux, erreurs générales, journalisation sans données sensibles.",
      "criteria": [
        "Le risque de SSRF est identifié avec une parade (liste d’autorisation, contrôle de l’adresse).",
        "La traversée de chemin ou la génération du nom de fichier est abordée.",
        "Les limites de ressources (taille, délai) ou le moindre privilège sont mentionnés."
      ],
      "explanation": "Une fonction apparemment simple cumule des risques de réseau, de fichier et de ressources : la revue consiste à les parcourir un par un."
    },
    "gca-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "Avec un build reproductible, des tiers peuvent reconstruire l’artefact et comparer les empreintes : une altération pendant la construction est détectable.",
      "whyWrong": {
        "a": "La vitesse n’est pas le critère.",
        "c": "Le redémarrage automatique est autre chose.",
        "b": "Le lieu de compilation n’est pas le critère."
      }
    },
    "gca-q23": {
      "type": "single",
      "correct": "c",
      "explanation": "L’attestation de provenance, signée, relie l’artefact à ses sources et à son système de construction : elle permet de vérifier qu’il n’a pas été fabriqué ailleurs ou à partir d’un code modifié.",
      "whyWrong": {
        "a": "La provenance ne chiffre rien.",
        "b": "Elle ne compresse rien.",
        "d": "Elle ne mesure pas les tests."
      }
    },
    "gca-q24": {
      "type": "short",
      "accepted": [
        "SBOM",
        "sbom"
      ],
      "explanation": "La SBOM (Software Bill of Materials), aux formats CycloneDX ou SPDX, permet de savoir en quelques minutes si l’on est concerné par une vulnérabilité annoncée."
    },
    "gca-q25": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un tag ou une branche peut être déplacé vers un contenu modifié : si l’auteur est compromis, votre pipeline exécute le code piégé. L’empreinte du commit fixe un contenu précis."
    },
    "gca-q26": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Droits minimaux, épinglage et séparation des secrets limitent ce qu’un travail compromis peut faire. Exposer les secrets à du code externe est l’erreur classique.",
      "whyWrong": {
        "b": "Du code externe qui lit les secrets de production permet de les voler."
      }
    },
    "gca-q27": {
      "type": "single",
      "correct": "b",
      "explanation": "Un attaquant publie dans le registre public un paquet portant le nom d’un paquet interne, avec un numéro de version supérieur : l’outil d’installation le préfère. On y répond par des portées de noms et un registre explicite.",
      "whyWrong": {
        "d": "C’est un conflit de dépendances, pas une attaque.",
        "c": "C’est une erreur d’inattention.",
        "a": "Une dépendance transitive n’est pas une attaque."
      }
    },
    "gca-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "Sigstore délivre des certificats de courte durée liés à une identité et journalise les signatures dans un registre public ; cosign signe et vérifie images et artefacts.",
      "whyWrong": {
        "d": "Un antivirus ne signe pas les artefacts.",
        "b": "Un pare-feu ne signe rien.",
        "c": "Un gestionnaire de mots de passe n’authentifie pas les artefacts."
      }
    },
    "gca-q29": {
      "type": "single",
      "correct": "d",
      "explanation": "Si l’un des accès est une écriture et qu’aucune synchronisation ne les ordonne, le résultat dépend du hasard de l’ordonnancement : valeurs corrompues, états incohérents, parfois exploitables.",
      "whyWrong": {
        "c": "La vitesse n’est pas en cause.",
        "b": "Une requête sans réponse est un délai dépassé.",
        "a": "Deux lectures sans écriture n’entraînent pas de course."
      }
    },
    "gca-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "L’option `-race` instrumente le programme et signale les accès concurrents non synchronisés rencontrés pendant l’exécution des tests.",
      "whyWrong": {
        "b": "Cette option n’existe pas pour cet usage.",
        "d": "`go vet` analyse statiquement, sans détecter les courses d’exécution.",
        "a": "`go mod tidy` gère les dépendances."
      }
    },
    "gca-q31": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Ils protègent de la corruption mémoire, pas des erreurs de logique : un solde vérifié puis débité en deux étapes, ou un compteur partagé non synchronisé, reste exploitable."
    },
    "gca-q32": {
      "type": "short",
      "accepted": [
        "TSan",
        "tsan",
        "ThreadSanitizer",
        "TSAN"
      ],
      "explanation": "ThreadSanitizer (TSan) instrumente les accès mémoire et les synchronisations pour signaler les courses aux données pendant les tests."
    },
    "gca-q33": {
      "type": "multi",
      "correct": [
        "b",
        "c"
      ],
      "explanation": "L’atomicité (transaction, mise à jour conditionnelle) et l’idempotence ferment la fenêtre d’exploitation. Une pause aléatoire ne supprime pas la course, elle la déplace.",
      "whyWrong": {
        "a": "Deux requêtes distinctes laissent une fenêtre entre la lecture et l’écriture.",
        "d": "Une pause ne rend pas l’opération atomique."
      }
    },
    "gca-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "Si un fil tient A et attend B pendant qu’un autre tient B et attend A, aucun ne progresse : c’est un interblocage. On fixe un ordre global d’acquisition ou on utilise des délais d’attente.",
      "whyWrong": {
        "d": "Les verrous ne consomment pas de mémoire de cette façon.",
        "a": "Le processeur n’interdit rien de tel.",
        "c": "Un verrou limite l’accès concurrent, pas la lecture en soi."
      }
    },
    "gca-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "Le Secure Software Development Framework décrit des pratiques à intégrer au cycle de développement (préparer, protéger, produire du code bien sécurisé, répondre aux vulnérabilités).",
      "whyWrong": {
        "c": "Ce n’est pas un outil.",
        "d": "Ce n’est pas un format.",
        "b": "Ce n’est pas une norme de chiffrement."
      }
    },
    "gca-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "Le délai de détection et de correction par gravité mesure un résultat. Compter les outils, les lignes ou les réunions mesure une activité, pas la réduction du risque.",
      "whyWrong": {
        "d": "Le nombre d’outils mesure une activité.",
        "c": "Les lignes analysées ne disent rien du risque.",
        "a": "Les réunions ne sont pas un résultat."
      }
    },
    "gca-q37": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le chercheur signale la faille à l’éditeur, convient d’un délai, puis les détails sont publiés avec le correctif et un identifiant CVE : les utilisateurs sont protégés avant que l’exploitation ne se diffuse."
    },
    "gca-q38": {
      "type": "short",
      "accepted": [
        "VEX",
        "vex"
      ],
      "explanation": "VEX (Vulnerability Exploitability eXchange) indique, par produit, si une vulnérabilité d’une dépendance est exploitable ou non (par exemple parce que la fonction vulnérable n’est pas appelée). Il évite de traiter des alertes sans objet."
    },
    "gca-q39": {
      "type": "open",
      "model": "À trois mois : état des lieux (langages, dépôts, dépendances), SBOM et analyse de composition logicielle sur tous les dépôts, détection de secrets en pré-commit et dans le pipeline, analyse statique en mode « signaler » avec règles de base, page de signalement des vulnérabilités. À six mois : blocage des nouvelles alertes graves, règles sur mesure pour les motifs récurrents, revue de sécurité obligatoire des parties sensibles, champions de sécurité dans chaque équipe, pipeline durci (droits minimaux, épinglage), premiers indicateurs de délai de correction. À un an : fuzzing continu des analyseurs exposés, provenance et signature des artefacts, gestion des vulnérabilités avec délais cibles par gravité, mesure de maturité (SAMM), formation fondée sur les erreurs réelles et revue trimestrielle des indicateurs.",
      "criteria": [
        "Un calendrier progressif en trois horizons est proposé.",
        "Des mesures techniques (analyse, secrets, SBOM, pipeline) et d’organisation (champions, revue, processus) sont combinées.",
        "Des indicateurs de résultat sont définis."
      ],
      "explanation": "Un programme réussi commence par l’inventaire et la visibilité, puis augmente progressivement l’exigence avec des indicateurs de résultat."
    },
    "gca-q40": {
      "type": "open",
      "model": "J’interroge d’abord la SBOM pour savoir quelles applications embarquent la bibliothèque et dans quelle version. J’évalue ensuite l’exposition réelle : le composant vulnérable est-il atteignable, la fonction concernée est-elle appelée, l’application est-elle exposée à Internet (VEX, analyse d’atteignabilité). Je priorise par risque. J’applique des mesures d’atténuation immédiates (règle de pare-feu applicatif, désactivation de la fonction, durcissement, surveillance renforcée), puis je mets à jour la bibliothèque, je teste et je déploie dans l’ordre de priorité. Je vérifie par un nouveau scan que plus aucune version vulnérable ne subsiste, je cherche des traces d’exploitation dans les journaux et je documente le retour d’expérience pour améliorer l’inventaire et les délais.",
      "criteria": [
        "L’exposition est mesurée à partir d’un inventaire (SBOM) et priorisée.",
        "Des mesures d’atténuation immédiates et la correction sont distinguées.",
        "La vérification (nouveau scan, recherche d’exploitation) et le retour d’expérience sont mentionnés."
      ],
      "explanation": "La rapidité de la réponse dépend surtout de l’inventaire préparé avant l’incident."
    }
  },
};
