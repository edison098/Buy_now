document.addEventListener('DOMContentLoaded', () => {
    const categories = Array.from(document.querySelectorAll('.category-card'));
    const products = Array.from(document.querySelectorAll('.product-card'));
    const productCount = document.getElementById('productCount');
    const searchInput = document.getElementById('productSearch');

    function updateCount() {
        const visible = products.filter(card => card.style.display !== 'none');
        productCount.textContent = Showing +visible.length+ products;
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
});
