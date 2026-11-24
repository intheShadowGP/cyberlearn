import type { ScenarioCorrections } from '../../scenarios';

export const corrections: ScenarioCorrections = {
  scenarioId: 'web-appsec-intrusion',
  questions: {
    'sc-web-q1': {
      type: 'single',
      correct: 'a',
      explanation:
        'The payload `1\' OR \'1\'=\'1` changes the logic of the SQL query, and the **SQL syntax error** in the application log confirms that the input reaches the database directly: it is an **SQL injection**. The `id` parameter, expected to be numeric, is concatenated without escaping or a parameterized query.',
      whyWrong: {
        b: 'An XSS runs in the victim’s browser; it does not cause an SQL syntax error on the server.',
        c: 'SSRF forces the server to send requests to other systems, which is not the case here.',
        d: 'Brute force multiplies authentication attempts; no trace of that is visible.',
      },
      refs: ['OWASP Top 10 2021 — A03 Injection'],
    },
    'sc-web-q2': {
      type: 'short',
      accepted: ['200', 'http 200', 'code 200'],
      explanation:
        'The code **200** accompanies the injection requests that returned a page (including the `UNION` request of 48,907 bytes). The `500` (10:02:19) corresponds to the attempt that caused an error. Distinguishing 200 from 500 separates what succeeded from what failed.',
      refs: ['Source 2 (HTTP access log): status codes'],
    },
    'sc-web-q3': {
      type: 'single',
      correct: 'a',
      explanation:
        'The `../../../` sequence that climbs the directory tree to reach `/etc/passwd` is a **path traversal**: the application uses a user input as a file path without restricting it to an allowed directory.',
      whyWrong: {
        b: 'A command injection would run a program, not read a file through a relative path.',
        c: 'An IDOR manipulates an object identifier (e.g. an order number), not a file path.',
        d: 'An open redirect hijacks the user’s navigation, without reading a server file.',
      },
      refs: ['CWE-22: Improper Limitation of a Pathname to a Restricted Directory (Path Traversal)'],
    },
    'sc-web-q4': {
      type: 'truefalse',
      correct: true,
      explanation:
        'Reusing the administrator’s session cookie/token from an unusual external address (203.0.113.45, instead of 10.0.0.12) is characteristic of a **session hijacking**: the attacker replays a valid session identifier. Hence the importance of invalidating sessions during containment.',
      refs: ['Session hijacking; source 3, AUTH line'],
    },
    'sc-web-q5': {
      type: 'single',
      correct: 'a',
      explanation:
        'The proof of a **successful exfiltration** is the large response to the `UNION` request corroborated by the **1,482 rows** of the “users” table returned in the application log: data really left. An external IP, a 500 error or the GET method establish, on their own, only an attempt.',
      whyWrong: {
        b: 'Repeated requests from an external IP signal an attack, but not that it extracted data.',
        c: 'A 500 error, on the contrary, indicates an attempt that failed.',
        d: 'The GET method has nothing to do with the success of the extraction.',
      },
      refs: ['Sources 2 and 3 cross-checked: response size and number of rows'],
    },
    'sc-web-q6': {
      type: 'multi',
      correct: ['a', 'b', 'c'],
      explanation:
        'Containment combines: cutting off the attacker’s access (blocking the address, taking the vulnerable entry point out of service), invalidating sessions and changing the secrets that may have been exposed, and **preserving** the logs as evidence. Erasing the logs would destroy evidence and amount to obstructing the investigation.',
      whyWrong: {
        d: 'Erasing the access logs destroys the evidence of the incident and prevents measuring its scope.',
      },
      refs: ['NIST SP 800-61r2, “Containment, eradication, recovery” phase'],
    },
    'sc-web-q7': {
      type: 'single',
      correct: 'a',
      explanation:
        'The lasting defense against SQL injection is the use of **prepared (parameterized) queries**: the query structure is fixed and the data is passed separately, so it can no longer alter the SQL logic. A WAF, hiding errors or limiting responses are only complementary measures.',
      whyWrong: {
        b: 'A WAF filters some payloads but can be bypassed; on its own, it does not fix the vulnerability.',
        c: 'Hiding error messages hinders the attacker without preventing the injection.',
        d: 'Limiting response size does not fix the flaw; it only slows exfiltration.',
      },
      refs: ['OWASP Top 10 2021 — A03 Injection: prepared queries as the main defense'],
    },
  },
  debrief: [
    {
      t: 'p',
      text: '**Reconstruction.** An external attacker (203.0.113.45) probes the `id` parameter of `/produits` (10:02), triggers an SQL error, then exfiltrates the “users” table through a `UNION` request (48,907-byte response, 1,482 rows — source 3). They then reuse an administrator session from the same address (10:05) and attempt a directory traversal toward `/etc/passwd` (10:06).',
    },
    {
      t: 'list',
      ordered: true,
      items: [
        '**Access / exfiltration**: SQL injection on a parameter concatenated without a prepared query (OWASP A03).',
        '**Scope**: extraction confirmed (response size + number of rows), personal data involved.',
        '**Pivot**: hijacking of an administrator session, then directory traversal (CWE-22).',
        '**Approach**: qualify (technique, success, scope) before containing, without erasing the evidence.',
      ],
    },
    {
      t: 'callout',
      kind: 'key',
      text: 'Reading the logs is not enough: you must **tell an attempt from a success** (status codes, response size, rows returned), then act proportionately — cut access, invalidate sessions, preserve evidence — and fix the cause (prepared queries), not just the symptom.',
    },
    {
      t: 'p',
      text: '**Hardening**: prepared queries everywhere, strict input validation (the expected type for `id`), confining file paths to an allowed directory, `HttpOnly`/`Secure`/`SameSite` session cookies and stronger session binding, preserved and monitored logging.',
    },
  ],
};
