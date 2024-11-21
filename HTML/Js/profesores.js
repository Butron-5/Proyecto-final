import { urlDepartamento,rellenarDesplegable,urlProfesor,rellenarTabla, limpiarBody } from "./utilidades.js";

function buscarDepartamento(){
    
    fetch(urlDepartamento, {method:'GET'}).then(

             response => {
            console.log(response);
            return response.json();
            
        }).then(
            data=> {
                console.log(data);
                const arrayDepartamento = data.buscaDepartamento;
                rellenarDesplegable(arrayDepartamento,"departamento");
               
        }).catch(error => {
            console.error("Error en catch: " +error.message);
            errorElement.textContent = "Error fetching data: " + error.message;
        })
}; 

window.onload = buscarDepartamento(),cargaProfesores();

function cargaProfesores(){

    fetch(urlProfesor, {method:'GET'}).then(

        response => {
       console.log(response);
       return response.json();
       
   }).then(
       data=> {
           console.log(data);
           const arrayProfesores = data.todosLosProfesores;
           rellenarTabla(arrayProfesores,"todosLosProfesores");
          
   })
}; 
function buscaUno(event){

    if (event) event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido1 = document.getElementById("apellido1").value.trim();
    const sexo = document.getElementById("sexo").value.trim();
    let urlTodosLosDatos = urlProfesor+"/buscar/profesor" + "?nombre=" + nombre + "&apellido1=" + apellido1 + "&sexo=" + sexo;

    fetch(urlTodosLosDatos, {method:'GET'}).then(

        response => {
       console.log(response);
       return response.json();
       
   }).then(
       data=> {
           console.log(data);
           const arrayProfesores = data.profesor;
           limpiarBody("todosLosProfesores")
           rellenarTabla(arrayProfesores,"todosLosProfesores");
          
   })
}
window.buscaUno = buscaUno;