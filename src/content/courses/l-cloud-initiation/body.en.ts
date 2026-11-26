import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'l-cloud-initiation',
  lesson: {
    intro:
      'Email, shared documents, video conferencing, photo backup: you already use the **cloud** every day, often without thinking about it. Companies also place their websites, applications and data there. The cloud is convenient and robust, but it does not automatically protect what you put in it. This course explains in simple terms what the cloud is, who is responsible for what, and how to avoid the mistakes that cause most incidents.',
    sections: [
      {
        id: 'notions',
        title: 'What is the cloud?',
        blocks: [
          { t: 'p', text: 'The **cloud** (cloud computing) means using, over the Internet, computing resources — processing power, storage, software — hosted in a provider’s data centers and **billed according to use**. Instead of buying and maintaining its own servers, you rent them.' },
          {
            t: 'table',
            head: ['Notion', 'What it means', 'Example'],
            rows: [
              ['**Public cloud**', 'Infrastructure shared among many customers, isolated from one another', 'The market’s major providers'],
              ['**Private cloud**', 'Infrastructure dedicated to a single organization', 'A cloud hosted in one’s own premises'],
              ['**Hybrid cloud**', 'Combination of internal resources and public cloud', 'Sensitive data in-house, website in the cloud'],
              ['**Region**', 'Geographic area grouping data centers', '“Paris”, “Frankfurt”'],
              ['**Elasticity**', 'Adjust resources within minutes according to need', 'More servers during the sales'],
            ],
          },
          { t: 'def', term: 'Cloud', text: 'Remote use of computing resources rented from a provider, reachable over the Internet, that can be increased or reduced according to need and are paid for by use.' },
          { t: 'def', term: 'Region', text: 'Geographic area where a provider groups data centers. The choice of region affects access speed, service continuity and where the data is located, hence the applicable law.' },
          { t: 'callout', kind: 'info', text: 'The cloud is not “somebody else’s cloud” with no rules: these are real computers in real buildings. Knowing where the data is and who accesses it remains essential.' },
        ],
      },
      {
        id: 'modeles',
        title: 'IaaS, PaaS, SaaS: who is responsible for what?',
        blocks: [
          { t: 'p', text: 'The cloud comes in three main forms, depending on what the provider manages for you. The more “ready to use” the service, the fewer things you administer, but you **always remain responsible for your access and your data**.' },
          {
            t: 'table',
            head: ['Model', 'The provider supplies', 'You mainly manage', 'Example'],
            rows: [
              ['**IaaS** (infrastructure)', 'Virtual machines, network, storage', 'System, patches, firewall, applications, accounts, data', 'Renting a virtual server'],
              ['**PaaS** (platform)', 'Environment ready to run code', 'Your application, your accounts, your data', 'Hosting a site without managing the system'],
              ['**SaaS** (software)', 'Complete application', 'Your accounts, rights, shares, data', 'Email, online office suite'],
            ],
          },
          { t: 'def', term: 'Shared responsibility', text: 'Principle whereby the provider secures the **foundation** (buildings, servers, base network) and the customer secures what it configures: **access, identities, data**. The boundary shifts depending on the model, but never disappears.' },
          {
            t: 'example',
            title: 'Who must do what?',
            blocks: [
              { t: 'p', text: 'A company rents a virtual server (IaaS) and uses an online mailbox (SaaS). For the **server**, it must install patches, set the firewall and manage the accounts. For the **mailbox**, it has no system to update, but it must enable strong authentication, limit rights and control sharing. In both cases, protecting its data is its job.' },
            ],
          },
          { t: 'callout', kind: 'key', text: 'The provider protects the infrastructure; **you protect what you put there and who can access it**.' },
        ],
      },
      {
        id: 'comptes',
        title: 'Accounts and authentication',
        blocks: [
          { t: 'p', text: 'In the cloud, everything goes through **accounts**: whoever obtains your credentials acts in your name, from anywhere. Protecting accounts is therefore the first security measure.' },
          {
            t: 'table',
            head: ['Good practice', 'Why'],
            rows: [
              ['Protect the **root account** and do not use it day to day', 'It can do everything, including deleting the whole account'],
              ['Enable **multi-factor authentication (MFA)**', 'A stolen password is no longer enough to sign in'],
              ['Create **individual accounts**', 'You know who did what, you can remove one person’s access alone'],
              ['Apply **least privilege**', 'A hacked account or a mistake has fewer consequences'],
              ['Limit and rotate **access keys**', 'A key is a long-lived password for programs'],
            ],
          },
          { t: 'def', term: 'Multi-factor authentication (MFA)', text: 'Sign-in that asks, in addition to the password, for a second element: code from an app, security key, notification on the phone. It blocks most account thefts.' },
          { t: 'def', term: 'Least privilege', text: 'Principle of granting each account only the rights needed for its task, and for the time needed.' },
          { t: 'callout', kind: 'warn', text: 'An access key published by mistake (public code repository, screenshot) is exploited within minutes by bots. It must be disabled immediately then replaced.' },
        ],
      },
      {
        id: 'stockage',
        title: 'Storage and data protection',
        blocks: [
          { t: 'p', text: 'Files are often placed in **storage containers** (“buckets”, shared folders). Their confidentiality depends mainly on their **access settings**: who can read, write, share.' },
          {
            t: 'table',
            head: ['Measure', 'What it brings', 'Point of vigilance'],
            rows: [
              ['**Limited access rights**', 'Only the people concerned access the files', 'Check shares regularly'],
              ['**Named, time-limited sharing links**', 'Avoids access by just anyone', 'A public link is readable by anyone who has it'],
              ['**Encryption**', 'Protects against theft of a medium or a copy', 'Does not protect against a hacked authorized account'],
              ['**Backups**', 'Allow restoring after a loss or ransomware', 'To be tested and kept out of reach of the main account'],
            ],
          },
          { t: 'def', term: 'Backup', text: 'Copy of the data that allows restoring it after a deletion, a failure or an attack. A backup is only worth something if you have **tested the restoration** and it cannot be erased with the compromised account.' },
          { t: 'callout', kind: 'tip', text: 'Ask yourself two questions for each shared folder: “who can read it?” and “can I restore it if someone deletes it?”.' },
        ],
      },
      {
        id: 'erreurs',
        title: 'The most common configuration mistakes',
        blocks: [
          { t: 'p', text: 'Most cloud incidents do not come from a provider flaw, but from a customer **configuration mistake**. They are simple and frequent.' },
          {
            t: 'table',
            head: ['Mistake', 'Consequence', 'Remedy'],
            rows: [
              ['Storage open to the whole Internet', 'Data leak', 'Private access by default, automatic check of settings'],
              ['Administration port open to everyone', 'Permanent attacks', 'Access limited to known addresses or through secure access'],
              ['Key or password in the code', 'Theft of access', 'Secrets vault, disabling and replacement in case of a leak'],
              ['Administrator with no second factor', 'Takeover of the account', 'Mandatory MFA'],
              ['Logs disabled', 'Invisible incident that cannot be reconstructed', 'Logging enabled and kept'],
              ['Forgotten resources', 'Costs, unpatched flaws', 'Regular inventory and cleanup'],
            ],
          },
          { t: 'list', items: ['**Check** the settings regularly, ideally with a tool that compares your configuration with best practices.', '**Automate** simple fixes and alerts on public exposures.', '**Document** who owns each resource.'] },
          { t: 'callout', kind: 'key', text: 'Most often, a cloud incident is an **avoidable mistake**, not a sophisticated attack.' },
        ],
      },
      {
        id: 'reflexes',
        title: 'Good reflexes and reporting',
        blocks: [
          { t: 'p', text: 'When in doubt, speed matters. An incident reported early is often fixed within minutes; a hidden incident can last for weeks.' },
          { t: 'list', ordered: true, items: ['**Do not reply** to a message asking for a password, even if it seems to come from your provider.', '**Disable or remove** what is exposed: published key, overly broad share.', '**Warn** the manager or the security team, describing what happened without downplaying it.', '**Do not delete** the traces (logs, messages): they help to understand.', '**Change** the passwords concerned and check the account’s recent activity.'] },
          { t: 'def', term: 'Shadow IT', text: 'Use of online services not validated by the organization (personal storage, messaging, free tools) for professional data. This data escapes the rules and the controls.' },
          { t: 'callout', kind: 'warn', text: 'If **personal data** of customers or colleagues is concerned, also warn the person in charge of data protection: a declaration to the authority may be mandatory within a short time.' },
        ],
      },
      {
        id: 'scenario-stockage-public',
        title: "Scenario: storage made public by mistake",
        blocks: [
          { t: 'p', text: "A team creates an online storage space to share a report with a customer. So the customer can open it without an account, someone sets access to “public”. Three weeks later, the report, which contains billing data, appears in a search engine." },
          {
            t: 'table',
            head: ["Question", "Answer"],
            rows: [
              ["Who is responsible?", "The **cloud customer**: the provider secures the infrastructure, but access configuration is the responsibility of whoever creates the space"],
              ["What made the leak possible?", "An overly broad sharing setting, and no automatic control that would have detected it"],
              ["What to do first?", "Remove public access, then determine **who accessed the data** from the access logs, if logging was enabled"],
              ["What to ask next?", "Was the data personal? If so, the data breach procedure applies"],
            ],
          },
          { t: 'list', items: ["**Block** public access by default at the account level, and allow only justified exceptions.", "**Share differently**: a time-limited temporary link, or a named invitation.", "**Enable access logging** before storing data there.", "**Alert** automatically on any storage space that becomes public."] },
          { t: 'callout', kind: 'key', text: "The most common mistake is not a sophisticated attack: it is a misunderstood sharing setting. The right reflex is to ask, before sharing, **“who will be able to access this, without an account, from anywhere?”**." },
        ],
      },
      {
        id: 'liste-demarrage',
        title: "The first five settings of a cloud account",
        blocks: [
          {
            t: 'table',
            head: ["Setting", "Why"],
            rows: [
              ["Protect the owner (“root”) account with MFA and stop using it day to day", "This account has every right and cannot be restricted"],
              ["Create named accounts with limited rights", "Everyone does what they need, and their actions are attributable"],
              ["Enable logging of administrative actions", "Without logs, it is impossible to investigate after an incident"],
              ["Block public access to storage by default", "Prevents accidental data exposure"],
              ["Set a spending alert", "A sudden spend is often the first sign of a hijacked account (cryptocurrency mining)"],
            ],
          },
          { t: 'p', text: "These five settings do not make a secure architecture, but they eliminate the most frequent mistakes for a few minutes of work." },
        ],
      },
    ],
    useCases: [
      'Recognize, in the organization, which services are IaaS, PaaS or SaaS and what to configure in them.',
      'Check the shares of a work folder and enable strong authentication on your accounts.',
      'React correctly after publishing a key or sharing a file by mistake.',
    ],
    commonMistakes: [
      "Setting sharing to “public” to avoid managing accounts.",
      "Using the owner account for routine tasks.",
      'Thinking that the provider is responsible for the security of everything you put with them.',
      'Using the root account or a shared account for day-to-day work.',
      'Sharing a sensitive file through a link accessible to everyone.',
      'Placing access keys or passwords in code or in a message.',
      'Hiding a mistake instead of reporting it immediately.',
    ],
    bestPractices: [
      'Multi-factor authentication on all accounts, especially administration accounts.',
      'Individual accounts with limited rights; root account reserved for the rare operations that require it.',
      'Private storage by default, named and time-limited shares.',
      'Tested backups, kept out of reach of the main account.',
      'Quick reporting of any doubt, without erasing the traces.',
    ],
    keyPoints: [
      "Access configuration is the cloud customer’s responsibility; sharing means deciding who can access without an account.",
      'The cloud is resources rented remotely, billed by use.',
      'IaaS, PaaS, SaaS: the more complete the service, the less you administer, but you keep responsibility for your access and your data.',
      'Most cloud incidents come from customer configuration mistakes.',
      'MFA, least privilege, private storage and tested backups cover the essentials.',
    ],
  },
  practice: [
    {
      id: 'classer-services',
      kind: 'analysis',
      title: 'Classify services and split the responsibilities',
      context: [
        { t: 'p', text: 'A small company uses the following services:' },
        {
          t: 'table',
          head: ['#', 'Service'],
          rows: [
            ['1', 'A rented virtual server, on which a technician installs a management software'],
            ['2', 'A mailbox and shared documents accessible in a browser'],
            ['3', 'A platform where a developer uploads the code of their site, without managing a server'],
          ],
        },
      ],
      steps: ['Indicate for each service whether it is IaaS, PaaS or SaaS.', 'List what the company must secure in each case.', 'Name a responsibility that remains with the company in all three cases.'],
    },
    {
      id: 'verifier-partage',
      kind: 'case',
      labId: 'cloud-misconfig-lab',
      title: 'Case study: check the sharing of a folder',
      context: [{ t: 'p', text: 'A “Customer contracts” folder is shared through a link accessible to anyone who has it, with no end date. Three former employees still have access and the folder is stored in an employee’s personal account.' }],
      steps: ['List the security problems.', 'Propose the target sharing configuration.', 'Indicate how to check regularly that the sharing remains correct.'],
    },
    {
      id: 'cle-publiee',
      kind: 'case',
      title: 'Case study: an access key published by mistake',
      context: [{ t: 'p', text: 'A developer notices they published, in a public code repository, a configuration file containing the company’s cloud account access key. They removed it from the repository ten minutes later.' }],
      steps: ['Explain why removing the file is not enough.', 'List the actions to take, in order.', 'Propose measures to prevent this from happening again.'],
    },
  ],
  questions,
  resources: [
    { title: 'Securing cloud use: guides and the SecNumCloud framework', source: 'ANSSI', url: 'https://cyber.gouv.fr/secnumcloud-pour-les-fournisseurs-de-services-cloud' },
    { title: 'Cloud Security Best Practices (shared responsibility)', source: 'Cloud Security Alliance', url: 'https://cloudsecurityalliance.org/' },
    { title: 'Cybermalveillance.gouv.fr — assistance and prevention', source: 'Cybermalveillance.gouv.fr', url: 'https://www.cybermalveillance.gouv.fr/' },
  ],
};
