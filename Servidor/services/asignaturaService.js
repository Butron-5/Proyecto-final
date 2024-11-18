const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function buscaAsignaturas() {
    
    let sql= "SELECT DISTINCT asignatura.id, asignatura.nombre, asignatura.creditos, asignatura.curso, asignatura.cuatrimestre " 
    sql+= " FROM asignatura "
    sql+= " INNER JOIN alumno_se_matricula_asignatura  ON alumno_se_matricula_asignatura.id_asignatura = asignatura.id "
    /*Hacer algo aqui para que si el id que introduzca por query no tiene asignatura me salte que no tiene*/
    sql+= " INNER JOIN alumno ON alumno.id = alumno_se_matricula_asignatura.id_alumno "

    const rows = await db.query(sql);
    const data = helper.emptyOrRows(rows);

    return data
}

module.exports = {
    buscaAsignaturas
}