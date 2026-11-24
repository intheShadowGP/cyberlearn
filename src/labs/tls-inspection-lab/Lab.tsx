import { useState } from 'react';
import { analyzeTls, PRESETS, type TlsConfig } from './tls';
import { fill, useLabTexts, type LabTexts } from '../i18n';

const SEV: Record<string, string> = { haute: 'badge-warn', moyenne: 'badge', faible: 'badge-muted' };
const OBSOLETE = ['TLS1.0', 'TLS1.1', 'SSL3.0'];

const fr = {
  presets: { ok: 'Serveur correctement configuré', expire: 'Certificat expiré', mismatch: 'Nom non couvert + chaîne incomplète', legacy: 'Protocoles obsolètes et pas de HSTS' } as Record<string, string>,
  severity: { haute: 'haute', moyenne: 'moyenne', faible: 'faible' } as Record<string, string>,
  messages: {
    expired: 'Certificat expiré le {date}.',
    'name-mismatch': 'Le nom demandé ({host}) n’est pas couvert par le champ SAN du certificat.',
    'weak-protocol': 'Protocoles obsolètes activés : {list} (RFC 8996).',
    'incomplete-chain': 'Chaîne incomplète : le certificat intermédiaire n’est pas envoyé ; certains clients échoueront.',
    'no-hsts': 'En-tête HSTS absent : le retour en HTTP n’est pas empêché.',
  } as Record<string, string>,
  fixRenew: 'Renouveler le certificat (valide jusqu’en 2027)', fixSan: 'Ajouter {host} au champ SAN', fixChain: 'Envoyer la chaîne complète (intermédiaires)', fixProto: 'Désactiver TLS 1.0 / 1.1', fixHsts: 'Activer HSTS',
  title: 'Serveur à auditer', config: 'Configuration', host: 'Nom demandé', cn: 'Certificat (CN)', san: 'SAN', expires: 'Expire le', chain: 'Chaîne complète', protocols: 'Protocoles', hsts: 'HSTS',
  yes: 'oui', no: 'non', findingsTitle: 'Défauts détectés', none: 'Aucune anomalie : configuration TLS conforme.', fixTitle: 'Corrections', fixNote: 'Appliquez les corrections jusqu’à ne plus avoir d’anomalie.',
};
const en: typeof fr = {
  presets: { ok: 'Correctly configured server', expire: 'Expired certificate', mismatch: 'Name not covered + incomplete chain', legacy: 'Obsolete protocols and no HSTS' },
  severity: { haute: 'high', moyenne: 'medium', faible: 'low' },
  messages: {
    expired: 'Certificate expired on {date}.',
    'name-mismatch': 'The requested name ({host}) is not covered by the certificate’s SAN field.',
    'weak-protocol': 'Obsolete protocols enabled: {list} (RFC 8996).',
    'incomplete-chain': 'Incomplete chain: the intermediate certificate is not sent; some clients will fail.',
    'no-hsts': 'HSTS header missing: falling back to HTTP is not prevented.',
  },
  fixRenew: 'Renew the certificate (valid until 2027)', fixSan: 'Add {host} to the SAN field', fixChain: 'Send the full chain (intermediates)', fixProto: 'Disable TLS 1.0 / 1.1', fixHsts: 'Enable HSTS',
  title: 'Server to audit', config: 'Configuration', host: 'Requested name', cn: 'Certificate (CN)', san: 'SAN', expires: 'Expires on', chain: 'Full chain', protocols: 'Protocols', hsts: 'HSTS',
  yes: 'yes', no: 'no', findingsTitle: 'Defects found', none: 'No anomaly: compliant TLS configuration.', fixTitle: 'Fixes', fixNote: 'Apply the fixes until there is no anomaly left.',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function TlsInspectionLab() {
  const T = useLabTexts(TEXTS);
  const [presetId, setPresetId] = useState(PRESETS[1]!.id);
  const [cfg, setCfg] = useState<TlsConfig>({ ...PRESETS[1]!.cfg });

  const load = (id: string) => {
    const p = PRESETS.find((x) => x.id === id)!;
    setPresetId(id);
    setCfg({ ...p.cfg, certSAN: [...p.cfg.certSAN], protocols: [...p.cfg.protocols] });
  };
  const findings = analyzeTls(cfg);
  const params = { date: cfg.notAfter, host: cfg.hostname, list: cfg.protocols.filter((p) => OBSOLETE.includes(p)).join(', ') };

  const fixes: { label: string; apply: () => void; done: boolean }[] = [
    { label: T.fixRenew, done: cfg.notAfter >= '2026-11-16', apply: () => setCfg((c) => ({ ...c, notAfter: '2027-02-28' })) },
    { label: fill(T.fixSan, { host: cfg.hostname }), done: findings.every((f) => f.code !== 'name-mismatch'), apply: () => setCfg((c) => ({ ...c, certSAN: [...new Set([...c.certSAN, c.hostname])] })) },
    { label: T.fixChain, done: cfg.chainComplete, apply: () => setCfg((c) => ({ ...c, chainComplete: true })) },
    { label: T.fixProto, done: !cfg.protocols.some((p) => OBSOLETE.includes(p)), apply: () => setCfg((c) => ({ ...c, protocols: c.protocols.filter((p) => !OBSOLETE.includes(p)) })) },
    { label: T.fixHsts, done: cfg.hsts, apply: () => setCfg((c) => ({ ...c, hsts: true })) },
  ];

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="tls-sel-h">
        <h3 id="tls-sel-h">{T.title}</h3>
        <div className="form-row">
          <label htmlFor="tls-preset">{T.config}</label>
          <select id="tls-preset" className="input" value={presetId} onChange={(e) => load(e.target.value)}>
            {PRESETS.map((p) => <option key={p.id} value={p.id}>{T.presets[p.id] ?? p.label}</option>)}
          </select>
        </div>
        <dl className="kv">
          <dt>{T.host}</dt><dd className="mono">{cfg.hostname}</dd>
          <dt>{T.cn}</dt><dd className="mono">{cfg.certCN}</dd>
          <dt>{T.san}</dt><dd className="mono">{cfg.certSAN.join(', ') || '—'}</dd>
          <dt>{T.expires}</dt><dd className="mono">{cfg.notAfter}</dd>
          <dt>{T.chain}</dt><dd>{cfg.chainComplete ? T.yes : T.no}</dd>
          <dt>{T.protocols}</dt><dd className="mono">{cfg.protocols.join(', ')}</dd>
          <dt>{T.hsts}</dt><dd>{cfg.hsts ? T.yes : T.no}</dd>
        </dl>
      </section>

      <section className="panel" aria-labelledby="tls-find-h">
        <h3 id="tls-find-h">{T.findingsTitle}</h3>
        {findings.length === 0 ? (
          <p className="callout callout-key" role="status">{T.none}</p>
        ) : (
          <ul className="lab-list" aria-live="polite">
            {findings.map((f) => (
              <li key={f.code}><span className={`badge ${SEV[f.severity]}`}>{T.severity[f.severity]}</span> {T.messages[f.code] ? fill(T.messages[f.code]!, params) : f.message}</li>
            ))}
          </ul>
        )}
      </section>

      <section className="panel" aria-labelledby="tls-fix-h">
        <h3 id="tls-fix-h">{T.fixTitle}</h3>
        <ul className="lab-list">
          {fixes.map((fx, i) => (
            <li key={i}>
              <button type="button" className="btn btn-ghost" disabled={fx.done} onClick={fx.apply}>
                {fx.done ? '✓ ' : ''}{fx.label}
              </button>
            </li>
          ))}
        </ul>
        <p className="muted">{T.fixNote}</p>
      </section>
    </div>
  );
}
