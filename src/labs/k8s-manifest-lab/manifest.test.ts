import { describe, expect, it } from 'vitest';
import { MANIFEST, render, review } from './manifest';
import { corrections } from './corrections';

describe('laboratoire de revue de manifeste Kubernetes', () => {
  it('détecte les huit défauts du manifeste d’exemple', () => {
    const issues = review(MANIFEST);
    expect(issues.map((i) => i.code)).toEqual(['privileged', 'hostpath-socket', 'cap-sys-admin', 'host-network', 'root', 'secret-env', 'latest-tag', 'no-limits']);
    expect(issues.filter((i) => i.severity === 'critical')).toHaveLength(2);
    const c = corrections.questions['k8slab-q1'];
    expect(c && 'accepted' in c ? c.accepted : []).toContain(String(issues.length));
  });

  it('un manifeste durci ne produit aucun défaut', () => {
    const fixed = {
      ...MANIFEST,
      image: 'registre.exemple.org/shop-web:1.4.2',
      privileged: false,
      runAsUser: 10001,
      runAsNonRoot: true,
      allowPrivilegeEscalation: false,
      readOnlyRootFilesystem: true,
      capabilitiesAdd: [],
      capabilitiesDropAll: true,
      hostNetwork: false,
      hostPaths: [],
      hasLimits: true,
      env: [{ name: 'DB_PASSWORD', fromSecret: true }, { name: 'LOG_LEVEL', value: 'info' }],
    };
    expect(review(fixed)).toEqual([]);
  });

  it('le rendu texte mentionne les éléments à repérer', () => {
    const text = render(MANIFEST);
    for (const s of ['privileged: true', 'docker.sock', 'hostNetwork: true', 'SYS_ADMIN', ':latest', 'DB_PASSWORD']) expect(text).toContain(s);
  });
});
