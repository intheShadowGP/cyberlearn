import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'h-execution-outils-equipes',
  lesson: {
    intro:
      'Le premier cours du module H a posé le cadre d’un test d’intrusion autorisé : règles d’engagement, méthodologie, reconnaissance, rapport. Ce cours décrit la phase d’exécution et l’outillage qui l’accompagne — toujours dans un périmètre explicitement autorisé par écrit, ou dans un laboratoire d’entraînement conçu pour cela. L’objectif reste défensif : comprendre à quoi servent les outils, leurs limites et surtout les mesures qui les neutralisent, afin de mieux défendre les systèmes. Aucune procédure d’attaque contre des systèmes tiers n’y figure.',
    sections: [
      {
        id: 'execution',
        title: 'L’exécution en laboratoire autorisé',
        blocks: [
          { t: 'p', text: 'La phase d’**exploitation** d’un test d’intrusion vise à confirmer qu’une vulnérabilité identifiée est réellement exploitable et à en mesurer l’impact. Elle ne se mène que sur un **périmètre autorisé** (contrat, règles d’engagement) ou sur des **cibles d’entraînement** (applications volontairement vulnérables, laboratoires locaux), jamais sur des systèmes tiers.' },
          {
            t: 'table',
            head: ['Principe', 'Pourquoi'],
            rows: [
              ['Rester dans le périmètre', 'Sortir du périmètre autorisé est illégal et dangereux pour la production'],
              ['Privilégier des preuves non destructives', 'Démontrer l’impact sans endommager ni divulguer de données réelles'],
              ['Journaliser ses actions', 'Traçabilité, et aide au bleu pour distinguer le test d’une vraie attaque'],
              ['Travailler en laboratoire pour s’entraîner', 'Acquérir les gestes sans risque, sur des cibles prévues pour cela'],
            ],
          },
          { t: 'def', term: 'Cible d’entraînement', text: 'Application ou machine volontairement vulnérable, conçue pour l’apprentissage (par exemple des applications web « cassées » prévues pour la formation, ou des laboratoires montés localement). Elle permet de s’exercer légalement, sans toucher à un système réel.' },
          { t: 'callout', kind: 'legal', text: 'Le résultat d’une exploitation est une **preuve** pour le rapport, pas une fin en soi. On en fait le minimum nécessaire pour démontrer le risque, puis on recommande la correction. Tout se fait sous autorisation écrite ou en laboratoire.' },
        ],
      },
      {
        id: 'outils-web',
        title: 'Outils de test web : fonction, usage autorisé, défense',
        blocks: [
          { t: 'p', text: 'Les outils suivants servent à **tester** des applications web dans un cadre autorisé. On les présente par leur fonction et, surtout, par la **défense** qui rend l’attaque correspondante inopérante.' },
          {
            t: 'table',
            head: ['Outil', 'Fonction', 'Défense associée'],
            rows: [
              ['**Burp Suite**, **OWASP ZAP**', 'Proxy d’interception : observer et manipuler les requêtes web pour tester la validation et le contrôle d’accès', 'Validation côté serveur, contrôle d’accès par objet, en-têtes de sécurité'],
              ['**Nikto**', 'Scanner de configuration web (fichiers exposés, en-têtes manquants)', 'Durcissement du serveur, retrait des fichiers inutiles'],
              ['**Gobuster**, **FFUF**', 'Découverte de contenu par essais de chemins (répertoires, fichiers)', 'Pas de ressource sensible accessible par devinette ; contrôle d’accès, journalisation'],
              ['**sqlmap**', 'Détection et démonstration d’injections SQL sur une cible autorisée', 'Requêtes paramétrées (voir module F) : l’injection devient impossible'],
            ],
          },
          { t: 'def', term: 'Proxy d’interception', text: 'Outil placé entre le navigateur et le serveur qui permet de lire et modifier les requêtes. Côté test, il sert à vérifier que le serveur ne fait pas confiance aux données du client ; côté défense, il rappelle que tout contrôle doit être refait côté serveur.' },
          { t: 'callout', kind: 'key', text: 'Chaque outil a une parade : la bonne lecture défensive d’un rapport de test est « quelle mesure aurait empêché ce constat ? ». Les corrections renvoient aux cours du module F (injections, contrôle d’accès, en-têtes).' },
          {
            t: 'example',
            title: 'Lire un constat de test en défenseur',
            blocks: [
              { t: 'p', text: 'Un rapport indique : « avec un proxy d’interception, l’identifiant d’objet a été modifié et les données d’un autre compte ont été obtenues ». Le réflexe défensif n’est pas de reproduire la manipulation, mais de nommer la faiblesse (contrôle d’accès défaillant) et la parade.' },
              { t: 'p', text: 'Parade : vérifier côté serveur, à chaque requête, que l’objet demandé appartient à l’utilisateur authentifié (module F). On transforme ainsi un constat offensif en correctif précis.' },
            ],
          },
        ],
      },
      {
        id: 'outils-reseau',
        title: 'Outils réseau, cadriciels et audit de mots de passe',
        blocks: [
          { t: 'p', text: 'D’autres outils interviennent côté réseau et système, toujours dans un cadre autorisé. L’audit de la robustesse des mots de passe, en particulier, se pratique sur des empreintes obtenues légalement, pour **démontrer une faiblesse et la corriger**.' },
          {
            t: 'table',
            head: ['Outil', 'Fonction', 'Défense associée'],
            rows: [
              ['**Netcat**', 'Outil réseau polyvalent (tester une connexion, un service)', 'Filtrage réseau en refus par défaut, services inutiles désactivés'],
              ['**Metasploit**', 'Cadriciel qui regroupe des modules de test de vulnérabilités connues', 'Correctifs à jour : un système patché n’est pas concerné par les modules correspondants'],
              ['**Nuclei**', 'Scanner à base de modèles pour repérer des vulnérabilités et expositions connues', 'Gestion des vulnérabilités, réduction de la surface exposée'],
              ['**Hydra**', 'Test de résistance des authentifications aux essais répétés', 'Limitation des tentatives, verrouillage, MFA'],
              ['**John the Ripper**, **Hashcat**', 'Audit de robustesse des mots de passe à partir d’empreintes obtenues légalement', 'Hachage lent et salé (module E), politiques de mots de passe, MFA'],
            ],
          },
          { t: 'def', term: 'Audit de mots de passe', text: 'Dans un test autorisé, on évalue si les mots de passe d’une organisation résisteraient à une tentative de cassage hors ligne, à partir d’empreintes récupérées légalement durant la mission. Le but est de mesurer la faiblesse pour imposer de meilleures pratiques, pas de dérober des comptes.' },
          { t: 'callout', kind: 'key', text: 'Ces outils ne « cassent » que ce qui est déjà faible : un système à jour, des mots de passe correctement hachés et salés, une MFA et une limitation des tentatives rendent la plupart de ces techniques inopérantes. C’est tout l’intérêt défensif de les connaître.' },
        ],
      },
      {
        id: 'cibles',
        title: 'Cibles spécialisées : Active Directory et Wi-Fi',
        blocks: [
          { t: 'p', text: 'Certaines cibles demandent des tests dédiés, car leur compromission a un impact majeur.' },
          {
            t: 'table',
            head: ['Cible', 'Ce que le test évalue', 'Durcissement (défense)'],
            rows: [
              ['**Active Directory**', 'Chemins menant d’un compte ordinaire à l’administration du domaine : droits excessifs, configurations dangereuses, comptes de service exposés', 'Modèle en tiers, moindre privilège, LAPS, surveillance (voir modules D et O)'],
              ['**Wi-Fi**', 'Robustesse du chiffrement et de l’authentification, points d’accès non maîtrisés', 'WPA2/WPA3-Entreprise, 802.1X, détection des points d’accès pirates (voir module B)'],
            ],
          },
          { t: 'def', term: 'Test Active Directory', text: 'Évaluation, en environnement autorisé, des chemins d’élévation vers l’administration du domaine. L’intérêt défensif est d’identifier et de fermer ces chemins (droits hérités, délégations, comptes de service trop permissifs) avant qu’un attaquant ne les trouve.' },
          { t: 'callout', kind: 'tip', text: 'Pour ces cibles, l’essentiel du cours est dans les modules défensifs : Active Directory et PKI (module D), identité et comptes à privilèges (module O), Wi-Fi et périmètre (module B). Le test ne fait que révéler ce que ces mesures doivent protéger.' },
        ],
      },
      {
        id: 'post-equipes',
        title: 'Après l’accès et en équipe',
        blocks: [
          { t: 'p', text: 'Une fois une faiblesse démontrée, le test peut évaluer jusqu’où elle mène — toujours dans le périmètre et de façon encadrée. On présente ces étapes au niveau des **principes et des défenses**, pas comme un mode opératoire.' },
          {
            t: 'table',
            head: ['Étape', 'Objectif défensif', 'Contre-mesure'],
            rows: [
              ['**Post-exploitation encadrée**', 'Mesurer l’impact réel d’un accès obtenu (données atteignables, rebond possible)', 'Segmentation, moindre privilège, détection (EDR), journalisation'],
              ['**Élévation de privilèges**', 'Vérifier si un accès limité peut devenir un accès étendu', 'Correctifs, permissions correctes, durcissement (modules C et D)'],
              ['**Pivoting en laboratoire**', 'Évaluer la propagation d’un segment à un autre', 'Micro-segmentation, filtrage inter-zones, surveillance'],
            ],
          },
          { t: 'def', term: 'Red Team et Purple Team', text: 'Une **Red Team** simule un adversaire réaliste sur un périmètre autorisé pour tester la détection et la réponse, pas seulement les vulnérabilités. Une démarche **Purple Team** fait travailler ensemble attaquants (rouge) et défenseurs (bleu) : chaque action offensive est rejouée pour vérifier et améliorer la détection. C’est l’aboutissement défensif du test d’intrusion.' },
          { t: 'callout', kind: 'key', text: 'La valeur d’un test n’est pas « avoir réussi à entrer » mais la liste des correctifs et des détections à mettre en place. L’approche Purple Team transforme directement chaque constat offensif en amélioration de la défense.' },
        ],
      },
      {
        id: 'surfaces',
        title: 'Autres surfaces : API, cloud et conteneurs',
        blocks: [
          { t: 'p', text: 'Les systèmes modernes exposent bien plus que des pages web : des **API**, des **services cloud**, des **conteneurs**. Ces surfaces se testent dans le même cadre autorisé, et leurs faiblesses se corrigent par la configuration et les droits plus que par des correctifs de code. Comme pour le reste du cours, on les présente par leur **défense**.' },
          {
            t: 'table',
            head: ['Surface', 'Ce que le test évalue', 'Durcissement (défense)'],
            rows: [
              ['**API**', 'Contrôle d’accès par objet et par fonction, validation des entrées, limitation de débit, exposition excessive de données', 'Autorisation côté serveur, authentification de chaque appel, schémas de validation, limites (module F)'],
              ['**Stockage et services cloud**', 'Stockage d’objets accessible publiquement, services exposés par erreur, journaux désactivés', 'Accès privé par défaut, revue de configuration continue, journalisation'],
              ['**Identités et droits cloud (IAM)**', 'Droits trop larges, clés d’accès anciennes ou exposées, rôles qui permettent de s’élever', 'Moindre privilège, jetons de courte durée, rotation, séparation des rôles'],
              ['**Conteneurs et orchestrateurs**', 'Images obsolètes ou contenant des secrets, conteneurs privilégiés, interface d’administration exposée', 'Images minimales et analysées, exécution sans privilèges, API d’orchestration non exposée'],
            ],
          },
          { t: 'def', term: 'CSPM (Cloud Security Posture Management)', text: 'Outils qui comparent en continu la configuration d’un environnement cloud à des règles de sécurité (stockage public, journalisation absente, droits excessifs) et signalent les écarts. Ils transforment la revue de configuration en contrôle permanent.' },
          { t: 'list', items: ['**Le cloud est une responsabilité partagée** : le fournisseur sécurise l’infrastructure, le client ses configurations, ses droits et ses données.', '**Avant de tester**, vérifier la politique du fournisseur (activités interdites, notification préalable) et inscrire ses limites dans les RoE.', '**Les identités priment** : dans le cloud, un compte ou une clé exposés valent un accès réseau.', '**Corriger par la configuration** : refus par défaut, droits minimaux, analyse automatique des images et des modèles de déploiement.'] },
          { t: 'callout', kind: 'tip', text: 'Un constat cloud se rédige comme les autres : la ressource, la mauvaise configuration, l’impact et la correction précise (la règle ou la politique à modifier).' },
        ],
      },
      {
        id: 'mesure',
        title: 'Mesurer, rapporter et suivre la remédiation',
        blocks: [
          { t: 'p', text: 'Un exercice qui ne se mesure pas ne s’améliore pas. La valeur d’une démarche Purple Team tient à des **indicateurs** et à un **suivi** des correctifs, pas à l’anecdote d’une intrusion réussie.' },
          {
            t: 'table',
            head: ['Indicateur', 'Ce qu’il mesure', 'Usage'],
            rows: [
              ['**Taux de détection**', 'Part des techniques rejouées que le SOC a détectées', 'Mesurer la couverture, cibler les lacunes'],
              ['**Délai de détection**', 'Temps entre l’action offensive et l’alerte', 'Évaluer la rapidité de la veille'],
              ['**Délai de réponse**', 'Temps entre l’alerte et le confinement', 'Évaluer la réaction des équipes'],
              ['**Couverture ATT&CK**', 'Techniques du référentiel testées et détectées', 'Piloter l’effort de détection'],
              ['**Constats corrigés**', 'Part des constats traités dans les délais, puis retestés', 'Suivre la remédiation'],
            ],
          },
          { t: 'def', term: 'MITRE ATT&CK', text: 'Référentiel public de techniques d’adversaires, organisé par tactiques. Dans un exercice Purple Team, chaque technique rejouée est rattachée à son identifiant, ce qui permet de suivre la couverture de détection et de comparer les exercices dans le temps.' },
          {
            t: 'example',
            title: 'Une fiche d’exercice Purple Team',
            blocks: [
              { t: 'list', items: ['**Technique** : exécution d’un interpréteur de commandes par un document bureautique (identifiant ATT&CK correspondant).', '**Résultat** : non détectée à la première exécution ; détectée après création d’une règle sur la chaîne de processus.', '**Délai de détection** : 4 minutes après ajustement.', '**Actions** : règle ajoutée (propriétaire : SOC), durcissement de la suite bureautique (propriétaire : équipe poste), retest dans 30 jours.'] },
            ],
          },
          { t: 'list', items: ['**Rapport** : scénario, techniques rejouées, résultats de détection, actions correctives avec responsables et dates.', '**Retest** : chaque constat corrigé est rejoué pour confirmer qu’il est bien résolu.', '**Automatisation** : des outils de simulation d’attaque permettent de rejouer régulièrement les techniques validées.', '**Éthique et cadre** : chaque rejeu reste dans le périmètre, annoncé et journalisé.'] },
          { t: 'callout', kind: 'key', text: 'Un exercice réussi n’est pas celui où tout est détecté du premier coup, mais celui qui révèle des lacunes et en corrige assez pour que la prochaine itération le démontre.' },
        ],
      },
    ],
    useCases: [
      'Exécution d’un test d’intrusion web autorisé : usage d’un proxy d’interception pour vérifier le contrôle d’accès, puis recommandations.',
      'Audit de la robustesse des mots de passe d’une organisation à partir d’empreintes récupérées légalement, pour renforcer les politiques.',
      'Exercice Purple Team : rejouer des techniques d’attaque pour mesurer et améliorer la détection du SOC.',
    ],
    commonMistakes: [
      'Mener une exploitation hors du périmètre autorisé ou sur un système tiers.',
      'Juger un test à « avoir réussi à entrer » plutôt qu’aux correctifs et détections produits.',
      'Utiliser un outil sans comprendre la défense qui le neutralise.',
      'Oublier de journaliser ses actions, empêchant de distinguer le test d’une vraie attaque.',
      'Confondre audit de mots de passe autorisé et vol de comptes.',
    ],
    bestPractices: [
      'Exécuter uniquement dans un périmètre autorisé par écrit ou en laboratoire d’entraînement.',
      'Preuves non destructives, actions journalisées, périmètre respecté.',
      'Associer chaque outil à sa défense ; renvoyer les correctifs aux cours défensifs (F, B, C, D, E, O).',
      'Traiter AD et Wi-Fi par le durcissement (tiers, moindre privilège, LAPS, WPA3, 802.1X).',
      'Adopter la démarche Purple Team : transformer chaque constat offensif en détection et en correctif.',
    ],
    keyPoints: [
      'L’exécution ne se fait qu’en périmètre autorisé ou en laboratoire ; la preuve sert le rapport.',
      'Chaque outil (Burp/ZAP, Nikto, Gobuster/FFUF, sqlmap, Metasploit, Nuclei, Netcat, Hydra, John/Hashcat) a une défense qui le neutralise.',
      'Tests AD et Wi-Fi : l’essentiel est le durcissement traité dans les modules défensifs.',
      'Post-exploitation, élévation, pivoting : compris par leurs contre-mesures (segmentation, moindre privilège, EDR).',
      'Red Team teste la détection ; Purple Team transforme l’offensif en amélioration de la défense.',
    ],
  },
  practice: [
    {
      id: 'outil-defense',
      kind: 'analysis',
      title: 'Associer chaque constat de test à sa défense',
      context: [
        { t: 'p', text: 'Extraits d’un rapport de test d’intrusion autorisé :' },
        {
          t: 'table',
          head: ['#', 'Constat'],
          rows: [
            ['1', 'Un proxy d’interception a permis de modifier l’identifiant d’objet et d’accéder aux données d’un autre compte'],
            ['2', 'sqlmap a confirmé une injection SQL sur un formulaire'],
            ['3', 'Hydra a réussi de nombreux essais d’authentification sans être ralenti'],
            ['4', 'Un audit a montré que la moitié des mots de passe étaient retrouvés en quelques minutes'],
          ],
        },
      ],
      steps: ['Nommer la faiblesse de chaque constat.', 'Donner la défense qui l’aurait empêché.', 'Indiquer à quel module défensif renvoyer pour la correction.'],
    },
    {
      id: 'purple-team',
      kind: 'case',
      title: 'Cas pratique : d’un test à la détection (Purple Team)',
      context: [{ t: 'p', text: 'À l’issue d’un test, l’équipe offensive a démontré plusieurs techniques (accès initial, élévation, déplacement latéral) que le SOC n’a pas détectées. La direction veut en tirer des améliorations.' }],
      steps: ['Expliquer ce qu’apporte une démarche Purple Team ici.', 'Proposer comment transformer chaque technique non détectée en détection.', 'Indiquer les mesures de durcissement complémentaires.'],
    },
    {
      id: 'exercice-purple',
      kind: 'case',
      title: 'Cas pratique : concevoir un exercice Purple Team sur un scénario de rançongiciel',
      context: [{ t: 'p', text: 'La direction veut vérifier que le SOC détecte les étapes d’une attaque par rançongiciel : accès initial par courriel piégé, exécution sur un poste, vol d’identifiants, déplacement vers un serveur de fichiers, suppression des sauvegardes puis chiffrement. L’exercice se déroule dans un environnement de recette autorisé, sans chiffrer de vraies données.' }],
      steps: ['Choisir les techniques à rejouer, les rattacher à ATT&CK et définir ce qui est simulé et ce qui est exclu.', 'Définir les indicateurs et la fiche de résultat de chaque technique.', 'Décrire le suivi : actions correctives, responsables, retest, rapport à la direction.'],
    },
  ],
  questions,
  resources: [
    { title: 'Technical Guide to Information Security Testing and Assessment (SP 800-115)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/115/final' },
    { title: 'Web Security Testing Guide (WSTG)', source: 'OWASP', url: 'https://owasp.org/www-project-web-security-testing-guide/' },
    { title: 'Référentiel PASSI (prestataires d’audit)', source: 'ANSSI', url: 'https://cyber.gouv.fr/le-referentiel-dexigences-passi' },
    { title: 'MITRE ATT&CK (techniques et détections)', source: 'MITRE', url: 'https://attack.mitre.org/' },
    { title: 'Password Storage Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html' },
  ],
};
