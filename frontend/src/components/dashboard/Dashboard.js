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
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="btn-group-vertical">
              <button
                type="button"
                class="btn btn-primary btn-lg"
                onClick={addPlace}
              >
                Add a Place
              </button>
              <button
                type="button"
                class="btn btn-primary btn-lg"
                onClick={editAndDeletePlace}
              >
                Update | Delete
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="imageO">
              <img src="https://images.pexels.com/photos/4993206/pexels-photo-4993206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
