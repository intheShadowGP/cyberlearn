import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProgressBar } from '../components/Badges';
import { DOMAIN_LABEL, buildPositioningTest, scorePositioning, type PositioningQuestion } from '../lib/positioning';
import { recordPositioning, type PositioningResult } from '../lib/progress';
import { useSnapshot } from '../lib/useSnapshot';
import { usePageTitle } from '../lib/usePageTitle';

export default function PositioningTestPage() {
  usePageTitle('Test de positionnement');
  const nav = useNavigate();
  const { data, ready } = useSnapshot();
  const [questions, setQuestions] = useState<PositioningQuestion[] | null>(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<PositioningResult | null>(null);
  const [saving, setSaving] = useState(false);

  // Construit le test une seule fois, dès que les données sont prêtes, en dépriorisant
  // les questions de la tentative précédente. Initialisation paresseuse au rendu (pas d'effet).
  if (ready && !questions) {
    const seen = data.profile[0]?.onboarding?.lastResult?.questionIds ?? [];
    setQuestions(buildPositioningTest(Math.random, seen));
  }

  const answeredCount = useMemo(() => (questions ? questions.filter((q) => answers[q.id]).length : 0), [questions, answers]);

  if (!questions) return <p role="status">Préparation du test…</p>;

  if (result) {
    return (
      <div className="positioning">
        <h1>Résultat du positionnement</h1>
        <section className={`panel ${result.validated ? 'callout-ok' : 'callout-warn'}`} aria-labelledby="pr-h">
          <h2 id="pr-h">{result.validated ? 'Niveau initié validé' : 'Positionnement non validé'}</h2>
          <p className="score-big"><strong>{result.correct}/{result.total}</strong> ({result.percent} %)</p>
          {result.validated ? (
            <p>
              Vous atteignez le seuil de 14/20. Le <strong>mode libre</strong> est activé : vous pouvez suivre les cours sans
              respecter l’ordre des prérequis.
            </p>
          ) : (
            <p>
              Il faut 14/20 (70 %) pour valider. Rien n’est perdu : commencez par les fondamentaux, puis repassez le test quand
              vous le souhaitez — il sera différent.
            </p>
          )}
          <p className="muted">Les réponses détaillées ne sont pas affichées : le test mesure un positionnement, il n’est pas un support de révision.</p>
          <div className="button-row">
            <Link className="btn btn-primary" to="/competences">Voir mes compétences</Link>
            <Link className="btn" to="/catalogue">Explorer les cours</Link>
            <Link className="btn" to="/profil">Mon profil</Link>
          </div>
        </section>
      </div>
    );
  }

  const q = questions[step] as PositioningQuestion;
  const last = step === questions.length - 1;

  async function finish() {
    if (!questions) return;
    setSaving(true);
    try {
      const r = scorePositioning(questions, answers);
      await recordPositioning(r);
      setResult(r);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="positioning">
      <h1>Test de positionnement</h1>
      <p className="lead">
        20 questions réparties sur l’ensemble des disciplines. Seuil de réussite : 14/20 (70 %). Vous pouvez revenir en arrière ;
        les bonnes réponses ne sont pas révélées.
      </p>
      <ProgressBar value={step + 1} max={questions.length} label={`Question ${step + 1} sur ${questions.length}`} />
      <p className="muted">Répondu : {answeredCount}/{questions.length}</p>

      <fieldset className="panel question" data-qid={q.id} key={q.id}>
        <legend>
          <span className="eyebrow">{DOMAIN_LABEL[q.domain]} · question {step + 1}</span>
          <span className="question-prompt">{q.prompt}</span>
        </legend>
        {q.options.map((opt) => (
          <label key={opt.id} className="check radio-option">
            <input
              type="radio"
              name={q.id}
              value={opt.id}
              checked={answers[q.id] === opt.id}
              onChange={() => setAnswers((a) => ({ ...a, [q.id]: opt.id }))}
            />
            {opt.text}
          </label>
        ))}
      </fieldset>

      <div className="button-row">
        <button type="button" className="btn" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))}>
          Précédent
        </button>
        {last ? (
          <button type="button" className="btn btn-primary" disabled={saving} onClick={() => void finish()}>
            {saving ? 'Enregistrement…' : 'Terminer le test'}
          </button>
        ) : (
          <button type="button" className="btn btn-primary" onClick={() => setStep((s) => Math.min(questions.length - 1, s + 1))}>
            Suivant
          </button>
        )}
        <button type="button" className="btn btn-ghost" onClick={() => nav('/')}>Quitter</button>
      </div>
      {last && answeredCount < questions.length && (
        <p className="muted" role="status">Les questions sans réponse seront comptées comme incorrectes.</p>
      )}
    </div>
  );
}
