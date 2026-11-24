import { useState } from 'react';
import { prioritize, riskLevel, treatmentDefensible, type Level, type Treatment } from './risk';
import { fill, useLabTexts, type LabTexts } from '../i18n';

const LEVEL_BADGE = { faible: 'badge-muted', moyen: 'badge', eleve: 'badge-warn' } as const;

const fr = {
  title: 'Registre des risques (classés par priorité)',
  caption: 'Scénarios de risque et traitement',
  cols: ['Scénario', 'Vrais.', 'Gravité', 'Niveau', 'Traitement'],
  treatmentFor: 'Traitement pour : {label}',
  choose: '— choisir —',
  warn: 'Accepter un risque {level} sans mesure est peu défendable : préférez réduire, transférer ou éviter.',
  note: 'Niveau = vraisemblance × gravité (aide à la lecture). Le risque résiduel après traitement doit être accepté par la direction.',
  levels: { faible: 'Faible', moyen: 'Moyen', eleve: 'Élevé' } as Record<Level, string>,
  levelsInline: { faible: 'faible', moyen: 'moyen', eleve: 'élevé' } as Record<Level, string>,
  treatments: {
    reduire: 'Réduire (appliquer des mesures)',
    transferer: 'Transférer (assurance, sous-traitance)',
    eviter: 'Éviter (renoncer à l’activité)',
    accepter: 'Accepter (décision documentée)',
  } as Record<Treatment, string>,
  risks: {
    rancongiciel: 'Rançongiciel via une pièce jointe, sauvegardes en ligne',
    vpn: 'Passerelle VPN exposée, non corrigée',
    'fuite-stockage': 'Stockage cloud mal configuré (données clients)',
    'phishing-paie': 'Fraude au virement (usurpation de la direction)',
    'perte-portable': 'Perte d’un ordinateur portable chiffré',
    'panne-clim': 'Panne de climatisation de la salle serveurs',
  } as Record<string, string>,
};

const en: typeof fr = {
  title: 'Risk register (ranked by priority)',
  caption: 'Risk scenarios and treatment',
  cols: ['Scenario', 'Likel.', 'Severity', 'Level', 'Treatment'],
  treatmentFor: 'Treatment for: {label}',
  choose: '— choose —',
  warn: 'Accepting a {level} risk with no measure is hard to defend: prefer to reduce, transfer or avoid.',
  note: 'Level = likelihood × severity (a reading aid). The residual risk after treatment must be accepted by management.',
  levels: { faible: 'Low', moyen: 'Medium', eleve: 'High' },
  levelsInline: { faible: 'low', moyen: 'medium', eleve: 'high' },
  treatments: {
    reduire: 'Reduce (apply measures)',
    transferer: 'Transfer (insurance, outsourcing)',
    eviter: 'Avoid (give up the activity)',
    accepter: 'Accept (documented decision)',
  },
  risks: {
    rancongiciel: 'Ransomware through an attachment, online backups',
    vpn: 'Exposed, unpatched VPN gateway',
    'fuite-stockage': 'Misconfigured cloud storage (customer data)',
    'phishing-paie': 'Payment-transfer fraud (impersonating management)',
    'perte-portable': 'Loss of an encrypted laptop',
    'panne-clim': 'Air-conditioning failure in the server room',
  },
};

const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function RiskMatrixLab() {
  const T = useLabTexts(TEXTS);
  const risks = prioritize();
  const [choices, setChoices] = useState<Record<string, Treatment | ''>>({});

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="rm-h">
        <h3 id="rm-h">{T.title}</h3>
        <div className="table-wrap">
          <table>
            <caption className="sr-only">{T.caption}</caption>
            <thead>
              <tr>{T.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr>
            </thead>
            <tbody>
              {risks.map((r) => {
                const level = riskLevel(r);
                const choice = choices[r.id] ?? '';
                const warn = choice && !treatmentDefensible(level, choice as Treatment);
                const label = T.risks[r.id] ?? r.label;
                return (
                  <tr key={r.id}>
                    <td>{label}</td>
                    <td className="mono">{r.likelihood}</td>
                    <td className="mono">{r.impact}</td>
                    <td><span className={`badge ${LEVEL_BADGE[level]}`}>{T.levels[level]}</span></td>
                    <td>
                      <select className="input" aria-label={fill(T.treatmentFor, { label })} value={choice} onChange={(e) => setChoices((c) => ({ ...c, [r.id]: e.target.value as Treatment | '' }))}>
                        <option value="">{T.choose}</option>
                        {(Object.keys(T.treatments) as Treatment[]).map((t) => <option key={t} value={t}>{T.treatments[t]}</option>)}
                      </select>
                      {warn ? <p className="error" role="alert">{fill(T.warn, { level: T.levelsInline[level] })}</p> : null}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="muted">{T.note}</p>
      </section>
    </div>
  );
}
