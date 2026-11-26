import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'o-identite-initiation',
  lesson: {
    intro:
      'Presque tout ce que l’on fait en ligne commence par une connexion : messagerie, banque, outils de travail. Le plus souvent, les attaquants ne cassent pas un système : ils **volent ou devinent des identifiants**. Ce cours, sans prérequis, explique ce qu’est une identité numérique, comment la prouver sans se faire piéger, quels droits doivent y être attachés et comment réagir quand un compte est en danger.',
    sections: [
      {
        id: 'notions',
        title: 'Identité, authentification et autorisation',
        blocks: [
          { t: 'p', text: 'Se connecter, c’est répondre à deux questions successives : **qui êtes-vous ?** puis **qu’avez-vous le droit de faire ?**' },
          {
            t: 'table',
            head: ['Notion', 'Question', 'Exemple'],
            rows: [
              ['**Identification**', 'Qui prétendez-vous être ?', 'Saisir son identifiant ou son adresse'],
              ['**Authentification**', 'Pouvez-vous le prouver ?', 'Mot de passe, code, clé de sécurité'],
              ['**Autorisation**', 'Que pouvez-vous faire ?', 'Lire un dossier, modifier un fichier, administrer'],
            ],
          },
          { t: 'def', term: 'Identité numérique', text: 'Ensemble des informations qui permettent de reconnaître une personne en ligne : identifiant, moyens d’authentification, attributs (service, fonction) et droits associés au compte.' },
          { t: 'def', term: 'Compte nominatif', text: 'Compte attribué à une seule personne. Il permet de savoir qui a fait quoi, de retirer l’accès d’une seule personne et d’ajuster ses droits.' },
          { t: 'callout', kind: 'key', text: 'Un attaquant qui possède vos identifiants **agit à votre place** : il n’a plus besoin de « casser » quoi que ce soit.' },
        ],
      },
      {
        id: 'mdp',
        title: 'Mots de passe : longs, uniques et bien gardés',
        blocks: [
          { t: 'p', text: 'Le mot de passe reste le moyen d’authentification le plus répandu, et l’un des plus fragiles : on le devine, on le vole, on le réutilise.' },
          {
            t: 'table',
            head: ['Bonne pratique', 'Pourquoi'],
            rows: [
              ['**Long** (une phrase de passe)', 'La longueur compte plus que la complexité apparente'],
              ['**Unique** pour chaque service', 'Une fuite sur un site ne compromet pas les autres'],
              ['**Dans un gestionnaire**', 'Créer, retenir et remplir des mots de passe forts sans effort'],
              ['**Jamais communiqué**', 'Personne légitime ne le demande'],
              ['**Changé en cas de fuite**', 'Plutôt que selon un calendrier arbitraire'],
            ],
          },
          { t: 'def', term: 'Phrase de passe', text: 'Suite de plusieurs mots, facile à retenir et très difficile à deviner grâce à sa longueur : « mon chat dort sur le radiateur bleu ».' },
          {
            t: 'example',
            title: 'La réutilisation en action',
            blocks: [
              { t: 'p', text: 'Un site de loisirs est piraté et ses mots de passe sont publiés. Des attaquants essaient automatiquement les mêmes identifiants sur les messageries, les banques et les outils de travail. Celui qui avait réutilisé son mot de passe voit son compte professionnel pris, alors que son entreprise n’a subi aucune faille.' },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Un gestionnaire de mots de passe protégé par une phrase de passe longue et par la MFA est l’un des meilleurs gestes de sécurité personnelle.' },
        ],
      },
      {
        id: 'mfa',
        title: 'L’authentification à plusieurs facteurs (MFA)',
        blocks: [
          { t: 'p', text: 'La MFA ajoute une seconde preuve. Les facteurs relèvent de trois catégories : ce que je **sais** (mot de passe), ce que je **possède** (téléphone, clé de sécurité), ce que je **suis** (empreinte).' },
          {
            t: 'table',
            head: ['Méthode', 'Résiste à l’hameçonnage ?', 'Remarque'],
            rows: [
              ['Mot de passe seul', 'Non', 'Volé, deviné ou réutilisé'],
              ['Code par SMS', 'Non', 'Peut être intercepté ou relayé'],
              ['Code d’une application', 'Non', 'Peut être saisi sur un faux site'],
              ['Notification à valider', 'Partiellement', 'Piège par répétition (fatigue)'],
              ['**Clé de sécurité / passkey**', '**Oui**', 'Liée au site légitime'],
            ],
          },
          { t: 'def', term: 'Passkey', text: 'Identifiant d’un nouveau type qui remplace le mot de passe : une paire de clés propre à chaque site, déverrouillée par une empreinte ou un code. Elle ne fonctionne pas sur un faux site.' },
          { t: 'list', items: ['**Activer la MFA** partout où c’est possible, en priorité sur la messagerie et les comptes d’administration.', '**Refuser** une demande de validation que l’on n’a pas initiée, et la signaler.', '**Préférer** clés de sécurité et passkeys aux codes saisis.'] },
          { t: 'callout', kind: 'warn', text: 'Si vous recevez des demandes de validation répétées sans avoir essayé de vous connecter, quelqu’un connaît probablement votre mot de passe : refusez et changez-le.' },
        ],
      },
      {
        id: 'droits',
        title: 'Droits d’accès et comptes à surveiller',
        blocks: [
          { t: 'p', text: 'Un bon compte a **juste les droits dont il a besoin**. C’est le principe du **moindre privilège** : plus les droits sont limités, moins une erreur ou une compromission ont de conséquences.' },
          {
            t: 'table',
            head: ['Règle', 'Pourquoi'],
            rows: [
              ['**Un compte par personne**', 'Savoir qui fait quoi'],
              ['**Retrait à chaque départ**', 'Un compte oublié est une porte d’entrée'],
              ['**Retrait des anciens droits** lors d’un changement de poste', 'Éviter l’accumulation de droits'],
              ['**Compte ordinaire pour la messagerie**', 'Un compte d’administration n’a pas à lire des courriels'],
              ['**Comptes de service identifiés**', 'Applications et sauvegardes ont un propriétaire et des droits limités'],
            ],
          },
          { t: 'def', term: 'Moindre privilège', text: 'Principe qui consiste à n’accorder à chaque compte que les droits nécessaires à sa tâche, pour le temps nécessaire.' },
          { t: 'list', items: ['**Comptes d’administration** : peu nombreux, nominatifs, protégés par la MFA.', '**Comptes de prestataires** : limités, surveillés, supprimés en fin de mission.', '**Comptes partagés** : à éviter, car ils empêchent de savoir qui a agi.'] },
          { t: 'callout', kind: 'key', text: 'Les droits dérivent avec le temps : une revue régulière par les responsables permet de retirer ce qui n’est plus justifié.' },
        ],
      },
      {
        id: 'federation',
        title: 'Une seule connexion : SSO et autorisations d’applications',
        blocks: [
          { t: 'p', text: 'Pour éviter de multiplier les mots de passe, de nombreux services acceptent la connexion avec un compte existant : c’est l’**authentification unique** (SSO) et la **connexion avec un compte tiers**.' },
          {
            t: 'table',
            head: ['Mécanisme', 'Principe', 'Point de vigilance'],
            rows: [
              ['**SSO d’entreprise**', 'On se connecte une fois, le fournisseur d’identité atteste auprès des applications', 'Le compte principal doit être très bien protégé (MFA)'],
              ['**Compte tiers** (messagerie, réseau social)', 'Le site délègue l’authentification à un fournisseur', 'Le site ne reçoit pas votre mot de passe'],
              ['**Autorisation d’une application**', 'On donne à une application un accès limité à ses données', 'Un accès excessif peut être abusif et durable'],
            ],
          },
          { t: 'def', term: 'Autorisation d’application', text: 'Accord par lequel on permet à une application tierce d’accéder à une partie de ses données (messagerie, fichiers) sans lui donner son mot de passe. Il dure jusqu’à ce qu’on le retire.' },
          { t: 'list', items: ['**Lire** ce que l’application demande : « lire mes messages » est rarement nécessaire.', '**Refuser** les accès excessifs et les applications inconnues.', '**Révoquer** régulièrement les applications que l’on n’utilise plus.'] },
          { t: 'callout', kind: 'warn', text: 'Une application malveillante autorisée peut lire votre messagerie sans connaître votre mot de passe : la MFA ne l’arrête pas. La prudence se joue au moment du clic.' },
        ],
      },
      {
        id: 'reflexes',
        title: 'Bons réflexes face à un compte piraté',
        blocks: [
          { t: 'p', text: 'Un compte peut être piraté malgré les précautions. Ce qui compte alors, c’est de **réagir vite et dans le bon ordre**.' },
          { t: 'list', ordered: true, items: ['**Couper l’accès** : changer le mot de passe depuis un appareil sûr et fermer les sessions ouvertes.', '**Prévenir** l’équipe sécurité ou le support, sans honte ni attente.', '**Vérifier** l’activité récente : connexions, messages envoyés, règles de transfert, applications autorisées.', '**Changer** les mots de passe réutilisés ailleurs.', '**Renforcer** : activer la MFA et préférer une passkey.'] },
          { t: 'def', term: 'Hameçonnage', text: 'Message ou site qui imite un service de confiance pour vous pousser à saisir vos identifiants ou à valider une demande. Le meilleur réflexe est de ne rien saisir et de signaler.' },
          { t: 'callout', kind: 'key', text: 'Signaler rapidement vaut mieux que cacher une erreur : chaque minute gagnée limite ce que l’attaquant peut faire.' },
        ],
      },
    ],
    useCases: [
      'Choisir et mémoriser des mots de passe solides avec un gestionnaire, et activer la MFA sur sa messagerie.',
      'Contrôler les applications autorisées à accéder à sa messagerie et révoquer celles qui sont inutiles.',
      'Réagir correctement quand une notification de validation arrive sans qu’on se soit connecté.',
    ],
    commonMistakes: [
      'Réutiliser le même mot de passe sur plusieurs services.',
      'Accepter une notification de validation pour faire cesser les demandes.',
      'Partager un compte au sein d’une équipe.',
      'Conserver des droits après un changement de poste ou un départ.',
      'Accepter sans lire une demande d’accès d’une application.',
    ],
    bestPractices: [
      'Phrase de passe longue et unique, dans un gestionnaire.',
      'MFA partout, et clé de sécurité ou passkey quand c’est possible.',
      'Un compte nominatif par personne, aux droits limités et revus.',
      'Autorisations d’applications lues, limitées et revues.',
      'Signalement rapide de tout compte suspect.',
    ],
    keyPoints: [
      'L’authentification prouve qui l’on est, l’autorisation décide de ce que l’on peut faire.',
      'Un mot de passe doit être long, unique et protégé par un second facteur.',
      'Les clés de sécurité et passkeys résistent à l’hameçonnage.',
      'Moindre privilège, comptes nominatifs, retrait des droits aux départs.',
      'Un compte piraté se traite vite : couper l’accès, prévenir, vérifier.',
    ],
  },
  practice: [
    {
      id: 'choisir-mdp',
      kind: 'guided',
      title: 'Évaluer des mots de passe et des pratiques',
      context: [
        { t: 'p', text: 'Un collaborateur décrit ses habitudes : (a) il utilise « Marie2024 » partout ; (b) il note ses mots de passe dans un fichier sur son bureau ; (c) il accepte toutes les notifications de validation qu’il reçoit ; (d) il a activé la MFA sur sa messagerie par application mobile.' },
      ],
      steps: ['Indiquer pour chaque habitude si elle est bonne ou à corriger, avec la raison.', 'Proposer la correction pour chaque point faible.', 'Indiquer la mesure la plus efficace à mettre en place en priorité.'],
    },
    {
      id: 'revue-droits',
      kind: 'analysis',
      title: 'Analyse : une revue des droits d’une petite équipe',
      context: [
        {
          t: 'table',
          head: ['Compte', 'Situation'],
          rows: [
            ['a.durand', 'Comptable, a aussi les droits d’administrateur du serveur de fichiers depuis un ancien poste'],
            ['compta-partage', 'Compte utilisé par trois personnes de la comptabilité'],
            ['p.martin', 'Stagiaire dont le stage a pris fin il y a deux mois, compte toujours actif'],
            ['svc-sauvegarde', 'Compte de service de la sauvegarde, mot de passe jamais changé'],
          ],
        },
      ],
      steps: ['Relever le problème de chaque compte.', 'Proposer l’action correspondante.', 'Proposer une règle simple pour éviter que cela se reproduise.'],
    },
    {
      id: 'compte-pirate',
      kind: 'case',
      title: 'Cas pratique : réagir à un compte piraté',
      context: [{ t: 'p', text: 'Un matin, une collègue reçoit des notifications de validation de connexion qu’elle n’a pas lancées. Elle en accepte une « pour que cela s’arrête ». Une heure plus tard, ses contacts reçoivent un message étrange envoyé depuis sa messagerie.' }],
      steps: ['Expliquer ce qui s’est probablement passé.', 'Décrire, dans l’ordre, ce qu’elle doit faire maintenant.', 'Proposer ce qui aurait évité la compromission.'],
    },
  ],
  questions,
  resources: [
    { title: 'Recommandations relatives à l’authentification multifacteur et aux mots de passe', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-relatives-lauthentification-multifacteur-et-aux-mots-de-passe' },
    { title: 'Guide d’hygiène informatique', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/guide-dhygiene-informatique' },
    { title: 'Assistance et prévention en cybersécurité', source: 'Cybermalveillance.gouv.fr', url: 'https://www.cybermalveillance.gouv.fr/' },
  ],
};
