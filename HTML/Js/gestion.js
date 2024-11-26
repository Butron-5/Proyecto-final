import { urlGrado,rellenarDesplegable,urlGestion,rellenarTablaConCheckbox} from "./utilidades.js";

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

function alDarleSalenAsignaturas(event){
    
    if (event) event.preventDefault();

    const id = document.getElementById("optionGrados").value.trim();
      
    fetch(urlGestion+"/buscar" + "?id="+id, {method:'GET'}).then(
    
        response => {
            console.log(response);
        return response.json();
           
    }).then(
        data=> {
        console.log( data);
        const arrayCursos = data.buscaParaInscripcion;
        rellenarTablaConCheckbox(arrayCursos,"cursos");
    })
};

window.alDarleSalenAsignaturas = alDarleSalenAsignaturas;