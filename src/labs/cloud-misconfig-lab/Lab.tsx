import { useState } from 'react';
import { analyzeCloud, PRESETS, type CloudConfig } from './cloud';

const SEV: Record<string, string> = { haute: 'badge-warn', moyenne: 'badge', faible: 'badge-muted' };

export default function CloudMisconfigLab() {
  const [presetId, setPresetId] = useState(PRESETS[3]!.id);
  const [cfg, setCfg] = useState<CloudConfig>({ ...PRESETS[3]!.cfg });

  const load = (id: string) => {
    const p = PRESETS.find((x) => x.id === id)!;
    setPresetId(id);
    setCfg({ ...p.cfg });
  };
  const findings = analyzeCloud(cfg);

  const fixes: { label: string; done: boolean; apply: () => void }[] = [
    { label: 'Rendre le stockage privé', done: !cfg.bucketPublic, apply: () => setCfg((c) => ({ ...c, bucketPublic: false })) },
    { label: 'Fermer SSH (retirer 0.0.0.0/0, passer par un bastion)', done: !cfg.sgSshWorld, apply: () => setCfg((c) => ({ ...c, sgSshWorld: false })) },
    { label: 'Restreindre le rôle au moindre privilège (plus de *:*)', done: !cfg.roleWildcard, apply: () => setCfg((c) => ({ ...c, roleWildcard: false })) },
    { label: 'Activer la MFA sur le compte à privilèges élevés', done: cfg.mfaRoot, apply: () => setCfg((c) => ({ ...c, mfaRoot: true })) },
    { label: 'Activer le chiffrement au repos du stockage', done: cfg.bucketEncryption, apply: () => setCfg((c) => ({ ...c, bucketEncryption: true })) },
    { label: 'Activer la journalisation des flux réseau', done: cfg.flowLogs, apply: () => setCfg((c) => ({ ...c, flowLogs: true })) },
  ];

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="cmc-sel-h">
        <h3 id="cmc-sel-h">Compte cloud à auditer</h3>
        <div className="form-row">
          <label htmlFor="cmc-preset">Configuration</label>
          <select id="cmc-preset" className="input" value={presetId} onChange={(e) => load(e.target.value)}>
            {PRESETS.map((p) => <option key={p.id} value={p.id}>{p.label}</option>)}
          </select>
        </div>
        <dl className="kv">
          <dt>Stockage objet</dt><dd>{cfg.bucketPublic ? 'public' : 'privé'}{cfg.bucketEncryption ? ', chiffré' : ', non chiffré'}</dd>
          <dt>Groupe de sécurité SSH</dt><dd>{cfg.sgSshWorld ? 'ouvert à 0.0.0.0/0' : 'restreint'}</dd>
          <dt>Rôle</dt><dd>{cfg.roleWildcard ? 'permissions *:*' : 'moindre privilège'}</dd>
          <dt>MFA compte privilégié</dt><dd>{cfg.mfaRoot ? 'activée' : 'absente'}</dd>
          <dt>Journalisation des flux</dt><dd>{cfg.flowLogs ? 'activée' : 'désactivée'}</dd>
        </dl>
      </section>

      <section className="panel" aria-labelledby="cmc-find-h">
        <h3 id="cmc-find-h">Écarts détectés</h3>
        {findings.length === 0 ? (
          <p className="callout callout-key" role="status">Aucun écart : posture cloud saine.</p>
        ) : (
          <ul className="lab-list" aria-live="polite">
            {findings.map((f) => (
              <li key={f.code}><span className={`badge ${SEV[f.severity]}`}>{f.severity}</span> {f.message}</li>
            ))}
          </ul>
        )}
      </section>

      <section className="panel" aria-labelledby="cmc-fix-h">
        <h3 id="cmc-fix-h">Corrections</h3>
        <ul className="lab-list">
          {fixes.map((fx, i) => (
            <li key={i}>
              <button type="button" className="btn btn-ghost" disabled={fx.done} onClick={fx.apply}>
                {fx.done ? '✓ ' : ''}{fx.label}
              </button>
            </li>
          ))}
        </ul>
        <p className="muted">Corrigez d’abord les écarts de gravité haute.</p>
      </section>
    </div>
  );
}
