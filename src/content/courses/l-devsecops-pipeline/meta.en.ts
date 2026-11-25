import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'DevSecOps: securing the CI/CD pipeline and the software supply chain',
  summary:
    'Build security into every stage of the delivery cycle: automated controls (SAST, SCA, secret and IaC scanning, DAST), CI/CD hardening, secrets management, artifact signing and provenance, vulnerability governance and response to a compromised pipeline.',
  objectives: [
    'Place automated security controls in a CI/CD pipeline.',
    'Explain software supply chain attacks and their countermeasures.',
    'Harden a continuous integration workflow (permissions, third-party actions, secrets).',
    'Analyze an Infrastructure as Code configuration before deployment.',
    'Describe SBOM, signing and artifact provenance (SLSA).',
    'Prioritize vulnerabilities by risk (severity, exploitation, exposure, criticality) and manage exceptions and VEX statements.',
    'Detect a compromise of the delivery chain and respond without destroying evidence.',
  ],
  prerequisiteKnowledge: ['Using Git', 'Notions of builds and software dependencies'],
  skills: {
    'l-dso-pipeline': 'Security controls in the pipeline',
    'l-dso-supply': 'The software supply chain',
    'l-dso-ci': 'CI/CD hardening and secrets',
    'l-dso-gouv': 'Vulnerability governance and prioritization',
    'l-dso-incident': 'Detection and response on the delivery chain',
  },
};
