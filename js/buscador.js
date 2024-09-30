document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador")) {
        console.log(e.target.value);

        if (e.key === "Escape") e.target.value = "";

        // Expresión regular para comprobar si el valor contiene al menos una letra
        const regex = /[a-zA-Z]/;

        if (regex.test(e.target.value)) {
            document.querySelectorAll(".articulo").forEach(articulo => {
                if (articulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
                    articulo.classList.add("filtro");

                    // Desplazamiento suave hacia el artículo encontrado
                    articulo.scrollIntoView({ behavior: "smooth", block: "center" });
                } else {
                    articulo.classList.remove("filtro");
                }
            });
        } else {
            // En caso de que no haya letras, limpia el filtro
            document.querySelectorAll(".articulo").forEach(articulo => {
                articulo.classList.remove("filtro");
            });
        }
    }
});
