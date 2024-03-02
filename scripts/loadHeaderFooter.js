// Cargar el encabezado
fetch("../templates/header.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("header").innerHTML = html;
    });

// Cargar el pie de página
fetch("../templates/footer.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("footer").innerHTML = html;
    });