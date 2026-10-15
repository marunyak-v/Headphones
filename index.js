const videoSlides = document.querySelectorAll(
  ".reviews-video-side .review-slide",
);
const textSlides = document.querySelectorAll(".review-text-slide");
const numbers = document.querySelectorAll(".numbers li");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    const index = Number(number.dataset.slide);

    videoSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    textSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  });
});
const colorOptions = document.querySelectorAll(".color-option");
const blackHeadphones = document.querySelector(".black-headphones-picture");
const grayHeadphones = document.querySelector(".gray-headphones-picture");

colorOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const color = option.dataset.color;

    colorOptions.forEach((item) => {
      const isActive = item === option;

      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", isActive);
    });

    blackHeadphones.classList.toggle("active", color === "black");
    grayHeadphones.classList.toggle("active", color === "gray");
  });
});
