let prev = document.getElementById("btnRight");
let next = document.getElementById("btnLeft");
let slides = document.querySelector(".slider-line");

next.addEventListener("click", function () {
  let scrollLeft = slides.scrollLeft;
  slides.scrollLeft += 500;
  if (slides.scrollLeft === scrollLeft) {
    slides.scrollLeft = 0;
  }
});

prev.addEventListener("click", function () {
  let scrollLeft = slides.scrollLeft;
  console.log(scrollLeft);
  slides.scrollLeft -= 500;
  if (slides.scrollLeft === scrollLeft) {
    slides.scrollLeft = 1500;
  }
});
