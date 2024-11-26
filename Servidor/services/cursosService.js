const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function buscaAsignaturasPorGrado(gradoId) {
    
    let sql = "SELECT asignatura.id, asignatura.nombre, asignatura.creditos, asignatura.curso, asignatura.cuatrimestre, profesor.nombre AS profesor ";
    sql += "FROM grado ";
    sql += "LEFT JOIN asignatura ON grado.id = asignatura.id_grado ";
    sql += "LEFT JOIN profesor ON asignatura.id_profesor = profesor.id ";
    sql += "WHERE grado.id = ?";
    
    const rows = await db.query(sql,[gradoId]);
    const data = helper.emptyOrRows(rows);

    return data
}

module.exports ={
    buscaAsignaturasPorGrado
}