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
    if(profesor.departamento == 0){
        sql+="";
    }else{
        sql+= " AND profesor.id_departamento = '" + profesor.departamento + "'";
    }
 
    const rows = await db.query(sql);
    const data = helper.emptyOrRows(rows);

    return data
}


module.exports ={
    getAllProfesores,
    getOneProfesor,
    getProfesorByInfo
}
