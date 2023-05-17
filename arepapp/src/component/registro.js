import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasenna, setContrasenna] = useState('');
  const [confirmaciConcontrasenna, setConfirmaciConcontrasenna] = useState('');
  const [alerta, setAlerta] = useState(false)

  function registrarUsuario(){
    if(contrasenna !== confirmaciConcontrasenna){
      setAlerta(true);
    }else{
      setAlerta(false);
    }
  }
  
  return (
    <>
      <Card style={{ width: '80%', marginLeft: '10%', textAlign: 'center',
    paddingTop: '5%'}}
    id="card-registrarse">

    <Card.Title>Registrate</Card.Title>

     <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-nombre">
          Nombre
        </InputGroup.Text>
        <Form.Control
          value = {nombre}
          onChange={(e) => setNombre(e.target.value)} 
          aria-label="Default"
          placeholder="Nombre"
          aria-describedby="inputGroup-nombre"
        />
      </InputGroup>

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
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-pass-usuario">
          contraseña
        </InputGroup.Text>
        <Form.Control
          value = {confirmaciConcontrasenna}
          onChange={(e) => setConfirmaciConcontrasenna(e.target.value)}
          aria-label="Default"
          placeholder="Confirmar Contraseña"
          type='password'
          aria-describedby="inputGroup-pass-usuario"
        />
      </InputGroup> 
      {
        (alerta)? <Alert key='danger' variant='danger'>
          La constraña no coincide </Alert> : ''
        }
        <Button id= "card-registrarse-boton" 
        variant="primary" type="submit" onClick={registrarUsuario}>Registrarse</Button>
      </Card>
  </>
  )
}


export default Registro;
