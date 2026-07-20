/**
 * Validates form data including name, email, phone, password, and confirmPassword.
 * @param {object} data - The form data object.
 * @returns {object} The validation results containing isValid and errors object.
 */
function validateForm(data) {
  const errors = {};
  let isValid = true;

  const addError = (field, message) => {
    if (!errors[field]) {
      errors[field] = [];
    }
    errors[field].push(message);
    isValid = false;
  };

  /**
   * Helper function to validate a field value against a regex pattern.
   * @param {string} field - The name of the form field.
   * @param {string} value - The text value to validate.
   * @param {RegExp} regex - The regular expression pattern.
   * @param {string} message - The error message if validation fails.
   */
  const validateFormat = (field, value, regex, message) => {
    if (value !== '' && !regex.test(value)) {
      addError(field, message);
    }
  };

  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    return {
      isValid: false,
      errors: {
        form: ['Invalid input data structure. Expected an object.']
      }
    };
  }

  // 1. Name validation
  const name = typeof data.name === 'string' ? data.name.trim() : '';
  if (data.name !== undefined && typeof data.name !== 'string') {
    addError('name', 'Name must be a text string.');
  } else if (name === '') {
    addError('name', 'Name is required.');
  } else if (name.length < 2) {
    addError('name', 'Name must be at least 2 characters long.');
  } else {
    validateFormat('name', name, /^[A-Za-z\s]+$/, 'Name must contain only letters and spaces.');
  }

  // 2. Email validation
  const email = typeof data.email === 'string' ? data.email.trim() : '';
  if (data.email !== undefined && typeof data.email !== 'string') {
    addError('email', 'Email must be a text string.');
  } else if (email === '') {
    addError('email', 'Email is required.');
  } else {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    validateFormat('email', email, emailRegex, 'Email format is invalid.');
  }

  // 3. Phone validation
  const phone = typeof data.phone === 'string' ? data.phone.trim() : '';
  if (data.phone !== undefined && typeof data.phone !== 'string') {
    addError('phone', 'Phone must be a text string.');
  } else if (phone === '') {
    addError('phone', 'Phone number is required.');
  } else {
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    validateFormat('phone', phone, phoneRegex, 'Phone number must contain between 10 and 15 digits (optional leading +).');
  }

  // 4. Password validation
  const password = typeof data.password === 'string' ? data.password : '';
  if (data.password !== undefined && typeof data.password !== 'string') {
    addError('password', 'Password must be a text string.');
  } else if (password === '') {
    addError('password', 'Password is required.');
  } else {
    if (password.length < 8) {
      addError('password', 'Password must be at least 8 characters long.');
    }
    if (!/[A-Z]/.test(password)) {
      addError('password', 'Password must contain at least one uppercase letter.');
    }
    if (!/[a-z]/.test(password)) {
      addError('password', 'Password must contain at least one lowercase letter.');
    }
    if (!/\d/.test(password)) {
      addError('password', 'Password must contain at least one number.');
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
      addError('password', 'Password must contain at least one special character.');
    }
  }

  // 5. Confirm Password validation
  const confirmPassword = typeof data.confirmPassword === 'string' ? data.confirmPassword : '';
  if (data.confirmPassword !== undefined && typeof data.confirmPassword !== 'string') {
    addError('confirmPassword', 'Confirm password must be a text string.');
  } else if (confirmPassword === '') {
    addError('confirmPassword', 'Confirm password is required.');
  } else if (password !== confirmPassword) {
    addError('confirmPassword', 'Confirm password must match the password.');
  }

  return {
    isValid,
    errors
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = validateForm;
}
