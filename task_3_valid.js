const form = document.getElementById('donationForm');

// Get input elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const amountInput = document.getElementById('amount');
const termsCheckbox = document.getElementById('terms');

// Get error message containers (make sure these divs with IDs exist below inputs)
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const passwordError = document.getElementById('password-error');
const amountError = document.getElementById('amount-error');
const termsError = document.getElementById('terms-error');

// Validation functions for each field
function validateName() {
  const val = nameInput.value.trim();
  if (val.length < 3) {
    nameError.textContent = "Invalid name (minimum 3 letters)";
    nameInput.classList.add('invalid');
    return false;
  } else {
    nameError.textContent = "";
    nameInput.classList.remove('invalid');
    return true;
  }
}

function validateEmail() {
  const val = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(val)) {
    emailError.textContent = "Invalid email address";
    emailInput.classList.add('invalid');
    return false;
  } else {
    emailError.textContent = "";
    emailInput.classList.remove('invalid');
    return true;
  }
}

function validatePhone() {
  const val = phoneInput.value.trim();
  const phoneRegex = /^\d{11}$/;
  if (!phoneRegex.test(val)) {
    phoneError.textContent = "Phone number must be exactly 11 digits";
    phoneInput.classList.add('invalid');
    return false;
  } else {
    phoneError.textContent = "";
    phoneInput.classList.remove('invalid');
    return true;
  }
}

function validatePassword() {
  const val = passwordInput.value;
  const hasUpper = /[A-Z]/.test(val);
  const hasLower = /[a-z]/.test(val);
  const hasDigit = /\d/.test(val);
  if (!(hasUpper && hasLower && hasDigit)) {
    passwordError.textContent = "Password must contain uppercase, lowercase, and a digit";
    passwordInput.classList.add('invalid');
    return false;
  } else {
    passwordError.textContent = "";
    passwordInput.classList.remove('invalid');
    return true;
  }
}

function validateAmount() {
  const val = amountInput.value.trim();
  if (!val || isNaN(val) || Number(val) <= 0) {
    amountError.textContent = "Enter a valid donation amount";
    amountInput.classList.add('invalid');
    return false;
  } else {
    amountError.textContent = "";
    amountInput.classList.remove('invalid');
    return true;
  }
}

function validateTerms() {
  if (!termsCheckbox.checked) {
    termsError.textContent = "You must agree to the terms & conditions";
    return false;
  } else {
    termsError.textContent = "";
    return true;
  }
}

// Real-time validation event listeners
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);
passwordInput.addEventListener('input', validatePassword);
amountInput.addEventListener('input', validateAmount);
termsCheckbox.addEventListener('change', validateTerms);

// Form submit event: validate all fields and prevent submission if any invalid
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const validName = validateName();
  const validEmail = validateEmail();
  const validPhone = validatePhone();
  const validPassword = validatePassword();
  const validAmount = validateAmount();
  const validTerms = validateTerms();

  if (validName && validEmail && validPhone && validPassword && validAmount && validTerms) {
    alert("Thank you for your donation!");
    form.submit();
  } else {
    alert("Please fix the errors in the form before submitting.");
  }
});
