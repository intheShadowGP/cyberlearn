import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'risk-matrix-lab',
  questions: {
    'rm-q1': { type: 'single', correct: 'a', explanation: 'A risk is estimated by combining its likelihood (the probability of the scenario) and its severity (impact). The number of vulnerabilities or the budget are not measures of risk.' },
    'rm-q2': { type: 'single', correct: 'a', explanation: 'Ransomware has the highest likelihood and impact (score 16): it is the first to treat. Prioritization follows the score (likelihood × impact), not the order of appearance.' },
    'rm-q3': { type: 'multi', correct: ['a', 'b', 'c', 'd'], explanation: 'The four treatment options are reduce, transfer, avoid and accept. “Accept” is a formal, documented decision, not an absence of decision.', whyWrong: { e: 'Ignoring a risk with no decision is not a treatment option: it is precisely what must be avoided.' } },
    'rm-q4': { type: 'truefalse', correct: false, explanation: 'A high risk calls for a measure (reduce, transfer or avoid). Accepting it and doing nothing because the activity is profitable is not defensible: acceptance is only justified for a low risk, or after reduction to a tolerable residual level.' },
    'rm-q5': { type: 'single', correct: 'a', explanation: 'The residual risk is accepted by management (the risk owner), who bears the responsibility — not by the technical team or the provider. Insurance transfers part of the financial impact, not the responsibility.' },
    'rm-q6': {
      type: 'open',
      model: 'The two priority risks are ransomware (score 16) and the exposed VPN gateway (score 12). Ransomware — option: reduce; measures: offline/immutable and tested backups, MFA, mail filtering and awareness, detection (EDR), recovery plan; owner: IT director/CISO; residual risk: an attack that succeeds anyway, whose impact is limited by restorable backups. VPN — option: reduce; measures: priority patching, MFA, restricted exposure (source filtering, bastion), monitoring; owner: network team; residual risk: an unknown vulnerability (zero-day), mitigated by access restriction and monitoring. Both plans must be validated and the residual risk accepted by management.',
      criteria: ['The two priority risks are correctly identified (highest score).', 'A treatment option and concrete measures are proposed for each.', 'An owner is designated and the residual risk is made explicit.', 'Acceptance of the residual risk by management is mentioned.'],
      explanation: 'A treatment plan is not limited to “reduce”: it specifies the measures, the owner, the implicit deadline and what remains after treatment.',
    },
  },
  debrief: [
    { t: 'list', items: ['The **level** is read as likelihood × severity; the **priority** follows this score.', 'The **options**: reduce (the most common), transfer, avoid, accept — never “ignore”.', 'The **residual risk** remains after treatment and must be **accepted by management**.'] },
    { t: 'callout', kind: 'key', title: 'From risk to plan', text: 'Inventory the assets and scenarios, estimate (likelihood × severity), prioritize, choose a treatment per risk with an owner and a deadline, then have the residual risk accepted at the right level. Review periodically.' },
    { t: 'callout', kind: 'info', text: 'This workshop is an educational simulation: the likelihood × severity score is a reading aid, not a normative method. Real methods (EBIOS Risk Manager, ISO 27005) are richer.' },
  ],
};
