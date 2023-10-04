//Fondo de Negro
document.body.style.backgroundColor = "black";
//Letras de color Blanco
document.body.style.color = "white";


// Función que se ejecutará al hacer clic en el h1
document.getElementById("enlace").addEventListener("click", function() {
    // Redirigir a la página deseada
    window.location.href = "index.html";
});

// Crear la sección 
const sectionElement = document.createElement("section");

// Agregar la sección al cuerpo del documento
document.body.appendChild(sectionElement);
//
//
//


//
//
// Centrar el h1
const h1Element = document.querySelector('h1');
h1Element.style.display = 'flex';
h1Element.style.justifyContent = 'center';
h1Element.style.alignItems = 'center';

// Crear el elemento h2 en JavaScript
const h2Element = document.createElement('h2');
h2Element.textContent = 'Avatar';

// Estilos al h2
h2Element.style.display = 'flex';
h2Element.style.justifyContent = 'center';
h2Element.style.alignItems = 'center';
h2Element.style.height = '1vh';


// Centrar el div video-container
const videoContainerDiv = document.getElementById('video-container');
videoContainerDiv.style.display = 'flex';
videoContainerDiv.style.justifyContent = 'center';
videoContainerDiv.style.alignItems = 'center';

// Agregar el elemento h2 
document.body.appendChild(h2Element);





//
//
// Obtener el contenedor del video por ID
var videoContainer = document.getElementById("video-container");

// Crear un elemento iframe para mostrar el video
var youtubeVideo = document.createElement("iframe");
youtubeVideo.width = "560";
youtubeVideo.height = "315";
youtubeVideo.src = "https://www.youtube.com/embed/AZS_d_hS2dM";
youtubeVideo.frameborder = "0";
youtubeVideo.allowfullscreen = true;

// Agregar el iframe al contenedor
videoContainer.appendChild(youtubeVideo);


// Texto de la sinopsis con saltos de línea
var sinopsisText = "Año 2154. Jake Sully (Sam Worthington), un ex-marine condenado a vivir en una silla de ruedas, sigue siendo, a pesar de ello, un auténtico guerrero. Precisamente por ello ha sido designado para ir a Pandora, donde algunas empresas están extrayendo un mineral extraño que podría resolver la crisis energética de la Tierra. Para contrarrestar la toxicidad de la atmósfera de Pandora, se ha creado el programa Avatar, gracias al cual los seres humanos mantienen sus conciencias unidas a un avatar: un cuerpo biológico controlado de forma remota que puede sobrevivir en el aire letal. Esos cuerpos han sido creados con ADN humano, mezclado con ADN de los nativos de Pandora, los Na'vi. Convertido en avatar, Jake puede caminar otra vez. Su misión consiste en infiltrarse entre los Na'vi, que se han convertido en el mayor obstáculo para la extracción del mineral. Pero cuando Neytiri, una bella Na'vi (Zoe Saldana), salva la vida de Jake, todo cambia: Jake, tras superar ciertas pruebas, es admitido en su clan. Mientras tanto, los hombres esperan los resultados de la misión de Jake. (FILMAFFINITY)";

// Crear un elemento de párrafo para la sinopsis
var sinopsisElement = document.createElement("p");

// Asignar el texto de la sinopsis al elemento de párrafo
sinopsisElement.innerHTML = sinopsisText;

// Establecer estilos para centrar el elemento
sinopsisElement.style.textAlign = "center";
sinopsisElement.style.margin = "0 auto";
sinopsisElement.style.width = "80%"; 

// Agregar el elemento de la sinopsis al documento
document.body.appendChild(sinopsisElement);

// Agregar el pie de página
var footerElement = document.createElement("footer");
footerElement.style.textAlign = "center";
footerElement.style.margin = "0 auto";
footerElement.style.width = "80%"; 
footerElement.textContent = "CinePark -- Todos los derechos reservados.";
document.body.appendChild(footerElement);
