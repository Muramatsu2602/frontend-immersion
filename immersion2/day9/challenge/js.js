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
      this.app = document.getElementById("app");

      this.app.style.height = "100%";
      this.app.style.width = "100%";

      // THIS DOES NOT REMOVE THE DEFAULT body padding/margin :(
      this.app.style.padding = "0px";
      this.app.style.margin = "0px";

      this.app.style.color = "#202124";
      this.app.style.fontFamily = "arial, sans-serif";

      this.app.style.display = "flex";
      this.app.style.flexDirection = "column";
      this.app.style.position = "relative";
    },

    createHeader: function () {
      // header
      this.header = document.createElement("div");

      this.header.style.fontSize = "13px";
      this.header.style.width = "100%";

      this.header.style.paddingTop = "0.1rem";

      this.header.style.justifyContent = "flex-end";
      this.header.style.display = "flex";

      this.app.appendChild(this.header);
    },

    createBody: function () {
      // body
      this.body = document.createElement("div");

      this.app.appendChild(this.body);
    },

    createFooter: function () {
      // footer (IDENTATION MEANS HIERARCHY)
      this.footer = document.createElement("div");
        const footer_links_location = document.createElement("div");
        const footer_links_parent = document.createElement("div");
          const footer_links_left = document.createElement("div");
            const footer_link_advertising = document.createElement("a");
            const footer_link_business = document.createElement("a");
            const footer_link_about = document.createElement("a");
            const footer_link_howSearch = document.createElement("a");
          const footer_links_right = document.createElement("div");
            const footer_link_privacy = document.createElement("a");
            const footer_link_terms = document.createElement("a");
            const footer_link_settings = document.createElement("a");
      // footer
      this.footer.style.color = "rgba(0, 0, 0, .54)";
      this.footer.style.backgroundColor = "#f2f2f2";
      this.footer.style.fontSize = "16px";
      this.footer.style.borderTop = "1px solid #dadce0";
      this.footer.style.textAlign = "left";

      this.footer.style.position = "absolute";
      this.footer.style.bottom = "0";
      this.footer.style.width = "100%";

      // footer_links_location
      footer_links_location.innerHTML = "Brazil";
      footer_links_location.style.borderBottom = "1px solid #dadce0";
      footer_links_location.style.padding = "10px 10px 27px";

      // footer_links_parent
      footer_links_parent.style.display = "flex";
      footer_links_parent.style.justifyContent = "space-between";
      footer_links_parent.style.padding = "0.6%";

      // footer_links_left
      footer_links_left.style.display = "flex";
      footer_links_left.style.textAlign = "left";

      // applying style to all links (a element) in footer_links_left
      footer_link_advertising.innerHTML = "Advertising";
      footer_link_business.innerHTML = "Business";
      footer_link_about.innerHTML = "About";
      footer_link_howSearch.innerHTML = "How Search Works";

      // footer_links_right
      footer_links_right.style.display = "flex";
      footer_links_right.style.textAlign = "right";

      // applying style to all links (a element) in footer_links_left
      footer_link_privacy.innerHTML = "Privacy";
      footer_link_terms.innerHTML = "Terms";
      footer_link_settings.innerHTML = "Settings";

      // footer_links_right
      footer_links_right.style.display = "flex";
      
      footer_links_right.style.textAlign = "right";

      // appending all divs in footer starting with the outermost layer
      this.app.appendChild(this.footer);
      this.footer.appendChild(footer_links_location);
      this.footer.appendChild(footer_links_parent);

      footer_links_parent.appendChild(footer_links_left);
      footer_links_parent.appendChild(footer_links_right);

      footer_links_left.appendChild(footer_link_advertising);
      footer_links_left.appendChild(footer_link_business);
      footer_links_left.appendChild(footer_link_about);
      footer_links_left.appendChild(footer_link_howSearch);

      footer_links_right.appendChild(footer_link_privacy);
      footer_links_right.appendChild(footer_link_terms);
      footer_links_right.appendChild(footer_link_settings);
    },

    createElements: function () {
      console.log("Iniciando a criacao dos elementos");

      this.createApp();
      // this.createHeader();
      this.createBody();
      this.createFooter();

      console.log("Elementos criados");
    },
  },
};

App.init();
