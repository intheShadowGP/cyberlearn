import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import { Quiz } from './Quiz';
import type { Correction, Question } from '../content/types';

afterEach(cleanup);

const questions: Question[] = [
  { id: 'q1', type: 'single', prompt: 'Quelle est la bonne option ?', skills: ['k'], difficulty: 1, options: [{ id: 'a', text: 'Option A' }, { id: 'b', text: 'Option B' }, { id: 'c', text: 'Option C' }] },
  { id: 'q2', type: 'truefalse', prompt: 'Affirmation à juger ici.', skills: ['k'], difficulty: 1 },
];
const corrections: Record<string, Correction> = {
  q1: { type: 'single', correct: 'b', explanation: 'EXPLICATION-SECRETE-Q1 suffisamment détaillée pour le test.' },
  q2: { type: 'truefalse', correct: true, explanation: 'EXPLICATION-SECRETE-Q2 suffisamment détaillée pour le test.' },
};

describe('Quiz', () => {
  it('ne charge les corrections qu’à la validation, puis enregistre une seule fois', async () => {
    const load = vi.fn(async () => corrections);
    const onFinished = vi.fn(async () => undefined);
    render(<Quiz sessionKey="t" questions={questions} loadCorrections={load} skillLabels={{ k: 'Compétence' }} onFinished={onFinished} />);

    expect(load).not.toHaveBeenCalled();
    expect(document.body.textContent).not.toContain('EXPLICATION-SECRETE');

    fireEvent.click(screen.getByLabelText('Option B'));
    fireEvent.click(screen.getByLabelText('Vrai'));
    const btn = screen.getByRole('button', { name: 'Valider mes réponses' });
    fireEvent.click(btn);
    fireEvent.click(btn); // double clic

    await waitFor(() => expect(screen.getByText(/EXPLICATION-SECRETE-Q1/)).toBeTruthy());
    await waitFor(() => expect(onFinished).toHaveBeenCalledTimes(1));
    expect(load).toHaveBeenCalledTimes(1);
    const [score] = onFinished.mock.calls[0] as unknown as [{ percent: number }];
    expect(score.percent).toBe(100);
    await waitFor(() => expect(screen.getByRole('heading', { name: 'Évaluation' })).toBeTruthy());
  });

  it('erreur de chargement : message et retour à la saisie', async () => {
    const load = vi.fn(async () => {
      throw new Error('hors ligne');
    });
    render(<Quiz sessionKey="t2" questions={questions} loadCorrections={load} skillLabels={{}} onFinished={vi.fn()} />);
    fireEvent.click(screen.getByRole('button', { name: 'Valider mes réponses' }));
    await waitFor(() => expect(screen.getByRole('alert').textContent).toMatch(/corrections/));
    expect(screen.getByRole('button', { name: 'Valider mes réponses' })).toBeTruthy();
  });
});
