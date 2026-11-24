import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'sqli-lab',
  questions: {
    'sqlab-q1': { type: 'single', correct: 'b', explanation: 'The apostrophe closes the SQL string prematurely and leaves an unterminated string: the error proves that the input changes the syntax of the query. It is every auditor’s first test.' },
    'sqlab-q2': { type: 'multi', correct: ['a', 'b', 'd'], explanation: "`admin' -- ` and `admin'#` close the string then comment out the password condition; `admin' OR '1'='1` adds an always-true condition which, because AND takes precedence over OR, returns the admin row. Other variants exist: the simulator lets you check each one.", whyWrong: { c: 'Without an apostrophe, the input stays a simple value: the right password is then required.', e: 'The SQL string is delimited by single quotes: a double quote does not close it.' } },
    'sqlab-q3': { type: 'truefalse', correct: true, explanation: 'With a parameterized query, the engine receives the query structure and the values separately. The input is compared literally to the login column: no user is named “admin\' -- ”.' },
    'sqlab-q4': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Clear-text storage (a leak exposes all passwords), detailed error messages (a help to the attacker) and no limit on attempts (brute force) are three weaknesses distinct from the injection.', whyWrong: { c: 'HTTPS is good practice: it protects the confidentiality of exchanges, but has no effect on injection.' } },
    'sqlab-q5': { type: 'single', correct: 'b', explanation: "The condition becomes `login = 'x' OR '1'='1' AND password = 'x' OR '1'='1'`. Since `'1'='1'` is always true, all rows are returned; the application takes the first one, here admin. That is why the order of the table makes this attack so dangerous." },
  },
  debrief: [
    { t: 'h', text: 'What to remember' },
    { t: 'list', items: ['The input changes the **structure** of the query: that is the definition of an injection.', 'The `--` or `#` comment neutralizes the rest of the query.', 'The **parameterized query** makes the attack impossible, whatever the payload.'] },
    { t: 'callout', kind: 'key', title: 'Complete defensive measures', text: 'Parameterized queries; passwords hashed with Argon2id and verified by the library; generic error messages for the user and detailed ones only in the logs; attempt limiting and MFA; a database account without administrative rights; detection of injection patterns in the WAF logs.' },
    { t: 'p', text: 'Signature in the logs: apostrophes, `--`, `OR 1=1`, `UNION SELECT` or `SLEEP(` in the parameters, and spikes of SQL errors on the server side.' },
  ],
};
