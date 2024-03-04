document.addEventListener('DOMContentLoaded', async function() {
    await cargarEstructura('match_details');
    cargarContenidoDinamico();
});

async function cargarEstructura(id) {
    let appDiv = document.getElementById(id);

    if (!appDiv) {
        console.error('No se encontró el elemento con ID:', id);
        return;
    }

    // Cargar estructura estática según el ID proporcionado
    let templateURL;
    switch (id) {
        case 'header':
            templateURL = 'components/match_details.html';
            break;
        default:
            console.error('ID de elemento desconocido:', id);
            return;
    }

    appDiv.appendChild(await cargarTemplate(templateURL));
}

async function cargarTemplate(url) {
    let response = await fetch(url);
    let text = await response.text();

    let template = document.createElement('template');
    template.innerHTML = text;
    return document.importNode(template.content, true);
}

function cargarContenidoDinamico() {
    // Esta función sigue igual, ya que no depende del ID específico de un elemento
    fetch('data/content.json')
        .then(response => response.json())
        .then(data => {
            let dynamicContentSection = document.querySelector('#dynamicContent');
            if (!dynamicContentSection) {
                console.error('No se encontró #dynamicContent en el DOM');
                return;
            }
            data.forEach(item => {
                let article = document.createElement('article');
                article.innerHTML = `<h2>${item.title}</h2><p>${item.description}</p>`;
                dynamicContentSection.appendChild(article);
            });
        })
        .catch(error => console.error('Error:', error));
}
