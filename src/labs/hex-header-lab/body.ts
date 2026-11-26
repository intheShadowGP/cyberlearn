import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'hex-header-lab',
  hints: [
    'Un fichier commence presque toujours par une **signature** de quelques octets, indépendante de son nom.',
    'La colonne de caractères aide : `4D 5A` se lit « MZ », `25 50 44 46` se lit « %PDF ».',
    'Deux chiffres hexadécimaux valent un octet ; utilisez le convertisseur pour vérifier vos conversions.',
  ],
  questions: [
    { id: 'hexlab-q1', type: 'short', difficulty: 1, skills: ['a-data'], prompt: 'Quel fichier est en réalité un exécutable Windows, malgré son extension ?', placeholder: 'nom du fichier' },
    { id: 'hexlab-q2', type: 'single', difficulty: 2, skills: ['a-data'], prompt: 'Quel est le vrai type du fichier photo.txt ?', options: [{ id: 'a', text: 'Un document texte brut' }, { id: 'b', text: 'Une image JPEG' }, { id: 'c', text: 'Une archive ZIP' }, { id: 'd', text: 'Un exécutable Windows' }] },
    { id: 'hexlab-q3', type: 'truefalse', difficulty: 2, skills: ['a-data'], prompt: 'Le fichier budget.xlsx commence par « PK » : c’est la preuve qu’il est malveillant.' },
    { id: 'hexlab-q4', type: 'short', difficulty: 1, skills: ['a-data'], prompt: 'Combien vaut 0xC8 en décimal ?', placeholder: 'nombre' },
    { id: 'hexlab-q5', type: 'single', difficulty: 2, skills: ['a-data'], prompt: 'Les octets `C0 A8 01 0A` d’un en-tête réseau forment quelle adresse IPv4 ?', options: [{ id: 'a', text: '10.1.168.192' }, { id: 'b', text: '192.168.0.10' }, { id: 'c', text: '192.168.1.10' }, { id: 'd', text: '192.168.10.1' }] },
    { id: 'hexlab-q6', type: 'single', difficulty: 2, skills: ['a-data'], prompt: 'Que faire de rapport.pdf reçu par courriel ?', options: [{ id: 'a', text: 'L’ouvrir, l’extension étant celle d’un PDF' }, { id: 'b', text: 'Le renommer en .exe pour le lancer plus facilement' }, { id: 'c', text: 'Ne pas l’ouvrir, noter son empreinte et l’examiner dans un environnement isolé' }, { id: 'd', text: 'Le transférer à des collègues pour avis' }] },
  ],
};
