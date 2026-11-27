// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "m-risques-conformite",
  questions: {
    "gov-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "The risk level combines the likelihood of a scenario and the severity of its consequences. The number of vulnerabilities is only a partial indicator of likelihood.",
      "whyWrong": {
        "c": "Only a partial indicator of likelihood.",
        "b": "The budget does not measure risk.",
        "d": "Size does not measure risk."
      }
    },
    "gov-q2": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d",
        "e"
      ],
      "explanation": "The four recognized options are reduce, transfer, avoid and accept. All are explicit decisions.",
      "whyWrong": {
        "c": "Ignoring a risk without a decision is not a treatment: it is a de facto acceptance, uncontrolled and unassumed."
      }
    },
    "gov-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Insurance transfers part of the financial impact, under conditions (minimum measures required, exclusions). Legal responsibility toward individuals and authorities, reputational damage and business interruption remain."
    },
    "gov-q4": {
      "type": "short",
      "accepted": [
        "residual risk",
        "residual risks"
      ],
      "explanation": "Residual risk must be identified, measured and formally accepted by management."
    },
    "gov-q14": {
      "type": "open",
      "model": "Likelihood: high (3/4), because this modus operandi is very widespread, information about executives and accounting is often public, and the attack requires no technical skill. Severity: high (3/4), possibly several hundred thousand euros, an amount often unrecoverable, which can threaten cash flow. Treatment: reduce, through a double-validation procedure and a callback to the known number (never the one in the message) for any change of bank details or unusual transfer, targeted awareness of accounting and management, transfer limits, MFA on the mailbox, tagging of external emails; partly transfer through insurance covering fraud. Low residual risk, accepted by management.",
      "criteria": [
        "Likelihood and severity are rated and justified.",
        "An organizational measure for validating transfers is proposed.",
        "Awareness of exposed functions is planned.",
        "The residual risk and its acceptance by management are mentioned."
      ],
      "explanation": "Against CEO fraud, organizational measures (verification procedures) are more effective than technical measures alone."
    },
    "gov-q16": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Only a test reveals forgotten dependencies, corrupted backups or unrealistic restoration times. Regular exercises are a requirement of most frameworks."
    },
    "gov-q31": {
      "type": "single",
      "correct": "b",
      "explanation": "The threat (or risk source) is what can cause the incident: a criminal group, a mistake, a disaster. The exploitable weakness is the vulnerability.",
      "whyWrong": {
        "a": "That is the definition of a vulnerability.",
        "d": "That is a security measure.",
        "c": "That is the impact."
      }
    },
    "gov-q32": {
      "type": "single",
      "correct": "c",
      "explanation": "Giving up the activity that creates the risk amounts to avoiding it. Reducing means applying measures, transferring means sharing the impact, accepting means assuming the residual risk.",
      "whyWrong": {
        "b": "It does not keep the activity.",
        "d": "There is no sharing of the impact.",
        "a": "It does not bear the risk."
      }
    },
    "gov-q33": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Management bears responsibility for the risk assumed. The decision is recorded with the risk, its justification and the review date."
    },
    "gov-q5": {
      "type": "single",
      "correct": "d",
      "explanation": "ISO/IEC 27001 contains the certifiable requirements of the ISMS. 27002 is a guide to controls, 27005 a risk management guide, the NIST CSF a non-certifiable framework.",
      "whyWrong": {
        "a": "Guide to controls, not certifiable.",
        "c": "Risk management guide.",
        "b": "NIST CSF is a voluntary framework, not a certifiable standard."
      }
    },
    "gov-q6": {
      "type": "short",
      "accepted": [
        "statement of applicability",
        "soa",
        "the statement of applicability"
      ],
      "explanation": "The statement of applicability links each Annex A control to the risk analysis and justifies exclusions. Auditors use it as a guiding thread."
    },
    "gov-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The certificate covers a defined scope (activities, sites, services). You must check that the service purchased is indeed included."
    },
    "gov-q8": {
      "type": "single",
      "correct": "d",
      "explanation": "NIST CSF 2.0 (2024) adds the Govern function to the five historical functions, to place strategy, roles and risk management at the center.",
      "whyWrong": {
        "b": "Historical function.",
        "c": "Historical function.",
        "a": "Historical function."
      }
    },
    "gov-q15": {
      "type": "open",
      "model": "ISO 27001 is an excellent foundation: risk analysis, controls, continuous improvement, often recognized as a way to demonstrate part of the requirements. But it is not automatically enough: 1) the certified scope may not cover all the systems targeted by NIS2; 2) NIS2 imposes specific obligations (incident notification within precise deadlines to the authority, registration, responsibility and training of management, supply chain security, measures listed by the national text); 3) the national authority may have its own inspection requirements. A gap analysis between the existing ISMS and the national transposition requirements is therefore needed.",
      "criteria": [
        "ISO 27001 is presented as a useful but insufficient foundation.",
        "The question of scope is raised.",
        "At least two NIS2-specific requirements are cited.",
        "A gap analysis is recommended."
      ],
      "explanation": "The frameworks overlap largely, but compliance is assessed requirement by requirement."
    },
    "gov-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "The 2022 version groups the controls into four themes: organizational, people, physical and technological.",
      "whyWrong": {
        "b": "There are four.",
        "d": "There are four.",
        "a": "This number matched the old structure in domains."
      }
    },
    "gov-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "The internal audit is required by the standard: it checks that the system is compliant and effective, and prepares the certification audit by revealing the gaps to correct.",
      "whyWrong": {
        "c": "It does not replace it.",
        "d": "Choosing tools is not the subject of the internal audit.",
        "a": "Training employees is not the role of the internal audit."
      }
    },
    "gov-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "EBIOS Risk Manager is published by ANSSI, with the support of the EBIOS Club. It is compatible with ISO 27005.",
      "whyWrong": {
        "d": "The CNIL handles personal data.",
        "c": "ISO publishes standards, not this method.",
        "b": "ENISA is a European agency."
      }
    },
    "gov-q10": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "The workshops cover the framing (business values, feared events), the risk sources, the strategic (ecosystem) and operational scenarios, then the treatment.",
      "whyWrong": {
        "b": "The choice of precise technical solutions is not the object of the method; it leads to measures, not brands."
      }
    },
    "gov-q11": {
      "type": "short",
      "accepted": [
        "rto",
        "recovery time objective"
      ],
      "explanation": "The RTO (Recovery Time Objective) corresponds to the maximum tolerable downtime; the RPO (Recovery Point Objective) to the maximum tolerable data loss."
    },
    "gov-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "Workshop 2 characterizes the risk sources (who) and their targeted objectives (why), before the following workshops derive scenarios from them.",
      "whyWrong": {
        "b": "It frames the scope and business values.",
        "a": "It deals with measures and residual risks.",
        "c": "The topic is covered."
      }
    },
    "gov-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The method leads to measures and residual risks, not to brand choices. Product choice belongs to implementation."
    },
    "gov-q12": {
      "type": "single",
      "correct": "b",
      "explanation": "Article 33 of the GDPR provides for notification without undue delay and, where feasible, within 72 hours at the latest after becoming aware of it, unless the breach is unlikely to result in a risk to individuals.",
      "whyWrong": {
        "c": "That is NIS2’s early warning deadline.",
        "d": "Too long.",
        "a": "Too long."
      }
    },
    "gov-q13": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "DORA targets the financial sector and its critical ICT providers; the CRA manufacturers of digital products; NIS2 places obligations on management bodies.",
      "whyWrong": {
        "d": "NIS2 applies, depending on the sector, to medium entities (from 50 employees or €10M turnover) and large ones, even to some critical small entities."
      }
    },
    "gov-q38": {
      "type": "single",
      "correct": "a",
      "explanation": "The Cyber Resilience Act imposes security by design, vulnerability management over the support period and reporting of actively exploited vulnerabilities.",
      "whyWrong": {
        "d": "It deals with personal data.",
        "c": "It targets the financial sector.",
        "b": "It targets essential and important entities."
      }
    },
    "gov-q39": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "NIS2 imposes risk management measures, notification of significant incidents (early warning within 24 hours) and engages management. It regulates providers without banning them.",
      "whyWrong": {
        "a": "Supply chain security is regulated, not banned."
      }
    },
    "gov-q40": {
      "type": "single",
      "correct": "c",
      "explanation": "The CNIL receives breach notifications and oversees application of the GDPR. ANSSI is the cybersecurity authority, the ACPR that of the banking and insurance sector.",
      "whyWrong": {
        "a": "Cybersecurity authority.",
        "d": "Oversees banks and insurers.",
        "b": "Financial markets authority."
      }
    },
    "gov-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "The policy engages the organization: it is approved by management, which thereby gives the means and the authority to apply it.",
      "whyWrong": {
        "a": "They have no such authority.",
        "c": "A third party does not decide the policy.",
        "d": "A third party does not decide the policy."
      }
    },
    "gov-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "The CISO defines and enforces the policy, tracks risks and indicators, and reports to management. They replace neither the technical teams nor the legal department.",
      "whyWrong": {
        "b": "The CISO does not administer all the servers alone.",
        "c": "They do not replace the legal department.",
        "d": "Buying equipment is not their main role."
      }
    },
    "gov-q19": {
      "type": "single",
      "correct": "c",
      "explanation": "A frozen policy becomes unsuitable: new services, new threats, new obligations. It is reviewed at least annually and at each major change.",
      "whyWrong": {
        "d": "The review is not meant to change the layout.",
        "a": "It does not expire that way.",
        "b": "It is not meant to remove all measures."
      }
    },
    "gov-q20": {
      "type": "single",
      "correct": "d",
      "explanation": "Management examines indicators, audits, incidents and risks, then decides on resources and improvements: it is the “check / act” of the PDCA cycle.",
      "whyWrong": {
        "b": "It does not replace it.",
        "c": "Choosing equipment brands is not the subject of the management review.",
        "a": "Fixing technical vulnerabilities is not its role."
      }
    },
    "gov-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "An indicator with no objective guides no decision. For example: “mean time to fix critical vulnerabilities” linked to a seven-day target."
    },
    "gov-q22": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Time to fix, training and handling of findings measure real effectiveness. The volume of emails has no link with security.",
      "whyWrong": {
        "c": "It measures nothing about security."
      }
    },
    "gov-q23": {
      "type": "short",
      "accepted": [
        "pdca",
        "deming wheel",
        "deming"
      ],
      "explanation": "PDCA (Plan, Do, Check, Act), or the Deming wheel, structures how a management system such as ISO 27001 operates."
    },
    "gov-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "The business continuity plan describes how to maintain essential activities during an incident, often in degraded mode.",
      "whyWrong": {
        "d": "BCP is not an access control plan.",
        "c": "BCP is not an encryption procedure.",
        "a": "BCP is not an asset mapping."
      }
    },
    "gov-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "Offline or immutable backups, whose restoration is tested, allow recovery without paying. The other measures reduce the probability but do not guarantee recovery.",
      "whyWrong": {
        "d": "It reduces probability without guaranteeing recovery.",
        "b": "It does not protect the backups.",
        "c": "It does not allow restoring."
      }
    },
    "gov-q26": {
      "type": "single",
      "correct": "c",
      "explanation": "The BCP aims to continue essential activities during the incident; the DRP describes how to restore systems after a disaster. The two complement each other.",
      "whyWrong": {
        "d": "A BCP is not reserved for small companies: any organization needs one.",
        "a": "They complement each other.",
        "b": "They are distinct."
      }
    },
    "gov-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "The BIA determines, per process, the acceptable downtime and data loss: these objectives size the recovery solutions and their cost.",
      "whyWrong": {
        "c": "It does not choose any.",
        "b": "It complements it.",
        "a": "The BIA does not measure customer satisfaction."
      }
    },
    "gov-q28": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A tabletop exercise or simulation checks the decision chain, contacts and crisis communication without a real shutdown, before moving on to technical recovery tests."
    },
    "gov-q29": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Priorities, roles and restoration procedures make the plan executable under stress. An obsolete document is worse than useless.",
      "whyWrong": {
        "b": "An obsolete inventory misleads."
      }
    },
    "gov-q30": {
      "type": "short",
      "accepted": [
        "rpo",
        "recovery point objective"
      ],
      "explanation": "The RPO (Recovery Point Objective) sets the maximum age of restored data, hence the minimum backup frequency."
    },
    "gov-q41": {
      "type": "single",
      "correct": "b",
      "explanation": "It states, control by control, whether it applies, its implementation status and the reason for any exclusion: it follows from the risk analysis.",
      "whyWrong": {
        "c": "It follows from the risk analysis; it does not replace it.",
        "a": "It is not an audit communication document.",
        "d": "Roles are defined in the policy and organization."
      }
    },
    "gov-q42": {
      "type": "single",
      "correct": "d",
      "explanation": "RTO (Recovery Time Objective): target recovery time. RPO (Recovery Point Objective): maximum age of restored data, which drives backup frequency.",
      "whyWrong": {
        "c": "It is the other way around.",
        "a": "Neither is a cost.",
        "b": "They do not count backups."
      }
    },
    "gov-q43": {
      "type": "single",
      "correct": "a",
      "explanation": "A requirement without evidence (policy, configuration, log, minutes) cannot be demonstrated. The matrix makes gaps visible and prepares the audit.",
      "whyWrong": {
        "d": "The matrix serves to apply and to prove.",
        "b": "Documents do not replace controls.",
        "c": "Periodic review is still needed."
      }
    }
  },
};
