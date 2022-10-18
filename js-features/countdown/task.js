const countdown = document.getElementById("timer");

function count() {
  let timer = +countdown.textContent;
  timer--;
  countdown.textContent = timer;
  if (countdown.textContent <= 0) {
    clearInterval(timerId);
    alert("Вы победили в конкурсе!");
  }
}
const timerId = setInterval(count, 1000);
