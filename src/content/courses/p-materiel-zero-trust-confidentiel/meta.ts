import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'p-materiel-zero-trust-confidentiel',
  module: 'P',
  topics: ['P-architecture-zero-trust', 'P-securite-materielle', 'P-tpm', 'P-hsm', 'P-secure-boot', 'P-confidential-computing', 'P-side-channel-attacks', 'P-fault-injection', 'P-rowhammer', 'P-securite-des-systemes-distribues', 'P-cryptographie-avancee', 'P-securite-quantique'],
  title: 'Sécurité matérielle, Zero Trust et informatique confidentielle',
  level: 4,
  durationMin: 140,
  summary:
    'Explorer les fondations avancées de la sécurité : architecture Zero Trust, racine de confiance matérielle (TPM, HSM, Secure Boot), informatique confidentielle et enclaves, menaces matérielles (canaux auxiliaires, injection de fautes, Rowhammer) et leurs mitigations, puis les horizons de recherche (systèmes distribués, cryptographie avancée, sécurité quantique).',
  objectives: [
    'Expliquer les principes d’une architecture Zero Trust et ce qui la distingue d’un périmètre classique.',
    'Décrire la racine de confiance matérielle : TPM, HSM, Secure Boot et attestation.',
    'Expliquer l’informatique confidentielle et l’apport des enclaves.',
    'Comprendre, à des fins défensives, les attaques matérielles (canaux auxiliaires, fautes, Rowhammer) et leurs contre-mesures.',
    'Situer les enjeux de la sécurité des systèmes distribués, de la cryptographie avancée et de la menace quantique.',
    'Expliquer l’attestation à distance, la protection des micrologiciels et la sécurité de la chaîne d’approvisionnement.',
    'Planifier une migration post-quantique à partir d’un inventaire cryptographique et de l’agilité cryptographique.',
  ],
  prerequisites: ['e-chiffrement-tls-pki'],
  prerequisiteKnowledge: ['Chiffrement, PKI, gestion des clés et post-quantique (cours e-chiffrement-tls-pki)', 'Notions de firmware et de démarrage sécurisé (cours n-iot-firmware)'],
  skills: [
    { id: 'p-zero-trust', label: 'Architecture Zero Trust', level: 3 },
    { id: 'p-racine', label: 'Racine de confiance matérielle et informatique confidentielle', level: 4 },
    { id: 'p-menaces-hw', label: 'Menaces matérielles et contre-mesures', level: 4 },
    { id: 'p-horizons', label: 'Systèmes distribués, cryptographie avancée et quantique', level: 4 },
    { id: 'p-attestation', label: 'Attestation, micrologiciels et chaîne d’approvisionnement', level: 4 },
    { id: 'p-pqc', label: 'Agilité cryptographique et migration post-quantique', level: 4 },
  ],
  sectionCount: 7,
  questionCount: 40,
  quizSize: 10,
};
