import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'n-ot-securite-avancee',
  practice: {
    'concevoir-zones': {
      blocks: [
        {
          t: 'table',
          head: ['Zone', 'Content', 'SL-T', 'Justification'],
          rows: [
            ['Office (IT)', 'Workstations, email', '2', 'High exposure, limited impact on the process'],
            ['Industrial DMZ', 'Replicated historian, jump server', '3', 'Interface between IT and OT'],
            ['Supervision', 'SCADA, HMI', '3', 'Compromise = non-legitimate control'],
            ['Control (3 lines)', 'PLCs', '3', 'Consequences on the chemical process'],
            ['Safety', 'SIS', '4', 'Last barrier, serious maximum credible consequence'],
            ['Maintenance', 'Integrator’s workstation', '3', 'Privileged access, strong attack surface'],
          ],
        },
        { t: 'list', items: ['**Conduits**: IT ↔ DMZ (HTTPS), DMZ ↔ supervision (unidirectional replication of the historian), supervision ↔ control (filtered industrial protocols, write only from supervision), SIS isolated with restricted access from a dedicated workstation.', '**Remote access**: removal of the permanent remote-control software; access through a bastion in the DMZ with strong authentication, on-demand opening, recording, limited to the equipment concerned.', '**Data feed-up**: data diode or unidirectional replication to the DMZ, consultation by management with no direct link to OT.'] },
      ],
    },
    'analyse-chemin-ot': {
      blocks: [
        { t: 'p', text: 'Most serious path: from the Internet, the permanent remote control reaches the integrator’s workstation, which shares the network of the PLCs and the SIS. An attacker can modify programs, including the SIS’s, which can **neutralize the last safety barrier** and make a chemical accident possible. There is no probe to see it, no logs and no backup to understand and recover.' },
        { t: 'list', ordered: true, items: ['Remove the permanent remote control; access through a bastion on demand with a second factor and recording.', 'Isolate the SIS in a dedicated zone, with no program download from the PLC network; lock the write mode on the SIS (hardware key).', 'Separate the maintenance workstation from the PLC network; filtered zones and conduits.', 'Keep the remote access logs.'] },
        { t: 'list', items: ['**Detection**: passive probe with baseline, alerts on program downloads and writes outside the SCADA, correlation with remote access.', '**Recovery**: tested backups of programs kept off the production network, manual operation procedure, crisis exercise.'] },
      ],
    },
    'exigences-integrateur': {
      blocks: [
        { t: 'list', items: ['**Design**: zones and conduits compliant with the operator’s architecture; complete documentation (architecture, flows, inventory).', '**Hardened delivery**: named accounts, changed passwords, unneeded services disabled, logging enabled; no permanent remote access.', '**Vulnerabilities**: SBOM, fix deadlines, incident notification within a set deadline; right to audit.', '**Subcontracting** subject to prior agreement.'] },
        { t: 'list', ordered: true, items: ['**Security acceptance testing**: configuration review of each device, verification of the absence of default accounts, test of allowed and denied flows, test of remote access, verification of logs.', '**Backups**: programs and configurations handed to the operator and tested for restoration.', '**Training** of operators and manual operation procedures.'] },
        { t: 'p', text: 'End of contract: reversibility, return of backups and administration passwords, removal of access, knowledge transfer. During maintenance: access through the operator’s bastion, fixes validated and planned during shutdowns, annual reviews.' },
      ],
    },
  },
};
