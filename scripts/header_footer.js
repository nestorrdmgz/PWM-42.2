/*
// Función para cargar el header
function loadHeader() {
    fetch('../templates/header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-container').innerHTML = html;
        })
        .catch(error => console.error('Error cargando el header:', error));
}
*/
// Función para cargar el header
function loadHeader() {
    fetch('../templates/header_with_login.html')
        .then(response => response.text())
        .then(html => {
            // Crear un elemento div para contener el HTML cargado
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            // Extraer y ejecutar los scripts dentro del HTML cargado
            const scripts = tempDiv.getElementsByTagName('script');
            for (let i = 0; i < scripts.length; i++) {
                const script = document.createElement('script');
                script.textContent = scripts[i].textContent;
                document.body.appendChild(script);
            }

            // Insertar el HTML cargado en el contenedor deseado
            document.getElementById('header-container').appendChild(tempDiv);
        })
        .catch(error => console.error('Error cargando el header:', error));
}

// Función para cargar el header
function loadLoggedHeader() {
    fetch('../templates/header_with_login.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-container').innerHTML = html;
        })
        .catch(error => console.error('Error cargando el header:', error));
}
// Función para cargar el footer
function loadFooter() {
    fetch('../templates/footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer-container').innerHTML = html;
        })
        .catch(error => console.error('Error cargando el footer:', error));
}

