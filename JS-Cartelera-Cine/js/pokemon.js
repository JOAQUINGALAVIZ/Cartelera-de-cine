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
youtubeVideo.src = "https://www.youtube.com/embed/Sao2D_04xgE";
youtubeVideo.frameborder = "0";
youtubeVideo.allowfullscreen = true;

// Agregar el iframe al contenedor
videoContainer.appendChild(youtubeVideo);


// Texto de la sinopsis con saltos de línea
var sinopsisText = "En un laboratorio del Team Rocket situado cerca de la Isla Canela, unos prestigiosos científicos expertos en genética Pokémon crean a partir del ADN de Mew, el mítico Pokémon, una nueva criatura a la que llamaron Mewtwo. Mewtwo sería, según ellos, la versión mejorada de Mew, el Pokémon singular. Una vez que el experimento es por fin creado, los científicos le explican por qué él es más poderoso que Mew, Mewtwo siente un tipo de incertidumbre de qué ocurrirá con él. Ellos le contestan que ahora comenzarán las pruebas verdaderas y Mewtwo se da cuenta de que solo lo quieren usar como mero instrumento para capturar Pokémon. Sin embargo, pese que los científicos crearon a un Pokémon poderoso, se les olvidó darle a Mewtwo un corazón magnánimo. Lleno de odio, Mewtwo destruye a sus creadores y decide acabar con el mundo. Pero antes, reunirá a los mejores entrenadores Pokémon del mundo para un épico combate en el que los entrenadores deberán unirr todo su poder para evitar la destrucción del mundo. Entre los entrenadores están Ash, Misty y Brock que, junto con Pikachu, se enfrentarán al temible Mewtwo.";

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
