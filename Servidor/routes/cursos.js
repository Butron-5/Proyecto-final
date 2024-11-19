const express = require("express");
const router = express.Router();

const cursosService = require("../services/cursosService");

router.get("/",async function (req,res) {
    
    let msg,code;

    const {id} = req.query;
    
    const gradoId = id;
   
        try{
            code= 200;
            msg = "EL grado con el id " +id+ " tiene asignaturas"
            const buscaAsignaturasPorGrado = await cursosService.buscaAsignaturasPorGrado(gradoId);
            if (buscaAsignaturasPorGrado.length == 0) {
                return res.status(401).json({ msg: "Este grado no tiene ninguna asignatura" });
            }
            console.debug(buscaAsignaturasPorGrado);
            res.status(200).json({code,msg,buscaAsignaturasPorGrado});

        }catch(err){
            console.error(err.message);
            res.status(501).json({msg: "Error al obtener la información sobre las asignaturas del grado, revisa la consola."});
        }
    
});

module.exports = router;