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
