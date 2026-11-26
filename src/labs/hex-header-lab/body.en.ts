import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'hex-header-lab',
  hints: [
    'A file almost always starts with a **signature** of a few bytes, independent of its name.',
    'The character column helps: `4D 5A` reads “MZ”, `25 50 44 46` reads “%PDF”.',
    'Two hexadecimal digits make one byte; use the converter to check your conversions.',
  ],
  questions: [
    { id: 'hexlab-q1', type: 'short', difficulty: 1, skills: ['a-data'], prompt: 'Which file is actually a Windows executable, despite its extension?', placeholder: 'file name' },
    { id: 'hexlab-q2', type: 'single', difficulty: 2, skills: ['a-data'], prompt: 'What is the real type of the file photo.txt?', options: [{ id: 'a', text: 'A plain text document' }, { id: 'b', text: 'A JPEG image' }, { id: 'c', text: 'A ZIP archive' }, { id: 'd', text: 'A Windows executable' }] },
    { id: 'hexlab-q3', type: 'truefalse', difficulty: 2, skills: ['a-data'], prompt: 'The file budget.xlsx starts with “PK”: this is proof that it is malicious.' },
    { id: 'hexlab-q4', type: 'short', difficulty: 1, skills: ['a-data'], prompt: 'What is 0xC8 in decimal?', placeholder: 'number' },
    { id: 'hexlab-q5', type: 'single', difficulty: 2, skills: ['a-data'], prompt: 'The bytes `C0 A8 01 0A` of a network header form which IPv4 address?', options: [{ id: 'a', text: '10.1.168.192' }, { id: 'b', text: '192.168.0.10' }, { id: 'c', text: '192.168.1.10' }, { id: 'd', text: '192.168.10.1' }] },
    { id: 'hexlab-q6', type: 'single', difficulty: 2, skills: ['a-data'], prompt: 'What should you do with rapport.pdf received by email?', options: [{ id: 'a', text: 'Open it, since the extension is a PDF’s' }, { id: 'b', text: 'Rename it to .exe to run it more easily' }, { id: 'c', text: 'Do not open it, note its hash and examine it in an isolated environment' }, { id: 'd', text: 'Forward it to colleagues for their opinion' }] },
  ],
};
