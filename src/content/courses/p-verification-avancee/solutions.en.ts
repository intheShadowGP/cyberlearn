import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'p-verification-avancee',
  practice: {
    'choisir-methode': {
      blocks: [
        {
          t: 'table',
          head: ['Component', 'Methods', 'What they do not guarantee'],
          rows: [
            ['Image parser', 'Continuous fuzzing with sanitizers, review, safe language for new modules', 'Total absence of defects, incomplete coverage'],
            ['Authentication protocol', 'Symbolic verification (ProVerif, Tamarin) then review of the implementation', 'Absence of code defects, side channels'],
            ['Boot loader', 'In-depth review, targeted symbolic execution, proof if possible', 'Hardware defects, assumptions about the chip'],
            ['Web administration interface', 'Review of access controls, scenario tests, static analysis', 'Logic not described by tests'],
          ],
        },
        { t: 'p', text: 'Recommended order: fuzzing and review first (low cost), symbolic analysis of the protocol (short, critical), proof or targeted symbolic execution of the loader (small and critical), then scenario tests for the interface.' },
      ],
    },
    'modele-attaquant': {
      blocks: [
        { t: 'list', items: ['**Adversary**: they listen, modify, delete, replay and inject messages on the network; they can also impersonate the device or the server.'] },
        { t: 'list', items: ['**Confidentiality** of the session key.', '**Mutual authentication** (the server proves its identity, and so does the device).', '**Freshness**: an old exchange cannot be replayed.', '**Forward secrecy** if a long-term key is compromised.'] },
        { t: 'p', text: 'Defects to look for: the device is not authenticated by a proof (identifier and nonce only); a predictable or reused nonce would allow replay; unauthenticated version negotiation would allow a downgrade. Each one is checked by modeling the exchange in a symbolic tool and looking for a counterexample scenario.' },
      ],
    },
    'revue-demarrage': {
      blocks: [
        {
          t: 'table',
          head: ['Finding', 'Assessment'],
          rows: [
            ['Signed updates', 'Reassuring: to be confirmed (algorithm, rollback protection)'],
            ['Accessible serial maintenance port', 'Weakness: disabling or protection to be required in production'],
            ['“Support” account with a common password', 'Major weakness: compromising one device = compromising the fleet'],
          ],
        },
        { t: 'list', items: ['Is boot verified from a hardware root of trust?', 'Are secrets unique per device?', 'What support duration and what fix delay?', 'Is a bill of materials of the components provided?'] },
        { t: 'p', text: 'Recommendation: do not buy as is. Condition: removal of the common account, protected maintenance port, confirmed verified boot and a support commitment.' },
      ],
    },
  },
};
