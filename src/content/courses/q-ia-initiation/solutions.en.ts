import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'q-ia-initiation',
  practice: {
    'classer-usages': {
      blocks: [
        {
          t: 'table',
          head: ['Proposal', 'Verdict', 'Reason'],
          rows: [
            ['(a) Summarize a log for the analyst', '**Reasonable**', 'High-volume task, the analyst reviews and verifies'],
            ['(b) Alone delete accounts judged suspicious', '**To avoid**', 'Action hard to undo, possible model error'],
            ['(c) Propose a query reviewed by the analyst', '**Reasonable**', 'The human validates before execution'],
            ['(d) Paste a customer export into a public assistant', '**To avoid**', 'Personal data sent to a third party, GDPR'],
          ],
        },
        { t: 'p', text: 'Simple rule: the harder an action is to undo or the more it involves sensitive data, the more a person must validate it with the elements that justify it.' },
      ],
    },
    'donnees-prompt': {
      blocks: [
        {
          t: 'table',
          head: ['Request', 'Verdict', 'Action'],
          rows: [
            ['1 — How DNS works', 'Allowed', 'No sensitive data'],
            ['2 — Administrator’s password', 'Forbidden', 'Never enter a secret; ask for strength criteria without the password'],
            ['3 — Full customer contract', 'To modify', 'Remove names and addresses, or use a tool validated by the organization'],
            ['4 — Password good practices', 'Allowed', 'General question'],
          ],
        },
        { t: 'p', text: 'Rewriting of request 3: “Summarize this contract whose names and addresses have been replaced with [CUSTOMER] and [ADDRESS]: …”. General rule: never enter a secret or confidential data in a public tool, and minimize the rest.' },
      ],
    },
    'verifier-reponse': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Do not act** until the identifier is found.', '**Search** for the identifier in the official vulnerability database and in the security advisory published by the manufacturer.', '**Verify** the product, the affected versions and the fix on the manufacturer’s site.'] },
        { t: 'p', text: 'Information is reliable when it can be found in an official source (manufacturer’s advisory, recognized vulnerability database) with the same identifier, the same versions and a fix.' },
        { t: 'p', text: 'If the source remains untraceable, the note states that the information could not be confirmed, does not recommend urgent action based on it, and requests verification with the manufacturer.' },
      ],
    },
  },
};
