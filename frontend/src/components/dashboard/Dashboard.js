import { React, useState } from "react";
import {useHistory} from "react-router-dom"

export default function Dashboard() {
 const history=useHistory();

const addPlace =()=>{
    history.push("./addPlace")
}
const editAndDeletePlace =()=>{
    history.push("./editAndDeletePlace")
}





  return (
    <>
      <div>
      
        <button onClick={addPlace}>Add</button>
       <button onClick={editAndDeletePlace}>Edit And Delete</button>
       
      </div>
    </>
  );
}
