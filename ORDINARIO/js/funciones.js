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

// Función para mostrar películas
function mostrarPeliculas(peliculas) {
    const cineparkDiv = document.getElementById("cinepark");
    cineparkDiv.innerHTML = '';
  
    for (let pelicula of peliculas) {
      const carteleraDiv = document.createElement("div");
      carteleraDiv.className = "pelicula";
  
      const imgPelicula = document.createElement("img");
      imgPelicula.src = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;
      imgPelicula.alt = pelicula.title;
  
      const tituloPelicula = document.createElement("h2");
      tituloPelicula.textContent = pelicula.title;
  
      carteleraDiv.appendChild(imgPelicula);
      carteleraDiv.appendChild(tituloPelicula);
  
      cineparkDiv.appendChild(carteleraDiv);
      agregarEventosMouse(carteleraDiv);
    }
  }
  