
// Función para cargar el header
function loadTemplate(file, id) {
    fetch(file)
        .then(response => response.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
        })
        .catch(error => console.error('Error loading template:', error));
}
