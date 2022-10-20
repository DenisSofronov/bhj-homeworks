const reveal = Array.from(document.getElementsByClassName("reveal"));
document.addEventListener("scroll", scrollFunc);

function scrollFunc() {
  reveal.forEach((element) => {
    let obj = ({
      top,
      bottom,
      height
    } = element.getBoundingClientRect());
    if (obj.top > 0 && obj.bottom < window.outerHeight - obj.top) {
      element.classList.add("reveal_active");
    } else {
      element.classList.remove("reveal_active");
    }
  });
}
