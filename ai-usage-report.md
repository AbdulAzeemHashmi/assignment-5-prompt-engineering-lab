# AI Usage Report

This document records the AI tools, prompt types, helping details, mistakes, manual fixes, and token usage for each of the six prompt engineering missions.

## Mission Helper Details

| Mission | AI Tool Used | Prompt Type | AI Helped With | AI Mistake | Manual Fix |
|---|---|---|---|---|---|
| **Mission 1: Password Strength** | Gemini 3.5 Flash | Comparison Prompts (Bad vs Better vs Prof) | Structured password analysis | Bad prompt lacked validation logic and returned incomplete checks | Wrote clear rules and validation checks manually |
| **Mission 2: Form Validator** | Gemini 3.5 Flash | Role-based & Constraint Prompt | Structured error schema | Missed checking for empty inputs properly in initial pass | Handled empty validation first and normalized error arrays |
| **Mission 3: Debugger** | Gemini 3.5 Flash | Context-rich Debug Prompt | Coupon code discount bugfix | Kept division logic unchanged | Added explicit boundary check for discount and coupon validation |
| **Mission 4: Refactorer** | Gemini 3.5 Flash | Refactor Prompt | Logic deduplication and code structure | Refactored too generic variable names | Manually renamed to expressive variable names like wordFrequencyMap |
| **Mission 5: Code Reviewer** | Gemini 3.5 Flash | Strict Code Review Prompt | Identified key issues in Validator | Suggested generic regexes | Wrote precise regexes and applied structure suggestions |
| **Mission 6: AI Policy** | Gemini 3.5 Flash | Policy Writing Prompt | Structure and privacy headings | - | Refined the document wording to suit team policy |

---

## Token Usage Table

| Mission | AI Tool | Input Tokens | Output Tokens | Total Tokens | Exact/Estimated | Token Efficiency Note |
|---|---|---:|---:|---:|---|---|
| Mission 1 | Gemini 3.5 Flash | 600 | 800 | 1400 | Estimated | Avoided repeated regeneration by defining clear constraints upfront. |
| Mission 2 | Gemini 3.5 Flash | 700 | 900 | 1600 | Estimated | Used a single prompt with all conditions clearly listed. |
| Mission 3 | Gemini 3.5 Flash | 500 | 600 | 1100 | Estimated | Provided exact code context and error reproduction steps. |
| Mission 4 | Gemini 3.5 Flash | 800 | 950 | 1750 | Estimated | Specified "no new features" to prevent scope creep. |
| Mission 5 | Gemini 3.5 Flash | 900 | 1050 | 1950 | Estimated | Used structural role play to get precise feedback. |
| Mission 6 | Gemini 3.5 Flash | 500 | 700 | 1200 | Estimated | Outlined requirements first, then asked for policy generation. |

**Final Total Tokens Used**: 9000

## Token Efficiency Reflection
We minimized token usage by:
1. Writing complete prompts containing Role, Task, Context, Constraints, and Output Format in the first turn rather than doing interactive multi-turn debugging.
2. Formulating constraints carefully to avoid generating useless boilerplate or extra files.
3. Keeping the contexts scoped specifically to the function being analyzed.
