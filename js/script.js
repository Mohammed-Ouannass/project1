// When signing up there is an alert
const form = document.getElementById('signup-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
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