// Crear elementos HTML
const header = document.createElement('header');
header.classList.add('header');

const listElement = document.createElement('li');
listElement.classList.add('navegacion__enlace');
listElement.style.display = 'flex'; // Usar flexbox para alinear elementos
listElement.style.justifyContent = 'flex-end'; // Alinear elementos a la derecha

const searchInput = document.createElement('input');
searchInput.setAttribute('type', 'text');
searchInput.setAttribute('id', 'searchInput');
searchInput.setAttribute('placeholder', 'Buscar por tipo o nombre');
searchInput.style.marginLeft = '5px'; // Añadir margen izquierdo al input

const searchButton = document.createElement('button');
searchButton.setAttribute('id', 'searchBtn');
searchButton.textContent = 'Buscar';
searchButton.style.backgroundColor = '#af4c03'; // Cambiar el color de fondo del botón
searchButton.style.color = '#fff'; // Cambiar el color del texto del botón

const popularesButton = document.createElement('button');
popularesButton.setAttribute('id', 'popularesBtn');
popularesButton.textContent = 'Populares';
popularesButton.style.backgroundColor = '#af4c03'; // Cambiar el color de fondo del botón
popularesButton.style.color = '#fff'; // Cambiar el color del texto del botón

const vistasActualmenteButton = document.createElement('button');
vistasActualmenteButton.setAttribute('id', 'vistasActualmenteBtn');
vistasActualmenteButton.textContent = 'Vistas Actualmente';
vistasActualmenteButton.style.backgroundColor = '#af4c03'; // Cambiar el color de fondo del botón
vistasActualmenteButton.style.color = '#fff'; // Cambiar el color del texto del botón

const mejoresCalificadasButton = document.createElement('button');
mejoresCalificadasButton.setAttribute('id', 'mejoresCalificadasBtn');
mejoresCalificadasButton.textContent = 'Mejores Calificadas';
mejoresCalificadasButton.style.backgroundColor = '#af4c03'; // Cambiar el color de fondo del botón
mejoresCalificadasButton.style.color = '#fff'; // Cambiar el color del texto del botón

const proximosLanzamientosButton = document.createElement('button');
proximosLanzamientosButton.setAttribute('id', 'proximosLanzamientosBtn');
proximosLanzamientosButton.textContent = 'Proximos Lanzamientos';
proximosLanzamientosButton.style.backgroundColor = '#af4c03'; // Cambiar el color de fondo del botón
proximosLanzamientosButton.style.color = '#fff'; // Cambiar el color del texto del botón

// Creamos h1 como nuestro título principal
const cineparkTituloElement = document.createElement('h1');
cineparkTituloElement.textContent = 'CinePark';
cineparkTituloElement.style.textAlign = 'right';

// Añadir margen derecho a los botones para separarlos del título
cineparkTituloElement.style.marginRight = '350px';

// Agregar el input y el botón al elemento de la lista
listElement.appendChild(cineparkTituloElement);
listElement.appendChild(proximosLanzamientosButton);
listElement.appendChild(popularesButton);
listElement.appendChild(mejoresCalificadasButton);
listElement.appendChild(vistasActualmenteButton);
listElement.appendChild(searchInput);
listElement.appendChild(searchButton);

// Agregar la lista al encabezado
header.appendChild(listElement);

// Agregar el encabezado al cuerpo del documento
document.body.appendChild(header);

// Creamos un contenedor div para CinePark
const contenedorCinepark = document.createElement('div');
contenedorCinepark.id = 'cinepark';

// Agregamos el título principal y el contenedor
// document.body.appendChild(cineparkTituloElement);
document.body.appendChild(contenedorCinepark);

// Establecemos estilos para el sitio web
document.body.style.backgroundColor = "black";
document.body.style.color = "white";

// Creaando el contenedor de la sección de las redes sociales
var redesSocialesSection = document.createElement("section");
redesSocialesSection.id = "redes-sociales";
redesSocialesSection.style.textAlign = "center";

// La frase del título "siguenos en nuestras redes sociales"
var tituloRedesSociales = document.createElement("h2");
tituloRedesSociales.textContent = "Siguenos en nuestras redes sociales:";
redesSocialesSection.appendChild(tituloRedesSociales);

// Creando el vínculo de la red social de Facebook
var facebookLink = document.createElement("a");
var facebookIcon = document.createElement("img");
facebookIcon.src = "https://png.pngtree.com/png-clipart/20180515/ourmid/pngtree-facebook-icon-png-image_3566125.png";
facebookLink.href = "https://www.facebook.com/";
facebookLink.target = "_blank";
facebookLink.appendChild(facebookIcon);
redesSocialesSection.appendChild(facebookLink);

// Creando el vínculo de la red social de Instagram
var instagramLink = document.createElement("a");
var instagramIcon = document.createElement("img");
instagramIcon.src = "https://img.freepik.com/vector-premium/vinnytsia-ucrania-27-abril-2023-icono-redes-sociales-populares-instagram-diseno-vectorial_545793-1681.jpg";
instagramIcon.alt = "Instagram";
instagramLink.href = "https://www.instagram.com/";
instagramLink.target = "_blank";
instagramLink.appendChild(instagramIcon);
redesSocialesSection.appendChild(instagramLink);

// Creando el vínculo de la red social de Twitter/
var twitterLink = document.createElement("a");
var twitterIcon = document.createElement("img");
twitterIcon.src = "https://cdn.ipadizate.com/2023/07/img_1867-1.jpg";
twitterIcon.alt = "Twitter";
twitterLink.href = "https://twitter.com/";
twitterLink.target = "_blank";
twitterLink.appendChild(twitterIcon);
redesSocialesSection.appendChild(twitterLink);

// Creando el vínculo de la red social de Youtube
var youtubeLink = document.createElement("a");
var youtubeIcon = document.createElement("img");
youtubeIcon.src = "https://cdn.icon-icons.com/icons2/1099/PNG/512/1485482355-youtube_78661.png";
youtubeIcon.alt = "Youtube";
youtubeLink.href = "https://www.youtube.com/";
youtubeLink.target = "_blank";
youtubeLink.appendChild(youtubeIcon);
redesSocialesSection.appendChild(youtubeLink);

//Agregando pie de página
// Creando el elemento que va en el pie de página de derechos reservados
var pieDePagina = document.createElement("footer");
var textoPieDePagina = document.createTextNode("CinePark -- Todos los derechos reservados.");
pieDePagina.appendChild(textoPieDePagina);
pieDePagina.style.textAlign = "center";
document.body.appendChild(pieDePagina);