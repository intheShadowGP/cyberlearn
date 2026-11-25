import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'l-conteneurs-kubernetes',
  practice: {
    'revue-manifeste': {
      blocks: [
        { t: 'list', items: ['`hostNetwork`: node network shared.', '`privileged`: all capabilities.', 'Docker socket mounted: control of the engine.', '`latest` image: uncontrolled content.'] },
        { t: 'p', text: 'Path: shell in the container → `docker run --privileged -v /:/h …` through the socket → root on the node → kubelet credentials and other pods.' },
        { t: 'p', text: 'Hardening: remove socket and privileges, `drop: [ALL]`, `runAsNonRoot`, pinned image; if the agent requires it, dedicated nodes and reinforced monitoring.' },
      ],
    },
    netpol: {
      blocks: [
        { t: 'code', lang: 'yaml', code: "apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata: { name: refus-par-defaut, namespace: boutique }\nspec:\n  podSelector: {}\n  policyTypes: [Ingress, Egress]\n---\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata: { name: front-vers-api, namespace: boutique }\nspec:\n  podSelector: { matchLabels: { app: api } }\n  ingress:\n    - from: [{ podSelector: { matchLabels: { app: front } } }]\n      ports: [{ protocol: TCP, port: 8080 }]" },
        { t: 'p', text: 'Add likewise api → db:5432, the matching egress rules and DNS access to kube-dns.' },
      ],
    },
    'audit-k8s': {
      blocks: [
        {
          t: 'table',
          head: ['Time', 'Action', 'Reading'],
          rows: [
            ['03:02', '`exec` into the pod `web-5c9d` with the `web` service account', 'A shell in the pod: the application is compromised or an attacker uses its token'],
            ['03:03', 'Reading of the full list of Secrets', 'Rights **far beyond** what was intended: the `web` account should only read a ConfigMap'],
            ['03:05', 'Creation of a privileged pod with `hostPath: /`', '**Escape** to the node: access to the host’s whole file system'],
            ['03:07', 'Creation of a `ClusterRoleBinding` to `cluster-admin`', '**Escalation** to the cluster level and persistence'],
            ['03:09', 'Outbound connection from the `maintenance` pod to an external address', 'Command and control or exfiltration'],
          ],
        },
        { t: 'p', text: 'The `web` service account has **excessive rights** (creating pods and bindings, reading Secrets) that its function does not justify. The attacker chained them: execution, secret theft, escape through a privileged pod, escalation to the cluster level.' },
        { t: 'list', ordered: true, items: ['**Preserve**: export of the audit log, logs of the pods `web-5c9d` and `maintenance`, copy of the configuration of the bindings and pods, state of the node `worker-3`, hashes.', '**Contain**: isolate the `web` and `maintenance` pods through NetworkPolicy (without deleting them), delete the `ClusterRoleBinding` `maintenance-admin`, revoke the `web` account’s token, cordon `worker-3` then drain it in a controlled way.', '**Investigate**: Secrets read (credentials to renew), other actions of the `web` account, other pods or nodes affected, traffic to `198.51.100.77`.', '**Eradicate and recover**: rebuild the node and redeploy from signed images, rotate all exposed secrets, fix the application’s initial vulnerability.'] },
        { t: 'list', items: ['**Prevention**: least-privilege RBAC (`web` can neither create pods nor read Secrets), Pod Security Admission at `restricted` forbidding `privileged` and `hostPath`, service-account tokens not mounted by default, default-deny NetworkPolicy.', '**Detection**: alerts on `exec` in production, creation of privileged pods, creation of `ClusterRoleBinding`; runtime detection (Falco) on shells in application containers.', '**Admission**: policy refusing any pod without a signed image and any binding to `cluster-admin` outside procedure.'] },
      ],
    },
  },
};
