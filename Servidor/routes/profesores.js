const express = require("express");
const router = express.Router();

const profesoresService = require("../services/profesoresService");

router.get("/",async function (req,res) {

    let msg,code;

    try{
        code = 200
        msg = "Todos los profesores buscados correctamente"
        const todosLosProfesores = await profesoresService.getAllProfesores();

        res.status(200).json({code,msg,todosLosProfesores});

    }catch(err){
        console.error(err.message);
        res.status(501).json({msg: "Error al obtener la lista de profesores, revisa la consola."});
    }
    
});

router.get("/:id", async function (req,res) {
    
    let code,msg;

    const id = req.params.id;
    try{
        code = 200
        msg = "El porfesor con el id " +id+ " encontrado correctamente"
        const todosLosProfesores = await profesoresService.getOneProfesor(id);

        res.status(200).json({code,msg,todosLosProfesores});

    }catch(err){
        console.error(err.message);
        res.status(501).json({msg: "Error al obtener la lista de profesores, revisa la consola."});
    }
});
router.get("/buscar/profesor",async function (req,res) {

    let msg,code;

    const {nombre,apellido1,sexo} = req.query;

    if(nombre==undefined && apellido1==undefined && sexo==undefined){
        
        res.status(401).json({msg: "Introduzca corretamete los parametros de la busqueda"})
    }else{

        let profe={
            
            nombre: nombre,
            apellido1: apellido1,
            sexo: sexo

        }

        try{
            code = 200;
            msg = "Información sobre el profesor obtenida de forma correcta"
            const profesor = await profesoresService.getProfesorByInfo(profe);
            
            res.status(200).json({code,msg,profesor})

        }catch(err){
            console.error(err.message);
            res.status(501).json({msg: "Error al obtener la información sobre el profesor que quería, revisa la consola."});
        }
    }
});
module.exports = router;