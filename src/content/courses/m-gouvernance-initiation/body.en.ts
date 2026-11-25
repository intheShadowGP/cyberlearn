import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'm-gouvernance-initiation',
  lesson: {
    intro:
      'Every organization, from the small association to the large company, handles information it cannot do without: customer files, invoices, emails, schedules. **Security governance** is the art of deciding what to protect, how and with which means, then checking that it is applied. This course, with no prerequisites, presents the basic notions, the vocabulary of risk, the role of rules and managers, the protection of personal data and good reflexes.',
    sections: [
      {
        id: 'notions',
        title: 'The basic notions',
        blocks: [
          { t: 'p', text: 'Information security protects what has value for an organization: information in all its forms (files, paper, conversations), and the means that process it. It rests on three objectives.' },
          {
            t: 'table',
            head: ['Objective', 'Meaning', 'Example of a breach'],
            rows: [
              ['**Confidentiality**', 'Only authorized people access the information', 'Customer file stolen'],
              ['**Integrity**', 'The information is not modified without authorization', 'Amount of an invoice falsified'],
              ['**Availability**', 'The information is accessible when needed', 'Service blocked by a failure or an attack'],
            ],
          },
          { t: 'def', term: 'Security governance', text: 'Set of decisions, rules, roles and controls by which an organization chooses what it protects, how, and verifies over time that these choices are applied.' },
          { t: 'def', term: 'Asset', text: 'Anything that has value for the organization: data, applications, equipment, premises, but also know-how and reputation.' },
          { t: 'callout', kind: 'info', text: 'Security is not only a matter for IT staff: it also concerns premises, paper, suppliers and above all people.' },
        ],
      },
      {
        id: 'risques',
        title: 'Understanding a risk',
        blocks: [
          { t: 'p', text: 'You cannot protect everything to the maximum: you choose according to **risks**. A risk is the possibility that an event causes damage.' },
          {
            t: 'table',
            head: ['Word', 'Meaning', 'Example'],
            rows: [
              ['**Threat**', 'Possible cause of an incident', 'A fraudster sending fake emails'],
              ['**Vulnerability**', 'Weakness that can be exploited', 'Too simple a password, unpatched software'],
              ['**Likelihood**', 'Probability that the scenario occurs', 'Low, medium, high'],
              ['**Severity**', 'Extent of the consequences', 'Business stopped for a week'],
              ['**Measure**', 'Means of reducing the risk', 'Strong authentication, backup'],
            ],
          },
          {
            t: 'example',
            title: 'A simple risk',
            blocks: [
              { t: 'p', text: 'An online shop keeps its orders on a single computer, with no backup. The threat is a failure or ransomware. The vulnerability is the absence of a copy. The severity is high (loss of all orders), the likelihood medium. Measure: an automatic backup kept offline.' },
            ],
          },
          { t: 'list', items: ['**Reduce**: apply measures (the most frequent case).', '**Transfer**: insure, entrust to a provider (responsibility does not disappear).', '**Avoid**: give up the risky activity.', '**Accept**: decision assumed by management for a tolerable remaining risk.'] },
          { t: 'callout', kind: 'key', text: 'Zero risk does not exist. The goal is to bring risks down to a level **accepted knowingly**.' },
        ],
      },
      {
        id: 'regles',
        title: 'Rules, roles and responsibilities',
        blocks: [
          { t: 'p', text: 'Written rules prevent everyone from doing things their own way. They become effective when they are clear, justified, applicable and applied by all, including management.' },
          {
            t: 'table',
            head: ['Element', 'Role'],
            rows: [
              ['**Security policy**', 'Sets the objectives and principles, approved by management'],
              ['**IT charter**', 'Reminds users of the usage rules: passwords, email, reporting'],
              ['**Security manager (CISO)**', 'Steers security, advises management, tracks risks and incidents'],
              ['**Management**', 'Decides, provides the means, accepts the remaining risks, sets the example'],
              ['**Each person**', 'Applies the rules and reports anomalies'],
            ],
          },
          { t: 'def', term: 'CISO', text: 'Chief information security officer: defines and enforces the policy, tracks risks and reports to management. They rely on the technical teams without replacing them.' },
          { t: 'list', items: ['**A bypassed rule protects nothing**: it must be feasible day to day.', '**Everyone has a personal account**: you do not share your password or your badge.', '**Management sets the example**: a rule it exempts itself from is judged optional.'] },
          { t: 'callout', kind: 'tip', text: 'When a rule seems absurd, say so: a poorly adapted rule is often bypassed, and it is better to adjust it than to endure it.' },
        ],
      },
      {
        id: 'donnees',
        title: 'Data and the protection of individuals',
        blocks: [
          { t: 'p', text: 'Not all data has the same sensitivity. It is **classified** by level, and each level calls for precise rules.' },
          {
            t: 'table',
            head: ['Level', 'Examples', 'Typical rules'],
            rows: [
              ['Public', 'Sales brochure', 'Free distribution'],
              ['Internal', 'Procedures, directory', 'Reserved for staff'],
              ['Confidential', 'Contracts, customer data, payroll', 'Limited access, encryption'],
            ],
          },
          { t: 'def', term: 'Personal data', text: 'Information that identifies a person, directly or indirectly: name, address, phone number, online identifier, photo.' },
          { t: 'def', term: 'GDPR', text: 'General Data Protection Regulation: it frames the collection and use of personal data, requires security measures adapted to the risk and requires notifying the CNIL of a data breach, in principle within 72 hours.' },
          { t: 'list', items: ['**Collect only what is necessary** and do not keep it without limit.', '**Limit access** to the people who need it.', '**Encrypt and back up** sensitive data.', '**Never leave** a confidential document unattended (printer, desk, screen).'] },
          { t: 'callout', kind: 'warn', text: 'Sending the organization’s data to a personal mailbox or storage takes this data out of all control.' },
        ],
      },
      {
        id: 'humain',
        title: 'The human factor and booby-trapped messages',
        blocks: [
          { t: 'p', text: 'Attackers look for the easiest path: **people**. A convincing message is often enough to obtain a password, a click or a transfer.' },
          {
            t: 'table',
            head: ['Sign', 'Why it is suspicious'],
            rows: [
              ['Tone of urgency or threat', 'Pushes you to act without thinking'],
              ['Unusual sender or address', 'Imitation of a contact or a service'],
              ['Request for credentials, payment or change of details', 'The fraudster’s goal'],
              ['Unexpected attachment or link', 'May install malicious software'],
              ['Mistakes, odd phrasing, copied logo', 'A logo is easy to copy: it proves nothing'],
            ],
          },
          { t: 'def', term: 'Phishing', text: 'Message that imitates a trusted organization or person to obtain an action: click, open a file, enter a password, pay.' },
          { t: 'list', ordered: true, items: ['**Do not click**, do not reply, do not open the attachment.', '**Verify** the request through another channel: call the usual number, never the one in the message.', '**Report** the message to the security team or support.', '**Warn** immediately if you have already clicked or given your password: quick reporting limits the damage.'] },
          { t: 'callout', kind: 'key', text: 'A **blame-free reporting** culture protects better than a culture of reproach: the person who admits their click helps contain the incident.' },
        ],
      },
      {
        id: 'incident',
        title: 'Incidents and recovery of activity',
        blocks: [
          { t: 'p', text: 'No measure guarantees the absence of incidents. What matters is to **know what to do** when one happens and to be able to **resume activity**.' },
          { t: 'list', ordered: true, items: ['**Report** immediately to the security team or support.', '**Contain**: isolate the workstation concerned if asked, change passwords from a safe workstation.', '**Keep the traces**: messages, files, logs; erase nothing.', '**Resume** according to business priorities, with clean backups.', '**Learn lessons**: fix the cause and improve the rules.'] },
          {
            t: 'table',
            head: ['Notion', 'Role'],
            rows: [
              ['**Offline backup**', 'Allows restoring after a failure or ransomware'],
              ['**Continuity plan (BCP)**', 'Describes how to maintain essential activities during the incident'],
              ['**Exercise**', 'Tests the plan and reveals weaknesses before the real crisis'],
            ],
          },
          { t: 'def', term: 'Ransomware', text: 'Malicious software that encrypts files and demands a ransom. Tested offline backups make it possible to resume without paying.' },
          { t: 'callout', kind: 'warn', text: 'Do not erase “to clean up”: the traces help to understand the incident, limit its extent and, if necessary, declare it.' },
        ],
      },
    ],
    useCases: [
      'Understand why your organization requires a personal password, a personal badge and locking workstations.',
      'Simply assess the risk of a new use (online storage, new supplier) with the course’s words.',
      'React correctly to a suspicious email or to a data handling mistake.',
    ],
    commonMistakes: [
      'Thinking that security is only the IT department’s business.',
      'Sharing your password or lending your badge “to help out”.',
      'Clicking out of curiosity on an urgent message without checking it.',
      'Hiding a mistake for fear of reproach instead of reporting it.',
      'Leaving confidential documents in plain view.',
    ],
    bestPractices: [
      'Know the three objectives: confidentiality, integrity, availability.',
      'Reason in terms of risk: likelihood, severity, assumed decision.',
      'Follow the charter and report rules that cannot be applied.',
      'Limit the data collected and its access.',
      'Report quickly, keep the traces, learn lessons.',
    ],
    keyPoints: [
      'Security protects the confidentiality, integrity and availability of information.',
      'A risk is described by its likelihood and severity; it can be reduced, transferred, avoided or accepted.',
      'Rules are only worth something if they are understood, applicable and applied by all, management included.',
      'The GDPR protects personal data; a breach is notified in principle within 72 hours.',
      'In an incident: report quickly, keep the traces, recover thanks to backups.',
    ],
  },
  practice: [
    {
      id: 'classer-incidents',
      kind: 'analysis',
      title: 'Match situations with security objectives',
      context: [
        {
          t: 'table',
          head: ['#', 'Situation'],
          rows: [
            ['1', 'Customer files are published by mistake on a site accessible to everyone'],
            ['2', 'A virus modifies amounts in invoices without anyone noticing'],
            ['3', 'The order server is down for a day'],
            ['4', 'An employee leaves their password on a paper stuck to the screen'],
          ],
        },
      ],
      steps: ['Indicate for each situation the main security objective affected.', 'Propose a simple measure for each.', 'Indicate which one is first a matter of awareness.'],
    },
    {
      id: 'evaluer-risque',
      kind: 'guided',
      title: 'Assess three simple risks',
      context: [{ t: 'p', text: 'A 30-person association is considering: R1 storing its member list on an online share opened by link; R2 keeping its backups on an always-connected disk; R3 letting volunteers use their personal phones for email.' }],
      steps: ['Rate each risk in likelihood and severity (low, medium, high).', 'Choose a decision for each: reduce, transfer, avoid or accept.', 'Propose a concrete measure for each reduced risk.'],
    },
    {
      id: 'courriel-urgent',
      kind: 'case',
      title: 'Case study: an urgent email from management',
      context: [{ t: 'p', text: 'An accountant receives an email that seems to come from the director: “Confidential payment to make today, do not tell anyone, I am in a meeting.” The message gives a new account number.' }],
      steps: ['Spot the warning signs.', 'Describe what the accountant must do.', 'Propose a company rule that protects against this type of fraud.'],
    },
  ],
  questions,
  resources: [
    { title: 'IT hygiene guide', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/guide-dhygiene-informatique' },
    { title: 'Personal data breaches', source: 'CNIL', url: 'https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles' },
    { title: 'Cybersecurity assistance and prevention', source: 'Cybermalveillance.gouv.fr', url: 'https://www.cybermalveillance.gouv.fr/' },
  ],
};
