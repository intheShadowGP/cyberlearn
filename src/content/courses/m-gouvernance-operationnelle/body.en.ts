import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'm-gouvernance-operationnelle',
  lesson: {
    intro:
      'A security policy signed by management protects nothing until it is translated into processes that run every day: knowing what you own, which data is sensitive, which flaws remain open, which suppliers are entrusted with what, and checking that all of this works. This course describes these operational governance processes and the frameworks that help structure them.',
    sections: [
      {
        id: 'actifs',
        title: 'Asset inventory: you only protect what you know',
        blocks: [
          { t: 'p', text: 'The first two **CIS Controls** measures are the inventory of hardware assets and the inventory of software. Without them, it is impossible to know which workstations need patching, which servers are exposed or which software is affected by a new vulnerability.' },
          {
            t: 'table',
            head: ['Information', 'Why it matters'],
            rows: [
              ['Business owner and technical manager', 'Who decides, who acts in case of an incident or patch'],
              ['Criticality (impact of unavailability or leak)', 'Prioritization of patches and monitoring'],
              ['Exposure (Internet, internal network, isolated)', 'Likelihood of attack'],
              ['Software and versions', 'Matching with published vulnerabilities'],
              ['Data processed and their classification', 'Applicable protection rules'],
            ],
          },
          { t: 'def', term: 'Shadow IT', text: 'Resources used without being known or validated by the IT department: an online service subscribed by a team, a forgotten test server, a personal device. They escape patching, backup and monitoring.' },
          { t: 'callout', kind: 'tip', text: 'A declarative inventory ages quickly. It must be fed automatically (asset management tool, EDR agent, network discovery, cloud console) then matched against declarations to spot gaps.' },
        ],
      },
      {
        id: 'classification',
        title: 'Data classification',
        blocks: [
          { t: 'p', text: 'Not all data calls for the same level of protection. **Classification** assigns each piece of data a sensitivity level, with concrete rules: who can access it, where it can be stored, whether it must be encrypted, how it is destroyed.' },
          {
            t: 'table',
            caption: 'Example of a four-level scheme',
            head: ['Level', 'Examples', 'Rules'],
            rows: [
              ['Public', 'Sales brochure, job offers', 'No distribution restriction'],
              ['Internal', 'Procedures, directory', 'Staff and contractors under contract'],
              ['Confidential', 'Contracts, customer data, payroll', 'Access on a need-to-know basis, encryption in transit and at rest'],
              ['Secret', 'Merger projects, master keys', 'Named list, dedicated storage, logging of each access'],
            ],
          },
          { t: 'def', term: 'Data owner', text: 'Business manager who sets the classification of a set of data and validates access. The IT department applies the measures, but does not decide sensitivity alone.' },
          { t: 'callout', kind: 'warn', text: 'An overly detailed scheme is not applied. Three or four levels, concrete examples and simple marking (document header, label in the mail system) are better than a perfect policy nobody understands.' },
        ],
      },
      {
        id: 'vulnerabilites',
        title: 'Vulnerability management',
        blocks: [
          { t: 'p', text: 'Vulnerability management is a **continuous cycle**: discover flaws, prioritize them, fix or mitigate them, then verify. The goal is not to reach zero vulnerabilities, but to treat first those that create the most risk.' },
          { t: 'list', ordered: true, items: ['**Discover**: authenticated scans, software inventory matched with security advisories (CERT-FR, vendors), penetration tests.', '**Prioritize**: technical severity (CVSS), but also confirmed exploitation (CISA KEV catalog), exposure and asset criticality.', '**Treat**: patch, workaround, or formal risk acceptance by the owner.', '**Verify**: new scan, tracking of deadlines, indicators.'] },
          {
            t: 'example',
            title: 'Risk-based deadline policy',
            blocks: [
              {
                t: 'table',
                head: ['Situation', 'Target deadline'],
                rows: [
                  ['Actively exploited vulnerability, asset exposed to the Internet', '48 hours (or immediate mitigation)'],
                  ['Critical or high, exposed asset', '7 days'],
                  ['Critical or high, internal asset', '30 days'],
                  ['Medium or low', 'Monthly or quarterly patch cycle'],
                ],
              },
              { t: 'p', text: 'The values are an example: each organization sets them according to its risks. What matters is that they are written, measured, and that any overrun leads to a documented decision.' },
            ],
          },
          { t: 'def', term: 'Risk acceptance', text: 'Decision, made by the asset owner and not by the technical team, not to fix a vulnerability for a given period, with a justification and a review date.' },
        ],
      },
      {
        id: 'fournisseurs',
        title: 'Suppliers and third parties',
        blocks: [
          { t: 'p', text: 'A growing share of incidents goes through a third party: managed-services provider, software vendor, online service. Entrusting a processing does not transfer responsibility: the organization must **assess**, **frame** and **monitor** its suppliers, in proportion to their access.' },
          {
            t: 'table',
            head: ['Step', 'Content'],
            rows: [
              ['Assessment before contract', 'Security questionnaire, certifications (ISO 27001, SecNumCloud qualification), audit reports, data location'],
              ['Contract clauses', 'Security requirements, incident notification within a set deadline, right to audit, framed subcontracting, reversibility and return of data'],
              ['Monitoring', 'Periodic review according to criticality, monitoring of public incidents, review of the access granted'],
              ['End of contract', 'Removal of access, return or attested destruction of data'],
            ],
          },
          { t: 'def', term: 'Tiered third-party management', text: 'Classification of suppliers according to the access they have (sensitive data, remote network access, critical role in production). An office supplies vendor and a managed-services provider do not receive the same questionnaire.' },
          { t: 'callout', kind: 'legal', text: 'The NIS2 directive asks the entities concerned to take their supply chain security into account, and the GDPR imposes a contract framing any processor handling personal data (Article 28).' },
        ],
      },
      {
        id: 'pilotage',
        title: 'Awareness, frameworks and audits',
        blocks: [
          { t: 'p', text: '**Awareness** targets precise behaviors: report a suspicious email, lock your workstation, verify an unusual transfer request through another channel. It is measured by indicators, not by the number of videos watched.' },
          { t: 'list', items: ['Useful indicators: **reporting** rate of phishing exercises (more telling than the click rate), reporting delay, real reports received by the SOC.', 'Short, regular formats adapted to the jobs (accounting, HR, developers, management).', 'Blame-free reporting culture: a person who reports their own click helps contain the incident.'] },
          {
            t: 'table',
            head: ['Framework', 'Contribution'],
            rows: [
              ['CIS Controls', 'Technical measures prioritized in implementation groups (IG1 to IG3)'],
              ['NIST SP 800-53', 'Detailed catalog of security and privacy controls'],
              ['NIST SP 800-30 and 800-61', 'Risk assessment method; incident handling'],
              ['ANSSI IT hygiene guide', '42 basic measures, adapted to the French context'],
            ],
          },
          { t: 'def', term: 'Audit', text: 'Independent, documented verification that a system complies with a framework and really works. The auditor relies on **evidence** (logs, configuration captures, review minutes), not on declarations.' },
          { t: 'callout', kind: 'key', text: 'Preparing an audit mostly means keeping evidence as you go: access review minutes, scan reports, patch tickets, exercise results. Reconstructing them the day before the audit is costly and unconvincing.' },
        ],
      },
      {
        id: 'acces',
        title: 'Access management and staff movements',
        blocks: [
          { t: 'p', text: 'Access rights follow people throughout their career: arrival, change of position, long absence, departure. Without a process, they accumulate and forgotten accounts remain active: these are classic entry points.' },
          {
            t: 'table',
            head: ['Event', 'Security action', 'Evidence'],
            rows: [
              ['**Arrival**', 'Creation of accounts on a validated request, rights of the position’s profile', 'Request and validation ticket'],
              ['**Transfer**', 'Addition of the new position’s rights and **removal** of the old ones', 'Review of rights at the transfer date'],
              ['**Long absence**', 'Suspension or restriction of access', 'Suspension ticket'],
              ['**Departure**', 'Removal of access the same day, recovery of equipment', 'Signed departure checklist'],
              ['**Periodic review**', 'Managers validate their team’s rights, especially privileged accounts', 'Dated, validated report'],
            ],
          },
          { t: 'def', term: 'Privilege creep', text: 'Phenomenon whereby a person keeps the rights of their successive positions and accumulates access that no position justifies. Review at each transfer and periodic review correct it.' },
          { t: 'def', term: 'Privileged account', text: 'Account with administration rights. Its compromise gives extensive control: their number is limited, strong authentication is required, administration accounts are separated from office accounts and their actions are logged.' },
          { t: 'callout', kind: 'warn', text: 'Shared accounts destroy traceability: impossible to know who did what. Each person has a named account; service accounts have an identified owner.' },
        ],
      },
      {
        id: 'incidents',
        title: 'Incident handling and lessons learned',
        blocks: [
          { t: 'p', text: 'Despite preventive measures, incidents occur. What sets organizations apart is how quickly they **detect** them, **contain** them and **learn** from them. NIST SP 800-61 describes an incident handling cycle that most organizations adopt.' },
          {
            t: 'table',
            head: ['Phase', 'Content', 'Example'],
            rows: [
              ['**Preparation**', 'Procedures, roles, contacts, logging tools', 'Crisis directory, reporting procedure'],
              ['**Detection and analysis**', 'Qualify the alert, estimate scope and severity', 'Log correlation, incident record'],
              ['**Containment**', 'Limit spread without destroying evidence', 'Network isolation, account disabling'],
              ['**Eradication and recovery**', 'Remove the cause, restore services', 'Rebuilding workstations, rotating secrets'],
              ['**Lessons learned**', 'Identify causes and improvements', 'Blame-free meeting, action plan'],
            ],
          },
          { t: 'def', term: 'Lessons-learned review', text: 'Analysis conducted after the incident to understand root causes, detection and response flaws, and decide tracked improvement actions. It does not look for someone to blame: a culture of punishment pushes people to hide mistakes.' },
          { t: 'list', items: ['**Incident register**: even minor incidents are recorded (chronology, assets concerned, decisions) to spot trends and prove handling.', '**Escalation**: management is informed as soon as an incident is significant, not only at the end.', '**Notifications**: depending on the case, the CNIL (data breach), the NIS2 authority, customers or the insurer.'] },
          { t: 'callout', kind: 'tip', text: 'Evidence is preserved: logs, disk copies, messages. Erasing traces “to clean up” prevents understanding and proving.' },
        ],
      },
    ],
    useCases: [
      'Launching a security program in an SME: automated inventory, simple classification, monthly patch cycle, then CIS Controls IG1.',
      'Group security manager: fix-deadline policy and a dashboard per subsidiary.',
      'Procurement: security assessment of a new managed-services provider before signing and incident notification clauses.',
    ],
    commonMistakes: [
      'Managing vulnerabilities by the CVSS score alone, without considering real exploitation or exposure.',
      'Keeping a manual inventory in a spreadsheet that is never updated.',
      'Letting the technical team alone accept a risk in place of the business owner.',
      'Assessing a supplier once at signing, then never reviewing its access again.',
      'Measuring awareness by participation rate rather than by behaviors.',
    ],
    bestPractices: [
      'Inventory fed automatically and regularly matched against declarations.',
      'Classification in three or four levels, with identified data owners.',
      'Prioritization of vulnerabilities by exploitation, exposure and criticality; written and measured deadlines.',
      'Suppliers classified by level of access, security clauses, periodic review and removal of access at end of contract.',
      'Evidence kept as you go; behavior indicators for awareness.',
    ],
    keyPoints: [
      'The asset inventory conditions all the other measures.',
      'Classification links each piece of data to concrete rules, set by its owner.',
      'Vulnerability management: discover, prioritize by risk, treat, verify.',
      'Entrusting a processing to a supplier does not transfer responsibility.',
      'An audit relies on evidence, which is kept continuously.',
    ],
  },
  practice: [
    {
      id: 'priorisation-vulns',
      kind: 'analysis',
      labId: 'findings-prioritization-lab',
      title: 'Prioritize a list of vulnerabilities',
      context: [
        { t: 'p', text: 'Excerpt from the latest scan report:' },
        {
          t: 'table',
          head: ['#', 'Asset', 'Exposure', 'CVSS', 'Actively exploited (KEV)'],
          rows: [
            ['1', 'VPN gateway', 'Internet', '9.8', 'Yes'],
            ['2', 'Internal file server', 'Internal', '9.1', 'No'],
            ['3', 'Showcase site', 'Internet', '6.1', 'No'],
            ['4', 'Accounting workstation', 'Internal', '7.8', 'Yes'],
            ['5', 'Forgotten test server', 'Internet', '7.5', 'No'],
          ],
        },
      ],
      steps: ['Rank the five items in order of treatment and justify.', 'Indicate for each the target deadline under the example policy.', 'Spot the governance problem revealed by line 5.'],
    },
    {
      id: 'fournisseur-infogerance',
      kind: 'case',
      title: 'Case study: frame a new managed-services provider',
      context: [{ t: 'p', text: 'Your company entrusts the administration of its servers to a managed-services provider, with permanent remote access and administrator rights. The servers host customer data.' }],
      steps: ['List the elements to assess before signing.', 'Propose five security contract clauses.', 'Describe the controls to put in place during the contract.'],
    },
    {
      id: 'revue-comptes',
      kind: 'analysis',
      title: 'Analysis: an account review after a departure',
      context: [
        {
          t: 'table',
          head: ['Account', 'Situation', 'Last sign-in'],
          rows: [
            ['a.martin', 'Accountant who left 4 months ago', 'Yesterday, from an outside address'],
            ['svc-sauvegarde', 'Service account with no known owner, administration rights', 'Daily'],
            ['j.leroy', 'Transferred from accounting to logistics 8 months ago, rights of both positions', 'Yesterday, from the logistics workstation'],
            ['admin-partage', 'Administrator account used by three people', 'Yesterday'],
            ['p.durand', 'Intern whose internship ended 2 weeks ago', '2 weeks ago'],
          ],
        },
      ],
      steps: ['Rank these accounts by urgency of treatment, with justification.', 'Indicate the correction action for each.', 'Propose the process changes to prevent this from happening again.'],
    },
  ],
  questions,
  resources: [
    { title: 'CIS Critical Security Controls', source: 'Center for Internet Security', url: 'https://www.cisecurity.org/controls' },
    { title: 'IT hygiene guide', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/guide-dhygiene-informatique' },
    { title: 'SP 800-53 Rev. 5 — Security and Privacy Controls', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final' },
    { title: 'Known Exploited Vulnerabilities Catalog', source: 'CISA', url: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog' },
    { title: 'Security advisories', source: 'CERT-FR', url: 'https://www.cert.ssi.gouv.fr/avis/' },
  ],
};
