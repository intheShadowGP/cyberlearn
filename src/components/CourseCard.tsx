import { Link } from 'react-router-dom';
import type { CourseMeta } from '../content/types';
import type { CourseProgress } from '../lib/progress';
import { CourseStatus, LevelBadge } from './Badges';
import { getCourse } from '../content/registry';
import { useI18n } from '../i18n';

/** `course` doit déjà être localisé (getCourses(lang)) : le composant localise seulement les prérequis. */
export function CourseCard({ course, progress, locked }: { course: CourseMeta; progress?: CourseProgress | undefined; locked: boolean }) {
  const { t, lang } = useI18n();
  const status = progress?.status === 'validated' ? 'validated' : locked ? 'locked' : progress ? 'started' : 'none';
  return (
    <article className="card course-card">
      <p className="eyebrow">{t('course.module', { id: course.module })}</p>
      <h3>
        <Link to={`/cours/${course.id}`} className="card-link">
          {course.title}
        </Link>
      </h3>
      <p className="muted">{course.summary}</p>
      {course.prerequisites.length > 0 && (
        <p className="card-prereq">
          {t('course.prereq')} {course.prerequisites.map((p) => getCourse(p, lang)?.title ?? p).join(' · ')}
        </p>
      )}
      <div className="card-foot">
        <LevelBadge level={course.level} />
        <span className="muted">{t('course.minutes', { n: course.durationMin })}</span>
        <CourseStatus status={status} best={progress?.bestPercent ?? null} />
      </div>
    </article>
  );
}
