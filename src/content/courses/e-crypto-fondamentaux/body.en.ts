import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'e-crypto-fondamentaux',
  lesson: {
    intro:
      'Every time you open a site with a padlock, send an encrypted message or unlock a disk, cryptography works silently. It does not make a system “unbreakable”: it protects precise properties, provided it is well chosen and well used. This course lays out the vocabulary and the basic ideas, without mathematics, so you know what each tool guarantees, what it does not guarantee, and why most failures come from usage rather than from algorithms.',
    sections: [
      {
        id: 'objectifs',
        title: 'What is cryptography for?',
        blocks: [
          { t: 'p', text: 'Cryptography answers precise needs. Knowing **which one** you are trying to meet lets you choose the right tool.' },
          {
            t: 'table',
            head: ['Need', 'Question', 'Main tool'],
            rows: [
              ['**Confidentiality**', 'Can only authorized people read it?', 'Encryption'],
              ['**Integrity**', 'Was the information modified along the way?', 'Hash, authentication code'],
              ['**Authenticity**', 'Who does the information really come from?', 'Digital signature, certificate'],
              ['**Non-repudiation**', 'Can the author deny having signed?', 'Digital signature'],
            ],
          },
          { t: 'def', term: 'Encryption', text: 'Operation that turns a **plaintext** into an unreadable **ciphertext**, using an algorithm and a **key**. Only whoever holds the right key can get back to the plaintext (**decrypt**).' },
          { t: 'def', term: 'Kerckhoffs’s principle', text: 'The security of an encryption system must rely on the **secrecy of the key**, not on the secrecy of the algorithm. Sound algorithms are **public** and studied by thousands of specialists; keeping an algorithm secret adds no guarantee.' },
          {
            t: 'example',
            title: 'The Caesar cipher: encryption that is too weak',
            blocks: [
              { t: 'code', lang: 'text', code: 'Key: shift every letter by 3 places\nplain  : BONJOUR\nencrypted : ERQMRXU' },
              { t: 'p', text: 'There are only **25 possible shifts**: a computer (or a patient person) tries them all in an instant. Even a shuffled alphabet falls to **frequency analysis**: in a French text, “e” is the most common letter. A good algorithm must withstand every known attack, not just be “hard to guess”.' },
            ],
          },
          { t: 'callout', kind: 'key', text: 'Encrypting protects **confidentiality**, not integrity: an encrypted message can sometimes be modified along the way without the recipient noticing. Integrity and authenticity need other tools, seen further on.' },
        ],
      },
      {
        id: 'symetrique',
        title: 'Symmetric encryption: one shared key',
        blocks: [
          { t: 'p', text: 'In **symmetric** encryption, the **same key** is used to encrypt and decrypt, like a padlock of which everyone has a copy of the key. It is **fast** and suited to large amounts of data.' },
          {
            t: 'table',
            head: ['Element', 'To remember'],
            rows: [
              ['Reference algorithm', '**AES** (Advanced Encryption Standard), worldwide standard'],
              ['Key sizes', '128, 192 or 256 bits: the longer the key, the more astronomically many keys there are to try'],
              ['Orders of magnitude', 'A 128-bit key offers 2¹²⁸ possible keys: exhaustive search is out of reach'],
              ['Typical uses', 'Encrypted disk, backup, traffic once the connection is established'],
            ],
          },
          { t: 'def', term: 'Key size', text: 'Number of bits of the key. Each extra bit **doubles** the number of keys to try: a 128-bit key is not twice as strong as a 64-bit key, but 2⁶⁴ times as strong. 56-bit keys (old DES) are now broken by exhaustive search.' },
          { t: 'callout', kind: 'warn', title: 'The shared key problem', text: 'How do you send the key to your correspondent **without a third party reading it**? If you send it through the same channel as the message, an eavesdropper gets both. This is the difficulty that asymmetric encryption solves.' },
          { t: 'p', text: 'Good encryption must also not reveal that two messages are **identical**: the same message encrypted twice with the same key must give two different ciphertexts (thanks to a value specific to each message, the **nonce** or initialization vector). A mode that does not do this, such as ECB, lets patterns show through.' },
        ],
      },
      {
        id: 'asymetrique',
        title: 'Asymmetric encryption: public key and private key',
        blocks: [
          { t: 'p', text: 'In **asymmetric** encryption, each person owns a **key pair** mathematically linked: a **public key**, which can be given to everyone, and a **private key**, kept secret. What is encrypted with one can only be decrypted with the other.' },
          {
            t: 'table',
            head: ['Need', 'You use', 'Principle'],
            rows: [
              ['Write to Alice in secret', '**Alice’s public key**', 'Only Alice, with her private key, can read it'],
              ['Prove that a message comes from me', 'My **private key**', 'Everyone, with my public key, checks the signature'],
              ['Agree on a shared secret', 'A **key exchange**', 'Two parties obtain the same key without sending it'],
            ],
          },
          { t: 'def', term: 'Hybrid encryption', text: 'Asymmetric encryption is **slow**: it is used to agree on a session key, then this key drives fast **symmetric** encryption for the data. This is how HTTPS and most messaging apps work.' },
          { t: 'list', items: ['**RSA**: relies on the difficulty of factoring large numbers; keys of at least 2,048 bits.', '**Elliptic curves** (ECC): same security level with much shorter keys.', 'The **private** key never leaves its owner; the **public** key can be published on a website or sent by email.'] },
          { t: 'callout', kind: 'tip', text: 'An analogy: the public key is a **mailbox** whose address everyone knows and where anyone can drop a message; the private key is the **mailbox key**: only its owner can open it.' },
        ],
      },
      {
        id: 'hachage-signature',
        title: 'Hashes, signatures and certificates',
        blocks: [
          { t: 'p', text: 'A **hash function** turns any data into a fixed-size **hash**. It is used to check that data has not changed: the slightest modification, even a single character, gives a completely different hash.' },
          { t: 'code', lang: 'text', caption: 'A SHA-256 hash', code: 'SHA-256("bonjour")  = 2cb4b1431b84ec15d35ed83bb927e27e8967d75f4bcd9cc4b25c8d879ae23e18\nSHA-256("Bonjour")  = 9172e8eec99f144f72eca9a568759580edadb2cfd154857f07e657569493bc44' },
          { t: 'list', items: ['**Not reversible**: you cannot get the data back from its hash.', '**Fixed size**: 256 bits for SHA-256, whatever the size of the data.', '**To avoid**: MD5 and SHA-1, broken; use SHA-256 or SHA-3.'] },
          { t: 'def', term: 'Digital signature', text: 'Value computed with the author’s **private key** over the hash of a document. Anyone, with the **public key**, can check that the document really comes from the author and has not been modified. Only the author can sign, so they cannot deny having done so.' },
          { t: 'def', term: 'Authentication code (HMAC)', text: 'Hash computed with a **shared secret key**: only the key holders can produce or verify it. It proves integrity and origin between two parties who trust each other, without a public signature.' },
          { t: 'def', term: 'Certificate', text: 'Digital document that binds a **public key** to an **identity** (a site name, an organization), signed by a trusted **certificate authority**. It answers the question: “does this public key really belong to this site?”' },
          { t: 'diagram', id: 'cert-chain', caption: 'Chain of trust: the root CA (offline) signs the intermediate CA, which signs the server’s certificate; the client verifies the chain up to a trusted root.', alt: 'Diagram of a certificate chain: offline root CA signing an intermediate CA, which signs the server certificate carrying the SAN www.example.fr.' },
          { t: 'callout', kind: 'warn', title: 'A hash alone does not prove the origin', text: 'Comparing the hash of a downloaded file with the one published by the vendor detects corruption or substitution, provided the hash comes from a separate and reliable source. A signature, on the other hand, proves the origin.' },
        ],
      },
      {
        id: 'usages',
        title: 'Cryptography in everyday life',
        blocks: [
          { t: 'p', text: 'You use cryptography without seeing it. Knowing what each use protects avoids false assurance.' },
          {
            t: 'table',
            head: ['Use', 'What cryptography does', 'What it does not guarantee'],
            rows: [
              ['**HTTPS** (browser padlock)', 'Encrypts the connection and proves that you are talking to the right domain name', 'That the site is honest or safe: a phishing site can have a padlock'],
              ['**End-to-end encrypted messaging**', 'Only the correspondents read the messages, not the operator', 'Nothing against a compromised phone or a screenshot'],
              ['**Disk encryption** (BitLocker, FileVault)', 'Protects the data if the device is stolen while off', 'Nothing against a program running during the session'],
              ['**Protected Wi-Fi** (WPA2, WPA3)', 'Encrypts exchanges between the device and the access point', 'Nothing about traffic beyond the access point, or about a weak Wi-Fi password'],
              ['**VPN**', 'Encrypts traffic between the device and the VPN server', 'Total anonymity; the provider sees the traffic'],
              ['**Password manager**', 'Encrypts the vault with a master password', 'Nothing if the master password is weak'],
            ],
          },
          { t: 'def', term: 'TLS', text: 'Protocol that secures HTTPS: the server proves its identity with a **certificate**, both parties agree on a session key (asymmetric exchange), then the traffic is encrypted in **symmetric** mode. It brings together all the notions of this course.' },
          { t: 'def', term: 'End-to-end encryption', text: 'Only the sender and the recipient hold the keys: the service carrying the message cannot read it. It differs from “in transit” encryption where the service decrypts and then re-encrypts.' },
          { t: 'callout', kind: 'tip', text: 'When someone tells you “it is encrypted”, ask yourself: **against whom**, **where** and **as long as** what? An encrypted disk does not protect a computer that is on and infected.' },
        ],
      },
      {
        id: 'pratiques',
        title: 'Good practices and beginner mistakes',
        blocks: [
          { t: 'list', items: ['**Never invent your own algorithm**: proven algorithms have been attacked for years by specialists; a “home-made” algorithm is almost always broken.', '**Encoding is not encrypting**: Base64 decodes instantly, without a key. A password “encoded in Base64” is a plaintext password.', '**The key makes the security**: a key written in the code, sent with the file or stored next to the data protects nothing.', '**Keep recovery means**: an encrypted disk whose key is lost is lost forever; the recovery key is stored in a safe place, apart.', '**Use proven tools** (recognized libraries, system functions) and **keep them updated**: flaw fixes and the retirement of outdated algorithms come through updates.', '**Passwords are hashed, not encrypted**: the server does not need to read them back (see the course on hashing and storage).'] },
          {
            t: 'example',
            title: 'Sending a confidential file to a colleague',
            blocks: [
              { t: 'p', text: 'Bad idea: attaching the encrypted file and writing the password in the same email. Better approach: encrypt the file with a long passphrase (or with the colleague’s public key), then give the passphrase **through another channel**, for example by phone. Then check that the colleague can actually open the file.' },
            ],
          },
          { t: 'callout', kind: 'key', text: 'Cryptography serves to **reduce the trust needed**: a secret is protected by a key that is smaller and easier to keep than the secret itself. All the work then comes down to **protecting, storing and renewing the keys**.' },
        ],
      },
    ],
    useCases: [
      'Understanding what a browser displays: what a padlock means and what it does not say.',
      'Choosing the right tool for a need: encrypting a file, checking a download, signing a document.',
      'Reading a certificate and spotting the signs of an anomaly (different name, expired certificate).',
      'Raising colleagues’ awareness: encrypting without sharing the key through the same channel, not confusing encoding with encryption.',
    ],
    commonMistakes: [
      'Believing that a site’s padlock guarantees the site is honest.',
      'Presenting an encoding (Base64) as encryption.',
      'Sending the encrypted file and the key through the same channel.',
      'Inventing one’s own algorithm or keeping an algorithm “secret” for more security.',
      'Encrypting without keeping a means of recovering the key.',
      'Confusing encrypting (confidentiality) with signing (authenticity).',
    ],
    bestPractices: [
      'Identify the need (confidentiality, integrity, authenticity) before choosing the tool.',
      'AES to encrypt, asymmetric keys to exchange and sign, SHA-256 for hashes.',
      'Public and proven algorithms, recognized libraries, regular updates.',
      'Key separated from the data, limited access, recovery key in a safe place.',
      'Check the identity of the correspondent or of the site (certificate, key fingerprint) before trusting them.',
    ],
    keyPoints: [
      'Confidentiality, integrity, authenticity: three needs, three families of tools.',
      'Symmetric: one shared key, fast; asymmetric: key pair, slow, solves the exchange.',
      'A hash checks that data has not changed; a signature also proves the origin.',
      'A certificate binds a public key to an identity, under an authority’s guarantee.',
      'The padlock proves that the connection is encrypted to the right name, not that the site is reliable.',
      'Security rests on the key: public algorithms, protected and renewed keys.',
    ],
  },
  practice: [
    {
      id: 'cesar',
      kind: 'analysis',
      title: 'Breaking a Caesar cipher',
      context: [
        { t: 'p', text: 'A message was encrypted by shifting letters (Caesar cipher):' },
        { t: 'code', lang: 'text', code: 'ERQMRXU DGPLQ' },
        { t: 'p', text: 'All we know is that the text is in French and that the first word is a common greeting.' },
      ],
      steps: ['Find the shift and the original message.', 'Explain why this cipher resists no serious attack.', 'Compare with AES: what makes trying every key impossible?'],
    },
    {
      id: 'choisir-outil',
      kind: 'case',
      title: 'Case study: which tool for which need?',
      context: [{ t: 'p', text: 'In a small association, you are asked five questions: (a) send a partner a contract whose origin they must be able to verify, (b) check that downloaded software has not been modified, (c) protect the backups stored on an external disk, (d) exchange confidential messages with a correspondent you have never met, (e) know whether you can trust a site that displays a padlock.' }],
      steps: ['For each situation, state the need (confidentiality, integrity, authenticity) and the suitable tool.', 'For (d), explain how to avoid sending a key over an unsafe channel.', 'Explain what the padlock does and does not guarantee for (e).'],
    },
    {
      id: 'lire-certificat',
      kind: 'analysis',
      title: 'Reading the information in a certificate',
      context: [
        { t: 'p', text: 'You look at a site’s certificate from your browser:' },
        { t: 'code', lang: 'text', code: 'Issued to (SAN): paiement-banque-exemple.net\nIssued by      : AC Exemple Intermédiaire\nValid          : 2026-03-01 to 2026-05-30\nToday          : 2026-11-24\nAddress visited: https://www.banque-exemple.fr/connexion' },
      ],
      steps: ['Point out what is wrong with this certificate compared to the site visited.', 'Say what the browser should display and what to do.', 'Explain why a valid certificate would not be enough to prove that a site is legitimate.'],
    },
  ],
  questions,
  resources: [
    { title: 'Guide to selecting cryptographic algorithms (in French)', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/mecanismes-cryptographiques' },
    { title: 'RFC 8446 — TLS 1.3', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc8446' },
    { title: 'How Let’s Encrypt works', source: 'Let’s Encrypt', url: 'https://letsencrypt.org/how-it-works/' },
    { title: 'Cryptographic Storage Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html' },
  ],
};
