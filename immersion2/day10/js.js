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
    todos: [
      {
        userId: 1,
        id: 1,
        title: "hey my boss how are you",
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: "hey my boss tjos os asdjfka;sfa",
        completed: false,
      },
      {
        userId: 1,
        id: 3,
        title: "hey my boss all gud",
        completed: false,
      },
      {
        userId: 1,
        id: 4,
        title: "hey my boss how are you doing tonight",
        completed: false,
      },
    ],
  },
  controllers: {
    openDropdown: function () {
      console.log("vamos abrir o dropdown", App.store.state.isDropdownOpen);
      if (App.store.state.isDropdownOpen) {
        console.log("esta fechado");
        App.store.state.isDropdownOpen = false;
        App.elements.dropDownContainer.style.display = "none";
      } else {
        console.log("Esta fechado, vamos abrir");
        App.store.state.isDropdownOpen = true;
      }
    },
    createDiv: function () {
      var el = document.createElement("div");
      el.innerHTML = "Sou um div novo";
      el.style.border = "1px solid black";

      // static id doesnt work -->
      el.setAttribute(`${App.elements.els.length}`, App.elements.els.length);

      // deletes the generated i whenever we click on it
      el.onclick = function (event) {
        var clickedI = event.target.getAttribute("i");
        App.elements.els.splice(clickedI, 1);
        console.log(event.target);
      };

      App.elements.elsContainer.appendChild(el);
      App.elements.els.push(el);
    },
    renderAllTodos: function () {
      console.log("vamos iniciar e renderizar todos os todos");
      var todos = App.store.state.todos;

      for (let i = 0; i < todos.length.length; i++) {
        const todo = todos[i].id + "-" + todo.title;
        this.renderTodo(todo);
      }
    },
    renderTodo: function (todo) {
      console.log("vamos renderizr o:", todo);
      var el = document.createElement("div");
      var completed = "x";

      if (todo.completed) {
        completed = "CHECK!";
      }

      el.innerHTML = completed + "  -  " + todo.id + " - " + todo.title;

      App.elements.todos(todo.id) = el;
      App.elements.todosContainer.appendChild(el);
      console.log(el);
    },
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
