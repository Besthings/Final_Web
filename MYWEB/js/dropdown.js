
// เปิด/ปิด dropdown เมื่อคลิกที่รูป avatar
function toggleiconDropdown(event) {
  event.stopPropagation(); // ป้องกันการเกิดเหตุการณ์คลิกที่อื่น
  document.getElementById("dropdowniconMenu").classList.toggle("show");
}

// ตรวจสอบการคลิกนอก dropdown และ modal
window.onclick = function(event) {
  const dropdownMenu = document.getElementById("dropdowniconMenu");
  const modal = document.getElementById('buy-modal');

  // ปิด dropdown ถ้าคลิกนอก
  if (!event.target.closest('.dropdown')) {
    if (dropdownMenu.classList.contains('show')) {
      dropdownMenu.classList.remove('show'); // ปิดเมนู
    }
  }

  // ปิด modal ถ้าคลิกนอก
  if (event.target === modal) {
    closeModal(); // ปิด modal
  }
};

// ฟังก์ชันปิด Modal
function closeModal() {
  document.getElementById('buy-modal').style.display = 'none';
}
