function loadMatchDetails() {
    const partidos = [
        {
            "nombre": "Partido de Baloncesto 1",
            "lugar": "IES Schamann",
            "modalidad": "5 vs 5",
            "fechaHora": "2024-04-15T18:00:00",
            "equipos": [
                {
                    "nombre": "Equipo A",
                    "jugadores": [1, 2, 3]
                },
                {
                    "nombre": "Equipo B",
                    "jugadores": [4, 5, 6]
                }
            ]
        },
        {
            "nombre": "Partido de Baloncesto 2",
            "lugar": "IES Valsequillo",
            "modalidad": "3 vs 3",
            "fechaHora": "2024-04-20T20:00:00",
            "equipos": [
                {
                    "nombre": "Equipo A",
                    "jugadores": [1, 2]
                },
                {
                    "nombre": "Equipo B",
                    "jugadores": [3, 4]
                }
            ]
        }
    ];

    const matchDetailsContainer = document.getElementById('partidos-contenido');

    partidos.forEach(partido => {
        const matchDetailsDiv = document.createElement('div');
        matchDetailsDiv.classList.add('match_details');

        matchDetailsDiv.innerHTML = `
            <div class="match-details">
                <h1 class="texto-titulo-partido">${partido.nombre} - ${partido.modalidad}</h1>
                <div class="location-container">
                    <img class="imagen-location" src="../images/location-vector.png" alt="Imagen de ubicación">
                    <span class="texto-location">${partido.lugar}</span>
                </div>
                <span class="fecha-y-hora">${partido.fechaHora}</span>
            </div>
            <div class="match-teams">
                ${partido.equipos.map(equipo => `
                    <div class="team-container">
                        <span class="texto-filtro">${equipo.nombre}</span>
                        ${equipo.jugadores.map(jugador => `
                            <button class="boton-usuario">
                                <div class="imagen-container">
                                    <img class="imagen" src="../images/user-icon.jpg" alt="Foto de perfil">
                                    <div class="linea"></div>
                                </div>
                                <p class="texto">Jugador ${jugador}</p>
                            </button>
                        `).join('')}
                        ${equipo.jugadores.length < getNumeroMaximoJugadores(partido.modalidad) ? `
                            <button class="anadirse-button" onclick="convertirAUsuario(this)">
                                <div class="imagen-container">
                                    <img class="imagen" src="../images/plus-vector.png" alt="Add user">
                                    <div class="linea"></div>
                                </div>
                                <p class="texto">APUNTARSE</p>
                            </button>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        `;

        matchDetailsContainer.appendChild(matchDetailsDiv);
    });
}

// Función para obtener el número máximo de jugadores según la modalidad
function getNumeroMaximoJugadores(modalidad) {
    // Lógica para determinar el número máximo de jugadores según la modalidad
    // Puedes implementarla según tus necesidades
    switch (modalidad) {
        case '5 vs 5':
            return 10;
        case '3 vs 3':
            return 6;
        default:
            return 0;
    }
}
