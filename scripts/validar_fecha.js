// Obtener la fecha actual en formato adecuado para datetime-local
var fechaActual = new Date().toISOString().slice(0, 16);
// Establecer el valor mínimo del campo de fecha a la fecha actual
document.getElementById("fecha").min = fechaActual;