import { React, useState } from "react";
import {useHistory} from "react-router-dom"

export default function Dashboard() {
 const history=useHistory();

const addPlace =()=>{
    history.push("./addPlace")
}
const editPlace =()=>{
    history.push("./")
}
const deletePlace =()=>{
    history.push("./")
}




  return (
    <>
      <div>
      
        <button onClick={addPlace}>Add</button>
       <button onClick={editPlace}>Edit</button>
       <button onClick={deletePlace}>Delete</button>
      </div>
    </>
  );
}
