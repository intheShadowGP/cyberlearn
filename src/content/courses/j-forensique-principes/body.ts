import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'j-forensique-principes',
  lesson: {
    intro:
      "L'investigation numérique (forensique) répond à des questions précises : que s'est-il passé, quand, comment, et qui en est responsable ? Ses conclusions peuvent finir devant un tribunal, un assureur ou un conseil d'administration. Elles doivent donc reposer sur des preuves collectées sans altération, documentées et reproductibles. La rigueur de la méthode compte autant que la technique.",
    sections: [
      {
        id: 'principes',
        title: 'Principes fondamentaux',
        blocks: [
          { t: 'def', term: 'Principe d’échange de Locard', text: "« Tout contact laisse une trace. » Transposé au numérique : toute action sur un système laisse des artefacts, y compris l'action de l'enquêteur lui-même, d'où l'importance de minimiser son empreinte." },
          { t: 'diagram', id: 'volatility-order', caption: 'On acquiert les preuves du plus volatile (caches, mémoire vive) au plus durable (disques, journaux distants, archives) pour ne pas perdre ce qui disparaît le plus vite.', alt: 'Schéma de l’ordre de volatilité des preuves, du plus volatile au plus durable : registres et caches du processeur, mémoire vive, état réseau, disques, journaux distants, sauvegardes et archives.' },
          { t: 'def', term: 'Ordre de volatilité', text: "Ordre de collecte recommandé par la RFC 3227 : on prélève d'abord ce qui disparaît le plus vite." },
          { t: 'list', ordered: true, items: ['Registres et cache du processeur, mémoire vive (processus, connexions, clés).', 'État réseau, table ARP, table de routage, processus en cours.', 'Fichiers temporaires, espace d’échange (swap).', 'Disque.', 'Journaux distants et données de supervision.', 'Configuration physique, topologie réseau.', 'Supports d’archivage.'] },
          { t: 'callout', kind: 'key', text: "On travaille **toujours sur une copie** (image), jamais sur l'original. L'original est scellé et conservé ; toute analyse doit pouvoir être reproduite sur une nouvelle copie." },
        ],
      },
      {
        id: 'integrite',
        title: 'Intégrité et chaîne de conservation',
        blocks: [
          { t: 'p', text: "Pour démontrer qu'une preuve n'a pas été modifiée, on calcule son **empreinte** (SHA-256) au moment de l'acquisition, puis on la recalcule à chaque utilisation. Toute différence invalide la preuve." },
          { t: 'def', term: 'Bloqueur d’écriture', text: "Dispositif matériel ou logiciel qui autorise la lecture d'un support et y interdit toute écriture. Le simple fait de brancher un disque sur un système d'exploitation peut modifier des métadonnées." },
          { t: 'def', term: 'Chaîne de conservation', text: "Registre qui retrace, pour chaque scellé, qui l'a collecté, quand, où, comment, qui l'a eu en garde ensuite et pour quelle raison. Une rupture dans cette chaîne permet de contester la preuve." },
          {
            t: 'example',
            title: 'Fiche de scellé (extrait)',
            blocks: [
              { t: 'table', head: ['Champ', 'Valeur'], rows: [['Scellé', 'INC-2026-014 / S-03'], ['Description', 'SSD 512 Go, n° de série S4EVNX0R…, extrait du portable PC-COMPTA-07'], ['Collecte', '12/03/2026 14:05, bureau 2.14, par J. Martin, en présence de A. Roche'], ['Méthode', 'Image E01 via bloqueur d’écriture matériel, outil FTK Imager 4.7'], ['SHA-256 de l’image', '`9f2c…e41a` (vérifié à 15:22)'], ['Mouvements', '12/03 16:00 remis à P. Leroy (analyse) — 13/03 09:10 retour en coffre']] },
            ],
          },
        ],
      },
      {
        id: 'acquisition',
        title: 'Acquisition : mémoire, disque, journaux',
        blocks: [
          {
            t: 'table',
            head: ['Cible', 'Outils courants', 'Ce qu’on y trouve'],
            rows: [
              ['Mémoire vive', 'WinPMEM, DumpIt, LiME (Linux) ; analyse avec **Volatility**', 'Processus (même cachés), injections de code, connexions, clés, commandes'],
              ['Disque', '**FTK Imager**, `dd`/`dcfldd`, guymager ; formats E01 ou brut', 'Fichiers, fichiers supprimés récupérables, métadonnées'],
              ['Triage rapide', 'KAPE, Velociraptor, scripts de collecte', 'Artefacts ciblés en quelques minutes, sur de nombreuses machines'],
              ['Analyse', '**Autopsy**, **The Sleuth Kit**, Plaso (log2timeline)', 'Exploration, recherche, chronologie consolidée'],
            ],
          },
          { t: 'callout', kind: 'warn', text: "Sur une machine allumée avec chiffrement de disque, l'extinction rend les données inaccessibles sans la clé. Acquérir la mémoire (où la clé réside) et, si possible, une image logique du volume déverrouillé **avant** d'éteindre." },
        ],
      },
      {
        id: 'artefacts',
        title: 'Artefacts Windows et Linux',
        blocks: [
          {
            t: 'table',
            head: ['Artefact', 'Ce qu’il prouve'],
            rows: [
              ['**$MFT** (NTFS)', 'Existence de fichiers, horodatages de création, modification, accès'],
              ['**Prefetch** (`C:\\Windows\\Prefetch`)', 'Un programme a été **exécuté**, nombre et dates des dernières exécutions'],
              ['**Amcache / Shimcache**', 'Présence et exécution d’exécutables, empreintes SHA-1'],
              ['**Journaux d’événements** (`.evtx`)', 'Connexions (4624), créations de processus (4688), services (7045)…'],
              ['**Registre** (NTUSER.DAT, SYSTEM…)', 'Clés Run (persistance), périphériques USB, documents récents'],
              ['**LNK / Jump Lists**', 'Fichiers ouverts par l’utilisateur, même supprimés depuis'],
              ['Linux : `~/.bash_history`, `/var/log/auth.log`, `journalctl`, crontab', 'Commandes, connexions, persistance'],
            ],
          },
          { t: 'def', term: 'Timestomping', text: "Modification volontaire des horodatages d'un fichier pour le faire paraître ancien. Sous NTFS, l'attribut `$STANDARD_INFORMATION` est facile à modifier ; l'attribut `$FILE_NAME` l'est beaucoup moins. Une incohérence entre les deux est un indice fort." },
        ],
      },
      {
        id: 'chronologie',
        title: 'Construire une chronologie fiable',
        blocks: [
          { t: 'list', ordered: true, items: ['Rassembler les horodatages de toutes les sources (disque, journaux, proxy, messagerie, EDR).', '**Normaliser en UTC** : chaque source a son propre format et son fuseau (heure locale, UTC, Unix epoch, FILETIME Windows).', 'Vérifier la dérive des horloges (un serveur mal synchronisé peut avoir plusieurs minutes d’écart).', 'Trier, puis lire la chronologie comme un récit : chaque étape doit être cohérente avec la précédente.', 'Signaler les anomalies (horodatages impossibles, trous dans les journaux) : elles sont souvent des indices.'] },
          {
            t: 'example',
            title: 'Normalisation de fuseaux',
            blocks: [
              { t: 'p', text: "Un journal de pare-feu en heure de Paris indique `09:48:05` le 10 février (UTC+1 en hiver) ; un journal d'EDR en UTC indique `08:47:41`. Une lecture naïve placerait l'événement EDR une heure avant le pare-feu ; en UTC, ils sont séparés de **24 secondes**." },
            ],
          },
          { t: 'callout', kind: 'tip', text: "Un horodatage Unix (epoch) compte les secondes depuis le 1er janvier 1970 UTC : `1770712915` correspond au 10 février 2026 à 08:41:55 UTC." },
        ],
      },
      {
        id: 'memoire',
        title: 'Analyser une image de mémoire vive',
        blocks: [
          { t: 'p', text: 'La mémoire vive contient ce que le disque ne montre pas : les processus **en cours**, leurs lignes de commande, les connexions réseau ouvertes, les modules chargés, parfois des clés de chiffrement. Elle disparaît à l’extinction : c’est la première preuve à acquérir.' },
          {
            t: 'table',
            head: ['Ce qu’on examine', 'Question posée', 'Signal d’alerte'],
            rows: [
              ['**Liste et arbre des processus**', 'Qui a lancé quoi ?', 'Une application bureautique parente d’un interpréteur de commandes'],
              ['**Balayage des structures**', 'Un processus échappe-t-il à la liste active ?', 'Présent dans le balayage, absent de la liste : processus terminé ou dissimulé'],
              ['**Lignes de commande**', 'Avec quels arguments ?', 'Commande encodée, chemin dans un répertoire utilisateur ou temporaire'],
              ['**Connexions réseau**', 'Avec qui le système communique-t-il ?', 'Destination inattendue, processus sans raison de communiquer'],
              ['**Modules et code injecté**', 'Du code a-t-il été chargé dans un autre processus ?', 'Région mémoire exécutable sans fichier correspondant'],
            ],
          },
          { t: 'list', items: ['**Support externe** : l’image est écrite sur un disque propre, jamais sur le disque examiné ; l’empreinte est calculée aussitôt.', '**Outil documenté** : nom, version, commandes et heure sont consignés ; l’outil modifie lui-même la mémoire, ce qu’on mentionne.', '**Croisement** : un indice en mémoire se confirme par le disque, les journaux ou le réseau.', '**Prudence** : un processus inhabituel n’est pas forcément malveillant ; on décrit, on vérifie, on conclut.'] },
          {
            t: 'example',
            title: 'Lecture d’un arbre de processus',
            blocks: [
              { t: 'p', text: 'Dans une image mémoire, `explorer.exe` lance `winword.exe`, qui lance `powershell.exe` avec une longue commande encodée, qui ouvre une connexion vers une adresse externe inconnue. Chaque maillon est cohérent avec l’ouverture d’un document piégé.' },
              { t: 'p', text: 'Lecture : l’enchaînement est suspect, mais il reste à le confirmer : le document ouvert (artefacts disque, courriel), la commande décodée, la destination (journaux réseau) et d’autres hôtes touchés.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: 'Acquérir la mémoire modifie la mémoire : on le sait, on le documente et on choisit un outil reconnu, lancé depuis un support externe.' },
        ],
      },
      {
        id: 'rapport',
        title: 'Rapport, valeur probante et cadre légal',
        blocks: [
          { t: 'p', text: 'Une investigation ne vaut que par ce qu’on peut en démontrer et en défendre. Le rapport est le produit final : il doit être **clair**, **étayé** et **contestable** (c’est-à-dire vérifiable par un tiers).' },
          {
            t: 'table',
            head: ['Partie', 'Contenu'],
            rows: [
              ['**Mission et périmètre**', 'Question posée, supports concernés, limites'],
              ['**Méthode**', 'Outils et versions, commandes, empreintes, chaîne de conservation'],
              ['**Constats**', 'Faits observés, chacun rattaché à une preuve référencée'],
              ['**Interprétation**', 'Ce qu’on en déduit, avec un **niveau de confiance** et les hypothèses alternatives'],
              ['**Limites**', 'Ce qu’on n’a pas pu vérifier, les sources manquantes'],
            ],
          },
          { t: 'list', items: ['**Faits et interprétation séparés** : le lecteur doit voir ce qui est constaté et ce qui est déduit.', '**Niveau de confiance** : conclusion appuyée par plusieurs sources concordantes, ou par un seul indice.', '**Reproductibilité** : un tiers, avec la même copie et la même méthode, retrouve les mêmes résultats.', '**Neutralité** : l’enquêteur établit des faits ; la responsabilité juridique n’est pas son rôle.'] },
          { t: 'callout', kind: 'legal', title: 'Cadre légal', text: 'Une enquête interne se fait dans le respect du droit du travail, de la charte informatique et du RGPD : finalité légitime, information préalable, proportionnalité, protection des échanges personnels, accès limités et tracés. Une enquête judiciaire suit les règles de la procédure pénale. Dans le doute, on consulte le service juridique avant d’examiner des données de personnes.' },
          { t: 'list', items: ['**Minimisation** : on ne copie et ne cite que ce que la mission justifie.', '**Conservation** : la copie de travail est conservée ou détruite selon la politique et la loi, et ce choix est consigné.', '**Confidentialité** : le rapport n’est transmis qu’aux personnes habilitées.'] },
        ],
      },
      {
        id: 'cas-chronologie',
        title: "Étude de cas : reconstituer un incident à partir de trois sources",
        blocks: [
          { t: 'p', text: "Un serveur web a hébergé un fichier inattendu. Aucune source ne raconte l’histoire entière : c’est leur **corrélation** qui permet de reconstituer l’enchaînement. Les horodatages ci-dessous sont normalisés en UTC." },
          {
            t: 'table',
            caption: "Chronologie assemblée (adresses de documentation)",
            head: ["Heure (UTC)", "Source", "Événement"],
            rows: [
              ["02:14:07", "Journal du serveur web", "Requête `POST /upload.php` depuis 203.0.113.50"],
              ["02:14:08", "Système de fichiers", "Création de `/var/www/html/img/cache.php` (date de création du fichier)"],
              ["02:14:40", "Journal du serveur web", "Requêtes `GET /img/cache.php?c=...` depuis 203.0.113.50"],
              ["02:15:02", "Journaux système", "Processus `sh` lancé par le compte du serveur web"],
              ["02:15:30", "Pare-feu", "Connexion sortante du serveur vers 198.51.100.7 sur le port 4444"],
            ],
          },
          { t: 'list', items: ["**Hypothèse** : un fichier a été déposé par le formulaire de téléversement, puis utilisé pour exécuter des commandes.", "**Support** : la création du fichier suit la requête `POST` d’une seconde ; les appels à ce fichier précèdent le lancement du processus `sh`.", "**À vérifier** : le contenu du fichier, l’absence d’autres fichiers déposés, d’autres connexions de la même adresse avant 02:14.", "**À ne pas conclure** : l’identité de l’attaquant. Une adresse n’identifie pas une personne."] },
          { t: 'code', lang: "bash", caption: "Quelques commandes pour retrouver ces éléments (sur une copie)", code: "grep \"203.0.113.50\" access.log                  # activité de l’adresse dans le journal web\nfind /var/www/html -type f -newermt \"2026-11-26 02:00\" ! -newermt \"2026-11-26 03:00\"   # fichiers créés dans la fenêtre\nstat /var/www/html/img/cache.php                # dates du fichier (modification, changement, accès)" },
          { t: 'callout', kind: 'warn', text: "Vérifiez toujours le **fuseau horaire et le décalage d’horloge** de chaque source avant de les rapprocher : une heure locale mélangée à de l’UTC peut inverser l’ordre des événements et ruiner la reconstitution." },
        ],
      },
      {
        id: 'rapport-modele',
        title: "Structure d’un rapport d’investigation",
        blocks: [
          {
            t: 'table',
            head: ["Partie", "Contenu", "À éviter"],
            rows: [
              ["Synthèse", "Question posée, conclusion principale, niveau de confiance, en une page", "Jargon que le lecteur décisionnaire ne comprend pas"],
              ["Contexte et périmètre", "Demandeur, autorisation, dates, systèmes concernés", "Omettre ce qui n’a **pas** été examiné"],
              ["Méthode", "Outils et versions, empreintes des supports, ordre des opérations", "Décrire sans permettre de refaire"],
              ["Constats", "Faits observés, avec leur source précise (fichier, ligne, horodatage)", "Mélanger faits et interprétations"],
              ["Analyse", "Hypothèses, éléments pour et contre, chronologie", "Conclure au-delà de ce que les preuves permettent"],
              ["Limites et recommandations", "Ce qui reste incertain, actions correctives", "Promettre une certitude que les données ne donnent pas"],
            ],
          },
          { t: 'callout', kind: 'key', text: "Séparez systématiquement trois niveaux : **ce qui est constaté**, **ce qui en est déduit**, **ce qui reste hypothétique**. C’est cette discipline qui donne sa valeur probante au rapport." },
        ],
      },
    ],
    useCases: [
      'Réponse à incident : déterminer le vecteur initial et la date de compromission pour borner le périmètre.',
      'Contentieux : produire des preuves recevables (fuite de données par un salarié, fraude).',
      'Assurance cyber : documenter l’incident pour l’assureur avec une chronologie étayée.',
    ],
    commonMistakes: [
      "Rapprocher des horodatages sans les ramener au même fuseau horaire.",
      "Attribuer une action à une personne à partir d’une seule adresse IP.",
      'Analyser directement le disque original au lieu d’une image.',
      'Éteindre une machine chiffrée avant d’avoir acquis la mémoire.',
      'Mélanger des horodatages de fuseaux différents sans les normaliser.',
      'Faire confiance aux seuls horodatages $STANDARD_INFORMATION.',
      'Ne pas documenter ses propres actions sur le système (qui ont elles aussi laissé des traces).',
    ],
    bestPractices: [
      'Respecter l’ordre de volatilité et documenter chaque action avec l’heure.',
      'Calculer et vérifier les empreintes des images à chaque étape.',
      'Tenir une chaîne de conservation sans interruption.',
      'Normaliser toutes les dates en UTC et noter la dérive des horloges.',
      'Croiser au moins deux sources indépendantes avant d’affirmer un fait.',
    ],
    keyPoints: [
      "Corréler plusieurs sources ; normaliser les horodatages ; séparer constat, déduction et hypothèse.",
      'Ordre de volatilité : mémoire d’abord, archives en dernier.',
      'Empreinte SHA-256 + chaîne de conservation = preuve défendable.',
      'Prefetch prouve l’exécution ; $MFT l’existence ; les journaux le contexte.',
      'Une chronologie se construit en UTC, en croisant les sources.',
    ],
  },
  practice: [
    {
      id: 'labo-timeline',
      kind: 'simulation',
      title: 'Laboratoire : reconstituer une chronologie multi-sources',
      context: [{ t: 'p', text: 'Huit artefacts issus de sources aux formats de date différents. Un convertisseur vous aide à tout ramener en UTC.' }],
      steps: ['Convertir chaque horodatage en UTC.', 'Ordonner les événements.', 'Repérer l’artefact dont les dates sont incohérentes.'],
      labId: 'timeline-lab',
    },
    {
      id: 'collecte-ordre',
      kind: 'scenario',
      title: 'Scénario : collecte sur un portable allumé',
      context: [{ t: 'p', text: 'Vous arrivez sur le bureau d’un comptable dont le portable (allumé, session ouverte, disque chiffré BitLocker) a été signalé par l’EDR. Vous disposez d’une clé USB d’outils, d’un disque externe et d’un bloqueur d’écriture.' }],
      steps: ['Lister vos actions dans l’ordre.', 'Préciser ce que vous documentez à chaque étape.', 'Indiquer quand et comment l’ordinateur sera éteint.'],
    },
    {
      id: 'lire-memoire',
      kind: 'analysis',
      title: 'Analyse : lire l’arbre des processus d’une image mémoire',
      context: [
        { t: 'code', lang: 'text', code: 'PID   PPID  Nom              Origine          Ligne de commande (extrait)\n 612   584  explorer.exe     liste active     C:\\Windows\\explorer.exe\n3120   612  winword.exe      liste active     "WINWORD.EXE" /n "C:\\Users\\a.roche\\Downloads\\facture-0312.docm"\n3344  3120  powershell.exe   liste active     powershell -w hidden -enc SQBFAFgAIAAoAE4AZQB3AC0A…\n3790  3344  svchost32.exe    balayage seul    (processus terminé)\n\nConnexions : PID 3790 -> 198.51.100.44:443 (ESTABLISHED à la capture)' },
      ],
      steps: ['Décrire l’enchaînement des processus et ce qui est suspect.', 'Dire pourquoi `svchost32.exe` n’apparaît que dans le balayage et ce que cela suggère.', 'Lister les vérifications à faire sur le disque, les journaux et le réseau, puis les actions de confinement.'],
    },
  ],
  questions,
  resources: [
    { title: 'RFC 3227 — Guidelines for Evidence Collection and Archiving', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc3227' },
    { title: 'NIST SP 800-86 — Integrating Forensic Techniques into Incident Response', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/86/final' },
    { title: 'The Sleuth Kit & Autopsy', source: 'Basis Technology', url: 'https://www.sleuthkit.org/' },
    { title: 'Volatility 3', source: 'Volatility Foundation', url: 'https://volatilityfoundation.org/' },
  ],
};
