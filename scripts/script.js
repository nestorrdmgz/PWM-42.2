document.addEventListener('DOMContentLoaded', async function() {
    await cargarEstructura();
    // Dado que cargarEstructura es async, ahora puedes asegurarte de que todo ha cargado
    cargarContenidoDinamico();
});

async function cargarEstructura() {
    let appDiv = document.getElementById('app');

    // Cargar header
    let headerTemplate = await cargarTemplate('../templates/header.html');
    appDiv.appendChild(headerTemplate);

    // Cargar footer
    let footerTemplate = await cargarTemplate('../templates/footer.html');
    appDiv.appendChild(footerTemplate);
}

async function cargarTemplate(url) {
    let response = await fetch(url);
    let text = await response.text();

    let template = document.createElement('template');
    template.innerHTML = text;
    return document.importNode(template.content, true);
}

function cargarContenidoDinamico() {
    // Ahora esta función no recibe mainContent, ya que buscará en el DOM actualizado
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
