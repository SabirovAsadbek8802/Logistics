// const sliderLine = document.querySelector(".slider-line"),
//   buttonPrev = document.querySelector(".button-prev"),
//   buttonNext = document.querySelector(".button-next"),
//   dots = document.querySelectorAll(".dot");

// const slideWidth = 1400;
// slideAmount = dots.length;

// let position = 0,
//   dotIndex = 0;

// // FUNCTIONs
// const nextSlide = () => {
//   position =
//     position < (slideAmount - 1) * slideWidth ? position + slideWidth : 0;
//   sliderLine.style.left = `${-position}px`;
//   dotIndex = position / slideWidth;
//   thisSlide(dotIndex);
// };

// const prevSlide = () => {
//   position =
//     position > 0 ? position - slideWidth : (slideAmount - 1) * slideWidth;
//   sliderLine.style.left = `${-position}px`;
//   dotIndex = position / slideWidth;
//   thisSlide(dotIndex);
// };

// const thisSlide = (index) => {
//   for (let dot of dots) {
//     dot.classList.remove("is-active");
//   }
//   dots[index].classList.add("is-active");
// };

// // EVENT_LISTENERs
// // нажатия на кнопки
// buttonNext.addEventListener("click", nextSlide);
// buttonPrev.addEventListener("click", prevSlide);

// // Нажатие на пины пагинации
// for (let [index, dot] of dots.entries()) {
//   dot.addEventListener("click", () => {
//     position = index * slideWidth;
//     sliderLine.style.left = `${-position}px`;
//     dotIndex = index;
//     thisSlide(dotIndex);
//   });
// }

// setInterval(nextSlide, 5000);
