const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getAllProfesores() {

    let sql = "SELECT * FROM profesor"

    const rows = await db.query(sql);
    const data = helper.emptyOrRows(rows);

    return data
}

async function getProfesorByInfo() {
    
    //let sql = "SELECT * FROM profesor, departamento 
                //WHERE nombre= " +nombre+ " AND apellido1= " +apellido1+ " AND sexo= " +sexo+ "AND profesor.id_departamento = departamento.id"

    let sql = "SELECT * FROM profesor, departamento WHERE  profesor.id_departamento = departamento.id"
    
    if (nombre!=undefined){
        sql+="nombre=  " + nombre+ " AND";
    }
    if(apellido1!=undefined){
        sql+="apellido1= " +apellido1+ " AND ";
    }
    if(sexo!=undefined){
        sql+="sexo= " +sexo+ "AND";
    }

        sql+= "profesor.id_departamento = departamento.id";
    
    const rows = await db.query(sql);
    const data = helper.emptyOrRows(rows);

    return data
}

async function creaNuevoProfesor(profesor) {
    
    let sql = "INSERT INTO `profesor` (`nif`, `nombre`, `apellido1`, `apellido2`, `ciudad`, `direccion`,`telefono`, `fecha_nacimiento`, `sexo`,`id_departamento`) VALUES (";

    sql += "'"+profesor.nif+"','"+profesor.nombre+"','"+profesor.apellido1+"','"+profesor.apellido2+"','"+profesor.ciudad+"','"+profesor.direccion+"','"+profesor.telefono+"','"+profesor.fecha_nacimiento+"','"+profesor.sexo+"','"+profesor.id_departamento+"');";

    const rows = await db.query(sql);
    const data = helper.emptyOrRows(rows);

    return data
}

async function exterminaProfesores(id) {

    let sql = "DELETE FROM profesores WHERE id= '" + id + "';"

    const rows = await db.query(sql);
    const data = helper.emptyOrRows(rows);

    return data    
}
module.exports ={
    getAllProfesores,
    getProfesorByInfo,
    creaNuevoProfesor,
    exterminaProfesores
}