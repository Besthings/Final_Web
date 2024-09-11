// app.js
document.addEventListener('DOMContentLoaded', () => {
  fetch('products.json')
      .then(response => response.json())
      .then(products => displayProducts(products));

  function displayProducts(products) {
      const productList = document.getElementById('product-list');

      products.forEach(product => {
          const productDiv = document.createElement('div');
          productDiv.classList.add('product');
          productDiv.innerHTML = `
              <h3>${product.name}</h3>
              <img src="${product.image}" alt="${product.name}" width="100">
              <p>Price: $${product.price}</p>
              <button onclick="openModal(${product.id})">View Details</button>
          `;
          productList.appendChild(productDiv);
      });
  }

  window.openModal = function(productId) {
      fetch('products.json')
          .then(response => response.json())
          .then(products => {
              const product = products.find(p => p.id === productId);
              if (product) {
                  document.getElementById('modal-title').textContent = product.name;
                  document.getElementById('modal-description').textContent = product.description;
                  document.getElementById('modal-price').textContent = `Price: $${product.price}`;
                  document.getElementById('modal-image').src = product.image;
                  document.getElementById('product-modal').classList.add('show');
              }
          });
  }

  document.getElementById('close-modal').addEventListener('click', () => {
      document.getElementById('product-modal').classList.remove('show');
  });
});
