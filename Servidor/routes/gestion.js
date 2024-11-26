const express = require("express");
const router = express.Router();

const gestionService = require("../services/gestionService");

router.get("/buscar",async function (req,res) {
    
    let msg,code;

    const {id} = req.query;
    
    const gradoId = id;
   
        try{
            code= 200;
            msg = "EL grado con el id " +id+ " tiene asignaturas"
            const buscaParaInscripcion = await gestionService.buscaAsignaturasPorGradoOpcionDos(gradoId);
            if (buscaParaInscripcion.length == 0) {
                return res.status(401).json({ msg: "Este grado no tiene ninguna asignatura" });
            }
            res.status(200).json({code,msg,buscaParaInscripcion});

        }catch(err){
            console.error(err.message);
            res.status(501).json({msg: "Error al obtener la información sobre las asignaturas del grado, revisa la consola."});
        }
    
});

module.exports = router;