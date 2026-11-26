// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "dso-q1",
    "prompt": "Which control analyzes third-party dependencies to detect known vulnerabilities?",
    "skills": [
      "l-dso-pipeline"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "SCA"
      },
      {
        "id": "b",
        "text": "SAST"
      },
      {
        "id": "c",
        "text": "DAST"
      },
      {
        "id": "d",
        "text": "A web application firewall"
      }
    ]
  },
  {
    "id": "dso-q2",
    "prompt": "DAST tests the running application, whereas SAST analyzes the code without running it.",
    "skills": [
      "l-dso-pipeline"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "dso-q3",
    "prompt": "Which controls can detect a problem before any deployment?",
    "skills": [
      "l-dso-pipeline"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "IaC analysis (Terraform)"
      },
      {
        "id": "b",
        "text": "Monitoring of production logs"
      },
      {
        "id": "c",
        "text": "SAST"
      },
      {
        "id": "d",
        "text": "Secret scanning"
      }
    ]
  },
  {
    "id": "dso-q13",
    "prompt": "A Terraform analyzer flags `cidr_blocks = [\"0.0.0.0/0\"]` on port 22. What is the right reaction?",
    "skills": [
      "l-dso-pipeline",
      "l-dso-ci"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Disable the analyzer"
      },
      {
        "id": "b",
        "text": "Fix it in the code then redeploy"
      },
      {
        "id": "c",
        "text": "Fix it by hand in the cloud console"
      },
      {
        "id": "d",
        "text": "Ignore it: the server has a password"
      }
    ]
  },
  {
    "id": "dso-q15",
    "prompt": "Propose the order for introducing security controls in the pipeline of a team that has none, specifying the blocking or informational mode of each.",
    "skills": [
      "l-dso-pipeline",
      "l-dso-supply"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "dso-q16",
    "prompt": "Where should secrets be searched for in a repository?",
    "skills": [
      "l-dso-pipeline",
      "l-dso-ci"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Nowhere, forges hide them"
      },
      {
        "id": "b",
        "text": "Only in .env files"
      },
      {
        "id": "c",
        "text": "In the code and in the whole Git history"
      },
      {
        "id": "d",
        "text": "Only in the latest version of the files"
      }
    ]
  },
  {
    "id": "dso-q31",
    "prompt": "What does the “shift left” principle mean in software security?",
    "skills": [
      "l-dso-pipeline"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Check only once in production"
      },
      {
        "id": "b",
        "text": "Remove the pipeline’s automated tests"
      },
      {
        "id": "c",
        "text": "Postpone deployments to the end of the month"
      },
      {
        "id": "d",
        "text": "Detect flaws earlier"
      }
    ]
  },
  {
    "id": "dso-q32",
    "prompt": "When should an application’s SBOM ideally be generated?",
    "skills": [
      "l-dso-pipeline"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Never, scans are enough"
      },
      {
        "id": "b",
        "text": "On every build"
      },
      {
        "id": "c",
        "text": "Once a year, during the audit"
      },
      {
        "id": "d",
        "text": "Only after a security incident"
      }
    ]
  },
  {
    "id": "dso-q33",
    "prompt": "A secret scanner must also examine the commit history, not only the latest version.",
    "skills": [
      "l-dso-pipeline"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dso-q4",
    "prompt": "Which acronym designates the standardized inventory of a software’s components?",
    "skills": [
      "l-dso-supply"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "dso-q5",
    "prompt": "An attacker publishes on the public registry a package bearing the name of the company’s internal library. What is this attack called?",
    "skills": [
      "l-dso-supply"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Dependency confusion"
      },
      {
        "id": "b",
        "text": "SQL injection into a database"
      },
      {
        "id": "c",
        "text": "Phishing by email"
      },
      {
        "id": "d",
        "text": "Typosquatting through typing errors"
      }
    ]
  },
  {
    "id": "dso-q6",
    "prompt": "With a lock file and `npm ci`, a newly published version of a dependency is automatically included in the next build.",
    "skills": [
      "l-dso-supply"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dso-q7",
    "prompt": "Which measures reduce the risk of compromise through a dependency?",
    "skills": [
      "l-dso-supply"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Automatically accepting every major update"
      },
      {
        "id": "b",
        "text": "Versions pinned by a lock file"
      },
      {
        "id": "c",
        "text": "Internal registry or approved mirror"
      },
      {
        "id": "d",
        "text": "Review of new dependencies"
      }
    ]
  },
  {
    "id": "dso-q8",
    "prompt": "Which framework defines provenance requirement levels for software artifacts? (acronym)",
    "skills": [
      "l-dso-supply"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "dso-q34",
    "prompt": "What is a transitive dependency?",
    "skills": [
      "l-dso-supply"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A dependency removed from the project"
      },
      {
        "id": "b",
        "text": "A dependency developed in-house"
      },
      {
        "id": "c",
        "text": "A dependency used only for tests"
      },
      {
        "id": "d",
        "text": "A dependency of a dependency"
      }
    ]
  },
  {
    "id": "dso-q35",
    "prompt": "Why verify the integrity hash of a downloaded package?",
    "skills": [
      "l-dso-supply"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To speed up the package download"
      },
      {
        "id": "b",
        "text": "To reduce the size of the installed package"
      },
      {
        "id": "c",
        "text": "To detect tampering"
      },
      {
        "id": "d",
        "text": "To remove unneeded dependencies"
      }
    ]
  },
  {
    "id": "dso-q14",
    "prompt": "Analyze the workflow using `pull_request_target` with `write-all`, an action pinned to `@main` and an AWS key in an environment variable: risks, attack scenario and fix.",
    "skills": [
      "l-dso-ci",
      "l-dso-supply"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "dso-q37",
    "prompt": "A very popular dependency cannot be compromised.",
    "skills": [
      "l-dso-supply"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dso-q9",
    "prompt": "Why pin a third-party action by commit hash rather than by `@v4` tag?",
    "skills": [
      "l-dso-ci"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A tag can be moved"
      },
      {
        "id": "b",
        "text": "To reduce the Git repository size"
      },
      {
        "id": "c",
        "text": "To speed up the action’s build"
      },
      {
        "id": "d",
        "text": "Because tags are forbidden by Git"
      }
    ]
  },
  {
    "id": "dso-q10",
    "prompt": "A secret was pushed by mistake to the main branch of a remote repository. Deleting it in a new commit a few minutes later is enough to protect it.",
    "skills": [
      "l-dso-ci"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dso-q11",
    "prompt": "Which practices harden a CI workflow?",
    "skills": [
      "l-dso-ci"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`permissions: write-all` to avoid errors"
      },
      {
        "id": "b",
        "text": "Protected environment with approval for production"
      },
      {
        "id": "c",
        "text": "`contents: read` permissions by default"
      },
      {
        "id": "d",
        "text": "OIDC federation to the cloud"
      }
    ]
  },
  {
    "id": "dso-q12",
    "prompt": "Which npm command installs dependencies while strictly respecting the lock file?",
    "skills": [
      "l-dso-ci"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "command"
  },
  {
    "id": "dso-q36",
    "prompt": "What is a protected production environment used for in CI?",
    "skills": [
      "l-dso-ci"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Speeding up test execution"
      },
      {
        "id": "b",
        "text": "Making the repository public"
      },
      {
        "id": "c",
        "text": "Deleting the build logs"
      },
      {
        "id": "d",
        "text": "Approval and isolated secrets"
      }
    ]
  },
  {
    "id": "dso-q38",
    "prompt": "Why prefer the `pull_request` trigger over `pull_request_target` for external contributions?",
    "skills": [
      "l-dso-ci"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It runs faster than the other one"
      },
      {
        "id": "b",
        "text": "No secret exposed to external code"
      },
      {
        "id": "c",
        "text": "It gives the token more rights"
      },
      {
        "id": "d",
        "text": "It removes the contribution’s tests"
      }
    ]
  },
  {
    "id": "dso-q39",
    "prompt": "Why is automatic masking of secrets in CI logs not enough?",
    "skills": [
      "l-dso-ci"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Masking removes them from the Git repository"
      },
      {
        "id": "b",
        "text": "The secrets then become useless"
      },
      {
        "id": "c",
        "text": "A script can exfiltrate them"
      },
      {
        "id": "d",
        "text": "The logs are always encrypted"
      }
    ]
  },
  {
    "id": "dso-q40",
    "prompt": "Which practices reduce the impact of a compromised CI runner?",
    "skills": [
      "l-dso-ci"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Ephemeral runners"
      },
      {
        "id": "b",
        "text": "Branch protection and mandatory review"
      },
      {
        "id": "c",
        "text": "Least-privilege tokens"
      },
      {
        "id": "d",
        "text": "Long-lived secrets in repository variables"
      }
    ]
  },
  {
    "id": "dso-q17",
    "prompt": "What does a vulnerability’s CVSS score measure?",
    "skills": [
      "l-dso-gouv"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The cost of fixing it"
      },
      {
        "id": "b",
        "text": "Its probability of being exploited tomorrow"
      },
      {
        "id": "c",
        "text": "Its theoretical severity"
      },
      {
        "id": "d",
        "text": "The number of servers affected"
      }
    ]
  },
  {
    "id": "dso-q18",
    "prompt": "Why not prioritize fixes using only the CVSS score?",
    "skills": [
      "l-dso-gouv"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "CVSS is a confidential score"
      },
      {
        "id": "b",
        "text": "Exploitation and exposure matter"
      },
      {
        "id": "c",
        "text": "CVSS never changes over time"
      },
      {
        "id": "d",
        "text": "CVSS is always wrong"
      }
    ]
  },
  {
    "id": "dso-q19",
    "prompt": "A vulnerability listed in a known-exploited catalog (KEV) must be handled as a priority.",
    "skills": [
      "l-dso-gouv"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dso-q20",
    "prompt": "Which criteria are used to prioritize fixing a vulnerability?",
    "skills": [
      "l-dso-gouv"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The criticality of the affected application"
      },
      {
        "id": "b",
        "text": "The component’s exposure to the Internet"
      },
      {
        "id": "c",
        "text": "The age of the package alone"
      },
      {
        "id": "d",
        "text": "Known or active exploitation"
      }
    ]
  },
  {
    "id": "dso-q21",
    "prompt": "Which CISA catalog lists vulnerabilities whose exploitation is confirmed? (acronym)",
    "skills": [
      "l-dso-gouv"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "dso-q22",
    "prompt": "What must an accepted security exception on a vulnerability contain?",
    "skills": [
      "l-dso-gouv"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An unlimited duration without review"
      },
      {
        "id": "b",
        "text": "Only a verbal agreement from the manager"
      },
      {
        "id": "c",
        "text": "Deletion of the alert without any trace"
      },
      {
        "id": "d",
        "text": "Justification, owner, deadline"
      }
    ]
  },
  {
    "id": "dso-q23",
    "prompt": "What is a VEX statement associated with an SBOM used for?",
    "skills": [
      "l-dso-gouv"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Say whether the product is affected"
      },
      {
        "id": "b",
        "text": "Replace the pipeline’s SCA analysis"
      },
      {
        "id": "c",
        "text": "Publish the complete source code"
      },
      {
        "id": "d",
        "text": "Encrypt the contents of the SBOM"
      }
    ]
  },
  {
    "id": "dso-q24",
    "prompt": "A secret appears in a pipeline’s logs. What is the first action?",
    "skills": [
      "l-dso-incident"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Only delete the log"
      },
      {
        "id": "b",
        "text": "Revoke it and replace it"
      },
      {
        "id": "c",
        "text": "Mask it in the interface"
      },
      {
        "id": "d",
        "text": "Wait until the end of the week"
      }
    ]
  },
  {
    "id": "dso-q25",
    "prompt": "A library used by your applications is announced as compromised. What does the SBOM allow?",
    "skills": [
      "l-dso-incident"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Identify the affected applications"
      },
      {
        "id": "b",
        "text": "Skip any investigation"
      },
      {
        "id": "c",
        "text": "Automatically delete the library"
      },
      {
        "id": "d",
        "text": "Update all servers at once"
      }
    ]
  },
  {
    "id": "dso-q26",
    "prompt": "After a CI runner is compromised, rebuilding on that same runner is enough to guarantee clean artifacts.",
    "skills": [
      "l-dso-incident"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dso-q27",
    "prompt": "Which actions follow the discovery of a CI compromise?",
    "skills": [
      "l-dso-incident"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Audit the builds of the period concerned"
      },
      {
        "id": "b",
        "text": "Revoke the secrets accessible to the pipeline"
      },
      {
        "id": "c",
        "text": "Erase the build logs"
      },
      {
        "id": "d",
        "text": "Rebuild on a clean environment"
      }
    ]
  },
  {
    "id": "dso-q28",
    "prompt": "Why keep build logs and provenance attestations?",
    "skills": [
      "l-dso-incident"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To speed up test execution"
      },
      {
        "id": "b",
        "text": "To automatically delete secrets"
      },
      {
        "id": "c",
        "text": "Reconstruct who built what"
      },
      {
        "id": "d",
        "text": "To increase the repository size"
      }
    ]
  },
  {
    "id": "dso-q29",
    "prompt": "What adjective describes a CI runner created for a single job then destroyed?",
    "skills": [
      "l-dso-incident"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "an adjective"
  },
  {
    "id": "dso-q30",
    "prompt": "An artifact delivered to customers was built during the compromise. What must be communicated to them?",
    "skills": [
      "l-dso-incident"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Nothing, so as not to worry them"
      },
      {
        "id": "b",
        "text": "Only the name of the pipeline concerned"
      },
      {
        "id": "c",
        "text": "A new artifact with no explanation at all"
      },
      {
        "id": "d",
        "text": "Affected versions and measures to take"
      }
    ]
  },
  {
    "id": "dso-q41",
    "prompt": "Why reference a third-party action by its commit hash rather than `@v3`?",
    "skills": [
      "l-dso-ci"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Tags are forbidden by the platform"
      },
      {
        "id": "b",
        "text": "The hash speeds up pipeline execution"
      },
      {
        "id": "c",
        "text": "The hash automatically encrypts the action’s code"
      },
      {
        "id": "d",
        "text": "A tag can be moved to malicious code"
      }
    ]
  },
  {
    "id": "dso-q42",
    "prompt": "What does the line `permissions: contents: read` limit in a workflow?",
    "skills": [
      "l-dso-ci"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The list of available secrets"
      },
      {
        "id": "b",
        "text": "The pipeline token’s rights to reading the repository only"
      },
      {
        "id": "c",
        "text": "The maximum duration of the steps"
      },
      {
        "id": "d",
        "text": "The number of simultaneous workflow runs"
      }
    ]
  },
  {
    "id": "dso-q43",
    "prompt": "Which acronym designates the inventory of a product’s software components (four letters)?",
    "skills": [
      "l-dso-supply"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  }
];
