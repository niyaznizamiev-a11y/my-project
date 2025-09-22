const mysql = require('mysql');
const conn = mysql.createConnection({
    host: "localhost",
    user: "sqluser",
    password: "1234",
    database: "shelf"
});
conn.connect( err => {
    if (err){
        console.log(err);
        return err;
    }
    else {
        console.log('Database ------OK');
    }
})