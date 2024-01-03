// Tu API key de TMDb
const apiKey = '2f8ec18732b1da2f6aa7b72f8114bca9';

// Funciones para obtener diferente tipos de películas
function obtenerPeliculasPopulares() {
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => mostrarPeliculas(data.results))
    .catch(error => console.error('Error:', error));
}

function obtenerPeliculasVistasActualmente() {
  fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => mostrarPeliculas(data.results))
    .catch(error => console.error('Error:', error));
}

function obtenerPeliculasMejoresCalificadas() {
  fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => mostrarPeliculas(data.results))
    .catch(error => console.error('Error:', error));
}

function obtenerProximosLanzamientos() {
  fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => mostrarPeliculas(data.results))
    .catch(error => console.error('Error:', error));
}

function buscarPelicula() {
  const searchTerm = document.getElementById('searchInput').value.trim();

  if (searchTerm !== '') {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`)
      .then(response => response.json())
      .then(data => mostrarPeliculas(data.results))
      .catch(error => console.error('Error:', error));
  } else {
    alert('Por favor, ingrese un término de búsqueda válido.');
  }
}

function obtenerTrailer(movieId) {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      if (data.results.length > 0) {
        const trailerKey = data.results[0].key;
        const trailerURL = `https://www.youtube.com/watch?v=${trailerKey}`;
        window.open(trailerURL);
      } else {
        alert("Trailer no encontrado para esta película.");
      }
    })
    .catch(error => console.error('Error:', error));
}