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
            const title = card.querySelector('h3, h2')?.textContent?.trim() || 'Product';
            const priceText = card.querySelector('.price, p')?.textContent?.trim() || '0';
            const img = card.querySelector('img')?.src || '';

            button.classList.add('active');
            card.classList.add('active');
            addToCart(title, priceText, img);
        });
    });

    document.querySelectorAll('.promo-card button, .shop-all-btn, .feature-shop-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = 'shop.html';
        });
    });

    document.querySelectorAll('.cat-item').forEach(item => {
        item.addEventListener('click', () => {
            const name = item.textContent.replace(/\s*\d+\s*Items?$/i, '').trim();
            if (name) {
                alert('Opening category: ' + name);
            }
        });
    });

    const newsletterButton = document.querySelector('.newsletter-form button');
    if (newsletterButton) {
        newsletterButton.addEventListener('click', subscribe);
    }

    const buyHero = document.getElementById('buyHero');
    if (buyHero) {
        buyHero.addEventListener('click', goToProducts);
    }

    updateCartSummary();
});

function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartSummary() {
    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);

    document.querySelectorAll('.cart-price').forEach(el => {
        el.textContent = total.toLocaleString() + ' RWF';
    });

    document.querySelectorAll('.cart-count-icon').forEach(el => {
        el.textContent = count;
    });
}

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
    const cart = getCart();
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

    saveCart(cart);
    updateCartSummary();
    setTimeout(() => {
        window.location.href = 'empty-cart.html';
    }, 150);
}
