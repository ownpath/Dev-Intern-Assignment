# Assignment

Fix the checkout issue described in [`ISSUE.md`](./ISSUE.md).

The issue report intentionally gives only the customer symptom and the expected outcome for one cart. You will need to inspect the code and decide which supporting files are relevant.

## Required work

- Preserve the existing `calculateCheckoutTotals(cart)` API.
- Preserve the existing `buildCheckoutSummaryView(totals)` API.
- Keep the fix focused; do not replace the checkout flow.
- Add or update tests that prove the behavior you changed.
- Complete `DECISIONS.md` personally, after reviewing your final diff. Record
  where you corrected, narrowed, or rejected an initial suggestion.
- Use commits for useful checkpoints. Commit count is not scored; clarity matters
  more than manufacturing a particular history shape.
- Open the pull request manually, following the rules in "Where to submit" below.

## Where to submit

1. Fork this repository into your own GitHub account.
2. Keep your fork **public**, so we can read your pull request.
3. Work on a branch in your fork.
4. Open the pull request **into `main` on your own fork**.

Do not open a pull request against this repository. Pull requests opened here are
visible to every other candidate and will not be reviewed.

## Naming

Use a short, descriptive branch name and pull request title that explain the
checkout fix. Follow normal Git naming conventions and keep the branch name,
commit messages, and pull request title consistent with the work you performed.

If you get the names wrong, fix them and tell us in the pull request description.
It is not a rejection, but we would rather see it corrected than left inconsistent.


## How to submit

Opening the pull request is not the submission. Send a `POST` request with a
JSON body to:

`https://checkout-grader-production.up.railway.app/submissions`

The JSON body must contain your enrolled email address and pull request URL:

```json
{
  "email": "you@example.com",
  "prUrl": "https://github.com/YOUR-USERNAME/YOUR-FORK/pull/1"
}
```

Set the request's `Content-Type` header to `application/json`. You may use any
HTTP client; a specific command is intentionally not prescribed.

Use the same email address that received the assignment invitation. The grader
verifies the pull request and records its GitHub owner automatically; do not send
a separate GitHub username.

A successful submission replies with `202` and a receipt:

```json
{ "id": 41, "received": "...", "message": "Submission received." }
```

Send the pull request URL, not the branch or repository URL. If you spot a
mistake after submitting, push the fix and send the same request again with the
same email address and GitHub account. The newest accepted submission replaces
the previous one.

Common error responses are:

- `400` — the request or pull request is invalid.
- `403` — the email is not in the enrolled-candidate list.
- `409` — that email was already submitted from another GitHub account.
- `429` — too many submission attempts; wait and try again.
- `503` — enrollment or GitHub validation is temporarily unavailable; retry later.

A `202` response confirms receipt only. Grading results remain with the hiring
team and are not available from a public status page.

## AI use

AI tools are allowed for code search, debugging, explanation, and implementation help.

Do not ask an AI agent to:

- Write `DECISIONS.md` for you.
- Open the pull request for you.
- Push code you have not personally reviewed.

Your PR will be judged partly on whether your reasoning matches the code you submitted. We may ask follow-up questions from your `DECISIONS.md`.

## How this is reviewed

A correct diff is the entry bar, not the score. The parts of `DECISIONS.md` that
carry the most weight are section 3 (what you rejected or narrowed) and section 6
(how you directed the investigation). Those are the sections we will ask you about
in person, so write them from what you actually did.

## Constraints

- Use only the Node.js standard library.
- Do not weaken or delete existing tests.
- Do not add generated dependencies or credentials.
- You may modify files in `src/` and add tests under `tests/public/`.

## Timebox

Spend no more than 90 minutes. If you do not finish, submit what you have and
explain what remains.
