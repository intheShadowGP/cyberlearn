import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'l-cloud-iam',
  practice: {
    'labo-iam': {
      blocks: [
        { t: 'p', text: 'The debrief of the lab “IAM evaluator” details the expected result of each request and the policy to fix.' },
        { t: 'p', text: 'Method: 1) does a Deny statement match? If so, deny. 2) Otherwise, does an Allow statement match? If so, allow. 3) Otherwise, implicit deny.' },
      ],
    },
    'revue-compte': {
      blocks: [
        { t: 'list', items: ['**Critical**: public “backups” bucket; root account without MFA; three administrator users with static keys.', '**Target**: root account locked with hardware MFA; human access through SSO (IAM Identity Center) with MFA and roles by function; deployments by CI with OIDC federation; no static key anymore.', '**Provider**: read-only cross-account role on the backup prefix, or short-lived pre-signed URLs; public access blocked at the account level.'] },
      ],
    },
    'analyse-journal-cloud': {
      blocks: [
        {
          t: 'table',
          head: ['Time', 'Action', 'Reading'],
          rows: [
            ['02:11', 'Console sign-in **without MFA** from an external address', 'Account `d.martin` probably compromised (stolen or reused password)'],
            ['02:13', 'Creation of an access key', '**Persistence**: the attacker secures access independent of the password'],
            ['02:15', 'Attachment of `AdministratorAccess`', '**Privilege escalation**: full rights over the account'],
            ['02:17', 'Logging stopped (`StopLogging`)', '**Concealment**: the attacker cuts the traces'],
            ['02:22', '24 large instances in a distant region', '**Resource abuse** (for example costly compute) with the new key'],
            ['02:40', 'Policy of bucket `export-rh-2025` with `Principal *`', '**Data exposure**: the bucket becomes public'],
          ],
        },
        { t: 'p', text: 'The sequence is that of a takeover of a privileged account. It shows that **missing MFA** and **overly broad rights** let the attacker climb in a few minutes, then neutralize detection.' },
        { t: 'list', items: ['**Preserve first**: export everything the logs contain (including those of other trails or the logging account), snapshots of the instances, copy of the modified policies, hashes.', '**Contain**: disable the user and the key, revoke active sessions, remove the administrator policy, re-enable logging, put the bucket back to private (public access blocking), isolate the instances through network rules rather than delete them.', '**Investigate**: other actions of the key, other accounts affected, bucket data read (storage access logs).', '**Notify**: personal data exposed (HR): assess notification to the CNIL within 72 h, inform management and the insurer.'] },
        { t: 'list', items: ['**Prevention**: mandatory MFA for everyone, SSO with temporary roles instead of users with keys, least-privilege policies and a permission ceiling (SCP) forbidding `StopLogging` and the attachment of `AdministratorAccess`.', '**Detection**: alerts on key creation, policy change, logging stop and sign-in without MFA; logs sent to a separate write-only account.', '**Posture**: public access blocking at the account level, continuous CSPM, rights review.'] },
      ],
    },
  },
};
