
const loginUser = ( userData)=> {
  return {
    type : '@LOGIN_USER',
    status: true,
    dataUser: userData
  }
};

const logoutUser = ()=> {
    return {
      type : '@LOGOUT_USER',
      status: false,
      dataUser: userData
    }
};

 const ActionUSer = () => {
  return {
    login: loginUser,
    logout: logoutUser,
  }
}

export default ActionUSer;
