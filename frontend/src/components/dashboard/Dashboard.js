import { React, useState } from "react";
import {useHistory} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css"
export default function Dashboard() {
  const history = useHistory();
  const addPlace = () => {
    history.push("./addPlace");
  };
  const editAndDeletePlace = () => {
    history.push("./editAndDeletePlace");
  };
  return (
    <>
      <div className="dMain">
      
        <button type="button" class="btn btn-primary btn-lg btn-block" onClick={addPlace}>Add</button>
       <button type="button" class="btn btn-primary btn-lg btn-block" onClick={editAndDeletePlace}>Modify/Delete</button>
      </div>
    </>
  );
}
