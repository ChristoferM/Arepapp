import React, { useState, useEffect } from 'react';
import { useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Button} from 'react-bootstrap';

import ProductCardConfirmation from '../component/ProductCardConfirmation';
import CompraFinalizada from '../component/CompraFinalizada';







function PagoView() {


    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showCompraFinalizada, setShowCompraFinalizada] = useState(false);

    const task = useSelector(state => state.usuarioSesion);
    const orderProducts = useSelector(state => state.shoppingCart);

  
    const navigate = useNavigate();


    const redirectToHome = () => {
        navigate('/');
    };

    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        address: '',
        phoneNumber: '',
        notes: ''
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    const handleExpandCompraFinalizada = () => {

        if (orderProducts.length !== 0) {
            setShowCompraFinalizada(!showCompraFinalizada);
        }

    };



    useEffect(() => {

        // aqui la logica que se encargar de sacar los productos del carrito que es un estado en reduxs
        setProducts(orderProducts);
        setTotalPrice(calculateTotal(orderProducts))

    },[orderProducts]);



    const calculateTotal = (products) => {

        let total = 0
        products.forEach((product) => {

            total += product.cantidad * product.productData.price
        })
        
        return total;
    }


    // Lógica de subida de la orden y los detalles de la orden
    // Puedes acceder a los valores del formulario en formData.email, formData.fullName, etc.

    return (
        <>
          <Container className='h-100 d-flex flex-column'>
                <Row className="justify-content-between" >
                    <Col  xs={12} md={4} className="my-5">
                        <h1 className="fw-bold text-center">Datos del domicilio</h1>
                        <aside className="p-4 border rounded-4 shadow-lg" style={{ backgroundColor: '#FEC151', border: 'none' }}>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                name="email"
                                value={(task.status) ? task.dataUser.data[0].userEmail : formData.email}
                                onChange={handleChange}

                                disabled={(task.status) ? true : false}
                            />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Nombre completo</Form.Label>
                            <Form.Control
                                type="text"
                                name="fullName"
                                value={ (task.status) ? task.dataUser.data[0].fullName : formData.fullName}
                                onChange={handleChange}

                                disabled={(task.status) ? true : false}
                            />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                value={(task.status) ? task.dataUser.data[0].address : formData.address}
                                onChange={handleChange}

                                disabled={(task.status) ? true : false}
                            />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Número de teléfono</Form.Label>
                            <Form.Control
                                type="text"
                                name="phoneNumber"
                                value={(task.status) ? task.dataUser.data[0].phoneNumber : formData.phoneNumber}
                                onChange={handleChange}
                                disabled={(task.status) ? true : false}
                            />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Notas de pedido</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                            />
                            </Form.Group>
                        </Form>
                        </aside>
                    </Col>
                    <Col xs={12} md={8} className="my-5">
                        <h1 className="fw-bold text-center mb-">Resumen del pedido</h1>
                        <aside className="p-4 border rounded-4 shadow-lg " style={{ backgroundColor: '#FEC151', border: 'none',maxHeight: '33rem', overflowY: 'auto' }}>
                            <div className="h-100 overflow-auto">
                                {products.map(product => (

                                    <ProductCardConfirmation product={product} key={product.productData.id}/>
                                    
                                ))}
                            </div>    
                        </aside>
                    </Col>
                </Row>
                <Row>
                    <h2 className='m-4'>Precio Total: ${totalPrice}</h2>
                                    
                
                </Row>
                <Row >
                    <Col md={10}>
                        <Button id='button-finalizar' onClick={handleExpandCompraFinalizada} className='rounded-pill text-black fw-bold p-3 w-100 my-2' style={{backgroundColor: '#FEC151', border: 'none' }}>Pagar</Button>
                    </Col>
                    <Col md={2}>
                        <Button id='button-cancelar' onClick={redirectToHome} className='rounded-pill text-black fw-bold p-3 w-100 my-2' style={{backgroundColor: '#d99843', border: 'none' }}>Cancelar</Button>
                    </Col> 
                </Row>
          </Container>
          {showCompraFinalizada && <CompraFinalizada show={showCompraFinalizada} handleDelete={handleExpandCompraFinalizada} />}
        </>
      );
    }
    
    
export default PagoView;
