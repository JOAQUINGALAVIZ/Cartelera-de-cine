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

// Crear el elemento h2 
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
youtubeVideo.src = "https://www.youtube.com/embed/SbXIj2T-_uk";
youtubeVideo.frameborder = "0";
youtubeVideo.allowfullscreen = true;

// Agregar el iframe al contenedor
videoContainer.appendChild(youtubeVideo);


// Texto de la sinopsis con saltos de línea
var sinopsisText = " El valiente Rayo McQueen (con la voz de OWEN WILSON), un coche de carreras novato y apasionado descubre que el camino se hace andando, cuando se encuentra perdido en la ciudad fantasma Radiator Springs de la Ruta 66. Atravesando el país en dirección al gran Campeonato de la Copa Piston en California para competir con dos veteranos,  <br> \
McQueen conoce a los originales personajes que habitan en la ciudad incluida Sally (un llamativo Porsche de 2002 con voz de BONNIE HUNT), Doc Hudson (un Hudson Hornet de 1951 con un misterioso pasado, con la voz de PAUL NEWMAN), y Mater (una leal grúa oxidada con la voz de LARRY THE CABLE GUY). <br> \
Todos ellos le ayudarán a comprender que hay cosas más importantes que conseguir premios, fama y patrocinios. Este reparto plagado de estrellas también incluye las actuaciones de leyendas de las carreras de coches como Richard Petty y Cheech Marin. Llena de humor, acción, sentimientos y verdaderas proezas técnicas, CARS es una película de alta velocidad para espectadores de todas las edades. <br> \
";

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
