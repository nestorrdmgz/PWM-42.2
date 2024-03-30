function storeSelectedCourtId() {
    // Obtener el nombre de la cancha seleccionada
    var selectedCourtName = document.getElementById('selected-location').textContent;

    // Realizar una solicitud HTTP para obtener los datos de db.json
    fetch('http://localhost:3000/courts')
        .then(response => response.json())
        .then(data => {
            // Buscar el ID de la cancha correspondiente al nombre seleccionado
            var courtId = null;
            data.forEach(function (court) {
                if (court.name === selectedCourtName) {
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