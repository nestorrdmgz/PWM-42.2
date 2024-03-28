document.addEventListener('DOMContentLoaded', function () {
    // Obtiene el nombre de usuario de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const usuarioBuscado = urlParams.get('usuario');

    // Realiza una petición AJAX para cargar los datos de los usuarios desde el JSON
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Encuentra el usuario con el nombre proporcionado
            const usuarioEncontrado = data.usuarios.find(usuario =>
                usuario.nombre === usuarioBuscado || usuario.apellido === usuarioBuscado);

            if (usuarioEncontrado) {
                // Actualiza los elementos HTML en la página con los datos del usuario encontrado
                document.getElementById('nombre').innerText += usuarioEncontrado.nombre;
                document.getElementById('apellido').innerText += usuarioEncontrado.apellido;
                document.getElementById('email').innerText += usuarioEncontrado.email;
                document.getElementById('edad').innerText += usuarioEncontrado.edad;
                document.getElementById('altura').innerText += usuarioEncontrado.altura;
                document.getElementById('isla').innerText += usuarioEncontrado.isla;
                document.getElementById('municipio').innerText += usuarioEncontrado.municipio;
                document.getElementById('categoria').innerText += usuarioEncontrado.categoria;
            } else {
                // Si no se encuentra el usuario, muestra un mensaje de error
                console.error('Usuario no encontrado');
            }
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
});
