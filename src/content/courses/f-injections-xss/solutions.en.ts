import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'f-injections-xss',
  practice: {
    'labo-sqli': {
      blocks: [
        { t: 'p', text: "In vulnerable mode, `admin' -- ` (with the trailing space) turns the password condition into a comment. In fixed mode, the same string is sent as a value: the database literally looks for a user named “admin' -- ”, which does not exist." },
        { t: 'p', text: 'The lab debrief details the variants (UNION, blind) and their signatures in the logs.' },
      ],
    },
    'revue-xss': {
      blocks: [
        {
          t: 'table',
          head: ['Line', 'Verdict', 'Fix'],
          rows: [
            ['1', '**Reflected XSS (DOM)**: URL parameter in innerHTML', '`textContent`'],
            ['2', '**Vulnerable** if website is `javascript:…`', 'Accept only `http:`/`https:` URLs (via `new URL()` and a protocol check)'],
            ['3', 'Safe', '—'],
            ['4', '**Stored XSS** if the body contains unsanitized HTML', 'Sanitize with DOMPurify on display, or store Markdown rendered safely'],
            ['5', 'Safe: React encodes the text', '—'],
          ],
        },
      ],
    },
    'revue-injections': {
      blocks: [
        {
          t: 'table',
          head: ['Extract', 'Injection and payload', 'Fix'],
          rows: [
            ['1', '**Command injection**: `host = 1.1.1.1; cat /etc/passwd`', 'Call without a shell (`subprocess.run(["traceroute", host])`) and strict validation (valid IP address or name)'],
            ['2', '**NoSQL injection**: `{"login": "admin", "pwd": {"$ne": null}}` bypasses the password', 'Check that `login` and `pwd` are **strings**, then compare the password hash'],
            ['3', '**Template injection (SSTI)**: `name = {{7*7}}` displays 49, then code execution', 'Pass the value as a variable: `render_template_string("<h1>Hello {{ name }}</h1>", name=name)`'],
            ['4', '**SQL injection in ORDER BY**: a bound parameter is impossible on an identifier', 'Allowlist of permitted columns, then insert the chosen column in the query'],
          ],
        },
        { t: 'p', text: 'Common measures: database account with minimal rights, service running as an unprivileged user, error logging, alerts on injection patterns (`;`, `$ne`, `{{`, `UNION`) and regression tests that replay each payload after the fix.' },
      ],
    },
  },
};
