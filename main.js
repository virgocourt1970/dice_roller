console.log("hi");
const rollbutton = document.querySelector("#roll-button");
const diceinput = document.querySelector("#numberofdiceused");
const totaldiv = document.querySelector("#total");
const dieRolls = [];

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
