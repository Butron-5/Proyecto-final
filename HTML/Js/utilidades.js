const servidor = "http://localhost:3000/";

const urlProfesor = servidor + "profesores";
const urlAlumno = servidor + "alumnos";
const urlAsignatura = servidor + "asignatura";
const urlCursos = servidor + "cursos";
const urlDepartamento = servidor + "departamento";
const urlGrado = servidor + "grado";
const urlGestion = servidor + "gestion";

function rellenarTabla(data,selectId){//data es un array de datos que hay que pintar

    const table = document.getElementById(selectId);

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

function vidaATablaOculta(data,selectId){//data es un array de datos que hay que pintar

    const table = document.getElementById(selectId);

    table.innerHTML = '';

    let out = '';
    for(let item of data){
        out += '<tr onClick="pulsaParaVer('+ item.id + ')">'; 
    
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

/**
 * Esta funcion rellena un desplegable con el id enviado.
 * Es necesario que los elementos del array @data tengan los atributos id y nombre.
 * @param {Array} data Array con los datos json, con atributo id y nombre
 * @param {string} selectId identicador del select a rellenar.
 */
function rellenarDesplegable(data,selectId){//data es un array de datos que hay que pintar

    const lista = document.getElementById(selectId);

    lista.innerHTML = '';

    let out = '';
    out += '<option value= "0"> Selecciona </option>';
    for(let item of data){
        out += '<option value="'+ item.id + '">'; 

            out += ' ' + item.nombre + ' ';
       /* out += '<td>' + item.id + '</td>';
        out += '<td>' + item.nombre + '</td>';
        out += '<td>' + item.apellido1 + '</td>';
        out += '<td>' + item.apellido2 + '</td>';
        out += '<td>' + item.comision + '</td>';*/

        out += '</option>'
    }


    lista.innerHTML = out;
};

function limpiarBody(selectId){
    document.getElementById(selectId).innerHTML="";
  }

  function rellenarTablaConCheckbox(data,selectId){//data es un array de datos que hay que pintar

    const table = document.getElementById(selectId);

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
        out+= ' <input type="checkbox">'
        out += '</tr>'
    }

    table.innerHTML = out;
};
export{urlDepartamento,rellenarDesplegable,urlGrado,urlProfesor,rellenarTabla,urlAlumno,limpiarBody,urlAsignatura,urlCursos,vidaATablaOculta,rellenarTablaConCheckbox,urlGestion};