// Tu API key de TMDb
const apiKey = '2f8ec18732b1da2f6aa7b72f8114bca9';


// Obtener datos de películas de TMDb
function obtenerDatosTMDB() {
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const peliculas = data.results; // Obtener las películas populares

      // Limpiar el contenedor existente de películas
      const cineparkDiv = document.getElementById("cinepark");
      cineparkDiv.innerHTML = '';

      // Iterar a través de las películas obtenidas y crear elementos
      for (let pelicula of peliculas) {
        const carteleraDiv = document.createElement("div");
        carteleraDiv.className = "pelicula";

        const urlPelicula = document.createElement("a");
        urlPelicula.href = `https://www.themoviedb.org/movie/${pelicula.id}`;

        const imgPelicula = document.createElement("img");
        imgPelicula.src = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;
        imgPelicula.alt = pelicula.title;

        const tituloPelicula = document.createElement("h2");
        tituloPelicula.textContent = pelicula.title;

        const generoPelicula = document.createElement("p");
        generoPelicula.innerHTML = "<strong>Genre:</strong> " + pelicula.genre_ids.join(', ');

        const duracion = document.createElement("p");
        duracion.innerHTML = "<strong>Runtime:</strong>" + pelicula.runtime + " min";

        urlPelicula.appendChild(imgPelicula);
        carteleraDiv.appendChild(urlPelicula);
        carteleraDiv.appendChild(tituloPelicula);
        carteleraDiv.appendChild(generoPelicula);
        carteleraDiv.appendChild(duracion);

        cineparkDiv.appendChild(carteleraDiv);
        agregarEventosMouse(carteleraDiv);
      }
    })
    .catch(error => console.error('Error:', error));
}

// Llamar a la función para obtener datos de TMDb y generar la cartelera
obtenerDatosTMDB();
