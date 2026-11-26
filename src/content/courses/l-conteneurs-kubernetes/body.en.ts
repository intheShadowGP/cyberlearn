import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'l-conteneurs-kubernetes',
  lesson: {
    intro:
      "Containers have changed the way applications are deployed, but their isolation is often overestimated. A container is not a virtual machine: it is a process of the host, sharing its kernel, whose view of the system is restricted. A few configuration options are enough to turn a compromised container into root access to the host, then to the whole cluster.",
    sections: [
      {
        id: 'isolation',
        title: 'What isolates a container',
        blocks: [
          { t: 'diagram', id: 'k8s-isolation', caption: 'The containers of a pod are isolated by kernel mechanisms (namespaces, cgroups, capabilities, seccomp, MAC) but share the host kernel: the isolation is finer, not equivalent to that of a virtual machine.', alt: 'Nested diagram: a cluster contains a node with a shared kernel, which contains a pod, which contains two containers, isolated by namespaces, cgroups, capabilities, seccomp and mandatory access control.' },
          {
            t: 'table',
            head: ['Linux mechanism', 'Role'],
            rows: [
              ['**Namespaces**', 'Separate view of processes, network, mount points, users, host name'],
              ['**cgroups**', 'Resource limits (CPU, memory, number of processes)'],
              ['**Capabilities**', 'Splitting of root’s privileges; a container receives only part of them'],
              ['**seccomp**', 'Filtering of allowed system calls'],
              ['**AppArmor / SELinux**', 'Mandatory access control'],
            ],
          },
          { t: 'def', term: 'Container', text: "Process (or group of processes) of the host run in dedicated namespaces, with resource limits and reduced privileges. All containers of a host share the **same kernel**." },
          { t: 'def', term: 'Container escape', text: "Obtaining access to the host from a container, through a kernel or engine vulnerability, or more often through an **overly permissive configuration**." },
          {
            t: 'table',
            caption: 'Dangerous configurations',
            head: ['Option', 'Why'],
            rows: [
              ['`--privileged` / `privileged: true`', 'All capabilities, access to the host’s devices: almost equivalent to root on the host'],
              ['Mounting `/var/run/docker.sock`', 'Control of the Docker engine: launch a privileged container mounting the host’s `/`'],
              ['`hostPID`, `hostNetwork`, `hostPath: /`', 'Access to the host’s processes, network or files'],
              ['Capability `CAP_SYS_ADMIN`', 'Very broad: mounting file systems, many escape paths'],
            ],
          },
          { t: 'callout', kind: 'key', text: "To isolate untrusted workloads (customers’ code, multi-tenant), the container alone is not enough: a stronger boundary is added (lightweight virtual machines, sandboxes such as gVisor or Kata Containers, dedicated nodes)." },
        ],
      },
      {
        id: 'images',
        title: 'Building safe images',
        blocks: [
          { t: 'code', lang: 'dockerfile', caption: 'Hardened multi-stage Dockerfile', code: '# Étape de construction\nFROM node:24-bookworm-slim AS build\nWORKDIR /app\nCOPY package.json package-lock.json ./\nRUN npm ci --ignore-scripts\nCOPY . .\nRUN npm run build\n\n# Image finale minimale, utilisateur non root\nFROM gcr.io/distroless/nodejs24-debian12\nWORKDIR /app\nCOPY --from=build /app/dist ./dist\nUSER nonroot\nCMD ["dist/server.js"]' },
          { t: 'list', items: ['**Minimal base image** (distroless, slim): fewer packages, fewer vulnerabilities, no shell for the attacker.', '**Non-root user** and read-only file system.', '**No secret** in the image: the layers are readable by anyone who retrieves the image (`docker history`).', '**Pinned base versions** (ideally by hash `@sha256:…`) and regular rebuilds to pick up patches.', '**Analysis** of the image in CI (Trivy, Grype) and **signing** (cosign).'] },
          {
            t: 'example',
            title: 'A secret in a layer',
            blocks: [{ t: 'p', text: "A Dockerfile does `COPY .env /app/` then `RUN rm /app/.env`. The file no longer appears in the container, but it remains in the layer created by the `COPY`: anyone can extract the image and read the file. Secrets are provided at runtime (Kubernetes secrets, vault), or through build secrets (`--mount=type=secret`), never by copying." }],
          },
        ],
      },
      {
        id: 'kubernetes',
        title: 'Hardening Kubernetes',
        blocks: [
          { t: 'def', term: 'Kubernetes RBAC', text: "Role-based access control: `Role`/`ClusterRole` describe verbs on resources, `RoleBinding`/`ClusterRoleBinding` assign them to users or service accounts. The rights `*`, `create pods`, `get secrets` and `escalate`/`bind` are particularly sensitive." },
          { t: 'code', lang: 'yaml', caption: 'Pod compliant with the “restricted” profile', code: 'apiVersion: v1\nkind: Pod\nmetadata:\n  name: api\nspec:\n  automountServiceAccountToken: false\n  securityContext:\n    runAsNonRoot: true\n    seccompProfile: { type: RuntimeDefault }\n  containers:\n    - name: api\n      image: registre.exemple.fr/api@sha256:3b1f…\n      securityContext:\n        allowPrivilegeEscalation: false\n        readOnlyRootFilesystem: true\n        capabilities: { drop: ["ALL"] }\n      resources:\n        limits: { memory: "256Mi", cpu: "500m" }' },
          { t: 'list', items: ['**Pod Security Admission**: apply the `restricted` profile (or `baseline` at the minimum) per namespace.', '**NetworkPolicy**: by default, all pods can talk to each other; set a default-deny policy then open the necessary flows.', '**Secrets**: encryption at rest in etcd, restricted RBAC access, ideally an external vault; a Kubernetes Secret is only Base64-encoded.', '**Service-account token** not mounted when not useful.', '**API server** not exposed to the Internet, audit logs enabled, regular cluster updates.'] },
          { t: 'callout', kind: 'tip', text: "The CIS Kubernetes Benchmark and tools such as kube-bench or Kubescape allow assessing a cluster. The official Kubernetes documentation describes the Pod Security Standards." },
        ],
      },
      {
        id: 'execution',
        title: 'At runtime: audit, detection and response',
        blocks: [
          { t: 'p', text: 'Hardening reduces risks, it does not remove them. We must also **see** what happens in the cluster and **react** without destroying evidence. Three sources complement each other: the API **audit log**, **runtime detection** (system calls) and the application and node **logs**.' },
          {
            t: 'table',
            head: ['Signal', 'Why it is suspect', 'Source'],
            rows: [
              ['Unexpected `kubectl exec` in a production pod', 'Takeover or malicious curiosity', 'Audit log'],
              ['Creation of a privileged pod or one with `hostPath`', 'Escape attempt or abuse of rights', 'Audit log, admission'],
              ['Reading of Secrets by an unusual account', 'Credential theft', 'Audit log'],
              ['Shell or network tool launched in an application container', 'Command execution by an attacker', 'Runtime detection (for example Falco)'],
              ['Unexpected outbound connections from a pod', 'Command and control, exfiltration', 'Network logs, NetworkPolicy in logging mode'],
              ['New service account with extended rights', 'Persistence and escalation', 'Audit log'],
            ],
          },
          { t: 'def', term: 'Runtime detection', text: 'Monitoring of container behavior at the kernel level (system calls) according to rules: an application container that opens a shell or reads sensitive files triggers an alert. Falco is a free example.' },
          { t: 'list', ordered: true, items: ['**Isolate** the pod with a stricter NetworkPolicy (without deleting it).', '**Preserve**: pod and node logs, process list, file-system copy, related audit events, hashes.', '**Contain**: revoke exposed service-account tokens, **cordon** the node so it receives no new pods.', '**Investigate**: where the image comes from, what rights the pod had, which other pods were affected.', '**Eradicate**: rebuild from clean images, rotate secrets, fix the cause (image, configuration, rights).'] },
          { t: 'callout', kind: 'warn', text: 'Deleting a compromised pod erases evidence, and the orchestrator may recreate it from the same vulnerable image. We isolate first, delete afterward.' },
        ],
      },
      {
        id: 'admission',
        title: 'Controlling what runs: registry, signing and admission',
        blocks: [
          { t: 'p', text: 'A cluster’s security depends on what is **admitted** to it. The idea is to let in only **known, analyzed and signed** images, and pods **compliant** with a policy.' },
          {
            t: 'table',
            head: ['Control', 'Role', 'Tool or mechanism'],
            rows: [
              ['**Private registry**', 'Limit image sources', 'Enterprise registry with restricted rights'],
              ['**Vulnerability analysis**', 'Spot vulnerable components', 'Trivy, Grype, in CI and continuously on the registry'],
              ['**Image signing**', 'Prove origin and integrity', 'cosign and verification at admission'],
              ['**Bill of materials (SBOM)**', 'Know which components the image contains', 'Generated in CI, stored with the image'],
              ['**Admission policy**', 'Refuse non-compliant pods', 'Pod Security Admission, Kyverno, Gatekeeper'],
            ],
          },
          { t: 'def', term: 'Admission controller', text: 'Component that intercepts requests to the Kubernetes API before the object is stored, to validate or modify them. A policy can, for example, refuse a privileged pod, require non-root execution or accept only signed images from an approved registry.' },
          { t: 'list', items: ['**Pin by hash** and require the signature so that the deployed content is the one that was analyzed.', '**Rebuild regularly**: an image that is clean today may be vulnerable tomorrow.', '**Analyze continuously** the images already deployed, not only at build time.', '**Separate roles**: the team that writes the policies is not the one that deploys.'] },
          {
            t: 'example',
            title: 'An unsigned image refused',
            blocks: [
              { t: 'p', text: 'A developer tries to deploy an image pulled from a public registry, unsigned. The admission policy requires a valid signature from an approved registry: the request is refused with an explicit message. They must go through CI, which builds, analyzes, signs and publishes the image.' },
              { t: 'p', text: 'The control prevented both a potentially compromised image and a bypass of the process.' },
            ],
          },
        ],
      },
      {
        id: 'dockerfile-avant-apres',
        title: "A safer image: Dockerfile before and after",
        blocks: [
          { t: 'code', lang: "dockerfile", caption: "Before: risky practices", code: "FROM python:latest\nCOPY . /app\nRUN pip install -r /app/requirements.txt\nENV API_KEY=sk-1234-secret\nCMD [\"python\", \"/app/main.py\"]" },
          { t: 'code', lang: "dockerfile", caption: "After: pinned image, unprivileged user, no secret", code: "FROM python:3.12-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\nCOPY . .\nRUN useradd --system --no-create-home appuser\nUSER appuser\nCMD [\"python\", \"main.py\"]" },
          {
            t: 'table',
            head: ["Change", "Risk reduced"],
            rows: [
              ["`python:latest` becomes `python:3.12-slim`", "Unpredictable version from one build to the next; smaller surface with a slim image (you can go further by pinning the image digest)"],
              ["`ENV API_KEY=...` removed", "A secret written into a layer stays readable in the image by anyone who pulls it: it must be provided at runtime by the platform"],
              ["`USER appuser`", "Without it the process runs as root in the container: a flaw yields elevated privileges"],
              ["`requirements.txt` copied before the code", "Better use of the build cache and identifiable dependencies"],
            ],
          },
        ],
      },
      {
        id: 'securitycontext',
        title: "Hardening a pod with securityContext",
        blocks: [
          { t: 'p', text: "Kubernetes lets you restrict what a container can do directly in the pod manifest. Here is a common security context for an ordinary web application." },
          { t: 'code', lang: "yaml", caption: "Excerpt of a deployment manifest", code: "spec:\n  containers:\n    - name: web\n      image: registry.example.org/web:1.4.2\n      securityContext:\n        runAsNonRoot: true\n        allowPrivilegeEscalation: false\n        readOnlyRootFilesystem: true\n        capabilities:\n          drop: [\"ALL\"]\n        seccompProfile:\n          type: RuntimeDefault" },
          {
            t: 'table',
            head: ["Setting", "Effect"],
            rows: [
              ["`runAsNonRoot: true`", "Kubernetes refuses to start a container whose user is root"],
              ["`allowPrivilegeEscalation: false`", "A process cannot gain more rights than its parent (for example through a SUID binary)"],
              ["`readOnlyRootFilesystem: true`", "The file system is read-only: an attacker cannot drop a tool there (provide a volume for legitimate writes)"],
              ["`capabilities.drop: [\"ALL\"]`", "Removes all Linux capabilities; add back only those that are needed"],
              ["`seccompProfile: RuntimeDefault`", "Applies the container engine’s default system-call filter"],
            ],
          },
          { t: 'callout', kind: 'tip', text: "A “privileged” container (`privileged: true`) or one mounted with the container engine socket is equivalent to administrator access on the host machine. These cases must be documented, approved exceptions." },
        ],
      },
    ],
    useCases: [
      'Review of an application’s Kubernetes manifests before it goes into production.',
      'Investigation: can a compromised pod reach the host or other namespaces?',
      'Define the standard base image and the CI controls on an organization’s images.',
    ],
    commonMistakes: [
      "Using the `latest` tag for a production image.",
      "Writing a secret in an `ENV` or `ARG` instruction of the Dockerfile.",
      'Considering that a container isolates as strongly as a virtual machine.',
      'Launching privileged containers or mounting the Docker socket “to make it work”.',
      'Copying secrets into an image then deleting them in a later layer.',
      'Leaving the cluster network entirely open between pods.',
      'Believing a Kubernetes Secret is encrypted because it is Base64.',
    ],
    bestPractices: [
      'Minimal, non-root images, pinned versions, analyzed and signed.',
      '“Restricted” Pod Security profile, capabilities dropped, read-only file system.',
      'Minimal RBAC, service-account tokens not mounted by default.',
      'Default-deny NetworkPolicy.',
      'Encryption of secrets at rest and external vault.',
    ],
    keyPoints: [
      "Pinned image, non-root user, no secret in layers; restrictive securityContext by default.",
      'A container shares the host kernel: isolation rests on namespaces, cgroups, capabilities, seccomp.',
      '`privileged`, the Docker socket and `hostPath` open the way to the host.',
      'An image must contain no secret, even deleted in a later layer.',
      'Kubernetes: RBAC, Pod Security, NetworkPolicy, encrypted secrets.',
    ],
  },
  practice: [
    {
      id: 'revue-manifeste',
      kind: 'analysis',
      title: 'Review of a deployment manifest',
      context: [{ t: 'code', lang: 'yaml', code: "spec:\n  hostNetwork: true\n  containers:\n    - name: agent\n      image: monregistre/agent:latest\n      securityContext:\n        privileged: true\n      volumeMounts:\n        - name: docker\n          mountPath: /var/run/docker.sock\n  volumes:\n    - name: docker\n      hostPath: { path: /var/run/docker.sock }" }],
      steps: ['List each risk.', 'Describe how an attacker who compromised this container reaches the host.', 'Propose a hardened version or an alternative.'],
    },
    {
      id: 'netpol',
      kind: 'guided',
      title: 'Writing a NetworkPolicy',
      context: [{ t: 'p', text: 'Namespace `boutique`: the `front` pod must reach the `api` pod on port 8080; `api` must reach `db` on 5432; nothing else.' }],
      steps: ['Write a default-deny policy.', 'Open front → api and api → db.', 'Check what remains forbidden.'],
    },
    {
      id: 'audit-k8s',
      kind: 'analysis',
      title: 'Analysis: an excerpt of the Kubernetes audit log',
      context: [
        { t: 'code', lang: 'text', code: 'Time (UTC)   User / account                            Action                                             Resource\n03:02:11     system:serviceaccount:boutique:web      create pods/exec                                   pod web-5c9d (namespace boutique)\n03:03:40     system:serviceaccount:boutique:web      get secrets (full list)                            namespace boutique\n03:05:12     system:serviceaccount:boutique:web      create pods                                        pod "maintenance" (privileged: true, hostPath: /)\n03:07:55     system:serviceaccount:boutique:web      create clusterrolebindings                         binding "maintenance-admin" (cluster-admin)\n03:09:30     (node worker-3)                         outbound connection from the maintenance pod       198.51.100.77:443\n\nThe service account "web" normally has the right to read a single ConfigMap.' },
      ],
      steps: ['Describe the sequence and what it reveals about the service account’s rights.', 'Indicate what is preserved, then the containment actions, in order.', 'Propose the measures that would have prevented or detected the incident.'],
    },
  ],
  questions,
  resources: [
    { title: 'Pod Security Standards', source: 'Kubernetes documentation', url: 'https://kubernetes.io/docs/concepts/security/pod-security-standards/' },
    { title: 'CIS Kubernetes Benchmark', source: 'Center for Internet Security', url: 'https://www.cisecurity.org/benchmark/kubernetes' },
    { title: 'Kubernetes Hardening Guide', source: 'NSA / CISA', url: 'https://media.defense.gov/2022/Aug/29/2003066362/-1/-1/0/CTR_KUBERNETES_HARDENING_GUIDANCE_1.2_20220829.PDF' },
    { title: 'Security recommendations for deploying Docker containers (in French)', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-relatives-au-deploiement-de-conteneurs-docker' },
  ],
};
