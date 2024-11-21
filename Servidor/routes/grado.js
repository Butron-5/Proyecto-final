const express = require("express");
const router = express.Router();

const gradoService = require("../services/gradoService");

router.get("/", async function (req,res) {

    let msg,code;

    try{
        code = 200;
        msg = "Busqueda de información realizada de forma exitosa."
        const buscaGrado = await gradoService.getAllGrados();

        res.status(200).json({code,msg,buscaGrado});

    }catch(err){
        console.error(err.message);
        res.status(501).json({msg: "Error al obtener la información de los departamentos, revisa la consola."});
    }
    
});

module.exports = router;