const initialState = {
    token: "",
    user:{},
  };

  const token = (state = initialState, {type, payload}) => {
    
    switch (type) {
        case 'SET_LOGING':
          return { token: payload.token, user: payload.user};

          case 'SET_LOGOUT':
            return { token: payload.token, user: payload.user};

          default:
    
              return state;

            
  }
}


export const setToken=(token)=>{
    return {
        type:'SET_LOGING',
        payload: token
    }
}

export const setOut=(token)=>{
    return {
        type:'SET_LOGOUT',
        payload: token
    }
}
export default token;
