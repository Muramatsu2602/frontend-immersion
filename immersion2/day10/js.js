var App = {
  init: function () {
    console.log("inicio do APP");

    // context , contexto, this, self
    this.elements.createElements();

    console.log("Fim do App");
  },
  store: {},
  controllers: {
    createDiv: function () {
      var el = document.createElement("div");
      el.innerHTML = "Sou um div novo";
      el.style.border = "1px solid black";

      el.setAttribute("i", App.elements.els.length);

      // deletes the generated i whenever we click on it
      el.onclick = function (event) {
        var clickedI = event.target.getAttribute("i");
        App.elements.els.splice(clickedI, 1);
        console.log(event.target);
      };

      App.elements.elsContainer.appendChild(el);
      App.elements.els.push(el);
    },
  },
  elements: {
    app: null,
    header: null,
    body: null,
    footer: null,

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

      console.log("Elementos criados");
    },
  },
};

App.init();
