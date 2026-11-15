import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'e-hachage-mots-de-passe',
  practice: {
    'labo-hash': {
      blocks: [
        { t: 'p', text: 'Un seul caractère modifié change environ 128 des 256 bits de l’empreinte. Le temps de PBKDF2 croît linéairement avec les itérations : × 600 entre 1 000 et 600 000.' },
        { t: 'p', text: 'Exemple d’ordre de grandeur : si 600 000 itérations prennent 300 ms dans votre navigateur, un dictionnaire de 10 millions de mots prend environ 35 jours sur ce matériel, contre environ 1 h 20 à 1 000 itérations. Un GPU dédié est plus rapide, mais le rapport reste le même : chaque itération supplémentaire coûte à l’attaquant.' },
      ],
    },
    'revue-stockage': {
      blocks: [
        { t: 'list', items: ['**MD5** : trop rapide et cassé.', '**Sel global** codé en dur : identique pour tous, connu de quiconque lit le code.', '**Comparaison `==`** : non constante en temps.', '**`Math.random()`** pour un jeton de réinitialisation : prévisible et trop court.'] },
        { t: 'code', lang: 'javascript', code: "import argon2 from 'argon2';\nimport { randomBytes } from 'node:crypto';\n\nexport const hashPassword = (pw) => argon2.hash(pw, { type: argon2.argon2id });\nexport const check = (pw, stored) => argon2.verify(stored, pw); // temps constant\nexport const resetToken = () => randomBytes(32).toString('base64url');" },
        { t: 'p', text: '**Migration** : envelopper immédiatement chaque ancienne empreinte (`argon2id(md5(sel + pw))`, marquée comme « héritée »). À la connexion suivante, vérifier par cette chaîne, puis re-hacher le mot de passe en Argon2id direct. Toute la base est protégée dès le premier jour.' },
      ],
    },
  },
};
