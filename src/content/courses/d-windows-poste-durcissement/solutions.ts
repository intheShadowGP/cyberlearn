import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'd-windows-poste-durcissement',
  practice: {
    'chaine-office': {
      blocks: [
        {
          t: 'table',
          head: ['Heure', 'Étape', 'Tactique (MITRE ATT&CK)', 'Mesure qui l’aurait bloquée'],
          rows: [
            ['09:14:02', 'Word lance PowerShell caché et encodé (macro)', 'Accès initial / Exécution', 'Règle ASR « empêcher Office de créer des processus enfants » ; macros bloquées pour les fichiers venant d’Internet'],
            ['09:14:03', 'Résolution d’un domaine imitant Microsoft, connexion vers 203.0.113.7', 'Commande et contrôle', 'Filtrage DNS et proxy sortant ; mode de langage restreint (pas d’accès à `Net.WebClient`)'],
            ['09:14:05', 'Dépôt de `upd.exe` dans AppData', 'Exécution', 'Contrôle des applications (exécution interdite depuis les profils utilisateurs)'],
            ['09:14:06', 'Clé `Run` pour relancer `upd.exe` à chaque ouverture de session', 'Persistance', 'Détection Sysmon 13 ; contrôle des applications empêchant le lancement'],
            ['09:14:09', 'Accès à `lsass.exe`', 'Accès aux identifiants', 'Protection LSA (RunAsPPL), Credential Guard, règle ASR de protection de LSASS'],
          ],
        },
        { t: 'callout', kind: 'warn', text: 'L’accès à LSASS sept secondes après l’ouverture du document impose de considérer les identifiants de l’utilisatrice, et de tout compte connecté sur ce poste, comme compromis : isolement du poste et réinitialisation des mots de passe.' },
      ],
    },
    'chasse-persistance': {
      blocks: [
        {
          t: 'table',
          head: ['Entrée', 'Verdict', 'Raison'],
          rows: [
            ['Tâche \\Microsoft\\Windows\\UpdateCheck', '**Suspecte**', 'Nom imitant Windows, mais binaire dans `C:\\Users\\Public`, dossier modifiable par tous, exécuté en SYSTEM ; créée en pleine nuit'],
            ['Service WinUpdateSvc', '**Suspect**', 'Démarrage automatique en SYSTEM d’un exécutable situé dans un dossier modifiable ; les services légitimes sont sous `C:\\Windows` ou `C:\\Program Files`'],
            ['Run HKLM OneDriveSync', 'Légitime', 'Chemin sous `C:\\Program Files`, programme signé et attendu'],
            ['Dossier Démarrage', 'Rien à signaler', 'Vide'],
          ],
        },
        { t: 'list', items: ['Ordre d’action : isoler le poste, collecter ce qui sert à l’analyse (copie et empreinte de `upd.exe` et `svc.exe`, configuration de la tâche et du service, journaux), puis **désactiver** la tâche et le service avant de supprimer les binaires, sinon ils se relancent.', 'Rechercher d’autres points d’entrée et la source de l’intrusion ; considérer comme exposés les comptes qui ont ouvert une session sur le poste.'] },
        { t: 'list', items: ['Journaux : Sysmon 1, 11 et 13 autour de la création des fichiers, 4698 (création de la tâche), 7045 (installation du service), 4688 et 4624 pour l’origine de la connexion.', 'Détection durable : alerte sur la création d’une tâche ou d’un service dont le binaire est hors de `C:\\Windows` et `C:\\Program Files`, et inventaire régulier des points de démarrage.'] },
        { t: 'callout', kind: 'tip', text: 'La récidive après nettoyage est le signe classique d’une persistance oubliée : on cherche d’abord comment le programme revient, puis on le retire de tous ses points d’entrée.' },
      ],
    },
    'plan-durcissement': {
      blocks: [
        {
          t: 'table',
          head: ['Priorité', 'Mesure', 'Déploiement', 'Indicateur'],
          rows: [
            ['1', 'Windows LAPS : mot de passe d’administrateur local unique', 'GPO, puis vérification de la rotation', '% de postes avec un mot de passe LAPS récent'],
            ['2', 'Retrait des droits d’administration aux utilisateurs', 'Par vagues, avec un processus d’élévation pour les besoins réels', 'Nombre de membres du groupe Administrateurs local'],
            ['3', 'Collecte des journaux (4688, 4104, Sysmon) vers le SIEM', 'Windows Event Forwarding ou agent', '% de postes qui envoient des événements chaque jour'],
            ['4', 'BitLocker sur les portables, clé sauvegardée dans AD', 'GPO de sauvegarde **avant** activation', '% de portables chiffrés avec clé enregistrée'],
            ['5', 'Règles ASR et protection contre les falsifications', 'Audit 2 à 4 semaines, exclusions, puis blocage', 'Nombre de règles en mode blocage'],
          ],
        },
        { t: 'p', text: 'L’ordre suit le rapport coût/bénéfice : LAPS et le retrait des droits d’administration coupent les chemins de propagation les plus fréquents ; la journalisation permet ensuite de mesurer l’effet des autres mesures.' },
      ],
    },
  },
};
