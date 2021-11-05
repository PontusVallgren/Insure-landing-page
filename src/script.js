// Calling DOM

const burger = document.querySelector(".burger-menu");
const navbar = document.querySelector(".nav");
const burgerOpenIcon = document.querySelector(".burger-open");
const burgerCloseIcon = document.querySelector(".burger-close");

//Events

burger.addEventListener("click", () => {
  if (navbar.classList.contains("hidden")) {
    navbar.classList.remove("hidden");
    burgerOpenIcon.classList.add("hidden");
    burgerCloseIcon.classList.remove("hidden");
  } else if (!navbar.classList.contains("hidden")) {
    navbar.classList.add("hidden");
    burgerCloseIcon.classList.add("hidden");
    burgerOpenIcon.classList.remove("hidden");
  }
});
