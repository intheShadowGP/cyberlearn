import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'd-windows-server-pki-durcissement',
  practice: {
    'audit-pki': {
      blocks: [
        {
          t: 'table',
          head: ['Template', 'Verdict', 'Fix'],
          rows: [
            ['InternalWebServer', 'Sound: server usage, restricted enrollment, subject not chosen by the requester', '—'],
            ['UserAuth', '**At risk**: client authentication + subject supplied by the requester + open to the whole domain', 'Forbid the requester from supplying the subject (draw it from the object); restrict enrollment; approval for sensitive use'],
            ['CodeSigning', '**At risk**: code signing open to the whole domain', 'Restrict enrollment to a specific group and require approval'],
          ],
        },
        { t: 'p', text: 'On the issuing authority side: monitor issuances (volume, sensitive templates, unusual requesters), periodically check the templates’ enrollment rights, and make sure that revocation (CRL/OCSP) is published and reachable.' },
      ],
    },
    'reprise-ad': {
      blocks: [
        { t: 'p', text: 'The offline backup is **usable with care**: it is healthy if it predates the intrusion, and since the attacker had administrator rights for at least ten days and the backup is three weeks old, it does predate it. But it does not contain the legitimate changes of the last three weeks (accounts, groups, certificates), which will have to be rebuilt or compared with the logs.' },
        { t: 'list', ordered: true, items: ['**Contain**: isolate the affected network, cut the compromised administration accounts; **preserve** logs, copies and hashes before any reinstall.', '**Restore** the domain controller from the offline backup in an isolated environment, then rebuild the other controllers from it; reinstall the servers from clean media.', '**Reset the secrets**: passwords of privileged and service accounts, double reset of `krbtgt`, PKI secrets; bring the privileged groups back to a correct state.', '**Check the PKI** (templates, enrollment rights, certificates issued since the intrusion date); revoke and reissue what is doubtful.'] },
        { t: 'list', items: ['Preventive measures: isolated backups (offline or immutable) with accounts and access **separate** from domain administration, 3-2-1 rule, regular restore tests.', 'Separation of administration tiers, monitoring of access to backups and of privileged groups, a written recovery plan rehearsed every year.'] },
        { t: 'callout', kind: 'warn', text: 'Do not restart the restored directory on the production network before resetting the secrets: the attacker would immediately reuse the ones they copied.' },
      ],
    },
    'durcir-dc': {
      blocks: [
        { t: 'list', items: ['Hardening: Server Core, roles limited to the domain controller and DNS, CIS/Microsoft baseline through GPO, firewall active, administration through a dedicated workstation and network, highest-tier accounts not shared, LAPS for the local administrator, fast fixes.', 'DNS: AD-integrated zone, secure dynamic updates only, zone transfers restricted to legitimate DNS servers, logging and monitoring of changes.'] },
        { t: 'list', ordered: true, items: ['Back up the controller’s system state (allowing an authoritative restore).', 'Keep isolated copies: offline or immutable storage, with access separate from day-to-day administration.', 'Regularly test a full restore in an isolated environment.'] },
        { t: 'callout', kind: 'warn', text: 'Never leave the controller’s backups accessible with the same credentials as daily administration: an attacker who obtains those rights would target the backups too.' },
      ],
    },
  },
};
