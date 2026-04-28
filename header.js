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
            menuBtn.textContent = isOpen ? '☰ ALL CATEGORIES' : '☰ HIDE CATEGORIES';
        });
    }

    document.querySelectorAll('.card button, .product-card button').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card, .product-card');
            if (!card) return;
            const title = card.querySelector('h3')?.textContent || card.querySelector('h2')?.textContent || 'Product';
            const priceText = card.querySelector('.price')?.textContent || card.querySelector('p')?.textContent || '0';
            const img = card.querySelector('img')?.src || '';
            addToCart(title, priceText, img);
        });
    });

    document.querySelectorAll('.shop-banner button, .hero-primary, .hero-secondary, #shopBannerBtn, #buyHero').forEach(btn => {
        btn.addEventListener('click', () => {
            goToProducts();
        });
    });

    document.querySelectorAll('.promo-card button').forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = 'shop.html';
        });
    });

    document.querySelectorAll('.shop-all-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = 'shop.html';
        });
    });

    document.querySelectorAll('.cat-item').forEach(item => {
        item.addEventListener('click', () => {
            const name = item.innerText.replace(/\s*\d+\s*Items?$/i, '').trim();
            if (name) {
                alert('Opening category: ' + name);
            }
        });
    });

    document.querySelectorAll('.cat-item').forEach(item => {
        item.addEventListener('click', () => {
            const name = item.innerText.replace(/\s+\d+ Items$/, '');
            alert('Opening category: ' + name);
        });
    });

    const newsletterButton = document.querySelector('.newsletter-form button');
    if (newsletterButton) {
        newsletterButton.addEventListener('click', subscribe);
    }

    const buyHero = document.getElementById('buyHero');
    if (buyHero) {
        buyHero.addEventListener('click', () => {
            alert('Product added to cart!');
            addToCart('Hero Product', '3000', '');
        });
    }

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

function addToCart(productName, price, imageSrc) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const priceValue = typeof price === 'string' ? parseInt(price.replace(/[^\d]/g, ''), 10) || 0 : Number(price) || 0;
    const existing = cart.find(item => item.name === productName);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: priceValue,
            image: imageSrc,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'empty-cart.html';
}
