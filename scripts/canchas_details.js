document.addEventListener('DOMContentLoaded', function () {
    loadHeader();
    loadFooter();

    // Recuperar el ID de la cancha seleccionada del localStorage
    var selectedCourtId = localStorage.getItem('courtId');

    // Obtener los datos de la cancha seleccionada del JSON usando su ID
    fetch('http://localhost:3000/courts/' + selectedCourtId)
        .then(response => response.json())
        .then(selectedCourt => {
            // Mostrar el nombre de la cancha
            document.getElementById('cancha-name').textContent = selectedCourt.name;

            // Mostrar la ubicación de la cancha en el mapa
            const map = L.map('map').setView(selectedCourt.coordinates, 12);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(map);

            L.marker(selectedCourt.coordinates).addTo(map).bindPopup(selectedCourt.name);

            // Mostrar el estado de la iluminación
            document.getElementById('light-checkbox').checked = selectedCourt.ilumination;

            // Mostrar la imagen de la cancha si está disponible
            if (selectedCourt && selectedCourt.photo) {
                var imagePreview = document.getElementById('image-preview');
                var courtImage = document.createElement('img');
                courtImage.src = selectedCourt.photo;
                courtImage.alt = selectedCourt.name;
                imagePreview.appendChild(courtImage);
            } else {
                console.log('La cancha no tiene foto.');
            }
        })
        .catch(error => console.error('Error obteniendo los datos de la cancha:', error));
});
