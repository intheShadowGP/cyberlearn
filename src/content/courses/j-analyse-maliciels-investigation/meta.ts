import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'j-analyse-maliciels-investigation',
  module: 'J',
  topics: ['J-analyse-de-malware', 'J-analyse-reseau', 'J-analyse-de-journaux'],
  title: 'Analyse de maliciels en investigation : triage, environnement isolé et indicateurs',
  level: 3,
  durationMin: 125,
  summary:
    'Analyser un fichier suspect dans un cadre d’investigation défensive : préparer un environnement isolé, trier et analyser un échantillon sans l’exécuter, observer son comportement de façon encadrée, puis extraire des indicateurs de compromission pour la détection.',
  objectives: [
    'Situer l’analyse de maliciels dans une investigation : comprendre, détecter, contenir — pas attaquer.',
    'Préparer un environnement d’analyse isolé et manipuler un échantillon sans risque de propagation.',
    'Mener un triage et une analyse statique (empreintes, type, chaînes, imports) sans exécuter le fichier.',
    'Observer le comportement d’un échantillon de façon encadrée et en tirer des indicateurs.',
    'Produire des indicateurs de compromission et des règles de détection à partir des constats.',
    'Analyser de façon défensive un document piégé ou un script (macros, commandes encodées) et en extraire des indicateurs sans l’exécuter.',
    'Rédiger un rapport d’analyse, qualifier et partager des indicateurs selon le TLP, dans le respect du cadre légal.',
  ],
  prerequisites: ['j-memoire-artefacts-linux'],
  prerequisiteKnowledge: ['Analyse mémoire, système de fichiers et artefacts (cours j-memoire-artefacts-linux)', 'Principes de forensique et chaîne de conservation (cours j-forensique-principes)'],
  skills: [
    { id: 'j-mw-role', label: 'Rôle de l’analyse de maliciels en investigation', level: 2 },
    { id: 'j-mw-env', label: 'Environnement isolé et manipulation sûre', level: 3 },
    { id: 'j-mw-statique', label: 'Triage et analyse statique', level: 3 },
    { id: 'j-mw-dynamique', label: 'Analyse comportementale et indicateurs', level: 3 },
    { id: 'j-mw-documents', label: 'Documents piégés et scripts : analyse défensive', level: 3 },
    { id: 'j-mw-rapport', label: 'Rapport, partage et cadre légal', level: 3 },
  ],
  sectionCount: 7,
  questionCount: 40,
  quizSize: 10,
};
