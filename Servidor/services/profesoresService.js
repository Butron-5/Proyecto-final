const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getAllProfesores() {

   let sql = "SELECT profesor.nif, profesor.nombre, profesor.apellido1, profesor.apellido2, profesor.ciudad, profesor.sexo, departamento.nombre AS Departamento"
    sql+= " FROM profesor INNER JOIN departamento ON profesor.id_departamento = departamento.id WHERE 1=1"

    const rows = await db.query(sql);
    const data = helper.emptyOrRows(rows);

    return data
}

async function getOneProfesor(id) {
    
    let sql = "SELECT * FROM profesor WHERE id= " +id+ ";"

    const rows = await db.query(sql);
    const data = helper.emptyOrRows(rows);

    return data
}
async function getProfesorByInfo(profesor) {
    

    let sql = "SELECT profesor.nif, profesor.nombre, profesor.apellido1, profesor.apellido2, profesor.ciudad, profesor.sexo, departamento.nombre AS Departamento"
    sql+= " FROM profesor INNER JOIN departamento ON profesor.id_departamento = departamento.id WHERE 1=1"
   
    if (profesor.nombre) {
        sql += " AND profesor.nombre = '" + profesor.nombre + "'";
    }
    if (profesor.apellido1) {
        sql += " AND profesor.apellido1 = '" + profesor.apellido1 + "'";
    }
    if (profesor.sexo) {
        sql += " AND profesor.sexo = '" + profesor.sexo + "'";
    }
  
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
    getOneProfesor,
    getProfesorByInfo,
    creaNuevoProfesor,
    exterminaProfesores
}
