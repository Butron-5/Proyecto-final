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
    
})
module.exports = router;