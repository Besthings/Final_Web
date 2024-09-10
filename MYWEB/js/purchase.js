document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartItemsCounts = JSON.parse(localStorage.getItem('cartItems')) || {};

    fetch('./json/products.json')
      .then(response => response.json())
      .then(data => {
        // Filter products based on cart item IDs
        const cartItems = data.filter(item => item.id in cartItemsCounts);

        cartItems.forEach(item => {
          const itemElement = document.createElement('div');
          itemElement.classList.add('col-md-3');

          itemElement.innerHTML = `
            <div class="card">
              <img src="${item.image}" class="card-img-top" alt="${item.name}">
              <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <p class="card-text"><span>฿${item.price}</span></p>
                <p class="card-text">
                  Quantity: <span id="quantity-${item.id}">${cartItemsCounts[item.id]}</span>
                </p>
                <button class="btn btn-primary" onclick="changeQuantity('${item.id}', 1)">Increase</button>
                <button class="btn btn-danger" onclick="changeQuantity('${item.id}', -1)">Decrease</button>
              </div>
            </div>
          `;

          cartItemsContainer.appendChild(itemElement);
          
        });
      })
      .catch(error => console.error('Error loading products:', error));
});

function changeQuantity(itemId, change) {
    // Get the current cart from localStorage
    let cartItemsCounts = JSON.parse(localStorage.getItem('cartItems')) || {};

    // Update the quantity
    if (cartItemsCounts[itemId]) {
        cartItemsCounts[itemId] += change;
        if (cartItemsCounts[itemId] <= 0) {
            delete cartItemsCounts[itemId];
        }
    } else if (change > 0) {
        cartItemsCounts[itemId] = change;
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItemsCounts));

    // Update the quantity display
    const quantityElement = document.getElementById(`quantity-${itemId}`);
    if (quantityElement) {
        quantityElement.textContent = cartItemsCounts[itemId] || 0;
    }
}
