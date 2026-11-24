import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'a-isolation-confiance-plateforme',
  practice: {
    'identifier-tcb': {
      blocks: [
        { t: 'list', items: ['The signing service’s TCB includes the server’s hardware and firmware, the **shared Linux kernel**, the **container engine**, the service itself and any component that can read its memory or files (administration accounts, backup tools).', 'The partners’ containers are not part of it “by design”, but since they share the kernel, they are **an attack path** toward it.'] },
        { t: 'p', text: 'A malicious partner exploits a kernel flaw or a poor engine configuration (privileged mode, daemon socket) from their container, becomes root on the host, then reads the signing service’s memory or files and extracts the keys.' },
        { t: 'list', items: ['Move the signing service to a **dedicated host or VM**, with no third-party workloads, and give it a minimal interface (signing request) with authentication and logging.', 'Better: keep the keys in a **hardware security module** (HSM) that never exposes them, so that a compromise of the host only allows requesting signatures, not stealing the key.', 'Run the partners’ workloads in micro-VMs or in a separate environment, with no access to the administration network.'] },
      ],
    },
    'chaine-attestee': {
      blocks: [
        { t: 'list', items: ['**Verification**: enable Secure Boot with the organization’s keys and keep the revocation list (dbx) up to date; protect the firmware with a password.', '**Measurement**: enable measured boot, which records in the TPM’s PCRs the hashes of the firmware, bootloader, kernel and configuration.', '**Attestation**: at startup, the server’s agent asks the TPM for a signed quote of the PCRs with a nonce supplied by the verifier.', '**Decision**: the attestation service checks the signature and compares the PCRs with the expected values; only if they match does it deliver the secret or a short-lived token.'] },
        { t: 'p', text: 'For a signed but vulnerable component: add it to the revocation list (dbx) and deploy the firmware and bootloader update; update the reference values; refuse the attestation of servers that have not applied the fix, which will be isolated then patched.' },
      ],
    },
  },
};
