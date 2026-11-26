import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'q-securite-ia-avancee',
  practice: {
    'chaine-modele': {
      blocks: [
        {
          t: 'table',
          head: ['Component', 'Risk', 'Measure'],
          rows: [
            ['Model downloaded as pickle', 'Code execution on load, altered model or model with a backdoor', 'Weights-only format, provenance and signature, isolated loading, evaluation on own cases'],
            ['Dataset collected online', 'Booby-trapped examples, manipulated labels, bias', 'Traced provenance, sampling and label control, comparison of model versions'],
            ['Unpinned library', 'Malicious update or regression', 'Pinned versions, dependency analysis, controlled deployment'],
            ['Unreviewed third-party plugin', 'Hidden instructions in descriptions, excessive rights', 'Review of code and tool descriptions, minimal rights, list of authorized plugins'],
          ],
        },
        { t: 'p', text: 'The bill of materials lists for each component: name, version, publisher, source, fingerprint, format, license, verification date and owner, in order to react quickly to an alert.' },
      ],
    },
    'architecture-agent': {
      blocks: [
        { t: 'p', text: '**Risky combination**: untrusted content (requests and attachments), private data (CRM records) and output channel (replies sent).' },
        { t: 'list', ordered: true, items: ['**Close the output channel**: the reply only goes to the authenticated address of the customer who made the request; any other send requires validation.', '**Limit the data**: the agent only reads the record of the customer concerned, enforced by the tool.', '**Separate** the component that reads free text from the one that decides on the refund.'] },
        { t: 'list', items: ['**Authorization** per action: refund above a cap or outside the rules subject to human validation.', '**Confirmation** displaying amount, beneficiary and reason.', '**Logging** of each tool call with the request that triggered it, and alerts on abnormal volumes or amounts.'] },
      ],
    },
    'analyse-risque-ia': {
      blocks: [
        { t: 'list', items: ['**Assets**: documents in the share (including HR and legal), system prompts, hosted model, ticket and email tools, logs. **Flows**: documents to the index, requests to the provider, outgoing emails.'] },
        {
          t: 'table',
          head: ['Scenario', 'Reference', 'Measure'],
          rows: [
            ['Indirect injection through a share document causing data to be sent', 'ATLAS (prompt injection), OWASP LLM01', 'Confirmation of sends, limited recipients, untrusted content isolated'],
            ['Leak of unauthorized documents through search', 'OWASP (sensitive information disclosure)', 'Access rights kept in the index and filtering at search'],
            ['Compromise of a third-party component (model, plugin)', 'ATLAS (supply chain)', 'Provenance, signature, bill of materials, plugin review'],
          ],
        },
        { t: 'p', text: 'Residual risk: new injections or filter bypass, accepted by management with monitoring and regular adversarial tests. Review at each change of model, tool or data scope, and at least annually.' },
      ],
    },
  },
};
