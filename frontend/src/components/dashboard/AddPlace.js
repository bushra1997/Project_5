import { React, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import "./dashboard.css";
export default function AddPlace() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [availability, setAvailability] = useState("");
  const [capacity, setCapacity] = useState("");
  const history = useHistory();
  const [popup2, setPopup2] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [place_id, setPlace_id] = useState("");
  const [type, setType] = useState("");

  const newPlace = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/places", {
        name,
        description,
        img,
        city,
        address,
        availability,
        capacity,
      })
      .then((result) => {
        console.log(result.data);
        setPopup2(true);
        setSmShow(true);
        setPlace_id(result.data.insertId)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const addOccasions = (e) =>{
    e.preventDefault();

  }

  const home = () => {
    history.push("/dashboard");
  };
 
  return (
    <>
    <div className="add-forms-container">
      <div className="formAddPlace">
      <Form onSubmit={newPlace}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">Place id</Form.Label>
            <Form.Control
              as="input"
              placeholder="PLace Name Here"
              value={place_id}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">Occasion Type</Form.Label>
            <Form.Control
              as="input"
              placeholder="Description Here"
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
          </Form.Group>
          <div className="click">
          <Button variant="primary"  onClick={addOccasions}>
            Add
          </Button>
        </div>
        </Form>
      </div>
      {/* ///////////////////////////////////////////////////////////////////////////////// */}
      <div className="formAddPlace">
        <Form onSubmit={newPlace}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">Place Name</Form.Label>
            <Form.Control
              as="input"
              placeholder="PLace Name Here"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Description Here"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">Img</Form.Label>
            <Form.Control
              as="input"
              placeholder="Img Here"
              onChange={(e) => {
                setImg(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">Capacity</Form.Label>
            <Form.Control
              as="input"
              placeholder="capacity here"
              onChange={(e) => {
                setCapacity(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">City</Form.Label>
            <Form.Control
              as="input"
              placeholder="City Here"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">Address</Form.Label>
            <Form.Control
              as="input"
              placeholder="address here"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">Availability</Form.Label>
            <Form.Control
              as="input"
              placeholder="Availability Here"
              onChange={(e) => {
                setAvailability(e.target.value);
              }}
            />
          </Form.Group>
          <div className="click">
          <Button variant="primary"  onClick={newPlace}>
            Submit
          </Button>
          <Button variant="primary" onClick={home}>
            Home
          </Button>
        </div>
        </Form>
      </div>
      {popup2?(<Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
      <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Place has been added
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{`Place  has been Added Succssfully`}</Modal.Body>
        </Modal>
      ):(null)}
      </div>
    </>
  );
}
