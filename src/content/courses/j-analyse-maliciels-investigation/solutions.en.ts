import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'j-analyse-maliciels-investigation',
  practice: {
    'triage-fichier': {
      blocks: [
        { t: 'p', text: 'This file is very probably malicious and deserves in-depth analysis, without running it: misleading double extension (`.pdf.exe`) for an executable, hash already flagged by several reputation sources, evocative domain and drop path, network and process-creation imports, and packed content that hides the code. Each of these signs, and above all the known hash, is enough to treat it as malicious.' },
        { t: 'list', items: ['IOCs already usable: the file’s hash, the domain `maj-facturation.example`, the path `%APPDATA%\\svc.exe`.'] },
        { t: 'p', text: 'Precautions before any dynamic analysis: carry it out in an isolated, disposable virtual machine, with the network cut or simulated, no real data, and a clean snapshot to restore afterward; already block the domain and the hash on the SOC side and search for the drop path on the other machines.' },
      ],
    },
    'plan-analyse': {
      blocks: [
        { t: 'list', items: ['Preparation: dedicated virtual machine, isolated from the company network, tools installed in advance, clean snapshot; retrieve the binary as evidence (copy, hash, preserved original) and keep it in an encrypted archive, without running it by accident.'] },
        { t: 'list', ordered: true, items: ['Static analysis first: hash compared with reputation (by hash), real type, strings, imports, obfuscation — without running.', 'Dynamic analysis next if needed: execution in the isolated VM, network cut or simulated, observation of files, persistence and communications, then restoration of the snapshot.'] },
        { t: 'list', items: ['Defensive deliverables: IOCs (hash, domains, paths, persistence) handed to the SOC for search and blocking, YARA rule for variants, MITRE ATT&CK mapping, report and remediation recommendations, then verification of the detections.'] },
      ],
    },
    'document-piege': {
      blocks: [
        { t: 'p', text: 'The document is **very probably malicious**, with no need to run it: an `AutoOpen` macro (execution on opening), an interpreter launched in a hidden window with an **encoded** command, a decoded string that downloads then launches an executable from an unknown domain, and an email from an external sender whose domain was created three days earlier.' },
        {
          t: 'table',
          head: ['Indicator', 'Value', 'Use'],
          rows: [
            ['Document hash', 'SHA-256 of the `.docm`', 'Search in received emails and on workstations'],
            ['Domain', '`maj-service.example`', 'DNS and proxy blocking, search in the logs'],
            ['URL', '`http://maj-service.example/a.bin`', 'Blocking and search for requests already issued'],
            ['Drop path', '`%APPDATA%\\upd.exe`', 'Search on workstations (EDR), detection rule'],
            ['Sender and domain', 'Address and recent domain', 'Blocking and search for other recipients'],
          ],
        },
        { t: 'p', text: 'Associated **ATT&CK techniques**: phishing with an attachment (initial access), execution through a macro and command interpreter, obfuscated file or command (defense evasion), tool download from outside.' },
        { t: 'list', items: ['**Search**: the same document or sender in the mail system (delete the remaining messages), connections to the domain in proxy and DNS logs, presence of `upd.exe` and any persistence on workstations; check whether other people opened the document.', '**Blocking**: domain and URL, hashes, sender; isolate the workstations that contacted the domain.', '**Prevention**: block macros in documents of external origin, enable the mail system’s protections (attachment analysis), raise awareness about reporting.', '**Report**: record hash, behavior read, indicators and confidence; share the indicators according to the TLP without distributing the document.'] },
      ],
    },
  },
};
