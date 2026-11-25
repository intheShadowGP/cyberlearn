import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'j-memoire-artefacts-linux',
  practice: {
    'memoire-poste': {
      blocks: [
        {
          t: 'table',
          head: ['Observation', 'Interpretation'],
          rows: [
            ['`rundll32.exe` (PID 7216) child of Outlook', 'A mail client has no reason to launch rundll32: suggests the opening of a booby-trapped attachment'],
            ['Present in `psscan`, absent from `pslist`, with no end time', 'Not terminated: probably unlinked from the kernel list to hide'],
            ['Connection established to 198.51.100.23:443', 'Possible command-and-control channel'],
            ['RWX region with “MZ” header', 'Executable loaded directly in memory (injection or reflective loading)'],
          ],
        },
        { t: 'p', text: 'Prudent conclusion: strong presumption of malicious execution from an email, with concealment and external communication. It would be strengthened by analysis of the extracted region, the reputation and history of 198.51.100.23 (proxy and Zeek logs) and the presence of the original email in the user’s mailbox.' },
        { t: 'list', items: ['Extract the flagged region (`windows.malfind --dump --pid 7216`) and the process executable (`windows.psscan --dump --pid 7216`, since `pslist` does not see it), then compute the hashes.', 'List the process’s DLLs and handles (`windows.dlllist`, `windows.handles`).', 'Retrieve the attachment from Outlook’s storage on the disk image.'] },
      ],
    },
    'serveur-linux': {
      blocks: [
        {
          t: 'table',
          head: ['Time (UTC)', 'Fact', 'Source'],
          rows: [
            ['22:40:55 – 22:41:05', '1,312 failed passwords for `deploy` from 203.0.113.50: brute-force attack', '`auth.log`'],
            ['22:41:07', 'Successful password sign-in: **entry point**', '`auth.log`'],
            ['22:00 – 23:30', 'No `wtmp` entry although a session took place: probable **erasure**', '`wtmp`'],
            ['22:43:10', 'History redirected to `/dev/null`: **concealment**', '`ctime` of the link'],
            ['22:44:31', 'Root cron task every 5 minutes that downloads and runs a script: **persistence**', '`crtime` of the file'],
            ['22:45:02', 'System library modified then backdated (mtime 2021): probable **backdoor**', '`ctime` vs `mtime`'],
          ],
        },
        { t: 'p', text: 'The cron task runs as root whereas the initial access was a `deploy` account: a privilege escalation took place between 22:41 and 22:44; to be searched (sudo in `auth.log`, local vulnerability).' },
        { t: 'list', items: ['Check package integrity (`debsums -c`) and compare the library with the official package’s.', 'Retrieve `u.sh` if possible (proxy logs, cache) and analyze it.', 'Remediation: rebuild the server from a clean image rather than clean it; disable SSH password authentication; change all secrets present on the server; block 203.0.113.50 and search for this address on other systems.'] },
      ],
    },
    'conteneur-compromis': {
      blocks: [
        {
          t: 'table',
          head: ['Time', 'Fact', 'Reading'],
          rows: [
            ['03:12:08', '`POST /upload` accepted', '**Probable entry point**: file sent through an uncontrolled upload feature'],
            ['03:12:41', 'Request to `/uploads/x.php` with a parameter', 'Execution of a dropped script (web backdoor): `docker diff` confirms the creation of `x.php`'],
            ['After 03:12', '`/tmp/.cache/agent` created', 'Implant dropped in a hidden directory'],
            ['03:20:15', 'New container `agent-sync` on the host network', '**Escalation**: the `web-api` container is privileged and mounts the Docker socket, which allows creating containers on the host'],
            ['03:27', 'Key of the `ci-deploy` account used from an unknown address', '**Extension** to the cloud: a key was probably read from the host or the container (variables, files)'],
          ],
        },
        { t: 'p', text: '**Persistence** is provided by the `agent-sync` container (created on the host, outside the application’s view) and by the web backdoor. The privileged container with the socket mounted is the structural cause of the escalation.' },
        { t: 'list', items: ['**Preserve first**: `docker inspect`, `docker logs --timestamps`, `docker top`, `docker diff` and `docker export` of both containers, host memory if possible, then a snapshot of the host volume; hashes of everything, recorded with times.', '**Collect**: engine and host logs (`auth.log`, journald), proxy and firewall logs, cloud audit log for the `ci-deploy` key.'] },
        { t: 'list', items: ['**Containment**: isolate the host through network rules (without powering it off), revoke the `ci-deploy` key and check its other uses, block the unknown address.', '**Eradication**: rebuild the host from a clean image, redeploy the application from a verified image, search the fleet for similar containers or keys.', '**Hardening**: remove `privileged` and the socket mount, limit the container’s rights, control the type and execution of uploaded files, store secrets in a vault rather than in the environment, centralize logs off the host.'] },
      ],
    },
  },
};
