var storeElements = {
  app: null,
  header: null,
  body: null,
  footer: null,
  button: null,
  dropDownContainer: null,
  todosContainer: null,

  createApp: function () {
    // container
    this.app = document.getElementById("app");

    this.app.style.postion = "absolute";
    this.app.style.height = "100%";
    this.app.style.width = "100%";
    this.app.style.border = "1px solid black";
  },

  createHeader: function () {
    // header
    this.header = document.createElement("div");
    this.header.innerHTML = "Ich bin ein Header";
    this.header.style.height = "50px";
    this.header.style.border = "1px solid blue";
    this.app.appendChild(this.header);
  },

  createBody: function () {
    // body
    this.body = document.createElement("div");
    this.body.innerHTML = "Eu sou body";
    this.body.style.border = " 1px solid green";
    this.app.appendChild(this.body);

    this.button = document.createElement("button");
    this.button.innerHTML = "click";
    this.button.onclick = App.controllers.createDiv;
    this.body.appendChild(this.button);

    this.dropDownContainer = document.createElement("div");
    this.dropDownContainer.style.border = "1px solid red";
    this.dropDownContainer.style.width = "100px";

    this.postsContainer = document.createElement("div");
    this.postsContainer.style.border = "1px solid green";
    this.body.appendChild(this.postsContainer);
  },

  createFooter: function () {
    // footer
    this.footer = document.createElement("div");
    this.footer.innerHTML = "Eu sou footer";
    this.footer.style.border = " 1px solid purple";
    this.app.appendChild(this.footer);
  },

  createElements: function () {
    console.log("Iniciando a criacao dos elementos");

    this.createApp();
    this.createHeader();
    this.createBody();
    this.createFooter();

    console.log(App.store.cards);
    console.log("Elementos criados");
  },
};
