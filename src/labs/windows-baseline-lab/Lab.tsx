import { useState } from 'react';
import { SETTINGS, complianceScore } from './baseline';
import { useLabTexts, type LabTexts } from '../i18n';

const fr = {
  title: 'Configuration relevée sur un poste Windows et base de référence (fictives)',
  note: 'Pour chaque réglage, la base attend une valeur. Repérez les écarts avant d’afficher le contrôle.',
  cols: ['N°', 'Réglage', 'Valeur attendue', 'Valeur relevée', 'Gravité (1 à 3)', 'Contrôle'],
  keys: { uac: 'Contrôle de compte d’utilisateur (UAC) activé', firewall: 'Pare-feu activé', bitlocker: 'Chiffrement du disque (BitLocker) activé', smb1: 'Protocole SMBv1 activé', rdp: 'Bureau à distance activé', defender: 'Antivirus intégré actif', localadmin: 'Utilisateur courant membre des administrateurs locaux', autorun: 'Exécution automatique des supports amovibles activée' } as Record<string, string>,
  yes: 'oui', no: 'non', ok: 'conforme', gap: 'écart',
  reveal: 'Contrôler la conformité', hide: 'Masquer le contrôle', hidden: '?',
  score: 'Conformité pondérée par la gravité',
};
const en: typeof fr = {
  title: 'Configuration captured on a Windows workstation and reference baseline (fictional)',
  note: 'For each setting, the baseline expects a value. Spot the deviations before showing the check.',
  cols: ['No.', 'Setting', 'Expected value', 'Observed value', 'Severity (1 to 3)', 'Check'],
  keys: { uac: 'User Account Control (UAC) enabled', firewall: 'Firewall enabled', bitlocker: 'Disk encryption (BitLocker) enabled', smb1: 'SMBv1 protocol enabled', rdp: 'Remote Desktop enabled', defender: 'Built-in antivirus active', localadmin: 'Current user is a member of local administrators', autorun: 'Autorun of removable media enabled' },
  yes: 'yes', no: 'no', ok: 'compliant', gap: 'deviation',
  reveal: 'Check compliance', hide: 'Hide the check', hidden: '?',
  score: 'Compliance weighted by severity',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function WindowsBaselineLab() {
  const T = useLabTexts(TEXTS);
  const [shown, setShown] = useState(false);
  const yn = (b: boolean) => (b ? T.yes : T.no);

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="wb-t">
        <h3 id="wb-t">{T.title}</h3>
        <p className="muted">{T.note}</p>
        <div className="table-wrap">
          <table>
            <thead><tr>{T.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {SETTINGS.map((s) => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{T.keys[s.key]}</td>
                  <td>{yn(s.expected)}</td>
                  <td>{yn(s.actual)}</td>
                  <td>{s.weight}</td>
                  <td>{shown ? (s.expected === s.actual ? T.ok : T.gap) : T.hidden}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button type="button" className="btn" aria-expanded={shown} onClick={() => setShown((v) => !v)}>
          {shown ? T.hide : T.reveal}
        </button>
        {shown && <p><strong>{T.score}</strong> : {complianceScore()} %</p>}
      </section>
    </div>
  );
}
