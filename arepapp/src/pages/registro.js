import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {userCreate} from '../api/usuario/usuarioPeticiones';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [numero, setNumero] = useState('');
  const [contrasenna, setContrasenna] = useState('');
  const [confirmaciConcontrasenna, setConfirmaciConcontrasenna] = useState('');
  const [alerta, setAlerta] = useState(false)
  const [Mensaje, setMensakje] = useState('');


  const navigate = useNavigate();


  const redirectToLogin = () => {
      navigate('/login');
  };

  
  function registrarUsuario(){
    if(contrasenna !== confirmaciConcontrasenna){
      setAlerta(true);
      setMensakje('La constraña no coincide');
    }else{
      setAlerta(false);
      userCreate(correo,nombre,direccion,numero,contrasenna)
        .then(data => {
          if( Object.keys(data).length === 0){
            console.log('Usuario No creado');
          }else{
            setMensakje('usuarioRegistrado');
            redirectToLogin();
            
          }
        })
        .catch(error => {
          // Manejo de errores
          console.error(error);
        });
    }
  }
  
  return (
    <>
    <Card className='m-5 align-center' id="card-registrarse">
      <Card.Header className='p-3 text-center' style={{backgroundColor: '#FEC151'}}>
        <Card.Title >Registrate</Card.Title> 
      </Card.Header>
      <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
        <InputGroup className="m-3 w-75">
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
        <InputGroup className="m-3 w-75">
          <InputGroup.Text id="inputGroup-direccion">
            Direccion
          </InputGroup.Text>
          <Form.Control
            value = {direccion}
            onChange={(e) => setDireccion(e.target.value)} 
            aria-label="Default"
            placeholder="Direccion"
            aria-describedby="inputGroup-direccion"
          />
        </InputGroup>
        <InputGroup className="m-3 w-75">
          <InputGroup.Text id="inputGroup-numero">
            Número
          </InputGroup.Text>
          <Form.Control
            value = {numero}
            onChange={(e) => setNumero(e.target.value)} 
            aria-label="Default"
            placeholder="numero"
            aria-describedby="inputGroup-numero"
          />
        </InputGroup>


        <InputGroup className="m-3 w-75">
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

        <InputGroup className="m-3 w-75">
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
        <InputGroup className="m-3 w-75">
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
            {Mensaje} </Alert> : ''
          }
          <Button id= "card-registrarse-boton" className='rounded-pill text-black p-2 w-100' style={{backgroundColor: '#FEC151', border: 'none'}} variant="warning" type="submit" onClick={registrarUsuario}>Registrarse</Button>
      </Card.Body>
    </Card>
  </>
  )
}


export default Registro;
