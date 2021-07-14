import { React, useState } from "react";
import { setToken } from "../../../reducers/login/index";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [loginErrorPass, setLoginErrorPass] = useState("form-control");
  const [loginErrorEmail, setloginErrorEmail] = useState("form-control");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const submit = () => {
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((result) => {
        if (result.status == 200) {
          dispatch(
            setToken({ token: result.data.token, user: result.data.user })
          );
          // localStorage.setItem("user", JSON.stringify(result.data.user));
          localStorage.setItem("token", JSON.stringify(result.data));
          // localStorage.setItem("token", JSON.stringify(result.data.token));
          // localStorage.setItem("role", result.data.user.role_type);
          if (result.data.user.role_type === "Admin") {
            history.push("/dashboard");
          } else {
            history.push("/");
          }
        }
      })
      .catch((err) => {
        if ("the email dosnt exist" === err.response.data) {
          setloginErrorEmail("form-control is-invalid");
          setLoginErrorPass("form-control is-valid");
        } else {
          setloginErrorEmail("form-control is-valid");
          setLoginErrorPass("form-control is-invalid");
        }
      });
  };

  return (
    <>
      <section style={{ padding: "0%" }} id="backgroundImage">
        <div className="container container1">
          <div className="form-center">
            <div className="container">
              <form>
                <div className="field">
                  <label className="lable" for="validationServer01">
                    Email address
                  </label>
                  <input
                    type="email"
                    className={`${loginErrorEmail}`}
                    id="validationServer01"
                    placeholder="Email address"
                    onChange={(e) => {
                      setEmail(e.target.value.toLowerCase());
                    }}
                  />
                </div>
                {/* {!loginErrorPass ? <div className={`${loginErrorPass}`}></div> : ""} */}
                <div className="field">
                  <label className="lable" for="validationServer02">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`${loginErrorPass}`}
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
                className="btn btn"
                onClick={submit}
                style={{ margin: "25px auto" }}
              >
                {" "}
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
