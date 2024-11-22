const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getAlumnoInfo(alumno) {
    
    let sql = "SELECT alumno.id, nif, alumno.nombre, alumno.apellido1, alumno.apellido2, alumno.ciudad, alumno.sexo FROM alumno WHERE";
    
    if(alumno.id){
        sql += " alumno.id = '" + alumno.id + "'"; 
        sql += " OR alumno.nif = '" + alumno.id + "'";
        
    }else{
        sql+= " alumno.nombre LIKE '%" + alumno.nombre + "%'";
       
    }
        
    

    const rows = await db.query(sql);
    const data = helper.emptyOrRows(rows);

    return data
}

async function creaNuevoAlumno(alumno) {
    
    let sql = "INSERT INTO `alumno` (`nif`, `nombre`, `apellido1`, `apellido2`, `ciudad`, `direccion`,`telefono`, `fecha_nacimiento`, `sexo`) VALUES (";

    sql += "'"+alumno.nif+"','"+alumno.nombre+"','"+alumno.apellido1+"','"+alumno.apellido2+"','"+alumno.ciudad+"','"+alumno.direccion+"','"+alumno.telefono+"','"+alumno.fecha_nacimiento+"','"+alumno.sexo+"');";

    const rows = await db.query(sql);
    const data = helper.emptyOrRows(rows);

    return data
}

async function erradicaAlumnos(id) {

    let sql = "DELETE FROM alumno WHERE id= '" + id + "';"

    const rows = await db.query(sql);
    const data = helper.emptyOrRows(rows);

    return data    
}
module.exports = {
    getAlumnoInfo,
    creaNuevoAlumno,
    erradicaAlumnos
}