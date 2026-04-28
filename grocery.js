document.addEventListener('DOMContentLoaded', () => {
    const categories = Array.from(document.querySelectorAll('.category-card'));
    const products = Array.from(document.querySelectorAll('.product-card'));
    const productCount = document.getElementById('productCount');
    const searchInput = document.getElementById('productSearch');

    function updateCount() {
        const visible = products.filter(card => card.style.display !== 'none');
        productCount.textContent = `Showing ${visible.length} products`;
    }

    function applyFilter(category) {
        categories.forEach(card => card.classList.toggle('active', card.dataset.cat === category));

        products.forEach(card => {
            const matchesCategory = category === 'all' || card.dataset.category === category;
            const matchesSearch = searchInput.value.trim().length === 0 || card.querySelector('h3').textContent.toLowerCase().includes(searchInput.value.trim().toLowerCase());
            card.style.display = matchesCategory && matchesSearch ? 'flex' : 'none';
        });

        updateCount();
    }

    categories.forEach(card => {
        card.addEventListener('click', () => {
            applyFilter(card.dataset.cat);
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const activeCategory = categories.find(card => card.classList.contains('active'))?.dataset.cat || 'all';
            applyFilter(activeCategory);
        });
    }

    updateCount();

    document.querySelectorAll('.product-card button').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.product-card');
            const title = card.querySelector('h3').textContent;
            const price = card.querySelector('.price').textContent;
            const img = card.querySelector('img').src;
            addToCart(title, price, img);
        });
    });
});

function addToCart(productName, price, imageSrc) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const priceValue = parseInt(price.replace(/[^
0-9]/g, ''), 10) || 0;
    const existing = cart.find(item => item.name === productName);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ name: productName, price: priceValue, image: imageSrc, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'empty-cart.html';
}
