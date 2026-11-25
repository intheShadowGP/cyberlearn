// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "i-soc-initiation",
  questions: {
    "isi-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "The SOC (Security Operations Center) monitors the information system, detects abnormal behavior, qualifies alerts and coordinates incident response.",
      "whyWrong": {
        "a": "Application development belongs to other teams.",
        "c": "Purchasing is not part of a SOC’s missions.",
        "d": "Office-software training is not a detection mission."
      }
    },
    "isi-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "L1 reads alerts, qualifies them, closes them with justification or escalates them to the next level for deeper investigation.",
      "whyWrong": {
        "d": "Network architecture belongs to other roles.",
        "b": "It is not their role.",
        "c": "Level 3 provides expertise that L1 does not replace."
      }
    },
    "isi-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The blue team defends (monitoring, detection, response), whereas the red team plays the attacker during an exercise. When they collaborate, we speak of a purple team."
    },
    "isi-q4": {
      "type": "short",
      "accepted": [
        "red",
        "red team",
        "the red team"
      ],
      "explanation": "The red team simulates an attacker to test the defenses, with authorization. The blue team defends; the purple team brings the two together to improve detection."
    },
    "isi-q5": {
      "type": "single",
      "correct": "c",
      "explanation": "The earlier the intrusion is detected, the less time the attacker has to extend access and do harm. The SOC exists to reduce this delay.",
      "whyWrong": {
        "d": "Backup frequency matters for recovery, not for detection.",
        "a": "Unrelated to security.",
        "b": "Meetings do not measure detection."
      }
    },
    "isi-q6": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "A SOC monitors, detects, responds and then improves its detections. Choosing a graphic interface is not part of it.",
      "whyWrong": {
        "c": "Application design is not a security mission."
      }
    },
    "isi-q7": {
      "type": "single",
      "correct": "d",
      "explanation": "L2 picks up the escalated alerts and runs a fuller investigation: affected scope, timeline, accounts and machines involved.",
      "whyWrong": {
        "b": "An alert is not closed without being examined.",
        "c": "Installing workstations belongs to support.",
        "a": "The charter is written by other functions."
      }
    },
    "isi-q8": {
      "type": "single",
      "correct": "d",
      "explanation": "A log records events: sign-in, authentication failure, file created. It is used to detect and to understand what happened.",
      "whyWrong": {
        "a": "A log does not contain a generated password.",
        "b": "A log is not malicious software.",
        "c": "A disk copy is an image, not a log."
      }
    },
    "isi-q9": {
      "type": "single",
      "correct": "b",
      "explanation": "The address after “from” is the source of the attempt; “admin” is the targeted account. The server is the host that recorded the line.",
      "whyWrong": {
        "c": "The admin account is the target, not the source.",
        "d": "The server is where the attempt arrives.",
        "a": "The log does not say that the password was forgotten."
      }
    },
    "isi-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Without a reliable time, events cannot be ordered nor cross-checked across systems. Clocks must be synchronized."
    },
    "isi-q11": {
      "type": "single",
      "correct": "c",
      "explanation": "An attacker who takes control of a machine can erase its logs. A copy sent elsewhere stays intact and serves the investigation.",
      "whyWrong": {
        "b": "Sending does not speed up the machine.",
        "a": "It does not change the number of accounts.",
        "d": "Sending exists precisely so they can be analyzed."
      }
    },
    "isi-q12": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Firewalls, directories, servers, applications, email and workstations produce logs. A wallpaper does not.",
      "whyWrong": {
        "a": "A wallpaper records no events."
      }
    },
    "isi-q13": {
      "type": "short",
      "accepted": [
        "ntp",
        "the ntp",
        "network time protocol"
      ],
      "explanation": "NTP (Network Time Protocol) synchronizes clocks. Consistent timestamps are essential to cross-reference logs and rebuild a timeline."
    },
    "isi-q14": {
      "type": "single",
      "correct": "a",
      "explanation": "This sequence may indicate password guessing that succeeded. Alone it proves nothing, but it justifies examining the context and what happened afterward.",
      "whyWrong": {
        "d": "An absent-minded human does not produce such a fast sequence from outside.",
        "c": "Nothing points to a clock problem.",
        "b": "The absence of deletion does not rule out an intrusion."
      }
    },
    "isi-q15": {
      "type": "single",
      "correct": "c",
      "explanation": "The SIEM centralizes, normalizes, stores and correlates logs, then produces alerts according to rules.",
      "whyWrong": {
        "b": "A router forwards traffic; it does not correlate logs.",
        "a": "Unrelated to detection.",
        "d": "A mail reader does not produce security alerts."
      }
    },
    "isi-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "An EDR is an agent installed on workstations and servers: it finely observes activity and allows remote action, for example isolating a machine.",
      "whyWrong": {
        "c": "The firewall observes the network, not the endpoint.",
        "a": "Mailboxes do not host an EDR.",
        "b": "It is not a terminal to protect with an EDR."
      }
    },
    "isi-q17": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Remote isolation is a classic EDR capability: it cuts the workstation’s communications while keeping the link to the console, which preserves evidence."
    },
    "isi-q18": {
      "type": "short",
      "accepted": [
        "siem",
        "the siem"
      ],
      "explanation": "SIEM: Security Information and Event Management. It collects, normalizes, stores and correlates logs, then generates alerts."
    },
    "isi-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "A rule describes in advance what deserves an alert, for example several failed sign-ins in a short time. It balances useless alerts and missed attacks.",
      "whyWrong": {
        "a": "A technical rule is not imposed on attackers.",
        "d": "A password is not a rule.",
        "c": "A backup does not raise alerts."
      }
    },
    "isi-q20": {
      "type": "single",
      "correct": "a",
      "explanation": "The SOAR chains actions on other tools: enriching an alert, opening a ticket, blocking an address. It frees analysis time without replacing the analysts.",
      "whyWrong": {
        "c": "It is not a password vault.",
        "d": "High-impact decisions remain human.",
        "b": "It is not an encryption tool."
      }
    },
    "isi-q21": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A tool only detects what it receives and what its rules can recognize. The absence of an alert may come from an uncollected source or a missing rule."
    },
    "isi-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "An alert is a signal to qualify. Once qualified as real and requiring a response, it becomes an incident.",
      "whyWrong": {
        "a": "The two terms designate different stages.",
        "b": "Severity depends on the case, not on the term.",
        "c": "An incident corresponds to a confirmed alert."
      }
    },
    "isi-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "A false negative is an undetected malicious activity: it is the most dangerous case, because we do not know it exists.",
      "whyWrong": {
        "c": "A false positive is an alert on legitimate activity.",
        "b": "A true negative is legitimate activity with no alert.",
        "d": "A true positive is a detected attack."
      }
    },
    "isi-q24": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A documented decision can be reviewed by a colleague, helps tune rules and lets the file be resumed if the alert turns out to be linked to an incident."
    },
    "isi-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "The trip is impossible in that time: the credentials may have been stolen. We escalate, contact the person by another means and close the sessions.",
      "whyWrong": {
        "b": "Nothing allows concluding a certain false positive.",
        "d": "A broken screen does not explain a distant sign-in.",
        "a": "A time zone does not physically move the connection."
      }
    },
    "isi-q26": {
      "type": "single",
      "correct": "b",
      "explanation": "We start by understanding what the alert says, then enrich and look around before concluding. Closing or isolating without understanding is risky.",
      "whyWrong": {
        "c": "We do not close without examination.",
        "d": "Such a heavy measure is decided after analysis.",
        "a": "External communication is not a qualification step."
      }
    },
    "isi-q27": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Knowing who, on which machine and from where the activity comes helps decide. A desktop background says nothing about security.",
      "whyWrong": {
        "d": "This information has no link to the alert."
      }
    },
    "isi-q28": {
      "type": "single",
      "correct": "d",
      "explanation": "A noisy rule tires analysts, but it may protect against real threats. We adjust the threshold or add a justified, dated exclusion.",
      "whyWrong": {
        "b": "Deleting creates a blind spot.",
        "a": "Ignoring alerts makes the real ones get missed.",
        "c": "Disabling the SIEM removes all visibility."
      }
    },
    "isi-q29": {
      "type": "single",
      "correct": "a",
      "explanation": "Containment stops the spread: network isolation, disabling accounts, blocking flows.",
      "whyWrong": {
        "b": "Preparation takes place before the incident.",
        "d": "Lessons learned come at the end.",
        "c": "Recovery restores service after containment and eradication."
      }
    },
    "isi-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "Isolation stops the spread while keeping traces in memory. Powering off or restarting may erase them; paying is never a first reaction.",
      "whyWrong": {
        "b": "Powering off then on may erase evidence.",
        "d": "Plugging in a device may worsen the situation.",
        "a": "Paying guarantees nothing and is not decided in the heat of the moment."
      }
    },
    "isi-q31": {
      "type": "truefalse",
      "correct": false,
      "explanation": "It is isolated from the network to preserve memory, which holds valuable traces. Immediate power-off erases them."
    },
    "isi-q32": {
      "type": "short",
      "accepted": [
        "lessons learned",
        "lessons-learned",
        "the lessons learned",
        "post-incident review",
        "post-mortem",
        "retrospective"
      ],
      "explanation": "Lessons learned identify the causes, create new detections and update procedures: they turn an incident into a lasting improvement."
    },
    "isi-q33": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Recording, warning and isolating preserve evidence and start the response. Paying immediately is neither a security reflex nor a guarantee.",
      "whyWrong": {
        "c": "Payment is not decided in the heat of the moment and guarantees no recovery."
      }
    },
    "isi-q34": {
      "type": "open",
      "model": "I ask them to stop using the computer, to unplug it from the network (cable, Wi-Fi) without powering it off, to pay nothing and to note the time and the message displayed (ideally a photo of the screen). I plan to warn the security officer or the SOC without waiting, by phone if email may be affected. Then I record the facts and times, check whether other workstations or shares are involved, protect the offline backups and follow the incident-response procedure.",
      "criteria": [
        "Isolating the workstation without powering it off is indicated.",
        "Warning security or the SOC is mentioned.",
        "Note-taking or evidence collection is planned."
      ],
      "explanation": "The first reflexes matter: isolate, pay nothing, note, warn, then follow the procedure."
    },
    "isi-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "Logs and workstations contain sensitive information about people and the company. It is shared only within the framework of the investigation.",
      "whyWrong": {
        "d": "Publishing the logs would expose sensitive information.",
        "c": "We do not keep passwords we come across.",
        "a": "Sending to third parties breaks confidentiality."
      }
    },
    "isi-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "The analyst limits access and consultation to what the mission justifies. This respects people’s privacy.",
      "whyWrong": {
        "b": "That would be disproportionate.",
        "a": "Duration depends on the investigation, not on a fixed rule.",
        "c": "The choice of logs follows the mission."
      }
    },
    "isi-q37": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Reporting, tracing and staying honest are part of professional ethics. Retaliating against a third party is illegal and outside the scope of a defense mission.",
      "whyWrong": {
        "d": "Retaliation is forbidden: we defend, we do not take justice into our own hands."
      }
    },
    "isi-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Article 33 of the GDPR requires notification to the supervisory authority within 72 hours of becoming aware of the breach, unless it is unlikely to result in a risk to people."
    },
    "isi-q39": {
      "type": "short",
      "accepted": [
        "gdpr",
        "the gdpr",
        "rgpd",
        "general data protection regulation"
      ],
      "explanation": "The GDPR (General Data Protection Regulation) requires this notification to the supervisory authority; in France, that is the CNIL."
    },
    "isi-q40": {
      "type": "open",
      "model": "An alert is a signal: a rule judged that an event or a set of events deserved attention, but it may be a false positive. An incident is an alert qualified as real, which requires a response (containment, investigation). A confirmed compromise is an incident for which there is proof that an attacker succeeded in accessing a system or data. An alert is therefore not always an incident, and an incident is not always a compromise.",
      "criteria": [
        "The alert is defined as a signal to qualify.",
        "The incident is a qualified alert requiring a response.",
        "The confirmed compromise requires proof that the attacker succeeded."
      ],
      "explanation": "These three levels must not be confused: the alert is qualified, the incident is handled, the compromise is proven."
    }
  },
};
