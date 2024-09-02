var mysql = require('mysql');

module.exports = function(){
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'portal_noticias'
    });
}