var App = {
  init: function () {
    console.log("inicio do APP");

    // context , contexto, this, self
    this.elements.createElements();

    console.log("Fim do App");
  },
  store: {},
  controllers: {},
  elements: {
    app: null,
    header: null,
    body: null,
    footer: null,

    createApp: function () {
      // container
      console.log("createElements:", this);
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
    },

    createFooter: function () {
      // footer
      this.footer = document.createElement("div");
      this.footer.innerHTML = "Eu sou footer";
      this.footer.style.border = " 1px solid purple";
      this.app.appendChild(this.footer);
    },

    createElements() {
      console.log("Iniciando a criacao dos elementos");

      this.createApp();
      this.createHeader();
      this.createBody();
      this.createFooter();

      console.log("Elementos criados");
    },
  },
};

App.init();
