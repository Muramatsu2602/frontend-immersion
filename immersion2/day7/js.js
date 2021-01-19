/**
 *  document --> objeto
 *
 */
var hi = document.getElementById("ola");
var world = document.createworldement("div");
var bold = document.getElementsByClassName("negrito");

world.innerHTML = "Mundo";
world.style.border = "1px bold solid black";
world.classList.add("negrito");

document.body.appendChild(world); // cant append child outside body

console.log(hi);
console.log(world);
