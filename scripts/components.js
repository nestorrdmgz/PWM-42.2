// Función para cargar el botón de añadir partido
function loadAddMatch() {
    fetch('../components/add_match_button.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('add_match').innerHTML = html;
        })
        .catch(error => console.error('Error cargando el add match:', error));
}
// Función para cargar el botón de filtro
function loadFilterButton() {
    fetch('../components/filter_button.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('filter_button').innerHTML = html;
            initializeFilterButton();
        })
        .catch(error => console.error('Error cargando el filter button:', error));
}
function initializeFilterButton() {
    var button = document.getElementById("filter-button");
    var container = document.getElementById("filter-container");
    var input = document.querySelectorAll("input");
    button.onclick = function (e) {
        e.stopPropagation();
        if (container.classList.contains("filters--active")) {
            container.classList.remove("filters--active");
        } else {
            container.classList.add("filters--active");
        }
    };
    container.onclick = function (e) {
        e.stopPropagation();
    };
    window.onclick = function () {
        container.classList.remove("filters--active");
    };
    for (var i = 0; i < input.length; i++) {
        var currentInput = input[i];
        currentInput.onclick = function () {
            var isChecked = false;
            for (var j = 0; j < input.length; j++) {
                if (input[j].checked) {
                    isChecked = true;
                    break;
                }
            }
            if (isChecked) {
                button.classList.add("button--highlight");
            } else {
                button.classList.remove("button--highlight");
            }
        };
    }
}
// Función para convertir los botones al cargar el detalle de los partidos
function convertirBotones(parentElement) {
    const buttons = parentElement.querySelectorAll('.anadirse-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            button.classList.remove('anadirse-button');
            button.classList.add('boton-usuario');
            button.innerHTML = `
                <div class="imagen-container">
                    <img class="imagen" src="../images/user-icon.jpg" alt="Foto de perfil">
                    <div class="linea"></div>
                </div>
                <p class="texto">Lorem ipsum</p>`;
        });
    });
}

function loadImage_profile() {
    fetch('../components/image_profile.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('image-container').innerHTML = html;
        })
        .catch(error => console.error('Error cargando el container:', error));
}

function loadInfo_account() {
    fetch('../components/info_account.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('info_account-container').innerHTML = html;
        })
        .catch(error => console.error('Error cargando el container:', error));
}

function loadPersonal_info() {
    fetch('../components/personal_info.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('personal_info-container').innerHTML = html;
        })
        .catch(error => console.error('Error cargando el container:', error));
}