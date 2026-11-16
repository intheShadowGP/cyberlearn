import type { CourseBody } from '../../types';

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
  ],
  questions: [
    { id: 'heo-q1', type: 'single', difficulty: 2, skills: ['h-exec-web'], prompt: 'Où la phase d’exploitation d’un test d’intrusion peut-elle se dérouler ?', options: [{ id: 'a', text: 'Uniquement sur un périmètre autorisé par écrit ou sur des cibles d’entraînement prévues pour cela' }, { id: 'b', text: 'Sur n’importe quel système accessible' }, { id: 'c', text: 'Sur les systèmes des concurrents' }, { id: 'd', text: 'Sur tout site public, sans autorisation' }] },
    { id: 'heo-q2', type: 'truefalse', difficulty: 2, skills: ['h-cibles'], prompt: 'Un test Active Directory vise, dans une optique défensive, à identifier et fermer les chemins d’élévation menant à l’administration du domaine.' },
    { id: 'heo-q3', type: 'single', difficulty: 2, skills: ['h-exec-web'], prompt: 'À quoi sert un proxy d’interception (Burp Suite, OWASP ZAP) dans un test autorisé ?', options: [{ id: 'a', text: 'Observer et modifier les requêtes pour vérifier que le serveur ne fait pas confiance aux données du client' }, { id: 'b', text: 'Chiffrer le disque' }, { id: 'c', text: 'Attribuer des adresses IP' }, { id: 'd', text: 'Remplacer le serveur DNS' }] },
    { id: 'heo-q4', type: 'single', difficulty: 2, skills: ['h-exec-web'], prompt: 'Quelle défense rend une injection SQL (détectable avec sqlmap) impossible ?', options: [{ id: 'a', text: 'Les requêtes paramétrées' }, { id: 'b', text: 'Un mot de passe plus long' }, { id: 'c', text: 'Changer le port du serveur' }, { id: 'd', text: 'Désactiver le HTTPS' }] },
    { id: 'heo-q5', type: 'multi', difficulty: 2, skills: ['h-exec-web'], prompt: 'Quels outils servent au test d’applications web ?', options: [{ id: 'a', text: 'Burp Suite et OWASP ZAP (proxys d’interception)' }, { id: 'b', text: 'Gobuster et FFUF (découverte de contenu)' }, { id: 'c', text: 'Nikto (configuration web)' }, { id: 'd', text: 'Un tableur de bureautique' }] },
    { id: 'heo-q6', type: 'single', difficulty: 2, skills: ['h-outils-reseau-mdp'], prompt: 'Que neutralise le fait de maintenir un système à jour, vis-à-vis d’un cadriciel comme Metasploit ?', options: [{ id: 'a', text: 'Les modules qui exploitent des vulnérabilités connues déjà corrigées ne s’appliquent plus' }, { id: 'b', text: 'Le réseau devient plus rapide' }, { id: 'c', text: 'Les mots de passe s’allongent' }, { id: 'd', text: 'Le chiffrement est désactivé' }] },
    { id: 'heo-q7', type: 'single', difficulty: 2, skills: ['h-outils-reseau-mdp'], prompt: 'Quelles défenses répondent à un outil qui teste la résistance des authentifications aux essais répétés (type Hydra) ?', options: [{ id: 'a', text: 'Limitation des tentatives, verrouillage et MFA' }, { id: 'b', text: 'Un écran plus grand' }, { id: 'c', text: 'Supprimer la journalisation' }, { id: 'd', text: 'Ouvrir tous les ports' }] },
    { id: 'heo-q8', type: 'truefalse', difficulty: 2, skills: ['h-outils-reseau-mdp'], prompt: 'Un audit de mots de passe autorisé évalue leur robustesse à partir d’empreintes obtenues légalement, pour renforcer les pratiques — ce n’est pas un vol de comptes.' },
    { id: 'heo-q9', type: 'multi', difficulty: 3, skills: ['h-outils-reseau-mdp'], prompt: 'Quelles mesures réduisent l’efficacité d’un audit de mots de passe par cassage hors ligne (John the Ripper, Hashcat) ?', options: [{ id: 'a', text: 'Un hachage lent et salé (voir module E)' }, { id: 'b', text: 'Des politiques imposant des mots de passe robustes' }, { id: 'c', text: 'La MFA, qui réduit la valeur d’un mot de passe seul' }, { id: 'd', text: 'Stocker les mots de passe en clair' }] },
    { id: 'heo-q10', type: 'single', difficulty: 3, skills: ['h-cibles'], prompt: 'Qu’évalue un test Active Directory, du point de vue défensif ?', options: [{ id: 'a', text: 'Les chemins menant d’un compte ordinaire à l’administration du domaine, pour les fermer' }, { id: 'b', text: 'La vitesse du réseau' }, { id: 'c', text: 'La taille des disques' }, { id: 'd', text: 'La couleur de l’interface' }] },
    { id: 'heo-q11', type: 'multi', difficulty: 2, skills: ['h-cibles'], prompt: 'Quelles mesures durcissent une infrastructure face aux tests AD et Wi-Fi ?', options: [{ id: 'a', text: 'Modèle en tiers, moindre privilège et LAPS pour Active Directory' }, { id: 'b', text: 'WPA2/WPA3-Entreprise et 802.1X pour le Wi-Fi' }, { id: 'c', text: 'Détection des points d’accès Wi-Fi pirates' }, { id: 'd', text: 'Partager le mot de passe Wi-Fi de l’entreprise publiquement' }] },
    { id: 'heo-q12', type: 'single', difficulty: 3, skills: ['h-post-equipes'], prompt: 'Quelles contre-mesures limitent l’impact d’une post-exploitation (accès obtenu sur une machine) ?', options: [{ id: 'a', text: 'Segmentation, moindre privilège, détection (EDR) et journalisation' }, { id: 'b', text: 'Augmenter la luminosité de l’écran' }, { id: 'c', text: 'Désactiver l’antivirus' }, { id: 'd', text: 'Donner les droits d’administration à tous' }] },
    { id: 'heo-q13', type: 'single', difficulty: 2, skills: ['h-post-equipes'], prompt: 'Contre le pivoting (propagation d’un segment réseau à un autre), quelle mesure est la plus efficace ?', options: [{ id: 'a', text: 'La micro-segmentation et le filtrage inter-zones' }, { id: 'b', text: 'Un mot de passe plus long' }, { id: 'c', text: 'Un écran de veille' }, { id: 'd', text: 'Supprimer les journaux' }] },
    { id: 'heo-q14', type: 'single', difficulty: 2, skills: ['h-post-equipes'], prompt: 'Quelle est la différence entre Red Team et Purple Team ?', options: [{ id: 'a', text: 'La Red Team simule un adversaire pour tester la détection ; la Purple Team fait collaborer rouge et bleu pour améliorer directement la détection' }, { id: 'b', text: 'La Red Team ne teste que le Wi-Fi' }, { id: 'c', text: 'La Purple Team ne fait que de la reconnaissance' }, { id: 'd', text: 'Ce sont deux noms du même exercice' }] },
    { id: 'heo-q15', type: 'open', difficulty: 3, skills: ['h-post-equipes', 'h-exec-web'], prompt: 'Expliquez pourquoi, dans une optique défensive, la vraie valeur d’un test d’intrusion réside dans les correctifs et les détections produits, et le rôle de la démarche Purple Team.' },
    { id: 'heo-q16', type: 'open', difficulty: 3, skills: ['h-outils-reseau-mdp', 'h-exec-web'], prompt: 'Un responsable demande pourquoi il faut connaître les outils offensifs pour défendre. Répondez en vous appuyant sur le lien entre chaque outil et sa défense.' },
  ],
  resources: [
    { title: 'Technical Guide to Information Security Testing and Assessment (SP 800-115)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/115/final' },
    { title: 'Web Security Testing Guide (WSTG)', source: 'OWASP', url: 'https://owasp.org/www-project-web-security-testing-guide/' },
    { title: 'Référentiel PASSI (prestataires d’audit)', source: 'ANSSI', url: 'https://cyber.gouv.fr/le-referentiel-dexigences-passi' },
    { title: 'MITRE ATT&CK (techniques et détections)', source: 'MITRE', url: 'https://attack.mitre.org/' },
    { title: 'Password Storage Cheat Sheet', source: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html' },
  ],
};
