fetch('../data/locations.json')
    .then(response => response.json())
    .then(data => {
        var locations = data.locations;

        var map = L.map('map').setView([28.09973, -15.41343], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        locations.forEach(function (location) {
            L.marker(location.coordinates).addTo(map).bindPopup(location.name).on('click', function () {
                document.getElementById('selected-location').textContent = location.name;
                document.getElementById('place-input').value = location.name;
            });
        });
    })
    .catch(error => console.error('Error fetching data:', error));
