import type { errors as frErrors } from '../fr/errors';

export const errors: Record<keyof typeof frErrors, string> = {
  'backup.err.field': 'Invalid field: {field}',
  'backup.err.id': 'Invalid identifier: {field}',
  'backup.err.number': 'Invalid number: {field}',
  'backup.err.bool': 'Invalid boolean: {field}',
  'backup.err.list': 'Invalid list: {field}',
  'backup.err.value': 'Invalid value: {field}',
  'backup.err.tooBig': 'Data too large: {what}',
  'backup.err.record': 'Invalid record: {what}',
  'backup.err.file': 'Invalid backup file.',
  'backup.err.notOurs': 'This file does not come from CyberAcadémie.',
  'backup.err.format': 'Unsupported format version (accepted formats: {list}).',
  'backup.err.noData': 'No data found.',
  'backup.err.tooLarge': 'File too large (5 MB maximum).',
  'backup.err.json': 'The file is not valid JSON.',
  'backup.err.noIntegrity': 'Integrity fingerprint missing or invalid.',
  'backup.err.integrity': 'Integrity check failed: the file has been modified or is corrupted.',
  'db.err.blocked': 'Database blocked by another tab: close the other CyberAcadémie tabs.',
  'db.err.aborted': 'Transaction aborted',
  'db.err.deleteBlocked': 'Deletion blocked: close the other CyberAcadémie tabs.',
};
