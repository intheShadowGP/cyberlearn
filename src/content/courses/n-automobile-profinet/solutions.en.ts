import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'n-automobile-profinet',
  practice: {
    'surface-vehicule': {
      blocks: [
        {
          t: 'table',
          head: ['Exposure', 'Entry point', 'Comment'],
          rows: [
            ['Most exposed', 'Wireless interfaces and cellular telematics', 'Reachable remotely, with no physical access'],
            ['Exposed', 'Infotainment, mobile app, USB', 'Rich in software and connections'],
            ['Physical access', 'OBD-II port', 'Requires access to the vehicle'],
            ['Critical to protect', 'Braking and steering ECUs', 'Never directly reachable from the entry points'],
          ],
        },
        { t: 'p', text: 'Defense principle: compartmentalize the domains and place a secure gateway between the exposed entry points and the critical functions, allowing only strictly necessary exchanges. Complementary measures: secure boot and signed firmware on the ECUs, intrusion detection on bus traffic, and signed remote updates.' },
      ],
    },
    'conformite-auto': {
      blocks: [
        { t: 'list', items: ['ISO/SAE 21434: integrate cybersecurity into the development cycle (TARA risk analysis, requirements, tests, responsibilities with suppliers) — the engineering framework.'] },
        { t: 'list', items: ['CSMS (R155): demonstrate the organization and processes for managing the vehicle’s cybersecurity throughout its life cycle (governance, risks, incidents).', 'SUMS (R156): demonstrate the safe and traceable management of software updates, including remote ones (identification, validation, secure deployment, anti-rollback).'] },
        { t: 'list', ordered: true, items: ['Continuous monitoring of vulnerabilities affecting the vehicle’s components and incident response.', 'Controlled deployment of fixes through signed updates, with fleet tracking.'] },
      ],
    },
    'incident-vehicule': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Qualify**: reproduce the flaw in the lab, measure the exposure (versions, number of vehicles, exploitation conditions), assess the safety impact with the safety teams.', '**Set up a cell**: cybersecurity, engineering, functional safety, legal, communication, suppliers.', '**Mitigate**: remotely disable the vulnerable Bluetooth function if possible, additional filtering at the gateway, inform customers of temporary measures.', '**Communicate**: report to the competent authorities according to obligations, feedback to the researcher, customer information.', '**Monitor**: the VSOC looks for signs of exploitation across the fleet.'] },
        { t: 'list', items: ['**Fix**: signed infotainment update, validated by the safety teams, with anti-rollback and safe fallback; rollout in waves with tracking of the success rate (SUMS process).', '**Safety checks**: verify that the update disturbs no critical function, non-regression tests, deployment conditions (vehicle stopped, sufficient battery).', '**Unreachable vehicles**: workshop campaign, owner information.'] },
        { t: 'list', items: ['**Architecture**: full compartmentalization of infotainment, gateway allowing only precise messages, secure boot on all ECUs.', '**Process**: updated TARA, component monitoring (SBOM), incident-response exercises, published disclosure policy.', '**Compliance**: evidence of the CSMS (R155) and SUMS (R156), supplier review.'] },
      ],
    },
  },
};
