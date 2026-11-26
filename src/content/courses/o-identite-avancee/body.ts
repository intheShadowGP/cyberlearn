import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'o-identite-avancee',
  lesson: {
    intro:
      'Dans une organisation moderne, l’identité est le nouveau périmètre : tout accès, de l’utilisateur ou de la machine, passe par une décision fondée sur l’identité et le contexte. Ce cours expert aborde l’architecture d’ensemble, le Zero Trust, les autorisations avancées, les identités de machines, le durcissement du fournisseur d’identité et la résilience en cas de compromission. Tout est abordé du point de vue de la défense et de la conception.',
    sections: [
      {
        id: 'architecture',
        title: 'Architecture d’identité : fournisseur, jetons et décisions d’accès',
        blocks: [
          { t: 'p', text: 'Une architecture saine sépare trois rôles : **authentifier** (fournisseur d’identité), **décider** (politiques) et **appliquer** (devant la ressource). Cette séparation rend les politiques lisibles, auditables et modifiables sans toucher au code.' },
          {
            t: 'table',
            head: ['Composant', 'Rôle', 'Point d’attention'],
            rows: [
              ['**Fournisseur d’identité**', 'Authentifie et délivre assertions et jetons', 'Cible prioritaire : protection maximale'],
              ['**Point de décision (PDP)**', 'Évalue la demande selon les politiques', 'Politiques versionnées et testées'],
              ['**Point d’application (PEP)**', 'Autorise ou refuse devant la ressource', 'Aucun contournement possible'],
              ['**Jetons d’accès**', 'Preuve limitée, portée et durée courtes', 'Valider signature, émetteur, public, expiration'],
            ],
          },
          { t: 'def', term: 'Point de décision et point d’application', text: 'Le point de décision (PDP) évalue la demande selon les politiques ; le point d’application (PEP), placé devant la ressource, exécute la décision. Séparer les deux permet de changer une politique sans modifier l’application.' },
          { t: 'def', term: 'PKCE', text: 'Extension d’OAuth 2.0 qui lie le code d’autorisation au client qui l’a demandé. Elle empêche qu’un code intercepté soit échangé par un tiers, en particulier pour les clients publics (mobile, application monopage).' },
          { t: 'list', items: ['**Jetons courts** et jetons de rafraîchissement protégés, pour réduire la fenêtre d’abus.', '**Portée minimale** (scopes) et public visé vérifié par chaque ressource.', '**Validation systématique** de la signature, de l’émetteur et de l’expiration.', '**Attributs externes** validés avant toute décision d’autorisation.'] },
          { t: 'callout', kind: 'key', text: 'Un jeton volé est un compte volé tant qu’il est valable : la durée, la portée et la liaison au client sont les leviers de défense.' },
        ],
      },
      {
        id: 'zerotrust',
        title: 'Zero Trust appliqué à l’identité',
        blocks: [
          { t: 'p', text: 'Le Zero Trust abandonne l’idée d’un intérieur de confiance : chaque demande est évaluée selon l’identité, l’appareil et le contexte, avec les droits strictement nécessaires.' },
          {
            t: 'table',
            head: ['Principe', 'Mise en œuvre', 'Bénéfice'],
            rows: [
              ['**Vérifier explicitement**', 'Identité, état de l’appareil, localisation, risque', 'Décision fondée sur plusieurs signaux'],
              ['**Moindre privilège**', 'Droits justes, accès limité dans le temps', 'Impact réduit en cas de compromission'],
              ['**Supposer la compromission**', 'Segmentation, journalisation, détection', 'Limiter le déplacement latéral'],
              ['**Évaluation continue**', 'Réévaluer pendant la session', 'Réagir à un changement de risque'],
            ],
          },
          { t: 'def', term: 'Accès conditionnel', text: 'Règle qui adapte la décision d’accès selon le contexte : exiger une MFA résistante hors du réseau de confiance, refuser un appareil non conforme, limiter l’accès à une application sensible.' },
          {
            t: 'example',
            title: 'Une politique d’accès conditionnel à la comptabilité',
            blocks: [
              { t: 'list', items: ['Accès à l’application de paie autorisé seulement depuis un appareil géré et conforme.', 'MFA résistante exigée, réévaluée si le risque de connexion augmente.', 'Session limitée à quelques heures ; action sensible (virement) avec nouvelle preuve.', 'Accès refusé et alerte envoyée depuis un pays où l’entreprise n’a aucune activité.'] },
            ],
          },
          { t: 'list', items: ['**Segmenter** pour qu’une session compromise n’atteigne pas tout le système d’information.', '**Mesurer** l’état de l’appareil (chiffrement, correctifs) et l’intégrer à la décision.', '**Documenter** les exceptions et les limiter dans le temps.'] },
          { t: 'callout', kind: 'warn', text: 'Une politique d’accès conditionnel trop complexe devient une source de pannes et de contournements : testez-la en mode rapport avant de l’appliquer.' },
        ],
      },
      {
        id: 'autorisation',
        title: 'Autorisation avancée : attributs, politiques externalisées et recertification',
        blocks: [
          { t: 'p', text: 'Le RBAC seul finit par produire une explosion de rôles. L’**ABAC** décide selon des attributs de l’utilisateur, de la ressource et du contexte ; on le combine avec des rôles pour garder un modèle lisible.' },
          {
            t: 'table',
            head: ['Approche', 'Avantage', 'Risque'],
            rows: [
              ['**RBAC**', 'Simple, lisible, auditable', 'Explosion de rôles, droits cumulés'],
              ['**ABAC**', 'Décisions fines et contextuelles', 'Attributs de mauvaise qualité, politiques opaques'],
              ['**Politiques externalisées**', 'Auditables, testables, modifiables sans code', 'Disponibilité du service de décision'],
              ['**Recertification**', 'Responsables confirment ou retirent les accès', 'Validation en masse sans examen'],
            ],
          },
          { t: 'def', term: 'Recertification des accès', text: 'Revue périodique où les responsables confirment ou retirent les droits de leurs équipes. Elle traite l’accumulation de droits au fil des mobilités.' },
          { t: 'list', items: ['**Tracer** pour chaque décision : demandeur, ressource, action, politique appliquée, résultat.', '**Tester** les politiques avant déploiement avec des cas attendus et refusés.', '**Qualité des attributs** : source de vérité, mise à jour, propriétaire.'] },
          { t: 'callout', kind: 'tip', text: 'Une recertification qui valide tout en un clic n’est pas un contrôle : présentez les écarts (nouveaux droits, droits inutilisés) pour guider la décision.' },
        ],
      },
      {
        id: 'machines',
        title: 'Identités de machines et de charges de travail',
        blocks: [
          { t: 'p', text: 'Dans les systèmes modernes, les identités non humaines (services, conteneurs, fonctions, pipelines) sont plus nombreuses que les personnes. Leurs secrets statiques et durables sont une cible de choix.' },
          {
            t: 'table',
            head: ['Mécanisme', 'Principe', 'Point d’attention'],
            rows: [
              ['**Identité de charge de travail (SPIFFE)**', 'Identité vérifiable délivrée à chaque charge de travail', 'Attestation de la charge avant émission'],
              ['**mTLS**', 'Chaque partie authentifie l’autre par certificat', 'Renouvellement automatique des certificats'],
              ['**Jetons de courte durée**', 'Délivrés à la demande, vite expirés', 'Moins d’intérêt en cas de vol'],
              ['**Coffre de secrets**', 'Stockage et rotation centralisés', 'Accès au coffre lui-même très encadré'],
            ],
          },
          { t: 'def', term: 'Identité de charge de travail', text: 'Identité attribuée à un service, un conteneur ou une fonction, vérifiée par attestation de son environnement. Elle remplace les secrets partagés durables.' },
          { t: 'def', term: 'Rotation', text: 'Remplacement régulier d’un secret ou d’un certificat par un nouveau. Une rotation automatique réduit la durée pendant laquelle un secret volé reste utile.' },
          { t: 'list', items: ['**Supprimer** les clés d’API durables des dépôts, images et variables.', '**Limiter** la portée de chaque identité à une seule charge et une seule fonction.', '**Inventorier** les identités non humaines et leur propriétaire.', '**Surveiller** les usages inhabituels (heure, origine, volume).'] },
          { t: 'callout', kind: 'key', text: 'Un secret statique dans un dépôt de code est compromis dès qu’il est copié : mieux vaut ne pas en avoir.' },
        ],
      },
      {
        id: 'idp',
        title: 'Durcir et surveiller le fournisseur d’identité',
        blocks: [
          { t: 'p', text: 'Le fournisseur d’identité concentre la confiance de toutes les applications fédérées. Un attaquant qui le contrôle peut se faire passer pour n’importe quel utilisateur : il se défend comme un actif critique.' },
          {
            t: 'table',
            head: ['Mesure', 'Objectif', 'Exemple'],
            rows: [
              ['**Administration restreinte**', 'Peu de comptes, nominatifs, MFA résistante', 'Postes dédiés, accès juste-à-temps'],
              ['**Protection des clés de signature**', 'Empêcher la falsification d’assertions', 'Module matériel, rotation planifiée'],
              ['**Contrôle des confiances fédérées**', 'Éviter l’ajout d’un fournisseur malveillant', 'Approbation et alerte à toute modification'],
              ['**Journalisation complète**', 'Détecter et enquêter', 'Journaux conservés hors du fournisseur'],
            ],
          },
          { t: 'def', term: 'Confiance fédérée', text: 'Relation par laquelle une application ou un fournisseur accepte les assertions d’un autre fournisseur. Une confiance ajoutée sans contrôle permet de falsifier n’importe quelle identité.' },
          { t: 'list', items: ['**Alerter** sur tout ajout de certificat de signature, de confiance fédérée ou de droits étendus.', '**Détecter** les rafales d’échecs par source et les connexions impossibles.', '**Conserver** les journaux dans un système séparé, protégé contre la modification.'] },
          { t: 'callout', kind: 'warn', text: 'Si les journaux de l’identité sont stockés uniquement sur le fournisseur compromis, l’attaquant peut les effacer : exportez-les ailleurs.' },
        ],
      },
      {
        id: 'resilience',
        title: 'Résilience : compromission, panne et accès d’urgence',
        blocks: [
          { t: 'p', text: 'Si le fournisseur d’identité tombe ou est compromis, tout s’arrête ou tout est exposé. La résilience se prépare : accès d’urgence, plan de reprise, exercices réguliers.' },
          {
            t: 'table',
            head: ['Élément', 'Rôle', 'Remarque'],
            rows: [
              ['**Comptes d’urgence**', 'Garder un accès si le fournisseur principal est indisponible', 'Hors des dispositifs habituels, usage alerté'],
              ['**Sauvegarde de configuration**', 'Reconstruire la fédération et les politiques', 'Testée, versionnée, protégée'],
              ['**Plan de rotation des clés**', 'Remplacer les clés de signature compromises', 'Invalider les jetons déjà émis'],
              ['**Exercices**', 'Valider que le plan fonctionne', 'Au moins une fois par an, avec les décideurs'],
            ],
          },
          { t: 'def', term: 'RTO', text: 'Durée maximale d’indisponibilité acceptable avant la reprise d’un service. Il fixe le rythme des sauvegardes et des procédures d’urgence.' },
          { t: 'list', ordered: true, items: ['**Isoler** le fournisseur compromis et activer les comptes d’urgence.', '**Remplacer** clés et secrets de signature, invalider les jetons émis.', '**Auditer** la configuration (confiances, droits, applications autorisées) et restaurer une version saine.', '**Rétablir** progressivement l’authentification, réinitialiser les comptes sensibles en premier.', '**Tirer les leçons** et mettre à jour le plan.'] },
          { t: 'callout', kind: 'key', text: 'Un plan jamais testé est une hypothèse : l’exercice révèle les mots de passe d’urgence introuvables et les dépendances oubliées.' },
        ],
      },
    ],
    useCases: [
      'Concevoir une politique d’accès conditionnel pour les applications critiques.',
      'Remplacer les clés d’API durables d’un pipeline par des identités de courte durée.',
      'Mettre en place des alertes sur les modifications de la fédération.',
      'Préparer et tester un plan de reprise après compromission du fournisseur d’identité.',
    ],
    commonMistakes: [
      'Valider un jeton sans vérifier le public visé ni l’émetteur.',
      'Multiplier les rôles au lieu de combiner rôles et attributs.',
      'Stocker les journaux de l’identité uniquement sur le fournisseur lui-même.',
      'Utiliser les comptes d’urgence au quotidien sans alerte.',
      'Valider massivement les recertifications sans examen des écarts.',
    ],
    bestPractices: [
      'Jetons courts, portée minimale et validation complète.',
      'Accès conditionnel testé en mode rapport avant application.',
      'Politiques externalisées, versionnées, testées et tracées.',
      'Identités de charge de travail et rotation automatique plutôt que secrets durables.',
      'Journaux de l’identité exportés, alertes sur la fédération, exercices annuels.',
    ],
    keyPoints: [
      'Séparer authentification, décision et application rend l’accès auditable.',
      'Zero Trust : vérifier explicitement, moindre privilège, supposer la compromission.',
      'RBAC et ABAC se combinent ; la recertification traite l’accumulation de droits.',
      'Les identités de machines sont plus nombreuses que les humaines : pas de secrets durables.',
      'Le fournisseur d’identité est un actif critique ; sa résilience se prépare et se teste.',
    ],
  },
  practice: [
    {
      id: 'concevoir-acces',
      kind: 'guided',
      title: 'Concevoir une politique d’accès conditionnel',
      context: [
        { t: 'p', text: 'Une entreprise de services veut protéger son application de gestion des clients (données sensibles). Les salariés travaillent au bureau et à distance, certains avec leur appareil personnel, et des partenaires y accèdent ponctuellement.' },
      ],
      steps: ['Listez les signaux à évaluer (identité, appareil, contexte, risque).', 'Définissez les règles par population (salariés gérés, appareils personnels, partenaires).', 'Décrivez la gestion des actions sensibles et de la durée de session.', 'Indiquez comment tester la politique avant de l’appliquer et gérer les exceptions.'],
    },
    {
      id: 'identites-machines',
      kind: 'analysis',
      title: 'Analyse : inventaire des identités non humaines d’une plateforme',
      context: [
        {
          t: 'table',
          head: ['Identité', 'Situation'],
          rows: [
            ['pipeline-deploy', 'Clé d’API durable stockée dans les variables du pipeline, droits d’administrateur du cloud'],
            ['svc-reporting', 'Compte de service dont le mot de passe est dans un fichier de configuration du dépôt'],
            ['api-paiement → api-commande', 'Appel interne authentifié par un secret partagé identique depuis trois ans'],
            ['fonction-export', 'Identité gérée par la plateforme, droits en lecture sur un seul stockage'],
          ],
        },
      ],
      steps: ['Évaluez le risque de chaque identité.', 'Proposez le remplacement ou la correction pour chacune.', 'Proposez un contrôle automatique pour éviter que le problème revienne.'],
    },
    {
      id: 'compromission-idp',
      kind: 'case',
      title: 'Cas : compromission d’un compte administrateur du fournisseur d’identité',
      context: [
        { t: 'p', text: 'Une alerte signale l’ajout d’un nouveau certificat de signature et d’une confiance fédérée par un compte administrateur du fournisseur d’identité, depuis une adresse inhabituelle et hors des heures de travail. L’administrateur ne reconnaît pas l’opération.' },
      ],
      steps: ['Évaluez la gravité et ce qu’un attaquant pourrait faire avec ces modifications.', 'Décrivez les actions de confinement, dans l’ordre.', 'Décrivez la restauration de la confiance et la vérification de la configuration.', 'Proposez les mesures qui auraient évité ou détecté plus tôt.'],
    },
  ],
  questions,
  resources: [
    { title: 'Zero Trust Architecture (SP 800-207)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/207/final' },
    { title: 'Best Current Practice for OAuth 2.0 Security (RFC 9700)', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc9700' },
    { title: 'SPIFFE : présentation des identités de charge de travail', source: 'SPIFFE', url: 'https://spiffe.io/docs/latest/spiffe-about/overview/' },
  ],
};
