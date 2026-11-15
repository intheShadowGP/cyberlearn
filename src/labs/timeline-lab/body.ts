import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'timeline-lab',
  questions: [
    { id: 'tl-q1', type: 'short', difficulty: 1, skills: ['j-timeline'], prompt: 'À quelle heure UTC l’utilisatrice a-t-elle visité la page de téléchargement (historique Chrome) ? (HH:MM:SS)', placeholder: 'HH:MM:SS' },
    { id: 'tl-q2', type: 'short', difficulty: 2, skills: ['j-timeline', 'j-artefacts'], prompt: 'À quelle heure UTC FACTURE.EXE a-t-il été exécuté pour la première fois ? (HH:MM:SS)', placeholder: 'HH:MM:SS' },
    { id: 'tl-q3', type: 'single', difficulty: 2, skills: ['j-timeline'], prompt: 'Combien de temps s’écoule entre l’exécution de FACTURE.EXE et la connexion sortante vers 203.0.113.9 ?', options: [{ id: 'a', text: 'Environ 35 secondes' }, { id: 'b', text: 'Environ 1 heure' }, { id: 'c', text: 'Environ 6 minutes' }, { id: 'd', text: 'La connexion précède l’exécution' }] },
    { id: 'tl-q4', type: 'truefalse', difficulty: 2, skills: ['j-artefacts'], prompt: 'La date de création $SI de updater.exe (juin 2024) prouve que ce fichier était présent avant l’incident.' },
    { id: 'tl-q5', type: 'multi', difficulty: 3, skills: ['j-artefacts', 'j-timeline'], prompt: 'Quelles conclusions sont étayées par les artefacts ?', options: [{ id: 'a', text: 'Le vecteur initial est un courriel d’hameçonnage menant à un téléchargement' }, { id: 'b', text: 'FACTURE.EXE a lancé un PowerShell encodé et caché' }, { id: 'c', text: 'Une persistance a été installée via une clé Run' }, { id: 'd', text: 'L’attaquant est entré par le VPN' }] },
  ],
};
