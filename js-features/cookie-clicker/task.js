const counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

const cookieCount = () => {
  let count = +counter.textContent;
  counter.textContent = count + 1;
  if (cookie.width === 200) {
    cookie.width = 250;
  } else {
    cookie.width = 200;
  }
};

cookie.onclick = cookieCount;
