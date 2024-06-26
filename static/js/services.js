const tabs = document.querySelectorAll(".tabheader__item");
const tabContent = document.querySelectorAll(".tabcontent");
const headerParents = document.querySelector(".tabheader__items");

function hideTabContent() {
  tabContent.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
}
function showTabContent(i = 0) {
  tabContent[i].style.display = "block";
  tabs[i].classList.add("tabheader__item_active");
}
headerParents.addEventListener("click", (event) => {
  if (event.target && event.target.classList.contains("tabheader__item")) {
    tabs.forEach((item, i) => {
      if (event.target === item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});

hideTabContent();
showTabContent();
