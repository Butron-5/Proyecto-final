const express = require("express");
const router = express.Router();

const asignaturaService = require("../services/asignaturaService");

router.get("/",async function (req,res) {
    
    let msg,code;

    const {id} = req.query;
    /*Corregir sql para que si el id que meto no tiene asignaturas me de el mensaje de abajo*/
    if(id==undefined){
        res.status(401).json({msg:"No está matriculado en ninguna asignatura"});
    }else{

        try{console.debug("entro");
            code= 200;
            msg = "Asignaturas del alumno con id " +id+ " encontradas"
            const buscaAsignaturas = await asignaturaService.buscaAsignaturas();
            console.debug(buscaAsignaturas);
            res.status(200).json({code,msg,buscaAsignaturas});

        }catch(err){
            console.error(err.message);
            res.status(501).json({msg: "Error al obtener la información sobre las asignaturas del alumno, revisa la consola."});
        }
    }
});

module.exports = router;
