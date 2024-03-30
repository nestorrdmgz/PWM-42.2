// Obtener el userId del localStorage
const userId = localStorage.getItem('userId');

// Endpoint de los usuarios
const usersEndpoint = 'http://localhost:3000/users';

// Realizar una solicitud GET para obtener la información del usuario
fetch(usersEndpoint)
    .then(response => response.json())
    .then(users => {
        // Encontrar el usuario con el userId correspondiente
        const user = users.find(user => user.userId === userId);

        if (user) {
            // Extraer los datos del usuario
            const followers = user.followers;
            const following = user.following;
            const matchesPlayed = user.matches_played;

            // Mostrar los datos en la interfaz de usuario
            document.getElementById('followers').textContent = followers;
            document.getElementById('following').textContent = following;
            document.getElementById('matches_played').textContent = matchesPlayed;
        } else {
            console.error('No se encontró el usuario con el ID especificado');
        }
    })
    .catch(error => console.error('Error al obtener la información del usuario:', error));
