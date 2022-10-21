let body = document.querySelector("body");

body.insertAdjacentHTML("afterbegin", `<div class="tooltip "></div>`);

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("has-tooltip")) {
    e.preventDefault();
    if (document.querySelector(".tooltip").classList.contains("tooltip_active")) {
      document.querySelector(".tooltip").remove();
    } else {
      body.insertAdjacentHTML("afterbegin", `<div class="tooltip tooltip_active">${e.target.title}</div>`);
      document.querySelector(".tooltip").style.top = (Number(e.target.getBoundingClientRect().top) + 17) + 'px';
      document.querySelector(".tooltip").style.left = e.target.getBoundingClientRect().left + 'px';
    }
  }
})
