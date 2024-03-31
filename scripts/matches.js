$(document).ready(function() {
    $.getJSON('../matches.json', function(data) {
        $('#titulo-partido').text(data.titulo_partido);
        $('#lugar').text(data.lugar);
        $('#fecha-y-hora').text(data.fecha_y_hora);
    });
});