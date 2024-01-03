// Agregar eventos de mouse a las películas
function agregarEventosMouse(pelicula) {
    pelicula.addEventListener("mouseover", function () {
        pelicula.style.backgroundColor = "midnightblue";
        pelicula.style.transform = "scale(1.1)";
    });

    pelicula.addEventListener("mouseout", function () {
        pelicula.style.backgroundColor = "";
        pelicula.style.transform = "scale(1)";
    });
}

function mostrarPeliculas(peliculas) {
    const cineparkDiv = document.getElementById("cinepark");
    cineparkDiv.innerHTML = '';
  
    for (let pelicula of peliculas) {
      fetch(`https://api.themoviedb.org/3/movie/${pelicula.id}?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          const carteleraDiv = document.createElement("div");
          carteleraDiv.className = "pelicula";
  
          const imgPelicula = document.createElement("img");
          imgPelicula.src = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;
          imgPelicula.alt = pelicula.title;
  
          const tituloPelicula = document.createElement("h2");
          tituloPelicula.textContent = pelicula.title;
  
          const generoPelicula = document.createElement("p");
          generoPelicula.textContent = `Género: ${data.genres.map(genre => genre.name).join(', ')}`;
  
          const duracionPelicula = document.createElement("p");
          duracionPelicula.textContent = `Duración: ${data.runtime} minutos`;
  
          carteleraDiv.appendChild(imgPelicula);
          carteleraDiv.appendChild(tituloPelicula);
          carteleraDiv.appendChild(generoPelicula);
          carteleraDiv.appendChild(duracionPelicula);
  
          cineparkDiv.appendChild(carteleraDiv);
          agregarEventosMouse(carteleraDiv);
        })
        .catch(error => console.error('Error:', error));
    }
  }
  
