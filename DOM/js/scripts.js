
  // Creamos h1 como nuestro título principal
  const cineparktituloElement = document.createElement('h1');
  cineparktituloElement.textContent = 'CinePark';
  cineparktituloElement.style.textAlign = 'center';

<<<<<<< HEAD
  // Creamos un contenedor div para CinePark
  const contenedorcinepark = document.createElement('div');
  contenedorcinepark.id = 'cinepark';

  //
  // Agregamos el título principal y el contenedor 
  document.body.appendChild(cineparktituloElement);
  document.body.appendChild(contenedorcinepark);
  //
  // Establecemos estilos para el sitio web
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";

// Referencia para establecer el fondo
const cineparkElement = document.getElementById("fondodecinepark");

///

// Configuramos la imagen de fondo 
const fondoconimagen = "https://imgs.search.brave.com/iYUTbE1mrEj1UaxMTNIADE88M13McXJOxrsT2JaYC4w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/dmllam8tZm9uZG8t/bmVncm8tdGV4dHVy/YS1ncnVuZ2UtcGFw/ZWwtdGFwaXotb3Nj/dXJvLXBpemFycmEt/cGl6YXJyYS1wYXJl/ZC1oYWJpdGFjaW9u/XzEyNTgtMjgzMTIu/anBnP3NpemU9NjI2/JmV4dD1qcGc"; // Reemplazamos con la URL de la imagen que hemos seleccionado
contenedorcinepark.style.backgroundImage = `url(${fondoconimagen})`;
contenedorcinepark.style.backgroundSize = "cover"; // Ajustamos el tamaño de la imagen de fondo
contenedorcinepark.style.backgroundRepeat = "no-repeat"; // Evitamos que la imagen se repita



// Creacion de Nosotros
var nosotros = document.createElement("nosotros");
nosotros.textContent = "Nosotros";
nosotros.href = "nosotros.html";
nosotros.style.position = "absolute";
nosotros.style.top = "20px";
nosotros.style.right = "100px";
nosotros.style.fontSize = "30px";
nosotros.style.color = "white";

  // Agregamos a la página
  document.body.appendChild(nosotros);

// Datos de la Cartelera de Cine
var peliculas = [
  {
    titulo: "Justiciero",
    genero: "Acción",
    duracion: "2h 15min",
    imagen:
      "https://statics.cinemex.com/movie_posters/UxB4QhUZzWWfswb-750x1125.jpg",

    url: "peli_justiciero.html",
  },
  {
    titulo: "Barbie",
    genero: "Comedia fantástica",
    duracion: "1h 54min",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BOWIwZGY0OTYtZjUzYy00NzRmLTg5YzgtYWMzNWQ0MmZiY2MwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",

    url: "peli_barbie.html",
  },
  {
    titulo: "Pokemon la pelicula",
    genero: "Acción",
    duracion: "1h 35min",
    imagen: "https://www.ecartelera.com/carteles/5200/5220/004_m.jpg",
    url: "peli_pokemon.html",
  },
  {
    titulo: "Mision Imposible",
    genero: "Accion",
    duracion: "2h 30min",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BYzFiZjc1YzctMDY3Zi00NGE5LTlmNWEtN2Q3OWFjYjY1NGM2XkEyXkFqcGdeQXVyMTUyMTUzNjQ0._V1_.jpg",
    url: "peli_mision.html",
  },
  {
    titulo: "Cars",
    genero: "Comedia animada",
    duracion: "1h 57 min",
    imagen:
      "https://th.bing.com/th/id/OIP.f_toCHd7gRF8RjWmevSZfAHaKz?pid=ImgDet&rs=1",
    url: "peli_cars.html",
  },
  {
    titulo: "La Langosta",
    genero: "Ciencia ficción",
    duracion: "1h 18min",
    imagen: "https://pics.filmaffinity.com/the_lobster-643891588-large.jpg",
    url: "peli_langosta.html",
  },
  {
    titulo: "Avatar",
    genero: "Ciencia ficción",
    duracion: "2h 18min",
    imagen:
      "https://pics.filmaffinity.com/avatar_the_way_of_water-722646748-large.jpg",
    url: "peli_avatar.html",
  },
  {
    titulo: "Dungeons of Dragon",
    genero: "Ciencia ficción",
    duracion: "2h 38min",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BZWM5MTQ3NDMtNGFiMS00Y2E5LWE2ZTUtNzM5MTcyZjM3ODRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    url: "peli_dungeons.html",
  },
];
///
function generarCartelera() {
    var cineparkDiv = document.getElementById("cinepark");
  
    for (let cartelerapelicula of peliculas) {
      // Creamos el elemento de la película
      var carteleradiv = document.createElement("contenedor");
      carteleradiv.className = "pelicula";
  
      // Creamos el elemento de enlace
      var urldepelicula = document.createElement("url");
      urldepelicula.href = cartelerapelicula.url;
  
      // Creamos el elemento de la imagen
      var imagendepelicula = document.createElement("img");
      imagendepelicula.src = cartelerapelicula.imagen;
      imagendepelicula.alt = cartelerapelicula.titulo;
  
      // Creamos el elemento del título
      var titulodepelicula = document.createElement("h2");
      titulodepelicula.textContent = cartelerapelicula.titulo;
  
      // Creamos el elemento del genero
      var generodepelicula = document.createElement("parrafo");
      generodepelicula.innerHTML = "<strong>Género:</strong> " + cartelerapelicula.genero;
  
      // Creamos el elemento de duracion
      var duracion = document.createElement("p");
      duracion.innerHTML = "<strong>Duración:</strong> " + cartelerapelicula.duracion;
  
      // Agregamos  los elementos al DOM
      urldepelicula.appendChild(imagendepelicula);
      carteleradiv.appendChild(urldepelicula);
      carteleradiv.appendChild(titulodepelicula);
      carteleradiv.appendChild(generodepelicula);
      carteleradiv.appendChild(duracion);
  
      cineparkDiv.appendChild(carteleradiv);
  
      agregarEventosMouse(carteleradiv);
    }
  }

    // Agregamos eventos de mouse a las películas
=======
  // Creamos un elemento h1
  const h1Element = document.createElement('h1');
  h1Element.textContent = 'CinePark';

  h1Element.style.textAlign = 'center';
  h1Element.style.fontSize = " calc(20px + 4vh)";
  h1Element.style.textShadow = " 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000";
  h1Element.style.color = " #fff6a9";
  h1Element.style.fontFamily = " 'Sacramento', cursive";
  h1Element.style.textAlign = " center";
  h1Element.style.animation = " blink 1s infinite";
  h1Element.style['-webkit-animation'] = " blink 1s infinite";


  // Creamos un elemento div con el id "cinepark"
  const divElement = document.createElement('div');
  divElement.id = 'cinepark';

  // Agregamos el elemento h1 al cuerpo del documento
  document.body.appendChild(h1Element);

  // Agregamos el elemento div al cuerpo del documento
  document.body.appendChild(divElement);



  //Fondo de Negro
  document.body.style.backgroundColor = "black";
  //Letras de color Blanco
  document.body.style.color = "white";

  // Referencia al elemento en el que desea establecer el fondo.
  const cineparkElement = document.getElementById("cinepark");

  // URL de la imagen de fondo
  const imageUrl =
    "https://imgs.search.brave.com/iYUTbE1mrEj1UaxMTNIADE88M13McXJOxrsT2JaYC4w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/dmllam8tZm9uZG8t/bmVncm8tdGV4dHVy/YS1ncnVuZ2UtcGFw/ZWwtdGFwaXotb3Nj/dXJvLXBpemFycmEt/cGl6YXJyYS1wYXJl/ZC1oYWJpdGFjaW9u/XzEyNTgtMjgzMTIu/anBnP3NpemU9NjI2/JmV4dD1qcGc";

  // Fondo con imagen
  cineparkElement.style.backgroundImage = `url(${imageUrl})`;
  cineparkElement.style.backgroundSize = "cover"; // Ajusta el tamaño de la imagen
  cineparkElement.style.backgroundRepeat = "no-repeat"; // La imagen no se repita.

  // "Nosotros" crea el enlace y escribe el texto
  var nosotrosLink = document.createElement("a");
  nosotrosLink.textContent = "Nosotros";
  nosotrosLink.href = "nosotros.html";
  nosotrosLink.style.position = "absolute";
  nosotrosLink.style.top = "20px";
  nosotrosLink.style.right = "100px";
  nosotrosLink.style.fontSize = "30px";
  nosotrosLink.style.color = "white";
  nosotrosLink.style.textShadow = " 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000";
  nosotrosLink.style.color = " #fff6a9";
  nosotrosLink.style.fontFamily = " 'Sacramento', cursive";
  nosotrosLink.style.animation = " blink 1s infinite";
  nosotrosLink.style['-webkit-animation'] = " blink 1s infinite";
  

  // Se agrega el enlace a la pagina
  document.body.appendChild(nosotrosLink);

  // Datos de la Cartelera de Cine
  var peliculas = [
    {
      titulo: "Justiciero",
      genero: "Acción",
      duracion: "2h 15min",
      imagen:
        "https://statics.cinemex.com/movie_posters/UxB4QhUZzWWfswb-750x1125.jpg",

      url: "peli_justiciero.html",
    },
    {
      titulo: "Barbie",
      genero: "Comedia fantástica",
      duracion: "1h 54min",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BOWIwZGY0OTYtZjUzYy00NzRmLTg5YzgtYWMzNWQ0MmZiY2MwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",

      url: "peli_barbie.html",
    },
    {
      titulo: "Pokemon la pelicula",
      genero: "Acción",
      duracion: "1h 35min",
      imagen: "https://www.ecartelera.com/carteles/5200/5220/004_m.jpg",
      url: "peli_pokemon.html",
    },
    {
      titulo: "Mision Imposible",
      genero: "Accion",
      duracion: "2h 30min",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BYzFiZjc1YzctMDY3Zi00NGE5LTlmNWEtN2Q3OWFjYjY1NGM2XkEyXkFqcGdeQXVyMTUyMTUzNjQ0._V1_.jpg",
      url: "peli_mision.html",
    },
    {
      titulo: "Cars",
      genero: "Comedia animada",
      duracion: "1h 57 min",
      imagen:
        "https://th.bing.com/th/id/OIP.f_toCHd7gRF8RjWmevSZfAHaKz?pid=ImgDet&rs=1",
      url: "peli_cars.html",
    },
    {
      titulo: "La Langosta",
      genero: "Ciencia ficción",
      duracion: "1h 18min",
      imagen: "https://pics.filmaffinity.com/the_lobster-643891588-large.jpg",
      url: "peli_langosta.html",
    },
    {
      titulo: "Avatar",
      genero: "Ciencia ficción",
      duracion: "2h 18min",
      imagen:
        "https://pics.filmaffinity.com/avatar_the_way_of_water-722646748-large.jpg",
      url: "peli_avatar.html",
    },
    {
      titulo: "Dungeons of Dragon",
      genero: "Ciencia ficción",
      duracion: "2h 38min",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BZWM5MTQ3NDMtNGFiMS00Y2E5LWE2ZTUtNzM5MTcyZjM3ODRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      url: "peli_dungeons.html",
    },
  ];

  function generarCartelera() {
    var cineparkDiv = document.getElementById("cinepark");

    for (let pelicula of peliculas) {
      // Crea el elemento de la película
      var peliculaDiv = document.createElement("div");
      peliculaDiv.className = "pelicula";

      // Crea el elemento de enlace
      var enlace = document.createElement("a");
      enlace.href = pelicula.url;

      // Crea el elemento de la imagen
      var imagen = document.createElement("img");
      imagen.src = pelicula.imagen;
      imagen.alt = pelicula.titulo;

      // Crea el elemento del título
      var titulo = document.createElement("h2");
      titulo.textContent = pelicula.titulo;

      // Crea el elemento del género
      var genero = document.createElement("p");
      genero.innerHTML = "<strong>Género:</strong> " + pelicula.genero;

      // Crea el elemento de duración
      var duracion = document.createElement("p");
      duracion.innerHTML = "<strong>Duración:</strong> " + pelicula.duracion;

      // Agrega los elementos al DOM
      enlace.appendChild(imagen);
      peliculaDiv.appendChild(enlace);
      peliculaDiv.appendChild(titulo);
      peliculaDiv.appendChild(genero);
      peliculaDiv.appendChild(duracion);

      cineparkDiv.appendChild(peliculaDiv);

      // Agrega el evento "mouseover" y "mouseout" con una función externa
      agregarEventosMouse(peliculaDiv);
    }
  }

>>>>>>> c3aa6ae7e44ca84cf251f9eda77d0f9c0838f367
  function agregarEventosMouse(pelicula) {
    pelicula.addEventListener("mouseover", function () {
      pelicula.style.backgroundColor = "midnightblue";// Cambiamos el color de fondo al pasar el mouse
      pelicula.style.transform = "scale(1.1)"; // Las imágenes se hacen gigantes
    });

    pelicula.addEventListener("mouseout", function () {
      pelicula.style.backgroundColor = ""; // Al ya no estar el mouse regresa al color original
<<<<<<< HEAD
      pelicula.style.transform = "scale(1)";// Las imágenes vuelven a su tamaño normal
=======
      // Las imágenes vuelven a su tamaño normal
      pelicula.style.transform = "scale(1)";
>>>>>>> c3aa6ae7e44ca84cf251f9eda77d0f9c0838f367
    });



<<<<<<< HEAD
// Establecemos estilos CSS en JS para las películas
var styleElement = document.createElement("style");
styleElement.innerHTML = `
=======
  }

  generarCartelera();



  // Styles del Css en JS
  var styleElement = document.createElement("style");
  styleElement.innerHTML = `
>>>>>>> c3aa6ae7e44ca84cf251f9eda77d0f9c0838f367
    .pelicula {
        border: 0px;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        
    }
    .pelicula img {
        max-width: 250px;
        height: 300px;
    }
`;
<<<<<<< HEAD
  // Agregamos los estilos al head del documento
  document.head.insertAdjacentElement("beforeend", styleElement);

//
// Creaando el contenedor de la sección de las redes sociales
var redesSocialesSection = document.createElement("section");
redesSocialesSection.id = "redes-sociales";
redesSocialesSection.style.textAlign = "center";
//
// La frase del titulo "siguenos en nuestras redes sociales"
var tituloRedesSociales = document.createElement("h2");
tituloRedesSociales.textContent = "Síguenos en nuestras redes sociales:";
redesSocialesSection.appendChild(tituloRedesSociales);
//
// Creando el vinculo de la red social de Facebook
var facebookLink = document.createElement("a");
var facebookIcon = document.createElement("img");
facebookIcon.src = "https://png.pngtree.com/png-clipart/20180515/ourmid/pngtree-facebook-icon-png-image_3566125.png"; 
facebookLink.href = "https://www.facebook.com/";
facebookLink.target = "_blank";
facebookLink.appendChild(facebookIcon);
redesSocialesSection.appendChild(facebookLink);
//
// Creando el vinculo de la red social de Instagram
var instagramLink = document.createElement("a");
var instagramIcon = document.createElement("img");
instagramIcon.src = "https://img.freepik.com/vector-premium/vinnytsia-ucrania-27-abril-2023-icono-redes-sociales-populares-instagram-diseno-vectorial_545793-1681.jpg"; 
instagramIcon.alt = "Instagram";
instagramLink.href = "https://www.instagram.com/";
instagramLink.target = "_blank";
instagramLink.appendChild(instagramIcon);
redesSocialesSection.appendChild(instagramLink);


// Creando el vinculo de la red social de Twittter/
var twitterLink = document.createElement("a");
var twitterIcon = document.createElement("img");
twitterIcon.src = "https://cdn.ipadizate.com/2023/07/img_1867-1.jpg"; 
twitterIcon.alt = "Twitter";
twitterLink.href = "https://twitter.com/";
twitterLink.target = "_blank";
twitterLink.appendChild(twitterIcon);
redesSocialesSection.appendChild(twitterLink);

// Creando el vinculo de la red social de Youtube
var youtubeLink = document.createElement("a");
var youtubeIcon = document.createElement("img");
youtubeIcon.src = "https://cdn.icon-icons.com/icons2/1099/PNG/512/1485482355-youtube_78661.png"; 
youtubeIcon.alt = "Youtube";
youtubeLink.href = "https://www.youtube.com/";
youtubeLink.target = "_blank";
youtubeLink.appendChild(youtubeIcon);
redesSocialesSection.appendChild(youtubeLink);
//
// Estilos para los iconos de las redes sociales
var iconoEstilos = `
=======
  // Se agrega el elemento <style> al <head> del documento
  document.head.insertAdjacentElement("beforeend", styleElement);


  // Creaando el contenedor de la sección de las redes sociales
  var redesSocialesSection = document.createElement("section");
  redesSocialesSection.id = "redes-sociales";
  redesSocialesSection.style.textAlign = "center";

  // La frase del titulo "siguenos en nuestras redes sociales"
  var tituloRedesSociales = document.createElement("h2");
  tituloRedesSociales.textContent = "Síguenos en nuestras redes sociales:";
  redesSocialesSection.appendChild(tituloRedesSociales);

  // Creando el vinculo de la red social de Facebook
  var facebookLink = document.createElement("a");
  var facebookIcon = document.createElement("img");
  facebookIcon.src = "https://png.pngtree.com/png-clipart/20180515/ourmid/pngtree-facebook-icon-png-image_3566125.png";
  facebookLink.href = "https://www.facebook.com/";
  facebookLink.target = "_blank";
  facebookLink.appendChild(facebookIcon);
  redesSocialesSection.appendChild(facebookLink);

  // Creando el vinculo de la red social de Instagram
  var instagramLink = document.createElement("a");
  var instagramIcon = document.createElement("img");
  instagramIcon.src = "https://img.freepik.com/vector-premium/vinnytsia-ucrania-27-abril-2023-icono-redes-sociales-populares-instagram-diseno-vectorial_545793-1681.jpg";
  instagramIcon.alt = "Instagram";
  instagramLink.href = "https://www.instagram.com/";
  instagramLink.target = "_blank";
  instagramLink.appendChild(instagramIcon);
  redesSocialesSection.appendChild(instagramLink);


  // Creando el vinculo de la red social de Twittter
  var twitterLink = document.createElement("a");
  var twitterIcon = document.createElement("img");
  twitterIcon.src = "https://cdn.ipadizate.com/2023/07/img_1867-1.jpg";
  twitterIcon.alt = "Twitter";
  twitterLink.href = "https://twitter.com/";
  twitterLink.target = "_blank";
  twitterLink.appendChild(twitterIcon);
  redesSocialesSection.appendChild(twitterLink);

  // Creando el vinculo de la red social de Youtube
  var youtubeLink = document.createElement("a");
  var youtubeIcon = document.createElement("img");
  youtubeIcon.src = "https://cdn.icon-icons.com/icons2/1099/PNG/512/1485482355-youtube_78661.png";
  youtubeIcon.alt = "Youtube";
  youtubeLink.href = "https://www.youtube.com/";
  youtubeLink.target = "_blank";
  youtubeLink.appendChild(youtubeIcon);
  redesSocialesSection.appendChild(youtubeLink);

  // Estilos para los iconos de las redes sociales
  var iconoEstilos = `
>>>>>>> c3aa6ae7e44ca84cf251f9eda77d0f9c0838f367
width: 50px;
margin: 30px;
padding: 5px;
border: 2px solid white;
border-radius: 50%;
`;

  // Aplicando los estilos a las imágenes de las redes sociales
  facebookIcon.style.cssText = iconoEstilos;
  instagramIcon.style.cssText = iconoEstilos;
  twitterIcon.style.cssText = iconoEstilos;
  youtubeIcon.style.cssText = iconoEstilos;

<<<<<<< HEAD
//
// Agregar la sección al final del cuerpo del documento
document.body.appendChild(redesSocialesSection);
=======

  // Agregar la sección al final del cuerpo del documento
  document.body.appendChild(redesSocialesSection);
>>>>>>> c3aa6ae7e44ca84cf251f9eda77d0f9c0838f367

  //Agregando pie de pagina 
  // Creando el elemento que va en el pie de pagina de derechos reservados
  var pieDePagina = document.createElement("footer");
  var textoPieDePagina = document.createTextNode("CinePark -- Todos los derechos reservados.");
  pieDePagina.appendChild(textoPieDePagina);
  pieDePagina.style.textAlign = "center";
  document.body.appendChild(pieDePagina);

  // Estilos css en js para el pie de pagina
  var estiloPieDePagina = document.createElement("style");
  estiloPieDePagina.appendChild(document.createTextNode(`
    footer {
        background-color: black;
        color: gold;
        padding: 10px;
    }
`));
<<<<<<< HEAD
//
// Agregar el elemento de estilo al head del documento
document.head.appendChild(estiloPieDePagina);
=======

  // Agregar el elemento de estilo al head del documento
  document.head.appendChild(estiloPieDePagina);
});
>>>>>>> c3aa6ae7e44ca84cf251f9eda77d0f9c0838f367
