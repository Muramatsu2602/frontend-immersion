// Jogo de cartas
//  1. Criar uma pagina onde poderemos
//  1.1 comprar cartas
//  1.2 vender cartas
//  1.3 visualizar deck com cartas
// 2. Obj da carta: id, name, life, attack, defence, price e img
// 3. pode escolher as cartas que quiser da internet


var App = {
    init: function () {
      console.log("inicio do APP");
  
      // context , contexto, this, self
      this.elements.createElements();
  
      console.log("Fim do App");
    },
    store: {
      state: {
        isDropdownOpen: false,
      },
      cards:[
          {
              id: 1,
              name: "Marie Curie",
              life: "68",
              attack: "100",
              defence: "40",
              price: 12.33,
              img: "img/cards/marieCurie.jpg"
          },
          {
            id: 2,
            name: "Albert Einstein",
            life: "76",
            attack: "78",
            defence: "99",
            price: 99.33,
            img: "img/cards/albertEinstein.jpg"
          }
      ]
    },
    controllers: {
      
    },
    elements: {
      app: null,
      header: null,
      body: null,
      footer: null,
      button: null,
      dropDownContainer: null,
      todosContainer: null,
      todos: {},
  
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
        this.controllers.openDropdown();
  
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
  
        console.log("Elementos criados");
      },
    },
  };
  
  App.init();
  