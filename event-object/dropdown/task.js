const value = document.querySelector('.dropdown__value')
const list = document.querySelector('.dropdown__list')
const item = Array.from(document.querySelectorAll('.dropdown__item'))


value.onclick = () => {
  list.classList.toggle('dropdown__list_active')
}

for (let i = 0; i < item.length; i++) {
  item[i].onclick = () => {
    value.textContent = item[i].querySelector('.dropdown__link').textContent
    list.classList.remove('dropdown__list_active')
    if (item[i].querySelector('.dropdown__link')) {
      return false
    }
  }
}
