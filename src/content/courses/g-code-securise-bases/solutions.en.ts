import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'g-code-securise-bases',
  practice: {
    'lire-code': {
      blocks: [
        {
          t: 'table',
          head: ['Problem', 'Consequence'],
          rows: [
            ['Database password written in the code', 'Anyone who reads the code or the repository (history included) knows the password'],
            ['SQL query built by concatenation with `name`', 'SQL injection: reading or modifying the whole database'],
            ['`except Exception` that displays the error **and the password**', 'Leak of the secret in the output and the logs; overly detailed error message'],
            ['The function returns `None` after the error', 'The caller does not know a failure occurred'],
            ['`eval(input(…))`', 'Execution of any Python code typed by the user'],
          ],
        },
        { t: 'code', lang: 'python', caption: 'Fixed version', code: 'import ast\nimport logging\nimport os\nimport sqlite3\n\nlog = logging.getLogger(__name__)\n\ndef search(name):\n    if not (1 <= len(name) <= 60):\n        raise ValueError("invalid name")\n    db = sqlite3.connect("clients.db")\n    try:\n        return db.execute("SELECT * FROM clients WHERE name = ?", (name,)).fetchall()\n    except sqlite3.Error:\n        log.error("search impossible", exc_info=True)   # detail in the log\n        raise RuntimeError("internal error")             # general message\n    finally:\n        db.close()\n\n# No secret here: SQLite needs none. For a remote database:\n# db_password = os.environ["DB_PASSWORD"]\n\nvalue = ast.literal_eval(input("Value: "))       # literals only, never eval' },
        { t: 'p', text: 'What would have detected it: Bandit (hard-coded password, `eval`, query built by concatenation), a secret detector before the commit, a code review with a checklist, and a test sending an input such as `x\' OR \'1\'=\'1`.' },
      ],
    },
    'checklist-projet': {
      blocks: [
        {
          t: 'table',
          head: ['Check', 'How to verify it'],
          rows: [
            ['All inputs are validated on the server side (type, format, length)', 'Tests with invalid inputs, code review'],
            ['Parameterized SQL queries only', 'Search for concatenations (Bandit, Semgrep), review'],
            ['Passwords stored as slow, salted hashes', 'Review of the registration and login code'],
            ['No secret in the code or in the repository', 'Secret detector before commit, reading of the history'],
            ['General errors for the user, detail in the logs without secrets', 'Trigger an error and read the page and the logs'],
            ['HTTPS and `Secure`, `HttpOnly`, `SameSite` session cookies', 'Header check with the browser tools'],
            ['Each user only sees their own tasks', 'Two-account test on all routes'],
            ['Dependencies pinned, up to date and analyzed', 'Versions file, software composition analysis'],
          ],
        },
        { t: 'p', text: 'The three most important: **parameterized queries** (an injection exposes the whole database), **rights checked on the server side** (otherwise everyone reads the others’ tasks) and **no secrets in the repository** (a public secret is compromised). They cover the most frequent and most serious causes of flaws.' },
      ],
    },
    'audit-dependances': {
      blocks: [
        {
          t: 'table',
          head: ['Line', 'Problem', 'Decision'],
          rows: [
            ['`requests==2.19.0`', 'Old version, security fixes have been published since', 'Update to a recent version, then pin'],
            ['`flask`', 'No version indicated: the installation can change from one day to the next', 'Indicate a precise version (`flask==x.y.z`)'],
            ['`reqeusts-oauth==1.0`', 'Name close to `requests`, very recent and almost unknown: suspected typosquatting', 'Do not install; check the name and publisher of the library actually wanted'],
            ['`pyyaml==5.1`', 'Version with a known code execution flaw', 'Update and use `yaml.safe_load`'],
            ['`left-pad-py`', 'No longer used: needless attack surface', 'Remove from the list'],
          ],
        },
        { t: 'p', text: 'To prevent these problems from coming back: pinned versions file, software composition analysis (for example `pip-audit`) at each change, review of added dependencies and planned regular updates.' },
      ],
    },
  },
};
