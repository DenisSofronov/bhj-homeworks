const modal = document.getElementById("modal_main");
modal.classList.add("modal_active");

const close = document.querySelector(".modal__close");
const openSecondModal = document.querySelector(".show-success");

close.onclick = function() {
  modal.style.display = "none";
};

openSecondModal.onclick = function() {
  modal.style.display = "none";
  const secondModal = document.getElementById("modal_success");
  secondModal.classList.add("modal_active");

  const closeAll = document.querySelector(".modal__close");
  const closeSecondModal = document.querySelector(".btn_success");

  closeAll.onclick = function() {
    secondModal.style.display = "none";
  };

  closeSecondModal.onclick = function() {
    secondModal.style.display = "none";
  };
};
