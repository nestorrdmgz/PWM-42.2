var map = L.map('map').setView([28.09973, -15.41343], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

var marker;
function onMapClick(e) {
    if (marker) {
        map.removeLayer(marker);
    }
    marker = new L.marker(e.latlng).addTo(map);
    document.getElementById('selected-location').textContent = "Latitud: " + e.latlng.lat.toFixed(5) + ", Longitud: " + e.latlng.lng.toFixed(5);
}
map.on('click', onMapClick);

document.getElementById('add-cancha-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var nombre = document.getElementById('cancha-name').value;
    var iluminacion = document.getElementById('light-checkbox').checked;
    var foto = document.getElementById('myFile').files[0];
    var ubicacion = document.getElementById('selected-location').textContent; // Obtener la ubicación del texto

    // Convertir la ubicación de texto a coordenadas separadas
    var ubicacionSplit = ubicacion.split(":");
    var latitud = parseFloat(ubicacionSplit[1].trim().split(",")[0]);
    var longitud = parseFloat(ubicacionSplit[2].trim());

    var nuevaCancha = {
        "name": nombre,
        "coordinates": [latitud, longitud],
        "iluminacion": iluminacion,
        "foto": foto ? URL.createObjectURL(foto) : null
    };

    console.log('Nueva Cancha:', nuevaCancha);
    // Aquí deberías enviar los datos al servidor para que los procese y actualice el archivo JSON correspondiente
});