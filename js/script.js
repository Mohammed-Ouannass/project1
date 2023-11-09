// When signing up there is an alert
const form = document.getElementById('signup-form');
form.addEventListener('submit', (event) => {
  if (!validateForm()) {
    event.preventDefault();
    return;
  }
  
  alert('Thank you for signing up!');
});

function validateForm() {
  var name = document.getElementById('name').value;
  
  // Validate Name
  if (name.trim() === '') {
    alert('Please enter your name.');
    return false;
  }

  return true;
}
