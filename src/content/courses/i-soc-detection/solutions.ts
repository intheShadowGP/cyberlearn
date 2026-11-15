import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'i-soc-detection',
  practice: {
    'chasse-ssh': {
      blocks: [
        { t: 'p', text: 'La correction détaillée (adresses, compte compromis, chronologie) figure dans le débriefing du laboratoire « Chasse dans auth.log ».' },
        { t: 'p', text: 'Démarche : compter les échecs par adresse source, puis rechercher un « Accepted » provenant de l’une des adresses en tête du classement.' },
      ],
    },
    'sigma-ecrire': {
      blocks: [
        { t: 'code', lang: 'yaml', code: "title: Ajout d'un compte au groupe Administrateurs local\nlogsource:\n  product: windows\n  service: security\ndetection:\n  selection:\n    EventID: 4732\n    TargetSid: 'S-1-5-32-544'   # groupe BUILTIN\\Administrateurs\n  condition: selection\nlevel: high\ntags:\n  - attack.persistence\n  - attack.t1098      # Account Manipulation\n  - attack.t1136.001  # Create Account: Local Account" },
        { t: 'p', text: 'Le SID `S-1-5-32-544` est préférable au nom du groupe, qui varie selon la langue du système. La corrélation avec un 4720 récent sur le même compte peut relever le niveau à « critique ».' },
      ],
    },
  },
};
