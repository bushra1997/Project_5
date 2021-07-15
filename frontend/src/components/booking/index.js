import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import "./booking.css";
const Booking = () => {
  const [smShow, setSmShow] = useState(false);
  const { id } = useParams();
  const [place, setPlace] = useState({});
  const [firstName, setFirstName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [done, setDone] = useState(false);

  const history = useHistory();

  const token = useSelector((state) => {
    return {
      token: state.token.token,
      user: state.token.user,
    };
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/places/${id}`).then((result) => {
      if (result.status == 200) {
        setPlace(result.data[0]);
        setFirstName(token.user.firstName);
        setCountry(token.user.country);
        setEmail(token.user.email);
      }
    });
  }, []);

  const booked = (e) => {
    e.preventDefault();
    setDone(true);
    setSmShow(true);
  };

  const Back = () => {
    history.push("/");
  };

  const homeClicked = () => {
    history.push("/");
  };

  return (
    <>
      <div className="container text-center p-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h1 className="text-center">Place information</h1>
            <ul class="list-group">
              <li class="list-group-item bold-text">{place.name}</li>
              <li class="list-group-item bold-text">{place.city}</li>
              <li class="list-group-item bold-text">{place.address}</li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h1 className="text-center">User information</h1>
            <ul class="list-group">
              <li class="list-group-item bold-text">{firstName}</li>
              <li class="list-group-item bold-text">{country}</li>
              <li class="list-group-item bold-text">{email}</li>
            </ul>
          </div>
          <div
            className="col-lg-12 col-md-12 col-sm-12 mt-2"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <form class="form-inline">
              <div class="form-group mb-2">
                <label for="input-phone" class="sr-only">
                  Please Enter Your Phone Number
                </label>
                <input
                  type="email"
                  class="form-control input-phone"
                  id="input-phone"
                  value={email}
                />
              </div>
              <button
                class="btn btn-primary mb-2"
                style={{ margin: "0px 7px" }}
                onClick={booked}
              >
                Confirm Booking
              </button>
              <button
                type="button"
                class="btn btn-primary mb-2"
                style={{
                  margin: "0px 0px",
                  backgroundColor: "#fff",
                  color: "#cf6262",
                  fontWeight: "600",
                }}
                onClick={Back}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>

      {done ? (
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Reservation completed
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{`A confirmation E-mail has been sent to: ${email} , Please follow up directions in your email to confirm your reservation.`}</Modal.Body>
          <Modal.Footer>
            <Button onClick={homeClicked}>Home</Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </>
  );
};

export default Booking;
