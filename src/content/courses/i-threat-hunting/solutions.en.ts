import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'i-threat-hunting',
  practice: {
    'balise-zeek': {
      blocks: [
        { t: 'p', text: '**198.51.100.23** is the most suspicious destination: 1,438 connections in a day, about one every 60 seconds, with a very low standard deviation (1.9 s) and a constant volume of about 420 bytes. A human or an ordinary application does not produce such regularity; it is the signature of a beacon. The first line (highly variable volumes, random interval) looks like an online service used normally; DNS traffic to the internal resolver is normal; the three connections to 203.0.113.80 remain to be checked, but with no regularity.' },
        { t: 'list', items: ['`dns.log`: which name was resolved to 198.51.100.23, since when (recent domain?).', '`ssl.log`: SNI, certificate (self-signed, recently issued?), JA3/JA4 fingerprint compared with known tools.', 'EDR: which process on the workstation opens these connections, its location, signature, parent.', 'Do other workstations contact the same destination?'] },
        { t: 'code', lang: 'text', caption: 'Logic of a durable detection', code: 'For each (internal host, external destination) pair over 24 h:\n  number of connections ≥ 100\n  AND coefficient of variation of intervals < 10 %\n  AND destination absent from the list of authorized services (updates, company SaaS)\n→ medium-priority alert, enriched with the process (EDR) and the domain age' },
      ],
    },
    'plan-chasse': {
      blocks: [
        {
          t: 'table',
          head: ['Hypothesis', 'Data', 'Method'],
          rows: [
            ['H1: legitimate VPN accounts were used from unusual places or at unusual hours', 'VPN concentrator logs, authentication (MFA) logs, address geolocation', 'Per-account baseline, stacking of countries and ISPs, impossible simultaneous sign-ins'],
            ['H2: a remote-access tool was installed as a service on servers', 'Events 7045 (service installation) and 4697, Sysmon 1, EDR software inventory', 'Stacking of installed services and remote-access binaries, comparison with authorized tools'],
            ['H3 (bonus): large volumes left for a consumer cloud storage service', 'Proxy, Zeek `ssl.log` (SNI), DLP', 'Outbound volume per host and destination, compared with the baseline'],
          ],
        },
        { t: 'callout', kind: 'info', text: 'TLP:AMBER: the report and your results that reuse its content may be shared within your organization and with the clients who need it, not beyond. For wider sharing (for example with the sector’s ISAC), ask the originator’s agreement or share only your own observations under a suitable marking.' },
      ],
    },
    'chasse-identites': {
      blocks: [
        {
          t: 'table',
          head: ['Observation', 'Reading'],
          rows: [
            ['SRV-BKP01 → 14 hosts, type 3, 02:00-03:00 every night', 'Baseline: planned, regular and expected nightly backup'],
            ['PC-COMPTA-07 → 38 hosts, type 3, a single night', '**Abnormal**: a source that is an ordinary workstation, a very high number of hosts in a short time, an account never seen there. Probable lateral movement with a stolen account'],
            ['SRV-BKP01 → one type-10 session at 14:22', '**Abnormal**: a service account does not open an interactive session, and the time does not match the backup'],
            ['SRV-BKP01 → type 3 at 02:10 (maintenance)', 'Probably normal, to be compared with the maintenance window'],
          ],
        },
        { t: 'list', items: ['**Workstation PC-COMPTA-07**: EDR (processes, parent, remote-access tools), the matching 4624 and 4648 events, 4688 or Sysmon, who was logged in at that moment.', '**Account**: date of last password change, origin of credentials, other sign-ins (VPN, cloud).', '**Target hosts**: what actions after authentication (services created, scheduled tasks, administrative shares).'] },
        { t: 'p', text: 'Hypothesis: “If the account `svc-sauvegarde` is compromised, it authenticates from sources outside its usual list, or on a large number of hosts in a short time, or in an interactive session.”' },
        { t: 'code', lang: 'text', caption: 'Logic of a durable detection', code: 'For each service account, over 1 h:\n  source absent from the account’s authorized list\n  OR number of distinct target hosts > baseline threshold\n  OR session type = 10 (remote interactive)\n→ high-priority alert, enriched with the process (EDR) and the account owner' },
      ],
    },
  },
};
