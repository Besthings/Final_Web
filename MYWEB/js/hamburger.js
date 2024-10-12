// ฟังก์ชันสำหรับเปิดและปิดเมนู
document.querySelector('.menu-toggle').addEventListener('click', function(event) {
    const navToggle = document.getElementById('hamburger-toggle'); // เมนูของคุณ
    navToggle.classList.toggle('active'); // เพิ่มหรือลบคลาส active

    // หากเมนูถูกเปิด ให้เปลี่ยนแปลง max-height
    if (navToggle.classList.contains('active')) {
        navToggle.style.maxHeight = navToggle.scrollHeight + 'px'; // ตั้งค่า max-height ตามเนื้อหาจริง
    } else {
        navToggle.style.maxHeight = '0'; // รีเซ็ต max-height เป็น 0
    }
    
    event.stopPropagation(); // หยุดการกระจายเหตุการณ์เพื่อไม่ให้เกิดการปิดเมนูในขณะเดียวกัน
});

// ฟังก์ชันสำหรับปิดเมนูเมื่อคลิกที่อื่น
document.addEventListener('click', function(event) {
    const navToggle = document.getElementById('hamburger-toggle'); // เมนูของคุณ
    const isDropdown = navToggle.contains(event.target); // เช็คว่าคลิกใน dropdown หรือไม่

    if (navToggle.classList.contains('active') && !isDropdown) {
        navToggle.classList.remove('active'); // ลบคลาส active
        navToggle.style.maxHeight = '0'; // รีเซ็ต max-height เป็น 0
    }
});
