import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'hex-header-lab',
  questions: {
    'hexlab-q1': { type: 'short', accepted: ['rapport.pdf', 'rapport'], explanation: 'rapport.pdf starts with `4D 5A`, “MZ”: the signature of Windows executables. The name and extension prove nothing; the header tells the real type.' },
    'hexlab-q2': { type: 'single', correct: 'b', explanation: 'photo.txt starts with `FF D8 FF E0` followed by “JFIF”: it is a JPEG image. Its .txt extension does not match its content.', whyWrong: { a: 'Plain text has no signature of this kind and its bytes are almost all printable.', c: 'A ZIP archive starts with `50 4B` (“PK”).', d: 'A Windows executable starts with `4D 5A` (“MZ”).' } },
    'hexlab-q3': { type: 'truefalse', correct: false, explanation: 'Modern Office files (.xlsx, .docx) are ZIP archives: they therefore normally start with “PK”. Here the internal name `[Content_Types].xml` confirms an ordinary Office format. A signature consistent with the extension is not suspicious.' },
    'hexlab-q4': { type: 'short', accepted: ['200'], explanation: '0xC8 = 12 × 16 + 8 = 192 + 8 = 200. The lab converter lets you check it.' },
    'hexlab-q5': { type: 'single', correct: 'c', explanation: 'Each byte is a number from 0 to 255: C0 = 192, A8 = 168, 01 = 1, 0A = 10, giving 192.168.1.10. The byte order is the reading order, left to right.', whyWrong: { a: 'That would be the reverse byte order.', b: 'The third byte is 01, not 00.', d: 'The last two bytes are 01 then 0A, not 0A then 01.' } },
    'hexlab-q6': { type: 'single', correct: 'c', explanation: 'An executable disguised as a PDF is a warning sign. You do not open it, you keep its hash (for example SHA-256) and analyze it in an isolated environment, then report the email.', whyWrong: { a: 'Opening it would run the program.', b: 'Deliberately running it is exactly what to avoid.', d: 'Forwarding it spreads the risk.' } },
  },
  debrief: [
    { t: 'h', text: 'What the headers show' },
    { t: 'table', head: ['File', 'First bytes', 'Real type'], rows: [['rapport.pdf', '`4D 5A` (“MZ”)', 'Disguised Windows executable'], ['photo.txt', '`FF D8 FF E0` + “JFIF”', 'JPEG image'], ['budget.xlsx', '`50 4B 03 04` (“PK”)', 'ZIP archive, normal Office format'], ['notes.pdf', '`25 50 44 46` (“%PDF”)', 'Genuine PDF']] },
    { t: 'callout', kind: 'key', title: 'Remember', text: 'The extension says what the file claims to be, the signature what it probably is. When in doubt, compute a hash, do not open it, analyze in an isolated environment.' },
  ],
};
