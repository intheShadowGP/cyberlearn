import { Link } from 'react-router-dom';
import type { CourseMeta } from '../content/types';
import type { CourseProgress } from '../lib/progress';
import { CourseStatus, LevelBadge } from './Badges';

export function CourseCard({ course, progress, locked }: { course: CourseMeta; progress?: CourseProgress | undefined; locked: boolean }) {
  const status = progress?.status === 'validated' ? 'validated' : locked ? 'locked' : progress ? 'started' : 'none';
  return (
    <article className="card course-card">
      <p className="eyebrow">Module {course.module}</p>
      <h3>
        <Link to={`/cours/${course.id}`} className="card-link">
          {course.title}
        </Link>
      </h3>
      <p className="muted">{course.summary}</p>
      <div className="card-foot">
        <LevelBadge level={course.level} />
        <span className="muted">{course.durationMin} min</span>
        <CourseStatus status={status} best={progress?.bestPercent ?? null} />
      </div>
    </article>
  );
}
