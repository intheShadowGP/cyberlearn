import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  id: 'password-strength-lab',
  title: 'Robustesse des mots de passe et effet du hachage (initiation)',
  category: 'crypto',
  level: 1,
  durationMin: 25,
  module: 'E',
  offensive: false,
  context:
    'Vous découvrez pourquoi certains mots de passe tombent en quelques secondes et d’autres résistent, et comment la façon dont le service les stocke (hachage rapide ou hachage lent) change tout. Un estimateur vous montre, pour chaque mot de passe que vous saisissez, la taille du jeu de caractères, l’entropie et le temps moyen de cassage hors ligne selon le stockage.',
  objective: 'Comprendre ce qui rend un mot de passe robuste et pourquoi un hachage lent et salé protège les comptes, afin de choisir de bonnes pratiques.',
  relatedCourses: ['e-hachage-mots-de-passe'],
  steps: [
    'Saisissez quelques mots de passe (un mot courant, un mot long, une phrase de passe) et observez l’entropie estimée.',
    'Comparez le temps de cassage affiché pour un « hachage rapide » et pour un « hachage lent ».',
    'Repérez ce que signale l’estimateur quand le mot de passe figure dans une liste de mots très répandus.',
    'Répondez aux questions, puis lisez le débriefing sur les bonnes pratiques et l’intérêt de la MFA.',
  ],
};
