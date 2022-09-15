const error = document.getElementById('error-text');

function submitForm(event) {
  const firstPassword = document.getElementById('pwd');
  const confirmPass = document.getElementById('confirm-pass');
  if (firstPassword.value !== confirmPass.value) {
    event.preventDefault();
    error.textContent = '*Passwords do not match!';
    firstPassword.style.borderColor = 'red';
    confirmPass.style.borderColor = 'red';
  }
}

