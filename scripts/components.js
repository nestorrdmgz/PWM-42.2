// Función para cargar el header
function loadAddMatch() {
    fetch('components/add_match_button.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('add_match').innerHTML = html;
        })
        .catch(error => console.error('Error cargando el add match:', error));
}
// Función para cargar el footer
function loadFilterButton() {
    fetch('components/filter_button.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('filter_button').innerHTML = html;
        })
        .catch(error => console.error('Error cargando el filter button:', error));
}