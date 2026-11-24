import type { misc as frMisc } from '../fr/misc';

export const misc: Record<keyof typeof frMisc, string> = {
  'nf.document': 'Not found',
  'nf.title.page': 'This page does not exist',
  'nf.title.course': 'This course does not exist',
  'nf.title.exam': 'This assessment does not exist',
  'nf.title.lab': 'This lab does not exist',
  'nf.title.module': 'This discipline does not exist',
  'nf.title.path': 'This learning path does not exist',
  'nf.title.scenario': 'This exercise does not exist',
  'nf.text': 'The link may be wrong, or the content may have been renamed.',
  'nf.home': 'Back to home',
  'nf.courses': 'See the courses',
};
