//Fondo de Negro
document.body.style.backgroundColor = "black";
//Letras de color Blanco
document.body.style.color = "white"; 


// Referencia al elemento en el que desea establecer el fondo.
const cineparkElement = document.getElementById('cinepark');

// URL de la imagen de fondo
const imageUrl = 'https://imgs.search.brave.com/iYUTbE1mrEj1UaxMTNIADE88M13McXJOxrsT2JaYC4w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/dmllam8tZm9uZG8t/bmVncm8tdGV4dHVy/YS1ncnVuZ2UtcGFw/ZWwtdGFwaXotb3Nj/dXJvLXBpemFycmEt/cGl6YXJyYS1wYXJl/ZC1oYWJpdGFjaW9u/XzEyNTgtMjgzMTIu/anBnP3NpemU9NjI2/JmV4dD1qcGc';

// Fondo con imagen
cineparkElement.style.backgroundImage = `url(${imageUrl})`;
cineparkElement.style.backgroundSize = 'cover'; // Ajusta el tamaño de la imagen
cineparkElement.style.backgroundRepeat = 'no-repeat'; // La imagen no se repita.





// "Nosotros" crea el enlace y escribe el texto
var nosotrosLink = document.createElement("a");
nosotrosLink.textContent = "Nosotros";
nosotrosLink.href = "nosotros.html"; 
nosotrosLink.style.position = "absolute";
nosotrosLink.style.top = "20px";
nosotrosLink.style.right = "100px";
nosotrosLink.style.fontSize = "30px"; 
nosotrosLink.style.color = "white"; 

// Se agrega el enlace a la pagina
document.body.appendChild(nosotrosLink);


// Datos de la Cartelera de Cine
var peliculas = [
    { 
        
        titulo: "Justiciero", 
        genero: "Acción", 
        duracion: "2h 15min",
        imagen: "https://statics.cinemex.com/movie_posters/UxB4QhUZzWWfswb-750x1125.jpg",
        
        url: "peli_justiciero.html"
    },
    { 
        titulo: "Barbie", 
        genero: "Comedia fantástica", 
        duracion: "1h 54min",
        imagen: "https://m.media-amazon.com/images/M/MV5BOWIwZGY0OTYtZjUzYy00NzRmLTg5YzgtYWMzNWQ0MmZiY2MwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
        
        url: "peli_barbie.html"
    },
    { 
        titulo: "Pokemon la pelicula", 
        genero: "Acción", 
        duracion: "1h 35min",
        imagen: "https://www.ecartelera.com/carteles/5200/5220/004_m.jpg",
        url: "peli_pokemon.html"
    },
    { 
        titulo: "Mision Imposible", 
        genero: "Accion", 
        duracion: "2h 30min",
        imagen: "https://m.media-amazon.com/images/M/MV5BYzFiZjc1YzctMDY3Zi00NGE5LTlmNWEtN2Q3OWFjYjY1NGM2XkEyXkFqcGdeQXVyMTUyMTUzNjQ0._V1_.jpg",
        url: "peli_mision.html"
    },
    { 
        titulo: "Cars", 
        genero: "Comedia animada", 
        duracion: "1h 57 min",
        imagen: "https://th.bing.com/th/id/OIP.f_toCHd7gRF8RjWmevSZfAHaKz?pid=ImgDet&rs=1",
        url: "peli_cars.html"
    },
    { 
        titulo: "La Langosta", 
        genero: "Ciencia ficción", 
        duracion: "1h 18min",
        imagen: "https://pics.filmaffinity.com/the_lobster-643891588-large.jpg",
        url: "peli_langosta.html"
    },
    { 
        titulo: "Avatar", 
        genero: "Ciencia ficción", 
        duracion: "2h 18min",
        imagen: "https://pics.filmaffinity.com/avatar_the_way_of_water-722646748-large.jpg",
        url: "peli_avatar.html"
    },
    { 
        titulo: "Dungeons of Dragon",
        genero: "Ciencia ficción", 
        duracion: "2h 38min",
        imagen: "https://m.media-amazon.com/images/M/MV5BZWM5MTQ3NDMtNGFiMS00Y2E5LWE2ZTUtNzM5MTcyZjM3ODRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
        url: "peli_dungeons.html"
    },
    
];
function generarCartelera() {
    var cineparkDiv = document.getElementById("cinepark");

    peliculas.forEach(function(pelicula, index) {
        var peliculaDiv = document.createElement("div");
        peliculaDiv.className = "pelicula";
        peliculaDiv.innerHTML = `
        <h2>${pelicula.titulo}</h2>
        <p><strong>Género:</strong> ${pelicula.genero}</p>
        <p><strong>Duración:</strong> ${pelicula.duracion}</p>
        <a href="${pelicula.url}">
            <img src="${pelicula.imagen}" alt="${pelicula.titulo}" />
        </a>
    `;

    // Evento para que realice una accion al pasar el mouse
    peliculaDiv.addEventListener("mouseover", function() {
        peliculaDiv.style.backgroundColor = "midnightblue";
    });

    peliculaDiv.addEventListener("mouseout", function() {
        peliculaDiv.style.backgroundColor = ""; // Al ya no estar el mouse regresa al color original
    });

        cineparkDiv.appendChild(peliculaDiv);
    });
}






generarCartelera();

// Styles del Css en JS
var styleElement = document.createElement("style");
styleElement.innerHTML = `
    .pelicula {
        border: 0px;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        
    }
    .pelicula img {
        max-width: 250px;
        height: 300px;
    }
`;
// Se agrega el elemento <style> al <head> del documento
document.head.insertAdjacentElement("beforeend", styleElement);


// Agregando las redes sociales

//Agregando pie de pagina 