/**
 * AULA 6 - Desafio JS
 *
 *  JS-only HTML page!
 */

// Document --> equivalent to * tag in modern
document.body.style.margin = 0;
document.body.style.border = 0;

// Container
var container = document.createElement("div");

container.style.width = " 100vw";
container.style.height = "100vh";
container.style.display = "flex";
container.style.backgroundColor = "blue";

document.body.appendChild(container);

// Header
var header = document.createElement("div");

header.style.height = "4rem";
header.style.width = " 100vw";
header.style.display = "flex";
header.style.alignItems = "center";
header.style.justifyContent = "space-between";
header.style.padding = "0rem 1rem 0rem 1rem";
header.style.backgroundColor = "red";

container.appendChild(header);

// header text
var header_text = document.createElement("div");

header_text.innerHTML = "THIS IS A JS-Only website";
header_text.style.color = "white";
header_text.style.fontFamily = "arial";
header_text.style.fontWeight = "bold";

header.appendChild(header_text);

// header logo
var header_logo = document.createElement("div");
var header_logo_content = document.createElement("img");

header_logo_content.src =
  "https://avatars.githubusercontent.com/u/37938401?s=460&u=dab576ac10130761a2ce61497972191a2fa5d673&v=4";
header_logo_content.style.height = "3rem";

header.appendChild(header_logo);
header_logo.appendChild(header_logo_content);

// Body
var body = document.createElement("div");

container.appendChild(body);

// Footer

// color: rgba(0, 0, 0, .54);
//     background-color: #f2f2f2;
//     font-size: 15px;
//     border-top: 1px solid #dadce0;
//     text-align: left;

//     position: absolute;
//     bottom: 0;
//     width: 100%;

var footer = document.createElement("div");

footer.style.color = "white";
footer.style.backgroundColor = "#f2f2f2";
footer.style.fontSize = "15px";
footer.style.borderTop = "1px solid #dadce0";
footer.style.

container.appendChild("footer");
