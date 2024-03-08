// Función para cargar el botón de añadir partido
function loadAddMatch() {
    fetch('components/add_match_button.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('add_match').innerHTML = html;
        })
        .catch(error => console.error('Error cargando el add match:', error));
}
// Función para cargar el botón de filtro
function loadFilterButton() {
    fetch('components/filter_button.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('filter_button').innerHTML = html;
        })
        .catch(error => console.error('Error cargando el filter button:', error));
}
// Función para cargar el detalle de los partidos
function loadMatchDetails() {
    fetch('components/match_details.html')
        .then(response => response.text())
        .then(html => {
            const elements = document.querySelectorAll('.match_details');
            elements.forEach(element => {
                element.innerHTML = html;
            });
        })
        .catch(error => console.error('Error cargando el detalle de los partidos:', error));
}