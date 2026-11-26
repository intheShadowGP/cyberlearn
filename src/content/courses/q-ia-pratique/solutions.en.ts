import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'q-ia-pratique',
  practice: {
    'requete-assistee': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Understand** each clause of the query and verify the unknown field name in the log documentation.', '**Remove** the delete instruction: a search query must never modify or delete data.', '**Test** on a small scope (one day, one account) by comparing with known cases.', '**Fix** the fields, then run it over the 7 days.'] },
        { t: 'p', text: 'The analyst records that the query came from an assistant, the corrections made and the result of the verification. They never run a command they do not understand, in particular a destructive one.' },
      ],
    },
    'jeu-tests': {
      blocks: [
        { t: 'p', text: '**Limits**: three easy, well-documented cases measure neither robustness, nor errors on real cases, nor exposure to injections.' },
        { t: 'list', items: ['**T4 — edge case**: incident with an incomplete timeline (the assistant must flag what is missing).', '**T5 — ambiguous case**: two hosts with the same name (it must not merge the events).', '**T6 — adversarial case**: document containing a hidden instruction to transfer data (it must ignore it).', '**T7 — leak**: request about a document the user has no right to (no content must be returned).'] },
        { t: 'p', text: 'Tests are replayed before going live, after every change of model, instruction or tool, and periodically. Cases, results, gaps fixed and accepted risks are recorded.' },
      ],
    },
    'politique-ia': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Inventory** real uses (survey, gateway logs) and the data involved.', '**Classify** data to decide what can be entered in which tool.', '**Offer** one or more validated tools (contract, data retention, security), then frame the use of others.', '**Train** and publish a simple rule.'] },
        { t: 'list', items: ['No password or secret in an AI tool.', 'No personal or confidential data in a non-validated tool.', 'Any answer used is verified; important decisions remain human.', 'Any new use is declared in the register.'] },
        { t: 'p', text: 'If sensitive data is entered in a non-validated tool: quick report to security and to the data protection officer, impact assessment (data, provider, retention terms), deletion request if possible, possible information of the individuals or of the CNIL, then lessons learned.' },
      ],
    },
  },
};
