const userId = localStorage.getItem('userId');

if (userId) {
    fetch(`http://localhost:3000/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            const userNameElement = document.getElementById('followers-count');
            userNameElement.innerText = `Nombre: ${user.followers}`;
        })
        .catch(error => {
            console.error('Error al obtener el usuario:', error);
            alert('Hubo un error al obtener el usuario. Por favor, inténtalo de nuevo.');
        });
} else {
    alert('No se ha iniciado sesión. Por favor, inicia sesión primero.');
    // Redirigir a la página de inicio de sesión
    window.location.href = 'inicio-sesion.html';
}