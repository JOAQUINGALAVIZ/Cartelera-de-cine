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
h2Element.textContent = 'Avatar';

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
iframe.src = 'https://www.youtube.com/embed/AZS_d_hS2dM'; 
iframe.allowFullscreen = true; // Permite la opcion de pantalla completa

// Agrega el iframe al contenedor div
iframeContainerDiv.appendChild(iframe);

// Agrega el contenedor div al cuerpo del documento
document.body.appendChild(iframeContainerDiv);




//
//
// Creamos un párrafo para mostrar la sinopsis de la película
var sinopsisText = " <br>\<br>\
Año 2154. Jake Sully (Sam Worthington), un ex-marine condenado a vivir en una silla de ruedas, sigue siendo, a pesar de ello, un auténtico guerrero. Precisamente por ello ha sido designado para ir a Pandora, donde algunas empresas están extrayendo un mineral extraño que podría resolver la crisis energética de la Tierra. Para contrarrestar la toxicidad de la atmósfera de Pandora, se ha creado el programa Avatar, gracias al cual los seres humanos mantienen sus conciencias unidas a un avatar: un cuerpo biológico controlado de forma remota que puede sobrevivir en el aire letal. Esos cuerpos han sido creados con ADN humano, mezclado con ADN de los nativos de Pandora, los Na'vi. Convertido en avatar, Jake puede caminar otra vez. Su misión consiste en infiltrarse entre los Na'vi, que se han convertido en el mayor obstáculo para la extracción del mineral. Pero cuando Neytiri, una bella Na'vi (Zoe Saldana), salva la vida de Jake, todo cambia: Jake, tras superar ciertas pruebas, es admitido en su clan. Mientras tanto, los hombres esperan los resultados de la misión de Jake. (FILMAFFINITY) <br>\<br>\ " ;
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


