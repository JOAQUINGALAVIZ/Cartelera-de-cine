// Cambiamos el fondo a negro.
document.body.style.backgroundColor = "black";

// Cambiamos el color del texto a blanco.
document.body.style.color = "white";

// Configuramos un fondo con una imagen para el enlace
const cineparkElement = document.getElementById('enlace');

// URL de la imagen de fondo
const imageUrl = 'https://imgs.search.brave.com/iYUTbE1mrEj1UaxMTNIADE88M13McXJOxrsT2JaYC4w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/dmllam8tZm9uZG8t/bmVncm8tdGV4dHVy/YS1ncnVuZ2UtcGFw/ZWwtdGFwaXotb3Nj/dXJvLXBpemFycmEt/cGl6YXJyYS1wYXJl/ZC1oYWJpdGFjaW9u/XzEyNTgtMjgzMTIu/anBnP3NpemU9NjI2/JmV4dD1qcGc';

// Configuramos el fondo con la imagen
cineparkElement.style.backgroundImage = `url(${imageUrl})`;
cineparkElement.style.backgroundSize = 'cover'; // Ajustamos el tamaño de la imagen
cineparkElement.style.backgroundRepeat = 'no-repeat'; // Evitamos que la imagen se repita


// Función que se ejecutará al hacer clic en el h1
document.getElementById("enlace").addEventListener("click", function() {
    // Redirigir a la página deseada
    window.location.href = "index.html";
});

// Creamos una nueva sección en la página.
const sectionElement = document.createElement("section");

// Agregamos la sección al cuerpo del documento.
document.body.appendChild(sectionElement);

// Centramos el título principal (h1).
const h1Element = document.querySelector('h1');
h1Element.style.display = 'flex';
h1Element.style.justifyContent = 'center';
h1Element.style.alignItems = 'center';

// Creamos el elemento h2.
const h2Element = document.createElement('h2');
h2Element.textContent = 'Barbie';

// Aplicamos estilos al h2.
h2Element.style.display = 'flex';
h2Element.style.justifyContent = 'center';
h2Element.style.alignItems = 'center';
h2Element.style.height = '1vh';

// Centramos el contenedor de video (div video-container).
const videoContainerDiv = document.getElementById('video-container');
videoContainerDiv.style.display = 'flex';
videoContainerDiv.style.justifyContent = 'center';
videoContainerDiv.style.alignItems = 'center';

// Agregamos el elemento h2.
document.body.appendChild(h2Element);

// Obtenemos el contenedor del video por su ID.
var videoContainer = document.getElementById("video-container");

// Creamos un elemento iframe para mostrar el video.
var youtubeVideo = document.createElement("iframe");
youtubeVideo.width = "560";
youtubeVideo.height = "315";
youtubeVideo.src = "https://www.youtube.com/embed/eUP3hlBel5I";
youtubeVideo.frameborder = "0";
youtubeVideo.allowfullscreen = true;

// Agregamos el iframe al contenedor.
videoContainer.appendChild(youtubeVideo);

// Texto de la sinopsis con saltos de línea.
var sinopsisText = "Barbie (Margot Robbie) lleva una vida ideal en Barbieland, allí todo es perfecto, con chupi fiestas llenas de música y color, y todos los días son el mejor día. Claro que Barbie se hace algunas preguntas, cuestiones bastante incómodas que no encajan con el mundo idílico en el que ella y las demás Barbies viven. Cuando Barbie se dé cuenta de que es capaz de apoyar los talones en el suelo, y tener los pies planos, decidirá calzarse unos zapatos sin tacones y viajar hasta el mundo real.";

// Creamos un elemento de párrafo para la sinopsis.
var sinopsisElement = document.createElement("p");

// Asignamos el texto de la sinopsis al elemento de párrafo.
sinopsisElement.innerHTML = sinopsisText;

// Establecemos estilos para centrar el elemento.
sinopsisElement.style.textAlign = "center";
sinopsisElement.style.margin = "0 auto";
sinopsisElement.style.width = "80%"; 

// Agregamos el elemento de la sinopsis al documento.
document.body.appendChild(sinopsisElement);

// Agregamos el pie de página.
var footerElement = document.createElement("footer");
footerElement.style.textAlign = "center";
footerElement.style.margin = "0 auto";
footerElement.style.width = "80%"; 
footerElement.textContent = "CinePark -- Todos los derechos reservados.";
document.body.appendChild(footerElement);
