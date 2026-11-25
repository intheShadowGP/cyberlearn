import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'd-windows-fondamentaux',
  practice: {
    'lire-comptes': {
      blocks: [
        {
          t: 'table',
          head: ['Constat', 'Pourquoi c’est inquiétant'],
          rows: [
            ['Quatre comptes dans le groupe Administrateurs, dont un stagiaire et un prestataire', 'Un stagiaire n’a pas besoin des droits d’administration : une erreur ou un compte compromis donne le contrôle complet du poste'],
            ['`support-externe` administrateur permanent', 'Un compte extérieur aux droits permanents est une porte d’entrée durable ; ses accès doivent être limités dans le temps et tracés'],
            ['Mot de passe du stagiaire qui n’expire jamais, inchangé depuis 2021', 'Un mot de passe ancien a pu être divulgué ou réutilisé ; rien n’impose son renouvellement'],
            ['Compte actif du stagiaire', 'Si le stage est terminé, le compte doit être désactivé'],
          ],
        },
        { t: 'list', items: ['Organisation recommandée : un compte standard par personne ; un seul compte d’administration distinct, utilisé seulement pour administrer ; accès du prestataire accordé pour la durée d’une intervention, puis retiré.', 'Vérifications : relire `net localgroup Administrateurs`, vérifier que `stagiaire` est désactivé ou standard, contrôler l’activité récente (événements 4624 et 4672) et consigner la liste des administrateurs pour la revue suivante.'] },
        { t: 'callout', kind: 'tip', text: 'Le principe du moindre privilège s’applique aux comptes comme aux fichiers : chacun a les droits dont il a besoin, pour la durée dont il a besoin.' },
      ],
    },
    'poste-neuf': {
      blocks: [
        { t: 'list', ordered: true, items: ['Comptes : créer un compte standard pour la personne et un compte administrateur distinct pour la préparation ; mot de passe long et unique, Windows Hello avec PIN, authentification multifacteur sur le compte en ligne.', 'Mises à jour : installer toutes les mises à jour disponibles et laisser les mises à jour automatiques activées.', 'Protections : vérifier que Defender et le pare-feu sont actifs sur les trois profils, que SmartScreen est actif, que le contrôle de compte est au niveau par défaut.', 'Données : activer BitLocker (ou le chiffrement de l’appareil) et conserver la clé de récupération hors du portable ; configurer l’Historique des fichiers ou une sauvegarde en ligne, et en tester la restauration.', 'Remise : consigner la configuration et rappeler à la personne qu’elle ne désactive pas les protections et qu’elle signale toute perte immédiatement.'] },
        { t: 'callout', kind: 'info', text: 'Le chiffrement protège un portable volé éteint ; la sauvegarde protège d’une panne ou d’un rançongiciel. L’un ne remplace pas l’autre.' },
      ],
    },
    'serie-echecs': {
      blocks: [
        { t: 'p', text: 'Trente-huit échecs en trois minutes depuis une même adresse, puis un succès de type 3 (réseau) : quelqu’un a **deviné le mot de passe** du compte `comptable`, probablement par essais automatisés. Quelques secondes plus tard, un `powershell.exe` est lancé par `services.exe` : l’attaquant a installé ou démarré un service qui exécute du code. Le poste doit être considéré comme **compromis**.' },
        { t: 'list', items: ['Premières actions : isoler le poste du réseau sans l’éteindre, réinitialiser le mot de passe du compte (et de tout compte qui l’utilisait ailleurs), conserver les journaux et rechercher le service créé (événement 7045) et la persistance.', 'Identifier la source `10.0.4.77` : est-ce un poste du réseau interne ? Il faut l’isoler aussi, car il est lui-même peut-être compromis ou à l’origine de l’attaque.'] },
        { t: 'list', items: ['Prévention : verrouillage du compte après quelques échecs, mots de passe longs, authentification multifacteur, limitation des accès réseau au poste (pare-feu), désactivation des services d’accès à distance inutiles.', 'Détection : alerte sur un nombre élevé de 4625 suivi d’un 4624, et collecte des journaux vers un serveur.'] },
      ],
    },
  },
};
