const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function buscaAsignaturas(alumnoId) {
    
    let sql= "SELECT DISTINCT asignatura.id, asignatura.nombre, asignatura.creditos, asignatura.curso, asignatura.cuatrimestre " 
    
    sql+= " FROM asignatura "
    
    sql+= " INNER JOIN alumno_se_matricula_asignatura  ON alumno_se_matricula_asignatura.id_asignatura = asignatura.id "
    
    sql+= " WHERE alumno_se_matricula_asignatura.id_alumno= ? " 
    
    const rows = await db.query(sql,[alumnoId]);
    const data = helper.emptyOrRows(rows);

    return data
}

module.exports = {
    buscaAsignaturas
}