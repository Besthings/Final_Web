// เริ่มต้น Swiper
const swiper = new Swiper('.swiper', {
  // ตัวเลือก Swiper ที่คุณต้องการ
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  autoplay: {
      delay: 5000, // สไลด์เปลี่ยนทุก 5 วินาที
      disableOnInteraction: false,
  },
});
