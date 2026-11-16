import { useState } from 'react';
import { analyzeTls, PRESETS, type TlsConfig } from './tls';

const SEV: Record<string, string> = { haute: 'badge-warn', moyenne: 'badge', faible: 'badge-muted' };

export default function TlsInspectionLab() {
  const [presetId, setPresetId] = useState(PRESETS[1]!.id);
  const [cfg, setCfg] = useState<TlsConfig>({ ...PRESETS[1]!.cfg });

  const load = (id: string) => {
    const p = PRESETS.find((x) => x.id === id)!;
    setPresetId(id);
    setCfg({ ...p.cfg, certSAN: [...p.cfg.certSAN], protocols: [...p.cfg.protocols] });
  };
  const findings = analyzeTls(cfg);

  const fixes: { label: string; apply: () => void; done: boolean }[] = [
    { label: 'Renouveler le certificat (valide jusqu’en 2027)', done: cfg.notAfter >= '2026-11-16', apply: () => setCfg((c) => ({ ...c, notAfter: '2027-02-28' })) },
    { label: `Ajouter ${cfg.hostname} au champ SAN`, done: findings.every((f) => f.code !== 'name-mismatch'), apply: () => setCfg((c) => ({ ...c, certSAN: [...new Set([...c.certSAN, c.hostname])] })) },
    { label: 'Envoyer la chaîne complète (intermédiaires)', done: cfg.chainComplete, apply: () => setCfg((c) => ({ ...c, chainComplete: true })) },
    { label: 'Désactiver TLS 1.0 / 1.1', done: !cfg.protocols.some((p) => ['TLS1.0', 'TLS1.1', 'SSL3.0'].includes(p)), apply: () => setCfg((c) => ({ ...c, protocols: c.protocols.filter((p) => !['TLS1.0', 'TLS1.1', 'SSL3.0'].includes(p)) })) },
    { label: 'Activer HSTS', done: cfg.hsts, apply: () => setCfg((c) => ({ ...c, hsts: true })) },
  ];

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="tls-sel-h">
        <h3 id="tls-sel-h">Serveur à auditer</h3>
        <div className="form-row">
          <label htmlFor="tls-preset">Configuration</label>
          <select id="tls-preset" className="input" value={presetId} onChange={(e) => load(e.target.value)}>
            {PRESETS.map((p) => <option key={p.id} value={p.id}>{p.label}</option>)}
          </select>
        </div>
        <dl className="kv">
          <dt>Nom demandé</dt><dd className="mono">{cfg.hostname}</dd>
          <dt>Certificat (CN)</dt><dd className="mono">{cfg.certCN}</dd>
          <dt>SAN</dt><dd className="mono">{cfg.certSAN.join(', ') || '—'}</dd>
          <dt>Expire le</dt><dd className="mono">{cfg.notAfter}</dd>
          <dt>Chaîne complète</dt><dd>{cfg.chainComplete ? 'oui' : 'non'}</dd>
          <dt>Protocoles</dt><dd className="mono">{cfg.protocols.join(', ')}</dd>
          <dt>HSTS</dt><dd>{cfg.hsts ? 'oui' : 'non'}</dd>
        </dl>
      </section>

      <section className="panel" aria-labelledby="tls-find-h">
        <h3 id="tls-find-h">Défauts détectés</h3>
        {findings.length === 0 ? (
          <p className="callout callout-key" role="status">Aucune anomalie : configuration TLS conforme.</p>
        ) : (
          <ul className="lab-list" aria-live="polite">
            {findings.map((f) => (
              <li key={f.code}><span className={`badge ${SEV[f.severity]}`}>{f.severity}</span> {f.message}</li>
            ))}
          </ul>
        )}
      </section>

      <section className="panel" aria-labelledby="tls-fix-h">
        <h3 id="tls-fix-h">Corrections</h3>
        <ul className="lab-list">
          {fixes.map((fx, i) => (
            <li key={i}>
              <button type="button" className="btn btn-ghost" disabled={fx.done} onClick={fx.apply}>
                {fx.done ? '✓ ' : ''}{fx.label}
              </button>
            </li>
          ))}
        </ul>
        <p className="muted">Appliquez les corrections jusqu’à ne plus avoir d’anomalie.</p>
      </section>
    </div>
  );
}
