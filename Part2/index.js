console.log("the house always wins");

let idInput = document.getElementById("idInput");
let colorInput = document.getElementById("colorInput");
console.dir(idInput);
// console.log(idInput);
// console.log(colorInput);

function setCard() {
  let card = idInput.value;

  document.getElementById(card).style.color = colorInput.value;
  console.dir(document.getElementById(card));
  // console.log(card);
  // console.log(document.getElementById(card));
}

function reset() {
  let resetCards = document.getElementsByTagName("section");
  for (let i = 0; i < resetCards.length; i++) {
    resetCards[i].style = "";
  }
}
