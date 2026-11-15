import { LEVEL_LABELS, type Level } from '../content/types';

export function LevelBadge({ level }: { level: Level }) {
  return (
    <span className={`badge level-${level}`}>
      <span aria-hidden="true">{'▮'.repeat(level)}{'▯'.repeat(4 - level)}</span> Niveau {level} · {LEVEL_LABELS[level]}
    </span>
  );
}

export function ProgressBar({ value, max, label }: { value: number; max: number; label: string }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div className="progress-bar" role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct} aria-valuetext={`${pct} %`}>
      <span style={{ width: `${pct}%` }} />
    </div>
  );
}

export function CourseStatus({ status, best }: { status: 'none' | 'started' | 'validated' | 'locked'; best?: number | null }) {
  const map = {
    none: ['Non commencé', 'badge'],
    started: ['En cours', 'badge badge-warn'],
    validated: [`Validé${best != null ? ` · ${best} %` : ''}`, 'badge badge-ok'],
    locked: ['Prérequis à valider', 'badge badge-muted'],
  } as const;
  const [label, cls] = map[status];
  return <span className={cls}>{label}</span>;
}
