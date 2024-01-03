// Creamos h1 como nuestro título principal
const cineparktituloElement = document.createElement('h1');
cineparktituloElement.textContent = 'CinePark';
cineparktituloElement.style.textAlign = 'center';

// Creamos un contenedor div para CinePark
const contenedorcinepark = document.createElement('div');
contenedorcinepark.id = 'cinepark';

// Agregamos el título principal y el contenedor 
document.body.appendChild(cineparktituloElement);
document.body.appendChild(contenedorcinepark);

// Establecemos estilos para el sitio web
document.body.style.backgroundColor = "black";
document.body.style.color = "white";

// Tu API key de TMDb
const apiKey = '2f8ec18732b1da2f6aa7b72f8114bca9';

// Obtener datos de películas de TMDb
function obtenerDatosTMDB() {
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const peliculas = data.results; // Obtener las películas populares
      
      // Limpiar el contenedor existente de películas
      const cineparkDiv = document.getElementById("cinepark");
      cineparkDiv.innerHTML = '';

      // Iterar a través de las películas obtenidas y crear elementos
      for (let pelicula of peliculas) {
        const carteleradiv = document.createElement("div");
        carteleradiv.className = "pelicula";

        const urldepelicula = document.createElement("a");
        urldepelicula.href = `https://www.themoviedb.org/movie/${pelicula.id}`; // Enlace a la página de la película en TMDb

        const imagendepelicula = document.createElement("img");
        imagendepelicula.src = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;
        imagendepelicula.alt = pelicula.title;

        const titulodepelicula = document.createElement("h2");
        titulodepelicula.textContent = pelicula.title;

        const generodepelicula = document.createElement("p");
        generodepelicula.innerHTML = "<strong>Género:</strong> " + pelicula.genre_ids.join(', ');

        const duracion = document.createElement("p");
        duracion.innerHTML = "<strong>Duración:</strong> " + pelicula.runtime + " min"; // Se asume que la duración está disponible en la respuesta de la API

        urldepelicula.appendChild(imagendepelicula);
        carteleradiv.appendChild(urldepelicula);
        carteleradiv.appendChild(titulodepelicula);
        carteleradiv.appendChild(generodepelicula);
        carteleradiv.appendChild(duracion);

        cineparkDiv.appendChild(carteleradiv);
        agregarEventosMouse(carteleradiv);
      }
    })
    .catch(error => console.error('Error:', error));
}

// Agregar eventos de mouse a las películas
function agregarEventosMouse(pelicula) {
  pelicula.addEventListener("mouseover", function () {
    pelicula.style.backgroundColor = "midnightblue";
    pelicula.style.transform = "scale(1.1)";
  });

  pelicula.addEventListener("mouseout", function () {
    pelicula.style.backgroundColor = "";
    pelicula.style.transform = "scale(1)";
  });
}

// Llamar a la función para obtener datos de TMDb y generar la cartelera
obtenerDatosTMDB();


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

// Estilos para los iconos de las redes sociales
var iconoEstilos = `
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

// Agregar la sección al final del cuerpo del documento
document.body.appendChild(redesSocialesSection);






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

var estiloCartelera = document.createElement("style");
estiloCartelera.appendChild(document.createTextNode(`
  #cinepark {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    margin-top: 30px;
    padding: 20px
  }
  .pelicula {
    background-color: black;
    color: white;
    border-radius: 10px;
    overflow: hidden;
    width: 250px;
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.5);
    transition: transform 0.3s, background-color 0.3s;
    cursor: pointer;
  }
  .pelicula img {
    width: 100%;
    height: auto;
    transition: transform 0.3s;
  }
  .pelicula:hover {
    background-color: midnightblue;
    transform: scale(1.05);
  }
`));

// Agregar los estilos al head del documento
document.head.appendChild(estiloCartelera);;