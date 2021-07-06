import { React, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./register.css";
export default function Register() {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role_type, setRole_type] = useState("User");
  const [error, setError] = useState(false);
  const newUsers = () => {
    axios
      .post("http://localhost:5000/user", {
        firstName,
        lastName,
        age,
        country,
        email,
        password,
        role_type,
      })
      .then((result) => {
        if (result.data) {
          history.push("./login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container container1">
        <div className="form-center">
          <div className="container">
            <form>
              <div className="form-group">
                <label className="lable" for="first-name">
                  First Name
                  <span>
                    <i class="fas fa-star-of-life"></i>
                  </span>
                </label>
                <input
                  className="form-control"
                  id="first-name"
                  type="text"
                  placeholder="First name here"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label for="last-name">Last Name</label>
                <input
                  className="form-control"
                  id="last-name"
                  type="text"
                  placeholder="Last name here"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label for="age">Age</label>
                <input
                  className="form-control"
                  id="age"
                  type="text"
                  placeholder="Age here"
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label for="country">Country</label>
                <input
                  className="form-control"
                  id="country"
                  type="text"
                  placeholder="Country here"
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email here"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input
                  className="form-control"
                  id="password"
                  type="password"
                  placeholder="Password here"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </form>

            <button className="btn" onClick={newUsers}>
              Sign Up
            </button>
            {error ? <div>Some Thing Wrong Try Again!</div> : null}
          </div>
        </div>
      </div>
    </>
  );
}
