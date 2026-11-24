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

/** Source de vérité des messages : le français. Un fichier par zone fonctionnelle. */
export const fr = {
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
} as const;

export type MsgKey = keyof typeof fr;
export type PluralKey = MsgKey extends infer K ? (K extends `${infer B}_one` ? B : never) : never;
