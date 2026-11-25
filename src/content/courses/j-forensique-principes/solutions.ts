import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'j-forensique-principes',
  practice: {
    'labo-timeline': {
      blocks: [
        { t: 'p', text: 'La chronologie complète, en UTC, est donnée dans le débriefing du laboratoire « Chronologie multi-sources ».' },
        { t: 'p', text: 'Point d’attention : l’artefact incohérent est celui dont la date de création $SI précède de deux ans sa date $FILE_NAME.' },
      ],
    },
    'collecte-ordre': {
      blocks: [
        { t: 'list', ordered: true, items: ['Photographier écran et environnement, noter l’heure de la montre de référence et celle du poste.', 'Isoler du réseau (Wi-Fi coupé, câble retiré), sans éteindre.', 'Acquérir la mémoire vers le disque externe, calculer l’empreinte, consigner.', 'Récupérer la clé BitLocker (annuaire) ; si indisponible, image logique du volume monté.', 'Arrêt, extraction du SSD, image physique via bloqueur d’écriture, empreinte.', 'Scellés, fiches et chaîne de conservation.'] },
      ],
    },
    'lire-memoire': {
      blocks: [
        { t: 'p', text: '**Enchaînement** : `explorer.exe` (session de l’utilisateur) → `winword.exe` ouvre `facture-0312.docm` (document avec macros, téléchargé) → `powershell.exe` lancé en fenêtre cachée avec une commande **encodée** → `svchost32.exe`, un nom qui imite le processus système légitime `svchost.exe`, avec une connexion externe sur le port 443.' },
        { t: 'list', items: ['**Suspect** : un document bureautique qui lance un interpréteur caché avec une commande encodée.', '**`svchost32.exe`** : le vrai processus s’appelle `svchost.exe` ; ce nom imite un nom de confiance.', '**Balayage seul** : le processus est absent de la liste active (terminé, ou retiré de la liste par dissimulation) mais ses structures restent en mémoire ; sa connexion était encore établie à la capture, ce qui plaide plutôt pour une dissimulation ou une terminaison très récente.'] },
        { t: 'list', items: ['**Disque** : le document dans les téléchargements (origine, courriel d’arrivée), emplacement et empreinte de `svchost32.exe`, Prefetch, Amcache, tâches planifiées et clés Run.', '**Commande** : décoder la commande encodée pour identifier ce qui est téléchargé ou exécuté.', '**Journaux** : connexion du compte `a.roche`, courriel reçu, journaux proxy et pare-feu vers `198.51.100.44`, autres postes contactant la même adresse.', '**Mémoire** : modules chargés et régions de code injecté dans le processus.'] },
        { t: 'p', text: '**Confinement** : isoler le poste du réseau sans l’éteindre (mémoire déjà acquise), bloquer l’adresse à la périphérie, réinitialiser les identifiants du compte, rechercher le même document et la même adresse sur le parc, puis passer à l’éradication. Le tout est consigné avec les heures et les empreintes.' },
      ],
    },
  },
};
