import { useState } from 'react';
import { DOMAINS, HOURS, TARGET, gain, hoursFor, totalGain } from './plan';
import { useLabTexts, type LabTexts } from '../i18n';

const fr = {
  title: 'Diagnostic de préparation (données fictives)',
  note: `Le score est le résultat à un test de positionnement ; la cible est de ${TARGET} % dans chaque domaine ; vous disposez de ${HOURS} heures.`,
  cols: ['Domaine', 'Poids à l’examen (%)', 'Score actuel (%)', 'Gain potentiel (points)', 'Heures conseillées'],
  domains: { reseaux: 'Réseaux', crypto: 'Cryptographie', systemes: 'Sécurité des systèmes', risques: 'Gestion des risques', incident: 'Réponse à incident', dev: 'Développement sécurisé', cloud: 'Cloud' } as Record<string, string>,
  reveal: 'Calculer les gains et la répartition des heures', hide: 'Masquer le calcul',
  formula: 'Gain potentiel = poids × (cible − score) / 100, si le score est inférieur à la cible. Heures = budget × gain du domaine / gain total.',
  total: 'Gain total',
  hidden: '?',
};
const en: typeof fr = {
  title: 'Preparation diagnostic (fictional data)',
  note: `The score is the result of a placement test; the target is ${TARGET}% in each domain; you have ${HOURS} hours.`,
  cols: ['Domain', 'Exam weight (%)', 'Current score (%)', 'Potential gain (points)', 'Suggested hours'],
  domains: { reseaux: 'Networking', crypto: 'Cryptography', systemes: 'Systems security', risques: 'Risk management', incident: 'Incident response', dev: 'Secure development', cloud: 'Cloud' },
  reveal: 'Compute the gains and the hour allocation', hide: 'Hide the calculation',
  formula: 'Potential gain = weight × (target − score) / 100, if the score is below the target. Hours = budget × domain gain / total gain.',
  total: 'Total gain',
  hidden: '?',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function RevisionPlanLab() {
  const T = useLabTexts(TEXTS);
  const [shown, setShown] = useState(false);
  const fmt = (n: number) => n.toLocaleString(T === fr ? 'fr-FR' : 'en-US', { maximumFractionDigits: 1, minimumFractionDigits: 1 });

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="rv-t">
        <h3 id="rv-t">{T.title}</h3>
        <p className="muted">{T.note}</p>
        <div className="table-wrap">
          <table>
            <thead><tr>{T.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {DOMAINS.map((d) => (
                <tr key={d.id}>
                  <td>{T.domains[d.key]}</td>
                  <td>{d.weight}</td>
                  <td>{d.score}</td>
                  <td>{shown ? fmt(gain(d)) : T.hidden}</td>
                  <td>{shown ? fmt(hoursFor(d)) : T.hidden}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button type="button" className="btn" aria-expanded={shown} onClick={() => setShown((v) => !v)}>
          {shown ? T.hide : T.reveal}
        </button>
        {shown && (
          <>
            <p className="muted">{T.formula}</p>
            <p><strong>{T.total}</strong> : {fmt(totalGain())}</p>
          </>
        )}
      </section>
    </div>
  );
}
