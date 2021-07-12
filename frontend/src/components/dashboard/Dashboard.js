import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { setOut } from "../../reducers/login/index";

import "./dashboard.css";
export default function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const addPlace = () => {
    history.push("./addPlace");
  };
  const editAndDeletePlace = () => {
    history.push("./editAndDeletePlace");
  };
  const signOut = () => {
    dispatch(setOut({ token: "", user: {} }));
    localStorage.setItem("token", "");
    localStorage.setItem("role", {});
    history.push("./login");

  };

  return (
    <>
      <div className="dMain">
        <button
          type="button"
          class="btn btn-primary btn-lg"
          style={{
            width: "200px",
            margin: "auto",
            top: "150px",
            bottom: "150px",
          }}
          onClick={addPlace}
        >
          Add
        </button>
        <button
          type="button"
          class="btn btn-primary btn-lg"
          style={{
            width: "200px",
            margin: "auto",
            top: "150px",
            bottom: "150px",
          }}
          onClick={editAndDeletePlace}
        >
          Modify/Delete
        </button>
        <button
          type="button"
          class="btn btn-primary btn-lg"
          style={{
            width: "200px",
            margin: "auto",
            top: "150px",
            bottom: "150px",
          }}
          onClick={signOut}
        >
          Sign Out
        </button>
      </div>
    </>
  );
}
