// Función para cargar el header
function loadHeader() {
    fetch('templates/header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-container').innerHTML = html;
        })
        .catch(error => console.error('Error cargando el header:', error));
}
// Función para cargar el footer
function loadFooter() {
    fetch('templates/footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer-container').innerHTML = html;
        })
        .catch(error => console.error('Error cargando el footer:', error));
}

function loadImage_profile() {
    fetch('components/image_profile.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('image-container').innerHTML = html;
        })
        .catch(error => console.error('Error cargando el container:', error));
}

function loadInfo_account() {
    fetch('components/info_account.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('info_account-container').innerHTML = html;
        })
        .catch(error => console.error('Error cargando el container:', error));
}

function loadPersonal_info() {
    fetch('components/personal_info.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('personal_info-container').innerHTML = html;
        })
        .catch(error => console.error('Error cargando el container:', error));
}

