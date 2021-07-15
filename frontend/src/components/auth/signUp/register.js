import { React, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./register.css";
import Modal from "react-bootstrap/Modal";
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
  const [wrongEmail, setWrongEmail] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  const newUsers = () => {
    if (firstName && lastName && age && country && email && password) {
      axios
        .post(`${process.env.REACT_APP_BACKEND_SERVER}/user`, {
          firstName,
          lastName,
          age,
          country,
          email,
          password,
          role_type,
        })
        .then((result) => {
          if (!email.includes("@") && !email.includes(".com")) {
            setWrongEmail(true);
            setSmShow(true);
          } else {
            if (password.length < 8) {
              setWrongPassword(true);
              setSmShow(true);
            } else {
              history.push("/login");
            }
          }
        });
    }
  };
  return (
    <>
      <section style={{ padding: "0%" }} id="backgroundImage">
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
                    required="true"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label for="last-name">
                    Last Name
                    <span>
                      <i class="fas fa-star-of-life"></i>
                    </span>
                  </label>
                  <input
                    className="form-control"
                    id="last-name"
                    type="text"
                    placeholder="Last name here"
                    required
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label for="age">
                    Age
                    <span>
                      <i class="fas fa-star-of-life"></i>
                    </span>
                  </label>
                  <input
                    className="form-control"
                    id="age"
                    type="number"
                    placeholder="Age here"
                    required
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label for="country">
                    Country
                    <span>
                      <i class="fas fa-star-of-life"></i>
                    </span>
                  </label>
                  <input
                    className="form-control"
                    id="country"
                    type="text"
                    placeholder="Country here"
                    required
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label for="email">
                    Email
                    <span>
                      <i class="fas fa-star-of-life"></i>
                    </span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Example@something.com"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label for="password">
                    Password
                    <span>
                      <i class="fas fa-star-of-life"></i>
                    </span>
                  </label>
                  <input
                    className="form-control"
                    id="password"
                    type="password"
                    placeholder="Password here"
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </form>

              <button
                className="btn"
                onClick={newUsers}
                style={{ margin: "auto" }}
              >
                Sign Up
              </button>
              {error ? <div>{alert[0].msg}</div> : null}
            </div>
          </div>
        </div>
        {wrongEmail ? (
          <Modal
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                Wrong Email
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              wrong Email! E-mail should be like : Example@Gmail.com
            </Modal.Body>
          </Modal>
        ) : null}
        {wrongPassword ? (
          <Modal
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                Wrong Password
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>Weak password!! please Enter a stronger one</Modal.Body>
          </Modal>
        ) : null}
      </section>
    </>
  );
}
