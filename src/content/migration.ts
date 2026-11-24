/**
 * Garde-fou de la Phase 5 (traduction FR/EN, banques de 40 à 60 questions par cours, quatre niveaux par module).
 *
 * Tant que la migration est en cours (`PHASE5_COMPLETE = false`), les tests de couverture
 * globale (tous les cours migrés, toutes les traductions présentes, quatre niveaux par module)
 * sont désactivés, mais les tests de qualité s'appliquent déjà à chaque cours migré.
 * Le passage à `true` rend la couverture obligatoire : il n'est fait qu'une fois tout le contenu livré.
 * L'état d'avancement est suivi dans docs/PHASE5_PROGRESS.md.
 */
export const PHASE5_COMPLETE = false;

/** Taille de banque attendue par cours. */
export const BANK_MIN = 40;
export const BANK_MAX = 60;
