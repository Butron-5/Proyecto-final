const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function buscaAsignaturas() {
    
    let sql= "SELECT asignatura.id, asignatura.nombre, asignatura.creditos, asignatura.curso, asignatura.cuatrimestre" 
    sql+= "FROM asignatura, alumno_se_matricula_asignatura,alumno"
    sql+= "WHERE alumno.id = alumno_se_matricula_asignatura.id_alumno"
    sql+= "AND alumno_se_matricula_asignatura.id_asignatura = asignatura.id"

    const rows = await db.query(sql);
    const data = helper.emptyOrRows(rows);

    return data
}

module.exports = {
    buscaAsignaturas
}