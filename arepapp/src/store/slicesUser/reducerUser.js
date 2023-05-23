const initialState = {
    status:false,
    dataUser: {}
  };

  
function accionStoreUser(state = initialState,action){
    switch (action.type){
        case '@LOGIN_USER':
            console.log('ESTADO 1',state);
            return {
                ...state,
                status:true,
                dataUser: state.dataUser
            }
        case '@LOGOUT_USER':
            console.log('ESTADO 2',state);
            return {
                ...state,
                status:false,
                dataUser: {}
            }
        case '@GET_USUARIO':
            console.log('ESTADO 2',state);
            return {
                ...state,
                status:true,
                dataUser: {}
            }
        default:
            throw new Error('Accion no encontrada');
    }

}

 const reducerUser = (state,action) => {
  return (accionStoreUser)
}

export default reducerUser;