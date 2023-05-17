import React from 'react'

function conexion () {

  const BaseUrl ='http://localhost:3001';
  
  const  login = async (form) => {
    await fetch(baseUrl+"/login", {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
        'Content-type': "application/json; charset=UTF-8"
        }})
    .then((response) => {
        return response
    }).catch((error) => {
        console.log('Hubo un problema con la petición :' + error.message);
    });
}
  return (login)
}

export default conexion;
