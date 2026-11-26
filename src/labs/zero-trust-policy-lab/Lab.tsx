import { useState } from 'react';
import { ALLOWED_COUNTRIES, REQUESTS, evaluate } from './policy';
import { useLabTexts, type LabTexts } from '../i18n';

const fr = {
  polTitle: 'Politique d’accès (première règle qui s’applique)',
  rules: [
    'R1 — Appareil à risque élevé : accès refusé.',
    'R2 — Pays hors liste autorisée et ressource sensible : accès refusé.',
    'R3 — Ressource sensible sans clé de sécurité : authentification renforcée exigée.',
    'R4 — Aucune authentification multifacteur : authentification multifacteur exigée.',
    'R5 — Sinon : accès accordé ; limité en lecture si l’appareil n’est pas conforme.',
  ],
  countries: 'Pays autorisés',
  reqTitle: 'Demandes d’accès (données fictives)',
  cols: ['N°', 'Identité', 'Ressource', 'Sensibilité', 'Appareil conforme', 'Risque appareil', 'Pays', 'MFA', 'Décision', 'Règle'],
  yes: 'oui', no: 'non',
  sens: { low: 'faible', medium: 'moyenne', high: 'élevée' } as Record<string, string>,
  risk: { low: 'faible', high: 'élevé' } as Record<string, string>,
  mfa: { none: 'aucune', totp: 'code', fido: 'clé de sécurité' } as Record<string, string>,
  dec: { allow: 'accès', limited: 'accès limité', stepup: 'authentification renforcée', deny: 'refus' } as Record<string, string>,
  reveal: 'Évaluer les demandes', hide: 'Masquer les décisions', hidden: '?',
};
const en: typeof fr = {
  polTitle: 'Access policy (first matching rule applies)',
  rules: [
    'R1 — High-risk device: access denied.',
    'R2 — Country outside the allowed list and sensitive resource: access denied.',
    'R3 — Sensitive resource without a security key: strong authentication required.',
    'R4 — No multi-factor authentication: multi-factor authentication required.',
    'R5 — Otherwise: access granted; read-only if the device is not compliant.',
  ],
  countries: 'Allowed countries',
  reqTitle: 'Access requests (fictional data)',
  cols: ['No.', 'Identity', 'Resource', 'Sensitivity', 'Compliant device', 'Device risk', 'Country', 'MFA', 'Decision', 'Rule'],
  yes: 'yes', no: 'no',
  sens: { low: 'low', medium: 'medium', high: 'high' },
  risk: { low: 'low', high: 'high' },
  mfa: { none: 'none', totp: 'code', fido: 'security key' },
  dec: { allow: 'access', limited: 'limited access', stepup: 'strong authentication', deny: 'denied' },
  reveal: 'Evaluate the requests', hide: 'Hide the decisions', hidden: '?',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function ZeroTrustPolicyLab() {
  const T = useLabTexts(TEXTS);
  const [shown, setShown] = useState(false);

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="zt-pol">
        <h3 id="zt-pol">{T.polTitle}</h3>
        <ol>{T.rules.map((r) => <li key={r}>{r}</li>)}</ol>
        <p className="muted">{T.countries} : <span className="mono">{ALLOWED_COUNTRIES.join(', ')}</span></p>
      </section>
      <section className="panel" aria-labelledby="zt-req">
        <h3 id="zt-req">{T.reqTitle}</h3>
        <div className="table-wrap">
          <table>
            <thead><tr>{T.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {REQUESTS.map((r) => {
                const o = evaluate(r);
                return (
                  <tr key={r.id}>
                    <td>{r.id}</td>
                    <td className="mono">{r.who}</td>
                    <td className="mono">{r.resource}</td>
                    <td>{T.sens[r.sensitivity]}</td>
                    <td>{r.compliant ? T.yes : T.no}</td>
                    <td>{T.risk[r.deviceRisk]}</td>
                    <td className="mono">{r.country}</td>
                    <td>{T.mfa[r.mfa]}</td>
                    <td>{shown ? T.dec[o.decision] : T.hidden}</td>
                    <td className="mono">{shown ? o.rule : T.hidden}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <button type="button" className="btn" aria-expanded={shown} onClick={() => setShown((v) => !v)}>
          {shown ? T.hide : T.reveal}
        </button>
      </section>
    </div>
  );
}
