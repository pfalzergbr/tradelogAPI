const Pool = require('pg').Pool;


const user = process.env.PSQL_USER;
const password = process.env.PSQL_PASSWORD;
const host = process.env.PSQL_HOST;
const port = process.env.PSQL_PORT;
const database = process.env.PSQL_DBNAME;

const pool = new Pool({
    user,
    password,
    host,
    port,
    database,
});

module.exports = pool;