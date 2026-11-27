// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "j-analyse-maliciels-investigation",
  questions: {
    "ami-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "In a defensive framework, a sample is analyzed to understand its impact, detect its presence and contain the incident. Creating, arming or distributing malware falls outside the framework and is illegal.",
      "whyWrong": {
        "c": "Reusing malware falls outside the defensive framework.",
        "d": "Distributing malware is illegal, even to test.",
        "b": "Selling is against the law and ethics."
      }
    },
    "ami-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The sample is evidence: we work on a copy, compute its hash and preserve the original, to guarantee the integrity and reproducibility of the analysis."
    },
    "ami-q3": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "The analysis sheds light on the impact, the extent of the compromise and the means to contain the spread.",
      "whyWrong": {
        "d": "The weather has nothing to do with analyzing a sample."
      }
    },
    "ami-q31": {
      "type": "single",
      "correct": "d",
      "explanation": "Triage (hash, type, strings, reputation) often allows concluding or producing indicators without running the file. In-depth analysis is reserved for the cases that justify it.",
      "whyWrong": {
        "b": "Triage precisely avoids running unnecessarily.",
        "c": "The sample is evidence to be kept.",
        "a": "Warning the attacker would be counterproductive."
      }
    },
    "ami-q32": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Like any evidence, it is collected in a documented way, its copy is verified by hash and access is recorded. This guarantees the evidential value of the conclusions."
    },
    "ami-q4": {
      "type": "single",
      "correct": "b",
      "explanation": "An isolated VM prevents contamination of the network, and snapshots let us return to a clean state after each test, a condition for a repeatable and safe analysis.",
      "whyWrong": {
        "d": "Isolation does not speed up execution.",
        "a": "Malware also works on physical machines.",
        "c": "The analysis machine is dedicated, not shared."
      }
    },
    "ami-q5": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Some malware detects the analysis environment (VM, sandbox) and stays inert to fool the analyst. The absence of observed behavior proves nothing; static and dynamic analyses are cross-checked."
    },
    "ami-q6": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Isolated network, no real data and a sample kept encrypted and not run by accident are the basic precautions.",
      "whyWrong": {
        "a": "Connecting the analysis machine to the production network is exactly what must be avoided."
      }
    },
    "ami-q33": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Encrypted archive, neutralized extension and dedicated machine limit the risk of accidental execution. A double-click runs the file: it is precisely what must be avoided.",
      "whyWrong": {
        "c": "Double-clicking may run the sample on the machine."
      }
    },
    "ami-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "Each run modifies the machine. Restoring the snapshot makes tests comparable and prevents a residue from skewing the next observation or persisting.",
      "whyWrong": {
        "b": "It is not a matter of speed.",
        "a": "The sample is kept in an archive, not in the snapshot.",
        "d": "The machine is restored, not deleted."
      }
    },
    "ami-q7": {
      "type": "single",
      "correct": "d",
      "explanation": "Static analysis examines the file without running it: hash, real type, strings, imports, signs of obfuscation. It is the safest step and often sufficient for triage.",
      "whyWrong": {
        "c": "That is dynamic analysis.",
        "a": "Letting it contact a server is part of execution.",
        "b": "Recompiling is not a defensive analysis."
      }
    },
    "ami-q8": {
      "type": "single",
      "correct": "b",
      "explanation": "Querying by hash avoids uploading a file that may contain sensitive data, and does not tell the attacker that their sample was spotted (some monitor public services).",
      "whyWrong": {
        "a": "Cost is not the reason.",
        "c": "Computing a hash is fast.",
        "d": "On the contrary, the difference is significant."
      }
    },
    "ami-q9": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A double extension where the real type is an executable is a classic disguise technique: it is a strong signal at triage."
    },
    "ami-q10": {
      "type": "short",
      "accepted": [
        "packing",
        "packer",
        "packed",
        "the packing"
      ],
      "explanation": "Packing compresses or encrypts the executable’s content to hide its real code and hinder static analysis; it often has to be undone (in an isolated environment) to analyze it."
    },
    "ami-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "Readable strings often contain addresses, file names, keys or messages, useful as indicators. A packed executable shows few, which is itself a sign.",
      "whyWrong": {
        "b": "No administrator password is in a sample.",
        "d": "Strings describe the file, not the analyst.",
        "a": "The author’s birth date does not appear in an executable’s strings."
      }
    },
    "ami-q36": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Imports, sections and entropy, metadata guide the analysis: probable capabilities, presence of packing, origin. No attacker secret is to be expected in clear.",
      "whyWrong": {
        "c": "Nothing suggests such an element is present or usable."
      }
    },
    "ami-q37": {
      "type": "short",
      "accepted": [
        "entropy",
        "the entropy",
        "shannon entropy"
      ],
      "explanation": "High entropy suggests compressed or encrypted content, hence a packed executable. It is one clue among others, to be cross-checked with imports and strings."
    },
    "ami-q11": {
      "type": "single",
      "correct": "a",
      "explanation": "Dynamic analysis produces indicators of compromise (dropped files, persistence, domains contacted) used to detect and contain, not to reuse the malware.",
      "whyWrong": {
        "d": "Reproducing the malware falls outside the defensive framework.",
        "c": "Accessing an attacker’s server is illegal.",
        "b": "The goal is, on the contrary, to produce indicators."
      }
    },
    "ami-q12": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The network is cut or simulated: letting the sample reach its command server may warn the attacker or trigger an additional stage. The clean snapshot is restored after each run."
    },
    "ami-q13": {
      "type": "short",
      "accepted": [
        "ioc",
        "iocs",
        "the ioc"
      ],
      "explanation": "An IOC (indicator of compromise) is an observable element — hash, domain, address, registry key, path — that allows spotting a compromise in the fleet."
    },
    "ami-q14": {
      "type": "single",
      "correct": "b",
      "explanation": "Observed behaviors are mapped to MITRE ATT&CK techniques, which helps map detection coverage and spot the techniques that are not covered.",
      "whyWrong": {
        "a": "The GDPR is a regulation on personal data.",
        "d": "ISO 9001 concerns the quality of organizations.",
        "c": "DHCP assigns IP addresses."
      }
    },
    "ami-q15": {
      "type": "open",
      "model": "We turn the findings into actionable elements: gather the IOCs (hashes, domains, addresses, paths, persistence keys) and hand them to the SOC for search in the fleet and blocking; write a YARA rule from characteristic strings or structures to find variants on file servers and through the EDR; map the behaviors to MITRE ATT&CK to spot missing detections and create the matching rules in the SIEM; document the analysis (hash, behavior, IOCs, techniques, remediation); finally check that the detections created work and that remediation was applied. Defensive indicators are shared according to the TLP marking, without distributing the armed sample.",
      "criteria": [
        "The production and distribution of IOCs to the SOC are described.",
        "A YARA rule or a detection rule is mentioned.",
        "Mapping to ATT&CK or verification of the detections is mentioned."
      ],
      "explanation": "The deliverable of a defensive analysis is a lasting detection capability, not only an understanding of the malware."
    },
    "ami-q16": {
      "type": "open",
      "model": "Risks: running the attachment on a connected workstation may contaminate the machine and then the company network (spread, encryption, credential theft), destroy evidence and alert the attacker. Right approach: run nothing; treat the attachment as evidence (copy, hash); start with a static analysis (real type, hash compared with reputation by hash, strings) on a neutralized copy; if a dynamic analysis is necessary, carry it out in an isolated, disposable virtual machine, network cut, with snapshots, and no real data; produce IOCs and warn the SOC. In short, the analysis is done in a dedicated environment, never on a production workstation.",
      "criteria": [
        "The risks of contamination and spread are explained.",
        "Priority to static analysis without execution is indicated.",
        "The isolated, disposable environment is described as the good practice."
      ],
      "explanation": "“Going faster” on a production workstation is precisely the scenario that turns a suspicious file into a widespread incident."
    },
    "ami-q38": {
      "type": "single",
      "correct": "d",
      "explanation": "We record the files created or modified, the persistence installed (registry, tasks, services) and the network communications, to draw indicators from them.",
      "whyWrong": {
        "c": "The screen’s color is not a behavior of the sample.",
        "b": "The weather has no link with the sample’s execution.",
        "a": "The number of pages printed is not a behavior of the sample."
      }
    },
    "ami-q39": {
      "type": "single",
      "correct": "a",
      "explanation": "A resolver and decoy services in the isolated network make it possible to record the names requested and the connections attempted, without warning the attacker or exposing the company.",
      "whyWrong": {
        "d": "That would warn the attacker.",
        "b": "That would expose the company.",
        "c": "Without observation, no indicator is produced."
      }
    },
    "ami-q40": {
      "type": "single",
      "correct": "c",
      "explanation": "Some samples delay or detect the environment. We extend the observation, cross-check with static analysis and do not conclude from the absence of behavior.",
      "whyWrong": {
        "d": "The absence of behavior proves nothing.",
        "a": "Nothing indicates corruption.",
        "b": "Static analysis remains essential."
      }
    },
    "ami-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "A macro is a small program embedded in the document. Legitimate for automating tasks, it is also a classic malware vector if the user enables it without caution.",
      "whyWrong": {
        "d": "An image runs nothing.",
        "b": "A font is a display style.",
        "a": "A password protects opening, not execution."
      }
    },
    "ami-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "It is not opened on an ordinary workstation. In an isolated environment, the macros are extracted and read without running them, the URLs and commands are noted, then the SOC is warned.",
      "whyWrong": {
        "b": "Enabling macros runs the code.",
        "c": "Sharing the file spreads the risk.",
        "d": "Reporting it allows finding other victims."
      }
    },
    "ami-q19": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A PDF may contain malicious links, scripts or exploit a reader vulnerability. Every document format must be handled with caution and analyzed in an isolated environment."
    },
    "ami-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Addresses, paths and commands are indicators directly usable by the SOC. The formatting of the text has no detection value.",
      "whyWrong": {
        "d": "The font color is not an indicator."
      }
    },
    "ami-q21": {
      "type": "single",
      "correct": "b",
      "explanation": "An encoded command (Base64) is simply decoded to read what it does: it is decoded in an isolated environment, without running it, and its addresses and actions are extracted.",
      "whyWrong": {
        "c": "Running it takes the risk of infection.",
        "d": "Ignoring the command loses the essentials.",
        "a": "This discloses information."
      }
    },
    "ami-q22": {
      "type": "short",
      "accepted": [
        "base64",
        "base 64",
        "the base64"
      ],
      "explanation": "Base64 turns bytes into text; it is reversible and protects nothing. It serves to get around simple filters; decoding it in an isolated environment reveals the command."
    },
    "ami-q23": {
      "type": "single",
      "correct": "d",
      "explanation": "Blocking by policy the macros of documents of external origin removes the vector for the vast majority of users. Individual vigilance is not enough.",
      "whyWrong": {
        "a": "Relying on everyone’s caution is insufficient.",
        "b": "Disabling protection increases the risk.",
        "c": "Printing does not solve the risk of opening."
      }
    },
    "ami-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "The report describes the sample (hash), its behavior, the indicators, the ATT&CK techniques, the confidence and the recommendations. It does not republish the armed code.",
      "whyWrong": {
        "a": "Publishing the armed code falls outside the defensive framework.",
        "d": "Credentials have no place in a report.",
        "c": "The report establishes facts, not a moral judgment."
      }
    },
    "ami-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "We share indicators (hashes, domains) and rules, which help defenders. The sample, if shared, is shared in a protected way and within a framework of trust.",
      "whyWrong": {
        "b": "An armed executable exposed in clear is a risk.",
        "d": "Personal data must be protected.",
        "c": "Credentials are secrets."
      }
    },
    "ami-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The law regulates the possession and distribution of malicious tools: a legitimate purpose, a mission framework and protective measures are essential. When in doubt, the legal department is consulted."
    },
    "ami-q27": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "A written framework, protected storage and traceability reduce the risk of leaks and misuse. Publishing armed samples would be distribution.",
      "whyWrong": {
        "c": "Publishing armed samples is distribution, contrary to the defensive framework."
      }
    },
    "ami-q28": {
      "type": "single",
      "correct": "d",
      "explanation": "A conclusion backed by several concordant analyses does not weigh the same as a hypothesis based on a single clue. The confidence level guides decisions.",
      "whyWrong": {
        "a": "It qualifies the conclusion.",
        "c": "It makes the limits visible.",
        "b": "Length is not the goal."
      }
    },
    "ami-q29": {
      "type": "short",
      "accepted": [
        "tlp",
        "the tlp",
        "traffic light protocol"
      ],
      "explanation": "The TLP (Traffic Light Protocol) specifies with whom information may be shared. Respecting the marking conditions the trust of partners."
    },
    "ami-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "An address may be reassigned or shared: we indicate its date, context and confidence, and avoid excessive blocking. The quality of IOCs matters more than their quantity.",
      "whyWrong": {
        "d": "A broad block risks interrupting legitimate services.",
        "b": "Nothing allows asserting this.",
        "a": "Removing everything is not proportionate."
      }
    }
  },
};
