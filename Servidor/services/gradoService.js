const db = require('./db');
const helper = require('../helper');
const config = require('../config');


async function getAllGrados() {

    let sql = "SELECT * FROM grado"

    const rows = await db.query(sql);
    const data = helper.emptyOrRows(rows);

    return data
    
}

module.exports = {
    getAllGrados
}