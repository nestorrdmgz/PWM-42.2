function loadMatchDetails() {
    fetch('../components/match_details.html')
        .then(response => response.text())
        .then(template => {
            // Cargar los datos desde el archivo JSON
            fetch('http://localhost:3000/matches')
                .then(response => response.json())
                .then(data => {
                    const partidos = data;
                    const matchDetailsContainer = document.getElementById('partidos-contenido');

                    // Cargar datos de usuarios
                    fetch("http://localhost:3000/users")
                        .then(response => response.json())
                        .then(dataUsers => {

                            const usuarios = dataUsers;

                            // PARA CADA PARTIDO...
                            partidos.forEach((partido, index) => {
                                const matchContainer = document.createElement('div');
                                matchContainer.classList.add('match-container');
                                matchContainer.id = `partido${index + 1}`;

                                matchContainer.innerHTML = template; // Usar la plantilla HTML

                                const matchDetailsDiv = matchContainer.querySelector('.match-details');
                                matchDetailsDiv.querySelector('.texto-titulo-partido').textContent = `${partido.name} - ${partido.modality}`;
                                matchDetailsDiv.querySelector('.texto-location').textContent = partido.ubication;
                                matchDetailsDiv.querySelector('.fecha-y-hora').textContent = partido.date;

                                const matchTeamsDiv = matchContainer.querySelector('.match-teams');
                                matchTeamsDiv.innerHTML = ''; // Limpiar equipos existentes

                                partido.teams.forEach(equipo => {
                                    const teamContainer = document.createElement('div');
                                    teamContainer.classList.add('team-container');

                                    teamContainer.innerHTML = `
                                    <span class="texto-filtro">${equipo.name}</span>
                                    ${equipo.players.map(jugadorId => {
                                        // Buscar el usuario con el ID correspondiente
                                        const usuario = usuarios.find(usuario => usuario.userId === jugadorId);
                                        if (usuario) {
                                            const imagenSrc = usuario.foto ? usuario.foto : '../images/user-icon.jpg';
                                            return `
                                                <button class="boton-usuario">
                                                    <div class="imagen-container">
                                                        <img class="imagen" src="${imagenSrc}" alt="Foto de perfil">
                                                        <div class="linea"></div>
                                                    </div>
                                                    <p class="texto">${usuario.name} ${usuario.surname}</p>
                                                </button>
                                            `;
                                        }
                                    }).join('')}
                                    ${equipo.players.length < getNumeroMaximoJugadores(partido.modality) ? `
                                        <button class="anadirse-button" onclick="convertirAUsuario(this)">
                                            <div class="imagen-container">
                                                <img class="imagen" src="../images/plus-vector.png" alt="Add user">
                                                <div class="linea"></div>
                                            </div>
                                            <p class="texto">APUNTARSE</p>
                                        </button>
                                        ` : '<button class="anadirse-button" disabled><div class="imagen-container"><img class="imagen" src="../images/plus-vector.png" alt="Add user"><div class="linea"></div></div><p class="texto">COMPLETO</p></button>'}
                                    `;
                                    matchTeamsDiv.appendChild(teamContainer);
                                });

                        matchDetailsContainer.appendChild(matchContainer);
                    });

                    convertirBotones(matchDetailsContainer); // Llama a la función que convierte los botones
                })
                })
                .catch(error => console.error('Error cargando datos de partidos:', error));
        })
        .catch(error => console.error('Error cargando el detalle de los partidos:', error));
}


// Función para obtener el número máximo de jugadores según la modalidad
function getNumeroMaximoJugadores(modalidad) {
    // Lógica para determinar el número máximo de jugadores según la modalidad
    // Puedes implementarla según tus necesidades
    switch (modalidad) {
        case '5 vs 5':
            return 5;
        case '4 vs 4':
            return 4;
        case '3 vs 3':
            return 3;
        case '2 vs 2':
            return 2;
        case '1 vs 1':
            return 1;
        default:
            return 0;
    }
}
