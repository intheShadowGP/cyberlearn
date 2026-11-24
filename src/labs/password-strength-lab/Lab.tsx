import { useId, useState } from 'react';
import { charsetSize, crackTimeSeconds, entropyBits, formatDuration, isCommon, SPEEDS, verdict, type Verdict } from './strength';
import { fill, useLabTexts, type LabTexts } from '../i18n';
import { useI18n } from '../../i18n';

const BADGE: Record<string, string> = {
  'tres-faible': 'badge-warn', faible: 'badge-warn', moyen: 'badge', fort: 'badge-ok', 'tres-fort': 'badge-ok',
};

const fr = {
  examples: ['azerty123', 'P@ss1', 'Soleil2024!', 'cheval-bleu-ancre-42-rivière', 'motdepasse'],
  h1: 'Estimateur de robustesse (local, rien n’est envoyé)',
  intro: 'Saisissez un mot de passe fictif. Le calcul se fait entièrement dans votre navigateur ; n’utilisez pas un vrai mot de passe personnel.',
  label: 'Mot de passe à évaluer', placeholder: 'essayez une phrase de passe longue', examplesAria: 'Exemples à tester',
  h2: 'Analyse', enter: 'Saisissez un mot de passe pour voir l’analyse.',
  length: 'Longueur', chars: '{n} caractères', charset: 'Jeu de caractères', symbols: '{n} symboles possibles',
  entropy: 'Entropie estimée', bits: '{n} bits', common: 'Dans une liste de mots courants ?', yes: 'oui — à proscrire', no: 'non', verdictLabel: 'Verdict',
  verdicts: { 'tres-faible': 'Très faible', faible: 'Faible', moyen: 'Moyen', fort: 'Fort', 'tres-fort': 'Très fort' } as Record<Verdict, string>,
  h3: 'Temps moyen de cassage hors ligne (ordre de grandeur)',
  inList: 'Mot de passe présent dans une liste publique : retrouvé', immediately: 'immédiatement', whatever: ', quel que soit le stockage.',
  caption: 'Temps de cassage selon le type de stockage',
  cols: ['Stockage côté service', 'Essais/seconde (ordre de grandeur)', 'Temps moyen estimé'],
  fast: 'Hachage rapide, inadapté (ex. SHA-256 non itéré, sur GPU)', slow: 'Hachage lent et salé (ex. bcrypt, Argon2)',
  note: 'Ordres de grandeur pédagogiques (cassage hors ligne). Ils illustrent l’effet de l’entropie et du type de hachage, ce ne sont pas des mesures exactes.',
};
const en: typeof fr = {
  examples: ['qwerty123', 'P@ss1', 'Sunshine2024!', 'blue-horse-anchor-42-river', 'password'],
  h1: 'Strength estimator (local, nothing is sent)',
  intro: 'Type a fictional password. The computation runs entirely in your browser; do not use a real personal password.',
  label: 'Password to assess', placeholder: 'try a long passphrase', examplesAria: 'Examples to try',
  h2: 'Analysis', enter: 'Type a password to see the analysis.',
  length: 'Length', chars: '{n} characters', charset: 'Character set', symbols: '{n} possible symbols',
  entropy: 'Estimated entropy', bits: '{n} bits', common: 'In a list of common words?', yes: 'yes — to be avoided', no: 'no', verdictLabel: 'Verdict',
  verdicts: { 'tres-faible': 'Very weak', faible: 'Weak', moyen: 'Medium', fort: 'Strong', 'tres-fort': 'Very strong' },
  h3: 'Average offline cracking time (order of magnitude)',
  inList: 'Password present in a public list: found', immediately: 'immediately', whatever: ', whatever the storage.',
  caption: 'Cracking time by storage type',
  cols: ['Service-side storage', 'Guesses/second (order of magnitude)', 'Estimated average time'],
  fast: 'Fast hash, unsuitable (e.g. non-iterated SHA-256, on GPU)', slow: 'Slow, salted hash (e.g. bcrypt, Argon2)',
  note: 'Educational orders of magnitude (offline cracking). They illustrate the effect of entropy and of the hash type; they are not exact measurements.',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function PasswordStrengthLab() {
  const T = useLabTexts(TEXTS);
  const { lang } = useI18n();
  const [pw, setPw] = useState('');
  const inputId = useId();
  const bits = entropyBits(pw);
  const v = verdict(pw);
  const commun = pw ? isCommon(pw) : false;

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="pws-saisie-h">
        <h3 id="pws-saisie-h">{T.h1}</h3>
        <p>{T.intro}</p>
        <div className="form-row">
          <label htmlFor={inputId}>{T.label}</label>
          <input id={inputId} className="input mono" value={pw} maxLength={128} autoComplete="off" spellCheck={false} placeholder={T.placeholder} onChange={(e) => setPw(e.target.value)} />
        </div>
        <div className="form-row" role="group" aria-label={T.examplesAria}>
          {T.examples.map((ex) => (
            <button type="button" key={ex} className="btn btn-ghost" onClick={() => setPw(ex)}>{ex}</button>
          ))}
        </div>
      </section>

      <section className="panel" aria-labelledby="pws-res-h">
        <h3 id="pws-res-h">{T.h2}</h3>
        {!pw ? (
          <p>{T.enter}</p>
        ) : (
          <dl className="kv" aria-live="polite">
            <dt>{T.length}</dt><dd>{fill(T.chars, { n: pw.length })}</dd>
            <dt>{T.charset}</dt><dd>{fill(T.symbols, { n: charsetSize(pw) })}</dd>
            <dt>{T.entropy}</dt><dd>{fill(T.bits, { n: bits })}</dd>
            <dt>{T.common}</dt>
            <dd>{commun ? <span className="badge badge-warn">{T.yes}</span> : <span className="badge badge-ok">{T.no}</span>}</dd>
            <dt>{T.verdictLabel}</dt><dd><span className={`badge ${BADGE[v]}`}>{T.verdicts[v]}</span></dd>
          </dl>
        )}
      </section>

      <section className="panel" aria-labelledby="pws-temps-h">
        <h3 id="pws-temps-h">{T.h3}</h3>
        {!pw ? (
          <p>—</p>
        ) : commun ? (
          <p className="error" role="alert">{T.inList} <strong>{T.immediately}</strong>{T.whatever}</p>
        ) : (
          <div className="table-wrap">
            <table>
              <caption className="sr-only">{T.caption}</caption>
              <thead><tr>{T.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
              <tbody>
                <tr><td>{T.fast}</td><td className="mono">10¹¹</td><td className="mono">{formatDuration(crackTimeSeconds(bits, SPEEDS.hachageRapide), lang)}</td></tr>
                <tr><td>{T.slow}</td><td className="mono">10⁴</td><td className="mono">{formatDuration(crackTimeSeconds(bits, SPEEDS.hachageLent), lang)}</td></tr>
              </tbody>
            </table>
          </div>
        )}
        <p className="muted">{T.note}</p>
      </section>
    </div>
  );
}
