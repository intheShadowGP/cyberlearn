// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "o-comptes-privileges-pam",
  questions: {
    "pam-q1": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Service accounts, technical identities and built-in accounts often have extensive rights and escape the processes planned for people: they are part of the inventory.",
      "whyWrong": {
        "a": "A disabled account with no rights presents no privilege risk; you only need to check that it stays disabled."
      }
    },
    "pam-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Email and browsing are the main attack vectors. If they run with an administration account, a single click can give the attacker these privileges.",
      "whyWrong": {
        "b": "That is not the goal.",
        "d": "That is not the goal.",
        "c": "That is not the reason."
      }
    },
    "pam-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "MFA protects authentication, not the machine: on a compromised office workstation, the attacker can recover the session’s tokens or hashes from memory. Accounts of the highest tier are only used from workstations of that tier."
    },
    "pam-q4": {
      "type": "short",
      "accepted": [
        "just-in-time",
        "just in time",
        "jit",
        "just-in-time access"
      ],
      "explanation": "Just-in-time access grants rights on demand, after validation, for a limited time, then removes them automatically: it removes standing privileges."
    },
    "pam-q15": {
      "type": "open",
      "model": "A domain administrator controls all the identities and all the machines of the company: the compromise of just one of these accounts lets an attacker encrypt or steal the whole information system, as most ransomware attacks show. Each additional account, especially if used from an office workstation or by an application, multiplies the opportunities for theft. Reducing their number therefore directly reduces the probability of a major incident, for a low cost compared with its consequences. Indicator: number of accounts in the domain administration groups (target: a few named accounts), complemented by the number of sign-ins of these accounts outside dedicated administration workstations (target: zero).",
      "criteria": [
        "The impact of a compromise of these accounts is explained in terms understandable to management.",
        "The link between the number of accounts and the probability of compromise is made.",
        "At least one measurable indicator is proposed with a target."
      ],
      "explanation": "Management decides on risks and indicators: translating a technical measure into these terms eases its funding."
    },
    "pam-q31": {
      "type": "single",
      "correct": "b",
      "explanation": "A built-in account, often with the same password on several machines, allows moving from one workstation to another. It must have a unique password and be monitored.",
      "whyWrong": {
        "a": "That is not the reason.",
        "d": "That is not the reason.",
        "c": "That is not the reason."
      }
    },
    "pam-q32": {
      "type": "single",
      "correct": "d",
      "explanation": "The inventory is built from technical sources: members of privileged groups, cloud console roles, local accounts, service accounts.",
      "whyWrong": {
        "a": "Incomplete and inaccurate.",
        "c": "Unrelated.",
        "b": "Unrelated."
      }
    },
    "pam-q5": {
      "type": "single",
      "correct": "c",
      "explanation": "The bastion centralizes administration access: strong authentication, control of who accesses what, logging and often session recording. Administered systems accept connections only from it.",
      "whyWrong": {
        "a": "That is not its role.",
        "d": "That is not its role.",
        "b": "That is not its role."
      }
    },
    "pam-q6": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Vault, rotation and session recording are central functions of a PAM solution, often complemented by a bastion and an approval workflow.",
      "whyWrong": {
        "d": "Compilation belongs to the development chain, not to access management."
      }
    },
    "pam-q7": {
      "type": "truefalse",
      "correct": true,
      "explanation": "An administration workstation exposed to email and the Internet can be compromised by phishing, and the attacker would then recover the administration credentials. The dedicated workstation removes this vector."
    },
    "pam-q8": {
      "type": "open",
      "model": "Refuse the shared account: each provider operator receives a named account, with MFA, that only gives access to the bastion. System administration accounts are in the vault; the bastion injects them without revealing them, with rotation after use. Access is limited to the contract scope, if possible opened on demand for a limited time (or in agreed windows), and all sessions are recorded. The contract provides for notification of operator departures, quarterly review of accounts and removal of access at the end of the contract. The bastion’s logs are sent to the SIEM with alerts on sign-ins outside the window.",
      "criteria": [
        "Named accounts with MFA replace the shared account.",
        "Access goes through a bastion with a vault or session recording.",
        "Rights are limited in scope or duration.",
        "Follow-up (review, removal of access, monitoring) is provided."
      ],
      "explanation": "A shared account makes it impossible to attribute an action to a person and survives the departure of the operators: it is one of the first things to fix with a provider."
    },
    "pam-q33": {
      "type": "single",
      "correct": "a",
      "explanation": "The vault keeps the passwords of privileged accounts; the administrator does not know them, the bastion uses them in their place.",
      "whyWrong": {
        "b": "That would be a serious mistake.",
        "c": "That would be a serious mistake.",
        "d": "That is not its role."
      }
    },
    "pam-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "The bastion concentrates access: if compromised, the attacker reaches everything it administers. It is therefore administered from the highest tier, with MFA and monitoring.",
      "whyWrong": {
        "a": "Unrelated.",
        "d": "It must not be.",
        "b": "It does log."
      }
    },
    "pam-q9": {
      "type": "single",
      "correct": "b",
      "explanation": "A gMSA has a long password, generated and changed automatically by Active Directory, that only authorized servers can retrieve. No one needs to know it.",
      "whyWrong": {
        "a": "A short password is weak.",
        "d": "It would spread everywhere.",
        "c": "A file is a risk."
      }
    },
    "pam-q10": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "The Git history is copied by each clone and often kept by platforms: a published secret must be considered known. It is replaced, its use is checked and recurrence is prevented.",
      "whyWrong": {
        "b": "Deleting the commit does not remove the secret from existing copies of the repository."
      }
    },
    "pam-q11": {
      "type": "short",
      "accepted": [
        "dynamic secret",
        "dynamic secrets"
      ],
      "explanation": "A dynamic secret is generated for a precise use and duration, then revoked by the vault. Its leak has a time-limited impact."
    },
    "pam-q12": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Staging is often less protected than production: a shared credential lets one move from one to the other. Each environment must have its own accounts and secrets, whatever their length."
    },
    "pam-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "A short token, issued by federation for each run, limits the impact of a leak. A permanent key remains exploitable until revoked.",
      "whyWrong": {
        "c": "A leak would remain exploitable.",
        "b": "Far too long.",
        "a": "Too dependent on a manual action."
      }
    },
    "pam-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "Source code is copied, shared and kept with its whole history. Secrets go in a vault, with access control and rotation.",
      "whyWrong": {
        "d": "It is the recommended use.",
        "a": "It is a good use.",
        "b": "It is a good use."
      }
    },
    "pam-q13": {
      "type": "single",
      "correct": "d",
      "explanation": "The scope manager knows the real need. The list must come from technical sources (not from declarations), and each decision is traced to serve as evidence.",
      "whyWrong": {
        "c": "There would be no control.",
        "a": "Rights drift over time.",
        "b": "It does not know the need."
      }
    },
    "pam-q14": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "The emergency account must remain available in an outage, but its use must be exceptional, controlled and immediately visible.",
      "whyWrong": {
        "a": "Daily use would turn the emergency account into an ordinary administration account, with very high privileges and little monitoring. It is tested at planned intervals, under control."
      }
    },
    "pam-q16": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A former employee’s account that stays active can be used by them or by an attacker without anyone noticing. Departure must trigger immediate disabling, then deletion according to the procedure."
    },
    "pam-q37": {
      "type": "single",
      "correct": "a",
      "explanation": "Rights drift: changes of position, finished projects, providers gone. A quarterly review, complemented by alerts on additions, limits this drift.",
      "whyWrong": {
        "d": "Far too rare.",
        "c": "They drift.",
        "b": "Too late."
      }
    },
    "pam-q38": {
      "type": "single",
      "correct": "b",
      "explanation": "An auditor relies on dated, verifiable evidence produced as you go: extracted list, manager’s decisions, traced removals.",
      "whyWrong": {
        "c": "A capture only proves a state.",
        "d": "Not verifiable.",
        "a": "No evidence."
      }
    },
    "pam-q39": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A shared account prevents identifying the author of an action and survives people’s departure. Each administrator has a named account."
    },
    "pam-q40": {
      "type": "short",
      "accepted": [
        "rotation",
        "the rotation"
      ],
      "explanation": "Rotation limits how long a stolen secret remains usable. After an exposure, it is triggered without delay."
    },
    "pam-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "An out-of-process addition to a privileged group is a signal of privilege escalation or persistence. It must be alerted in real time.",
      "whyWrong": {
        "c": "Normal event.",
        "b": "No security interest.",
        "a": "No security interest."
      }
    },
    "pam-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "Administration accounts must only authenticate from the planned workstations and bastion. Any sign-in from an ordinary workstation is a deviation to investigate.",
      "whyWrong": {
        "d": "It is normal use.",
        "c": "It is normal use.",
        "a": "It is normal use."
      }
    },
    "pam-q19": {
      "type": "single",
      "correct": "c",
      "explanation": "An attacker who takes control of a server can erase its local logs. A centralized copy makes it possible to detect and reconstruct the incident.",
      "whyWrong": {
        "b": "That is not the goal.",
        "d": "That is not the goal.",
        "a": "That is not the goal."
      }
    },
    "pam-q20": {
      "type": "single",
      "correct": "a",
      "explanation": "You cut access, invalidate sessions and tokens, then replace the accessible secrets. The logs are kept to understand the extent.",
      "whyWrong": {
        "d": "Waiting lets the attacker act.",
        "c": "It changes nothing.",
        "b": "It destroys evidence."
      }
    },
    "pam-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A fallback account is rarely used: any sign-in is either a real emergency or a compromise. In both cases, it must be seen right away."
    },
    "pam-q22": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Unusual sign-in, account creation and cutting the logs are strong signals. A sign-in from the dedicated workstation is normal use.",
      "whyWrong": {
        "a": "It is normal use."
      }
    },
    "pam-q23": {
      "type": "short",
      "accepted": [
        "siem",
        "the siem"
      ],
      "explanation": "The SIEM collects logs, correlates them and raises alerts. It receives in particular the logs of the bastion and the domain controllers."
    },
    "pam-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "The model separates accounts and machines by their level of control (directory, servers, workstations) so that a theft of credentials on one tier does not give access to the higher tier.",
      "whyWrong": {
        "d": "That is not the definition.",
        "c": "That is not the definition.",
        "a": "That is not the definition."
      }
    },
    "pam-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "A common local password lets an attacker move from workstation to workstation. A unique password per machine, renewed automatically, limits this movement.",
      "whyWrong": {
        "c": "That is the weakness to avoid.",
        "d": "That is not the goal.",
        "b": "That is not the goal."
      }
    },
    "pam-q26": {
      "type": "single",
      "correct": "c",
      "explanation": "Any directory user can request a service ticket for this account and try to crack its password offline. The defense: very long passwords or gMSA.",
      "whyWrong": {
        "a": "That is not this risk.",
        "d": "That is not this risk.",
        "b": "That is not this risk."
      }
    },
    "pam-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "A long, random secret changed automatically makes offline cracking unrealistic. Rights are also reduced to the strict minimum.",
      "whyWrong": {
        "c": "That would worsen the risk.",
        "b": "That would worsen the impact.",
        "a": "That would worsen the risk."
      }
    },
    "pam-q28": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Rights are transmitted through group nesting: the user inherits the privileges. Nested groups must be included in the review."
    },
    "pam-q29": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Tiers, unique local passwords and review of nestings reduce escalation paths. Using an administration account for email multiplies them.",
      "whyWrong": {
        "d": "It exposes privileges to phishing."
      }
    },
    "pam-q30": {
      "type": "short",
      "accepted": [
        "laps",
        "windows laps"
      ],
      "explanation": "LAPS (Local Administrator Password Solution) generates and renews a unique local administrator password per machine, stored in a controlled way in the directory."
    }
  },
};
