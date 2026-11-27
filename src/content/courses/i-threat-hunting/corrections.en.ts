// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "i-threat-hunting",
  questions: {
    "hunt-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "Tactical (or technical) intelligence provides elements directly usable by tools: indicators, signatures, rules. It has a short lifespan.",
      "whyWrong": {
        "b": "Strategic intelligence is aimed at management: trends, motivations, sector risks.",
        "a": "This is not a level of threat intelligence.",
        "d": "This is not a level of threat intelligence."
      }
    },
    "hunt-q2": {
      "type": "single",
      "correct": "d",
      "explanation": "In TLP 2.0, AMBER+STRICT limits distribution to the recipient’s organization, on a need-to-know basis. Plain AMBER also allows its clients.",
      "whyWrong": {
        "b": "That is what TLP:AMBER allows, not AMBER+STRICT.",
        "a": "Public release falls under TLP:CLEAR.",
        "c": "That is the scope of TLP:GREEN."
      }
    },
    "hunt-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Irrelevant or outdated indicators (shared IP addresses, reassigned domains) generate false positives that wear analysts out. Quality and relevance matter more than volume."
    },
    "hunt-q4": {
      "type": "short",
      "accepted": [
        "stix",
        "stix 2",
        "stix 2.1",
        "stix2"
      ],
      "explanation": "STIX (Structured Threat Information Expression) describes intelligence objects; TAXII (Trusted Automated Exchange of Intelligence Information) carries them between platforms."
    },
    "hunt-q41": {
      "type": "single",
      "correct": "a",
      "explanation": "Changing a single byte changes the hash: the attacker renews it effortlessly. Behaviors and techniques are costlier to change, hence more durable for detection.",
      "whyWrong": {
        "b": "A hash is easily compared with an intelligence base; its fragility lies elsewhere.",
        "d": "File size has nothing to do with the indicator’s fragility.",
        "c": "The antivirus does not modify hashes: it uses them."
      }
    },
    "hunt-q6": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "A good hypothesis is precise, tied to a technique or intelligence, verifiable with the available data, and its verification is documented whatever the result.",
      "whyWrong": {
        "a": "A vague hypothesis can be neither confirmed nor refuted: we do not know what was checked."
      }
    },
    "hunt-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A negative hunt documents what was checked, often reveals logging gaps, and should produce an automated detection for the technique studied. These are lasting gains."
    },
    "hunt-q8": {
      "type": "open",
      "model": "Hypothesis: “If an attacker established persistence through a local account, local accounts were created on workstations or servers outside the usual administration process, then added to the Administrators group.” Data: security events 4720 (account creation) and 4732 (addition to a local group), Sysmon 1 for `net.exe user /add`, inventory of local accounts via the EDR, 90 days of history. Method: list all creations, exclude those made by known deployment accounts and tools, stack account names and workstations, examine rare values and creations outside business hours; correlate with the sign-ins that use these accounts (4624). Result: an incident or a documented absence, plus a detection rule on 4720 excluding authorized administration accounts.",
      "criteria": [
        "The hypothesis is formulated in a verifiable way.",
        "Precise data sources are cited (events 4720, 4732 or equivalents).",
        "The analysis method (exclusions, stacking, correlation) is described.",
        "The expected product (detection or incident) is mentioned."
      ],
      "explanation": "This pattern (trigger, hypothesis, data, analysis, result) applies to any ATT&CK technique."
    },
    "hunt-q9": {
      "type": "single",
      "correct": "b",
      "explanation": "Zeek describes traffic (connections, DNS queries, HTTP and TLS sessions) without passing judgment; Suricata applies signatures and alerts, or even blocks in IPS mode. The two often complement each other on the same sensor.",
      "whyWrong": {
        "c": "Zeek analyzes IPv4 as well as IPv6.",
        "d": "Suricata analyzes network traffic, not Windows logs.",
        "a": "They are two distinct projects."
      }
    },
    "hunt-q10": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "A DNS tunnel encodes data in the names requested and in the answers: high length and entropy, volume concentrated on one domain, use of TXT records.",
      "whyWrong": {
        "a": "Querying the internal resolver is the normal behavior of any workstation."
      }
    },
    "hunt-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The content is encrypted, but the regularity of connections, volumes, destination, SNI, certificate and TLS handshake fingerprint (JA3 or JA4) remain observable and are often enough."
    },
    "hunt-q12": {
      "type": "short",
      "accepted": [
        "conn.log",
        "conn"
      ],
      "explanation": "`conn.log` contains one line per connection: addresses, ports, protocol, duration, bytes exchanged, state. It is the basis for beacon and exfiltration analysis."
    },
    "hunt-q13": {
      "type": "single",
      "correct": "a",
      "explanation": "A web-server process (IIS) launching PowerShell is rare and typically matches command execution through a web shell. Values that are frequent across the fleet match normal use.",
      "whyWrong": {
        "c": "Very frequent value: normal use.",
        "d": "Present everywhere: usual behavior.",
        "b": "Present everywhere: usual behavior."
      }
    },
    "hunt-q14": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Documented rule, test on history, playbook and automated enrichment: the hunt becomes a durable detection and a faster response.",
      "whyWrong": {
        "a": "An automatic destructive action on an untested rule risks isolating healthy machines; isolation is decided after validation, at least until the rule has proven itself."
      }
    },
    "hunt-q15": {
      "type": "open",
      "model": "SIEM and EDR alerts only recognize what has already been described by rules or signatures; an attacker who uses legitimate tools, valid accounts and new infrastructure can stay below these thresholds for months. Hunting actively looks for these behaviors starting from intelligence on the groups targeting the company, reduces the attacker’s dwell time (and therefore the impact), and each hunt produces new detections: it improves the return on the existing SIEM and EDR. It also reveals logging gaps. The funding can be measured: number of detections created, ATT&CK coverage, incidents discovered.",
      "criteria": [
        "The limit of detections based on known rules is explained.",
        "The reduction of the attacker’s dwell time or of the impact is mentioned.",
        "Continuous improvement of existing detections is cited.",
        "At least one measurable result indicator is proposed."
      ],
      "explanation": "Facing management, the argument is about risk and the yield of tools already purchased, not about technique."
    },
    "hunt-q16": {
      "type": "single",
      "correct": "b",
      "explanation": "The SOAR orchestrates and automates: it receives an alert, enriches, creates the ticket, and triggers actions on other tools according to a playbook.",
      "whyWrong": {
        "a": "An IDS detects in traffic; it does not orchestrate actions.",
        "d": "A web application firewall filters web traffic.",
        "c": "A reverse proxy relays requests to servers."
      }
    },
    "hunt-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "Operational intelligence describes a group’s methods and campaigns: it guides response and hunting teams in choosing what to look for. It stays valid for weeks or months.",
      "whyWrong": {
        "a": "Strategic covers trends, motivations and risks for management.",
        "d": "Tactical provides indicators (addresses, hashes), not methods.",
        "b": "This is not a level of threat intelligence."
      }
    },
    "hunt-q18": {
      "type": "truefalse",
      "correct": true,
      "explanation": "TLP:CLEAR means distribution without restriction, subject to copyright rules. At the other extreme, TLP:RED limits distribution to the named recipients only."
    },
    "hunt-q19": {
      "type": "short",
      "accepted": [
        "taxii",
        "taxii 2",
        "taxii 2.1"
      ],
      "explanation": "TAXII is the transport protocol that goes with STIX: it lets platforms such as MISP or OpenCTI publish and collect intelligence objects."
    },
    "hunt-q20": {
      "type": "single",
      "correct": "d",
      "explanation": "Without available, usable data, the hypothesis cannot be tested. We check the sources, the retained period and the fields before designing the query.",
      "whyWrong": {
        "c": "A query that is too broad drowns the signal and tests nothing precise.",
        "a": "The report comes after the analysis.",
        "b": "Isolation belongs to response, not hunting."
      }
    },
    "hunt-q21": {
      "type": "single",
      "correct": "c",
      "explanation": "The absence of a result over too short a period proves nothing. The gap (retention, missing source) is a useful result: we document it and close it so we can hunt again.",
      "whyWrong": {
        "a": "We cannot conclude on what we cannot see.",
        "b": "Nothing supports this conclusion.",
        "d": "We fix the gap and then start again."
      }
    },
    "hunt-q22": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "The sheet allows the hunt to be reproduced, reviewed and reused: hypothesis, data, queries, result, detections created. No secret belongs in a sheet.",
      "whyWrong": {
        "b": "Secrets are never kept in a hunt sheet."
      }
    },
    "hunt-q23": {
      "type": "single",
      "correct": "d",
      "explanation": "Malware periodically polls its server: regular interval, small and constant volumes, lasting hours or days.",
      "whyWrong": {
        "b": "A single transfer suggests rather a copy or an exfiltration.",
        "a": "This is normal behavior.",
        "c": "Varied use is typical of an ordinary workstation."
      }
    },
    "hunt-q24": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Encryption protects the content, not the metadata. It is often enough to spot a beacon, an exfiltration or an unusual service."
    },
    "hunt-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "Linking the flow to the process (EDR), its location, signature and parent lets you qualify the beacon. Blocking or restarting come afterward, without destroying the evidence.",
      "whyWrong": {
        "d": "This would block legitimate services without qualifying the behavior.",
        "c": "Without a link to the identified process, this qualifies nothing.",
        "b": "A restart destroys memory and evidence."
      }
    },
    "hunt-q26": {
      "type": "single",
      "correct": "b",
      "explanation": "An anomaly only has meaning relative to what is normal: sign-in hours, volumes, usual processes. The baseline serves as the reference for behavioral analysis.",
      "whyWrong": {
        "a": "That is the role of an inventory or a vulnerability scanner.",
        "c": "This describes an alert history, not normal behavior.",
        "d": "This belongs to business continuity."
      }
    },
    "hunt-q27": {
      "type": "truefalse",
      "correct": false,
      "explanation": "An administration tool used once a year also stands out. Stacking points to where to look; it is the investigation that concludes."
    },
    "hunt-q28": {
      "type": "single",
      "correct": "b",
      "explanation": "Event 4698 signals the creation of a scheduled task, a common persistence mechanism. 4624 is a logon, 4720 an account creation and 4732 an addition to a local group.",
      "whyWrong": {
        "c": "4624 signals a successful logon.",
        "d": "4720 signals an account creation.",
        "a": "4732 signals an addition to a local group."
      }
    },
    "hunt-q29": {
      "type": "single",
      "correct": "d",
      "explanation": "Type 10 matches a remote interactive session (remote desktop). Type 2 is a local sign-in, type 3 a network connection.",
      "whyWrong": {
        "a": "That is type 2.",
        "b": "That is type 3.",
        "c": "That is type 5."
      }
    },
    "hunt-q30": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "An account that touches many hosts in a short time, from an unusual source and outside normal hours, departs from its baseline. A local sign-in in the morning is normal.",
      "whyWrong": {
        "b": "It is the usual behavior of a user."
      }
    },
    "hunt-q31": {
      "type": "single",
      "correct": "c",
      "explanation": "Service accounts run in the background; an interactive session indicates use by a person, possibly with stolen credentials. We compare with the account’s baseline.",
      "whyWrong": {
        "a": "Remote desktop is legitimate for many administration uses.",
        "b": "Service accounts have a password (or a managed secret).",
        "d": "This is false: it is not their normal use."
      }
    },
    "hunt-q32": {
      "type": "short",
      "accepted": [
        "living off the land",
        "lotl",
        "lolbin",
        "lolbins",
        "lolbas",
        "legitimate tools"
      ],
      "explanation": "“Living off the land” (LOLBins) avoids introducing new tools, hence detectable hashes. It is hunted through behavior: parent process, arguments, frequency."
    },
    "hunt-q33": {
      "type": "single",
      "correct": "a",
      "explanation": "LSASS holds authentication secrets. Access to its memory by an unexpected process is a classic indicator of credential theft, visible through Sysmon (process access) or the EDR.",
      "whyWrong": {
        "c": "An update does not read LSASS memory.",
        "b": "A file backup does not need LSASS.",
        "d": "A firewall does not open LSASS."
      }
    },
    "hunt-q34": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Arguments distinguish a legitimate use from a malicious use of the same program (for example encoded PowerShell). Enabling command-line auditing is a logging priority."
    },
    "hunt-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "We hunt where detection is weakest and where intelligence points to a credible threat. A coverage map (ATT&CK Navigator) helps spot these gaps.",
      "whyWrong": {
        "a": "Publicity does not measure the real threat.",
        "d": "The choice follows risk, not a tool preference.",
        "c": "Chance does not target the gaps."
      }
    },
    "hunt-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "Dwell time measures how long an attacker stays in the system before being detected. Hunting and better detection aim to reduce it, therefore limiting the impact.",
      "whyWrong": {
        "d": "It is a logging parameter.",
        "b": "It is a ticket-management indicator.",
        "a": "The duration of a user session is not dwell time."
      }
    },
    "hunt-q37": {
      "type": "short",
      "accepted": [
        "attack navigator",
        "att&ck navigator",
        "navigator",
        "mitre attack navigator",
        "mitre att&ck navigator"
      ],
      "explanation": "ATT&CK Navigator colors techniques according to detection coverage: weak zones are spotted to choose the next hunt or the next rule."
    },
    "hunt-q38": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Hunting produces detections, closes logging gaps, discovers incidents and reduces dwell time. The pace of closing alerts measures triage, not hunting.",
      "whyWrong": {
        "d": "It is a triage indicator."
      }
    },
    "hunt-q39": {
      "type": "single",
      "correct": "d",
      "explanation": "A hunt has two products: an incident or a documented absence, and a durable detection. A tested rule that will detect the technique next time is a real gain.",
      "whyWrong": {
        "b": "The absence of an incident is not a failure.",
        "a": "The value does not depend on opening an incident.",
        "c": "Archiving avoids repeating the same hunt."
      }
    },
    "hunt-q40": {
      "type": "single",
      "correct": "a",
      "explanation": "A recent rule can produce false positives: automatically isolating healthy machines is costly. We test on history, measure the noise and keep a human validation until the rule has proven itself.",
      "whyWrong": {
        "c": "Excluding servers creates a blind spot.",
        "d": "Disabling the SIEM removes visibility.",
        "b": "Without control, a mistake isolates healthy machines."
      }
    }
  },
};
