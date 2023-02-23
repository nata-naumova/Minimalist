const navLinks = document.querySelectorAll(".nav__link");
const drops = document.querySelectorAll(".nav__item-wrap");
const dropsIcons = document.querySelectorAll(".ri-arrow-down-s-line");

const menuBtn = document.querySelector(".btn-menu");
const menu = document.querySelector(".header__content");

navLinks.forEach((el) => {
  el.addEventListener("click", (e) => {
    let current = e.currentTarget;
    let drop = current.closest(".nav__item").querySelector(".nav__item-wrap");
    let currentIcon = current.querySelector(".ri-arrow-down-s-line");

    drops.forEach((el) => {
      if (el !== drop) {
        el.classList.remove("nav__item-wrap_active");
      }
    });

    dropsIcons.forEach((el) => {
      if (el !== currentIcon) {
        el.classList.remove("ri-arrow-up-s-line");
      }
    });

    currentIcon.classList.toggle("ri-arrow-up-s-line");
    drop.classList.toggle("nav__item-wrap_active");
  });
});

menuBtn.addEventListener("click", (e) => {
  let current = e.currentTarget;
  menu.classList.toggle("header__content_active");
  console.log(current);
});
