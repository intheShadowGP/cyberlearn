/**
 * Cohérence du système de traduction : mêmes clés, mêmes variables, pluriels complets,
 * pas de français résiduel dans l'anglais, catalogues et parcours traduits en entier.
 */
import { describe, expect, it } from 'vitest';
import { fr } from './fr';
import { en } from './en';
import { translate, translatePlural } from '.';
import { MODULES } from '../content/catalog';
import { MODULE_TEXT_EN } from '../content/catalog.en';
import { PATHS } from '../content/paths';
import { PATH_TEXT_EN } from '../content/paths.en';
import { POSITIONING_BANK } from '../lib/positioning';
import { POSITIONING_EN } from '../lib/positioning.en';

const vars = (s: string) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(',');

/** Mots français très courants qui ne doivent pas apparaître dans un texte anglais. */
const FRENCH_WORDS = /\b(le|la|les|des|une|vous|votre|vos|pour|avec|dans|sur|est|sont|cours|pas|aucun|aucune|ou|et)\b/i;
/** Termes anglais valides qui contiennent ces mots (noms propres, titres, acronymes). */
const ALLOWED = /\b(Active Directory|Zero Trust|Cyber Resilience Act)\b|et seq\./;

describe('dictionnaires FR / EN', () => {
  it('ont exactement les mêmes clés', () => {
    expect(Object.keys(en).sort()).toEqual(Object.keys(fr).sort());
  });

  it('utilisent les mêmes variables {x} dans les deux langues', () => {
    const bad = Object.keys(fr).filter((k) => vars(fr[k as keyof typeof fr]) !== vars(en[k as keyof typeof en]));
    expect(bad, bad.join('\n')).toEqual([]);
  });

  it('fournissent les deux formes de chaque pluriel', () => {
    const missing: string[] = [];
    for (const k of Object.keys(fr)) {
      if (k.endsWith('_one') && !(`${k.slice(0, -4)}_other` in fr)) missing.push(k);
      if (k.endsWith('_other') && !(`${k.slice(0, -6)}_one` in fr)) missing.push(k);
    }
    expect(missing).toEqual([]);
  });

  it('n’ont aucune valeur vide', () => {
    const empty = [...Object.entries(fr), ...Object.entries(en)].filter(([, v]) => !String(v).trim()).map(([k]) => k);
    expect(empty).toEqual([]);
  });

  it('ne laissent aucun mot français courant dans les textes anglais', () => {
    const leaks = Object.entries(en)
      .filter(([, v]) => FRENCH_WORDS.test(String(v).replace(ALLOWED, '')))
      .map(([k, v]) => `${k} : ${v}`);
    expect(leaks, leaks.join('\n')).toEqual([]);
  });

  it('interpole les variables et choisit le bon pluriel', () => {
    expect(translate('en', 'home.resume', { title: 'X' })).toBe('Resume: X');
    expect(translatePlural('fr', 'catalog.results', 1)).toBe('1 cours correspondant.');
    expect(translatePlural('fr', 'catalog.results', 0)).toBe('0 cours correspondant.');
    expect(translatePlural('fr', 'catalog.results', 2)).toBe('2 cours correspondants.');
    expect(translatePlural('en', 'catalog.results', 1)).toBe('1 matching course.');
    expect(translatePlural('en', 'catalog.results', 2)).toBe('2 matching courses.');
  });
});

describe('catalogues traduits', () => {
  it('chaque discipline anglaise a autant de sujets que la discipline française', () => {
    for (const m of MODULES) {
      expect(MODULE_TEXT_EN[m.id].topics.length, `discipline ${m.id}`).toBe(m.topics.length);
      expect(MODULE_TEXT_EN[m.id].title.trim()).not.toBe('');
    }
  });

  it('chaque parcours est traduit avec la même structure', () => {
    for (const p of PATHS) {
      const tx = PATH_TEXT_EN[p.id];
      expect(tx, `parcours ${p.id}`).toBeDefined();
      expect(tx!.objectives.length).toBe(p.objectives.length);
      expect(tx!.prerequisites.length).toBe(p.prerequisites.length);
      expect(tx!.finalProject.deliverables.length).toBe(p.finalProject!.deliverables.length);
      expect(tx!.finalProject.criteria.length).toBe(p.finalProject!.criteria.length);
    }
  });

  it('chaque question de positionnement est traduite avec quatre options', () => {
    for (const q of POSITIONING_BANK) {
      const tx = POSITIONING_EN[q.id];
      expect(tx, `question ${q.id}`).toBeDefined();
      expect(tx!.options).toHaveLength(4);
    }
    expect(Object.keys(POSITIONING_EN).sort()).toEqual(POSITIONING_BANK.map((q) => q.id).sort());
  });
});

describe('fiches de vérification', () => {
  it('chaque fiche française a sa version anglaise (mêmes nombres d’éléments)', async () => {
    const { VERIFICATION } = await import('../content/verification');
    const { VERIFICATION_EN } = await import('../content/verification.en');
    const bad: string[] = [];
    for (const [id, v] of Object.entries(VERIFICATION)) {
      const e = VERIFICATION_EN[id];
      if (!e) bad.push(`${id} : manquante`);
      else if (e.versions.length !== v.versions.length || e.evolving.length !== v.evolving.length) bad.push(`${id} : structure`);
    }
    expect(bad, bad.join('\n')).toEqual([]);
  });
});
