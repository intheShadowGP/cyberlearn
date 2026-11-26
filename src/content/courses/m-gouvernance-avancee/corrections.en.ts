// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "m-gouvernance-avancee",
  questions: {
    "mga-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "A risk expressed in euros can be compared with other risks and with the cost of measures, which allows arbitrating a budget. It remains an estimate, with its assumptions.",
      "whyWrong": {
        "c": "Uncertainty remains.",
        "d": "Experts provide the estimates.",
        "a": "Assumptions must be documented."
      }
    },
    "mga-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "The annual loss expectancy multiplies the expected frequency of an event by the average loss it causes. It is used to compare scenarios and assess the value of a measure.",
      "whyWrong": {
        "c": "That is a budget, not a loss.",
        "b": "That is the maximum loss, not the expected one.",
        "d": "Unrelated."
      }
    },
    "mga-q3": {
      "type": "single",
      "correct": "d",
      "explanation": "Frequencies and losses are uncertain. A range (minimum, most likely, maximum) makes this uncertainty visible and avoids false precision.",
      "whyWrong": {
        "c": "It rather complicates calculations.",
        "a": "It informs the decision.",
        "b": "The standard does not require it."
      }
    },
    "mga-q4": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The expected gain (expected loss before minus expected loss after) is compared with the cost of the measure. Other criteria, such as compliance, can also justify a measure."
    },
    "mga-q5": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "History, sector reports and calibrated expert opinions cross-check each other. An isolated, unargued hunch is not a defensible basis.",
      "whyWrong": {
        "b": "An estimate must be argued and cross-checked."
      }
    },
    "mga-q6": {
      "type": "short",
      "accepted": [
        "risk appetite",
        "the risk appetite"
      ],
      "explanation": "Risk appetite sets, by management, the tolerable level of risk. It serves as the reference to decide whether a risk is accepted or must be treated."
    },
    "mga-q7": {
      "type": "open",
      "model": "Define the scenario (ransomware encrypting production, with data theft) and its loss components: business interruption (revenue lost per day × duration), recovery and expertise costs, notification and possible penalties, reputational damage, possible ransom. Estimate the frequency from history, sector reports and expert opinions, and express frequency and losses as ranges. Compute the annual expected loss before measures, then after measures (immutable backups, multi-factor authentication, segmentation, detection) by estimating the reduction of frequency and impact. Compare the expected gain with the annualized cost of the €300k and present the uncertainty, the assumptions and variants. Link everything to management’s risk appetite and propose tracking indicators.",
      "criteria": [
        "The loss components of the scenario are identified.",
        "Frequency and losses are estimated with their sources and as ranges.",
        "The expected gain is compared with the cost of the measures.",
        "The risk appetite and tracking indicators are mentioned."
      ],
      "explanation": "A convincing argument makes its assumptions explicit, shows the uncertainty and links the decision to the risk appetite."
    },
    "mga-q8": {
      "type": "single",
      "correct": "c",
      "explanation": "The same control (access review, tested backup) answers several requirements. It is designed once, proved once and linked to each text.",
      "whyWrong": {
        "d": "The obligation remains.",
        "b": "The scope does not disappear.",
        "a": "The authorities remain competent."
      }
    },
    "mga-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "The mapping shows overlaps, but NIS2 adds specific requirements (notification, management, supply chain) and a scope distinct from the certificate.",
      "whyWrong": {
        "d": "It is not forbidden.",
        "b": "It is legal.",
        "a": "It contains some."
      }
    },
    "mga-q10": {
      "type": "single",
      "correct": "d",
      "explanation": "Proportionality adapts the depth of measures to the entity’s size, exposure and the impact of its activities, without exempting it from the basic requirements.",
      "whyWrong": {
        "a": "Cost is not the criterion.",
        "b": "That would ignore proportion.",
        "c": "Small entities remain concerned."
      }
    },
    "mga-q11": {
      "type": "single",
      "correct": "b",
      "explanation": "The six-function framework (govern, identify, protect, detect, respond, recover) gives a shared vocabulary and maturity levels understandable by non-specialists.",
      "whyWrong": {
        "a": "It is not certifiable.",
        "c": "That is not its format.",
        "d": "That is not its purpose."
      }
    },
    "mga-q12": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Each text has its scope, requirements and authorities. An audit can pool evidence, but each requirement must be matched and verified."
    },
    "mga-q13": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Requirement, control, owner and evidence form the traceability chain. The number of pages brings nothing.",
      "whyWrong": {
        "d": "It does not help demonstrate compliance."
      }
    },
    "mga-q14": {
      "type": "short",
      "accepted": [
        "dora",
        "the dora"
      ],
      "explanation": "DORA (Digital Operational Resilience Act) imposes on the financial sector ICT risk management, resilience tests, control of providers and incident notification."
    },
    "mga-q15": {
      "type": "single",
      "correct": "a",
      "explanation": "If a single provider carries several critical services, its failure paralyzes the organization. These dependencies are identified and alternatives are planned.",
      "whyWrong": {
        "b": "That is not the definition.",
        "c": "That is not the definition.",
        "d": "That is not the definition."
      }
    },
    "mga-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "Incidents spread through the chain: a supplier’s subcontractor may hold data or access. The contract must frame subcontracting and notification.",
      "whyWrong": {
        "c": "That is not their role.",
        "a": "They replace no audit.",
        "b": "They may have access."
      }
    },
    "mga-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "The exit strategy describes how to continue the activity if the provider fails or if you terminate the contract: reversibility, data, transition, delays.",
      "whyWrong": {
        "c": "It is not a plan.",
        "d": "That is not its purpose.",
        "a": "Unrelated."
      }
    },
    "mga-q18": {
      "type": "single",
      "correct": "c",
      "explanation": "DORA requires keeping a register of information on contractual agreements with ICT providers, so that the entity and the authorities can monitor dependencies.",
      "whyWrong": {
        "d": "Unrelated.",
        "a": "Unrelated.",
        "b": "Unrelated."
      }
    },
    "mga-q19": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A certification is an assessment element on a given scope. The organization remains responsible: it tracks risks, access, incidents and dependency."
    },
    "mga-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Incident, change of control or chain, extension of access change the risk. A purely visual change does not change its level.",
      "whyWrong": {
        "c": "It does not affect the risk."
      }
    },
    "mga-q21": {
      "type": "single",
      "correct": "a",
      "explanation": "Automatic measures (share of patched workstations, accounts without a second factor) feed dashboards and provide regular evidence, rather than a one-off check.",
      "whyWrong": {
        "b": "It is a one-off check.",
        "d": "That is not its purpose.",
        "c": "That is not its purpose."
      }
    },
    "mga-q22": {
      "type": "single",
      "correct": "a",
      "explanation": "The auditor chooses the sample by a method (random, risk-based) to reflect the population. A sample picked by the audited party or too small can hide findings.",
      "whyWrong": {
        "d": "That choice is arbitrary.",
        "b": "The choice would bias the audit.",
        "c": "A single case does not represent the population."
      }
    },
    "mga-q23": {
      "type": "single",
      "correct": "c",
      "explanation": "A major finding indicates that the system does not meet a requirement, or that a key control does not work. It calls for quick corrective action and can block a certification.",
      "whyWrong": {
        "d": "It is a minor remark.",
        "b": "It is an observation.",
        "a": "It is not an audit finding."
      }
    },
    "mga-q24": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Independence guarantees the objectivity of findings. An auditor cannot judge their own activity without a conflict of interest."
    },
    "mga-q25": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A one-off capture shows a state, not operation over time. Dated evidence from the source system, produced regularly, is far more convincing."
    },
    "mga-q26": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Evidence that is dated, from the source system and traceable can be re-verified. An oral statement leaves no trace.",
      "whyWrong": {
        "b": "It is not verifiable."
      }
    },
    "mga-q27": {
      "type": "short",
      "accepted": [
        "finding",
        "non-conformity",
        "nonconformity",
        "non conformity",
        "a finding"
      ],
      "explanation": "A finding (or non-conformity) is a failure noted against a requirement. It is classified (minor, major) and tracked until it is corrected."
    },
    "mga-q28": {
      "type": "single",
      "correct": "b",
      "explanation": "A board needs few indicators, linked to major risks and to the decisions to make: exposure, trend, gaps to the risk appetite.",
      "whyWrong": {
        "d": "Too detailed.",
        "a": "Not very informative.",
        "c": "Unreadable for a board."
      }
    },
    "mga-q29": {
      "type": "single",
      "correct": "d",
      "explanation": "A threshold linked to the risk appetite turns a measure into a signal: beyond it, management must decide (accept, treat, arbitrate).",
      "whyWrong": {
        "b": "That is not its purpose.",
        "a": "It requires measuring.",
        "c": "It does not replace them."
      }
    },
    "mga-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "NIS2 reinforces the responsibility of management bodies: approval of measures, oversight, training, and possible sanctions depending on national transpositions.",
      "whyWrong": {
        "a": "It engages management.",
        "c": "It is not a provided consequence.",
        "b": "Insufficient."
      }
    },
    "mga-q31": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Figures with no interpretation are misread. The dashboard comes with analysis, the gaps to the risk appetite and the decisions expected."
    },
    "mga-q32": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Management decides from the business impact, the options and a recommendation. Technical detail stays in an appendix.",
      "whyWrong": {
        "b": "It drowns the decision in detail."
      }
    },
    "mga-q33": {
      "type": "short",
      "accepted": [
        "kri",
        "key risk indicator",
        "a kri"
      ],
      "explanation": "A KRI (Key Risk Indicator) signals the evolution of a risk and triggers a decision when a threshold is crossed, for example the mean time to fix critical vulnerabilities."
    },
    "mga-q34": {
      "type": "open",
      "model": "Content: an opening message (overall risk level against the defined appetite), the major risks and their evolution, the significant incidents and lessons, the state of compliance (NIS2, GDPR, sector) with the major gaps, the situation of critical third parties, the results of tests and exercises. Indicators: five to eight key risk indicators with targets and trend (time to fix critical vulnerabilities, coverage of multi-factor authentication, successful restoration rate, open audit findings, crisis exercise), accompanied by an interpretation. Decisions expected: budget for priority workstreams, formal acceptance of major residual risks, validation of the strategy and deadlines, appointment of owners. Stay brief, link each point to a business impact and do not drown the board in technical detail.",
      "criteria": [
        "The major risks and their evolution against the appetite are presented.",
        "A small number of indicators with targets and interpretation is proposed.",
        "Compliance and critical third parties are addressed.",
        "The decisions expected from the board are made explicit."
      ],
      "explanation": "A board does not look for technical detail: it decides from clear risks, gaps and options."
    },
    "mga-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "The severe but plausible scenario (major cyberattack, loss of a provider) pushes the organization beyond its everyday incidents, without being unrealistic.",
      "whyWrong": {
        "a": "It must remain credible.",
        "b": "It must be demanding.",
        "d": "An objective is necessary."
      }
    },
    "mga-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "A recovery plan that depends on elements located on the disaster site (directory, documentation, access) fails on the day. The test reveals these hidden dependencies.",
      "whyWrong": {
        "c": "That is not the goal.",
        "d": "Backups remain necessary.",
        "a": "It validates it."
      }
    },
    "mga-q37": {
      "type": "single",
      "correct": "a",
      "explanation": "Impact tolerance sets how far a critical activity can be disrupted before unacceptable harm to the organization or its customers. It guides plans and tests.",
      "whyWrong": {
        "d": "That is another subject.",
        "b": "That is not the definition.",
        "c": "That is not the definition."
      }
    },
    "mga-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Without a tracked action plan, findings repeat from one exercise to the next. Each gap gets an owner, a deadline and a verification."
    },
    "mga-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Identities, network and operators’ access condition recovery: without them, restored applications remain unusable.",
      "whyWrong": {
        "d": "No bearing on recovery."
      }
    },
    "mga-q40": {
      "type": "short",
      "accepted": [
        "red team",
        "red teaming",
        "a red team"
      ],
      "explanation": "A red team conducts, within an authorized and agreed framework, a realistic attack scenario to test the organization’s detection and response. DORA provides for threat-led tests for some entities."
    }
  },
};
