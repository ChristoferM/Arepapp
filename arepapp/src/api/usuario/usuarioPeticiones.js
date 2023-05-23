// http://localhost:3001/usuario?correo=maria@web.com&pass=123456

const BaseUrl = 'http://localhost:3001'

export async function userFindByCorreoAndPass(usuario, pass){
    console.log(BaseUrl+"/usuario?correo="+usuario+"&pass="+pass);
    
    return await fetch(BaseUrl+"/usuario?correo="+usuario+"&pass="+pass)
    .then(response => response.json())
    .then(data => {
      return data;
    });
}

 export const UsuarioPeticiones = () => {
  return  (userFindByCorreoAndPass)
}