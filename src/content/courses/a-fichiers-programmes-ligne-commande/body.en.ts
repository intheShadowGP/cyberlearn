import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'a-fichiers-programmes-ligne-commande',
  lesson: {
    intro:
      'To secure a system, you first need to understand what it is made of. The first course of module A introduced the machine, the operating system and processes. This one completes the foundation: how data is stored in files, how a program goes from the text written by a developer to something the machine executes, how an application is split into components, and how to talk to a system through a command-line interface. These notions come back in all the disciplines that follow.',
    sections: [
      {
        id: 'fichiers',
        title: 'The file system',
        blocks: [
          { t: 'p', text: 'A **file system** organizes storage into files and directories (folders). For each file, it keeps three distinct things: the **name** (stored in a directory), the **metadata** (size, owner, rights, dates) and the **content** (the data, spread in blocks on the medium).' },
          { t: 'def', term: 'Path', text: 'A sequence of directories leading to a file. An **absolute** path starts from the root (`/etc/hosts`, `C:\\Windows`); a **relative** path starts from the current directory (`../report.txt` goes up one level). Telling them apart avoids many errors, and explains some flaws related to paths supplied by a user.' },
          {
            t: 'table',
            head: ['Element', 'Example', 'Role'],
            rows: [
              ['Name and extension', '`report.pdf`', 'Identifies the file; the extension suggests the type without guaranteeing it'],
              ['Metadata', 'owner, rights, dates', 'Who can do what, when it was modified'],
              ['Content', 'the bytes of the document', 'The data itself'],
            ],
          },
          {
            t: 'example',
            title: 'The name does not make the content',
            blocks: [
              { t: 'p', text: 'You rename `photo.jpg` to `photo.txt`: the name and the extension change, but the bytes of the content remain those of an image. A program that really opens it will see an image, not text.' },
              { t: 'p', text: 'Conversely, a file `invoice.pdf.exe` shows a misleading icon and extension while its content is an executable program. Hence the security rule of checking the real type and not the name.' },
            ],
          },
          { t: 'def', term: 'Access rights', text: 'Metadata that tells who can read, write or execute a file: owner, group and others (`rwx` on Linux), or access control lists (Windows). They apply to the file itself, not to its name.' },
          { t: 'def', term: 'Symbolic link', text: 'A special file that contains the path of another file: opening it amounts to opening its target. A poorly controlled link can redirect a privileged program to a sensitive file.' },
          { t: 'def', term: 'Path traversal', text: 'An attack where an input such as `../../etc/passwd` climbs up the tree to leave the intended folder. The program must normalize the path and check that it stays inside the allowed folder.' },
          { t: 'callout', kind: 'info', text: 'A file extension is only an indication: a file can be renamed without changing its real content. This is why, in security, we check the **real type** of a file and not just its name.' },
        ],
      },
      {
        id: 'compilation',
        title: 'From source code to a running program',
        blocks: [
          { t: 'p', text: 'A program is first written by a developer as **source code**: human-readable text in a programming language. The machine, for its part, only executes instructions in its own language. Two main routes lead from one to the other.' },
          {
            t: 'table',
            head: ['Approach', 'Principle', 'Example languages'],
            rows: [
              ['**Compilation**', 'A compiler translates all the source code into executable code once and for all', 'C, C++, Go, Rust'],
              ['**Interpretation**', 'An interpreter reads and executes the code as it goes, at each launch', 'Python, JavaScript (often), Ruby'],
              ['**Intermediate**', 'The code is compiled into an intermediate format, executed by a virtual machine', 'Java, C#'],
            ],
          },
          { t: 'def', term: 'Executable (binary)', text: 'A file containing machine instructions directly executable by the processor, produced by compilation. It is not human-readable, which makes its analysis harder than that of a script.' },
          { t: 'def', term: 'Dependencies', text: 'External libraries that a program reuses instead of rewriting everything. They are part of the delivered software: a vulnerable library makes the application vulnerable, hence the importance of keeping an inventory and updating them.' },
          { t: 'def', term: 'Hash', text: 'A short value computed from the content of a file, which changes as soon as a single byte changes. Published by the vendor, it makes it possible to check that a downloaded executable has not been altered.' },
          { t: 'def', term: 'Software supply chain', text: 'All the components, tools and dependencies used to produce software. Compromising one link (a dependency, a build tool) makes it possible to reach all the users of the software.' },
          { t: 'callout', kind: 'info', text: 'Understanding this chain sheds light on several security topics: checking the integrity of an executable, distrusting a binary of unknown origin, or monitoring the dependencies that make up an application.' },
        ],
      },
      {
        id: 'architecture',
        title: 'Software architecture',
        blocks: [
          { t: 'p', text: 'A reasonably complex application is not a single block: it is split into **components** with distinct responsibilities, which communicate with each other. This organization helps understand where data flows and where the security controls sit.' },
          {
            t: 'table',
            head: ['Model', 'Description'],
            rows: [
              ['Layered', 'Presentation (interface), business logic, data access: each layer only talks to its neighbor'],
              ['Client-server', 'A client (browser, application) sends requests to a server that processes and answers'],
              ['Services', 'The application is split into services that communicate over the network (API)'],
            ],
          },
          { t: 'def', term: 'Trust boundary', text: 'The limit between a controlled zone and one that is not, for example between the user’s browser (untrusted) and the server. Data crossing this boundary must be checked on the server side: a principle found throughout application security.' },
          { t: 'def', term: 'API', text: 'An interface through which a component offers its functions to others, often over the network (HTTP requests). Each exposed access point is an entry door to protect.' },
          { t: 'def', term: 'Attack surface', text: 'All the points through which an attacker can interact with a system: forms, APIs, open ports, accounts. Reducing the attack surface means removing what does not need to be exposed.' },
          {
            t: 'example',
            title: 'The price changed in the browser',
            blocks: [
              { t: 'p', text: 'A site shows a basket at €100 and sends this price back to the server in the order request. A user changes the value to €1 before sending. If the server trusts the received price instead of reading it again from its own database, the order is accepted at €1: the check had to be done on the server side.' },
            ],
          },
          { t: 'callout', kind: 'key', text: 'A rule that runs through all the disciplines: **never trust what comes from the client**. Code running on the user’s machine can be modified; the checks that matter are done on the side you control.' },
        ],
      },
      {
        id: 'programmation',
        title: 'Reading a simple program',
        blocks: [
          { t: 'p', text: 'You do not need to be a developer to read a small program. A few notions are enough to follow what it does, which is valuable for analyzing a script or understanding a vulnerability.' },
          {
            t: 'table',
            head: ['Notion', 'Role'],
            rows: [
              ['Variable', 'A named value that can be read and modified'],
              ['Condition (`if … then`)', 'Run instructions only if a condition is true'],
              ['Loop (`for`, `while`)', 'Repeat instructions'],
              ['Function', 'A reusable block of instructions, which receives parameters and returns a result'],
              ['Data structure', 'Organize values: list (ordered sequence), dictionary (key → value)'],
            ],
          },
          { t: 'code', lang: 'text', caption: 'A small program in pseudo-code', code: 'function is_adult(age):\n    if age >= 18 then\n        return true\n    else\n        return false\n\nfor each person in people_list:\n    if is_adult(person.age):\n        display person.name' },
          { t: 'def', term: 'Data type', text: 'The nature of a value: integer, text, boolean (true or false). Confusing types, or not checking the type of an input, is a classic source of errors and flaws.' },
          { t: 'def', term: 'Untrusted input', text: 'Any data that comes from outside the program: input, file, network request, parameter. It must be validated before use, because the attacker controls its content.' },
          {
            t: 'example',
            title: 'A command built with an input',
            blocks: [
              { t: 'code', lang: 'text', code: 'name = read_input()\nexecute("ping " + name)' },
              { t: 'p', text: 'If the user enters `example.org ; cat /etc/passwd`, the interpreter runs two commands: the expected `ping`, then the display of a sensitive file. This is a **command injection**. The defense is to validate the input (allowed characters) or to avoid going through a command interpreter.' },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Knowing how to spot where a program uses data coming from outside (an input, a file, a request) without checking it is already a security reflex: this is often where vulnerabilities are born.' },
        ],
      },
      {
        id: 'cli',
        title: 'The command line',
        blocks: [
          { t: 'p', text: 'The **command-line interface** lets you talk to a system by typing commands rather than clicking. It is central to administration and security: precise, automatable, and often the only way to act on a remote server.' },
          {
            t: 'table',
            caption: 'A few equivalent commands',
            head: ['Need', 'Linux / macOS (Bash)', 'Windows (PowerShell)'],
            rows: [
              ['Show the current directory', '`pwd`', '`Get-Location`'],
              ['List the content of a folder', '`ls -l`', '`Get-ChildItem`'],
              ['Read a text file', '`cat file`', '`Get-Content file`'],
              ['Search for a word in a file', '`grep word file`', '`Select-String word file`'],
            ],
          },
          { t: 'def', term: 'Shell', text: 'A program that interprets the typed commands (for example Bash on Linux and macOS, PowerShell on Windows). It chains commands and automates tasks; mastering it is deepened in the courses of modules C (Linux) and D (Windows).' },
          { t: 'def', term: 'Pipe and redirection', text: 'The pipe `|` sends the output of one command to the input of another; the redirection `>` writes the output to a file. This is how simple tools are chained to filter and count.' },
          { t: 'def', term: 'Arguments and options', text: 'What follows the name of a command: **arguments** designate targets (a file), **options** change the behavior (`-l` for a detailed listing).' },
          {
            t: 'example',
            title: 'Counting failed logins in a log',
            blocks: [
              { t: 'code', lang: 'bash', code: 'cat journal.log | grep "Failed password" | wc -l' },
              { t: 'p', text: '`cat` reads the file, `grep` keeps only the lines containing “Failed password”, `wc -l` counts the remaining lines. Three simple tools, one result: the number of failed logins.' },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'The command line is scary at first, but it makes actions explicit and reproducible: you see exactly what is requested, which is valuable when analyzing or documenting an operation.' },
        ],
      },
    ],
    useCases: [
      'Getting started in security: reading a file listing, following a small script, understanding an application diagram.',
      'Preparing the next modules: the Linux, Windows, Web and code courses all rely on these notions.',
      'Analyzing a simple incident: spotting a file of suspicious type, following the path of a piece of data through an application.',
    ],
    commonMistakes: [
      'Trusting a file’s extension rather than its real type.',
      'Confusing absolute and relative paths.',
      'Believing that a check done on the client side (browser) protects, when it can be bypassed.',
      'Forgetting that a software’s dependencies are part of its security surface.',
      'Inserting a user input into a command or a path without validating it.',
      'Avoiding the command line on principle, missing out on precise and reproducible actions.',
    ],
    bestPractices: [
      'Distinguish the name, metadata and content of a file; check the real type in security work.',
      'Know whether a language is compiled or interpreted, and keep an inventory of dependencies.',
      'Check the hash of downloaded software when the vendor publishes it.',
      'Reason in components and trust boundaries; check on the server side.',
      'Read a simple program to spot unchecked data.',
      'Get familiar with the command line, which is explicit and automatable.',
    ],
    keyPoints: [
      'A file = a name, metadata and a content; the extension is only an indication.',
      'Compilation (prior translation) or interpretation (at run time); dependencies are part of the software.',
      'Applications are split into components separated by trust boundaries.',
      'Variables, conditions, loops, functions and data structures are enough to read a small program.',
      'Every external input is untrusted until it is validated.',
      'The command line makes actions precise, reproducible and automatable.',
    ],
  },
  practice: [
    {
      id: 'lire-pseudocode',
      kind: 'analysis',
      title: 'Following a small program',
      context: [
        { t: 'p', text: 'Pseudo-code of a function:' },
        { t: 'code', lang: 'text', code: 'function discount(price, is_member):\n    r = 0\n    if price > 100 then\n        r = 10\n    if is_member then\n        r = r + 5\n    return price - (price * r / 100)' },
      ],
      steps: ['Give the result for a non-member with a price of 80, then for a member with a price of 200.', 'Describe in one sentence what the function does.', 'State what should be checked if `price` came from a user input.'],
    },
    {
      id: 'classer-notions',
      kind: 'case',
      title: 'Linking the notions to security',
      context: [{ t: 'p', text: 'You are explaining to a new colleague why these basic notions matter in security.' }],
      steps: ['Give an example of a security problem related to the real type of a file.', 'Give an example related to a dependency.', 'Explain in your own words the rule “do not trust the client”.'],
    },
    {
      id: 'lire-commande',
      kind: 'analysis',
      title: 'Breaking down a command chain',
      context: [
        { t: 'p', text: 'An administrator runs the following command on a Linux server:' },
        { t: 'code', lang: 'bash', code: 'cat /var/log/auth.log | grep "Failed password" | wc -l' },
      ],
      steps: ['Describe what each of the three commands does and the role of the two pipes.', 'Say what the final result returns and what it can be used for.', 'Suggest how to adapt the idea to a Windows workstation with PowerShell.'],
    },
  ],
  questions,
  resources: [
    { title: 'Filesystem Hierarchy Standard', source: 'Linux Foundation', url: 'https://refspecs.linuxfoundation.org/fhs.shtml' },
    { title: 'Compiled versus interpreted languages', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Glossary/Compile' },
    { title: 'Client-Server overview', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview' },
    { title: 'Command line crash course', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line' },
  ],
};
