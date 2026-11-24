import { layout } from './layout';
import { common } from './common';
import { home } from './home';
import { settings } from './settings';
import { content } from './content';
import { catalog } from './catalog';
import { misc } from './misc';
import { course } from './course';
import { quiz } from './quiz';
import { labs } from './labs';
import { paths } from './paths';
import { gamification } from './gamification';
import { profile } from './profile';
import { browse } from './browse';
import { ui } from './ui';
import { docs } from './docs';
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
  ...labs,
  ...paths,
  ...gamification,
  ...profile,
  ...browse,
  ...ui,
  ...docs,
};
