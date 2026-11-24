import { type Level } from '../content/types';
import { useI18n, type MsgKey } from '../i18n';

export function LevelBadge({ level }: { level: Level }) {
  const { t } = useI18n();
  return (
    <span className={`badge level-${level}`}>
      <span aria-hidden="true">{'▮'.repeat(level)}{'▯'.repeat(4 - level)}</span> {t('level.badge', { n: level, name: t(`level.${level}` as MsgKey) })}
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
  const { t } = useI18n();
  const map = {
    none: [t('status.none'), 'badge'],
    started: [t('status.started'), 'badge badge-warn'],
    validated: [best != null ? t('status.validatedPct', { pct: best }) : t('status.validated'), 'badge badge-ok'],
    locked: [t('status.locked'), 'badge badge-muted'],
  } as const;
  const [label, cls] = map[status];
  return <span className={cls}>{label}</span>;
}
