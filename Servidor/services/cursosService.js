const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function buscaAsignaturasPorGrado() {
    
    let sql = "SELECT  asignatura.id, asignatura.nombre, asignatura.creditos, asignatura.curso, asignatura.cuatrimestre, profesor.nombre" 
    sql+= "FROM grado, asignatura, profesor"
    sql+= "WHERE grado.id = asignatura.id_grado AND asignatura.id_profesor = profesor.id"

    const rows = await db.query(sql);
    const data = helper.emptyOrRows(rows);

    return data
}

async function creaNuevoGrado(grado) {
    
    let sql = "INSERT INTO `grado` (`nombre` VALUES (";

    sql += "'"+grado.nombre+"');";

    const rows = await db.query(sql);
    const data = helper.emptyOrRows(rows);

    return data
}

async function unGradoMenos(id) {

    let sql = "DELETE FROM grado WHERE id= '" + id + "';"

    const rows = await db.query(sql);
    const data = helper.emptyOrRows(rows);

    return data    
}
module.exports ={
    buscaAsignaturasPorGrado,
    creaNuevoGrado,
    unGradoMenos
}