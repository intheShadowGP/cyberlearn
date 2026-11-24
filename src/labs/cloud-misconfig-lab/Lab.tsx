import { useState } from 'react';
import { analyzeCloud, PRESETS, type CloudConfig } from './cloud';
import { useLabTexts, type LabTexts } from '../i18n';

const SEV: Record<string, string> = { haute: 'badge-warn', moyenne: 'badge', faible: 'badge-muted' };

const fr = {
  presets: { durci: 'Compte durci (référence)', expose: 'Données exposées', privileges: 'Privilèges excessifs', defaut: 'Compte par défaut non durci' } as Record<string, string>,
  severity: { haute: 'haute', moyenne: 'moyenne', faible: 'faible' } as Record<string, string>,
  messages: {
    'bucket-public': 'Stockage objet accessible publiquement : fuite de données probable.',
    'sg-ssh-world': 'Groupe de sécurité : port 22 (SSH) ouvert à 0.0.0.0/0 — exposé à Internet entier.',
    'role-wildcard': 'Rôle avec permissions *:* : droits d’administration disproportionnés (viole le moindre privilège).',
    'no-mfa-root': 'Pas de MFA sur le compte à privilèges les plus élevés.',
    'no-encryption': 'Chiffrement au repos du stockage désactivé.',
    'no-flow-logs': 'Journalisation des flux réseau désactivée : moins de visibilité en cas d’incident.',
  } as Record<string, string>,
  fixes: ['Rendre le stockage privé', 'Fermer SSH (retirer 0.0.0.0/0, passer par un bastion)', 'Restreindre le rôle au moindre privilège (plus de *:*)', 'Activer la MFA sur le compte à privilèges élevés', 'Activer le chiffrement au repos du stockage', 'Activer la journalisation des flux réseau'],
  title: 'Compte cloud à auditer', config: 'Configuration',
  storage: 'Stockage objet', pub: 'public', priv: 'privé', enc: ', chiffré', noEnc: ', non chiffré',
  sg: 'Groupe de sécurité SSH', open: 'ouvert à 0.0.0.0/0', restricted: 'restreint',
  role: 'Rôle', wildcard: 'permissions *:*', least: 'moindre privilège',
  mfa: 'MFA compte privilégié', on: 'activée', absent: 'absente', flow: 'Journalisation des flux', off: 'désactivée',
  findingsTitle: 'Écarts détectés', none: 'Aucun écart : posture cloud saine.', fixTitle: 'Corrections', fixNote: 'Corrigez d’abord les écarts de gravité haute.',
};
const en: typeof fr = {
  presets: { durci: 'Hardened account (baseline)', expose: 'Exposed data', privileges: 'Excessive privileges', defaut: 'Default, non-hardened account' },
  severity: { haute: 'high', moyenne: 'medium', faible: 'low' },
  messages: {
    'bucket-public': 'Object storage publicly accessible: a data leak is likely.',
    'sg-ssh-world': 'Security group: port 22 (SSH) open to 0.0.0.0/0 — exposed to the whole Internet.',
    'role-wildcard': 'Role with *:* permissions: disproportionate administrative rights (violates least privilege).',
    'no-mfa-root': 'No MFA on the highest-privilege account.',
    'no-encryption': 'Encryption at rest of the storage is disabled.',
    'no-flow-logs': 'Network flow logging is disabled: less visibility in case of an incident.',
  },
  fixes: ['Make the storage private', 'Close SSH (remove 0.0.0.0/0, go through a bastion)', 'Restrict the role to least privilege (no more *:*)', 'Enable MFA on the high-privilege account', 'Enable encryption at rest of the storage', 'Enable network flow logging'],
  title: 'Cloud account to audit', config: 'Configuration',
  storage: 'Object storage', pub: 'public', priv: 'private', enc: ', encrypted', noEnc: ', not encrypted',
  sg: 'SSH security group', open: 'open to 0.0.0.0/0', restricted: 'restricted',
  role: 'Role', wildcard: '*:* permissions', least: 'least privilege',
  mfa: 'Privileged account MFA', on: 'enabled', absent: 'absent', flow: 'Flow logging', off: 'disabled',
  findingsTitle: 'Findings', none: 'No finding: healthy cloud posture.', fixTitle: 'Fixes', fixNote: 'Fix the high-severity findings first.',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function CloudMisconfigLab() {
  const T = useLabTexts(TEXTS);
  const [presetId, setPresetId] = useState(PRESETS[3]!.id);
  const [cfg, setCfg] = useState<CloudConfig>({ ...PRESETS[3]!.cfg });

  const load = (id: string) => {
    const p = PRESETS.find((x) => x.id === id)!;
    setPresetId(id);
    setCfg({ ...p.cfg });
  };
  const findings = analyzeCloud(cfg);

  const fixes: { done: boolean; apply: () => void }[] = [
    { done: !cfg.bucketPublic, apply: () => setCfg((c) => ({ ...c, bucketPublic: false })) },
    { done: !cfg.sgSshWorld, apply: () => setCfg((c) => ({ ...c, sgSshWorld: false })) },
    { done: !cfg.roleWildcard, apply: () => setCfg((c) => ({ ...c, roleWildcard: false })) },
    { done: cfg.mfaRoot, apply: () => setCfg((c) => ({ ...c, mfaRoot: true })) },
    { done: cfg.bucketEncryption, apply: () => setCfg((c) => ({ ...c, bucketEncryption: true })) },
    { done: cfg.flowLogs, apply: () => setCfg((c) => ({ ...c, flowLogs: true })) },
  ];

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="cmc-sel-h">
        <h3 id="cmc-sel-h">{T.title}</h3>
        <div className="form-row">
          <label htmlFor="cmc-preset">{T.config}</label>
          <select id="cmc-preset" className="input" value={presetId} onChange={(e) => load(e.target.value)}>
            {PRESETS.map((p) => <option key={p.id} value={p.id}>{T.presets[p.id] ?? p.label}</option>)}
          </select>
        </div>
        <dl className="kv">
          <dt>{T.storage}</dt><dd>{cfg.bucketPublic ? T.pub : T.priv}{cfg.bucketEncryption ? T.enc : T.noEnc}</dd>
          <dt>{T.sg}</dt><dd>{cfg.sgSshWorld ? T.open : T.restricted}</dd>
          <dt>{T.role}</dt><dd>{cfg.roleWildcard ? T.wildcard : T.least}</dd>
          <dt>{T.mfa}</dt><dd>{cfg.mfaRoot ? T.on : T.absent}</dd>
          <dt>{T.flow}</dt><dd>{cfg.flowLogs ? T.on : T.off}</dd>
        </dl>
      </section>

      <section className="panel" aria-labelledby="cmc-find-h">
        <h3 id="cmc-find-h">{T.findingsTitle}</h3>
        {findings.length === 0 ? (
          <p className="callout callout-key" role="status">{T.none}</p>
        ) : (
          <ul className="lab-list" aria-live="polite">
            {findings.map((f) => (
              <li key={f.code}><span className={`badge ${SEV[f.severity]}`}>{T.severity[f.severity]}</span> {T.messages[f.code] ?? f.message}</li>
            ))}
          </ul>
        )}
      </section>

      <section className="panel" aria-labelledby="cmc-fix-h">
        <h3 id="cmc-fix-h">{T.fixTitle}</h3>
        <ul className="lab-list">
          {fixes.map((fx, i) => (
            <li key={i}>
              <button type="button" className="btn btn-ghost" disabled={fx.done} onClick={fx.apply}>
                {fx.done ? '✓ ' : ''}{T.fixes[i]}
              </button>
            </li>
          ))}
        </ul>
        <p className="muted">{T.fixNote}</p>
      </section>
    </div>
  );
}
