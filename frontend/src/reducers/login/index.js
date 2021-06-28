const initialState = {
    token: "",
  };

  const token = (state = initialState, {type, payload}) => {

    switch (type) {
        case 'SET_TOKEN':
          return { token : payload };

          default:
      
              return state;
  }

}

export const setToken=(token)=>{

    return {
        type:'SET_TOKEN',
        payload: token
    }
}
export default token;