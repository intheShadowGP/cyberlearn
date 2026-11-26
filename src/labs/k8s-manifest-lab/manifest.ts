/** Manifeste de déploiement Kubernetes FICTIF à revoir, et vérificateur de défauts courants. */

export interface PodSpec {
  image: string;
  privileged: boolean;
  runAsUser: number | null;
  runAsNonRoot: boolean;
  allowPrivilegeEscalation: boolean | null;
  readOnlyRootFilesystem: boolean;
  capabilitiesAdd: string[];
  capabilitiesDropAll: boolean;
  hostNetwork: boolean;
  hostPaths: string[];
  hasLimits: boolean;
  env: { name: string; value?: string; fromSecret?: boolean }[];
}

export const MANIFEST: PodSpec = {
  image: 'registre.exemple.org/shop-web:latest',
  privileged: true,
  runAsUser: 0,
  runAsNonRoot: false,
  allowPrivilegeEscalation: null,
  readOnlyRootFilesystem: false,
  capabilitiesAdd: ['SYS_ADMIN'],
  capabilitiesDropAll: false,
  hostNetwork: true,
  hostPaths: ['/var/run/docker.sock'],
  hasLimits: false,
  env: [{ name: 'DB_PASSWORD', value: 'admin123' }, { name: 'LOG_LEVEL', value: 'info' }],
};

export type Severity = 'critical' | 'high' | 'medium';

export interface Issue {
  code: string;
  severity: Severity;
}

/** Retourne les défauts détectés ; l'ordre est stable. */
export function review(p: PodSpec): Issue[] {
  const out: Issue[] = [];
  if (p.privileged) out.push({ code: 'privileged', severity: 'critical' });
  if (p.hostPaths.some((h) => h.includes('docker.sock') || h === '/' )) out.push({ code: 'hostpath-socket', severity: 'critical' });
  if (p.capabilitiesAdd.includes('SYS_ADMIN')) out.push({ code: 'cap-sys-admin', severity: 'high' });
  if (p.hostNetwork) out.push({ code: 'host-network', severity: 'high' });
  if (p.runAsUser === 0 || !p.runAsNonRoot) out.push({ code: 'root', severity: 'high' });
  if (p.env.some((e) => /pass|secret|key|token/i.test(e.name) && e.value !== undefined && !e.fromSecret)) out.push({ code: 'secret-env', severity: 'high' });
  if (/:latest$/.test(p.image) || !/:/.test(p.image.split('/').pop() ?? '')) out.push({ code: 'latest-tag', severity: 'medium' });
  if (!p.hasLimits) out.push({ code: 'no-limits', severity: 'medium' });
  return out;
}

export function render(p: PodSpec): string {
  const lines = [
    'containers:',
    '  - name: web',
    `    image: ${p.image}`,
    '    securityContext:',
    `      privileged: ${p.privileged}`,
    `      runAsUser: ${p.runAsUser ?? 'non défini'}`,
    ...(p.capabilitiesAdd.length ? ['      capabilities:', `        add: [${p.capabilitiesAdd.join(', ')}]`] : []),
    '    env:',
    ...p.env.flatMap((e) => [`      - name: ${e.name}`, `        value: "${e.value ?? ''}"`]),
    '    volumeMounts:',
    ...p.hostPaths.map((h) => `      - mountPath: ${h}  # hostPath`),
    `hostNetwork: ${p.hostNetwork}`,
    `# resources.limits : ${p.hasLimits ? 'définis' : 'absents'}`,
  ];
  return lines.join('\n');
}
