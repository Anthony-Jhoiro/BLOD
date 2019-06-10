var mysql = require('mysql');

var bdd = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "chocolat78",
    database: 'blod_db'
});

module.export = bdd;