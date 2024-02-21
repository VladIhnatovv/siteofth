// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   loop: true,
//   centeredSlides: true,
//   // Navigation arrows
//   navigation: {
//     nextEl: ".thirdblc__swiper-buttonRight",
//     prevEl: ".thirdblc__swiper-buttonLeft",
//   },
//   breakpoints: {
//     // when window width is >= 320px
//     420: {
//       slidesPerView: 1,
//       spaceBetween: 0,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 0,
//     },
//     // when window width is >= 480px
//     1024: {
//       slidesPerView: 2,
//       spaceBetween: 0,
//     },
//     // when window width is >= 640px
//     1280: {
//       slidesPerView: 2,
//       spaceBetween: 30,
//     },
//   },
// });
// const cursor = document.querySelector(".cursor");
// document.addEventListener("mousemove", (e) => {
//   cursor.style.left = e.pageX + "px";
//   cursor.style.top = e.pageY + "px";
// });

// /////////////////////////////////////////////////
// const menuLinks = document.querySelectorAll(".menu__link");

// menuLinks.forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const targetId = this.getAttribute("href");
//     const targetSection = document.querySelector(targetId);

//     if (targetSection) {
//       targetSection.scrollIntoView({ behavior: "smooth" });
//     }
//   });
// });
// const footerLinks = document.querySelectorAll(".footer__link");

// footerLinks.forEach((link) => {
//   link.addEventListener("click", function (d) {
//     d.preventDefault();
//     const targetId = this.getAttribute("href");
//     const targetSection = document.querySelector(targetId);

//     if (targetSection) {
//       targetSection.scrollIntoView({ behavior: "smooth" });
//     }
//   });
// });

// /////////////////////
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".menu__list");

// hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
// }
// const navLink = document.querySelectorAll(".menu__link");

// navLink.forEach((n) => n.addEventListener("click", closeMenu));

// function closeMenu() {
//   hamburger.classList.remove("active");
//   navMenu.classList.remove("active");
// }

// Accordion
document.querySelectorAll(".item").forEach((el) => {
  el.addEventListener("click", () => {
    let content = el.nextElementSibling;

    if (content.style.maxHeight) {
      document
        .querySelectorAll(".acord")
        .forEach((el) => (el.style.maxHeight = null));
    } else {
      document
        .querySelectorAll(".acord")
        .forEach((el) => (el.style.maxHeight = null));
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// Animation
const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("._anim-no-hide")) {
          animItem.classList.remove("._active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  animOnScroll();
}

// Menu Burger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu__list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".menu__link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

//Accordion faq
const faqs = document.querySelectorAll(".inform__item");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

// расстояние между словами
const rotateBetweenWords = (value) => {
  const words = document.querySelectorAll(".wheel__word");

  let deg = -60;

  for (let word of words) {
    word.style.transform = `rotate(${deg}deg)`;
    deg += value;
  }
};

//----------------------------------------------------------
const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
