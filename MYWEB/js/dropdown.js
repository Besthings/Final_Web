
// function toggleDropdown() {
//     var dropdown = document.getElementById("dropdownMenu");
//     if (dropdown.style.display === "block") {
//         dropdown.style.display = "none";
//     } else {
//         dropdown.style.display = "block";
//     }
// }

// เปิด/ปิด dropdown เมื่อคลิกที่รูป avatar
function toggleiconDropdown() {
    document.getElementById("dropdowniconMenu").classList.toggle("show");
  }
  
  // ตรวจสอบการคลิกนอก dropdown
  window.onclick = function(event) {
    // ถ้าคลิกไม่ได้อยู่บนไอคอน dropdown
    if (!event.target.closest('.drop-btni') && !event.target.closest('.dropdown-menu-icon')) {
      var dropdownMenu = document.getElementById("dropdowniconMenu");
      if (dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.remove('show'); // ปิดเมนู
      }
    }
  }
  
// หาปุ่มเมนูสามขีดและ ul ของเมนู
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('hamburger-toggle');

// เมื่อคลิกปุ่มสามขีดให้สลับสถานะการแสดงเมนู
menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
});

document.addEventListener('click', function(event) {
  // ถ้าคลิกนอกปุ่มสามขีดและเมนู ให้ปิดเมนู
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
      menu.classList.remove('active');
  }
});