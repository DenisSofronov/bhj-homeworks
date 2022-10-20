const tabs = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');
const tabs1 = document.getElementById('tabs1');

const tabsArr = Array.from(tabs);

tabs1.onclick = function(e) {
  const tabIndex = tabsArr.indexOf(e.target);

  if (tabIndex === 0) {
    tabs[tabIndex].classList.add('tab_active');
    tabs[tabIndex + 1].classList.remove('tab_active');
    tabs[tabIndex + 2].classList.remove('tab_active');
    tabContent[tabIndex].classList.add('tab__content_active');
    tabContent[tabIndex + 1].classList.remove('tab__content_active');
    tabContent[tabIndex + 2].classList.remove('tab__content_active');
  }

  if (tabIndex === 1) {
    tabs[tabIndex].classList.add('tab_active');
    tabs[tabIndex - 1].classList.remove('tab_active');
    tabs[tabIndex + 1].classList.remove('tab_active');
    tabContent[tabIndex].classList.add('tab__content_active');
    tabContent[tabIndex - 1].classList.remove('tab__content_active');
    tabContent[tabIndex + 1].classList.remove('tab__content_active');
  }

  if (tabIndex === 2) {
    tabs[tabIndex].classList.add('tab_active');
    tabs[tabIndex - 1].classList.remove('tab_active');
    tabs[tabIndex - 2].classList.remove('tab_active');
    tabContent[tabIndex].classList.add('tab__content_active');
    tabContent[tabIndex - 1].classList.remove('tab__content_active');
    tabContent[tabIndex - 2].classList.remove('tab__content_active');
  }
};
