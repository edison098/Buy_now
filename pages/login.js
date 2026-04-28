document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.auth-tabs .tab');
    const panels = document.querySelectorAll('.tab-panels .panel');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            tabs.forEach((node) => node.classList.remove('active'));
            panels.forEach((panel) => panel.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });
});

function handleLogin(event) {
    event.preventDefault();
    alert('Logged in successfully!');
}

function handleRegister(event) {
    event.preventDefault();
    alert('Registration successful!');
}