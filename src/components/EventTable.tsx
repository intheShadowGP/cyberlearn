import { useId, useMemo, useState } from 'react';
import { useI18n } from '../i18n';

export interface Column<T> {
  key: keyof T & string;
  label: string;
  mono?: boolean;
}

/**
 * Tableau de journal filtrable, réutilisé par plusieurs laboratoires
 * (événements Windows, journaux d'authentification, captures réseau).
 */
export function EventTable<T extends { id: number }>({
  rows,
  columns,
  caption,
  filterKeys,
  maxRows = 300,
}: {
  rows: T[];
  columns: Column<T>[];
  caption: string;
  filterKeys: (keyof T & string)[];
  maxRows?: number;
}) {
  const { t, tp } = useI18n();
  const [text, setText] = useState('');
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const textId = useId();
  const baseId = useId();

  const options = useMemo(
    () => Object.fromEntries(filterKeys.map((k) => [k, [...new Set(rows.map((r) => String(r[k])))].sort()])),
    [rows, filterKeys],
  );

  const q = text.trim().toLowerCase();
  const shown = rows.filter(
    (r) =>
      filterKeys.every((k) => !filters[k] || String(r[k]) === filters[k]) &&
      (!q || columns.some((c) => String(r[c.key]).toLowerCase().includes(q))),
  );

  const toggle = (id: number) =>
    setSelected((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });

  return (
    <div>
      <div className="filters">
        <div>
          <label htmlFor={textId}>{t('events.fulltext')}</label>
          <input id={textId} className="input" value={text} maxLength={80} onChange={(e) => setText(e.target.value)} />
        </div>
        {filterKeys.map((k) => {
          const col = columns.find((c) => c.key === k);
          const id = `${baseId}-${k}`;
          return (
            <div key={k}>
              <label htmlFor={id}>{col?.label ?? k}</label>
              <select id={id} className="input" value={filters[k] ?? ''} onChange={(e) => setFilters((f) => ({ ...f, [k]: e.target.value }))}>
                <option value="">{t('events.all')}</option>
                {(options[k] ?? []).map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
          );
        })}
      </div>
      <p className="muted" role="status">
        {tp('events.shown', shown.length, { total: rows.length })}
        {selected.size > 0 && tp('events.marked', selected.size)}
      </p>
      <div className="table-wrap">
        <table>
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr>
              <th scope="col"><span className="sr-only">{t('events.mark')}</span></th>
              {columns.map((c) => <th key={c.key} scope="col">{c.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {shown.slice(0, maxRows).map((r) => (
              <tr key={r.id} className={`log-row ${selected.has(r.id) ? 'selected' : ''}`}>
                <td>
                  <input type="checkbox" aria-label={t('events.markRow', { id: r.id })} checked={selected.has(r.id)} onChange={() => toggle(r.id)} />
                </td>
                {columns.map((c) => (
                  <td key={c.key} className={c.mono ? 'mono' : undefined}>{String(r[c.key])}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
