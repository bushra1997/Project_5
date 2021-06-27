import { React, useState } from "react";
import { setToken } from "../../../reducers/login/index";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import "./../../auth/login/login.css";

export default function Login() {
  const history = useHistory();
  const [loginError, setLoginError] = useState("form-control is-valid");
  const [loginError1, setLoginError1] = useState("form-control is-valid");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const submit = () => {
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((result) => {
        if (result.status == 200) {
          console.log(result.data);
          dispatch(setToken(result.data.token));
          history.push("/home");
        }
      })
      .catch((err) => {
        console.log("the email dosnt exist" === err.response.data);

        if ("the email dosnt exist" !== err.response.data) {
          setLoginError1("form-control is-valid");
          // setLoginError(true);
        } else {
          setLoginError1("form-control is-invalid");
          setLoginError("form-control is-invalid");
        }
      });
  };

  return (
    <>
      <div className="container">
        <div className="form-center">
          <form>
            <div className="field">
              <label className="lable" for="validationServer01">
                Email address
              </label>
              <input
                type="email"
                class={`${loginError1}`}
                id="validationServer01"
                placeholder="Email address"
                onChange={(e) => {
                  setEmail(e.target.value.toLowerCase());
                }}
              />
            </div>
            {!loginError ? <div className={`${loginError}`}></div> : ""}
            <div className="field">
              <label className="lable" for="validationServer02">
                Password
              </label>
              <input
                type="passowrd"
                class={`${loginError}`}
                id="validationServer02"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </form>
          <div className="btn-submit">
            <button
              id="btn"
              type="submit"
              className="btn btn-primary"
              onClick={submit}
            >
              {" "}
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
{
}
