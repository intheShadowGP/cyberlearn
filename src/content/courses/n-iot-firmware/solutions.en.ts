import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'n-iot-firmware',
  practice: {
    'analyse-extraction': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Critical** — unverified HTTP update: installation of arbitrary firmware.', '**Critical** — private key shared between versions and devices: impersonation.', '**High** — 2012 BusyBox: public vulnerabilities.', '**Medium** — root in MD5-crypt: crackable, to be removed as a remote access.'] },
        { t: 'p', text: 'Most serious attack: an attacker controlling the device’s network (or DNS) serves a fake fw.bin; the device flashes it with no verification. The backdoor survives restarts.' },
      ],
    },
    'maj-conception': {
      blocks: [
        { t: 'list', items: ['Signed image (key in an HSM), version and monotonic counter.', 'Download resumed in chunks into the inactive partition, verification before switching.', 'Self-test + watchdog; automatic rollback on failure.', 'Key rotation planned (backup keys), progressive rollout in waves.'] },
      ],
    },
    'incident-flotte': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Acknowledge** the report, thank the researcher, agree on a fix deadline and a secure channel.', '**Qualify**: reproduce in the lab, assess real exposure (how many devices reachable), identify the versions concerned.', '**Set up a cell**: security, development, customer support, legal, communication.', '**Mitigate**: remotely disable the exposed administration service if possible, filter on the cloud side, inform customers of a temporary measure (restrict network access).', '**Assess** notification obligations (authority, customers).'] },
        { t: 'list', items: ['**Fix**: removal or authentication of the service, new signing chain with per-product keys (HSM), anti-rollback; the old shared key is revoked (backup keys needed in the device).', '**Rollout**: in waves with monitoring of the failure rate, A/B partition, announcement to customers.', '**First generation**: exceptional security fix if technically possible, otherwise clear information on the risk and a proposed buy-back or replacement.'] },
        { t: 'list', items: ['**Structure**: public disclosure policy, reporting channel, SBOM per version, component monitoring, declared and published support.', '**Design**: unique secrets per device, secure boot, no administration service exposed by default.', '**Governance**: security review before each release, incident-response exercise, indicators (time to fix, share of the fleet up to date).'] },
      ],
    },
  },
};
