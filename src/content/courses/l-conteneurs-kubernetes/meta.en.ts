import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Containers and Kubernetes: isolation, images and hardening',
  summary:
    'Understand what really isolates a container (namespaces, cgroups, capabilities), build safe images, harden a Kubernetes cluster (RBAC, admission, NetworkPolicy, secrets), use audit and runtime detection, and control what runs through registry, signing and admission.',
  objectives: [
    'Distinguish a virtual machine from a container from the isolation viewpoint.',
    'Identify the container configurations that allow an escape to the host.',
    'Build a minimal, non-root, analyzed image.',
    'Harden a Kubernetes cluster: RBAC, Pod Security Standards, NetworkPolicy, secrets.',
    'Use the audit log and runtime detection to spot a compromise in a cluster and respond without destroying evidence.',
    'Control what runs: registry, image analysis and signing, admission policies.',
  ],
  prerequisiteKnowledge: ['Linux command line', 'Notions of networking'],
  skills: {
    'l-k8s-isolation': 'Container isolation and escape risks',
    'l-k8s-images': 'Safe container images',
    'l-k8s-cluster': 'Hardening a Kubernetes cluster',
    'l-k8s-runtime': 'Audit, runtime detection and response',
    'l-k8s-admission': 'Registry, signing and admission',
  },
};
