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
