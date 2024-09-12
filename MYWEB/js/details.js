// Get product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Fetch menu data from JSON file
fetch('./json/products.json')
  .then(response => response.json())
  .then(data => {
    // Find the product by ID
    const product = data.find(item => item.id == productId);

    // Display product details
    if (product) {
      const productDetails = document.getElementById('productDetails');
      productDetails.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="data">
            <h2>${product.name}</h2>
            <p><strong>Price: ฿${product.price}</strong></p>
            <p>${product.description02}</p>
            <button onclick="openModal(${product.id})" class="buy">Buy</button><br>
            <button class="favor">favorite</button>
        </div>
      `;
    } else {
      document.getElementById('productDetails').innerHTML = '<p>Product not found!</p>';
    }
  })
  .catch(error => console.error('Error loading product details:', error));


    // เปิด Modal เมื่อคลิกปุ่ม Buy
function openModal(itemId) {
  // หา product จาก JSON ด้วย ID
  fetch('./json/products.json')
    .then(response => response.json())
    .then(products => {
      const product = products.find(p => p.id === itemId);
      if (product) {
        // อัพเดตข้อมูลใน Modal
        document.getElementById('modal-product-name').textContent = product.name;
        document.getElementById('modal-product-description').textContent = product.description01;
        document.getElementById('modal-product-price').textContent = `฿${product.price}`;

        // แสดง Modal
        document.getElementById('buy-modal').style.display = 'block';

        // ปิดการเลื่อนหน้าจอ
        document.body.style.overflow = 'hidden';

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
  // เก็บข้อมูลใน localStorage
  let purchasedItems = JSON.parse(localStorage.getItem('purchasedItems')) || [];
  purchasedItems.push(itemId);
  localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));

  // ทำสิ่งอื่นๆ เช่น redirect ไปหน้าสั่งซื้อ
  // window.location.href = 'purchase.html';
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