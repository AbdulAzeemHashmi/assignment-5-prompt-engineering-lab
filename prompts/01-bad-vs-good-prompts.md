# Mission 1: Bad Prompt vs Professional Prompt

## 1. Bad Prompt
**Prompt:**
> write a password strength checker in js

### AI Output:
```javascript
function checkPassword(p) {
  if(p.length < 8) return false;
  return true;
}
```

### Limitations of Bad Prompt:
- **No Edge Cases**: It crashed on null, undefined, or number inputs because it tries to call `.length` immediately.
- **Overly Simple**: It only checks length, ignoring uppercase, lowercase, numbers, and special characters.
- **Poor Variable Naming**: Used `p` as the variable name instead of descriptive names like `password`.
- **No Feedback**: Returns a simple boolean, which does not tell the user *why* their password is weak.

---

## 2. Better Prompt
**Prompt:**
> Write a JavaScript function to check password strength. It should check length, numbers, and special characters, and return a score.

### AI Output:
```javascript
function checkPasswordStrength(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score;
}
```

### Limitations of Better Prompt:
- **Missing Inputs validation**: Still throws an error if `password` is undefined or not a string.
- **Incomplete Criteria**: Missed uppercase and lowercase casing requirements.
- **No Descriptive Status**: Only returns a raw number score (0-3), requiring the caller to decide what is "Weak" or "Strong" without helper labels.
- **No Actionable Feedback**: Fails to return specific validation messages indicating which rules failed.

---

## 3. Professional Prompt
**Prompt:**
```text
Role: Act as a senior JavaScript mentor.
Task: Create a reusable password strength checker function.
Context: This code will be used in a user signup form to provide real-time validation feedback.
Constraints: Plain JavaScript only, no external libraries, reusable code, beginner-friendly, CommonJS export compatibility.
Output Format: Return code first, then explanation, then test cases.
Edge Cases: Mention invalid inputs (non-strings, undefined), empty values, and expected behavior.
Verification: Explain how the code should be tested manually.
```

### AI Output & Final Code:
```javascript
function checkPasswordStrength(password) {
  if (typeof password !== 'string') {
    return {
      score: 0,
      status: 'Invalid',
      feedback: ['Password must be a text string.'],
      details: { hasMinLength: false, hasLowercase: false, hasUppercase: false, hasNumber: false, hasSpecialChar: false }
    };
  }
  // (Full code implemented in src/passwordStrength.js)
}
```

### Improvements in the Professional Prompt:
1. **Safety & Robustness**: Explicitly checks if the input is a string and not empty, preventing runtime errors.
2. **Actionable Feedback**: Returns an array of detailed feedback strings (e.g., "Password should contain at least one lowercase letter.") telling the user exactly what is missing.
3. **Structured Response**: Returns an object containing a score, a descriptive status ('Weak', 'Moderate', 'Strong'), a list of errors, and detailed boolean flags.
4. **Professional Coding Standards**: Well-structured, fully documented, and exports correctly.
