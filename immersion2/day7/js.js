/**
 *  document --> objeto
 *
 */
var el = document.createElement("div");

el.innerHTML = "Mundo";
el.style.border = "1px bold solid black";
el.classList.add("negrito");

document.body.appendChild(el); // cant append child outside body
