document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const userData = {
        email: formData.get('email'),
        password: formData.get('password')
    };

    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.email === userData.email && user.password === userData.password);
            if (user) {
                console.log('Inicio de sesión exitoso:', user);
                alert('Inicio de sesión exitoso!');
                // Guardar el ID de usuario en localStorage
                localStorage.setItem('userId', user.userId);
                // Redirigir a otra página después del inicio de sesión
                window.location.href = '../homepage/homepage.html';
            } else {
                throw new Error('Email o contraseña incorrectos');
            }
        })
        .catch(error => {
            console.error('Error al iniciar sesión:', error);
            alert(error.message || 'Hubo un error al iniciar sesión. Por favor, inténtalo de nuevo.');
        });
});