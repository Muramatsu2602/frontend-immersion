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

    this.elements.createElements();

    console.log("Fim do App");
  },
  store: {
    state: {
      isDropdownOpen: false,
    },
    cards: storeCards,
  },
  controllers: {},
  elements: storeElements,
};

App.init();
