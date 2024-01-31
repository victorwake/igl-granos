let isSafari = navigator.userAgent.match(/Safari/i);

if (isSafari) {
  /// No aplicar animaciones en Safari
} else {
  ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
  });
  
  ScrollReveal().reveal(".home-content, .heading ", { origin: "top" });
  ScrollReveal().reveal(
    ".home-img, .services-container, .porfolio-box, contacto form",
    { origin: "botton" }
  );
  ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
  ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
}

/*Menu hamburguesa*/

let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
};

/*NavBar activo*/

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
      });
    }
  });

  /* */
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /* remueve*/
  menuIcon.classList.remove("bx-x");
  navBar.classList.remove("active");
};

// scroll reveal, sirve para que los elementos con animacion aparezcan cuando se hace scroll


// Función para cambiar el tema
function toggleTheme() {
  var body = document.querySelector("body");
  body.classList.toggle("light-theme");
  body.classList.toggle("dark-theme");
  saveTheme();
}

// Función para guardar el tema actual en localstorage
function saveTheme() {
  var body = document.querySelector("body");
  if (body.classList.contains("light-theme")) {
    localStorage.setItem("theme", "light-theme");
  } else {
    localStorage.setItem("theme", "dark-theme");
  }
}

// Función para cargar el tema guardado en localstorage
function loadTheme() {
  var theme = localStorage.getItem("theme");
  var body = document.querySelector("body");
  if (theme === "light-theme") {
    body.classList.add("light-theme");
  } else {
    body.classList.add("dark-theme");
  }
}

// // Cargar el tema al cargar la página
// window.addEventListener("DOMContentLoaded", function() {
//     loadTheme();

// // Manejar el evento de hacer clic en el botón del modo de luz
// var lightModeButton = document.querySelector(".light-mode-button");
// lightModeButton.addEventListener("click", function(event) {
//   event.preventDefault();
//   toggleTheme();
// });
// });

// typed js sirve para que el texto se escriba solo
// var typed = new Typed('.multiple-texto', {
//     strings: ["Frontend developer", "and", "backend developer"],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// });

var cambiarTextoBtn = document.getElementById("cambiarTextoBtn");
var acercaDe = document.getElementById("acerca");
var servis = document.getElementById("servis");
var porf = document.getElementById("porf");
var contact = document.getElementById("contact");
var inicio = document.getElementById("inicio");
var hola = document.getElementById("hola");
var home_p = document.getElementsByClassName("home-p")[0];
productsTitle = document.getElementById("products-title");
var contacMy = document.getElementById("heading");
var contacSpan = document.getElementById("heading-span");
var certificationsTitle = document.getElementById("certifications-title");
var crudeSunflower = document.getElementById("crude-sunflower");
var refinedSunflowerOil = document.getElementById("refined-sunflower-oil");
var highOleicCrude = document.getElementById("high-oleic-crude"); 
var sunflowerOil = document.getElementById("sunflower-oil"); 
var oil = document.getElementById("oil");
var oil2 = document.getElementById("oil2");
var chighOleicRefined = document.getElementById("chigh-oleic-refined"); 
var sunflowerExpeller = document.getElementById("sunflower-expeller"); 
var sunflowerFlour = document.getElementById("sunflower-flour"); 
var sunflowerSeed = document.getElementById("sunflower-seed"); 
var soybean = document.getElementById("soybean"); 
var refinedSoybeanOil = document.getElementById("refined-soybean-oil"); 
var soybeanExpeller = document.getElementById("soybean-expeller"); 
var soybeanFlour = document.getElementById("soybean-flour"); 
var flaxseed = document.getElementById("flaxseed"); 
var subTitleCertificate = document.getElementById("title-certification");

var typed = new Typed(".multiple-texto", {
  strings: ["organic produce", "grains and by-products"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

function setLang() {
  var select = document.getElementById("language-select");
  var idioma = select.value;
  var idiomaDom = window.lang;
  select.value = idioma === idiomaDom ? idioma : "EN";
  var input = document.getElementById(idioma.toLowerCase());
  input.checked = true;
  select.dispatchEvent(new Event("change"));
}

var cambiarTextoBtn = document.getElementById("cambiarTextoBtn");
var selectIdioma = cambiarTextoBtn.querySelector(".language-select");

selectIdioma.addEventListener("change", function () {
  var idioma = this.value;
  if (idioma === "ES") {
    //PRODUCTOS
    crudeSunflower.innerText = "Aceite crudo de";
    refinedSunflowerOil.innerText = "Aceite refinado de";
    highOleicCrude.innerText = "Aceite crudo alto";
    oil.innerText = "girasol";
    oil2.innerText = "girasol";
    sunflowerOil.innerText = "oleico de girasol";
    chighOleicRefined.innerText = "Aceite refinado alto";
    sunflowerExpeller.innerText = "Expeller de girasol";
    sunflowerFlour.innerText = "Harina de girasol";
    sunflowerSeed.innerText = "Semilla de girasol";
    soybean.innerText = "Poroto de soja";
    refinedSoybeanOil.innerText = "Aceite refinado de soja";
    soybeanExpeller.innerText = "Expeller de soja";
    soybeanFlour.innerText = "Harina de soja";
    flaxseed.innerText = "Semilla de lino";
    // Cambiar el texto al español
    acercaDe.innerText = "Nuestra compañía";
    servis.innerText = "Productos";
    porf.innerText = "Certificaciones";
    contact.innerText = "Contacto";
    inicio.innerText = "Inicio";
    hola.innerText = "Nuestra compañía";
    productsTitle.innerText = "Productos";
    contacMy.innerText = "Contáctenos";
    contacSpan.innerText = "";
    certificationsTitle.innerText = "Certificaciones";
    subTitleCertificate.innerText = "IGL Granos S.A. cuenta con programas de certificación de producciones orgánicas diferenciados según el mercado final donde se comercializará el producto:";
    home_p.innerText = `IGL Granos S.A. fue constituida en 2005, dedicándose inicialmente al corretaje de cereales y oleaginosas. 
      A partir del 2018 inicia su actividad de industrializador y exportador de materias primas agrícolas, centrándose en productos orgánicos.
       En la actualidad la empresa concentra su atención en la provisión de productos orgánicos, tanto granos como subproductos,
       obtenidos a partir de su convenio de fazon con MBS Agroindustrias S.R.L.
      A partir de 2020 su alianza estratégica con InterContinental Foods LLC le permite un fluido acceso al mercado norteamericano.
      `;
    typed.reset(); // Reiniciar la animación
    // Cambiar los strings en la configuración de Typed.js al español
    typed.strings = ["productos orgánicos.", "granos y subproductos"];
  } else {
      //PRODUCTOS
      crudeSunflower.innerText = "Crude sunflower";
      refinedSunflowerOil.innerText = "Refined sunflower";
      highOleicCrude.innerText = "High oleic crude";
      sunflowerOil.innerText = "sunflower oil";
      oil.innerText = "oil";
      oil2.innerText = "oil";
      chighOleicRefined.innerText = "High oleic refined";
      sunflowerExpeller.innerText = "Sunflower expeller";
      sunflowerFlour.innerText = "Sunflower flour";
      sunflowerSeed.innerText = "Sunflower seed";
      soybean.innerText = "Soybean";
      refinedSoybeanOil.innerText = "Refined soybean oil";
      soybeanExpeller.innerText = "Soybean expeller";
      soybeanFlour.innerText = "Soybean flour";
      flaxseed.innerText = "Flaxseed";
    // Cambiar el texto al inglés
    inicio.innerText = "Home";
    acercaDe.innerText = "Our company";
    servis.innerText = "Products";
    porf.innerText = "Certifications";
    contact.innerText = "Contact";
    hola.innerText = "Our company";
    productsTitle.innerText = "Products";
    contacMy.innerText = "Contact ";
    contacSpan.innerText = " Us!";
    certificationsTitle.innerText = "Certifications";
    subTitleCertificate.innerText = "IGL Granos S.A. It has organic production certification programs differentiated according to the final market where the product will be marketed:";
    home_p.innerText = `IGL was established in 2005 as cereal and oilseed broker.
    Throughout the years we began producing in our own ranches and further 
    processing our raw material thus transforming into edible vegetable oils and flours.
    In 2018, along with our own production, we associated fellow ranchers and decided to go Organic. 
    We began reaching international markets ensuring full traceability and full guarantee on every product we exported.
    Currently, the company focuses its activities on the provision of , pulses and by-products such as vegetable oils and flours.
    Our exclusive agreement with MBS Agroindustries, enables our full Organic processing. 
    Our strategic partnership with InterContinental Foods in the US, 
    allows us a solid representation in the North American market.`,
      typed.reset(); // Reiniciar la animación
    // Cambiar los strings en la configuración de Typed.js al inglés
    typed.strings = ["organic produce", "grains and by-products"];
  }
});

var boton = document.getElementById("cambiarTextoBtn");
// var img = document.getElementById("cambiarTextoBtn");

// boton.addEventListener("click", function() {
//     if (img.getAttribute("src") === "./img/uk-rec.png") {
//         img.setAttribute("src", "./img/arg-rec.png");
//     } else {
//         img.setAttribute("src", "./img/uk-rec.png");
//     }
// });

var botonModo = document.getElementById("cambiarModoBtn");
var imgModo = document.getElementById("cambiarModoBtn");

botonModo.addEventListener("click", function () {
  if (imgModo.getAttribute("src") === "./img/sun.png") {
    imgModo.setAttribute("src", "./img/moon.png");
  } else {
    imgModo.setAttribute("src", "./img/sun.png");
  }
});
