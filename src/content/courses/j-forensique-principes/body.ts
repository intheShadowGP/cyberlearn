import type { CourseBody } from '../../types';

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
    ],
    useCases: [
      'Réponse à incident : déterminer le vecteur initial et la date de compromission pour borner le périmètre.',
      'Contentieux : produire des preuves recevables (fuite de données par un salarié, fraude).',
      'Assurance cyber : documenter l’incident pour l’assureur avec une chronologie étayée.',
    ],
    commonMistakes: [
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
      context: [{ t: 'p', text: 'Sept artefacts issus de sources aux formats de date différents. Un convertisseur vous aide à tout ramener en UTC.' }],
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
  ],
  questions: [
    { id: 'for-q1', type: 'single', difficulty: 1, skills: ['j-principes'], prompt: 'Selon l’ordre de volatilité, que faut-il collecter en premier ?', options: [{ id: 'a', text: 'Le disque dur' }, { id: 'b', text: 'La mémoire vive' }, { id: 'c', text: 'Les sauvegardes sur bande' }, { id: 'd', text: 'Les journaux archivés' }] },
    { id: 'for-q2', type: 'truefalse', difficulty: 1, skills: ['j-principes'], prompt: 'L’analyse doit être réalisée sur une copie de la preuve, l’original étant conservé sous scellé.' },
    { id: 'for-q3', type: 'short', difficulty: 1, skills: ['j-principes'], prompt: 'Quelle RFC décrit les lignes directrices de collecte et l’ordre de volatilité ? (numéro)' },
    { id: 'for-q4', type: 'single', difficulty: 2, skills: ['j-preuve'], prompt: 'Comment démontrer qu’une image disque n’a pas été modifiée depuis son acquisition ?', options: [{ id: 'a', text: 'En vérifiant sa taille' }, { id: 'b', text: 'En comparant son empreinte SHA-256 à celle calculée lors de l’acquisition' }, { id: 'c', text: 'En l’ouvrant avec l’explorateur de fichiers' }, { id: 'd', text: 'En la compressant' }] },
    { id: 'for-q5', type: 'multi', difficulty: 2, skills: ['j-preuve'], prompt: 'Quelles informations doivent figurer dans la chaîne de conservation ?', options: [{ id: 'a', text: 'Qui a collecté la preuve, quand et comment' }, { id: 'b', text: 'Chaque transfert de garde avec date et motif' }, { id: 'c', text: 'L’empreinte de l’image' }, { id: 'd', text: 'L’avis personnel de l’enquêteur sur la culpabilité' }] },
    { id: 'for-q6', type: 'truefalse', difficulty: 2, skills: ['j-preuve'], prompt: 'Brancher un disque saisi sur un poste Windows sans bloqueur d’écriture peut modifier des métadonnées de la preuve.' },
    { id: 'for-q7', type: 'single', difficulty: 2, skills: ['j-artefacts'], prompt: 'Quel artefact Windows prouve qu’un programme a été exécuté, avec ses dernières dates d’exécution ?', options: [{ id: 'a', text: 'Le Prefetch' }, { id: 'b', text: 'Le fichier hosts' }, { id: 'c', text: 'La corbeille' }, { id: 'd', text: 'Le fond d’écran' }] },
    { id: 'for-q8', type: 'short', difficulty: 2, skills: ['j-artefacts'], prompt: 'Quel outil libre est la référence pour analyser une image de mémoire vive ?' },
    { id: 'for-q9', type: 'multi', difficulty: 2, skills: ['j-artefacts'], prompt: 'Quels artefacts peuvent révéler un mécanisme de persistance sous Windows ?', options: [{ id: 'a', text: 'Les clés de registre Run' }, { id: 'b', text: 'L’événement 7045 (installation d’un service)' }, { id: 'c', text: 'Les tâches planifiées' }, { id: 'd', text: 'La résolution de l’écran' }] },
    { id: 'for-q10', type: 'single', difficulty: 3, skills: ['j-artefacts', 'j-timeline'], prompt: 'Un exécutable a une date de création $STANDARD_INFORMATION en 2023, mais une date de création $FILE_NAME de la semaine dernière. Que suspectez-vous ?', options: [{ id: 'a', text: 'Une erreur de disque' }, { id: 'b', text: 'Une manipulation des horodatages (timestomping)' }, { id: 'c', text: 'Une mise à jour Windows' }, { id: 'd', text: 'Un fichier compressé' }] },
    { id: 'for-q11', type: 'truefalse', difficulty: 2, skills: ['j-timeline'], prompt: 'Un journal en heure de Paris (hiver) indiquant 10:00 et un journal en UTC indiquant 09:00 décrivent le même instant.' },
    { id: 'for-q12', type: 'short', difficulty: 2, skills: ['j-timeline'], prompt: 'Dans quel référentiel horaire faut-il normaliser tous les horodatages d’une chronologie ? (sigle)' },
    { id: 'for-q13', type: 'open', difficulty: 3, skills: ['j-principes', 'j-preuve'], prompt: 'Décrivez, dans l’ordre, la collecte sur un portable allumé dont le disque est chiffré par BitLocker, en justifiant chaque étape.' },
    { id: 'for-q14', type: 'single', difficulty: 2, skills: ['j-timeline'], prompt: 'Que représente l’horodatage Unix `0` ?', options: [{ id: 'a', text: 'Le 1er janvier 1900 à minuit, heure locale' }, { id: 'b', text: 'Le 1er janvier 1970 à 00:00:00 UTC' }, { id: 'c', text: 'La date d’installation du système' }, { id: 'd', text: 'Le 1er janvier 1601 UTC' }] },
    { id: 'for-q15', type: 'open', difficulty: 3, skills: ['j-timeline', 'j-artefacts'], prompt: 'Votre chronologie présente un trou de trois heures dans les journaux de sécurité d’un serveur, pendant la période suspecte. Quelles hypothèses formulez-vous et comment les vérifiez-vous ?' },
    { id: 'for-q16', type: 'multi', difficulty: 2, skills: ['j-preuve', 'j-principes'], prompt: 'Quelles pratiques renforcent la valeur probante d’une investigation ?', options: [{ id: 'a', text: 'Documenter chaque action horodatée, y compris les siennes' }, { id: 'b', text: 'Croiser plusieurs sources indépendantes' }, { id: 'c', text: 'Supprimer les fichiers non pertinents de l’image pour gagner de la place' }, { id: 'd', text: 'Utiliser des outils et méthodes reproductibles' }] },
  ],
  resources: [
    { title: 'RFC 3227 — Guidelines for Evidence Collection and Archiving', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc3227' },
    { title: 'NIST SP 800-86 — Integrating Forensic Techniques into Incident Response', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/86/final' },
    { title: 'The Sleuth Kit & Autopsy', source: 'Basis Technology', url: 'https://www.sleuthkit.org/' },
    { title: 'Volatility 3', source: 'Volatility Foundation', url: 'https://volatilityfoundation.org/' },
  ],
};
