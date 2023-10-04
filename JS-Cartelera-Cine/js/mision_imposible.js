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
youtubeVideo.src = "https://www.youtube.com/embed/FDy3OSjVQw8";
youtubeVideo.frameborder = "0";
youtubeVideo.allowfullscreen = true;

// Agregar el iframe al contenedor
videoContainer.appendChild(youtubeVideo);


// Texto de la sinopsis con saltos de línea
var sinopsisText = "En Misión: Imposible- Sentencia Mortal, Parte 1, Ethan Hunt (Tom Cruise) y su equipo del FMI, se embarcan en su misión más peligrosa hasta la fecha: localizar, antes de que caiga en las manos equivocadas, una nueva y terrorífica arma que amenaza a toda la humanidad. En esta tesitura, y con unas fuerzas oscuras del pasado de Ethan acechando, comienza una carrera mortal alrededor del mundo en la que está en juego el control del futuro y el destino del planeta. Enfrentado a un enemigo misterioso y todopoderoso, Ethan se ve obligado a considerar que nada puede anteponerse a su misión, ni siquiera las vidas de aquellos que más le importan.";

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
