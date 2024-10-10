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
        <div class="box">
          <a href="details.html?id=${item.id}">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description01}</p>
          </a>
          <span>฿${item.price}</span>
          <button onclick="openModal(${item.id})" class="buy">Buy</button>
        </div>
      `;

      menuContainer.appendChild(menuItem);
    });
  })
  .catch(error => console.error('Error loading menu:', error));

// เปิด Modal เมื่อคลิกปุ่ม Buy
function openModal(itemId) {
  // หา product จาก JSON ด้วย ID
  fetch('./json/products.json')
    .then(response => response.json())
    .then(products => {
      const product = products.find(p => p.id === itemId);
      if (product) {
        // อัปเดตข้อมูลใน Modal
        document.getElementById('modal-product-name').textContent = product.name;
        document.getElementById('modal-product-description').textContent = product.description01;
        document.getElementById('modal-product-price').textContent = `฿${product.price}`;

        // แสดง Modal
        document.getElementById('buy-modal').style.display = 'block';

        // เมื่อคลิกปุ่ม Yes
        document.getElementById('confirm-buy').onclick = function() {
          buyItem(itemId);
          closeModal();  // ปิด Modal หลังจากยืนยันการซื้อ
        };

        // เมื่อคลิกปุ่ม No
        document.getElementById('cancel-buy').onclick = function() {
          closeModal();  // ปิด Modal เมื่อกด No
        };
      }
    });
}

// ปิด Modal
function closeModal() {
  document.getElementById('buy-modal').style.display = 'none';

  // เปิดการเลื่อนหน้าจออีกครั้ง
  document.body.style.overflow = 'auto';
}

// สั่งซื้อสินค้า (เมื่อผู้ใช้ยืนยัน)
function buyItem(itemId) {
  // เก็บข้อมูลใน localStorage โดยอัปเดตจำนวนสินค้าในตะกร้า
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};

  if (cartItems[itemId]) {
    cartItems[itemId] += 1;  // ถ้ามีสินค้าอยู่แล้ว เพิ่มจำนวน
  } else {
    cartItems[itemId] = 1;  // ถ้าไม่มีในตะกร้า ให้เริ่มต้นด้วยจำนวน 1
  }

  // บันทึกข้อมูลใหม่ลงใน localStorage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // อัปเดตจำนวนสินค้าในตะกร้า
  updateCartCount();

  // แสดงป๊อปอัปแจ้งว่า "สินค้าซื้อแล้ว"
  Swal.fire({
    title: 'Purchase Successful!',
    text: 'สินค้าถูกเพิ่มในตะกร้าเรียบร้อยแล้ว',
    icon: 'success',
    confirmButtonText: 'OK'
  });
}

// ปิด Modal เมื่อคลิกปุ่ม X
document.getElementById('close-modal').onclick = closeModal;

// ปิด Modal เมื่อคลิกนอก Modal
window.onclick = function(event) {
  const modal = document.getElementById('buy-modal');
  if (event.target === modal) {
    closeModal();  // ปิด modal และคืนค่าเลื่อนหน้าจอ
  }
};

// ฟังก์ชันสำหรับอัปเดตจำนวนสินค้าในตะกร้า
function updateCartCount() {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
  const totalItems = Object.values(cartItems).reduce((total, qty) => total + qty, 0);
  document.querySelector('.cartcount').textContent = totalItems;
}

// เรียกใช้ฟังก์ชันนี้เพื่อแสดงจำนวนสินค้าในตะกร้าเมื่อโหลดหน้าเว็บ
updateCartCount();


fetch('./json/products.json')
  .then(response => response.json())
  .then(data => {
    console.log('Product Data:', data);  // ตรวจสอบข้อมูลใน Console
    const owlCarousel = document.querySelector('.owl-carousel');

    // ระบุเฉพาะ ID ที่ต้องการ
    const selectedIds = [5, 3, 7];

    // กรองเฉพาะสินค้าที่มี ID ตรงกับ selectedIds
    const filteredData = data.filter(item => selectedIds.includes(item.id));

    // สร้าง item สำหรับแต่ละสินค้าใน filteredData
    filteredData.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('item');
      menuItem.setAttribute('data-color', item.color || '#ffffff'); // กำหนดสีพื้นหลัง

      menuItem.innerHTML = `
        <img class="slideshow-image" src="${item.image}" alt="${item.name}" style="width: 500px;">
        <div class="slideshow-content">
          <h3 id="item-title">${item.name}</h3>
          <p id="item-description">${item.description01}</p>
          <span id="item-price">฿${item.price}</span>
          <button onclick="openModal(${item.id})" class="buy">Buy</button>
        </div>
      `;

      owlCarousel.appendChild(menuItem);
    });

    // เรียกใช้งาน Owl Carousel
    $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      nav: true,
      navText: ['<', '>'],
      onChanged: function(event) {
        // เปลี่ยนสีพื้นหลังเมื่อเลื่อนไปยังสไลด์ใหม่
        var currentIndex = event.item.index;
        var currentItem = $('.owl-carousel .item').eq(currentIndex);
        var newColor = currentItem.attr('data-color');
        $('.box-color').css('background-color', newColor);  // เปลี่ยนสีของ box-color
      }
    });
  })
  .catch(error => console.error('Error loading products:', error));


