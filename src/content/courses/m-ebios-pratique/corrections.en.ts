// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "m-ebios-pratique",
  questions: {
    "ebp-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "A business value is what matters to the organization: a process (invoicing), information (customer records), know-how. Equipment is only supporting assets.",
      "whyWrong": {
        "d": "A price is not a business value.",
        "b": "A server is a supporting asset.",
        "a": "It is a security measure."
      }
    },
    "ebp-q2": {
      "type": "single",
      "correct": "d",
      "explanation": "A feared event describes harm to a business value (confidentiality, integrity, availability) and its consequences. Its severity is assessed independently of how it would occur.",
      "whyWrong": {
        "c": "That is a weakness, not an event.",
        "a": "That is a risk source.",
        "b": "That is a measure."
      }
    },
    "ebp-q3": {
      "type": "single",
      "correct": "a",
      "explanation": "A supporting asset is an element of the system on which a business value rests: server, application, network, premises, staff.",
      "whyWrong": {
        "b": "It is not a rule.",
        "d": "It is not an attacker.",
        "c": "It is not a backup."
      }
    },
    "ebp-q4": {
      "type": "single",
      "correct": "b",
      "explanation": "Severity measures the consequences for the organization, whatever the attack method. It is set first, with the business, before looking at scenarios.",
      "whyWrong": {
        "c": "Threats are discussed afterwards.",
        "a": "They are studied in workshop 2.",
        "d": "That is not the goal."
      }
    },
    "ebp-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The baseline lists the applicable rules (policies, standards, regulations) and their gaps. It distinguishes what is compliance from what requires a scenario analysis."
    },
    "ebp-q6": {
      "type": "short",
      "accepted": [
        "severity",
        "the severity"
      ],
      "explanation": "Severity is assessed on a four-level scale (minor, significant, serious, critical), defined with the business before the analysis."
    },
    "ebp-q7": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Workshop 1 frames the scope, identifies the business values, feared events and the security baseline. The choice of tools comes much later.",
      "whyWrong": {
        "c": "It belongs to risk treatment."
      }
    },
    "ebp-q8": {
      "type": "single",
      "correct": "b",
      "explanation": "A risk source is a person or group likely to harm the organization: cybercriminal group, state actor, competitor, insider.",
      "whyWrong": {
        "c": "That is a vulnerability.",
        "d": "It is not an actor.",
        "a": "It is not an actor."
      }
    },
    "ebp-q9": {
      "type": "single",
      "correct": "d",
      "explanation": "The targeted objective is what the risk source seeks: extortion, espionage, sabotage, data theft, damage to image.",
      "whyWrong": {
        "c": "That is a measure.",
        "a": "Unrelated.",
        "b": "Unrelated."
      }
    },
    "ebp-q10": {
      "type": "single",
      "correct": "a",
      "explanation": "The most relevant pairs are retained in light of the source’s motivation, resources and activity, to focus effort on plausible scenarios.",
      "whyWrong": {
        "c": "No relation.",
        "d": "Insufficient.",
        "b": "No relation."
      }
    },
    "ebp-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The relevance of each pair is assessed and the most plausible are retained for the rest. Retaining everything would make the analysis unmanageable."
    },
    "ebp-q12": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Cybercriminals, state actors and insiders are classic risk sources. A piece of equipment is not an actor.",
      "whyWrong": {
        "d": "A piece of equipment is not an actor."
      }
    },
    "ebp-q13": {
      "type": "short",
      "accepted": [
        "cybercriminal",
        "cybercriminals",
        "cybercrime",
        "the cybercriminal"
      ],
      "explanation": "Cybercriminals mainly act for financial gain: ransomware extortion, fraud, resale of data."
    },
    "ebp-q14": {
      "type": "open",
      "model": "1) Cybercriminal group, objective extortion: strong motivation, significant resources, very present activity against healthcare institutions, value of the unavailability of the information system. 2) Cybercriminal group or reseller, objective theft of health data for resale or blackmail: very sensitive and valued data. 3) Insider (employee or provider) careless or malicious, objective improper consultation of records: variable motivation, low resources but legitimate access already in place. One can also justify setting aside a less relevant pair (for example a state actor aiming at industrial espionage, little motivated by a clinic) to concentrate the analysis. Each choice is linked to a business value and a feared event (patient care, confidentiality of records).",
      "criteria": [
        "Three distinct pairs are proposed.",
        "Each pair is justified by motivation, resources or activity.",
        "The pairs are linked to business values and feared events.",
        "A pair may be set aside with a justification."
      ],
      "explanation": "A good choice concentrates the analysis on the plausible scenarios for the context, and does not forget insiders."
    },
    "ebp-q15": {
      "type": "single",
      "correct": "c",
      "explanation": "Stakeholders are the customers, suppliers, providers, subsidiaries or partners in relation with the organization. They can constitute attack paths.",
      "whyWrong": {
        "d": "It is not an attacker.",
        "b": "It is not equipment.",
        "a": "It is not an indicator."
      }
    },
    "ebp-q16": {
      "type": "single",
      "correct": "a",
      "explanation": "The more the organization depends on a stakeholder and the more it penetrates its systems, the higher the threat. Good cyber maturity and justified trust reduce it.",
      "whyWrong": {
        "d": "High maturity reduces the threat.",
        "c": "Justified trust reduces it.",
        "b": "It is not a criterion."
      }
    },
    "ebp-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "A strategic attack path describes how a risk source reaches a business value by going through one or more stakeholders, for example a provider with permanent access.",
      "whyWrong": {
        "a": "That is a route at operational level.",
        "d": "Unrelated.",
        "c": "That is a technical measure."
      }
    },
    "ebp-q18": {
      "type": "single",
      "correct": "d",
      "explanation": "Workshop 3 defines measures that reduce the threat coming from third parties: contractual requirements, limitation and monitoring of access, audits, redundancy.",
      "whyWrong": {
        "a": "Too narrow.",
        "c": "Unrelated.",
        "b": "Too narrow."
      }
    },
    "ebp-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Penetration into systems and dependency increase the threat level. Permanent administration access maximizes them."
    },
    "ebp-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Contract, limited and monitored access, audit: these measures reduce penetration and increase justified trust. Uncontrolled permanent access does the opposite.",
      "whyWrong": {
        "c": "It maximizes penetration."
      }
    },
    "ebp-q21": {
      "type": "short",
      "accepted": [
        "ecosystem",
        "the ecosystem"
      ],
      "explanation": "The ecosystem groups the organization’s stakeholders. Mapping its threat makes it possible to spot the most plausible attack paths."
    },
    "ebp-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "An operational scenario details, step by step, how a strategic attack path can be carried out technically, and estimates its likelihood.",
      "whyWrong": {
        "b": "Unrelated.",
        "a": "Unrelated.",
        "d": "Unrelated."
      }
    },
    "ebp-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "The sequence describes reconnaissance (know), intrusion (enter), discovery of targets (find) then action on the objective (exploit).",
      "whyWrong": {
        "b": "Those are purchasing steps.",
        "c": "That is the PDCA cycle.",
        "d": "That is an incident response cycle."
      }
    },
    "ebp-q24": {
      "type": "single",
      "correct": "c",
      "explanation": "Likelihood expresses the probability that the scenario succeeds, in light of the risk source’s resources, the vulnerabilities and the existing measures.",
      "whyWrong": {
        "b": "Severity measures impact.",
        "a": "That is not its purpose.",
        "d": "That is not its purpose."
      }
    },
    "ebp-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "MITRE ATT&CK lists the observed tactics and techniques. It helps describe realistic modus operandi and check detection coverage.",
      "whyWrong": {
        "b": "Unrelated.",
        "a": "Unrelated.",
        "c": "Unrelated."
      }
    },
    "ebp-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Strategic scenarios (workshop 3) come before operational scenarios (workshop 4), which technically detail the retained paths."
    },
    "ebp-q27": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Exploitable flaws, the attacker’s resources and measures in place determine how easily it succeeds. The slogan has no link.",
      "whyWrong": {
        "c": "No link with security."
      }
    },
    "ebp-q28": {
      "type": "short",
      "accepted": [
        "capec",
        "the capec"
      ],
      "explanation": "CAPEC (Common Attack Pattern Enumeration and Classification) describes attack patterns. It complements ATT&CK to formalize modus operandi."
    },
    "ebp-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "Workshop 5 summarizes the risk scenarios, chooses the treatment strategy, establishes the plan of measures, assesses the residual risks and defines the monitoring framework.",
      "whyWrong": {
        "a": "Unrelated.",
        "d": "That is the purpose of workshop 1.",
        "c": "That is not its purpose."
      }
    },
    "ebp-q30": {
      "type": "single",
      "correct": "a",
      "explanation": "The residual risk is assessed after measures. It is presented to the decision authority for formal acceptance.",
      "whyWrong": {
        "c": "That is the one before treatment.",
        "d": "That is the one before treatment.",
        "b": "That is a treatment option."
      }
    },
    "ebp-q31": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Formal acceptance by management or its representative is part of workshop 5: it bears responsibility for the risk assumed."
    },
    "ebp-q32": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The context, the threats and the system evolve. The monitoring framework provides for planned reviews and events that trigger a revision."
    },
    "ebp-q33": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Indicators, reviews and trigger events keep the analysis alive. Deleting the initial analysis would lose the traceability of decisions.",
      "whyWrong": {
        "b": "The analysis is kept to retain traceability."
      }
    },
    "ebp-q34": {
      "type": "open",
      "model": "Strategy: reduce the risk by acting on the attack path (the provider) and on the impact. Measures: 1) frame the provider’s access (named accounts, multi-factor authentication, access through a logged bastion, time-limited access) and require it by contract with incident notification; 2) segment the network to limit the spread of ransomware between administration and production environments; 3) immutable or offline backups, tested, to make recovery possible. Detection and control of the provider by audit can be added. The residual risk is assessed by re-rating likelihood (measures make the attack path harder, the provider less penetrating) and severity (the impact is reduced by recovery): a residual level is obtained and presented to management for acceptance, with the monitoring measures.",
      "criteria": [
        "A reduction strategy targeting the attack path is proposed.",
        "Three concrete measures are cited.",
        "The re-rating of likelihood and severity is explained.",
        "Acceptance by management and monitoring are mentioned."
      ],
      "explanation": "A good plan treats at once the entry door (the third party), the spread and the ability to recover."
    },
    "ebp-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "The analysis crosses viewpoints: the business knows the values and impacts, security and IT know the systems and measures.",
      "whyWrong": {
        "d": "The business is indispensable.",
        "a": "The organization must be involved.",
        "b": "Too narrow."
      }
    },
    "ebp-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "A frozen analysis becomes obsolete: new services, new threats, new third parties. It is reviewed periodically and at each major change.",
      "whyWrong": {
        "d": "That is not the reason.",
        "a": "That is not the reason.",
        "c": "That is not the reason."
      }
    },
    "ebp-q37": {
      "type": "single",
      "correct": "d",
      "explanation": "The EBIOS RM analysis can serve as the risk assessment approach of an ISMS: it provides the scenarios, ratings and treatment plan expected by the standard.",
      "whyWrong": {
        "b": "It does not replace it.",
        "c": "It does not make it useless.",
        "a": "Audits remain."
      }
    },
    "ebp-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The assumptions (scope, threat, vulnerabilities, scales) explain the ratings and allow reviewing them. Without them, the analysis is not defensible."
    },
    "ebp-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "An overly wide scope, generic scenarios and unjustified ratings weaken the analysis. Validation by management is on the contrary expected.",
      "whyWrong": {
        "c": "It is required to accept residual risks."
      }
    },
    "ebp-q40": {
      "type": "short",
      "accepted": [
        "anssi",
        "the anssi"
      ],
      "explanation": "EBIOS Risk Manager is published by ANSSI, with the support of the EBIOS Club."
    }
  },
};
