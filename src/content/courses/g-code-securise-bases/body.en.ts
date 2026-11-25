import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'g-code-securise-bases',
  lesson: {
    intro:
      'A program that “works” is not necessarily a safe program. Most flaws do not come from sophisticated attacks, but from small habits: an input never checked, a password written in the code, a library never updated. This course shows, with small Python examples, the reflexes to acquire from the very first programs. They apply to all languages.',
    sections: [
      {
        id: 'pourquoi',
        title: 'Bug, vulnerability: why think about security early',
        blocks: [
          { t: 'def', term: 'Bug', text: 'Defect of the program that makes it behave differently from what was intended (a wrong calculation, a crash). It shows in normal use.' },
          { t: 'def', term: 'Vulnerability', text: 'Defect that an attacker can **exploit** to obtain what is forbidden to them: reading data, running code, impersonating an account. It often does not show in normal use: a program can work perfectly and be vulnerable.' },
          { t: 'p', text: 'The later you fix, the more it costs: an error found when reading the design is settled in minutes, the same error discovered in production forces you to fix, test, deploy and, sometimes, inform users whose data was exposed.' },
          {
            t: 'table',
            head: ['Stage', 'Security question to ask'],
            rows: [
              ['**Design**', 'What data is handled? Who can access it? What can a malicious user do?'],
              ['**Writing the code**', 'Are the inputs checked? Are the secrets outside the code?'],
              ['**Tests**', 'Have invalid or hostile inputs been tried?'],
              ['**Delivery**', 'Are the dependencies up to date? Are the program’s rights minimal?'],
              ['**Operation**', 'Are errors logged without secrets? Who monitors the logs?'],
            ],
          },
          { t: 'def', term: 'Least privilege', text: 'Principle of giving a program, an account or a person **only** the rights they need. If the program is compromised, the attacker does not inherit more.' },
          { t: 'callout', kind: 'key', text: 'Security is not a layer added at the end: it is a quality of the code, like readability, built at each stage (this is called “shifting left” the checks).' },
        ],
      },
      {
        id: 'entrees',
        title: 'Validating inputs',
        blocks: [
          { t: 'p', text: 'Everything that comes from outside the program (user input, file, request, URL parameter) is an **untrusted input**. It can be malformed by mistake, or deliberately hostile. It is **validated** before use: type, format, length, allowed values.' },
          { t: 'code', lang: 'python', caption: 'Validating a numeric input', code: 'def read_age(text):\n    try:\n        age = int(text)               # refuses “abc” and “12; DROP TABLE”\n    except ValueError:\n        raise ValueError("invalid age")\n    if not 0 <= age <= 130:            # reasonable range\n        raise ValueError("age out of bounds")\n    return age' },
          {
            t: 'table',
            head: ['Approach', 'Principle', 'Verdict'],
            rows: [
              ['**Allowlist**', 'Describe precisely what is accepted (format, range, values) and reject the rest', 'Recommended'],
              ['**Denylist**', 'Forbid a few characters or words deemed dangerous', 'Fragile: there is always a forgotten variant'],
            ],
          },
          { t: 'def', term: 'Injection', text: 'An entered piece of data is **interpreted as code** by another component (database, browser, system). Example: the input `x\' OR \'1\'=\'1` pasted into a SQL query changes its meaning.' },
          { t: 'code', lang: 'python', caption: 'SQL query: pasting the input or passing it as a parameter', code: '# To avoid: the input is pasted into the query text\ncur.execute("SELECT id FROM clients WHERE name = \'" + name + "\'")\n\n# Correct: the value is sent separately (parameterized query)\ncur.execute("SELECT id FROM clients WHERE name = ?", (name,))' },
          { t: 'list', items: ['**Validate on the server side**: a check done only in the browser is easily bypassed.', '**Encode on display**: entered text must be displayed as text, never interpreted as HTML.', '**Never execute** an input as code (`eval`, `exec`).'] },
          { t: 'callout', kind: 'tip', text: 'Each language has its validation libraries (`pydantic` in Python, `zod` in JavaScript): you describe the expected format once, and anything that does not match is rejected.' },
        ],
      },
      {
        id: 'secrets',
        title: 'Secrets, errors and logs',
        blocks: [
          { t: 'p', text: 'A **secret** is data that gives access: password, API key, token. It must never be written in the code, nor in a Git repository, even “temporarily”.' },
          {
            t: 'table',
            head: ['Topic', 'Avoid', 'Do'],
            rows: [
              ['**Secrets**', '`DB_PASSWORD = "Admin2026!"` in the source file', 'Environment variable or secrets manager, local file ignored by Git'],
              ['**Errors**', 'Showing the full trace or the SQL query to the user', 'General message for the user, detail in the logs'],
              ['**Logs**', 'Writing passwords, tokens or card numbers', 'Write the event and the identifier, never the secret'],
              ['**Users’ passwords**', 'Storing them in clear or with a simple encoding', 'Store a **slow, salted hash** (Argon2, bcrypt)'],
            ],
          },
          { t: 'code', lang: 'python', caption: 'Reading a secret from the environment', code: 'import os\n\ndb_password = os.environ["DB_PASSWORD"]   # defined outside the code\n\n# The .gitignore file avoids versioning a local secrets file:\n#   .env' },
          { t: 'callout', kind: 'warn', text: 'A secret committed by mistake stays in Git’s history, even erased from the last commit. It must be **considered known**, revoked and replaced.' },
          { t: 'list', items: ['Overly detailed error messages help an attacker prepare the next step.', 'Useful logs record **who, what, when, result**, with no sensitive data.', 'Never display a password, even a wrong one, in a message or a log.'] },
        ],
      },
      {
        id: 'dependances',
        title: 'Third-party libraries and updates',
        blocks: [
          { t: 'p', text: 'A modern program relies on **dependencies**: libraries written by others, installed with `pip` or `npm`. They save time, but their flaws become yours.' },
          { t: 'def', term: 'Dependency', text: 'Third-party library that the program needs. It may itself use others: the real list is often much longer than the one you wrote.' },
          {
            t: 'table',
            head: ['Good practice', 'Why'],
            rows: [
              ['**Choose carefully**: known publisher, maintained project, exact package name', 'Avoid abandoned or booby-trapped packages (a name almost identical to a known package)'],
              ['**Pin versions** (`requirements.txt` with versions, lock file)', 'Reproducible installs, no surprises'],
              ['**Update regularly**', 'Known flaws are public; a fix often exists'],
              ['**Analyze** (software composition analysis, SCA)', 'Spot the dependencies that have known flaws'],
              ['**Remove** what is no longer used', 'Less code, fewer risks'],
            ],
          },
          {
            t: 'example',
            title: 'A typo that costs dearly',
            blocks: [
              { t: 'code', lang: 'text', code: 'pip install requests     # legitimate library\npip install reqeusts     # almost identical name: may be a booby-trapped package' },
              { t: 'p', text: 'This is **typosquatting**: an attacker publishes a package named close to a popular package. Typing the name too fast runs their code on your machine. You check the exact name and the publisher before installing.' },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Before adding a library, ask yourself: do I really need it? Who maintains it? When was it last updated?' },
        ],
      },
      {
        id: 'revue',
        title: 'Reviewing, testing and analyzing your code',
        blocks: [
          { t: 'p', text: 'Nobody writes perfect code at the first attempt. Three habits catch many errors before they reach a user.' },
          {
            t: 'table',
            head: ['Habit', 'What it brings', 'Example'],
            rows: [
              ['**Code review**', 'A fresh eye spots errors and flaws', 'Another person reads the change before it is merged'],
              ['**Tests**', 'Check that the code does what it should, including against **invalid or hostile** inputs', 'Unit tests with `pytest`, including edge cases'],
              ['**Static analysis (SAST)**', 'A tool examines the code without running it and flags dangerous patterns', 'Bandit (Python), Semgrep, ESLint'],
            ],
          },
          { t: 'code', lang: 'python', caption: 'A test that checks the refusal of a hostile input', code: 'import pytest\n\ndef test_age_refuses_invalid_values():\n    for value in ["abc", "-5", "999", "12; DROP TABLE"]:\n        with pytest.raises(ValueError):\n            read_age(value)' },
          { t: 'list', items: ['**Version control** (Git): the history lets you read each change and go back.', '**Automate**: at each change, run the tests and the static analysis (continuous integration).', '**Review checklist**: inputs validated? secrets outside the code? general errors? dependencies up to date?'] },
          { t: 'callout', kind: 'key', text: 'Tools spot known patterns; the human eye spots logic errors (who has the right to do what). The two complement each other.' },
        ],
      },
      {
        id: 'habitudes',
        title: 'Good habits and responsible practice',
        blocks: [
          { t: 'list', items: ['**Stay simple**: short, clear code is easier to review and to secure.', '**Do not invent your own cryptography**: use proven libraries, never a home-made algorithm.', '**Least privilege**: a program does not need administrator rights to read a file.', '**Understand before copying**: code found on the Internet may contain flaws or malicious code.', '**Read the warnings** of the language and the tools instead of hiding them.', '**Stay informed**: the OWASP Top 10 and secure development guides (ANSSI, OWASP) describe the most common mistakes.'] },
          {
            t: 'example',
            title: 'Copy-pasting without understanding',
            blocks: [
              { t: 'p', text: 'An online answer suggests `os.system("ping " + host)` to test a machine. It works, but if `host` comes from a user, the input `example.fr; rm -rf ~` runs a second command. Before reusing an extract, ask yourself **what each line does** and **where its data comes from**. Here, you would prefer `subprocess.run(["ping", "-c", "1", host])`, with validation of `host`.' },
            ],
          },
          { t: 'callout', kind: 'legal', text: 'You practice on your own code, on applications made for it (labs, deliberately vulnerable applications). Testing a third party’s system without authorization is illegal. If you find a flaw by chance, report it to the person in charge without abusing it.' },
        ],
      },
    ],
    useCases: [
      'Reviewing a small personal script before sharing it: inputs, secrets, errors, dependencies.',
      'Adding tests that send invalid inputs to an input-handling function.',
      'Running Bandit on a Python project and handling the first warnings.',
      'Setting up a pinned versions file and a regular check of the dependencies.',
    ],
    commonMistakes: [
      'Thinking that “it works” means “it is safe”.',
      'Trusting an input because it comes “from our form”.',
      'Writing a password or a key in the code, then committing it.',
      'Showing a full error to the user.',
      'Installing a library with an approximate name or one never updated.',
      'Copying code without understanding where its data comes from.',
    ],
    bestPractices: [
      'Think about security from the design stage, with least privilege.',
      'Validate inputs with an allowlist, on the server side; parameterized queries; encoded output.',
      'Secrets outside the code; general errors; logs without sensitive data; hashed passwords.',
      'Dependencies chosen carefully, pinned, updated and analyzed.',
      'Review, tests including hostile inputs, static analysis and version control.',
      'Practice on authorized targets and report flaws responsibly.',
    ],
    keyPoints: [
      'A bug hinders normal use; a vulnerability can be exploited: a program can work and be vulnerable.',
      'Every input is untrusted: allowlist, server-side validation, parameterized queries.',
      'A secret is never in the code: environment variable or secrets manager.',
      'Dependencies have flaws: choose, pin, update, analyze.',
      'Reviewing, testing (including the hostile) and analyzing the code catches errors before production.',
    ],
  },
  practice: [
    {
      id: 'lire-code',
      kind: 'analysis',
      title: 'Reading a small script and spotting the problems',
      context: [
        { t: 'code', lang: 'python', code: 'import sqlite3\n\nDB_PASSWORD = "Admin2026!"\n\ndef search(name):\n    db = sqlite3.connect("clients.db")\n    query = "SELECT * FROM clients WHERE name = \'" + name + "\'"\n    try:\n        return db.execute(query).fetchall()\n    except Exception as e:\n        print("Error:", e, "- password:", DB_PASSWORD)\n\nresult = eval(input("Calculation: "))' },
      ],
      steps: ['Note each security problem and explain its consequence.', 'Rewrite the script safely.', 'Say which tool or habit would have detected them.'],
    },
    {
      id: 'checklist-projet',
      kind: 'case',
      title: 'Case study: a checklist for a first project',
      context: [{ t: 'p', text: 'You are developing a small task management web application in Python: user accounts, a database, a few third-party libraries. You will show it to friends then publish it.' }],
      steps: ['Write a list of eight security checks to do before publication.', 'For each one, indicate how to verify it (review, test, tool).', 'Choose the three most important and justify.'],
    },
    {
      id: 'audit-dependances',
      kind: 'analysis',
      title: 'Auditing a project’s dependencies',
      context: [
        { t: 'code', lang: 'text', code: 'requests==2.19.0        # last release in 2018\nflask                   # no version indicated\nreqeusts-oauth==1.0     # published 3 days ago, 12 downloads\npyyaml==5.1             # a code execution flaw is known for this version\nleft-pad-py             # is no longer used anywhere in the project' },
      ],
      steps: ['Analyze each line and say what is wrong.', 'Propose a decision for each (update, pin, remove, check).', 'Propose a habit or a tool to prevent these problems from coming back.'],
    },
  ],
  questions,
  resources: [
    { title: 'OWASP Top 10', source: 'OWASP', url: 'https://owasp.org/www-project-top-ten/' },
    { title: 'OWASP Proactive Controls', source: 'OWASP', url: 'https://owasp.org/www-project-proactive-controls/' },
    { title: 'Secure Coding Practices — Quick Reference Guide', source: 'OWASP', url: 'https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/' },
    { title: 'Python tutorial (in French)', source: 'Python documentation', url: 'https://docs.python.org/fr/3/tutorial/' },
    { title: 'SEI CERT C Coding Standard', source: 'Carnegie Mellon University', url: 'https://wiki.sei.cmu.edu/confluence/display/c/SEI+CERT+C+Coding+Standard' },
  ],
};
