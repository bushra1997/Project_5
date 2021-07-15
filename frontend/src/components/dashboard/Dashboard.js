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
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="btn-group-vertical">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={addPlace}
                >
                  Add a Place
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={editAndDeletePlace}
                >
                  Update | Delete
                </button>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12">
              <img
                width="100%"
                src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
