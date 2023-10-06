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
h2Element.textContent = 'Mision Imposible';

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
iframe.src = 'https://www.youtube.com/embed/FDy3OSjVQw8'; 
iframe.allowFullscreen = true; // Permite la opcion de pantalla completa

// Agrega el iframe al contenedor div
iframeContainerDiv.appendChild(iframe);

// Agrega el contenedor div al cuerpo del documento
document.body.appendChild(iframeContainerDiv);




//
//
// Creamos un párrafo para mostrar la sinopsis de la película
var sinopsisText = "<br>\<br>\
En Misión: Imposible- Sentencia Mortal, Parte 1, Ethan Hunt (Tom Cruise) y su equipo del FMI, se embarcan en su misión más peligrosa hasta la fecha: localizar, antes de que caiga en las manos equivocadas, una nueva y terrorífica arma que amenaza a toda la humanidad. En esta tesitura, y con unas fuerzas oscuras del pasado de Ethan acechando, comienza una carrera mortal alrededor del mundo en la que está en juego el control del futuro y el destino del planeta. Enfrentado a un enemigo misterioso y todopoderoso, Ethan se ve obligado a considerar que nada puede anteponerse a su misión, ni siquiera las vidas de aquellos que más le importan. <br>\ <br>\ ";
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




