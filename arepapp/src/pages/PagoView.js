import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Button } from 'react-bootstrap';

import CardProduct from '../component/CardProduct'





const data=[
    {
        id: 1,
        titulo: "Life Lessons with Katie Zaferes",
        descripcion: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        precio: 136,
        img: "https://www.goya.com/media/7859/arepas-cornmeal-patties.jpg?quality=80"
    },
    {
        id: 2,
        titulo: "Learn Wedding Photography",
        descripcion: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        precio: 125,
        img: "https://www.goya.com/media/7859/arepas-cornmeal-patties.jpg?quality=80"

    },
    {
        id: 3,
        titulo: "Group Mountain Biking",
        descripcion: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        precio: 50,
        img: "https://www.goya.com/media/7859/arepas-cornmeal-patties.jpg?quality=80"
    },
    {
        id: 3,
        titulo: "Group Mountain Biking",
        descripcion: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        precio: 50,
        img: "https://www.goya.com/media/7859/arepas-cornmeal-patties.jpg?quality=80"
    },
    {
        id: 3,
        titulo: "Group Mountain Biking",
        descripcion: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        precio: 50,
        img: "https://www.goya.com/media/7859/arepas-cornmeal-patties.jpg?quality=80"
    },
    {
        id: 3,
        titulo: "Group Mountain Biking",
        descripcion: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        precio: 50,
        img: "https://www.goya.com/media/7859/arepas-cornmeal-patties.jpg?quality=80"
    },
    {
        id: 3,
        titulo: "Group Mountain Biking",
        descripcion: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        precio: 50,
        img: "https://www.goya.com/media/7859/arepas-cornmeal-patties.jpg?quality=80"
    },
    {
        id: 3,
        titulo: "Group Mountain Biking",
        descripcion: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        precio: 50,
        img: "https://www.goya.com/media/7859/arepas-cornmeal-patties.jpg?quality=80"
    }
]

function PagoView() {


    const [products, setProducts] = useState([])

    useEffect(() => {

        // const response = GetAllProducts();
        
        // if (response !== Error){

        //     setProducts(response);
        // } else{

        // }

        setProducts(data);



      }, []);





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
                                value={formData.email}
                                onChange={handleChange}
                            />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Nombre completo</Form.Label>
                            <Form.Control
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Número de teléfono</Form.Label>
                            <Form.Control
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
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
                        <h1 className="fw-bold text-center mb-">Detalle del pedido</h1>
                        <aside className="p-4 border rounded-4 shadow-lg " style={{ backgroundColor: '#FEC151', border: 'none',maxHeight: '33rem', overflowY: 'auto' }}>
                            <div className="h-100 overflow-auto">
                                {products.map(product => (

                                    <CardProduct product={product} />
                                    
                                ))}
                            </div>    
                        </aside>
                    </Col>
                </Row>
                <Row >
                    <Col md={10}>
                        <Button id='button-finalizar' className='rounded-pill text-black fw-bold p-3 w-100 my-2' style={{backgroundColor: '#FEC151', border: 'none' }}>Pagar</Button>
                    </Col>
                    <Col md={2}>
                        <Button id='button-cancelar' className='rounded-pill text-black fw-bold p-3 w-100 my-2' style={{backgroundColor: '#d99843', border: 'none' }}>Cancelar</Button>
                    </Col> 
                </Row>
          </Container>
        </>
      );
    }
    
    
export default PagoView;
