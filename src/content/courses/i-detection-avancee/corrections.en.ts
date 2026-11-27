// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "i-detection-avancee",
  questions: {
    "ida-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "We start from what we want to detect (priority ATT&CK techniques), then the sources that make these techniques visible. A rule without data is a false sense of security.",
      "whyWrong": {
        "d": "Maximum volume is costly and drowns useful signals.",
        "b": "Choosing sources is not meant to reduce teams.",
        "c": "Rules remain necessary to exploit the data."
      }
    },
    "ida-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "A common schema (user, host, process, address) ties every source to the same model: a single rule works on several products and maintenance costs less.",
      "whyWrong": {
        "a": "The schema is not meant to increase volume.",
        "b": "Retention remains necessary.",
        "d": "The schema serves, on the contrary, to exploit the SIEM."
      }
    },
    "ida-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Data with no detection value increases costs, slows searches and drowns signals. We filter at the source what brings nothing, keeping what helps detect and investigate."
    },
    "ida-q4": {
      "type": "short",
      "accepted": [
        "common schema",
        "normalized schema",
        "schema",
        "common data model",
        "data model",
        "the common schema",
        "normalization schema"
      ],
      "explanation": "The common schema describes the normalized fields (user, host, parent process, command line). Documented and versioned, it makes rules portable across products."
    },
    "ida-q5": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Completeness, timestamps and abnormal silence reveal a stopped collector, a misconfigured source or logging disabled. Deleting without analysis destroys investigative value.",
      "whyWrong": {
        "d": "Deletion must follow a justified retention policy, not an unanalyzed decision."
      }
    },
    "ida-q6": {
      "type": "single",
      "correct": "d",
      "explanation": "Recent, frequently consulted data stays on fast storage; history, rarely queried, moves to cheaper but still queryable storage. Cost is controlled without losing investigative capacity.",
      "whyWrong": {
        "b": "It is not a split by person.",
        "c": "A single store does not distinguish needs.",
        "a": "Paper is not a storage for security logs."
      }
    },
    "ida-q7": {
      "type": "single",
      "correct": "b",
      "explanation": "A silence may come from a collector failure or from logging disabled by an attacker. It is handled as an alert, because meanwhile the rules that depend on it see nothing.",
      "whyWrong": {
        "a": "Waiting prolongs the blind spot.",
        "d": "Removing the source removes coverage.",
        "c": "Disabling the rules hides the problem."
      }
    },
    "ida-q8": {
      "type": "single",
      "correct": "a",
      "explanation": "Rules are versioned, reviewed, tested and deployed through a controlled process. Changes become traceable and reversible.",
      "whyWrong": {
        "b": "That is precisely what is avoided.",
        "c": "Encryption is not the point.",
        "d": "Rules are not deleted on a fixed date."
      }
    },
    "ida-q9": {
      "type": "single",
      "correct": "b",
      "explanation": "A second pair of eyes spots overly broad exclusions, logic errors and rules likely to produce too much noise. It complements the tests without replacing them.",
      "whyWrong": {
        "a": "It reduces errors; it is not meant to slow things down.",
        "c": "Review is not meant to hide the rule.",
        "d": "Review and tests are complementary."
      }
    },
    "ida-q10": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Positive cases check that it detects, negative cases that it produces no noise on neighboring legitimate behaviors. Both are needed."
    },
    "ida-q11": {
      "type": "single",
      "correct": "d",
      "explanation": "Observation mode produces statistics on real firings without involving the analysts. Thresholds and exclusions are tuned, then the alert is enabled.",
      "whyWrong": {
        "a": "Traceability is sought, on the contrary.",
        "c": "The rule must eventually be usable.",
        "b": "Observation complements testing; it does not replace it."
      }
    },
    "ida-q12": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Technique, owner and review date allow coverage tracking and maintenance. A secret never belongs in a rule file.",
      "whyWrong": {
        "d": "Secrets are not stored in rules."
      }
    },
    "ida-q13": {
      "type": "short",
      "accepted": [
        "rollback",
        "roll back",
        "the rollback",
        "roll-back",
        "revert",
        "reverting"
      ],
      "explanation": "The rollback limits the impact of a faulty change: we return to the earlier version and then fix it. It is part of the deployment process."
    },
    "ida-q14": {
      "type": "single",
      "correct": "c",
      "explanation": "The exclusion hides alerts, sometimes true ones, and nobody is in charge of questioning it. Each exclusion must have an owner, a justification, an expiry and a review.",
      "whyWrong": {
        "a": "Speed is not the issue.",
        "d": "An exclusion reduces alerts; it does not add any.",
        "b": "The logs remain collected; only the alert disappears."
      }
    },
    "ida-q15": {
      "type": "single",
      "correct": "c",
      "explanation": "Offense and defense work together: each technique is replayed within an authorized framework, the detection result is noted and the gaps become work items.",
      "whyWrong": {
        "b": "An exercise always takes place with authorization.",
        "d": "A financial audit is not a Purple Team exercise.",
        "a": "Office software training is not a Purple Team exercise."
      }
    },
    "ida-q16": {
      "type": "single",
      "correct": "a",
      "explanation": "A rule can be correct on paper and detect nothing because of a missing field, a filter or a poorly normalized source. Only a replay proves it.",
      "whyWrong": {
        "b": "It may be well written: we simply do not know.",
        "c": "The format is not at issue.",
        "d": "Cost is not the issue."
      }
    },
    "ida-q17": {
      "type": "truefalse",
      "correct": true,
      "explanation": "An adversary easily modifies a string, a file name or a hash, but much less easily the behavior needed for their objective. This is the top of the pyramid of pain."
    },
    "ida-q18": {
      "type": "short",
      "accepted": [
        "detection rate",
        "the detection rate",
        "validated coverage"
      ],
      "explanation": "The detection rate measures real coverage. Combined with detection delay and alert quality, it guides the next rules and the next replays."
    },
    "ida-q19": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Rate, delay and quality describe the detection. The number of tools of the offensive team says nothing about defensive capability.",
      "whyWrong": {
        "c": "This indicator describes offensive work, not the defense."
      }
    },
    "ida-q20": {
      "type": "single",
      "correct": "b",
      "explanation": "A behavior required by the adversary’s objective changes little from one variant to another; a name, a hash or an address changes with each campaign.",
      "whyWrong": {
        "c": "A name is trivially changed.",
        "a": "A hash changes as soon as the file is modified.",
        "d": "An address is replaced within minutes."
      }
    },
    "ida-q21": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "A replay is carried out with authorization, harmless payloads and monitoring, so as not to cause a real incident. Management is informed of the framework.",
      "whyWrong": {
        "a": "Management must know and validate the framework of the exercise."
      }
    },
    "ida-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "Precision = true positives / (true positives + false positives). Low precision means many unjustified alerts and feeds alert fatigue.",
      "whyWrong": {
        "b": "That is recall.",
        "c": "This number does not measure the quality of a rule.",
        "a": "This is a response indicator, not precision."
      }
    },
    "ida-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "Recall = true positives / (true positives + false negatives). High recall means few missed attacks, often at the price of lower precision.",
      "whyWrong": {
        "b": "That is precision.",
        "c": "That is load, not recall.",
        "d": "It is a storage parameter."
      }
    },
    "ida-q24": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Normal behavior evolves (drift) and a model can lose quality or be evaded. We track its precision, recall and load, and retrain or tune it."
    },
    "ida-q25": {
      "type": "single",
      "correct": "b",
      "explanation": "New tools, reorganizations or seasonality change normal behavior. A frozen baseline ends up producing false alerts or hiding anomalies.",
      "whyWrong": {
        "d": "Attackers adapt their techniques.",
        "c": "Logs evolve with activity.",
        "a": "This has no link to computing the baseline."
      }
    },
    "ida-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "Without an explanation (which signals, which deviation), the analyst can neither qualify nor contest the alert. A mere risk score is hard to handle.",
      "whyWrong": {
        "a": "Explainability has no effect on storage.",
        "b": "It does not prevent false positives.",
        "c": "On the contrary, it helps qualify."
      }
    },
    "ida-q27": {
      "type": "short",
      "accepted": [
        "drift",
        "the drift",
        "concept drift",
        "data drift"
      ],
      "explanation": "Drift appears when uses, tools or the environment change. Without monitoring, the model loses precision or recall."
    },
    "ida-q28": {
      "type": "single",
      "correct": "c",
      "explanation": "24 justified alerts out of 120: 24 / 120 = 20 %. Recall also depends on the number of missed attacks, measured by replay.",
      "whyWrong": {
        "b": "5 % would correspond to 6 justified alerts out of 120.",
        "a": "80 % would correspond to 96 justified alerts.",
        "d": "24 is the number of justified alerts, not a percentage."
      }
    },
    "ida-q29": {
      "type": "single",
      "correct": "c",
      "explanation": "Enrichment (reputation, owner, criticality) speeds up triage with no impact risk. It is the lowest level of autonomy and the first to automate.",
      "whyWrong": {
        "b": "Isolation is an action, to be governed.",
        "d": "Deleting alerts is not enrichment.",
        "a": "Disabling accounts is a high-impact action."
      }
    },
    "ida-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "The higher the impact, the more human validation and reversibility are required. A critical server is often among the assets excluded from full automation.",
      "whyWrong": {
        "c": "Without a trace, we can neither audit nor fix.",
        "a": "A high-impact action must be reversible.",
        "b": "The timing does not replace validation."
      }
    },
    "ida-q31": {
      "type": "truefalse",
      "correct": true,
      "explanation": "An automation error can interrupt business. Reversibility, logging and guardrails limit the impact and allow quick correction."
    },
    "ida-q32": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Exclusions, limits and traceability reduce the risk of a runaway. Disabling logging would prevent understanding and correcting an error.",
      "whyWrong": {
        "d": "Without logs, no action can be audited."
      }
    },
    "ida-q33": {
      "type": "short",
      "accepted": [
        "forensic readiness",
        "the forensic readiness",
        "digital forensic readiness"
      ],
      "explanation": "Forensic readiness plans the sources to keep, their retention, integrity and the collection procedures. It avoids discovering at crisis time that the evidence does not exist."
    },
    "ida-q34": {
      "type": "open",
      "model": "I propose levels of autonomy: first enrichment with no action, then recommendations, next actions subject to human validation for anything with a high impact (isolating a server, disabling a privileged account), and finally automatic actions reserved for low-risk cases that are reversible and limited in scope. I list the critical assets excluded from full automation, set limits on volume and frequency, require logging of every action and a documented rollback. Playbooks are tested in staging and through exercises, reviewed after each incident, and the indicators (time saved, errors, cancellations) are tracked.",
      "criteria": [
        "The levels of autonomy are distinguished (enrichment, validation, automatic).",
        "Guardrails (exclusions, limits, logging, rollback) are cited.",
        "Tests and follow-up of playbooks are planned."
      ],
      "explanation": "Automation is governed by the level of risk: the higher the impact, the more human validation and reversibility are required."
    },
    "ida-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "A high MTTD indicates attacks seen late: we invest in sources, rules and hunting. An indicator only has value if it informs a decision.",
      "whyWrong": {
        "c": "The dashboard color is not guided by MTTD.",
        "b": "The price of office licenses is not guided by MTTD.",
        "d": "The number of meeting rooms has no link with MTTD."
      }
    },
    "ida-q36": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Many rules can be noisy, never tested or without data. Maturity is measured by validated coverage, precision, delays and the quality of processes."
    },
    "ida-q37": {
      "type": "single",
      "correct": "b",
      "explanation": "It describes maturity levels (people, processes, technology, services) to assess the current state, choose targets and build an improvement plan.",
      "whyWrong": {
        "c": "A framework does not replace people.",
        "a": "It encrypts nothing.",
        "d": "It does not assess network performance."
      }
    },
    "ida-q38": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Labor law and the GDPR require information, legitimate purpose and proportionality, with restricted access to data. Free access for all goes against the minimization principle.",
      "whyWrong": {
        "a": "Access is limited to what the mission justifies."
      }
    },
    "ida-q39": {
      "type": "truefalse",
      "correct": true,
      "explanation": "An indicator that triggers no decision is merely a number. For each one, we name the action it can trigger: add a source, tune a rule, hire, automate."
    },
    "ida-q40": {
      "type": "open",
      "model": "The two figures reveal a quality and coverage problem. I start with data: check that the sources needed for the priority techniques are collected, because rules without data detect nothing and the 11-day delay indicates attacks seen late. In parallel, I address noise: measure the precision of each rule, tune or retire the noisiest with documented exclusions, to reduce alert fatigue. Then I put the rules under detection as code (review, tests, progressive deployment) and validate coverage through authorized replays. The tracking indicators are detection delay, precision and validated coverage, with numerical targets, within the legal framework for monitoring.",
      "criteria": [
        "Data and coverage are addressed before rules.",
        "Noise reduction (precision, documented exclusions) is planned.",
        "Validation by replay and numerical indicators are proposed."
      ],
      "explanation": "A high false-positive rate and a long detection delay are handled together: data, rule quality, validation and indicators tied to decisions."
    }
  },
};
