import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'f-injections-xss',
  lesson: {
    intro:
      'Injections have been in the OWASP Top 10 for twenty years. They all have the same cause: data supplied by the user ends up being **interpreted as code** by another component, whether a database, a browser or a shell. Once this idea is understood, the fix becomes systematic: never build code by concatenating data.',
    sections: [
      {
        id: 'cause',
        title: 'The common cause: mixing data and code',
        blocks: [
          { t: 'def', term: 'Injection', text: 'Vulnerability in which untrusted data is inserted into an **interpreted** command or query, and changes its structure instead of being handled as a mere value.' },
          { t: 'def', term: 'Trust boundary', text: 'Point where data moves from an uncontrolled zone (browser, external API, imported file) to a zone that uses it. Any data crossing this boundary is considered hostile.' },
          {
            t: 'table',
            head: ['Interpreter', 'Injection', 'Structural fix'],
            rows: [
              ['SQL engine', 'SQL injection', 'Parameterized queries'],
              ['Browser (HTML/JS)', 'XSS', 'Contextual output encoding, safe DOM APIs, CSP'],
              ['System shell', 'Command injection', 'APIs without a shell (`execFile`, argument list)'],
              ['NoSQL engine', 'NoSQL injection (`{"$ne": null}`)', 'Strict type validation'],
              ['XML parser', 'XXE', 'Disable external entities'],
            ],
          },
          { t: 'callout', kind: 'key', text: 'Filtering “dangerous characters” (blocklist) is a fragile defense: there is always an encoding, a context or a syntax that was forgotten. The right fix **structurally** separates code and data.' },
        ],
      },
      {
        id: 'sqli',
        title: 'SQL injection',
        blocks: [
          { t: 'code', lang: 'javascript', caption: 'Vulnerable code (Node.js)', code: "app.post('/login', async (req, res) => {\n  const sql = \"SELECT id FROM users WHERE login = '\" + req.body.login +\n              \"' AND password_hash = '\" + hash(req.body.password) + \"'\";\n  const rows = await db.query(sql);\n  if (rows.length) return startSession(res, rows[0].id);\n  res.status(401).send('Failed');\n});" },
          {
            t: 'example',
            title: 'Authentication bypass',
            blocks: [
              { t: 'p', text: 'With the username `admin\' -- `, the query becomes:' },
              { t: 'code', lang: 'sql', code: "SELECT id FROM users WHERE login = 'admin' -- ' AND password_hash = '…'" },
              { t: 'p', text: 'The apostrophe closes the string, `--` turns the rest into a comment: the password check has disappeared. The data changed the **structure** of the query.' },
            ],
          },
          { t: 'diagram', id: 'sql-injection', caption: 'Concatenation mixes the input into the query: it can be interpreted as code. The parameterized query sends the input separately: it stays data.', alt: 'Diagram comparing a SQL query built by concatenation, where the input admin apostrophe dash-dash is interpreted as code and bypasses the check, and a parameterized query where the same input is handled as plain data.' },
          { t: 'list', items: ['**UNION injection**: adding `UNION SELECT` to extract other tables.', '**Boolean blind injection**: the page changes depending on whether a condition is true or false.', '**Time-based blind injection**: `SLEEP(5)` reveals the truth through the response time.', '**Impact**: reading the whole database, modification, sometimes command execution on the server.'] },
          { t: 'code', lang: 'javascript', caption: 'Fix: parameterized query', code: "const rows = await db.query(\n  'SELECT id, password_hash FROM users WHERE login = $1',\n  [req.body.login],               // sent separately: never interpreted as SQL\n);\nif (rows.length && await argon2.verify(rows[0].password_hash, req.body.password)) { … }" },
          { t: 'callout', kind: 'warn', text: 'Table or column names cannot be parameterized. If they depend on an input (sort by column), use an **allowlist** of permitted values.' },
        ],
      },
      {
        id: 'xss',
        title: 'Cross-Site Scripting (XSS)',
        blocks: [
          { t: 'def', term: 'XSS', text: 'Injection of JavaScript code into a page served by the vulnerable site. The script runs in the victim’s browser **with the site’s origin**: it can read the page, act on behalf of the user, steal unprotected tokens.' },
          {
            t: 'table',
            head: ['Type', 'Where is the payload?', 'Example'],
            rows: [
              ['Reflected', 'In the request, returned immediately', '`/search?q=<script>…</script>` displayed as is'],
              ['Stored', 'Saved in the database, served to everyone', 'Blog comment containing a script'],
              ['DOM', 'Handled only on the client side', '`el.innerHTML = location.hash.slice(1)`'],
            ],
          },
          { t: 'code', lang: 'javascript', caption: 'Dangerous sinks and safe alternatives', code: "// Dangerous: interprets HTML\nel.innerHTML = comment;\ndocument.write(param);\n\n// Safe: handles the value as text\nel.textContent = comment;\n// In React: {comment} is encoded automatically;\n// dangerouslySetInnerHTML must be avoided without sanitization (DOMPurify)." },
          { t: 'p', text: 'Encoding must match the output **context**: HTML content (`&lt;`), quoted attribute, URL (`encodeURIComponent`, and refusal of the `javascript:` scheme), JavaScript. Modern template engines encode HTML content by default.' },
        ],
      },
      {
        id: 'csp',
        title: 'CSP and security headers',
        blocks: [
          { t: 'def', term: 'Content Security Policy (CSP)', text: 'HTTP header telling the browser which sources of scripts, styles, images or connections are allowed. A strict CSP prevents injected scripts from running even if an XSS exists.' },
          { t: 'code', lang: 'text', caption: 'Example of a strict CSP', code: "Content-Security-Policy: default-src 'self'; script-src 'self'; object-src 'none';\n  base-uri 'self'; frame-ancestors 'none'; form-action 'self'" },
          { t: 'list', items: ["Avoid `'unsafe-inline'` and `'unsafe-eval'` in `script-src`: they cancel most of the protection.", 'To allow a specific inline script: a random `nonce` per response or a `sha256-…` hash.', '`frame-ancestors` protects against clickjacking; it only works as an HTTP header, not in a meta tag.', 'Complements: `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `HttpOnly; Secure; SameSite` cookies.'] },
          { t: 'callout', kind: 'info', title: 'This platform', text: "CyberAcadémie itself applies a `script-src 'self'` CSP without inline scripts, and never interprets raw HTML in its content." },
          { t: 'callout', kind: 'legal', text: 'Testing these injections on a site without written authorization is an offense. Practice on the platform’s simulated lab or on deliberately vulnerable applications installed at home (OWASP Juice Shop, DVWA).' },
        ],
      },
      {
        id: 'autres',
        title: 'Other injections: command, NoSQL, templates, headers',
        blocks: [
          { t: 'p', text: 'The principle is the same for every interpreter: as soon as a user value is **concatenated** into a text that will be interpreted, it can change its structure. Only the syntax changes.' },
          {
            t: 'table',
            head: ['Injection', 'Example payload', 'Fix'],
            rows: [
              ['**System command**', '`8.8.8.8; cat /etc/passwd` in a parameter passed to `ping`', 'Call without a shell with an argument list, allowlist of values'],
              ['**NoSQL**', '`{"login": "admin", "password": {"$ne": null}}`: the operator replaces the expected value', 'Force the string type, refuse objects and operators coming from the client'],
              ['**Server-side template (SSTI)**', '`{{7*7}}` returns `49`: the input is interpreted by the template engine', 'Pass the data as template **variables**, never in its text'],
              ['**LDAP / XPath**', '`*)(uid=*))(|(uid=*` in a search filter', 'Interpreter-specific escaping or parameterized queries'],
              ['**HTTP header (CRLF)**', 'Line break in a value copied into a header', 'Refuse the CR and LF characters; use the framework API for redirects'],
            ],
          },
          {
            t: 'example',
            title: 'Command injection and fix',
            blocks: [
              { t: 'code', lang: 'python', caption: 'Vulnerable: the shell interprets the input', code: 'import os\n\ndef ping(host):\n    os.system("ping -c 1 " + host)   # host = "8.8.8.8; id" also runs “id”' },
              { t: 'code', lang: 'python', caption: 'Fixed: no shell, separate arguments, checked value', code: 'import ipaddress, subprocess\n\ndef ping(host):\n    address = ipaddress.ip_address(host)          # raises an exception if it is not an IP\n    subprocess.run(["ping", "-c", "1", str(address)], check=True, timeout=5)' },
            ],
          },
          { t: 'def', term: 'Template injection (SSTI)', text: 'Vulnerability where the user’s input is inserted into the **text of the template itself** before rendering. The engine evaluates it as an expression, which can go as far as code execution on the server.' },
          { t: 'callout', kind: 'warn', text: 'An ORM only protects as long as its parameterized functions are used: raw queries (`raw`, `execute`, `$where`) remain injectable if a value is concatenated into them.' },
        ],
      },
      {
        id: 'defense',
        title: 'Detect, test and defend in depth',
        blocks: [
          { t: 'def', term: 'Defense in depth', text: 'Stacking independent measures so that the failure of one is not enough to compromise the system. It **complements** fixing the code, it does not replace it.' },
          {
            t: 'table',
            head: ['Layer', 'Measure', 'What it limits'],
            rows: [
              ['Code', 'Parameterized queries, contextual encoding, server-side validation', 'The cause of the injection'],
              ['Review and tests', 'Code review, static analysis (SAST), dynamic testing (DAST), authorized penetration tests', 'Flaws that slip through development'],
              ['Database', 'Application account with minimal rights, no administration right, no file access', 'The impact of a successful SQL injection'],
              ['Browser', 'Strict CSP, `HttpOnly`, `Secure`, `SameSite` cookies', 'The impact of an XSS'],
              ['Network', 'Web application firewall (WAF), tuned and monitored', 'Known attacks, the time to fix: **not** a fix'],
              ['Operations', 'Logs, alerts on repeated SQL errors, `UNION`, `SLEEP`, `<script>` patterns', 'Detection time'],
            ],
          },
          {
            t: 'example',
            title: 'Reading a suspicious log line',
            blocks: [
              { t: 'code', lang: 'text', code: '203.0.113.9 "GET /products?id=1%20UNION%20SELECT%20null,version()--" 200 4821\n203.0.113.9 "GET /products?id=1%20AND%20SLEEP(5)--" 200 912 (duration 5.1 s)' },
              { t: 'p', text: 'Decoding the URL reveals `UNION SELECT` then `SLEEP(5)`: an attacker is testing a UNION injection then a time-based one. 200 responses of unusual size and a 5-second duration: the query was indeed interpreted. You must fix the parameter, check what was read and look at the other requests from the same address.' },
            ],
          },
          { t: 'list', items: ['**Generic error messages** for the user, details only in the logs: a displayed SQL error helps the attacker.', '**Regression tests**: add a test that replays the attack payload after each fix.', '**Up-to-date dependencies**: a vulnerable library (software composition analysis) reintroduces an injection.', '**CSP Report-Only mode** to measure before blocking.'] },
          { t: 'callout', kind: 'tip', text: 'A WAF can buy a few days to fix, but it can be bypassed (encodings, variants). Always fix the cause in the code.' },
        ],
      },
      {
        id: 'sql-avant-apres',
        title: "Fixing a SQL injection: the code before and after",
        blocks: [
          { t: 'p', text: "The reliable fix for a SQL injection is not to “clean” the input but to **separate** the query from its data with parameterized queries." },
          { t: 'code', lang: "python", caption: "Same query, two ways of writing it (Python sqlite3 module)", code: "# Vulnerable: the input is concatenated into the query\ncur.execute(\"SELECT id FROM users WHERE name = '\" + name + \"' AND pwd_hash = '\" + h + \"'\")\n\n# Fixed: parameterized query, the database receives the values separately\ncur.execute(\"SELECT id FROM users WHERE name = ? AND pwd_hash = ?\", (name, h))" },
          { t: 'p', text: "With the vulnerable version, entering `' OR '1'='1' --` in the name field turns the condition into an always-true expression, and the `--` comment neutralizes the rest. With the parameterized version, the same string is looked up **literally** as a username: it matches nobody." },
          {
            t: 'table',
            caption: "What parameterized queries cover… and do not cover",
            head: ["Situation", "Is parameterization enough?", "Defense to add"],
            rows: [
              ["Value in a `WHERE` clause", "Yes", "Minimal privileges for the database account"],
              ["Dynamic table or column name", "No: an identifier cannot be parameterized", "Allow-list of permitted values"],
              ["Dynamic sorting (`ORDER BY`)", "No", "Allow-list of columns and direction (`ASC` or `DESC`)"],
              ["Raw query in an ORM", "Only if parameters are used", "Avoid concatenating, even “just for this case”"],
            ],
          },
        ],
      },
      {
        id: 'xss-contexte',
        title: "XSS: encoding according to where the data is inserted",
        blocks: [
          { t: 'p', text: "The same data is not escaped the same way depending on whether it is placed in page text, in an attribute or in a script. The defense is therefore **context-aware output encoding**, applied at display time." },
          {
            t: 'table',
            head: ["Output context", "Example", "Defense"],
            rows: [
              ["HTML text", "`<p>` + data + `</p>`", "Encode `&`, `<`, `>`, `\"`, `'` as HTML entities"],
              ["Attribute value", "`<input value=\"` + data + `\">`", "Encode quotes; always wrap the value in quotes"],
              ["Address (URL)", "`<a href=\"` + data + `\">`", "Accept only `https:` and `http:` schemes; refuse `javascript:`"],
              ["JavaScript script", "`<script>var x = ` + data", "Avoid direct insertion; pass data serialized as JSON"],
            ],
          },
          { t: 'code', lang: "javascript", caption: "Writing text without it being interpreted as HTML", code: "el.innerHTML = input;    // dangerous: an <img onerror=...> executes\nel.textContent = input;  // safe: the input stays text" },
          { t: 'callout', kind: 'tip', text: "Modern UI libraries (such as React) encode by default. The danger returns as soon as that protection is bypassed, for example with `dangerouslySetInnerHTML`: any data going through it must first be sanitized by a dedicated library." },
        ],
      },
    ],
    useCases: [
      'Code review: spot any SQL query built by concatenation and any use of innerHTML with data.',
      'Authorized web penetration test: check each parameter with an apostrophe and harmless XSS payloads.',
      'Hardening: deploy a CSP in `Report-Only` mode, analyze the reports, then enforce it.',
    ],
    commonMistakes: [
      "Trying to block apostrophes or the word “SELECT” instead of parameterizing the query.",
      "Encoding once at input time, when correct encoding depends on the output context.",
      'Escaping apostrophes “by hand” instead of using parameterized queries.',
      'Validating only on the client side (JavaScript): the attacker sends their request directly.',
      'Believing that an ORM always protects: its raw query functions remain injectable.',
      'HTML-encoding a value inserted in an `href` attribute (the `javascript:` scheme gets through).',
      "Adding `'unsafe-inline'` to the CSP “to make it work”.",
    ],
    bestPractices: [
      'Parameterized queries everywhere, allowlist for dynamic identifiers.',
      'Contextual output encoding by the template engine, `textContent` DOM API.',
      'Sanitize rich HTML with a proven library (DOMPurify).',
      'Strict CSP without unsafe-inline, HttpOnly, Secure and SameSite cookies.',
      'Database account with minimal rights for the application.',
    ],
    keyPoints: [
      "SQL: parameterize; dynamic identifiers: allow-list. XSS: encode for the output context.",
      'Injection = data interpreted as code by another component.',
      'SQL: parameterized queries, never concatenation.',
      'XSS: reflected, stored, DOM; fixed by contextual encoding.',
      'CSP limits the impact of an XSS but does not replace the fix.',
    ],
  },
  practice: [
    {
      id: 'labo-sqli',
      kind: 'simulation',
      title: 'Lab: vulnerable login application (simulated)',
      context: [{ t: 'p', text: 'A fictional application shows the SQL query it builds from your inputs. No real database is queried: a simulated parser reproduces the behavior.' }],
      steps: ['Observe the query produced with a normal username.', 'Bypass authentication in vulnerable mode.', 'Switch to fixed mode and see the same payload fail.'],
      labId: 'sqli-lab',
    },
    {
      id: 'revue-xss',
      kind: 'analysis',
      title: 'Code review: finding the XSS',
      context: [
        { t: 'code', lang: 'javascript', code: "// 1\ndocument.getElementById('welcome').innerHTML = 'Hello ' + new URLSearchParams(location.search).get('name');\n// 2\nlink.href = profile.website;\n// 3\nlist.textContent = comment.text;\n// 4 (React)\n<div dangerouslySetInnerHTML={{ __html: article.body }} />\n// 5 (React)\n<p>{comment.text}</p>" },
      ],
      steps: ['For each line, say whether it is vulnerable and to which type of XSS.', 'Propose a fix for each vulnerable line.'],
    },
    {
      id: 'revue-injections',
      kind: 'analysis',
      title: 'Code review: four other injections',
      context: [
        { t: 'code', lang: 'python', code: '# 1: running a network diagnostic\nos.system("traceroute " + request.args["host"])\n\n# 2: login API (MongoDB)\nuser = db.users.find_one({"login": req.json["login"], "pwd": req.json["pwd"]})\n\n# 3: personalized home page (Flask)\nreturn render_template_string("<h1>Hello " + name + "</h1>")\n\n# 4: sort chosen by the user\ncur.execute("SELECT * FROM products ORDER BY " + request.args["sort"])' },
      ],
      steps: ['Name the injection in each extract and describe an attack payload.', 'Write the fix for each extract.', 'Propose a detection or impact-limiting measure for the whole.'],
    },
  ],
  questions,
  resources: [
    { title: 'OWASP Top 10', source: 'OWASP', url: 'https://owasp.org/www-project-top-ten/' },
    { title: 'SQL Injection Prevention Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html' },
    { title: 'Cross Site Scripting Prevention Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html' },
    { title: 'Content Security Policy', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/fr/docs/Web/HTTP/CSP' },
  ],
};
