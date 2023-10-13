document.addEventListener("DOMContentLoaded", function () {

  const signupButton = document.getElementById("signup-button");

  if (signupButton) {
    // Check if the button with id "signup-button" exists.

    // Add a click event listener to the Sign Up button
    signupButton.addEventListener("click", function () {
      alert("Thank you for signing up!");
    });
  }
});
