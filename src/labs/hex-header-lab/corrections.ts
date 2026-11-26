import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'hex-header-lab',
  questions: {
    'hexlab-q1': { type: 'short', accepted: ['rapport.pdf', 'rapport'], explanation: 'rapport.pdf commence par `4D 5A`, soit « MZ » : la signature des exécutables Windows. Le nom et l’extension ne prouvent rien, c’est l’en-tête qui renseigne sur le type réel.' },
    'hexlab-q2': { type: 'single', correct: 'b', explanation: 'photo.txt commence par `FF D8 FF E0` suivi de « JFIF » : c’est une image JPEG. Son extension .txt ne correspond pas à son contenu.', whyWrong: { a: 'Un texte brut n’a pas de signature de ce type et ses octets sont presque tous imprimables.', c: 'Une archive ZIP commence par `50 4B` (« PK »).', d: 'Un exécutable Windows commence par `4D 5A` (« MZ »).' } },
    'hexlab-q3': { type: 'truefalse', correct: false, explanation: 'Les fichiers Office modernes (.xlsx, .docx) sont des archives ZIP : ils commencent donc normalement par « PK ». Ici, le nom interne `[Content_Types].xml` confirme un format Office ordinaire. Une signature compatible avec l’extension n’est pas suspecte.' },
    'hexlab-q4': { type: 'short', accepted: ['200'], explanation: '0xC8 = 12 × 16 + 8 = 192 + 8 = 200. Le convertisseur du laboratoire permet de le vérifier.' },
    'hexlab-q5': { type: 'single', correct: 'c', explanation: 'Chaque octet est un nombre de 0 à 255 : C0 = 192, A8 = 168, 01 = 1, 0A = 10, soit 192.168.1.10. L’ordre des octets est celui de lecture, de gauche à droite.', whyWrong: { a: 'Ce serait l’ordre inverse des octets.', b: 'Le troisième octet vaut 01, pas 00.', d: 'Les deux derniers octets sont 01 puis 0A, pas 0A puis 01.' } },
    'hexlab-q6': { type: 'single', correct: 'c', explanation: 'Un exécutable déguisé en PDF est un signal d’alerte. On ne l’ouvre pas, on conserve son empreinte (par exemple SHA-256) et on l’analyse dans un environnement isolé, puis on signale le courriel.', whyWrong: { a: 'L’ouvrir exécuterait le programme.', b: 'Le lancer volontairement est exactement ce qu’il faut éviter.', d: 'Le diffuser propage le risque.' } },
  },
  debrief: [
    { t: 'h', text: 'Ce que montrent les en-têtes' },
    { t: 'table', head: ['Fichier', 'Premiers octets', 'Vrai type'], rows: [['rapport.pdf', '`4D 5A` (« MZ »)', 'Exécutable Windows déguisé'], ['photo.txt', '`FF D8 FF E0` + « JFIF »', 'Image JPEG'], ['budget.xlsx', '`50 4B 03 04` (« PK »)', 'Archive ZIP, format Office normal'], ['notes.pdf', '`25 50 44 46` (« %PDF »)', 'PDF authentique']] },
    { t: 'callout', kind: 'key', title: 'À retenir', text: 'L’extension indique ce que le fichier prétend être, la signature ce qu’il est probablement. Dans le doute, on calcule une empreinte, on n’ouvre pas, on analyse en environnement isolé.' },
  ],
};
