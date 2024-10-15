// JavaScript to toggle sliding window visibility
const toggleButton = document.getElementById('toggleButton');
const slideWindow = document.getElementById('slideWindow');
let isVisible = false;

toggleButton.addEventListener('click', () => {
    if (isVisible) {
        // Hide sliding window
        slideWindow.style.right = '-300px';
    } else {
        // Show sliding window
        slideWindow.style.right = '0';
    }
    isVisible = !isVisible;
});

document.addEventListener("DOMContentLoaded", function() {
    // Define the correct password (you can change this)
    const correctPassword = "1234";

    // Get the modal, input, and button elements
    const passwordModal = document.getElementById("passwordModal");
    const passwordInput = document.getElementById("passwordInput");
    const submitPasswordButton = document.getElementById("submitPassword");
    const errorMessage = document.getElementById("errorMessage");

    // Add an event listener to the submit button
    submitPasswordButton.addEventListener("click", function() {
        // Check if the entered password matches the correct one
        if (passwordInput.value === correctPassword) {
            // Hide the modal if the password is correct
            passwordModal.style.display = "none";
        } else {
            // Show an error message if the password is incorrect
            errorMessage.textContent = "Incorrect password, please try again.";
            errorMessage.style.display = "block";
        }
    });

    // Optional: Pressing Enter also submits the password
    passwordInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            submitPasswordButton.click();
        }
    });
});
