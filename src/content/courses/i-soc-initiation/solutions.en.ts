import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'i-soc-initiation',
  practice: {
    'lire-journal': {
      blocks: [
        {
          t: 'table',
          head: ['Line', 'When', 'Who', 'From where', 'What'],
          rows: [
            ['1', '08:02', '`backup`', '`10.0.0.15` (internal)', 'Key-based sign-in, probably the usual backup'],
            ['2 to 4', '08:30', '`root`', '`198.51.100.77` (external)', 'Three failures in seven seconds'],
            ['5', '08:31', '`admin`', '`198.51.100.77`', 'Failure on another account from the same address'],
            ['6', '08:31', '`admin`', '`198.51.100.77`', '**Successful sign-in** three seconds later'],
          ],
        },
        { t: 'p', text: 'The line that worries most is the **last** one: the same external address tried several accounts (`root`, then `admin`) within seconds and gets a successful sign-in. This suggests password guessing that succeeded.' },
        { t: 'list', items: ['**Containment**: disable or lock the `admin` account, block the address at the network edge, close the open session.', '**Checks**: what happened after the sign-in (commands, files, new connections), other attempts from the same address on other servers, the date of the last password change.', '**Afterward**: reset the password, enable stronger authentication and restrict SSH access to the necessary addresses.'] },
      ],
    },
    'qualifier-alerte': {
      blocks: [
        { t: 'p', text: 'The alert is rather a **false positive**: the failures come from the user’s usual address, from their computer, right after a password change (an old password left saved can generate several failures).' },
        { t: 'code', lang: 'text', caption: 'Closing sentence', code: 'Alert closed (false positive): 11 failures on c.martin between 13:58 and 14:00, from the usual home-working address and the known workstation. Password changed that same morning. No successful sign-in from another source. No other sign. Rule to be tuned.' },
        { t: 'list', items: ['**Improvement**: take context into account (usual address and workstation, recent password change) or raise the threshold for this profile.', '**Do not disable the rule**: it protects against real attacks.', '**Escalate** if, on the contrary, a successful sign-in came from another source or if the failures kept repeating.'] },
      ],
    },
    'premiers-reflexes': {
      blocks: [
        { t: 'list', items: ['**To do**: stop using the computer, **unplug it from the network** (cable, Wi-Fi) without powering it off, do not pay, note the time and the message displayed, take a photo of the screen.', '**Not to do**: do not turn it back on, do not try to “repair” the files, do not plug a key or a disk into it, do not sign in to other accounts from this machine.', '**Warn**: the security officer or the SOC, then management according to the procedure. If email is used, prefer the phone for sensitive information.'] },
        { t: 'p', text: '**Notes**: time of the call, colleague’s name, machine, message displayed, actions already taken (power off then restart), sensitive documents possibly present.' },
        { t: 'list', items: ['**Possible containment**: network isolation via the EDR, disabling the account, checking shares and other affected workstations, protecting offline backups.', '**The restart already done** may have erased traces in memory: this is mentioned in the report.'] },
      ],
    },
  },
};
