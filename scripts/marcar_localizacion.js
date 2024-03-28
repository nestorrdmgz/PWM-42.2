// Función para marcar lugares en el mapa
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

// Función para hacer la preview de imágenes de las canchas
function previewImage() {
    var preview = document.getElementById('image-preview');
    var file = document.getElementById('myFile').files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        var img = new Image();
        img.src = reader.result;
        img.onload = function() {
            var width = this.width;
            var height = this.height;
            var size = Math.min(width, height);
            preview.innerHTML = '<img src="' + this.src + '" style="width:' + size + 'px;height:' + size + 'px;" alt="">';
        }
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.innerHTML = "";
    }
}