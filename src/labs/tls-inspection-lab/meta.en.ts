import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  title: 'Analyzing a TLS configuration and a certificate chain',
  context:
    'You audit the TLS configuration of several of an organization’s web servers. For each one, an analyzer shows the certificate (name, SAN, expiry), the chain status, the enabled protocols and the presence of HSTS, then lists the defects. You then fix the configuration until no anomaly is left.',
  objective: 'Know how to read a TLS configuration, spot the common defects (expired certificate, name not covered, incomplete chain, obsolete protocols, missing HSTS) and fix them.',
  steps: [
    'Select a server configuration and read the defects found, ranked by severity.',
    'Understand each defect: expired certificate, requested name missing from the SAN, incomplete chain, obsolete protocol, missing HSTS.',
    'Apply the fixes one by one and watch the anomalies disappear.',
    'Answer the questions, then read the debriefing on a modern TLS configuration.',
  ],
};
