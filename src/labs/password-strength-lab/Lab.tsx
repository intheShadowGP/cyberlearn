import { useId, useState } from 'react';
import { charsetSize, crackTimeSeconds, entropyBits, formatDuration, isCommon, SPEEDS, verdict, VERDICT_LABELS } from './strength';

const EXEMPLES = ['azerty123', 'P@ss1', 'Soleil2024!', 'cheval-bleu-ancre-42-rivière', 'motdepasse'];
const BADGE: Record<string, string> = {
  'tres-faible': 'badge-warn', faible: 'badge-warn', moyen: 'badge', fort: 'badge-ok', 'tres-fort': 'badge-ok',
};

export default function PasswordStrengthLab() {
  const [pw, setPw] = useState('');
  const inputId = useId();
  const bits = entropyBits(pw);
  const v = verdict(pw);
  const commun = pw ? isCommon(pw) : false;

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="pws-saisie-h">
        <h3 id="pws-saisie-h">Estimateur de robustesse (local, rien n’est envoyé)</h3>
        <p>Saisissez un mot de passe fictif. Le calcul se fait entièrement dans votre navigateur ; n’utilisez pas un vrai mot de passe personnel.</p>
        <div className="form-row">
          <label htmlFor={inputId}>Mot de passe à évaluer</label>
          <input id={inputId} className="input mono" value={pw} maxLength={128} autoComplete="off" spellCheck={false} placeholder="essayez une phrase de passe longue" onChange={(e) => setPw(e.target.value)} />
        </div>
        <div className="form-row" role="group" aria-label="Exemples à tester">
          {EXEMPLES.map((ex) => (
            <button type="button" key={ex} className="btn btn-ghost" onClick={() => setPw(ex)}>{ex}</button>
          ))}
        </div>
      </section>

      <section className="panel" aria-labelledby="pws-res-h">
        <h3 id="pws-res-h">Analyse</h3>
        {!pw ? (
          <p>Saisissez un mot de passe pour voir l’analyse.</p>
        ) : (
          <dl className="kv" aria-live="polite">
            <dt>Longueur</dt><dd>{pw.length} caractères</dd>
            <dt>Jeu de caractères</dt><dd>{charsetSize(pw)} symboles possibles</dd>
            <dt>Entropie estimée</dt><dd>{bits} bits</dd>
            <dt>Dans une liste de mots courants ?</dt>
            <dd>{commun ? <span className="badge badge-warn">oui — à proscrire</span> : <span className="badge badge-ok">non</span>}</dd>
            <dt>Verdict</dt><dd><span className={`badge ${BADGE[v]}`}>{VERDICT_LABELS[v]}</span></dd>
          </dl>
        )}
      </section>

      <section className="panel" aria-labelledby="pws-temps-h">
        <h3 id="pws-temps-h">Temps moyen de cassage hors ligne (ordre de grandeur)</h3>
        {!pw ? (
          <p>—</p>
        ) : commun ? (
          <p className="error" role="alert">Mot de passe présent dans une liste publique : retrouvé <strong>immédiatement</strong>, quel que soit le stockage.</p>
        ) : (
          <div className="table-wrap">
            <table>
              <caption className="sr-only">Temps de cassage selon le type de stockage</caption>
              <thead><tr><th scope="col">Stockage côté service</th><th scope="col">Essais/seconde (ordre de grandeur)</th><th scope="col">Temps moyen estimé</th></tr></thead>
              <tbody>
                <tr><td>Hachage rapide, inadapté (ex. SHA-256 non itéré, sur GPU)</td><td className="mono">10¹¹</td><td className="mono">{formatDuration(crackTimeSeconds(bits, SPEEDS.hachageRapide))}</td></tr>
                <tr><td>Hachage lent et salé (ex. bcrypt, Argon2)</td><td className="mono">10⁴</td><td className="mono">{formatDuration(crackTimeSeconds(bits, SPEEDS.hachageLent))}</td></tr>
              </tbody>
            </table>
          </div>
        )}
        <p className="muted">Ordres de grandeur pédagogiques (cassage hors ligne). Ils illustrent l’effet de l’entropie et du type de hachage, ce ne sont pas des mesures exactes.</p>
      </section>
    </div>
  );
}
