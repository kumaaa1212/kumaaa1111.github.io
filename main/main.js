{
  const image = ['./image/mainimg1.jpg', './image/mainimg2.jpg', './image/mainimg3.jpg'];
  const mainimg = document.getElementById('mainimg');
window.onload = mainimg.src = image[2];
  let i = -1;
  function showimg() {
    if (i === 2) {
      i = 0;
    }
    else {
      i++
    }
    mainimg.animate(
      [
        {opacity:0}, 
        {opacity:1}  
      ], 
      {
        duration: 2000, 
        easing: 'linear', 
      },
      ); 
      mainimg.src = image[i];
  }
  setInterval(showimg,6000);
}
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

