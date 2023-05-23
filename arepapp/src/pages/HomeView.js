import React, { useState, useEffect } from 'react'; 
import {Button,Container,Row,Col } from 'react-bootstrap';


import CardProduct from '../component/CardProduct'
import DetalleProducto from '../component/DetalleProducto';

import peticiones from '../api/peticiones.js';






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
                setProducts(response);
            } catch (error) {
                console.log(error)
            }
        } 

        fetchData();
        

      }, []);


    return (

        < >
            
            <h1 className='m-5 fw-bold '>Nuestro Menú</h1>

            
            <Container className='d-flex justify-content-end mw-100'>
                <Button className=' rounded-pill p-3 text-black fw-semibold w-100' style={{border:'none',backgroundColor: '#FEC151',width: '100%'}}>Agregar Nuevo Producto</Button>
            </Container>
                
                
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