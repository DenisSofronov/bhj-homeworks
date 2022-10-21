const modal = document.getElementById("modal_main");
const secondModal = document.getElementById("modal_success");
const close = document.querySelectorAll(".modal__close");
const openSecondModal = document.querySelector(".show-success");

modal.classList.add("modal_active");

for (button of close) {
  button.onclick = function() {
    modal.style.display = "none";
    secondModal.style.display = "none";
  };
}

openSecondModal.onclick = function() {
  modal.style.display = "none";
  secondModal.classList.add("modal_active");

  const closeSecondModal = document.querySelector(".btn_success");

  closeSecondModal.onclick = function() {
    secondModal.style.display = "none";
  };
};
