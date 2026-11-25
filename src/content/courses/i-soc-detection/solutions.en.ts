import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'i-soc-detection',
  practice: {
    'chasse-ssh': {
      blocks: [
        { t: 'p', text: 'The detailed correction (addresses, compromised account, timeline) is in the debrief of the lab “Hunting in auth.log”.' },
        { t: 'p', text: 'Approach: count failures by source address, then look for an “Accepted” coming from one of the addresses at the top of the ranking.' },
      ],
    },
    'sigma-ecrire': {
      blocks: [
        { t: 'code', lang: 'yaml', code: "title: Account added to the local Administrators group\nlogsource:\n  product: windows\n  service: security\ndetection:\n  selection:\n    EventID: 4732\n    TargetSid: 'S-1-5-32-544'   # BUILTIN\\Administrators group\n  condition: selection\nlevel: high\ntags:\n  - attack.persistence\n  - attack.t1098      # Account Manipulation\n  - attack.t1136.001  # Create Account: Local Account" },
        { t: 'p', text: 'The SID `S-1-5-32-544` is preferable to the group name, which varies with the system language. Correlation with a recent 4720 on the same account can raise the level to “critical”.' },
      ],
    },
    'couverture-detection': {
      blocks: [
        {
          t: 'table',
          head: ['Technique', 'Status', 'Required source'],
          rows: [
            ['A. Phishing with an attachment', 'Not covered', 'Email or email-gateway logs'],
            ['B. PowerShell launched by Office', 'Not covered', 'EDR or Sysmon telemetry from workstations (process creation and parent)'],
            ['C. Creation of a local account', 'Not covered', 'Workstation Security log (event 4720)'],
            ['D. Credential theft from LSASS', 'Not covered', 'EDR or Sysmon (access to the LSASS process)'],
            ['E. Lateral movement through an administrative share', 'Partial', 'Domain controllers see authentications; the servers’ Security log or the EDR is also needed'],
            ['F. Exfiltration to online storage', 'Partial', 'The firewall sees volumes; DNS and proxy give the destinations'],
          ],
        },
        { t: 'list', items: ['**Priority 1: workstation telemetry (EDR or Sysmon and Security log)**: it unlocks B, C, D and strengthens E.', '**Priority 2: email**: it covers A, the most frequent entry point.', '**Priority 3: DNS and web proxy**: they complete F and add useful context to many alerts.'] },
        { t: 'p', text: 'The order is justified by the number of techniques unlocked and by their place in the attack chain. Writing rules before having these sources would achieve nothing: the rules would never fire.' },
        { t: 'list', items: ['**Indicator 1**: share of priority ATT&CK techniques covered by a collected source and a tested rule (here 0 out of 4 fully covered, 2 partial).', '**Indicator 2**: number of silent sources detected and time to restore collection.'] },
      ],
    },
  },
};
