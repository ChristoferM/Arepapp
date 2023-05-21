import React, { useState, useEffect } from 'react';
import {Button,Offcanvas} from 'react-bootstrap';
import ConfirmationCardProduct from '../component/ConfirmationCardProduct';

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


function ConfirmacionPedido({product, show, handleClose}){

    const [products, setProducts] = useState([]);
    useEffect(() => {

        // const response = GetAllProducts();
        
        // if (response !== Error){

        //     setProducts(response);
        // } else{

        // }

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

                    <ConfirmationCardProduct product={product} />
                    
                ))}
                    <Button id='button-pagar' className='rounded-pill text-black fw-bold p-3 w-100 my-2' style={{backgroundColor: '#FEC151', border: 'none' }}>Confirmar y pagar</Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
        

    );

}

export default ConfirmacionPedido