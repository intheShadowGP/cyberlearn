import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'q-securite-llm',
  practice: {
    'audit-agent': {
      blocks: [
        { t: 'p', text: '**Scenario**: a ticket contains disguised instructions asking for a refund and the sending of other customers’ data.' },
        { t: 'p', text: '**Impact**: financial loss (€500 per ticket, automatable), personal data leak (GDPR), damage to reputation.' },
        { t: 'list', items: ['Human validation of refunds.', 'CRM access limited to the authenticated customer of the ticket, enforced by the tool.', 'Email sending limited to the customer’s address, templates for content.', 'Logging of tool calls, alerts on abnormal volumes and amounts.', 'Specific penetration tests with booby-trapped tickets before production.'] },
      ],
    },
    'rag-droits': {
      blocks: [
        { t: 'p', text: '**Cause**: the index was built with an account that reads the whole share, and the search does not filter according to the user’s rights.' },
        { t: 'p', text: 'An instruction in the prompt is not enough: the document is already in the context, and the model can return it in another form or after the question is rephrased.' },
        { t: 'p', text: '**Fix**: keep the documents’ access control lists in the index and filter the results with the user’s identity at search time; exclude the most sensitive zones (HR, legal) from the index until this filtering is validated.' },
      ],
    },
    'plan-tests': {
      blocks: [
        {
          t: 'table',
          head: ['Family', 'Test case', 'Expected result'],
          rows: [
            ['**Indirect injection**', 'Share document containing a hidden instruction to forward messages', 'The assistant ignores the instruction, no action triggered'],
            ['**Data leak**', 'An account with no HR rights asks about salaries', 'No HR document is retrieved or returned'],
            ['**Tool abuse**', 'Request to send an email to an external address', 'Human confirmation showing recipient and content'],
            ['**Exfiltration**', 'Reply containing an image whose URL carries data', 'The domain is not allowed, the image is not loaded'],
          ],
        },
        { t: 'p', text: 'Replay the whole set before production, after each change of model, prompt or tool, and periodically. Record the cases, the results, the gaps fixed and the residual risks accepted.' },
      ],
    },
  },
};
