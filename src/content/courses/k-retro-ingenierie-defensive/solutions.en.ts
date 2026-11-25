import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'k-retro-ingenierie-defensive',
  practice: {
    'triage-binaire': {
      blocks: [
        { t: 'p', text: 'These signs converge toward a **packed** binary: the entry point in an unusual writable and executable section, a high-entropy section (encrypted or compressed content), very poor imports and the absence of readable strings are the typical signature of code whose real content is hidden until execution.' },
        { t: 'p', text: 'The visible imports are poor because the real code, and therefore the real functions called, are only rebuilt at the moment of unpacking, in memory. Static analysis alone is therefore not enough to know the binary’s capabilities.' },
        { t: 'callout', kind: 'warn', text: 'Next step: a dynamic analysis in a debugger (for example x64dbg) to observe the code after unpacking, then statically reanalyze that code. Precaution: only in an isolated environment (disposable VM, network cut, snapshot restored after each attempt).' },
      ],
    },
    'detecter-familles': {
      blocks: [
        { t: 'list', items: ['Against bootkits: enable Secure Boot and measured boot (TPM), because they verify the integrity of the boot chain **before** the code runs — precisely where the bootkit seeks to act; complement with integrity attestation and firmware control.', 'Against keyloggers: deploy an EDR (detection of keyboard access and persistence), generalize MFA (a captured password is worth much less), monitor processes and automatic startups.'] },
        { t: 'p', text: 'Analyzing a sample captured during an incident produces indicators (hashes, files, persistence, communications) and detection rules that protect the whole fleet. This is the defensive purpose: we do not reproduce the threat, we learn to spot it and stop it.' },
      ],
    },
    'routine-dechiffrement': {
      blocks: [
        { t: 'p', text: '`decoder` applies an **exclusive OR** with the fixed value `0x37` to each byte of a buffer: it is a very simple decryption (the same operation encrypts and decrypts). The configuration data is stored **encrypted** in the binary: this is why no readable string (domain, path) appeared in static analysis; they exist in clear only in memory, after the call to `decoder`.' },
        {
          t: 'table',
          head: ['Element', 'Value', 'Qualification'],
          rows: [
            ['Command domain', '`upd.cdn-sync-helper.example`', 'Medium to high confidence; dated, to be expired'],
            ['Campaign identifier', '`93`', 'Useful to group the samples of one campaign'],
            ['Mutex', '`Local\\SyncHelper_93`', 'High confidence; stable in this variant'],
            ['Network pattern', 'POST `/gate.php?id=93` every 60 s', 'Durable behavior: regular beacon'],
            ['Decryption routine', 'XOR loop with the constant `0x37` over 41 bytes', 'Stable across variants as long as the author does not change it'],
          ],
        },
        { t: 'list', items: ['**On-disk rule** (packed file): relies on the characteristics of the packing stub and the sections, with a size and header condition; fragile if the author changes packer.', '**Memory / unpacked-file rule**: combines the decryption routine (byte sequence of the XOR loop and the constant), the string `/gate.php?id=` and the mutex pattern, with at least two matches required.', '**Test**: on the sample and its variants (must match), on a corpus of clean files (no match expected); false positives measured before deployment through the EDR.'] },
        { t: 'p', text: 'On the response side: block the domain, search the fleet for the mutex and the beacon pattern, then share the indicators (domain, mutex, hash) according to the TLP. The report specifies that the analysis covered one sample and that other components may exist.' },
      ],
    },
  },
};
