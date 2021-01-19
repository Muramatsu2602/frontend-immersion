// APP
var app = document.createElement("div");
app.style.position = "absolute";
app.style.width = "100%";
app.style.height = "100%";
app.style.border = "1px solid black";
document.body.appendChild(app);

// HEADER
var header = document.createElement("div");
header.innerHTML = "eu sou o header";
header.style.height = "50px";
app.style.border = "1px solid black";
app.appendChild(header);

// BODY
var body = document.createElement("body");
body.innerHTML = "Eu sou o body";
body.style.border = "1px solid green";
app.appendChild(body);

// FOOTER
var footer = document.createElement("footer");
footer.innerHTML = "Eu sou o footer";
footer.style.border = "1px solid green";
app.appendChild(footer);

// TABLE
var table = document.createElement("table");
table.style.border = "1px solid pink";
table.style.width = "100%";
body.appendChild(table);

var tr1 = document.createElement("tr");
table.appendChild(tr1);
// Inside Tr1, three columns

var td1 = document.createElement("td");
td1.innerHTML = "A";
tr1.appendChild(td1);

var td2 = document.createElement("td");
td2.innerHTML = "B";
tr1.appendChild(td2);

var td3 = document.createElement("td");
td3.innerHTML = "A";
tr1.appendChild(td3);

// other rows

// TR 2
var tr2 = document.createElement("tr");
table.appendChild(tr2);

// TR 3
var tr3 = document.createElement("tr");
table.appendChild(tr3);
