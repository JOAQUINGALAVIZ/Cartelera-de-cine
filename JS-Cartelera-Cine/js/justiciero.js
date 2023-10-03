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
youtubeVideo.src = "https://www.youtube.com/embed/iZIxAvKSYac";
youtubeVideo.frameborder = "0";
youtubeVideo.allowfullscreen = true;

// Agregar el iframe al contenedor
videoContainer.appendChild(youtubeVideo);


// Texto de la sinopsis con saltos de línea
var sinopsisText = "Desde que abandonó su vida como asesino del gobierno, Robert McCall encuentra consuelo \
en servir justicia en nombre de los oprimidos. <br> \
Ahora vive en el sur de Italia y pronto descubre que sus nuevos amigos están bajo el control de los jefes criminales locales. <br> \
A medida que los acontecimientos se vuelven mortales, McCall se convierte en su protector al enfrentarse a la mafia. <br> \ <br> \
En servir justicia en nombre de los oprimidos. <br> \
Ahora vive en el sur de Italia y pronto descubre que sus nuevos amigos están bajo el <br> \
control de los jefes criminales locales a medida que los acontecimientos se vuelven mortales, McCall se convierte en <br> \
su protector al enfrentarse a la mafia.";

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
