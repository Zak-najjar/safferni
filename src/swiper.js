import Swiper from "swiper/bundle";
import "swiper/css/bundle";

// home page swiper carousel pages
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});
// eygpt page gallery
var swiper = new Swiper(".EygptGallery", {
  slidesPerView: 3,
  centeredSlides: true,
  centeredSlidesBounds: true,
  normalizeSlideIndex: false,
  grabCursor: true,
  loop: true,
  loopPreventsSliding: false,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 125,
    depth: 500,
    slideShadows: false,
  },
});
// eygpt small gallery
var swiper = new Swiper(".EygptGallery--small", {
  slidesPerView: 3,
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

