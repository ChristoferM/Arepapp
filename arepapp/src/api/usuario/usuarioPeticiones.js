// http://localhost:3001/usuario?correo=maria@web.com&pass=123456

const BaseUrl = 'http://localhost:3001'

export async function userFindByCorreoAndPass(usuario, pass){
    console.log(BaseUrl+"/customers?userEmail="+usuario+"&password="+pass);
    
    return await fetch(BaseUrl+"/customers?userEmail="+usuario+"&password="+pass)
    .then(response => response.json())
    .then(data => {
      return data;
    });
}

 export const UsuarioPeticiones = () => {
  return  (userFindByCorreoAndPass)
}