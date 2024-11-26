import {rellenarTabla,urlAlumno,limpiarBody,urlAsignatura,vidaATablaOculta } from "./utilidades.js";

function buscaAlumno(event){
    
    if (event) event.preventDefault();

    const idNif = document.getElementById("dosValores").value.trim();
    const nombre = document.getElementById("nombre").value.trim();;
   
    let urlTodosLosDatos = urlAlumno+ "?idNif=" + idNif + "&nombre=" + nombre;
    
    fetch(urlTodosLosDatos, {method:'GET'}).then(
    
        response => {
        return response.json();
           
    }).then(
        data=> {
        const arrayAlumnos = data.buscaAlumno;
        limpiarBody("buscaAlumno");
        vidaATablaOculta(arrayAlumnos,"buscaAlumno");
    })
}
    window.buscaAlumno = buscaAlumno;

function pulsaParaVer(id){

 const tabalaNueva = document.getElementById("tablaAsignaturas");
  tabalaNueva.style.display = "block"; 

fetch(urlAsignatura + "?id=" + id, { method: 'GET' }).then(

        response => {
        console.log(response);
        return response.json();
        
    }).then(
        data => {
        console.log(data);
        const arrayAsignaturas = data.buscaAsignaturas; // Este dato viene del servidor.
       
        vidaATablaOculta(arrayAsignaturas, "rellenaNuevaTabla");
    })
}
window.pulsaParaVer = pulsaParaVer;