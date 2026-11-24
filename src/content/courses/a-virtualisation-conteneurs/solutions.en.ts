import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'a-virtualisation-conteneurs',
  practice: {
    'analyser-docker-run': {
      blocks: [
        { t: 'list', items: ['`--privileged`: the container receives almost all rights and access to the host’s devices; the isolation is removed.', '`-v /var/run/docker.sock:…`: the container drives the engine and can start any container, hence obtain the host’s root rights.', '`-v /:/host`: the entire host root is accessible for reading and writing (keys, passwords, configuration).', '`:latest`: the image content can change from one deployment to the next; nothing guarantees that the analyzed image is the one that runs.', '`-p 8080:8080`: the port is published on all interfaces, with no filtering.'] },
        { t: 'p', text: 'An attacker who compromises the application effectively has root access to the host: they can read the data of all the other containers, install persistent access and move to the rest of the network.' },
        { t: 'code', lang: 'bash', code: 'docker run -d --read-only --cap-drop ALL \\\n  --security-opt no-new-privileges \\\n  --user 10001:10001 --memory 256m \\\n  -p 127.0.0.1:8080:8080 \\\n  registry.example.org/app@sha256:<digest>' },
        { t: 'p', text: 'Privileged mode, the socket and the root mount are removed (none of this is needed by a web application); it runs as non-root with a read-only file system and no capability; memory is capped; the port is bound to the local interface behind a reverse proxy; the image is referenced by its digest after scanning.' },
      ],
    },
    'choisir-isolation': {
      blocks: [
        { t: 'list', items: ['**A — internal showcase site**: hardened container (non-root, read-only, capabilities dropped). The code is controlled and lightness is useful. Complement: network segmentation and regular image updates.', '**B — scripts from unknown customers**: one virtual machine or micro-VM per customer (Firecracker, Kata Containers) or an intercepted kernel (gVisor). A container’s shared kernel would be too weak a boundary. Complement: no access to the internal network, strict resource limits, destruction of the environment after use.', '**C — attachment analysis**: disposable VM, isolated from the production network, restored from a snapshot after each analysis. Complement: no shared folders with the host, activity logging.'] },
        { t: 'p', text: 'Monitoring: hypervisor and container engine logs, detection of privileged container starts, sensitive mounts and unusual outbound connections.' },
      ],
    },
  },
};
