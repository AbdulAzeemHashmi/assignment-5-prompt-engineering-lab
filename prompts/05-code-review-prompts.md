# Mission 5: AI Code Review Prompt

## 1. Strict Senior Reviewer Prompt
**Prompt:**
```text
Role: Act as a strict senior JavaScript reviewer.
Task: Review the following form validation code. Check for:
- Bugs and logical flaws
- Variable and function naming conventions
- Repeated or redundant code blocks
- Input validation completeness
- Security risks (such as RegExp denial of service or input pollution)
- Maintainability and readability
- Beginner mistakes (such as var usage, direct mutation, or non-strict equality)

Code to review:
[Content of src/validator.js]

Output Format: List specific points of improvement and suggest code corrections for each.
```

---

## 2. AI Review Suggestions
The AI code review identified several opportunities for improvement:

1. **Strict Type Validation for Password**: The code implicitly coerces the password using `String(data.password)`. If the user passes a number or an object, it could lead to unexpected behavior or leaks. It is safer to fail validation immediately if the password is not a string.
2. **Deduplication of Regex logic**: The patterns for testing fields (email, phone, etc.) are repeated. We can extract a helper function to validate format.
3. **Input Sanitization**: We should ensure input payloads are object types and do not inherit from unsafe prototypes.

---

## 3. Suggestions Applied Manually
We applied the following 3 suggestions manually in `src/validator.js`:

### Suggestion 1: Strict Type Check for password and inputs
Ensure that `password` and other fields are validated as strings before doing regex checks or trims.
```javascript
if (typeof data.password !== 'string') {
  addError('password', 'Password must be a text string.');
}
```

### Suggestion 2: Deduplication Helper
Created a helper `validateFormat` to handle regex validations and clean up the code.
```javascript
const validateFormat = (field, value, regex, message) => {
  if (value !== '' && !regex.test(value)) {
    addError(field, message);
  }
};
```

### Suggestion 3: Comprehensive Null/Empty Safeguard
Normalized empty checks across name, email, and phone, and added explicit bounds.
