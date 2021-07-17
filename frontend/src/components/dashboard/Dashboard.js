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

  return (
    <>
      <section>
        <div className="container paddingC">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="btn-group-vertical"
                style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"4.5rem"}}>
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
                src="https://www.getoccasion.com/wp-content/uploads/2016/01/Occasion-Logo-Black_Web1.png"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
