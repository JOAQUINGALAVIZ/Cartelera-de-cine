// Creamos un elemento h1
const h1Element = document.createElement('h1');

// Creamos un elemento de enlace (cine) y establece su contenido y atributos
const linkElement = document.createElement('cine');
linkElement.textContent = 'CinePark'; // Texto del enlace
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
h2Element.textContent = 'Cars';

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
iframe.src = 'https://www.youtube.com/embed/SbXIj2T-_uk'; 
iframe.allowFullscreen = true; // Permite la opcion de pantalla completa

// Agrega el iframe al contenedor div
iframeContainerDiv.appendChild(iframe);

// Agrega el contenedor div al cuerpo del documento
document.body.appendChild(iframeContainerDiv);




//
//
// Creamos un párrafo para mostrar la sinopsis de la película
var sinopsisText = "<br>\<br>\
El valiente Rayo McQueen (con la voz de OWEN WILSON), un coche de carreras novato y apasionado descubre que el camino se hace andando, cuando se encuentra perdido en la ciudad fantasma Radiator Springs de la Ruta 66. Atravesando el país en dirección al gran Campeonato de la Copa Piston en California para competir con dos veteranos,McQueen conoce a los originales personajes que habitan en la ciudad incluida Sally (un llamativo Porsche de 2002 con voz de BONNIE HUNT), Doc Hudson (un Hudson Hornet de 1951 con un misterioso pasado, con la voz de PAUL NEWMAN), y Mater (una leal grúa oxidada con la voz de LARRY THE CABLE GUY). Todos ellos le ayudarán a comprender que hay cosas más importantes que conseguir premios, fama y patrocinios. Este reparto plagado de estrellas también incluye las actuaciones de leyendas de las carreras de coches como Richard Petty y Cheech Marin. Llena de humor, acción, sentimientos y verdaderas proezas técnicas, CARS es una película de alta velocidad para espectadores de todas las edades. <br>\ <br>\ ";
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



