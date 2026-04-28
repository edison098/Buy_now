// Language change
document.getElementById("language").addEventListener("change", function () {
    alert("Language changed to: " + this.value);
});

// Currency change
document.getElementById("currency").addEventListener("change", function () {
    alert("Currency changed to: " + this.value);
});
let total = 0;

// SHOW PRODUCTS
function showProducts(category) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  productsData[category].forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>${p.price} RWF</p>
        <button onclick="addToCart(${p.price})">Add</button>
      </div>
    `;
  });
}

// ADD TO CART
function addToCart(price) {
  total += price;
  document.getElementById("cart-total").innerText = total;
}



const btn = document.getElementById("menubtn");
const sidebar = document.getElementById("sidebar");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});




// HERO BUTTON
document.getElementById("buyHero").onclick = () => {
  alert("product added to cart!");
  addToCart(3000);
};

// DEFAULT LOAD
showProducts("home");

// simple interaction example

document.querySelector(".menu-btn").addEventListener("click", () => {
    alert("Menu clicked!");
});

// Add to cart simple demo
let total = 0;

document.querySelectorAll(".card button").forEach(btn => {
    btn.addEventListener("click", () => {
        total += 1000; // demo value
        document.querySelector(".cart").textContent = "🛒 " + total + " RWF";
    });
});
function goToProducts() {
    window.location.href = "shop.html";
}

  function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }
// CATEGORY CLICK
document.querySelectorAll(".cat-item").forEach(item => {
    item.addEventListener("click", () => {
        alert("Opening category: " + item.innerText);
    });
});

// SHOP ALL BUTTON
document.querySelector(".shop-all-btn").addEventListener("click", () => {
    alert("Redirecting to all categories...");
});


  const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

document.querySelectorAll(".promo-card button").forEach(btn => {
    btn.addEventListener("click", () => {
        window.location.href = "shop.html";
    });
});
function subscribe() {
    const email = document.querySelector(".newsletter-form input").value;

    if (email === "") {
        alert("Please enter your email");
    } else {
        alert("Subscribed successfully!");
    }
}



//TO SELLER FILE
document.getElementById("shopBtn").addEventListener("click", function () {
    alert("Redirecting to shop...");
});

//TO EMPTY-CART
document.getElementById("shopBtn").addEventListener("click", function () {
    window.location.href = "sellers.html";
});

 function goToShop() {
    alert("Redirecting to shop...");
    /* window.location.href = "";        */    // uncomment if you have a shop page
  }