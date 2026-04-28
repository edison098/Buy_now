const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

// Show Login
loginTab.addEventListener("click", () => {
    loginForm.classList.add("active");
    registerForm.classList.remove("active");

    loginTab.classList.add("active");
    registerTab.classList.remove("active");
});

// Show Register
registerTab.addEventListener("click", () => {
    registerForm.classList.add("active");
    loginForm.classList.remove("active");

    registerTab.classList.add("active");
    loginTab.classList.remove("active");
});

function subscribe() {
    const email = document.querySelector(".newsletter-form input").value;

    if (email === "") {
        alert("Please enter your email");
        return;
    }

    alert("Subscribed successfully with: " + email);
}