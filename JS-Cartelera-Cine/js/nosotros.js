// Creamos un elemento h1 con el id "enlace"
const h1Element = document.createElement('h1');
h1Element.textContent = 'CinePark';
h1Element.id = 'enlace';

// Aplicamos estilos CSS para centrar el h1
h1Element.style.textAlign = 'center';

// Creamos un elemento div con el id "cinepark"
const divElement = document.createElement('div');
divElement.id = 'cinepark';

// Agregamos el elemento h1 al cuerpo del documento
document.body.appendChild(h1Element);

// Agregamos el elemento div al cuerpo del documento
document.body.appendChild(divElement);



document.body.style.backgroundColor = "black";
//Letras de color Blanco
document.body.style.color = "white"; 

        // Función que se ejecutará al hacer clic en el h1
        document.getElementById("enlace").addEventListener("click", function() {
            // Redirigir a la página deseada
            window.location.href = "index.html";
        });

        const sectionElement = document.createElement("section");
        sectionElement.style.display = "flex";
        sectionElement.style.flexDirection = "column";
        sectionElement.style.alignItems = "center";
        sectionElement.style.justifyContent = "center";
        sectionElement.style.textAlign = "center";
        sectionElement.style.minHeight = "100vh";

        // Crea el primer artículo
        const articleElement = document.createElement("article");
        articleElement.classList.add("flex-container");

        // Agrega contenido al primer artículo
        const h2Element1 = document.createElement("h2");
        h2Element1.textContent = "Nosotros";

        const pElement1 = document.createElement("p");
        pElement1.textContent = "CARTELERA DE CINE";

        const imgElement = document.createElement("img");
        imgElement.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2w3aGdjdzRkdXpuaXI3ZTV0dDFvZ3hzNXBoNHh5ZzY4dWw3bzRjMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/hrvbl0atjWjR5VzZJd/giphy.gif"; // Reemplaza "tu-gif.gif" con la ruta de tu GIF
        imgElement.alt = "Cartelera de Cine";

        // Agrega elementos al primer artículo
        articleElement.appendChild(h2Element1);
        articleElement.appendChild(pElement1);
        articleElement.appendChild(imgElement);

  

        // Agrega contenido al segundo div
        const h2Element2 = document.createElement("h2");
        h2Element2.textContent = "Quiénes somos";

        const pElement2 = document.createElement("p");
        pElement2.textContent = "Somos un equipo creativo que utiliza HTML y JS para crear una atractiva cartelera de cine en línea. Aprovechamos lo que aprendimos en la Unidad 3 para estructurar la información de manera clara y darle estilo. Queremos que nuestra cartelera sea fácil de usar y visualmente atractiva. Mantente atento para ver nuestro proyecto tomando forma. ¡Esperamos que disfrutes de una experiencia cinematográfica única en línea!";

        const h3Element = document.createElement("h3");
        h3Element.innerHTML = "Equipo conformado por:<br>Ricardo Chan<br>Jorge Cua<br>Joaquin Galaviz<br>Alan Noh<br>Raul Valdez<br>Alexis Santos";


        

        // Agrega elementos al segundo div
        divElement.appendChild(h2Element2);
        divElement.appendChild(pElement2);
        divElement.appendChild(h3Element);
        

        // Agrega los elementos al elemento <section>
        sectionElement.appendChild(articleElement);
        sectionElement.appendChild(divElement);
        

        // Adjunta el elemento <section> al cuerpo del documento
        document.body.appendChild(sectionElement);

       // Agregar el pie de página
    var footerElement = document.createElement("footer");
    footerElement.style.textAlign = "center";
    footerElement.style.margin = "0 auto";
    footerElement.style.width = "80%"; 
    footerElement.textContent = "CinePark -- Todos los derechos reservados.";
    document.body.appendChild(footerElement);