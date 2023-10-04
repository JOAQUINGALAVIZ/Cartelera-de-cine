//Fondo de Negro
document.body.style.backgroundColor = "black";
//Letras de color Blanco
document.body.style.color = "white";


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
var sinopsisText = " Jake Sully y Ney'tiri han formado una familia y hacen todo lo posible <br> \
 por permanecer juntos. Sin embargo, deben abandonar <br> \
su hogar y explorar las regiones de Pandora cuando una antigua amenaza reaparece. <br> \
";

// Crear un elemento de párrafo para la sinopsis
var sinopsisElement = document.createElement("p");

// Asignar el texto de la sinopsis al elemento de párrafo
sinopsisElement.innerHTML = sinopsisText;

// Establecer estilos para centrar el elemento
sinopsisElement.style.textAlign = "center";
sinopsisElement.style.margin = "0 auto";
sinopsisElement.style.width = "80%"; // Puedes ajustar el ancho según tus necesidades

// Agregar el elemento de la sinopsis al documento
document.body.appendChild(sinopsisElement);

// Agregar el pie de página
var footerElement = document.createElement("footer");
footerElement.style.textAlign = "center";
footerElement.style.margin = "0 auto";
footerElement.style.width = "80%"; 
footerElement.textContent = "CinePark -- Todos los derechos reservados.";
document.body.appendChild(footerElement);
