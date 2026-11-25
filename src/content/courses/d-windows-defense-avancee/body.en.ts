import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'd-windows-defense-avancee',
  lesson: {
    intro:
      'The module’s previous courses described the protections of a workstation, a server and the directory. This course takes the side of a defender facing a patient adversary who has already got past the basic protections: it starts from the hypothesis that the attacker is or will be in the network, and seeks to make each of their steps costly, visible and reversible. It is about reasoning in terms of control systems: threat model, identity hardening, detection, advanced attacks, hybrid identity and response.',
    sections: [
      {
        id: 'menace',
        title: 'Modeling the threat on Windows and Active Directory',
        blocks: [
          { t: 'p', text: 'A threat model describes **who** attacks, **from where**, **to obtain what**, and what stops them. On a domain, the final target is almost always identity: the privileged accounts and the secrets that protect them. One starts from the **assume-breach hypothesis**: a workstation, an account or a contractor will be compromised one day; the question is what it will be able to do next.' },
          {
            t: 'table',
            head: ['Attack stage', 'Typical technique (ATT&CK)', 'Detection', 'Prevention'],
            rows: [
              ['Initial access', 'Phishing, valid account (T1566, T1078)', 'Mail, unusual logons', 'Multifactor, filtering'],
              ['Credential theft', 'Dumping LSASS memory (T1003)', 'Sysmon 10, EDR', 'LSA protection, Credential Guard'],
              ['Lateral movement', 'Remote services, shares (T1021)', 'East-west flows, 4624 type 3', 'Segmentation, LAPS, tiers'],
              ['Privilege escalation', 'Abuse of rights and certificates (T1484, T1649)', '5136, 4887', 'ACL audit, certificate templates'],
              ['Domain', 'Extraction of the directory’s secrets (T1003.006)', '4662, abnormal replication', 'Restricted replication rights'],
            ],
          },
          { t: 'def', term: 'Assume-breach hypothesis', text: 'A design principle: one assumes that an attacker is already in the network (or will be), and builds defenses, detections and recovery plans accordingly, instead of relying only on prevention at the perimeter.' },
          { t: 'def', term: 'ATT&CK', text: 'A public framework of observed adversary **tactics and techniques**. It serves as a common language to describe an attack, map one’s detections, spot the **uncovered** techniques and plan exercises; it does not say which techniques are the most likely in one’s own environment.' },
          { t: 'callout', kind: 'key', text: 'A threat model is not a frozen document: it is updated with the domain, the contractors, the incidents experienced and the new techniques. Privileged accounts, service accounts and their sessions are its priority entries.' },
        ],
      },
      {
        id: 'durcissement',
        title: 'Hardening identity: beyond the basics',
        blocks: [
          { t: 'p', text: 'Advanced hardening is not about multiplying settings: it reduces **where** a powerful account can authenticate, **for how long** it holds its rights and **which weak protocols** remain available.' },
          {
            t: 'table',
            head: ['Measure', 'What it limits', 'Deployment precaution'],
            rows: [
              ['**Privileged access workstation (PAW)**', 'The exposure of privileged accounts to a compromised workstation', 'Dedicated workstation, no mail or browsing, filtered network access'],
              ['**Authentication policies and silos**', 'The machines on which an account can obtain a ticket', 'Test on pilot accounts, plan a break-glass account'],
              ['**Just-in-time (JIT) rights and JEA**', 'The duration and extent of privileges', 'Approval and traceability process'],
              ['**NTLM restriction**', 'Relay and replay of authentications', 'Audit first, list the dependencies, restrict in stages'],
              ['**LDAP signing and channel binding, SMB signing**', 'Authentication relay to the directory and the shares', 'Inventory the old clients before enforcing'],
              ['**Credential Guard, LSA protection**', 'Theft of secrets in memory', 'Driver and application compatibility'],
            ],
          },
          { t: 'def', term: 'Privileged access workstation (PAW)', text: 'A workstation **dedicated** to administration tasks: hardened, with no mail or web browsing, reachable only by administrators and filtered at the network level. An administrator who authenticates from a PAW leaves no secrets on a workstation exposed to booby-trapped emails.' },
          { t: 'def', term: 'Just-in-time rights and JEA', text: '**Just-In-Time**: a privilege is granted on request, for a limited duration, then removed. **Just Enough Administration**: a restricted PowerShell session exposes only the commands needed for a delegated task. One limits the duration, the other the extent.' },
          { t: 'def', term: 'LDAP channel binding', text: 'A mechanism that ties LDAP authentication to the **TLS channel** that carries it. Combined with LDAP signing, it prevents an intercepted authentication from being relayed to the directory through another channel.' },
          { t: 'def', term: 'Authentication policy and silo', text: 'A set of rules that restrict **from which machines** and with what ticket lifetime a sensitive account can authenticate. A tier 0 account can then obtain tickets only from the controllers and the PAWs.' },
          { t: 'callout', kind: 'warn', text: 'Multifactor authentication protects the **logon**, not the **workstation**: if an administrator’s workstation is compromised after authentication, the attacker acts with their session. Hence PAWs, short lifetimes and just-in-time rights.' },
        ],
      },
      {
        id: 'detection',
        title: 'Detecting: rules, decoys and quality measurement',
        blocks: [
          { t: 'p', text: 'Detecting an advanced attack means monitoring **behaviors** rather than frozen signatures, and measuring the quality of what one has written. A rule that has never fired is not necessarily effective: it may never have been tested.' },
          {
            t: 'table',
            head: ['Detection case', 'Source', 'Clue'],
            rows: [
              ['Extraction through replication (DCSync)', 'Event 4662 (directory access auditing)', 'Replication rights used by an account that is not a controller'],
              ['Modification of a GPO, ACL, group', 'Events 5136, 4728, 4732, 4756', 'Modification outside the process by a non-administrator account'],
              ['Addition of an authentication key to an account', 'Event 5136 on `msDS-KeyCredentialLink`', 'Attribute modified by an unexpected account'],
              ['Abnormal certificate issuance', 'Event 4887', 'Unusual requester and template'],
              ['Use of a decoy account', 'Authentication logs', 'Any attempt on an account that has no use'],
            ],
          },
          { t: 'def', term: 'Honeytoken', text: 'An object with **no legitimate use** (decoy account, fake SPN, bait file) whose every use signals an attacker. Decoys give very few false positives, provided they are credible and serve no other purpose.' },
          { t: 'def', term: 'Sigma', text: 'An open, platform-independent format to describe **detection rules** on logs. A Sigma rule is translated to the queries of different monitoring tools, which makes it possible to share and version it.' },
          {
            t: 'example',
            title: 'A rule to detect extraction through replication',
            blocks: [
              { t: 'code', lang: 'text', code: 'title: Directory replication by a non-controller account\nlogsource: { product: windows, service: security }\ndetection:\n  selection:\n    EventID: 4662\n    Properties|contains:\n      - \'1131f6aa-9c07-11d1-f79f-00c04fc2dcd2\'   # Get-Changes\n      - \'1131f6ad-9c07-11d1-f79f-00c04fc2dcd2\'   # Get-Changes-All\n  filter_dc:\n    SubjectUserName|endswith: \'$\'               # controller accounts\n  condition: selection and not filter_dc\nlevel: high' },
              { t: 'p', text: 'The rule looks for the use of replication rights, excluding the machine accounts of domain controllers whose legitimate replication is constant. It has value only if tested: on a simulated extraction exercise, it must fire; on normal operation, it must stay silent.' },
            ],
          },
          { t: 'list', items: ['**Test** each rule on a simulated attack (offensive team, simulation tool) and on normal traffic.', '**Measure** false positives, adjust the exclusions, document the expected response for each alert.', '**Review** regularly: a rule whose exclusions have grown unchecked ends up detecting nothing.'] },
          { t: 'callout', kind: 'tip', text: 'Identity analysis services (such as Microsoft Defender for Identity) read the controllers’ logs and traffic to detect known attacks. They complement, without replacing, the rules specific to the organization.' },
        ],
      },
      {
        id: 'attaques',
        title: 'Advanced attacks on the directory and countermeasures',
        blocks: [
          { t: 'p', text: 'Beyond password theft, an experienced adversary abuses the very workings of the directory to obtain rights or settle in durably. The techniques below are described here **to recognize and prevent them**; they are practiced only in a lab or an authorized mission.' },
          {
            t: 'table',
            head: ['Technique', 'Principle', 'Clue', 'Countermeasure'],
            rows: [
              ['**DCShadow**', 'Temporarily register a fake machine as a controller to inject changes through replication', 'Server object created then deleted in the configuration partition', 'Monitor these objects, restrict creation rights'],
              ['**AdminSDHolder**', 'Add an ACL to the template that protects privileged accounts: it is reapplied at each cycle', 'Modification of the AdminSDHolder container’s rights', 'Audit its ACLs, alert on any modification'],
              ['**NTLM relay to AD CS**', 'Have an account’s authentication relayed to the certificate enrollment web service, to obtain a certificate in its name', 'Unusual 4887 issuance, request from a foreign source', 'Disable NTLM on web enrollment, enforce extended protection'],
              ['**Shadow credentials**', 'Add a key to an account’s `msDS-KeyCredentialLink` attribute to authenticate as it by certificate', 'Modification of this attribute (5136)', 'Restrict write access, monitor the attribute'],
              ['**Resource-based delegation (RBCD)**', 'Create a machine account, declare it allowed to act on a user’s behalf on a target', 'Creation of machine accounts, modification of the delegation attribute', 'Limit the machine account quota, audit the attribute'],
              ['**SID history**', 'Add a privileged group’s SID to an account’s history', 'Accounts with unexpected SID History', 'Regular inventory, SID filtering between domains'],
            ],
          },
          { t: 'def', term: 'Machine account quota', text: 'A domain attribute (`ms-DS-MachineAccountQuota`) that allows each user to join a certain number of machines, **ten by default**. Setting it to **zero** removes an ordinary account’s ability to create machine accounts, which serve several abuses (delegation, relay).' },
          { t: 'def', term: 'Persistence in the directory', text: 'A directory modification that lets an attacker **come back** after being expelled: a hijacked ACL, a hidden membership, SID history, an issued authentication certificate, a key added to an account. It is not fixed by resetting passwords: it must be **searched for** and removed.' },
          { t: 'callout', kind: 'warn', text: 'Most of these techniques rely on a **poorly delegated** right or an old setting, not on a software flaw: they disappear with ACL auditing, the reduction of legacy protocols and the monitoring of sensitive attributes.' },
        ],
      },
      {
        id: 'hybride',
        title: 'Hybrid identity and cloud services',
        blocks: [
          { t: 'p', text: 'Many organizations link their directory to a cloud identity service (for example Microsoft Entra ID) through a **synchronization service**. Identity becomes a chain: a local compromise can reach the cloud, and the reverse. The defender must consider the two worlds as **a single perimeter**.' },
          {
            t: 'table',
            head: ['Element', 'Risk', 'Measure'],
            rows: [
              ['Synchronization server and account', 'Compromised, it makes it possible to write identities on both sides', 'Treat as tier 0, harden, monitor its configuration'],
              ['Synchronized accounts with privileged cloud roles', 'A local compromise gives privileged access to the cloud', 'Dedicated cloud administration accounts, not synchronized'],
              ['Session tokens', 'A stolen token can bypass multifactor', 'Short lifetimes, conditional access, binding to the device'],
              ['Permanent privileged roles', 'Rights available at all times to an attacker', 'Temporary elevation on request (PIM)'],
            ],
          },
          { t: 'def', term: 'Conditional access', text: 'A policy that evaluates **identity, device, location and risk** before authorizing access to a resource, and can require a second factor, a compliant device or deny access. It replaces the trust granted to the internal network alone.' },
          { t: 'def', term: 'PIM (Privileged Identity Management)', text: 'A service that makes cloud privileged roles **eligible** rather than permanent: the administrator activates them for a limited duration, with justification, possible approval and logging.' },
          { t: 'def', term: 'Token theft', text: 'An attacker intercepts (through a relay fake site, malware) an already authenticated **session token** and reuses it: the multifactor was satisfied by the victim. Countermeasures are short lifetimes, binding the token to the device and continuous risk evaluation.' },
          { t: 'callout', kind: 'tip', text: 'The golden rule of hybrid identity: **no cloud privilege must depend on a local account**, and the synchronization server is protected like a domain controller.' },
        ],
      },
      {
        id: 'reponse',
        title: 'Responding and rebuilding',
        blocks: [
          { t: 'p', text: 'Responding to an incident on the directory is an **operation** carried out in stages, with decisions that matter: contain without destroying the evidence, assess the extent, remove all the persistences, then rebuild whatever has doubtful integrity.' },
          {
            t: 'table',
            head: ['Phase', 'Goal', 'Main actions'],
            rows: [
              ['**Triage**', 'Confirm and qualify the alert', 'Correlate events, identify the accounts and machines concerned, assess severity'],
              ['**Containment**', 'Stop the progression', 'Isolate machines (without powering off), disable accounts, purge tickets, block sources'],
              ['**Collection**', 'Preserve the evidence', 'Memory image, logs, copies and hashes, chain of custody'],
              ['**Eradication**', 'Remove all presence', 'Look for persistences, reset secrets, fix the entry flaw'],
              ['**Rebuild**', 'Restore a healthy state', 'Rebuild doubtful machines, restore the directory if needed, check the PKI'],
              ['**Lessons learned**', 'Not to start again', 'Timeline, causes, corrective measures, update of the threat model and detections'],
            ],
          },
          { t: 'def', term: 'Purple team', text: 'An exercise where the team that **attacks** (red) and the one that **defends** (blue) work together: the attacker replays a technique, the defender checks whether it is detected, then the rule is fixed. It is the most direct method to measure and improve detection coverage.' },
          { t: 'def', term: 'Forest rebuild', text: 'A procedure that puts a directory back into service **reliably** after an extensive compromise: restoration from a healthy backup, cleaning of the forest, reset of the secrets and recheck of the PKI. It requires preparation and rehearsals, because it is done under the pressure of an incident.' },
          { t: 'list', items: ['**Memory first**: before powering off a suspect machine, its memory is captured, which holds processes, connections, keys and code absent from the disk.', '**Isolating is not powering off**: the network is cut (port, VLAN, firewall rule) to keep the machine’s state.', '**Really eradicate**: resetting passwords is not enough if an ACL, a certificate or an authentication key remains in place.'] },
          { t: 'callout', kind: 'warn', text: 'During an incident, each decision has a cost: isolating too early may alert the attacker, waiting lets the attack progress. A plan written in advance, rehearsed in exercises, avoids arbitrating in the urgency without criteria.' },
        ],
      },
    ],
    useCases: [
      'Exposure review: mapping the existing detections on ATT&CK and listing the uncovered techniques.',
      'Deploying administration workstations, authentication policies and just-in-time rights for the most sensitive accounts.',
      'Writing, testing and tuning detection rules (Sigma) and deploying decoy accounts.',
      'Auditing the directory’s sensitive attributes (AdminSDHolder, delegation, authentication keys, SID history).',
      'Purple team exercise on a secret extraction technique, from detection to response.',
    ],
    commonMistakes: [
      'Believing that multifactor authentication protects the administrator’s workstation, and not only their logon.',
      'Enforcing NTLM restriction, LDAP signing or SMB signing without a prior audit, then removing everything when outages occur.',
      'Writing detection rules without ever testing them on a simulated attack.',
      'Letting a rule’s exclusions grow until it detects nothing any more.',
      'Assigning privileged cloud roles to accounts synchronized from the local directory.',
      'Cleaning an incident by resetting passwords without looking for persistences (ACLs, certificates, keys, SID history).',
      'Powering off a compromised machine before capturing its memory.',
    ],
    bestPractices: [
      'Assume-breach hypothesis, an updated threat model and an ATT&CK mapping of detection coverage.',
      'Privileged accounts limited to PAWs, with authentication policies, just-in-time rights and short lifetimes.',
      'NTLM, SMB and LDAP signing: audit, then staged restriction; machine account quota at zero.',
      'Versioned detection rules, tested on simulated attack, measured for false positives; credible decoys.',
      'Monitoring of the directory’s sensitive attributes and containers (5136, 4662, 4887).',
      'Hybrid identity treated as a single perimeter: synchronization at tier 0, dedicated cloud accounts, conditional access, PIM.',
      'A written, rehearsed (purple team) response and rebuild plan, with a chain of custody of evidence.',
    ],
    keyPoints: [
      'Compromise is assumed: the goal is to make each of the attacker’s steps costly, visible and reversible.',
      'MFA protects the logon, not the workstation: PAWs, authentication policies and just-in-time rights reduce exposure.',
      'Restricting NTLM and enforcing signatures and channel binding is done by audit then in stages.',
      'A detection is worth what it has been tested for: simulation, false positive measurement, review of exclusions; decoys complement.',
      'Advanced attacks abuse the directory’s rights and attributes; they are prevented through auditing and monitoring.',
      'In hybrid, synchronization is tier 0 and no cloud privilege depends on a local account.',
      'Response follows phases: triage, containment, collection, eradication, rebuild, lessons learned.',
    ],
  },
  practice: [
    {
      id: 'regle-detection',
      kind: 'analysis',
      title: 'Evaluating a detection rule',
      context: [
        { t: 'p', text: 'An analyst proposes this rule to detect the extraction of the directory’s secrets through replication:' },
        { t: 'code', lang: 'text', code: 'title: DCSync detection\nlogsource: { product: windows, service: security }\ndetection:\n  selection:\n    EventID: 4624\n    LogonType: 3\n    TargetUserName|contains: \'admin\'\n  condition: selection\nlevel: critical' },
      ],
      steps: ['Explain why this rule does not detect extraction through replication and would generate many false positives.', 'Propose a corrected rule (event, fields, exclusions) and the logging prerequisites.', 'Describe how to test the rule and measure its quality before putting it into production.'],
    },
    {
      id: 'plan-identite',
      kind: 'case',
      title: 'Case study: a 90-day identity hardening plan',
      context: [{ t: 'p', text: 'A company with 2,000 accounts has an Active Directory domain synchronized with the cloud. Findings: administrators logged on to their usual workstation, NTLM used everywhere, LDAP without signing, machine account quota at its default, privileged cloud roles assigned to synchronized accounts, no detection rule specific to the directory.' }],
      steps: ['Prioritize the measures over 90 days, justifying the order.', 'For each one, state how to deploy it without causing an outage.', 'Define the indicators that show the measure is in place and effective.'],
    },
    {
      id: 'reponse-annuaire',
      kind: 'case',
      title: 'Case study: an abnormal replication detected',
      context: [{ t: 'p', text: 'Your monitoring reports a 4662 event with replication rights, issued by an employee’s account from a workstation. In the previous hour, a GPO was modified by the same account and an unknown scheduled task appeared on three servers.' }],
      steps: ['Qualify the situation and list the first checks.', 'Order the containment, collection and extent-assessment actions.', 'Describe the eradication, the rebuild and the lessons to draw.'],
    },
  ],
  questions,
  resources: [
    { title: 'MITRE ATT&CK', source: 'MITRE', url: 'https://attack.mitre.org/' },
    { title: 'Sigma — open detection rule format', source: 'SigmaHQ', url: 'https://github.com/SigmaHQ/sigma' },
    { title: 'Securing privileged access (privileged access workstations)', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/security/privileged-access-workstations/overview' },
    { title: 'Active Directory Forest Recovery Guide', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows-server/identity/ad-ds/manage/forest-recovery-guide/ad-forest-recovery-guide' },
    { title: 'Microsoft Defender for Identity', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/defender-for-identity/what-is' },
    { title: 'Security recommendations for Active Directory (in French)', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-relatives-active-directory' },
  ],
};
