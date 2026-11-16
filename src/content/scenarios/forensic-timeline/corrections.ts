import type { ScenarioCorrections } from '../../scenarios';

export const corrections: ScenarioCorrections = {
  scenarioId: 'forensic-timeline',
  questions: {
    'sc-for-q1': {
      type: 'single',
      correct: 'a',
      explanation:
        "L'**ordre de volatilité** impose de collecter d'abord ce qui disparaît le plus vite : la **mémoire vive** (processus, connexions, clés en clair), avant le disque. Éteindre ou attendre fait perdre ces éléments volatils.",
      whyWrong: {
        b: "La mémoire vive a au contraire une grande valeur de preuve (elle révèle svc.exe et sa connexion sortante).",
        c: "L'ordre compte : la mémoire se perd à l'extinction, pas le disque.",
        d: "Se limiter aux fichiers ouverts ignore l'essentiel des artefacts.",
      },
      refs: ['RFC 3227 (ordre de volatilité)'],
    },
    'sc-for-q2': {
      type: 'short',
      accepted: ['facture.pdf.exe', 'facture.pdf.exe (prefetch)', 'FACTURE.PDF.EXE'],
      explanation:
        "Le Prefetch `FACTURE.PDF.EXE-6A2F1C03.pf` atteste l'exécution de **facture.pdf.exe**, téléchargé à 14:02:10 puis exécuté à 14:02:48. La double extension `.pdf.exe` est un leurre classique : le fichier est un exécutable, pas un PDF.",
      refs: ['Source 2 : artefact Prefetch (preuve d’exécution)'],
    },
    'sc-for-q3': {
      type: 'single',
      correct: 'a',
      explanation:
        "Une entrée dans `HKCU\\…\\Run` et une tâche planifiée à déclencheur horaire, pointant toutes deux vers `%TEMP%\\svc.exe`, servent à **relancer automatiquement** le programme (au démarrage et à intervalle) : c'est de la **persistance**.",
      whyWrong: {
        b: "Rien n'indique de chiffrement de fichiers ; ces artefacts concernent le redémarrage du programme.",
        c: "Les mises à jour Windows ne se lancent pas via une clé Run utilisateur pointant vers %TEMP%.",
        d: "Ce ne sont pas des mécanismes de journalisation d'audit.",
      },
      refs: ['Artefacts de persistance Windows : clé Run, tâches planifiées'],
    },
    'sc-for-q4': {
      type: 'truefalse',
      correct: true,
      explanation:
        "Travailler sur une **copie** scellée par une empreinte (SHA-256) laisse le support original intact et permet de prouver que la copie n'a pas été modifiée. C'est un principe fondamental de l'intégrité de la preuve.",
      refs: ['Intégrité de la preuve : image vérifiée par empreinte, analyse sur copie'],
    },
    'sc-for-q5': {
      type: 'single',
      correct: 'a',
      explanation:
        "Les horodatages de la source 2 sont sans ambiguïté : **téléchargement** (14:02:10), **exécution** via Prefetch (14:02:48), puis **création de la persistance** (clé Run et tâche à 14:03:05–14:03:06, dépôt de svc.exe à 14:03:12). Reconstituer cet ordre est le cœur de la chronologie.",
      whyWrong: {
        b: "La persistance est créée après l'exécution, pas avant le téléchargement.",
        c: "Un fichier ne peut pas être exécuté avant d'exister sur le poste.",
        d: "Le Prefetch prouve que l'exécution a bien eu lieu.",
      },
      refs: ['Source 2 : horodatages des artefacts'],
    },
    'sc-for-q6': {
      type: 'multi',
      correct: ['a', 'b', 'c'],
      explanation:
        "On isole le poste, on neutralise la persistance (clé Run, tâche planifiée, binaire), et on **chasse** l'indicateur (le binaire `svc.exe` et la connexion vers 203.0.113.77) sur le reste du parc. Tout cela sans détruire les preuves déjà acquises.",
      whyWrong: {
        d: "Effacer l'image disque détruit la preuve de l'incident ; elle doit être conservée.",
      },
      refs: ['NIST SP 800-61r2 ; chasse aux indicateurs de compromission'],
    },
    'sc-for-q7': {
      type: 'single',
      correct: 'a',
      explanation:
        "La **chaîne de conservation** — qui a manipulé la preuve, quand, comment, avec des empreintes d'intégrité à chaque étape — est ce qui rend la preuve recevable et démontre qu'elle n'a pas été altérée. La compétence de l'analyste ou l'outil employé ne suffisent pas à l'établir.",
      whyWrong: {
        b: "La compétence de l'analyste aide, mais ne prouve pas l'intégrité de la preuve.",
        c: "La rapidité ne garantit pas la traçabilité.",
        d: "Un outil libre correctement documenté est tout aussi recevable qu'un outil commercial.",
      },
      refs: ['Chaîne de conservation (chain of custody) et intégrité'],
    },
  },
  debrief: [
    {
      t: 'p',
      text: "**Reconstitution.** À 14:02, `m.leroy` télécharge `facture.pdf.exe` (double extension trompeuse) et l'exécute (Prefetch). Dans la minute, le programme installe sa **persistance** — clé `Run` et tâche planifiée « MajPDF » pointant vers `%TEMP%\\svc.exe` — et dépose ce binaire, qui tourne en mémoire (PID 4120) avec une connexion sortante vers 203.0.113.77.",
    },
    {
      t: 'list',
      ordered: true,
      items: [
        '**Acquisition** : mémoire d’abord, puis disque (ordre de volatilité) ; copies scellées par empreinte.',
        '**Chronologie** : téléchargement → exécution → persistance, établie par les horodatages.',
        '**Qualification** : persistance (Run + tâche) et canal sortant (indicateurs à chasser).',
        '**Preuve** : analyse sur copie vérifiée et chaîne de conservation pour la recevabilité.',
      ],
    },
    {
      t: 'callout',
      kind: 'key',
      text: "La démarche forensique ne consiste pas à trouver « le » fichier malveillant, mais à **ordonner les faits** à partir d'artefacts multiples, tout en **préservant l'intégrité** des preuves (copie vérifiée, chaîne de conservation) pour qu'elles restent exploitables et recevables.",
    },
    {
      t: 'p',
      text: "**Prévention / détection** : surveiller les créations de clés `Run` et de tâches planifiées, alerter sur les exécutables dans `%TEMP%` et les doubles extensions, et conserver Prefetch et journaux pour permettre la reconstruction a posteriori.",
    },
  ],
};
