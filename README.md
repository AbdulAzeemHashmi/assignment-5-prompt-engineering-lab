<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&duration=3000&pause=1000&color=6C63FF&center=true&vCenter=true&multiline=true&width=700&height=100&lines=Prompt+Engineering+Battle+Lab;Assignment+%235+by+AbdulAzeemHashmi" alt="Typing SVG" />

<br/>

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
<img src="https://img.shields.io/badge/AI%20Powered-Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white" />
<img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />

<br/><br/>

<img src="https://img.shields.io/badge/Missions-6%20Completed-brightgreen?style=flat-square&logo=checkmarx" />
<img src="https://img.shields.io/badge/PRs-6%20Merged-blueviolet?style=flat-square&logo=git" />
<img src="https://img.shields.io/badge/Issues-6%20Closed-orange?style=flat-square&logo=github" />
<img src="https://img.shields.io/badge/Tests-21%20Passing-success?style=flat-square&logo=jest" />

</div>

---

## ?? Project Overview

> A structured, hands-on JavaScript lab that demonstrates **real-world AI-assisted software development** using prompt engineering techniques across 6 progressive missions. Every step follows the full professional Git workflow: **Issue -> Branch -> PR -> Review -> Merge -> Close**.

---

## ?? Author

| Field | Details |
|:--|:--|
| ?? Name | Abdul Azeem Hashmi |
| ?? GitHub | [@AbdulAzeemHashmi](https://github.com/AbdulAzeemHashmi) |
| ?? Email | abdulazeemhashmi29@gmail.com |

---

## ?? Repository Structure

```
assignment-5-prompt-engineering-lab/
?
??? ?? .github/
?   ??? ?? pull_request_template.md      # Standardized PR template
?
??? ?? prompts/                           # All prompt documentation
?   ??? ?? 01-bad-vs-good-prompts.md     # Mission 1 prompt docs
?   ??? ?? 02-code-generation-prompts.md # Mission 2 prompt docs
?   ??? ?? 03-debugging-prompts.md       # Mission 3 prompt docs
?   ??? ?? 04-refactoring-prompts.md     # Mission 4 prompt docs
?   ??? ?? 05-code-review-prompts.md     # Mission 5 prompt docs
?   ??? ?? 06-responsible-ai-prompts.md  # Mission 6 prompt docs
?
??? ?? src/                              # JavaScript source files
?   ??? ?? passwordStrength.js           # Mission 1 output
?   ??? ?? validator.js                  # Mission 2 + 5 output
?   ??? ?? discountCalculator.js         # Mission 3 output
?   ??? ?? textAnalyzer.js              # Mission 4 output
?
??? ?? tests/
?   ??? ?? manual-test-cases.md         # Manual test case logs
?
??? ?? .gitignore
??? ?? README.md
??? ?? ai-usage-report.md               # AI token usage + reflection
??? ?? responsible-ai-policy.md         # Team AI usage policy
```

---

## ??? Git Workflow Used

```
?? New Issue Created
    |
    v
?? Feature Branch Created
    |
    v
??  Code + Prompt Docs Written
    |
    v
?? Commit(s) Made
    |
    v
?? Pull Request Opened (with PR Template)
    |
    v
?? Code Review (Manual or AI-assisted)
    |
    v
? PR Merged + Issue Closed
```

---

## ?? 6 Missions Completed

<details>
<summary><b>?? Mission 1: Bad Prompt vs Professional Prompt</b></summary>

**Branch:** `docs/bad-vs-good-prompts`

**Goal:** Compare a bad, better, and professional prompt for generating a password strength checker.

**Key Learning:** A professional prompt using Role + Task + Constraints + Output Format + Edge Cases produces a fully safe, reusable, and well-documented function.

**Files:**
- `prompts/01-bad-vs-good-prompts.md`
- `src/passwordStrength.js`

```javascript
// Professional output: Handles types, gives score + status + feedback
checkPasswordStrength("Ab1!defg")
// { score: 5, status: "Strong", feedback: [], details: { ... } }
```

</details>

<details>
<summary><b>?? Mission 2: Constraint-Based Code Generation</b></summary>

**Branch:** `feature/form-validator`

**Goal:** Generate a reusable form validator using explicit constraints. No DOM manipulation, no external libraries, structured error return.

**Key Learning:** Constraints prevent AI from adding unnecessary features, DOM references, or incorrect assumptions.

**Files:**
- `prompts/02-code-generation-prompts.md`
- `src/validator.js`

```javascript
validateForm({ name: "John", email: "john@example.com", ... })
// { isValid: true, errors: {} }
```

</details>

<details>
<summary><b>?? Mission 3: Debugging with AI</b></summary>

**Branch:** `fix/discount-calculation`

**Goal:** Provide a broken discount calculator with full context and expected vs actual results. Ask AI to fix only what is broken.

**Key Learning:** Context-rich debug prompts produce more targeted and minimal fixes compared to vague bug reports.

**Files:**
- `prompts/03-debugging-prompts.md`
- `src/discountCalculator.js`

```javascript
calculateDiscount(100, 10, "SAVE10") // 80
calculateDiscount(5, 10, "SAVE10")   // 0 (clamped, not -5.5!)
```

</details>

<details>
<summary><b>?? Mission 4: Refactoring Prompt</b></summary>

**Branch:** `refactor/text-analyzer-cleanup`

**Goal:** Take a messy, single-variable-named text analyzer and refactor it using an AI prompt specifying clean code standards without changing any output.

**Key Learning:** Specifying "no new features, same return schema" prevents scope creep and keeps refactoring focused.

**Files:**
- `prompts/04-refactoring-prompts.md`
- `src/textAnalyzer.js`

```javascript
analyzeText("hello world hello")
// { w: 3, c: 17, cNoSp: 15, mostF: "hello" }
```

</details>

<details>
<summary><b>?? Mission 5: AI Code Review Prompt</b></summary>

**Branch:** `feature/code-review-refinements`

**Goal:** Submit validator code for strict AI code review. Apply at least 3 suggestions and push an updated PR with review feedback addressed.

**Key Learning:** A strict senior reviewer role prompt yields actionable, specific improvement suggestions rather than vague compliments.

**Files:**
- `prompts/05-code-review-prompts.md`
- `src/validator.js` (updated)

**3 Suggestions Applied:**
1. ? Strict type checking for all input fields
2. ? Deduplicated format validation using `validateFormat` helper
3. ? JSDoc added to `validateFormat` after reviewer comment

</details>

<details>
<summary><b>?? Mission 6: Responsible AI Usage</b></summary>

**Branch:** `docs/responsible-ai-policy`

**Goal:** Use AI to help draft a Responsible AI Usage Policy covering data privacy, API keys, blind copying prevention, and disclosure.

**Key Learning:** AI can assist in policy drafting but human review is mandatory for compliance accuracy.

**Files:**
- `prompts/06-responsible-ai-prompts.md`
- `responsible-ai-policy.md`

</details>

---

## ?? Test Results

All 21 automated test cases pass:

```
=== Running Password Strength Checker Tests ===
[PASS] Short lowercase password should be Weak, score 1
[PASS] Strong password gets score 5
[PASS] Non-string input yields Invalid status
[PASS] Empty password yields Empty status

=== Running Form Validator Tests ===
[PASS] Valid form data should pass validation
[PASS] Invalid payload should fail validation
[PASS] Name too short check
[PASS] Email format check
[PASS] Phone number format check
[PASS] Password criteria check
[PASS] Password mismatch check

=== Running Discount Calculator Tests ===
[PASS] $100 with 10% discount is $90
[PASS] $100 with 10% and SAVE10 is $80
[PASS] $5 with 10% and SAVE10 is clamped to $0
[PASS] Catches negative price error
[PASS] Catches >100% discount error

=== Running Text Analyzer Tests ===
[PASS] Counts 3 words
[PASS] Counts 17 characters total
[PASS] Counts 15 characters without spaces
[PASS] Identifies 'hello' as most frequent word
[PASS] Handles null inputs gracefully

=== Test Summary: 21 Passed, 0 Failed ===
```

---

## ?? AI Tool Usage Summary

| Mission | AI Tool | Prompt Type | Token Usage (Est.) |
|:--|:--|:--|:--|
| 1 | Gemini 3.5 Flash | Comparison (Bad vs Prof) | 1400 |
| 2 | Gemini 3.5 Flash | Role + Constraints | 1600 |
| 3 | Gemini 3.5 Flash | Context-rich Debug | 1100 |
| 4 | Gemini 3.5 Flash | Refactor Prompt | 1750 |
| 5 | Gemini 3.5 Flash | Strict Reviewer | 1950 |
| 6 | Gemini 3.5 Flash | Policy Writer | 1200 |
| **Total** | | | **~9000** |

---

## ?? Prompting Techniques Demonstrated

| Technique | Missions Used |
|:--|:--|
| ?? Role Assignment | All (Senior Mentor, Reviewer, Security Lead) |
| ?? Constraint Injection | M2, M4, M5 |
| ?? Context + Expected/Actual | M3 |
| ?? Output Format Specification | All |
| ?? Edge Case Enumeration | M1, M2, M3 |
| ?? Minimal Fix Instruction | M3 |
| ?? Policy Drafting | M6 |

---

## ??? Responsible AI Policy

This project includes a full [Responsible AI Usage Policy](./responsible-ai-policy.md) covering:

- ?? **API Key Safety** - Never paste credentials, tokens, or .env contents
- ?? **Data Privacy** - No PII, client data, or proprietary code in prompts
- ?? **Output Verification** - All AI code reviewed line-by-line before use
- ?? **Honest Disclosure** - Prompts and AI outputs documented in /prompts

---

## ?? All Branches

| Branch | Mission | Status |
|:--|:--|:--|
| `main` | Base + Tests | ? Active |
| `docs/bad-vs-good-prompts` | Mission 1 | ? Merged |
| `feature/form-validator` | Mission 2 | ? Merged |
| `fix/discount-calculation` | Mission 3 | ? Merged |
| `refactor/text-analyzer-cleanup` | Mission 4 | ? Merged |
| `feature/code-review-refinements` | Mission 5 | ? Merged |
| `docs/responsible-ai-policy` | Mission 6 | ? Merged |

---

<div align="center">

?? **If this helped you learn about prompt engineering, give it a star!** ??

<img src="https://img.shields.io/github/stars/AbdulAzeemHashmi/assignment-5-prompt-engineering-lab?style=social" />

Made with ?? by [AbdulAzeemHashmi](https://github.com/AbdulAzeemHashmi)

</div>
