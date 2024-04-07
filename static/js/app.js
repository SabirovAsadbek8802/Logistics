// var loader = document.getElementById("loader"),
//   load = document.getElementById("loading"),
//   myTime,
//   newTime = 0;

// function loading() {
//   "use strict";

//   newTime = newTime + 1;

//   if (newTime > 100) {
//     newTime = 0;
//     load.style.transition = "1s all";
//     load.style.opacity = "0";
//     load.style.display = "none";
//     clearInterval(myTime);
//   } else {
//     loader.textContent = newTime + "%";
//   }
// }

// myTime = setInterval(loading, 20);

// // ! <<<<<< Task-4 "Modal">>>>>>>

const modal = document.querySelector(".modal"),
  modalInput = document.querySelectorAll(".modal__input"),
  modalBtn = document.querySelector(".modal_btn"),
  modalClose = document.querySelector(".modal__close");

function modalShow() {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
  clearInterval(timerId);
}

function modalBtnClose() {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}
modalClose.addEventListener("click", modalBtnClose);

function modalHideTabs() {
  modal.addEventListener("click", (e) => {
    console.log(e.target);

    if (e.target === modal) {
      modal.classList.add("hide");
      modal.classList.remove("show");
      document.body.style.overflow = "";
    }
  });
}
modalHideTabs();

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && modal.classList.contains("show")) {
    modalBtnClose();
  }
});
const timerId = setTimeout(modalShow, 100);

const sliderLinee = document.querySelector(".slider-line"),
  buttonPrevv = document.querySelector(".button-prev"),
  buttonNextt = document.querySelector(".button-next"),
  dotss = document.querySelectorAll(".dot");

const sliWidth = 1300;
slideAmount = dotss.length;

let positionn = 0,
  dotIndexx = 0;

// FUNCTIONs
const nextSlidee = () => {
  positionn =
    positionn < (slideAmount - 1) * sliWidth ? positionn + sliWidth : 0;
  sliderLinee.style.left = `${-positionn}px`;
  dotIndexx = positionn / sliWidth;
  thisSlidee(dotIndexx);
};

const prevSlidee = () => {
  positionn =
    positionn > 0 ? positionn - sliWidth : (slideAmount - 1) * sliWidth;
  sliderLinee.style.left = `${-positionn}px`;
  dotIndexx = positionn / sliWidth;
  thisSlidee(dotIndexx);
};

const thisSlidee = (index) => {
  for (let dot of dotss) {
    dot.classList.remove("is-active");
  }
  dotss[index].classList.add("is-active");
};

// EVENT_LISTENERs
// нажатия на кнопки
buttonNextt.addEventListener("click", nextSlidee);
buttonPrevv.addEventListener("click", prevSlidee);

// Нажатие на пины пагинации
for (let [index, dot] of dotsss.entries()) {
  dot.addEventListener("click", () => {
    positionn = index * sliWidth;
    sliderLinee.style.left = `${-positionn}px`;
    dotIndexx = index;
    thisSlidee(dotIndexx);
  });
}

setInterval(nextSlide, 5000);

// slider Clients
//
//Make sure the user has scrolled at least double the height of the browser
var toggleHeight = $(window).outerHeight() * 2;

$(window).scroll(function () {
  if ($(window).scrollTop() > toggleHeight) {
    //Adds active class to make button visible
    $(".m-backtotop").addClass("active");

    //Just some cool text changes
    $("h1 span").text("TA-DA! Now hover it and hit dat!");
  } else {
    //Removes active class to make button visible
    $(".m-backtotop").removeClass("active");

    //Just some cool text changes
    $("h1 span").text("(start scrolling)");
  }
});

//Scrolls the user to the top of the page again
$(".m-backtotop").click(function () {
  $("html, body").animate({scrollTop: 0}, "slow");
  return false;
});
