var isLoggedIn = true; // Variable que indica si el usuario ha iniciado sesión o no
document.addEventListener('DOMContentLoaded', function () {
    if (isLoggedIn) {
        loadLoggedHeader(); // Carga el header con inicio de sesión si el usuario ha iniciado sesión
    } else {
        loadHeader(); // Carga el header sin inicio de sesión si el usuario no ha iniciado sesión
    }
    loadFooter();
});

var map = L.map('map').setView([28.09973, -15.41343], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

var marker;
var coordinates; // Variable global para almacenar las coordenadas

function onMapClick(e) {
    if (marker) {
        map.removeLayer(marker);
    }
    marker = new L.marker(e.latlng).addTo(map);
    coordinates = [e.latlng.lat.toFixed(5), e.latlng.lng.toFixed(5)];
    document.getElementById('selected-location').textContent = "Latitud: " + e.latlng.lat.toFixed(5) + ", Longitud: " + e.latlng.lng.toFixed(5);
}

map.on('click', onMapClick);

function previewImage() {
    var file = document.getElementById('myFile').files[0];
    var reader = new FileReader();

    reader.onload = function (event) {
        var imageUrl = event.target.result;
        var imagePreview = document.getElementById('image-preview');
        imagePreview.innerHTML = '';
        var imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = 'Vista previa de la imagen';
        imagePreview.appendChild(imgElement);
    };

    reader.readAsDataURL(file);
}

document.getElementById('new-court').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener el estado del checkbox de iluminación
    var isLighted = document.getElementById('light-checkbox').checked;

    const formData = new FormData(this);
    const userData = {
        name: formData.get('name'),
        coordinates: coordinates,
        ilumination: isLighted,
        photo: formData.get('myFile'),
    };

    fetch('http://localhost:3000/courts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Nueva cancha creada:', data);
            alert('Cancha creada!');
            localStorage.setItem('courtId', data.id);
            window.location.href = '../canchas/canchas_page.html';
        })
        .catch(error => {
            console.error('Error al crear cancha:', error);
            alert('Hubo un error al crear la cancha. Por favor, inténtalo de nuevo.');
        });
});