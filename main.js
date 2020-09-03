console.log("hi");
const rollbutton = document.querySelector("#roll-button");
console.log(rollbutton);
const diceinput = document.querySelector("#numberofdiceused");
const totaldiv = document.querySelector("#total");
const dieRolls = [];
const showallrolls = document.querySelector("#roll");
const allrolls = document.querySelector("#all-rolls");

rollbutton.addEventListener("click", function () {
  let dicevalue = diceinput.value;
  let total = 0;
  for (let i = 0; i < dicevalue; i = i + 1) {
    let diceroll = Math.ceil(Math.random() * 6);
    console.log(diceroll);
    total += diceroll;
    dieRolls.push(diceroll);
  }
  console.log(total);
  totaldiv.innerHTML = total;
});

showallrolls.addEventListener("click", function () {
  for (let i = 0; i < dieRolls.length; i = i + 1) {
    allrolls.innerHTML += "<li>" + dieRolls[i] + "</li>";
  }
});
