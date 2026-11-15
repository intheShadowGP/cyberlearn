import { useId, useState } from 'react';
import { deleteGoal, saveGoal } from '../lib/progress';
import { useSnapshot } from '../lib/useSnapshot';

function newId(): string {
  const b = new Uint8Array(8);
  crypto.getRandomValues(b);
  return 'g-' + Array.from(b, (x) => x.toString(16).padStart(2, '0')).join('');
}

/** Objectifs personnels, stockés localement. */
export function GoalsPanel() {
  const { data } = useSnapshot();
  const [text, setText] = useState('');
  const inputId = useId();
  const goals = [...data.goals].sort((a, b) => Number(a.done) - Number(b.done) || b.createdAt - a.createdAt);

  return (
    <section className="panel" aria-labelledby="goals-title">
      <h2 id="goals-title">Objectifs personnels</h2>
      <form
        className="form-row"
        onSubmit={(e) => {
          e.preventDefault();
          const t = text.trim().slice(0, 300);
          if (!t) return;
          void saveGoal({ id: newId(), text: t, done: false, createdAt: Date.now() });
          setText('');
        }}
      >
        <label htmlFor={inputId} className="sr-only">Nouvel objectif</label>
        <input id={inputId} className="input" value={text} maxLength={300} placeholder="Ex. : valider le module Réseaux avant la fin du mois" onChange={(e) => setText(e.target.value)} />
        <button type="submit" className="btn">Ajouter</button>
      </form>
      {goals.length === 0 ? (
        <p className="muted">Fixez-vous un objectif concret et daté : c’est l’un des meilleurs prédicteurs de réussite.</p>
      ) : (
        <ul className="goal-list">
          {goals.map((g) => (
            <li key={g.id} className={g.done ? 'done' : ''}>
              <label>
                <input type="checkbox" checked={g.done} onChange={(e) => void saveGoal({ ...g, done: e.target.checked })} />
                <span>{g.text}</span>
              </label>
              <button type="button" className="btn btn-small btn-ghost" onClick={() => void deleteGoal(g.id)} aria-label={`Supprimer l’objectif : ${g.text}`}>
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
