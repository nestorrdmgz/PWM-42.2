// match_details_functions.js
function cargarDetallesPartido() {
    // Supongamos que fechaHoraDB es una variable que contiene la fecha y hora de la base de datos
    const fechaHoraDB = "2024-03-02, 12:30"; // Formato ISO 8601 (yyyy-mm-ddThh:mm)
    // Obtener el elemento de párrafo por su clase
    const pFechaHora = document.querySelectorAll(".fecha-y-hora-db");
    // Asignar el valor de fechaHoraDB al párrafo
    pFechaHora.forEach(p => {
        p.textContent = "Fecha: " + fechaHoraDB;
    });
}
