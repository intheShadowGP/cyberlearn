import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'windows-persistence-lab',
  questions: {
    'win-q1': { type: 'single', correct: 'b', explanation: 'À 09:14, Outlook ouvre Offre_emploi_RH.docm dans Word, qui lance cmd.exe puis un PowerShell caché qui télécharge un exécutable. La relation WINWORD → cmd → powershell est la signature d’une macro malveillante.' },
    'win-q2': { type: 'short', accepted: ['teamsupdate'], explanation: 'L’événement Sysmon 13 de 09:14:24 montre la valeur Run « TeamsUpdate » pointant vers update.exe dans AppData : exécution à chaque ouverture de session de l’utilisatrice (ATT&CK T1547.001).' },
    'win-q3': { type: 'multi', correct: ['a', 'b'], explanation: 'Deux mécanismes indépendants : la clé Run et la tâche planifiée au démarrage de session (T1053.005), nommée pour ressembler à un composant légitime. Les attaquants doublent souvent la persistance pour survivre à un nettoyage partiel.', whyWrong: { c: 'ms-teams.exe, dans Program Files, communique avec l’infrastructure Microsoft : c’est le vrai Teams.', d: 'Le document est le vecteur initial ; il ne se réexécute pas seul.' } },
    'win-q4': { type: 'short', accepted: ['203.0.113.66'], explanation: 'update.exe se connecte à 203.0.113.66:443 toutes les 60 secondes environ : c’est un « beacon », caractéristique d’un implant qui attend des ordres. 198.51.100.40 n’a servi qu’au téléchargement initial.' },
    'win-q5': { type: 'truefalse', correct: false, explanation: 'Il faut aussi supprimer la valeur Run et la tâche planifiée, vérifier l’absence d’autres charges, réinitialiser les identifiants de l’utilisatrice (vol possible) et bloquer les indicateurs. En pratique, la réinstallation du poste est souvent préférable.' },
    'win-q6': { type: 'single', correct: 'a', explanation: 'Le blocage des macros pour les fichiers marqués comme provenant d’Internet (Mark of the Web) et la règle ASR « bloquer la création de processus enfants par Office » auraient interrompu la chaîne dès la première étape.', whyWrong: { d: 'Des droits d’administration auraient au contraire permis une persistance au niveau du système.' } },
  },
  debrief: [
    { t: 'table', head: ['Heure', 'Étape', 'Technique ATT&CK'], rows: [['09:14:03', 'Ouverture du .docm depuis Outlook', 'T1566.001 Pièce jointe d’hameçonnage'], ['09:14:19', 'Macro → cmd → PowerShell caché', 'T1059.001 PowerShell'], ['09:14:21', 'Téléchargement de update.exe', 'T1105 Transfert d’outil'], ['09:14:24', 'Valeur Run TeamsUpdate', 'T1547.001 Clés Run'], ['09:14:25', 'Tâche « OneDrive Sync Check »', 'T1053.005 Tâche planifiée'], ['09:15–09:17', 'Beacon vers 203.0.113.66:443', 'T1071.001 Protocole web']] },
    { t: 'callout', kind: 'key', title: 'Éradication et prévention', text: 'Isoler le poste, collecter mémoire et artefacts, supprimer valeur Run, tâche et binaire, bloquer 198.51.100.40 et 203.0.113.66, rechercher update.exe (empreinte) et « OneDrive Sync Check » sur tout le parc, réinitialiser les identifiants, puis réinstaller si un doute subsiste. Prévention : macros bloquées pour les fichiers venant d’Internet, règles ASR, AppLocker/WDAC interdisant l’exécution depuis AppData, journalisation PowerShell.' },
  ],
};
