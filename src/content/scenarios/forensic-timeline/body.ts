import type { ScenarioBody } from '../../scenarios';

export const body: ScenarioBody = {
  scenarioId: 'forensic-timeline',
  dossier: [
    {
      t: 'callout',
      kind: 'legal',
      title: 'Données fictives',
      text: "Poste, comptes, chemins et horodatages sont inventés. Les artefacts (Prefetch, clé Run, tâche planifiée) et les principes forensiques sont réels ; les valeurs ne le sont pas. L'adresse 203.0.113.77 appartient à une plage réservée à la documentation (RFC 5737).",
    },
    {
      t: 'p',
      text: "PC-RH-14 est suspecté. Les preuves ont été acquises **hors ligne** : capture de la mémoire vive puis image du disque, chacune scellée par une empreinte SHA-256. Vous travaillez sur les **copies**. **Lisez les trois sources : l'ordre des faits s'en déduit.**",
    },
    { t: 'h', text: 'Source 1 — Contexte d’acquisition' },
    {
      t: 'table',
      head: ['Champ', 'Valeur'],
      rows: [
        ['Poste', 'PC-RH-14 (compte `m.leroy`)'],
        ['Preuves acquises', 'Mémoire vive (capture), puis image disque'],
        ['Scellé', 'Empreinte SHA-256 relevée et consignée pour chaque preuve'],
        ['Analyse', 'Réalisée sur une copie vérifiée, jamais sur le support original'],
      ],
    },
    { t: 'h', text: 'Source 2 — Chronologie des artefacts (extrait)' },
    {
      t: 'code',
      lang: 'text',
      caption: 'Heure · type · artefact',
      code: [
        '14:02:10  CRÉÉ      C:\\Users\\m.leroy\\Downloads\\facture.pdf.exe  (fichier téléchargé)',
        '14:02:48  EXÉCUTÉ   Prefetch : FACTURE.PDF.EXE-6A2F1C03.pf  (première exécution)',
        '14:03:05  CRÉÉ      Clé Run « MajPDF » → %TEMP%\\svc.exe',
        '14:03:06  CRÉÉ      Tâche planifiée « MajPDF » (déclencheur horaire)',
        '14:03:12  CRÉÉ      C:\\Users\\m.leroy\\AppData\\Local\\Temp\\svc.exe',
      ].join('\n'),
    },
    { t: 'h', text: 'Source 3 — Artefacts de persistance et mémoire' },
    {
      t: 'code',
      lang: 'text',
      caption: 'Source · détail',
      code: [
        '[Registre]  HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run  "MajPDF" = %TEMP%\\svc.exe',
        '[Planifié]  \\MajPDF : déclencheur horaire, action = %TEMP%\\svc.exe',
        '[Mémoire]   svc.exe (PID 4120), parent explorer.exe, connexion sortante établie vers 203.0.113.77:443',
      ].join('\n'),
    },
  ],
  questions: [
    {
      id: 'sc-for-q1',
      type: 'single',
      difficulty: 1,
      skills: ['j-principes'],
      prompt: 'Sur une machine encore allumée, dans quel ordre acquérir les preuves ?',
      options: [
        { id: 'a', text: 'La mémoire vive d’abord, puis le disque' },
        { id: 'b', text: 'Le disque d’abord, car la mémoire vive n’a aucune valeur de preuve' },
        { id: 'c', text: 'Peu importe l’ordre, du moment que l’on relève les empreintes' },
        { id: 'd', text: 'Uniquement les fichiers ouverts au moment de l’intervention' },
      ],
    },
    {
      id: 'sc-for-q2',
      type: 'short',
      difficulty: 2,
      skills: ['j-timeline'],
      prompt: 'D’après le Prefetch (source 2), quel fichier téléchargé a été exécuté sur le poste ?',
      placeholder: 'ex. un nom de fichier',
    },
    {
      id: 'sc-for-q3',
      type: 'single',
      difficulty: 2,
      skills: ['j-artefacts'],
      prompt: 'La clé `Run` « MajPDF » et la tâche planifiée du même nom (source 3) servent avant tout à quoi ?',
      options: [
        { id: 'a', text: 'Assurer la persistance : relancer automatiquement le programme' },
        { id: 'b', text: 'Chiffrer les fichiers de l’utilisateur contre rançon' },
        { id: 'c', text: 'Accélérer le démarrage légitime des mises à jour Windows' },
        { id: 'd', text: 'Journaliser les connexions réseau à des fins d’audit interne' },
      ],
    },
    {
      id: 'sc-for-q4',
      type: 'truefalse',
      difficulty: 2,
      skills: ['j-preuve'],
      prompt: 'Analyser une copie (image) dont l’empreinte a été vérifiée, plutôt que le support original, préserve l’intégrité de la preuve.',
    },
    {
      id: 'sc-for-q5',
      type: 'single',
      difficulty: 3,
      skills: ['j-timeline'],
      prompt: 'D’après les horodatages de la source 2, dans quel ordre se sont enchaînés les faits ?',
      options: [
        { id: 'a', text: 'Téléchargement, puis exécution, puis création de la persistance' },
        { id: 'b', text: 'Création de la persistance, puis téléchargement, puis exécution du fichier' },
        { id: 'c', text: 'Exécution du fichier avant même qu’il n’ait été téléchargé sur le poste' },
        { id: 'd', text: 'Téléchargement et persistance simultanés, l’exécution n’ayant jamais eu lieu' },
      ],
    },
    {
      id: 'sc-for-q6',
      type: 'multi',
      difficulty: 2,
      skills: ['i-ir'],
      prompt: 'Quelles suites immédiates sont appropriées ? (plusieurs réponses)',
      options: [
        { id: 'a', text: 'Isoler PC-RH-14 du réseau' },
        { id: 'b', text: 'Supprimer la clé Run et la tâche planifiée « MajPDF », et neutraliser `svc.exe`' },
        { id: 'c', text: 'Rechercher `svc.exe` et la connexion vers 203.0.113.77 sur les autres postes' },
        { id: 'd', text: 'Effacer l’image disque acquise pour libérer de l’espace' },
      ],
    },
    {
      id: 'sc-for-q7',
      type: 'single',
      difficulty: 2,
      skills: ['j-preuve'],
      prompt: 'Qu’est-ce qui garantit la recevabilité de la preuve devant un tiers (juge, auditeur) ?',
      options: [
        { id: 'a', text: 'La chaîne de conservation : traçabilité continue et empreintes d’intégrité' },
        { id: 'b', text: 'Le fait que l’analyste soit certifié et expérimenté dans son domaine' },
        { id: 'c', text: 'La rapidité avec laquelle l’analyse a été menée après les faits' },
        { id: 'd', text: 'L’emploi d’un outil commercial reconnu plutôt que d’un outil libre' },
      ],
    },
  ],
};
