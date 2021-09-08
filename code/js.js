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
  slides.scrollLeft -= 500;
  if (slides.scrollLeft === scrollLeft) {
    slides.scrollLeft = 1500;
  }
});

let path = "../Img";
let images = ["circus2.jpeg", "circus3.png", "circus4.png"];

let img = document.createElement("img");

images.forEach((image) => {
  img.src = path + "/" + image;
  img.alt = image;
  slides.innerHTML += img.outerHTML;
});

img.src = "";
