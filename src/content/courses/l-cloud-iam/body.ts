import type { CourseBody } from '../../types';
import { questions } from './questions';

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
      {
        id: 'federation',
        title: 'Identités humaines et applicatives : SSO, fédération et identités temporaires',
        blocks: [
          { t: 'p', text: 'Gérer des utilisateurs un par un dans chaque cloud multiplie les comptes, les mots de passe et les oublis lors des départs. La bonne pratique est de **centraliser** les identités chez un fournisseur d’identité et de donner au cloud des **identités temporaires**.' },
          {
            t: 'table',
            head: ['Besoin', 'Mécanisme', 'Avantage'],
            rows: [
              ['**Personnes** (administrateurs, développeurs)', 'SSO par **SAML** ou **OIDC**, MFA, rôles par fonction', 'Un compte contrôlé, révocable en un point, MFA imposée'],
              ['**Applications** dans le cloud', 'Rôles attachés aux instances ou aux fonctions, identités managées', 'Pas de clé à stocker'],
              ['**CI/CD**', 'Fédération **OIDC** : la plateforme prouve son identité et obtient des identifiants temporaires', 'Aucune clé statique dans la CI'],
              ['**Tiers** (prestataire)', 'Rôle inter-comptes avec relation de confiance limitée et identifiant externe', 'Accès borné, journalisé, révocable'],
            ],
          },
          { t: 'def', term: 'Identité temporaire', text: 'Identifiants à durée de vie courte délivrés par un service de jetons après assomption d’un rôle. Même copiés ou volés, ils expirent rapidement, contrairement à une clé d’accès statique valable tant qu’elle n’est pas révoquée.' },
          { t: 'def', term: 'Plafond de permissions', text: 'Politique de contrôle de service (SCP) ou limite de permissions : elle ne donne aucun droit mais borne ce que les politiques d’identité peuvent accorder. Elle protège même si un administrateur d’un compte accorde trop.' },
          { t: 'list', items: ['**Séparer les comptes** (production, développement, sécurité, journalisation) pour borner l’impact d’une compromission.', '**Compte d’accès d’urgence (« break-glass »)** : identifiants conservés séparément, chaque usage déclenche une alerte et fait l’objet d’une revue.', '**Revue des droits** : supprimer les identités inutilisées, retirer les permissions non utilisées (Access Analyzer).', '**Compte racine** : MFA matérielle, aucune clé, usage exceptionnel.'] },
          { t: 'callout', kind: 'key', text: 'La question à se poser pour chaque accès est : « quelle est la durée de vie de ce qui permet de l’exercer ? ». Plus elle est courte, plus la compromission coûte cher à l’attaquant.' },
        ],
      },
      {
        id: 'reponse',
        title: 'Journalisation, investigation et réponse dans le cloud',
        blocks: [
          { t: 'p', text: 'Les journaux d’API sont la **mémoire** du compte cloud. Sans eux, on ne sait ni qui a rendu un compartiment public, ni quelle clé a servi, ni jusqu’où l’attaquant est allé. Leur configuration se décide **avant** l’incident.' },
          {
            t: 'table',
            head: ['Événement à surveiller', 'Pourquoi'],
            rows: [
              ['Connexion avec le **compte racine**', 'Ce compte doit rester inutilisé'],
              ['Création de clé d’accès ou de nouvel utilisateur', 'Persistance fréquente de l’attaquant'],
              ['Modification d’une politique IAM, ajout de droits', 'Élévation de privilèges'],
              ['Désactivation ou suppression de la journalisation', 'Dissimulation des traces'],
              ['Changement de politique d’un stockage vers le public', 'Fuite de données'],
              ['Création de ressources de calcul inhabituelles ou dans une région inhabituelle', 'Abus de ressources, extension de l’accès'],
            ],
          },
          { t: 'list', items: ['**Centraliser et protéger** les journaux dans un compte séparé, en écriture seule, avec rétention suffisante.', '**Alerter** sur les événements critiques ci-dessus.', '**Préserver avant d’agir** : exporter les journaux, faire un instantané des ressources, calculer des empreintes.', '**Contenir** : révoquer les sessions et les clés, isoler par les règles réseau plutôt que supprimer.', '**Évaluer les obligations** : une violation de données personnelles se notifie à la CNIL sous 72 h ; le client reste responsable de ses configurations.'] },
          {
            t: 'example',
            title: 'Une clé d’accès publiée par erreur',
            blocks: [
              { t: 'p', text: 'Un développeur publie une clé d’accès dans un dépôt public. Quelques heures plus tard, une alerte signale la création de grandes machines virtuelles dans une région inhabituelle. Les journaux montrent que la clé a servi depuis une adresse inconnue.' },
              { t: 'p', text: 'La réponse : révoquer la clé, isoler les ressources créées sans les supprimer, exporter les journaux, rechercher d’autres actions (nouvelles clés, changements de politique) et faire pivoter les secrets accessibles. La cause racine est corrigée par la fédération OIDC et l’analyse des secrets en CI.' },
            ],
          },
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
    {
      id: 'analyse-journal-cloud',
      kind: 'analysis',
      title: 'Analyse : un extrait de journal d’API suspect',
      context: [
        { t: 'code', lang: 'text', code: 'Heure (UTC)  Événement                         Identité                   Source             Région\n02:11:05     ConsoleLogin (succès, sans MFA)    utilisateur « d.martin »   198.51.100.77      eu-west-3\n02:13:40     CreateAccessKey                    utilisateur « d.martin »   198.51.100.77      eu-west-3\n02:15:12     AttachUserPolicy (AdministratorAccess)  utilisateur « d.martin »  198.51.100.77   eu-west-3\n02:17:30     StopLogging (CloudTrail « trail-main »)  utilisateur « d.martin »  198.51.100.77  eu-west-3\n02:22:08     RunInstances (24 instances de grande taille)  clé créée à 02:13  203.0.113.9   ap-southeast-2\n02:40:51     PutBucketPolicy (« export-rh-2025 » : Principal *)  clé créée à 02:13  203.0.113.9  eu-west-3' },
      ],
      steps: ['Décrire l’enchaînement des actions et ce qu’il révèle.', 'Dire ce que l’on préserve et dans quel ordre, puis les actions de confinement.', 'Proposer les mesures qui auraient évité ou détecté l’incident.'],
    },
  ],
  questions,
  resources: [
    { title: 'Référentiel SecNumCloud', source: 'ANSSI', url: 'https://cyber.gouv.fr/secnumcloud' },
    { title: 'Policy evaluation logic', source: 'AWS Documentation', url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html' },
    { title: 'CIS Foundations Benchmarks (AWS, Azure, GCP)', source: 'Center for Internet Security', url: 'https://www.cisecurity.org/benchmark/amazon_web_services' },
    { title: 'Cloud Security Guidance', source: 'NCSC (Royaume-Uni)', url: 'https://www.ncsc.gov.uk/collection/cloud' },
  ],
};
