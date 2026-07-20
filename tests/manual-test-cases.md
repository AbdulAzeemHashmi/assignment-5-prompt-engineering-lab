# Manual Test Cases

This document logs the manual test cases run on the target JavaScript modules. All tests were executed and passed successfully.

## 1. Password Strength Checker (`src/passwordStrength.js`)

| Input | Expected Output | Actual Output | Status |
|---|---|---|---|
| `"abc"` | `{ score: 1, status: "Weak", ... }` | `{ score: 1, status: "Weak", ... }` | PASS |
| `"Ab1!defg"` | `{ score: 5, status: "Strong", ... }` | `{ score: 5, status: "Strong", ... }` | PASS |
| `12345` | `{ score: 0, status: "Invalid", ... }` | `{ score: 0, status: "Invalid", ... }` | PASS |
| `""` | `{ score: 0, status: "Empty", ... }` | `{ score: 0, status: "Empty", ... }` | PASS |

---

## 2. Form Validator (`src/validator.js`)

| Input Payload | Expected Output | Actual Output | Status |
|---|---|---|---|
| `{ name: "John Doe", email: "john@example.com", phone: "1234567890", password: "Password1!", confirmPassword: "Password1!" }` | `{ isValid: true, errors: {} }` | `{ isValid: true, errors: {} }` | PASS |
| `{ name: "J", email: "invalid-email", phone: "123", password: "weak", confirmPassword: "different" }` | `{ isValid: false, errors: { name: [...], email: [...], phone: [...], password: [...], confirmPassword: [...] } }` | `{ isValid: false, errors: { name: [...], email: [...], phone: [...], password: [...], confirmPassword: [...] } }` | PASS |
| `null` | `{ isValid: false, errors: { form: ["Invalid input data structure. Expected an object."] } }` | `{ isValid: false, errors: { form: ["Invalid input data structure. Expected an object."] } }` | PASS |

---

## 3. Discount Calculator (`src/discountCalculator.js`)

| Input Parameters | Expected Output | Actual Output | Status |
|---|---|---|---|
| `(100, 10)` | `90` | `90` | PASS |
| `(100, 10, "SAVE10")` | `80` | `80` | PASS |
| `(5, 10, "SAVE10")` | `0` (clamped) | `0` | PASS |
| `(-10, 10)` | Throws "Price must be a non-negative number." | Throws "Price must be a non-negative number." | PASS |
| `(100, 120)` | Throws "Discount percentage must be a number..." | Throws "Discount percentage must be a number..." | PASS |

---

## 4. Text Analyzer (`src/textAnalyzer.js`)

| Input | Expected Output | Actual Output | Status |
|---|---|---|---|
| `"hello world hello"` | `{ w: 3, c: 17, cNoSp: 15, mostF: "hello" }` | `{ w: 3, c: 17, cNoSp: 15, mostF: "hello" }` | PASS |
| `null` | `{ w: 0, c: 0, cNoSp: 0, mostF: "" }` | `{ w: 0, c: 0, cNoSp: 0, mostF: "" }` | PASS |
