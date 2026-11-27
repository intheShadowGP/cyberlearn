// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "g-code-securise-bases",
  questions: {
    "cbs-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "A bug makes the program act differently from what was intended. A vulnerability is a defect that an attacker can exploit to obtain what is forbidden to them; it may go unnoticed in normal use.",
      "whyWrong": {
        "d": "Seriousness does not depend on the label: a vulnerability can be critical.",
        "c": "All languages can have vulnerabilities.",
        "a": "The two notions are distinct."
      }
    },
    "cbs-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "An error spotted at design or writing time is fixed in a few minutes. In production, you must fix, test, deploy and sometimes inform users whose data was exposed.",
      "whyWrong": {
        "a": "The cost is not about free tools.",
        "d": "A flaw does not disappear by itself.",
        "b": "User acceptance is not the reason an early fix costs less."
      }
    },
    "cbs-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Design decisions (data handled, rights, separation of components) are hard to change later. Thinking about security from the start avoids costly corrections."
    },
    "cbs-q4": {
      "type": "short",
      "accepted": [
        "shift left",
        "shift-left",
        "shifting left"
      ],
      "explanation": "“Shift left” means checking security earlier (design, writing, tests) rather than at the end of a project, when corrections cost the most."
    },
    "cbs-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "With least privilege, a compromise of the program gives the attacker little: a service that only needs to read a folder should not be able to write or administer.",
      "whyWrong": {
        "c": "Security through obscurity relies on the secrecy of how something works.",
        "b": "Encryption protects data, not a program’s rights.",
        "d": "Logs serve to detect, not to limit rights."
      }
    },
    "cbs-q6": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Security is handled at every stage: design questions, input validation while writing, tests of hostile inputs, then monitoring in production.",
      "whyWrong": {
        "a": "Limiting security to operation comes too late."
      }
    },
    "cbs-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Usual tests check normal use. A vulnerability shows up against a hostile input that nobody tried: a program can work perfectly and remain vulnerable."
    },
    "cbs-q8": {
      "type": "single",
      "correct": "d",
      "explanation": "Validating means checking that a piece of data matches what is expected (type, format, length, allowed values) before using it, and rejecting it otherwise.",
      "whyWrong": {
        "a": "Logging is not validating.",
        "c": "Case says nothing about validity.",
        "b": "Encryption protects transport, not the data’s form."
      }
    },
    "cbs-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "An allowlist describes precisely what is accepted and rejects the rest. A denylist always forgets a variant.",
      "whyWrong": {
        "c": "A denylist lets forgotten variants through.",
        "b": "A form can be bypassed by sending the request directly.",
        "d": "Each input must be checked every time."
      }
    },
    "cbs-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Browser-side validation improves comfort, but an attacker sends their request directly to the server without going through the form. The check that matters is the server’s."
    },
    "cbs-q11": {
      "type": "single",
      "correct": "d",
      "explanation": "With a parameterized query (`cur.execute(\"… WHERE name = ?\", (name,))`), the value is sent separately from the SQL text: it cannot change its structure.",
      "whyWrong": {
        "b": "Removing characters is fragile and bypassable.",
        "a": "An f-string pastes the input into the query: that is the problem.",
        "c": "Case prevents nothing."
      }
    },
    "cbs-q12": {
      "type": "short",
      "accepted": [
        "int",
        "int()"
      ],
      "explanation": "`int(\"abc\")` raises a `ValueError`: this is the first step of validating a numeric input, to be completed by a range check."
    },
    "cbs-q13": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Type, range and presence are the basic checks for a numeric input. A special character has no reason to be in it.",
      "whyWrong": {
        "b": "Requiring a special character would make the input invalid."
      }
    },
    "cbs-q14": {
      "type": "single",
      "correct": "c",
      "explanation": "Output encoding turns `<` into `&lt;`: the browser displays the text instead of interpreting it as code (XSS). Template engines do it by default.",
      "whyWrong": {
        "b": "Copying it does not make it safe at display.",
        "a": "A text does not have to be converted to a number.",
        "d": "Without transformation, injected script runs."
      }
    },
    "cbs-q15": {
      "type": "single",
      "correct": "b",
      "explanation": "A secret written in the code is read by anyone with access to the repository, history included. It is put in the environment, a secrets manager or an unversioned local file.",
      "whyWrong": {
        "d": "This is a good practice.",
        "c": "This is a good practice.",
        "a": "This is acceptable for a local secret."
      }
    },
    "cbs-q16": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Git’s history keeps the earlier versions: the password remains readable. It must be considered compromised, revoked and replaced."
    },
    "cbs-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "The secret is injected at deployment, outside the code. A comment in the code, a command-line argument (visible in the process list) or an email expose it.",
      "whyWrong": {
        "c": "A comment in the code is versioned.",
        "a": "Arguments are visible to the machine’s other users.",
        "b": "An email is read and kept by many people."
      }
    },
    "cbs-q18": {
      "type": "short",
      "accepted": [
        ".gitignore",
        "gitignore"
      ],
      "explanation": "The `.gitignore` file prevents versioning a file such as `.env` by mistake. It does not protect a secret that was already committed."
    },
    "cbs-q19": {
      "type": "single",
      "correct": "a",
      "explanation": "A detailed message reveals the internal structure and helps the attacker. The user gets a neutral message; the team finds the detail in the logs.",
      "whyWrong": {
        "d": "A call trace reveals the program’s structure.",
        "c": "The SQL query helps prepare an injection.",
        "b": "A secret is never displayed."
      }
    },
    "cbs-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Logs circulate widely: they hold the event, the time and the identifier, never data that grants access or sensitive data.",
      "whyWrong": {
        "c": "The timestamp is useful and harmless data."
      }
    },
    "cbs-q21": {
      "type": "single",
      "correct": "c",
      "explanation": "The hash of the password is stored, computed with a slow, salted function: a database leak does not give the passwords. A password is never sent back: it is reset.",
      "whyWrong": {
        "d": "A password in clear is exposed in a leak.",
        "b": "Base64 is a reversible encoding, with no protection.",
        "a": "A key placed next to the data protects nothing."
      }
    },
    "cbs-q22": {
      "type": "single",
      "correct": "b",
      "explanation": "A dependency is a component written by others (installed with `pip` or `npm`) that your program uses. Its flaws become those of your application.",
      "whyWrong": {
        "a": "That describes a need for the network, not a dependency.",
        "d": "A configuration file is something else.",
        "c": "That meaning is not the one in software development."
      }
    },
    "cbs-q23": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A library’s code runs inside your program with its rights: a flaw in this library is a flaw in your application, hence the importance of updates."
    },
    "cbs-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "When a flaw is published, an attacker can exploit it on all unfixed versions. The update applies the fix.",
      "whyWrong": {
        "a": "Speed is not the goal.",
        "d": "Size is not the goal.",
        "c": "Tests remain necessary."
      }
    },
    "cbs-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "The lock file records precise versions: everyone installs the same packages, and updates become reviewed decisions. It does not forbid updating.",
      "whyWrong": {
        "a": "It encrypts nothing.",
        "b": "You can still update, knowingly.",
        "d": "It deletes nothing."
      }
    },
    "cbs-q26": {
      "type": "short",
      "accepted": [
        "SCA",
        "sca"
      ],
      "explanation": "Software composition analysis (SCA) compares the dependencies and their versions to databases of known vulnerabilities, for example with `pip-audit` or `npm audit`."
    },
    "cbs-q27": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "The publisher, the maintenance and the exact spelling of the name let you rule out abandoned or booby-trapped packages. Popularity alone does not guarantee security.",
      "whyWrong": {
        "c": "A popular package can be compromised or impersonated by a neighboring name."
      }
    },
    "cbs-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "An attacker publishes a package named close to a known one hoping for a typo: installing it then runs their code. The exact name and the publisher are checked.",
      "whyWrong": {
        "b": "A typo in the name does not give a newer version of the library.",
        "c": "The other libraries are not removed.",
        "d": "Python does not correct package names."
      }
    },
    "cbs-q29": {
      "type": "single",
      "correct": "d",
      "explanation": "A fresh eye finds what the author no longer sees: logic error, unchecked input, forgotten secret. It complements tests and tools.",
      "whyWrong": {
        "c": "A code review does not measure lines written per developer.",
        "a": "A review does not delete automatically.",
        "b": "It does not translate the code."
      }
    },
    "cbs-q30": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Invalid or hostile inputs are those that reveal flaws. A good test checks that the code refuses them cleanly (`pytest.raises`) rather than covering only normal use."
    },
    "cbs-q31": {
      "type": "single",
      "correct": "c",
      "explanation": "Static analysis (SAST) reads the code and spots known patterns such as `eval`, a hard-coded password or a query built by concatenation. It does not replace human review.",
      "whyWrong": {
        "a": "That describes a load test.",
        "d": "An analysis tool reports, it does not fix by itself.",
        "b": "Network monitoring is another function."
      }
    },
    "cbs-q32": {
      "type": "short",
      "accepted": [
        "Bandit",
        "bandit"
      ],
      "explanation": "Bandit spots patterns such as `pickle.loads`, `eval`, `shell=True` or passwords written in the code. Semgrep is a multi-language alternative."
    },
    "cbs-q33": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Tests, static analysis and review catch different errors. Running them at each change (continuous integration) prevents problems from piling up.",
      "whyWrong": {
        "b": "Releasing without checks lets all the errors through."
      }
    },
    "cbs-q34": {
      "type": "single",
      "correct": "a",
      "explanation": "The history lets you understand who changed what, review a change before merging and return to a sound version. Git makes nothing unreadable and does not replace tests.",
      "whyWrong": {
        "c": "The repository is not encrypted by default.",
        "d": "Git does not act on execution.",
        "b": "It does not replace tests."
      }
    },
    "cbs-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "A home-made algorithm has not been examined and almost always breaks. Recognized libraries are used (AES, ChaCha20, standard libraries).",
      "whyWrong": {
        "a": "Home-made algorithms are not forbidden by law: they are simply unsafe.",
        "c": "Speed is not the main reason.",
        "d": "Languages prevent nothing of the kind."
      }
    },
    "cbs-q36": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Fewer special cases and execution paths leave less room for errors and make review more effective. Simplicity is a security quality."
    },
    "cbs-q37": {
      "type": "single",
      "correct": "d",
      "explanation": "OWASP and ANSSI publish free guides that describe frequent mistakes and their fixes. The Top 10 serves as a starting point.",
      "whyWrong": {
        "b": "A project’s comments do not cover the common mistakes.",
        "a": "Logs describe what happened, not good practice.",
        "c": "Commit messages document specific changes."
      }
    },
    "cbs-q38": {
      "type": "multi",
      "correct": [
        "a",
        "d"
      ],
      "explanation": "You practice on authorized targets and you report the flaws you discover. Testing without authorization is illegal, and copying without understanding can introduce flaws.",
      "whyWrong": {
        "b": "Access without authorization is an offense.",
        "c": "Code not understood can contain flaws."
      }
    },
    "cbs-q39": {
      "type": "open",
      "model": "I validate the input (type, length, allowed characters) and reject the rest, because the input can be hostile. I use a parameterized query instead of concatenating the name into the SQL text, to avoid an injection. I keep the database password out of the code (environment variable) and do not write it in the logs. In case of error, I log the detail and only show a general message. I run the script with an account that only has the necessary rights on the database (least privilege). Finally, I test with invalid inputs and analyze the code with a tool such as Bandit.",
      "criteria": [
        "Input validation is mentioned.",
        "The parameterized query is chosen to avoid SQL injection.",
        "Handling of secrets and errors is mentioned.",
        "A complementary practice (least privilege, tests or analysis) is added."
      ],
      "explanation": "Each practice answers a precise risk: hostile input, injection, secret leak, information leak, excessive rights."
    },
    "cbs-q40": {
      "type": "open",
      "model": "An extract found online may have been written for another context: it can contain a flaw (a command built by concatenation, a hard-coded password), rely on an outdated or booby-trapped library, or even be malicious. If I do not understand what each line does and where its data comes from, I cannot know whether it is safe. To proceed safely: read the code line by line, look up the documentation of the functions used, check where the inputs come from, test in an isolated environment with invalid inputs, check the libraries added (name, publisher, updates), then have the code reviewed by another person or by an analysis tool.",
      "criteria": [
        "The risks of code not understood are cited (flaw, doubtful dependency, malicious code).",
        "A concrete verification approach is described (reading, tests, invalid inputs).",
        "Dependencies or review by a third party are mentioned."
      ],
      "explanation": "Understanding the code you run is the first security reflex: you cannot protect what you do not understand."
    },
    "cbs-q41": {
      "type": "single",
      "correct": "d",
      "explanation": "An argument list passed directly to the program does not go through a shell: the input can no longer add a command. The expected type (IP address, number) is validated too.",
      "whyWrong": {
        "b": "Forbidding a few characters leaves other separators possible.",
        "a": "Case does not change how separators are interpreted.",
        "c": "Quotes are bypassed by quotes in the input."
      }
    },
    "cbs-q42": {
      "type": "single",
      "correct": "b",
      "explanation": "The secret must be considered known: you revoke it first, then check its use in the logs. Deleting it from the repository does not erase it from history or copies.",
      "whyWrong": {
        "c": "History and clones keep the value.",
        "a": "Waiting leaves a valid secret in third-party hands.",
        "d": "Renaming does not remove the value from history."
      }
    },
    "cbs-q43": {
      "type": "short",
      "accepted": [
        "is_relative_to",
        "is_relative_to()"
      ],
      "explanation": "After resolving the path with `resolve()`, `is_relative_to(base)` confirms it stays inside the allowed folder and blocks `../`."
    }
  },
};
