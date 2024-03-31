// Recuperar la ubicación seleccionada del localStorage
// var selectedUserId = localStorage.getItem('selectedUserId');

document.addEventListener('DOMContentLoaded', function () {
    // Obtener datos de usuarios y ubicaciones (canchas)
    Promise.all([
        fetch('../data/users.json').then(response => response.json()),
        fetch('../data/locations.json').then(response => response.json())
    ]).then(([userData, locationData]) => {

        const selectedUser = userData.usuarios.find(usuario => usuario.id === 1);

        const userId = selectedUser.id;
        const user = userData.usuarios.find(user => user.id === userId);
        const favoriteCourts = user.favoriteCourts;
        // Procesar datos de usuarios
        userData.usuarios.forEach(usuario => {
            // Actualizar contenido de image_profile
            if (usuario.id === 1) { // Supongamos que queremos cargar datos para el usuario con id 1
                document.querySelector('.foto-perfil').src = usuario.foto;
                document.querySelector('.nombre-usuario').textContent = usuario.nombre;
            }
            // Actualizar contenido de info_account
            if (usuario.id === selectedUser.id) {
                document.querySelector('.container-ul').innerHTML = `
                    <li><p>${usuario.seguidores}</p><p>Seguidores</p></li>
                    <li><p>${usuario.siguiendo}</p><p>Siguiendo</p></li>
                    <li><p>${usuario.partidos}</p><p>Partidos jugados</p></li>
                `;
            }
        });
        // Actualizar contenido de personal_info
        document.querySelector('.datos-personales ul').innerHTML = `
            <li class="nombre">Nombre: ${userData.usuarios[0].nombre}</li>
            <li class="altura">Altura: ${userData.usuarios[0].altura}</li>
            <li class="isla">Isla: ${userData.usuarios[0].isla}</li>
            <li class="categoria">Categoría: ${userData.usuarios[0].posicion}</li>
            <li class="posicion">Posición: ${userData.usuarios[0].posicion}</li>
            <li class="municipio">Municipio: ${userData.usuarios[0].municipio}</li>
        `;
        // Filtrar las ubicaciones (canchas) favoritas del usuario
        const favoriteLocations = locationData.locations.filter(location => favoriteCourts.includes(location.id));
        // Construir dinámicamente la lista de canchas favoritas en HTML
        const canchasFavoritasHTML = favoriteLocations.map(location => {
            return `
                <li>
                    <p>${location.name}</p>
                    <p class="estrella">⭐</p>
                </li>
            `;
        }).join('');

        // Insertar la lista de canchas favoritas en el HTML
        const canchasFavoritasContainer = document.querySelector('.canchas_favoritas');
        canchasFavoritasContainer.innerHTML = canchasFavoritasHTML;
    }).catch(error => {
        console.error('Error al obtener datos:', error);
    });
});