// Cambiamos el fondo de la página a negro
document.body.style.backgroundColor = "black";

// Cambiamos el color del texto a blanco
document.body.style.color = "white";

// Configuramos un fondo con una imagen para el enlace
const cineparkElement = document.getElementById('enlace');

// URL de la imagen de fondo
const imageUrl = 'https://imgs.search.brave.com/iYUTbE1mrEj1UaxMTNIADE88M13McXJOxrsT2JaYC4w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/dmllam8tZm9uZG8t/bmVncm8tdGV4dHVy/YS1ncnVuZ2UtcGFw/ZWwtdGFwaXotb3Nj/dXJvLXBpemFycmEt/cGl6YXJyYS1wYXJl/ZC1oYWJpdGFjaW9u/XzEyNTgtMjgzMTIu/anBnP3NpemU9NjI2/JmV4dD1qcGc';

// Configuramos el fondo con la imagen
cineparkElement.style.backgroundImage = `url(${imageUrl})`;
cineparkElement.style.backgroundSize = 'cover'; // Ajustamos el tamaño de la imagen
cineparkElement.style.backgroundRepeat = 'no-repeat'; // Evitamos que la imagen se repita

//
//
// Configuramos un enlace para volver a la página principal al hacer clic
document.getElementById("enlace").addEventListener("click", function() {
    // Redirigimos a la página principal
    window.location.href = "index.html";
});

// Creamos una nueva sección en la página
const sectionElement = document.createElement("section");

// Añadimos la sección al cuerpo del documento
document.body.appendChild(sectionElement);

// Centramos el título principal (h1)
const h1Element = document.querySelector('h1');
h1Element.style.display = 'flex';
h1Element.style.justifyContent = 'center';
h1Element.style.alignItems = 'center';

// Creamos un título secundario (h2)
const h2Element = document.createElement('h2');
h2Element.textContent = 'Avatar';

// Establecemos estilos para el título secundario (h2)
h2Element.style.display = 'flex';
h2Element.style.justifyContent = 'center';
h2Element.style.alignItems = 'center';
h2Element.style.height = '1vh';

// Centramos el contenedor de video (div video-container)
const videoContainerDiv = document.getElementById('video-container');
videoContainerDiv.style.display = 'flex';
videoContainerDiv.style.justifyContent = 'center';
videoContainerDiv.style.alignItems = 'center';

// Añadimos el título secundario (h2) a la página
document.body.appendChild(h2Element);

// Obtenemos el contenedor del video por su ID
var videoContainer = document.getElementById("video-container");

// Creamos un elemento iframe para mostrar el video
var youtubeVideo = document.createElement("iframe");
youtubeVideo.width = "560";
youtubeVideo.height = "315";
youtubeVideo.src = "https://www.youtube.com/embed/AZS_d_hS2dM";
youtubeVideo.frameborder = "0";
youtubeVideo.allowfullscreen = true;

// Añadimos el iframe al contenedor
videoContainer.appendChild(youtubeVideo);

// Creamos un párrafo para mostrar la sinopsis de la película
var sinopsisText = "Año 2154. Jake Sully (Sam Worthington), un ex-marine condenado a vivir en una silla de ruedas, sigue siendo, a pesar de ello, un auténtico guerrero. Precisamente por ello ha sido designado para ir a Pandora, donde algunas empresas están extrayendo un mineral extraño que podría resolver la crisis energética de la Tierra. Para contrarrestar la toxicidad de la atmósfera de Pandora, se ha creado el programa Avatar, gracias al cual los seres humanos mantienen sus conciencias unidas a un avatar: un cuerpo biológico controlado de forma remota que puede sobrevivir en el aire letal. Esos cuerpos han sido creados con ADN humano, mezclado con ADN de los nativos de Pandora, los Na'vi. Convertido en avatar, Jake puede caminar otra vez. Su misión consiste en infiltrarse entre los Na'vi, que se han convertido en el mayor obstáculo para la extracción del mineral. Pero cuando Neytiri, una bella Na'vi (Zoe Saldana), salva la vida de Jake, todo cambia: Jake, tras superar ciertas pruebas, es admitido en su clan. Mientras tanto, los hombres esperan los resultados de la misión de Jake. (FILMAFFINITY)";
var sinopsisElement = document.createElement("p");
sinopsisElement.innerHTML = sinopsisText;

// Establecemos estilos para centrar la sinopsis
sinopsisElement.style.textAlign = "center";
sinopsisElement.style.margin = "0 auto";
sinopsisElement.style.width = "80%"; 

// Añadimos el párrafo de la sinopsis a la página
document.body.appendChild(sinopsisElement);

// Añadimos el pie de página
var footerElement = document.createElement("footer");
footerElement.style.textAlign = "center";
footerElement.style.margin = "0 auto";
footerElement.style.width = "80%"; 
footerElement.textContent = "CinePark -- Todos los derechos reservados.";
document.body.appendChild(footerElement);
