import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'timeline-lab',
  hints: [
    'Before ordering, **normalize**: bring all timestamps to the same time zone and the same format, otherwise the resulting order is wrong.',
    'Compare the times of the same object across sources: a file **created after** being modified, or a log that goes back in time, betrays a manipulation.',
    'Backdating often leaves an **inconsistency**: an artifact that references an event supposed to come after it.',
  ],
  questions: [
    { id: 'tl-q1', type: 'short', difficulty: 1, skills: ['j-timeline'], prompt: 'At what UTC time did the user visit the download page (Chrome history)? (HH:MM:SS)', placeholder: 'HH:MM:SS' },
    { id: 'tl-q2', type: 'short', difficulty: 2, skills: ['j-timeline', 'j-artefacts'], prompt: 'At what UTC time was FACTURE.EXE executed for the first time? (HH:MM:SS)', placeholder: 'HH:MM:SS' },
    { id: 'tl-q3', type: 'single', difficulty: 2, skills: ['j-timeline'], prompt: 'How much time passes between the execution of FACTURE.EXE and the outbound connection to 203.0.113.9?', options: [{ id: 'a', text: 'About 35 seconds' }, { id: 'b', text: 'About 1 hour' }, { id: 'c', text: 'About 6 minutes' }, { id: 'd', text: 'The connection precedes the execution' }] },
    { id: 'tl-q4', type: 'truefalse', difficulty: 2, skills: ['j-artefacts'], prompt: 'The $SI creation date of updater.exe (June 2024) proves that this file was present before the incident.' },
    { id: 'tl-q5', type: 'multi', difficulty: 3, skills: ['j-artefacts', 'j-timeline'], prompt: 'Which conclusions are supported by the artifacts?', options: [{ id: 'a', text: 'The initial vector is a phishing email leading to a download' }, { id: 'b', text: 'FACTURE.EXE launched an encoded, hidden PowerShell' }, { id: 'c', text: 'Persistence was installed through a Run key' }, { id: 'd', text: 'The attacker came in through the VPN' }] },
  ],
};
