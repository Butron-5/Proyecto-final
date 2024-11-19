const express = require("express");
const router = express.Router();

const alumnosService = require("../services/alumnosService");

router.get("/", async function (req,res) {
    
    let code,msg;
    const {id,nif,nombre} = req.query
    
    if(id == undefined && nif == undefined && nombre == undefined){
        res.status(401).json({msg: "Introduzca los parametros de busqueda correctamente"})
    }else{

        let alumno = {
            id: id,
            nif: nif,
            nombre: nombre
        }
        
        try{
            code = 200;
            msg = "Información sobre el alumno obtenida correctamente"
            const buscaAlumno = await alumnosService.getAlumnoInfo(alumno);
            
            res.status(200).json({code,msg,buscaAlumno});

        }catch(err){
            console.error(err.message);
            res.status(501).json({msg: "Error al obtener la información sobre el alumno que quería, revisa la consola."});
        }
    }
});
module.exports = router;