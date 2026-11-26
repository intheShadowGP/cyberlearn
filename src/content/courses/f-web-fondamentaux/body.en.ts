import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'f-web-fondamentaux',
  lesson: {
    intro:
      'Almost all the applications we use go through the Web: banking, email, administration, commerce. Their security rests on a few simple but crucial ideas: understanding what the browser and the server exchange, never trusting what comes from outside, checking who the user is and what they are allowed to do. This course lays these foundations, with no prerequisites, so that the following courses (injections, access, sessions) make sense.',
    sections: [
      {
        id: 'http',
        title: 'How the Web works: URLs, requests and responses',
        blocks: [
          { t: 'p', text: 'When you open a page, your browser (the **client**) sends a **request** to a **server**, which returns a **response**. The language of this exchange is **HTTP**. Each request is independent: HTTP is a **stateless** protocol, it does not remember you by itself.' },
          { t: 'code', lang: 'text', caption: 'Anatomy of a URL', code: 'https://shop.example:443/products/list?category=books&page=2#reviews\n└─┬─┘   └──────┬──────┘└┬─┘└──────┬──────┘└────────────┬────────┘└──┬──┘\nscheme       host     port    path        parameters (query)   fragment' },
          {
            t: 'table',
            head: ['Element', 'Role', 'Security note'],
            rows: [
              ['**Scheme** (`https`)', 'Protocol used', '`https` encrypts the exchange'],
              ['**Host** and **port**', 'Targeted server', 'The domain name identifies the site'],
              ['**Path**', 'Requested resource', 'Can be modified by the user'],
              ['**Parameters** (`?a=1&b=2`)', 'Data sent to the server', 'Controlled by the user: never to be believed'],
              ['**Fragment** (`#reviews`)', 'Position in the page', 'Stays in the browser, is not sent to the server'],
            ],
          },
          { t: 'code', lang: 'http', caption: 'A request and its response', code: 'GET /products/list?category=books HTTP/1.1\nHost: shop.example\nUser-Agent: Mozilla/5.0\nCookie: session=Yt9k…Qz\n\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\nSet-Cookie: cart=3; Secure; HttpOnly\n\n<html>…</html>' },
          {
            t: 'table',
            head: ['Method', 'Usual use'],
            rows: [
              ['`GET`', 'Read a resource, without changing it'],
              ['`POST`', 'Send data (login form, creation)'],
              ['`PUT` / `PATCH`', 'Replace or modify a resource'],
              ['`DELETE`', 'Delete a resource'],
            ],
          },
          { t: 'list', items: ['**2xx**: success (`200 OK`).', '**3xx**: redirection (`301`, `302`).', '**4xx**: client error (`401` authentication required, `403` access denied, `404` not found).', '**5xx**: server error (`500`).'] },
          { t: 'callout', kind: 'key', text: 'Everything the browser sends (URL, parameters, headers, cookies) can be modified by the user with the developer tools or a simple `curl`. The server can never assume that the request comes “from a real form”.' },
        ],
      },
      {
        id: 'navigateur',
        title: 'The browser, origin, cookies and HTTPS',
        blocks: [
          { t: 'def', term: 'Origin', text: 'Combination of a page’s **protocol**, **host name** and **port**. `https://example.fr` and `https://example.fr:8443` do not have the same origin, nor do `http://example.fr` and `https://example.fr`.' },
          { t: 'def', term: 'Same-origin policy', text: 'Browser rule: a page’s script cannot freely read the data of a page of **another origin**. It prevents, for example, a malicious site opened in another tab from reading your mailbox.' },
          { t: 'p', text: 'Since HTTP has no memory, the site recognizes you thanks to a **cookie**: a small piece of data that the server asks the browser to keep, then that the browser sends back with each request to that site. After login, the cookie generally contains a **session identifier**, tied on the server side to your account.' },
          {
            t: 'table',
            head: ['Cookie attribute', 'Effect'],
            rows: [
              ['`Secure`', 'Sent only over HTTPS'],
              ['`HttpOnly`', 'Inaccessible to the page’s JavaScript'],
              ['`SameSite`', 'Limits sending the cookie from another site'],
              ['`Max-Age` / `Expires`', 'Lifetime of the cookie'],
            ],
          },
          { t: 'def', term: 'HTTPS', text: 'HTTP protected by **TLS**: the connection is encrypted, and the browser checks through a certificate that it is talking to the displayed domain name. It protects against eavesdropping and modification of the exchanges in transit.' },
          { t: 'callout', kind: 'warn', text: 'The padlock says that the connection is encrypted to the displayed domain name. It does not say the site is honest: a phishing site can have one.' },
          { t: 'callout', kind: 'tip', text: 'Stealing a session cookie amounts to stealing the session: someone logs in “in your place” without a password. Hence the value of `Secure`, `HttpOnly` and a limited lifetime.' },
        ],
      },
      {
        id: 'entrees',
        title: 'Never trust the data received',
        blocks: [
          { t: 'p', text: 'The golden rule of web security: **any data coming from outside is potentially hostile**. It can be modified by the user or forged by an attacker. **Injections** occur when such data is **interpreted as code** by another component.' },
          { t: 'def', term: 'SQL injection', text: 'An entered value changes the **structure** of the SQL query sent to the database, instead of being handled as a mere value. The attacker can bypass a login, read or modify the database.' },
          {
            t: 'example',
            title: 'A bypassed login',
            blocks: [
              { t: 'code', lang: 'sql', code: "-- Query built by pasting the input into the text:\nSELECT * FROM users WHERE login = 'admin' -- ' AND password = '…'" },
              { t: 'p', text: 'With the input `admin\' -- `, the apostrophe closes the string and `--` turns the rest into a comment: the password check has disappeared.' },
            ],
          },
          { t: 'def', term: 'XSS (Cross-Site Scripting)', text: 'JavaScript supplied by an attacker is inserted into a page of the site. It runs in the victim’s browser **with the site’s rights**: reading the page, acting on their behalf, displaying a fake form.' },
          {
            t: 'table',
            head: ['Risk', 'Cause', 'Basic fix'],
            rows: [
              ['SQL injection', 'Concatenating the input into a query', '**Parameterized queries**'],
              ['XSS', 'Displaying an input as HTML', '**Encode the output**, display as text'],
              ['Validation only in the browser', 'Check that can be bypassed with `curl`', 'Also validate **on the server side**'],
            ],
          },
          { t: 'callout', kind: 'key', text: 'A check done only in the page (JavaScript) improves the user’s comfort, not security: the attacker sends their request directly. The check that matters is the **server’s**.' },
        ],
      },
      {
        id: 'authentification',
        title: 'Identifying and authorizing: authentication and access control',
        blocks: [
          { t: 'p', text: 'Two different questions arise at every request: **who are you?** (authentication) and **what are you allowed to do?** (authorization). Succeeding at the first never exempts you from the second.' },
          {
            t: 'table',
            head: ['Notion', 'Question', 'Examples'],
            rows: [
              ['**Authentication**', 'Who is the user?', 'Password, one-time code, security key (MFA)'],
              ['**Authorization**', 'Can they do **this** action on **this** object?', 'Administrator role, ownership of an invoice'],
            ],
          },
          { t: 'list', items: ['**Passwords**: never stored in clear, but as **hashes** computed with a slow, salted function (Argon2, bcrypt).', '**Identical error messages** for “unknown account” and “wrong password”, so as not to reveal which accounts exist.', '**Attempt limiting** and **multi-factor authentication** (MFA).', '**Principle of least privilege**: grant only the necessary rights.'] },
          { t: 'def', term: 'IDOR (direct object reference)', text: 'The application uses an identifier supplied by the user (`/invoices/1043`) without checking that they have the right to access that object. By changing the number, one reads someone else’s invoice.' },
          { t: 'callout', kind: 'warn', text: 'Hiding a button or a menu is not access control: the route can still be called directly. The right of access is checked **on the server side, on every request**.' },
        ],
      },
      {
        id: 'owasp',
        title: 'The main risks: the OWASP Top 10',
        blocks: [
          { t: 'p', text: '**OWASP** is a foundation that publishes free resources on application security. Its **Top 10** ranks the ten most critical risk categories, revised from time to time. It is an awareness **starting point**, not an exhaustive list of all flaws.' },
          {
            t: 'table',
            head: ['Family', 'In simple terms', 'Basic measure'],
            rows: [
              ['**Broken access control**', 'Reaching what you have no right to see or do', 'Check rights on the server side'],
              ['**Cryptographic failures**', 'Poorly protected sensitive data', 'HTTPS, encryption, hashed passwords'],
              ['**Injection**', 'Data interpreted as code', 'Parameterized queries, encoding'],
              ['**Insecure design**', 'Risks not thought through from the start', 'Threat modeling, abuse cases'],
              ['**Security misconfiguration**', 'Default accounts, overly talkative errors', 'Hardening, configuration review'],
              ['**Vulnerable components**', 'Outdated libraries', 'Inventory and updates'],
              ['**Authentication failures**', 'Weak passwords, badly managed sessions', 'MFA, robust sessions'],
              ['**Insufficient logging**', 'Attacks not detected', 'Logs and alerts'],
            ],
          },
          { t: 'def', term: 'Security headers', text: 'Instructions sent by the server so that the browser strengthens protection: `Strict-Transport-Security` (HTTPS mandatory), `Content-Security-Policy` (allowed script sources), `X-Content-Type-Options: nosniff`.' },
          { t: 'list', items: ['**Update** the system, the framework and the libraries.', '**Do not display** a detailed error trace to visitors: it helps the attacker.', '**Log** logins, access denials, errors, and monitor these logs.'] },
        ],
      },
      {
        id: 'pratiques',
        title: 'Learning and reporting responsibly',
        blocks: [
          { t: 'p', text: 'Understanding attacks helps to defend, but testing a site you do not own, without authorization, is **illegal**, even without intent to harm. There are many legal ways to practice.' },
          { t: 'list', items: ['**Deliberately vulnerable applications** installed at home (OWASP Juice Shop, DVWA): you attack them without risk.', '**Online labs** designed for learning (for example PortSwigger’s Web Security Academy).', '**The browser’s developer tools**: Network tab to read requests, Application tab to see cookies.', '**Disclosure programs** and bug bounties, within the scope and rules they define.'] },
          {
            t: 'example',
            title: 'Reporting a flaw found by chance',
            blocks: [
              { t: 'p', text: 'You notice that by changing a number in a site’s URL, you see another person’s data. You **stop** browsing any further, you **neither copy nor share** this data, and you inform the person in charge (the site’s security address, a reporting page, the national CERT) with a clear description and the steps to reproduce, without demanding anything in return.' },
            ],
          },
          { t: 'callout', kind: 'legal', text: 'Criminal law punishes fraudulent access to an information system, even without intent to harm. Only test what you are authorized to test, in writing when it is an organization.' },
          { t: 'list', items: ['**A developer’s checklist**: server-side validation, parameterized queries, output encoding, HTTPS everywhere, `Secure` `HttpOnly` `SameSite` cookies, rights checked on the server, hashed passwords, up-to-date dependencies, generic errors, logs.'] },
        ],
      },
    ],
    useCases: [
      'Reading a site’s requests with the developer tools to understand what is sent to the server.',
      'Reviewing a personal project’s login form with a developer’s checklist.',
      'Explaining to colleagues why a padlock is not enough to judge a site.',
      'Practicing on Juice Shop to recognize an injection, an XSS and broken access control.',
    ],
    commonMistakes: [
      'Believing that a padlock guarantees the site’s honesty.',
      'Validating data only in the browser.',
      'Hiding a button instead of checking the right on the server side.',
      'Storing or sending passwords in clear, or putting them in the URL.',
      'Displaying detailed error messages to visitors.',
      'Testing a site without authorization “just to see”.',
    ],
    bestPractices: [
      'Treat all received data as untrusted and validate it on the server side.',
      'Parameterized queries and output encoding.',
      'HTTPS everywhere, `Secure`, `HttpOnly` and `SameSite` session cookies.',
      'Rights checked on the server side on every request, least privilege, MFA.',
      'Regular updates, generic errors, monitored logs.',
      'Practice on targets designed for it and report flaws responsibly.',
    ],
    keyPoints: [
      'The browser sends requests, the server responds: everything sent can be modified.',
      'Origin, cookies and HTTPS: the padlock protects transport, not the site’s reputation.',
      'All received data is untrusted: parameterized queries and output encoding.',
      'Authentication (who?) and authorization (what?) are two distinct checks.',
      'The OWASP Top 10 serves as a map of the main risks.',
      'Practice on authorized targets, report flaws without abusing them.',
    ],
  },
  practice: [
    {
      id: 'lire-requete',
      kind: 'analysis',
      labId: 'http-headers-lab',
      title: 'Reading an HTTP request and response',
      context: [
        { t: 'code', lang: 'http', code: 'POST /login HTTP/1.1\nHost: myspace.example\nCookie: pref=dark\nContent-Type: application/x-www-form-urlencoded\n\nlogin=alice&pwd=Spring2026\n\nHTTP/1.1 302 Found\nLocation: /home\nSet-Cookie: session=7f3a9c1e; Path=/' },
      ],
      steps: ['Identify the method, the path, the data sent and the response’s status code.', 'Spot what the server does at the end of the response (cookie, redirection).', 'Note two visible security weaknesses and propose a fix for each.'],
    },
    {
      id: 'reperer-risques',
      kind: 'case',
      title: 'Case study: four situations, four risks',
      context: [{ t: 'p', text: 'A small booking site shows four behaviors: (a) the page `/booking?id=57` shows another customer’s booking if 57 is replaced with 58; (b) a comment containing a script tag runs for all visitors; (c) the login page answers “wrong password for this account” or “unknown account” depending on the case; (d) an error page shows the program’s full trace and the database version.' }],
      steps: ['Name the risk of each situation (Top 10 family or type of flaw).', 'Propose the basic fix for each.', 'Rank the situations from most to least serious and justify.'],
    },
    {
      id: 'revue-formulaire',
      kind: 'analysis',
      title: 'Review of a login form',
      context: [
        { t: 'code', lang: 'text', code: '1. Form address: http://mysite.example/login (no HTTPS)\n2. Sent with the GET method: /login?login=alice&pwd=Spring2026\n3. The password is stored in clear in the database\n4. No limit on the number of login attempts\n5. The SQL query is built by concatenating login and pwd\n6. The session cookie is sent without the Secure or HttpOnly attributes' },
      ],
      steps: ['For each point, explain the risk.', 'Propose the matching fix.', 'Order the fixes by priority.'],
    },
  ],
  questions,
  resources: [
    { title: 'HTTP — Guides and references', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/fr/docs/Web/HTTP' },
    { title: 'OWASP Top 10', source: 'OWASP', url: 'https://owasp.org/www-project-top-ten/' },
    { title: 'Web Security Academy', source: 'PortSwigger', url: 'https://portswigger.net/web-security' },
    { title: 'OWASP Juice Shop', source: 'OWASP', url: 'https://owasp.org/www-project-juice-shop/' },
    { title: 'Recommendations for securing websites (in French)', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-pour-la-securisation-des-sites-web' },
  ],
};
