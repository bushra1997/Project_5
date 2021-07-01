import React, { useState } from "react";
import { useSelector } from "react-redux";

const Meeding = () => {
  const token =useSelector((state)=>{

    return {

      token:state.token.token,
      user:state.token.user
    }

  });
  console.log("qooooooooooooqo",token);
  return <h4>Meeding</h4>;
};
export default Meeding;
