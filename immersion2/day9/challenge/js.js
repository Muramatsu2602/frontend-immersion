var App = {
  init: function () {
    console.log("inicio do APP");

    // context , contexto, this, self
    this.elements.createElements();
    
    // default properties
    document.body.style.margin = "0";
    document.body.style.padding = "0";

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
      this.header.style.fontSize = "13px";
      this.header.style.width = "100%";
      this.header.style.paddingTop = "0.1rem";
      this.header.style.display = "flex";
      this.header.style.justifyContent = "flex-end";
      this.header.style.alignItems = "center";

      // header_link_gmail
      header_link_gmail.style.cursor = "pointer";
      header_link_gmail.innerHTML = "Gmail";
      header_link_gmail.style.paddingRight = "1.3rem";
      header_link_gmail.style.paddingTop = "0.5rem";

      // header_link_images
      header_link_images.style.cursor = "pointer";
      header_link_images.innerHTML = "Images";
      header_link_images.style.paddingRight = "1.3rem";
      header_link_images.style.paddingTop = "0.5rem";

      // header_img_cube
      header_img_cube.style.cursor = "pointer";
      header_img_cube.src = "https://cdn3.iconfinder.com/data/icons/navigation-and-settings/24/Material_icons-01-11-512.png";
      header_img_cube.style.height = "27px";
      header_img_cube.style.paddingRight = "1.3rem";
      header_img_cube.style.paddingTop = "0.5rem";

      // header_img_profile
      header_img_profile.style.cursor = "pointer";
      header_img_profile.src = "https://cdn0.iconfinder.com/data/icons/elasto-online-store/26/00-ELASTOFONT-STORE-READY_user-circle-256.png";
      header_img_profile.style.height ="33px";
      header_img_profile.style.paddingRight = "1.3rem";
      header_img_profile.style.paddingTop = "0.5rem";

      // appending every div beggining with the outermost layer
      this.app.appendChild(this.header);
      this.header.appendChild(header_link_gmail);
      this.header.appendChild(header_link_images);
      this.header.appendChild(header_img_cube);
      this.header.appendChild(header_img_profile);
    },

    createBody: function () {
      // body (IDENTATION MEANS HIERARCHY)
      this.body = document.createElement("div");
        const body_main_logo = document.createElement("img");
        const body_searchbar_container = document.createElement("div");
          const body_magnifying_glass = document.createElement("img");
          const body_searchbar = document.createElement("input");
          const body_mic = document.createElement("img");
        const body_buttons = document.createElement("div");
          const body_button_googlesearch = document.createElement("button");
          const body_button_feelinglucky = document.createElement("button");
        const body_language_container = document.createElement("div");
          const body_language = document.createElement("a");

      // body
      this.body.style.display = "flex";
      this.body.style.flexDirection = "column";
      this.body.style.alignItems = "center";

      // body_main_logo
      body_main_logo.src = "data:image/png;base64,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";
      body_main_logo.style.padding = "110px 0px 0px";
      body_main_logo.style.paddingBottom = "1.5rem";

      // body_searchbar_container
      body_searchbar_container.style.display = "flex";
      body_searchbar_container.style.borderRadius = "9999px";
      body_searchbar_container.style.borderStyle = "solid";
      body_searchbar_container.style.borderWidth = "1px";
      body_searchbar_container.style.color = "#dadce0";
      body_searchbar_container.style.padding = "0.4rem";
      body_searchbar_container.style.width = "582px";
      body_searchbar_container.style.maxHeight = "46px";

      // events of 
      body_searchbar_container.onmouseover = function (event) {
        body_searchbar_container.style.boxShadow = "1px 1px 1px #999";
        body_searchbar_container.style.borderStyle = "solid";
        body_searchbar_container.style.borderColor = "lightgray";
      };

      body_searchbar_container.onmouseleave = function (event) {
        body_searchbar_container.style.boxShadow = "0px 0px 0px transparent";
      };

      // body_magnifying_glass
      body_magnifying_glass.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Google_Magnifying_Glass.svg/1200px-Google_Magnifying_Glass.svg.png";
      body_magnifying_glass.style.height = "18px";
      body_magnifying_glass.style.padding = "0.3rem 0.8rem 0.3rem 0.8rem";

      // body_searchbar
      body_searchbar.style.width = "90%";
      body_searchbar.style.outline = "none";
      body_searchbar.style.backgroundColor = "transparent";
      body_searchbar.style.border = "none";
      body_searchbar.style.color = "rgba(0,0,0, .87)";
      body_searchbar.style.display = "flex";
      body_searchbar.style.font = "18px";
      body_searchbar.style.wordWrap = "break-word";

    
      // body_mic
      body_mic.style.cursor = "pointer";
      body_mic.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png";
      body_mic.style.height = "1.2rem";
      body_mic.style.padding = "0.3rem 0.8rem 0.3rem 0.8rem";

      // body_buttons
      body_buttons.style.padding = "1.5rem 1rem 1.2rem 1.2rem";
      body_buttons.style.alignItems = "center";

      // body_button_googlesearch
      body_button_googlesearch.style.cursor = "pointer";
      body_button_googlesearch.innerHTML = "Google Search";
      body_button_googlesearch.style.backgroundColor = "#F8F9FA";
      body_button_googlesearch.style.margin = "11px 4px";
      body_button_googlesearch.style.padding = "10px 16px";
      body_button_googlesearch.style.fontSize = "14px";
      body_button_googlesearch.style.borderRadius = "4px";
      body_button_googlesearch.style.border = "none";

      // events of body_button_googlesearch
      body_button_googlesearch.onmouseover = function (event) {
        body_button_googlesearch.style.boxShadow = "1px 1px 1px #999";
        body_button_googlesearch.style.borderStyle = "solid";
        body_button_googlesearch.style.borderColor = "lightgray";
      };

      body_button_googlesearch.onmouseleave = function (event) {
        body_button_googlesearch.style.boxShadow = "0px 0px 0px transparent";
        body_button_googlesearch.style.border = "none";
      };

      // body_button_feelinglucky
      body_button_feelinglucky.style.cursor = "pointer";
      body_button_feelinglucky.innerHTML = "I'm Feeling Lucky";
      body_button_feelinglucky.style.backgroundColor = "#F8F9FA";
      body_button_feelinglucky.style.margin = "11px 4px";
      body_button_feelinglucky.style.padding = "10px 16px";
      body_button_feelinglucky.style.fontSize = "14px";
      body_button_feelinglucky.style.borderRadius = "4px";
      body_button_feelinglucky.style.border = "none";

      // events of body_button_feelinglucky
      body_button_feelinglucky.onmouseover = function (event) {
        body_button_feelinglucky.style.boxShadow = "1px 1px 1px #999";
        body_button_feelinglucky.style.borderStyle = "solid";
        body_button_feelinglucky.style.borderColor = "lightgray";
      };

      body_button_feelinglucky.onmouseleave = function (event) {
        body_button_feelinglucky.style.boxShadow = "0px 0px 0px transparent";
        body_button_feelinglucky.style.border = "none";
      };

      // body_language_container
      body_language_container.color = "13px";
      body_language_container.innerHTML = "Google Offered in: ";

      // body_language
      body_language.style.padding = "0px 3px";
      body_language.style.color = "#1a0dab";
      body_language.style.cursor = "pointer";
      body_language.innerHTML = "Português (Brasil)";

      // appending every div beggining with the outermost layer
      this.app.appendChild(this.body);
      this.body.appendChild(body_main_logo);
      this.body.appendChild(body_searchbar_container);
      body_searchbar_container.appendChild(body_magnifying_glass);
      body_searchbar_container.appendChild(body_searchbar);
      body_searchbar_container.appendChild(body_mic);
      this.body.appendChild(body_buttons);
      body_buttons.appendChild(body_button_googlesearch);
      body_buttons.appendChild(body_button_feelinglucky);
      this.body.appendChild(body_language_container);
      body_language_container.appendChild(body_language);
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
      this.footer.style.fontSize = "15px";
      this.footer.style.borderTop = "1px solid #dadce0";
      this.footer.style.textAlign = "left";

      this.footer.style.position = "fixed";
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