function loginUser() {
    var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;

    // Fetch de los datos de usuarios
    fetch('../data/users.json')
        .then(response => response.json())
        .then(data => {
            for (var i = 0; i < data.usuarios.length; i++) {
                var user = data.usuarios[i];
                if (username === user.email && password === user.password) {
                    document.getElementById('user-logged').innerText = user.nombre;
                    document.getElementById('data_username').innerText = user.email;
                    document.getElementById('data_password').innerText = user.password;
                    document.getElementById('data_name').innerText = user.nombre;
                    document.getElementById('data_email').innerText = user.email;
                    document.getElementById('data_phone').innerText = user.telefono;
                    document.querySelector('.container-users').classList.remove('hidden');
                    document.querySelector('.container').classList.add('hidden');
                    return false; // Para evitar que se envíe el formulario
                }
            }
            alert('Usuario o contraseña incorrectos');
        })
        .catch(error => {
            console.error('Error al obtener los datos de usuarios:', error);
        });

    return false; // Para evitar que se envíe el formulario
}