/**
 * AULA 6 - Desafio JS
 * 
 *  JS-only HTML page!
 */
// APP --> Container
var container = document.createElement("div");
container.style.position = "absolute";
container.style.margin = 0;
container.style.border = 0;

container.style.width = "100%";
container.style.height = "100%";
document.body.appendChild(container);


// HEADER
var header = document.createElement("div");
header.innerHTML = "Hello World!";
header.style.height = "50px";
container.appendChild(header);