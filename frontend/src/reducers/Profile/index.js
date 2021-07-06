const initialState = {
    image: "",
  };
  
  const profilePictuer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_IMAGE":
        return { image: payload.image};
  
      default:
        return state;
    }
  };
  
  export const setImage = (image) => {
    return {
      type: "SET_IMAGE",
      payload: image,
    };
  };
  
  export default profilePictuer;
  