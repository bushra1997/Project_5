const initialState = {
    image: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
  };
  
  const profilePictuer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_IMAGE":
        return { image: payload};
  
      default:
        return state;
    }
  };
  
  export const setImage = (image) => {
    console.log("IMAGE REDUCER",image);
    return {
      type: "SET_IMAGE",
      payload: image,
    };
  };
  
  export default profilePictuer;
  