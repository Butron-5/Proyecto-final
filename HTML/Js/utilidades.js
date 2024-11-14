const servidor = "http://localhost:3000/";

function rellenarTabla(data){//data es un array de datos que hay que pintar

    const table = document.getElementById("resultados");

    table.innerHTML = '';

    let out = '';
    for(let item of data){
        out += '<tr>'; 

        for(let value of Object.values(item)){
            out += '<td>' + value + '</td>';
        }
       /* out += '<td>' + item.id + '</td>';
        out += '<td>' + item.nombre + '</td>';
        out += '<td>' + item.apellido1 + '</td>';
        out += '<td>' + item.apellido2 + '</td>';
        out += '<td>' + item.comision + '</td>';*/

        out += '</tr>'
    }

    table.innerHTML = out;
};