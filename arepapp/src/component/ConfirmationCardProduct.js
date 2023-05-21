import React, {useState} from 'react';
import {Button,ButtonGroup,Image,Offcanvas,Col,Raw,Card } from 'react-bootstrap';



function ConfirmationCardProduct({product}){




    return(

        <>
            <Card className='my-3 rounded-4' >
                <Card.Body className='d-flex align-items-center'>
                    <div className='w-25 me-3' style={{ display: 'flex'}}>
                        <Image className='h-50 w-100 ' src={product.img} alt={`Imgen de ${product.titulo}`} rounded/>
                    </div>
                    <div>
                    
                        <Card.Title>{product.titulo}</Card.Title>
                        <Card.Text> $ {product.precio} </Card.Text>
                        <Card.Text className='fs-6 text-secondary fw-light'> {product.descripcion.length > 35 ? product.descripcion.substring(0,35) + '...' : product.descripcion }</Card.Text>
                        <ButtonGroup className='align-items-center'>
                            <Button  className='text-black' style={{backgroundColor: '#FEC151',border:'none'}}>+</Button>
                            <span className="mx-3 fw-bolder" style={{ display: 'inline-block', verticalAlign: 'middle' }}>2</span>
                            <Button  className='text-black' style={{backgroundColor: '#FEC151',border:'none'}}>-</Button>
                        </ButtonGroup>
                        <Button className='mx-3 text-black fw-semibolder' style={{backgroundColor: '#FEC151',border:'none'}}>Eliminar</Button>
                    </div>
                </Card.Body>
            </Card>

        </>


    );

    
}






export default ConfirmationCardProduct;