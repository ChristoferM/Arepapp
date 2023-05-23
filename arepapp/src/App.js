import React from 'react';
import { Link, Route, Routes ,BrowserRouter, Router } from "react-router-dom";

import Registro from './pages/registro';
import Login from './pages/login';
import AdminView from './pages/AdminView';
import PagoView from './pages/PagoView'
import ConfirmacionPedido from './component/ConfirmacionPedido';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

import { Provider } from 'react-redux';
import { store } from './store'; 

function App() {


  const [showConfirmacion, setShowConfimacion] = React.useState(false);

  const handleConfirmacion = () => setShowConfimacion(!showConfirmacion);



  return (
    <Provider store={store}>
    <BrowserRouter>
     <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Students App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">
              <Link to="/" >Login </Link></Nav.Link>
            <Nav.Link href="#link">
             <Link to="/registrarse" >Registrarse </Link>
            </Nav.Link>
            <Nav.Link href="#link">
             <Link to="/pago" >Pago </Link>
            </Nav.Link>
            <Nav.Link href="#link">
            <Link to="/adminView" >admin View </Link>
           </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <Routes>
        <Route path="/registrarse" element={<Registro />} />
        <Route path="/" element={<Login />} />
        <Route path="/token" element={<Registro />} />
        <Route path="/adminView" element={<AdminView/>} />
        <Route path="/Pago" element={<PagoView/>} />
      </Routes>
    </div>  
    </BrowserRouter>

            {/*Button para confirmacion */}
    <Button variant="primary" onClick={handleConfirmacion}>
            launch
    </Button>

    {showConfirmacion && <ConfirmacionPedido show={showConfirmacion} handleClose={handleConfirmacion}  ConfirmacionPedido/>}
    </Provider>
    
  );
}

export default App;
