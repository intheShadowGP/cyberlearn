import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'a-systemes-fondamentaux',
  practice: {
    'arbre-processus': {
      blocks: [
        { t: 'list', items: ['**A** — `services.exe` starts `svchost.exe` instances: normal Windows behavior.', '**B** — Chrome creates child processes to isolate each tab: normal.', '**C** — Outlook → Excel → `mshta.exe` downloading an HTA file from an external address: **highly suspicious**. `mshta` is a legitimate binary often hijacked (“Living off the Land” technique).'] },
        { t: 'p', text: 'First action for C: isolate the workstation through the EDR, retrieve the original attachment, block the address 203.0.113.50 and look for the same process relationship on the other workstations.' },
      ],
    },
    'moindre-privilege': {
      blocks: [
        { t: 'p', text: '**Risks**: any malware run by an employee obtains the administration rights of the workstation (disabling the antivirus, persistence, theft of credentials from memory). The backup account, a domain administrator, gives an attacker the whole information system.' },
        { t: 'list', items: ['Remove local administration rights; offer a **catalog of approved applications** installable in self-service, or a request to the support desk.', 'Use **Windows LAPS** for unique local administrator passwords on each workstation.', 'Backup account: a dedicated service account (ideally a **gMSA**), rights limited to the data to be backed up, interactive logon forbidden, its use monitored.'] },
      ],
    },
  },
};
