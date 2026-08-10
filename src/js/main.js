import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";

// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../sass/style.scss";
// init Swiper:

const burger = document.querySelector(".burger"),
  close = document.querySelector(".header__menu-close"),
  menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
  menu.classList.add("header__menu_active");
  document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  menu.classList.remove("header__menu_active");
  document.body.style.overflow = "";
});

try {
  const swiper = new Swiper(".works__slider", {
    // configure Swiper to use modules
    slidesPerView: 1,
    loop: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1920: {
        spaceBetween: 35,
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },
    navigation: {
      nextEl: ".icon-right-open",
      prevEl: ".icon-left-open",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    modules: [Navigation, Pagination, Scrollbar],
  });
} catch (e) {
  console.error("Swiper error:", e);
}
