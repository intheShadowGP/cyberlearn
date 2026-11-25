import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'j-analyse-maliciels-investigation',
  lesson: {
    intro:
      'During an investigation, one often ends up finding a suspicious file: the binary dropped by an attacker, the attachment behind the incident. Analyzing it answers defensive questions: what did it do? how can it be detected elsewhere? how can we protect ourselves? This course describes this analysis in a strictly defensive and supervised framework — understanding and detecting, never producing or distributing malware — with the precautions that are essential so as not to cause a contamination oneself.',
    sections: [
      {
        id: 'role',
        title: 'The place of analysis in the investigation',
        blocks: [
          { t: 'p', text: 'Malware analysis, in a defensive context, serves three goals: **understanding** what a sample does (impact, objective), **detecting** its presence elsewhere in the fleet, and **containing** the incident (cutting communications, blocking indicators). The goal is never to reproduce or distribute the malicious code.' },
          {
            t: 'table',
            head: ['Investigation question', 'What the analysis provides'],
            rows: [
              ['What happened on this machine?', 'Behavior of the sample: files, persistence, communications'],
              ['Are other machines affected?', 'Indicators (hashes, domains, paths) to look for in the fleet'],
              ['How to stop the spread?', 'Items to block (network destinations, executables) and to monitor'],
              ['How to prevent a recurrence?', 'Entry vector and hardening measures to strengthen'],
            ],
          },
          { t: 'def', term: 'Defensive framework', text: 'The analysis is performed on a sample already present in an incident or supplied by a trusted source, with the aim of defending an information system. It does not consist of creating, arming or distributing malware: these actions fall outside the framework and are illegal.' },
          { t: 'callout', kind: 'key', text: 'Like any evidence, the sample must be handled according to the chain of custody: working copy, computed hash, preserved original. We never analyze the sole copy of a piece of evidence.' },
        ],
      },
      {
        id: 'environnement',
        title: 'An isolated analysis environment',
        blocks: [
          { t: 'p', text: 'Analyzing a potentially malicious file on an ordinary workstation would risk running it and contaminating the network. We work in an **isolated, disposable environment**, designed to be destroyed after use.' },
          { t: 'list', items: ['**Dedicated virtual machine**, with no access to the company network (isolated or cut network), with **snapshots** to return to a clean state after each test.', '**No real data or credentials** on the analysis machine.', '**Safe handling** of the sample: kept in an **encrypted, password-protected archive** (by convention `infected`), transferred without ever being run by accident, extension neutralized.', '**Analysis tools** installed in advance, since the machine has no Internet access during the analysis.'] },
          { t: 'def', term: 'Sandbox', text: 'Isolated, often automated execution environment that launches a sample and observes its behavior (files, registry, network) with no risk to the host system. Online sandboxes are convenient, but submitting a file to one may disclose sensitive data and alert the attacker: to be used with discernment.' },
          { t: 'callout', kind: 'warn', text: 'Some malware detects the analysis environment (virtual machine, sandbox) and changes behavior to fool the analyst. The absence of observed malicious behavior therefore does not prove harmlessness: static and dynamic analyses are cross-checked.' },
        ],
      },
      {
        id: 'statique',
        title: 'Triage and static analysis',
        blocks: [
          { t: 'p', text: '**Static** analysis examines the file **without running it**. It is the safest step, and often sufficient for triage: deciding whether a file deserves in-depth analysis.' },
          {
            t: 'table',
            head: ['Step', 'What we look for'],
            rows: [
              ['Hash', 'Identify the file; compare it with reputation databases and known indicators'],
              ['Real file type', 'An executable disguised as a document (misleading extension) is a signal'],
              ['Character strings', 'Domains, addresses, paths, messages: leads on the behavior'],
              ['Metadata and imports', 'The libraries and functions called suggest the capabilities (network, encryption, persistence)'],
              ['Signs of obfuscation', 'Compression/encryption of the content (packing) that hides the real code'],
            ],
          },
          { t: 'def', term: 'Reputation', text: 'Services (public or internal) that indicate whether a hash, domain or address is already known as malicious. We preferably query by hash rather than uploading the file, so as not to disclose sensitive content.' },
          {
            t: 'example',
            title: 'What a static triage reveals',
            blocks: [
              { t: 'p', text: 'A file named `facture.pdf.exe`: the real type is an executable (misleading double extension). Its hash is already flagged as malicious by reputation services. Its strings contain an unknown domain and a path `%APPDATA%\\svc.exe`; its imports include network functions.' },
              { t: 'p', text: 'Without having run it, we already know it must be treated as malicious, and we have three IOCs (hash, domain, drop path) to hand over to the SOC immediately.' },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Static triage already answers many questions with no risk. We move to dynamic analysis only if necessary and in the isolated environment.' },
        ],
      },
      {
        id: 'dynamique',
        title: 'Controlled behavioral analysis',
        blocks: [
          { t: 'p', text: '**Dynamic** analysis observes what the sample does when it runs, in the isolated environment. We do not seek to “use” the malware, but to **record its behavior** in order to draw indicators from it.' },
          {
            t: 'table',
            head: ['Observation', 'Indicator produced'],
            rows: [
              ['Files created or modified', 'Paths and names dropped, to look for on other machines'],
              ['Persistence installed', 'Registry keys, scheduled tasks, services (see the forensics courses)'],
              ['Network communications', 'Domains and addresses contacted (command server), to block and monitor'],
              ['Processes and injections', 'Techniques used, mappable to MITRE ATT&CK'],
            ],
          },
          { t: 'def', term: 'Indicator of compromise (IOC)', text: 'Observable element that allows spotting a compromise: file hash, file name, registry key, domain, IP address. IOCs feed the search in the fleet and the detection rules.' },
          { t: 'callout', kind: 'warn', text: 'Dynamic analysis is done with the network cut or simulated. Letting the sample really contact its command server may warn the attacker, or even trigger an additional stage. The clean snapshot is restored after each run.' },
        ],
      },
      {
        id: 'detection',
        title: 'From findings to detection',
        blocks: [
          { t: 'p', text: 'The product of the analysis is not “having understood the malware”, but a reusable **detection and response capability**. We turn the findings into actionable elements.' },
          { t: 'list', ordered: true, items: ['Gather the **IOCs** (hashes, domains, paths, keys) and distribute them to the SOC for search and blocking.', 'Write a **YARA** rule from characteristic strings or structures, to find variants on file servers and through the EDR.', 'Map the behaviors to **MITRE ATT&CK** techniques to identify missing detections.', 'Document: sample (hash), behavior, IOCs, techniques, remediation recommendations.', 'Check the effectiveness of the detections created and of the remediation.'] },
          { t: 'def', term: 'YARA rule', text: 'Pattern describing characteristics of a file (strings, byte sequences, conditions) to identify a malware family. Built from an analyzed sample, it allows searching for variants at scale.' },
          { t: 'callout', kind: 'key', text: 'Sharing IOCs (with the CERT, the sector ISAC) according to the TLP marking helps the whole community: the same analysis benefits other defenders. We share defensive indicators, never the armed sample in clear.' },
        ],
      },
      {
        id: 'documents',
        title: 'Booby-trapped documents and scripts: a defensive analysis',
        blocks: [
          { t: 'p', text: 'A large share of incidents starts with a **document** (office, PDF) or a **script** that leads to code execution. Their analysis follows the same rules as that of an executable: isolation, static first, indicators as output. It remains **defensive**: we read what the document contains, we do not make it more dangerous.' },
          {
            t: 'table',
            head: ['Type', 'Frequent mechanism', 'What we extract (without running)'],
            rows: [
              ['**Office document with macros**', 'Macro executed if the user enables it; it launches an interpreter or downloads a file', 'Macro text, URLs, file names and paths, commands called'],
              ['**PDF**', 'Links, embedded scripts, exploitation of a reader vulnerability', 'Links, embedded objects, unusual structure'],
              ['**Script (PowerShell, JavaScript, shell)**', 'Readable code but often masked (encoding, string concatenation)', 'Decoded command, addresses, files dropped'],
              ['**Archive or shortcut**', 'The opened file actually launches a program', 'Real target of the shortcut, archive content, misleading names'],
            ],
          },
          { t: 'def', term: 'Encoding and obfuscation', text: 'A malicious script often masks its command with a reversible encoding (for example Base64, PowerShell’s `-enc` option) or string splitting. This is **not encryption**: decoding it, in an isolated environment and without running it, reveals what it does.' },
          { t: 'list', items: ['**Do not enable** macros or open the document on an ordinary workstation.', '**Extract** the active content (macros, scripts, links) with static analysis tools, in an isolated environment.', '**Decode** without running: read the command, spot the addresses and the targeted files.', '**Map** the behaviors to ATT&CK (script execution, phishing) and produce the indicators.'] },
          {
            t: 'example',
            title: 'From the document to the indicator',
            blocks: [
              { t: 'p', text: 'A document `commande-mars.docm` contains a macro that launches `powershell -enc …`. Decoded in an isolated environment, the command downloads a file from `maj-service.example` and writes it to `%APPDATA%`. Three indicators are drawn: the document’s hash, the domain and the drop path.' },
              { t: 'p', text: 'On the prevention side: block macros in documents of external origin, search for the same document in received emails, block the domain and monitor the path across the fleet.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: 'Never paste the content of a sample or a sensitive document into a public service without having weighed the disclosure: we query by hash.' },
        ],
      },
      {
        id: 'rapport',
        title: 'Report, sharing and legal framework',
        blocks: [
          { t: 'p', text: 'An analysis is useful only if its results are **documented**, **shared with discernment** and obtained **in compliance with the law**.' },
          {
            t: 'table',
            head: ['Report part', 'Content'],
            rows: [
              ['**Sample**', 'Name, size, hash, origin, collection date, chain of custody'],
              ['**Method**', 'Environment, tools and versions, order of analyses (static, dynamic)'],
              ['**Behavior**', 'Files, persistence, communications, ATT&CK techniques'],
              ['**Indicators**', 'Dated and qualified IOCs; YARA rule where relevant'],
              ['**Confidence and limits**', 'What is established, what remains hypothesis, what could not be observed'],
              ['**Recommendations**', 'Blocking, search in the fleet, fixing the entry vector'],
            ],
          },
          { t: 'list', items: ['**IOC quality**: an indicator is dated, contextualized and given a confidence level; a shared or reassigned address is not blocked blindly.', '**Sharing**: according to the TLP marking, with the CERT or the ISAC; we share indicators and rules, not the armed sample in clear.', '**Confidentiality**: the report contains neither victims’ personal data nor secrets.'] },
          { t: 'callout', kind: 'legal', title: 'Legal framework', text: 'Holding, studying and sharing malicious programs requires a legitimate, defensive purpose, a documented mission, protected storage and traceability of access. Creating or distributing malware, or accessing an attacker’s infrastructure without authorization, is illegal. When in doubt, consult the legal department before acting.' },
          { t: 'callout', kind: 'tip', text: 'A good report lets another team redo the detection without having to analyze the sample again.' },
        ],
      },
    ],
    useCases: [
      'Incident response: analyze the binary dropped by an attacker to produce IOCs and contain the spread.',
      'Qualification of a suspicious attachment reported by a user, through static triage first.',
      'Detection enrichment: YARA rule and IOCs distributed to the SOC from a sample.',
    ],
    commonMistakes: [
      'Analyzing a suspicious file on a workstation connected to the company network.',
      'Running the sample before any static analysis, or even by accident (extension not neutralized).',
      'Concluding harmlessness because no behavior was observed (the malware may detect the analysis).',
      'Letting the sample really reach its command server during the analysis.',
      'Uploading a sensitive file to a public analysis service without weighing the disclosure.',
    ],
    bestPractices: [
      'Treat the sample as evidence: working copy, hash, preserved original.',
      'Isolated, disposable environment, with no real data, with snapshots; sample in an encrypted archive.',
      'Static triage first (hash, type, strings, imports); dynamic only if necessary, with the network cut.',
      'Produce IOCs and YARA rules, map them to MITRE ATT&CK, document and verify.',
      'Share defensive indicators according to the TLP; never distribute the armed sample in clear.',
    ],
    keyPoints: [
      'Defensive purpose: understand, detect, contain; never create or distribute malware.',
      'Analysis in an isolated, disposable environment, sample handled without accidental execution.',
      'Static first (without running): hash, type, strings, imports, obfuscation.',
      'Controlled dynamic analysis, network cut, snapshot restored after each test; it produces IOCs.',
      'The deliverable is a reusable detection: IOCs, YARA rule, ATT&CK mapping, report.',
    ],
  },
  practice: [
    {
      id: 'triage-fichier',
      kind: 'analysis',
      title: 'Triaging a suspicious file',
      context: [
        { t: 'p', text: 'A user reports an attachment. Static observations (no execution):' },
        { t: 'code', lang: 'text', code: 'Displayed name : facture.pdf.exe\nReal type      : Windows executable (PE)\nHash           : known and flagged as malicious by several reputation sources\nStrings        : a domain "maj-facturation.example", the path %APPDATA%\\svc.exe\nImports        : network and process-creation functions\nParticularity  : content largely packed (compressed/encrypted)' },
      ],
      steps: ['Say whether this file deserves in-depth analysis and why, without running it.', 'List the IOCs already usable at this stage.', 'Indicate the precautions before any dynamic analysis.'],
    },
    {
      id: 'plan-analyse',
      kind: 'case',
      title: 'Case study: organizing the analysis of an incident binary',
      context: [{ t: 'p', text: 'During an incident response, you retrieve a binary dropped by the attacker on a server. You must analyze it to detect its presence elsewhere and contain the incident.' }],
      steps: ['Describe the preparation of the environment and the handling of the sample.', 'Describe the order of the analyses (static then dynamic) and the precautions.', 'Indicate the expected defensive deliverables.'],
    },
    {
      id: 'document-piege',
      kind: 'analysis',
      title: 'Analysis: a document with a macro received by email',
      context: [
        { t: 'p', text: 'An employee reports an email “Purchase order” with an attachment. Static analysis, in an isolated environment, without enabling the macros:' },
        { t: 'code', lang: 'text', code: 'Name         : bon-de-commande.docm\nHash         : unknown to reputation services\nMacros       : one AutoOpen macro\nMacro content (excerpt) : launches powershell.exe with -w hidden -enc <Base64 string>\nDecoded string (read-only) : downloads http://maj-service.example/a.bin to %APPDATA%\\upd.exe then runs it\nEmail        : external sender, domain registered 3 days ago' },
      ],
      steps: ['Say whether the document is malicious and why, without having run it.', 'List the indicators to hand over to the SOC and the associated ATT&CK techniques.', 'Propose the search, blocking and prevention measures.'],
    },
  ],
  questions,
  resources: [
    { title: 'Guide to Malware Incident Prevention and Handling (SP 800-83)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/83/r1/final' },
    { title: 'YARA documentation', source: 'VirusTotal / YARA project', url: 'https://yara.readthedocs.io/' },
    { title: 'MITRE ATT&CK', source: 'MITRE', url: 'https://attack.mitre.org/' },
    { title: 'Traffic Light Protocol (TLP) 2.0', source: 'FIRST', url: 'https://www.first.org/tlp/' },
    { title: 'Malware Analysis (defensive resources)', source: 'CISA', url: 'https://www.cisa.gov/topics/cyber-threats-and-advisories/malware-phishing-and-ransomware' },
  ],
};
