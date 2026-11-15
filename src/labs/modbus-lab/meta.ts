import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  id: 'modbus-lab',
  title: 'Trames Modbus suspectes dans une station de pompage',
  category: 'ics',
  level: 2,
  durationMin: 30,
  module: 'N',
  offensive: false,
  context:
    "La sonde de supervision passive d'une station de pompage d'eau potable fictive a levé une alerte à 07:14. Vous disposez de la capture des requêtes Modbus TCP envoyées à l'automate et de la documentation du site.",
  objective: 'Décoder des trames Modbus, distinguer une commande légitime d’une commande malveillante et évaluer l’impact physique.',
  relatedCourses: ['n-ics-modbus'],
  steps: [
    'Lisez la documentation du site et la main courante.',
    'Décodez chaque trame de la capture.',
    'Identifiez les écritures et comparez leur source à la station SCADA.',
    'Évaluez l’impact physique et répondez aux questions.',
  ],
};
