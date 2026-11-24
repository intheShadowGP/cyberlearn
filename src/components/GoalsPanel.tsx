import { useId, useState } from 'react';
import { deleteGoal, saveGoal } from '../lib/progress';
import { useSnapshot } from '../lib/useSnapshot';
import { useI18n } from '../i18n';

function newId(): string {
  const b = new Uint8Array(8);
  crypto.getRandomValues(b);
  return 'g-' + Array.from(b, (x) => x.toString(16).padStart(2, '0')).join('');
}

/** Objectifs personnels, stockés localement. */
export function GoalsPanel() {
  const { t } = useI18n();
  const { data } = useSnapshot();
  const [text, setText] = useState('');
  const inputId = useId();
  const goals = [...data.goals].sort((a, b) => Number(a.done) - Number(b.done) || b.createdAt - a.createdAt);

  return (
    <section className="panel" aria-labelledby="goals-title">
      <h2 id="goals-title">{t('goals.title')}</h2>
      <form
        className="form-row"
        onSubmit={(e) => {
          e.preventDefault();
          const v = text.trim().slice(0, 300);
          if (!v) return;
          void saveGoal({ id: newId(), text: v, done: false, createdAt: Date.now() });
          setText('');
        }}
      >
        <label htmlFor={inputId} className="sr-only">{t('goals.new')}</label>
        <input id={inputId} className="input" value={text} maxLength={300} placeholder={t('goals.placeholder')} onChange={(e) => setText(e.target.value)} />
        <button type="submit" className="btn">{t('goals.add')}</button>
      </form>
      {goals.length === 0 ? (
        <p className="muted">{t('goals.empty')}</p>
      ) : (
        <ul className="goal-list">
          {goals.map((g) => (
            <li key={g.id} className={g.done ? 'done' : ''}>
              <label>
                <input type="checkbox" checked={g.done} onChange={(e) => void saveGoal({ ...g, done: e.target.checked })} />
                <span>{g.text}</span>
              </label>
              <button type="button" className="btn btn-small btn-ghost" onClick={() => void deleteGoal(g.id)} aria-label={t('goals.deleteAria', { text: g.text })}>
                {t('goals.delete')}
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
