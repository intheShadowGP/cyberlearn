// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "d-windows-poste-durcissement",
  questions: {
    "wpo-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "Avec un compte administrateur, une simple demande d’élévation (souvent acceptée machinalement) ou un contournement de l’UAC donne au malware les pleins pouvoirs : désactivation des protections, installation de pilotes, vol d’identifiants.",
      "whyWrong": {
        "c": "La vitesse de démarrage n’a rien à voir avec les droits du compte.",
        "d": "Un administrateur utilise Office comme n’importe quel utilisateur.",
        "b": "Windows permet plusieurs comptes administrateurs."
      }
    },
    "wpo-q2": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les critères de traitement des vulnérabilités de Microsoft classent l’UAC parmi les mécanismes qui ne sont pas des frontières de sécurité. Elle réduit les risques, mais la vraie protection est de ne pas donner les droits d’administration à l’utilisateur."
    },
    "wpo-q3": {
      "type": "short",
      "accepted": [
        "F",
        "(F)"
      ],
      "explanation": "`F` (Full) est le contrôle total, `M` la modification, `RX` la lecture et l’exécution, `R` la lecture seule, `W` l’écriture."
    },
    "wpo-q4": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Le droit de modification hérité permet à tout utilisateur de réécrire le script ; la tâche l’exécute ensuite en SYSTEM. On retire `M` et on accorde au plus `RX`.",
      "whyWrong": {
        "b": "Une signature ne protège que si quelque chose la vérifie avant l’exécution (stratégie AllSigned appliquée, contrôle des applications). Sinon, le script modifié s’exécute."
      }
    },
    "wpo-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "La documentation Microsoft indique que la stratégie d’exécution n’est pas une frontière de sécurité mais une défense en profondeur : elle aide à éviter les erreurs involontaires. Elle se contourne en ligne de commande ou en exécutant directement le contenu du script.",
      "whyWrong": {
        "d": "Les commandes interactives et le code passé avec `-Command` ou `-EncodedCommand` ne sont pas concernés.",
        "c": "Elle ne chiffre rien : elle décide quels fichiers de script peuvent être lancés.",
        "a": "La stratégie `Restricted` n’est pas liée à une signature Microsoft ; la stratégie `AllSigned` exige des scripts signés."
      }
    },
    "wpo-q6": {
      "type": "short",
      "accepted": [
        "4104"
      ],
      "explanation": "L’événement 4104 du journal `Microsoft-Windows-PowerShell/Operational` contient le texte du bloc de script exécuté ; l’événement 4103 correspond à la journalisation des modules."
    },
    "wpo-q7": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le moteur PowerShell journalise le bloc de script au moment de sa compilation, donc après le décodage du Base64. C’est ce qui rend cette journalisation précieuse contre l’obfuscation."
    },
    "wpo-q8": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Le mode de langage restreint limite ce qu’un script non approuvé peut faire ; supprimer PowerShell 2.0 empêche l’attaque par rétrogradation qui échappe à la journalisation ; la collecte des événements 4104 rend l’usage visible.",
      "whyWrong": {
        "a": "Le moteur PowerShell reste accessible par d’autres hôtes (`System.Management.Automation`, autres binaires) : renommer l’exécutable ne protège pas."
      }
    },
    "wpo-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "La protection contre les falsifications empêche la modification des réglages de sécurité de Defender par des moyens locaux (registre, PowerShell, stratégie locale), une étape classique des rançongiciels avant le chiffrement.",
      "whyWrong": {
        "a": "Le chiffrement des fichiers est le rôle de BitLocker.",
        "d": "La signature des courriels n’a aucun lien avec Defender.",
        "b": "La protection contre les falsifications ne concerne pas le pare-feu : elle protège les réglages de Defender."
      }
    },
    "wpo-q10": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le mode audit journalise ce qui aurait été bloqué sans gêner les utilisateurs. On identifie ainsi les exclusions légitimes avant de passer en blocage, ce qui évite de devoir tout désactiver en urgence."
    },
    "wpo-q11": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "BitLocker protège les données au repos, par exemple sur un portable volé éteint. Le PIN ajoute un facteur au démarrage, et la sauvegarde de la clé de récupération évite la perte des données.",
      "whyWrong": {
        "b": "Une fois la session ouverte, le disque est déchiffré de manière transparente : un malware qui s’exécute lit les fichiers comme l’utilisateur."
      }
    },
    "wpo-q12": {
      "type": "open",
      "model": "Le réseau de l’hôtel doit être classé « public » : le pare-feu Windows applique alors le profil public, qui doit refuser toutes les connexions entrantes et désactiver le partage de fichiers et la découverte réseau. Defender reste actif avec la protection contre les falsifications et les règles ASR, quel que soit le réseau. BitLocker protège les données si le portable est volé, idéalement avec un code PIN au démarrage. L’utilisateur travaille avec un compte standard ; l’accès aux ressources de l’entreprise passe par un VPN ou un accès de type ZTNA, et le trafic sensible est chiffré (TLS).",
      "criteria": [
        "Le profil public du pare-feu et le refus des connexions entrantes sont mentionnés.",
        "Au moins une autre protection (Defender, BitLocker, compte standard) est expliquée.",
        "L’accès chiffré aux ressources de l’entreprise (VPN, ZTNA) est proposé."
      ],
      "explanation": "Sur un réseau partagé, les autres clients peuvent scanner le poste : le profil réseau est le premier réglage qui change l’exposition."
    },
    "wpo-q13": {
      "type": "single",
      "correct": "d",
      "explanation": "L’événement Sysmon 10 (ProcessAccess) indique quel processus a ouvert quel autre processus, avec les droits demandés. Un accès en lecture à `lsass.exe` par un programme inconnu est un signal fort de vol d’identifiants.",
      "whyWrong": {
        "c": "ID 22 enregistre les requêtes DNS.",
        "b": "ID 11 enregistre les créations de fichiers.",
        "a": "ID 3 enregistre les connexions réseau."
      }
    },
    "wpo-q14": {
      "type": "short",
      "accepted": [
        "1",
        "id 1"
      ],
      "explanation": "L’événement Sysmon 1 (ProcessCreate) contient la ligne de commande, le processus parent, l’empreinte du binaire et l’utilisateur : c’est la base de la plupart des détections."
    },
    "wpo-q15": {
      "type": "open",
      "model": "Activer par GPO l’audit de création de processus avec ligne de commande (4688), la journalisation des blocs de script PowerShell (4104), les événements d’authentification (4624, 4625) et de modification de groupes privilégiés (4728, 4732). Déployer Sysmon avec une configuration communautaire maintenue (au minimum les ID 1, 3, 10, 11, 13 et 22). Collecter le tout en continu vers le SIEM (Windows Event Forwarding ou agent). On pourra détecter : Office qui lance PowerShell, scripts encodés, téléchargements depuis Internet, persistance par clés Run, accès à LSASS, connexions de processus inhabituels et effacement du journal (1102).",
      "criteria": [
        "La journalisation des processus avec ligne de commande (4688 ou Sysmon 1) est prévue.",
        "La journalisation PowerShell (4104) est prévue.",
        "La collecte centralisée est prévue.",
        "Au moins deux comportements détectables sont cités."
      ],
      "explanation": "Une journalisation utile est un compromis : assez d’événements pour reconstituer une attaque, assez de filtrage pour que le SOC puisse les lire."
    },
    "wpo-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "Sysmon peut enregistrer chaque chargement de DLL, chaque connexion et chaque accès au registre. Sans exclusions, le volume sature le stockage et le SIEM ; une configuration maintenue garde les événements significatifs.",
      "whyWrong": {
        "c": "Sysmon démarre avec une configuration par défaut très verbeuse.",
        "a": "La configuration de Sysmon filtre les événements ; elle ne les chiffre pas.",
        "b": "Sysmon journalise : il ne bloque rien et ne remplace pas une protection antivirus."
      }
    },
    "wpo-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "Le jeton porte l’identité (SID), les groupes et les privilèges du processus. Le système le compare aux listes de contrôle d’accès des objets (fichiers, clés de registre, services) pour décider d’une autorisation.",
      "whyWrong": {
        "d": "Aucun mot de passe en clair n’est conservé dans le jeton.",
        "c": "Les droits sont portés par les objets (leurs ACL), pas par une liste dans le jeton.",
        "a": "Le jeton d’accès ne contient pas la clé de chiffrement du disque."
      }
    },
    "wpo-q18": {
      "type": "single",
      "correct": "c",
      "explanation": "Avec LAPS, chaque poste a un mot de passe d’administrateur local aléatoire, renouvelé automatiquement et consultable par les seuls ayants droit. Un poste compromis ne donne plus accès aux autres : le mouvement latéral par réutilisation du mot de passe disparaît.",
      "whyWrong": {
        "b": "C’est justement la situation que LAPS supprime.",
        "a": "Windows LAPS gère le mot de passe de l’administrateur local ; il ne chiffre pas les mots de passe des utilisateurs.",
        "d": "LAPS ne concerne pas la biométrie : il renouvelle le mot de passe de l’administrateur local."
      }
    },
    "wpo-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un refus explicite est évalué avant les autorisations. Il peut donc interdire un accès que l’appartenance à un groupe aurait accordé, ce qui crée des conflits difficiles à diagnostiquer : on préfère ne pas accorder le droit plutôt que de le refuser."
    },
    "wpo-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "La protection LSA et Credential Guard empêchent la lecture des secrets de LSASS, et limiter les ouvertures de session privilégiées sur les postes réduit ce qu’un attaquant peut y trouver. Désactiver l’UAC affaiblit le poste au lieu de le protéger.",
      "whyWrong": {
        "d": "Désactiver l’UAC supprime une barrière de réduction des risques."
      }
    },
    "wpo-q21": {
      "type": "single",
      "correct": "a",
      "explanation": "L’attaquant évite d’apporter des programmes détectables et se sert des outils du système (PowerShell, WMI, `certutil`, `schtasks`). Les listes de blocage ne suffisent plus : on surveille les comportements et on journalise ces outils.",
      "whyWrong": {
        "b": "C’est l’inverse : le but est de ne rien apporter de nouveau.",
        "c": "Cette expression ne désigne pas une attaque sans compte interne : elle désigne l’emploi d’outils déjà présents.",
        "d": "Elle ne désigne pas la récupération de données après un rançongiciel."
      }
    },
    "wpo-q22": {
      "type": "short",
      "accepted": [
        "mode de langage restreint",
        "langage restreint",
        "constrained language mode",
        "constrained language",
        "constrainedlanguage"
      ],
      "explanation": "Le mode de langage restreint (Constrained Language Mode) est imposé par App Control for Business ou AppLocker : un script non approuvé ne peut plus appeler directement .NET, ce qui bloque la plupart des charges utiles en mémoire."
    },
    "wpo-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "PowerShell 2.0 ne connaît ni la journalisation des blocs de script ni l’AMSI : en l’invoquant, un attaquant échappe à ces protections. D’où la suppression de cette fonctionnalité Windows sur les postes.",
      "whyWrong": {
        "d": "La version du moteur ne change rien aux demandes d’élévation.",
        "b": "Le paramètre `-version 2` ne change pas le compte d’exécution.",
        "c": "PowerShell n’utilise pas de port réseau propre."
      }
    },
    "wpo-q24": {
      "type": "open",
      "model": "Aucun fichier n’est déposé sur le disque : l’analyse de fichiers n’a rien à examiner, et le contenu peut être obfusqué ou encodé jusqu’au dernier moment. Plusieurs protections agissent au moment de l’exécution : l’AMSI (interface d’analyse anti-programmes malveillants) transmet à Defender le contenu du script après désobfuscation, avant son exécution ; la journalisation des blocs de script (événement 4104) enregistre le code réel ; le mode de langage restreint empêche l’accès direct à .NET (`Net.WebClient`) pour un script non approuvé ; les règles ASR bloquent Office de lancer PowerShell ; le filtrage sortant (proxy, DNS) coupe le téléchargement. Le SOC détecte le processus parent (Word, Outlook), l’adresse contactée (Sysmon 3, 22) et le bloc journalisé.",
      "criteria": [
        "Explique l’absence de fichier (exécution en mémoire) et la limite de l’analyse de fichiers.",
        "Cite l’AMSI ou la journalisation des blocs de script (4104).",
        "Cite au moins une mesure de restriction (langage restreint, ASR, filtrage sortant).",
        "Mentionne un indice exploitable en détection (processus parent, connexion, bloc journalisé)."
      ],
      "explanation": "Contre une exécution sans fichier, la défense se déplace du disque vers l’exécution : inspection par l’AMSI, journalisation et restriction du langage."
    },
    "wpo-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "Le profil public s’applique à un réseau non identifié : il est le plus restrictif et doit refuser toutes les connexions entrantes. Le profil domaine s’applique lorsque le poste joint son contrôleur de domaine, le profil privé à un réseau jugé de confiance.",
      "whyWrong": {
        "d": "Le profil domaine suppose que le poste a joint son domaine.",
        "a": "Le profil privé est réservé aux réseaux de confiance (domicile, bureau).",
        "b": "Il n’existe pas de profil « invité » dans le pare-feu."
      }
    },
    "wpo-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "L’AMSI permet à une application, comme PowerShell ou Office, de soumettre un contenu (script, macro) à Defender ou à un autre antimalware au moment où il va être exécuté, y compris après désobfuscation en mémoire.",
      "whyWrong": {
        "b": "L’AMSI n’a aucun rôle de chiffrement.",
        "a": "La signature est un autre mécanisme, sans rapport.",
        "c": "L’AMSI n’interdit pas l’exécution selon l’origine du script : il transmet le contenu à l’antimalware."
      }
    },
    "wpo-q27": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le comportement par défaut bloque le trafic entrant non sollicité et autorise le trafic sortant. Un filtrage sortant strict est possible mais demande une politique de règles précise : il reste rare sur les postes de travail."
    },
    "wpo-q28": {
      "type": "short",
      "accepted": [
        "ASR",
        "asr"
      ],
      "explanation": "Les règles ASR (Attack Surface Reduction) bloquent des comportements typiques des attaques : Office qui crée des processus enfants, scripts obfusqués, accès à `lsass.exe`. On les déploie d’abord en audit, puis en blocage."
    },
    "wpo-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "L’événement 4624 enregistre une ouverture de session réussie, avec son type (interactive, réseau, RDP…). 4625 enregistre un échec, 4688 une création de processus et 1102 l’effacement du journal de sécurité.",
      "whyWrong": {
        "c": "4625 enregistre un échec d’ouverture de session.",
        "d": "4688 enregistre la création d’un processus.",
        "a": "1102 signale l’effacement du journal."
      }
    },
    "wpo-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "L’événement 1102 est écrit quand le journal de sécurité est effacé : un attaquant qui nettoie ses traces le déclenche. Il justifie une alerte immédiate, d’où l’intérêt d’avoir déjà exporté les événements vers un SIEM.",
      "whyWrong": {
        "b": "La création de compte se trouve dans 4720.",
        "a": "Un échec d’ouverture de session est 4625.",
        "d": "L’arrêt du service est signalé dans le journal système."
      }
    },
    "wpo-q31": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Une clé `Run` modifiée (13), un exécutable déposé (11) et une commande `schtasks` ou `reg add` (1) sont les traces classiques d’une persistance. L’ID 4 informe de l’état de Sysmon et ne dit rien de la persistance d’un attaquant.",
      "whyWrong": {
        "d": "Il signale l’arrêt ou le démarrage de Sysmon, pas une persistance."
      }
    },
    "wpo-q32": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un attaquant administrateur peut vider un journal local (événement 1102 pour le journal de sécurité). La parade est la collecte en continu vers un serveur ou un SIEM, hors de portée du poste compromis."
    },
    "wpo-q33": {
      "type": "single",
      "correct": "b",
      "explanation": "La persistance garantit que l’accès survit à l’arrêt du programme, au redémarrage ou à la déconnexion : clé de registre `Run`, tâche planifiée, service… C’est une tactique distincte de l’évasion de la détection.",
      "whyWrong": {
        "d": "Cela relève de l’évasion de la défense, une autre tactique.",
        "c": "Un programme peut être supprimé : c’est son rétablissement automatique qui compte.",
        "a": "La persistance ne désigne pas la durée de connexion de l’attaquant : elle désigne le maintien de son accès."
      }
    },
    "wpo-q34": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Les clés `Run`, les tâches planifiées, les services et le dossier Démarrage relancent un programme automatiquement. Le cache DNS et la corbeille ne démarrent rien.",
      "whyWrong": {
        "d": "Le cache DNS conserve des résolutions : il n’exécute aucun programme.",
        "e": "La corbeille stocke des fichiers supprimés sans les exécuter."
      }
    },
    "wpo-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "`schtasks /query` énumère les tâches planifiées, avec la commande exécutée et le compte utilisé. `tasklist` liste les processus, `sc query` les services et `netstat` les connexions réseau.",
      "whyWrong": {
        "a": "tasklist liste les processus en cours, pas les tâches planifiées.",
        "c": "sc query liste les services.",
        "b": "netstat liste les connexions réseau."
      }
    },
    "wpo-q36": {
      "type": "single",
      "correct": "a",
      "explanation": "Un abonnement WMI (filtre, consommateur et liaison) vit dans le dépôt WMI : un contrôle des clés `Run` ou des tâches planifiées ne le montre pas. Sysmon (événements 19 à 21) et des outils comme Autoruns permettent de le retrouver.",
      "whyWrong": {
        "c": "L’abonnement WMI permanent ne chiffre pas le programme malveillant : il le déclenche sur un événement.",
        "b": "Il ne dépend pas de l’absence d’antivirus.",
        "d": "La persistance WMI reste dans le système d’exploitation, pas dans le micrologiciel."
      }
    },
    "wpo-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La clé `Run`, la tâche ou le service qui le lançait existe encore : il peut échouer en boucle, ou relancer un autre composant que l’attaquant a déposé. Il faut retirer le mécanisme de persistance et rechercher les autres exemplaires."
    },
    "wpo-q38": {
      "type": "short",
      "accepted": [
        "Autoruns",
        "autoruns",
        "autorunsc"
      ],
      "explanation": "Autoruns (et sa version en ligne de commande `autorunsc`) recense clés `Run`, tâches, services, pilotes, extensions et abonnements WMI, avec la signature des fichiers : il permet de repérer rapidement une entrée suspecte."
    },
    "wpo-q39": {
      "type": "single",
      "correct": "c",
      "explanation": "Les binaires de services légitimes se trouvent dans `C:\\Windows` ou `C:\\Program Files`, protégés en écriture. Un exécutable dans un dossier modifiable par tous suggère une installation par un attaquant (ou une faille d’élévation). Le nom imite souvent un service Windows.",
      "whyWrong": {
        "b": "Le nom prête à confusion, mais n’est pas la preuve la plus nette.",
        "d": "Le démarrage automatique est le comportement normal d’un service.",
        "a": "La description est inversée : ce service s’exécute souvent avec de hauts privilèges."
      }
    },
    "wpo-q40": {
      "type": "open",
      "model": "Le retour après redémarrage prouve qu’un mécanisme relance le code : le nettoyage a retiré le fichier, pas la cause. Rechercher les emplacements de démarrage : clés `Run` et `RunOnce` (HKCU et HKLM), dossier Démarrage, tâches planifiées (`schtasks /query /v`), services (chemin du binaire et compte), abonnements WMI, extensions, avec Autoruns. Examiner les journaux : Sysmon 1, 11 et 13 autour de la première exécution, 4688, 4698 (tâche créée) et 7045 (service installé). Agir dans cet ordre : isoler le poste, collecter les éléments utiles (copies, empreintes) pour analyse, puis désactiver la persistance avant de supprimer les binaires, enfin rechercher d’autres points d’entrée et les comptes ou mots de passe exposés. Si le doute subsiste sur l’étendue, réinstaller le poste à partir d’un support sain.",
      "criteria": [
        "Explique que le fichier supprimé ne suffit pas et que la cause est un mécanisme de relance.",
        "Cite plusieurs emplacements de persistance (Run, tâches, services, WMI) et un outil de recherche.",
        "Cite des sources de journaux utiles (Sysmon, 4688, 4698, 7045).",
        "Donne un ordre d’action raisonné (isoler, collecter, désactiver la persistance, supprimer, élargir la recherche)."
      ],
      "explanation": "Retirer le malware sans retirer sa persistance ne règle rien : on cherche d’abord comment il revient, puis on le fait disparaître de tous ses points d’entrée."
    }
  },
};
