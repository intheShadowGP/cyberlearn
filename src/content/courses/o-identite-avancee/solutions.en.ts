import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'o-identite-avancee',
  practice: {
    'concevoir-acces': {
      blocks: [
        { t: 'list', items: ['**Signals**: identity and sign-in risk, device state (managed, encrypted, up to date), location and network, sensitivity of the action.'] },
        {
          t: 'table',
          head: ['Population', 'Rule', 'Remark'],
          rows: [
            ['Employees with a managed device', 'Resistant MFA, full access if the device is compliant', 'Session of a few hours'],
            ['Personal devices', 'Limited access (browser, no download), resistant MFA', 'No data stored locally'],
            ['Partners', 'Time-limited guest account, access to a restricted scope', 'End-of-assignment review'],
          ],
        },
        { t: 'p', text: 'Sensitive actions (mass export, change of bank details): fresh authentication proof and reinforced logging; short session duration, re-evaluated if risk increases.' },
        { t: 'p', text: 'Testing and exceptions: deploy first in report-only mode to measure the effect, with pilot groups, then enforce. Exceptions are dated, approved and reviewed.' },
      ],
    },
    'identites-machines': {
      blocks: [
        {
          t: 'table',
          head: ['Identity', 'Risk', 'Fix'],
          rows: [
            ['pipeline-deploy', 'High: long-lived key with administrator rights', 'Short-lived federated identity for the pipeline, rights limited to deployment'],
            ['svc-reporting', 'High: clear-text password in the repository', 'Remove from the repository, renew the secret, store it in a vault'],
            ['api-paiement → api-commande', 'Medium: old shared secret', 'mTLS with workload identities and automatic rotation'],
            ['fonction-export', 'Low: managed identity, limited rights', 'Keep, document the owner'],
          ],
        },
        { t: 'p', text: 'Automatic control: repository scanning to detect secrets, inventory of non-human identities with an owner, alert on secrets older than a given age and on excessive rights.' },
      ],
    },
    'compromission-idp': {
      blocks: [
        { t: 'p', text: 'Maximum severity: a new signing certificate and a federated trust make it possible to forge assertions for any user in all federated applications, without knowing any password.' },
        { t: 'list', ordered: true, items: ['**Disable** the administrator account, revoke its sessions and tokens; activate the emergency accounts.', '**Remove** the added certificate and trust, or isolate the provider if the extent is unknown.', '**Rotate** the signing keys and invalidate the tokens already issued.', '**Warn** the response team, management and application owners.'] },
        { t: 'list', items: ['**Audit** trusts, rights, authorized applications and administrators, and compare with the clean backup.', '**Restore** a validated configuration, then restore authentication gradually.', '**Reset** sensitive accounts and check their recent activity with the logs exported elsewhere.'] },
        { t: 'list', items: ['**Administration** with resistant MFA, dedicated workstations and just-in-time access.', '**Alerts** raised immediately on any addition of a certificate or federated trust.', '**Logs** exported outside the provider and resilience exercises.'] },
      ],
    },
  },
};
