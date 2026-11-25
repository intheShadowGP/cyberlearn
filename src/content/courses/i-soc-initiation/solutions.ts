import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'i-soc-initiation',
  practice: {
    'lire-journal': {
      blocks: [
        {
          t: 'table',
          head: ['Ligne', 'Quand', 'Qui', 'D’où', 'Quoi'],
          rows: [
            ['1', '08:02', '`backup`', '`10.0.0.15` (interne)', 'Connexion par clé, probablement la sauvegarde habituelle'],
            ['2 à 4', '08:30', '`root`', '`198.51.100.77` (externe)', 'Trois échecs en sept secondes'],
            ['5', '08:31', '`admin`', '`198.51.100.77`', 'Échec sur un autre compte depuis la même adresse'],
            ['6', '08:31', '`admin`', '`198.51.100.77`', '**Connexion réussie** trois secondes après'],
          ],
        },
        { t: 'p', text: 'La ligne qui inquiète le plus est la **dernière** : la même adresse externe a tenté plusieurs comptes (`root`, puis `admin`) en quelques secondes et obtient une connexion réussie. Cela évoque des essais de mots de passe qui ont abouti.' },
        { t: 'list', items: ['**Confinement** : désactiver ou verrouiller le compte `admin`, bloquer l’adresse à l’entrée du réseau, fermer la session ouverte.', '**Vérifications** : ce qui s’est passé après la connexion (commandes, fichiers, nouvelles connexions), d’autres tentatives depuis la même adresse sur d’autres serveurs, la date de dernier changement du mot de passe.', '**Ensuite** : réinitialiser le mot de passe, activer une authentification plus forte et limiter l’accès SSH aux adresses nécessaires.'] },
      ],
    },
    'qualifier-alerte': {
      blocks: [
        { t: 'p', text: 'L’alerte est plutôt un **faux positif** : les échecs viennent de l’adresse habituelle de l’utilisateur, depuis son ordinateur, juste après un changement de mot de passe (un ancien mot de passe resté enregistré peut générer plusieurs échecs).' },
        { t: 'code', lang: 'text', caption: 'Phrase de clôture', code: 'Alerte close (faux positif) : 11 échecs sur c.martin entre 13:58 et 14:00, depuis l’adresse habituelle du télétravail et le poste connu. Mot de passe changé le matin même. Aucune connexion réussie depuis une autre source. Aucun autre signe. Règle à régler.' },
        { t: 'list', items: ['**Amélioration** : tenir compte du contexte (adresse et poste habituels, changement de mot de passe récent) ou relever le seuil pour ce profil.', '**Ne pas désactiver la règle** : elle protège contre des attaques réelles.', '**Escalade** si, au contraire, une connexion réussie venait d’une autre source ou si les échecs se répétaient.'] },
      ],
    },
    'premiers-reflexes': {
      blocks: [
        { t: 'list', items: ['**À faire** : ne plus utiliser l’ordinateur, le **débrancher du réseau** (câble, Wi-Fi) sans l’éteindre, ne pas payer, noter l’heure et le message affiché, prendre une photo de l’écran.', '**À ne pas faire** : ne pas rallumer, ne pas essayer de « réparer » les fichiers, ne pas brancher de clé ou de disque dessus, ne pas se connecter à d’autres comptes depuis cette machine.', '**Prévenir** : le responsable de la sécurité ou le SOC, puis la hiérarchie selon la procédure. Si une messagerie est utilisée, privilégier le téléphone pour les informations sensibles.'] },
        { t: 'p', text: '**Notes** : heure d’appel, nom du collègue, machine, message affiché, actions déjà faites (extinction puis redémarrage), documents sensibles éventuellement présents.' },
        { t: 'list', items: ['**Confinement possible** : isolement réseau via l’EDR, désactivation du compte, vérification des partages et autres postes touchés, protection des sauvegardes hors ligne.', '**Le redémarrage déjà fait** peut avoir effacé des traces en mémoire : on l’indique dans le rapport.'] },
      ],
    },
  },
};
