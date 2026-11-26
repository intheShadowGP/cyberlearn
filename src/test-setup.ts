import 'fake-indexeddb/auto';
import { loadEnglishText } from './content/registry';

// Les tests supposent les textes anglais disponibles (en production, ils sont chargés à la demande).
await loadEnglishText();
