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
    'couverture-detection': {
      blocks: [
        {
          t: 'table',
          head: ['Technique', 'État', 'Source nécessaire'],
          rows: [
            ['A. Hameçonnage avec pièce jointe', 'Non couverte', 'Journaux de la messagerie ou de la passerelle de messagerie'],
            ['B. PowerShell lancé par Office', 'Non couverte', 'Télémétrie EDR ou Sysmon des postes (création de processus et parent)'],
            ['C. Création d’un compte local', 'Non couverte', 'Journal Sécurité des postes (événement 4720)'],
            ['D. Vol d’identifiants dans LSASS', 'Non couverte', 'EDR ou Sysmon (accès au processus LSASS)'],
            ['E. Mouvement latéral par partage administratif', 'Partielle', 'Les contrôleurs de domaine voient les authentifications ; il faut aussi le journal Sécurité des serveurs ou l’EDR'],
            ['F. Exfiltration vers un stockage en ligne', 'Partielle', 'Le pare-feu voit les volumes ; DNS et proxy donnent les destinations'],
          ],
        },
        { t: 'list', items: ['**Priorité 1 : télémétrie des postes (EDR ou Sysmon et journal Sécurité)** : elle débloque B, C, D et renforce E.', '**Priorité 2 : messagerie** : elle couvre A, la porte d’entrée la plus fréquente.', '**Priorité 3 : DNS et proxy web** : ils complètent F et apportent un contexte utile à de nombreuses alertes.'] },
        { t: 'p', text: 'Ordre justifié par le nombre de techniques débloquées et par leur place dans la chaîne d’attaque. Écrire des règles avant d’avoir ces sources n’apporterait rien : les règles ne se déclencheraient jamais.' },
        { t: 'list', items: ['**Indicateur 1** : part des techniques prioritaires ATT&CK couvertes par une source collectée et une règle testée (ici 0 sur 4 pleinement couvertes, 2 partielles).', '**Indicateur 2** : nombre de sources silencieuses détectées et délai de rétablissement de la collecte.'] },
      ],
    },
  },
};
