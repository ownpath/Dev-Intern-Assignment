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

Opening the pull request is not the submission. Use the final-submission Google
Form provided alongside this repository in your assignment invitation. Submit:

- your name and email address;
- your GitHub username; and
- the pull request URL from your own fork.

Send the pull request URL, not the branch or repository URL. If you spot a
mistake after submitting, push the fix and submit the form again. Your newest
response replaces the previous submission.

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
