// When signing up there is an alert
const form = document.getElementById('signup-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Thank you for signing up!');
});

function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;

  // Validate Name
  if (name.trim() === '') {
    alert('Please enter your name.');
    return false;
  }

  // Validate Email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  // If all validations pass, the form will be submitted
  return true;
}