import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'd-windows-server-pki-durcissement',
  lesson: {
    intro:
      'Active Directory does not work alone: it relies on DNS to locate services, on DHCP to address workstations, and often on an internal PKI to issue the organization’s certificates. These infrastructure roles are prime targets: a hijacked DNS redirects authentications, a poorly configured PKI makes it possible to forge anyone’s identity. This course covers securing them and, more broadly, hardening a Windows server.',
    sections: [
      {
        id: 'infra',
        title: 'Windows DNS and DHCP',
        blocks: [
          { t: 'p', text: 'In a domain, **DNS** is critical: it is how workstations find the domain controllers (SRV records). Windows DNS is generally **integrated with Active Directory**, which replicates the zone between controllers and allows secure dynamic updates.' },
          {
            t: 'table',
            head: ['Role', 'Risk', 'Measure'],
            rows: [
              ['AD DNS', 'Resolution hijacking, redirection of authentications', '**Secure** dynamic updates only, restricted zone transfers, monitoring of changes'],
              ['DHCP', 'Rogue server, pool exhaustion, wrong gateway imposed', 'Server authorization in AD, DHCP snooping on the switch side, monitoring'],
            ],
          },
          { t: 'def', term: 'Secure dynamic update', text: 'An option of AD-integrated DNS that accepts records only from machines authenticated in the domain, and checks the rights on each record. It prevents any machine from overwriting an existing record.' },
          { t: 'def', term: 'SRV records', text: 'DNS records that indicate **which server offers which service** (for example a domain’s LDAP or Kerberos directory). Workstations query them to find a domain controller: an attacker who can create or modify them redirects authentications.' },
          { t: 'def', term: 'Global query block list', text: 'A Windows DNS server feature that **refuses to resolve certain special names** (WPAD, ISATAP) as long as no administrator has created them. It prevents a user from registering the name `wpad` to impose their proxy on the network’s workstations.' },
          { t: 'callout', kind: 'tip', text: 'Unrestricted zone transfers (AXFR) reveal the whole internal map (server names, services). They are allowed only between legitimate DNS servers.' },
        ],
      },
      {
        id: 'pki',
        title: 'Enterprise PKI with AD CS',
        blocks: [
          { t: 'p', text: 'A **PKI** (public key infrastructure) issues and manages the organization’s certificates: machine and user authentication, code signing, encryption, internal web servers. On Windows, the **AD CS** (Active Directory Certificate Services) role provides this PKI.' },
          {
            t: 'table',
            head: ['Component', 'Role'],
            rows: [
              ['Root authority', 'Trust anchor; ideally **offline**, it signs only the intermediate authorities'],
              ['Issuing authority', 'Online, issues certificates to requesters according to templates'],
              ['Certificate template', 'Defines the usage, the duration, who can request, and whether an intervention is required'],
              ['Revocation distribution point', 'Publishes the revoked certificates (CRL, OCSP)'],
            ],
          },
          { t: 'def', term: 'Certificate template', text: 'A pattern that determines what a certificate is for and how it is issued: allowed usages, duration, groups that can request one, and above all whether the requester can choose the certificate’s name (subject) themselves. This last point is a frequent source of misconfiguration.' },
          { t: 'def', term: 'Two-tier PKI', text: 'An **offline root** signs one or more online **issuing authorities**. If an issuing authority is compromised, it is revoked and a new one is created under the same root, without redeploying trust in the root on all workstations.' },
          { t: 'def', term: 'CRL and OCSP', text: 'The **CRL** is the list of revoked certificates, published periodically; **OCSP** is an online service that gives the state of a specific certificate. In both cases, the publication point must remain reachable and up to date, otherwise clients cannot conclude.' },
          { t: 'callout', kind: 'warn', text: 'If an issuing authority’s key is stolen, it is not only future certificates that are at stake: the attacker can forge valid certificates at will. The whole branch loses its trust and must be revoked and reissued.' },
          { t: 'callout', kind: 'key', text: 'A PKI is as sensitive as Active Directory: an authentication certificate issued by mistake lets someone pass for any user, including an administrator. The root authority is protected like a top-value asset (offline, strict access).' },
        ],
      },
      {
        id: 'certificats',
        title: 'Life cycle and configurations to audit',
        blocks: [
          { t: 'p', text: 'A certificate follows a cycle: request, validation, issuance, use, renewal, then expiry or early **revocation** (compromised key, departure, error). Clients check validity and non-revocation through the published lists (CRL) or the online service (OCSP).' },
          {
            t: 'table',
            head: ['Dangerous configuration to audit', 'Why'],
            rows: [
              ['An authentication template where the requester sets the subject themselves', 'Allows requesting a certificate in another account’s name'],
              ['Issuance without approval or group restriction', 'Anyone in the domain can obtain a sensitive certificate'],
              ['Enrollment rights too broad on a template', 'Widens the population able to obtain privileged certificates'],
              ['Issuing authority without supervision', 'Abnormal issuances go unnoticed'],
            ],
          },
          {
            t: 'example',
            title: 'A risky template and its fix',
            blocks: [
              { t: 'p', text: 'A “client authentication” template published for “Domain Users”, with the option “the requester supplies the subject” and no approval: a standard user can request a certificate whose subject designates an administrator, then authenticate as them.' },
              { t: 'p', text: 'Fix: remove the free subject option (the subject is drawn from the requester’s object in the directory), restrict enrollment to a specific group, require a manager’s approval for sensitive certificates, and trace the issuances.' },
            ],
          },
          { t: 'def', term: 'Subject Alternative Name (SAN)', text: 'An extension that lists the identities for which the certificate is valid: DNS names of a server, email address or user name (UPN) of a person. For an authentication certificate, a SAN **supplied by the requester** and accepted by the authority can designate another account.' },
          { t: 'def', term: 'Strong mapping', text: 'The domain controller requires the certificate to be tied to the **security identifier (SID)** of the account that uses it. A certificate obtained in another user’s name then no longer passes authentication, even if the template was poorly set.' },
          {
            t: 'table',
            head: ['Good practice', 'Effect'],
            rows: [
              ['Inventory and alerts before expiry', 'Avoids outages caused by an expired certificate'],
              ['Non-exportable keys (TPM, hardware module)', 'Prevents theft and copying of the private key'],
              ['Short durations, automatic renewal', 'Reduces the window of abuse of a stolen certificate'],
              ['Distinct certificates rather than a wildcard everywhere', 'Limits the effect of a key leak'],
            ],
          },
          { t: 'def', term: 'Revocation', text: 'Invalidation of a certificate before its expiry. It has an effect only if clients actually check the revocation state: an expired CRL or an unreachable distribution point leaves a compromised certificate usable.' },
          { t: 'callout', kind: 'warn', text: 'AD CS template misconfigurations are a studied and tooled privilege escalation route. The defensive approach: inventory the published templates, check who can enroll in them, disable those that let the subject be chosen for authentication, require approval for sensitive certificates and monitor issuances.' },
        ],
      },
      {
        id: 'hardening',
        title: 'Hardening a Windows server',
        blocks: [
          { t: 'p', text: 'A server is hardened by reducing its surface: fewer roles, fewer accounts, fewer services, and a configuration that follows a proven baseline.' },
          { t: 'list', items: ['**Minimal roles**: install only what the server must do; prefer **Server Core** (no graphical interface) to reduce the surface and the updates.', '**Configuration baselines**: apply a recognized base (CIS Benchmarks, Microsoft security baselines) through group policies.', '**Accounts**: no domain administrator logging on to an ordinary server; LAPS for the local administrator; managed service accounts (gMSA).', '**Network**: Windows Firewall active, flows limited to needs, administration through a dedicated network and an administration workstation.', '**Updates**: fixes applied quickly, a controlled cycle.'] },
          { t: 'def', term: 'Server Core', text: 'A Windows Server installation mode with no graphical interface, administered by command line (PowerShell) and remotely. Fewer components installed means fewer potential vulnerabilities and fewer restarts for fixes.' },
          { t: 'def', term: 'gMSA (group managed service account)', text: 'A service account whose long, random password is **generated and renewed by Active Directory**: no one knows or types it. It replaces weak, never-changed service passwords.' },
          { t: 'def', term: 'Tiered administration', text: 'An account’s credentials stay in memory on the machines where it logs on. One therefore separates **tier 0** (domain controllers, PKI), **tier 1** (servers) and **tier 2** (workstations): an account of one tier never logs on to a less secure tier.' },
          {
            t: 'table',
            head: ['Legacy protocol', 'Risk', 'Measure'],
            rows: [
              ['SMBv1', 'Major flaws, exploited by worms', 'Uninstall'],
              ['NTLM', 'Authentication relay, hash theft', 'Audit then restrict, prefer Kerberos'],
              ['LLMNR, NetBIOS over TCP/IP', 'Name spoofing on the local network', 'Disable through group policy'],
            ],
          },
          { t: 'callout', kind: 'key', text: 'A server’s hardening depends on its tier of role: a domain controller or a certification authority belongs to the highest administration tier and must never share credentials with less sensitive servers.' },
        ],
      },
      {
        id: 'supervision',
        title: 'Monitoring and backup',
        blocks: [
          { t: 'p', text: 'A hardened server must be monitored and backed up: without that, incidents go undetected and one cannot return to a healthy state.' },
          { t: 'list', items: ['Centralized **logging** (see the Windows workstation course): authentications, privileged group changes, role events (certificate issuances, DNS changes).', '**System state backup** and, for a domain controller, a backup allowing an authoritative restore in case of corruption or ransomware.', 'Regular **restore tests**: a backup that has never been tested is not a backup.', '**Integrity monitoring** of sensitive files and configuration changes.'] },
          { t: 'def', term: 'Authoritative restore', text: 'Restoration of Active Directory objects that overrides replication, used to reinstate deleted or altered objects. It assumes a healthy backup that predates the incident.' },
          { t: 'def', term: '3-2-1 rule', text: '**3** copies of the data, on **2** different media, **1** of them offsite or offline. It limits the effect of a failure, a disaster or ransomware.' },
          {
            t: 'table',
            caption: 'Events of an AD CS authority to monitor',
            head: ['ID', 'Meaning'],
            rows: [['4886', 'A certificate request was received'], ['4887', 'A request was approved and a certificate issued'], ['4888', 'A request was denied']],
          },
          { t: 'callout', kind: 'tip', text: 'Backups are themselves a target of ransomware: they must be isolated (offline or immutable) and their access strictly controlled, otherwise the attacker encrypts them too.' },
        ],
      },
      {
        id: 'reprise',
        title: 'Preparing to rebuild after a compromise',
        blocks: [
          { t: 'p', text: 'When an attacker has obtained domain administrator rights, one does not simply expel them: they may have copied secrets, created accounts, altered the PKI. Recovery is **prepared before the incident**, with written, rehearsed procedures.' },
          {
            t: 'table',
            head: ['Step', 'Action', 'Why'],
            rows: [
              ['1. Contain', 'Isolate the affected systems, cut the compromised accounts’ access', 'Stop the progression without destroying the evidence'],
              ['2. Preserve', 'Collect logs, copies and hashes of the affected systems', 'Understand the extent and feed the investigation'],
              ['3. Restore', 'Bring back a controller from a healthy backup that predates the intrusion', 'Start again from an unaltered directory'],
              ['4. Reset secrets', 'Privileged and service passwords, double reset of `krbtgt`, PKI secrets', 'Make the copied credentials unusable'],
              ['5. Check the PKI', 'Check templates, rights and issued certificates; revoke and reissue if needed', 'An altered PKI allows authenticating again'],
              ['6. Harden and monitor', 'Fix the cause, strengthen tier separation, alert on signs of return', 'Avoid a recurrence'],
            ],
          },
          { t: 'callout', kind: 'info', title: 'The krbtgt account', text: 'The account whose secret signs all the domain’s Kerberos tickets. If it has been copied, the attacker can forge valid tickets. It is **reset twice** (with the replication delay between the two) to invalidate the current and the previous secret.' },
          { t: 'callout', kind: 'warn', text: 'An improvised recovery often fails: backups encrypted with the rest, unknown rebuild order, secrets not renewed. A yearly rebuild exercise on an isolated environment reveals these gaps before the incident.' },
        ],
      },
    ],
    useCases: [
      'Domain security review: secure DNS updates, restricted zone transfers, DHCP server authorization.',
      'AD CS PKI audit: template inventory, enrollment rights, detection of dangerous templates.',
      'Hardening a server estate: Server Core, CIS baselines, LAPS, gMSA, isolated and tested backups.',
      'Recovery preparation: Active Directory rebuild plan, secret resets, PKI check, yearly exercise.',
    ],
    commonMistakes: [
      'Leaving DNS dynamic updates non-secure or zone transfers open.',
      'Publishing certificate templates where the requester chooses the subject of an authentication certificate.',
      'Treating a PKI or a domain controller like an ordinary server, with shared credentials.',
      'Installing useless roles and tools on a server.',
      'Not isolating or testing backups, which are then encrypted with the rest during ransomware.',
      'Leaving SMBv1, LLMNR or NTLM active without audit or restriction.',
      'Believing that DHCP authorization in AD prevents any rogue server from answering.',
      'Using a wildcard certificate copied everywhere, where a single leak exposes all subdomains.',
    ],
    bestPractices: [
      'AD-integrated DNS with secure updates and restricted zone transfers; authorized and monitored DHCP server.',
      'Offline root authority; restricted certificate templates, approval for sensitive certificates, operational revocation.',
      'Minimal roles, Server Core, configuration baselines (CIS, Microsoft), LAPS and gMSA.',
      'Strict separation of administration tiers; no shared credentials between sensitive and ordinary servers.',
      'Centralized logging, isolated and regularly tested backups.',
      'Tiered administration model, strong certificate mapping, authority auditing (events 4886 to 4888).',
      'A written, rehearsed recovery plan: healthy backup, secret resets (krbtgt twice), PKI check.',
    ],
    keyPoints: [
      'AD DNS is critical: secure updates, restricted zone transfers.',
      'A PKI is as sensitive as AD; the root authority stays offline.',
      'Poorly configured certificate templates (free subject, broad enrollment) are an escalation route to audit.',
      'Revocation acts only if clients check the revocation state.',
      'Harden = minimal roles, Server Core, CIS baselines, tier separation, isolated and tested backups.',
      'Recovery: restore a healthy backup, reset the copied secrets and check the PKI; all of it is prepared before the incident.',
    ],
  },
  practice: [
    {
      id: 'audit-pki',
      kind: 'analysis',
      title: 'Auditing a PKI’s templates',
      context: [
        { t: 'p', text: 'Extract of an inventory of the certificate templates published by an AD CS authority:' },
        {
          t: 'table',
          head: ['Template', 'Usage', 'Can enroll', 'Subject supplied by the requester', 'Approval'],
          rows: [
            ['InternalWebServer', 'Server authentication', 'Server admins', 'No (drawn from the object)', 'No'],
            ['UserAuth', 'Client authentication', 'Domain users', 'Yes', 'No'],
            ['CodeSigning', 'Code signing', 'Whole domain', 'No', 'No'],
          ],
        },
      ],
      steps: ['Identify the risky template(s) and explain why.', 'Propose the fix for each.', 'State what to monitor on the issuing authority side.'],
    },
    {
      id: 'durcir-dc',
      kind: 'case',
      title: 'Case study: securing a new domain controller',
      context: [{ t: 'p', text: 'You are adding a domain controller, which will also host the AD-integrated DNS. It must be hardened before going into production, and a backup strategy must be defined.' }],
      steps: ['List the hardening measures specific to this sensitive role.', 'Describe the secure DNS configuration.', 'Propose a ransomware-resistant backup strategy.'],
    },
    {
      id: 'reprise-ad',
      kind: 'case',
      title: 'Case study: rebuilding after ransomware',
      context: [{ t: 'p', text: 'Ransomware has encrypted an organization’s servers as well as the backups, which were on a network share accessible with the domain administration account. An offline backup three weeks old exists for a single domain controller. The investigation shows that the attacker had domain administrator rights for at least ten days.' }],
      steps: ['Explain why the offline backup is usable or not, and under what conditions.', 'Order the recovery steps (contain, restore, reset, check).', 'Propose the measures that would avoid ending up in this situation.'],
    },
  ],
  questions,
  resources: [
    { title: 'Active Directory Certificate Services', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows-server/identity/ad-cs/active-directory-certificate-services-overview' },
    { title: 'DNS Policies / Securing DNS', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows-server/networking/dns/dns-top' },
    { title: 'Windows Server security documentation', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows-server/security/security-and-assurance' },
    { title: 'Enterprise access model (tiered administration)', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/security/privileged-access-workstations/privileged-access-access-model' },
    { title: 'CIS Benchmarks', source: 'Center for Internet Security', url: 'https://www.cisecurity.org/cis-benchmarks' },
    { title: 'Recommendations for the secure administration of information systems (in French)', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si' },
  ],
};
