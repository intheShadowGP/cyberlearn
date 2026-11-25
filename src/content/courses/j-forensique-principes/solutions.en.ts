import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'j-forensique-principes',
  practice: {
    'labo-timeline': {
      blocks: [
        { t: 'p', text: 'The complete timeline, in UTC, is given in the debrief of the lab “Multi-source timeline”.' },
        { t: 'p', text: 'Point of attention: the inconsistent artifact is the one whose $SI creation date precedes its $FILE_NAME date by two years.' },
      ],
    },
    'collecte-ordre': {
      blocks: [
        { t: 'list', ordered: true, items: ['Photograph the screen and environment, note the time of the reference watch and that of the workstation.', 'Isolate from the network (Wi-Fi off, cable removed), without powering off.', 'Acquire the memory to the external disk, compute the hash, record.', 'Retrieve the BitLocker key (directory); if unavailable, logical image of the mounted volume.', 'Shutdown, SSD removal, physical image through a write blocker, hash.', 'Seals, sheets and chain of custody.'] },
      ],
    },
    'lire-memoire': {
      blocks: [
        { t: 'p', text: '**Chain**: `explorer.exe` (user session) → `winword.exe` opens `facture-0312.docm` (macro-enabled document, downloaded) → `powershell.exe` launched in a hidden window with an **encoded** command → `svchost32.exe`, a name that imitates the legitimate system process `svchost.exe`, with an external connection on port 443.' },
        { t: 'list', items: ['**Suspect**: an office document launching a hidden interpreter with an encoded command.', '**`svchost32.exe`**: the real process is called `svchost.exe`; this name imitates a trusted one.', '**Scan only**: the process is absent from the active list (terminated, or removed from the list through concealment) but its structures remain in memory; its connection was still established at capture, which points rather to concealment or a very recent termination.'] },
        { t: 'list', items: ['**Disk**: the document in downloads (origin, arrival email), location and hash of `svchost32.exe`, Prefetch, Amcache, scheduled tasks and Run keys.', '**Command**: decode the encoded command to identify what is downloaded or executed.', '**Logs**: sign-in of the account `a.roche`, email received, proxy and firewall logs toward `198.51.100.44`, other workstations contacting the same address.', '**Memory**: loaded modules and regions of injected code in the process.'] },
        { t: 'p', text: '**Containment**: isolate the workstation from the network without powering it off (memory already acquired), block the address at the perimeter, reset the account’s credentials, search the fleet for the same document and the same address, then move to eradication. Everything is recorded with times and hashes.' },
      ],
    },
  },
};
