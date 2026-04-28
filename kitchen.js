const categoryButtons = document.querySelectorAll('.category-card');
const productCards = document.querySelectorAll('.product-card');
const productCount = document.getElementById('productCount');
const searchInput = document.getElementById('searchProducts');

function updateProductCount() {
    const visible = Array.from(productCards).filter(card => !card.classList.contains('hidden'));
    productCount.textContent = `${visible.length} items found`;
}

function filterProducts(category) {
    categoryButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.cat === category);
    });

    productCards.forEach(card => {
        const matchesCategory = category === 'all' || card.dataset.category === category;
        const matchesSearch = card.dataset.name.toLowerCase().includes(searchInput.value.toLowerCase());
        card.classList.toggle('hidden', !(matchesCategory && matchesSearch));
    });

    updateProductCount();
}

categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => filterProducts(btn.dataset.cat));
});

searchInput.addEventListener('input', () => {
    const activeCategory = document.querySelector('.category-card.active').dataset.cat;
    filterProducts(activeCategory);
});

filterProducts('all');
