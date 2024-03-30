localStorage.removeItem('courtId');
document.getElementById('match-form').addEventListener('submit', function (event) {
    event.preventDefault();



    const formData = new FormData(this);
    const userData = {
        name: formData.get('name'),
        ubication: localStorage.getItem('courtId'),
        date: formData.get('datetime-input'),
        modality: formData.get('modality'),
        teams: [
            {
                "name": "Equipo A",
                "players": []
            },
            {
                "name": "Equipo B",
                "players": []
            }
        ]
    };

    fetch('http://localhost:3000/matches', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Nuevo partido creado:', data);
            alert('Partido creado!');
            localStorage.setItem('matchId', data.id);
            window.location.href = '../partidos/partidos_page.html';
        })
        .catch(error => {
            console.error('Error al crear partido:', error);
            alert('Hubo un error al crear el partido. Por favor, inténtalo de nuevo.');
        });
});