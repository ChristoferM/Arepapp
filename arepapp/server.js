const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
var md5 = require('md5')
var db = require("./conexionDB.js")


const app = express();
const secret = 'mysecretkey';
app.use(bodyParser.json());

app.get('/', (req, res) => {
  db;
  res.send('Hola desde el servidor de Express!');
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = md5(req.body.password);
  let varificaUsuario ;
  findByEmail(username,password,(existe) => {
    console.log('¿Existe?, ',existe);
    varificaUsuario= existe;
    console.log('varificaUsuario: ',varificaUsuario);
    if (varificaUsuario === true) {
      console.log('Responde Token ');
      const token = jwt.sign({ username }, secret);
      // Se devuelve el token en formato JSON
      res.json({ token });
    } else {
      console.log('responde Error');
      res.status(401).json({"error":'Error en las credenciales'});
    }
  })
});

app.listen(3001, () => {
  console.log('Servidor de Express iniciado en el puerto 3001');
});


const findByEmail= (usuario, pass,callback)=>{
  var sql = "select * from user where email = ? and password = ? "
  var params = [usuario,pass]
  console.log(usuario,pass); 
  db.get(sql, params, function(err, row) {
      if (err) {
        console.log('Error en la peticion');
        callback(false)
      }else{
        if (row) {
          callback(true);
        } else {
          callback(false);
      }
    }
      
    });
}
// Conexión a base de datos SQLite3

const sqlite3 = require('sqlite3').verbose();

