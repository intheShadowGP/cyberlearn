import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'j-analyse-maliciels-investigation',
  practice: {
    'triage-fichier': {
      blocks: [
        { t: 'p', text: 'Ce fichier est très probablement malveillant et mérite une analyse approfondie, sans l’exécuter : double extension trompeuse (`.pdf.exe`) pour un exécutable, empreinte déjà signalée par plusieurs sources de réputation, domaine et chemin de dépôt évocateurs, imports réseau et de création de processus, et contenu empaqueté qui cache le code. Chacun de ces signes, et surtout l’empreinte connue, suffit à le traiter comme malveillant.' },
        { t: 'list', items: ['IOC déjà exploitables : l’empreinte du fichier, le domaine `maj-facturation.example`, le chemin `%APPDATA%\\svc.exe`.'] },
        { t: 'p', text: 'Précautions avant toute analyse dynamique : la mener dans une machine virtuelle isolée et jetable, réseau coupé ou simulé, sans données réelles, avec un instantané propre à restaurer ensuite ; bloquer déjà le domaine et l’empreinte côté SOC et rechercher le chemin de dépôt sur les autres machines.' },
      ],
    },
    'plan-analyse': {
      blocks: [
        { t: 'list', items: ['Préparation : machine virtuelle dédiée, isolée du réseau de l’entreprise, outils installés à l’avance, instantané propre ; récupérer le binaire comme une preuve (copie, empreinte, original préservé) et le conserver dans une archive chiffrée, sans l’exécuter par accident.'] },
        { t: 'list', ordered: true, items: ['Analyse statique d’abord : empreinte comparée à la réputation (par hachage), type réel, chaînes, imports, obfuscation — sans exécuter.', 'Analyse dynamique ensuite si nécessaire : exécution dans la VM isolée, réseau coupé ou simulé, observation des fichiers, de la persistance et des communications, puis restauration de l’instantané.'] },
        { t: 'list', items: ['Livrables défensifs : IOC (empreinte, domaines, chemins, persistance) transmis au SOC pour recherche et blocage, règle YARA pour les variantes, rattachement MITRE ATT&CK, rapport et recommandations de remédiation, puis vérification des détections.'] },
      ],
    },
  },
};
