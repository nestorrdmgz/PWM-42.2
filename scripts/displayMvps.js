// Obtener los datos de la cancha seleccionada del JSON
fetch('../data/users.json')
    .then(response => response.json())
    .then(data => {
        const usuariosOrdenados = data.usuarios.sort((a, b) => b.partidos - a.partidos);

        // Tomar los 10 primeros usuarios
        const top10Usuarios = usuariosOrdenados.slice(0, 10);
        const eloMejorJugador = usuariosOrdenados[0].ELO;

        // Construir la tabla
        const tabla = document.getElementById('player-list');
        top10Usuarios.forEach((usuario, index) => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                        <td>${index + 1}</td>
                        <td>${usuario.nombre} ${usuario.apellido}</td>
                        <td>${usuario.partidos}</td>
                        <td>${1800 + usuario.partidos * 0.5}</td> <!-- ELO=ELO_base+partidos_jugados×factor_de_ajuste -->
                    `;
            if (index < 3) {
                fila.classList.add('medalla');
            }
            tabla.appendChild(fila);
        });
    })
    .catch(error => console.error('Error fetching data:', error));