// Select buttons and sections
let homeBtn = document.getElementById('homeBtn');
let cartBtn = document.getElementById('cartBtn');
let homePage = document.getElementById('homePage');
let cartPage = document.getElementById('cartPage');
let cartList = document.getElementById('cartList');
let totalPrice = document.getElementById('totalPrice');

let cart = [];
let total = 0;

// Function to update the cart display
function updateCart() {
  cartList.innerHTML = '';
  total = 0;
  cart.forEach(item => {
    let li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
    total += item.price;
  });
  totalPrice.textContent = total.toFixed(2);
}

// Function to load cart from local storage
function loadCart() {
  // Clear cart on page load
  cart = [];
  totalPrice.textContent = '0.00'; // Reset total price display
}

// Function to save cart to local storage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Add click event to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    let foodItem = this.parentElement;
    let name = foodItem.getAttribute('data-name');
    let price = parseFloat(foodItem.getAttribute('data-price'));
    cart.push({ name, price });
    saveCart();
    updateCart();
    alert(`${name} added to the cart!`);
  });
});

// Toggle between Home and Cart pages
homeBtn.addEventListener('click', () => {
  homePage.style.display = 'block';
  cartPage.style.display = 'none';
});
cartBtn.addEventListener('click', () => {
  homePage.style.display = 'none';
  cartPage.style.display = 'block';
});

// Load cart from local storage when the page loads
loadCart();
