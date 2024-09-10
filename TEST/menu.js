// Fetch menu data from JSON file
fetch('menu.json')
  .then(response => response.json())
  .then(data => {
    const menuContainer = document.getElementById('menuContainer');

    // Use slice to get only the first 4 items
    const limitedData = data.slice(0, 4);

    limitedData.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');

      // Add menu content with link to details.html
      menuItem.innerHTML = `
        <a href="details.html?id=${item.id}">
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p><span>฿${item.price}</span></p>
        </a>
      `;

      // Append menu item to container
      menuContainer.appendChild(menuItem);
    });
  })
  .catch(error => console.error('Error loading menu:', error));
