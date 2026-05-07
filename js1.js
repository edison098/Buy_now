document.addEventListener('DOMContentLoaded', () => {
    const language = document.getElementById('language');
    if (language) {
        language.addEventListener('change', () => {
            alert('Language changed to: ' + language.value);
        });
    }

    const currency = document.getElementById('currency');
    if (currency) {
        currency.addEventListener('change', () => {
            alert('Currency changed to: ' + currency.value);
        });
    }

    const menuBtn = document.getElementById('menubtn');
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');

    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', () => {
            const isOpen = sidebar.style.display === 'block';
            sidebar.style.display = isOpen ? 'none' : 'block';
            if (main) {
                main.classList.toggle('sidebar-hidden', isOpen);
            }
            menuBtn.textContent = isOpen ? '? ALL CATEGORIES' : '? HIDE CATEGORIES';
        });
    }

    const buyHero = document.getElementById('buyHero');
    if (buyHero) {
        buyHero.addEventListener('click', () => {
            goToProducts();
        });
    }

    document.querySelectorAll('.promo-card button, .shop-all-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = 'shop.html';
        });
    });

    const newsletterButton = document.querySelector('.newsletter-form button');
    if (newsletterButton) {
        newsletterButton.addEventListener('click', subscribe);
    }
});

function goToProducts() {
    window.location.href = 'shop.html';
}

function subscribe() {
    const input = document.querySelector('.newsletter-form input[type="email"]');
    if (!input) return;

    const email = input.value.trim();
    if (!email) {
        alert('Please enter your email');
        return;
    }

    alert('Subscribed successfully!');
}
