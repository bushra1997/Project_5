const initialState = {
  token: "",
  user:{},
};

const token = (state = initialState, {type, payload}) => {
  
  switch (type) {
      case 'SET_LOGING':
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
export default token;
