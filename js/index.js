





// carousel

const gap = 16;

const carousel = document.getElementById("carousel"),

  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);

  if (carousel.scrollWidth !== 0) {
    //prev.style.display = "flex";

    prev.style.borderRightColor = "#4C4C4C";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {

    next.style.borderLeftColor = "#D0D0D0";
  }

});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);

  if (carousel.scrollLeft - width - gap <= 0) {
    //prev.style.display = "";
    prev.style.borderRightColor = "#D0D0D0";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    //next.style.display = "flex";
    next.style.borderLeftColor = "#4C4C4C";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


// Advanced page
