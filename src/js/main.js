import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";
import JustValidate from "just-validate";

// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    modules: [Navigation, Pagination],
  });
} catch (e) {
  console.error("Swiper error:", e);
}

try {
  const tabs = document.querySelectorAll(".catalog__tab");
  const contents = document.querySelectorAll(".catalog__content__item");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("catalog__tab__active"));
      contents.forEach((c) => (c.style.display = "none"));

      tab.classList.add("catalog__tab__active");
      contents[index].style.display = "block";
    });
  });

  contents.forEach((c, i) => (c.style.display = i === 0 ? "block" : "none"));
} catch (e) {}

try {
  const validator = new JustValidate("form");
  validator
    .addField("#name", [
      {
        rule: "required",
        errorMessage: "Please, fill the name",
      },
      {
        rule: "minLength",
        value: 2,
        errorMessage: "Min 2 char",
      },
    ])
    .addField("#email", [
      {
        rule: "required",
      },
      {
        rule: "email",
      },
    ])
    .addField(
      "#question",
      [
        {
          rule: "required",
        },
        {
          rule: "minLength",
          value: 5,
        },
      ],
      {
        errorsContainer: document
          .querySelector("#question")
          .parentElement.querySelector(".error-message"),
      },
    )

    .addField(
      "#checkbox-touch",
      [
        {
          rule: "required",
        },
      ],
      {
        errorsContainer: document
          .querySelector("#checkbox-touch")
          .parentElement.parentElement.querySelector(".checkbox-error-message"),
      },
    )
    .onSuccess((event) => {
      const form = event.currentTarget;
      const formData = new FormData(form);

      fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Success", data);
          form.reset();
        });
    });
} catch (e) {}

try {
  const validatorFooter = new JustValidate(".footer__form-block");

  validatorFooter
    .addField("#footer__email", [
      {
        rule: "required",
        errorMessage: "Fill in the email",
      },
      {
        rule: "email",
        errorMessage: "Fill in the correct email",
      },
    ])
    .addField(
      "#footer__checkbox",
      [
        {
          rule: "required",
          errorMessage: "Fill in the checkbox",
        },
      ],
      {
        errorsContainer: document
          .querySelector("#footer__checkbox")
          .parentElement.parentElement.querySelector(".checkbox-error-message"),
      },
    );
} catch (e) {}
