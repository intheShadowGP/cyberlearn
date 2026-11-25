import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'k-retro-ingenierie-defensive',
  lesson: {
    intro:
      'The first course of module K presented malware typology and static and dynamic analysis. To go further — to understand precisely what a sample does when strings and observed behavior are not enough — we turn to reverse engineering. This course gives its **defensive** basics: reading the structure of a binary, understanding disassembly and debugging, knowing the reference tools, and grasping how two reputedly stealthy families (bootkits, keyloggers) work, solely in order to detect them and protect against them. Nothing here aims at producing malware; everything is done in an isolated environment, on incident or training samples.',
    sections: [
      {
        id: 'binaires',
        title: 'Reading a binary: PE and ELF',
        blocks: [
          { t: 'p', text: 'A compiled program is a **binary file** structured according to a format: **PE** (Portable Executable) under Windows, **ELF** (Executable and Linkable Format) under Linux. Reading its structure, without running it, already reveals a lot.' },
          {
            t: 'table',
            head: ['Element', 'What it indicates'],
            rows: [
              ['Header and entry point', 'Where execution starts; an atypical entry point may betray packing'],
              ['Sections (code, data, resources)', 'File organization; a section that is both executable and writable is suspect'],
              ['Import table', 'The external functions called: network, encryption, process manipulation, persistence'],
              ['Export table', 'The functions exposed (useful for libraries and some modular malware)'],
              ['Resources and metadata', 'Icons, strings, compilation timestamp'],
            ],
          },
          { t: 'def', term: 'Imports', text: 'Functions provided by the system or by libraries, which the program calls. Their list suggests the binary’s capabilities: network and process-creation imports, for example, are consistent with code that downloads and executes. Packing may however hide the real imports until execution.' },
          {
            t: 'example',
            title: 'What the structure reveals before any execution',
            blocks: [
              { t: 'p', text: 'An executable whose entry point is in a section that is writable **and** executable, with a high-entropy section (apparently random content) and almost no imports or readable strings: these signs, read without running the file, indicate a packed binary whose real code is hidden.' },
              { t: 'p', text: 'We deduce that static analysis will not be enough and that the unpacking will have to be observed in a debugger, in an isolated environment.' },
            ],
          },
          { t: 'callout', kind: 'key', text: 'Analyzing the structure of a binary is part of static analysis: it does not require running the file and guides what comes next. It is the first step of reverse engineering, and the safest.' },
        ],
      },
      {
        id: 'desassemblage',
        title: 'Disassembly: from machine code to assembly',
        blocks: [
          { t: 'p', text: 'The processor executes **machine code** (bytes). **Disassembly** translates these bytes into **assembly**, a readable representation of the instructions (move a value, compare, jump, call a function). It is the reverse of assembling, not of compiling: we do not recover the original source code, only the instructions.' },
          {
            t: 'table',
            head: ['Assembly notion', 'Role (overview)'],
            rows: [
              ['Registers', 'Small working areas of the processor'],
              ['Transfer and computation instructions', 'Move and transform values'],
              ['Comparisons and jumps', 'Implement conditions and loops'],
              ['Function calls', 'Chain subroutines, through the stack'],
            ],
          },
          { t: 'def', term: 'Decompilation', text: 'A step above disassembly: some tools rebuild an approximation in pseudo-code close to a high-level language, more readable than assembly. It is only a reconstruction, sometimes imperfect, but valuable for understanding the logic.' },
          { t: 'callout', kind: 'info', text: 'A binary is not read line by line: we start from the elements spotted in the previous step (interesting imports, strings) to go straight to the relevant functions, for example the one that builds a network address or decrypts a payload.' },
        ],
      },
      {
        id: 'debogage',
        title: 'Supervised debugging',
        blocks: [
          { t: 'p', text: '**Debugging** consists in running a program step by step, setting breakpoints and observing memory and registers at each stage. For malware, it complements static disassembly: it lets us see what the code really produces, notably when it is packed or obfuscated.' },
          { t: 'list', items: ['Observe the code **after unpacking**: the real code often appears only once the binary is decrypted in memory, at runtime.', 'Follow the construction of dynamic elements (addresses contacted, file names) that static analysis does not show in clear.', 'Confirm a hypothesis drawn from the disassembly.'] },
          { t: 'callout', kind: 'warn', text: 'Debugging malware means running it: this is done exclusively in the isolated environment described in module J (disposable virtual machine, network cut or simulated, snapshots), never on a workstation. Some malware detects the debugger and changes behavior.' },
          { t: 'def', term: 'Breakpoint', text: 'Marker placed on an instruction: execution stops when it reaches it, which lets us examine the program’s state at that precise moment. It is placed, for example, just before a network call to read the address that will be contacted.' },
        ],
      },
      {
        id: 'outils',
        title: 'Reverse-engineering tools',
        blocks: [
          { t: 'p', text: 'Three tools keep coming up in malware analysis. Knowing them helps read analysis reports and choose the right instrument.' },
          {
            t: 'table',
            head: ['Tool', 'Type', 'Use'],
            rows: [
              ['**Ghidra**', 'Disassembler and decompiler (free, NSA)', 'In-depth static analysis, decompilation into pseudo-code; free and widely used in training'],
              ['**IDA**', 'Disassembler and decompiler (commercial)', 'Historical reference of static analysis, many extensions'],
              ['**x64dbg**', 'Debugger (free, Windows)', 'Step-by-step dynamic analysis of Windows binaries, useful for unpacking'],
            ],
          },
          { t: 'def', term: 'Combined static and dynamic analysis', text: 'Reverse engineering alternates the two: the disassembler/decompiler (Ghidra, IDA) gives the structure and logic without execution; the debugger (x64dbg) shows the real behavior and reveals the unpacked code. Each fills in the other’s blind spots.' },
          { t: 'callout', kind: 'tip', text: 'These tools are neutral: they are analysis instruments, used by security vendors as well as by researchers. What matters is the framework: isolated environment, incident or training samples, a goal of detection and defense.' },
        ],
      },
      {
        id: 'familles',
        title: 'Two stealthy families: bootkits and keyloggers',
        blocks: [
          { t: 'p', text: 'Understanding how some families hide is essential to detecting them. They are presented here from the angle of **operation, detection and prevention**, in line with the defensive goal.' },
          {
            t: 'table',
            head: ['Family', 'Principle (high level)', 'Detection and prevention'],
            rows: [
              ['**Bootkit**', 'Malware that installs itself very early in the boot chain to run before the system and hide', 'Secure Boot and measured boot (TPM), integrity attestation, firmware control'],
              ['**Keylogger**', 'Component that records keystrokes to capture credentials', 'EDR (detection of keyboard access and persistence), MFA that limits the value of a stolen password, process monitoring'],
            ],
          },
          { t: 'def', term: 'Why a bootkit is hard to detect', text: 'By running before the operating system, a bootkit can hide its presence from tools that run afterward. The countermeasure relies on a hardware root of trust (Secure Boot, TPM, seen in module P) that checks the integrity of the boot chain **before** the malicious code takes over.' },
          { t: 'callout', kind: 'key', text: 'Facing these families, defense does not consist in reproducing them but in reducing what they bring in (MFA against password theft), anchoring trust in hardware (against bootkits) and monitoring behaviors (EDR, persistence), then analyzing any captured sample to produce indicators.' },
        ],
      },
      {
        id: 'obfuscation',
        title: 'Obfuscation and analysis of unpacked code',
        blocks: [
          { t: 'p', text: 'A malware author seeks to hinder the analyst: they **scramble** their code to make it hard to read and detect. Knowing these protections tells us **where to look** when basic static analysis shows almost nothing. The framework remains defensive: we describe the protections in order to get around them for analysis purposes, never to apply them.' },
          {
            t: 'table',
            head: ['Protection', 'Effect on the analysis', 'Analyst’s response'],
            rows: [
              ['**String encryption**', 'No readable address or file name in the binary', 'Spot the decryption routine; observe memory after execution'],
              ['**Dynamic function resolution**', 'Almost empty import table', 'Examine the code that finds the functions; read the calls in the debugger'],
              ['**Complicated control flow**', 'Disassembly hard to follow', 'Start from the points of interest (imports, strings) rather than reading in sequence'],
              ['**Packing**', 'The real code exists only in memory', 'Memory snapshot after unpacking, then static analysis of that code'],
              ['**Anti-debugging and environment detection**', 'The program behaves differently or stops if observed', 'Study the detection routine, observe otherwise (system traces, memory), extend the observation'],
            ],
          },
          { t: 'def', term: 'Unpacked code', text: 'Real code of a packed executable, once decrypted or decompressed in memory at runtime. It is retrieved by copying the memory region (in an isolated environment) and analyzed like an ordinary binary.' },
          { t: 'list', items: ['**Start from the clues**: a routine that loops over a buffer and applies a simple operation is often a decryption; it is spotted from the missing strings or the constants.', '**Extract rather than run**: when possible, the configuration is rebuilt by reading memory rather than letting the program reach its server.', '**Keep the isolation**: a sample that detects analysis may do nothing or trigger a dangerous action; the analysis machine stays cut off from the production network.'] },
          { t: 'callout', kind: 'warn', text: 'An absence of behavior under a debugger is not proof of harmlessness: the program may have detected the observation.' },
        ],
      },
      {
        id: 'rapport',
        title: 'From binary to detection: configuration, rules and report',
        blocks: [
          { t: 'p', text: 'Defensive reverse engineering always ends with a **usable product**: reliable indicators, detection rules and a report that another team can reuse.' },
          {
            t: 'table',
            head: ['Product', 'Origin', 'Use'],
            rows: [
              ['**Extracted configuration**', 'Domains, keys, campaign identifier, beacon interval read in the unpacked code', 'Durable network indicators, grouping of campaigns'],
              ['**Capabilities**', 'Resolved imports, functions identified (persistence, injection, communication)', 'Mapping to ATT&CK, detection gaps'],
              ['**Detection rules**', 'Decryption routine, configuration structure, constants', 'YARA on disk and in memory, EDR rules'],
              ['**Report**', 'Method, findings, dated indicators, confidence level, limits', 'SOC, incident response, partners (TLP)'],
            ],
          },
          { t: 'list', items: ['**Target the stable**: a routine or a configuration structure persists from one variant to another; a clear string changes with each campaign.', '**Two rules**: one for the packed file on disk, one for the unpacked code in memory.', '**Test**: on variants (must match) and on a clean corpus (must not match).', '**Limits acknowledged**: parts not analyzed, behaviors not triggered, hypotheses.'] },
          { t: 'callout', kind: 'legal', title: 'Legal framework', text: 'Analyzing a sample is legitimate within a documented defensive mission (incident, training, supervised research), with protected storage and traced access. Making, distributing or using malware is an offense, as is testing on a third party’s system. Sharing of results is limited to indicators and rules, not the armed sample in clear.' },
          { t: 'callout', kind: 'key', text: 'The defensive value comes from what can be **detected** and **prevented** thanks to the analysis, never from reproducing the threat.' },
        ],
      },
    ],
    useCases: [
      'In-depth analysis of an incident sample when basic static and dynamic analysis is not enough.',
      'Understanding a reverse-engineering report published by a vendor or a CERT.',
      'Strengthening detection of a bootkit or a keylogger through hardware measures and EDR.',
    ],
    commonMistakes: [
      'Debugging malware anywhere other than in an isolated environment.',
      'Believing that disassembly gives back the original source code.',
      'Relying on the visible imports of a packed binary without accounting for unpacking at runtime.',
      'Trying to reproduce a bootkit or a keylogger instead of studying how to detect it.',
      'Forgetting that some malware detects the debugger or the analysis environment.',
    ],
    bestPractices: [
      'Start with static analysis of the binary’s structure (sections, imports) without running it.',
      'Alternate disassembler/decompiler (Ghidra, IDA) and debugger (x64dbg), always in an isolated environment.',
      'Start from the clues (imports, strings) to target the functions to analyze, without reading everything.',
      'Handle bootkits and keyloggers through detection and prevention (Secure Boot/TPM, EDR, MFA, monitoring).',
      'Produce indicators and detection rules from the analysis (see the previous J and K courses).',
    ],
    keyPoints: [
      'PE/ELF: reading sections, imports and exports reveals a binary’s capabilities without running it.',
      'Disassembly gives assembly (not source code); decompilation rebuilds an approximation.',
      'Debugging runs step by step: it reveals the unpacked code, only in an isolated environment.',
      'Ghidra, IDA (static/decompilation) and x64dbg (dynamic) are the reference tools.',
      'Bootkits and keyloggers: studied to detect them (Secure Boot/TPM, EDR, MFA), not to reproduce them.',
    ],
  },
  practice: [
    {
      id: 'triage-binaire',
      kind: 'analysis',
      title: 'Guiding the analysis from a binary’s structure',
      context: [
        { t: 'p', text: 'Static analysis (no execution) of a Windows executable (PE):' },
        { t: 'code', lang: 'text', code: 'Entry point     : in an unusual section, writable and executable\nSections        : one section with high-entropy content (random appearance)\nVisible imports : very few functions (only enough to load other functions)\nStrings         : almost no readable string' },
      ],
      steps: ['Say what these signs suggest about the binary.', 'Explain why the visible imports are poor and what this implies for the analysis.', 'Indicate the next step and the associated precaution.'],
    },
    {
      id: 'detecter-familles',
      kind: 'case',
      title: 'Case study: protecting against bootkits and keyloggers',
      context: [{ t: 'p', text: 'A manager asks how to reduce the risk linked to bootkits and keyloggers across a fleet, without going into offensive technique.' }],
      steps: ['Give the measures against bootkits and explain why they work.', 'Give the measures against keyloggers.', 'Explain the role of analyzing a captured sample in this defense.'],
    },
    {
      id: 'routine-dechiffrement',
      kind: 'analysis',
      title: 'Analysis: reading a decryption routine in decompiled code',
      context: [
        { t: 'p', text: 'Pseudo-code excerpt (decompilation, in an isolated environment) of an unpacked sample. Values are fictitious:' },
        { t: 'code', lang: 'text', code: 'function decoder(buffer, length):\n    for i from 0 to length - 1:\n        buffer[i] = buffer[i] XOR 0x37\n    return buffer\n\nfunction main():\n    config = decoder(encrypted_data, 41)\n    domain = read(config, "domain")\n    identifier = read(config, "campaign")\n    create_mutex("Local\\\\SyncHelper_" + identifier)\n    loop: wait(60 seconds); send(domain, "/gate.php?id=" + identifier)' },
        { t: 'p', text: 'After `decoder` runs in memory, the configuration contains: domain `upd.cdn-sync-helper.example`, campaign `93`.' },
      ],
      steps: ['Explain what `decoder` does and why no readable string was visible.', 'List the configuration and the indicators to produce, with their qualification.', 'Propose two detection rules (disk and memory) and how to test them.'],
    },
  ],
  questions,
  resources: [
    { title: 'Ghidra', source: 'National Security Agency', url: 'https://ghidra-sre.org/' },
    { title: 'PE Format', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows/win32/debug/pe-format' },
    { title: 'ELF (Tool Interface Standard)', source: 'Linux Foundation / refspecs', url: 'https://refspecs.linuxfoundation.org/elf/elf.pdf' },
    { title: 'Guide to Malware Incident Prevention and Handling (SP 800-83)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/83/r1/final' },
    { title: 'Secure the Windows boot process', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows/security/operating-system-security/system-security/secure-the-windows-10-boot-process' },
  ],
};
