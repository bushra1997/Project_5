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
      <div className="register-con">
        <div className="register-center">
        <input className=""
          type="text"
          placeholder="First name here"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input className=""
          type="text"
          placeholder="Last name here"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input className=""
          type="text"
          placeholder="Age here"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <input className=""
          type="text"
          placeholder="Country here"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <input className=""
          type="text"
          placeholder="Email here"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input className=""
          type="text"
          placeholder="Password here"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="btn"onClick={newUsers}>Sign Up</button>
        <p className="">Do you have an account ?</p>
        {error ? <div>Some Thing Wrong Try Again!</div> : null}
        </div>
      </div>
    </>
  );
}
