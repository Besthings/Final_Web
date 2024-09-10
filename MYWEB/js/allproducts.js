fetch('./json/products.json')
  .then(response => response.json())
  .then(data => {
    console.log('Product Data:', data);  // ตรวจสอบข้อมูลใน Console
    const menuContainer = document.getElementById('grid-recommend');
    const limitedData = data.slice(0);

    limitedData.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');

      menuItem.innerHTML = `
        <a href="details.html?id=${item.id}">
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.description01}</p>
          <span>฿${item.price}</span>
        </a>
      `;

      menuContainer.appendChild(menuItem);
    });
  })
  .catch(error => console.error('Error loading menu:', error));



  // สั่ง-ซื้อ item
  function buyItem(itemId, event) {
    event.preventDefault();  // Prevent default link behavior
  
    // Save item ID to localStorage
    let purchasedItems = JSON.parse(localStorage.getItem('purchasedItems')) || [];
    purchasedItems.push(itemId);
    localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));
  
    // Redirect to purchase page
    window.location.href = 'purchase.html';
  }
