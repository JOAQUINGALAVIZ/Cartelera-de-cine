// Creamos un elemento h1
const h1Element = document.createElement('h1');

// Creamos un elemento de enlace (cine) y establece su contenido y atributos
const linkElement = document.createElement('cine');
linkElement.textContent = 'Cinepark'; // Texto del enlace
linkElement.id = 'cine'; // ID del enlace 
// Centramos el título principal (h1)
h1Element.style.display = 'flex';
h1Element.style.justifyContent = 'center';
h1Element.style.alignItems = 'center';

// Agregamos el elemento de enlace al elemento h1
h1Element.appendChild(linkElement);

// Agregamos el elemento h1 al cuerpo del documento
document.body.appendChild(h1Element);





// Cambiamos el fondo de la página a negro
document.body.style.backgroundColor = "black";

// Cambiamos el color del texto a blanco
document.body.style.color = "white";



//
// Configuramos un enlace para volver a la página principal al hacer clic
document.getElementById("cine").addEventListener("click", function() {
    // Redirigimos a la página principal
    window.location.href = "index.html";
});

// Creamos una nueva sección en la página
const sectionElement = document.createElement("section");

// Añadimos la sección al cuerpo del documento
document.body.appendChild(sectionElement);


// Creamos un título secundario (h2)
const h2Element = document.createElement('h2');
h2Element.textContent = 'Pokemon: La Pelicula';

// Establecemos estilos para el título secundario (h2)
h2Element.style.display = 'flex';
h2Element.style.justifyContent = 'center';
h2Element.style.alignItems = 'center';
h2Element.style.height = '1vh';



// Añadimos el título secundario (h2) a la página
document.body.appendChild(h2Element);


const iframeContainerDiv = document.createElement('div');
iframeContainerDiv.style.display = 'flex';
iframeContainerDiv.style.justifyContent = 'center';
iframeContainerDiv.style.alignItems = 'center';
iframeContainerDiv.style.height = '100%'; 

// Crea un elemento iframe
const iframe = document.createElement('iframe');

// Establecemos los atributos del iframe
iframe.width = '560'; 
iframe.height = '315'; 
iframe.src = 'https://www.youtube.com/embed/Sao2D_04xgE'; 
iframe.allowFullscreen = true; // Permite la opcion de pantalla completa

// Agrega el iframe al contenedor div
iframeContainerDiv.appendChild(iframe);

// Agrega el contenedor div al cuerpo del documento
document.body.appendChild(iframeContainerDiv);




//
//
// Creamos un párrafo para mostrar la sinopsis de la película
var sinopsisText = "<br>\<br>\
En un laboratorio del Team Rocket situado cerca de la Isla Canela, unos prestigiosos científicos expertos en genética Pokémon crean a partir del ADN de Mew, el mítico Pokémon, una nueva criatura a la que llamaron Mewtwo. Mewtwo sería, según ellos, la versión mejorada de Mew, el Pokémon singular. Una vez que el experimento es por fin creado, los científicos le explican por qué él es más poderoso que Mew, Mewtwo siente un tipo de incertidumbre de qué ocurrirá con él. Ellos le contestan que ahora comenzarán las pruebas verdaderas y Mewtwo se da cuenta de que solo lo quieren usar como mero instrumento para capturar Pokémon. Sin embargo, pese que los científicos crearon a un Pokémon poderoso, se les olvidó darle a Mewtwo un corazón magnánimo. Lleno de odio, Mewtwo destruye a sus creadores y decide acabar con el mundo. Pero antes, reunirá a los mejores entrenadores Pokémon del mundo para un épico combate en el que los entrenadores deberán unirr todo su poder para evitar la destrucción del mundo. Entre los entrenadores están Ash, Misty y Brock que, junto con Pikachu, se enfrentarán al temible Mewtwo. <br>\ <br>\ ";
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





