const express = require("express");
const router = express.Router();

const matriculaService = require("../services/matriculaService");

router.post("/",async function (req,res) {
    let code,msg;

    const{id_alumno,id_asignatura,id_curso_escolar} = req.body;

    if(!id_alumno ||!id_asignatura||!id_curso_escolar){
       return res.status(401).json({msg:"Los datos introducidos estan incompletos o son icorrectos para la matrícula, por favor introducelos de forma correcta."})
    }else{

        let nuevo = {
            id_alumno:id_alumno,
            id_asignatura:id_asignatura,
            id_curso_escolar:id_curso_escolar
         }
        try{ console.debug("entro");
        code=200;
        msg="Has realizado la matriculación de forma correcta."
        const nuevoEnLaUni = await matriculaService.nuevoEnLaUni(nuevo);
        const nuevoAlumno = await matriculaService.getOne(nuevoEnLaUni.insertId);
        res.status(200).json({code,msg,nuevoAlumno});

    }catch(err){
        console.error(err.message);
        res.status(501).json({msg: "Error al matricular, revisa la consola."});
    }
    }
})

module.exports = router;