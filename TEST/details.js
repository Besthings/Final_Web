// Get product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Fetch menu data from JSON file
fetch('menu.json')
  .then(response => response.json())
  .then(data => {
    // Find the product by ID
    const product = data.find(item => item.id == productId);

    // Display product details
    if (product) {
      const productDetails = document.getElementById('productDetails');
      productDetails.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p><strong>Price: ฿${product.price}</strong></p>
      `;
    } else {
      document.getElementById('productDetails').innerHTML = '<p>Product not found!</p>';
    }
  })
  .catch(error => console.error('Error loading product details:', error));
