import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "http-headers-lab",
  "hints": [
    "Browser protections are driven by **headers**: a missing header is a protection not requested.",
    "A session cookie must carry the `Secure`, `HttpOnly` and `SameSite` attributes.",
    "The `Server` and `X-Powered-By` headers often reveal versions that are pointless to publish."
  ],
  "questions": [
    {
      "id": "httplab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "f-base-http"
      ],
      "prompt": "How many flaws does the audit detect in the original response?",
      "placeholder": "number"
    },
    {
      "id": "httplab-q2",
      "type": "single",
      "difficulty": 1,
      "skills": [
        "f-base-navigateur"
      ],
      "prompt": "Which attribute prevents a page script from reading the session cookie?",
      "options": [
        {
          "id": "a",
          "text": "Secure"
        },
        {
          "id": "b",
          "text": "HttpOnly"
        },
        {
          "id": "c",
          "text": "SameSite"
        },
        {
          "id": "d",
          "text": "Path"
        }
      ]
    },
    {
      "id": "httplab-q3",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "f-base-navigateur"
      ],
      "prompt": "What is the `Strict-Transport-Security` header for?",
      "options": [
        {
          "id": "a",
          "text": "Encrypting the page content"
        },
        {
          "id": "b",
          "text": "Telling the browser to use only HTTPS for this site, for a given duration"
        },
        {
          "id": "c",
          "text": "Forbidding the site from being displayed in a frame"
        },
        {
          "id": "d",
          "text": "Limiting script sources"
        }
      ]
    },
    {
      "id": "httplab-q4",
      "type": "truefalse",
      "difficulty": 1,
      "skills": [
        "f-base-pratiques"
      ],
      "prompt": "The `X-Powered-By: PHP/7.2.1` header is irrelevant to security."
    },
    {
      "id": "httplab-q5",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "f-base-navigateur",
        "f-base-pratiques"
      ],
      "prompt": "What is the main role of `Content-Security-Policy`?",
      "options": [
        {
          "id": "a",
          "text": "Encrypting cookies"
        },
        {
          "id": "b",
          "text": "Limiting the script and resource sources the browser accepts, which reduces the impact of an XSS injection"
        },
        {
          "id": "c",
          "text": "Hiding the server version"
        },
        {
          "id": "d",
          "text": "Speeding up page loading"
        }
      ]
    }
  ]
};
