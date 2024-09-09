
function toggleDropdown() {
    var dropdown = document.getElementById("dropdownMenu");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

function toggleiconDropdown() {
    var dropdown = document.getElementById("dropdowniconMenu");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}


// ถ้าต้องการให้ปิด dropdown เมื่อคลิกนอกเมนู
window.onclick = function(event) {
    // ตรวจสอบว่าคลิกไม่ได้อยู่ที่ปุ่มใดปุ่มหนึ่ง
    if (!event.target.matches('.drop-btn') && !event.target.matches('.drop-btni')) {
        // ปิด dropdown-menu ของปุ่มธรรมดา
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
        
        // ปิด dropdown-menu ของปุ่มไอคอน
        var dropdownIconMenus = document.getElementsByClassName("dropdown-menu-icon");
        for (var i = 0; i < dropdownIconMenus.length; i++) {
            var openDropdown = dropdownIconMenus[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}