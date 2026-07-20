# Mission 2: Constraint-Based Code Generation

## Professional Prompt
**Prompt:**
```text
Role: Act as a senior JavaScript mentor.
Task: Create a reusable form validator for name, email, phone, password, confirm password, empty fields, and invalid formats.
Context: This validator will be used in multiple frontend forms to check user input before sending it to the backend.
Constraints: 
1. Plain JavaScript only.
2. No external libraries.
3. Reusable code.
4. Return structured errors (no alert or console logs).
5. Must NOT directly manipulate the DOM (do not touch document, window, or HTML elements).
6. Export using CommonJS module format.
Output Format: Return the code block first, then an explanation of the validation logic, then standard manual test cases.
Edge Cases: 
1. Empty fields (all or some fields are blank).
2. Password and confirm password mismatch.
3. Invalid formats for email and phone numbers.
4. Non-object inputs or missing input object.
Verification: Explain how this validator should be tested manually.
```

### AI Output:
```javascript
/**
 * Validates form data including name, email, phone, password, and confirmPassword.
 * @param {object} data - The form data object.
 * @returns {object} The validation results containing isValid and errors object.
 */
function validateForm(data) {
  // (Full code implemented in src/validator.js)
}
```

### Verification & Constraints Adherence:
1. **DOM Isolation**: The generated code operates purely on JS objects. There are no references to `document`, `window`, elements, classes, or attributes.
2. **Structured Errors**: The output returns a clean object format `{ isValid: false, errors: { email: ["Email format is invalid."] } }`, which can be consumed by any modern framework or standard UI logic to show inline error highlights.
3. **Regex Robustness**:
   - Name uses `/^[A-Za-z\s]+$/` to restrict inputs to letters and spaces.
   - Email uses `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/` for modern standard validation.
   - Phone uses `/^\+?[0-9]{10,15}$/` which accurately checks global standards (optional plus, 10-15 digits).
