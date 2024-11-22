import { urlGrado,rellenarDesplegable,urlCursos,limpiarBody,rellenarTabla } from "./utilidades.js";

function buscarGrado(){
    
    fetch(urlGrado, {method:'GET'}).then(

            response => {
            console.log(response);
            return response.json();
            
        }).then(
            data=> {
                console.log(data);
                const arrayGrado = data.buscaGrado;
                rellenarDesplegable(arrayGrado,"optionGrados");
               
        }).catch(error => {
            console.error("Error en catch: " +error.message);
            errorElement.textContent = "Error fetching data: " + error.message;
        })
}; 

window.onload = buscarGrado();

function buscaCurso(event){
    
        if (event) event.preventDefault();

        const id = document.getElementById("optionGrados").value.trim();
          
        fetch(urlCursos+"?id="+id, {method:'GET'}).then(
        
            response => {
            return response.json();
               
        }).then(
            data=> {
            console.log( "curso " +data);
            const arrayCursos = data.buscaAsignaturasPorGrado;
            limpiarBody("cursos")
            rellenarTabla(arrayCursos,"cursos");
        })
    }

    window.buscaCurso = buscaCurso;