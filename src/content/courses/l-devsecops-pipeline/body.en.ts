import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'l-devsecops-pipeline',
  lesson: {
    intro:
      "An organization that ships several times a day can no longer have each version audited by hand. DevSecOps builds automated controls into the pipeline and treats the pipeline itself as a critical system: the SolarWinds (2020), Codecov (2021) and xz-utils backdoor (2024) attacks showed that an attacker who compromises the build chain reaches all users of the software at once.",
    sections: [
      {
        id: 'controles',
        title: 'Automated pipeline controls',
        blocks: [
          {
            t: 'table',
            head: ['Control', 'What it analyzes', 'When', 'Example tools'],
            rows: [
              ['**Secret detection**', 'Keys, tokens, passwords in the code and the history', 'Before the commit (hook) and in CI', 'gitleaks, native forge detection'],
              ['**SAST**', 'Source code: injections, API misuse', 'On every pull request', 'CodeQL, Semgrep'],
              ['**SCA**', 'Dependencies: known vulnerabilities, licenses', 'On every build and continuously', 'npm audit, OWASP Dependency-Check, Dependabot'],
              ['**IaC analysis**', 'Terraform, Kubernetes, Dockerfile: misconfigurations', 'Before deployment', 'Checkov, tfsec / Trivy'],
              ['**Image analysis**', 'Vulnerable packages in container images', 'After the image build', 'Trivy, Grype'],
              ['**DAST**', 'Running application: real behavior', 'In pre-production', 'OWASP ZAP'],
            ],
          },
          { t: 'def', term: 'SAST', text: "Static Application Security Testing: analysis of the code without running it. Fast and precise on location, but prone to false positives and blind to runtime configuration errors." },
          { t: 'def', term: 'SCA', text: "Software Composition Analysis: inventory of third-party components (direct and transitive) matched against vulnerability databases (CVE, GitHub advisories, OSV)." },
          { t: 'callout', kind: 'key', text: "A control that produces hundreds of untriaged alerts gets bypassed or disabled. Start by **blocking** on a small number of safe rules (secrets, exploited critical vulnerabilities) and **inform** on the rest, then tighten gradually." },
          { t: 'diagram', id: 'devsecops-pipeline', caption: 'Each pipeline stage carries a security control (barrier): critical rules are blocking, the others inform.', alt: 'Five-stage pipeline — Commit, Build, Test, Pre-prod, Deployment — with a security barrier under each: secret scanning, SCA/SBOM, SAST, DAST, IaC analysis and signing.' },
        ],
      },
      {
        id: 'chaine',
        title: 'The software supply chain',
        blocks: [
          {
            t: 'table',
            head: ['Attack', 'Principle', 'Countermeasure'],
            rows: [
              ['**Typosquatting**', 'Malicious package with a name close to a popular package', 'Review of new dependencies, approved internal registries'],
              ['**Dependency confusion**', 'Public package bearing the name of an internal package, resolved first', 'Reserved namespaces, explicitly configured registry'],
              ['**Compromised maintainer account**', 'Malicious version published on a legitimate package', 'Lock file, pinned versions, deliberate updates'],
              ['**Build system compromise**', 'Code injected during the build', 'Isolated and reproducible build, signed provenance'],
              ['**Install scripts**', 'Code run automatically at installation (`postinstall`)', 'Disable scripts when possible, review'],
            ],
          },
          { t: 'def', term: 'SBOM', text: "Software Bill of Materials: standardized inventory (SPDX or CycloneDX formats) of a software’s components. It lets you answer in minutes the question “are we affected by this vulnerability?”." },
          { t: 'def', term: 'SLSA', text: "Supply-chain Levels for Software Artifacts: framework defining requirement levels for artifact provenance (who built them, from which source, on which platform), attested and signed." },
          {
            t: 'example',
            title: 'The lock file',
            blocks: [
              { t: 'p', text: "A `package.json` declaring `\"react\": \"^19.0.0\"` accepts any future 19.x version. The `package-lock.json` file pins the exact versions and their integrity hashes; `npm ci` refuses to install if the lock and the manifest diverge. Result: a malicious version published tomorrow does not silently enter the next build." },
            ],
          },
        ],
      },
      {
        id: 'ci',
        title: 'Hardening the pipeline itself',
        blocks: [
          { t: 'code', lang: 'yaml', caption: 'Hardened GitHub Actions workflow (excerpt)', code: "permissions:\n  contents: read            # least privilege by default\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@<full commit SHA>         # action pinned by hash\n        with:\n          persist-credentials: false                      # the token is not kept\n      - run: npm ci                                      # install matching the lock\n      - run: npm audit --audit-level=high\n  deploy:\n    needs: build\n    permissions:\n      id-token: write       # OIDC federation: no static cloud secret\n      contents: read\n    environment: production # manual approval and isolated secrets" },
          { t: 'list', items: ['**Minimal permissions** for the workflow token, raised only in the job that needs them.', '**Third-party actions pinned by commit hash**: a tag (`@v4`) can be moved to malicious code.', '**OIDC federation** to the cloud rather than access keys stored as secrets.', '**Never** run code from an external pull request with secrets (misused `pull_request_target` trigger).', '**Protected environments**: approval, allowed branches, secrets separated by environment.', 'Branch protection: mandatory review, required checks, history that cannot be rewritten.'] },
          { t: 'callout', kind: 'warn', text: "A secret that appears even once in the Git history must be considered compromised: removing it from the latest commit is not enough, you must **revoke** it then replace it." },
        ],
      },
      {
        id: 'iac',
        title: 'Infrastructure as Code',
        blocks: [
          { t: 'code', lang: 'hcl', caption: 'Terraform to fix', code: 'resource "aws_s3_bucket_public_access_block" "logs" {\n  bucket                  = aws_s3_bucket.logs.id\n  block_public_acls       = false\n  restrict_public_buckets = false\n}\n\nresource "aws_security_group_rule" "ssh" {\n  type        = "ingress"\n  from_port   = 22\n  to_port     = 22\n  protocol    = "tcp"\n  cidr_blocks = ["0.0.0.0/0"]\n  security_group_id = aws_security_group.admin.id\n}' },
          { t: 'p', text: "An IaC analyzer flags here the public access allowed on the bucket and the opening of SSH to the whole Internet, **before** these resources exist. The fix is made in the code, reviewed and versioned: this is one of the great security benefits of IaC." },
          { t: 'list', items: ['Terraform state files: they often contain secrets in clear text; store them encrypted, with restricted access.', 'Drift detection: compare the real infrastructure to the code to spot manual changes.'] },
        ],
      },
      {
        id: 'gouvernance',
        title: 'Governing vulnerabilities: priorities, exceptions and VEX',
        blocks: [
          { t: 'p', text: 'A pipeline that detects a lot quickly produces hundreds of alerts. Without a triage rule, teams burn out or ignore everything. **Governance** decides what blocks a delivery, what is fixed within a deadline, and what can be accepted for a time.' },
          { t: 'def', term: 'Risk-based prioritization', text: 'Combine the **severity** (CVSS score), known **exploitation** (catalogs such as CISA’s KEV, EPSS probability), the component’s **exposure** (reachable from the Internet or not) and the application’s **criticality**. A medium flaw exploited on an exposed service comes before a critical flaw that cannot be reached.' },
          {
            t: 'table',
            head: ['Situation', 'Typical decision', 'Indicative deadline'],
            rows: [
              ['Actively exploited flaw, exposed component', 'Block the delivery, fix or isolate', 'Immediate to a few days'],
              ['High severity, not exploited, internal component', 'Fix in the normal cycle', 'A few weeks'],
              ['Low severity, component not reachable', 'Document with a VEX statement', 'Periodic review'],
              ['Fix impossible in the short term', 'Dated exception with a compensating measure', 'Until the set deadline'],
            ],
          },
          { t: 'def', term: 'VEX', text: 'A VEX (Vulnerability Exploitability eXchange) statement accompanies an SBOM and states, for a given vulnerability, whether the product is **affected**, **not affected** or **fixed**. It avoids fixing or reporting what cannot be reached.' },
          { t: 'list', items: ['**An exception** specifies: the justification, the owner, the compensating measure, the expiry date.', '**Simple indicators**: mean time to fix by severity, number of expired exceptions, share of repositories covered.', '**Measured blocking**: only high-confidence, high-impact rules block; the rest inform.'] },
          { t: 'callout', kind: 'warn', text: 'An exception with no owner or deadline becomes an invisible debt. An alert deleted without a trace loses both the evidence and the decision.' },
        ],
      },
      {
        id: 'incident',
        title: 'Incident on the delivery chain: detect and respond',
        blocks: [
          { t: 'p', text: 'The pipeline holds secrets, produces what customers run and can modify production: it is a prime target. It must therefore be **logged**, abnormal behavior must be **spotted**, and you must know how to **respond** when a secret, a runner or a dependency is compromised.' },
          {
            t: 'table',
            head: ['Signal', 'Why it is suspicious', 'Where to see it'],
            rows: [
              ['Workflow modified by an unusual account', 'Pipeline takeover or added step', 'Forge history, audit log'],
              ['Job that downloads then runs an external script', 'Loading of uncontrolled code', 'Build logs'],
              ['Unexpected outbound connection from a runner', 'Exfiltration of secrets', 'Runner network logs'],
              ['Deployment secret used outside the pipeline', 'Stolen secret reused', 'Cloud provider logs'],
              ['Artifact published without provenance or a valid signature', 'Bypass of the delivery path', 'Registry, admission verification'],
            ],
          },
          { t: 'list', ordered: true, items: ['**Contain**: revoke the secrets accessible to the pipeline, suspend deployments, isolate the runner.', '**Preserve**: build logs, forge history, provenance attestations, artifact hashes.', '**Measure**: which builds ran during the period, which artifacts were published, which secrets were available.', '**Rebuild** on a clean environment from a known state, then verify the artifacts.', '**Communicate**: affected versions, verifiable hashes, measures to take on the customer side.'] },
          { t: 'def', term: 'Ephemeral runner', text: 'Execution machine created for a single job then destroyed. It keeps no cache or secret from one job to the next: a compromise does not persist.' },
          { t: 'callout', kind: 'warn', text: 'Rebuilding on the compromised runner or erasing the build logs destroys evidence and may leave the attacker in place.' },
        ],
      },
    ],
    useCases: [
      'Set up a pipeline that blocks the merge when a secret is detected or an exploited critical vulnerability is found.',
      'Respond to a “critical vulnerability in a library” alert thanks to each application’s SBOM.',
      'Remove all cloud access keys from CI secrets in favor of OIDC federation.',
    ],
    commonMistakes: [
      'Pinning third-party actions by version tag rather than by commit hash.',
      'Giving the workflow token global write rights.',
      'Deleting a committed secret without revoking it.',
      'Enabling all analyzers in blocking mode from the start, then disabling them because of the noise.',
      'Installing dependencies with `npm install` in CI, without strictly respecting the lock.',
    ],
    bestPractices: [
      'Progressive automated controls: block little but reliably, inform on the rest.',
      'Version locking, review of new dependencies, controlled registry.',
      'Minimal permissions, pinned actions, OIDC, protected environments.',
      'SBOM and signed provenance of artifacts.',
      'IaC analysis before deployment and protection of state files.',
    ],
    keyPoints: [
      'SAST (code), SCA (dependencies), secrets, IaC, images, DAST (runtime): each covers one angle.',
      'The build chain is a target: secure it like a production system.',
      'Dependency lock, pinned actions, least privilege, OIDC.',
      'SBOM and SLSA make provenance verifiable.',
    ],
  },
  practice: [
    {
      id: 'revue-workflow',
      kind: 'analysis',
      title: 'Review of a CI workflow',
      context: [
        { t: 'code', lang: 'yaml', code: "on: [pull_request_target]\npermissions: write-all\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n        with:\n          ref: ${{ github.event.pull_request.head.sha }}\n      - uses: some-author/super-action@main\n      - run: npm install && npm test\n        env:\n          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_KEY }}" },
      ],
      steps: ['List the risks.', 'Explain the most serious attack scenario.', 'Propose a corrected version.'],
    },
    {
      id: 'pipeline-cible',
      kind: 'case',
      title: 'Case study: design the secure pipeline of an API',
      context: [{ t: 'p', text: 'A team of 6 developers ships a containerized Node.js API on Kubernetes, with infrastructure in Terraform. No automated security control exists today.' }],
      steps: ['Order the controls to introduce and their mode (blocking or informational).', 'Indicate how to manage deployment secrets.', 'Define the tracking indicators.'],
    },
    {
      id: 'incident-ci',
      kind: 'analysis',
      title: 'Analysis: a pipeline compromised by a dependency script',
      context: [
        { t: 'code', lang: 'text', code: 'Time (UTC)   Source                    Event\n09:12        forge                     pull request #482 opened by a new account (modifies package.json)\n09:14        job “tests”               npm install (not npm ci); postinstall script of an added dependency\n09:14        shared runner             outbound connection to 203.0.113.50:443 (12 KB)\n09:31        cloud                     deployment key used from an address outside the pipeline\n09:33        cloud                     creation of a user “svc-backup” with administrator rights\n\nThe workflow uses pull_request_target, a shared runner and a deployment key stored as a repository secret.' },
      ],
      steps: ['Reconstruct the sequence and the pipeline’s design mistakes.', 'Indicate what is preserved and the containment actions, in order.', 'Propose the measures that would have prevented or detected the incident.'],
    },
  ],
  questions,
  resources: [
    { title: 'SLSA — Supply-chain Levels for Software Artifacts', source: 'OpenSSF', url: 'https://slsa.dev/' },
    { title: 'Security hardening for GitHub Actions', source: 'GitHub Docs', url: 'https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions' },
    { title: 'OWASP Top 10 CI/CD Security Risks', source: 'OWASP', url: 'https://owasp.org/www-project-top-10-ci-cd-security-risks/' },
    { title: 'NIST SP 800-218 — Secure Software Development Framework (SSDF)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/218/final' },
  ],
};
