import { useState } from 'react';
import { LEVEL_LABELS, prioritize, riskLevel, TREATMENT_LABELS, treatmentDefensible, type Treatment } from './risk';

const LEVEL_BADGE = { faible: 'badge-muted', moyen: 'badge', eleve: 'badge-warn' } as const;

export default function RiskMatrixLab() {
  const risks = prioritize();
  const [choices, setChoices] = useState<Record<string, Treatment | ''>>({});

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="rm-h">
        <h3 id="rm-h">Registre des risques (classés par priorité)</h3>
        <div className="table-wrap">
          <table>
            <caption className="sr-only">Scénarios de risque et traitement</caption>
            <thead>
              <tr><th scope="col">Scénario</th><th scope="col">Vrais.</th><th scope="col">Gravité</th><th scope="col">Niveau</th><th scope="col">Traitement</th></tr>
            </thead>
            <tbody>
              {risks.map((r) => {
                const level = riskLevel(r);
                const choice = choices[r.id] ?? '';
                const warn = choice && !treatmentDefensible(level, choice as Treatment);
                return (
                  <tr key={r.id}>
                    <td>{r.label}</td>
                    <td className="mono">{r.likelihood}</td>
                    <td className="mono">{r.impact}</td>
                    <td><span className={`badge ${LEVEL_BADGE[level]}`}>{LEVEL_LABELS[level]}</span></td>
                    <td>
                      <select className="input" aria-label={`Traitement pour : ${r.label}`} value={choice} onChange={(e) => setChoices((c) => ({ ...c, [r.id]: e.target.value as Treatment | '' }))}>
                        <option value="">— choisir —</option>
                        {(Object.keys(TREATMENT_LABELS) as Treatment[]).map((t) => <option key={t} value={t}>{TREATMENT_LABELS[t]}</option>)}
                      </select>
                      {warn ? <p className="error" role="alert">Accepter un risque {LEVEL_LABELS[level].toLowerCase()} sans mesure est peu défendable : préférez réduire, transférer ou éviter.</p> : null}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="muted">Niveau = vraisemblance × gravité (aide à la lecture). Le risque résiduel après traitement doit être accepté par la direction.</p>
      </section>
    </div>
  );
}
