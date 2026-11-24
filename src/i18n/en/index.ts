import { layout } from './layout';
import { common } from './common';
import { home } from './home';
import { settings } from './settings';
import { content } from './content';
import { catalog } from './catalog';
import { misc } from './misc';
import { course } from './course';
import { quiz } from './quiz';
import type { MsgKey } from '../fr';

export const en: Record<MsgKey, string> = {
  ...layout,
  ...common,
  ...home,
  ...settings,
  ...content,
  ...catalog,
  ...misc,
  ...course,
  ...quiz,
};
