// ACCORDION

const accordion = document.querySelectorAll(".accordion");
accordion.forEach((acc) => {
  acc.addEventListener("click", () => {
    // acc.classList.toggle("active");
    const panel = acc.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

// const new1 = document.querySelectorAll(".about-new-h11");
// const new155 = document.querySelector(".about-new-h1");
// const new2 = document.querySelector(".about-new-p");

// new1.forEach((neww) => {
//   neww.addEventListener("click", () => {
//     new2.classList.toggle("hide2");
//     new155.toggle.display = "inline-block";
//   });
// });

//  !
// const h1 = document.querySelector(".about-news-text-h1")
// const p = document.querySelector(".about-news-text-p");

// h1.addEventListener("click", () => {
//   p.classList.toggle("hide");
// });

// !
const h1 = document.querySelectorAll(".about-news-text-h1");
const p = document.querySelectorAll(".about-news-text-p");

h1.forEach((item, idx) => {
  item.addEventListener("click", () => {
    p[idx].classList.toggle("hide2");
    p[idx].classList.toggle("nodf");
  });
});

// !how it works
const sliderLine = document.querySelector(".slider-line"),
  buttonPrev = document.querySelector(".button-prev"),
  buttonNext = document.querySelector(".button-next"),
  dots = document.querySelectorAll(".dot");

// const slideWidth = 396;
// const slideWidth = 1400;

if (document.body.clientWidth > 1400) {
  slideWidth = 1400;
} else if (document.body.clientWidth < 1400) {
  // slideWidth = 396;
  slideWidth = 350;
}
console.log(document.body.clientWidth);

slideAmount = dots.length;

let position = 0,
  dotIndex = 0;

// FUNCTIONs
const nextSlide = () => {
  position =
    position < (slideAmount - 1) * slideWidth ? position + slideWidth : 0;
  sliderLine.style.left = `${-position}px`;
  dotIndex = position / slideWidth;

  thisSlide(dotIndex);
};

const prevSlide = () => {
  position =
    position > 0 ? position - slideWidth : (slideAmount - 1) * slideWidth;
  sliderLine.style.left = `${-position}px`;
  dotIndex = position / slideWidth;
  thisSlide(dotIndex);
};

const thisSlide = (index) => {
  for (let dot of dots) {
    dot.classList.remove("is-active");
  }
  dots[index].classList.add("is-active");
};

// EVENT_LISTENERs
// нажатия на кнопки
buttonNext.addEventListener("click", nextSlide);
buttonPrev.addEventListener("click", prevSlide);

// Нажатие на пины пагинации
for (let [index, dot] of dots.entries()) {
  dot.addEventListener("click", () => {
    position = index * slideWidth;
    sliderLine.style.left = `${-position}px`;
    dotIndex = index;
    thisSlide(dotIndex);
  });
}

setInterval(nextSlide, 5000);

//!! RESPONSIVE

// const sliderLinee = document.querySelector(".slider-line"),
//   buttonPrevv = document.querySelector(".button-prev"),
//   buttonNextt = document.querySelector(".button-next"),
//   dotss = document.querySelectorAll(".dot");

// const sliWidth = 396;
// slideAmount = dotss.length;

// let positionn = 0,
//   dotIndexx = 0;

// // FUNCTIONs
// const nextSlidee = () => {
//   positionn =
//     positionn < (slideAmount - 1) * sliWidth ? positionn + sliWidth : 0;
//   sliderLinee.style.left = `${-positionn}px`;
//   dotIndexx = positionn / sliWidth;
//   thisSlidee(dotIndexx);
// };

// const prevSlidee = () => {
//   positionn =
//     positionn > 0 ? positionn - sliWidth : (slideAmount - 1) * sliWidth;
//   sliderLinee.style.left = `${-positionn}px`;
//   dotIndexx = positionn / sliWidth;
//   thisSlidee(dotIndexx);
// };

// const thisSlidee = (index) => {
//   for (let dot of dotss) {
//     dot.classList.remove("is-active");
//   }
//   dotss[index].classList.add("is-active");
// };

// // EVENT_LISTENERs
// // нажатия на кнопки
// buttonNextt.addEventListener("click", nextSlidee);
// buttonPrevv.addEventListener("click", prevSlidee);

// // Нажатие на пины пагинации
// for (let [index, dot] of dotsss.entries()) {
//   dot.addEventListener("click", () => {
//     positionn = index * sliWidth;
//     sliderLinee.style.left = `${-positionn}px`;
//     dotIndexx = index;
//     thisSlidee(dotIndexx);
//   });
// }

// setInterval(nextSlide, 5000);

// index-part
