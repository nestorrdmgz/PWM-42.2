// Recuperar la ubicación seleccionada del localStorage
var selectedLocation = localStorage.getItem('selectedLocation');
document.getElementById('cancha-name').textContent = selectedLocation;

// Obtener los datos de la cancha seleccionada del JSON
fetch('../data/locations.json')
    .then(response => response.json())
    .then(data => {
        const selectedCourt = data.locations.find(location => location.name === selectedLocation);
        if (selectedCourt) {
            // Mostrar la ubicación de la cancha en el mapa
            const map = L.map('map').setView(selectedCourt.coordinates, 12);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(map);

            L.marker(selectedCourt.coordinates).addTo(map).bindPopup(selectedCourt.name);

            // Mostrar el estado de la iluminación
            document.getElementById('light-checkbox').checked = selectedCourt.iluminacion;

            // Cargar la imagen de la cancha o la imagen predeterminada si no hay imagen disponible
            var imagePreview = document.getElementById('image-preview');
            if (selectedCourt.foto) {
                var courtImage = new Image();
                courtImage.src = selectedCourt.foto;
                courtImage.alt = selectedCourt.name;
                imagePreview.appendChild(courtImage);
            } else {
                var defaultImage = new Image();
                defaultImage.src = '../images/court_images/imagen_no_disponible.png';
                defaultImage.alt = 'Imagen por defecto';
                imagePreview.appendChild(defaultImage);
            }
        } else {
            console.error('Cancha no encontrada en el JSON.');
        }
    })
    .catch(error => console.error('Error fetching data:', error));