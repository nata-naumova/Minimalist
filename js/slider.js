const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 7,
  spaceBetween: 80,
  // Responsive breakpoints
  breakpoints: {
    425: {
      slidesPerView: 2.75,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 4.5,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 5.5,
      spaceBetween: 60,
    },
  },
});
