/**
 * Checks the strength of a given password based on length, casing, numbers, and special characters.
 * @param {string} password - The password string to evaluate.
 * @returns {object} An object containing the strength score, status, and feedback list.
 */
function checkPasswordStrength(password) {
  if (typeof password !== 'string') {
    return {
      score: 0,
      status: 'Invalid',
      feedback: ['Password must be a text string.'],
      details: {
        hasMinLength: false,
        hasLowercase: false,
        hasUppercase: false,
        hasNumber: false,
        hasSpecialChar: false
      }
    };
  }

  if (password.trim() === '') {
    return {
      score: 0,
      status: 'Empty',
      feedback: ['Password cannot be empty.'],
      details: {
        hasMinLength: false,
        hasLowercase: false,
        hasUppercase: false,
        hasNumber: false,
        hasSpecialChar: false
      }
    };
  }

  const feedback = [];
  const details = {
    hasMinLength: password.length >= 8,
    hasLowercase: /[a-z]/.test(password),
    hasUppercase: /[A-Z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[^A-Za-z0-9]/.test(password)
  };

  let score = 0;
  if (details.hasMinLength) score += 1;
  else feedback.push('Password should be at least 8 characters long.');

  if (details.hasLowercase) score += 1;
  else feedback.push('Password should contain at least one lowercase letter.');

  if (details.hasUppercase) score += 1;
  else feedback.push('Password should contain at least one uppercase letter.');

  if (details.hasNumber) score += 1;
  else feedback.push('Password should contain at least one number.');

  if (details.hasSpecialChar) score += 1;
  else feedback.push('Password should contain at least one special character.');

  let status = 'Weak';
  if (score === 5) {
    status = 'Strong';
  } else if (score >= 3) {
    status = 'Moderate';
  }

  return {
    score,
    status,
    feedback,
    details
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = checkPasswordStrength;
}
