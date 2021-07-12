import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import "./booking.css";

const Booking = () => {
  const { id } = useParams();
  console.log(id);
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
    axios
      .get(`http://localhost:5000/places/${id}`)
      .then((result) => {
        if (result.status == 200) {
          setPlace(result.data[0]);
          setFirstName(token.user.firstName);
          setCountry(token.user.country);
          setEmail(token.user.email);
          console.log(";llllllllllllllllll", result.data[0]);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const booked = () => {
    setDone(true);
  };

  const Back = () => {
    history.push("/home");
  };

  return (
    <>
      {!done ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1 className="text-center">Place information</h1>
              <ul class="list-group">
                <li class="list-group-item">{place.name}</li>
                <li class="list-group-item">{place.city}</li>
                <li class="list-group-item">{place.address}</li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1 className="text-center">User information</h1>
              <ul class="list-group">
                <li class="list-group-item">{firstName}</li>
                <li class="list-group-item">{country}</li>
                <li class="list-group-item">{email}</li>
              </ul>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <form class="form-inline">
                <div class="form-group mb-2">
                  <label for="static" class="sr-only">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="static"
                    value="Phone Number"
                  />
                </div>
                <div class="form-group mx-sm-3 mb-2">
                  <label for="input2" class="sr-only">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="input2"
                    placeholder="Phone Number"
                  />
                </div>
                <button type="submit" class="btn btn-primary mb-2">
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        // <div className="formBook">
        //   <Form onSubmit={Booking}>
        //     <Form.Group
        //       className="mb-3"
        //       controlId="exampleForm.ControlTextarea1"
        //     >
        //       <Form.Label>{place.name}</Form.Label>
        //     </Form.Group>

        //     <Form.Group
        //       className="mb-3"
        //       controlId="exampleForm.ControlTextarea1"
        //     >
        //       <Form.Label>{place.city}</Form.Label>
        //     </Form.Group>

        //     <Form.Group
        //       className="mb-3"
        //       controlId="exampleForm.ControlTextarea1"
        //     >
        //       <Form.Label>{place.address}</Form.Label>
        //     </Form.Group>

        //     <Form.Group
        //       className="mb-3"
        //       controlId="exampleForm.ControlTextarea1"
        //     >
        //       <Form.Label>{firstName}</Form.Label>
        //     </Form.Group>

        //     <Form.Group
        //       className="mb-3"
        //       controlId="exampleForm.ControlTextarea1"
        //     >
        //       <Form.Label>{country}</Form.Label>
        //     </Form.Group>

        //     <Form.Group
        //       className="mb-3"
        //       controlId="exampleForm.ControlTextarea1"
        //     >
        //       <Form.Label>{email}</Form.Label>
        //     </Form.Group>

        //     <Form.Group
        //       className="mb-3"
        //       controlId="exampleForm.ControlTextarea1"
        //     >
        //       <Form.Label>Phone Number</Form.Label>

        //       <Form.Control
        //         type="text"
        //         placeholder="Your Phone Number Here"
        //         onChange={(e) => {
        //           setPhoneNumber(e.target.value);
        //         }}
        //       />
        //     </Form.Group>

        //     <Button variant="primary" onClick={booked}>
        //       Confirmation
        //     </Button>
        //   </Form>
        // </div>
        <div>
          <p className="paragraph">ALL IS GOOD</p>

          <Button variant="primary" onClick={Back}>
            Back to Home Page
          </Button>
        </div>
      )}
    </>
  );
};

export default Booking;
