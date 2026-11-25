import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'j-forensique-avancee',
  practice: {
    'plan-investigation': {
      blocks: [
        {
          t: 'table',
          head: ['Element', 'Proposal'],
          rows: [
            ['Questions', 'What information left? By which path? Since when? Who had access?'],
            ['Scope', 'Mailboxes of the people concerned, file-share space of the case, access logs, workstations of the collaborators involved in the negotiation'],
            ['Authorizations', 'Written mandate from management, opinion of legal and staff representatives, respect for privacy (charter, GDPR)'],
            ['Constraints', 'Three weeks; client confidentiality; neutrality regarding the hypothesis of internal abuse'],
          ],
        },
        {
          t: 'table',
          head: ['Hypothesis', 'What would confirm it', 'What would refute it'],
          rows: [
            ['H1: external compromise of the mail system', 'Unusual sign-ins, forwarding rule, application consent, access outside habits', 'No abnormal sign-in, no rule added, complete logs'],
            ['H2: deliberate internal leak', 'Copy or sending of the documents by an account to an external destination, outside the scope of work', 'No transfer from the accounts concerned; access consistent with the role'],
            ['H3: overly open share', 'Public or third-party share link, anonymous access in the storage logs', 'Share restricted from the start, no external access'],
          ],
        },
        { t: 'list', items: ['**1. The most fragile**: identity and mail logs (short retention), storage access logs, snapshots that expire: to export right away.', '**2. Firewall and proxy logs**, according to their retention.', '**3. Workstations**: images or targeted collections of the key people’s machines, memory if the workstation is on.', '**4. Accounts and rights**: history of changes, forwarding rules, consents.'] },
        { t: 'p', text: 'The logbook notes why each source is taken or not. A weekly progress point is prepared for management, without naming a culprit before having evidence.' },
      ],
    },
    'cloud-identite': {
      blocks: [
        {
          t: 'table',
          head: ['Time (UTC)', 'Fact', 'Reading'],
          rows: [
            ['02:11', 'Sign-in from an unusual country, MFA validated by notification', 'Account probably stolen, perhaps with MFA fatigue'],
            ['02:14', 'Forwarding rule to an external address', 'Silent collection of emails: persistence and exfiltration'],
            ['02:19', 'Consent granted to an unknown application', 'Persistent access independent of the password'],
            ['02:26', 'New authentication method', 'Locking in of access by the adversary'],
            ['02:31 – 02:35', 'Access key for a service account; large virtual machine in an unusual region', 'Extension of access and use of resources (for example compute abuse)'],
          ],
        },
        { t: 'p', text: 'Main hypothesis: takeover of the account followed by rapid extension, with persistence through a rule, a consented application, an authentication method and an access key. Alternative hypothesis: legitimate use by the person while traveling, unlikely given the series of persistence actions within fifteen minutes.' },
        { t: 'list', items: ['**Preserve first** (30-day retention for identity, 7 days for snapshots): export the identity and platform logs, take a snapshot of the virtual machine created before it is deleted, copy the configuration of the rules and consents, compute hashes.', '**Then contain**: revoke sessions and tokens, reset the account’s credentials, delete the forwarding rule, remove the consent and the added authentication method, revoke the access key, isolate the virtual machine through network rules (without deleting it).', '**Search**: other accounts that consented to the same application, other resources created from the key, data read or transferred.'] },
        { t: 'p', text: '**Legal points**: possible notification to the CNIL (personal data in the mailbox), informing the insurer, preservation request to the provider, the place where logs are stored, respect for the privacy of the person whose account is examined.' },
      ],
    },
    'contre-expertise': {
      blocks: [
        {
          t: 'table',
          head: ['Objection', 'Documented answer'],
          rows: [
            ['Workstation clock wrong', 'The drift was measured by comparing events with a reference source (time server, another system’s logs); the dates are corrected and the original values kept in the report'],
            ['Tool not validated', 'Name, version and parameters are recorded; the tool was validated on a known test set; the key results are cross-checked with a second independent tool'],
            ['Access to the account by other people', 'The report establishes that **the account** deleted the document; it does not name the person. Authentication logs (address, device, time) are provided to examine who used the account'],
            ['SSD, deletion not datable', 'Limit acknowledged: recovery of deleted data is uncertain on SSD. Dating rests on logs and metadata independent of the disk (application and file-server logs, recycle bin, backups)'],
          ],
        },
        { t: 'list', items: ['**Limits stated in the report**: the confidence level of each conclusion and the elements that cannot be proven.', '**Alternative hypotheses**: mentioned with the reason for their rejection or retention.', '**Additional checks**: comparison with the file server’s logs, analysis of an earlier backup copy, comparison of timestamps with external sources (mail, time server), a second independent analysis.'] },
        { t: 'p', text: 'Typical answer: “The elements collected are consistent with a deletion by this account on March 12, with a high confidence level on the date (three concordant independent sources) and a medium level on the identity of the person, which the report does not seek to establish.”' },
      ],
    },
  },
};
