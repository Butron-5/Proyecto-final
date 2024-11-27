import { urlGrado,rellenarDesplegable,urlGestion,rellenarTablaConCheckbox,urlCursos} from "./utilidades.js";

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

function buscarAnyo(){
    
    fetch(urlCursos+"/busca", {method:'GET'}).then(

            response => {
            console.log(response);
            return response.json();
            
        }).then(
            data=> {
                console.log(data);
                const arrayCurso = data.buscaCurso;
                let datosCurso = [];
                for(let item of arrayCurso){
                    let unCurso = {};
                    unCurso.id = item.id;
                    unCurso.nombre = item.anyo_inicio + " - " + item.anyo_fin;
                    datosCurso.push(unCurso);
                }

                rellenarDesplegable(datosCurso,"anyo");
               
        }).catch(error => {
            console.error("Error en catch: " +error.message);
            errorElement.textContent = "Error fetching data: " + error.message;
        })
}; 

window.onload = buscarGrado(),buscarAnyo();

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
