import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'd-ad-authentification',
  practice: {
    'kerberoast-detect': {
      blocks: [
        { t: 'p', text: '**Kerberoasting** is very probable: a single account requests tickets for dozens of distinct services in under a minute, which no normal usage does.' },
        { t: 'p', text: 'The **0x17 = RC4-HMAC** type: the attacker forces RC4 because it is much faster to crack offline than AES (0x12). In a modern domain, an RC4 request is a signal in itself.' },
        { t: 'list', items: ['Immediate: disable or reset `j.leroy`, isolate the source workstation, identify the targeted service accounts and change their passwords (long and random).', 'Underlying: migrate to **gMSA**, disable RC4, alert on “more than N distinct 4769 per account in M minutes” and on 0x17.'] },
      ],
    },
    'chemin-acl': {
      blocks: [
        { t: 'p', text: 'An attacker who controls `m.durand` inherits the rights of the Support L1 group: they reset the password of `svc_backup`, log on with this account, become a local administrator of SRV-FILES, where a session of `adm-ad` (Domain Admins) is open: they pick up its secrets and obtain the domain. No software flaw: only rights and sessions.' },
        { t: 'list', items: ['Cutting the path: remove from the Support L1 group the right to reset `svc_backup`’s password (or reserve this operation to a restricted group); remove `svc_backup`’s local administrator rights on SRV-FILES if they are not needed.', 'Forbid `adm-ad` from opening a session on SRV-FILES (tiered model, logon denial by GPO); use a gMSA for `svc_backup`.'] },
        { t: 'list', items: ['To monitor: a password change by a support account (4723 and 4724), network connections of `svc_backup` outside its usual uses (4624 type 3), logons of tier 0 accounts on servers (4624, 4672), group changes (4728, 4732, 4756) and directory object changes (5136).', 'Regularly replay the rights mapping to check that the path does not reappear.'] },
        { t: 'callout', kind: 'tip', text: 'Each link is legitimate taken in isolation; it is the chaining that is dangerous. Hence the value of reasoning in paths rather than in lists of rights.' },
      ],
    },
    tiering: {
      blocks: [
        { t: 'p', text: '**Scenario**: compromised workstation → extraction of the local administrator’s hash → pivot onto the 300 workstations (same password) → on a recently troubleshot workstation, retrieval of `adm-support`’s secrets (Domain Admin) → DCSync → domain compromised.' },
        { t: 'list', items: ['**Tier 2**: dedicated support accounts, administrators of the workstations only (not of the domain).', '**Tier 0**: a few named accounts, used only from dedicated administration workstations.', 'Technical ban on cross-tier logon (GPO “Deny log on” per tier).', 'Windows LAPS, Protected Users for tier 0 accounts, Credential Guard, SMB filtering between workstations.'] },
      ],
    },
  },
};
