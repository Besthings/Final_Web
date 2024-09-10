fetch('./json/products.json')
  .then(response => response.json())
  .then(data => {
    console.log('Product Data:', data);  // ตรวจสอบข้อมูลใน Console
    const menuContainer = document.getElementById('grid-recommend');
    const limitedData = data.slice(0, 8);

    limitedData.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');

      menuItem.innerHTML = `
        <div>
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <span>฿${item.price}</span>
          <button onclick="addToCart(${item.id})">Add to Cart</button>
        </div>
      `;

      menuContainer.appendChild(menuItem);
    });
  })
  .catch(error => console.error('Error loading menu:', error));

  function addToCart(itemId) {
    // Get the current cart from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
    
    // Increment the count for the item
    if (cartItems[itemId]) {
      cartItems[itemId] += 1;
    } else {
      cartItems[itemId] = 1;
    }
  
    // Save the updated cart back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    alert('Item added to cart!');
  }
