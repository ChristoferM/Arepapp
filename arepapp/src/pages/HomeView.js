import React, { useState, useEffect } from 'react'; 
import {Button,Container,Row,Col } from 'react-bootstrap';


import CardProduct from '../component/CardProduct'
import DetalleProducto from '../component/DetalleProducto';

import peticiones from '../api/peticiones.js';








function HomeView(){
     

    const [products, setProducts] = useState([]);
    

    const [showDetails, setShowDetails] = useState(false);
    
    const [selectedProduct, setSelectedProduct] = useState(null);


    const handleExpandDetails = (product) => {
        
        setSelectedProduct(product)
        setShowDetails(!showDetails);
    };





    /*Logica de la peticion */
    useEffect(() => {

        const fetchData = async () =>{
            try {
                const response = await peticiones.GetAllProducts();
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.log(error)
            }
        } 

        fetchData();
        

      }, []);


    return (

        < >
            
            <h1 className='m-5 fw-bold '>Nuestro Menú</h1>
       
            <Row className="m-5 justify-content-center">
                <Col md={12}>
                
                    <Row className='mx-5 justify-content-center'>
                
                        {products.map(product => (
                            
                            <Col className='mb-4' key={product.id} md={4} >
                            <CardProduct product={product} handleDetails={handleExpandDetails}/>
                            </Col>
                            
                        ))}
                                
                    </Row>
                </Col>

            
            </Row>

            {showDetails && <DetalleProducto show={showDetails} handleDetails={handleExpandDetails} product={selectedProduct}/>}
                    
                    
                    
                    
                    
                    
        
        </>
    );









}





export default HomeView;