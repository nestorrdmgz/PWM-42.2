function convertirAUsuario(button) {
    button.classList.remove('anadirse-button');
    button.classList.add('boton-usuario');
    button.innerHTML = `
            <div class="imagen-container">
                <img class="imagen" src="../images/user-icon.jpg" alt="Foto de perfil">
                <div class="linea"></div>
            </div>
            <p class="texto">Lorem ipsum</p>`;
}