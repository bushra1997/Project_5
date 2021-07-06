import { React, useState } from "react";
import { setToken } from "../../../reducers/login/index";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [loginError, setLoginError] = useState("form-control is-valid");
  const [loginError1, setLoginError1] = useState("form-control is-valid");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const submit = () => {
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((result) => {
        if (result.status == 200) {
          dispatch(
            setToken({ token: result.data.token, user: result.data.user })
          );
          localStorage.setItem("token", result.data.token);
          localStorage.setItem("role", result.data.user.role_type);
          if (result.data.user.role_type === "Admin") {
            history.push("/dashboard");
          } else {
            history.push("/home");
          }
        }
      })
      .catch((err) => {
        console.log("error =====>", err.message);
        console.log("the email dosnt exist" === err.response.data);
        if ("the email dosnt exist" !== err.response.data) {
          setLoginError1("form-control is-valid");
          setLoginError("form-control is-invalid");
        } else {
          setLoginError1("form-control is-invalid");
          setLoginError("form-control is-invalid");
        }
      });
  };

  return (
    <>
      <div className="container container1">
        <div className="form-center">
          <div className="container" >
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
                type="password"
                class={`${loginError}`}
                id="validationServer02"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="signIn">
              <Link className="signIn text-center" exact to="/register">
                Don't have an account?
                <br />
                Sign up Now
              </Link>
            </div>
          </form>
          <button
              id="btn"
              type="submit"
              className="btn btn-primary"
              onClick={submit}
              style={{margin:"25px auto"}}
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
