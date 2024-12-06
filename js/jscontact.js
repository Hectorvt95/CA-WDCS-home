// Accordion functionality
const answers = document.querySelectorAll(".accordion");
answers.forEach((accordion) => {
    accordion.addEventListener('click', () => {
        accordion.classList.toggle("active");
    });
});

// Form validation
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const subject = document.getElementById("subject").value.trim();
    const agree = document.getElementById("agree").checked;

    // Error message elements
    const nameError = document.getElementById("name-error");
    const addressError = document.getElementById("address-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const subjectError = document.getElementById("subject-error");
    const agreeError = document.getElementById("agree-error");

    // Clear previous error messages
    nameError.textContent = "";
    addressError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    subjectError.textContent = "";
    agreeError.textContent = "";

    let isValid = true;

    // Name validation
    if (!name || /\d/.test(name)) {
        nameError.textContent = "Please enter a valid name.";
        isValid = false;
    }

    // Address validation
    if (!address) {
        addressError.textContent = "Please enter your address.";
        isValid = false;
    }

    // Email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Password validation
    if (!password || password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        isValid = false;
    }

    // Subject validation
    if (!subject) {
        subjectError.textContent = "Please select your course.";
        isValid = false;
    }

    // Agreement checkbox validation
    if (!agree) {
        agreeError.textContent = "You must agree to the terms.";
        isValid = false;
    }

    return isValid;
}
