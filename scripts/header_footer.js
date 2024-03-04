// Función para cargar el header
function loadHeader() {
    fetch('templates/header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-container').innerHTML = html;
        })
        .catch(error => console.error('Error cargando el header:', error));
}
// Función para cargar el footer
function loadFooter() {
    fetch('templates/footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer-container').innerHTML = html;
        })
        .catch(error => console.error('Error cargando el footer:', error));
}