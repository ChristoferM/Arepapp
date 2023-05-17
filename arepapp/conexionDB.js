
var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')
const DBSOURCE = "src/db/students_db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message)
    throw err
  }else{
      console.log('Connected to the SQLite database.')
      db.run(`CREATE TABLE user (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name text, 
          email text UNIQUE, 
          password text, 
          CONSTRAINT email_unique UNIQUE (email)
          )`,
      (err) => {
          if (err) {
              // Table already created
              console.log(err);
          }else{
              // Table just created, creating some rows
              var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
              db.run(insert, ["admin","admin@students.com",md5("123456")])
              db.run(insert, ["user","user@students.com",md5("123456")])
          }
      });  
  }
});

module.exports = db