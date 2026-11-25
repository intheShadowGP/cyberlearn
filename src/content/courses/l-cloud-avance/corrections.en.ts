// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "l-cloud-avance",
  questions: {
    "cav-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "An account is a strong isolation boundary. Separating environments limits what an attacker or a mistake can reach: the blast radius.",
      "whyWrong": {
        "b": "That is not the goal.",
        "a": "Supervision is precisely centralized.",
        "c": "Identities increase rather."
      }
    },
    "cav-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "A preventive guardrail (service control policy, organization policy) forbids the action, whatever the account’s rights. A detective guardrail only signals after the fact.",
      "whyWrong": {
        "d": "It is a detective control.",
        "b": "It is a periodic detective control.",
        "a": "It is not a guardrail."
      }
    },
    "cav-q3": {
      "type": "single",
      "correct": "a",
      "explanation": "An attacker who gets high rights tries to erase their traces. A rule set above the account makes this action impossible, even with a local administrator role.",
      "whyWrong": {
        "c": "It rather increases the cost.",
        "b": "It has no effect on speed.",
        "d": "Supervision remains necessary."
      }
    },
    "cav-q4": {
      "type": "truefalse",
      "correct": true,
      "explanation": "These rules define the ceiling of what is allowed in the accounts: they grant no right, but block forbidden actions, including for an account administrator."
    },
    "cav-q5": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "A landing zone provides the account structure, the guardrails, the centralized logging and the base network. A single shared account is its negation.",
      "whyWrong": {
        "b": "A single account removes isolation and the limited blast radius."
      }
    },
    "cav-q6": {
      "type": "short",
      "accepted": [
        "blast radius",
        "the blast radius"
      ],
      "explanation": "The blast radius is what a compromise can reach. It is reduced by separating accounts, least privilege and segmentation."
    },
    "cav-q7": {
      "type": "open",
      "model": "Structure: one organization with units by function (security, logging, shared network, workloads), separate accounts per team and per environment (production and non-production), and an automated account creation process that applies a baseline configuration (logging, detection, administration roles, budget alerts). A write-only logging account and a distinct security account collect the traces and the detection. Preventive guardrails at the organization level: forbid disabling logging, leaving the allowed regions, creating access keys for users, opening storage to the public. Detective guardrails: continuous compliance rules with alert. Access: federation, temporary roles, a closely monitored break-glass account. Justification: isolation of the blast radius, traceability, consistency at scale.",
      "criteria": [
        "A separation of accounts by environment and by function is proposed.",
        "Dedicated logging and security accounts are provided.",
        "Preventive and detective guardrails are distinguished.",
        "Account creation is automated with a baseline configuration."
      ],
      "explanation": "A landing zone turns security into a starting configuration: each new account is born compliant."
    },
    "cav-q8": {
      "type": "single",
      "correct": "b",
      "explanation": "Policy as code expresses the rules (for example “no public storage”) in versioned, reviewed, tested files applied automatically in the pipeline and the environment.",
      "whyWrong": {
        "d": "It is not executable code.",
        "c": "A spreadsheet is not applied automatically.",
        "a": "It is not reproducible."
      }
    },
    "cav-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "Checking the change plan (Terraform, deployment template) in CI prevents the creation of non-compliant resources. Continuous control complements it for manual changes.",
      "whyWrong": {
        "d": "Too late to prevent.",
        "a": "Too late and too rare.",
        "b": "After the fact."
      }
    },
    "cav-q10": {
      "type": "single",
      "correct": "d",
      "explanation": "A manual change in the console creates drift: the infrastructure no longer matches the code. It is detected by regular comparison and corrected in the code.",
      "whyWrong": {
        "a": "It is not a performance issue.",
        "b": "Unrelated to migration.",
        "c": "Unrelated to power."
      }
    },
    "cav-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A detective control signals after the creation: the storage is exposed until it is fixed. To prevent, you need a preventive control (organization policy, check in CI)."
    },
    "cav-q12": {
      "type": "single",
      "correct": "b",
      "explanation": "An exception with no deadline turns into a permanent hole. It carries an owner, a justification, a compensating measure and a review date.",
      "whyWrong": {
        "c": "That is not the goal.",
        "d": "It calls for a review on the contrary.",
        "a": "Unrelated."
      }
    },
    "cav-q13": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Versioning, review, tests and measuring false positives avoid a rule blocking wrongly or letting a defect through. An untested rule can interrupt production.",
      "whyWrong": {
        "c": "An untested rule can block legitimate deployments or detect nothing."
      }
    },
    "cav-q14": {
      "type": "short",
      "accepted": [
        "rego",
        "the rego"
      ],
      "explanation": "Rego is Open Policy Agent’s rule language. It describes the conditions that a change plan, a configuration or a request must meet."
    },
    "cav-q15": {
      "type": "single",
      "correct": "a",
      "explanation": "Whoever can attach a powerful role to a resource they control can run code with that role: it is a classic privilege escalation path.",
      "whyWrong": {
        "d": "That is not its effect.",
        "b": "That is not its effect.",
        "c": "That is not its effect."
      }
    },
    "cav-q16": {
      "type": "single",
      "correct": "c",
      "explanation": "Modifying a policy you hold amounts to choosing your own rights. Policy management permissions are therefore treated as administration rights.",
      "whyWrong": {
        "d": "It is not a read right.",
        "b": "It can modify policies.",
        "a": "Unrelated."
      }
    },
    "cav-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "The permission boundary defines the maximum effective rights of an identity, whatever the policies attached to it. It allows delegating the creation of roles without risk of escalation.",
      "whyWrong": {
        "b": "It limits, it does not grant.",
        "a": "It is not encryption.",
        "c": "It is not a log."
      }
    },
    "cav-q18": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A temporary credential expires in minutes or hours: an attacker who steals it has a short window of action. A static key remains valid until revoked."
    },
    "cav-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "Without a unique external ID in the trust condition, a third party can be tricked into using its access to your account on behalf of another customer. The external ID removes this risk.",
      "whyWrong": {
        "d": "That is not the risk.",
        "c": "That is not the risk.",
        "a": "That is not the risk."
      }
    },
    "cav-q20": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Modifying a role’s trust, creating keys for others or attaching a powerful role give additional rights. Read-only access to a log does not.",
      "whyWrong": {
        "b": "Read-only access does not allow raising one’s rights."
      }
    },
    "cav-q21": {
      "type": "single",
      "correct": "a",
      "explanation": "The data is encrypted with a data key, itself encrypted by a master key kept in a key service. Many data keys can exist without exposing the master key.",
      "whyWrong": {
        "c": "It is not mail.",
        "b": "It is not this principle.",
        "d": "It is not compression."
      }
    },
    "cav-q22": {
      "type": "single",
      "correct": "b",
      "explanation": "Only the small data key is re-encrypted with the new master key: the data volumes remain untouched. Rotation is therefore fast and low-risk.",
      "whyWrong": {
        "c": "That is precisely what is avoided.",
        "d": "It remains encrypted.",
        "a": "It becomes simpler."
      }
    },
    "cav-q23": {
      "type": "single",
      "correct": "d",
      "explanation": "Whoever manages the key must not be able to use it to read the data, and vice versa: this is separation of duties, which limits internal abuse.",
      "whyWrong": {
        "c": "It is not a matter of speed.",
        "b": "Unrelated.",
        "a": "Rotation remains necessary."
      }
    },
    "cav-q24": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A dynamic credential expires quickly and is specific to each use: its leak gives the attacker little time and it is easily revoked. A fixed password remains valid."
    },
    "cav-q25": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The provider operates the key service: only a key kept outside its infrastructure, or confidential computing, really limits this access. Contractual commitments and qualification complete the picture."
    },
    "cav-q26": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Rotation, short lifetime and access restricted to the application’s identity limit exposure. A secret shared in a common configuration widens the possible leak.",
      "whyWrong": {
        "a": "Sharing a secret multiplies the people and systems that hold it."
      }
    },
    "cav-q27": {
      "type": "short",
      "accepted": [
        "hsm",
        "an hsm",
        "the hsm"
      ],
      "explanation": "An HSM (Hardware Security Module) generates and keeps keys in dedicated, certified hardware: keys never leave in clear. Providers’ key services rely on HSMs."
    },
    "cav-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "ATT&CK describes the observed techniques. Detections are linked to it to see what is covered and what is not.",
      "whyWrong": {
        "b": "That is not its role.",
        "c": "That is not its role.",
        "d": "That is not its role."
      }
    },
    "cav-q29": {
      "type": "single",
      "correct": "c",
      "explanation": "A key used outside its usual addresses or regions, with an enumeration of resources, is a strong signal. It is detected from management logs.",
      "whyWrong": {
        "b": "It is normal usage.",
        "d": "It is a planned operation.",
        "a": "Unrelated."
      }
    },
    "cav-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "A controlled test (exercise, replayed scenario) shows whether the alert really triggers. It is done in an authorized, documented scope, without risk for production.",
      "whyWrong": {
        "d": "That is not the goal.",
        "a": "That would be an abuse.",
        "b": "Documentation is essential."
      }
    },
    "cav-q31": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A noisy rule exhausts analysts and ends up ignored. Quality is measured by precision, by coverage of the targeted behavior and by the associated response."
    },
    "cav-q32": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "API calls, flows and DNS cross-check to reconstruct an activity. Wallpapers bring no security information.",
      "whyWrong": {
        "c": "No value for detection."
      }
    },
    "cav-q33": {
      "type": "short",
      "accepted": [
        "honeytoken",
        "canary token",
        "a honeytoken",
        "decoy token",
        "canarytoken"
      ],
      "explanation": "A honeytoken is a fake key or credential with no legitimate use: any use triggers an alert with a low false-positive rate."
    },
    "cav-q34": {
      "type": "open",
      "model": "1) Use of a key or role outside its usual scope: source = management logs; criterion = calls from an address or country absent from a reference list, or from a hosting provider; response = disable the key, check the activity, contact the owner. 2) Modification of logging or detection: source = management logs; criterion = disabling, deletion or modification of the log destination; response = critical alert, restoration and investigation. 3) Privilege escalation: source = management logs; criterion = creation of a policy or key with administration rights, addition to an administrator group; response = check the change request, revoke if unjustified. For each: threshold tuning to limit false positives, test in an authorized environment, quality indicator (precision).",
      "criteria": [
        "Three distinct detections are proposed.",
        "The log source is specified for each.",
        "The trigger criterion is concrete and measurable.",
        "A response and a test or quality measure are indicated."
      ],
      "explanation": "A useful detection is a rule, a test and a response, not just an alert."
    },
    "cav-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "An attacker or ransomware that takes the main account also looks for the backups. An immutable copy in an isolated account withstands this scenario.",
      "whyWrong": {
        "c": "That is not the reason.",
        "d": "A test remains necessary.",
        "b": "Unrelated."
      }
    },
    "cav-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "A quarantine rule set on the account blocks the attacker’s actions while keeping resources, logs and evidence for the investigation.",
      "whyWrong": {
        "d": "You would lose the evidence.",
        "a": "It does not cut access.",
        "c": "It changes nothing."
      }
    },
    "cav-q37": {
      "type": "single",
      "correct": "d",
      "explanation": "Compute resources created in unused regions are a classic sign of compromise (cryptocurrency mining). A budget alert and a region restriction reveal or prevent it.",
      "whyWrong": {
        "a": "Unrelated.",
        "b": "Unrelated.",
        "c": "It does not create machines."
      }
    },
    "cav-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Abnormal consumption (compute, data transfer) is often the first visible signal of fraudulent use. It complements detection based on logs."
    },
    "cav-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "You cut access, keep the evidence and look for persistence (users, keys, roles, resources created). Erasing the logs destroys what lets you understand.",
      "whyWrong": {
        "c": "The logs are the evidence of the incident."
      }
    },
    "cav-q40": {
      "type": "short",
      "accepted": [
        "mttd",
        "the mttd"
      ],
      "explanation": "MTTD (Mean Time To Detect) measures the mean detection delay. Reducing it limits the time available to the attacker. MTTR measures the response time."
    }
  },
};
