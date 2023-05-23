import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import {Button,Offcanvas} from 'react-bootstrap';
import CardProduct from './CardProduct';

const data=[
    {
        id: 1,
        name: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        imgUrl: "https://www.goya.com/media/7859/arepas-cornmeal-patties.jpg?quality=80"
    },
    {
        id: 2,
        name: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        imgUrl: "https://www.goya.com/media/7859/arepas-cornmeal-patties.jpg?quality=80"

    },
    {
        id: 3,
        name: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        imgUrl: "https://www.goya.com/media/7859/arepas-cornmeal-patties.jpg?quality=80"
    },
    {
        id: 3,
        name: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        imgUrl: "https://www.goya.com/media/7859/arepas-cornmeal-patties.jpg?quality=80"
    },
    {
        id: 3,
        name: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        imgUrl: "https://www.goya.com/media/7859/arepas-cornmeal-patties.jpg?quality=80"
    },
    {
        id: 3,
        name: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        imgUrl: "https://www.goya.com/media/7859/arepas-cornmeal-patties.jpg?quality=80"
    },
    {
        id: 3,
        name: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        imgUrl: "https://www.goya.com/media/7859/arepas-cornmeal-patties.jpg?quality=80"
    },
    {
        id: 3,
        name: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        imgUrl: "https://www.goya.com/media/7859/arepas-cornmeal-patties.jpg?quality=80"
    }
]


function ConfirmacionPedido({product, show, handleClose}){

    const navigate = useNavigate();


    const redirectToPago = () => {
        navigate('/pago');
    };

    const handleExpandDetails = (product) => {
        
    };


    const [products, setProducts] = useState([]);
    useEffect(() => {

        // aqui la logica que se encargar de sacar los productos del carrito que es un estado en reduxs

        setProducts(data);



    }, []);



    






    return(

        <>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header  className='rounded-bottom shadow-sm' style={{backgroundColor: '#FEC151',border:'none',}} closeButton>
                    <Offcanvas.Title className='my-2 fw-bold' >Confirmación Pedido</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                {products.map(product => (

                    <CardProduct product={product} handleDetails={handleExpandDetails}/>
                    
                ))}
                    <Button id='button-pagar' onClick={redirectToPago} className='rounded-pill text-black fw-bold p-3 w-100 my-2' style={{backgroundColor: '#FEC151', border: 'none' }}>Confirmar y pagar</Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
        

    );

}

export default ConfirmacionPedido;