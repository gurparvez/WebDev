document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");
    const authForm = document.getElementById("authForm");

    loginBtn.addEventListener("click", function () {
        // Implement login logic here
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Example: Check if email and password are valid
        if (email === "example@email.com" && password === "password123") {
            alert("Login successful!");
        } else {
            alert("Login failed. Check your credentials.");
        }
    });

    registerBtn.addEventListener("click", function () {
        // Implement registration logic here
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Example: Register the user
        alert(`Registered successfully! Email: ${email}`);
    });
});
