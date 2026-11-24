import { useEffect } from 'react';
import { t } from '../i18n';
import { useLang } from '../i18n';

export function usePageTitle(title: string): void {
  const lang = useLang();
  useEffect(() => {
    const app = t('title.suffix');
    document.title = title ? `${title} — ${app}` : app;
  }, [title, lang]);
}
