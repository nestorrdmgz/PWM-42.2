document.addEventListener('DOMContentLoaded', function() {
    fetch('../data/locations.json')
        .then(response => response.json())
        .then(data => {
            const form = document.querySelector('.add-match-form');
            const courtNameInput = form.querySelector('#location-search');
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                const userInput = courtNameInput.value.trim();
                const location = data.locations.find(location => location.name === userInput);

                if (location) {
                    return true;
                } else {
                    alert('El nombre de la cancha no es válido. Por favor, ingresa un nombre de cancha válido.');
                    return false;
                }
            });
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
});