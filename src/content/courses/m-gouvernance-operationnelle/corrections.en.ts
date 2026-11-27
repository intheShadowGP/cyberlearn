// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "m-gouvernance-operationnelle",
  questions: {
    "gop-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "Patching, monitoring, backup and access control all assume knowing the assets. A server missing from the inventory is neither patched nor monitored: the incident often arrives through it.",
      "whyWrong": {
        "c": "It replaces no tool.",
        "d": "Not all insurers require this inventory: the reason is to protect what you know.",
        "b": "It encrypts nothing."
      }
    },
    "gop-q2": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Owners, criticality, exposure and software make it possible to prioritize, alert the right people and match the inventory against published vulnerabilities.",
      "whyWrong": {
        "b": "This information helps no security decision."
      }
    },
    "gop-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The sensitivity of data depends on its business use: its owner (business manager) sets the classification. The IT department advises and applies the corresponding measures."
    },
    "gop-q4": {
      "type": "short",
      "accepted": [
        "shadow it",
        "shadow-it"
      ],
      "explanation": "“Shadow IT” covers the services, servers and devices used outside the IT department’s control. It escapes patching, backups and monitoring."
    },
    "gop-q31": {
      "type": "single",
      "correct": "d",
      "explanation": "A declarative inventory ages quickly. Automatic discovery (network, agents, cloud console) keeps it up to date and reveals gaps with the declarations.",
      "whyWrong": {
        "a": "It quickly becomes obsolete.",
        "b": "Too rare and declarative.",
        "c": "Produces no data."
      }
    },
    "gop-q32": {
      "type": "single",
      "correct": "b",
      "explanation": "Payroll data is personal and financial data: it falls under the confidential level, with need-to-know access and encryption.",
      "whyWrong": {
        "c": "It cannot be published.",
        "a": "The internal level is insufficient.",
        "d": "All data is classified."
      }
    },
    "gop-q40": {
      "type": "short",
      "accepted": [
        "nist",
        "the nist"
      ],
      "explanation": "NIST publishes the SP 800 series. SP 800-53 is a detailed catalog of security and privacy controls."
    },
    "gop-q5": {
      "type": "single",
      "correct": "c",
      "explanation": "The CVSS score measures technical severity, not the probability of attack. Confirmed exploitation on an exposed asset makes the attack very likely: it comes first.",
      "whyWrong": {
        "d": "That order has no risk meaning.",
        "a": "Too long for an exploited flaw.",
        "b": "The context distinguishes them."
      }
    },
    "gop-q6": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "The cycle includes discovery, prioritization, treatment and verification; it starts again continuously.",
      "whyWrong": {
        "a": "Reports serve as evidence and a basis for tracking: they are kept."
      }
    },
    "gop-q7": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Accepting a risk is a business decision: the asset owner bears the consequences. It must be justified, time-limited and reviewed."
    },
    "gop-q8": {
      "type": "short",
      "accepted": [
        "kev",
        "cisa kev"
      ],
      "explanation": "CISA’s KEV (Known Exploited Vulnerabilities) catalog lists vulnerabilities whose exploitation is confirmed. It is a widely used prioritization criterion."
    },
    "gop-q33": {
      "type": "single",
      "correct": "b",
      "explanation": "CVSS describes intrinsic technical severity. Confirmed exploitation, the asset’s exposure and its criticality must be added to decide the order of treatment.",
      "whyWrong": {
        "d": "It is public.",
        "a": "It rarely changes.",
        "c": "It applies to all systems."
      }
    },
    "gop-q34": {
      "type": "truefalse",
      "correct": true,
      "explanation": "When the patch is not available or requires a shutdown, exposure is reduced (filtering, disabling a feature) and the decision is documented with a deadline for the definitive treatment."
    },
    "gop-q35": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Scans, security advisories and penetration tests complement each other. A rumor is not a verifiable source.",
      "whyWrong": {
        "d": "A rumor is not verifiable."
      }
    },
    "gop-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "The organization remains responsible toward its customers and the authorities. It must choose a provider offering guarantees, frame the processing by contract and check its compliance.",
      "whyWrong": {
        "d": "It is not transferred like that.",
        "c": "A certification is an assessment element, not a transfer of responsibility.",
        "b": "It concerns all data."
      }
    },
    "gop-q10": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Incident notification, right to audit, framing of subcontracting and reversibility are basic clauses for a provider with access to systems or data.",
      "whyWrong": {
        "d": "It is the opposite: the customer must be able to obtain security evidence."
      }
    },
    "gop-q11": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Supplier access forgotten after a contract ends is a frequent intrusion vector. Removing access and returning or destroying data are part of the exit procedure."
    },
    "gop-q12": {
      "type": "open",
      "model": "Rank each supplier by its access and role: high level for those with remote access to the information system or to sensitive data, or whose unavailability stops the business (managed-services provider, host, critical vendor); medium level for those that process internal data; low level for the others. The level determines the assessment (full questionnaire, certification evidence and audit reports for the high level; lighter questionnaire otherwise), the contract clauses required and the monitoring frequency (annual review and quarterly access review for the high level, review at renewal for the low level).",
      "criteria": [
        "Ranking criteria based on access, data or criticality are given.",
        "The effect of the level on the depth of the assessment is explained.",
        "The effect on monitoring or contract clauses is explained."
      ],
      "explanation": "Ranking concentrates effort where the risk is real, instead of sending the same questionnaire to all suppliers."
    },
    "gop-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "The right to audit, possibly by a mandated third party, makes it possible to check that security commitments are kept.",
      "whyWrong": {
        "d": "It checks nothing.",
        "b": "It checks nothing.",
        "a": "It checks nothing."
      }
    },
    "gop-q37": {
      "type": "single",
      "correct": "d",
      "explanation": "The controller must use a processor providing sufficient guarantees and bind it by a contract setting the subject, duration, security measures and fate of the data.",
      "whyWrong": {
        "a": "It does not impose certification.",
        "b": "It does not impose a location.",
        "c": "It does not impose deletion."
      }
    },
    "gop-q13": {
      "type": "single",
      "correct": "a",
      "explanation": "Reporting is the behavior being sought: it lets the SOC react quickly. The click rate alone varies greatly with the difficulty of the scenario.",
      "whyWrong": {
        "d": "It measures no behavior.",
        "c": "It measures no behavior.",
        "b": "It measures time spent, not the result."
      }
    },
    "gop-q14": {
      "type": "single",
      "correct": "d",
      "explanation": "The ANSSI IT hygiene guide groups 42 basic measures. The 93 measures correspond to Annex A of ISO 27001:2022, and the 114 to its 2013 edition.",
      "whyWrong": {
        "c": "Too few.",
        "b": "That is the number of the 2022 Annex A.",
        "a": "That is the number of the 2013 Annex A."
      }
    },
    "gop-q15": {
      "type": "open",
      "model": "Define now the evidence expected for each requirement and its single location (document space or ticket tool). Vulnerabilities: export the scan reports every month, keep the fix tickets with their dates, track the deadline compliance indicator, archive the risk acceptance decisions signed by the owners. Access review: schedule a quarterly review of privileged accounts and of access to sensitive applications, have the lists validated by managers, trace the removals made and keep the minutes. Appoint a manager per process and run a mock internal audit three months before the deadline to fix the gaps.",
      "criteria": [
        "Concrete, dated evidence is cited for both processes.",
        "Collection is organized continuously, with a location and an owner.",
        "A prior check (internal audit or review) is planned."
      ],
      "explanation": "An auditor checks that a process works over time: regular evidence over six months demonstrates it far better than a document written the day before."
    },
    "gop-q16": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Sanctioning reporting pushes people to hide mistakes, which delays the reaction. A blame-free reporting culture allows the incident to be contained earlier."
    },
    "gop-q38": {
      "type": "single",
      "correct": "c",
      "explanation": "Clicking depends a lot on the difficulty of the scenario. Reporting measures what you want to obtain: people who alert the SOC.",
      "whyWrong": {
        "d": "The reporting rate is not always lower than the click rate.",
        "b": "Training remains necessary.",
        "a": "No law requires it."
      }
    },
    "gop-q39": {
      "type": "single",
      "correct": "b",
      "explanation": "An auditor relies on dated, verifiable evidence produced as you go: validated minutes, signed lists, removal tickets.",
      "whyWrong": {
        "d": "A statement is not evidence.",
        "a": "Not very convincing.",
        "c": "An email with no date or signatory is not verifiable evidence."
      }
    },
    "gop-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "An active account of a person who has left is an open door. Removing access is triggered by the departure process, the same day.",
      "whyWrong": {
        "a": "It is an open door.",
        "d": "A transfer must be justified and validated.",
        "b": "It does not expire by itself."
      }
    },
    "gop-q18": {
      "type": "single",
      "correct": "d",
      "explanation": "The access review compares real rights with each person’s needs, has the lists validated by managers and removes what is no longer justified.",
      "whyWrong": {
        "b": "That would be a fault.",
        "c": "Hardware condition is maintenance, not access review.",
        "a": "Paying licenses is not the subject of the access review."
      }
    },
    "gop-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "A compromised administration account gives access to many systems. Their number is limited, strong authentication is required and their actions are logged.",
      "whyWrong": {
        "a": "Enhanced monitoring is not tied to licenses.",
        "d": "They do not affect the network.",
        "c": "They are not banned."
      }
    },
    "gop-q20": {
      "type": "single",
      "correct": "a",
      "explanation": "Over successive transfers, a person keeps the rights of their successive positions and ends up with access that no position justifies. Review at transfers prevents it.",
      "whyWrong": {
        "b": "A pay rise is not an accumulation of access rights.",
        "c": "Renewing a license is not an accumulation of rights.",
        "d": "A system update is not an accumulation of rights."
      }
    },
    "gop-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The new position calls for new rights, but the old ones must be removed. Without a review, rights accumulate."
    },
    "gop-q22": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Validated creation, regular review and quick disabling cover the whole cycle. Shared accounts remove traceability.",
      "whyWrong": {
        "d": "A shared account does not show who did what."
      }
    },
    "gop-q23": {
      "type": "short",
      "accepted": [
        "least privilege",
        "the least privilege",
        "principle of least privilege"
      ],
      "explanation": "The principle of least privilege limits rights to the strict minimum: a mistake or a compromise then has a reduced impact."
    },
    "gop-q24": {
      "type": "single",
      "correct": "c",
      "explanation": "Quick reporting makes it possible to contain the incident before it spreads. Traces are kept: they help to understand.",
      "whyWrong": {
        "a": "Waiting worsens the impact.",
        "b": "The security team must be involved.",
        "d": "Traces must not be erased."
      }
    },
    "gop-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "The incident handling cycle includes preparation, detection and analysis, containment, eradication and recovery, then lessons learned.",
      "whyWrong": {
        "c": "Those are purchasing steps.",
        "b": "These steps belong to project management, not incident handling.",
        "a": "Those are data operations."
      }
    },
    "gop-q26": {
      "type": "single",
      "correct": "b",
      "explanation": "The review identifies root causes and detection or response flaws, then triggers improvement actions, without looking for someone to blame.",
      "whyWrong": {
        "c": "The lessons-learned review is not meant to name a culprit.",
        "a": "They are kept.",
        "d": "It does not delay return to service: it draws improvements from it."
      }
    },
    "gop-q27": {
      "type": "single",
      "correct": "a",
      "explanation": "The register reveals repeated causes, measures delays and provides proof of handling that meets the requirements of frameworks and authorities.",
      "whyWrong": {
        "c": "It does not replace it.",
        "d": "It does not reduce alerts.",
        "b": "It does not exempt from notifications."
      }
    },
    "gop-q28": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Management must be informed as soon as an incident is significant: it makes decisions (communication, notification to authorities, resources) during handling, not afterwards."
    },
    "gop-q29": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Chronology, scope and decisions make it possible to reconstruct the incident, notify and learn lessons. Personal judgments have no place in a factual record.",
      "whyWrong": {
        "d": "The record stays factual."
      }
    },
    "gop-q30": {
      "type": "short",
      "accepted": [
        "containment",
        "isolation",
        "contain"
      ],
      "explanation": "Containment limits spread without destroying evidence: network isolation, account disabling, stopping a service."
    }
  },
};
