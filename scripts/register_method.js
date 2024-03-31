document.querySelector('.register-page-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.querySelector('.register-page-nameinput').value;
    const apellido = document.querySelector('.register-page-surnameinput').value;
    const email = document.querySelector('.register-page-mailinput').value;
    const password = document.querySelector('.register-page-passwdinput').value;
    const altura = parseInt(document.querySelector('.register-page-heightinput').value);
    const isla = document.querySelector('.register-page-islandinput').value;
    const municipio = document.querySelector('.register-page-placedinput').value;

    // Cargar el archivo JSON de usuarios
    fetch('../data/users.json')
        .then(response => response.json())
        .then(data => {
            const usuarios = data.usuarios;

            // Obtener el último ID registrado
            const ultimoID = usuarios[usuarios.length - 1].id;

            // Construir el nuevo usuario
            const nuevoUsuario = {
                "id": ultimoID + 1,
                "nombre": nombre,
                "apellido": apellido,
                "email": email,
                "password": password,
                "altura": altura,
                "isla": isla,
                "municipio": municipio,
                "partidos": 0,
                "foto": null
            };

            // Agregar el nuevo usuario al JSON existente
            usuarios.push(nuevoUsuario);

            // Convertir el JSON actualizado a texto
            const jsonActualizado = JSON.stringify(data);

            // Enviar el JSON actualizado al servidor (en este caso, simulado)
            fetch('guardar_usuarios.php', {
                method: 'POST',
                body: jsonActualizado
            })
                .then(response => {
                    if (response.ok) {
                        // Redirigir al usuario a la página de inicio
                        window.location.href = "../homepage/homepage.html";
                    } else {
                        console.error('Error al guardar los usuarios');
                    }
                })
                .catch(error => console.error('Error:', error));
        })
        .catch(error => console.error('Error:', error));
});