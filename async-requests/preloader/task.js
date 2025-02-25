let xhr = new XMLHttpRequest();
let items = document.getElementById('items');
let loader = document.getElementById('loader');
let arr = [];
let fromLocalStorage = localStorage.getItem('preloader');

if (fromLocalStorage !== null) {
  let answer = JSON.parse(fromLocalStorage);

  renderAnswer(answer);

  xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
  xhr.send();

  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      answer = JSON.parse(xhr.responseText);

      renderAnswer(answer);
      localStorage.setItem('preloader', xhr.responseText);
    }
  });

} else {
  xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
  xhr.send();

  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      let answer = JSON.parse(xhr.responseText);

      renderAnswer(answer);
      localStorage.setItem('preloader', xhr.responseText);
    }
  });
}

function renderAnswer(answer) {
  for (let valute in answer.response.Valute) {
    arr.push(answer.response.Valute[valute]);
  }

  let render = arr.map(el => `
        <div class="item">
            <div class="item__code">
                ${el.CharCode}
            </div>
            <div class="item__value">
                ${el.Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>
    `);

  items.innerHTML = render.join('');
  arr = [];
  loader.classList.remove('loader_active');
}
