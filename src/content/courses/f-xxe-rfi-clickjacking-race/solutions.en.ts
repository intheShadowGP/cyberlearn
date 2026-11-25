import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'f-xxe-rfi-clickjacking-race',
  practice: {
    'revue-xxe-inclusion': {
      blocks: [
        {
          t: 'table',
          head: ['Extract', 'Vulnerability', 'Possible impact'],
          rows: [
            ['1 — default XML parsing', 'XXE if the parser resolves external entities', 'Reading server files, internal requests (SSRF), denial of service'],
            ['2 — path concatenated from `topic`', 'Local inclusion / directory traversal', '`topic=../../etc/passwd%00` or `../../../etc/passwd`: reading files outside the help directory'],
          ],
        },
        { t: 'list', items: ['Extract 1: configure the parser to refuse external entities and DTDs; update the library.', 'Extract 2: replace the concatenation with a lookup table (`{installation: "installation.html", ...}`); otherwise, validate `topic` with an allowlist of names, normalize the path and check that it stays under `/var/www/help/`.'] },
        { t: 'p', text: 'Verification tests: for 1, send a document with an external entity and check that it is not resolved; for 2, request `topic=../../etc/passwd` and check the rejection (404/400), as well as an unknown `topic`.' },
      ],
    },
    'race-promo': {
      blocks: [
        { t: 'p', text: 'Mechanism: the application checks that the code has not been used then applies it, in two non-atomic steps (TOCTOU). By sending a burst of simultaneous requests, several pass the check before the first has marked the code as used, hence several applications.' },
        { t: 'list', items: ['Database: uniqueness constraint on (code, order) or a usage counter, and an atomic conditional update — for example `UPDATE promo SET used = used + 1 WHERE code = ? AND used = 0`: a single request gets the effect, the others affect no row.', 'Application: wrap the check and the application in a transaction with the appropriate lock, or process the request idempotently (request identifier).'] },
        { t: 'callout', kind: 'tip', text: 'Detection: spot bursts of identical requests in a very short time on the same account or resource; a rate limit per account and per action reduces the window, without replacing atomicity.' },
      ],
    },
    'revue-upload': {
      blocks: [
        {
          t: 'table',
          head: ['Extract', 'Vulnerability', 'Attack'],
          rows: [
            ['1', '**Insecure upload**: extension-only check, client name kept, drop into the web root', 'Sending `x.php.jpg` or `../../x.jpg`; a script or booby-trapped file becomes accessible and sometimes executed'],
            ['2', '**Insecure deserialization** (`pickle` on a cookie)', 'The user crafts a cookie whose loading executes code on the server'],
            ['3', '**Business logic**: price and quantities supplied by the client', 'Modified price, negative quantity: reduced total or unexpected credit'],
          ],
        },
        { t: 'list', items: ['Extract 1: extension allowlist **and** check of the real content, random name chosen by the server, storage outside the web root, size limits.', 'Extract 2: replace `pickle` with a signed cookie containing JSON validated by a schema, or store the preferences on the server with a session identifier.', 'Extract 3: recompute the price on the server from the catalog, enforce `quantity >= 1` and a maximum.'] },
        { t: 'code', lang: 'text', caption: 'Abuse case for extract 3', code: 'POST /cart {"lines": [{"item": 12, "price": 0.01, "quantity": 1}]}   → the client price is ignored\nPOST /cart {"lines": [{"item": 12, "quantity": -3}]}                 → 422' },
      ],
    },
  },
};
