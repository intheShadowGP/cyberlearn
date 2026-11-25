import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'i-soc-initiation',
  lesson: {
    intro:
      'Aucun système n’est inattaquable. La défense moderne repose donc sur deux idées : **voir** rapidement ce qui se passe, et **réagir** correctement. Le centre de supervision de la sécurité (SOC) rassemble les personnes et les outils qui font ce travail. Ce cours d’initiation présente leur rôle, les journaux sur lesquels ils s’appuient, les outils de base, la façon d’aborder une alerte et les premiers réflexes d’un incident.',
    sections: [
      {
        id: 'role',
        title: 'Défendre : le rôle d’un SOC',
        blocks: [
          { t: 'p', text: 'La **blue team** est l’ensemble des équipes qui défendent un système d’information. Le **SOC** (Security Operations Center) en est le centre opérationnel : il surveille, détecte les comportements anormaux, qualifie les alertes et coordonne la réponse aux incidents.' },
          {
            t: 'table',
            head: ['Niveau', 'Rôle', 'Exemple de tâche'],
            rows: [
              ['**N1**', 'Triage', 'Lire une alerte, la qualifier, la clore avec justification ou l’escalader'],
              ['**N2**', 'Investigation', 'Analyser en profondeur, retrouver le périmètre et la chronologie'],
              ['**N3**', 'Expertise', 'Chasse aux menaces, ingénierie de détection, analyse avancée'],
            ],
          },
          { t: 'list', items: ['**Surveiller** : collecter et regarder ce qui se passe, souvent 24 h sur 24.', '**Détecter** : repérer ce qui sort de l’ordinaire ou correspond à une attaque connue.', '**Répondre** : limiter les dégâts, remettre en service, puis tirer les leçons.', '**Améliorer** : chaque incident doit produire une meilleure détection.'] },
          { t: 'callout', kind: 'key', text: 'Ce qui compte, c’est le **délai** entre le début d’une intrusion et sa détection. Plus il est court, moins l’attaquant a le temps de nuire.' },
        ],
      },
      {
        id: 'journaux',
        title: 'Les journaux : la mémoire du système',
        blocks: [
          { t: 'p', text: 'Un **journal** (log) est un fichier ou un flux qui enregistre des **événements** : une connexion, un échec de mot de passe, un fichier créé. Sans journaux, il n’y a rien à analyser : on ne peut ni détecter, ni comprendre après coup ce qui s’est passé.' },
          { t: 'def', term: 'Événement', text: 'Fait précis enregistré par un système : ouverture de session, échec de mot de passe, création de processus. Un journal est une suite d’événements datés.' },
          { t: 'code', lang: 'text', caption: 'Extrait d’un journal d’authentification SSH (fictif)', code: 'Mar 12 03:41:07 srv01 sshd[2211]: Failed password for admin from 203.0.113.50 port 51822 ssh2\nMar 12 03:41:09 srv01 sshd[2211]: Failed password for admin from 203.0.113.50 port 51822 ssh2\nMar 12 03:41:12 srv01 sshd[2214]: Accepted password for admin from 203.0.113.50 port 51833 ssh2' },
          {
            t: 'table',
            head: ['Question', 'Réponse dans l’exemple'],
            rows: [
              ['**Quand ?**', 'Le 12 mars à 03:41'],
              ['**Où ?**', 'Sur le serveur `srv01`, service `sshd`'],
              ['**Qui ?**', 'Le compte `admin`'],
              ['**D’où ?**', 'L’adresse `203.0.113.50`'],
              ['**Quoi ?**', 'Deux échecs, puis une connexion réussie en trois secondes'],
            ],
          },
          { t: 'list', items: ['**Horodatage** : sans heure fiable, on ne peut pas reconstituer la chronologie ; les horloges des machines doivent être synchronisées.', '**Sources variées** : système d’exploitation, pare-feu, serveur web, annuaire, applications, messagerie.', '**Conservation** : les journaux doivent être gardés assez longtemps pour enquêter après coup.', '**Protection** : un attaquant qui efface les journaux cache ses traces ; on les envoie donc aussi vers un autre système.'] },
          { t: 'callout', kind: 'info', text: 'Deux échecs suivis d’un succès en quelques secondes depuis une adresse extérieure peuvent évoquer des essais de mots de passe réussis. Cela ne prouve rien seul : il faut regarder le contexte.' },
        ],
      },
      {
        id: 'outils',
        title: 'SIEM, EDR et règles de détection',
        blocks: [
          { t: 'p', text: 'Face à des millions d’événements par jour, personne ne lit les journaux à la main. Des outils les rassemblent et repèrent ce qui mérite l’attention.' },
          {
            t: 'table',
            head: ['Outil', 'Rôle en une phrase'],
            rows: [
              ['**SIEM**', 'Collecte les journaux de nombreuses sources, les normalise, les conserve, les croise et génère des alertes'],
              ['**EDR**', 'Agent installé sur les postes et serveurs : observe finement l’activité et permet d’agir à distance (isoler une machine)'],
              ['**IDS / NDR**', 'Observe le trafic réseau à la recherche de comportements suspects'],
              ['**SOAR**', 'Automatise des actions répétitives (enrichir une alerte, ouvrir un ticket) grâce à des scénarios appelés playbooks'],
            ],
          },
          { t: 'def', term: 'Règle de détection', text: 'Condition écrite à l’avance qui déclenche une alerte lorsque des événements y correspondent, par exemple : « plus de cinq échecs de connexion sur un même compte en deux minutes ». Une bonne règle équilibre deux risques : trop d’alertes inutiles, ou des attaques non vues.' },
          { t: 'callout', kind: 'warn', text: 'Un outil ne détecte que ce qu’il reçoit. Si une source de journaux n’est pas collectée, l’absence d’alerte ne prouve pas l’absence d’attaque.' },
        ],
      },
      {
        id: 'alerte',
        title: 'Premiers pas face à une alerte',
        blocks: [
          { t: 'p', text: 'Une **alerte** est un signal qu’une règle juge digne d’attention. Ce n’est pas encore un incident : il faut la **qualifier**.' },
          {
            t: 'table',
            caption: 'Les quatre cas possibles',
            head: ['', 'Activité réellement malveillante', 'Activité légitime'],
            rows: [['**Alerte levée**', 'Vrai positif', 'Faux positif'], ['**Pas d’alerte**', '**Faux négatif** (le plus dangereux)', 'Vrai négatif']],
          },
          { t: 'list', ordered: true, items: ['**Lire** l’alerte : quelle règle, quel compte, quelle machine, quelle heure.', '**Se renseigner** : qui est l’utilisateur ? la machine est-elle importante ? l’adresse est-elle connue ?', '**Regarder autour** : que s’est-il passé juste avant et juste après ?', '**Conclure** : vrai ou faux positif, avec une justification écrite.', '**Décider** : clore, escalader au niveau supérieur ou déclencher la réponse à incident.'] },
          {
            t: 'example',
            title: 'Exemple : connexion depuis un pays inhabituel',
            blocks: [
              { t: 'p', text: 'Une salariée se connecte à la messagerie depuis un autre continent à 3 h du matin, alors qu’elle était au bureau la veille à 18 h. Aucun déplacement n’est prévu.' },
              { t: 'p', text: 'Lecture : le déplacement est impossible dans ce délai. L’alerte est probablement un vrai positif : on escalade, on contacte la salariée par un autre moyen et on demande la fermeture des sessions et le changement du mot de passe.' },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Écrivez toujours pourquoi vous clôturez une alerte. Une décision sans trace ne peut être ni relue, ni améliorée.' },
        ],
      },
      {
        id: 'incident',
        title: 'Incident : phases et premiers réflexes',
        blocks: [
          { t: 'p', text: 'Un **incident** de sécurité est une alerte qualifiée qui nécessite une réponse. La réponse suit des phases bien identifiées.' },
          {
            t: 'table',
            head: ['Phase', 'Objectif', 'Exemple'],
            rows: [
              ['**Préparation**', 'Être prêt avant', 'Procédures, contacts, sauvegardes hors ligne'],
              ['**Détection et analyse**', 'Confirmer et comprendre', 'Qualifier, estimer le périmètre'],
              ['**Confinement**', 'Arrêter la propagation', 'Isoler une machine du réseau, désactiver un compte'],
              ['**Éradication**', 'Retirer la menace', 'Supprimer ce que l’attaquant a laissé, corriger la faille'],
              ['**Rétablissement**', 'Revenir à la normale', 'Restaurer depuis une sauvegarde saine'],
              ['**Retour d’expérience**', 'Apprendre', 'Causes, nouvelles détections, plan d’action'],
            ],
          },
          { t: 'list', items: ['**Ne pas éteindre** une machine suspecte : on l’**isole** du réseau pour garder les preuves en mémoire.', '**Noter** ce qui est vu et fait, avec les heures.', '**Prévenir** le bon interlocuteur sans attendre.', '**Ne pas communiquer** sur la messagerie si elle peut être compromise : prévoir un autre canal.', '**Ne pas improviser** : suivre la procédure prévue.'] },
          { t: 'callout', kind: 'warn', text: 'Agir trop vite peut détruire des preuves ou alerter l’attaquant ; agir trop lentement laisse l’attaque progresser. On cherche le bon équilibre en gardant le périmètre à l’esprit.' },
        ],
      },
      {
        id: 'cadre',
        title: 'Cadre, confidentialité et éthique',
        blocks: [
          { t: 'p', text: 'Un analyste a accès à des informations sensibles : journaux, courriels, activité de personnes. Ce pouvoir s’exerce dans un cadre précis.' },
          {
            t: 'table',
            head: ['Principe', 'Conséquence pratique'],
            rows: [
              ['**Confidentialité**', 'Ce qu’on voit dans un journal ou un poste n’est partagé qu’avec les personnes concernées par l’enquête'],
              ['**Proportionnalité**', 'On ne regarde que ce qui est nécessaire à la mission'],
              ['**Traçabilité**', 'Chaque action est consignée ; ses outils et accès sont contrôlés'],
              ['**Honnêteté**', 'On rapporte les faits, y compris ses propres erreurs'],
            ],
          },
          { t: 'callout', kind: 'legal', title: 'Notification', text: 'En cas de violation de données personnelles, le RGPD (article 33) impose de notifier l’autorité de contrôle (la CNIL en France) dans un délai de 72 heures après en avoir pris connaissance, sauf risque improbable pour les personnes. Certaines organisations sont aussi soumises à NIS2.' },
          { t: 'list', items: ['**Signaler** à la hiérarchie et au responsable de la sécurité plutôt que d’agir seul au-delà de sa mission.', '**Ne pas se faire justice** : on ne riposte pas contre l’attaquant.', '**Respecter la vie privée** des personnes dont on lit les traces.'] },
        ],
      },
    ],
    useCases: [
      'Analyste N1 : trier chaque jour les alertes de connexion anormale.',
      'Administrateur : lire un journal d’authentification pour comprendre un blocage de compte.',
      'Responsable d’un petit service : savoir quoi faire dans les premières minutes d’un incident.',
    ],
    commonMistakes: [
      'Clore une alerte sans noter pourquoi.',
      'Éteindre immédiatement une machine suspecte et perdre les traces en mémoire.',
      'Croire qu’une absence d’alerte prouve qu’il n’y a pas d’attaque.',
      'Communiquer sur l’incident par une messagerie peut-être compromise.',
      'Tenter de se venger ou de « contre-attaquer » l’adresse de l’attaquant.',
    ],
    bestPractices: [
      'Se poser systématiquement quand, où, qui, d’où et quoi.',
      'Documenter chaque décision de qualification.',
      'Isoler plutôt qu’éteindre, puis prévenir et consigner.',
      'Respecter la confidentialité et la proportionnalité.',
      'Préparer à l’avance procédures, contacts et sauvegardes hors ligne.',
    ],
    keyPoints: [
      'Le SOC surveille, détecte, qualifie et coordonne la réponse.',
      'Un journal répond à quand, où, qui, d’où et quoi.',
      'SIEM : collecte et corrélation ; EDR : agent sur le poste ; SOAR : automatisation.',
      'Le faux négatif est le cas le plus dangereux.',
      'On isole une machine suspecte, on ne l’éteint pas.',
    ],
  },
  practice: [
    {
      id: 'lire-journal',
      kind: 'analysis',
      title: 'Lire un journal d’authentification',
      context: [
        { t: 'code', lang: 'text', code: 'Mar 12 08:02:11 srv01 sshd[1801]: Accepted publickey for backup from 10.0.0.15 port 40100 ssh2\nMar 12 08:30:44 srv01 sshd[1850]: Failed password for root from 198.51.100.77 port 33200 ssh2\nMar 12 08:30:47 srv01 sshd[1850]: Failed password for root from 198.51.100.77 port 33200 ssh2\nMar 12 08:30:51 srv01 sshd[1850]: Failed password for root from 198.51.100.77 port 33200 ssh2\nMar 12 08:31:02 srv01 sshd[1856]: Failed password for admin from 198.51.100.77 port 33410 ssh2\nMar 12 08:31:05 srv01 sshd[1856]: Accepted password for admin from 198.51.100.77 port 33410 ssh2' },
      ],
      steps: ['Pour chaque ligne importante, indiquer quand, qui, d’où et quoi.', 'Dire quelle ligne vous inquiète le plus et pourquoi.', 'Proposer deux actions de confinement et deux vérifications.'],
    },
    {
      id: 'qualifier-alerte',
      kind: 'case',
      title: 'Cas pratique : qualifier une alerte',
      context: [{ t: 'p', text: 'À 14 h, le SIEM lève l’alerte « plus de dix échecs de connexion sur le compte `c.martin` en deux minutes ». Vous constatez que l’utilisateur est en télétravail, qu’il a changé son mot de passe ce matin et que les échecs viennent de son adresse habituelle, depuis son ordinateur portable.' }],
      steps: ['Indiquer si l’alerte est plutôt un vrai ou un faux positif, avec les éléments qui le montrent.', 'Écrire la phrase de clôture ou d’escalade.', 'Proposer une amélioration de la règle pour éviter ce bruit.'],
    },
    {
      id: 'premiers-reflexes',
      kind: 'case',
      title: 'Cas pratique : premiers réflexes face à un poste suspect',
      context: [{ t: 'p', text: 'Un collègue vous appelle : son ordinateur affiche un message exigeant une rançon et plusieurs fichiers ont une extension inconnue. Il a déjà éteint puis rallumé l’ordinateur une fois.' }],
      steps: ['Dire ce que vous demandez à votre collègue de faire, et de ne pas faire.', 'Indiquer qui prévenir et ce que vous notez.', 'Décrire les actions de confinement possibles sans éteindre la machine.'],
    },
  ],
  questions,
  resources: [
    { title: 'Guide d’hygiène informatique', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/guide-dhygiene-informatique' },
    { title: 'Assistance et prévention du risque numérique', source: 'cybermalveillance.gouv.fr', url: 'https://www.cybermalveillance.gouv.fr/' },
    { title: 'Computer Security Incident Handling Guide (SP 800-61)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/61/r3/final' },
    { title: 'MITRE ATT&CK', source: 'MITRE', url: 'https://attack.mitre.org/' },
  ],
};
