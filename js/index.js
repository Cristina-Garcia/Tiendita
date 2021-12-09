const button = document.querySelector(".button-primary");
const modal = document.querySelector(".modal");

const modalClose = document.querySelector(".modal-content-close");

button.addEventListener("click", function () {
  modal.classList.remove("hidden");
  //   modal.classList.add("visible");
});
modalClose.addEventListener("click", function () {
  modal.classList.add("hidden");
  //   modal.classList.remove("visible");
});
