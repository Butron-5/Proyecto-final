const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function buscaAsignaturasPorGradoOpcionDos(gradoId) {
    
    let sql = "SELECT asignatura.id, asignatura.nombre, asignatura.creditos, asignatura.curso ";
    sql += "FROM grado ";
    sql += "INNER JOIN asignatura ON grado.id = asignatura.id_grado ";
    sql += "WHERE grado.id = ?";
    
    const rows = await db.query(sql,[gradoId]);
    const data = helper.emptyOrRows(rows);

    return data
}
module.exports ={
    buscaAsignaturasPorGradoOpcionDos
}