// Asignar las funciones a los eventos de clic de los botones respectivos
document.getElementById('popularesBtn').addEventListener('click', obtenerPeliculasPopulares);
document.getElementById('vistasActualmenteBtn').addEventListener('click', obtenerPeliculasVistasActualmente);
document.getElementById('mejoresCalificadasBtn').addEventListener('click', obtenerPeliculasMejoresCalificadas);
document.getElementById('proximosLanzamientosBtn').addEventListener('click', obtenerProximosLanzamientos);

// Asignar la función a ejecutar al hacer clic en el botón de búsqueda
document.getElementById('searchBtn').addEventListener('click', buscarPelicula);