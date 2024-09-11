document.addEventListener('DOMContentLoaded', function () {
  // Function to update the cart count based on localStorage
  function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    let totalItems = Object.values(cart).reduce((total, product) => total + product.quantity, 0);
    localStorage.setItem('cartCount', totalItems);
    document.getElementById('cart-count').textContent = totalItems;
  }

  // Initialize cart count when page loads
  updateCartCount();

  // Buy button functionality
  const buyButtons = document.querySelectorAll('.buy-btn');
  buyButtons.forEach(button => {
    button.addEventListener('click', function () {
      const productElement = button.parentElement;
      const productId = productElement.getAttribute('data-id');
      const productName = productElement.getAttribute('data-name');
      const productPrice = productElement.getAttribute('data-price');

      // Update cart in local storage
      let cart = JSON.parse(localStorage.getItem('cart')) || {};
      if (cart[productId]) {
        cart[productId].quantity++;
      } else {
        cart[productId] = { name: productName, price: productPrice, quantity: 1 };
      }
      localStorage.setItem('cart', JSON.stringify(cart));

      // Update cart count
      updateCartCount();
    });
  });
});
