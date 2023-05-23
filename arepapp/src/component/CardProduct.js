import React, {useState} from 'react';
import {Button,ButtonGroup,Image,Offcanvas,Col,Raw,Card } from 'react-bootstrap';



function CardProduct({product, handleDetails}){

    const handleDetailsClick = () => {
        handleDetails(product);
    };




    return(

        <>
            <Card className='my-3 rounded-4 shadow-lg' >
                <Card.Body className='d-flex align-items-center'>
                    <div>
                    <Card.Img className='mb-3' src={product.imgUrl} alt={`Imagen de ${product.name}`} onClick={handleDetailsClick} rounded/>
                    
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text> $ {product.price} </Card.Text>
                        <Card.Text className='fs-6 text-secondary fw-light'> {product.description.length > 35 ? product.description.substring(0, 35) + '...' : product.description}</Card.Text>
                        <ButtonGroup className='align-items-center'>
                            <Button  className='text-black' style={{backgroundColor: '#FEC151',border:'none'}}>+</Button>
                            <span className="mx-2 fw-bolder" style={{ display: 'inline-block', verticalAlign: 'middle' }}>0</span>
                            <Button  className='text-black' style={{backgroundColor: '#FEC151',border:'none'}}>-</Button>
                        </ButtonGroup>
                        <Button className='mx-3 text-black fw-semibolder' style={{backgroundColor: '#FEC151',border:'none'}}>Eliminar</Button>
                    </div>
                </Card.Body>
            </Card>

        </>


    );

    
}






export default CardProduct;