import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'g-code-sur-langages',
  practice: {
    'revue-python': {
      blocks: [
        {
          t: 'table',
          head: ['Weakness', 'Consequence'],
          rows: [
            ['`pickle.loads` on an uploaded file', 'Arbitrary code execution on the server'],
            ['`shell=True` with external `name` and `size`', 'Command injection'],
            ['`name` used in a path', 'Path traversal (`../`) for reading and writing'],
            ['Token from `random.randint`', 'Predictable token, and only a million possible values'],
            ['No validation of `size`', 'Aberrant values, excessive resource consumption'],
          ],
        },
        { t: 'code', lang: 'python', caption: 'Fixed version', code: 'import re, secrets, subprocess\nfrom pydantic import BaseModel, Field\n\nNAME = re.compile(r"^[a-zA-Z0-9_-]{1,64}$")\n\nclass Options(BaseModel):\n    width: int = Field(gt=0, le=4000)\n    height: int = Field(gt=0, le=4000)\n\n@app.post("/convert")\ndef convert():\n    options = Options.model_validate_json(request.files["options"].read())\n    name = request.form["name"]\n    if not NAME.fullmatch(name):\n        return {"error": "invalid name"}, 400\n    subprocess.run(\n        ["convert", f"/data/{name}", "-resize", f"{options.width}x{options.height}", f"/out/{name}.png"],\n        check=True, timeout=30,\n    )\n    token = secrets.token_urlsafe(32)  # to be tied to the file on the server side\n    return {"download": f"/out/{name}.png?token={token}"}' },
        { t: 'p', text: 'Tools: Bandit flags `pickle`, `shell=True` and `random` used for security; Semgrep has rules for command injection and path traversal in Flask.' },
      ],
    },
    'politique-equipe': {
      blocks: [
        {
          t: 'table',
          head: ['Rule', 'Automatic check'],
          rows: [
            ['Validate any external input by schema (zod, pydantic, Bean Validation)', 'Code review; Semgrep rules on routes without validation'],
            ['Never a shell with external data (`shell=True`, `exec`, `Runtime.exec` with `sh -c`)', 'Bandit, Semgrep, ESLint'],
            ['Never dynamic evaluation (`eval`, `exec`, `new Function`, `Invoke-Expression`)', 'ESLint `no-eval`, Bandit, PSScriptAnalyzer'],
            ['No native deserialization of external data (pickle, ObjectInputStream)', 'Bandit, Semgrep, CodeQL'],
            ['Parameterized SQL queries only', 'Semgrep, CodeQL'],
            ['Cryptographic randomness and constant-time comparisons for secrets', 'Bandit, Semgrep'],
            ['Strict modes: TypeScript `strict`, `set -euo pipefail`, `Set-StrictMode`', 'Compiler configuration, ShellCheck, PSScriptAnalyzer'],
            ['Pinned and analyzed dependencies', 'SCA analysis in the pipeline'],
          ],
        },
        { t: 'p', text: 'Existing code: measure first (initial report), then block in the pipeline only the **new** serious problems; handle the debt in order of risk (Internet-exposed code first) with a quantified target per quarter.' },
      ],
    },
    'revue-fichiers': {
      blocks: [
        {
          t: 'table',
          head: ['Weakness', 'Consequence'],
          rows: [
            ['API key in the repository', 'Compromised secret as soon as a third party reads the repository or its history'],
            ['`name` concatenated into the extraction path', 'Path traversal: writing outside the intended folder'],
            ['`extractall` without checking entries', 'Zip Slip, decompression bomb, symbolic links in the archive'],
            ['Temporary file with a fixed name in `/tmp`', 'Symbolic link attack, collisions between simultaneous requests'],
            ['`except Exception: pass`', 'The indexing failure is ignored, no trace for diagnosis'],
            ['Log built by concatenation with `user`', 'Log injection (fake entries), uncontrolled data in the log'],
          ],
        },
        { t: 'code', lang: 'python', caption: 'Fixed version (excerpt)', code: 'import os, re, secrets, tempfile, zipfile\nfrom pathlib import Path\n\nAPI_KEY = os.environ["API_KEY"]                 # injected at deployment\nBASE = Path("/srv/documents").resolve()\nIDENTIFIER = re.compile(r"^[a-z0-9-]{1,40}$")\nMAX_TOTAL = 50_000_000\n\ndef extract(archive, destination):\n    total = 0\n    for entry in archive.infolist():\n        target = (destination / entry.filename).resolve()\n        if not target.is_relative_to(destination):\n            raise ValueError("entry outside the folder")\n        total += entry.file_size\n        if total > MAX_TOTAL:\n            raise ValueError("archive too large")\n    archive.extractall(destination)\n\n@app.post("/upload")\ndef upload():\n    name = request.form["name"]\n    if not IDENTIFIER.fullmatch(name):\n        return "invalid name", 400\n    destination = (BASE / secrets.token_hex(8)).resolve()\n    destination.mkdir(mode=0o700)\n    extract(zipfile.ZipFile(request.files["archive"]), destination)\n    with tempfile.NamedTemporaryFile("w", delete=True) as tmp:\n        tmp.write(request.form["comment"])\n        tmp.flush()\n        try:\n            index(tmp.name)\n        except Exception:\n            log.error("indexing impossible", exc_info=True)\n            return "internal error", 500\n    log.info("upload", extra={"user": request.form["user"]})   # structured log\n    return "ok"' },
        { t: 'p', text: 'Tools and checks: a secret scanner (gitleaks) in pre-commit; Bandit and Semgrep for `extractall`, `except … pass` and predictable temporary files; tests that send an archive containing `../x` and a very large archive; the already published key must be revoked and replaced.' },
      ],
    },
  },
};
