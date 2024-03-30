document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const userData = {
        name: formData.get('name'),
        surname: formData.get('surname'),
        email: formData.get('email'),
        password: formData.get('password'),
        island: formData.get('island'),
        municipality: formData.get('municipality'),
        height: formData.get('height'),
        position: formData.get('position'),
        favourite_courts: [],
        followers: 0,
        following: 0,
        matches_played: 0
    };

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Nuevo usuario registrado:', data);
            alert('Nuevo usuario registrado exitosamente!');
            localStorage.setItem('userId', data.id);
            window.location.href = '../homepage/homepage.html';
        })
        .catch(error => {
            console.error('Error al registrar nuevo usuario:', error);
            alert('Hubo un error al registrar el usuario. Por favor, inténtalo de nuevo.');
        });
});