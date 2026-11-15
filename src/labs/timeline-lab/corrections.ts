import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'timeline-lab',
  questions: {
    'tl-q1': { type: 'short', accepted: ['08:41:55', '08:41:55 utc', '8:41:55'], explanation: 'L’epoch 1770712915 correspond au 10 février 2026 à 08:41:55 UTC, soit 13 minutes après la réception du courriel (09:30:02 +0100 = 08:30:02 UTC).' },
    'tl-q2': { type: 'short', accepted: ['08:47:30', '08:47:30 utc', '8:47:30'], explanation: 'Le rapport Prefetch est en heure de Paris : 09:47:30 en février (UTC+1) donne 08:47:30 UTC. Il est cohérent avec la création de PowerShell par FACTURE.EXE 11 secondes plus tard (08:47:41 UTC).' },
    'tl-q3': { type: 'single', correct: 'a', explanation: 'Le pare-feu (09:48:05 heure de Paris = 08:48:05 UTC) enregistre la connexion 35 secondes après l’exécution (08:47:30 UTC). Une lecture sans normalisation laisserait croire à un écart d’une heure.', whyWrong: { b: 'L’écart apparent d’une heure provient uniquement du fuseau horaire.' } },
    'tl-q4': { type: 'truefalse', correct: false, explanation: 'L’attribut $FILE_NAME indique une création le 10 février à 08:48:30 UTC, 25 secondes après la connexion vers le serveur de l’attaquant. Le $SI de 2024 a été antidaté (timestomping) pour faire passer le fichier pour ancien.' },
    'tl-q5': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Courriel → visite → téléchargement → exécution → PowerShell encodé → connexion sortante → dépôt de updater.exe et clé Run : chaque étape est attestée par au moins un artefact.', whyWrong: { d: 'Aucun artefact ne concerne le VPN ; tout indique un hameçonnage.' } },
  },
  debrief: [
    { t: 'h', text: 'Chronologie normalisée (UTC, 10 février 2026)' },
    { t: 'table', head: ['UTC', 'Événement', 'Source'], rows: [['08:30:02', 'Réception du courriel d’hameçonnage', 'Messagerie'], ['08:41:55', 'Visite de la page de téléchargement', 'Historique Chrome'], ['08:42:13', 'Téléchargement de facture.zip', 'Proxy'], ['08:42:20', 'Création de facture.zip sur le disque', '$MFT'], ['08:47:30', 'Exécution de FACTURE.EXE', 'Prefetch'], ['08:47:41', 'PowerShell encodé lancé par FACTURE.EXE', '4688'], ['08:48:05', 'Connexion vers 203.0.113.9:443', 'Pare-feu'], ['08:48:30', 'Dépôt de updater.exe (antidaté) + clé Run', '$MFT ($FN)']] },
    { t: 'callout', kind: 'key', title: 'Mesures défensives', text: 'Filtrage des pièces jointes et liens (sandbox), blocage de l’exécution depuis les dossiers temporaires et de téléchargement (AppLocker / WDAC), règles ASR contre les processus enfants suspects, journalisation PowerShell (4104), et sensibilisation au signalement des courriels suspects.' },
  ],
};
