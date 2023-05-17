import React from 'react'

export const peticiones =  () => {
    
    const BaseUrl ='http:';
    
    const GetAllProducts = async () =>{
        await fetch(BaseUrl+"/products")
        .then((response) => {
            return response
        }).catch((error) => {
            return error
        });
    }

    const  GetProductsByPage = async () =>{
        await fetch(BaseUrl+"/products")
        .then((response) => {
            return response
        }).catch((error) => {
            console.log('Hubo un problema con la petición :' + error.message);
        });
    }

    const  GetProductById = async ( id)=> {
       await fetch(BaseUrl+"/products")
       .then((response) => {
           return response
       }).catch((error) => {
           console.log('Hubo un problema con la petición :' + error.message);
       });
   }

    const  PostProduct = async ( form) =>{
    await fetch(BaseUrl+"/products", {
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


    const  UpdateProduct = async( form,  id) =>   {
        await fetch(BaseUrl+"/products", {
            method: 'PUT',
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
    const  RemoveProduct = async (id) =>   {
        await fetch(BaseUrl+"/products/"+id,{
            method: "DELETE"
            })
        .then((response) => {
            return response
        }).catch((error) => {
            console.log('Hubo un problema con la petición :' + error.message);
        });
    }

    const  GetProductsByCategory = async(id)   =>  {
        await fetch(BaseUrl+"/categories/"+id+"products")
        .then((response) => {
            return response
        }).catch((error) => {
            console.log('Hubo un problema con la petición :' + error.message);
        });
    }



    const  GetAllCategories = async () =>    {
        await fetch(BaseUrl+"/categories")
        .then((response) => {
            return response
        }).catch((error) => {
            console.log('Hubo un problema con la petición :' + error.message);
        });
    }


    const  GetCategoryById = async ( id)   =>  {
        await fetch(BaseUrl+"/categories/"+id)
        .then((response) => {
            return response
        }).catch((error) => {
            console.log('Hubo un problema con la petición :' + error.message);
        });
    }

    const  PostCategory = async (form) => {
        await fetch(BaseUrl+"/categories", {
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


    const  UpdateCategory = async (form, id) => {
        await fetch(BaseUrl+"/categories/"+id
        , {
            method: 'PUT',
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


    const  RemoveCategory= async (id) =>{
        await fetch(BaseUrl+"/categories/"+id,{
            method: "DELETE"
            })
        .then((response) => {
            return response
        }).catch((error) => {
            console.log('Hubo un problema con la petición :' + error.message);
        });
    }


  return (
    GetAllProducts,
    GetProductsByPage,
    GetProductById,
    PostProduct,
    UpdateProduct,
    RemoveProduct,
    GetProductsByCategory,
    GetAllCategories,
    GetCategoryById,
    PostCategory,
    UpdateCategory,
    RemoveCategory)
}
export default peticiones;
