// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "l-devsecops-pipeline",
  questions: {
    "dso-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "SCA (Software Composition Analysis) inventories third-party components, including transitive ones, and matches them against vulnerability databases. SAST analyzes your own code.",
      "whyWrong": {
        "b": "SAST analyzes the code you write.",
        "c": "DAST tests the running application.",
        "d": "A web application firewall filters traffic; it does not analyze dependencies."
      }
    },
    "dso-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "DAST sends requests to the deployed application (in pre-production) and observes its responses; SAST reads the source code. They are complementary: each sees flaws the other misses."
    },
    "dso-q3": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Secrets, IaC and SAST run on the code, before any production release: this is “shift left”.",
      "whyWrong": {
        "b": "Production monitoring detects after deployment; it remains essential but is not preventive."
      }
    },
    "dso-q13": {
      "type": "single",
      "correct": "b",
      "explanation": "The fix is made in the code (source of truth), reviewed and redeployed. A manual fix would be overwritten at the next deployment and would create drift.",
      "whyWrong": {
        "d": "A password does not justify exposing SSH to the whole Internet.",
        "c": "This creates drift from the code.",
        "a": "You would remove the detection instead of fixing the problem."
      }
    },
    "dso-q15": {
      "type": "open",
      "model": "1) Secret detection (local hook + CI), blocking from the start: few false positives, major impact. 2) SCA, blocking limited to critical or exploited vulnerabilities, informational otherwise. 3) IaC analysis, informational then blocking on a short list of rules (public storage, open administration ports). 4) SAST, informational at first, then blocking on high-confidence rules (injections). 5) Container image analysis. 6) DAST in pre-production, informational. In parallel: pipeline hardening (permissions, OIDC, pinning) and indicators (time to fix, number of exceptions, repository coverage).",
      "criteria": [
        "Secret detection comes first and in blocking mode.",
        "The progressive move from informational to blocking is explained.",
        "At least four controls are ordered with justification.",
        "Tracking indicators are proposed."
      ],
      "explanation": "Progressive adoption avoids rejection by the teams; a control disabled for lack of tuning brings no security at all."
    },
    "dso-q16": {
      "type": "single",
      "correct": "c",
      "explanation": "A secret deleted from a file remains in the Git history. Tools such as gitleaks scan all commits.",
      "whyWrong": {
        "d": "A deleted secret remains in the history.",
        "b": "Secrets are found in many files.",
        "a": "Forges do not hide the history."
      }
    },
    "dso-q31": {
      "type": "single",
      "correct": "d",
      "explanation": "The earlier a flaw is detected (workstation, review, CI), the less it costs to fix. Automated security controls are therefore placed as close to the code as possible.",
      "whyWrong": {
        "c": "That is not the meaning.",
        "b": "On the contrary, controls are added.",
        "a": "It is the opposite."
      }
    },
    "dso-q32": {
      "type": "single",
      "correct": "b",
      "explanation": "An SBOM produced on every build reflects exactly what is shipped. It lets you answer in minutes “are we affected by this vulnerability?”.",
      "whyWrong": {
        "c": "It would be outdated.",
        "d": "You must have it before the incident.",
        "a": "You would lose visibility on the components."
      }
    },
    "dso-q33": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A secret deleted from a file remains present in earlier commits and can be recovered. Scanning the whole history is necessary."
    },
    "dso-q4": {
      "type": "short",
      "accepted": [
        "sbom",
        "software bill of materials"
      ],
      "explanation": "The SBOM (Software Bill of Materials), in SPDX or CycloneDX formats, lists the components and their versions. It is increasingly required, notably under the European Cyber Resilience Act."
    },
    "dso-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "Dependency confusion exploits package managers that prefer the public version (often more recent) over the internal package of the same name. Countermeasures: reserved namespaces and explicit registry configuration.",
      "whyWrong": {
        "d": "Typosquatting relies on a similar name (typos), not an identical one to an internal package.",
        "b": "An SQL injection targets a database.",
        "c": "Phishing targets people."
      }
    },
    "dso-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "It is the opposite: `npm ci` installs exactly the versions and hashes of the lock. A new version only enters when the lock is deliberately updated, which leaves time for a review."
    },
    "dso-q7": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Review, pinned versions and a controlled registry limit the introduction of unverified code.",
      "whyWrong": {
        "a": "Automatically accepting major updates lets potentially compromised code in without review."
      }
    },
    "dso-q8": {
      "type": "short",
      "accepted": [
        "slsa"
      ],
      "explanation": "SLSA, led by the OpenSSF, grades the requirements for build provenance and integrity: source traceability, isolated build, signed and verifiable provenance."
    },
    "dso-q34": {
      "type": "single",
      "correct": "d",
      "explanation": "You do not declare most of them: they are brought in by your direct dependencies. SCA must inventory them, since a vulnerability often hides there.",
      "whyWrong": {
        "c": "That is not the definition.",
        "a": "That is not the definition.",
        "b": "That is not the definition."
      }
    },
    "dso-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "The lock file contains the hashes: a package substituted or modified on the registry is refused at installation.",
      "whyWrong": {
        "a": "That is not the purpose.",
        "b": "That is not the purpose.",
        "d": "That is not the purpose."
      }
    },
    "dso-q14": {
      "type": "open",
      "model": "Risks: `pull_request_target` runs in the target repository’s context with its secrets, but checking out `head.sha` fetches the pull request’s code, potentially malicious; `npm install` then runs the install scripts of that code with the AWS key in the environment and a `write-all` token. Scenario: a stranger opens a pull request modifying package.json with a postinstall script that exfiltrates AWS_SECRET_ACCESS_KEY and the token, then pushes code to main. In addition, the `@main` action can change at any time. Fix: use `pull_request` (no secrets for external contributions), `permissions: contents: read`, actions pinned by hash, `npm ci`, no AWS key (OIDC federation in a separate deployment job, on main only, protected environment).",
      "criteria": [
        "The danger of `pull_request_target` combined with checking out the contribution’s code is identified.",
        "Running install scripts with secrets is explained.",
        "The excessive permissions and the unpinned action are noted.",
        "A complete fix (pull_request, permissions, pinning, OIDC) is proposed."
      ],
      "explanation": "This combination enabled several real compromises of open-source projects: it is one of the major risks listed by OWASP for CI/CD pipelines."
    },
    "dso-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Compromises of maintainer accounts and popular components exist. Popularity replaces neither version locking nor review of updates."
    },
    "dso-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "A Git tag is movable: if the action’s repository is compromised, the tag can point to malicious code that will run with your pipeline’s secrets. A commit hash is immutable.",
      "whyWrong": {
        "c": "It is not a matter of speed.",
        "d": "Tags are allowed.",
        "b": "Repository size is not concerned."
      }
    },
    "dso-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "As soon as it is pushed, the secret exists in the remote repository’s history, in clones and caches, and may have been collected by bots that watch repositories within seconds. A new commit does not remove it from the history: it must be revoked, replaced, then the history cleaned if necessary."
    },
    "dso-q11": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Least privilege, absence of static secrets and approval for production reduce the impact of a pipeline compromise.",
      "whyWrong": {
        "a": "`write-all` gives the token the right to modify the repository, releases and packages: malicious pipeline code could rewrite everything."
      }
    },
    "dso-q12": {
      "type": "short",
      "accepted": [
        "npm ci"
      ],
      "explanation": "`npm ci` installs exactly the contents of the lock, fails if it is inconsistent with package.json and verifies the integrity hashes."
    },
    "dso-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "Production secrets are only available to jobs attached to this environment, after approval and from allowed branches.",
      "whyWrong": {
        "a": "That is not its purpose.",
        "c": "It does not touch the logs.",
        "b": "It does not make anything public."
      }
    },
    "dso-q38": {
      "type": "single",
      "correct": "b",
      "explanation": "`pull_request` runs with reduced rights and without secrets for external contributions. `pull_request_target` runs with the target repository’s secrets: dangerous if it fetches the contribution’s code.",
      "whyWrong": {
        "a": "Speed is not the reason.",
        "c": "It gives fewer.",
        "d": "It removes none."
      }
    },
    "dso-q39": {
      "type": "single",
      "correct": "c",
      "explanation": "Masking only protects the display. A script can encode or send the secret elsewhere: the answer is to limit the available secrets and their lifetime.",
      "whyWrong": {
        "d": "They are not by default.",
        "a": "Masking does not act on the repository.",
        "b": "They remain usable."
      }
    },
    "dso-q40": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "A runner destroyed after each job keeps nothing; limited tokens and review reduce what an attacker can do. Long-lived secrets increase the impact.",
      "whyWrong": {
        "d": "A long-lived secret remains exploitable after the compromise."
      }
    },
    "dso-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "CVSS describes intrinsic severity (impact, complexity). It does not say whether the flaw is exploited nor whether it is exposed in your environment.",
      "whyWrong": {
        "b": "That is another indicator (for example EPSS).",
        "a": "It does not put a figure on the cost.",
        "d": "It does not depend on your estate."
      }
    },
    "dso-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "A medium flaw actively exploited on an exposed service comes before a critical flaw that cannot be exploited in your environment. Severity, known exploitation, exposure and asset criticality are combined.",
      "whyWrong": {
        "d": "It is useful but incomplete.",
        "a": "It is public.",
        "c": "It can be revised."
      }
    },
    "dso-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Observed exploitation in the wild turns a theoretical risk into a real threat. These catalogs serve as a priority criterion and a fix deadline."
    },
    "dso-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Exploitation, exposure and criticality measure the real risk. The age of the package is not a criterion on its own.",
      "whyWrong": {
        "c": "An old package is not necessarily vulnerable or exposed."
      }
    },
    "dso-q21": {
      "type": "short",
      "accepted": [
        "kev",
        "cisa kev",
        "known exploited vulnerabilities",
        "the kev"
      ],
      "explanation": "The KEV (Known Exploited Vulnerabilities) lists actively exploited flaws, with a fix deadline for US government agencies. It is used as a priority criterion by many organizations."
    },
    "dso-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "An exception with no owner or deadline becomes an invisible debt. It is dated, justified, compensated by a measure and reviewed.",
      "whyWrong": {
        "b": "A verbal agreement leaves no trace.",
        "c": "You lose traceability.",
        "a": "It must expire."
      }
    },
    "dso-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "A vulnerable component is not always reachable. A VEX specifies “affected”, “not affected” or “fixed”, which avoids useless alerts and useless fixes.",
      "whyWrong": {
        "d": "It is not encryption.",
        "b": "It complements SCA, without replacing it.",
        "c": "It does not publish the code."
      }
    },
    "dso-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "An exposed secret must be considered compromised: you revoke it, issue a new one, then examine its use.",
      "whyWrong": {
        "a": "The secret may have been copied.",
        "d": "Waiting leaves the secret exploitable.",
        "c": "Masking it does not invalidate it."
      }
    },
    "dso-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "Each application’s SBOM answers “are we affected?” in minutes. Removal or update can then be targeted.",
      "whyWrong": {
        "c": "It deletes nothing.",
        "d": "It updates nothing.",
        "b": "The investigation remains necessary."
      }
    },
    "dso-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The compromised runner can still inject code or steal secrets. You rebuild on a clean environment, from a known state, then verify the artifacts."
    },
    "dso-q27": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "You cut off access, measure the extent (which artifacts were built) and rebuild from a clean state. Erasing the logs destroys evidence.",
      "whyWrong": {
        "c": "The logs are used to reconstruct the incident."
      }
    },
    "dso-q28": {
      "type": "single",
      "correct": "c",
      "explanation": "In an incident, they identify the potentially affected artifacts, their source and their build chain.",
      "whyWrong": {
        "d": "That is not the purpose.",
        "b": "They delete nothing.",
        "a": "No effect on speed."
      }
    },
    "dso-q29": {
      "type": "short",
      "accepted": [
        "ephemeral",
        "disposable",
        "ephemeral runner",
        "an ephemeral runner"
      ],
      "explanation": "An ephemeral runner keeps no cache or secret from one job to the next: a compromise does not persist and does not contaminate later builds."
    },
    "dso-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "Customers need the affected versions, verifiable indicators (hashes) and the measures to take, along with a fixed and signed artifact.",
      "whyWrong": {
        "a": "That would expose them.",
        "b": "Insufficient.",
        "c": "Without an explanation, they cannot act."
      }
    },
    "dso-q41": {
      "type": "single",
      "correct": "d",
      "explanation": "A version tag can be changed by the action’s owner (or an attacker who compromises them). A commit hash designates exact content that cannot be replaced.",
      "whyWrong": {
        "b": "The choice has no effect on speed.",
        "a": "Tags are allowed; the problem is their mobility.",
        "c": "The hash identifies the code, it does not encrypt it."
      }
    },
    "dso-q42": {
      "type": "single",
      "correct": "b",
      "explanation": "It reduces the automatic token’s rights: a compromised step cannot modify the repository or publish. It applies least privilege to the pipeline.",
      "whyWrong": {
        "d": "The number of runs is set differently.",
        "c": "Duration is another setting.",
        "a": "Secrets are managed separately."
      }
    },
    "dso-q43": {
      "type": "short",
      "accepted": [
        "SBOM",
        "sbom"
      ],
      "explanation": "An SBOM (Software Bill of Materials) lists components and their versions, making it quick to tell whether an announced vulnerability concerns the product."
    }
  },
};
