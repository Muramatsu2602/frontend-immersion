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
container.style.fontFamily = "arial";

container.style.justifyContent = "space-between";
container.style.flexDirection = "column";

document.body.appendChild(container);

// Header
var header = document.createElement("div");

header.style.height = "4rem";
header.style.width = " 100vw";
header.style.display = "flex";
header.style.alignItems = "center";
header.style.justifyContent = "space-between";
header.style.backgroundColor = "red";

container.appendChild(header);

// header text
var header_text = document.createElement("div");

header_text.innerHTML = "JS-Only website";
header_text.style.color = "white";
header_text.style.fontWeight = "bold";
header_text.style.paddingLeft = "1rem";

header.appendChild(header_text);

// header logo
var header_logo = document.createElement("div");
var header_logo_content = document.createElement("img");

header_logo_content.src =
  "https://avatars.githubusercontent.com/u/37938401?s=460&u=dab576ac10130761a2ce61497972191a2fa5d673&v=4";
header_logo_content.style.height = "3rem";
header_logo_content.style.paddingRight = "1rem";

header.appendChild(header_logo);
header_logo.appendChild(header_logo_content);

// Body
var body = document.createElement("div");
var body_content = document.createElement("div");

body_content.style.height = "30vh";
body_content.style.width = "100vw";
body_content.style.backgroundColor = "green";

container.appendChild(body);
body.appendChild(body_content);

// Footer
var footer = document.createElement("div");
var footer_content = document.createElement("div");

footer.style.color = "white";
footer.style.backgroundColor = "grey";
footer.style.fontSize = "15px";
footer.style.textAlign = "left";
footer.style.position = "absolute";
footer.style.bottom = "0";
footer.style.width = "100vw";
footer.style.height = "5vh";

footer_content.innerHTML = "I am the Footer";

container.appendChild(footer);
footer.appendChild(footer_content);
