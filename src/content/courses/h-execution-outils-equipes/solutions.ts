import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'h-execution-outils-equipes',
  practice: {
    'outil-defense': {
      blocks: [
        {
          t: 'table',
          head: ['#', 'Faiblesse', 'Défense', 'Module'],
          rows: [
            ['1', 'Contrôle d’accès défaillant (IDOR) : l’objet n’appartenant pas à l’utilisateur est servi', 'Vérifier côté serveur, à chaque requête, que l’objet appartient à l’utilisateur', 'F (contrôle d’accès)'],
            ['2', 'Injection SQL', 'Requêtes paramétrées', 'F (injections)'],
            ['3', 'Authentification sans limitation des tentatives', 'Limitation, verrouillage, MFA', 'F / O (authentification)'],
            ['4', 'Mots de passe faibles ou mal hachés', 'Hachage lent et salé, politiques robustes, MFA', 'E (hachage)'],
          ],
        },
        { t: 'p', text: 'La lecture défensive d’un rapport consiste précisément à transformer chaque constat en correctif rattaché au bon domaine.' },
      ],
    },
    'purple-team': {
      blocks: [
        { t: 'p', text: 'La démarche Purple Team fait travailler ensemble l’équipe offensive et le SOC : plutôt que de livrer un rapport final, on rejoue chaque technique utilisée pour vérifier si elle est détectée, et on crée ou ajuste les détections jusqu’à ce qu’elle le soit. Chaque technique non détectée devient une règle à écrire.' },
        {
          t: 'table',
          head: ['Technique non détectée', 'Détection à créer'],
          rows: [
            ['Accès initial (par exemple Office → interpréteur)', 'Règle sur la chaîne de processus, journalisation de l’exécution (modules D et I)'],
            ['Élévation de privilèges', 'Alerte sur les ajouts aux groupes privilégiés, surveillance des comptes (modules D et O)'],
            ['Déplacement latéral (pivoting)', 'Détection des connexions inter-segments inhabituelles, EDR (modules B et I)'],
          ],
        },
        { t: 'p', text: 'Durcissement complémentaire : segmentation et micro-segmentation, moindre privilège, correctifs à jour, MFA, et réduction de la surface exposée. Le résultat de l’exercice est une liste de détections ajoutées et de mesures appliquées, rattachées à MITRE ATT&CK pour suivre la couverture.' },
      ],
    },
    'exercice-purple': {
      blocks: [
        {
          t: 'table',
          head: ['Étape du scénario', 'Technique ATT&CK (famille)', 'Ce qui est simulé', 'Détection attendue'],
          rows: [
            ['Accès initial', 'Hameçonnage avec pièce jointe', 'Courriel de test avec un document inoffensif', 'Alerte passerelle de messagerie, exécution depuis la suite bureautique'],
            ['Exécution', 'Interpréteur de commandes et de scripts', 'Lancement d’un interpréteur par le document', 'Règle sur la chaîne de processus (EDR)'],
            ['Vol d’identifiants', 'Accès aux identifiants du système', 'Lecture simulée sur un poste de test', 'Alerte sur l’accès à la mémoire du processus d’authentification'],
            ['Déplacement latéral', 'Services distants', 'Connexion vers un serveur de fichiers de test', 'Connexions inter-segments inhabituelles, journaux d’authentification'],
            ['Inhibition de la restauration', 'Suppression des copies et sauvegardes', 'Tentative sur des sauvegardes factices', 'Alerte sur les commandes de suppression de copies'],
            ['Impact', 'Chiffrement de données', 'Chiffrement d’un dossier de fichiers factices uniquement', 'Détection du chiffrement massif, confinement du poste'],
          ],
        },
        { t: 'list', items: ['**Exclus** : vraies données, services de production, déni de service, tout ce qui n’est pas dans les RoE.', '**Fiche par technique** : résultat (détectée ou non), délai de détection et de réponse, règle créée ou ajustée, propriétaire, date de retest.', '**Indicateurs globaux** : taux de détection, délais médians, couverture des techniques du scénario.', '**Suivi** : actions correctives (règles, durcissement, sauvegardes isolées), retest sous 30 jours, présentation à la direction avec l’évolution des indicateurs.'] },
        { t: 'p', text: 'Les sauvegardes isolées et immuables, le moindre privilège et la segmentation sont les mesures de durcissement qui limitent réellement l’impact d’un rançongiciel : la détection gagne du temps, elles évitent la catastrophe.' },
      ],
    },
  },
};
