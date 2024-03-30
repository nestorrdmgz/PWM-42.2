// Definir la función para almacenar el ID de la cancha seleccionada
function storeSelectedCourtId(courtName) {
    // Realizar una solicitud HTTP para obtener los datos de db.json
    fetch('http://localhost:3000/courts')
        .then(response => response.json())
        .then(data => {
            // Buscar el ID de la cancha correspondiente al nombre seleccionado
            var courtId = null;
            data.forEach(function (court) {
                if (court.name === courtName) {
                    courtId = court.id;
                }
            });

            // Almacenar el ID de la cancha en el localStorage
            if (courtId !== null) {
                localStorage.setItem('courtId', courtId);
            } else {
                console.error('No se encontró el ID de la cancha para el nombre seleccionado.');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Realizar una solicitud HTTP para obtener los datos de las canchas y mostrar los marcadores en el mapa
fetch('http://localhost:3000/courts')
    .then(response => response.json())
    .then(data => {
        var courts = data;

        var map = L.map('map').setView([28.09973, -15.41343], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        courts.forEach(function (court) {
            L.marker(court.coordinates).addTo(map).bindPopup(court.name).on('click', function () {
                // Cuando se hace clic en un marcador, almacenar el ID de la cancha seleccionada
                storeSelectedCourtId(court.name);
            });
        });
    })
    .catch(error => console.error('Error fetching data:', error));
