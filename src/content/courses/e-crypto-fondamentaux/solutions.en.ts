import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'e-crypto-fondamentaux',
  practice: {
    cesar: {
      blocks: [
        { t: 'p', text: 'The first word is a common greeting: “ERQMRXU” looks like “BONJOUR”. E → B, R → O, Q → N: each letter was **shifted 3 places forward** during encryption. To decrypt, you go back 3. The message is therefore **BONJOUR ADMIN**.' },
        { t: 'code', lang: 'text', code: 'ERQMRXU DGPLQ\n-3 per letter\nBONJOUR ADMIN' },
        { t: 'list', items: ['There are only **25 useful shifts**: all of them can be tried in a few seconds, by hand or by program.', 'Even with a shuffled alphabet, **frequency analysis** (“e” dominates in French) recovers the message without knowing the key.', 'Security is never in the secrecy of the method (Kerckhoffs’s principle): here, the method is known to all and the “key” is trivial.'] },
        { t: 'p', text: 'With AES-128, the key is one of 2¹²⁸ possible keys, about 3.4 × 10³⁸: even trying billions of billions of keys per second, exhaustive search would take durations beyond any comparison with the age of the universe. The difference comes from the **size of the key space** and from an algorithm designed to leave no exploitable structure.' },
      ],
    },
    'choisir-outil': {
      blocks: [
        {
          t: 'table',
          head: ['Situation', 'Need', 'Tool'],
          rows: [
            ['(a) Contract whose origin must be verifiable', 'Authenticity (and integrity)', 'Digital signature, verified with the sender’s public key'],
            ['(b) Downloaded software not modified', 'Integrity', 'SHA-256 hash compared to the one published by a reliable source (ideally the vendor’s signature)'],
            ['(c) Backups on an external disk', 'Confidentiality at rest', 'Symmetric encryption (AES-256) of the volume or archive, with the recovery key stored apart'],
            ['(d) Messages with a stranger', 'Confidentiality', 'End-to-end encrypted messaging, or asymmetric encryption with the correspondent’s public key'],
            ['(e) Site with a padlock', 'Authenticity of the domain and confidentiality of the channel', 'Valid certificate for the visited name (HTTPS): says nothing about the site’s honesty'],
          ],
        },
        { t: 'p', text: 'For (d), you **never** send the secret key: you use the correspondent’s **public key**, or a key exchange that lets both sides compute a shared secret without sending it. You still need to check that the public key really belongs to the person (fingerprint compared through another channel, certificate or the messaging app’s security code).' },
        { t: 'p', text: 'For (e), the padlock guarantees that the connection is encrypted up to the server holding the certificate for the **displayed domain name**. It does not guarantee that this name is the right one (phishing with a lookalike domain) nor that the site is safe or honest.' },
      ],
    },
    'lire-certificat': {
      blocks: [
        {
          t: 'table',
          head: ['Anomaly', 'Explanation'],
          rows: [
            ['Name not covered', 'The certificate is issued for paiement-banque-exemple.net while the address visited is www.banque-exemple.fr: the name does not match'],
            ['Expired certificate', 'It was valid until 2026-05-30; today is 2026-11-24, so it expired six months ago'],
          ],
        },
        { t: 'p', text: 'The browser must display a **blocking warning** (name mismatch and expired certificate). Do not click through: stop the connection, enter no username or password, and check the address through a safe path (bookmark, official app). If the site really is the bank’s, report the anomaly to the bank; otherwise it may be a phishing or interception attempt.' },
        { t: 'p', text: 'Even with a valid certificate, nothing proves legitimacy: anyone can get a valid certificate for **their own** domain, including a phishing domain resembling a bank’s. The certificate proves that the name is controlled by the key holder, not that the organization is trustworthy.' },
      ],
    },
  },
};
