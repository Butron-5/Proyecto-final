const db = require('./db');
const helper = require('../helper');
const config = require('../config');


async function getAllDepartamentos() {

    let sql = "SELECT * FROM departamento"

    const rows = await db.query(sql);
    const data = helper.emptyOrRows(rows);

    return data
    
}

module.exports = {
    getAllDepartamentos
}