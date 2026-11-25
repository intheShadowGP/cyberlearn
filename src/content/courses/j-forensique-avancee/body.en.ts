import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'j-forensique-avancee',
  lesson: {
    intro:
      'At the advanced level, the difficulty is no longer only technical: it lies in **running** an investigation that mixes many sources, in the **cloud** where we do not control the hardware, in the **limits** of what modern media allow us to prove, and in **defending** one’s conclusions against an opposing party. This course is defensive and methodological: it teaches how to run a reliable investigation, not how to bypass protections.',
    sections: [
      {
        id: 'strategie',
        title: 'Running a complex investigation',
        blocks: [
          { t: 'p', text: 'A large-scale investigation (several systems, several weeks, several teams) is not run on the fly. It is **scoped**, **hypothesis-driven** and **prioritized**.' },
          {
            t: 'table',
            head: ['Step', 'Content'],
            rows: [
              ['**Scoping**', 'Questions asked, scope, authorization, legal constraints, deadlines, stakeholders'],
              ['**Hypotheses**', 'Several competing scenarios (external compromise, internal abuse, mistake) and what would tell them apart'],
              ['**Prioritization**', 'Sources most useful, most fragile and fastest to exploit first'],
              ['**Execution**', 'Collection, analysis, keeping a logbook, progress points'],
              ['**Reporting**', 'Argued conclusions, confidence level, limits, recommendations'],
            ],
          },
          { t: 'list', items: ['**Competing hypotheses**: we look for what **refutes** a hypothesis as much as for what confirms it, to avoid confirmation bias.', '**Fragility of sources**: we collect first what may disappear (memory, short-retention logs, snapshots that expire).', '**Logbook**: each decision (why this source, why not that one) is recorded.', '**Communication**: management, legal, the SOC and experts do not have the same needs; progress points are targeted and sober.'] },
          {
            t: 'example',
            title: 'A confirmation bias avoided',
            blocks: [
              { t: 'p', text: 'A manager is convinced that an employee copied plans onto a USB key: the device history shows a key plugged in the day before. The investigator also poses the hypothesis of a legitimate backup and looks for what tells them apart: content copied (antivirus and EDR logs), backup request in the ticketing system, time and workstation.' },
              { t: 'p', text: 'The backup had been scheduled by the IT department and the employee had plugged in the key only to copy personal files onto it. The starting hypothesis was wrong: without a competing hypothesis, the investigation would have wrongly accused.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: '**Confirmation bias** is the first enemy: we look for elements that confirm the starting hypothesis and neglect contradictions. Formulating alternative hypotheses and trying to tell them apart protects against it.' },
        ],
      },
      {
        id: 'cloud',
        title: 'Investigating in the cloud and online services',
        blocks: [
          { t: 'p', text: 'In the cloud, we own neither the hardware nor always the logs. Evidence consists of **activity logs** and **objects** (snapshots, storage) provided by the provider, within a **shared-responsibility model**.' },
          {
            t: 'table',
            head: ['Source', 'What it tells', 'Point of attention'],
            rows: [
              ['**Identity logs** (sign-ins, rights changes, consents)', 'Who signed in, from where, which rights were granted', 'Limited retention depending on the plan; to export to controlled storage'],
              ['**Platform activity logs** (API calls, resource creation)', 'Who created, modified, deleted what', 'Some event categories are not enabled by default'],
              ['**Storage and mail access logs**', 'Reads, downloads, shares, forwarding rules', 'Often billed or to be enabled in advance'],
              ['**Disk and machine snapshots**', 'State of the disk at a given instant', 'Do not contain memory; lifetime to watch'],
            ],
          },
          { t: 'list', items: ['**Enable in advance**: logging and its retention are decided before the incident.', '**Preserve before acting**: export logs, take snapshots, copy objects, compute hashes.', '**Isolate rather than delete**: network rules and token revocation before any resource deletion.', '**Legal framework**: the place where data is stored, the contracts with the provider and the applicable law (including for personal data) condition what can be collected and transferred.', '**Time**: logs are time-stamped by the provider; we check time zones and correlate with internal sources.'] },
          { t: 'callout', kind: 'key', text: 'In the cloud, the **request to the provider** (preservation, export) is a stage of the investigation: it follows a procedure and takes time. Better to have prepared it.' },
        ],
      },
      {
        id: 'flash',
        title: 'Flash media, encryption and acquisition limits',
        blocks: [
          { t: 'p', text: 'Modern media change what an acquisition can prove. These limits must be known so as not to conclude abusively.' },
          {
            t: 'table',
            head: ['Topic', 'Effect on the investigation'],
            rows: [
              ['**SSD and flash memory**', 'The controller itself manages where data is located and its erasure: a deleted file may quickly become unrecoverable (**TRIM** command, garbage collection); the state of the medium may evolve even when powered off'],
              ['**Full-disk encryption**', 'Without the key, the content is unusable; the key may be in memory, in the directory (recovery key) or on another medium'],
              ['**Mobile devices**', 'Encryption by default, locking, remote wipe: isolation (airplane mode, Faraday bag) comes before examination, according to procedure'],
              ['**Free space and deleted files**', 'Recovery is uncertain on SSD; its absence does not prove the absence of action'],
            ],
          },
          { t: 'def', term: 'TRIM', text: 'Command that informs an SSD that some blocks are no longer used, so that it can erase them in the background. It reduces the chances of finding deleted data.' },
          { t: 'list', items: ['**Acquire the key before powering off**: memory, recovery key from the directory, logical image of the unlocked volume.', '**Do not conclude on absence**: “no recoverable file” does not mean “no file ever existed”.', '**Document the limits**: the report states what the medium did or did not allow to prove.', '**Corroborate**: logs, backups, online services and other machines complete what the medium can no longer provide.'] },
          { t: 'callout', kind: 'info', text: 'On an SSD, two successive acquisitions of the same medium may differ slightly, with no manipulation: the controller keeps working. This finding is documented.' },
        ],
      },
      {
        id: 'anti',
        title: 'Anti-forensics and reliability of evidence',
        blocks: [
          { t: 'p', text: 'An adversary may try to make the investigation harder: erasing logs, backdating files, using tools present on the system. Knowing these hindrances allows assessing the **reliability** of each piece of evidence. The goal is defensive: detect the manipulation and get around it through cross-checking.' },
          {
            t: 'table',
            head: ['Hindrance', 'Clues', 'Countermeasure'],
            rows: [
              ['**Log erasure**', 'Gap in a series, log-cleared event, very short log', 'Logs sent off-system, other sources (EDR, firewall, network)'],
              ['**Backdating** (timestomping)', 'Inconsistency between attributes, fractions of a second at zero, recent `ctime`', 'Compare attributes, cross-check with logs and the file-system timeline'],
              ['**Hijacked legitimate tools**', 'Few new files, activity through administration tools', 'Process telemetry and command lines, behavior rather than files'],
              ['**Encryption and data hiding**', 'Unknown containers, high-entropy files', 'Keys in memory, usage metadata, other access traces'],
              ['**Secure deletion**', 'Overwriting, erasure tools present', 'Execution artifacts of the tools, backups, online services'],
            ],
          },
          { t: 'list', items: ['**Validate one’s tools**: a tool may have bugs; we verify results on a known test set and keep the versions.', '**Recognize absence**: absence of evidence is not evidence of absence; we state the limit.', '**Reason by cross-checking**: a manipulation of one source is rarely consistent with all the others.', '**Stay defensive**: we do not reproduce these techniques outside an authorized test framework.'] },
          { t: 'callout', kind: 'key', text: 'A piece of evidence has value only if one can say **what could make it false**. Assessing this risk is part of the analysis.' },
        ],
      },
      {
        id: 'expertise',
        title: 'Expertise, report and standards',
        blocks: [
          { t: 'p', text: 'An expert report is a document that will be **challenged**. It is written to withstand contradiction: explicit method, facts separated from interpretation, limits acknowledged.' },
          {
            t: 'table',
            head: ['Requirement', 'Application'],
            rows: [
              ['**Independence and impartiality**', 'The expert does not test what they built or administered; they declare any ties'],
              ['**Reproducibility**', 'Copy verified by hash, tools and versions, commands, parameters: a third party finds the results'],
              ['**Facts and interpretation**', 'Findings are tied to a piece of evidence; deductions carry a confidence level'],
              ['**Alternative hypotheses**', 'Scenarios not retained are mentioned with the reason'],
              ['**Limits**', 'Missing sources, limited tools, flash media, insufficient retention'],
              ['**Adversarial process**', 'The report lets the opposing party verify and respond'],
            ],
          },
          { t: 'def', term: 'Reference standards', text: 'Standards describe good practice for digital evidence: identification, collection, acquisition and preservation (ISO/IEC 27037), analysis and interpretation (ISO/IEC 27042), assurance of the method (ISO/IEC 27041). They serve as a grid to justify an approach, without replacing the expert’s judgment.' },
          { t: 'list', items: ['**Measured vocabulary**: “the elements are consistent with”, “tend to show” rather than unfounded certainties.', '**Traceability**: logbook, chain of custody, hashes of each item.', '**Questions from the opposing party**: be ready to justify each tool, each choice and each limit.', '**Legal framework**: respect for personal data, the confidentiality of correspondence, the applicable procedures.'] },
          { t: 'callout', kind: 'warn', text: 'A report that hides its limits or alternative hypotheses weakens the expert at the first question from the opposing party. Honesty about limits is a strength.' },
        ],
      },
      {
        id: 'echelle',
        title: 'Scaling up: triage, automation and validation',
        blocks: [
          { t: 'p', text: 'Across hundreds of machines, we do not make a full image of each. We **triage** with targeted collections, we **automate** extractions and we **validate** the results to keep confidence.' },
          {
            t: 'table',
            head: ['Need', 'Approach', 'Precaution'],
            rows: [
              ['Know **which machines** are affected', 'Targeted artifact collection (triage tools, collection agents, EDR queries)', 'Scope and execution rights validated; impact on production assessed'],
              ['**Order** millions of events', 'Super-timeline merging disk, logs and network', 'Normalized time zones, measured drift, documented filters'],
              ['**Repeat** an analysis', 'Versioned scripts and pipelines', 'Tests on a known set, log of versions and parameters'],
              ['**Prioritize** the machines to image', 'Scores and indicators from triage', 'The score guides, it does not conclude; human review'],
            ],
          },
          { t: 'list', items: ['**Triage first**: we decide on a full acquisition only for the key machines.', '**Light but traceable collection**: what is collected, when, by which tool, with which hash.', '**Validated automation**: a poorly tested script may produce errors at scale; we validate it and sample the results.', '**Tool bias**: a tool sees only what it knows how to look for; we complement it with independent checks.', '**Personal data**: large-scale collection increases the volume of data touched; minimization and restricted access apply.'] },
          { t: 'callout', kind: 'tip', text: 'At scale, reliability comes from **reproducibility**: same inputs, same version, same results. A result that cannot be redone cannot be defended.' },
        ],
      },
    ],
    useCases: [
      'Head of investigation: run an inquiry over several months, with competing hypotheses and progress points.',
      'Investigation of a compromised cloud account: identity logs, platform activity, snapshots.',
      'Judicial expert: defend a report against the adversarial process.',
      'Incident response team: triage of hundreds of machines and a super-timeline.',
    ],
    commonMistakes: [
      'Focusing on a single hypothesis and ignoring what contradicts it.',
      'Deleting a cloud resource before exporting its logs and taking a snapshot.',
      'Concluding that files did not exist on an SSD because nothing is recoverable.',
      'Trusting a tool without validating it.',
      'Presenting interpretations as facts in a report.',
      'Automating a collection without having assessed its impact on production.',
    ],
    bestPractices: [
      'Scope, pose competing hypotheses and keep a logbook.',
      'Decide in advance on cloud logging and retention.',
      'Acquire the encryption key before power-off and document the limits of flash media.',
      'Assess what could make a piece of evidence false and cross-check sources.',
      'Write a reproducible report, with confidence levels and alternative hypotheses.',
      'Validate scripts and tools, sample results, normalize time zones.',
    ],
    keyPoints: [
      'Confirmation bias is fought with competing hypotheses.',
      'In the cloud, preserve (export, snapshot) before acting; isolate rather than delete.',
      'On SSD, TRIM and the controller limit recovery: the absence of a trace is not proof of absence.',
      'A piece of evidence is worth its resistance to possible hindrances: we cross-check.',
      'An expert report is reproducible, measured and open to contradiction.',
      'At scale: triage, automate, validate, stay reproducible.',
    ],
  },
  practice: [
    {
      id: 'plan-investigation',
      kind: 'case',
      title: 'Case study: scoping an investigation with competing hypotheses',
      context: [{ t: 'p', text: 'A client of a consulting firm discovers that confidential negotiation documents are known to a competitor. Three leads: an external compromise of the mail system, a deliberate leak by a collaborator, or a mistake with an overly open file share. Management wants an answer within three weeks.' }],
      steps: ['Write the scoping (questions, scope, authorizations, constraints).', 'Formulate the hypotheses and what would tell them apart.', 'Order the sources to collect, taking their fragility into account.'],
    },
    {
      id: 'cloud-identite',
      kind: 'analysis',
      title: 'Analysis: a potentially compromised cloud account',
      context: [
        { t: 'code', lang: 'text', code: 'Identity log (UTC), account "m.vidal"\n02:11  Successful sign-in, unusual country, MFA validated by notification\n02:14  Creation of a mail forwarding rule to an external address\n02:19  Consent granted to an unknown application (read access to mail and files)\n02:26  New authentication method added\n\nPlatform log (UTC)\n02:31  Creation of an access key for the service account "sauvegarde-ext"\n02:35  Creation of a large virtual machine in an unusual region\n\nIdentity-log retention: 30 days; automatic snapshots: 7 days' },
      ],
      steps: ['Describe the sequence and the hypotheses.', 'Say what is preserved and in what order, given the retention.', 'Propose containment without destroying evidence and the legal points to anticipate.'],
    },
    {
      id: 'contre-expertise',
      kind: 'case',
      title: 'Case study: answering a challenge to a report',
      context: [{ t: 'p', text: 'Your report states that a document was deleted on March 12 by an employee’s account. The opposing lawyer argues that the workstation’s clock was wrong, that the tool used is not validated, that other people had access to the account and that the disk is an SSD where deletion cannot be dated with certainty.' }],
      steps: ['Answer point by point, indicating what you had documented.', 'Say what you acknowledge as a limit and how the report states it.', 'Propose additional checks.'],
    },
  ],
  questions,
  resources: [
    { title: 'RFC 3227 — Guidelines for Evidence Collection and Archiving', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc3227' },
    { title: 'NIST SP 800-86 — Integrating Forensic Techniques into Incident Response', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/86/final' },
    { title: 'Velociraptor — documentation', source: 'Velocidex', url: 'https://docs.velociraptor.app/' },
    { title: 'plaso (log2timeline)', source: 'plaso project', url: 'https://plaso.readthedocs.io/' },
    { title: 'The Sleuth Kit & Autopsy', source: 'Basis Technology', url: 'https://www.sleuthkit.org/' },
  ],
};
