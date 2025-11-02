document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    // Only run the displayCart function on the cart page
    if (document.getElementById('ShoppingCart')) {
        displayCart();
    }
});

/**
 * Retrieves the cart from sessionStorage.
 * @returns {Array} The cart items.
 */
function getCart() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
        return []; // If no user is logged in, the cart is empty.
    }
    const userCartKey = `cart_${loggedInUser.email}`;
    return JSON.parse(localStorage.getItem(userCartKey)) || [];
}

/**
 * Saves the cart to sessionStorage.
 * @param {Array} cart - The cart array to save.
 */
function saveCart(cart) {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
        // This case should ideally not be reached if addToCart is protected.
        console.error("Attempted to save cart with no user logged in.");
        return;
    }
    const userCartKey = `cart_${loggedInUser.email}`;
    localStorage.setItem(userCartKey, JSON.stringify(cart));
    updateCartCount();
}

/**
 * Adds a product to the cart.
 * @param {object} product - The product to add.
 */
function addToCart(product) {
    const cart = getCart();
    // Check if product with the same name and size already exists
    const existingProductIndex = cart.findIndex(item => item.name === product.name && item.size === product.size);

    if (existingProductIndex > -1) {
        // If it exists, just increase the quantity
        cart[existingProductIndex].quantity++;
    } else {
        // Otherwise, add it as a new item
        product.quantity = 1;
        cart.push(product);
    }
    saveCart(cart);
    alert(`${product.name} has been added to your cart.`);
}

/**
 * Displays the cart items on the cart page.
 */
function displayCart() {
    const cart = getCart();
    const cartContainer = document.getElementById('cart-items-container');
    const cartSummary = document.getElementById('cart-summary');

    if (!cartContainer || !cartSummary) return;

    cartContainer.innerHTML = ''; // Clear previous content
    cartSummary.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        cartSummary.style.display = 'none'; // Hide the summary box
        return; // Stops the function here so it doesn't show a summary
    }

    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Size: ${item.size || 'N/A'}</p>
                <p>Price: R${item.price.toFixed(2)}</p>
                <div class="cart-item-quantity">
                    <label for="quantity-${index}">Quantity:</label>
                    <input type="number" id="quantity-${index}" value="${item.quantity}" min="1" data-index="${index}">
                </div>
            </div>
            <div class="cart-item-actions">
                <p>Total: R${itemTotal.toFixed(2)}</p>
                <button class="remove-btn" data-index="${index}">Remove</button>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });

    // Add event listeners for remove and quantity change
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            let cart = getCart();
            cart.splice(index, 1); // Remove item from array
            saveCart(cart);
            displayCart(); // Re-render the cart
        });
    });

    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('change', (e) => {
            const index = e.target.dataset.index;
            const newQuantity = parseInt(e.target.value);
            let cart = getCart();
            if (newQuantity > 0) {
                cart[index].quantity = newQuantity;
                saveCart(cart);
                displayCart(); // Re-render
            }
        });
    });

    // Display summary
    const total = subtotal;

    // Create store pickup options if the `stores` array from store.js is available
    let storeOptions = '<option value="">Select a pickup store</option>';
    if (typeof stores !== 'undefined' && Array.isArray(stores)) {
        stores.forEach(store => {
            storeOptions += `<option value="${store.name}">${store.name}</option>`;
        });
    }

    cartSummary.innerHTML = `
        <h2>Cart Summary</h2>
        <p>Subtotal: <span>R${subtotal.toFixed(2)}</span></p>
        <div class="pickup-location">
            <label for="pickup-store">Pickup Location:</label>
            <select id="pickup-store" name="pickup-store" required>
                ${storeOptions}
            </select>
        </div>
        <hr>
        <p class="total">Total: <span>R${total.toFixed(2)}</span></p>
        <button class="shop-now">Proceed to Checkout</button>
    `;

    // Add event listener for the checkout button
    const checkoutButton = cartSummary.querySelector('.shop-now');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            const pickupStoreSelect = document.getElementById('pickup-store');
            const selectedStore = pickupStoreSelect.value;

            // Validate that a store has been selected
            if (!selectedStore) {
                alert('Please select a pickup location before proceeding.');
                return; // Stop the checkout process
            }
            // Generate a unique receipt number
            const receiptNumber = 'S88-' + Date.now();

            // Clear the cart
            saveCart([]);

            // Display the confirmation message
            const cartContainer = document.getElementById('cart-items-container');
            const cartSummary = document.getElementById('cart-summary');
            
            // Replace the cart content with a styled confirmation message
            cartContainer.innerHTML = `
                <div class="checkout-confirmation">
                    <h2>Thank You For Your Order!</h2>
                    <p>Your order for pickup at <strong>${selectedStore}</strong> has been placed successfully.
                    <br> Your receipt number is: <strong>${receiptNumber}</strong></p>
                    <p>Please pay for your items at the shop upon collection.</p>
                </div>`;
            cartSummary.style.display = 'none'; // Hide the summary box entirely
        });
    }
}

/**
 * Updates the cart item count in the header.
 */
function updateCartCount() {
    const cart = getCart();
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}