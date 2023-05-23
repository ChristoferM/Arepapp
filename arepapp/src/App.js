import React from 'react';
import { Link, Route, Routes ,BrowserRouter, Router } from "react-router-dom";


import botonUsuario from './assets/icons/boton usuario (2).svg'
import botonCarrito from './assets/icons/boton de carrito (2).svg'
import logo from './assets/icons/logo.svg'




import Registro from './pages/registro';
import Login from './pages/login';
import DetalleProducto from './component/DetalleProducto';
import AdminView from './pages/AdminView';
import HomeView from './pages/HomeView'
import PagoView from './pages/PagoView'
import ConfirmacionPedido from './component/ConfirmacionPedido';

import AuthJWT from './helper/authJWT';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';







function App() {


  const [showConfirmacion, setShowConfimacion] = React.useState(false);

  const handleConfirmacion = () => setShowConfimacion(!showConfirmacion);



  return (
    <>
    <BrowserRouter>
     <Navbar   style={{border:'none',backgroundColor: '#FEC151'}} expand="lg">
      <Container >
        <Navbar.Brand href="/">
        <img src={logo} alt="Logo" width="50" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <NavDropdown  title={<img src={botonUsuario} alt="Usuario" width="45" height="45" />} id="nav-usuario-dropdown">
              <div>
                <NavDropdown.Item >            
                  <Nav.Link href="#link">
                    <Link to="/login" >Login </Link>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item >            
                  <Nav.Link href="#link">
                    <Link to="/registrarse" >Registrarse </Link>
                  </Nav.Link>
                </NavDropdown.Item>
              </div>  
            </NavDropdown>
            <Nav.Link>
              <img src={botonCarrito} alt="Pago" width="45" height="45" onClick={handleConfirmacion}/>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <Routes>
        <Route path="/registrarse" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/token" element={<Registro />} />
        <Route path="/adminView" element={<AdminView/>} />
        <Route path="/Pago" element={<PagoView/>} />
        <Route path="/" element={<HomeView/>} />
      </Routes>
    </div>  
    {showConfirmacion && <ConfirmacionPedido show={showConfirmacion} handleClose={handleConfirmacion}  ConfirmacionPedido/>}
    </BrowserRouter>

    </>
    
  );
}

export default App;
