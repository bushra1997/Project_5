import axios from "axios";
import { React, useState } from "react";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
import "./dashboard.css";
export default function EditPlace() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [availability, setAvailability] = useState("");
  const [capacity, setCapacity] = useState("");
  const search = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:5000/places/${number}`)
      .then((result) => {
          console.log(result.data[0]);
        setName(result.data[0].name);
        setDescription(result.data[0].description);
        setImg(result.data[0].img);
        setCity(result.data[0].city);
        setAddress(result.data[0].address);
        setAvailability(result.data[0].availability);
        setCapacity(result.data[0].capacity);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const update = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/places/${number}`, {
        name,
        description,
        img,
        city,
        address,
        availability,
        capacity,
      })
      .then((result) => {
        console.log(name);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Delete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/places/${number}`, {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main-div">
      <div className="search">
        <Form onSubmit={search}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enter number</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="input number id"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Find
          </Button>
        </Form>
      </div>
      <div className="place-info">
        <Form onSubmit={update}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              as="textarea"
              placeholder={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Img</Form.Label>
            <Form.Control
              as="textarea"
              placeholder={img}
              onChange={(e) => {
                setImg(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>City</Form.Label>
            <Form.Control
              as="textarea"
              placeholder={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              placeholder={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Availability</Form.Label>
            <Form.Control
              as="textarea"
              placeholder={availability}
              onChange={(e) => {
                setAvailability(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Capacity</Form.Label>
            <Form.Control
              as="textarea"
              placeholder={capacity}
              onChange={(e) => {
                setCapacity(e.target.value);
              }}
            />
          </Form.Group>
      <Button variant="primary" type="submit">
        Update
      </Button>
        </Form>
      </div>

      <Button variant="primary" onClick={Delete}>
        Delete
      </Button>
    </div>
  );
}
