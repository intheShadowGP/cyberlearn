import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'o-identite-initiation',
  lesson: {
    intro:
      'Almost everything we do online starts with signing in: email, banking, work tools. Most of the time, attackers do not break a system: they **steal or guess credentials**. This course, with no prerequisites, explains what a digital identity is, how to prove it without being trapped, which rights should be attached to it and how to react when an account is in danger.',
    sections: [
      {
        id: 'notions',
        title: 'Identity, authentication and authorization',
        blocks: [
          { t: 'p', text: 'Signing in means answering two successive questions: **who are you?** then **what are you allowed to do?**' },
          {
            t: 'table',
            head: ['Notion', 'Question', 'Example'],
            rows: [
              ['**Identification**', 'Who do you claim to be?', 'Entering your identifier or address'],
              ['**Authentication**', 'Can you prove it?', 'Password, code, security key'],
              ['**Authorization**', 'What can you do?', 'Read a record, modify a file, administer'],
            ],
          },
          { t: 'def', term: 'Digital identity', text: 'Set of information that makes it possible to recognize a person online: identifier, authentication means, attributes (department, role) and rights associated with the account.' },
          { t: 'def', term: 'Named account', text: 'Account assigned to a single person. It makes it possible to know who did what, to remove the access of a single person and to adjust their rights.' },
          { t: 'callout', kind: 'key', text: 'An attacker who has your credentials **acts in your place**: they no longer need to “break” anything.' },
        ],
      },
      {
        id: 'mdp',
        title: 'Passwords: long, unique and well kept',
        blocks: [
          { t: 'p', text: 'The password remains the most widespread authentication means, and one of the most fragile: it is guessed, stolen, reused.' },
          {
            t: 'table',
            head: ['Good practice', 'Why'],
            rows: [
              ['**Long** (a passphrase)', 'Length matters more than apparent complexity'],
              ['**Unique** for each service', 'A leak on one site does not compromise the others'],
              ['**In a manager**', 'Create, remember and fill in strong passwords with no effort'],
              ['**Never shared**', 'No legitimate person asks for it'],
              ['**Changed after a leak**', 'Rather than on an arbitrary schedule'],
            ],
          },
          { t: 'def', term: 'Passphrase', text: 'Sequence of several words, easy to remember and very hard to guess thanks to its length: “my cat sleeps on the blue radiator”.' },
          {
            t: 'example',
            title: 'Reuse in action',
            blocks: [
              { t: 'p', text: 'A leisure site is hacked and its passwords are published. Attackers automatically try the same credentials on mailboxes, banks and work tools. The person who had reused their password sees their work account taken, although their company suffered no breach.' },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'A password manager protected by a long passphrase and by MFA is one of the best personal security habits.' },
        ],
      },
      {
        id: 'mfa',
        title: 'Multi-factor authentication (MFA)',
        blocks: [
          { t: 'p', text: 'MFA adds a second proof. Factors fall into three categories: what I **know** (password), what I **have** (phone, security key), what I **am** (fingerprint).' },
          {
            t: 'table',
            head: ['Method', 'Phishing-resistant?', 'Remark'],
            rows: [
              ['Password alone', 'No', 'Stolen, guessed or reused'],
              ['SMS code', 'No', 'Can be intercepted or relayed'],
              ['App code', 'No', 'Can be entered on a fake site'],
              ['Notification to validate', 'Partially', 'Repetition trap (fatigue)'],
              ['**Security key / passkey**', '**Yes**', 'Bound to the legitimate site'],
            ],
          },
          { t: 'def', term: 'Passkey', text: 'New type of credential that replaces the password: a key pair specific to each site, unlocked by a fingerprint or a code. It does not work on a fake site.' },
          { t: 'list', items: ['**Enable MFA** everywhere possible, first on the mailbox and administration accounts.', '**Refuse** a validation request you did not initiate, and report it.', '**Prefer** security keys and passkeys to typed codes.'] },
          { t: 'callout', kind: 'warn', text: 'If you receive repeated validation requests without having tried to sign in, someone probably knows your password: refuse and change it.' },
        ],
      },
      {
        id: 'droits',
        title: 'Access rights and accounts to watch',
        blocks: [
          { t: 'p', text: 'A good account has **just the rights it needs**. This is the **least privilege** principle: the more limited the rights, the fewer consequences a mistake or a compromise has.' },
          {
            t: 'table',
            head: ['Rule', 'Why'],
            rows: [
              ['**One account per person**', 'Know who does what'],
              ['**Removal at each departure**', 'A forgotten account is an entry door'],
              ['**Removal of old rights** on a change of position', 'Avoid accumulation of rights'],
              ['**Ordinary account for email**', 'An administration account has no business reading emails'],
              ['**Identified service accounts**', 'Applications and backups have an owner and limited rights'],
            ],
          },
          { t: 'def', term: 'Least privilege', text: 'Principle of granting each account only the rights needed for its task, for the time needed.' },
          { t: 'list', items: ['**Administration accounts**: few, named, protected by MFA.', '**Provider accounts**: limited, monitored, deleted at the end of the assignment.', '**Shared accounts**: to be avoided, since they prevent knowing who acted.'] },
          { t: 'callout', kind: 'key', text: 'Rights drift with time: a regular review by managers makes it possible to remove what is no longer justified.' },
        ],
      },
      {
        id: 'federation',
        title: 'A single sign-in: SSO and application authorizations',
        blocks: [
          { t: 'p', text: 'To avoid multiplying passwords, many services accept sign-in with an existing account: this is **single sign-on** (SSO) and **sign-in with a third-party account**.' },
          {
            t: 'table',
            head: ['Mechanism', 'Principle', 'Point of vigilance'],
            rows: [
              ['**Company SSO**', 'You sign in once, the identity provider attests to the applications', 'The main account must be very well protected (MFA)'],
              ['**Third-party account** (mailbox, social network)', 'The site delegates authentication to a provider', 'The site does not receive your password'],
              ['**Application authorization**', 'You give an application limited access to your data', 'An excessive access can be abused and durable'],
            ],
          },
          { t: 'def', term: 'Application authorization', text: 'Agreement by which you let a third-party application access part of your data (mailbox, files) without giving it your password. It lasts until you remove it.' },
          { t: 'list', items: ['**Read** what the application asks for: “read my messages” is rarely necessary.', '**Refuse** excessive access and unknown applications.', '**Revoke** regularly the applications you no longer use.'] },
          { t: 'callout', kind: 'warn', text: 'A malicious application that is authorized can read your mailbox without knowing your password: MFA does not stop it. Caution is played at the moment of the click.' },
        ],
      },
      {
        id: 'reflexes',
        title: 'Good reflexes in the face of a hacked account',
        blocks: [
          { t: 'p', text: 'An account can be hacked despite precautions. What matters then is to **react quickly and in the right order**.' },
          { t: 'list', ordered: true, items: ['**Cut access**: change the password from a safe device and close open sessions.', '**Warn** the security team or support, with no shame or waiting.', '**Check** recent activity: sign-ins, messages sent, forwarding rules, authorized applications.', '**Change** the passwords reused elsewhere.', '**Strengthen**: enable MFA and prefer a passkey.'] },
          { t: 'def', term: 'Phishing', text: 'Message or site that imitates a trusted service to push you to enter your credentials or validate a request. The best reflex is to enter nothing and to report.' },
          { t: 'callout', kind: 'key', text: 'Reporting quickly beats hiding a mistake: each minute saved limits what the attacker can do.' },
        ],
      },
      {
        id: 'choix-mfa',
        title: "Which MFA method to choose?",
        blocks: [
          { t: 'p', text: "Not all two-factor methods are equal. They differ mainly in their **resistance to phishing**: an attacker who fools you on a fake site can often relay a code you type, but not a cryptographic proof bound to the real site." },
          {
            t: 'table',
            caption: "Common methods, from the weakest to the strongest",
            head: ["Method", "Strength", "Main weakness"],
            rows: [
              ["Code sent by SMS", "Simple, no app needed", "SIM swapping, interception, code relayed on a fake site"],
              ["App-generated code (TOTP)", "Works offline, independent of the carrier", "Can be typed on a fake site and relayed in real time"],
              ["Approval notification (push)", "Very convenient", "Fatigue: the attacker sends repeated requests until the user accepts"],
              ["Security key or passkey (FIDO2)", "Proof bound to the legitimate site: **phishing-resistant**", "Losing the key: plan a backup key and a recovery procedure"],
            ],
          },
          { t: 'callout', kind: 'tip', text: "A weak method is better **than no MFA at all**. Start by enabling whatever is available on your most important accounts, then move up in strength when the service allows it." },
        ],
      },
      {
        id: 'audit-comptes',
        title: "Scenario: taking stock of your own accounts",
        blocks: [
          { t: 'p', text: "One well-spent hour beats a year of good intentions. Here is a five-step method to apply to your personal accounts, then your work accounts (within your organization’s rules)." },
          { t: 'list', ordered: true, items: ["**List** the important accounts: main email, bank, administration, online storage, social networks.", "**Start with email**: it is what resets every other password. Long, unique password, MFA enabled.", "**Adopt a password manager** to have a different password per account without memorizing them.", "**Check access**: connected devices, open sessions, applications allowed to access the account; remove what you do not recognize.", "**Check recovery**: phone number and backup address up to date, backup codes printed or stored away from the device."] },
          { t: 'callout', kind: 'warn', text: "If an account shows up in a data breach, change its password **and** that of any other account that shared the same one. Reuse turns a leak into a domino effect." },
        ],
      },
    ],
    useCases: [
      'Choose and memorize solid passwords with a manager, and enable MFA on your mailbox.',
      'Check the applications authorized to access your mailbox and revoke the useless ones.',
      'React correctly when a validation notification arrives without you having signed in.',
    ],
    commonMistakes: [
      "Protecting the bank with MFA but leaving the recovery email unprotected.",
      "Approving a sign-in notification you did not trigger “to make it stop”.",
      'Reusing the same password on several services.',
      'Accepting a validation notification to make the requests stop.',
      'Sharing an account within a team.',
      'Keeping rights after a change of position or a departure.',
      'Accepting without reading an application’s access request.',
    ],
    bestPractices: [
      'Long, unique passphrase, in a manager.',
      'MFA everywhere, and a security key or passkey when possible.',
      'One named account per person, with limited and reviewed rights.',
      'Application authorizations read, limited and reviewed.',
      'Quick reporting of any suspicious account.',
    ],
    keyPoints: [
      "Email is the key to all other accounts: protect it first.",
      "Security keys and passkeys resist phishing; SMS and push notifications are more fragile.",
      'Authentication proves who you are, authorization decides what you can do.',
      'A password must be long, unique and protected by a second factor.',
      'Security keys and passkeys resist phishing.',
      'Least privilege, named accounts, removal of rights at departures.',
      'A hacked account is handled quickly: cut access, warn, check.',
    ],
  },
  practice: [
    {
      id: 'choisir-mdp',
      kind: 'guided',
      title: 'Assess passwords and practices',
      context: [
        { t: 'p', text: 'An employee describes their habits: (a) they use “Marie2024” everywhere; (b) they note their passwords in a file on their desktop; (c) they accept every validation notification they receive; (d) they enabled MFA on their mailbox through a mobile app.' },
      ],
      steps: ['Indicate for each habit whether it is good or to be fixed, with the reason.', 'Propose the fix for each weak point.', 'Indicate the most effective measure to put in place first.'],
    },
    {
      id: 'revue-droits',
      kind: 'analysis',
      title: 'Analysis: a review of the rights of a small team',
      context: [
        {
          t: 'table',
          head: ['Account', 'Situation'],
          rows: [
            ['a.durand', 'Accountant, also has file server administrator rights from a former position'],
            ['compta-partage', 'Account used by three people in accounting'],
            ['p.martin', 'Intern whose internship ended two months ago, account still active'],
            ['svc-sauvegarde', 'Backup service account, password never changed'],
          ],
        },
      ],
      steps: ['Spot the problem of each account.', 'Propose the matching action.', 'Propose a simple rule to prevent it from recurring.'],
    },
    {
      id: 'compte-pirate',
      kind: 'case',
      title: 'Case study: react to a hacked account',
      context: [{ t: 'p', text: 'One morning, a colleague receives sign-in validation notifications she did not launch. She accepts one “to make it stop”. An hour later, her contacts receive a strange message sent from her mailbox.' }],
      steps: ['Explain what probably happened.', 'Describe, in order, what she must do now.', 'Propose what would have prevented the compromise.'],
    },
  ],
  questions,
  resources: [
    { title: 'Recommendations on multi-factor authentication and passwords', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-relatives-lauthentification-multifacteur-et-aux-mots-de-passe' },
    { title: 'IT hygiene guide', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/guide-dhygiene-informatique' },
    { title: 'Cybersecurity assistance and prevention', source: 'Cybermalveillance.gouv.fr', url: 'https://www.cybermalveillance.gouv.fr/' },
  ],
};
