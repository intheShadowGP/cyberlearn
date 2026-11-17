import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'windows-persistence-lab',
  hints: [
    'Passez en revue les emplacements de démarrage automatique : clés `Run`/`RunOnce`, tâches planifiées, services, dossier Démarrage.',
    'Un **même binaire** référencé par plusieurs mécanismes = persistance redondante, un schéma typique à repérer.',
    'Reconstituez l’ordre des faits : exécution initiale d’abord, **puis** installation de la persistance — l’horodatage le montre.',
  ],
  questions: [
    { id: 'win-q1', type: 'single', difficulty: 1, skills: ['a-proc'], prompt: 'Quel a été le vecteur d’exécution initial ?', options: [{ id: 'a', text: 'Une mise à jour légitime de Teams' }, { id: 'b', text: 'Un document Word à macros (.docm) ouvert depuis Outlook, qui lance cmd puis PowerShell' }, { id: 'c', text: 'Une connexion RDP depuis Internet' }, { id: 'd', text: 'Une clé USB' }] },
    { id: 'win-q2', type: 'short', difficulty: 2, skills: ['k-dynamic'], prompt: 'Quel est le nom de la valeur de registre Run créée pour la persistance ?' },
    { id: 'win-q3', type: 'multi', difficulty: 2, skills: ['k-dynamic', 'a-priv'], prompt: 'Quels mécanismes de persistance ont été installés ?', options: [{ id: 'a', text: 'La valeur Run TeamsUpdate dans la ruche de l’utilisatrice' }, { id: 'b', text: 'La tâche planifiée « OneDrive Sync Check » au démarrage de session' }, { id: 'c', text: 'Le processus ms-teams.exe' }, { id: 'd', text: 'Le fichier Offre_emploi_RH.docm dans Temp' }] },
    { id: 'win-q4', type: 'short', difficulty: 2, skills: ['k-yara', 'k-dynamic'], prompt: 'Quelle adresse IP sert vraisemblablement de serveur de commande et contrôle (connexions régulières) ?', placeholder: 'a.b.c.d' },
    { id: 'win-q5', type: 'truefalse', difficulty: 2, skills: ['k-dynamic', 'a-proc'], prompt: 'Supprimer le fichier update.exe suffit à éradiquer l’infection.' },
    { id: 'win-q6', type: 'single', difficulty: 2, skills: ['a-priv', 'k-yara'], prompt: 'Le malware s’exécute dans le contexte de l’utilisatrice (HKU, AppData). Quelle mesure préventive aurait le plus limité l’impact sur ce poste ?', options: [{ id: 'a', text: 'Bloquer les macros des fichiers venant d’Internet et interdire aux applications Office de créer des processus enfants (règles ASR)' }, { id: 'b', text: 'Changer le fond d’écran' }, { id: 'c', text: 'Désactiver Sysmon' }, { id: 'd', text: 'Donner les droits d’administration à l’utilisatrice' }] },
  ],
};
