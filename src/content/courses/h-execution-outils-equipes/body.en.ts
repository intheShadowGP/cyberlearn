import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'h-execution-outils-equipes',
  lesson: {
    intro:
      'The first course of module H laid out the framework of an authorized penetration test: rules of engagement, methodology, reconnaissance, report. This course describes the execution phase and the tooling that goes with it — always within a scope explicitly authorized in writing, or in a training lab designed for it. The goal remains defensive: understanding what the tools are for, their limits and above all the measures that neutralize them, so as to better defend systems. No attack procedure against third-party systems appears in it.',
    sections: [
      {
        id: 'execution',
        title: 'Execution in an authorized lab',
        blocks: [
          { t: 'p', text: 'The **exploitation** phase of a penetration test aims to confirm that an identified vulnerability is really exploitable and to measure its impact. It is only carried out on an **authorized scope** (contract, rules of engagement) or on **training targets** (deliberately vulnerable applications, local labs), never on third-party systems.' },
          {
            t: 'table',
            head: ['Principle', 'Why'],
            rows: [
              ['Stay within the scope', 'Leaving the authorized scope is illegal and dangerous for production'],
              ['Favor non-destructive evidence', 'Demonstrate the impact without damaging or disclosing real data'],
              ['Log your actions', 'Traceability, and help for the blue team to tell the test from a real attack'],
              ['Work in a lab to practice', 'Acquire the skills without risk, on targets designed for it'],
            ],
          },
          { t: 'def', term: 'Training target', text: 'Deliberately vulnerable application or machine, designed for learning (for example “broken” web applications meant for training, or locally built labs). It allows practicing legally, without touching a real system.' },
          { t: 'callout', kind: 'legal', text: 'The result of an exploitation is **evidence** for the report, not an end in itself. You do the minimum needed to demonstrate the risk, then recommend the fix. Everything is done under written authorization or in a lab.' },
        ],
      },
      {
        id: 'outils-web',
        title: 'Web testing tools: function, authorized use, defense',
        blocks: [
          { t: 'p', text: 'The following tools serve to **test** web applications within an authorized framework. They are presented by their function and, above all, by the **defense** that makes the corresponding attack ineffective.' },
          {
            t: 'table',
            head: ['Tool', 'Function', 'Associated defense'],
            rows: [
              ['**Burp Suite**, **OWASP ZAP**', 'Interception proxy: observe and manipulate web requests to test validation and access control', 'Server-side validation, object-level access control, security headers'],
              ['**Nikto**', 'Web configuration scanner (exposed files, missing headers)', 'Server hardening, removal of unneeded files'],
              ['**Gobuster**, **FFUF**', 'Content discovery by trying paths (directories, files)', 'No sensitive resource reachable by guessing; access control, logging'],
              ['**sqlmap**', 'Detection and demonstration of SQL injections on an authorized target', 'Parameterized queries (see module F): the injection becomes impossible'],
            ],
          },
          { t: 'def', term: 'Interception proxy', text: 'Tool placed between the browser and the server that lets you read and modify requests. On the test side, it serves to check that the server does not trust the client’s data; on the defense side, it is a reminder that every check must be redone on the server.' },
          { t: 'callout', kind: 'key', text: 'Each tool has a countermeasure: the right defensive reading of a test report is “which measure would have prevented this finding?”. The fixes refer back to the module F courses (injections, access control, headers).' },
          {
            t: 'example',
            title: 'Reading a test finding as a defender',
            blocks: [
              { t: 'p', text: 'A report states: “with an interception proxy, the object identifier was modified and the data of another account was obtained”. The defensive reflex is not to reproduce the manipulation, but to name the weakness (broken access control) and the countermeasure.' },
              { t: 'p', text: 'Countermeasure: check on the server side, at each request, that the requested object belongs to the authenticated user (module F). An offensive finding is thus turned into a precise fix.' },
            ],
          },
        ],
      },
      {
        id: 'outils-reseau',
        title: 'Network tools, frameworks and password auditing',
        blocks: [
          { t: 'p', text: 'Other tools act on the network and system side, always within an authorized framework. Auditing the strength of passwords, in particular, is done on hashes obtained legally, to **demonstrate a weakness and fix it**.' },
          {
            t: 'table',
            head: ['Tool', 'Function', 'Associated defense'],
            rows: [
              ['**Netcat**', 'Versatile network tool (test a connection, a service)', 'Default-deny network filtering, unneeded services disabled'],
              ['**Metasploit**', 'Framework that gathers test modules for known vulnerabilities', 'Up-to-date patches: a patched system is not affected by the corresponding modules'],
              ['**Nuclei**', 'Template-based scanner to spot known vulnerabilities and exposures', 'Vulnerability management, reduced exposed surface'],
              ['**Hydra**', 'Test of authentication resistance to repeated attempts', 'Attempt limiting, lockout, MFA'],
              ['**John the Ripper**, **Hashcat**', 'Audit of password strength from legally obtained hashes', 'Slow, salted hashing (module E), password policies, MFA'],
            ],
          },
          { t: 'def', term: 'Password audit', text: 'In an authorized test, you assess whether an organization’s passwords would withstand an offline cracking attempt, from hashes legally retrieved during the mission. The goal is to measure the weakness to impose better practices, not to steal accounts.' },
          { t: 'callout', kind: 'key', text: 'These tools only “crack” what is already weak: an up-to-date system, properly hashed and salted passwords, MFA and attempt limiting make most of these techniques ineffective. That is the whole defensive value of knowing them.' },
        ],
      },
      {
        id: 'cibles',
        title: 'Specialized targets: Active Directory and Wi-Fi',
        blocks: [
          { t: 'p', text: 'Some targets call for dedicated tests, because their compromise has a major impact.' },
          {
            t: 'table',
            head: ['Target', 'What the test assesses', 'Hardening (defense)'],
            rows: [
              ['**Active Directory**', 'Paths leading from an ordinary account to domain administration: excessive rights, dangerous configurations, exposed service accounts', 'Tiered model, least privilege, LAPS, monitoring (see modules D and O)'],
              ['**Wi-Fi**', 'Strength of encryption and authentication, uncontrolled access points', 'WPA2/WPA3-Enterprise, 802.1X, rogue access point detection (see module B)'],
            ],
          },
          { t: 'def', term: 'Active Directory test', text: 'Assessment, in an authorized environment, of the escalation paths toward domain administration. The defensive value is to identify and close these paths (inherited rights, delegations, overly permissive service accounts) before an attacker finds them.' },
          { t: 'callout', kind: 'tip', text: 'For these targets, the substance of the course lies in the defensive modules: Active Directory and PKI (module D), identity and privileged accounts (module O), Wi-Fi and perimeter (module B). The test merely reveals what these measures must protect.' },
        ],
      },
      {
        id: 'post-equipes',
        title: 'After access and as a team',
        blocks: [
          { t: 'p', text: 'Once a weakness is demonstrated, the test can assess how far it leads — always within the scope and in a framed way. These stages are presented at the level of **principles and defenses**, not as an operating procedure.' },
          {
            t: 'table',
            head: ['Stage', 'Defensive goal', 'Countermeasure'],
            rows: [
              ['**Framed post-exploitation**', 'Measure the real impact of an access obtained (reachable data, possible pivot)', 'Segmentation, least privilege, detection (EDR), logging'],
              ['**Privilege escalation**', 'Check whether a limited access can become an extended one', 'Patches, correct permissions, hardening (modules C and D)'],
              ['**Pivoting in a lab**', 'Assess propagation from one segment to another', 'Micro-segmentation, inter-zone filtering, monitoring'],
            ],
          },
          { t: 'def', term: 'Red Team and Purple Team', text: 'A **Red Team** simulates a realistic adversary on an authorized scope to test detection and response, not only vulnerabilities. A **Purple Team** approach has attackers (red) and defenders (blue) work together: each offensive action is replayed to check and improve detection. It is the defensive culmination of the penetration test.' },
          { t: 'callout', kind: 'key', text: 'A test’s value is not “having managed to get in” but the list of fixes and detections to put in place. The Purple Team approach directly turns each offensive finding into an improvement of the defense.' },
        ],
      },
      {
        id: 'surfaces',
        title: 'Other surfaces: APIs, cloud and containers',
        blocks: [
          { t: 'p', text: 'Modern systems expose far more than web pages: **APIs**, **cloud services**, **containers**. These surfaces are tested within the same authorized framework, and their weaknesses are fixed through configuration and rights more than through code fixes. As in the rest of the course, they are presented through their **defense**.' },
          {
            t: 'table',
            head: ['Surface', 'What the test assesses', 'Hardening (defense)'],
            rows: [
              ['**APIs**', 'Object- and function-level access control, input validation, rate limiting, excessive data exposure', 'Server-side authorization, authentication of every call, validation schemas, limits (module F)'],
              ['**Cloud storage and services**', 'Publicly accessible object storage, services exposed by mistake, logging disabled', 'Private access by default, continuous configuration review, logging'],
              ['**Cloud identities and rights (IAM)**', 'Excessive rights, old or exposed access keys, roles that allow escalation', 'Least privilege, short-lived tokens, rotation, separation of roles'],
              ['**Containers and orchestrators**', 'Outdated images or images containing secrets, privileged containers, exposed administration interface', 'Minimal and scanned images, unprivileged execution, orchestration API not exposed'],
            ],
          },
          { t: 'def', term: 'CSPM (Cloud Security Posture Management)', text: 'Tools that continuously compare a cloud environment’s configuration to security rules (public storage, missing logging, excessive rights) and report deviations. They turn configuration review into permanent control.' },
          { t: 'list', items: ['**The cloud is a shared responsibility**: the provider secures the infrastructure, the customer its configurations, rights and data.', '**Before testing**, check the provider’s policy (forbidden activities, prior notification) and write its limits into the RoE.', '**Identities come first**: in the cloud, an exposed account or key is worth network access.', '**Fix through configuration**: default deny, minimal rights, automatic analysis of images and deployment templates.'] },
          { t: 'callout', kind: 'tip', text: 'A cloud finding is written like the others: the resource, the misconfiguration, the impact and the precise fix (the rule or the policy to modify).' },
        ],
      },
      {
        id: 'mesure',
        title: 'Measuring, reporting and following remediation',
        blocks: [
          { t: 'p', text: 'An exercise that is not measured does not improve. The value of a Purple Team approach lies in **metrics** and in **follow-up** of the fixes, not in the anecdote of a successful intrusion.' },
          {
            t: 'table',
            head: ['Metric', 'What it measures', 'Use'],
            rows: [
              ['**Detection rate**', 'Share of the replayed techniques that the SOC detected', 'Measure coverage, target the gaps'],
              ['**Detection delay**', 'Time between the offensive action and the alert', 'Assess the speed of monitoring'],
              ['**Response delay**', 'Time between the alert and containment', 'Assess the teams’ reaction'],
              ['**ATT&CK coverage**', 'Techniques of the framework tested and detected', 'Steer the detection effort'],
              ['**Fixed findings**', 'Share of findings handled on time, then retested', 'Follow remediation'],
            ],
          },
          { t: 'def', term: 'MITRE ATT&CK', text: 'Public framework of adversary techniques, organized by tactics. In a Purple Team exercise, each replayed technique is tied to its identifier, which makes it possible to follow detection coverage and compare exercises over time.' },
          {
            t: 'example',
            title: 'A Purple Team exercise sheet',
            blocks: [
              { t: 'list', items: ['**Technique**: execution of a command interpreter by an office document (matching ATT&CK identifier).', '**Result**: not detected on first run; detected after creating a rule on the process chain.', '**Detection delay**: 4 minutes after adjustment.', '**Actions**: rule added (owner: SOC), hardening of the office suite (owner: workstation team), retest in 30 days.'] },
            ],
          },
          { t: 'list', items: ['**Report**: scenario, replayed techniques, detection results, corrective actions with owners and dates.', '**Retest**: each fixed finding is replayed to confirm that it is really resolved.', '**Automation**: attack simulation tools allow regularly replaying the validated techniques.', '**Ethics and framework**: each replay stays within the scope, announced and logged.'] },
          { t: 'callout', kind: 'key', text: 'A successful exercise is not one where everything is detected on the first try, but one that reveals gaps and fixes enough of them for the next iteration to show it.' },
        ],
      },
    ],
    useCases: [
      'Running an authorized web penetration test: using an interception proxy to check access control, then recommendations.',
      'Auditing an organization’s password strength from legally retrieved hashes, to strengthen policies.',
      'Purple Team exercise: replaying attack techniques to measure and improve the SOC’s detection.',
    ],
    commonMistakes: [
      'Carrying out an exploitation outside the authorized scope or on a third-party system.',
      'Judging a test by “having managed to get in” rather than by the fixes and detections produced.',
      'Using a tool without understanding the defense that neutralizes it.',
      'Forgetting to log your actions, making it impossible to tell the test from a real attack.',
      'Confusing an authorized password audit with account theft.',
    ],
    bestPractices: [
      'Execute only within a scope authorized in writing or in a training lab.',
      'Non-destructive evidence, logged actions, scope respected.',
      'Associate each tool with its defense; refer fixes back to the defensive courses (F, B, C, D, E, O).',
      'Handle AD and Wi-Fi through hardening (tiers, least privilege, LAPS, WPA3, 802.1X).',
      'Adopt the Purple Team approach: turn each offensive finding into a detection and a fix.',
    ],
    keyPoints: [
      'Execution only happens in an authorized scope or a lab; the evidence serves the report.',
      'Each tool (Burp/ZAP, Nikto, Gobuster/FFUF, sqlmap, Metasploit, Nuclei, Netcat, Hydra, John/Hashcat) has a defense that neutralizes it.',
      'AD and Wi-Fi tests: the substance is the hardening covered in the defensive modules.',
      'Post-exploitation, escalation, pivoting: understood through their countermeasures (segmentation, least privilege, EDR).',
      'Red Team tests detection; Purple Team turns the offensive into an improvement of the defense.',
    ],
  },
  practice: [
    {
      id: 'outil-defense',
      kind: 'analysis',
      title: 'Matching each test finding to its defense',
      context: [
        { t: 'p', text: 'Extracts of an authorized penetration test report:' },
        {
          t: 'table',
          head: ['#', 'Finding'],
          rows: [
            ['1', 'An interception proxy made it possible to change the object identifier and access the data of another account'],
            ['2', 'sqlmap confirmed a SQL injection on a form'],
            ['3', 'Hydra succeeded in many authentication attempts without being slowed down'],
            ['4', 'An audit showed that half of the passwords were recovered within a few minutes'],
          ],
        },
      ],
      steps: ['Name the weakness of each finding.', 'Give the defense that would have prevented it.', 'Indicate which defensive module to refer to for the fix.'],
    },
    {
      id: 'purple-team',
      kind: 'case',
      title: 'Case study: from a test to detection (Purple Team)',
      context: [{ t: 'p', text: 'At the end of a test, the offensive team demonstrated several techniques (initial access, escalation, lateral movement) that the SOC did not detect. Management wants to draw improvements from it.' }],
      steps: ['Explain what a Purple Team approach brings here.', 'Propose how to turn each undetected technique into a detection.', 'Indicate the complementary hardening measures.'],
    },
    {
      id: 'exercice-purple',
      kind: 'case',
      title: 'Case study: designing a Purple Team exercise on a ransomware scenario',
      context: [{ t: 'p', text: 'Management wants to check that the SOC detects the stages of a ransomware attack: initial access by a booby-trapped email, execution on a workstation, credential theft, movement toward a file server, deletion of backups then encryption. The exercise takes place in an authorized acceptance environment, without encrypting any real data.' }],
      steps: ['Choose the techniques to replay, tie them to ATT&CK and define what is simulated and what is excluded.', 'Define the metrics and the result sheet of each technique.', 'Describe the follow-up: corrective actions, owners, retest, report to management.'],
    },
  ],
  questions,
  resources: [
    { title: 'Technical Guide to Information Security Testing and Assessment (SP 800-115)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/115/final' },
    { title: 'Web Security Testing Guide (WSTG)', source: 'OWASP', url: 'https://owasp.org/www-project-web-security-testing-guide/' },
    { title: 'PASSI framework (audit providers) (in French)', source: 'ANSSI', url: 'https://cyber.gouv.fr/le-referentiel-dexigences-passi' },
    { title: 'MITRE ATT&CK (techniques and detections)', source: 'MITRE', url: 'https://attack.mitre.org/' },
    { title: 'Password Storage Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html' },
  ],
};
