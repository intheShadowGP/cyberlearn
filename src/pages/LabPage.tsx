import { Suspense, useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { COURSE_BY_ID, LAB_BY_ID, loadLabBody, loadLabCorrections } from '../content/registry';
import type { Block, LabBody, LabMeta } from '../content/types';
import { CATEGORY_LABELS, LAB_COMPONENTS } from '../labs';
import { LevelBadge } from '../components/Badges';
import { Blocks } from '../components/Blocks';
import { Quiz } from '../components/Quiz';
import { recordLabAttempt } from '../lib/progress';
import { usePageTitle } from '../lib/usePageTitle';
import NotFoundPage from './NotFoundPage';

export default function LabPage() {
  const { id = '' } = useParams();
  const meta = LAB_BY_ID.get(id);
  if (!meta) return <NotFoundPage what="Ce laboratoire" />;
  return <LabView key={meta.id} meta={meta} />;
}

function LabView({ meta }: { meta: LabMeta }) {
  usePageTitle(meta.title);
  const Component = Object.hasOwn(LAB_COMPONENTS, meta.id) ? LAB_COMPONENTS[meta.id] : undefined;
  const [body, setBody] = useState<LabBody | null>(null);
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
    loadLabBody(meta.id)
      .then((b) => alive && (b ? setBody(b) : setLoadError(true)))
      .catch(() => alive && setLoadError(true));
    return () => {
      alive = false;
    };
  }, [meta.id]);

  return (
    <article>
      <nav aria-label="Fil d’Ariane" className="breadcrumb">
        <Link to="/laboratoires">Laboratoires</Link> › <span aria-current="page">{meta.title}</span>
      </nav>
      <header className="panel">
        <p className="eyebrow">Laboratoire · {CATEGORY_LABELS[meta.category]}</p>
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
        {meta.offensive && (
          <p className="callout callout-legal">
            <strong>Cadre éthique : </strong>ce laboratoire simule une technique offensive sur une application fictive exécutée
            localement. Reproduire ces manipulations sur un système réel sans autorisation écrite de son propriétaire est illégal.
          </p>
        )}
        <h2 className="h3">Contexte</h2>
        <p>{meta.context}</p>
        <h2 className="h3">Objectif</h2>
        <p>{meta.objective}</p>
        <h2 className="h3">Consignes et étapes</h2>
        <ol>{meta.steps.map((s) => <li key={s}>{s}</li>)}</ol>
      </header>

      <section aria-labelledby="ws-h">
        <h2 id="ws-h">Espace de travail</h2>
        {Component ? (
          <Suspense fallback={<p role="status">Chargement du laboratoire…</p>}>
            <Component />
          </Suspense>
        ) : (
          <p className="error">Composant introuvable.</p>
        )}
      </section>

      <section aria-labelledby="lq-h">
        <h2 id="lq-h">Questions et validation</h2>
        {body ? (
          <Quiz
            key={round}
            sessionKey={`${meta.id}-${round}`}
            questions={body.questions}
            skillLabels={skillLabels}
            loadCorrections={async () => {
              const c = await loadLabCorrections(meta.id);
              if (!c) throw new Error('corrections absentes');
              setDebrief(c.debrief);
              return c.questions;
            }}
            onFinished={(score, d) => recordLabAttempt(meta.id, score, d)}
            retryLabel="Recommencer le questionnaire"
            onRetry={() => {
              setDebrief(null);
              setRound((r) => r + 1);
            }}
          />
        ) : loadError ? (
          <p role="alert" className="error">Les questions n’ont pas pu être chargées. Si vous êtes hors ligne, reconnectez-vous une fois pour les mettre en cache.</p>
        ) : (
          <p role="status">Chargement…</p>
        )}
      </section>

      {debrief && (
        <section className="panel" aria-labelledby="debrief-h">
          <h2 id="debrief-h">Correction, explications et mesures défensives</h2>
          <Blocks blocks={debrief} />
        </section>
      )}
    </article>
  );
}
