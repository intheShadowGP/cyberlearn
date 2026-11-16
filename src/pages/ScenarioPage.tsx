import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { COURSE_BY_ID } from '../content/registry';
import { SCENARIO_BY_ID, loadScenarioBody, loadScenarioCorrections, type ScenarioBody, type ScenarioMeta } from '../content/scenarios';
import type { Block } from '../content/types';
import { LevelBadge } from '../components/Badges';
import { Blocks } from '../components/Blocks';
import { Quiz } from '../components/Quiz';
import { recordExamAttempt } from '../lib/progress';
import { usePageTitle } from '../lib/usePageTitle';
import NotFoundPage from './NotFoundPage';

export default function ScenarioPage() {
  const { id = '' } = useParams();
  const meta = SCENARIO_BY_ID.get(id);
  if (!meta) return <NotFoundPage what="Cette épreuve" />;
  return <ScenarioView key={meta.id} meta={meta} />;
}

function ScenarioView({ meta }: { meta: ScenarioMeta }) {
  usePageTitle(meta.title);
  const [body, setBody] = useState<ScenarioBody | null>(null);
  const [debrief, setDebrief] = useState<Block[] | null>(null);
  const [round, setRound] = useState(0);
  const [loadError, setLoadError] = useState(false);

  const skillLabels = useMemo(
    () =>
      Object.fromEntries(
        meta.relatedCourses.flatMap((c) => COURSE_BY_ID.get(c)?.skills.map((s) => [s.id, s.label] as const) ?? []),
      ),
    [meta.relatedCourses],
  );

  useEffect(() => {
    let alive = true;
    loadScenarioBody(meta.id)
      .then((b) => alive && (b ? setBody(b) : setLoadError(true)))
      .catch(() => alive && setLoadError(true));
    return () => {
      alive = false;
    };
  }, [meta.id]);

  return (
    <article>
      <nav aria-label="Fil d’Ariane" className="breadcrumb">
        <Link to="/evaluations">Évaluations</Link> › <span aria-current="page">{meta.title}</span>
      </nav>
      <header className="panel">
        <p className="eyebrow">Épreuve de démarche</p>
        <h1>{meta.title}</h1>
        <ul className="meta-row">
          <li><LevelBadge level={meta.level} /></li>
          <li>Durée : {meta.durationMin} min</li>
          {meta.relatedCourses.map((c) => (
            <li key={c}>
              Cours lié : <Link to={`/cours/${c}`}>{COURSE_BY_ID.get(c)?.title}</Link>
            </li>
          ))}
        </ul>
        <h2 className="h3">Mise en situation</h2>
        <p>{meta.context}</p>
        <h2 className="h3">Objectif</h2>
        <p>{meta.objective}</p>
        <h2 className="h3">Démarche</h2>
        <ol>{meta.steps.map((s) => <li key={s}>{s}</li>)}</ol>
      </header>

      <section className="panel" aria-labelledby="dossier-h">
        <h2 id="dossier-h">Dossier d’incident</h2>
        {body ? (
          <Blocks blocks={body.dossier} />
        ) : loadError ? (
          <p role="alert" className="error">Le dossier n’a pas pu être chargé. Si vous êtes hors ligne, reconnectez-vous une fois pour le mettre en cache.</p>
        ) : (
          <p role="status">Chargement du dossier…</p>
        )}
      </section>

      <section aria-labelledby="sq-h">
        <h2 id="sq-h">Questions de démarche et validation</h2>
        {body ? (
          <Quiz
            key={round}
            sessionKey={`${meta.id}-${round}`}
            questions={body.questions}
            skillLabels={skillLabels}
            loadCorrections={async () => {
              const c = await loadScenarioCorrections(meta.id);
              if (!c) throw new Error('corrections absentes');
              setDebrief(c.debrief);
              return c.questions;
            }}
            onFinished={(score, d) => recordExamAttempt(meta.id, score, d)}
            retryLabel="Recommencer l’épreuve"
            onRetry={() => {
              setDebrief(null);
              setRound((r) => r + 1);
            }}
          />
        ) : loadError ? (
          <p role="alert" className="error">Les questions n’ont pas pu être chargées.</p>
        ) : (
          <p role="status">Chargement…</p>
        )}
      </section>

      {debrief && (
        <section className="panel" aria-labelledby="debrief-h">
          <h2 id="debrief-h">Débriefing : corrigé d’ensemble et enseignements</h2>
          <Blocks blocks={debrief} />
        </section>
      )}
    </article>
  );
}
