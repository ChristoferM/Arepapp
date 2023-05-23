import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import {userFindByCorreoAndPass} from '../api/usuario/usuarioPeticiones'

function Login (){
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasenna, setContrasenna] = useState('');
  const [confirmaciConcontrasenna, setConfirmaciConcontrasenna] = useState('');
  const [alerta, setAlerta] = useState(false);

  

  function loginUsuario(){
    console.log('INICIANDO SESION');
    userFindByCorreoAndPass(correo, contrasenna)
    .then(data => {
      if( Object.keys(data).length === 0){
        setAlerta(true);
        console.log('Usuario No registrado');
      }else{
        console.log(data);
      }
    })
    .catch(error => {
      // Manejo de errores
      console.error(error);
    });
    

  }
  return (
    <>
      <Card style={{ width: '80%', marginLeft: '10%', textAlign: 'center',
    paddingTop: '5%'}}
    id="card-registrarse">

    <Card.Title>Login</Card.Title>
    
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-correo-usuario">
          Correo @
        </InputGroup.Text>
        <Form.Control
          value = {correo}
          onChange={(e) => setCorreo(e.target.value)} 
          aria-label="Default"
          placeholder="Correo"
          aria-describedby="inputGroup-correo-usuario"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-pass-usuario">
          contraseña
        </InputGroup.Text>
        <Form.Control
          value = {contrasenna}
          onChange={(e) => setContrasenna(e.target.value)} 
          aria-label="Default"
          placeholder="Contraseña"
          type='password'
          aria-describedby="inputGroup-pass-usuario"
        />
      </InputGroup> 


        <Button id= "card-registrarse-boton" 
        variant="primary" type="submit" onClick={() => loginUsuario()}>Iniciar Sesion</Button>
        {
          (alerta)? <Alert key='danger' variant='danger'>
          Error con las credenciales </Alert> : ''
        }
      </Card>

      
  </>
  )
}

export default Login;