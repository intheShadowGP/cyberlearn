import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  id: 'detection-engineering-lab',
  title: 'Ingénierie de détection : composer une règle sans faux positifs (expert)',
  category: 'soc',
  level: 4,
  durationMin: 45,
  module: 'I',
  offensive: false,
  context:
    'Vous êtes ingénieur détection dans un SOC. À partir d’une télémétrie de créations de processus contenant des activités légitimes et trois actions malveillantes (macro Office, pièce jointe, webshell), vous composez une règle de détection en activant des conditions. L’atelier mesure en direct la qualité de votre règle : vrais positifs, faux positifs, précision et rappel.',
  objective: 'Concevoir une règle de détection qui repère toutes les activités malveillantes sans générer de faux positifs, et comprendre l’arbitrage précision / rappel propre à l’ingénierie de détection.',
  relatedCourses: ['i-threat-hunting', 'i-soc-detection'],
  steps: [
    'Examinez la télémétrie : identifiez les événements malveillants et les activités légitimes qui leur ressemblent.',
    'Activez une première condition large (par exemple « tout lancement de PowerShell ») et observez les faux positifs.',
    'Affinez : combinez des conditions ciblées pour atteindre un rappel et une précision de 1.',
    'Répondez aux questions, puis lisez le débriefing sur l’industrialisation d’une détection.',
  ],
};
