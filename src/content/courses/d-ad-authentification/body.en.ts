import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'd-ad-authentification',
  lesson: {
    intro:
      'In the vast majority of companies, Active Directory (AD) holds the keys to the whole information system: accounts, groups, rights, security policies. Compromising AD means compromising the company. Modern ransomware almost always follows the same path: a workstation, then credentials, then domain privileges, then mass deployment. Understanding AD authentication is therefore indispensable, in authorized attack as in defense.',
    sections: [
      {
        id: 'structure',
        title: 'The building blocks of Active Directory',
        blocks: [
          { t: 'def', term: 'Domain', text: 'A common administration and authentication perimeter (for example `corp.example.com`), which groups users, computers and groups. Several domains form a **forest**.' },
          { t: 'def', term: 'Domain controller (DC)', text: 'A server that hosts the directory database (`NTDS.dit`), authenticates users (Kerberos, NTLM) and applies policies. It contains the hashes of **all** the domain’s passwords.' },
          {
            t: 'table',
            head: ['Element', 'Role', 'Point of vigilance'],
            rows: [
              ['LDAP (389, 636 for LDAPS)', 'Protocol for querying the directory', 'Any authenticated user can read a large part of the directory'],
              ['Privileged groups', 'Domain Admins, Enterprise Admins…', 'Members to be reduced to the strict minimum'],
              ['GPO', 'Group policies applied to machines and users', 'A GPO an attacker can modify = code execution on all the targeted machines'],
              ['Service accounts', 'Run applications (SQL, backup)', 'Often over-privileged, old passwords'],
            ],
          },
          { t: 'def', term: 'Forest', text: 'A set of one or more domains that share a **schema** and trusts. The real security boundary is the forest, not the domain: an administrator compromised in one domain can, under conditions, reach the others.' },
          { t: 'def', term: 'Organizational unit (OU)', text: 'A container in which accounts and computers are placed, to which GPOs are linked and on which administration is **delegated** to a team. Poorly delegated rights on an OU are a classic attack path.' },
          { t: 'callout', kind: 'key', text: 'An account that is a member of **Domain Admins** and logs on to a workstation leaves reusable secrets in memory there. If that workstation is compromised, so is the domain. Hence the **tiered administration model**: tier 0 (DC, AD), tier 1 (servers), tier 2 (workstations), with no crossing.' },
        ],
      },
      {
        id: 'kerberos',
        title: 'Kerberos step by step',
        blocks: [
          { t: 'p', text: 'Kerberos is AD’s default authentication protocol. It relies on a trusted third party, the **KDC** (Key Distribution Center, hosted on each DC), and on encrypted, time-limited **tickets**.' },
          { t: 'diagram', id: 'kerberos-flow', caption: 'The three Kerberos exchanges', alt: 'The client obtains a TGT from the KDC (AS), then a service ticket (TGS), which it presents to the server (AP).' },
          {
            t: 'list',
            ordered: true,
            items: [
              '**AS-REQ / AS-REP** (event **4768**): the user proves their identity (pre-authentication with a timestamp encrypted by their key) and receives a **TGT**, encrypted with the key of the **krbtgt** account.',
              '**TGS-REQ / TGS-REP** (event **4769**): with their TGT, they request a **service ticket** for a service identified by its **SPN** (for example `MSSQLSvc/sql01.corp.example.com`). This ticket is encrypted with the **service account’s** key.',
              '**AP-REQ**: they present the ticket to the server, which decrypts it with its own key. The DC no longer intervenes.',
            ],
          },
          { t: 'def', term: 'krbtgt', text: 'The account whose key encrypts all the domain’s TGTs. Whoever holds its hash can forge arbitrary TGTs: this is the **golden ticket**.' },
          { t: 'def', term: 'SPN', text: 'Service Principal Name: the identifier of a service associated with an account. Any domain user can request a ticket for any SPN.' },
          { t: 'def', term: 'Pre-authentication', text: 'The client proves it knows its key by sending an **encrypted timestamp** before receiving a TGT. An account exempted from it (a dangerous setting) gives any requester a reply encrypted with its key, which can be cracked offline: this is AS-REP roasting.' },
          { t: 'callout', kind: 'info', text: 'Kerberos timestamps its exchanges to prevent replay: beyond **five minutes** of clock difference between the client and the KDC, authentication fails. Time synchronization is therefore part of the domain’s correct operation.' },
        ],
      },
      {
        id: 'ntlm',
        title: 'NTLM and its weaknesses',
        blocks: [
          { t: 'p', text: 'NTLM is an older challenge-response protocol, still used when Kerberos is not possible (access by IP address, old systems). The server sends a challenge, the client answers with a calculation derived from the **NT hash** of its password.' },
          { t: 'callout', kind: 'warn', title: 'Major consequence', text: 'With NTLM, the NT hash **is equivalent to the password**: an attacker who obtains it (in the LSASS process memory, for example) can authenticate without ever knowing the password. This is **pass-the-hash**.' },
          { t: 'list', items: ['**NTLM relay**: the attacker relays a victim’s authentication to another server. Countermeasures: SMB and LDAP signing, EPA, disabling NTLM where possible.', 'NTLMv1 can be cracked: it must be forbidden by GPO.'] },
        ],
      },
      {
        id: 'attaques',
        title: 'Common attacks and their signature',
        blocks: [
          {
            t: 'table',
            head: ['Attack', 'Principle', 'Signature in the DC logs'],
            rows: [
              ['**Password spraying**', 'One common password tested on hundreds of accounts', 'Many **4625** or **4771** (code 0x18) on different accounts from the same source'],
              ['**Brute force**', 'Many passwords on a single account', 'Burst of 4625 on one account, then lockout **4740**'],
              ['**Kerberoasting**', 'Requesting service tickets to crack the service account’s password offline', 'Spikes of **4769** from one account, **RC4 (0x17)** encryption'],
              ['**AS-REP roasting**', 'Accounts without pre-authentication: the TGT can be cracked offline', '**4768** without pre-authentication'],
              ['**Pass-the-hash**', 'Reuse of the NT hash', '**4624** type 3 with NTLM from unusual workstations'],
              ['**Golden ticket**', 'TGT forged with the krbtgt key', 'Tickets with abnormal duration, 4769 without a prior 4768'],
            ],
          },
          { t: 'def', term: 'Silver ticket', text: 'A service ticket **forged** with the key of a service’s account (obtained for example through Kerberoasting). It is accepted only by that service and never goes through the DC: very discreet, hence the value of random service passwords (gMSA).' },
          { t: 'callout', kind: 'warn', title: 'Limits of forged ticket detection', text: 'A golden ticket (or silver ticket) is **forged offline** with a stolen key: the DC accepts it without issuing a 4768, and a careful attacker imitates the default lifetimes and attributes. Detection rests on **fallible heuristics** (abnormal durations, 4769 without a correlated 4768, tickets for nonexistent accounts) that can be bypassed. The real countermeasure is **preventive**: protect the krbtgt key, apply the tiered model, and renew krbtgt **twice** after a compromise.' },
          {
            t: 'example',
            title: 'Spotting a password spray',
            blocks: [
              { t: 'code', lang: 'text', code: '08:01:02 4625 Failure  account=a.bernard  source=10.0.8.44  status=0xC000006A\n08:01:02 4625 Failure  account=c.durand   source=10.0.8.44  status=0xC000006A\n08:01:03 4625 Failure  account=e.faure    source=10.0.8.44  status=0xC000006A\n… 240 different accounts in 90 seconds …\n08:02:31 4624 Success  account=m.petit    source=10.0.8.44  type=3' },
              { t: 'p', text: 'The same source, hundreds of distinct accounts, one failure each (status `0xC000006A`: wrong password), then **one success**: the password tried was `m.petit`’s. This account is compromised.' },
            ],
          },
          { t: 'callout', kind: 'legal', text: 'These techniques must be practiced only in a personal lab or within a contracted penetration test, with written rules of engagement.' },
        ],
      },
      {
        id: 'defense',
        title: 'Hardening and monitoring',
        blocks: [
          { t: 'list', items: ['**Tiered model** and dedicated administration workstations: tier 0 accounts log on only to DCs and tier 0 administration workstations.', '**Windows LAPS**: a unique local administrator password, renewed per workstation, which blocks lateral reuse.', '**gMSA / dMSA** (managed service accounts): the password is random (≈ 240 bytes), renewed automatically by the domain. Kerberoasting remains **possible** (the service ticket can still be requested), but offline cracking becomes unrealistic: the protection comes from the secret’s robustness and rotation, not from an immunity to the technique.', '**Protected Users** group for privileged accounts: no NTLM, no RC4, no delegation.', 'Disable RC4 and NTLMv1, enable SMB/LDAP signing.', 'Renew the **krbtgt** password twice after a domain compromise.', 'Centralize and monitor events 4624, 4625, 4740, 4768, 4769, 4771, 4720, 4728/4732/4756 (group additions).'] },
          {
            t: 'table',
            caption: 'Events to monitor',
            head: ['ID', 'Meaning', 'What to watch'],
            rows: [
              ['4624 (type 3)', 'Network logon', 'NTLM from unusual workstations (pass-the-hash)'],
              ['4672', 'Special privileges assigned to a session', 'Privileged accounts on unexpected machines'],
              ['4720', 'Account creation', 'Accounts created outside the process'],
              ['4728 / 4732 / 4756', 'Addition to a security group', 'Privileged groups'],
              ['4662', 'Operation on a directory object', 'Replication rights (DCSync)'],
              ['5136', 'Modification of a directory object', 'Changes to GPOs, ACLs, delegation'],
            ],
          },
          { t: 'callout', kind: 'tip', text: 'ANSSI’s free tool **ORADAD** and the **ADS** audit service produce a security status of the AD. On the community side, PingCastle offers a quick rating.' },
        ],
      },
      {
        id: 'chemins',
        title: 'Rights, delegation and attack paths',
        blocks: [
          { t: 'p', text: 'The most effective attacks against a directory do not always exploit a protocol: they follow poorly delegated **rights**. An ordinary account can add itself to a privileged group, modify a GPO or reset an administrator’s password without being itself in a sensitive group. These paths are **indirect** and invisible in a simple list of groups.' },
          {
            t: 'table',
            head: ['Mechanism', 'Abuse', 'Defense'],
            rows: [
              ['Object **ACL** (GenericAll, WriteDacl…)', 'Modifying a group, account or OU one should not control', 'Audit the rights, remove excessive delegations'],
              ['Modifiable **GPO**', 'Deploying a task or script run as SYSTEM on all the linked machines', 'Reserve write access to a small group, monitor changes (5136)'],
              ['**Unconstrained delegation**', 'Collecting the TGTs of the users who connect to a compromised server', 'Constrained delegation, sensitive accounts non-delegable, Protected Users'],
              ['**Replication rights**', 'DCSync: extracting the hashes of all accounts', 'Limit these rights to the controllers, alert on 4662'],
            ],
          },
          { t: 'def', term: 'DCSync', text: 'A technique by which an account holding **replication rights** poses as a controller and asks a real controller for the secrets of any account, without touching the disk. These rights are reserved for controllers; any other holder is an alert.' },
          { t: 'def', term: 'Kerberos delegation', text: 'A mechanism by which a service acts **on a user’s behalf** towards other services. **Unconstrained** delegation makes the server keep the TGT of each user who connects: if it is compromised, these TGTs are reusable. Constrained, resource-based delegation is preferred.' },
          { t: 'def', term: 'Attack path graph', text: 'A representation of memberships, rights, sessions and delegations as a graph (for example with BloodHound or PingCastle). It shows that an ordinary user reaches Domain Admins in a few steps; defenders **cut these paths** before an attacker takes them.' },
          {
            t: 'example',
            title: 'A path in four steps',
            blocks: [
              { t: 'code', lang: 'text', code: 'j.martin (user)         → member of  HelpDesk\nHelpDesk                → GenericWrite on the account  svc_deploy\nsvc_deploy              → member of  Backup server admins\nBackup server admins    → open session of  adm-domain on SRV-BKP\nadm-domain              → member of  Domain Admins' },
              { t: 'p', text: 'None of these relations is an isolated flaw. Together, they give `j.martin` a path to domain administration. Removing HelpDesk’s write right on `svc_deploy`, or forbidding `adm-domain` from opening a session on SRV-BKP, cuts the path.' },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Audit **rights** as much as group memberships: ORADAD, PingCastle or a relationship graph reveal what a review of groups does not show.' },
        ],
      },
    ],
    useCases: [
      'SOC analyst: correlating a burst of 4625 on distinct accounts followed by a 4624 to detect a successful password spray.',
      'Architect: deploying the tiered model and LAPS to break the workstation → domain chain.',
      'Pentester (authorized mission): checking the exposure to Kerberoasting and the robustness of service account passwords.',
      'Incident response: after a domain compromise, planning the double renewal of krbtgt.',
      'Rights audit: spotting indirect attack paths (ACLs, GPOs, delegations) with a relationship graph and cutting them.',
    ],
    commonMistakes: [
      'Using a Domain Admins account to troubleshoot workstations.',
      'Leaving service accounts with SPNs and short passwords that never expire.',
      'Using the same local administrator password on all workstations (master image).',
      'Logging only failures: it is the success that follows a burst of failures that counts.',
      'Renewing krbtgt only once after a compromise (the old password remains valid).',
      'Checking only group memberships and forgetting the rights (ACLs) delegated on objects.',
      'Leaving accounts without Kerberos pre-authentication or servers in unconstrained delegation.',
      'Granting a support group write access to GPOs or OUs of servers.',
    ],
    bestPractices: [
      'Tiered administration model and dedicated administration workstations.',
      'Windows LAPS on all workstations and member servers.',
      'gMSA for service accounts; passwords of 25 characters or more otherwise.',
      'Protected Users for privileged accounts, RC4 and NTLMv1 disabled.',
      'Regular AD audit (ORADAD, PingCastle) and monitoring of key events.',
      'Audit of ACLs and delegations, attack path graph reviewed regularly.',
      'Constrained rather than unconstrained delegation, sensitive accounts non-delegable, pre-authentication required.',
    ],
    keyPoints: [
      'The DC holds all the hashes: its compromise = that of the domain.',
      'Kerberos: TGT (encrypted by krbtgt) then service ticket (encrypted by the service account).',
      'With NTLM, the hash is worth the password (pass-the-hash).',
      'Spraying: many accounts, few tries each; Kerberoasting: spikes of 4769 in RC4.',
      'Attack paths go through indirect rights (ACLs, GPOs, delegation, replication): they are audited and cut.',
    ],
  },
  practice: [
    {
      id: 'kerberoast-detect',
      kind: 'analysis',
      title: 'Analysis: a spike of 4769 events',
      context: [
        { t: 'p', text: 'Extract of the DC logs between 14:00 and 14:01:' },
        { t: 'code', lang: 'text', code: '4769 account=j.leroy@CORP  service=MSSQLSvc/sql01   encryption=0x17\n4769 account=j.leroy@CORP  service=HTTP/intranet     encryption=0x17\n4769 account=j.leroy@CORP  service=svc_backup        encryption=0x17\n4769 account=j.leroy@CORP  service=CIFS/fs02         encryption=0x12\n… 37 distinct services in 45 seconds …' },
      ],
      steps: ['Identify the probable attack.', 'Explain why the 0x17 encryption type is significant.', 'Propose immediate actions and underlying measures.'],
      labId: 'ad-events-lab',
    },
    {
      id: 'tiering',
      kind: 'case',
      title: 'Case study: breaking the workstation → domain chain',
      context: [{ t: 'p', text: 'In a 300-workstation company, the support team uses the `adm-support` account, a member of Domain Admins, to troubleshoot workstations. All the workstations have the same local administrator password.' }],
      steps: ['Describe the complete attack scenario from a compromised workstation.', 'Propose a new organization of the administration accounts.', 'List the technical measures to deploy.'],
    },
    {
      id: 'chemin-acl',
      kind: 'analysis',
      title: 'Analysis: an attack path in the directory’s rights',
      context: [
        { t: 'p', text: 'A directory rights mapping tool returns the following path, starting from an ordinary user account:' },
        { t: 'code', lang: 'text', code: 'm.durand (user)         → member of  Support L1\nSupport L1              → can reset the password of  svc_backup\nsvc_backup              → local administrator of  SRV-FILES\nSRV-FILES               → open session of  adm-ad  (Domain Admins)' },
      ],
      steps: ['Describe how an attacker who controls m.durand reaches Domain Admins.', 'Propose at least two ways to cut this path.', 'State the events to monitor to detect its use.'],
    },
  ],
  questions,
  resources: [
    { title: 'Security recommendations for Active Directory (in French)', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-relatives-active-directory' },
    { title: 'Active Directory control points (ORADAD, in French)', source: 'ANSSI / CERT-FR', url: 'https://www.cert.ssi.gouv.fr/uploads/guide-ad.html' },
    { title: 'MITRE ATT&CK T1558.003 — Kerberoasting', source: 'MITRE', url: 'https://attack.mitre.org/techniques/T1558/003/' },
    { title: 'Best practices for securing Active Directory', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows-server/identity/ad-ds/plan/security-best-practices/best-practices-for-securing-active-directory' },
    { title: 'Windows LAPS overview', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows-server/identity/laps/laps-overview' },
  ],
};
