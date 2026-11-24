import { layout } from './layout';

/** Source de vérité des messages : le français. Un fichier par zone fonctionnelle. */
export const fr = {
  ...layout,
} as const;

export type MsgKey = keyof typeof fr;
export type PluralKey = MsgKey extends infer K ? (K extends `${infer B}_one` ? B : never) : never;
