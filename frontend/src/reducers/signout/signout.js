const initialState = {
  tokenout: "",
  user: {},
};

const tokenOut = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_LOGOUT":
      return { tokenout: payload.tokenout, user: payload.user };

    default:
      return state;
  }
};

export const setTokenout = (tokenout) => {
  return {
    type: "SET_LOGOUT",
    payload: tokenout,
  };
};
export default tokenOut;
