import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'm-gouvernance-initiation',
  lesson: {
    intro:
      'Toute organisation, de la petite association à la grande entreprise, manipule des informations dont elle ne peut pas se passer : fichiers clients, factures, courriels, planning. La **gouvernance de la sécurité** est l’art de décider ce qu’il faut protéger, comment et avec quels moyens, puis de vérifier que c’est appliqué. Ce cours, sans prérequis, présente les notions de base, le vocabulaire du risque, le rôle des règles et des responsables, la protection des données personnelles et les bons réflexes.',
    sections: [
      {
        id: 'notions',
        title: 'Les notions de base',
        blocks: [
          { t: 'p', text: 'La sécurité de l’information protège ce qui a de la valeur pour une organisation : les informations, sous toutes leurs formes (fichiers, papiers, conversations), et les moyens qui les traitent. Elle repose sur trois objectifs.' },
          {
            t: 'table',
            head: ['Objectif', 'Signification', 'Exemple d’atteinte'],
            rows: [
              ['**Confidentialité**', 'Seules les personnes autorisées accèdent à l’information', 'Fichier clients dérobé'],
              ['**Intégrité**', 'L’information n’est pas modifiée sans autorisation', 'Montant d’une facture falsifié'],
              ['**Disponibilité**', 'L’information est accessible quand on en a besoin', 'Service bloqué par une panne ou une attaque'],
            ],
          },
          { t: 'def', term: 'Gouvernance de la sécurité', text: 'Ensemble des décisions, des règles, des rôles et des contrôles par lesquels une organisation choisit ce qu’elle protège, comment, et vérifie dans la durée que ces choix sont appliqués.' },
          { t: 'def', term: 'Actif', text: 'Tout ce qui a de la valeur pour l’organisation : données, applications, équipements, locaux, mais aussi savoir-faire et réputation.' },
          { t: 'callout', kind: 'info', text: 'La sécurité n’est pas qu’une affaire d’informaticiens : elle concerne aussi les locaux, le papier, les fournisseurs et surtout les personnes.' },
        ],
      },
      {
        id: 'risques',
        title: 'Comprendre un risque',
        blocks: [
          { t: 'p', text: 'On ne peut pas tout protéger au maximum : on choisit en fonction des **risques**. Un risque est la possibilité qu’un événement cause un dommage.' },
          {
            t: 'table',
            head: ['Mot', 'Signification', 'Exemple'],
            rows: [
              ['**Menace**', 'Cause possible d’un incident', 'Un escroc qui envoie de faux courriels'],
              ['**Vulnérabilité**', 'Faiblesse qui peut être exploitée', 'Mot de passe trop simple, logiciel non mis à jour'],
              ['**Vraisemblance**', 'Probabilité que le scénario se produise', 'Faible, moyenne, élevée'],
              ['**Gravité**', 'Ampleur des conséquences', 'Arrêt d’activité d’une semaine'],
              ['**Mesure**', 'Moyen de réduire le risque', 'Authentification renforcée, sauvegarde'],
            ],
          },
          {
            t: 'example',
            title: 'Un risque simple',
            blocks: [
              { t: 'p', text: 'Une boutique en ligne conserve ses commandes sur un seul ordinateur, sans sauvegarde. La menace est une panne ou un rançongiciel. La vulnérabilité est l’absence de copie. La gravité est élevée (perte de toutes les commandes), la vraisemblance moyenne. Mesure : une sauvegarde automatique conservée hors ligne.' },
            ],
          },
          { t: 'list', items: ['**Réduire** : appliquer des mesures (cas le plus fréquent).', '**Transférer** : s’assurer, confier à un prestataire (la responsabilité ne disparaît pas).', '**Éviter** : renoncer à l’activité risquée.', '**Accepter** : décision assumée par la direction pour un risque restant tolérable.'] },
          { t: 'callout', kind: 'key', text: 'Le risque zéro n’existe pas. L’objectif est de ramener les risques à un niveau **accepté en connaissance de cause**.' },
        ],
      },
      {
        id: 'regles',
        title: 'Règles, rôles et responsabilités',
        blocks: [
          { t: 'p', text: 'Des règles écrites évitent que chacun fasse à sa façon. Elles deviennent efficaces quand elles sont claires, justifiées, applicables et appliquées par tous, y compris la direction.' },
          {
            t: 'table',
            head: ['Élément', 'Rôle'],
            rows: [
              ['**Politique de sécurité**', 'Fixe les objectifs et les principes, approuvée par la direction'],
              ['**Charte informatique**', 'Rappelle aux utilisateurs les règles d’usage : mots de passe, messagerie, signalement'],
              ['**Responsable de la sécurité (RSSI)**', 'Pilote la sécurité, conseille la direction, suit les risques et les incidents'],
              ['**Direction**', 'Décide, donne les moyens, accepte les risques restants, montre l’exemple'],
              ['**Chaque personne**', 'Applique les règles et signale les anomalies'],
            ],
          },
          { t: 'def', term: 'RSSI', text: 'Responsable de la sécurité des systèmes d’information : il définit et fait appliquer la politique, suit les risques et rend compte à la direction. Il s’appuie sur les équipes techniques sans les remplacer.' },
          { t: 'list', items: ['**Une règle contournée ne protège rien** : elle doit être réalisable au quotidien.', '**Chacun a un compte personnel** : on ne partage pas son mot de passe ni son badge.', '**La direction montre l’exemple** : une règle dont elle se dispense est jugée facultative.'] },
          { t: 'callout', kind: 'tip', text: 'Quand une règle semble absurde, signalez-le : une règle mal adaptée est souvent contournée, et mieux vaut l’ajuster que la subir.' },
        ],
      },
      {
        id: 'donnees',
        title: 'Les données et la protection des personnes',
        blocks: [
          { t: 'p', text: 'Toutes les données n’ont pas la même sensibilité. On les **classe** par niveau, et chaque niveau appelle des règles précises.' },
          {
            t: 'table',
            head: ['Niveau', 'Exemples', 'Règles typiques'],
            rows: [
              ['Public', 'Plaquette commerciale', 'Diffusion libre'],
              ['Interne', 'Procédures, annuaire', 'Réservé au personnel'],
              ['Confidentiel', 'Contrats, données clients, paie', 'Accès limité, chiffrement'],
            ],
          },
          { t: 'def', term: 'Donnée personnelle', text: 'Information qui permet d’identifier une personne, directement ou indirectement : nom, adresse, numéro de téléphone, identifiant en ligne, photo.' },
          { t: 'def', term: 'RGPD', text: 'Règlement général sur la protection des données : il encadre la collecte et l’usage des données personnelles, exige des mesures de sécurité adaptées au risque et impose de notifier à la CNIL une violation de données, en principe sous 72 heures.' },
          { t: 'list', items: ['**Ne collecter que le nécessaire** et ne pas le conserver sans limite.', '**Limiter les accès** aux personnes qui en ont besoin.', '**Chiffrer et sauvegarder** les données sensibles.', '**Ne jamais laisser** un document confidentiel sans surveillance (imprimante, bureau, écran).'] },
          { t: 'callout', kind: 'warn', text: 'Envoyer des données de l’organisation vers une messagerie ou un stockage personnel fait sortir ces données de tout contrôle.' },
        ],
      },
      {
        id: 'humain',
        title: 'Le facteur humain et les messages piégés',
        blocks: [
          { t: 'p', text: 'Les attaquants cherchent le chemin le plus simple : les **personnes**. Un message convaincant suffit souvent pour obtenir un mot de passe, un clic ou un virement.' },
          {
            t: 'table',
            head: ['Signe', 'Pourquoi c’est suspect'],
            rows: [
              ['Ton d’urgence ou de menace', 'Pousse à agir sans réfléchir'],
              ['Expéditeur ou adresse inhabituels', 'Imitation d’un contact ou d’un service'],
              ['Demande d’identifiants, de paiement ou de changement de coordonnées', 'But de l’escroc'],
              ['Pièce jointe ou lien inattendus', 'Peut installer un logiciel malveillant'],
              ['Fautes, tournures étranges, logo copié', 'Un logo se copie facilement : il ne prouve rien'],
            ],
          },
          { t: 'def', term: 'Hameçonnage (phishing)', text: 'Message qui imite un organisme ou une personne de confiance pour obtenir une action : cliquer, ouvrir un fichier, saisir un mot de passe, payer.' },
          { t: 'list', ordered: true, items: ['**Ne pas cliquer**, ne pas répondre, ne pas ouvrir la pièce jointe.', '**Vérifier** la demande par un autre canal : appeler le numéro habituel, jamais celui du message.', '**Signaler** le message à l’équipe sécurité ou au support.', '**Prévenir** sans attendre si l’on a déjà cliqué ou donné son mot de passe : un signalement rapide limite les dégâts.'] },
          { t: 'callout', kind: 'key', text: 'Une culture du **signalement sans sanction** protège mieux qu’une culture du reproche : la personne qui avoue son clic aide à contenir l’incident.' },
        ],
      },
      {
        id: 'incident',
        title: 'Incidents et reprise d’activité',
        blocks: [
          { t: 'p', text: 'Aucune mesure ne garantit l’absence d’incident. Ce qui compte, c’est de **savoir quoi faire** quand il arrive et de pouvoir **reprendre l’activité**.' },
          { t: 'list', ordered: true, items: ['**Signaler** immédiatement à l’équipe sécurité ou au support.', '**Contenir** : isoler le poste concerné si on le demande, changer les mots de passe depuis un poste sûr.', '**Conserver les traces** : messages, fichiers, journaux ; ne rien effacer.', '**Reprendre** selon les priorités de l’activité, avec des sauvegardes saines.', '**Tirer les enseignements** : corriger la cause et améliorer les règles.'] },
          {
            t: 'table',
            head: ['Notion', 'Rôle'],
            rows: [
              ['**Sauvegarde hors ligne**', 'Permet de restaurer après une panne ou un rançongiciel'],
              ['**Plan de continuité (PCA)**', 'Décrit comment maintenir les activités essentielles pendant l’incident'],
              ['**Exercice**', 'Teste le plan et révèle les faiblesses avant la vraie crise'],
            ],
          },
          { t: 'def', term: 'Rançongiciel', text: 'Logiciel malveillant qui chiffre les fichiers et réclame une rançon. Les sauvegardes hors ligne testées permettent de reprendre sans payer.' },
          { t: 'callout', kind: 'warn', text: 'N’effacez pas « pour nettoyer » : les traces servent à comprendre l’incident, à en limiter l’étendue et, si nécessaire, à le déclarer.' },
        ],
      },
    ],
    useCases: [
      'Comprendre pourquoi son organisation impose un mot de passe individuel, un badge personnel et le verrouillage des postes.',
      'Évaluer simplement le risque d’un nouvel usage (stockage en ligne, nouveau fournisseur) avec les mots du cours.',
      'Réagir correctement à un courriel suspect ou à une erreur de manipulation de données.',
    ],
    commonMistakes: [
      'Penser que la sécurité est uniquement l’affaire du service informatique.',
      'Partager son mot de passe ou prêter son badge « pour rendre service ».',
      'Cliquer par curiosité sur un message urgent sans le vérifier.',
      'Cacher une erreur par peur d’un reproche au lieu de la signaler.',
      'Laisser des documents confidentiels à la vue de tous.',
    ],
    bestPractices: [
      'Connaître les trois objectifs : confidentialité, intégrité, disponibilité.',
      'Raisonner en risques : vraisemblance, gravité, décision assumée.',
      'Respecter la charte et signaler les règles inapplicables.',
      'Limiter les données collectées et leurs accès.',
      'Signaler vite, conserver les traces, tirer les enseignements.',
    ],
    keyPoints: [
      'La sécurité protège la confidentialité, l’intégrité et la disponibilité de l’information.',
      'Un risque se décrit par sa vraisemblance et sa gravité ; on peut le réduire, le transférer, l’éviter ou l’accepter.',
      'Les règles ne valent que si elles sont comprises, applicables et appliquées par tous, direction comprise.',
      'Le RGPD protège les données personnelles ; une violation se notifie en principe sous 72 heures.',
      'En cas d’incident : signaler vite, conserver les traces, reprendre grâce aux sauvegardes.',
    ],
  },
  practice: [
    {
      id: 'classer-incidents',
      kind: 'analysis',
      title: 'Associer des situations aux objectifs de sécurité',
      context: [
        {
          t: 'table',
          head: ['#', 'Situation'],
          rows: [
            ['1', 'Des dossiers clients sont publiés par erreur sur un site accessible à tous'],
            ['2', 'Un virus modifie des montants dans des factures sans que personne ne le remarque'],
            ['3', 'Le serveur de commandes est hors service pendant une journée'],
            ['4', 'Un salarié laisse son mot de passe sur un papier collé à l’écran'],
          ],
        },
      ],
      steps: ['Indiquer pour chaque situation l’objectif de sécurité principalement atteint.', 'Proposer une mesure simple pour chacune.', 'Indiquer laquelle relève d’abord de la sensibilisation.'],
    },
    {
      id: 'evaluer-risque',
      kind: 'guided',
      title: 'Évaluer trois risques simples',
      context: [{ t: 'p', text: 'Une association de 30 personnes envisage : R1 stocker la liste de ses adhérents sur un partage en ligne ouvert par lien ; R2 conserver ses sauvegardes sur un disque toujours branché ; R3 laisser les bénévoles utiliser leurs téléphones personnels pour la messagerie.' }],
      steps: ['Coter chaque risque en vraisemblance et en gravité (faible, moyenne, élevée).', 'Choisir pour chacun une décision : réduire, transférer, éviter ou accepter.', 'Proposer une mesure concrète pour chaque risque réduit.'],
    },
    {
      id: 'courriel-urgent',
      kind: 'case',
      title: 'Cas pratique : un courriel urgent de la direction',
      context: [{ t: 'p', text: 'Une comptable reçoit un courriel qui semble venir du directeur : « Paiement confidentiel à effectuer aujourd’hui, ne le dites à personne, je suis en réunion. » Le message donne un nouveau numéro de compte.' }],
      steps: ['Relever les signes d’alerte.', 'Décrire ce que doit faire la comptable.', 'Proposer une règle d’entreprise qui protège contre ce type de fraude.'],
    },
  ],
  questions,
  resources: [
    { title: 'Guide d’hygiène informatique', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/guide-dhygiene-informatique' },
    { title: 'Les violations de données personnelles', source: 'CNIL', url: 'https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles' },
    { title: 'Assistance et prévention en cybersécurité', source: 'Cybermalveillance.gouv.fr', url: 'https://www.cybermalveillance.gouv.fr/' },
  ],
};
