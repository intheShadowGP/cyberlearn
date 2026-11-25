import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'l-devsecops-pipeline',
  practice: {
    'revue-workflow': {
      blocks: [
        { t: 'list', items: ['`pull_request_target` + checkout of the contribution’s code: external code run with the secrets.', '`write-all`: the token can modify the repository.', 'Action pinned to `@main`: content can change at any time.', '`npm install`: install scripts run, lock file not respected.', 'Static AWS key exposed to the whole job.'] },
        { t: 'code', lang: 'yaml', code: "on: [pull_request]\npermissions:\n  contents: read\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@<SHA>\n        with:\n          persist-credentials: false\n      - run: npm ci --ignore-scripts && npm test\n# Deployment, on main only, uses OIDC (id-token: write) in a protected environment." },
      ],
    },
    'pipeline-cible': {
      blocks: [
        { t: 'list', ordered: true, items: ['Secrets (blocking).', 'SCA: blocking on critical/exploited, informational otherwise.', 'IaC (Checkov/Trivy): short blocking list.', 'Container image: blocking on critical.', 'SAST: informational, then blocking on reliable rules.', 'DAST in pre-production: informational.'] },
        { t: 'p', text: 'Deployment secrets: OIDC federation to the cloud and to the registry, protected environment. Indicators: mean time to fix critical vulnerabilities, number of active exceptions, share of repositories covered.' },
      ],
    },
    'incident-ci': {
      blocks: [
        {
          t: 'table',
          head: ['Time', 'Event', 'Reading'],
          rows: [
            ['09:12', 'Pull request from a new account modifying `package.json`', 'Entry vector: an untrusted external contribution'],
            ['09:14', '`npm install` and `postinstall` script of an added dependency', 'Arbitrary code runs in the job; `npm ci` and `--ignore-scripts` would limit the risk'],
            ['09:14', 'Outbound connection from the runner to an external address', 'Exfiltration of the deployment secret (small volume, consistent with a key)'],
            ['09:31', 'Key used from an address outside the pipeline', 'The stolen secret is **replayed**: confirmation of the compromise'],
            ['09:33', 'Creation of an administrator user', '**Persistence** in the cloud'],
          ],
        },
        { t: 'p', text: 'The design mistakes: `pull_request_target` gives the repository’s secrets to code coming from a contribution, the deployment key is **static and long-lived**, the runner is **shared** with no outbound filtering, and the installation is not pinned by the lock file.' },
        { t: 'list', ordered: true, items: ['**Contain**: revoke the deployment key, delete the `svc-backup` user and its sessions, suspend deployments, isolate the runner.', '**Preserve**: build logs of the job, history of pull request #482, cloud provider logs, hashes of the artifacts produced since 09:12.', '**Measure**: actions performed with the key and with the created account, artifacts published during the period, other secrets accessible to the job.', '**Rebuild** on a clean runner from a known state, verify the artifacts, rotate the exposed secrets.'] },
        { t: 'list', items: ['**Prevention**: `pull_request` for external contributions, `npm ci`, install scripts disabled, minimal permissions, OIDC federation instead of the static key, deployment in a protected and approved environment, ephemeral runners with outbound filtering.', '**Detection**: alert on use of the key outside the pipeline’s addresses, on creation of administrator users and on unexpected outbound connections from runners.', '**Governance**: mandatory review of new dependencies and workflow changes, branch protection.'] },
      ],
    },
  },
};
