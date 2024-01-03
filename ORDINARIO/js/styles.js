// Estilos CSS dinámicos
const style = document.createElement('style');
style.textContent = `
  .header {
    background-color: #000;
    padding: 10px;
  }
  .navegacion__enlace {
    list-style: none;
    display: flex;
    align-items: center;
  }
  #searchBtn, #popularesBtn, #vistasActualmenteBtn, #mejoresCalificadasBtn, #proximosLanzamientosBtn{
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 5px; /* Añadir un margen derecho al botón */
  }
  
  #searchInput {
    padding: 6px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-right: 5px;
  }
`;
document.head.appendChild(style);


// Estilos para los iconos de las redes sociales
var iconoEstilos = `
width: 50px;
margin: 30px;
padding: 5px;
border: 2px solid white;
border-radius: 50%;
`;

// Aplicando los estilos a las imágenes de las redes sociales
facebookIcon.style.cssText = iconoEstilos;
instagramIcon.style.cssText = iconoEstilos;
twitterIcon.style.cssText = iconoEstilos;
youtubeIcon.style.cssText = iconoEstilos;

// Agregar la sección al final del cuerpo del documento
document.body.appendChild(redesSocialesSection);


// Estilos css en js para el pie de página
var estiloPieDePagina = document.createElement("style");
estiloPieDePagina.appendChild(document.createTextNode(`
    footer {
        background-color: black;
        color: gold;
        padding: 10px;
    }
`));

var estiloCartelera = document.createElement("style");
estiloCartelera.appendChild(document.createTextNode(`
  #cinepark {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    margin-top: 30px;
    padding: 20px
  }
  .pelicula {
    background-color: black;
    color: white;
    border-radius: 10px;
    overflow: hidden;
    width: 250px;
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.5);
    transition: transform 0.3s, background-color 0.3s;
    cursor: pointer;
  }
  .pelicula img {
    width: 100%;
    height: auto;
    transition: transform 0.3s;
  }
  .pelicula:hover {
    background-color: midnightblue;
    transform: scale(1.05);
  }
`));

// Agregar los estilos al head del documento
document.head.appendChild(estiloCartelera);;