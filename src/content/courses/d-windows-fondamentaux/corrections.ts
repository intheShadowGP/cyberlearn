// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "d-windows-fondamentaux",
  questions: {
    "dwf-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "Le noyau et les pilotes s’exécutent en mode noyau, avec un accès direct au matériel et à toute la mémoire. Les applications et la plupart des services s’exécutent en mode utilisateur, plus limité : elles passent par le noyau pour tout ce qui touche au matériel. Une faille d’un pilote est donc plus grave que celle d’une application.",
      "whyWrong": {
        "b": "C’est l’inverse : le noyau est le niveau le plus privilégié.",
        "a": "Le mode utilisateur est celui des applications, session ouverte ou non."
      }
    },
    "dwf-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le registre regroupe les paramètres du système (ruche HKLM) et de l’utilisateur connecté (ruche HKCU). Les applications et les attaquants s’y servent aussi : les clés `Run`, par exemple, relancent un programme à chaque ouverture de session."
    },
    "dwf-q3": {
      "type": "short",
      "accepted": [
        "regedit",
        "regedit.exe"
      ],
      "explanation": "`regedit` ouvre l’éditeur du registre. Il faut s’en servir avec prudence : une modification erronée peut empêcher le système de démarrer. En ligne de commande, `reg query` permet de consulter sans modifier."
    },
    "dwf-q4": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les services sont gérés par le système et peuvent démarrer avec lui, avant toute ouverture de session. C’est utile pour les fonctions d’arrière-plan, mais un service mal configuré ou vulnérable est exploitable sans que personne soit connecté."
    },
    "dwf-q5": {
      "type": "single",
      "correct": "d",
      "explanation": "Le compte `LocalSystem` (SYSTEM) a des droits étendus sur la machine. Un programme qui s’exécute en SYSTEM, ou un service qui lui appartient, ne doit donc être modifiable par aucun utilisateur ordinaire.",
      "whyWrong": {
        "a": "Le compte Invité a des droits très limités.",
        "b": "Les services ne dépendent pas de la personne qui a installé le système.",
        "c": "Les services ne s’exécutent pas avec le compte du dernier utilisateur."
      }
    },
    "dwf-q6": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Le Gestionnaire des tâches liste les processus et leur consommation, `services.msc` les services et leur compte, le Moniteur de ressources détaille les accès disque et réseau. Le Bloc-notes édite du texte : il ne montre rien de l’état du système.",
      "whyWrong": {
        "d": "Le Bloc-notes est un éditeur de texte, pas un outil d’inspection."
      }
    },
    "dwf-q7": {
      "type": "short",
      "accepted": [
        "winver",
        "winver.exe"
      ],
      "explanation": "`winver` affiche la version et la build de Windows. Savoir de quelle version il s’agit permet de vérifier que les correctifs attendus sont présents et que le système est toujours pris en charge."
    },
    "dwf-q8": {
      "type": "single",
      "correct": "a",
      "explanation": "Le SID est l’identifiant interne d’un compte ou d’un groupe, unique et immuable. Les permissions et les jetons s’appuient sur lui : renommer un compte ne modifie donc pas ses droits, et recréer un compte du même nom ne restitue pas ceux de l’ancien.",
      "whyWrong": {
        "d": "Le mot de passe est stocké à part, sous forme d’empreinte.",
        "b": "Le nom affiché est modifiable ; le SID ne change pas."
      }
    },
    "dwf-q9": {
      "type": "single",
      "correct": "b",
      "explanation": "Un compte local est défini dans la base du poste (SAM) et n’est valable que sur lui. Un compte de domaine est défini dans l’annuaire Active Directory : il s’authentifie auprès des contrôleurs et peut ouvrir une session sur tout poste du domaine.",
      "whyWrong": {
        "d": "Le niveau de privilège dépend des groupes, pas du type de compte.",
        "c": "C’est l’inverse : le compte de domaine est utilisable sur de nombreux postes."
      }
    },
    "dwf-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le compte Administrateur intégré est désactivé par défaut sur les postes clients récents. Le premier compte créé à l’installation est en revanche souvent membre du groupe Administrateurs : c’est lui qu’il vaut mieux ne pas utiliser au quotidien."
    },
    "dwf-q11": {
      "type": "short",
      "accepted": [
        "whoami",
        "whoami.exe"
      ],
      "explanation": "`whoami` affiche le poste (ou le domaine) et le nom du compte ; `whoami /groups` liste ses groupes et `whoami /priv` ses privilèges. C’est le premier réflexe pour savoir avec quels droits on agit."
    },
    "dwf-q12": {
      "type": "single",
      "correct": "c",
      "explanation": "Le PIN Windows Hello est lié à un appareil précis et protégé par le TPM : même intercepté, il ne permet pas d’ouvrir une session ailleurs, et les essais sont limités par la puce. Un mot de passe réutilisé, lui, fonctionne partout où il a été saisi.",
      "whyWrong": {
        "d": "La différence ne tient pas à la longueur d’une clé.",
        "b": "Le PIN reste local à l’appareil.",
        "a": "Il est propre à chaque appareil : on ne le partage pas."
      }
    },
    "dwf-q13": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Un compte standard limite les dégâts d’un programme malveillant, des mots de passe longs et uniques limitent la réutilisation, et le multifacteur protège même si le mot de passe est volé. Partager un compte supprime toute traçabilité et multiplie les risques.",
      "whyWrong": {
        "b": "Un compte partagé ne permet plus de savoir qui a fait quoi."
      }
    },
    "dwf-q14": {
      "type": "open",
      "model": "Avec un compte administrateur, le programme malveillant lancé par la pièce jointe hérite des droits de l’utilisateur : après une simple acceptation de la fenêtre d’élévation (ou en la contournant), il peut installer des pilotes ou des services, désactiver l’antivirus ou le pare-feu, modifier les fichiers système, et atteindre tout le poste. Avec un compte standard, le programme n’a que les droits de cet utilisateur : il ne peut ni modifier le système ni arrêter les protections sans demander un mot de passe d’administrateur distinct. Il peut encore lire et chiffrer les fichiers de l’utilisateur, d’où l’intérêt d’une sauvegarde et d’autres protections (Defender, SmartScreen, mises à jour). Le compte standard réduit l’étendue des dégâts, sans les supprimer.",
      "criteria": [
        "Explique que le programme hérite des droits du compte utilisé.",
        "Décrit ce qu’un administrateur peut subir (désactivation des protections, installation d’un service, accès à tout le poste).",
        "Précise ce qui reste exposé avec un compte standard (fichiers de l’utilisateur).",
        "Mentionne une protection complémentaire (sauvegarde, Defender, mises à jour)."
      ],
      "explanation": "Le compte standard ne rend pas le poste invulnérable : il en limite l’étendue des dégâts et force le passage par une élévation visible et journalisée."
    },
    "dwf-q15": {
      "type": "single",
      "correct": "d",
      "explanation": "NTFS associe à chaque objet une liste de contrôle d’accès avec des droits par compte et par groupe. FAT32 et exFAT, courants sur les clés USB, n’ont aucune permission : toute personne qui accède au support lit tout.",
      "whyWrong": {
        "c": "FAT32 ne gère aucune permission par utilisateur.",
        "a": "exFAT non plus.",
        "b": "ISO 9660 est un format de disque optique en lecture seule."
      }
    },
    "dwf-q16": {
      "type": "single",
      "correct": "a",
      "explanation": "Pour un accès réseau, les permissions de partage et les permissions NTFS se cumulent et c’est la plus restrictive qui s’applique. Pour un accès local au poste, seules les permissions NTFS comptent. On peut donc ouvrir largement le partage et régler finement NTFS.",
      "whyWrong": {
        "b": "C’est le contraire : la plus restrictive prévaut.",
        "c": "Les droits ne s’additionnent pas ainsi.",
        "d": "Les permissions ne s’annulent pas : on retient la plus restrictive."
      }
    },
    "dwf-q17": {
      "type": "truefalse",
      "correct": true,
      "explanation": "C’est l’héritage : modifier les permissions d’un dossier les propage à son contenu. Interrompre l’héritage permet des cas particuliers, mais multiplie les exceptions à auditer et les risques d’erreur."
    },
    "dwf-q18": {
      "type": "short",
      "accepted": [
        "icacls",
        "icacls.exe"
      ],
      "explanation": "`icacls` lit les permissions (`icacls dossier`), en accorde ou en retire (`/grant`, `/remove`) et gère l’héritage (`/inheritance`). Les abréviations F, M, RX, R, W indiquent le contrôle total, la modification, la lecture et exécution, la lecture et l’écriture."
    },
    "dwf-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "Le propriétaire peut toujours changer les permissions de son objet, donc s’accorder ensuite l’accès. C’est pourquoi une prise de possession est une opération sensible, et que les administrateurs peuvent, eux, devenir propriétaires pour réparer un accès.",
      "whyWrong": {
        "c": "Le droit de propriétaire ne concerne que ses propres objets.",
        "a": "Il ne s’étend pas à tous les fichiers du disque.",
        "d": "Le propriétaire conserve ce droit particulier."
      }
    },
    "dwf-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Le système, les programmes installés et les scripts exécutés avec de hauts privilèges ne doivent pouvoir être modifiés que par les administrateurs : sinon, un utilisateur y dépose du code exécuté avec les droits du compte concerné. Le dossier Documents appartient à l’utilisateur.",
      "whyWrong": {
        "c": "Chaque utilisateur doit pouvoir modifier ses propres documents."
      }
    },
    "dwf-q21": {
      "type": "truefalse",
      "correct": false,
      "explanation": "FAT32 ne sait pas stocker de listes de contrôle d’accès : les permissions sont perdues et toute personne qui branche la clé lit le fichier. Pour protéger des données sur un support amovible, il faut le chiffrer (BitLocker To Go) plutôt que compter sur des permissions."
    },
    "dwf-q22": {
      "type": "single",
      "correct": "b",
      "explanation": "Les cmdlets suivent la forme Verbe-Nom avec des verbes normalisés (`Get`, `Set`, `New`, `Remove`…). On devine ainsi le nom d’une commande, et `Get-Command` ou `Get-Help` aident à les retrouver.",
      "whyWrong": {
        "a": "L’ordre est inversé : le verbe vient en premier.",
        "c": "Les noms ne sont pas abrégés de cette façon."
      }
    },
    "dwf-q23": {
      "type": "single",
      "correct": "d",
      "explanation": "Dans PowerShell, chaque commande renvoie des objets (avec propriétés et méthodes). On enchaîne `Where-Object`, `Sort-Object`, `Select-Object` sur ces propriétés, sans avoir à découper du texte comme avec cmd.",
      "whyWrong": {
        "a": "C’est le fonctionnement du tube de cmd.",
        "b": "Il n’y a pas de restriction de ce type."
      }
    },
    "dwf-q24": {
      "type": "short",
      "accepted": [
        "Get-Help",
        "get-help",
        "help"
      ],
      "explanation": "`Get-Help <commande>` affiche la description, la syntaxe et des exemples ; `-Examples` n’affiche que les exemples. `Get-Command` aide à trouver une commande dont on ne connaît pas le nom exact."
    },
    "dwf-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "`Get-Service` liste les services avec leur état (Running, Stopped). `Get-Process` liste les processus, `Get-Item` renvoie un fichier ou une clé de registre et `Get-Date` la date et l’heure.",
      "whyWrong": {
        "d": "Get-Process liste les processus, pas les services.",
        "b": "Get-Item renvoie un objet de fichier ou de registre.",
        "c": "Get-Date donne la date et l’heure."
      }
    },
    "dwf-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les commandes qui observent (`Get-Process`, `Get-Service`, `Get-NetIPAddress`…) fonctionnent avec un compte standard. L’élévation n’est nécessaire que pour modifier le système. Travailler en élévation par défaut expose inutilement le poste."
    },
    "dwf-q27": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "`ipconfig /all` montre la configuration obtenue, `nslookup` vérifie la résolution des noms et `tracert` indique où s’arrête le chemin. `chkdsk` contrôle un disque : il n’a pas de rapport avec le réseau.",
      "whyWrong": {
        "a": "chkdsk vérifie les erreurs d’un disque, pas la connectivité."
      }
    },
    "dwf-q28": {
      "type": "single",
      "correct": "c",
      "explanation": "`whoami /groups` affiche les groupes (et leur SID) présents dans le jeton du compte connecté : c’est le moyen de vérifier avec quels droits on travaille, par exemple si l’on est administrateur sans le savoir.",
      "whyWrong": {
        "d": "Elle ne concerne que le compte connecté.",
        "b": "Elle ne crée rien : elle lit le jeton.",
        "a": "Elle n’a aucun effet sur la session."
      }
    },
    "dwf-q29": {
      "type": "single",
      "correct": "a",
      "explanation": "Dès qu’un correctif est publié, les failles qu’il corrige deviennent publiques et les attaquants les exploitent contre les postes non à jour. Les mises à jour automatiques réduisent ce délai ; les ignorer laisse des failles connues ouvertes.",
      "whyWrong": {
        "c": "Windows Update ne remplace pas la protection antivirus.",
        "b": "Les mises à jour de sécurité sont leur raison d’être principale."
      }
    },
    "dwf-q30": {
      "type": "single",
      "correct": "b",
      "explanation": "Microsoft Defender Antivirus est intégré, activé par défaut et mis à jour par Windows Update ; il se désactive automatiquement si un autre antivirus est installé. Il suffit à beaucoup d’usages, à condition de ne pas le désactiver.",
      "whyWrong": {
        "d": "Ce produit n’existe pas.",
        "a": "Ce produit n’existe pas non plus.",
        "c": "Windows embarque bien un antivirus."
      }
    },
    "dwf-q31": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le pare-feu est actif par défaut sur les trois profils (domaine, privé, public). Il bloque le trafic entrant non sollicité et laisse passer le trafic sortant. Le désactiver « pour tester » expose le poste, notamment sur un réseau public."
    },
    "dwf-q32": {
      "type": "single",
      "correct": "c",
      "explanation": "BitLocker protège les données au repos : sans la clé, le disque d’un portable perdu reste illisible. Une fois la session ouverte, le disque est déchiffré de manière transparente : un malware lit alors les fichiers comme l’utilisateur. La clé de récupération doit être conservée à part.",
      "whyWrong": {
        "d": "C’est le rôle de l’antivirus et des autres protections de session.",
        "a": "C’est le rôle du pare-feu.",
        "b": "Le filtrage des courriels est un autre service."
      }
    },
    "dwf-q33": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Les mises à jour, un compte standard et les protections intégrées actives forment le socle. Désactiver le contrôle de compte supprime une barrière de réduction des risques : les programmes obtiennent des droits sans demande visible.",
      "whyWrong": {
        "c": "Les fenêtres de confirmation signalent une demande d’élévation : les supprimer affaiblit le poste."
      }
    },
    "dwf-q34": {
      "type": "short",
      "accepted": [
        "SmartScreen",
        "smartscreen",
        "Windows SmartScreen",
        "Microsoft Defender SmartScreen"
      ],
      "explanation": "SmartScreen compare les programmes téléchargés et les sites visités à des listes de réputation et affiche un avertissement lorsqu’ils sont peu connus ou jugés dangereux. Ne pas contourner cet avertissement sans raison fait partie des bons réflexes."
    },
    "dwf-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "L’Observateur d’événements (`eventvwr`) regroupe les journaux Application, Système et Sécurité, avec leurs niveaux et leurs identifiants. En PowerShell, `Get-WinEvent` interroge les mêmes journaux.",
      "whyWrong": {
        "c": "L’Éditeur du registre modifie la configuration, il ne donne pas l’historique.",
        "a": "Le Gestionnaire de périphériques gère le matériel.",
        "b": "La Calculatrice n’a aucun lien avec le système."
      }
    },
    "dwf-q36": {
      "type": "short",
      "accepted": [
        "4625"
      ],
      "explanation": "L’événement 4625 consigne un échec d’ouverture de session, avec le compte visé, la source et le motif. 4624 signale une ouverture réussie. Une rafale de 4625 suivie d’un 4624 évoque une attaque par devinette qui a abouti."
    },
    "dwf-q37": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un journal a une taille maximale : une fois pleine, les anciennes entrées sont remplacées. Pour qu’un journal serve en enquête, on augmente sa taille et on envoie les événements vers un serveur de collecte, hors de portée d’un attaquant qui les effacerait."
    },
    "dwf-q38": {
      "type": "single",
      "correct": "b",
      "explanation": "L’Historique des fichiers copie régulièrement les dossiers personnels vers un autre disque et conserve plusieurs versions. Il protège d’une suppression ou d’une corruption, et, s’il est sur un disque débranché, d’un rançongiciel. Il ne remplace pas une sauvegarde hors site testée.",
      "whyWrong": {
        "a": "Il ne concerne pas la navigation web.",
        "c": "Les connexions sont consignées dans le journal de sécurité.",
        "d": "Le chiffrement relève de BitLocker."
      }
    },
    "dwf-q39": {
      "type": "single",
      "correct": "a",
      "explanation": "Le Gestionnaire des tâches montre les processus, leur consommation de processeur, de mémoire, de disque et de réseau : on identifie le coupable avant d’agir. Réinstaller, désactiver une protection ou supprimer des fichiers système sans diagnostic détruit des indices et crée des risques.",
      "whyWrong": {
        "b": "Réinstaller efface les indices et prend du temps pour rien si la cause est simple.",
        "c": "Désactiver l’antivirus expose le poste.",
        "d": "Supprimer des fichiers système peut empêcher le démarrage."
      }
    },
    "dwf-q40": {
      "type": "open",
      "model": "Une série d’échecs rapprochés sur un compte, suivie d’un succès, suggère qu’un mot de passe a été deviné par essais successifs (ou qu’un utilisateur a fini par se souvenir du sien). Il faut regarder la source (adresse, poste), le type de session (réseau, interactive, bureau à distance), l’heure (nuit, week-end) et ce qui suit la connexion (programme lancé, service créé). Si la source est inhabituelle, on traite le compte comme compromis : réinitialisation du mot de passe, fermeture des sessions, isolement du poste si nécessaire, conservation des journaux, recherche d’une persistance (tâche, service, clé Run). Pour la suite : mots de passe longs, authentification multifacteur, verrouillage du compte après quelques échecs, limitation de l’exposition réseau du poste et collecte des journaux vers un serveur.",
      "criteria": [
        "Interprète la série 4625 puis 4624 comme une possible devinette de mot de passe aboutie.",
        "Cite les éléments qui permettent de trancher (source, type de session, heure, actions qui suivent).",
        "Propose des actions de réponse (réinitialisation, isolement, conservation des journaux).",
        "Propose des mesures préventives (multifacteur, verrouillage, collecte des journaux)."
      ],
      "explanation": "Un événement isolé dit peu ; c’est la séquence, la source et ce qui suit la connexion qui permettent de conclure."
    }
  },
};
