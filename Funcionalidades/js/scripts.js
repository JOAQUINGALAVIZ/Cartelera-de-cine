// Espera a que el DOM (Document Object Model) esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    
    // Función para aplicar efecto de cambio de tamaño en las imágenes y color de fondo
function aplicarEfectoDeImagenesGrandes() {
    // Obtenemos todas las películas
    const peliculas = document.querySelectorAll(".estrenos .peliculas");

    // Recorremos las películas y les agregamos eventos
    peliculas.forEach(function (pelicula) {
        // Cuando pasamos el mouse encima de una peli
        pelicula.addEventListener("mouseover", function () {
            // Las imágenes se hacen gigantes
            pelicula.style.transform = "scale(1.1)";
            // Cambiamos el fondo a un tono oscuro
            pelicula.style.backgroundColor = "midnightblue";
        });

        // Cuando quitamos el mouse de una peli
        pelicula.addEventListener("mouseout", function () {
            // Las imágenes vuelven a su tamaño normal
            pelicula.style.transform = "scale(1)";
            // El fondo vuelve a transparente
            pelicula.style.backgroundColor = "transparent";
        });
    });
}

// Llamamos a la función para aplicar el efecto
aplicarEfectoDeImagenesGrandes();



});

