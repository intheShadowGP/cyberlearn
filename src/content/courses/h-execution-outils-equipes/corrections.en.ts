// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "h-execution-outils-equipes",
  questions: {
    "heo-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "Exploitation is only carried out on a scope authorized in writing (contract, rules of engagement) or on training targets designed for it. Acting elsewhere is illegal and dangerous for production.",
      "whyWrong": {
        "b": "A reachable system is not an authorized system.",
        "d": "Testing a competitor is illegal.",
        "a": "Without authorization, access is an offense."
      }
    },
    "heo-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "An Active Directory test looks for the paths leading from an ordinary account to domain administration (inherited rights, delegations, exposed service accounts); the defensive goal is to close them before an attacker finds them."
    },
    "heo-q3": {
      "type": "single",
      "correct": "b",
      "explanation": "An interception proxy lets you observe and modify requests to check that the server does not trust the client’s data (access control, validation). The defensive lesson: every check must be redone on the server side.",
      "whyWrong": {
        "d": "A proxy does not encrypt a disk.",
        "a": "Assigning addresses is DHCP’s role.",
        "c": "It does not replace DNS."
      }
    },
    "heo-q4": {
      "type": "single",
      "correct": "a",
      "explanation": "Parameterized queries separate the SQL code from the data: the user’s input can no longer be interpreted as code, which removes the injection (see module F).",
      "whyWrong": {
        "c": "The password plays no part in the injection.",
        "d": "Changing port fixes nothing.",
        "b": "Disabling HTTPS degrades security."
      }
    },
    "heo-q5": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Burp Suite and ZAP (proxies), Gobuster and FFUF (content discovery), Nikto (web configuration) are web testing tools.",
      "whyWrong": {
        "c": "An office spreadsheet is not a penetration testing tool."
      }
    },
    "heo-q6": {
      "type": "single",
      "correct": "d",
      "explanation": "A framework such as Metasploit’s modules target known vulnerabilities: on an up-to-date system, the corresponding patches are applied and these modules no longer apply. Hence the priority of patch management.",
      "whyWrong": {
        "a": "Network speed is not concerned.",
        "c": "Updates do not change passwords.",
        "b": "An update does not disable encryption."
      }
    },
    "heo-q7": {
      "type": "single",
      "correct": "d",
      "explanation": "Limiting the number of attempts, temporary lockout and MFA make ineffective a tool that relies on many authentication attempts.",
      "whyWrong": {
        "c": "Screen size has no effect.",
        "b": "Removing logging removes detection.",
        "a": "Opening ports worsens exposure."
      }
    },
    "heo-q8": {
      "type": "truefalse",
      "correct": true,
      "explanation": "In an authorized test, the password audit measures strength from hashes legally obtained during the mission, in order to impose better practices. It is not account theft."
    },
    "heo-q9": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Slow, salted hashing, strong policies and MFA greatly reduce the effectiveness of offline cracking.",
      "whyWrong": {
        "a": "Storing passwords in clear is the exact opposite: it removes all protection."
      }
    },
    "heo-q10": {
      "type": "single",
      "correct": "c",
      "explanation": "An AD test looks for the escalation paths toward domain administration (inherited rights, delegations, exposed service accounts). The defensive goal is to identify them in order to close them before an attacker finds them.",
      "whyWrong": {
        "a": "Network speed is not the object.",
        "b": "Disk size is not concerned.",
        "d": "The interface has no relation."
      }
    },
    "heo-q11": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Tiered model, least privilege and LAPS for AD; WPA2/WPA3-Enterprise, 802.1X and rogue access point detection for Wi-Fi.",
      "whyWrong": {
        "c": "Publicly sharing the company’s Wi-Fi password is a security mistake, not hardening."
      }
    },
    "heo-q12": {
      "type": "single",
      "correct": "a",
      "explanation": "Segmentation, least privilege, EDR detection and logging limit what an access obtained can reach and speed up detection. The other options degrade security.",
      "whyWrong": {
        "b": "Brightness has no effect.",
        "d": "Disabling the antivirus degrades security.",
        "c": "Giving everyone administrator rights worsens the impact."
      }
    },
    "heo-q13": {
      "type": "single",
      "correct": "b",
      "explanation": "Micro-segmentation and inter-zone filtering prevent an access on one segment from giving access to the others: it is the direct countermeasure of pivoting.",
      "whyWrong": {
        "a": "A longer password does not partition the network.",
        "d": "A screen saver has no effect on the network.",
        "c": "Deleting logs removes detection."
      }
    },
    "heo-q14": {
      "type": "single",
      "correct": "b",
      "explanation": "The Red Team simulates a realistic adversary to test detection and response; the Purple Team has red and blue collaborate to replay the offensive actions and directly improve detection.",
      "whyWrong": {
        "d": "The Red Team is not limited to Wi-Fi.",
        "a": "The Purple Team is not limited to reconnaissance.",
        "c": "The two approaches are distinct."
      }
    },
    "heo-q15": {
      "type": "open",
      "model": "A penetration test only has defensive value through what it makes it possible to fix and detect. “Having got in” merely demonstrates a risk; what matters is the list of vulnerabilities to fix (with their severity) and the detections to add to spot the same techniques in future. The Purple Team approach serves exactly this: instead of a report handed over at the end, the offensive (red) and defensive (blue) teams work together, replay each technique used, check whether the SOC detects it, and create or adjust the rules until it is detected. Each offensive action thus becomes a measurable improvement of the defense, tied to a framework such as MITRE ATT&CK to follow coverage.",
      "criteria": [
        "The value is placed in the fixes and detections, not in the compromise.",
        "The Purple Team approach (red/blue collaboration, replay) is explained.",
        "The link with improving detection is made."
      ],
      "explanation": "This is the defensive meaning of the pentest: it serves to strengthen, not to prove that you know how to get in."
    },
    "heo-q16": {
      "type": "open",
      "model": "Knowing the offensive tools is useful for defending because each tool matches a precise weakness, and therefore a precise countermeasure. An interception proxy is a reminder that everything must be rechecked on the server side; sqlmap, that parameterized queries are needed; Hydra, that attempts must be limited and MFA imposed; John the Ripper or Hashcat, that slow, salted hashing and strong passwords are needed; Metasploit and Nuclei, that patches must be applied and the exposed surface reduced. Knowing what these tools look for makes it possible to prioritize defenses, understand test reports and check that the fixes hold. No attacking of third-party systems is needed for this: knowledge of the mechanism is enough to design the defense.",
      "criteria": [
        "The principle “each tool has its defense” is stated.",
        "At least two tool → defense examples are given.",
        "The defensive use (prioritizing, understanding reports, checking fixes) is mentioned."
      ],
      "explanation": "Understanding the offensive in order to defend better is the common thread of the whole module, within a strictly authorized framework."
    },
    "heo-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "The time-stamped log of actions and source addresses lets the customer and the SOC separate what belongs to the test from what belongs to a simultaneous attack, and protects the tester in case of dispute.",
      "whyWrong": {
        "a": "The log is not meant to lengthen the mission.",
        "c": "It feeds the report, it does not replace it.",
        "b": "It documents the traces, it does not erase them."
      }
    },
    "heo-q18": {
      "type": "short",
      "accepted": [
        "ZAP",
        "zap",
        "OWASP ZAP"
      ],
      "explanation": "OWASP ZAP (Zed Attack Proxy) is an open-source interception proxy and scanner. Burp Suite is its most widespread commercial equivalent."
    },
    "heo-q19": {
      "type": "truefalse",
      "correct": false,
      "explanation": "These tools simply try a list of paths and report those that respond. They reveal what is accessible by guessing (backups, administration pages); the defense is to leave nothing sensitive accessible without control."
    },
    "heo-q20": {
      "type": "single",
      "correct": "a",
      "explanation": "A slow function multiplies the cost of each attempt and the salt makes precomputed tables useless: offline cracking becomes much longer. It is neither encryption nor account lockout.",
      "whyWrong": {
        "b": "Hashing is not encryption.",
        "d": "It does not prevent copying the file.",
        "c": "Lockout concerns online authentication."
      }
    },
    "heo-q21": {
      "type": "short",
      "accepted": [
        "Hashcat",
        "hashcat"
      ],
      "explanation": "Hashcat uses graphics processors to test hashes very quickly. This is why fast hashing (MD5, plain SHA-1) protects passwords poorly."
    },
    "heo-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "802.1X combined with WPA2/WPA3-Enterprise authenticates each user or device (certificate, credentials), which makes it possible to revoke an individual access. MAC filtering and SSID hiding are not protections.",
      "whyWrong": {
        "d": "A shared password identifies everyone in the same way.",
        "a": "MAC addresses can be forged.",
        "b": "A hidden SSID can still be discovered."
      }
    },
    "heo-q23": {
      "type": "single",
      "correct": "d",
      "explanation": "A service account often has extensive privileges, an old, sometimes weak password, and is not monitored like a human account. Managed accounts, long passwords and rotation are used.",
      "whyWrong": {
        "c": "A service account is active.",
        "b": "Their sign-ins are logged.",
        "a": "They do not belong to guests."
      }
    },
    "heo-q24": {
      "type": "truefalse",
      "correct": true,
      "explanation": "In the tier model, an account that administers the domain controllers never signs in on an ordinary workstation: a credential theft on a workstation does not lead to domain administration."
    },
    "heo-q25": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Individual authentication, detection of rogue access points and separating the guest network reduce the risk. A single password allows neither revoking an access nor knowing who connects.",
      "whyWrong": {
        "d": "A shared password spreads without control and does not allow individual revocation."
      }
    },
    "heo-q26": {
      "type": "single",
      "correct": "b",
      "explanation": "The rule is verified by replaying the technique it is supposed to spot, in an authorized framework: if the alert appears, the detection is validated; otherwise, it is adjusted then replayed.",
      "whyWrong": {
        "d": "A rule never tested is not validated.",
        "a": "Waiting for a real attack is too late.",
        "c": "Disabling the rule proves nothing."
      }
    },
    "heo-q27": {
      "type": "single",
      "correct": "a",
      "explanation": "ATT&CK provides a common language: each replayed technique is tied to its identifier, which makes it possible to map what is detected and to compare exercises over time.",
      "whyWrong": {
        "d": "It does not replace the log of actions.",
        "b": "It does not measure a throughput.",
        "c": "It encrypts nothing."
      }
    },
    "heo-q28": {
      "type": "short",
      "accepted": [
        "EDR",
        "edr"
      ],
      "explanation": "EDR (Endpoint Detection and Response) observes the activity of workstations (processes, files, network), detects suspicious behavior and lets you contain a machine remotely."
    },
    "heo-q29": {
      "type": "single",
      "correct": "c",
      "explanation": "A storage container (bucket) open to the public exposes its content to anyone. The other three situations are protection practices.",
      "whyWrong": {
        "d": "Encryption with a customer key is a protection.",
        "b": "A backup in another region strengthens resilience.",
        "a": "MFA protects an administration access."
      }
    },
    "heo-q30": {
      "type": "single",
      "correct": "a",
      "explanation": "In the cloud, identities are the new perimeter: an exposed account or key with broad rights allows reading, modifying or deleting many resources. Least privilege limits the impact.",
      "whyWrong": {
        "d": "Rights do not influence speed.",
        "c": "They do not hinder backups.",
        "b": "They do not affect the strength of encryption."
      }
    },
    "heo-q31": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The image contains a system and libraries that may have known flaws, exploitable from inside the container. Minimal images are built, scanned and rebuilt regularly."
    },
    "heo-q32": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Authorization, rate limiting and authentication are basic protections. Returning all properties exposes unneeded data (excessive exposure).",
      "whyWrong": {
        "a": "Returning all properties is a frequent API defect."
      }
    },
    "heo-q33": {
      "type": "short",
      "accepted": [
        "CSPM",
        "cspm"
      ],
      "explanation": "CSPM (Cloud Security Posture Management) spots configuration deviations (public storage, excessive rights, missing logging) and alerts continuously."
    },
    "heo-q34": {
      "type": "single",
      "correct": "d",
      "explanation": "Each provider specifies what is allowed and what is not (denial of service, shared services, notification). These rules are carried into the RoE, in addition to the customer’s agreement.",
      "whyWrong": {
        "c": "The system used is not a condition.",
        "a": "Licenses do not amount to authorization.",
        "b": "An empty environment is not required to be authorized."
      }
    },
    "heo-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "If ten techniques are replayed and the SOC detects six, the rate is 60%. It measures the real coverage of detection and directs the efforts.",
      "whyWrong": {
        "c": "The alert volume is not a detection rate.",
        "a": "The exercise’s duration says nothing about detection.",
        "d": "The number of workstations is a scope size."
      }
    },
    "heo-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "The sooner the alert follows the action, the faster the response can be. The detection delay is followed over the exercises together with the response delay (alert → containment).",
      "whyWrong": {
        "b": "The number of rules is an activity.",
        "d": "Tool startup does not indicate detection.",
        "a": "The number of techniques in the framework is not a delay."
      }
    },
    "heo-q37": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Replaying the original test confirms that the fix is effective and that it did not introduce another defect. A finding is only closed after retest."
    },
    "heo-q38": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "The report ties each technique to its identifier, indicates what was detected and sets tracked actions. Retrieved secrets do not belong in it.",
      "whyWrong": {
        "c": "Clear-text passwords in a report create a new leak."
      }
    },
    "heo-q39": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The goal is to reveal gaps then fill them: an exercise where everything is detected on the first try teaches little. Success is measured by the improvement of the metrics from one exercise to the next."
    },
    "heo-q40": {
      "type": "open",
      "model": "Goal: check that the SOC detects and has the stages of a ransomware attack contained in an authorized environment, without touching real data. Flow: choose the scenario’s techniques (initial access through a test booby-trapped document, execution of an interpreter, simulated credential theft, lateral movement toward a test server, attempted deletion of dummy backups, encryption of a dummy folder), tie them to ATT&CK, replay them one by one with the blue team, note whether the alert appears and create or adjust the rule if not. Metrics: detection rate, detection and response delays, scenario coverage. Follow-up: corrective actions with owners (rules, hardening, isolated and immutable backups, least privilege, segmentation), retest within 30 days and a report to management showing the evolution of the metrics.",
      "criteria": [
        "A scenario broken down into replayable techniques within an authorized framework is proposed.",
        "Metrics (rate, delays, coverage) are defined.",
        "The follow-up (actions, owners, retest, report) is described."
      ],
      "explanation": "The strength of a Purple Team exercise is turning each gap into a measurable, tracked action."
    }
  },
};
