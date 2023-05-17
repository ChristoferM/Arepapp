import React,{useState} from 'react';
import {Button,Image,Modal } from 'react-bootstrap';

function DetalleProducto({show, handleDetails, product}){
    

    function añadirAlCarrito(){

        //Logica de añadir al carrito

    }


    




    return (
        <Modal show={show} onHide={handleDetails} >
            

            <Modal.Body>
                <Image  className='mb-2 w-100' src={product.img} alt={`Foto de ${product.tiulo}`} rounded/>

                <h1 className='fs-4 mt-2'>{product.titulo}</h1>
                <p className='fs-6 text-secondary fw-light'>{product.descripcion}</p>
                <p className='text-black-50' >$ {product.precio}</p>

                
                <Button id='button-agregar-carrito' onClick={handleDetails} className='rounded-pill text-black fw-bold p-3 w-100' style={{backgroundColor: '#FEC151', border: 'none', }}>Agregar y seguir comprando</Button>
            </Modal.Body>

        
        </Modal>
    );

}


export default DetalleProducto;




