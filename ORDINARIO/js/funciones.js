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