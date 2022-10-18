let lost = document.getElementById("lost");
let dead = document.getElementById("dead");
let hole = document.getElementsByClassName("hole");

for (let index = 1; index < hole.length; index++) {

  function getHole(index) {
    let holeClick = document.getElementById(`hole${index}`);
    return holeClick;
  }

  let hole = getHole(index);

  hole.onclick = function() {

    if (hole.className.includes("hole_has-mole") === true) {
      dead.textContent++;
    } else {
      lost.textContent++;
    }

    if (dead.textContent == 10) {
      alert("Вы победили!");
      lost.textContent = 0;
      dead.textContent = 0;
    }

    if (lost.textContent == 5) {
      alert("Вы проиграли");
      lost.textContent = 0;
      dead.textContent = 0;
    }

  };

};
