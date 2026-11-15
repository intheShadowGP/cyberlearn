import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'code-review-lab',
  questions: [
    { id: 'cr-q1', type: 'short', difficulty: 1, skills: ['g-mem-vulns'], prompt: 'Quelle ligne contient une vulnérabilité de chaîne de format ? (numéro)' },
    { id: 'cr-q2', type: 'short', difficulty: 2, skills: ['g-mem-vulns'], prompt: 'Quelle ligne contient un use-after-free ? (numéro)' },
    { id: 'cr-q3', type: 'single', difficulty: 3, skills: ['g-mem-vulns'], prompt: 'Quel est le problème de la ligne `uint16_t total = n * 8;` ?', options: [{ id: 'a', text: 'Aucun' }, { id: 'b', text: 'Le résultat est tronqué à 16 bits : pour n ≥ 8192, l’allocation est trop petite et la copie suivante déborde du tas' }, { id: 'c', text: 'n peut être négatif' }, { id: 'd', text: 'La multiplication est trop lente' }] },
    { id: 'cr-q4', type: 'multi', difficulty: 3, skills: ['g-mem-vulns'], prompt: 'Quelles lignes peuvent écrire au-delà d’un tampon ?', options: [{ id: 'a', text: 'Ligne 20 (memcpy)' }, { id: 'b', text: 'Ligne 22 (strcpy)' }, { id: 'c', text: 'Ligne 25 (free)' }, { id: 'd', text: 'Ligne 15 (déclaration de nom)' }] },
    { id: 'cr-q5', type: 'truefalse', difficulty: 2, skills: ['g-secure-code'], prompt: 'La fonction vérifie que le paramètre taille est suffisant avant de lire le paquet.' },
    { id: 'cr-q6', type: 'open', difficulty: 3, skills: ['g-secure-code', 'g-mem-vulns'], prompt: 'Proposez les corrections de la fonction (en code ou en description précise).' },
  ],
};
