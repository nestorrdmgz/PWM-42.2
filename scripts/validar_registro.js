function validarFormulario(event) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var regex = /^(?=.*[A-Z].*[A-Z])(?=.*\d).{6,}$/;
    var dominio = email.split('@')[1];
    var dominiosTemporales = ['example.com', 'tempmail.com', 'mailinator.com', 'guerrillamail.com'];
    // Obtener la lista de usuarios del archivo JSON
    fetch('../data/users.json')
        .then(response => response.json())
        .then(data => {
            // Verificar si el correo electrónico ya está registrado
            var usuarios = data.usuarios;
            var correoExistente = usuarios.some(usuario => usuario.email === email);
            if (correoExistente) {
                alert('Este correo electrónico ya está registrado. Por favor, elija otro o inicie sesión.');
                return false; // Evitar que el formulario se envíe
            }
        })
        .catch(error => console.error('Error al leer el archivo JSON:', error));
    if (dominiosTemporales.includes(dominio)) {
        alert('No se permiten correos electrónicos temporales.');
        return false;
    }
    if (!regex.test(password)) {
        alert('La contraseña debe contener al menos tres letras mayúsculas y un número, y tener una longitud mínima de 6 caracteres');
        return false; // Evitar que el formulario se envíe
    }
    return true;
}