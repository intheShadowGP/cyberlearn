import { useEffect, useState } from 'react';
import { emptySnapshot, loadSnapshot, subscribe, type Snapshot } from './progress';

export interface SnapshotState {
  data: Snapshot;
  ready: boolean;
  error: string | null;
}

/** Instantané réactif de toutes les données locales. */
export function useSnapshot(): SnapshotState {
  const [state, setState] = useState<SnapshotState>({ data: emptySnapshot(), ready: false, error: null });
  useEffect(() => {
    let alive = true;
    const load = () =>
      loadSnapshot()
        .then((data) => alive && setState({ data, ready: true, error: null }))
        .catch((e: unknown) =>
          alive &&
          setState((s) => ({ ...s, ready: true, error: e instanceof Error ? e.message : 'Erreur de stockage' })),
        );
    void load();
    const unsub = subscribe(() => void load());
    return () => {
      alive = false;
      unsub();
    };
  }, []);
  return state;
}
