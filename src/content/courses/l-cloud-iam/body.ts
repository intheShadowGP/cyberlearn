import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'l-cloud-iam',
  lesson: {
    intro:
      "Dans le cloud, la plupart des incidents ne proviennent pas d'une faille du fournisseur, mais d'une **mauvaise configuration du client** : un compartiment de stockage public, un rôle trop permissif, une clé d'accès oubliée dans un dépôt de code. L'identité y remplace le périmètre réseau comme première ligne de défense. Ce cours donne les clés pour raisonner sur ces configurations.",
    sections: [
      {
        id: 'responsabilite',
        title: 'Le modèle de responsabilité partagée',
        blocks: [
          { t: 'def', term: 'Responsabilité partagée', text: "Le fournisseur est responsable de la sécurité **du** cloud (centres de données, matériel, virtualisation) ; le client est responsable de la sécurité **dans** le cloud (données, identités, configurations). La frontière se déplace selon le modèle de service." },
          { t: 'diagram', id: 'shared-responsibility', caption: 'Répartition des responsabilités selon le modèle', alt: 'En IaaS, le client gère données, applications et système d’exploitation ; en PaaS, données et applications ; en SaaS, essentiellement données et identités. Le fournisseur gère le reste.' },
          { t: 'callout', kind: 'key', text: "Quel que soit le modèle, **les données et les identités restent toujours de la responsabilité du client**. Un SaaS parfaitement sécurisé ne protège pas un compte administrateur sans MFA." },
          { t: 'callout', kind: 'info', title: 'Qualification', text: "En France, la qualification **SecNumCloud** de l'ANSSI atteste qu'une offre cloud répond à un référentiel exigeant, y compris sur la protection vis-à-vis des lois extraterritoriales." },
        ],
      },
      {
        id: 'iam',
        title: 'IAM : qui peut faire quoi sur quelle ressource',
        blocks: [
          { t: 'p', text: "Une politique IAM (ici dans la syntaxe AWS, les principes sont similaires chez Azure et Google Cloud) associe des **actions** à des **ressources**, avec un **effet** (Allow ou Deny) et d'éventuelles **conditions**." },
          { t: 'code', lang: 'json', caption: 'Politique attachée à un rôle applicatif', code: '{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["s3:GetObject", "s3:PutObject"],\n      "Resource": "arn:aws:s3:::factures-prod/*"\n    },\n    {\n      "Effect": "Deny",\n      "Action": "s3:*",\n      "Resource": "*",\n      "Condition": { "Bool": { "aws:SecureTransport": "false" } }\n    }\n  ]\n}' },
          { t: 'list', ordered: true, items: ['Par défaut, **tout est refusé** (refus implicite).', 'Une déclaration **Allow** qui correspond à l’action et à la ressource autorise la requête…', '… sauf si une déclaration **Deny** correspond : **le refus explicite l’emporte toujours**.'] },
          { t: 'def', term: 'Moindre privilège dans le cloud', text: "Limiter les actions (pas de `*`), les ressources (ARN précis), et ajouter des conditions (réseau d'origine, MFA, chiffrement). Les outils d'analyse d'accès (IAM Access Analyzer, Azure Advisor) proposent des politiques réduites à partir de l'usage réel." },
          { t: 'callout', kind: 'warn', text: "`\"Action\": \"*\", \"Resource\": \"*\"` sur un utilisateur ou un rôle équivaut à des droits d'administrateur complet du compte cloud. De même, les permissions `iam:PassRole` ou `iam:AttachRolePolicy` permettent souvent de s'élever soi-même." },
        ],
      },
      {
        id: 'stockage',
        title: 'Stockage et secrets',
        blocks: [
          {
            t: 'example',
            title: 'Un compartiment exposé',
            blocks: [
              { t: 'code', lang: 'json', code: '{\n  "Effect": "Allow",\n  "Principal": "*",\n  "Action": "s3:GetObject",\n  "Resource": "arn:aws:s3:::export-rh-2025/*"\n}' },
              { t: 'p', text: "`\"Principal\": \"*\"` rend chaque objet lisible par n'importe qui sur Internet. Des robots parcourent en permanence les noms de compartiments courants : la découverte se compte en heures. C'est l'origine de nombreuses fuites massives." },
            ],
          },
          { t: 'list', items: ['Activer le **blocage de l’accès public** au niveau du compte.', 'Chiffrer au repos (clés gérées par le service ou par le client via KMS) et imposer TLS.', 'Journaliser les accès aux données sensibles et activer la gestion des versions contre l’effacement malveillant.', 'Préférer les **rôles et identités temporaires** (rôles d’instance, identités managées, fédération OIDC depuis la CI) aux clés d’accès longues durées.', 'Stocker les secrets dans un coffre (Secrets Manager, Key Vault, Vault) avec rotation, jamais dans le code ni les variables d’images.'] },
        ],
      },
      {
        id: 'posture',
        title: 'Posture et détection',
        blocks: [
          { t: 'def', term: 'CSPM', text: "Cloud Security Posture Management : évaluation continue des configurations par rapport à des référentiels (CIS Benchmarks, bonnes pratiques du fournisseur) et alerte sur les écarts." },
          {
            t: 'table',
            head: ['Contrôle', 'Pourquoi'],
            rows: [
              ['MFA sur le compte racine, compte racine inutilisé', 'Le compte racine a des droits illimités et non restreignables'],
              ['Journalisation des appels d’API activée partout (CloudTrail, journal d’activité)', 'Sans elle, pas d’investigation possible'],
              ['Aucune clé d’accès de plus de 90 jours', 'Les clés fuient (dépôts, postes) et restent valides'],
              ['Aucun stockage public non justifié', 'Fuites de données'],
              ['Aucune règle réseau `0.0.0.0/0` vers SSH ou RDP', 'Exposition directe à la force brute'],
            ],
          },
          { t: 'p', text: "L'**Infrastructure as Code** (Terraform, Bicep, CloudFormation) permet de vérifier ces règles **avant** le déploiement, avec des analyseurs (Checkov, tfsec) dans la chaîne d'intégration continue." },
        ],
      },
    ],
    useCases: [
      'Revue d’une politique IAM avant sa mise en production.',
      'Mise en place de la fédération OIDC entre la CI et le cloud pour supprimer les clés d’accès statiques.',
      'Investigation d’une fuite : déterminer via les journaux d’API qui a rendu un compartiment public, et quand.',
    ],
    commonMistakes: [
      'Penser que le fournisseur cloud est responsable de la configuration des accès.',
      'Accorder `*:*` « temporairement » pour débloquer un développeur.',
      'Utiliser le compte racine pour l’administration courante.',
      'Laisser des clés d’accès dans le code, des images Docker ou des variables d’environnement de CI en clair.',
      'Désactiver la journalisation des API pour réduire les coûts.',
    ],
    bestPractices: [
      'Moindre privilège : actions et ressources précises, conditions, revue régulière des droits inutilisés.',
      'Identités temporaires (rôles, fédération) plutôt que clés longues durées.',
      'Blocage de l’accès public par défaut et chiffrement systématique.',
      'Journalisation centralisée et protégée des appels d’API.',
      'CSPM et analyse de l’Infrastructure as Code avant déploiement.',
    ],
    keyPoints: [
      'Le client reste responsable de ses données et de ses identités, quel que soit le modèle.',
      'IAM : refus implicite par défaut, Allow pour autoriser, Deny explicite prioritaire.',
      '`Principal: *` sur un stockage = données publiques.',
      'Les mauvaises configurations sont la première cause d’incidents cloud.',
    ],
  },
  practice: [
    {
      id: 'labo-iam',
      kind: 'simulation',
      title: 'Laboratoire : évaluateur de politiques IAM',
      context: [{ t: 'p', text: 'Un évaluateur simplifié applique les règles Allow / Deny / refus implicite à des requêtes que vous composez.' }],
      steps: ['Tester les requêtes proposées.', 'Prédire le résultat avant de lancer l’évaluation.', 'Identifier la politique trop permissive.'],
      labId: 'iam-policy-lab',
    },
    {
      id: 'revue-compte',
      kind: 'case',
      title: 'Cas pratique : premier audit d’un compte cloud',
      context: [{ t: 'p', text: 'Une start-up vous donne un accès en lecture à son compte cloud : 3 développeurs utilisent chacun un utilisateur IAM avec des clés d’accès et la politique AdministratorAccess ; le compte racine n’a pas de MFA ; un compartiment « backups » est public « pour que le prestataire puisse récupérer les sauvegardes ».' }],
      steps: ['Classer les constats par gravité.', 'Proposer une architecture d’accès cible.', 'Proposer une solution pour le prestataire sans compartiment public.'],
    },
  ],
  questions: [
    { id: 'cl-q1', type: 'single', difficulty: 1, skills: ['l-shared'], prompt: 'En SaaS, qui est responsable de la gestion des comptes utilisateurs et de leurs droits ?', options: [{ id: 'a', text: 'Le fournisseur SaaS uniquement' }, { id: 'b', text: 'Le client' }, { id: 'c', text: 'Le fournisseur d’accès à Internet' }, { id: 'd', text: 'Personne' }] },
    { id: 'cl-q2', type: 'truefalse', difficulty: 1, skills: ['l-shared'], prompt: 'En IaaS, l’application des correctifs du système d’exploitation des machines virtuelles relève du client.' },
    { id: 'cl-q3', type: 'short', difficulty: 2, skills: ['l-shared'], prompt: 'Quelle qualification de l’ANSSI s’applique aux offres cloud de confiance ?' },
    { id: 'cl-q4', type: 'single', difficulty: 2, skills: ['l-iam'], prompt: 'Une politique contient un Allow sur `s3:*` et un Deny sur `s3:DeleteObject` pour la même ressource. La suppression est :', options: [{ id: 'a', text: 'Autorisée, car Allow s3:* couvre tout' }, { id: 'b', text: 'Refusée, car le refus explicite l’emporte' }, { id: 'c', text: 'Autorisée une fois sur deux' }, { id: 'd', text: 'Soumise à validation manuelle' }] },
    { id: 'cl-q5', type: 'truefalse', difficulty: 1, skills: ['l-iam'], prompt: 'En l’absence de toute déclaration correspondante, une action IAM est refusée par défaut.' },
    { id: 'cl-q6', type: 'multi', difficulty: 3, skills: ['l-iam'], prompt: 'Quelles permissions permettent souvent une élévation de privilèges dans un compte cloud ?', options: [{ id: 'a', text: '`iam:AttachUserPolicy`' }, { id: 'b', text: '`iam:PassRole` combinée à la création de ressources de calcul' }, { id: 'c', text: '`s3:GetObject` sur un compartiment de journaux' }, { id: 'd', text: '`iam:CreateAccessKey` sur d’autres utilisateurs' }] },
    { id: 'cl-q7', type: 'short', difficulty: 2, skills: ['l-iam'], prompt: 'Quel effet IAM a toujours priorité lorsqu’il correspond à une requête ? (en anglais)' },
    { id: 'cl-q8', type: 'single', difficulty: 2, skills: ['l-storage'], prompt: 'Que signifie `"Principal": "*"` dans la politique d’un compartiment de stockage ?', options: [{ id: 'a', text: 'Tous les administrateurs du compte' }, { id: 'b', text: 'N’importe qui, y compris anonymement sur Internet' }, { id: 'c', text: 'Le compte racine' }, { id: 'd', text: 'Aucun principal' }] },
    { id: 'cl-q9', type: 'multi', difficulty: 2, skills: ['l-storage'], prompt: 'Quelles pratiques améliorent la gestion des secrets dans le cloud ?', options: [{ id: 'a', text: 'Coffre-fort de secrets avec rotation' }, { id: 'b', text: 'Fédération OIDC entre la CI et le cloud' }, { id: 'c', text: 'Clés d’accès dans un fichier .env versionné' }, { id: 'd', text: 'Rôles attachés aux instances plutôt que des clés statiques' }] },
    { id: 'cl-q10', type: 'truefalse', difficulty: 2, skills: ['l-storage'], prompt: 'Le chiffrement au repos d’un compartiment empêche sa lecture par un internaute si le compartiment est public.' },
    { id: 'cl-q11', type: 'single', difficulty: 2, skills: ['l-posture'], prompt: 'Que fait un outil CSPM ?', options: [{ id: 'a', text: 'Il chiffre les données' }, { id: 'b', text: 'Il évalue en continu les configurations cloud par rapport à des référentiels et signale les écarts' }, { id: 'c', text: 'Il remplace le pare-feu' }, { id: 'd', text: 'Il gère la facturation' }] },
    { id: 'cl-q12', type: 'multi', difficulty: 2, skills: ['l-posture'], prompt: 'Lesquelles de ces configurations sont des écarts à corriger ?', options: [{ id: 'a', text: 'Compte racine sans MFA' }, { id: 'b', text: 'Groupe de sécurité ouvrant le port 22 à 0.0.0.0/0' }, { id: 'c', text: 'Journalisation des API désactivée dans une région' }, { id: 'd', text: 'Rôle applicatif limité à GetObject sur un préfixe précis' }] },
    { id: 'cl-q13', type: 'short', difficulty: 2, skills: ['l-posture'], prompt: 'Quel service AWS journalise les appels d’API d’un compte ?' },
    { id: 'cl-q14', type: 'open', difficulty: 3, skills: ['l-iam', 'l-posture'], prompt: 'Un développeur demande `AdministratorAccess` pour déployer une fonction serverless. Proposez une alternative respectant le moindre privilège et expliquez votre démarche.' },
    { id: 'cl-q15', type: 'open', difficulty: 3, skills: ['l-storage', 'l-shared'], prompt: 'Un prestataire doit récupérer chaque nuit les sauvegardes d’un compartiment. Proposez une solution sans rendre le compartiment public.' },
    { id: 'cl-q16', type: 'single', difficulty: 2, skills: ['l-posture', 'l-storage'], prompt: 'Comment détecter une mauvaise configuration de stockage avant même son déploiement ?', options: [{ id: 'a', text: 'En analysant le code Terraform dans la CI (Checkov, tfsec)' }, { id: 'b', text: 'En attendant le rapport mensuel de facturation' }, { id: 'c', text: 'En désactivant les journaux' }, { id: 'd', text: 'C’est impossible' }] },
  ],
  resources: [
    { title: 'Référentiel SecNumCloud', source: 'ANSSI', url: 'https://cyber.gouv.fr/secnumcloud' },
    { title: 'Policy evaluation logic', source: 'AWS Documentation', url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html' },
    { title: 'CIS Foundations Benchmarks (AWS, Azure, GCP)', source: 'Center for Internet Security', url: 'https://www.cisecurity.org/benchmark/amazon_web_services' },
    { title: 'Cloud Security Guidance', source: 'NCSC (Royaume-Uni)', url: 'https://www.ncsc.gov.uk/collection/cloud' },
  ],
};
