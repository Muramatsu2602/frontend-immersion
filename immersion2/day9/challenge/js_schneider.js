function htmlhead() {
  let elLink = document.createElement("link");
  let elTitle = document.createElement("title");
  let elMeta = document.createElement("meta");

  elLink.setAttribute("rel", "icon")
  elLink.setAttribute("type", "image/png")
  elLink.setAttribute("href", "https://icons-for-free.com/iconfiles/png/512/google+logo+new+icon-1320185797820629294.png");

  elTitle.innerHTML = "Google";

  elMeta.setAttribute("charset", "UTF-8");
  elMeta.setAttribute("name", "viewport");
  elMeta.setAttribute("content", "width=device-width, initial-scale=1.0");

  document.head.appendChild(elLink);
  document.head.appendChild(elTitle);
  document.head.appendChild(elMeta);
}

function indextopleft(word) {
  let el = document.createElement("a");
  this.word = el.innerHTML = word;

  el.style.color = "black";
  el.style.fontSize = "13px";
  el.style.display = "inline";
  el.style.marginRight = "6px";
  el.style.marginLeft = "6px";
  el.style.paddingTop = "4px"
  el.style.position = "relative";
  el.style.float = "left";
  el.style.fontFamily = "Roboto,RobotoDraft,Arial,sans-serif";
  el.style.textDecoration = "none";
  el.style.cursor = "pointer";
  el.style.outline = "none";
  el.setAttribute("href", "#" + word);
  el.setAttribute("onmouseover", "hoverunder(this)");
  el.setAttribute("onmouseout", "noneline(this)");

  document.body.appendChild(el);
}

function indextopright(word) {
  let el = document.createElement("a");
  this.word = el.innerHTML = word;

  el.style.color = "black";
  el.style.fontSize = "14px";
  el.style.textAlign = "right";
  el.style.right = "0";
  el.style.display = "inline";
  el.style.marginRight = "6px";
  el.style.marginLeft = "6px";
  el.style.paddingTop = "4px"
  el.style.position = "relative";
  el.style.float = "right";
  el.style.fontFamily = "Roboto,RobotoDraft,Arial,sans-serif";
  el.style.textDecoration = "none";
  el.style.cursor = "pointer";
  el.style.outline = "none";


  el.setAttribute("href", "#" + word);
  el.setAttribute("onmouseover", "hoverunder(this)");
  el.setAttribute("onmouseout", "noneline(this)");


  document.body.appendChild(el);
}

function grid(link, word) {
  let elImg = document.createElement("img");
  let elA = document.createElement("a");

  this.word = elImg.innerHTML = word;

  elA.style.fontSize = "14px";
  elA.style.textAlign = "right";
  elA.style.right = "0";
  elA.style.display = "inline";
  elA.style.marginRight = "6px";
  elA.style.marginLeft = "6px";
  elA.style.position = "relative";
  elA.style.float = "right";
  elA.style.cursor = "pointer";
  elA.style.outline = "none";

  elImg.style.height = "24px";
  elImg.style.width = "25px";
  elImg.style.borderRadius = "50%";

  elImg.setAttribute("src", link);
  elImg.setAttribute("alt", word);

  if (word == "account") {
    elImg.setAttribute("onmouseover", "brownaccount(this)");
    elImg.setAttribute("onmouseout", "nonetext(this)");
  }

  if (word == "Google apps") {
    elImg.setAttribute("onmouseover", "appstext(this)");
    elImg.setAttribute("onmouseout", "nonetext(this)");
  }

  elA.setAttribute("href", "#" + word.replace(/\s/g, ""));
  elA.appendChild(elImg);

  document.body.appendChild(elA);
}

function googleimg(link) {
  let el = document.createElement("img");

  let div = document.createElement("div");

  div.style.minWidth = "580px";

  el.style.textAlign = "center";
  el.style.display = "block";
  el.style.position = "relative";
  el.style.paddingTop = "190px";
  el.style.marginLeft = "auto";
  el.style.marginRight = "auto";
  el.style.paddingLeft = "90px";

  el.setAttribute("src", link);
  el.setAttribute("alt", "Google");
  div.appendChild(el);
  document.body.appendChild(div);
}

function backbar() {
  let el = document.createElement("div");
  el.setAttribute("id", "backbar");
  el.style.margin = "0 auto";
  el.style.height = "45px";
  el.style.border = "1px solid #909090";
  el.style.borderRadius = "30px";
  el.style.width = "580px";
  el.style.marginTop = "30px";
  el.style.paddingleft = "170px";
  el.style.outline = "none";
  el.style.display = "block";
  el.style.position = "relative";
  el.style.textDecoration = "none";

  el.setAttribute("type", "text");
  el.setAttribute("title", "Search");
  el.setAttribute("onmouseover", "hoverbar(this)");
  el.setAttribute("onmouseout", "noneshadow(this)");
  document.body.appendChild(el);
}

function bar() {
  let el = document.createElement("input");
  el.style.margin = "0 auto";
  el.style.height = "40px";
  el.style.border = "1px #505050";
  el.style.width = "490px";
  el.style.fontFamily = "Roboto,RobotoDraft,Arial,sans-serif";
  el.style.fontSize = "16px";
  el.style.paddingleft = "170px";
  el.style.outline = "none";
  el.style.display = "block";
  el.style.position = "relative";
  el.style.textDecoration = "none";

  el.setAttribute("id", "bar");
  el.setAttribute("type", "text");
  el.setAttribute("title", "Search");
  document.getElementById("backbar").appendChild(el);
}

function glass(link) {
  let el = document.createElement("img");

  el.style.position = "relative";
  el.style.left = "12px";
  el.style.bottom = "32px";
  el.style.height = "22px";
  el.style.opacity = "0.6";

  el.setAttribute("src", link);
  document.getElementById("backbar").appendChild(el);
}

function voice(link) {
  let a = document.createElement("a");

  a.style.outline = "none";

  let el = document.createElement("img");

  el.style.position = "relative";
  el.style.left = "530px";
  el.style.bottom = "33px";
  el.style.height = "20px";
  el.style.outline = "none";

  a.setAttribute("href", "#voicesearch");
  el.setAttribute("src", link);
  el.setAttribute("title", "Search by Voice");
  document.getElementById("backbar").appendChild(a);
  a.appendChild(el);
}

function button(word) {
  let div = document.createElement("div");

  div.style.margin = "0 auto";
  div.style.height = "45px";
  div.style.width = "290px";
  div.style.marginTop = "-10px";
  div.style.paddingleft = "170px";
  div.style.outline = "none";
  div.style.display = "block";

  div.setAttribute("id", "buttondiv");

  let el = document.createElement("button");

  el.style.background = "#f5f5f5";
  el.style.position = "relative";
  el.style.color = "#505050";
  el.style.fontFamily = "Roboto,RobotoDraft,Arial,sans-serif";
  el.style.fontSize = "15px";
  el.style.border = "none";
  el.style.borderRadius = "5px";
  el.style.margin = "5px";
  el.style.marginTop = "35px";

  el.style.width = "130px";
  el.style.height = "40px";
  el.style.outline = "none";
  el.style.cursor = "pointer";

  if (word == "el1") {
    el.innerHTML = "Google Search";
    //TODO
    // el.setAttribute("onmouseover", "hoverbutton(this)");
    // el.setAttribute("onmouseout", "noneshadowbutton(this)");
  } else {
    el.innerHTML = "I'm Feeling Lucky";
    //TODO
    // el.setAttribute("onmouseover", "hoverbutton(this)");
    // el.setAttribute("onmouseout", "noneshadowbutton(this)");
  }

  el.setAttribute("id", "button");
  el.setAttribute("type", "button");
  document.body.appendChild(div);
  document.getElementById("buttondiv").appendChild(el);
}

function footerleft(word) {
  let el = document.createElement("a");
  this.word = el.innerHTML = word;

  el.style.color = "black";
  el.style.fontSize = "13px";
  el.style.display = "inline";
  el.style.bottom = "0";
  el.style.position = "block";
  el.style.float = "left";
  el.style.fontFamily = "Roboto,RobotoDraft,Arial,sans-serif";
  el.style.marginRight = "6px";
  el.style.marginLeft = "6px";
  el.style.display = "relative";
  el.style.cursor = "pointer";
  el.style.outline = "none";
  el.style.textDecoration = "none";
  el.style.paddingTop = "11px";
  el.style.paddingLeft = "10px";

  el.setAttribute("href", "#" + word);
  el.setAttribute("onmouseover", "hoverunder(this)");
  el.setAttribute("onmouseout", "noneline(this)");

  document.getElementById("graybox").appendChild(el);
}

function footerright(word) {
  let el = document.createElement("a");
  this.word = el.innerHTML = word;

  el.style.color = "black";
  el.style.fontSize = "13px";
  el.style.textAlign = "right";
  el.style.display = "inline";
  el.style.bottom = "0";
  el.style.position = "block";
  el.style.float = "right";
  el.style.fontFamily = "Roboto,RobotoDraft,Arial,sans-serif";
  el.style.marginRight = "6px";
  el.style.marginLeft = "6px";
  el.style.display = "relative";
  el.style.cursor = "pointer";
  el.style.outline = "none";
  el.style.textDecoration = "none";
  el.style.paddingTop = "11px";
  el.style.paddingRight = "10px";

  el.setAttribute("href", "#" + word);
  el.setAttribute("onmouseover", "hoverunder(this)");
  el.setAttribute("onmouseout", "noneline(this)");

  document.getElementById("graybox").appendChild(el);
}

function graybg() {
  let el = document.createElement("div");

  el.setAttribute("id", "graybox");
  el.style.background = "#f2f2f2";
  el.style.height = "40px";
  el.style.bottom = "0";
  el.style.right = "0";
  el.style.left = "0";
  el.style.display = "relative";
  el.style.position = "absolute";

  document.body.appendChild(el);
}

// Hover functions are defined below
function hoverunder(x) {
  x.style.textDecoration = "underline";
}

function noneline(x) {
  x.style.textDecoration = "none";
}

function hoverbar(x) {
  document.getElementById("backbar").style.boxShadow = "3px 3px 10px #dcdcdc";
}

function noneshadow(x) {
  document.getElementById("backbar").style.boxShadow = "none";
}

function hoverbutton(x) {
  document.getElementById("button").style.boxShadow = "0 0 4px #dcdcdc";
}

function noneshadowbutton(x) {
  document.getElementById("button").style.boxShadow = "none";
}

function brownaccount(x) {
  x.setAttribute("title", "Google Account: Emmett Brown\n(dr.brown@gmail.com)");
}

function appstext(x) {
  x.setAttribute("title", "Google apps");
}

function nonetext(x) {
  x.setAttribute("title", "none");
}

// This part is only to open the HTML page before execute
// the functions and not write further than really need
window.addEventListener("DOMContentLoaded", (event) => {
  htmlhead();
  indextopleft("About");
  indextopleft("Store");
  grid("https://i.pinimg.com/originals/d1/4d/4c/d14d4cff66e29ab30702d0188d9264f9.jpg", "account")
  grid("https://cdn3.iconfinder.com/data/icons/navigation-and-settings/24/Material_icons-01-11-512.png", "Google apps");
  indextopright("Images");
  indextopright("Gmail");
  googleimg("https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png");
  backbar();
  bar();
  glass("https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Google_Magnifying_Glass.svg/1200px-Google_Magnifying_Glass.svg.png");
  voice("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png");
  button("el1");
  button("el2");
  graybg();
  footerleft("Advertising");
  footerleft("Business");
  footerright("Settings");
  footerright("Terms");
  footerright("Privacy");
})