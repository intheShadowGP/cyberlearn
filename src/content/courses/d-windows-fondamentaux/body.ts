import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'd-windows-fondamentaux',
  lesson: {
    intro:
      'Windows est le système le plus répandu sur les postes de travail, donc le plus visé. Pour le défendre, il faut d’abord comprendre ce qu’il contient : comment il est organisé, qui peut y faire quoi, comment l’inspecter en ligne de commande et où il garde la trace de ce qui s’y passe. Ce cours pose ces bases, avant les cours de durcissement du poste, de Windows Server et d’Active Directory.',
    sections: [
      {
        id: 'architecture',
        title: 'Comment Windows est organisé',
        blocks: [
          { t: 'p', text: 'Windows sépare le code **privilégié** du reste. Le **mode noyau** regroupe le noyau et les pilotes : il accède directement au matériel et à toute la mémoire. Le **mode utilisateur** regroupe les applications et la plupart des services : chacun reste confiné à son espace et passe par le noyau pour tout ce qui touche au matériel.' },
          {
            t: 'table',
            head: ['Élément', 'Rôle', 'Où le voir'],
            rows: [
              ['Processus', 'Programme en cours d’exécution, avec son espace mémoire et son jeton', 'Gestionnaire des tâches (Ctrl + Maj + Échap), `tasklist`'],
              ['Service', 'Programme de fond, souvent lancé au démarrage, sans session ouverte', '`services.msc`, `Get-Service`'],
              ['Registre', 'Base hiérarchique des paramètres du système et des utilisateurs', '`regedit`, `reg query`'],
              ['Pilote', 'Code du noyau qui commande un périphérique', 'Gestionnaire de périphériques'],
            ],
          },
          { t: 'def', term: 'Registre', text: 'Base de données hiérarchique qui contient la configuration de Windows et des applications. Ses grandes **ruches** sont `HKEY_LOCAL_MACHINE` (HKLM, pour tout le poste) et `HKEY_CURRENT_USER` (HKCU, pour l’utilisateur connecté). Les attaquants s’y servent notamment pour la persistance.' },
          { t: 'def', term: 'Service Windows', text: 'Programme exécuté en arrière-plan, géré par le gestionnaire de services, qui peut démarrer avant toute ouverture de session. Il s’exécute avec un compte (souvent le compte système `LocalSystem`, très privilégié) : un service mal configuré est une cible d’attaque.' },
          { t: 'code', lang: 'text', caption: 'Quelques répertoires à connaître', code: 'C:\\Windows            système (réservé à l’administrateur)\nC:\\Program Files      programmes installés (réservé à l’administrateur)\nC:\\Users\\<nom>        données de chaque utilisateur (Documents, AppData…)' },
          { t: 'callout', kind: 'tip', text: '`winver` affiche la version exacte de Windows, `systeminfo` un résumé du poste. Connaître la version permet de savoir quels correctifs sont attendus.' },
        ],
      },
      {
        id: 'comptes',
        title: 'Comptes, groupes et authentification',
        blocks: [
          { t: 'p', text: 'Chaque personne ou chaque service est représenté par un **compte**. Un compte appartient à des **groupes**, et ce sont surtout les groupes que les permissions mentionnent. Le système repère un compte ou un groupe par son **SID** (identifiant de sécurité), unique et immuable, plus fiable que le nom.' },
          {
            t: 'table',
            head: ['Type de compte', 'Où il est défini', 'Usage typique'],
            rows: [
              ['**Local**', 'Sur le poste (base SAM)', 'Poste personnel, compte de secours'],
              ['**Microsoft**', 'Dans le service en ligne, lié au poste', 'Poste personnel, synchronisation'],
              ['**De domaine**', 'Dans l’annuaire Active Directory', 'Poste d’entreprise, valable sur tout le domaine'],
            ],
          },
          { t: 'def', term: 'SID', text: 'Identifiant de sécurité attribué à chaque compte et groupe (par exemple `S-1-5-21-…-1001`). Les permissions et les jetons utilisent le SID : renommer un compte ne change pas ses droits.' },
          { t: 'def', term: 'Groupes locaux usuels', text: '**Utilisateurs** (accès courant, sans droits d’administration), **Administrateurs** (contrôle complet du poste), **Invités** (accès très limité). Le compte **Administrateur** intégré est désactivé par défaut sur un poste récent ; le premier compte créé à l’installation est, lui, souvent administrateur.' },
          { t: 'def', term: 'UAC (contrôle de compte d’utilisateur)', text: 'Un administrateur travaille par défaut avec un jeton filtré, sans droits d’administration, et ne reçoit le jeton complet qu’après une demande d’élévation. C’est une barrière de réduction des risques ; elle n’est pas une frontière de sécurité.' },
          { t: 'list', items: ['**Compte standard au quotidien**, compte administrateur séparé pour les actions d’administration.', '**Mots de passe longs et uniques**, de préférence dans un gestionnaire de mots de passe, avec une authentification multifacteur lorsqu’elle existe.', '**Windows Hello** (code PIN ou biométrie) : le code PIN est propre à l’appareil et protégé par la puce TPM, donc inutile s’il est intercepté ailleurs.'] },
          { t: 'code', lang: 'text', caption: 'Qui suis-je ? Quels groupes ?', code: 'C:\\> whoami\nposte01\\marie\nC:\\> whoami /groups\nNom de groupe                  Type    SID\nBUILTIN\\Utilisateurs           Alias   S-1-5-32-545\nBUILTIN\\Administrateurs        Alias   S-1-5-32-544   (Groupe réservé aux refus uniquement)' },
        ],
      },
      {
        id: 'fichiers',
        title: 'Fichiers et permissions NTFS',
        blocks: [
          { t: 'p', text: '**NTFS** est le système de fichiers de Windows. Il associe à chaque fichier et dossier une **liste de contrôle d’accès** (ACL) : des entrées qui autorisent ou refusent des droits à des comptes ou à des groupes. Les formats plus simples (FAT32, exFAT), répandus sur les clés USB, **ne portent pas de permissions**.' },
          {
            t: 'table',
            head: ['Permission', 'Ce qu’elle permet'],
            rows: [
              ['Lecture', 'Voir le contenu et les attributs'],
              ['Lecture et exécution', 'Lire et lancer un programme ou un script'],
              ['Modification', 'Lire, écrire, supprimer'],
              ['Contrôle total', 'Tout, y compris changer les permissions et prendre possession'],
            ],
          },
          { t: 'def', term: 'Héritage', text: 'Par défaut, un fichier ou un sous-dossier reçoit les permissions de son dossier parent. On peut interrompre l’héritage et définir des permissions propres, mais cela complique l’audit.' },
          { t: 'def', term: 'Propriétaire', text: 'Compte qui possède un objet. Le propriétaire peut toujours **modifier les permissions** de l’objet, même sans droit explicite : changer de propriétaire est donc une opération sensible.' },
          { t: 'def', term: 'Partage et NTFS', text: 'Un dossier partagé sur le réseau a des permissions de **partage** et des permissions **NTFS**. Le droit effectif est le plus **restrictif** des deux : un partage en lecture seule reste en lecture seule, même si NTFS accorde la modification.' },
          { t: 'code', lang: 'text', caption: 'Lire les permissions d’un dossier', code: 'C:\\> icacls C:\\Donnees\nC:\\Donnees BUILTIN\\Administrateurs:(OI)(CI)(F)\n            AUTORITE NT\\Système:(OI)(CI)(F)\n            BUILTIN\\Utilisateurs:(OI)(CI)(RX)' },
          { t: 'callout', kind: 'warn', text: 'Les utilisateurs ordinaires ne doivent pas pouvoir modifier `C:\\Windows`, `C:\\Program Files`, ni un dossier de scripts exécutés par une tâche planifiée ou un service : y déposer un fichier leur donnerait les droits du compte qui l’exécute.' },
        ],
      },
      {
        id: 'cli',
        title: 'Inspecter un poste en ligne de commande',
        blocks: [
          { t: 'p', text: 'Deux interpréteurs coexistent : l’**invite de commandes** (`cmd`), ancienne, et **PowerShell**, plus puissant. PowerShell nomme ses commandes (**cmdlets**) sous la forme **Verbe-Nom** (`Get-Process`, `Get-Service`) et son tube transmet des **objets** et non du simple texte, ce qui permet de filtrer sur des propriétés.' },
          {
            t: 'table',
            head: ['Besoin', 'Commande'],
            rows: [
              ['Processus en cours', '`Get-Process`, `tasklist`'],
              ['Services', '`Get-Service`, `sc query`'],
              ['Groupes de l’utilisateur', '`whoami /groups`'],
              ['Réseau du poste', '`ipconfig /all`, `Get-NetIPAddress`'],
              ['Connexions et ports en écoute', '`netstat -ano`, `Get-NetTCPConnection`'],
              ['Aide sur une commande', '`Get-Help Get-Service`'],
            ],
          },
          { t: 'code', lang: 'text', caption: 'Un pipeline PowerShell', code: 'Get-Service | Where-Object Status -eq \'Running\' | Sort-Object DisplayName | Select-Object -First 5\nGet-Process | Sort-Object CPU -Descending | Select-Object -First 5 Name, CPU, Id' },
          { t: 'def', term: 'Cmdlet', text: 'Commande PowerShell dont le nom suit la forme **Verbe-Nom**. Les verbes sont normalisés (`Get` lit, `Set` modifie, `New` crée, `Remove` supprime), ce qui rend les commandes prévisibles ; `Get-Command` les liste et `Get-Help` les documente.' },
          {
            t: 'example',
            title: 'Qu’est-ce qui écoute sur ce poste ?',
            blocks: [
              { t: 'code', lang: 'text', code: 'C:\\> netstat -ano | findstr LISTENING\n  TCP    0.0.0.0:135     0.0.0.0:0   LISTENING   1048\n  TCP    0.0.0.0:445     0.0.0.0:0   LISTENING   4\n  TCP    0.0.0.0:3389    0.0.0.0:0   LISTENING   2216\nC:\\> tasklist /fi "PID eq 2216"' },
              { t: 'p', text: 'Le port 3389 est celui du bureau à distance (RDP). Si l’utilisateur ne s’en sert pas, ce service ouvert est une surface d’attaque inutile : on retrouve le processus par son PID, puis on désactive le service concerné.' },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Lancer PowerShell « en tant qu’administrateur » n’est nécessaire que pour les commandes qui modifient le système. Pour observer, un compte standard suffit souvent, et c’est préférable.' },
        ],
      },
      {
        id: 'protections',
        title: 'Les protections de base',
        blocks: [
          { t: 'p', text: 'Windows embarque l’essentiel des protections nécessaires à un poste personnel ou de petite structure. La difficulté est surtout de **les laisser activées** et à jour.' },
          {
            t: 'table',
            head: ['Protection', 'Ce qu’elle fait', 'Vérification'],
            rows: [
              ['**Windows Update**', 'Corrige les vulnérabilités connues du système et des composants', 'Paramètres › Windows Update'],
              ['**Microsoft Defender Antivirus**', 'Détecte les programmes malveillants, en temps réel', 'Sécurité Windows › Protection contre les virus'],
              ['**Pare-feu Windows**', 'Bloque les connexions entrantes non sollicitées (activé par défaut)', 'Sécurité Windows › Pare-feu'],
              ['**SmartScreen**', 'Avertit avant d’ouvrir un programme ou un site peu connu ou malveillant', 'Sécurité Windows › Contrôle des applications'],
              ['**BitLocker / chiffrement de l’appareil**', 'Chiffre le disque : les données d’un portable volé restent illisibles', 'Sécurité Windows › Sécurité de l’appareil'],
            ],
          },
          { t: 'def', term: 'BitLocker', text: 'Chiffrement du disque dont la clé est protégée par la puce **TPM**. Il protège les données **au repos** (portable perdu ou volé, disque retiré) ; il ne protège pas contre un programme malveillant qui s’exécute pendant la session. Il faut conserver la **clé de récupération** en lieu sûr.' },
          { t: 'def', term: 'Sauvegarde', text: 'Copie des données sur un autre support, **testée** en restauration. Windows propose l’**Historique des fichiers** et les **points de restauration** ; un service en ligne ou un disque externe débranché complètent. La règle 3-2-1 : 3 copies, 2 supports, 1 hors site.' },
          { t: 'callout', kind: 'warn', text: 'Désactiver une protection « pour que ça marche » (antivirus, pare-feu, contrôle de compte) est rarement la bonne solution. On crée une exception ciblée, on documente la raison, et on la réexamine.' },
        ],
      },
      {
        id: 'journaux',
        title: 'Observer ce qui se passe : les journaux',
        blocks: [
          { t: 'p', text: 'Windows consigne ses événements dans des **journaux** que l’on consulte avec l’**Observateur d’événements** (`eventvwr`). Trois journaux de base : **Application**, **Système** (pilotes, services, démarrage) et **Sécurité** (connexions, droits, audit).' },
          {
            t: 'table',
            head: ['ID', 'Journal', 'Signification'],
            rows: [
              ['4624', 'Sécurité', 'Ouverture de session réussie'],
              ['4625', 'Sécurité', 'Échec d’ouverture de session'],
              ['4634', 'Sécurité', 'Fermeture de session'],
              ['4688', 'Sécurité', 'Création d’un processus (si l’audit est activé)'],
              ['7045', 'Système', 'Installation d’un service'],
              ['1102', 'Sécurité', 'Effacement du journal de sécurité'],
            ],
          },
          { t: 'code', lang: 'text', caption: 'Lire les dernières erreurs de connexion', code: 'Get-WinEvent -FilterHashtable @{ LogName = \'Security\'; Id = 4625 } -MaxEvents 10 |\n  Select-Object TimeCreated, Message' },
          { t: 'def', term: 'Journal d’événements', text: 'Enregistrement horodaté d’événements du système et des applications. Sa taille est limitée : par défaut, les entrées les plus anciennes sont **écrasées**. Pour qu’un journal serve en cas d’incident, on augmente sa taille et on le collecte vers un serveur.' },
          {
            t: 'example',
            title: 'Interpréter une série d’échecs',
            blocks: [
              { t: 'p', text: 'Douze événements 4625 sur le compte `marie` en deux minutes, puis un 4624 : quelqu’un a essayé plusieurs mots de passe puis a réussi, ou bien l’utilisatrice a fini par se souvenir du sien. La source (adresse, poste) et l’heure permettent de trancher : une connexion réseau depuis un poste inhabituel, la nuit, est suspecte.' },
            ],
          },
          { t: 'callout', kind: 'key', text: 'Des journaux conservés uniquement sur le poste peuvent être effacés par un attaquant (événement 1102). Pour qu’ils servent à enquêter, il faut les collecter ailleurs en continu : c’est l’objet du cours sur le durcissement du poste.' },
        ],
      },
    ],
    useCases: [
      'Préparer un poste neuf : compte standard, mises à jour, Defender et pare-feu vérifiés, disque chiffré, sauvegarde en place.',
      'Premier diagnostic d’un poste lent ou suspect : processus, services, ports en écoute, journaux.',
      'Contrôler les permissions d’un dossier partagé avant de le mettre à disposition d’une équipe.',
      'Repérer, dans l’Observateur d’événements, une série d’échecs de connexion suivie d’un succès.',
    ],
    commonMistakes: [
      'Travailler au quotidien avec un compte administrateur.',
      'Désactiver le pare-feu, l’antivirus ou le contrôle de compte pour résoudre un problème ponctuel.',
      'Accorder « Contrôle total » à tout le monde pour éviter les erreurs d’accès.',
      'Oublier que le droit effectif sur un partage est le plus restrictif de ceux du partage et de NTFS.',
      'Chiffrer un disque sans conserver la clé de récupération.',
      'Penser qu’une sauvegarde sur le même disque protège d’une panne ou d’un rançongiciel.',
      'Laisser les journaux à leur taille par défaut et ne jamais les consulter ni les collecter.',
    ],
    bestPractices: [
      'Compte standard au quotidien, compte d’administration distinct, mots de passe uniques et authentification multifacteur.',
      'Mises à jour automatiques, Defender et pare-feu actifs, SmartScreen conservé.',
      'Permissions NTFS accordées à des groupes, au plus juste, sans « Contrôle total » inutile.',
      'Disque chiffré, clé de récupération conservée à part, sauvegarde testée et hors du poste.',
      'Inspection régulière du poste (services, ports en écoute) et journaux collectés vers un serveur.',
    ],
    keyPoints: [
      'Windows sépare mode noyau (privilégié) et mode utilisateur ; processus, services et registre se contrôlent.',
      'Les droits se portent par des SID de comptes et de groupes ; l’UAC réduit les risques sans être une frontière.',
      'NTFS gère les permissions ; l’héritage est la règle ; le droit effectif d’un partage est le plus restrictif.',
      'PowerShell nomme ses commandes Verbe-Nom et transmet des objets.',
      'Mises à jour, Defender, pare-feu, chiffrement et sauvegarde sont les protections de base à garder actives.',
      'Les événements 4624 et 4625 racontent les connexions ; les journaux doivent être collectés pour servir.',
    ],
  },
  practice: [
    {
      id: 'lire-comptes',
      kind: 'analysis',
      title: 'Lire les comptes et les groupes d’un poste',
      context: [
        { t: 'p', text: 'Relevé effectué sur le poste personnel d’un petit cabinet :' },
        { t: 'code', lang: 'text', code: 'C:\\> net localgroup Administrateurs\nAdministrateur\nmarie\nstagiaire\nsupport-externe\n\nC:\\> net user stagiaire\nCompte actif   Oui\nMot de passe n\'expire jamais   Oui\nDernier changement de mot de passe   12/03/2021' },
      ],
      steps: ['Relever ce qui est inquiétant dans ce relevé et expliquer pourquoi.', 'Proposer l’organisation des comptes que vous recommanderiez.', 'Indiquer comment vérifier ensuite que les corrections sont en place.'],
    },
    {
      id: 'poste-neuf',
      kind: 'case',
      title: 'Cas pratique : préparer un portable avant sa remise',
      context: [{ t: 'p', text: 'Une petite structure reçoit un portable Windows 11 qui sera confié à une personne en déplacement. Il contient des documents clients. Vous devez le préparer avant la remise.' }],
      steps: ['Lister les réglages de comptes et de mises à jour à vérifier.', 'Indiquer les protections intégrées à contrôler et leur état attendu.', 'Prévoir la protection des données en cas de perte et de panne.'],
    },
    {
      id: 'serie-echecs',
      kind: 'analysis',
      title: 'Interpréter des événements de connexion',
      context: [
        { t: 'p', text: 'Extrait du journal de sécurité d’un poste de comptabilité :' },
        { t: 'code', lang: 'text', code: '23:41:07  4625  Échec   compte=comptable  source=10.0.4.77  type=3\n23:41:09  4625  Échec   compte=comptable  source=10.0.4.77  type=3\n23:41:11  4625  Échec   compte=comptable  source=10.0.4.77  type=3\n… 38 échecs en 3 minutes …\n23:44:52  4624  Succès  compte=comptable  source=10.0.4.77  type=3\n23:45:10  4688  Création de processus  powershell.exe  (parent : services.exe)' },
      ],
      steps: ['Dire ce qui s’est probablement passé et pourquoi.', 'Indiquer les premières actions à mener sur le poste et le compte.', 'Proposer des mesures pour éviter que cela se reproduise.'],
    },
  ],
  questions,
  resources: [
    { title: 'Windows security documentation', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows/security/' },
    { title: 'PowerShell documentation', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/powershell/scripting/overview' },
    { title: 'icacls', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows-server/administration/windows-commands/icacls' },
    { title: 'Windows Event Log', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows/win32/wes/windows-event-log' },
    { title: 'BitLocker overview', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows/security/operating-system-security/data-protection/bitlocker/' },
  ],
};
