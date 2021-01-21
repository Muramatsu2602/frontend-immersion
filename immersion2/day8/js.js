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

        createElements(){
            console.log("Iniciando a criacao dos elementos");
            console.log("Elementos criados");
        },
    },
};

App.init();