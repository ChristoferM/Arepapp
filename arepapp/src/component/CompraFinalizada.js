import React, { useState, useEffect } from 'react';
import {Button, Modal} from 'react-bootstrap';



function CompraFinalizada({show, handleDelete}){

    //logica peticion eliminar pendiente



    return (

        <>
            <Modal show={show} onHide={handleDelete} >
                <Modal.Header closeButton />

                <Modal.Body >

                    <h1 className='fs-4 mb-5 mt-3 text-center'>Tu compra ha sido realizada.</h1>
                    

                </Modal.Body>

        
            </Modal>
        
        
        
        </>



    );

}




export default CompraFinalizada;