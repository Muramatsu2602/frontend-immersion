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
      // header (IDENTATION MEANS HIERARCHY)
      this.header = document.createElement("div");
          const header_link_gmail = document.createElement("a");
          const header_link_images = document.createElement("a");
          const header_img_cube = document.createElement("img");
          const header_img_profile = document.createElement("img");

      // top-buttons
      this.header.style.fontSize = "14px";
      this.header.style.width = "100%";
      this.header.style.paddingTop = "0.1rem";
      this.header.style.display = "flex";
      this.header.style.justifyContent = "flex-end";
      this.header.style.alignItems = "center";

      // all top-buttons' children
      header_link_gmail.innerHTML = "Gmail";
      header_link_gmail.style.paddingRight = "1.3rem";
      header_link_gmail.style.paddingTop = "0.5rem";

      header_link_images.innerHTML = "Images";
      header_link_images.style.paddingRight = "1.3rem";
      header_link_images.style.paddingTop = "0.5rem";

      header_img_cube.src = "https://cdn3.iconfinder.com/data/icons/navigation-and-settings/24/Material_icons-01-11-512.png";
      header_img_cube.style.height = "27px";
      header_img_cube.style.paddingRight = "1.3rem";
      header_img_cube.style.paddingTop = "0.5rem";

      header_img_profile.src = "https://lh3.googleusercontent.com/proxy/zrfta5Y9CclASG91wH8uN-l4aarjAc4j49Jk97ERc4EbNxPlbAbqCHt4bE56GyeUh_qSpfmYtYlpsHqr4f-GsSY2N571FJ8O0dK-OOvEnFQTdlZoPdZrbdw";
      header_img_profile.style.height ="35px";
      header_img_profile.style.paddingRight = "1.3rem";
      header_img_profile.style.paddingTop = "0.5rem";

      this.app.appendChild(this.header);
      this.header.appendChild(header_link_gmail);
      this.header.appendChild(header_link_images);
      this.header.appendChild(header_img_cube);
      this.header.appendChild(header_img_profile);
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
      footer_links_location.style.padding = "17px 10px 17px 10px";

      // footer_links_parent
      footer_links_parent.style.display = "flex";
      footer_links_parent.style.justifyContent = "space-between";
      footer_links_parent.style.padding = "0.6%";

      // footer_links_left
      footer_links_left.style.display = "flex";
      footer_links_left.style.justifyContent = "space-between";
      footer_links_left.style.textAlign = "left";
      footer_links_left.style.width = "25rem";

      // applying style to all links (a element) in footer_links_left
      footer_link_advertising.innerHTML = "Advertising";
      footer_link_advertising.style.cursor = "pointer";
      footer_link_business.innerHTML = "Business";
      footer_link_business.style.cursor = "pointer";
      footer_link_about.innerHTML = "About";
      footer_link_about.style.cursor = "pointer";
      footer_link_howSearch.innerHTML = "How Search Works";
      footer_link_howSearch.style.cursor = "pointer";


      // footer_links_right
      footer_links_right.style.display = "flex";
      footer_links_right.style.textAlign = "right";
      footer_links_right.style.justifyContent = "space-between";
      footer_links_right.style.width = "13rem";


      // applying style to all links (a element) in footer_links_left
      footer_link_privacy.innerHTML = "Privacy";
      footer_link_privacy.style.cursor = "pointer";
      footer_link_terms.innerHTML = "Terms";
      footer_link_terms.style.cursor = "pointer";
      footer_link_settings.innerHTML = "Settings";
      footer_link_settings.style.cursor = "pointer";


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
      this.createHeader();
      this.createBody();
      this.createFooter();

      console.log("Elementos criados");
    },
  },
};

App.init();
