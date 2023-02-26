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

const sliderTeams = new Swiper(".team__slider", {
  slidesPerView: 4.5,
  spaceBetween: 40,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 5,
    },
    425: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4.5,
      spaceBetween: 30,
    },
  },
});
