

function generarTabla(){

    var numFilas = document.getElementById("numFilas").value;

    var numColum = document.getElementById("numColum").value;

    var contenedorTabla = document.getElementById("con-tabla");


    contenedorTabla.innerHTML ="";
    var tabla = "<table>";

    for (var i = 1; i <= numFilas; i++){
        tabla += "<tr>"
        for (var c = 1; c <= numColum; c++){
            tabla += "<td>XD</td>";
        }
        tabla += "</tr>";
    }
    tabla += "</table>";
    contenedorTabla.innerHTML = tabla;



}