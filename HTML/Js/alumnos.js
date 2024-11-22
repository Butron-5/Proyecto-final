import {rellenarTabla,urlAlumno,limpiarBody,urlAsignatura } from "./utilidades.js";

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
        limpiarBody("buscaAlumno")
        rellenarTabla(arrayAlumnos,"buscaAlumno");
    })
}
    window.buscaAlumno = buscaAlumno;
    