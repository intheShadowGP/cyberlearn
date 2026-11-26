// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "m-gouvernance-initiation",
  questions: {
    "mgi-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "Governance means deciding, in a reasoned way, where to invest and which rules to apply, then checking over time that the decisions are applied.",
      "whyWrong": {
        "a": "Tools are not enough without decisions.",
        "d": "It concerns the whole organization.",
        "c": "That is not an objective."
      }
    },
    "mgi-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Confidentiality reserves information for authorized people, integrity guarantees it is not altered, availability that it is accessible when needed.",
      "whyWrong": {
        "d": "Those are not security objectives.",
        "b": "Those are tools, not objectives.",
        "c": "Those are not the three objectives."
      }
    },
    "mgi-q3": {
      "type": "single",
      "correct": "c",
      "explanation": "A service that can no longer be used puts availability at stake, even if the data remains intact and secret.",
      "whyWrong": {
        "b": "Nothing was disclosed.",
        "a": "Nothing was modified.",
        "d": "It is not the objective affected."
      }
    },
    "mgi-q4": {
      "type": "single",
      "correct": "d",
      "explanation": "Integrity guarantees that information has not been modified without authorization. A falsified invoice is an example.",
      "whyWrong": {
        "b": "The document remains accessible.",
        "c": "Nothing was disclosed.",
        "a": "It is not a security objective."
      }
    },
    "mgi-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Information exists in all forms: file, paper, speech. A file forgotten on a train or a conversation overheard in a café are also risks."
    },
    "mgi-q6": {
      "type": "short",
      "accepted": [
        "confidentiality",
        "the confidentiality"
      ],
      "explanation": "Confidentiality is one of the three objectives of information security, with integrity and availability."
    },
    "mgi-q7": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Protecting files, controlling access to the premises and backing up contribute to information security. The color of a site does not.",
      "whyWrong": {
        "c": "This aesthetic choice does not affect security."
      }
    },
    "mgi-q8": {
      "type": "single",
      "correct": "b",
      "explanation": "A risk is the possibility that an event occurs and causes damage. It is described by its likelihood and severity.",
      "whyWrong": {
        "a": "An installed virus is already an incident.",
        "d": "It is a nuisance, not a risk in itself.",
        "c": "Unrelated."
      }
    },
    "mgi-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "A vulnerability is a weakness (unpatched software, weak password, missing procedure) that a threat can exploit.",
      "whyWrong": {
        "b": "That is a threat.",
        "d": "That is a protective measure.",
        "a": "That is a protective measure."
      }
    },
    "mgi-q10": {
      "type": "single",
      "correct": "d",
      "explanation": "Likelihood indicates how probable the scenario is, severity the extent of its consequences. Their combination gives the priority.",
      "whyWrong": {
        "b": "Those are not risk criteria.",
        "a": "Those are not risk criteria.",
        "c": "Those are not risk criteria."
      }
    },
    "mgi-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Zero risk does not exist. Risks are brought down to an acceptable level, and management formally accepts what remains."
    },
    "mgi-q12": {
      "type": "short",
      "accepted": [
        "reduce",
        "to reduce",
        "reduction"
      ],
      "explanation": "Reducing is the most common treatment: updates, strong authentication, backups. The other options are transfer, avoid and accept."
    },
    "mgi-q13": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Reducing, transferring and avoiding are assumed decisions, as is formally accepting. Ignoring a risk is not a decision.",
      "whyWrong": {
        "a": "Ignoring without a decision amounts to suffering the risk."
      }
    },
    "mgi-q14": {
      "type": "open",
      "model": "The severity depends on what the computer contains (number of customers, sensitivity of the data, notification obligation) and on its protection: an encrypted disk and a robust password make reading almost impossible and the severity low; an unencrypted disk with customer files in clear makes it high. The likelihood depends on travel and habits. Measures: systematically encrypt disks, limit locally stored data in favor of a secure space, enable remote wipe, require strong authentication, and provide for an immediate loss-reporting procedure so as to warn the security manager and assess notification to the CNIL.",
      "criteria": [
        "The severity is linked to the nature of the data and its protection.",
        "Disk encryption is mentioned.",
        "At least three concrete measures are proposed.",
        "Immediate reporting of the loss is mentioned."
      ],
      "explanation": "The same incident is very serious or almost harmless depending on whether the data was encrypted."
    },
    "mgi-q15": {
      "type": "single",
      "correct": "a",
      "explanation": "The charter informs everyone of what is allowed, forbidden and expected: use of resources, passwords, incident reporting.",
      "whyWrong": {
        "c": "It replaces no tool.",
        "d": "Unrelated.",
        "b": "It encrypts nothing."
      }
    },
    "mgi-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "Management sets the framework, the security team steers it, but each person contributes: passwords, reporting, respect of the rules.",
      "whyWrong": {
        "a": "It cannot do everything alone.",
        "b": "Management cannot carry it all alone.",
        "c": "Roles are defined."
      }
    },
    "mgi-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "A rule that is too complicated or unrealistic gets bypassed. It must be clear, justified and feasible in day-to-day work.",
      "whyWrong": {
        "d": "That is not the goal.",
        "b": "That is not the goal.",
        "a": "That is not the goal."
      }
    },
    "mgi-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "They define and enforce the policy, track risks and report to management. They rely on the technical teams without replacing them.",
      "whyWrong": {
        "a": "That is not their role.",
        "d": "That is not their role.",
        "c": "That is not their role."
      }
    },
    "mgi-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "If management exempts itself, teams judge the rule optional. The example set by leaders is decisive."
    },
    "mgi-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "A personal password, reporting and locking the workstation are basic rules. Lending a badge removes the traceability of access.",
      "whyWrong": {
        "c": "A badge is personal: lending it distorts traceability."
      }
    },
    "mgi-q21": {
      "type": "short",
      "accepted": [
        "ciso",
        "the ciso"
      ],
      "explanation": "The CISO steers information security, advises management and tracks risks and incidents."
    },
    "mgi-q22": {
      "type": "single",
      "correct": "a",
      "explanation": "Not all data has the same value or risks. Classification links each level to rules: access, storage, encryption, destruction.",
      "whyWrong": {
        "b": "That is not the goal.",
        "d": "That is not the goal.",
        "c": "That is not the goal."
      }
    },
    "mgi-q23": {
      "type": "single",
      "correct": "c",
      "explanation": "Personal data identifies a person, directly or indirectly: name, address, phone number, online identifier.",
      "whyWrong": {
        "a": "It does not concern a person.",
        "b": "It does not concern a person.",
        "d": "It does not concern a person."
      }
    },
    "mgi-q24": {
      "type": "single",
      "correct": "d",
      "explanation": "The General Data Protection Regulation frames the collection and use of personal data and requires security measures adapted to the risk.",
      "whyWrong": {
        "a": "That is not its subject.",
        "c": "It covers all personal data.",
        "b": "That is not its subject."
      }
    },
    "mgi-q25": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The GDPR provides for notification without undue delay and, where feasible, within 72 hours at the latest, unless the breach is unlikely to result in a risk to individuals."
    },
    "mgi-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A document left in plain view can be read or copied. Printouts are collected immediately, or badge-secured printing is used."
    },
    "mgi-q27": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Encryption, limiting access and backup protect confidentiality, integrity and availability. A personal mailbox escapes all control.",
      "whyWrong": {
        "c": "It escapes the organization’s control."
      }
    },
    "mgi-q28": {
      "type": "short",
      "accepted": [
        "cnil",
        "the cnil"
      ],
      "explanation": "The CNIL (French data protection authority) receives breach notifications and oversees the application of the GDPR."
    },
    "mgi-q29": {
      "type": "single",
      "correct": "a",
      "explanation": "Phishing exploits trust and urgency to push you to click, open a file or give a password. People are the target, hence the importance of awareness.",
      "whyWrong": {
        "b": "It is not an attack.",
        "c": "It is not an attack.",
        "d": "It is not an attack."
      }
    },
    "mgi-q30": {
      "type": "single",
      "correct": "b",
      "explanation": "Urgency is a warning sign. The request is verified through another known channel (call the usual number), never through the message’s details.",
      "whyWrong": {
        "d": "That is the fraud’s trap.",
        "a": "It would give the attacker access.",
        "c": "You would spread the trap."
      }
    },
    "mgi-q31": {
      "type": "single",
      "correct": "a",
      "explanation": "Attackers’ methods change and good reflexes fade. Short, regular formats maintain vigilance.",
      "whyWrong": {
        "c": "That is not the goal.",
        "d": "The law does not forbid forgetting.",
        "b": "It complements the tools without replacing them."
      }
    },
    "mgi-q32": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Sanction pushes people to hide mistakes and delays the reaction. A blame-free reporting culture lets the incident be contained earlier."
    },
    "mgi-q33": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Urgency, an unusual sender and a sensitive request are classic signals. A logo is easily copied: it does not prove the origin.",
      "whyWrong": {
        "c": "A logo is easy to copy: it is not proof of authenticity."
      }
    },
    "mgi-q34": {
      "type": "open",
      "model": "The colleague must immediately warn the security team or support, with no shame or delay, and change their password from a safe workstation; they may also disconnect the workstation if asked. The organization must react quickly: disable or reset the account, revoke sessions, check recent activity (unusual sign-ins, email forwarding rules), look for other people who received the message, block the address or site, and keep the traces. It must avoid sanctioning the person who reports, to encourage reporting, and draw a lesson: awareness, multi-factor authentication, filtering.",
      "criteria": [
        "Immediate reporting by the colleague is required.",
        "Resetting the password and sessions is mentioned.",
        "Checking activity and looking for other victims are mentioned.",
        "The absence of sanction and a lesson learned are mentioned."
      ],
      "explanation": "The speed of reporting and the organization’s response determine the extent of the damage."
    },
    "mgi-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "Quick reporting makes it possible to contain the attack. Nothing is deleted, as it serves as evidence.",
      "whyWrong": {
        "c": "Alarms are there to detect.",
        "a": "It would destroy evidence.",
        "b": "Waiting worsens the impact."
      }
    },
    "mgi-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "A disconnected copy cannot be encrypted or deleted by ransomware that has reached the network: it allows recovery without paying.",
      "whyWrong": {
        "d": "Unrelated.",
        "c": "Unrelated.",
        "a": "Unrelated."
      }
    },
    "mgi-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "Logs, messages and copies make it possible to identify the cause, the extent and the data affected, and to learn lessons.",
      "whyWrong": {
        "a": "That is not the goal.",
        "b": "That is not the goal.",
        "d": "That is not the goal."
      }
    },
    "mgi-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A tabletop exercise reveals missing contacts, unclear decisions and unrealistic deadlines with no risk to the business."
    },
    "mgi-q39": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "You treat the cause, inform whoever must be informed and improve practices. Forgetting the incident guarantees it will happen again.",
      "whyWrong": {
        "b": "Without lessons, the incident will happen again."
      }
    },
    "mgi-q40": {
      "type": "short",
      "accepted": [
        "bcp",
        "the bcp"
      ],
      "explanation": "The business continuity plan describes how to maintain essential activities during an incident, often in degraded mode."
    },
    "mgi-q41": {
      "type": "single",
      "correct": "c",
      "explanation": "The level is the product of the two scores: 3 × 4 = 12. It is used to rank risks and decide the response (reduce, avoid, transfer, accept).",
      "whyWrong": {
        "d": "7 is the sum of the two scores, not their product.",
        "a": "16 would be the maximum, with 4 × 4.",
        "b": "The level is not 1: both scores are far higher."
      }
    },
    "mgi-q42": {
      "type": "single",
      "correct": "b",
      "explanation": "The GDPR provides for notification within 72 hours of becoming aware of the breach, when it presents a risk to individuals.",
      "whyWrong": {
        "a": "The deadline is 72 hours, running from awareness of the breach.",
        "d": "Waiting for the incident to close far exceeds the deadline.",
        "c": "A precise deadline is indeed set by the regulation."
      }
    },
    "mgi-q43": {
      "type": "short",
      "accepted": [
        "transfer",
        "to transfer"
      ],
      "explanation": "Transferring a risk means shifting all or part of its consequences to a third party (insurance, provider); overall responsibility stays with the organization."
    }
  },
};
