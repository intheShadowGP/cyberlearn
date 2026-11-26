import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'p-materiel-zero-trust-confidentiel',
  practice: {
    'concevoir-zt': {
      blocks: [
        { t: 'list', items: ['Principles: trust no network by default; verify every access explicitly; least privilege; assume breach.'] },
        {
          t: 'table',
          head: ['Axis', 'Concrete measure'],
          rows: [
            ['Identity', 'Strong authentication (phishing-resistant MFA), just-in-time access, dynamic policies according to context'],
            ['Devices', 'Only allow known, compliant devices (up to date, protected), verified at every access'],
            ['Segmentation', 'Micro-segment applications; every service-to-service access is authenticated and authorized, not implicit'],
          ],
        },
        { t: 'p', text: '“Assume breach” leads to designing to limit the blast radius: micro-segmentation, complete logging, detection, and minimal access, so that an intrusion into one zone does not open everything else.' },
      ],
    },
    'donnees-hebergeur': {
      blocks: [
        { t: 'p', text: 'The three states of data are: at rest, in transit, being processed. Here, rest (storage encryption) and transit (TLS) can already be handled; the problem is processing, where the data would normally be in clear in memory, thus potentially accessible to the provider.' },
        { t: 'list', items: ['Use confidential computing: run the processing in an enclave, where data stays protected even from the provider’s system.', 'Verify by attestation, before sending secrets, that the enclave is legitimate and runs the expected code.', 'Keep the keys under the client’s control (key service / HSM).'] },
        { t: 'callout', kind: 'warn', text: 'Limit: enclaves reduce the trust surface but do not remove every risk (some side-channel attacks have targeted them). They are combined with the other measures and the provider’s fixes are followed.' },
      ],
    },
    'migration-pqc': {
      blocks: [
        {
          t: 'table',
          head: ['Use', 'Urgency', 'Measure'],
          rows: [
            ['Medical archives (30 years)', '**Very high**: “harvest now, decrypt later” threat', 'Move the key exchange to hybrid post-quantum mode, re-encrypt if needed'],
            ['Firmware update (15 years)', '**High**: signature verification must last as long as the product', 'Include a post-quantum or hybrid signature by design, provide agility'],
            ['Internal email (2 years)', 'Medium', 'Follow the libraries’ calendar, enable hybrid when available'],
            ['Public website certificate (1 year)', 'Low in the short term', 'Follow the standards and the certificate authorities’ calendar'],
          ],
        },
        { t: 'list', items: ['**Inventory** all uses of asymmetric cryptography and their confidentiality lifetimes.', '**Put in place** cryptographic agility (configuration, up-to-date libraries, algorithm negotiation).', '**Test** a hybrid configuration on a pilot scope before deployment.'] },
      ],
    },
  },
};
