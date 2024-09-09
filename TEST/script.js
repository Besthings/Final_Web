// ค้นหา dropdown ด้วย id
const pageSelect = document.getElementById('pageSelect');

// เพิ่ม event listener เพื่อตรวจจับการเปลี่ยนแปลง
pageSelect.addEventListener('change', function() {
    const selectedPage = this.value; // ค่าของ option ที่ถูกเลือก

    // ตรวจสอบว่ามีการเลือกหน้าแล้วหรือไม่
    if (selectedPage) {
        window.location.href = selectedPage; // ย้ายไปยังหน้าที่เลือก
    }
});
