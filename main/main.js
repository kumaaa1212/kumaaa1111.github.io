
{
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  breakpoints: {
    // 768px以上の場合
    767: {
      slidesPerView: 3
    },
    600:{
      slidesPerView: 2
    }
  },
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
}

