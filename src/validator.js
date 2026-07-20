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

  if (!data || typeof data !== 'object') {
    return {
      isValid: false,
      errors: {
        form: ['Invalid input data structure. Expected an object.']
      }
    };
  }

  // 1. Name validation
  const name = data.name !== undefined ? String(data.name).trim() : '';
  if (name === '') {
    addError('name', 'Name is required.');
  } else if (name.length < 2) {
    addError('name', 'Name must be at least 2 characters long.');
  } else if (!/^[A-Za-z\s]+$/.test(name)) {
    addError('name', 'Name must contain only letters and spaces.');
  }

  // 2. Email validation
  const email = data.email !== undefined ? String(data.email).trim() : '';
  if (email === '') {
    addError('email', 'Email is required.');
  } else {
    // Standard basic RFC 5322 regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      addError('email', 'Email format is invalid.');
    }
  }

  // 3. Phone validation
  const phone = data.phone !== undefined ? String(data.phone).trim() : '';
  if (phone === '') {
    addError('phone', 'Phone number is required.');
  } else {
    // Allows optional plus sign followed by 10-15 digits
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      addError('phone', 'Phone number must contain between 10 and 15 digits (optional leading +).');
    }
  }

  // 4. Password validation
  const password = data.password !== undefined ? String(data.password) : '';
  if (password === '') {
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
  const confirmPassword = data.confirmPassword !== undefined ? String(data.confirmPassword) : '';
  if (confirmPassword === '') {
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
