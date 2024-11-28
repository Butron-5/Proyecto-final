const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function nuevoEnLaUni(nuevo) {
    
    let sql =  "INSERT INTO `alumno_se_matricula_asignatura` (`id_alumno`, `id_asignatura`, `id_curso_escolar`) VALUES (";
    sql+= "'"+nuevo.id_alumno+"','"+nuevo.id_asignatura+"','"+nuevo.id_curso_escolar+"');";
console.debug(sql);
    const rows = await db.query(sql);
    const data = helper.emptyOrRows(rows);

    return data;

}    
async function getOne(id_alumno) {

    let sql = "SELECT * FROM alumno_se_matricula_asignatura WHERE id_alumno=" +id_alumno+ ";"
    
    const rows = await db.query(sql);
    const data = helper.emptyOrRows(rows);

    return data
    
}

module.exports = {
    nuevoEnLaUni,
    getOne
}